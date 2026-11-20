# Changed — Bundle Modifications Report (Part 029 / 133)

- **Updated at**: `2026-11-20T23:38 JST`
- **Part**: `29 / 133` (**419** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 028](part-028.md) · [Part 030 →](part-030.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/225.js` (qepqb8.0352199c → bcgkc.38229551 · continued)

- **File**: `bundles/bloxd.io/chunks/js/225.js` (938 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789)

#### 259. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L3916` → after: `L3916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R3916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L3916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L3916) · [Before (L3916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L3916)

```diff
-             if ((0, Xv.v)(zv, Tv), zv.morphTargetManager && zv.morphTargetManager.isUsingTextureForTargets && zv.morphTargetManager._bind(Tv), (this._enableVelocity || this._enableVelocityLinear) && (Tv.setMatrix("previousWorld", this._previousTransformationMatrices[Pv.uniqueId]. … [truncated]
+             if ((0, qT.q)(kT, AT), kT.morphTargetManager && kT.morphTargetManager.isUsingTextureForTargets && kT.morphTargetManager._bind(AT), (this._enableVelocity || this._enableVelocityLinear) && (AT.setMatrix("previousWorld", this._previousTransformationMatrices[cT.uniqueId]. … [truncated]
```

#### 260. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L3918-L3919` → after: `L3918-L3919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R3918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L3918-L3919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L3918-L3919) · [Before (L3918-L3919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L3918-L3919)

```diff
-               if (this.objectIdProvider) vv = (0, wz.g)(zv, this.objectIdProvider);
-               else if (vv > 16777215) throw new Error(`Invalid geometry object ID ${vv} for mesh "${zv.name}". Object IDs must be integers between 0 and 0xFFFFFF.`);
+               if (this.objectIdProvider) TT = (0, jk.i)(kT, this.objectIdProvider);
+               else if (TT > 16777215) throw new Error(`Invalid geometry object ID ${TT} for mesh "${kT.name}". Object IDs must be integers between 0 and 0xFFFFFF.`);
```

#### 261. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L3923` → after: `L3923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R3923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L3923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L3923) · [Before (L3923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L3923)

```diff
-               const vv = this.meshBlendTagProvider ? (0, wz.f)(zv, this.meshBlendTagProvider) : zv.meshBlendingTag;
+               const TT = this.meshBlendTagProvider ? (0, jk.h)(kT, this.meshBlendTagProvider) : kT.meshBlendingTag;
```

#### 262. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L3929` → after: `L3929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R3929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L3929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L3929) · [Before (L3929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L3929)

```diff
-           }(this._enableVelocity || this._enableVelocityLinear) && (this._previousTransformationMatrices[Pv.uniqueId].oT = Nv.clone(), this._previousTransformationMatrices[Pv.uniqueId].viewProjection = this._scene.getTransformMatrix().clone(), zv.skeleton && this._copyBonesTransf … [truncated]
+           }(this._enableVelocity || this._enableVelocityLinear) && (this._previousTransformationMatrices[cT.uniqueId].pA = xT.clone(), this._previousTransformationMatrices[cT.uniqueId].viewProjection = this._scene.getTransformMatrix().clone(), kT.skeleton && this._copyBonesTransf … [truncated]
```

#### 263. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L3932-L3935` → after: `L3932-L3935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R3932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L3932-L3935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L3932-L3935) · [Before (L3932-L3935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L3932-L3935)

```diff
-           if ((hv || 0 === Pv) && zv.sF)
-             for (let Sv = 0; Sv < zv.sF.length; ++Sv) {
-               const Pv = zv.sF[Sv],
-                 hv = Pv.na(),
+           if ((lT || 0 === cT) && kT.kF)
+             for (let MT = 0; MT < kT.kF.length; ++MT) {
+               const cT = kT.kF[MT],
+                 lT = cT.wv(),
```

#### 264. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L3947` → after: `L3947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R3947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L3947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L3947) · [Before (L3947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L3947)

```diff
-             this._scene.ma().bindAttachments(this._attachmentsFromPrePass)
+             this._scene.Dv().bindAttachments(this._attachmentsFromPrePass)
```

#### 265. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L3965` → after: `L3965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R3965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L3965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L3965) · [Before (L3965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L3965)

```diff
-         const vv = this._scene.ma();
+         const TT = this._scene.Dv();
```

#### 266. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L3977` → after: `L3977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R3977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L3977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L3977) · [Before (L3977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L3977)

```diff
-       throw (0, iz.m)("GeometryBufferRendererSceneComponent")
+       throw (0, Nk.i)("GeometryBufferRendererSceneComponent")
```

#### 267. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L3979` → after: `L3979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R3979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L3979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L3979) · [Before (L3979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L3979)

```diff
-     var Hz = Pv(36631);
+     var Rk = cT(36949);
```

#### 268. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L3987-L3989` → after: `L3987-L3989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R3987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L3987-L3989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L3987-L3989) · [Before (L3987-L3989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L3987-L3989)

```diff
-       if (vv instanceof Zv.j) return 2;
-       if (vv instanceof Zv.l || vv instanceof Jv.b) return 3;
-       if (vv instanceof Zv.m || vv instanceof Jv.e) return 4;
+       if (TT instanceof uT.i) return 2;
+       if (TT instanceof uT.m || TT instanceof YT.c) return 3;
+       if (TT instanceof uT.o || TT instanceof YT.g) return 4;
```

#### 269. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L3998` → after: `L3998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R3998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L3998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L3998) · [Before (L3998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L3998)

```diff
-           if (zv < hv || vv.targetUniformComponentOffset > zv - hv) return void(1 == hv ? Dv.d.Error(`Float property ${vv.name} has an offset that is too large.`) : Dv.d.Error(`Vector${hv} property ${vv.name} won't fit in Vector${zv} or has an offset that is too large.`));
+           if (kT < lT || TT.targetUniformComponentOffset > kT - lT) return void(1 == lT ? bT.e.Error(`Float property ${TT.name} has an offset that is too large.`) : bT.e.Error(`Vector${lT} property ${TT.name} won't fit in Vector${kT} or has an offset that is too large.`));
```

#### 270. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4001` → after: `L4001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4001) · [Before (L4001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4001)

```diff
-         vv.Evv(Bz._tmpArray)
+         TT.xkT(Yk._tmpArray)
```

#### 271. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4032` → after: `L4032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4032) · [Before (L4032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4032)

```diff
-     class oz extends((0, sz.b)((0, az.b)(Lv.c))) {}
+     class nk extends((0, tk.b)((0, vk.c)(dT.e))) {}
```

#### 272. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4040` → after: `L4040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4040) · [Before (L4040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4040)

```diff
-     class rz extends((0, Ev.f)(bz)) {
+     class ik extends((0, BT.g)(pk)) {
```

#### 273. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4048` → after: `L4048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4048) · [Before (L4048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4048)

```diff
-     class kz extends((0, Cz.d)(bv.d)) {}
+     class qk extends((0, hk.c)(nT.e)) {}
```

#### 274. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4259` → after: `L4259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4259) · [Before (L4259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4259)

```diff
-             return (0, nv.c)(this, zv, "f")
+             return (0, wT.b)(this, kT, "f")
```

#### 275. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4265` → after: `L4265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4265) · [Before (L4265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4265)

```diff
-             return (0, nv.c)(this, hv, "f")
+             return (0, wT.b)(this, lT, "f")
```

#### 276. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4271` → after: `L4271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4271) · [Before (L4271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4271)

```diff
-             return (0, nv.c)(this, Sv, "f")
+             return (0, wT.b)(this, MT, "f")
```

#### 277. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4277` → after: `L4277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4277) · [Before (L4277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4277)

```diff
-             return (0, nv.c)(this, gv, "f")
+             return (0, wT.b)(this, OT, "f")
```

#### 278. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4283` → after: `L4283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4283) · [Before (L4283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4283)

```diff
-             return (0, nv.c)(this, pv, "f")
+             return (0, wT.b)(this, yT, "f")
```

#### 279. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4289` → after: `L4289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4289) · [Before (L4289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4289)

```diff
-             return (0, nv.c)(this, dv, "f")
+             return (0, wT.b)(this, fT, "f")
```

#### 280. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4295` → after: `L4295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4295) · [Before (L4295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4295)

```diff
-             return (0, nv.c)(this, Nv, "f")
+             return (0, wT.b)(this, xT, "f")
```

#### 281. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4301` → after: `L4301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4301) · [Before (L4301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4301)

```diff
-             return (0, nv.c)(this, lv, "f")
+             return (0, wT.b)(this, IT, "f")
```

#### 282. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4307` → after: `L4307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4307) · [Before (L4307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4307)

```diff
-             return (0, nv.c)(this, Tv, "f")
+             return (0, wT.b)(this, AT, "f")
```

#### 283. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4313` → after: `L4313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4313) · [Before (L4313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4313)

```diff
-             return (0, nv.c)(this, Wv, "f")
+             return (0, wT.b)(this, CT, "f")
```

#### 284. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4319` → after: `L4319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4319) · [Before (L4319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4319)

```diff
-             return (0, nv.c)(this, wv, "f")
+             return (0, wT.b)(this, jT, "f")
```

#### 285. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4325` → after: `L4325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4325) · [Before (L4325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4325)

```diff
-             return (0, nv.c)(this, av, "f")
+             return (0, wT.b)(this, vT, "f")
```

#### 286. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4331` → after: `L4331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4331) · [Before (L4331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4331)

```diff
-             return (0, nv.c)(this, sv, "f")
+             return (0, wT.b)(this, tT, "f")
```

#### 287. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4337` → after: `L4337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4337) · [Before (L4337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4337)

```diff
-             return (0, nv.c)(this, Cv, "f")
+             return (0, wT.b)(this, hT, "f")
```

#### 288. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4343` → after: `L4343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4343) · [Before (L4343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4343)

```diff
-             return (0, nv.c)(this, iv, "f")
+             return (0, wT.b)(this, NT, "f")
```

#### 289. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4349` → after: `L4349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4349) · [Before (L4349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4349)

```diff
-             return (0, nv.c)(this, cv, "f")
+             return (0, wT.b)(this, QT, "f")
```

#### 290. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4355` → after: `L4355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4355) · [Before (L4355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4355)

```diff
-             return (0, nv.c)(this, Gv, "f")
+             return (0, wT.b)(this, ST, "f")
```

#### 291. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4361` → after: `L4361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4361) · [Before (L4361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4361)

```diff
-             return (0, nv.c)(this, mv, "f")
+             return (0, wT.b)(this, DT, "f")
```

#### 292. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4367` → after: `L4367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4367) · [Before (L4367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4367)

```diff
-             return (0, nv.c)(this, jv, "f")
+             return (0, wT.b)(this, aT, "f")
```

#### 293. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4373` → after: `L4373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4373) · [Before (L4373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4373)

```diff
-             return (0, nv.c)(this, fv, "f")
+             return (0, wT.b)(this, FT, "f")
```

#### 294. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4379` → after: `L4379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4379) · [Before (L4379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4379)

```diff
-             return (0, nv.c)(this, Fv, "f")
+             return (0, wT.b)(this, rT, "f")
```

#### 295. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4385` → after: `L4385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4385) · [Before (L4385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4385)

```diff
-             return (0, nv.c)(this, Yv, "f")
+             return (0, wT.b)(this, PT, "f")
```

#### 296. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4391` → after: `L4391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4391) · [Before (L4391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4391)

```diff
-             return (0, nv.c)(this, Uv, "f")
+             return (0, wT.b)(this, oT, "f")
```

#### 297. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4397` → after: `L4397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4397) · [Before (L4397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4397)

```diff
-             return (0, nv.c)(this, Rv, "f")
+             return (0, wT.b)(this, HT, "f")
```

#### 298. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4403` → after: `L4403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4403) · [Before (L4403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4403)

```diff
-             return (0, nv.c)(this, xv, "f")
+             return (0, wT.b)(this, eT, "f")
```

#### 299. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4409` → after: `L4409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4409) · [Before (L4409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4409)

```diff
-             return (0, nv.c)(this, tv, "f")
+             return (0, wT.b)(this, GT, "f")
```

#### 300. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4415` → after: `L4415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4415) · [Before (L4415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4415)

```diff
-             return (0, nv.c)(this, Qv, "f")
+             return (0, wT.b)(this, ZT, "f")
```

#### 301. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4421` → after: `L4421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4421) · [Before (L4421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4421)

```diff
-             return (0, nv.c)(this, Lv, "f")
+             return (0, wT.b)(this, dT, "f")
```

#### 302. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4427` → after: `L4427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4427) · [Before (L4427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4427)

```diff
-             return (0, nv.c)(this, Hv, "f")
+             return (0, wT.b)(this, LT, "f")
```

#### 303. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4433` → after: `L4433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4433) · [Before (L4433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4433)

```diff
-             return (0, nv.c)(this, Mv, "f")
+             return (0, wT.b)(this, RT, "f")
```

#### 304. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4439` → after: `L4439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4439) · [Before (L4439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4439)

```diff
-             return (0, nv.c)(this, yv, "f")
+             return (0, wT.b)(this, gT, "f")
```

#### 305. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4445` → after: `L4445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4445) · [Before (L4445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4445)

```diff
-             return (0, nv.c)(this, Ev, "f")
+             return (0, wT.b)(this, BT, "f")
```

#### 306. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4451` → after: `L4451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4451) · [Before (L4451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4451)

```diff
-             return (0, nv.c)(this, bv, "f")
+             return (0, wT.b)(this, nT, "f")
```

#### 307. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4457` → after: `L4457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4457) · [Before (L4457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4457)

```diff
-             return (0, nv.c)(this, uv, "f")
+             return (0, wT.b)(this, sT, "f")
```

#### 308. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4463` → after: `L4463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4463) · [Before (L4463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4463)

```diff
-             return (0, nv.c)(this, vz, "f")
+             return (0, wT.b)(this, Tk, "f")
```

#### 309. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4469` → after: `L4469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4469) · [Before (L4469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4469)

```diff
-             return (0, nv.c)(this, zz, "f")
+             return (0, wT.b)(this, kk, "f")
```

#### 310. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4475` → after: `L4475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4475) · [Before (L4475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4475)

```diff
-             return (0, nv.c)(this, Pz, "f")
+             return (0, wT.b)(this, ck, "f")
```

#### 311. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4481` → after: `L4481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4481) · [Before (L4481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4481)

```diff
-             return (0, nv.c)(this, hz, "f")
+             return (0, wT.b)(this, lk, "f")
```

#### 312. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4487` → after: `L4487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4487) · [Before (L4487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4487)

```diff
-             return (0, nv.c)(this, Sz, "f")
+             return (0, wT.b)(this, Mk, "f")
```

#### 313. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4493` → after: `L4493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4493) · [Before (L4493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4493)

```diff
-             return (0, nv.c)(this, ez, "f")
+             return (0, wT.b)(this, Kk, "f")
```

#### 314. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4499` → after: `L4499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4499) · [Before (L4499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4499)

```diff
-             return (0, nv.c)(this, gz, "f")
+             return (0, wT.b)(this, Ok, "f")
```

#### 315. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4505` → after: `L4505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4505) · [Before (L4505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4505)

```diff
-             return (0, nv.c)(this, pz, "f")
+             return (0, wT.b)(this, yk, "f")
```

#### 316. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4511` → after: `L4511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4511) · [Before (L4511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4511)

```diff
-             return (0, nv.c)(this, dz, "f")
+             return (0, wT.b)(this, fk, "f")
```

#### 317. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4517` → after: `L4517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4517) · [Before (L4517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4517)

```diff
-             return (0, nv.c)(this, Nz, "f")
+             return (0, wT.b)(this, xk, "f")
```

#### 318. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4523` → after: `L4523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4523) · [Before (L4523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4523)

```diff
-             return (0, nv.c)(this, az, "f")
+             return (0, wT.b)(this, vk, "f")
```

#### 319. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4529` → after: `L4529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4529) · [Before (L4529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4529)

```diff
-             return (0, nv.c)(this, sz, "f")
+             return (0, wT.b)(this, tk, "f")
```

#### 320. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4535` → after: `L4535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4535) · [Before (L4535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4535)

```diff
-             return (0, nv.c)(this, Cz, "f")
+             return (0, wT.b)(this, hk, "f")
```

#### 321. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4541` → after: `L4541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4541) · [Before (L4541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4541)

```diff
-             return (0, nv.c)(this, iz, "f")
+             return (0, wT.b)(this, Nk, "f")
```

#### 322. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4547` → after: `L4547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4547) · [Before (L4547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4547)

```diff
-             return (0, nv.c)(this, cz, "f")
+             return (0, wT.b)(this, Qk, "f")
```

#### 323. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4553` → after: `L4553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4553) · [Before (L4553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4553)

```diff
-             return (0, nv.c)(this, Gz, "f")
+             return (0, wT.b)(this, Sk, "f")
```

#### 324. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4559` → after: `L4559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4559) · [Before (L4559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4559)

```diff
-             return (0, nv.c)(this, mz, "f")
+             return (0, wT.b)(this, Dk, "f")
```

#### 325. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4565` → after: `L4565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4565) · [Before (L4565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4565)

```diff
-             return (0, nv.c)(this, jz, "f")
+             return (0, wT.b)(this, ak, "f")
```

#### 326. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4571` → after: `L4571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4571) · [Before (L4571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4571)

```diff
-             return (0, nv.c)(this, fz, "f")
+             return (0, wT.b)(this, Fk, "f")
```

#### 327. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4577` → after: `L4577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4577) · [Before (L4577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4577)

```diff
-             return (0, nv.c)(this, nz, "f")
+             return (0, wT.b)(this, wk, "f")
```

#### 328. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4583` → after: `L4583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4583) · [Before (L4583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4583)

```diff
-             return (0, nv.c)(this, Oz, "f")
+             return (0, wT.b)(this, mk, "f")
```

#### 329. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4589` → after: `L4589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4589) · [Before (L4589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4589)

```diff
-             return (0, nv.c)(this, Dz, "f")
+             return (0, wT.b)(this, bk, "f")
```

#### 330. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4595` → after: `L4595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4595) · [Before (L4595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4595)

```diff
-             return (0, nv.c)(this, Kz, "f")
+             return (0, wT.b)(this, zk, "f")
```

#### 331. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4604` → after: `L4604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4604) · [Before (L4604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4604)

```diff
-             this.geometryTangent = new Zv.j(Math.cos(vv), Math.sin(vv))
+             this.geometryTangent = new uT.i(Math.cos(TT), Math.sin(TT))
```

#### 332. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4607` → after: `L4607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4607) · [Before (L4607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4607)

```diff
-             return (0, nv.c)(this, Vz, "f")
+             return (0, wT.b)(this, Jk, "f")
```

#### 333. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4613` → after: `L4613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4613) · [Before (L4613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4613)

```diff
-             return (0, nv.c)(this, Uz, "f")
+             return (0, wT.b)(this, Hk, "f")
```

#### 334. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4619` → after: `L4619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4619) · [Before (L4619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4619)

```diff
-             return (0, nv.c)(this, Rz, "f")
+             return (0, wT.b)(this, ek, "f")
```

#### 335. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4628` → after: `L4628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4628) · [Before (L4628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4628)

```diff
-             this.geometryCoatTangent = new Zv.j(Math.cos(vv), Math.sin(vv))
+             this.geometryCoatTangent = new uT.i(Math.cos(TT), Math.sin(TT))
```

#### 336. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4631` → after: `L4631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4631) · [Before (L4631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4631)

```diff
-             return (0, nv.c)(this, xz, "f")
+             return (0, wT.b)(this, Gk, "f")
```

#### 337. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4637` → after: `L4637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4637) · [Before (L4637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4637)

```diff
-             return (0, nv.c)(this, tz, "f")
+             return (0, wT.b)(this, Vk, "f")
```

#### 338. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4643` → after: `L4643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4643) · [Before (L4643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4643)

```diff
-             return (0, nv.c)(this, qz, "f")
+             return (0, wT.b)(this, Ek, "f")
```

#### 339. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4649` → after: `L4649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4649) · [Before (L4649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4649)

```diff
-             return (0, nv.c)(this, Iz, "f")
+             return (0, wT.b)(this, Zk, "f")
```

#### 340. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4655` → after: `L4655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4655) · [Before (L4655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4655)

```diff
-             return (0, nv.c)(this, Qz, "f")
+             return (0, wT.b)(this, uk, "f")
```

#### 341. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4661` → after: `L4661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4661) · [Before (L4661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4661)

```diff
-             return (0, nv.c)(this, Zz, "f")
+             return (0, wT.b)(this, Xk, "f")
```

#### 342. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4667` → after: `L4667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4667) · [Before (L4667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4667)

```diff
-             return (0, nv.c)(this, Az, "f")
+             return (0, wT.b)(this, dk, "f")
```

#### 343. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4673` → after: `L4673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4673) · [Before (L4673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4673)

```diff
-             return (0, nv.c)(this, Hz, "f")
+             return (0, wT.b)(this, Rk, "f")
```

#### 344. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4679` → after: `L4679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4679) · [Before (L4679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4679)

```diff
-             return (0, nv.c)(this, yz, "f")
+             return (0, wT.b)(this, Uk, "f")
```

#### 345. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4685` → after: `L4685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4685) · [Before (L4685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4685)

```diff
-             return (0, nv.c)(this, oz, "f")
+             return (0, wT.b)(this, nk, "f")
```

#### 346. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4691` → after: `L4691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4691) · [Before (L4691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4691)

```diff
-             return (0, nv.c)(this, bz, "f")
+             return (0, wT.b)(this, pk, "f")
```

#### 347. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4697` → after: `L4697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4697) · [Before (L4697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4697)

```diff
-             return (0, nv.c)(this, Xz, "f")
+             return (0, wT.b)(this, sk, "f")
```

#### 348. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4703` → after: `L4703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4703) · [Before (L4703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4703)

```diff
-             return (0, nv.c)(this, uz, "f")
+             return (0, wT.b)(this, Tc, "f")
```

#### 349. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4709` → after: `L4709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4709) · [Before (L4709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4709)

```diff
-             return (0, nv.c)(this, vP, "f")
+             return (0, wT.b)(this, kc, "f")
```

#### 350. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4715` → after: `L4715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4715) · [Before (L4715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4715)

```diff
-             return (0, nv.c)(this, zP, "f")
+             return (0, wT.b)(this, cc, "f")
```

#### 351. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4724` → after: `L4724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4724) · [Before (L4724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4724)

```diff
-             this._sssQuality !== vv && (this._sssQuality = vv, this.xvv(1))
+             this._sssQuality !== TT && (this._sssQuality = TT, this.pTT(1))
```

#### 352. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4739` → after: `L4739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4739) · [Before (L4739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4739)

```diff
-             return (0, nv.c)(this, PP, "f")
+             return (0, wT.b)(this, lc, "f")
```

#### 353. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4745` → after: `L4745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4745) · [Before (L4745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4745)

```diff
-             return (0, nv.c)(this, hP, "f")
+             return (0, wT.b)(this, Mc, "f")
```

#### 354. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4751` → after: `L4751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4751) · [Before (L4751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4751)

```diff
-             return (0, nv.c)(this, SP, "f")
+             return (0, wT.b)(this, Kc, "f")
```

#### 355. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4757` → after: `L4757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4757) · [Before (L4757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4757)

```diff
-             return (0, nv.c)(this, eP, "f")
+             return (0, wT.b)(this, Oc, "f")
```

#### 356. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4763` → after: `L4763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4763) · [Before (L4763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4763)

```diff
-             return (0, nv.c)(this, gP, "f")
+             return (0, wT.b)(this, yc, "f")
```

#### 357. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4769` → after: `L4769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4769) · [Before (L4769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4769)

```diff
-             return (0, nv.c)(this, pP, "f")
+             return (0, wT.b)(this, fc, "f")
```

#### 358. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4775` → after: `L4775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4775) · [Before (L4775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4775)

```diff
-             return (0, nv.c)(this, dP, "f")
+             return (0, wT.b)(this, xc, "f")
```

#### 359. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4784` → after: `L4784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4784) · [Before (L4784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4784)

```diff
-             return this.transmissionWeight > 0 && this.transmissionDepth > 0 && !this.transmissionScatter.equals(Jv.b.BlackReadOnly) || this.subsurfaceWeight > 0
+             return this.transmissionWeight > 0 && this.transmissionDepth > 0 && !this.transmissionScatter.equals(YT.c.BlackReadOnly) || this.subsurfaceWeight > 0
```

#### 360. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4787` → after: `L4787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4787) · [Before (L4787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4787)

```diff
-             return this._lightFalloff === ev.b.LIGHTFALLOFF_PHYSICAL
+             return this._lightFalloff === KT.e.LIGHTFALLOFF_PHYSICAL
```

#### 361. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4790` → after: `L4790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4790) · [Before (L4790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4790)

```diff
-             vv !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = vv ? ev.b.LIGHTFALLOFF_PHYSICAL : ev.b.LIGHTFALLOFF_STANDARD)
+             TT !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = TT ? KT.e.LIGHTFALLOFF_PHYSICAL : KT.e.LIGHTFALLOFF_STANDARD)
```

#### 362. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4793` → after: `L4793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4793) · [Before (L4793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4793)

```diff
-             return this._lightFalloff === ev.b.LIGHTFALLOFF_GLTF
+             return this._lightFalloff === KT.e.LIGHTFALLOFF_GLTF
```

#### 363. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4796` → after: `L4796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4796) · [Before (L4796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4796)

```diff
-             vv !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = vv ? ev.b.LIGHTFALLOFF_GLTF : ev.b.LIGHTFALLOFF_STANDARD)
+             TT !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = TT ? KT.e.LIGHTFALLOFF_GLTF : KT.e.LIGHTFALLOFF_STANDARD)
```

#### 364. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4799` → after: `L4799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4799) · [Before (L4799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4799)

```diff
-             return (0, nv.c)(this, NP, "f")
+             return (0, wT.b)(this, Ic, "f")
```

#### 365. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4805` → after: `L4805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4805) · [Before (L4805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4805)

```diff
-             return (0, nv.c)(this, lP, "f")
+             return (0, wT.b)(this, Ac, "f")
```

#### 366. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4811` → after: `L4811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4811) · [Before (L4811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4811)

```diff
-             return (0, nv.c)(this, TP, "f")
+             return (0, wT.b)(this, Cc, "f")
```

#### 367. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4817` → after: `L4817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4817) · [Before (L4817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4817)

```diff
-             return (0, nv.c)(this, WP, "f")
+             return (0, wT.b)(this, jc, "f")
```

#### 368. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4823` → after: `L4823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4823) · [Before (L4823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4823)

```diff
-             return (0, nv.c)(this, wP, "f")
+             return (0, wT.b)(this, vc, "f")
```

#### 369. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4829` → after: `L4829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4829) · [Before (L4829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4829)

```diff
-             return (0, nv.c)(this, aP, "f")
+             return (0, wT.b)(this, tc, "f")
```

#### 370. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4835` → after: `L4835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4835) · [Before (L4835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4835)

```diff
-             return (0, nv.c)(this, sP, "f")
+             return (0, wT.b)(this, hc, "f")
```

#### 371. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4841` → after: `L4841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4841) · [Before (L4841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4841)

```diff
-             return (0, nv.c)(this, CP, "f")
+             return (0, wT.b)(this, Nc, "f")
```

#### 372. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4847` → after: `L4847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4847) · [Before (L4847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4847)

```diff
-             return (0, nv.c)(this, iP, "f")
+             return (0, wT.b)(this, Qc, "f")
```

#### 373. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4853` → after: `L4853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4853) · [Before (L4853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4853)

```diff
-             return (0, nv.c)(this, cP, "f")
+             return (0, wT.b)(this, Sc, "f")
```

#### 374. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4859` → after: `L4859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4859) · [Before (L4859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4859)

```diff
-             return (0, nv.c)(this, GP, "f")
+             return (0, wT.b)(this, Dc, "f")
```

#### 375. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4865` → after: `L4865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4865) · [Before (L4865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4865)

```diff
-             return (0, nv.c)(this, mP, "f")
+             return (0, wT.b)(this, ac, "f")
```

#### 376. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4871` → after: `L4871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4871) · [Before (L4871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4871)

```diff
-             return (0, nv.c)(this, jP, "f")
+             return (0, wT.b)(this, Fc, "f")
```

#### 377. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4877` → after: `L4877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4877) · [Before (L4877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4877)

```diff
-             return (0, nv.c)(this, fP, "f")
+             return (0, wT.b)(this, rc, "f")
```

#### 378. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4883` → after: `L4883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4883) · [Before (L4883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4883)

```diff
-             return (0, nv.c)(this, FP, "f")
+             return (0, wT.b)(this, Pc, "f")
```

#### 379. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4889` → after: `L4889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4889) · [Before (L4889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4889)

```diff
-             return (0, nv.c)(this, YP, "f")
+             return (0, wT.b)(this, wc, "f")
```

#### 380. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4895` → after: `L4895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4895) · [Before (L4895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4895)

```diff
-             return (0, nv.c)(this, nP, "f")
+             return (0, wT.b)(this, mc, "f")
```

#### 381. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4901` → after: `L4901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4901) · [Before (L4901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4901)

```diff
-             return (0, nv.c)(this, OP, "f")
+             return (0, wT.b)(this, bc, "f")
```

#### 382. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4907` → after: `L4907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4907) · [Before (L4907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4907)

```diff
-             return (0, nv.c)(this, DP, "f")
+             return (0, wT.b)(this, zc, "f")
```

#### 383. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4922` → after: `L4922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4922) · [Before (L4922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4922)

```diff
-             this._refractionHighQualityBlur !== vv && (this._refractionHighQualityBlur = vv, this.xvv(1))
+             this._refractionHighQualityBlur !== TT && (this._refractionHighQualityBlur = TT, this.pTT(1))
```

#### 384. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4928` → after: `L4928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4928) · [Before (L4928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4928)

```diff
-             this._realTimeFiltering = vv, this.xvv(1)
+             this._realTimeFiltering = TT, this.pTT(1)
```

#### 385. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4934` → after: `L4934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4934) · [Before (L4934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4934)

```diff
-             this._realTimeFilteringQuality = vv, this.xvv(1)
+             this._realTimeFilteringQuality = TT, this.pTT(1)
```

#### 386. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4940` → after: `L4940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4940) · [Before (L4940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4940)

```diff
-             this._fuzzSampleNumber = vv, this.xvv(1)
+             this._fuzzSampleNumber = TT, this.pTT(1)
```

#### 387. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4946` → after: `L4946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4946) · [Before (L4946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4946)

```diff
-             return (0, nv.c)(this, KP, "f")
+             return (0, wT.b)(this, Jc, "f")
```

#### 388. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4952-L4954` → after: `L4952-L4954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4952-L4954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4952-L4954) · [Before (L4952-L4954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4952-L4954)

```diff
-             super(Pv, Ov, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || vv.ForceGLSL), zv.set(this, ((0, nv.f)(this, RS), (0, nv.f)(this, xS, void 0))), this._baseWeight = ((0, nv.f)(this, tS), new Jz("base_weight", 1, "vBaseWeight", 1)), hv.set(this, … [truncated]
-               vv._noiseTextures[this.rD().uniqueId]?.dispose(), delete vv._noiseTextures[this.rD().uniqueId]
-             }))), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), rv.e.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget && this._renderTargets.push(this._radianceTexture),  … [truncated]
+             super(cT, mT, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || TT.ForceGLSL), kT.set(this, ((0, wT.h)(this, eM), (0, wT.h)(this, GM, void 0))), this._baseWeight = ((0, wT.h)(this, VM), new Bk("base_weight", 1, "vBaseWeight", 1)), lT.set(this, … [truncated]
+               TT._noiseTextures[this.NJ().uniqueId]?.dispose(), delete TT._noiseTextures[this.NJ().uniqueId]
+             }))), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), pT.b.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget && this._renderTargets.push(this._radianceTexture),  … [truncated]
```

#### 389. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4962` → after: `L4962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4962) · [Before (L4962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4962)

```diff
-               Pv ? Pv.numComponents !== zv.targetUniformComponentNum ? Dv.d.Error(`Uniform ${zv.targetUniformName} already exists of size ${Pv.numComponents}, but trying to set it to ${zv.targetUniformComponentNum}.`) : Pv.requiredDefine !== zv.requiredDefine && (Pv.requiredDefin … [truncated]
+               cT ? cT.numComponents !== kT.targetUniformComponentNum ? bT.e.Error(`Uniform ${kT.targetUniformName} already exists of size ${cT.numComponents}, but trying to set it to ${kT.targetUniformComponentNum}.`) : cT.requiredDefine !== kT.requiredDefine && (cT.requiredDefin … [truncated]
```

#### 390. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4984` → after: `L4984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4984) · [Before (L4984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4984)

```diff
-             return !!(rv.e.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget) || (!!(rv.e.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextur … [truncated]
+             return !!(pT.b.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget) || (!!(pT.b.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextur … [truncated]
```

#### 391. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4999` → after: `L4999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L4999) · [Before (L4999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L4999)

```diff
-             return this._hasAlphaChannel() && this._transparencyMode !== ev.b.MATERIAL_OPAQUE && !this.geometryOpacityTexture
+             return this._hasAlphaChannel() && this._transparencyMode !== KT.e.MATERIAL_OPAQUE && !this.geometryOpacityTexture
```

#### 392. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L5013` → after: `L5013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R5013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L5013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L5013) · [Before (L5013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L5013)

```diff
-             const Sv = Fz.c.Clone((() => new vv(zv, this.rD())), this, {
+             const MT = rk.d.Clone((() => new TT(kT, this.NJ())), this, {
```

#### 393. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L5023-L5024` → after: `L5023-L5024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R5023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L5023-L5024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L5023-L5024) · [Before (L5023-L5024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L5023-L5024)

```diff
-             const Sv = Fz.c.Parse((() => new vv(zv.name, Pv)), zv, Pv, hv);
-             return zv.stencil && Sv.stencil.parse(zv.stencil, Pv, hv), ev.b._ParsePlugins(zv, Sv, Pv, hv), Sv
+             const MT = rk.d.Parse((() => new TT(kT.name, cT)), kT, cT, lT);
+             return kT.stencil && MT.stencil.parse(kT.stencil, cT, lT), KT.e._ParsePlugins(kT, MT, cT, lT), MT
```

#### 394. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L5055-L5056` → after: `L5055-L5056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R5055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L5055-L5056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L5055-L5056) · [Before (L5055-L5056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L5055-L5056)

```diff
-             const gv = this.rD(),
-               pv = gv.ma();
+             const OT = this.NJ(),
+               yT = OT.Dv();
```

#### 395. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L5063` → after: `L5063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R5063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L5063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L5063) · [Before (L5063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L5063)

```diff
-               if (zv && rv.e.ReflectionTextureEnabled) {
+               if (kT && pT.b.ReflectionTextureEnabled) {
```

#### 396. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L5069-L5071` → after: `L5069-L5071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R5069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L5069-L5071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L5069-L5071) · [Before (L5069-L5071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L5069-L5071)

```diff
-               if (this._environmentBRDFTexture && rv.e.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1;
-               if (this._environmentFuzzBRDFTexture && rv.e.ReflectionTextureEnabled && !this._environmentFuzzBRDFTexture.isReady()) return !1;
-               if (this._backgroundRefractionTexture && rv.e.RefractionTextureEnabled && !this._backgroundRefractionTexture.isReadyOrNotBlocking()) return !1;
+               if (this._environmentBRDFTexture && pT.b.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1;
+               if (this._environmentFuzzBRDFTexture && pT.b.ReflectionTextureEnabled && !this._environmentFuzzBRDFTexture.isReady()) return !1;
+               if (this._backgroundRefractionTexture && pT.b.RefractionTextureEnabled && !this._backgroundRefractionTexture.isReadyOrNotBlocking()) return !1;
```

#### 397. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L5083` → after: `L5083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R5083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L5083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L5083) · [Before (L5083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L5083)

```diff
-             if (pv.getCaps().standardDerivatives || zv.isVerticesDataPresent(Av.k.NormalKind) || (zv.createNormals(!0), Dv.d.Warn("OpenPBRMaterial: Normals have been created for the mesh: " + zv.name)), !(0, Xv.d)(gv, zv, this._maxSimultaneousLights, this._disableLighting)) retur … [truncated]
+             if (yT.getCaps().standardDerivatives || kT.isVerticesDataPresent(XT.l.NormalKind) || (kT.createNormals(!0), bT.e.Warn("OpenPBRMaterial: Normals have been created for the mesh: " + kT.name)), !(0, qT.d)(OT, kT, this._maxSimultaneousLights, this._disableLighting)) retur … [truncated]
```

#### 398. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L5105-L5106` → after: `L5105-L5106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R5105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L5105-L5106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L5105-L5106) · [Before (L5105-L5106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L5105-L5106)

```diff
-               hv.getRenderingMesh().getWorldMatrix().decompose(Zv.i.fa[0]);
-               const zv = Math.max(Math.abs(Zv.i.fa[0].x), Math.abs(Zv.i.fa[0].y), Math.abs(Zv.i.fa[0].z));
+               lT.getRenderingMesh().getWorldMatrix().decompose(uT.h.Fv[0]);
+               const kT = Math.max(Math.abs(uT.h.Fv[0].x), Math.abs(uT.h.Fv[0].y), Math.abs(uT.h.Fv[0].z));
```

#### 399. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L5111` → after: `L5111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R5111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L5111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L5111) · [Before (L5111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L5111)

```diff
-             const Sv = this.rD(),
+             const MT = this.NJ(),
```

#### 400. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L5117` → after: `L5117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R5117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L5117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L5117) · [Before (L5117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L5117)

```diff
-             const pv = Sv.ma();
+             const yT = MT.Dv();
```

#### 401. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L5125` → after: `L5125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R5125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L5125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L5125) · [Before (L5125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L5125)

```diff
-             (0, Xv.e)(Pv, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, Tz.d)(this._activeEffect, this._vertexPullingMetadata);
+             (0, qT.e)(cT, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, Ak.c)(this._activeEffect, this._vertexPullingMetadata);
```

#### 402. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L5134-L5135` → after: `L5134-L5135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R5134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L5134-L5135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L5134-L5135) · [Before (L5134-L5135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L5134-L5135)

```diff
-                     zv.value && (Wv.updateFloat2(zv.samplerInfoName, zv.value.coordinatesIndex, zv.value.level), (0, Xv.A)(zv.value, Wv, zv.samplerPrefix))
-                   }(this.geometryNormalTexture || this.geometryCoatNormalTexture) && (Sv._mirroredCameraPosition ? Wv.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : Wv.updateFloat2("vTangentSpaceParams", this._invertNormalM … [truncated]
+                     kT.value && (CT.updateFloat2(kT.samplerInfoName, kT.value.coordinatesIndex, kT.value.level), (0, qT.v)(kT.value, CT, kT.samplerPrefix))
+                   }(this.geometryNormalTexture || this.geometryCoatNormalTexture) && (MT._mirroredCameraPosition ? CT.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : CT.updateFloat2("vTangentSpaceParams", this._invertNormalM … [truncated]
```

#### 403. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L5141` → after: `L5141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R5141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L5141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L5141) · [Before (L5141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L5141)

```diff
-                   (void 0 === Pv.requiredDefine || ev[Pv.requiredDefine]) && (4 === Pv.numComponents ? (Pv.populateVectorFromLinkedProperties(Zv.i.Vector4[0]), Wv.updateVector4(Pv.name, Zv.i.Vector4[0])) : 3 === Pv.numComponents ? (Pv.populateVectorFromLinkedProperties(Zv.i.fa[0] … [truncated]
+                   (void 0 === cT.requiredDefine || KT[cT.requiredDefine]) && (4 === cT.numComponents ? (cT.populateVectorFromLinkedProperties(uT.h.Vector4[0]), CT.updateVector4(cT.name, uT.h.Vector4[0])) : 3 === cT.numComponents ? (cT.populateVectorFromLinkedProperties(uT.h.Fv[0] … [truncated]
```

#### 404. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L5150` → after: `L5150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R5150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L5150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L5150) · [Before (L5150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L5150)

```diff
-                 if ((0, Xv.n)(Sv, ev, Wv, zv, this.realTimeFiltering), ev.ENVIRONMENTBRDF && Wv.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), ev.FUZZENVIRONMENTBRDF && Wv.setTexture("environmentFuzzBrdfSampler", this._environmentFuzzBRDFTexture), ev.REFRACTE … [truncated]
+                 if ((0, qT.l)(MT, KT, CT, kT, this.realTimeFiltering), KT.ENVIRONMENTBRDF && CT.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), KT.FUZZENVIRONMENTBRDF && CT.setTexture("environmentFuzzBrdfSampler", this._environmentFuzzBRDFTexture), KT.REFRACTE … [truncated]
```

#### 405. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L5156` → after: `L5156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R5156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L5156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L5156) · [Before (L5156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L5156)

```diff
-               this.rD().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(Pv) && this.rD().depthPeelingRenderer.bind(gv), this._eventInfo.subMesh = hv, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, lz.e)(this._activeEffect, this, Sv), this.bindEyePo … [truncated]
+               this.NJ().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(cT) && this.NJ().depthPeelingRenderer.bind(OT), this._eventInfo.subMesh = lT, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, Ik.g)(this._activeEffect, this, MT), this.bindEyePo … [truncated]
```

#### 406. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L5158` → after: `L5158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R5158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L5158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L5158) · [Before (L5158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L5158)

```diff
-             this.bindPropertiesForSubMesh(this._uniformBuffer, Sv, Sv.ma(), hv), !lv && this.isFrozen && !Tv || !Sv.lightsEnabled || this._disableLighting || (0, Xv.r)(Sv, Pv, this._activeEffect, ev, this._maxSimultaneousLights), !lv && this.isFrozen || (this.bindView(gv), (0, Xv … [truncated]
+             this.bindPropertiesForSubMesh(this._uniformBuffer, MT, MT.Dv(), lT), !IT && this.isFrozen && !AT || !MT.lightsEnabled || this._disableLighting || (0, qT.m)(MT, cT, this._activeEffect, KT, this._maxSimultaneousLights), !IT && this.isFrozen || (this.bindView(OT), (0, qT … [truncated]
```

#### 407. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L5188` → after: `L5188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R5188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L5188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L5188) · [Before (L5188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L5188)

```diff
-               this._environmentBRDFTexture && this.rD().openPBREnvironmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._environmentFuzzBRDFTexture && this.rD().environmentFuzzBRDFTexture !== this._environmentFuzzBRDFTexture && this. … [truncated]
+               this._environmentBRDFTexture && this.NJ().openPBREnvironmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._environmentFuzzBRDFTexture && this.NJ().environmentFuzzBRDFTexture !== this._environmentFuzzBRDFTexture && this. … [truncated]
```

#### 408. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L5198` → after: `L5198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R5198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L5198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L5198) · [Before (L5198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L5198)

```diff
-             return this._radianceTexture ? this._radianceTexture : this.rD().environmentTexture
+             return this._radianceTexture ? this._radianceTexture : this.NJ().environmentTexture
```

#### 409. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L5207` → after: `L5207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R5207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L5207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L5207) · [Before (L5207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L5207)

```diff
-             const dv = this.rD().ma(),
+             const fT = this.NJ().Dv(),
```

#### 410. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L5210-L5214` → after: `L5210-L5214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R5210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L5210-L5214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L5210-L5214) · [Before (L5210-L5214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L5210-L5214)

```diff
-             hv.USESPHERICALINVERTEX && Nv.addFallback(lv++, "USESPHERICALINVERTEX"), hv.FOG && Nv.addFallback(lv, "FOG"), hv.SPECULARAA && Nv.addFallback(lv, "SPECULARAA"), hv.POINTSIZE && Nv.addFallback(lv, "POINTSIZE"), hv.LOGARITHMICDEPTH && Nv.addFallback(lv, "LOGARITHMICDEPT … [truncated]
-             const Tv = [Av.k.PositionKind];
-             hv.NORMAL && Tv.push(Av.k.NormalKind), hv.TANGENT && Tv.push(Av.k.TangentKind);
-             for (let vv = 1; vv <= 6; ++vv) hv["UV" + vv] && Tv.push(`uv${1===vv?"":vv}`);
-             hv.VERTEXCOLOR && Tv.push(Av.k.ColorKind), (0, Xv.G)(Tv, zv, hv, Nv), (0, Xv.J)(Tv, hv), (0, Xv.L)(Tv, zv, hv), (0, Xv.F)(Tv, zv, hv);
+             lT.USESPHERICALINVERTEX && xT.addFallback(IT++, "USESPHERICALINVERTEX"), lT.FOG && xT.addFallback(IT, "FOG"), lT.SPECULARAA && xT.addFallback(IT, "SPECULARAA"), lT.POINTSIZE && xT.addFallback(IT, "POINTSIZE"), lT.LOGARITHMICDEPTH && xT.addFallback(IT, "LOGARITHMICDEPT … [truncated]
+             const AT = [XT.l.PositionKind];
+             lT.NORMAL && AT.push(XT.l.NormalKind), lT.TANGENT && AT.push(XT.l.TangentKind);
+             for (let TT = 1; TT <= 6; ++TT) lT["UV" + TT] && AT.push(`uv${1===TT?"":TT}`);
+             lT.VERTEXCOLOR && AT.push(XT.l.ColorKind), (0, qT.F)(AT, kT, lT, xT), (0, qT.G)(AT, lT), (0, qT.I)(AT, kT, lT), (0, qT.D)(AT, kT, lT);
```

#### 411. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L5223` → after: `L5223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R5223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L5223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L5223) · [Before (L5223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L5223)

```diff
-             }(0, Xv.kb)(wv, av, !0);
+             }(0, qT.nb)(jT, vT, !0);
```

#### 412. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L5229` → after: `L5229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R5229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L5229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L5229) · [Before (L5229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L5229)

```diff
-             if (this._eventInfo.fallbacks = Nv, this._eventInfo.fallbackRank = lv, this._eventInfo.defines = hv, this._eventInfo.uniforms = wv, this._eventInfo.attributes = Tv, this._eventInfo.samplers = av, this._eventInfo.uniformBuffersNames = sv, this._eventInfo.customCode = v … [truncated]
+             if (this._eventInfo.fallbacks = xT, this._eventInfo.fallbackRank = IT, this._eventInfo.defines = lT, this._eventInfo.uniforms = jT, this._eventInfo.attributes = AT, this._eventInfo.samplers = vT, this._eventInfo.uniformBuffersNames = tT, this._eventInfo.customCode = v … [truncated]
```

#### 413. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L5231-L5232` → after: `L5231-L5232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R5231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L5231-L5232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L5231-L5232) · [Before (L5231-L5232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L5231-L5232)

```diff
-               vv && (this._vertexPullingMetadata = (0, Tz.e)(vv), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((vv, zv) => {
-                 wv.push(`vp_${zv}_info`)
+               TT && (this._vertexPullingMetadata = (0, Ak.f)(TT), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((TT, kT) => {
+                 jT.push(`vp_${kT}_info`)
```

#### 414. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L5235` → after: `L5235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R5235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L5235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L5235) · [Before (L5235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L5235)

```diff
-             ov.b && (ov.b.PrepareUniforms(wv, hv), ov.b.PrepareSamplers(av, hv)), (0, Xv.lb)({
+             WT.c && (WT.c.PrepareUniforms(jT, lT), WT.c.PrepareSamplers(vT, lT)), (0, qT.qb)({
```

#### 415. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L5268-L5272` → after: `L5268-L5272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R5268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L5268-L5272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L5268-L5272) · [Before (L5268-L5272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L5268-L5272)

```diff
-               dv = this.rD(),
-               Nv = dv.ma();
-             (0, Xv.W)(dv, zv, hv, !0, this._maxSimultaneousLights, this._disableLighting), hv._needNormals = !0, (0, Xv.cb)(dv, hv);
-             const lv = this.needAlphaBlendingForMesh(zv) && this.rD().useOrderIndependentTransparency;
-             if ((0, Xv.ib)(dv, hv, this.canRenderToMRT && !lv), (0, Xv.eb)(dv, hv, lv), wz.d.PrepareDefines(Nv.currentRenderPassId, zv, hv), hv._areTexturesDirty) {
+               fT = this.NJ(),
+               xT = fT.Dv();
+             (0, qT.U)(fT, kT, lT, !0, this._maxSimultaneousLights, this._disableLighting), lT._needNormals = !0, (0, qT._)(fT, lT);
+             const IT = this.needAlphaBlendingForMesh(kT) && this.NJ().useOrderIndependentTransparency;
+             if ((0, qT.fb)(fT, lT, this.canRenderToMRT && !IT), (0, qT.bb)(fT, lT, IT), jk.d.PrepareDefines(xT.currentRenderPassId, kT, lT), lT._areTexturesDirty) {
```

#### 416. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L5278` → after: `L5278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R5278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L5278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L5278) · [Before (L5278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L5278)

```diff
-                   vv.value ? ((0, Xv._)(vv.value, hv, vv.textureDefine), hv[vv.textureDefine + "_GAMMA"] = vv.value.gammaSpace) : hv[vv.textureDefine] = !1
+                   TT.value ? ((0, qT.V)(TT.value, lT, TT.textureDefine), lT[TT.textureDefine + "_GAMMA"] = TT.value.gammaSpace) : lT[TT.textureDefine] = !1
```

#### 417. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L5282-L5283` → after: `L5282-L5283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R5282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L5282-L5283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L5282-L5283) · [Before (L5282-L5283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L5282-L5283)

```diff
-                 if ((0, Xv.T)(dv, vv, hv, this.realTimeFiltering, this.realTimeFilteringQuality, !zv), this._baseMetalnessTexture && (hv.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed), hv.SPECULAR_WEIGHT_IN_ALPHA = this._useSpecularWeightFromAlpha, hv.SPE … [truncated]
-                   hv.REFRACTED_BACKGROUND = !!this._backgroundRefractionTexture && rv.e.RefractionTextureEnabled, hv.REFRACTION_HIGH_QUALITY_BLUR = this._refractionHighQualityBlur, hv.REFRACTED_LIGHTS = !0;
+                 if ((0, qT.Q)(fT, TT, lT, this.realTimeFiltering, this.realTimeFilteringQuality, !kT), this._baseMetalnessTexture && (lT.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed), lT.SPECULAR_WEIGHT_IN_ALPHA = this._useSpecularWeightFromAlpha, lT.SPE … [truncated]
+                   lT.REFRACTED_BACKGROUND = !!this._backgroundRefractionTexture && pT.b.RefractionTextureEnabled, lT.REFRACTION_HIGH_QUALITY_BLUR = this._refractionHighQualityBlur, lT.REFRACTED_LIGHTS = !0;
```

#### 418. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L5285` → after: `L5285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R5285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L5285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L5285) · [Before (L5285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L5285)

```diff
-                   vv ? (hv.REFRACTED_ENVIRONMENT = rv.e.RefractionTextureEnabled, hv.REFRACTED_ENVIRONMENT_OPPOSITEZ = this.rD().useRightHandedSystem ? !vv.invertZ : vv.invertZ, hv.REFRACTED_ENVIRONMENT_LOCAL_CUBE = vv.isCube && vv.boundingBoxSize) : hv.REFRACTED_ENVIRONMENT = !1
+                   TT ? (lT.REFRACTED_ENVIRONMENT = pT.b.RefractionTextureEnabled, lT.REFRACTED_ENVIRONMENT_OPPOSITEZ = this.NJ().useRightHandedSystem ? !TT.invertZ : TT.invertZ, lT.REFRACTED_ENVIRONMENT_LOCAL_CUBE = TT.isCube && TT.boundingBoxSize) : lT.REFRACTED_ENVIRONMENT = !1
```

#### 419. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L5289-L5290` → after: `L5289-L5290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R5289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L5289-L5290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L5289-L5290) · [Before (L5289-L5290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L5289-L5290)

```diff
-               this._lightFalloff === ev.b.LIGHTFALLOFF_STANDARD ? (hv.USEPHYSICALLIGHTFALLOFF = !1, hv.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === ev.b.LIGHTFALLOFF_GLTF ? (hv.USEPHYSICALLIGHTFALLOFF = !1, hv.USEGLTFLIGHTFALLOFF = !0) : (hv.USEPHYSICALLIGHTFALLOFF = !0, hv … [truncated]
-             }(hv._areTexturesDirty || hv._areMiscDirty) && (hv.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, hv.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, hv.ALPHABLEND = this.needAlphaBlendingForMesh(zv)), hv._areTexturesDirty && … [truncated]
+               this._lightFalloff === KT.e.LIGHTFALLOFF_STANDARD ? (lT.USEPHYSICALLIGHTFALLOFF = !1, lT.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === KT.e.LIGHTFALLOFF_GLTF ? (lT.USEPHYSICALLIGHTFALLOFF = !1, lT.USEGLTFLIGHTFALLOFF = !0) : (lT.USEPHYSICALLIGHTFALLOFF = !0, lT … [truncated]
+             }(lT._areTexturesDirty || lT._areMiscDirty) && (lT.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, lT.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, lT.ALPHABLEND = this.needAlphaBlendingForMesh(kT)), lT._areTexturesDirty && … [truncated]
```

#### 420. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L5303` → after: `L5303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R5303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L5303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L5303) · [Before (L5303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L5303)

```diff
-             hv.FUZZ = this.fuzzWeight > 0 && rv.e.ReflectionTextureEnabled, hv.GEOMETRY_THIN_WALLED = 0 != this.geometryThinWalled, hv.FUZZ ? (zv.isVerticesDataPresent(Av.k.TangentKind) || (hv._needUVs = !0, hv.MAINUV1 = !0), this._environmentFuzzBRDFTexture = qv(this.rD()), hv.F … [truncated]
+             lT.FUZZ = this.fuzzWeight > 0 && pT.b.ReflectionTextureEnabled, lT.GEOMETRY_THIN_WALLED = 0 != this.geometryThinWalled, lT.FUZZ ? (kT.isVerticesDataPresent(XT.l.TangentKind) || (lT._needUVs = !0, lT.MAINUV1 = !0), this._environmentFuzzBRDFTexture = VT(this.NJ()), lT.F … [truncated]
```

#### 421. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L5307` → after: `L5307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R5307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L5307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L5307) · [Before (L5307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L5307)

```diff
-           VP = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], UP = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], RP = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], xP = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")], tP = [(0, Ov.c)("_markAllSubMeshesAsTexturesDirty")],  … [truncated]
+           oc = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], Hc = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], ec = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], Gc = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], Vc = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")],  … [truncated]
```

#### 422. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L6669` → after: `L6669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R6669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L6669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L6669) · [Before (L6669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L6669)

```diff
-         })(), vv.SSS_QUALITY_LOW = 0, vv.SSS_QUALITY_MEDIUM = 1, vv.SSS_QUALITY_HIGH = 2, vv._noiseTextures = {}, vv.ForceGLSL = !1, vv._ShaderLoader = new Wz.e((() => [Promise.all([Pv.e(308), Pv.e(374)]).then((() => Pv(61171))), Promise.all([Pv.e(313), Pv.e(309), Pv.e(373), Pv.e … [truncated]
+         })(), TT.SSS_QUALITY_LOW = 0, TT.SSS_QUALITY_MEDIUM = 1, TT.SSS_QUALITY_HIGH = 2, TT._noiseTextures = {}, TT.ForceGLSL = !1, TT._ShaderLoader = new Ck.e((() => [Promise.all([cT.e(308), cT.e(374)]).then((() => cT(61132))), Promise.all([cT.e(313), cT.e(309), cT.e(373), cT.e … [truncated]
```

#### 423. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L6672-L6673` → after: `L6672-L6673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R6672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L6672-L6673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L6672-L6673) · [Before (L6672-L6673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L6672-L6673)

```diff
-     uz || (uz = !0, (0, ov.f)(), (0, Hz.c)("BABYLON.OpenPBRMaterial", Xz));
-     var vP = Pv(36618);
+     Tc || (Tc = !0, (0, WT.g)(), (0, Rk.g)("BABYLON.OpenPBRMaterial", sk));
+     var kc = cT(36932);
```

#### 424. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L6676` → after: `L6676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R6676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L6676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L6676) · [Before (L6676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L6676)

```diff
-         this.name = tz.d.NAME_PROCEDURALTEXTURE, this.Is = vv
+         this.name = Vk.e.NAME_PROCEDURALTEXTURE, this.et = TT
```

#### 425. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L6679` → after: `L6679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R6679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L6679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L6679) · [Before (L6679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L6679)

```diff
-         this.Is._beforeClearStage.registerStep(tz.d.STEP_BEFORECLEAR_PROCEDURALTEXTURE, this, this._beforeClear)
+         this.et._beforeClearStage.registerStep(Vk.e.STEP_BEFORECLEAR_PROCEDURALTEXTURE, this, this._beforeClear)
```

#### 426. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L6684-L6687` → after: `L6684-L6687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R6684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L6684-L6687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L6684-L6687) · [Before (L6684-L6687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L6684-L6687)

```diff
-         if (this.Is.proceduralTexturesEnabled) {
-           Yz.h.StartPerformanceCounter("Procedural textures", this.Is.proceduralTextures.length > 0);
-           for (let vv = 0; vv < this.Is.proceduralTextures.length; vv++) {
-             const zv = this.Is.proceduralTextures[vv];
+         if (this.et.proceduralTexturesEnabled) {
+           Pk.h.StartPerformanceCounter("Procedural textures", this.et.proceduralTextures.length > 0);
+           for (let TT = 0; TT < this.et.proceduralTextures.length; TT++) {
+             const kT = this.et.proceduralTextures[TT];
```

#### 427. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L6690` → after: `L6690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R6690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L6690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L6690) · [Before (L6690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L6690)

```diff
-           Yz.h.EndPerformanceCounter("Procedural textures", this.Is.proceduralTextures.length > 0)
+           Pk.h.EndPerformanceCounter("Procedural textures", this.et.proceduralTextures.length > 0)
```

#### 428. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L6694` → after: `L6694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R6694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L6694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L6694) · [Before (L6694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L6694)

```diff
-     var PP = Pv(39621);
+     var lc = cT(39936);
```

#### 429. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L6697` → after: `L6697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R6697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L6697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L6697) · [Before (L6697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L6697)

```diff
-       let zv, hv, Sv, gv, pv, dv = Vv.e,
+       let kT, lT, MT, OT, yT, fT = JT.f,
```

#### 430. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L6716-L6718` → after: `L6716-L6718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R6716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L6716-L6718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L6716-L6718) · [Before (L6716-L6718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L6716-L6718)

```diff
-           super(null, hv, !ev), this.isEnabled = ((0, nv.f)(this, Nv), (0, nv.f)(this, lv, !0)), this.autoClear = ((0, nv.f)(this, Tv), (0, nv.f)(this, Wv, !0)), this.onGenerated = (0, nv.f)(this, wv), this.onGeneratedObservable = new vP.c, this.onBeforeGenerationObservable = new … [truncated]
-           let dv = (hv = this.rD() || sv.e.LastCreatedScene)._getComponent(tz.d.NAME_PROCEDURALTEXTURE);
-           dv || (dv = new zP(hv), hv.Ezv(dv)), this._options.skipSceneRegistration || hv.proceduralTextures.push(this), this._fullEngine = hv.ma(), this.name = vv, this.isRenderTarget = !0, this._size = zv, this._textureType = pv, this._generateMipMaps = ev, this._drawWrapper = n … [truncated]
+           super(null, lT, !KT), this.isEnabled = ((0, wT.h)(this, xT), (0, wT.h)(this, IT, !0)), this.autoClear = ((0, wT.h)(this, AT), (0, wT.h)(this, CT, !0)), this.onGenerated = (0, wT.h)(this, jT), this.onGeneratedObservable = new kc.b, this.onBeforeGenerationObservable = new … [truncated]
+           let fT = (lT = this.NJ() || tT.d.LastCreatedScene)._getComponent(Vk.e.NAME_PROCEDURALTEXTURE);
+           fT || (fT = new cc(lT), lT.ycT(fT)), this._options.skipSceneRegistration || lT.proceduralTextures.push(this), this._fullEngine = lT.Dv(), this.name = TT, this.isRenderTarget = !0, this._size = kT, this._textureType = yT, this._generateMipMaps = KT, this._drawWrapper = n … [truncated]
```

#### 431. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L6722` → after: `L6722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R6722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L6722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L6722) · [Before (L6722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L6722)

```diff
-           mv.push(1, 1), mv.push(-1, 1), mv.push(-1, -1), mv.push(1, -1), this._vertexBuffers[Av.k.PositionKind] = new Av.k(this._fullEngine, mv, Av.k.PositionKind, !1, !1, 2), this._createIndexBuffer()
+           DT.push(1, 1), DT.push(-1, 1), DT.push(-1, -1), DT.push(1, -1), this._vertexBuffers[XT.l.PositionKind] = new XT.l(this._fullEngine, DT, XT.l.PositionKind, !1, !1, 2), this._createIndexBuffer()
```

#### 432. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L6756-L6757` → after: `L6756-L6757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R6756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L6756-L6757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L6756-L6757) · [Before (L6756-L6757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L6756-L6757)

```diff
-           const vv = this._vertexBuffers[Av.k.PositionKind];
-           vv && vv._rebuild(), this._createIndexBuffer(), this.refreshRate === nz.e.REFRESHRATE_RENDER_ONCE && (this.refreshRate = nz.e.REFRESHRATE_RENDER_ONCE)
+           const TT = this._vertexBuffers[XT.l.PositionKind];
+           TT && TT._rebuild(), this._createIndexBuffer(), this.refreshRate === wk.c.REFRESHRATE_RENDER_ONCE && (this.refreshRate = wk.c.REFRESHRATE_RENDER_ONCE)
```

#### 433. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L6786` → after: `L6786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R6786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L6786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L6786) · [Before (L6786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L6786)

```diff
-           return this._cachedDefines !== zv && (this._cachedDefines = zv, this._drawWrapper.effect = vv.createEffect(hv, [Av.k.PositionKind], this._uniforms, this._samplers, zv, void 0, void 0, (() => {
+           return this._cachedDefines !== kT && (this._cachedDefines = kT, this._drawWrapper.effect = TT.createEffect(lT, [XT.l.PositionKind], this._uniforms, this._samplers, kT, void 0, void 0, (() => {
```

#### 434. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L6789` → after: `L6789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R6789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L6789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L6789) · [Before (L6789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L6789)

```diff
-             this._options.extraInitializationsAsync ? 1 === this.shaderLanguage ? await Promise.all([Pv.e(382).then((() => Pv(61291))), this._options.extraInitializationsAsync()]) : await Promise.all([Pv.e(383).then((() => Pv(61295))), this._options.extraInitializationsAsync()])  … [truncated]
+             this._options.extraInitializationsAsync ? 1 === this.shaderLanguage ? await Promise.all([cT.e(382).then((() => cT(61264))), this._options.extraInitializationsAsync()]) : await Promise.all([cT.e(383).then((() => cT(61272))), this._options.extraInitializationsAsync()])  … [truncated]
```

#### 435. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L6851` → after: `L6851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R6851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L6851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L6851) · [Before (L6851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L6851)

```diff
-           const zv = this.rD();
+           const kT = this.NJ();
```

#### 436. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L6873` → after: `L6873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R6873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L6873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L6873) · [Before (L6873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L6873)

```diff
-             for (let Sv = 0; Sv < 6; Sv++) Pv.bindFramebuffer(this._rtWrapper, Sv, void 0, void 0, !0), Pv.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._drawWrapper.effect.setFloat("face", Sv), this.autoClear && Pv.clear(zv.clearColor, !0, ! … [truncated]
+             for (let MT = 0; MT < 6; MT++) cT.bindFramebuffer(this._rtWrapper, MT, void 0, void 0, !0), cT.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._drawWrapper.effect.setFloat("face", MT), this.autoClear && cT.clear(kT.clearColor, !0, ! … [truncated]
```

#### 437. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L6882` → after: `L6882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R6882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L6882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L6882) · [Before (L6882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L6882)

```diff
-               this.autoClear && Pv.clear(zv.clearColor, !0, !1, !1), Pv.drawElementsType(ev.b.TriangleFillMode, 0, 6), Pv.unBindFramebuffer(this._rtWrapper, !this._generateMipMaps)
+               this.autoClear && cT.clear(kT.clearColor, !0, !1, !1), cT.drawElementsType(KT.e.TriangleFillMode, 0, 6), cT.unBindFramebuffer(this._rtWrapper, !this._generateMipMaps)
```

#### 438. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L6889` → after: `L6889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R6889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L6889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L6889) · [Before (L6889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L6889)

```diff
-             Pv = new vv(this.name, zv.width, this._fragment, this.rD(), this._fallbackTexture, this._generateMipMaps);
+             cT = new TT(this.name, kT.width, this._fragment, this.NJ(), this._fallbackTexture, this._generateMipMaps);
```

#### 439. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L6893` → after: `L6893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R6893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L6893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L6893) · [Before (L6893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L6893)

```diff
-           const vv = this.rD();
+           const TT = this.NJ();
```

#### 440. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L6897-L6898` → after: `L6897-L6898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R6897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L6897-L6898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L6897-L6898) · [Before (L6897-L6898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L6897-L6898)

```diff
-           const Pv = this._vertexBuffers[Av.k.PositionKind];
-           Pv && (Pv.dispose(), this._vertexBuffers[Av.k.PositionKind] = null), this._indexBuffer && this._fullEngine._releaseBuffer(this._indexBuffer) && (this._indexBuffer = null), this.onGeneratedObservable.clear(), this.onBeforeGenerationObservable.clear(), super.dispose()
+           const cT = this._vertexBuffers[XT.l.PositionKind];
+           cT && (cT.dispose(), this._vertexBuffers[XT.l.PositionKind] = null), this._indexBuffer && this._fullEngine._releaseBuffer(this._indexBuffer) && (this._indexBuffer = null), this.onGeneratedObservable.clear(), this.onBeforeGenerationObservable.clear(), super.dispose()
```

#### 441. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L6902` → after: `L6902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R6902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L6902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L6902) · [Before (L6902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L6902)

```diff
-         zv = [(0, Ov.L)()], hv = [(0, Ov.L)()], Sv = [(0, Ov.L)()], gv = [(0, Ov.L)()], pv = [(0, Ov.L)()], (0, nv.e)(vv, null, pv, {
+         kT = [(0, mT.J)()], lT = [(0, mT.J)()], MT = [(0, mT.J)()], OT = [(0, mT.J)()], yT = [(0, mT.J)()], (0, wT.e)(TT, null, yT, {
```

#### 442. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7003` → after: `L7003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7003) · [Before (L7003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7003)

```diff
-           hv > vv && (vv = hv, pv = Pv.width === Pv.height ? vv : Pv)
+           lT > TT && (TT = lT, yT = cT.width === cT.height ? TT : cT)
```

#### 443. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7013` → after: `L7013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7013) · [Before (L7013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7013)

```diff
-           dv.push(`${zv}_FROM_TEXTURE`);
+           fT.push(`${kT}_FROM_TEXTURE`);
```

#### 444. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7019` → after: `L7019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7019) · [Before (L7019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7019)

```diff
-         dv.push(`USE_TEXTURE${vv}`)
+         fT.push(`USE_TEXTURE${TT}`)
```

#### 445. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7027` → after: `L7027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7027) · [Before (L7027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7027)

```diff
-           shaderLanguage: hv.ma().isWebGPU ? 1 : 0,
+           shaderLanguage: lT.Dv().isWebGPU ? 1 : 0,
```

#### 446. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7029` → after: `L7029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7029) · [Before (L7029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7029)

```diff
-             hv.ma().isWebGPU ? await Promise.all([Pv.e(380).then((() => Pv(61279)))]) : await Promise.all([Pv.e(381).then((() => Pv(61283)))])
+             lT.Dv().isWebGPU ? await Promise.all([cT.e(380).then((() => cT(61252)))]) : await Promise.all([cT.e(381).then((() => cT(61259)))])
```

#### 447. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7035` → after: `L7035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7035) · [Before (L7035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7035)

```diff
-       for (let Pv = 0; Pv < ev.length; Pv++) Wv = ev[Pv], (wv = Tv).uOffset = Wv.uOffset, wv.vOffset = Wv.vOffset, wv.uScale = Wv.uScale, wv.vScale = Wv.vScale, wv.uAng = Wv.uAng, wv.vAng = Wv.vAng, wv.wAng = Wv.wAng, wv.uRotationCenter = Wv.uRotationCenter, wv.vRotationCenter =  … [truncated]
+       for (let cT = 0; cT < KT.length; cT++) CT = KT[cT], (jT = AT).uOffset = CT.uOffset, jT.vOffset = CT.vOffset, jT.uScale = CT.uScale, jT.vScale = CT.vScale, jT.uAng = CT.uAng, jT.vAng = CT.vAng, jT.wAng = CT.wAng, jT.uRotationCenter = CT.uRotationCenter, jT.vRotationCenter =  … [truncated]
```

#### 448. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7042` → after: `L7042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7042) · [Before (L7042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7042)

```diff
-           Tv.setInt(`${zv}TextureIndex`, hv), Tv.setInt(`${zv}SourceChannel`, vv.sourceChannel)
+           AT.setInt(`${kT}TextureIndex`, lT), AT.setInt(`${kT}SourceChannel`, TT.sourceChannel)
```

#### 449. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7045` → after: `L7045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7045) · [Before (L7045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7045)

```diff
-           hv = vv && eP(vv) ? vv.value : 3 === Pv ? 1 : 0, Tv.setFloat(`${zv}ConstantValue`, hv)
+           lT = TT && Oc(TT) ? TT.value : 3 === cT ? 1 : 0, AT.setFloat(`${kT}ConstantValue`, lT)
```

#### 450. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7053` → after: `L7053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7053) · [Before (L7053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7053)

```diff
-             zv(Pv instanceof Error ? Pv : new Error(String(Pv)))
+             kT(cT instanceof Error ? cT : new Error(String(cT)))
```

#### 451. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7080-L7084` → after: `L7080-L7084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7080-L7084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7080-L7084) · [Before (L7080-L7084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7080-L7084)

```diff
-     var lP = Pv(39131),
-       TP = Pv(39242),
-       WP = Pv(36610),
-       wP = Pv(39278),
-       aP = Pv(39230);
+     var Ac = cT(39451),
+       Cc = cT(39547),
+       jc = cT(36918),
+       vc = cT(39601),
+       tc = cT(39533);
```

#### 452. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7090` → after: `L7090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7090) · [Before (L7090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7090)

```diff
-     class CP extends lP.b {
+     class Nc extends Ac.c {
```

#### 453. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7101` → after: `L7101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7101) · [Before (L7101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7101)

```diff
-         return !!this._options?.enableMultiview || this.ka > 1 && !this.disableUniformBuffers
+         return !!this._options?.enableMultiview || this.qv > 1 && !this.disableUniformBuffers
```

#### 454. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7105` → after: `L7105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7105) · [Before (L7105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7105)

```diff
-         super(null), void 0 === vv.deterministicLockstep && (vv.deterministicLockstep = !1), void 0 !== vv.timeStep && (this._timeStep = vv.timeStep), void 0 === vv.lockstepMaxSteps && (vv.lockstepMaxSteps = 4), this._options = vv, WP.b.SetMatrixPrecision(!!vv.useHighPrecisionMat … [truncated]
+         super(null), void 0 === TT.deterministicLockstep && (TT.deterministicLockstep = !1), void 0 !== TT.timeStep && (this._timeStep = TT.timeStep), void 0 === TT.lockstepMaxSteps && (TT.lockstepMaxSteps = 4), this._options = TT, jc.d.SetMatrixPrecision(!!TT.useHighPrecisionMat … [truncated]
```

#### 455. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7189` → after: `L7189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7189) · [Before (L7189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7189)

```diff
-         }, vv.renderingCanvas && (this._renderingCanvas = vv.renderingCanvas), Dv.d.Log(`Babylon.js v${lP.b.Version} - Null engine`);
+         }, TT.renderingCanvas && (this._renderingCanvas = TT.renderingCanvas), bT.e.Log(`Babylon.js v${Ac.c.Version} - Null engine`);
```

#### 456. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7197` → after: `L7197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7197) · [Before (L7197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7197)

```diff
-         const zv = new TP.b;
+         const kT = new Cc.c;
```

#### 457. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7201` → after: `L7201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7201) · [Before (L7201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7201)

```diff
-         const zv = new TP.b;
+         const kT = new Cc.c;
```

#### 458. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7215-L7216` → after: `L7215-L7216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7215-L7216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7215-L7216) · [Before (L7215-L7216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7215-L7216)

```diff
-         const zv = new TP.b;
-         return zv.references = 1, zv.GT = vv instanceof Array ? vv.length * Float32Array.BYTES_PER_ELEMENT : vv.byteLength, zv
+         const kT = new Cc.c;
+         return kT.references = 1, kT.DA = TT instanceof Array ? TT.length * Float32Array.BYTES_PER_ELEMENT : TT.byteLength, kT
```

#### 459. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7239` → after: `L7239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7239) · [Before (L7239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7239)

```diff
-         vv = null !== vv && (0, aP.e)(vv) ? vv.effect : vv, this._currentEffect = vv, vv && (vv.onBind && vv.onBind(vv), vv._onBindObservable && vv._onBindObservable.notifyObservers(vv))
+         TT = null !== TT && (0, tc.d)(TT) ? TT.effect : TT, this._currentEffect = TT, TT && (TT.onBind && TT.onBind(TT), TT._onBindObservable && TT._onBindObservable.notifyObservers(TT))
```

#### 460. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7324` → after: `L7324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7324) · [Before (L7324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7324)

```diff
-         const dv = new Oz.e(this, 1),
+         const fT = new mk.b(this, 1),
```

#### 461. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7338` → after: `L7338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7338) · [Before (L7338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7338)

```diff
-         const Sv = new Oz.e(this, 5);
+         const MT = new mk.b(this, 5);
```

#### 462. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7350` → after: `L7350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7350) · [Before (L7350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7350)

```diff
-           hv = new Oz.e(this, 5, !0);
+           lT = new mk.b(this, 5, !0);
```

#### 463. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7368` → after: `L7368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7368) · [Before (L7368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7368)

```diff
-         const Sv = new Oz.e(this, 5);
+         const MT = new mk.b(this, 5);
```

#### 464. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7378` → after: `L7378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7378) · [Before (L7378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7378)

```diff
-         const lv = new Oz.e(this, 3);
+         const IT = new mk.b(this, 3);
```

#### 465. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7395-L7396` → after: `L7395-L7396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7395-L7396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7395-L7396) · [Before (L7395-L7396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7395-L7396)

```diff
-         const zv = new TP.b;
-         return zv.references = 1, zv.GT = 1, zv
+         const kT = new Cc.c;
+         return kT.references = 1, kT.DA = 1, kT
```

#### 466. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7428` → after: `L7428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7428) · [Before (L7428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7428)

```diff
-     Pv(39334), Pv(39374), Pv(39325);
+     cT(39657), cT(39703), cT(39651);
```

#### 467. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7433` → after: `L7433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7433) · [Before (L7433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7433)

```diff
-         const zv = vv.rD()?.ma();
+         const kT = TT.NJ()?.Dv();
```

#### 468. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7439` → after: `L7439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7439) · [Before (L7439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7439)

```diff
-         Pv ? ArrayBuffer.isView(Pv) ? hv = Pv.buffer.slice(Pv.byteOffset, Pv.byteOffset + Pv.byteLength) : Pv instanceof ArrayBuffer ? hv = Pv : Pv instanceof Blob ? (hv = await Pv.arrayBuffer(), ev = Pv.type || ev) : "string" === typeof Pv ? (hv = await Sv.Tools.LoadFileAsync(Pv … [truncated]
+         cT ? ArrayBuffer.isView(cT) ? lT = cT.buffer.slice(cT.byteOffset, cT.byteOffset + cT.byteLength) : cT instanceof ArrayBuffer ? lT = cT : cT instanceof Blob ? (lT = await cT.arrayBuffer(), KT = cT.type || KT) : "string" === typeof cT ? (lT = await MT.Tools.LoadFileAsync(cT … [truncated]
```

#### 469. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7445` → after: `L7445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7445) · [Before (L7445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7445)

```diff
-         ev = vv ? vv[1] : (0, dv.c)(zv.url)
+         KT = TT ? TT[1] : (0, fT.e)(kT.url)
```

#### 470. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7480` → after: `L7480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7480) · [Before (L7480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7480)

```diff
-       const zv = vv.diffuseColor.toLinearSpace(vv.rD().ma().useExactSrgbConversions).scale(.5),
+       const kT = TT.diffuseColor.toLinearSpace(TT.NJ().Dv().useExactSrgbConversions).scale(.5),
```

#### 471. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7483-L7486` → after: `L7483-L7486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7483-L7486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7483-L7486) · [Before (L7483-L7486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7483-L7486)

```diff
-           let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Zv.j(0, 1),
-             Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Zv.j(0, .1),
-             hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Zv.j(0, .1),
-             Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Zv.j(1300, .1);
+           let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new uT.i(0, 1),
+             cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new uT.i(0, .1),
+             lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new uT.i(0, .1),
+             MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new uT.i(1300, .1);
```

#### 472. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7505` → after: `L7505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7505) · [Before (L7505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7505)

```diff
-       return fv.e.CreateRGBATexture(hv, vv, zv, Pv)
+       return FT.c.CreateRGBATexture(lT, TT, kT, cT)
```

#### 473. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7553` → after: `L7553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7553) · [Before (L7553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7553)

```diff
-         }(vv.alpha < 1 || vv.opacityTexture) && (vv.alphaMode === Fv.d.ALPHA_COMBINE ? hv.alphaMode = "BLEND" : Sv.Tools.Warn(vv.name + ": glTF 2.0 does not support alpha mode: " + vv.alphaMode.toString())), vv.emissiveColor && !vv.emissiveColor.equalsWithEpsilon(fP, cP) && (hv.e … [truncated]
+         }(TT.alpha < 1 || TT.opacityTexture) && (TT.alphaMode === rT.e.ALPHA_COMBINE ? lT.alphaMode = "BLEND" : MT.Tools.Warn(TT.name + ": glTF 2.0 does not support alpha mode: " + TT.alphaMode.toString())), TT.emissiveColor && !TT.emissiveColor.equalsWithEpsilon(rc, Sc) && (lT.e … [truncated]
```

#### 474. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7573` → after: `L7573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7573) · [Before (L7573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7573)

```diff
-         return hv.width < Sv.width ? (ev = vv && vv instanceof jv.d ? mv.f.CreateResizedCopy(vv, Sv.width, Sv.height, !0) : DP(Sv.width, Sv.height, Pv), gv = zv) : hv.width > Sv.width ? (gv = zv && zv instanceof jv.d ? mv.f.CreateResizedCopy(zv, hv.width, hv.height, !0) : DP(hv.w … [truncated]
+         return lT.width < MT.width ? (KT = TT && TT instanceof aT.c ? DT.f.CreateResizedCopy(TT, MT.width, MT.height, !0) : zc(MT.width, MT.height, cT), OT = kT) : lT.width > MT.width ? (OT = kT && kT instanceof aT.c ? DT.f.CreateResizedCopy(kT, lT.width, lT.height, !0) : zc(lT.w … [truncated]
```

#### 475. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7581` → after: `L7581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7581) · [Before (L7581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7581)

```diff
-         const Sv = vv ? vv.rD() : zv ? zv.rD() : null;
+         const MT = TT ? TT.NJ() : kT ? kT.NJ() : null;
```

#### 476. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7604-L7605` → after: `L7604-L7605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7604-L7605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7604-L7605) · [Before (L7604-L7605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7604-L7605)

```diff
-                   diffuseColor: new Cv.Color3(pv[hv], pv[hv + 1], pv[hv + 2]).toLinearSpace(Sv.ma().useExactSrgbConversions).multiply(Pv.diffuseColor),
-                   specularColor: new Cv.Color3(dv[hv], dv[hv + 1], dv[hv + 2]).toLinearSpace(Sv.ma().useExactSrgbConversions).multiply(Pv.specularColor),
+                   diffuseColor: new hT.Color3(yT[lT], yT[lT + 1], yT[lT + 2]).toLinearSpace(MT.Dv().useExactSrgbConversions).multiply(cT.diffuseColor),
+                   specularColor: new hT.Color3(fT[lT], fT[lT + 1], fT[lT + 2]).toLinearSpace(MT.Dv().useExactSrgbConversions).multiply(cT.specularColor),
```

#### 477. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7622` → after: `L7622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7622) · [Before (L7622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7622)

```diff
-               const hv = Cv.Color3.FromInts(sv[Pv], sv[Pv + 1], sv[Pv + 2]).toGammaSpace(Sv.ma().useExactSrgbConversions);
+               const lT = hT.Color3.FromInts(tT[cT], tT[cT + 1], tT[cT + 2]).toGammaSpace(MT.Dv().useExactSrgbConversions);
```

#### 478. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7667` → after: `L7667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7667) · [Before (L7667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7667)

```diff
-                 Pv = Number(`${vv}${zv}`),
+                 cT = Number(`${TT}${kT}`),
```

#### 479. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7669` → after: `L7669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7669) · [Before (L7669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7669)

```diff
-               Sv ? pv.baseColorTexture = Sv : Nv.push(gP("baseColorOpacityTexture", NP(hv ? pP(hv, 0) : dP(1), hv ? pP(hv, 1) : dP(1), hv ? pP(hv, 2) : dP(1), pP(gv.geometryOpacityTexture, 0)), gv.rD()).then((async vv => {
+               MT ? yT.baseColorTexture = MT : xT.push(yc("baseColorOpacityTexture", Ic(lT ? fc(lT, 0) : xc(1), lT ? fc(lT, 1) : xc(1), lT ? fc(lT, 2) : xc(1), fc(OT.geometryOpacityTexture, 0)), OT.NJ()).then((async TT => {
```

#### 480. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7682` → after: `L7682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7682) · [Before (L7682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7682)

```diff
-                 Pv = Number(`${vv}${zv}`),
+                 cT = Number(`${TT}${kT}`),
```

#### 481. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7684` → after: `L7684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7684) · [Before (L7684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7684)

```diff
-               hv ? pv.metallicRoughnessTexture = hv : Nv.push(gP("MetalRoughTexture", NP(gv.ambientOcclusionTexture ? pP(gv.ambientOcclusionTexture, 0) : dP(1), ev ? pP(ev, 0) : dP(1), Sv ? pP(Sv, 0) : dP(1)), gv.rD()).then((async vv => {
+               lT ? yT.metallicRoughnessTexture = lT : xT.push(yc("MetalRoughTexture", Ic(OT.ambientOcclusionTexture ? fc(OT.ambientOcclusionTexture, 0) : xc(1), KT ? fc(KT, 0) : xc(1), MT ? fc(MT, 0) : xc(1)), OT.NJ()).then((async TT => {
```

#### 482. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7698` → after: `L7698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7698) · [Before (L7698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7698)

```diff
-         if (!vv || !(vv instanceof jv.d)) return zv;
+         if (!TT || !(TT instanceof aT.c)) return kT;
```

#### 483. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7703` → after: `L7703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7703) · [Before (L7703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7703)

```diff
-           case jv.d.LINEAR_LINEAR:
+           case aT.c.LINEAR_LINEAR:
```

#### 484. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7706` → after: `L7706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7706) · [Before (L7706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7706)

```diff
-           case jv.d.LINEAR_NEAREST:
+           case aT.c.LINEAR_NEAREST:
```

#### 485. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7709` → after: `L7709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7709) · [Before (L7709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7709)

```diff
-           case jv.d.NEAREST_LINEAR:
+           case aT.c.NEAREST_LINEAR:
```

#### 486. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7712` → after: `L7712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7712) · [Before (L7712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7712)

```diff
-           case jv.d.NEAREST_LINEAR_MIPLINEAR:
+           case aT.c.NEAREST_LINEAR_MIPLINEAR:
```

#### 487. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7715` → after: `L7715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7715) · [Before (L7715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7715)

```diff
-           case jv.d.NEAREST_NEAREST:
+           case aT.c.NEAREST_NEAREST:
```

#### 488. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7718` → after: `L7718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7718) · [Before (L7718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7718)

```diff
-           case jv.d.NEAREST_LINEAR_MIPNEAREST:
+           case aT.c.NEAREST_LINEAR_MIPNEAREST:
```

#### 489. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7721` → after: `L7721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7721) · [Before (L7721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7721)

```diff
-           case jv.d.LINEAR_NEAREST_MIPNEAREST:
+           case aT.c.LINEAR_NEAREST_MIPNEAREST:
```

#### 490. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7724` → after: `L7724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7724) · [Before (L7724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7724)

```diff
-           case jv.d.LINEAR_NEAREST_MIPLINEAR:
+           case aT.c.LINEAR_NEAREST_MIPLINEAR:
```

#### 491. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7727` → after: `L7727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7727) · [Before (L7727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7727)

```diff
-           case jv.d.NEAREST_NEAREST_MIPLINEAR:
+           case aT.c.NEAREST_NEAREST_MIPLINEAR:
```

#### 492. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7730` → after: `L7730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7730) · [Before (L7730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7730)

```diff
-           case jv.d.LINEAR_LINEAR_MIPLINEAR:
+           case aT.c.LINEAR_LINEAR_MIPLINEAR:
```

#### 493. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7733` → after: `L7733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7733) · [Before (L7733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7733)

```diff
-           case jv.d.LINEAR_LINEAR_MIPNEAREST:
+           case aT.c.LINEAR_LINEAR_MIPNEAREST:
```

#### 494. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7736` → after: `L7736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7736) · [Before (L7736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7736)

```diff
-           case jv.d.NEAREST_NEAREST_MIPNEAREST:
+           case aT.c.NEAREST_NEAREST_MIPNEAREST:
```

#### 495. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7743` → after: `L7743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7743) · [Before (L7743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7743)

```diff
-           case jv.d.WRAP_ADDRESSMODE:
+           case aT.c.WRAP_ADDRESSMODE:
```

#### 496. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7745` → after: `L7745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7745) · [Before (L7745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7745)

```diff
-           case jv.d.CLAMP_ADDRESSMODE:
+           case aT.c.CLAMP_ADDRESSMODE:
```

#### 497. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7747` → after: `L7747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7747) · [Before (L7747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7747)

```diff
-           case jv.d.MIRROR_ADDRESSMODE:
+           case aT.c.MIRROR_ADDRESSMODE:
```

#### 498. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7750` → after: `L7750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7750) · [Before (L7750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7750)

```diff
-             return Sv.Tools.Error(`Unsupported Texture Wrap Mode ${vv}!`), 10497
+             return MT.Tools.Error(`Unsupported Texture Wrap Mode ${TT}!`), 10497
```

#### 499. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7769` → after: `L7769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7769) · [Before (L7769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7769)

```diff
-             const vv = await this._exportImageAsync(`baseColor${pv.length}`, gv.baseColorTextureData);
+             const TT = await this._exportImageAsync(`baseColor${yT.length}`, OT.baseColorTextureData);
```

#### 500. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7773` → after: `L7773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7773) · [Before (L7773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7773)

```diff
-             const vv = await this._exportImageAsync(`metallicRoughness${pv.length}`, gv.metallicRoughnessTextureData);
+             const TT = await this._exportImageAsync(`metallicRoughness${yT.length}`, OT.metallicRoughnessTextureData);
```

#### 501. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7828` → after: `L7828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7828) · [Before (L7828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7828)

```diff
-         gv.equalsWithEpsilon(fP, cP) || (Pv.emissiveFactor = gv.pPv()), Pv.pbrMetallicRoughness = hv
+         OT.equalsWithEpsilon(rc, Sc) || (cT.emissiveFactor = OT.acT()), cT.pbrMetallicRoughness = lT
```

#### 502. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7863` → after: `L7863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7863) · [Before (L7863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7863)

```diff
-           "none" !== zv && (FP(zv) ? hv = zv : (hv = "image/png", Sv.Tools.Warn(`Unsupported media type: ${zv}. Exporting texture as PNG.`)));
+           "none" !== kT && (Pc(kT) ? lT = kT : (lT = "image/png", MT.Tools.Warn(`Unsupported media type: ${kT}. Exporting texture as PNG.`)));
```

#### 503. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7865` → after: `L7865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7865) · [Before (L7865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7865)

```diff
-             gv = await (0, mv.d)(vv),
+             OT = await (0, DT.c)(TT),
```

#### 504. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7899` → after: `L7899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7899) · [Before (L7899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7899)

```diff
-           Pv.some((vv => vv.uri === pv)) && (pv = `${ev}_${Sv.Tools.RandomId()}${gv}`), hv = {
+           cT.some((TT => TT.uri === yT)) && (yT = `${KT}_${MT.Tools.RandomId()}${OT}`), lT = {
```

#### 505. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7921` → after: `L7921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7921) · [Before (L7921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7921)

```diff
-         return -1 !== hv ? hv : (Pv.push(zv), Pv.length - 1)
+         return -1 !== lT ? lT : (cT.push(kT), cT.length - 1)
```

#### 506. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7924-L7928` → after: `L7924-L7928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7924-L7928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7924-L7928) · [Before (L7924-L7928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7924-L7928)

```diff
-     var UP = Pv(39361),
-       RP = Pv(39511);
-     (0, RP.d)();
-     var xP = Pv(36599);
-     const tP = hv.Matrix.Compose(new hv.fa(-1, 1, 1), hv.Quaternion.Identity(), hv.fa.Zero());
+     var Hc = cT(39689),
+       ec = cT(39839);
+     (0, ec.c)();
+     var Gc = cT(36901);
+     const Vc = lT.Matrix.Compose(new lT.Fv(-1, 1, 1), lT.Quaternion.Identity(), lT.Fv.Zero());
```

#### 507. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7933` → after: `L7933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7933) · [Before (L7933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7933)

```diff
-         if (!vv.getWorldMatrix().equalsWithEpsilon(hv.Matrix.IdentityReadOnly, xP.e)) return !1
+         if (!TT.getWorldMatrix().equalsWithEpsilon(lT.Matrix.IdentityReadOnly, Gc.b)) return !1
```

#### 508. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7935` → after: `L7935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7935) · [Before (L7935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7935)

```diff
-         if (!vv.getWorldMatrix().multiplyToRef(tP, hv.TmpVectors.Matrix[0]).equalsWithEpsilon(hv.Matrix.IdentityReadOnly, xP.e)) return !1
+         if (!TT.getWorldMatrix().multiplyToRef(Vc, lT.TmpVectors.Matrix[0]).equalsWithEpsilon(lT.Matrix.IdentityReadOnly, Gc.b)) return !1
```

#### 509. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7937` → after: `L7937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7937) · [Before (L7937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7937)

```diff
-       return !(vv instanceof Wv.e && vv.geometry)
+       return !(TT instanceof CT.d && TT.geometry)
```

#### 510. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7939` → after: `L7939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7939) · [Before (L7939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7939)

```diff
-     const IP = hv.fa.ZeroReadOnly,
+     const Zc = lT.Fv.ZeroReadOnly,
```

#### 511. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L7941-L7942` → after: `L7941-L7942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R7941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L7941-L7942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L7941-L7942) · [Before (L7941-L7942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L7941-L7942)

```diff
-       ZP = hv.fa.OneReadOnly,
-       AP = new hv.fa(-1, 1, 1);
+       Xc = lT.Fv.OneReadOnly,
+       dc = new lT.Fv(-1, 1, 1);
```

#### 512. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8037` → after: `L8037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8037) · [Before (L8037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8037)

```diff
-       vv.f_(-vv.z, vv.w, vv.x, -vv.y)
+       TT.I5(-TT.z, TT.w, TT.x, -TT.y)
```

#### 513. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8041` → after: `L8041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8041) · [Before (L8041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8041)

```diff
-       const Pv = hv.fa.FromArrayToRef(zv.translation || [0, 0, 0], 0, hv.TmpVectors.fa[0]),
+       const cT = lT.Fv.FromArrayToRef(kT.translation || [0, 0, 0], 0, lT.TmpVectors.Fv[0]),
```

#### 514. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8044` → after: `L8044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8044) · [Before (L8044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8044)

```diff
-         gv = hv.fa.FromArrayToRef(vv.translation || [0, 0, 0], 0, hv.TmpVectors.fa[2]),
+         OT = lT.Fv.FromArrayToRef(TT.translation || [0, 0, 0], 0, lT.TmpVectors.Fv[2]),
```

#### 515. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8047` → after: `L8047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8047) · [Before (L8047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8047)

```diff
-       ev.multiplyToRef(dv, dv), dv.decompose(void 0, Sv, Pv), Pv.equalsWithEpsilon(IP, xP.e) ? delete zv.translation : zv.translation = Pv.pPv(), Sv.equalsWithEpsilon(QP, xP.e) ? delete zv.rotation : zv.rotation = Sv.pPv(), zv.scale && delete zv.scale
+       KT.multiplyToRef(fT, fT), fT.decompose(void 0, MT, cT), cT.equalsWithEpsilon(Zc, Gc.b) ? delete kT.translation : kT.translation = cT.acT(), MT.equalsWithEpsilon(uc, Gc.b) ? delete kT.rotation : kT.rotation = MT.acT(), kT.scale && delete kT.scale
```

#### 516. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8053-L8055` → after: `L8053-L8055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8053-L8055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8053-L8055) · [Before (L8053-L8055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8053-L8055)

```diff
-       const Pv = vv.rD(),
-         hv = vv instanceof RP.e && !Pv.useRightHandedSystem ? AP : ZP;
-       return !!zv.pp.equalsWithEpsilon(hv, xP.e) || (Dv.d.Warn(`Cannot collapse node ${vv.name} into parent node ${zv.name} with modified scaling.`), !1)
+       const cT = TT.NJ(),
+         lT = TT instanceof ec.g && !cT.useRightHandedSystem ? dc : Xc;
+       return !!kT.GA.equalsWithEpsilon(lT, Gc.b) || (bT.e.Warn(`Cannot collapse node ${TT.name} into parent node ${kT.name} with modified scaling.`), !1)
```

#### 517. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8204` → after: `L8204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8204) · [Before (L8204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8204)

```diff
-         if (void 0 === vv || !this._bufferViewToData.has(vv)) throw new Error(`BufferView ${vv} not found in BufferManager.`)
+         if (void 0 === TT || !this._bufferViewToData.has(TT)) throw new Error(`BufferView ${TT} not found in BufferManager.`)
```

#### 518. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8207-L8209` → after: `L8207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8207) · [Before (L8207-L8209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8207-L8209)

```diff
-     var hh = Pv(39515);
-     (0, hh.e)();
-     var Sh = Pv(39767);
+     var Ml = cT(39841);
```

#### 519. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8211-L8212` → after: `L8209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8209) · [Before (L8211-L8212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8211-L8212)

```diff
-     var eh = Pv(39560),
-       gh = Pv(40396);
+     var Kl = cT(40077);
```

#### 520. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8239` → after: `L8239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8239) · [Before (L8239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8239)

```diff
-           this.name = vv, this.animations = [], this._positions = null, this._normals = null, this._tangents = null, this._uvs = null, this._uv2s = null, this._colors = null, this._uniqueId = 0, this.onInfluenceChanged = new vP.c, this._onDataLayoutChanged = new vP.c, this.id = ( … [truncated]
+           this.name = TT, this.animations = [], this._positions = null, this._normals = null, this._tangents = null, this._uvs = null, this._uv2s = null, this._colors = null, this._uniqueId = 0, this.onInfluenceChanged = new kc.b, this._onDataLayoutChanged = new kc.b, this.id = ( … [truncated]
```

#### 521. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8265` → after: `L8265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8265) · [Before (L8265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8265)

```diff
-         Hev(vv) {
+         iKT(TT) {
```

#### 522. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8308` → after: `L8308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8308) · [Before (L8308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8308)

```diff
-           const zv = Fz.c.Clone((() => new vv(this.name, this.influence, this._scene, this.morphTargetManager)), this);
+           const kT = rk.d.Clone((() => new TT(this.name, this.influence, this._scene, this.morphTargetManager)), this);
```

#### 523. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8313` → after: `L8313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8313) · [Before (L8313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8313)

```diff
-           return vv.name = this.name, vv.influence = this.influence, null != this.id && (vv.id = this.id), vv.uniqueId = this.uniqueId, vv.positions = Array.prototype.slice.call(this.getPositions()), this.hasNormals && (vv.normals = Array.prototype.slice.call(this.getNormals())), … [truncated]
+           return TT.name = this.name, TT.influence = this.influence, null != this.id && (TT.id = this.id), TT.uniqueId = this.uniqueId, TT.positions = Array.prototype.slice.call(this.getPositions()), this.hasNormals && (TT.normals = Array.prototype.slice.call(this.getNormals())), … [truncated]
```

#### 524. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8321` → after: `L8321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8321) · [Before (L8321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8321)

```diff
-           if (Sv.Hev(zv.positions), null != zv.id && (Sv.id = zv.id), zv.normals && Sv.setNormals(zv.normals), zv.tangents && Sv.setTangents(zv.tangents), zv.uvs && Sv.setUVs(zv.uvs), zv.uv2s && Sv.setUV2s(zv.uv2s), zv.colors && Sv.setColors(zv.colors), zv.animations) {
+           if (MT.iKT(kT.positions), null != kT.id && (MT.id = kT.id), kT.normals && MT.setNormals(kT.normals), kT.tangents && MT.setTangents(kT.tangents), kT.uvs && MT.setUVs(kT.uvs), kT.uv2s && MT.setUV2s(kT.uv2s), kT.colors && MT.setColors(kT.colors), kT.animations) {
```

#### 525. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8324` → after: `L8324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8324) · [Before (L8324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8324)

```diff
-                 hv = (0, Hz.b)("BABYLON.Animation");
+                 lT = (0, Rk.e)("BABYLON.Animation");
```

#### 526. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8333-L8334` → after: `L8333-L8334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8333-L8334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8333-L8334) · [Before (L8333-L8334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8333-L8334)

```diff
-           const Sv = new vv(Pv, hv, zv.rD(), zv.morphTargetManager);
-           return Sv.Hev(zv.getVerticesData(Av.k.PositionKind)), zv.isVerticesDataPresent(Av.k.NormalKind) && Sv.setNormals(zv.getVerticesData(Av.k.NormalKind)), zv.isVerticesDataPresent(Av.k.TangentKind) && Sv.setTangents(zv.getVerticesData(Av.k.TangentKind)), zv.isVerticesDataPr … [truncated]
+           const MT = new TT(cT, lT, kT.NJ(), kT.morphTargetManager);
+           return MT.iKT(kT.getVerticesData(XT.l.PositionKind)), kT.isVerticesDataPresent(XT.l.NormalKind) && MT.setNormals(kT.getVerticesData(XT.l.NormalKind)), kT.isVerticesDataPresent(XT.l.TangentKind) && MT.setTangents(kT.getVerticesData(XT.l.TangentKind)), kT.isVerticesDataPr … [truncated]
```

#### 527. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8338` → after: `L8338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8338) · [Before (L8338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8338)

```diff
-         zv = [(0, Ov.L)()], Pv = [(0, Ov.L)()], (0, nv.e)(null, null, zv, {
+         kT = [(0, mT.J)()], cT = [(0, mT.J)()], (0, wT.e)(null, null, kT, {
```

#### 528. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8372-L8373` → after: `L8372-L8373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8372-L8373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8372-L8373) · [Before (L8372-L8373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8372-L8373)

```diff
-     var dh, Nh = Pv(40460),
-       lh = Pv(39553);
+     var xl, Il = cT(40778),
+       Al = cT(39883);
```

#### 529. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8379` → after: `L8379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8379) · [Before (L8379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8379)

```diff
-         return vv && (vv instanceof Tv.b || vv instanceof hh.c || vv instanceof lh.c)
+         return TT && (TT instanceof AT.b || TT instanceof Ml.c || TT instanceof Al.d)
```

#### 530. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8408` → after: `L8408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8408) · [Before (L8408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8408)

```diff
-           case "pp":
+           case "GA":
```

#### 531. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8424` → after: `L8424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8424) · [Before (L8424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8424)

```diff
-             Sv.Tools.Error(`Unsupported animatable property ${ev[0]}`)
+             MT.Tools.Error(`Unsupported animatable property ${KT[0]}`)
```

#### 532. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8442` → after: `L8442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8442) · [Before (L8442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8442)

```diff
-             }, Th._AddAnimation(`${Wv.name}`, Wv.hasRunningRuntimeAnimations ? zv : Tv, vv, Wv, Sv.dataAccessorType, Sv.animationChannelTargetPath, hv, ev, gv, pv, Sv.useQuaternion, dv, Nv), Tv.samplers.length && Tv.channels.length && Pv.push(Tv))
+             }, Cl._AddAnimation(`${CT.name}`, CT.hasRunningRuntimeAnimations ? kT : AT, TT, CT, MT.dataAccessorType, MT.animationChannelTargetPath, lT, KT, OT, yT, MT.useQuaternion, fT, xT), AT.samplers.length && AT.channels.length && cT.push(AT))
```

#### 533. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8447` → after: `L8447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8447) · [Before (L8447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8447)

```diff
-         if (vv instanceof Nh.e) {
+         if (TT instanceof Il.c) {
```

#### 534. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8454` → after: `L8454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8454) · [Before (L8454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8454)

```diff
-                 const wv = new gh.b(`${av.name}`, "influence", av.framePerSecond, av.dataType, av.GS, av.enableBlending),
+                 const jT = new yl.b(`${vT.name}`, "influence", vT.framePerSecond, vT.dataType, vT.tM, vT.enableBlending),
```

#### 535. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8470` → after: `L8470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8470) · [Before (L8470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8470)

```diff
-                 }, Th._AddAnimation(av.name, av.hasRunningRuntimeAnimations ? zv : Tv, vv, wv, iv.dataAccessorType, iv.animationChannelTargetPath, hv, ev, gv, pv, iv.useQuaternion, dv, Nv, Sv.numTargets), Tv.samplers.length && Tv.channels.length && Pv.push(Tv))
+                 }, Cl._AddAnimation(vT.name, vT.hasRunningRuntimeAnimations ? kT : AT, TT, jT, NT.dataAccessorType, NT.animationChannelTargetPath, lT, KT, OT, yT, NT.useQuaternion, fT, xT, MT.numTargets), AT.samplers.length && AT.channels.length && cT.push(AT))
```

#### 536. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8498-L8499` → after: `L8498-L8499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8498-L8499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8498-L8499) · [Before (L8498-L8499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8498-L8499)

```diff
-                   const zv = this._IsTransformable(sv) ? sv : this._IsTransformable(sv[0]) ? sv[0] : null;
-                   zv && Th._AddAnimation(`${Cv.name}`, lv, zv, Cv, vv.dataAccessorType, vv.animationChannelTargetPath, Pv, hv, Sv, ev, vv.useQuaternion, gv, iv)
+                   const kT = this._IsTransformable(tT) ? tT : this._IsTransformable(tT[0]) ? tT[0] : null;
+                   kT && Cl._AddAnimation(`${hT.name}`, IT, kT, hT, TT.dataAccessorType, TT.animationChannelTargetPath, cT, lT, MT, KT, TT.useQuaternion, OT, NT)
```

#### 537. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8503` → after: `L8503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8503) · [Before (L8503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8503)

```diff
-                   const zv = sv instanceof ph ? sv : sv[0];
+                   const kT = tT instanceof fl ? tT : tT[0];
```

#### 538. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8530` → after: `L8530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8530) · [Before (L8530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8530)

```diff
-                     zv ? (pv || (pv = new gh.b(`${Wv.name}_${vv.name}_MorphWeightAnimation`, "influence", zv.framePerSecond, gh.b.ANIMATIONTYPE_FLOAT, zv.GS, zv.enableBlending)), dv.push(zv.getKeys()[Pv])) : dv.push({
+                     kT ? (yT || (yT = new yl.b(`${CT.name}_${TT.name}_MorphWeightAnimation`, "influence", kT.framePerSecond, yl.b.ANIMATIONTYPE_FLOAT, kT.tM, kT.enableBlending)), fT.push(kT.getKeys()[cT])) : fT.push({
```

#### 539. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8540` → after: `L8540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8540) · [Before (L8540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8540)

```diff
-               Cv && Th._AddAnimation(`${Wv.name}_${vv.name}_MorphWeightAnimation`, lv, vv, pv, Cv.dataAccessorType, Cv.animationChannelTargetPath, Pv, hv, Sv, ev, Cv.useQuaternion, gv, !1, zv?.numTargets)
+               hT && Cl._AddAnimation(`${CT.name}_${TT.name}_MorphWeightAnimation`, IT, TT, yT, hT.dataAccessorType, hT.animationChannelTargetPath, cT, lT, MT, KT, hT.useQuaternion, OT, !1, kT?.numTargets)
```

#### 540. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8562-L8563` → after: `L8562-L8563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8562-L8563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8562-L8563) · [Before (L8562-L8563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8562-L8563)

```diff
-             Tv = new hv.fa,
-             Wv = new hv.fa,
+             AT = new lT.Fv,
+             CT = new lT.Fv,
```

#### 541. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8571` → after: `L8571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8571) · [Before (L8571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8571)

```diff
-                 wv && (hv.fa.FromArrayToRef(vv, 0, Wv), BP(Wv), Wv.toArray(Pv));
+                 jT && (lT.Fv.FromArrayToRef(TT, 0, CT), Yc(CT), CT.toArray(cT));
```

#### 542. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8574` → after: `L8574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8574) · [Before (L8574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8574)

```diff
-                 4 === vv.length ? hv.Quaternion.FromArrayToRef(vv, 0, Nv) : (Pv = new Array(4), hv.fa.FromArrayToRef(vv, 0, Tv), hv.Quaternion.FromEulerVectorToRef(Tv, Nv)), wv && (JP(Nv), fv && EP(Nv)), Nv.toArray(Pv)
+                 4 === TT.length ? lT.Quaternion.FromArrayToRef(TT, 0, xT) : (cT = new Array(4), lT.Fv.FromArrayToRef(TT, 0, AT), lT.Quaternion.FromEulerVectorToRef(AT, xT)), jT && (Bc(xT), FT && Wc(xT)), xT.toArray(cT)
```

#### 543. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8614` → after: `L8614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8614) · [Before (L8614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8614)

```diff
-                 GS: zv.GS
+                 tM: kT.tM
```

#### 544. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8625` → after: `L8625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8625) · [Before (L8625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8625)

```diff
-           lv = gv ? hv.Quaternion.FromArray(pv).normalize() : hv.fa.FromArray(pv);
+           IT = OT ? lT.Quaternion.FromArray(yT).normalize() : lT.Fv.FromArray(yT);
```

#### 545. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8636` → after: `L8636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8636) · [Before (L8636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8636)

```diff
-             Sv.Tools.Error(`glTFAnimation: Unsupported component name "${Nv}"!`)
+             MT.Tools.Error(`glTFAnimation: Unsupported component name "${xT}"!`)
```

#### 546. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8642` → after: `L8642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8642) · [Before (L8642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8642)

```diff
-         pv.push(Pv), "weights" !== ev ? (Sv.dataType === gh.b.ANIMATIONTYPE_FLOAT && (zv = this._ConvertFactorToVector3OrQuaternion(zv, vv, Sv, ev, Nv)), "rotation" === ev ? (Nv ? gv = zv : (lv = zv, hv.Quaternion.RotationYawPitchRollToRef(lv.y, lv.x, lv.z, gv)), dv.push(gv.pPv() … [truncated]
+         yT.push(cT), "weights" !== KT ? (MT.dataType === yl.b.ANIMATIONTYPE_FLOAT && (kT = this._ConvertFactorToVector3OrQuaternion(kT, TT, MT, KT, xT)), "rotation" === KT ? (xT ? OT = kT : (IT = kT, lT.Quaternion.RotationYawPitchRollToRef(IT.y, IT.x, IT.z, OT)), fT.push(OT.acT() … [truncated]
```

#### 547. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8656` → after: `L8656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8656) · [Before (L8656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8656)

```diff
-             Sv = (vv.rotationQuaternion ?? hv.Quaternion.Identity()).pPv()
+             MT = (TT.rotationQuaternion ?? lT.Quaternion.Identity()).acT()
```

#### 548. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8658` → after: `L8658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8658) · [Before (L8658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8658)

```diff
-             Sv = (vv.rotation ?? hv.fa.Zero()).pPv()
+             MT = (TT.rotation ?? lT.Fv.Zero()).acT()
```

#### 549. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8661` → after: `L8661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8661) · [Before (L8661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8661)

```diff
-           Sv = (vv.position ?? hv.fa.Zero()).pPv()
+           MT = (TT.position ?? lT.Fv.Zero()).acT()
```

#### 550. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8663` → after: `L8663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8663) · [Before (L8663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8663)

```diff
-           Sv = (vv.pp ?? hv.fa.One()).pPv()
+           MT = (TT.GA ?? lT.Fv.One()).acT()
```

#### 551. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8671` → after: `L8671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8671) · [Before (L8671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8671)

```diff
-           let zv = vv.value.pPv();
+           let kT = TT.value.acT();
```

#### 552. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8673-L8674` → after: `L8673-L8674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8673-L8674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8673-L8674) · [Before (L8673-L8674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8673-L8674)

```diff
-             const vv = hv.fa.FromArray(zv);
-             zv = hv.Quaternion.RotationYawPitchRoll(vv.y, vv.x, vv.z).pPv()
+             const TT = lT.Fv.FromArray(kT);
+             kT = lT.Quaternion.RotationYawPitchRoll(TT.y, TT.x, TT.z).acT()
```

#### 553. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8681-L8682` → after: `L8681-L8682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8681-L8682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8681-L8682) · [Before (L8681-L8682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8681-L8682)

```diff
-               const vv = pv ? dv : hv.Quaternion.RotationYawPitchRoll(dv.y, dv.x, dv.z).normalize();
-               Pv.push(vv.pPv())
+               const TT = yT ? fT : lT.Quaternion.RotationYawPitchRoll(fT.y, fT.x, fT.z).normalize();
+               cT.push(TT.acT())
```

#### 554. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8684` → after: `L8684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8684) · [Before (L8684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8684)

```diff
-             Pv.push(dv.pPv())
+             cT.push(fT.acT())
```

#### 555. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8686` → after: `L8686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8686) · [Before (L8686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8686)

```diff
-         } else Nv === gh.b.ANIMATIONTYPE_QUATERNION ? Pv.push(vv.value.normalize().pPv()) : Sv.Tools.Error("glTFAnimation: Unsupported key frame values for animation!")
+         } else xT === yl.b.ANIMATIONTYPE_QUATERNION ? cT.push(TT.value.normalize().acT()) : MT.Tools.Error("glTFAnimation: Unsupported key frame values for animation!")
```

#### 556. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8719` → after: `L8719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8719) · [Before (L8719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8719)

```diff
-               if (gv) pv = dv.pPv();
+               if (OT) yT = fT.acT();
```

#### 557. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8722` → after: `L8722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8722) · [Before (L8722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8722)

```diff
-                 pv = hv.Quaternion.RotationYawPitchRoll(vv.y, vv.x, vv.z).pPv()
+                 yT = lT.Quaternion.RotationYawPitchRoll(TT.y, TT.x, TT.z).acT()
```

#### 558. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8725` → after: `L8725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8725) · [Before (L8725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8725)

```diff
-           else pv = "weights" === Pv ? dv ? [dv] : [0] : dv ? dv.pPv() : [0, 0, 0];
+           else yT = "weights" === cT ? fT ? [fT] : [0] : fT ? fT.acT() : [0, 0, 0];
```

#### 559. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8750` → after: `L8750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8750) · [Before (L8750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8750)

```diff
-         Wv = hv.fa.Zero();
+         CT = lT.Fv.Zero();
```

#### 560. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8761-L8762` → after: `L8761-L8762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8761-L8762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8761-L8762) · [Before (L8761-L8762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8761-L8762)

```diff
-             const gv = hv.fa.FromArray(pv, 3 * Pv);
-             hv.fa.FromArray(ev, 3 * Pv).subtractToRef(gv, Wv), Wv.x *= Tv, zv[0] = Math.min(zv[0], Wv.x), Sv[0] = Math.max(Sv[0], Wv.x), zv[1] = Math.min(zv[1], Wv.y), Sv[1] = Math.max(Sv[1], Wv.y), zv[2] = Math.min(zv[2], Wv.z), Sv[2] = Math.max(Sv[2], Wv.z), vv[3 * Pv] = Wv.x,  … [truncated]
+             const OT = lT.Fv.FromArray(yT, 3 * cT);
+             lT.Fv.FromArray(KT, 3 * cT).subtractToRef(OT, CT), CT.x *= AT, kT[0] = Math.min(kT[0], CT.x), MT[0] = Math.max(MT[0], CT.x), kT[1] = Math.min(kT[1], CT.y), MT[1] = Math.max(MT[1], CT.y), kT[2] = Math.min(kT[2], CT.z), MT[2] = Math.max(MT[2], CT.z), TT[3 * cT] = CT.x,  … [truncated]
```

#### 561. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8770` → after: `L8770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8770) · [Before (L8770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8770)

```diff
-         } else Sv.Tools.Warn(`Morph target positions for mesh ${zv.name} were not exported. Mesh does not have position vertex data`)
+         } else MT.Tools.Warn(`Morph target positions for mesh ${kT.name} were not exported. Mesh does not have position vertex data`)
```

#### 562. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8779-L8780` → after: `L8779-L8780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8779-L8780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8779-L8780) · [Before (L8779-L8780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8779-L8780)

```diff
-             const zv = hv.fa.FromArray(pv, 3 * Pv).normalize();
-             hv.fa.FromArray(ev, 3 * Pv).normalize().subtractToRef(zv, Wv), vv[3 * Pv] = Wv.x * Tv, vv[3 * Pv + 1] = Wv.y, vv[3 * Pv + 2] = Wv.z
+             const kT = lT.Fv.FromArray(yT, 3 * cT).normalize();
+             lT.Fv.FromArray(KT, 3 * cT).normalize().subtractToRef(kT, CT), TT[3 * cT] = CT.x * AT, TT[3 * cT + 1] = CT.y, TT[3 * cT + 2] = CT.z
```

#### 563. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8785` → after: `L8785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8785) · [Before (L8785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8785)

```diff
-         } else Sv.Tools.Warn(`Morph target normals for mesh ${zv.name} were not exported. Mesh does not have normals vertex data`)
+         } else MT.Tools.Warn(`Morph target normals for mesh ${kT.name} were not exported. Mesh does not have normals vertex data`)
```

#### 564. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8795` → after: `L8795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8795) · [Before (L8795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8795)

```diff
-             const zv = hv.fa.FromArray(pv, 4 * Pv);
+             const kT = lT.Fv.FromArray(yT, 4 * cT);
```

#### 565. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8797` → after: `L8797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8797) · [Before (L8797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8797)

```diff
-             const Sv = hv.fa.FromArray(ev, 3 * Pv);
+             const MT = lT.Fv.FromArray(KT, 3 * cT);
```

#### 566. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8803` → after: `L8803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8803) · [Before (L8803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8803)

```diff
-         } else Sv.Tools.Warn(`Morph target tangents for mesh ${zv.name} were not exported. Mesh does not have tangents vertex data`)
+         } else MT.Tools.Warn(`Morph target tangents for mesh ${kT.name} were not exported. Mesh does not have tangents vertex data`)
```

#### 567. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8816-L8817` → after: `L8816-L8817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8816-L8817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8816-L8817) · [Before (L8816-L8817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8816-L8817)

```diff
-               const Sv = hv.fa.FromArray(pv, Pv * vv);
-               hv.fa.FromArray(ev, Pv * vv).subtractToRef(Sv, Wv), zv[3 * Pv] = Wv.x, zv[3 * Pv + 1] = Wv.y, zv[3 * Pv + 2] = Wv.z
+               const MT = lT.Fv.FromArray(yT, cT * TT);
+               lT.Fv.FromArray(KT, cT * TT).subtractToRef(MT, CT), kT[3 * cT] = CT.x, kT[3 * cT + 1] = CT.y, kT[3 * cT + 2] = CT.z
```

#### 568. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8822` → after: `L8822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8822) · [Before (L8822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8822)

```diff
-           } else Sv.Tools.Warn(`Unsupported number of components for color attribute: ${vv}`);
+           } else MT.Tools.Warn(`Unsupported number of components for color attribute: ${TT}`);
```

#### 569. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8826` → after: `L8826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8826) · [Before (L8826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8826)

```diff
-         } else Sv.Tools.Warn(`Morph target colors for mesh ${zv.name} were not exported. Mesh does not have colors vertex data`)
+         } else MT.Tools.Warn(`Morph target colors for mesh ${kT.name} were not exported. Mesh does not have colors vertex data`)
```

#### 570. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8830` → after: `L8830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8830) · [Before (L8830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8830)

```diff
-     var wh = Pv(40883);
+     var vl = cT(41166);
```

#### 571. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8832-L8833` → after: `L8832-L8833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8832-L8833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8832-L8833) · [Before (L8832-L8833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8832-L8833)

```diff
-     ah.DEFAULT_COLOR = Jv.b.White(), ah.DEFAULT_WIDTH_ATTENUATED = 1, ah.DEFAULT_WIDTH = .1;
-     var sh = Pv(40387);
+     tl.DEFAULT_COLOR = YT.c.White(), tl.DEFAULT_WIDTH_ATTENUATED = 1, tl.DEFAULT_WIDTH = .1;
+     var hl = cT(40706);
```

#### 572. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8839` → after: `L8839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8839) · [Before (L8839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8839)

```diff
-         this._currentPath = new sh.h(vv, zv), this._tempPaths.push(this._currentPath)
+         this._currentPath = new hl.e(TT, kT), this._tempPaths.push(this._currentPath)
```

#### 573. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8934` → after: `L8934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8934) · [Before (L8934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8934)

```diff
-         if (vv.length && !Array.isArray(vv[0]) && vv[0] instanceof Zv.l) {
+         if (TT.length && !Array.isArray(TT[0]) && TT[0] instanceof uT.m) {
```

#### 574. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8942` → after: `L8942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8942) · [Before (L8942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8942)

```diff
-         if (vv.length > 0 && Array.isArray(vv[0]) && vv[0].length > 0 && vv[0][0] instanceof Zv.l) {
+         if (TT.length > 0 && Array.isArray(TT[0]) && TT[0].length > 0 && TT[0][0] instanceof uT.m) {
```

#### 575. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8986-L8987` → after: `L8986-L8987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8986-L8987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8986-L8987) · [Before (L8986-L8987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8986-L8987)

```diff
-             ev = Sv.getVerticesData(Av.k.PositionKind),
-             gv = Sv.dPv();
+             KT = MT.getVerticesData(XT.l.PositionKind),
+             OT = MT.FcT();
```

#### 576. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8993-L8995` → after: `L8993-L8995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8993-L8995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L8993-L8995) · [Before (L8993-L8995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L8993-L8995)

```diff
-                 Tv = new Zv.l(ev[dv], ev[dv + 1], ev[dv + 2]),
-                 Wv = new Zv.l(ev[Nv], ev[Nv + 1], ev[Nv + 2]),
-                 wv = new Zv.l(ev[lv], ev[lv + 1], ev[lv + 2]);
+                 AT = new uT.m(KT[fT], KT[fT + 1], KT[fT + 2]),
+                 CT = new uT.m(KT[xT], KT[xT + 1], KT[xT + 2]),
+                 jT = new uT.m(KT[IT], KT[IT + 1], KT[IT + 2]);
```

#### 577. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9011` → after: `L9011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L9011) · [Before (L9011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L9011)

```diff
-             for (let zv = 0; zv < vv.length; zv += 3) Pv.push(new Zv.l(vv[zv], vv[zv + 1], vv[zv + 2]));
+             for (let kT = 0; kT < TT.length; kT += 3) cT.push(new uT.m(TT[kT], TT[kT + 1], TT[kT + 2]));
```

#### 578. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9018` → after: `L9018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L9018) · [Before (L9018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L9018)

```diff
-         for (let hv = 0; hv < zv.length; hv += 3) Pv.push(new Zv.l(zv[hv], zv[hv + 1], zv[hv + 2]));
+         for (let lT = 0; lT < kT.length; lT += 3) cT.push(new uT.m(kT[lT], kT[lT + 1], kT[lT + 2]));
```

#### 579. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9037` → after: `L9037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L9037) · [Before (L9037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L9037)

```diff
-         const Pv = Zv.i.fa[0];
+         const cT = uT.h.Fv[0];
```

#### 580. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9060-L9062` → after: `L9060-L9062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9060-L9062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L9060-L9062) · [Before (L9060-L9062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L9060-L9062)

```diff
-           ev = Zv.i.fa[0];
-         ev.Dk(Pv);
-         const gv = Zv.i.fa[1];
+           KT = uT.h.Fv[0];
+         KT.Xs(cT);
+         const OT = uT.h.Fv[1];
```

#### 581. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9070` → after: `L9070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L9070) · [Before (L9070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L9070)

```diff
-         const Pv = vv[0] instanceof Zv.l ? Gh.GetLineSegments(vv) : "number" === typeof vv[0] ? Gh.GetLineSegments(Gh.ToVector3Array(vv)) : vv,
+         const cT = TT[0] instanceof uT.m ? Dl.GetLineSegments(TT) : "number" === typeof TT[0] ? Dl.GetLineSegments(Dl.ToVector3Array(TT)) : TT,
```

#### 582. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9119` → after: `L9119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L9119) · [Before (L9119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L9119)

```diff
-         return vv[gv].point2.subtractToRef(vv[gv].point1, Zv.i.fa[0]), Zv.i.fa[0].scaleToRef(dv, Zv.i.fa[1]), hv || Zv.i.fa[1].addInPlace(vv[gv].point1), Zv.i.fa[1].clone()
+         return TT[OT].point2.subtractToRef(TT[OT].point1, uT.h.Fv[0]), uT.h.Fv[0].scaleToRef(fT, uT.h.Fv[1]), lT || uT.h.Fv[1].addInPlace(TT[OT].point1), uT.h.Fv[1].clone()
```

#### 583. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9126` → after: `L9126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L9126) · [Before (L9126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L9126)

```diff
-         for (let gv = 0; gv <= zv; gv++) ev.push(new Zv.l(Math.cos(gv * Sv) * vv, Math.sin(gv * Sv) * hv, Pv));
+         for (let OT = 0; OT <= kT; OT++) KT.push(new uT.m(Math.cos(OT * MT) * TT, Math.sin(OT * MT) * lT, cT));
```

#### 584. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9130` → after: `L9130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L9130) · [Before (L9130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L9130)

```diff
-         return sh.e.CreateQuadraticBezier(vv, zv, Pv, hv).getPoints().flatMap((vv => [vv.x, vv.y, vv.z]))
+         return hl.d.CreateQuadraticBezier(TT, kT, cT, lT).getPoints().flatMap((TT => [TT.x, TT.y, TT.z]))
```

#### 585. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9168-L9169` → after: `L9168-L9169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9168-L9169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L9168-L9169) · [Before (L9168-L9169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L9168-L9169)

```diff
-         const Sv = hv.ma().getCaps().maxTextureSize ?? 1,
-           ev = zv.length > Sv ? Sv : zv.length,
+         const MT = lT.Dv().getCaps().maxTextureSize ?? 1,
+           KT = kT.length > MT ? MT : kT.length,
```

#### 586. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9173` → after: `L9173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L9173) · [Before (L9173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L9173)

```diff
-           dv = new fv.e(pv, ev, gv, lP.b.TEXTUREFORMAT_RGBA, hv, !1, !0, Pv);
+           fT = new FT.c(yT, KT, OT, Ac.c.TEXTUREFORMAT_RGBA, lT, !1, !0, cT);
```

#### 587. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9179` → after: `L9179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L9179) · [Before (L9179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L9179)

```diff
-           ah.EmptyColorsTexture = new fv.e(zv, 1, 1, lP.b.TEXTUREFORMAT_RGBA, vv, !1, !1, fv.e.NEAREST_NEAREST), ah.EmptyColorsTexture.name = "grlEmptyColorsTexture", ah.EmptyColorsTexture.uD.addOnce((() => {
+           tl.EmptyColorsTexture = new FT.c(kT, 1, 1, Ac.c.TEXTUREFORMAT_RGBA, TT, !1, !1, FT.c.NEAREST_NEAREST), tl.EmptyColorsTexture.name = "grlEmptyColorsTexture", tl.EmptyColorsTexture.QJ.addOnce((() => {
```

#### 588. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9192` → after: `L9192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L9192) · [Before (L9192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L9192)

```diff
-     class mh extends Lv.c {
+     class al extends dT.e {
```

#### 589. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9197` → after: `L9197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L9197) · [Before (L9197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L9197)

```diff
-     class jh extends Hv.d {
+     class Fl extends LT.b {
```

#### 590. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9206` → after: `L9206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L9206) · [Before (L9206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L9206)

```diff
-         hv.GREASED_LINE_HAS_COLOR = !!Pv.color && !Pv.useColors, hv.GREASED_LINE_SIZE_ATTENUATION = Pv.sizeAttenuation ?? !1, hv.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === Pv.colorDistributionType, hv.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = (zv ?? vv.rD()).useRightHa … [truncated]
+         lT.GREASED_LINE_HAS_COLOR = !!cT.color && !cT.useColors, lT.GREASED_LINE_SIZE_ATTENUATION = cT.sizeAttenuation ?? !1, lT.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === cT.colorDistributionType, lT.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = (kT ?? TT.NJ()).useRightHa … [truncated]
```

#### 591. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9261-L9262` → after: `L9261-L9262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9261-L9262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L9261-L9262) · [Before (L9261-L9262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L9261-L9262)

```diff
-           vv.Xu("grl_projection", this._scene.getProjectionMatrix()), this._isGLSL(this._material.shaderLanguage) || vv.Xu("viewProjection", this._scene.getTransformMatrix());
-           const zv = Zv.i.Vector4[0];
+           TT.X3("grl_projection", this._scene.getProjectionMatrix()), this._isGLSL(this._material.shaderLanguage) || TT.X3("viewProjection", this._scene.getTransformMatrix());
+           const kT = uT.h.Vector4[0];
```

#### 592. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9265` → after: `L9265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L9265) · [Before (L9265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L9265)

```diff
-         const zv = Zv.i.Vector4[0];
+         const kT = uT.h.Vector4[0];
```

#### 593. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9267` → after: `L9267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L9267) · [Before (L9267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L9267)

```diff
-         const Pv = Zv.i.Vector4[1];
+         const cT = uT.h.Vector4[1];
```

#### 594. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9391` → after: `L9391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L9391) · [Before (L9391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L9391)

```diff
-         zv.colorsTexture?.dispose(), this._colors && (zv.colorsTexture = Gh.CreateColorsTexture(`${zv._material.name}-colors-texture`, this._colors, zv.colorsSampling, this._scene)), zv.setColor(this.color, !0), zv.colorsDistributionType = this.colorsDistributionType, zv.colorsSa … [truncated]
+         kT.colorsTexture?.dispose(), this._colors && (kT.colorsTexture = Dl.CreateColorsTexture(`${kT._material.name}-colors-texture`, this._colors, kT.colorsSampling, this._scene)), kT.setColor(this.color, !0), kT.colorsDistributionType = this.colorsDistributionType, kT.colorsSa … [truncated]
```

#### 595. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9398-L9403` → after: `L9398-L9403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9398-L9403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L9398-L9403) · [Before (L9398-L9403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L9398-L9403)

```diff
-     var fh = Pv(39712),
-       Fh = Pv(39720),
-       Yh = Pv(38207),
-       nh = Pv(39790),
-       Oh = Pv(39143);
-     class Dh extends nh.o {
+     var rl = cT(40025),
+       Pl = cT(40038),
+       wl = cT(38507),
+       ml = cT(40104),
+       bl = cT(39458);
+     class zl extends ml.q {
```

#### 596. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9405` → after: `L9405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L9405) · [Before (L9405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L9405)

```diff
-         const Sv = zv.ma(),
+         const MT = kT.Dv(),
```

#### 597. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9422` → after: `L9422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L9422) · [Before (L9422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L9422)

```diff
-               ev ? await Promise.all([Pv.e(325).then((() => Pv(61304))), Pv.e(384).then((() => Pv(61308)))]) : await Promise.all([Pv.e(318).then((() => Pv(61315))), Pv.e(385).then((() => Pv(61322)))])
+               KT ? await Promise.all([cT.e(325).then((() => cT(61278))), cT.e(384).then((() => cT(61287)))]) : await Promise.all([cT.e(318).then((() => cT(61289))), cT.e(385).then((() => cT(61295)))])
```

#### 598. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9425` → after: `L9425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L9425) · [Before (L9425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L9425)

```diff
-           }), this._color = Jv.b.White(), this._colorsDistributionType = 0, this._colorsTexture = null, hv = hv || {
+           }), this._color = YT.c.White(), this._colorsDistributionType = 0, this._colorsTexture = null, lT = lT || {
```

#### 599. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9427-L9428` → after: `L9427-L9428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9427-L9428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L9427-L9428) · [Before (L9427-L9428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L9427-L9428)

```diff
-           }, this.visibility = hv.visibility ?? 1, this.useDash = hv.useDash ?? !1, this.dashRatio = hv.dashRatio ?? .5, this.dashOffset = hv.dashOffset ?? 0, this.dashCount = hv.dashCount ?? 1, this.width = hv.width ? hv.width : hv.sizeAttenuation && hv.cameraFacing ? ah.DEFAULT … [truncated]
-           const vv = new Oh.d;
+           }, this.visibility = lT.visibility ?? 1, this.useDash = lT.useDash ?? !1, this.dashRatio = lT.dashRatio ?? .5, this.dashOffset = lT.dashOffset ?? 0, this.dashCount = lT.dashCount ?? 1, this.width = lT.width ? lT.width : lT.sizeAttenuation && lT.cameraFacing ? tl.DEFAULT … [truncated]
+           const TT = new bl.b;
```

#### 600. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9431` → after: `L9431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L9431) · [Before (L9431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L9431)

```diff
-         Sv.uD.add((() => {
+         MT.QJ.add((() => {
```

#### 601. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9439` → after: `L9439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L9439) · [Before (L9439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L9439)

```diff
-         this.setVector2("grl_colorModeAndColorDistributionType", new Zv.j(this._colorMode, this._colorsDistributionType))
+         this.setVector2("grl_colorModeAndColorDistributionType", new uT.i(this._colorMode, this._colorsDistributionType))
```

#### 602. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9459` → after: `L9459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L9459) · [Before (L9459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L9459)

```diff
-             } else this._colorsTexture && this._colorsTexture !== ah.EmptyColorsTexture && this._colorsTexture.dispose(), this.colorsTexture = Gh.CreateColorsTexture(`${this.name}-colors-texture`, vv, this.colorsSampling, this.rD())
+             } else this._colorsTexture && this._colorsTexture !== tl.EmptyColorsTexture && this._colorsTexture.dispose(), this.colorsTexture = Dl.CreateColorsTexture(`${this.name}-colors-texture`, TT, this.colorsSampling, this.NJ())
```

#### 603. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9462` → after: `L9462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L9462) · [Before (L9462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L9462)

```diff
-           const vv = this.rD();
+           const TT = this.NJ();
```

#### 604. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9575` → after: `L9575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L9575) · [Before (L9575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L9575)

```diff
-         this._colorsTexture?.dispose(), hv.color && (this.color = hv.color), hv.colorDistributionType && (this.colorsDistributionType = hv.colorDistributionType), hv.colorsSampling && (this.colorsSampling = hv.colorsSampling), hv.colorMode && (this.colorMode = hv.colorMode), hv.u … [truncated]
+         this._colorsTexture?.dispose(), lT.color && (this.color = lT.color), lT.colorDistributionType && (this.colorsDistributionType = lT.colorDistributionType), lT.colorsSampling && (this.colorsSampling = lT.colorsSampling), lT.colorMode && (this.colorMode = lT.colorMode), lT.u … [truncated]
```

#### 605. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9589` → after: `L9589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L9589) · [Before (L9589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L9589)

```diff
-     class Rh extends fh.c {
+     class el extends rl.e {
```

#### 606. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9591` → after: `L9591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L9591) · [Before (L9591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L9591)

```diff
-         super(vv, zv, null, null, !1, !1), this.name = vv, this._options = Pv, this._lazy = !1, this._updatable = !1, this._engine = zv.ma(), this._lazy = Pv.lazy ?? !1, this._updatable = Pv.updatable ?? !1, this._vertexPositions = [], this._indices = [], this._uvs = [], this._po … [truncated]
+         super(TT, kT, null, null, !1, !1), this.name = TT, this._options = cT, this._lazy = !1, this._updatable = !1, this._engine = kT.Dv(), this._lazy = cT.lazy ?? !1, this._updatable = cT.updatable ?? !1, this._vertexPositions = [], this._indices = [], this._uvs = [], this._po … [truncated]
```

#### 607. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9603` → after: `L9603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L9603) · [Before (L9603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L9603)

```diff
-         this._setPoints(this._points), this._options.colorPointers || this._updateColorPointers(), this._createVertexBuffers(this._options.ribbonOptions?.smoothShading), !this.Ya && this.refreshBoundingInfo(), this.greasedLineMaterial?.updateLazy()
+         this._setPoints(this._points), this._options.colorPointers || this._updateColorPointers(), this._createVertexBuffers(this._options.ribbonOptions?.smoothShading), !this.Pv && this.refreshBoundingInfo(), this.greasedLineMaterial?.updateLazy()
```

#### 608. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9620` → after: `L9620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L9620) · [Before (L9620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L9620)

```diff
-         this._uvs = vv instanceof Float32Array ? vv : new Float32Array(vv), this._createVertexBuffers()
+         this._uvs = TT instanceof Float32Array ? TT : new Float32Array(TT), this._createVertexBuffers()
```

#### 609. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9647` → after: `L9647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L9647) · [Before (L9647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L9647)

```diff
-         return Yh.b.DeepCopy(this._points, vv), vv
+         return wl.d.DeepCopy(this._points, TT), TT
```

#### 610. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9675-L9676` → after: `L9675-L9676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9675-L9676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L9675-L9676) · [Before (L9675-L9676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L9675-L9676)

```diff
-         const zv = this._scene.ma(),
-           Pv = new Av.c(zv, vv, this._updatable, 3);
+         const kT = this._scene.Dv(),
+           cT = new XT.d(kT, TT, this._updatable, 3);
```

#### 611. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9808` → after: `L9808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L9808) · [Before (L9808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L9808)

```diff
-         let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sv.e.LastCreatedScene,
+         let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tT.d.LastCreatedScene,
```

#### 612. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9812` → after: `L9812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L9812) · [Before (L9812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L9812)

```diff
-               generator: `Babylon.js v${av.d.Version}`,
+               generator: `Babylon.js v${vT.d.Version}`,
```

#### 613. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9819` → after: `L9819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L9819) · [Before (L9819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L9819)

```diff
-           metadataSelector: vv => vv?.nD?.extras,
+           metadataSelector: TT => TT?.KJ?.extras,
```

#### 614. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9840` → after: `L9840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L9840) · [Before (L9840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L9840)

```diff
-         th.UnregisterExtension(vv) && Sv.Tools.Warn(`Extension with the name ${vv} already exists`), th._ExtensionFactories[vv] = zv;
+         Vl.UnregisterExtension(TT) && MT.Tools.Warn(`Extension with the name ${TT} already exists`), Vl._ExtensionFactories[TT] = kT;
```

#### 615. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9863` → after: `L9863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L9863) · [Before (L9863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L9863)

```diff
-         return hv.byteLength && (this._glTF.buffers = [hv]), this._nodes && this._nodes.length && (this._glTF.nodes = this._nodes), this._meshes && this._meshes.length && (this._glTF.meshes = this._meshes), this._scenes && this._scenes.length && (this._glTF.scenes = this._scenes, … [truncated]
+         return lT.byteLength && (this._glTF.buffers = [lT]), this._nodes && this._nodes.length && (this._glTF.nodes = this._nodes), this._meshes && this._meshes.length && (this._glTF.meshes = this._meshes), this._scenes && this._scenes.length && (this._glTF.scenes = this._scenes, … [truncated]
```

#### 616. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9884` → after: `L9884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L9884) · [Before (L9884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L9884)

```diff
-         return 0 === zv ? zv : 4 - zv
+         return 0 === kT ? kT : 4 - kT
```

#### 617. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9917-L9919` → after: `L9917-L9919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9917-L9919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L9917-L9919) · [Before (L9917-L9919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L9917-L9919)

```diff
-         if (zv.getPivotPoint().equalsWithEpsilon(IP, xP.e) || Sv.Tools.Warn("Pivot points are not supported in the glTF serializer"), !zv.position.equalsWithEpsilon(IP, xP.e)) {
-           const Sv = hv.TmpVectors.fa[0].Vzv(zv.position);
-           Pv && BP(Sv), vv.translation = Sv.pPv()
+         if (kT.getPivotPoint().equalsWithEpsilon(Zc, Gc.b) || MT.Tools.Warn("Pivot points are not supported in the glTF serializer"), !kT.position.equalsWithEpsilon(Zc, Gc.b)) {
+           const MT = lT.TmpVectors.Fv[0].UkT(kT.position);
+           cT && Yc(MT), TT.translation = MT.acT()
```

#### 618. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9921` → after: `L9921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L9921) · [Before (L9921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L9921)

```diff
-         zv.pp.equalsWithEpsilon(ZP, xP.e) || (vv.scale = zv.pp.pPv());
+         kT.GA.equalsWithEpsilon(Xc, Gc.b) || (TT.scale = kT.GA.acT());
```

#### 619. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9923` → after: `L9923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L9923) · [Before (L9923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L9923)

```diff
-         ev.equalsWithEpsilon(QP, xP.e) || (Pv && JP(ev), vv.rotation = ev.normalize().pPv())
+         KT.equalsWithEpsilon(uc, Gc.b) || (cT && Bc(KT), TT.rotation = KT.normalize().acT())
```

#### 620. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9926` → after: `L9926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L9926) · [Before (L9926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L9926)

```diff
-         const Sv = hv.TmpVectors.fa[0],
+         const MT = lT.TmpVectors.Fv[0],
```

#### 621. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9933` → after: `L9933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L9933) · [Before (L9933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L9933)

```diff
-         Sv.equalsWithEpsilon(IP, xP.e) || (Pv && BP(Sv), vv.translation = Sv.pPv()), Pv && JP(ev), this._babylonScene.useRightHandedSystem || EP(ev), ev.equalsWithEpsilon(QP, xP.e) || (vv.rotation = ev.pPv())
+         MT.equalsWithEpsilon(Zc, Gc.b) || (cT && Yc(MT), TT.translation = MT.acT()), cT && Bc(KT), this._babylonScene.useRightHandedSystem || Wc(KT), KT.equalsWithEpsilon(uc, Gc.b) || (TT.rotation = KT.acT())
```

#### 622. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9941-L9942` → after: `L9941-L9942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9941-L9942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L9941-L9942) · [Before (L9941-L9942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L9941-L9942)

```diff
-             aspectRatio: vv.ma().getAspectRatio(vv),
-             yfov: vv.fovMode === hh.c.FOVMODE_VERTICAL_FIXED ? vv.fov : vv.fov * vv.ma().getAspectRatio(vv),
+             aspectRatio: TT.Dv().getAspectRatio(TT),
+             yfov: TT.fovMode === Ml.c.FOVMODE_VERTICAL_FIXED ? TT.fov : TT.fov * TT.Dv().getAspectRatio(TT),
```

#### 623. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9947-L9948` → after: `L9947-L9948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9947-L9948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L9947-L9948) · [Before (L9947-L9948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L9947-L9948)

```diff
-             const Pv = vv.orthoLeft && vv.orthoRight ? .5 * (vv.orthoRight - vv.orthoLeft) : .5 * vv.ma().getRenderWidth(),
-               hv = vv.orthoBottom && vv.orthoTop ? .5 * (vv.orthoTop - vv.orthoBottom) : .5 * vv.ma().getRenderHeight();
+             const cT = TT.orthoLeft && TT.orthoRight ? .5 * (TT.orthoRight - TT.orthoLeft) : .5 * TT.Dv().getRenderWidth(),
+               lT = TT.orthoBottom && TT.orthoTop ? .5 * (TT.orthoTop - TT.orthoBottom) : .5 * TT.Dv().getRenderHeight();
```

#### 624. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10058` → after: `L10058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L10058) · [Before (L10058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L10058)

```diff
-         return Pv >= 0 ? Pv : void 0
+         return cT >= 0 ? cT : void 0
```

#### 625. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10096` → after: `L10096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L10096) · [Before (L10096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L10096)

```diff
-             return Pv >= 0 ? Pv : void 0
+             return cT >= 0 ? cT : void 0
```

#### 626. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10104` → after: `L10104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L10104) · [Before (L10104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L10104)

```diff
-         if (!hv) throw new Error(`Cannot write ${zv}: glTF node ${vv} does not exist.`);
+         if (!lT) throw new Error(`Cannot write ${kT}: glTF node ${TT} does not exist.`);
```

#### 627. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10118` → after: `L10118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L10118) · [Before (L10118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L10118)

```diff
-         if (this._shouldExportNode(vv) && vv instanceof Wv.e && vv.geometry) {
+         if (this._shouldExportNode(TT) && TT instanceof CT.d && TT.geometry) {
```

#### 628. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10169` → after: `L10169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L10169) · [Before (L10169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L10169)

```diff
-                 (0, UP.j)(gv, Pv, Sv, ev, pv, dv, Nv, (vv => {
+                 (0, Hc.g)(OT, cT, MT, KT, yT, fT, xT, (TT => {
```

#### 629. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10181` → after: `L10181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L10181) · [Before (L10181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L10181)

```diff
-                   Dv.d.Warn("Not converting vertex color space, as buffer is shared by StandardMaterials and other material types. Results may look incorrect.");
+                   bT.e.Warn("Not converting vertex color space, as buffer is shared by StandardMaterials and other material types. Results may look incorrect.");
```

#### 630. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10184` → after: `L10184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L10184) · [Before (L10184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L10184)

```diff
-                 pv == lv.i.UNSIGNED_BYTE && Dv.d.Warn("Converting uint8 vertex colors to linear space. Results may look incorrect.");
+                 yT == IT.i.UNSIGNED_BYTE && bT.e.Warn("Converting uint8 vertex colors to linear space. Results may look incorrect.");
```

#### 631. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10186-L10189` → after: `L10186-L10189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10186-L10189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L10186-L10189) · [Before (L10186-L10189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L10186-L10189)

```diff
-                   Tv = new Cv.d,
-                   Wv = this._babylonScene.ma().useExactSrgbConversions;
-                 (0, UP.j)(gv, Pv, Sv, ev, pv, dv, Nv, (vv => {
-                   3 === vv.length ? (hv.Evv(vv, 0), hv.toLinearSpaceToRef(hv, Wv), hv.toArray(vv, 0)) : (Tv.Evv(vv, 0), Tv.toLinearSpaceToRef(Tv, Wv), Tv.toArray(vv, 0))
+                   AT = new hT.e,
+                   CT = this._babylonScene.Dv().useExactSrgbConversions;
+                 (0, Hc.g)(OT, cT, MT, KT, yT, fT, xT, (TT => {
+                   3 === TT.length ? (lT.xkT(TT, 0), lT.toLinearSpaceToRef(lT, CT), lT.toArray(TT, 0)) : (AT.xkT(TT, 0), AT.toLinearSpaceToRef(AT, CT), AT.toArray(TT, 0))
```

#### 632. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10210` → after: `L10210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L10210) · [Before (L10210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L10210)

```diff
-                   (0, UP.j)(gv, Pv, Sv, ev, pv, dv, Nv, (vv => {
+                   (0, Hc.g)(OT, cT, MT, KT, yT, fT, xT, (TT => {
```

#### 633. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10235` → after: `L10235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L10235) · [Before (L10235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L10235)

```diff
-           0 !== Nv.size && Dv.d.Warn("Joint indices conversion needed: some joint indices are stored as floats in Babylon but GLTF requires UNSIGNED BYTES. We will perform the conversion but this might lead to unused data in the buffer.");
+           0 !== xT.size && bT.e.Warn("Joint indices conversion needed: some joint indices are stored as floats in Babylon but GLTF requires UNSIGNED BYTES. We will perform the conversion but this might lead to unused data in the buffer.");
```

#### 634. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10282-L10284` → after: `L10282-L10284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10282-L10284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L10282-L10284) · [Before (L10282-L10284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L10282-L10284)

```diff
-         if (vv instanceof Tv.b && (this._setNodeTransformation(Pv, vv, zv.convertToRightHanded), vv instanceof Wv.e)) {
-           const hv = vv instanceof wv.d ? vv.hhv : vv;
-           if (hv.sF && hv.sF.length > 0 && (Pv.mesh = await this._exportMeshAsync(hv, zv)), vv.skeleton) {
+         if (TT instanceof AT.b && (this._setNodeTransformation(cT, TT, kT.convertToRightHanded), TT instanceof CT.d)) {
+           const lT = TT instanceof jT.e ? TT.hlT : TT;
+           if (lT.kF && lT.kF.length > 0 && (cT.mesh = await this._exportMeshAsync(lT, kT)), TT.skeleton) {
```

#### 635. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10289` → after: `L10289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L10289) · [Before (L10289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L10289)

```diff
-         if (vv instanceof RP.e) {
+         if (TT instanceof ec.g) {
```

#### 636. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10304` → after: `L10304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L10304) · [Before (L10304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L10304)

```diff
-         return await this._extensionsPostExportNodeAsync("exportNodeAsync", Pv, vv, this._nodeMap, zv.convertToRightHanded) ? Pv : (Dv.d.Warn(`Not exporting node ${vv.name}`), null)
+         return await this._extensionsPostExportNodeAsync("exportNodeAsync", cT, TT, this._nodeMap, kT.convertToRightHanded) ? cT : (bT.e.Warn(`Not exporting node ${TT.name}`), null)
```

#### 637. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10310` → after: `L10310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L10310) · [Before (L10310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L10310)

```diff
-             case ev.b.TriangleFillMode:
+             case KT.e.TriangleFillMode:
```

#### 638. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10312` → after: `L10312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L10312) · [Before (L10312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L10312)

```diff
-             case ev.b.TriangleStripDrawMode:
+             case KT.e.TriangleStripDrawMode:
```

#### 639. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10314` → after: `L10314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L10314) · [Before (L10314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L10314)

```diff
-             case ev.b.TriangleFanDrawMode:
+             case KT.e.TriangleFanDrawMode:
```

#### 640. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10316-L10317` → after: `L10316-L10317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10316-L10317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L10316-L10317) · [Before (L10316-L10317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L10316-L10317)

```diff
-             case ev.b.PointListDrawMode:
-             case ev.b.PointFillMode:
+             case KT.e.PointListDrawMode:
+             case KT.e.PointFillMode:
```

#### 641. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10319` → after: `L10319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L10319) · [Before (L10319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L10319)

```diff
-             case ev.b.LineLoopDrawMode:
+             case KT.e.LineLoopDrawMode:
```

#### 642. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10321` → after: `L10321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L10321) · [Before (L10321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L10321)

```diff
-             case ev.b.LineListDrawMode:
+             case KT.e.LineListDrawMode:
```

#### 643. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10323` → after: `L10323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L10323) · [Before (L10323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L10323)

```diff
-             case ev.b.LineStripDrawMode:
+             case KT.e.LineStripDrawMode:
```

#### 644. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10326` → after: `L10326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L10326) · [Before (L10326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L10326)

```diff
-           throw new Error(`Unknown fill mode: ${vv}`)
+           throw new Error(`Unknown fill mode: ${TT}`)
```

#### 645. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10328` → after: `L10328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L10328) · [Before (L10328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L10328)

```diff
-         const Tv = pv !== ev.b.CounterClockWiseSideOrientation && function(vv) {
+         const AT = yT !== KT.e.CounterClockWiseSideOrientation && function(TT) {
```

#### 646. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10330-L10332` → after: `L10330-L10332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10330-L10332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L10330-L10332) · [Before (L10330-L10332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L10330-L10332)

```diff
-             case ev.b.TriangleFillMode:
-             case ev.b.TriangleStripDrawMode:
-             case ev.b.TriangleFanDrawMode:
+             case KT.e.TriangleFillMode:
+             case KT.e.TriangleStripDrawMode:
+             case KT.e.TriangleFanDrawMode:
```

#### 647. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10338` → after: `L10338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L10338) · [Before (L10338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L10338)

```diff
-           if (gv === ev.b.TriangleStripDrawMode || gv === ev.b.TriangleFanDrawMode) throw new Error("Triangle strip/fan fill mode is not implemented");
+           if (OT === KT.e.TriangleStripDrawMode || OT === KT.e.TriangleFanDrawMode) throw new Error("Triangle strip/fan fill mode is not implemented");
```

#### 648. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10377` → after: `L10377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L10377) · [Before (L10377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L10377)

```diff
-               return (0, UP.j)(vv, Sv + Pv * ev, ev, dv, gv, hv * dv, pv, (vv => {
+               return (0, Hc.g)(TT, MT + cT * KT, KT, fT, OT, lT * fT, yT, (TT => {
```

#### 649. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10409` → after: `L10409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L10409) · [Before (L10409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L10409)

```diff
-             throw new Error(`Unknown kind ${vv}`)
+             throw new Error(`Unknown kind ${TT}`)
```

#### 650. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10443` → after: `L10443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L10443) · [Before (L10443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L10443)

```diff
-           throw new Error(`Unknown kind: ${vv}`)
+           throw new Error(`Unknown kind: ${TT}`)
```

#### 651. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10450` → after: `L10450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L10450) · [Before (L10450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L10450)

```diff
-           if ((vv = vv instanceof Sh.d ? vv.T_[Pv.materialIndex] : vv) instanceof fz) Sv = await this._materialExporter.exportPBRMaterialAsync(vv, hv);
+           if ((TT = TT instanceof Kl.c ? TT.o4[cT.materialIndex] : TT) instanceof Fk) MT = await this._materialExporter.exportPBRMaterialAsync(TT, lT);
```

#### 652. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10453` → after: `L10453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L10453) · [Before (L10453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L10453)

```diff
-             if (!(vv instanceof Xz)) return void Dv.d.Warn(`Unsupported material '${vv.name}' with type ${vv.getClassName()}`);
+             if (!(TT instanceof sk)) return void bT.e.Warn(`Unsupported material '${TT.name}' with type ${TT.getClassName()}`);
```

#### 653. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10467` → after: `L10467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L10467) · [Before (L10467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L10467)

```diff
-         const Sv = vv.isUnIndexed ? null : vv.dPv(),
+         const MT = TT.isUnIndexed ? null : TT.FcT(),
```

#### 654. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10472` → after: `L10472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L10472) · [Before (L10472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L10472)

```diff
-           lv = vv.sF;
+           IT = TT.kF;
```

#### 655. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10478` → after: `L10478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L10478) · [Before (L10478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L10478)

```diff
-               lv = Tv.na() || this._babylonScene.defaultMaterial;
+               IT = AT.wv() || this._babylonScene.defaultMaterial;
```

#### 656. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10487-L10488` → after: `L10487-L10488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10487-L10488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L10487-L10488) · [Before (L10487-L10488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L10487-L10488)

```diff
-               (!gv.equalsWithEpsilon(Sv, xP.e) || ev < 1) && (zv.pbrMetallicRoughness = {
-                 baseColorFactor: [...gv.pPv(), ev]
+               (!OT.equalsWithEpsilon(MT, Gc.b) || KT < 1) && (kT.pbrMetallicRoughness = {
+                 baseColorFactor: [...OT.acT(), KT]
```

#### 657. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10495-L10496` → after: `L10495-L10496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10495-L10496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L10495-L10496) · [Before (L10495-L10496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L10495-L10496)

```diff
-               (!hv.color.equalsWithEpsilon(Cv.Color3.White(), xP.e) || hv.alpha < 1) && (zv.pbrMetallicRoughness = {
-                 baseColorFactor: [...hv.color.pPv(), hv.alpha]
+               (!lT.color.equalsWithEpsilon(hT.Color3.White(), Gc.b) || lT.alpha < 1) && (kT.pbrMetallicRoughness = {
+                 baseColorFactor: [...lT.color.acT(), lT.alpha]
```

#### 658. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10499` → after: `L10499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L10499) · [Before (L10499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L10499)

```diff
-             const Wv = dv || Nv ? ev.b.LineListDrawMode : vv.overrideRenderingFillMode ?? lv.fillMode;
+             const CT = fT || xT ? KT.e.LineListDrawMode : TT.overrideRenderingFillMode ?? IT.fillMode;
```

#### 659. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10501` → after: `L10501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L10501) · [Before (L10501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L10501)

```diff
-             zv.wasAddedByNoopNode && !vv.rD().useRightHandedSystem && (wv = wv === ev.b.ClockWiseSideOrientation ? ev.b.CounterClockWiseSideOrientation : ev.b.ClockWiseSideOrientation), this._exportIndices(Sv, Sv ? (0, UP.c)(Sv, Tv.indexCount, Tv.indexStart, Tv.verticesStart) : T … [truncated]
+             kT.wasAddedByNoopNode && !TT.NJ().useRightHandedSystem && (jT = jT === KT.e.ClockWiseSideOrientation ? KT.e.CounterClockWiseSideOrientation : KT.e.ClockWiseSideOrientation), this._exportIndices(MT, MT ? (0, Hc.e)(MT, AT.indexCount, AT.indexStart, AT.verticesStart) : A … [truncated]
```

#### 660. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10548` → after: `L10548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L10548) · [Before (L10548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L10548)

```diff
-           if (zv && Pv instanceof fh.c && Pv.hasThinInstances && this._exporter) {
+           if (kT && cT instanceof rl.e && cT.hasThinInstances && this._exporter) {
```

#### 661. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10550-L10552` → after: `L10550-L10552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10550-L10552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L10550-L10552) · [Before (L10550-L10552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L10550-L10552)

```diff
-             const vv = Zv.l.Zero(),
-               hv = Zv.d.Identity(),
-               gv = Zv.l.One(),
+             const TT = uT.m.Zero(),
+               lT = uT.f.Identity(),
+               OT = uT.m.One(),
```

#### 662. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10554-L10556` → after: `L10554-L10556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10554-L10556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L10554-L10556) · [Before (L10554-L10556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L10554-L10556)

```diff
-               dv = Zv.i.fa[2],
-               Nv = Zv.i.Quaternion[1],
-               lv = Zv.i.fa[3];
+               fT = uT.h.Fv[2],
+               xT = uT.h.Quaternion[1],
+               IT = uT.h.Fv[3];
```

#### 663. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10560-L10562` → after: `L10560-L10562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10560-L10562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L10560-L10562) · [Before (L10560-L10562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L10560-L10562)

```diff
-             const av = new Float32Array(3 * Pv.yX),
-               sv = new Float32Array(4 * Pv.yX),
-               Cv = new Float32Array(3 * Pv.yX);
+             const vT = new Float32Array(3 * cT.w6),
+               tT = new Float32Array(4 * cT.w6),
+               hT = new Float32Array(3 * cT.w6);
```

#### 664. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10564` → after: `L10564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L10564) · [Before (L10564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L10564)

```diff
-             for (const zv of pv) zv.decompose(lv, Nv, dv), Sv && (BP(dv), JP(Nv)), av.set(dv.pPv(), 3 * iv), sv.set(Nv.normalize().pPv(), 4 * iv), Cv.set(lv.pPv(), 3 * iv), Tv = Tv || !dv.equalsWithEpsilon(vv), Wv = Wv || !Nv.equalsWithEpsilon(hv), wv = wv || !lv.equalsWithEpsilo … [truncated]
+             for (const kT of yT) kT.decompose(IT, xT, fT), MT && (Yc(fT), Bc(xT)), vT.set(fT.acT(), 3 * NT), tT.set(xT.normalize().acT(), 4 * NT), hT.set(IT.acT(), 3 * NT), AT = AT || !fT.equalsWithEpsilon(TT), CT = CT || !xT.equalsWithEpsilon(lT), jT = jT || !IT.equalsWithEpsilo … [truncated]
```

#### 665. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10568` → after: `L10568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L10568) · [Before (L10568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L10568)

```diff
-             Tv && (cv.attributes.TRANSLATION = this._buildAccessor(av, "VEC3", Pv.yX, ev)), Wv && (cv.attributes.ROTATION = this._buildAccessor(sv, "VEC4", Pv.yX, ev)), wv && (cv.attributes.SCALE = this._buildAccessor(Cv, "VEC3", Pv.yX, ev));
+             AT && (QT.attributes.TRANSLATION = this._buildAccessor(vT, "VEC3", cT.w6, KT)), CT && (QT.attributes.ROTATION = this._buildAccessor(tT, "VEC4", cT.w6, KT)), jT && (QT.attributes.SCALE = this._buildAccessor(hT, "VEC3", cT.w6, KT));
```

#### 666. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10571` → after: `L10571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L10571) · [Before (L10571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L10571)

```diff
-               const vv = Pv.yX,
+               const TT = cT.w6,
```

#### 667. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10573` → after: `L10573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L10573) · [Before (L10573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L10573)

```diff
-               Pv.hasVertexAlpha && Gv.length === 4 * vv ? (this._instanceColorWarned || (Dv.d.Warn("EXT_mesh_gpu_instancing: Exporting instance colors as RGB, alpha channel of instance color is not exported"), this._instanceColorWarned = !0), Gv = Qh(Gv, vv)) : Gv.length === 4 *  … [truncated]
+               cT.hasVertexAlpha && ST.length === 4 * TT ? (this._instanceColorWarned || (bT.e.Warn("EXT_mesh_gpu_instancing: Exporting instance colors as RGB, alpha channel of instance color is not exported"), this._instanceColorWarned = !0), ST = ul(ST, TT)) : ST.length === 4 *  … [truncated]
```

#### 668. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10591` → after: `L10591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L10591) · [Before (L10591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L10591)

```diff
-     Pv(39800);
+     cT(40120);
```

#### 669. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10593` → after: `L10593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L10593) · [Before (L10593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L10593)

```diff
-     var Hh = Pv(41174);
+     var Rl = cT(41405);
```

#### 670. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10691` → after: `L10691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L10691) · [Before (L10691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L10691)

```diff
-           return new Hh.c(Pv, (() => async function(vv, zv, Pv) {
+           return new Rl.d(cT, (() => async function(TT, kT, cT) {
```

#### 671. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10745` → after: `L10745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L10745) · [Before (L10745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L10745)

```diff
-       return vv === Av.k.PositionKind ? "POSITION" : vv === Av.k.NormalKind ? "NORMAL" : vv === Av.k.ColorKind ? "COLOR" : vv.startsWith(Av.k.UVKind) ? "TEX_COORD" : "GENERIC"
+       return TT === XT.l.PositionKind ? "POSITION" : TT === XT.l.NormalKind ? "NORMAL" : TT === XT.l.ColorKind ? "COLOR" : TT.startsWith(XT.l.UVKind) ? "TEX_COORD" : "GENERIC"
```

#### 672. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10781` → after: `L10781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L10781) · [Before (L10781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L10781)

```diff
-         return `${Mh}(${yh})()`
+         return `${gl}(${Ul})()`
```

#### 673. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10817` → after: `L10817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L10817) · [Before (L10817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L10817)

```diff
-         vv instanceof fh.c && vv.morphTargetManager && "MESH_EDGEBREAKER_ENCODING" === zv?.method && (Dv.d.Warn("Draco: Cannot use EDGEBREAKER encoding method with morph targets. Falling back to SEQUENTIAL method."), zv.method = "MESH_SEQUENTIAL_ENCODING");
+         TT instanceof rl.e && TT.morphTargetManager && "MESH_EDGEBREAKER_ENCODING" === kT?.method && (bT.e.Warn("Draco: Cannot use EDGEBREAKER encoding method with morph targets. Falling back to SEQUENTIAL method."), kT.method = "MESH_SEQUENTIAL_ENCODING");
```

#### 674. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10819-L10820` → after: `L10819-L10820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10819-L10820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L10819-L10820) · [Before (L10819-L10820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L10819-L10820)

```diff
-             let zv = vv.dPv(void 0, !0);
-             return !zv || zv instanceof Uint32Array || zv instanceof Uint16Array || (zv = ((0, UP.c)(zv, zv.length) ? Uint32Array : Uint16Array).from(zv)), zv
+             let kT = TT.FcT(void 0, !0);
+             return !kT || kT instanceof Uint32Array || kT instanceof Uint16Array || (kT = ((0, Hc.e)(kT, kT.length) ? Uint32Array : Uint16Array).from(kT)), kT
```

#### 675. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10826` → after: `L10826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L10826) · [Before (L10826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L10826)

```diff
-                 if (hv === Av.k.PositionKind) throw new Error("Draco: Cannot exclude position attribute from encoding.");
+                 if (lT === XT.l.PositionKind) throw new Error("Draco: Cannot exclude position attribute from encoding.");
```

#### 676. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10831` → after: `L10831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L10831) · [Before (L10831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L10831)

```diff
-                 gv = (0, UP.t)(Sv.getData(), ev, Sv.type, Sv.byteOffset, Sv.byteStride, vv.getTotalVertices(), !0);
+                 OT = (0, Hc.m)(MT.getData(), KT, MT.type, MT.byteOffset, MT.byteStride, TT.getTotalVertices(), !0);
```

#### 677. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10845-L10847` → after: `L10845-L10847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10845-L10847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/225.js#L10845-L10847) · [Before (L10845-L10847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/225.js#L10845-L10847)

```diff
-       wasmUrl: `${Yz.h._DefaultCdnUrl}/draco_encoder_wasm_wrapper.js`,
-       wasmBinaryUrl: `${Yz.h._DefaultCdnUrl}/draco_encoder.wasm`,
-       fallbackUrl: `${Yz.h._DefaultCdnUrl}/draco_encoder.js`
+       wasmUrl: `${Pk.h._DefaultCdnUrl}/draco_encoder_wasm_wrapper.js`,
+       wasmBinaryUrl: `${Pk.h._DefaultCdnUrl}/draco_encoder.wasm`,
+       fallbackUrl: `${Pk.h._DefaultCdnUrl}/draco_encoder.js`
```
