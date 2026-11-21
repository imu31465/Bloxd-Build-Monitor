# Changed — Bundle Modifications Report (Part 041 / 132)

- **Updated at**: `2026-11-21T10:00 JST`
- **Part**: `41 / 132` (**442** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 040](part-040.md) · [Part 042 →](part-042.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/225.js` (halsg.2bd74967 → x17cru.159bd7ce · continued)

- **File**: `bundles/bloxd.io/chunks/js/225.js` (1144 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789)

#### 819. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10845-L10847` → after: `L10845-L10847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10845-L10847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L10845-L10847) · [Before (L10845-L10847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L10845-L10847)

```diff
-       wasmUrl: `${ju.k._DefaultCdnUrl}/draco_encoder_wasm_wrapper.js`,
-       wasmBinaryUrl: `${ju.k._DefaultCdnUrl}/draco_encoder.wasm`,
-       fallbackUrl: `${ju.k._DefaultCdnUrl}/draco_encoder.js`
+       wasmUrl: `${iJ.h._DefaultCdnUrl}/draco_encoder_wasm_wrapper.js`,
+       wasmBinaryUrl: `${iJ.h._DefaultCdnUrl}/draco_encoder.wasm`,
+       fallbackUrl: `${iJ.h._DefaultCdnUrl}/draco_encoder.js`
```

#### 820. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10860` → after: `L10860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L10860) · [Before (L10860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L10860)

```diff
-         if (4 !== bb.mode && 5 !== bb.mode) return void xb.b.Warn("Cannot compress primitive with mode " + bb.mode + ".");
+         if (4 !== dd.mode && 5 !== dd.mode) return void Fd.c.Warn("Cannot compress primitive with mode " + dd.mode + ".");
```

#### 821. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10874` → after: `L10874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L10874) · [Before (L10874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L10874)

```diff
-             Sb = (0, ih.s)(ub.getData(Gb), Yb, bb.componentType, bb.byteOffset || 0, Gb.byteStride || (0, ih.r)(bb.componentType) * Yb, bb.count, !0);
+             Cd = (0, Sk.t)(Jd.getData(Wd), gd, dd.componentType, dd.byteOffset || 0, Wd.byteStride || (0, Sk.q)(dd.componentType) * gd, dd.count, !0);
```

#### 822. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10897` → after: `L10897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L10897) · [Before (L10897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L10897)

```diff
-             xb.b.Error("KHR_draco_mesh_compression: Failed to export Draco-encoded primitive. Resulting glTF may be invalid. " + bb.message)
+             Fd.c.Error("KHR_draco_mesh_compression: Failed to export Draco-encoded primitive. Resulting glTF may be invalid. " + dd.message)
```

#### 823. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10913` → after: `L10913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L10913) · [Before (L10913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L10913)

```diff
-     var bO = hb(41030);
+     var pN = kd(41547);
```

#### 824. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10925` → after: `L10925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L10925) · [Before (L10925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L10925)

```diff
-       OO = Mb.q.Backward();
+       ZN = yd.n.Backward();
```

#### 825. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10941-L10946` → after: `L10941-L10946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10941-L10946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L10941-L10946) · [Before (L10941-L10946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L10941-L10946)

```diff
-           if (!(hb instanceof aB.b)) return void Gb(ub);
-           const Ub = hb.getTypeID() == aB.b.LIGHTTYPEID_POINTLIGHT ? "point" : hb.getTypeID() == aB.b.LIGHTTYPEID_DIRECTIONALLIGHT ? "directional" : hb.getTypeID() == aB.b.LIGHTTYPEID_SPOTLIGHT ? "spot" : null;
-           if (!Ub || !(hb instanceof bO.d)) return xb.b.Warn(`${bb}: Light ${hb.name} is not supported in ${uO}`), void Gb(ub);
-           if (hb.falloffType !== aB.b.FALLOFF_GLTF && xb.b.Warn(`${bb}: Light falloff for ${hb.name} does not match the ${uO} specification!`), !hb.position.sUb(0, 0, 0)) {
-             const bb = Mb.i.YX[0].mD(hb.position);
-             Ob && yh(bb), ub.translation = bb.ZBb()
+           if (!(kd instanceof lp.d)) return void Wd(Jd);
+           const Pd = kd.getTypeID() == lp.d.LIGHTTYPEID_POINTLIGHT ? "point" : kd.getTypeID() == lp.d.LIGHTTYPEID_DIRECTIONALLIGHT ? "directional" : kd.getTypeID() == lp.d.LIGHTTYPEID_SPOTLIGHT ? "spot" : null;
+           if (!Pd || !(kd instanceof pN.b)) return Fd.c.Warn(`${dd}: Light ${kd.name} is not supported in ${NN}`), void Wd(Jd);
+           if (kd.falloffType !== lp.d.FALLOFF_GLTF && Fd.c.Warn(`${dd}: Light falloff for ${kd.name} does not match the ${NN} specification!`), !kd.position.zPd(0, 0, 0)) {
+             const dd = yd.h.IL[0].Fs(kd.position);
+             Nd && uk(dd), Jd.translation = dd.spd()
```

#### 826. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10949` → after: `L10949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L10949) · [Before (L10949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L10949)

```diff
-             const bb = hb.direction.normalizeToRef(Mb.i.YX[0]);
+             const dd = kd.direction.normalizeToRef(yd.h.IL[0]);
```

#### 827. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10951-L10952` → after: `L10951-L10952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10951-L10952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L10951-L10952) · [Before (L10951-L10952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L10951-L10952)

```diff
-             const Bb = Mb.f.FromUnitVectorsToRef(OO, bb, Mb.i.Quaternion[0]);
-             Mb.f.IsIdentity(Bb) || (ub.rotation = Bb.ZBb())
+             const pd = yd.d.FromUnitVectorsToRef(ZN, dd, yd.h.Quaternion[0]);
+             yd.d.IsIdentity(pd) || (Jd.rotation = pd.spd())
```

#### 828. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10957` → after: `L10957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L10957) · [Before (L10957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L10957)

```diff
-             color: hb.diffuse.ZBb(),
+             color: kd.diffuse.spd(),
```

#### 829. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11037` → after: `L11037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11037) · [Before (L11037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11037)

```diff
-       pO = Mb.q.Backward();
+       IN = yd.n.Backward();
```

#### 830. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11053-L11055` → after: `L11053-L11055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11053-L11055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11053-L11055) · [Before (L11053-L11055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11053-L11055)

```diff
-           if (!(hb instanceof aB.b)) return void Gb(ub);
-           const Ub = hb.getTypeID() == aB.b.LIGHTTYPEID_RECT_AREALIGHT ? "rect" : null;
-           if (!Ub) return xb.b.Warn(`${bb}: Light ${hb.name} is not supported in ${wO}`), void Gb(ub);
+           if (!(kd instanceof lp.d)) return void Wd(Jd);
+           const Pd = kd.getTypeID() == lp.d.LIGHTTYPEID_RECT_AREALIGHT ? "rect" : null;
+           if (!Pd) return Fd.c.Warn(`${dd}: Light ${kd.name} is not supported in ${ON}`), void Wd(Jd);
```

#### 831. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11057-L11059` → after: `L11057-L11059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11057-L11059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11057-L11059) · [Before (L11057-L11059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11057-L11059)

```diff
-           if (Lb.falloffType !== aB.b.FALLOFF_GLTF && xb.b.Warn(`${bb}: Light falloff for ${hb.name} does not match the ${wO} specification!`), !Lb.position.sUb(0, 0, 0)) {
-             const bb = Mb.i.YX[0].mD(Lb.position);
-             Ob && yh(bb), ub.translation = bb.ZBb()
+           if (Zd.falloffType !== lp.d.FALLOFF_GLTF && Fd.c.Warn(`${dd}: Light falloff for ${kd.name} does not match the ${ON} specification!`), !Zd.position.zPd(0, 0, 0)) {
+             const dd = yd.h.IL[0].Fs(Zd.position);
+             Nd && uk(dd), Jd.translation = dd.spd()
```

#### 832. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11061` → after: `L11061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11061) · [Before (L11061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11061)

```diff
-           const Yb = Mb.q.Forward();
+           const gd = yd.n.Forward();
```

#### 833. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11063-L11064` → after: `L11063-L11064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11063-L11064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11063-L11064) · [Before (L11063-L11064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11063-L11064)

```diff
-           const Sb = Mb.f.FromUnitVectorsToRef(pO, Yb, Mb.i.Quaternion[0]);
-           Mb.f.IsIdentity(Sb) || (ub.rotation = Sb.ZBb());
+           const Cd = yd.d.FromUnitVectorsToRef(IN, gd, yd.h.Quaternion[0]);
+           yd.d.IsIdentity(Cd) || (Jd.rotation = Cd.spd());
```

#### 834. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11068` → after: `L11068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11068) · [Before (L11068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11068)

```diff
-             color: Lb.diffuse.ZBb(),
+             color: Zd.diffuse.spd(),
```

#### 835. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11116` → after: `L11116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11116) · [Before (L11116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11116)

```diff
-             return `${ub&&ub.getInternalTexture()?ub.getInternalTexture().uniqueId:"NoStrength"}_${hb&&hb.getInternalTexture()?hb.getInternalTexture().uniqueId:"NoTangent"}`
+             return `${Jd&&Jd.getInternalTexture()?Jd.getInternalTexture().uniqueId:"NoStrength"}_${kd&&kd.getInternalTexture()?kd.getInternalTexture().uniqueId:"NoTangent"}`
```

#### 836. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11121` → after: `L11121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11121) · [Before (L11121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11121)

```diff
-               const ub = bb.ZN(),
+               const Jd = dd.Wm(),
```

#### 837. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11195-L11196` → after: `L11195-L11196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11195-L11196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11195-L11196) · [Before (L11195-L11196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11195-L11196)

```diff
-       const hb = new gb.f(ub.name, ub.ZN());
-       return hb._texture = bb, hb.coordinatesIndex = ub.coordinatesIndex, ub instanceof gb.f && (hb.uOffset = ub.uOffset, hb.vOffset = ub.vOffset, hb.uScale = ub.uScale, hb.vScale = ub.vScale, hb.wAng = ub.wAng), hb.wrapU = ub.wrapU, hb.wrapV = ub.wrapV, hb
+       const kd = new md.c(Jd.name, Jd.Wm());
+       return kd._texture = dd, kd.coordinatesIndex = Jd.coordinatesIndex, Jd instanceof md.c && (kd.uOffset = Jd.uOffset, kd.vOffset = Jd.vOffset, kd.uScale = Jd.uScale, kd.vScale = Jd.vScale, kd.wAng = Jd.wAng), kd.wrapU = Jd.wrapU, kd.wrapV = Jd.wrapV, kd
```

#### 838. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11226` → after: `L11226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11226) · [Before (L11226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11226)

```diff
-               return `${hb}_${Bb&&Bb.getInternalTexture()?Bb.getInternalTexture().uniqueId:"NoRoughness"}`
+               return `${kd}_${pd&&pd.getInternalTexture()?pd.getInternalTexture().uniqueId:"NoRoughness"}`
```

#### 839. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11230` → after: `L11230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11230) · [Before (L11230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11230)

```diff
-                 const ub = bb.ZN(),
+                 const Jd = dd.Wm(),
```

#### 840. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11250` → after: `L11250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11250) · [Before (L11250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11250)

```diff
-             Ob = hb.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(hb.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(hb.clearCoat.textureRoughness), hb.clearCoat.isTintEnabled && ju.k.Warn(`Clear Color tint is not sup … [truncated]
+             Nd = kd.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(kd.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(kd.clearCoat.textureRoughness), kd.clearCoat.isTintEnabled && iJ.h.Warn(`Clear Color tint is not sup … [truncated]
```

#### 841. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11263` → after: `L11263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11263) · [Before (L11263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11263)

```diff
-             this._wasUsed = !0, ub.extensions = ub.extensions || {}, hb.coatWeightTexture && (Bb = this._mergedTexturesMap[hb.coatWeightTexture.uniqueId], Ob = this._exporter._materialExporter.getTextureInfo(Bb)), hb.coatRoughnessTexture && (Gb = this._mergedTexturesMap[hb.coatRo … [truncated]
+             this._wasUsed = !0, Jd.extensions = Jd.extensions || {}, kd.coatWeightTexture && (pd = this._mergedTexturesMap[kd.coatWeightTexture.uniqueId], Nd = this._exporter._materialExporter.getTextureInfo(pd)), kd.coatRoughnessTexture && (Wd = this._mergedTexturesMap[kd.coatRo … [truncated]
```

#### 842. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11289` → after: `L11289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11289) · [Before (L11289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11289)

```diff
-       return `${ub&&ub.getInternalTexture()?ub.getInternalTexture().uniqueId:"NoStrength"}_${hb&&hb.getInternalTexture()?hb.getInternalTexture().uniqueId:"NoTangent"}`
+       return `${Jd&&Jd.getInternalTexture()?Jd.getInternalTexture().uniqueId:"NoStrength"}_${kd&&kd.getInternalTexture()?kd.getInternalTexture().uniqueId:"NoTangent"}`
```

#### 843. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11293-L11294` → after: `L11293-L11294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11293-L11294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11293-L11294) · [Before (L11293-L11294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11293-L11294)

```diff
-       const hb = new gb.f(ub.name, ub.ZN());
-       return hb._texture = bb, hb.coordinatesIndex = ub.coordinatesIndex, ub instanceof gb.f && (hb.uOffset = ub.uOffset, hb.vOffset = ub.vOffset, hb.uScale = ub.uScale, hb.vScale = ub.vScale, hb.wAng = ub.wAng), hb.wrapU = ub.wrapU, hb.wrapV = ub.wrapV, hb
+       const kd = new md.c(Jd.name, Jd.Wm());
+       return kd._texture = dd, kd.coordinatesIndex = Jd.coordinatesIndex, Jd instanceof md.c && (kd.uOffset = Jd.uOffset, kd.vOffset = Jd.vOffset, kd.uScale = Jd.uScale, kd.vScale = Jd.vScale, kd.wAng = Jd.wAng), kd.wrapU = Jd.wrapU, kd.wrapV = Jd.wrapV, kd
```

#### 844. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11324` → after: `L11324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11324) · [Before (L11324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11324)

```diff
-               return `${hb}_${Bb&&Bb.getInternalTexture()?Bb.getInternalTexture().uniqueId:"NoRoughness"}`
+               return `${kd}_${pd&&pd.getInternalTexture()?pd.getInternalTexture().uniqueId:"NoRoughness"}`
```

#### 845. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11328` → after: `L11328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11328) · [Before (L11328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11328)

```diff
-                 const ub = bb.ZN(),
+                 const Jd = dd.Wm(),
```

#### 846. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11342` → after: `L11342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11342) · [Before (L11342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11342)

```diff
-                 const ub = bb.ZN(),
+                 const Jd = dd.Wm(),
```

#### 847. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11372` → after: `L11372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11372) · [Before (L11372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11372)

```diff
-                 coatColorFactor: hb.clearCoat.tintColor.ZBb(),
+                 coatColorFactor: kd.clearCoat.tintColor.spd(),
```

#### 848. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11374` → after: `L11374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11374) · [Before (L11374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11374)

```diff
-                 coatIor: 1.5 !== Lb ? Lb : void 0
+                 coatIor: 1.5 !== Zd ? Zd : void 0
```

#### 849. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11419` → after: `L11419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11419) · [Before (L11419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11419)

```diff
-               coatColorFactor: hb.coatColor.ZBb(),
+               coatColorFactor: kd.coatColor.spd(),
```

#### 850. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11421-L11422` → after: `L11421-L11422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11421-L11422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11421-L11422) · [Before (L11421-L11422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11421-L11422)

```diff
-               coatIor: 1.5 !== ab ? ab : void 0,
-               coatDarkeningFactor: 1 !== Hb ? Hb : void 0,
+               coatIor: 1.5 !== Kd ? Kd : void 0,
+               coatDarkeningFactor: 1 !== od ? od : void 0,
```

#### 851. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11577` → after: `L11577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11577) · [Before (L11577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11577)

```diff
-           return (0, nb.b)(this, ub, "f")
+           return (0, ad.d)(this, Jd, "f")
```

#### 852. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11580` → after: `L11580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11580) · [Before (L11580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11580)

```diff
-           (0, nb.f)(this, ub, bb, "f")
+           (0, ad.e)(this, Jd, dd, "f")
```

#### 853. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11583` → after: `L11583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11583) · [Before (L11583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11583)

```diff
-           return (0, nb.b)(this, hb, "f")
+           return (0, ad.d)(this, kd, "f")
```

#### 854. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11586` → after: `L11586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11586) · [Before (L11586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11586)

```diff
-           (0, nb.f)(this, hb, bb, "f")
+           (0, ad.e)(this, kd, dd, "f")
```

#### 855. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11589` → after: `L11589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11589) · [Before (L11589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11589)

```diff
-           return (0, nb.b)(this, Bb, "f")
+           return (0, ad.d)(this, pd, "f")
```

#### 856. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11592` → after: `L11592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11592) · [Before (L11592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11592)

```diff
-           (0, nb.f)(this, Bb, bb, "f")
+           (0, ad.e)(this, pd, dd, "f")
```

#### 857. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11595` → after: `L11595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11595) · [Before (L11595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11595)

```diff
-           return (0, nb.b)(this, Ob, "f")
+           return (0, ad.d)(this, Nd, "f")
```

#### 858. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11598` → after: `L11598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11598) · [Before (L11598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11598)

```diff
-           (0, nb.f)(this, Ob, bb, "f")
+           (0, ad.e)(this, Nd, dd, "f")
```

#### 859. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11601` → after: `L11601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11601) · [Before (L11601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11601)

```diff
-           return (0, nb.b)(this, Ub, "f")
+           return (0, ad.d)(this, Pd, "f")
```

#### 860. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11604` → after: `L11604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11604) · [Before (L11604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11604)

```diff
-           (0, nb.f)(this, Ub, bb, "f")
+           (0, ad.e)(this, Pd, dd, "f")
```

#### 861. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11607` → after: `L11607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11607) · [Before (L11607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11607)

```diff
-           return (0, nb.b)(this, Lb, "f")
+           return (0, ad.d)(this, Zd, "f")
```

#### 862. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11610` → after: `L11610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11610) · [Before (L11610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11610)

```diff
-           (0, nb.f)(this, Lb, bb, "f")
+           (0, ad.e)(this, Zd, dd, "f")
```

#### 863. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11613` → after: `L11613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11613) · [Before (L11613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11613)

```diff
-           return (0, nb.b)(this, Yb, "f")
+           return (0, ad.d)(this, gd, "f")
```

#### 864. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11616` → after: `L11616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11616) · [Before (L11616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11616)

```diff
-           (0, nb.f)(this, Yb, bb, "f")
+           (0, ad.e)(this, gd, dd, "f")
```

#### 865. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11619` → after: `L11619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11619) · [Before (L11619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11619)

```diff
-           return (0, nb.b)(this, Sb, "f")
+           return (0, ad.d)(this, Cd, "f")
```

#### 866. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11622` → after: `L11622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11622) · [Before (L11622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11622)

```diff
-           (0, nb.f)(this, Sb, bb, "f")
+           (0, ad.e)(this, Cd, dd, "f")
```

#### 867. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11625` → after: `L11625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11625) · [Before (L11625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11625)

```diff
-           return (0, nb.b)(this, ab, "f")
+           return (0, ad.d)(this, Kd, "f")
```

#### 868. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11628` → after: `L11628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11628) · [Before (L11628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11628)

```diff
-           (0, nb.f)(this, ab, bb, "f")
+           (0, ad.e)(this, Kd, dd, "f")
```

#### 869. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11631` → after: `L11631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11631) · [Before (L11631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11631)

```diff
-           return (0, nb.b)(this, Hb, "f")
+           return (0, ad.d)(this, od, "f")
```

#### 870. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11634` → after: `L11634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11634) · [Before (L11634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11634)

```diff
-           (0, nb.f)(this, Hb, bb, "f")
+           (0, ad.e)(this, od, dd, "f")
```

#### 871. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11637` → after: `L11637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11637) · [Before (L11637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11637)

```diff
-           return (0, nb.b)(this, wb, "f")
+           return (0, ad.d)(this, ld, "f")
```

#### 872. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11640` → after: `L11640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11640) · [Before (L11640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11640)

```diff
-           (0, nb.f)(this, wb, bb, "f")
+           (0, ad.e)(this, ld, dd, "f")
```

#### 873. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11643` → after: `L11643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11643) · [Before (L11643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11643)

```diff
-           return (0, nb.b)(this, Zb, "f")
+           return (0, ad.d)(this, Qd, "f")
```

#### 874. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11646` → after: `L11646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11646) · [Before (L11646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11646)

```diff
-           (0, nb.f)(this, Zb, bb, "f")
+           (0, ad.e)(this, Qd, dd, "f")
```

#### 875. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11649` → after: `L11649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11649) · [Before (L11649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11649)

```diff
-           return (0, nb.b)(this, Xb, "f")
+           return (0, ad.d)(this, Ld, "f")
```

#### 876. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11652` → after: `L11652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11652) · [Before (L11652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11652)

```diff
-           (0, nb.f)(this, Xb, bb, "f")
+           (0, ad.e)(this, Ld, dd, "f")
```

#### 877. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11655` → after: `L11655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11655) · [Before (L11655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11655)

```diff
-           return (0, nb.b)(this, pb, "f")
+           return (0, ad.d)(this, Od, "f")
```

#### 878. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11658` → after: `L11658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11658) · [Before (L11658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11658)

```diff
-           (0, nb.f)(this, pb, bb, "f")
+           (0, ad.e)(this, Od, dd, "f")
```

#### 879. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11661` → after: `L11661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11661) · [Before (L11661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11661)

```diff
-           return (0, nb.b)(this, ob, "f")
+           return (0, ad.d)(this, ed, "f")
```

#### 880. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11664` → after: `L11664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11664) · [Before (L11664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11664)

```diff
-           (0, nb.f)(this, ob, bb, "f")
+           (0, ad.e)(this, ed, dd, "f")
```

#### 881. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11667` → after: `L11667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11667) · [Before (L11667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11667)

```diff
-           return (0, nb.b)(this, Ab, "f")
+           return (0, ad.d)(this, Rd, "f")
```

#### 882. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11670` → after: `L11670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11670) · [Before (L11670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11670)

```diff
-           (0, nb.f)(this, Ab, bb, "f")
+           (0, ad.e)(this, Rd, dd, "f")
```

#### 883. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11673` → after: `L11673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11673) · [Before (L11673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11673)

```diff
-           return (0, nb.b)(this, lb, "f")
+           return (0, ad.d)(this, Id, "f")
```

#### 884. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11676` → after: `L11676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11676) · [Before (L11676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11676)

```diff
-           (0, nb.f)(this, lb, bb, "f")
+           (0, ad.e)(this, Id, dd, "f")
```

#### 885. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11679` → after: `L11679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11679) · [Before (L11679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11679)

```diff
-           return (0, nb.b)(this, Kb, "f")
+           return (0, ad.d)(this, Gd, "f")
```

#### 886. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11682` → after: `L11682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11682) · [Before (L11682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11682)

```diff
-           (0, nb.f)(this, Kb, bb, "f")
+           (0, ad.e)(this, Gd, dd, "f")
```

#### 887. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11685` → after: `L11685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11685) · [Before (L11685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11685)

```diff
-           return (0, nb.b)(this, Wb, "f")
+           return (0, ad.d)(this, vd, "f")
```

#### 888. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11688` → after: `L11688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11688) · [Before (L11688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11688)

```diff
-           (0, nb.f)(this, Wb, bb, "f")
+           (0, ad.e)(this, vd, dd, "f")
```

#### 889. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11691` → after: `L11691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11691) · [Before (L11691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11691)

```diff
-           return (0, nb.b)(this, Cb, "f")
+           return (0, ad.d)(this, xd, "f")
```

#### 890. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11694` → after: `L11694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11694) · [Before (L11694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11694)

```diff
-           (0, nb.f)(this, Cb, bb, "f")
+           (0, ad.e)(this, xd, dd, "f")
```

#### 891. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11697` → after: `L11697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11697) · [Before (L11697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11697)

```diff
-           return (0, nb.b)(this, db, "f")
+           return (0, ad.d)(this, qd, "f")
```

#### 892. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11700` → after: `L11700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11700) · [Before (L11700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11700)

```diff
-           (0, nb.f)(this, db, bb, "f")
+           (0, ad.e)(this, qd, dd, "f")
```

#### 893. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11703` → after: `L11703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11703) · [Before (L11703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11703)

```diff
-           return (0, nb.b)(this, rb, "f")
+           return (0, ad.d)(this, Bd, "f")
```

#### 894. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11706` → after: `L11706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11706) · [Before (L11706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11706)

```diff
-           (0, nb.f)(this, rb, bb, "f")
+           (0, ad.e)(this, Bd, dd, "f")
```

#### 895. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11709` → after: `L11709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11709) · [Before (L11709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11709)

```diff
-           return (0, nb.b)(this, jb, "f")
+           return (0, ad.d)(this, sd, "f")
```

#### 896. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11712` → after: `L11712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11712) · [Before (L11712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11712)

```diff
-           (0, nb.f)(this, jb, bb, "f")
+           (0, ad.e)(this, sd, dd, "f")
```

#### 897. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11715` → after: `L11715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11715) · [Before (L11715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11715)

```diff
-           return (0, nb.b)(this, xb, "f")
+           return (0, ad.d)(this, Fd, "f")
```

#### 898. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11718` → after: `L11718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11718) · [Before (L11718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11718)

```diff
-           (0, nb.f)(this, xb, bb, "f")
+           (0, ad.e)(this, Fd, dd, "f")
```

#### 899. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11721` → after: `L11721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11721) · [Before (L11721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11721)

```diff
-           return (0, nb.b)(this, zb, "f")
+           return (0, ad.d)(this, Yd, "f")
```

#### 900. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11724` → after: `L11724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11724) · [Before (L11724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11724)

```diff
-           (0, nb.f)(this, zb, bb, "f")
+           (0, ad.e)(this, Yd, dd, "f")
```

#### 901. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11727` → after: `L11727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11727) · [Before (L11727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11727)

```diff
-           return (0, nb.b)(this, gb, "f")
+           return (0, ad.d)(this, md, "f")
```

#### 902. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11730` → after: `L11730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11730) · [Before (L11730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11730)

```diff
-           (0, nb.f)(this, gb, bb, "f")
+           (0, ad.e)(this, md, dd, "f")
```

#### 903. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11739` → after: `L11739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11739) · [Before (L11739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11739)

```diff
-           return (0, nb.b)(this, ib, "f")
+           return (0, ad.d)(this, bd, "f")
```

#### 904. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11742` → after: `L11742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11742) · [Before (L11742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11742)

```diff
-           (0, nb.f)(this, ib, bb, "f")
+           (0, ad.e)(this, bd, dd, "f")
```

#### 905. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11745` → after: `L11745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11745) · [Before (L11745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11745)

```diff
-           return (0, nb.b)(this, vb, "f")
+           return (0, ad.d)(this, Sd, "f")
```

#### 906. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11748` → after: `L11748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11748) · [Before (L11748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11748)

```diff
-           (0, nb.f)(this, vb, bb, "f")
+           (0, ad.e)(this, Sd, dd, "f")
```

#### 907. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11751` → after: `L11751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11751) · [Before (L11751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11751)

```diff
-           return (0, nb.b)(this, tb, "f")
+           return (0, ad.d)(this, jd, "f")
```

#### 908. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11754` → after: `L11754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11754) · [Before (L11754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11754)

```diff
-           (0, nb.f)(this, tb, bb, "f")
+           (0, ad.e)(this, jd, dd, "f")
```

#### 909. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11757` → after: `L11757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11757) · [Before (L11757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11757)

```diff
-           return (0, nb.b)(this, eb, "f")
+           return (0, ad.d)(this, fd, "f")
```

#### 910. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11760` → after: `L11760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11760) · [Before (L11760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11760)

```diff
-           (0, nb.f)(this, eb, bb, "f")
+           (0, ad.e)(this, fd, dd, "f")
```

#### 911. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11763` → after: `L11763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11763) · [Before (L11763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11763)

```diff
-           return (0, nb.b)(this, Nb, "f")
+           return (0, ad.d)(this, nd, "f")
```

#### 912. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11766` → after: `L11766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11766) · [Before (L11766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11766)

```diff
-           (0, nb.f)(this, Nb, bb, "f")
+           (0, ad.e)(this, nd, dd, "f")
```

#### 913. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11769` → after: `L11769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11769) · [Before (L11769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11769)

```diff
-           return (0, nb.b)(this, sb, "f")
+           return (0, ad.d)(this, Ud, "f")
```

#### 914. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11772` → after: `L11772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11772) · [Before (L11772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11772)

```diff
-           (0, nb.f)(this, sb, bb, "f")
+           (0, ad.e)(this, Ud, dd, "f")
```

#### 915. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11775` → after: `L11775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11775) · [Before (L11775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11775)

```diff
-           return (0, nb.b)(this, Mb, "f")
+           return (0, ad.d)(this, yd, "f")
```

#### 916. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11778` → after: `L11778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11778) · [Before (L11778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11778)

```diff
-           (0, nb.f)(this, Mb, bb, "f")
+           (0, ad.e)(this, yd, dd, "f")
```

#### 917. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11781` → after: `L11781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11781) · [Before (L11781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11781)

```diff
-           return (0, nb.b)(this, mb, "f")
+           return (0, ad.d)(this, Dd, "f")
```

#### 918. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11784` → after: `L11784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11784) · [Before (L11784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11784)

```diff
-           (0, nb.f)(this, mb, bb, "f")
+           (0, ad.e)(this, Dd, dd, "f")
```

#### 919. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11805` → after: `L11805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11805) · [Before (L11805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11805)

```diff
-           return (0, nb.b)(this, Ib, "f")
+           return (0, ad.d)(this, Td, "f")
```

#### 920. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11808` → after: `L11808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11808) · [Before (L11808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11808)

```diff
-           (0, nb.f)(this, Ib, bb, "f")
+           (0, ad.e)(this, Td, dd, "f")
```

#### 921. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11811` → after: `L11811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11811) · [Before (L11811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11811)

```diff
-           return (0, nb.b)(this, Pb, "f")
+           return (0, ad.d)(this, Ed, "f")
```

#### 922. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11814` → after: `L11814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11814) · [Before (L11814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11814)

```diff
-           (0, nb.f)(this, Pb, bb, "f")
+           (0, ad.e)(this, Ed, dd, "f")
```

#### 923. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11817` → after: `L11817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11817) · [Before (L11817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11817)

```diff
-           return (0, nb.b)(this, qb, "f")
+           return (0, ad.d)(this, cd, "f")
```

#### 924. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11820` → after: `L11820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11820) · [Before (L11820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11820)

```diff
-           (0, nb.f)(this, qb, bb, "f")
+           (0, ad.e)(this, cd, dd, "f")
```

#### 925. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11823` → after: `L11823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11823) · [Before (L11823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11823)

```diff
-           return (0, nb.b)(this, Eb, "f")
+           return (0, ad.d)(this, hd, "f")
```

#### 926. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11826` → after: `L11826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11826) · [Before (L11826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11826)

```diff
-           (0, nb.f)(this, Eb, bb, "f")
+           (0, ad.e)(this, hd, dd, "f")
```

#### 927. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11829` → after: `L11829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11829) · [Before (L11829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11829)

```diff
-           return (0, nb.b)(this, yb, "f")
+           return (0, ad.d)(this, rd, "f")
```

#### 928. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11832` → after: `L11832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11832) · [Before (L11832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11832)

```diff
-           (0, nb.f)(this, yb, bb, "f")
+           (0, ad.e)(this, rd, dd, "f")
```

#### 929. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11835` → after: `L11835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11835) · [Before (L11835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11835)

```diff
-           return (0, nb.b)(this, Fb, "f")
+           return (0, ad.d)(this, td, "f")
```

#### 930. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11838` → after: `L11838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11838) · [Before (L11838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11838)

```diff
-           (0, nb.f)(this, Fb, bb, "f")
+           (0, ad.e)(this, td, dd, "f")
```

#### 931. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11841` → after: `L11841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11841) · [Before (L11841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11841)

```diff
-           return (0, nb.b)(this, fb, "f")
+           return (0, ad.d)(this, Vd, "f")
```

#### 932. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11844` → after: `L11844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11844) · [Before (L11844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11844)

```diff
-           (0, nb.f)(this, fb, bb, "f")
+           (0, ad.e)(this, Vd, dd, "f")
```

#### 933. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11847` → after: `L11847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11847) · [Before (L11847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11847)

```diff
-           return (0, nb.b)(this, kb, "f")
+           return (0, ad.d)(this, zd, "f")
```

#### 934. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11850` → after: `L11850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11850) · [Before (L11850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11850)

```diff
-           (0, nb.f)(this, kb, bb, "f")
+           (0, ad.e)(this, zd, dd, "f")
```

#### 935. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11853` → after: `L11853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11853) · [Before (L11853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11853)

```diff
-           return (0, nb.b)(this, Tb, "f")
+           return (0, ad.d)(this, Hd, "f")
```

#### 936. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11856` → after: `L11856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11856) · [Before (L11856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11856)

```diff
-           (0, nb.f)(this, Tb, bb, "f")
+           (0, ad.e)(this, Hd, dd, "f")
```

#### 937. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11859` → after: `L11859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11859) · [Before (L11859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11859)

```diff
-           return (0, nb.b)(this, cb, "f")
+           return (0, ad.d)(this, wd, "f")
```

#### 938. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11862` → after: `L11862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11862) · [Before (L11862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11862)

```diff
-           (0, nb.f)(this, cb, bb, "f")
+           (0, ad.e)(this, wd, dd, "f")
```

#### 939. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11865` → after: `L11865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11865) · [Before (L11865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11865)

```diff
-           return (0, nb.b)(this, Qb, "f")
+           return (0, ad.d)(this, Ad, "f")
```

#### 940. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11868` → after: `L11868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11868) · [Before (L11868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11868)

```diff
-           (0, nb.f)(this, Qb, bb, "f")
+           (0, ad.e)(this, Ad, dd, "f")
```

#### 941. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11871` → after: `L11871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11871) · [Before (L11871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11871)

```diff
-           return (0, nb.b)(this, Rb, "f")
+           return (0, ad.d)(this, dJ, "f")
```

#### 942. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11874` → after: `L11874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11874) · [Before (L11874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11874)

```diff
-           (0, nb.f)(this, Rb, bb, "f")
+           (0, ad.e)(this, dJ, dd, "f")
```

#### 943. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11889` → after: `L11889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11889) · [Before (L11889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11889)

```diff
-           return (0, nb.b)(this, bu, "f")
+           return (0, ad.d)(this, JJ, "f")
```

#### 944. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11892` → after: `L11892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11892) · [Before (L11892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11892)

```diff
-           (0, nb.f)(this, bu, bb, "f")
+           (0, ad.e)(this, JJ, dd, "f")
```

#### 945. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11895` → after: `L11895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11895) · [Before (L11895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11895)

```diff
-           return (0, nb.b)(this, uu, "f")
+           return (0, ad.d)(this, kJ, "f")
```

#### 946. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11898` → after: `L11898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11898) · [Before (L11898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11898)

```diff
-           (0, nb.f)(this, uu, bb, "f")
+           (0, ad.e)(this, kJ, dd, "f")
```

#### 947. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11901` → after: `L11901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11901) · [Before (L11901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11901)

```diff
-           return (0, nb.b)(this, hu, "f")
+           return (0, ad.d)(this, pJ, "f")
```

#### 948. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11904` → after: `L11904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11904) · [Before (L11904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11904)

```diff
-           (0, nb.f)(this, hu, bb, "f")
+           (0, ad.e)(this, pJ, dd, "f")
```

#### 949. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11907` → after: `L11907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11907) · [Before (L11907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11907)

```diff
-           return (0, nb.b)(this, Bu, "f")
+           return (0, ad.d)(this, NJ, "f")
```

#### 950. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11910` → after: `L11910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11910) · [Before (L11910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11910)

```diff
-           (0, nb.f)(this, Bu, bb, "f")
+           (0, ad.e)(this, NJ, dd, "f")
```

#### 951. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11913` → after: `L11913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11913) · [Before (L11913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11913)

```diff
-           return (0, nb.b)(this, Ou, "f")
+           return (0, ad.d)(this, WJ, "f")
```

#### 952. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11916` → after: `L11916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11916) · [Before (L11916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11916)

```diff
-           (0, nb.f)(this, Ou, bb, "f")
+           (0, ad.e)(this, WJ, dd, "f")
```

#### 953. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11919` → after: `L11919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11919) · [Before (L11919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11919)

```diff
-           return (0, nb.b)(this, Gu, "f")
+           return (0, ad.d)(this, PJ, "f")
```

#### 954. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11922` → after: `L11922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11922) · [Before (L11922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11922)

```diff
-           (0, nb.f)(this, Gu, bb, "f")
+           (0, ad.e)(this, PJ, dd, "f")
```

#### 955. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11925` → after: `L11925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11925) · [Before (L11925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11925)

```diff
-           return (0, nb.b)(this, Uu, "f")
+           return (0, ad.d)(this, ZJ, "f")
```

#### 956. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11928` → after: `L11928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11928) · [Before (L11928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11928)

```diff
-           (0, nb.f)(this, Uu, bb, "f")
+           (0, ad.e)(this, ZJ, dd, "f")
```

#### 957. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11931` → after: `L11931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11931) · [Before (L11931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11931)

```diff
-           return (0, nb.b)(this, Lu, "f")
+           return (0, ad.d)(this, gJ, "f")
```

#### 958. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11934` → after: `L11934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11934) · [Before (L11934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11934)

```diff
-           (0, nb.f)(this, Lu, bb, "f")
+           (0, ad.e)(this, gJ, dd, "f")
```

#### 959. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11937` → after: `L11937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11937) · [Before (L11937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11937)

```diff
-           return (0, nb.b)(this, Yu, "f")
+           return (0, ad.d)(this, CJ, "f")
```

#### 960. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11940` → after: `L11940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11940) · [Before (L11940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11940)

```diff
-           (0, nb.f)(this, Yu, bb, "f")
+           (0, ad.e)(this, CJ, dd, "f")
```

#### 961. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11943` → after: `L11943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11943) · [Before (L11943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11943)

```diff
-           return (0, nb.b)(this, Su, "f")
+           return (0, ad.d)(this, KJ, "f")
```

#### 962. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11946` → after: `L11946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11946) · [Before (L11946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11946)

```diff
-           (0, nb.f)(this, Su, bb, "f")
+           (0, ad.e)(this, KJ, dd, "f")
```

#### 963. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11949` → after: `L11949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11949) · [Before (L11949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11949)

```diff
-           return (0, nb.b)(this, au, "f")
+           return (0, ad.d)(this, oJ, "f")
```

#### 964. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11952` → after: `L11952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11952) · [Before (L11952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11952)

```diff
-           (0, nb.f)(this, au, bb, "f")
+           (0, ad.e)(this, oJ, dd, "f")
```

#### 965. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11955` → after: `L11955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11955) · [Before (L11955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11955)

```diff
-           return (0, nb.b)(this, Hu, "f")
+           return (0, ad.d)(this, lJ, "f")
```

#### 966. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11958` → after: `L11958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11958) · [Before (L11958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11958)

```diff
-           (0, nb.f)(this, Hu, bb, "f")
+           (0, ad.e)(this, lJ, dd, "f")
```

#### 967. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11961` → after: `L11961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11961) · [Before (L11961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11961)

```diff
-           return (0, nb.b)(this, wu, "f")
+           return (0, ad.d)(this, QJ, "f")
```

#### 968. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11964` → after: `L11964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11964) · [Before (L11964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11964)

```diff
-           (0, nb.f)(this, wu, bb, "f")
+           (0, ad.e)(this, QJ, dd, "f")
```

#### 969. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11967` → after: `L11967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11967) · [Before (L11967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11967)

```diff
-           return (0, nb.b)(this, Zu, "f")
+           return (0, ad.d)(this, LJ, "f")
```

#### 970. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11970` → after: `L11970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11970) · [Before (L11970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11970)

```diff
-           (0, nb.f)(this, Zu, bb, "f")
+           (0, ad.e)(this, LJ, dd, "f")
```

#### 971. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11973` → after: `L11973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11973) · [Before (L11973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11973)

```diff
-           return (0, nb.b)(this, Xu, "f")
+           return (0, ad.d)(this, OJ, "f")
```

#### 972. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11976` → after: `L11976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11976) · [Before (L11976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11976)

```diff
-           (0, nb.f)(this, Xu, bb, "f")
+           (0, ad.e)(this, OJ, dd, "f")
```

#### 973. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11979` → after: `L11979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11979) · [Before (L11979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11979)

```diff
-           return (0, nb.b)(this, pu, "f")
+           return (0, ad.d)(this, eJ, "f")
```

#### 974. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11982` → after: `L11982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11982) · [Before (L11982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11982)

```diff
-           (0, nb.f)(this, pu, bb, "f")
+           (0, ad.e)(this, eJ, dd, "f")
```

#### 975. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11985` → after: `L11985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11985) · [Before (L11985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11985)

```diff
-           return (0, nb.b)(this, ou, "f")
+           return (0, ad.d)(this, RJ, "f")
```

#### 976. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11988` → after: `L11988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11988) · [Before (L11988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11988)

```diff
-           (0, nb.f)(this, ou, bb, "f")
+           (0, ad.e)(this, RJ, dd, "f")
```

#### 977. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11991` → after: `L11991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11991) · [Before (L11991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11991)

```diff
-           return (0, nb.b)(this, Au, "f")
+           return (0, ad.d)(this, IJ, "f")
```

#### 978. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11994` → after: `L11994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11994) · [Before (L11994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11994)

```diff
-           (0, nb.f)(this, Au, bb, "f")
+           (0, ad.e)(this, IJ, dd, "f")
```

#### 979. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11997` → after: `L11997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L11997) · [Before (L11997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L11997)

```diff
-           return (0, nb.b)(this, lu, "f")
+           return (0, ad.d)(this, GJ, "f")
```

#### 980. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12000` → after: `L12000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L12000) · [Before (L12000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L12000)

```diff
-           (0, nb.f)(this, lu, bb, "f")
+           (0, ad.e)(this, GJ, dd, "f")
```

#### 981. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12003` → after: `L12003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L12003) · [Before (L12003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L12003)

```diff
-           return (0, nb.b)(this, Ku, "f")
+           return (0, ad.d)(this, vJ, "f")
```

#### 982. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12006` → after: `L12006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L12006) · [Before (L12006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L12006)

```diff
-           (0, nb.f)(this, Ku, bb, "f")
+           (0, ad.e)(this, vJ, dd, "f")
```

#### 983. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12009` → after: `L12009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L12009) · [Before (L12009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L12009)

```diff
-           super(Gb, Db, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), ub.set(this, ((0, nb.k)(this, Ih), (0, nb.k)(this, Ph, 1))), hb.set(this, ((0, nb.k)(this, qh), (0, nb.k)(this, Eh, 1))), Bb.set(this, ((0, nb.k)(this, yh), (0, nb.k)(this, Vh, 1))), Ob.set( … [truncated]
+           super(Wd, Md, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), Jd.set(this, ((0, ad.i)(this, Ek), (0, ad.i)(this, ck, 1))), kd.set(this, ((0, ad.i)(this, hk), (0, ad.i)(this, rk, 1))), pd.set(this, ((0, ad.i)(this, uk), (0, ad.i)(this, tk, 1))), Nd.set( … [truncated]
```

#### 984. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12017` → after: `L12017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L12017) · [Before (L12017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L12017)

```diff
-           const Ob = ru.c.Clone((() => new bb(ub, this.ZN())), this, {
+           const Nd = sJ.c.Clone((() => new dd(Jd, this.Wm())), this, {
```

#### 985. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12028` → after: `L12028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L12028) · [Before (L12028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L12028)

```diff
-           return ub.stencil && Ob.stencil.parse(ub.stencil, hb, Bb), Gb.e._ParsePlugins(ub, Ob, hb, Bb), ub.clearCoat && Ob.clearCoat.parse(ub.clearCoat, hb, Bb), ub.anisotropy && Ob.anisotropy.parse(ub.anisotropy, hb, Bb), ub.brdf && Ob.brdf.parse(ub.brdf, hb, Bb), ub.sheen && O … [truncated]
+           return Jd.stencil && Nd.stencil.parse(Jd.stencil, kd, pd), Wd.b._ParsePlugins(Jd, Nd, kd, pd), Jd.clearCoat && Nd.clearCoat.parse(Jd.clearCoat, kd, pd), Jd.anisotropy && Nd.anisotropy.parse(Jd.anisotropy, kd, pd), Jd.brdf && Nd.brdf.parse(Jd.brdf, kd, pd), Jd.sheen && N … [truncated]
```

#### 986. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12032` → after: `L12032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L12032) · [Before (L12032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L12032)

```diff
-         Wu = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], Cu = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], ju = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], nu = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], Du = … [truncated]
+         xJ = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], qJ = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], iJ = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], aJ = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], MJ = … [truncated]
```

#### 987. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12923` → after: `L12923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L12923) · [Before (L12923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L12923)

```diff
-       return hb.translucencyIntensityTexture ? Bb = hb.translucencyIntensityTexture : hb.thicknessTexture && hb.useMaskFromThicknessTexture && (Bb = hb.thicknessTexture), Bb && !hb.useGltfStyleTextures ? (xb.b.Warn(`${bb}: Translucency intensity texture is not supported when useG … [truncated]
+       return kd.translucencyIntensityTexture ? pd = kd.translucencyIntensityTexture : kd.thicknessTexture && kd.useMaskFromThicknessTexture && (pd = kd.thicknessTexture), pd && !kd.useGltfStyleTextures ? (Fd.c.Warn(`${dd}: Translucency intensity texture is not supported when useG … [truncated]
```

#### 988. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12954` → after: `L12954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L12954) · [Before (L12954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L12954)

```diff
-               Lb = !Bb.translucencyColor || Bb.translucencyColor.equalsFloats(1, 1, 1) ? void 0 : Bb.translucencyColor.ZBb(),
+               Zd = !pd.translucencyColor || pd.translucencyColor.equalsFloats(1, 1, 1) ? void 0 : pd.translucencyColor.spd(),
```

#### 989. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13020` → after: `L13020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L13020) · [Before (L13020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L13020)

```diff
-             Ob = Math.max(...Bb.ZBb());
+             Nd = Math.max(...pd.spd());
```

#### 990. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13022` → after: `L13022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L13022) · [Before (L13022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L13022)

```diff
-             ub.emissiveFactor = Bb.scale(1 / Ob).ZBb(), this._wasUsed = !0;
+             Jd.emissiveFactor = pd.scale(1 / Nd).spd(), this._wasUsed = !0;
```

#### 991. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13027` → after: `L13027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L13027) · [Before (L13027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L13027)

```diff
-           } else ub.emissiveFactor = Bb.ZBb();
+           } else Jd.emissiveFactor = pd.spd();
```

#### 992. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13150` → after: `L13150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L13150) · [Before (L13150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L13150)

```diff
-               sheenColorFactor: hb.sheen.color.ZBb(),
+               sheenColorFactor: kd.sheen.color.spd(),
```

#### 993. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13168-L13169` → after: `L13168-L13169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13168-L13169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L13168-L13169) · [Before (L13168-L13169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L13168-L13169)

```diff
-       const hb = new gb.f(ub.name, ub.ZN());
-       return hb._texture = bb, hb.coordinatesIndex = ub.coordinatesIndex, ub instanceof gb.f && (hb.uOffset = ub.uOffset, hb.vOffset = ub.vOffset, hb.uScale = ub.uScale, hb.vScale = ub.vScale, hb.wAng = ub.wAng), hb.wrapU = ub.wrapU, hb.wrapV = ub.wrapV, hb
+       const kd = new md.c(Jd.name, Jd.Wm());
+       return kd._texture = dd, kd.coordinatesIndex = Jd.coordinatesIndex, Jd instanceof md.c && (kd.uOffset = Jd.uOffset, kd.vOffset = Jd.vOffset, kd.uScale = Jd.uScale, kd.vScale = Jd.vScale, kd.wAng = Jd.wAng), kd.wrapU = Jd.wrapU, kd.wrapV = Jd.wrapV, kd
```

#### 994. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13199` → after: `L13199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L13199) · [Before (L13199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L13199)

```diff
-                 return `FuzzColor_${hb}_FuzzRoughness_${Bb&&Bb.getInternalTexture()?Bb.getInternalTexture().uniqueId:"NoFuzzRoughness"}`
+                 return `FuzzColor_${kd}_FuzzRoughness_${pd&&pd.getInternalTexture()?pd.getInternalTexture().uniqueId:"NoFuzzRoughness"}`
```

#### 995. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13203` → after: `L13203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L13203) · [Before (L13203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L13203)

```diff
-                   const ub = bb.ZN(),
+                   const Jd = dd.Wm(),
```

#### 996. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13224` → after: `L13224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L13224) · [Before (L13224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L13224)

```diff
-               fuzzColorFactor: hb.fuzzColor.ZBb(),
+               fuzzColorFactor: kd.fuzzColor.spd(),
```

#### 997. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13269` → after: `L13269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L13269) · [Before (L13269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L13269)

```diff
-                 specularColorFactor: hb.metallicReflectanceColor.equalsFloats(1, 1, 1) ? void 0 : hb.metallicReflectanceColor.ZBb(),
+                 specularColorFactor: kd.metallicReflectanceColor.equalsFloats(1, 1, 1) ? void 0 : kd.metallicReflectanceColor.spd(),
```

#### 998. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13278` → after: `L13278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L13278) · [Before (L13278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L13278)

```diff
-               Lb = hb.specularColor.equalsFloats(1, 1, 1) ? void 0 : hb.specularColor.ZBb();
+               Zd = kd.specularColor.equalsFloats(1, 1, 1) ? void 0 : kd.specularColor.spd();
```

#### 999. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13340` → after: `L13340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L13340) · [Before (L13340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L13340)

```diff
-             } else xb.b.Warn(`${bb}: Exporting a subsurface refraction intensity texture without \`useGltfStyleTextures\` is not supported`);
+             } else Fd.c.Warn(`${dd}: Exporting a subsurface refraction intensity texture without \`useGltfStyleTextures\` is not supported`);
```

#### 1000. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13356` → after: `L13356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L13356) · [Before (L13356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L13356)

```diff
-           if (0 == hb.transmissionDepth && (!hb.transmissionColor.equals(Vb.b.White()) || hb.transmissionColorTexture) && ub.pbrMetallicRoughness && (ub.pbrMetallicRoughness.baseColorFactor || (ub.pbrMetallicRoughness.baseColorFactor = [1, 1, 1, 1]), ub.pbrMetallicRoughness.baseC … [truncated]
+           if (0 == kd.transmissionDepth && (!kd.transmissionColor.equals(ud.c.White()) || kd.transmissionColorTexture) && Jd.pbrMetallicRoughness && (Jd.pbrMetallicRoughness.baseColorFactor || (Jd.pbrMetallicRoughness.baseColorFactor = [1, 1, 1, 1]), Jd.pbrMetallicRoughness.baseC … [truncated]
```

#### 1001. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13371` → after: `L13371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L13371) · [Before (L13371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L13371)

```diff
-     var CG = hb(39711);
+     var sW = kd(40254);
```

#### 1002. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13384` → after: `L13384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L13384) · [Before (L13384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L13384)

```diff
-           hb instanceof eO ? Bb = hb.unlit : hb instanceof CG.f && (Bb = hb.disableLighting), Bb && (this._wasUsed = !0, null == ub.extensions && (ub.extensions = {}), ub.extensions[dG] = {}), bb(ub)
+           kd instanceof UN ? pd = kd.unlit : kd instanceof sW.e && (pd = kd.disableLighting), pd && (this._wasUsed = !0, null == Jd.extensions && (Jd.extensions = {}), Jd.extensions[iW] = {}), dd(Jd)
```

#### 1003. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13413` → after: `L13413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L13413) · [Before (L13413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L13413)

```diff
-         return !(!ub.isRefractionEnabled && !ub.isTranslucencyEnabled) && (void 0 != ub.maximumThickness && 0 != ub.maximumThickness || void 0 != ub.tintColorAtDistance && ub.tintColorAtDistance != Number.POSITIVE_INFINITY || void 0 != ub.tintColor && ub.tintColor != Vb.b.White() … [truncated]
+         return !(!Jd.isRefractionEnabled && !Jd.isTranslucencyEnabled) && (void 0 != Jd.maximumThickness && 0 != Jd.maximumThickness || void 0 != Jd.tintColorAtDistance && Jd.tintColorAtDistance != Number.POSITIVE_INFINITY || void 0 != Jd.tintColor && Jd.tintColor != ud.c.White() … [truncated]
```

#### 1004. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13427` → after: `L13427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L13427) · [Before (L13427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L13427)

```diff
-                 attenuationColor: bb.tintColor.equalsFloats(1, 1, 1) ? void 0 : bb.tintColor.ZBb()
+                 attenuationColor: dd.tintColor.equalsFloats(1, 1, 1) ? void 0 : dd.tintColor.spd()
```

#### 1005. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13439` → after: `L13439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L13439) · [Before (L13439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L13439)

```diff
-               const Lb = Vb.b.White().ZBb();
+               const Zd = ud.c.White().spd();
```

#### 1006. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13442-L13443` → after: `L13442-L13443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13442-L13443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L13442-L13443) · [Before (L13442-L13443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L13442-L13443)

```diff
-                 let ub = new Mb.q(-Math.log(hb.transmissionColor.r) * bb, -Math.log(hb.transmissionColor.g) * bb, -Math.log(hb.transmissionColor.b) * bb);
-                 const Bb = new Mb.q(hb.transmissionScatter.r * bb, hb.transmissionScatter.g * bb, hb.transmissionScatter.b * bb),
+                 let Jd = new yd.n(-Math.log(kd.transmissionColor.r) * dd, -Math.log(kd.transmissionColor.g) * dd, -Math.log(kd.transmissionColor.b) * dd);
+                 const pd = new yd.n(kd.transmissionScatter.r * dd, kd.transmissionScatter.g * dd, kd.transmissionScatter.b * dd),
```

#### 1007. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13450` → after: `L13450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L13450) · [Before (L13450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L13450)

```diff
-               const Sb = Vb.b.White().ZBb();
+               const Cd = ud.c.White().spd();
```

#### 1008. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13454-L13455` → after: `L13454-L13455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13454-L13455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L13454-L13455) · [Before (L13454-L13455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L13454-L13455)

```diff
-                   Bb = new Mb.q(ub.r, ub.g, ub.b).multiplyByFloats(bb, bb, bb),
-                   Ob = new Mb.q(1 / Math.max(Bb.x, 1e-6), 1 / Math.max(Bb.y, 1e-6), 1 / Math.max(Bb.z, 1e-6));
+                   pd = new yd.n(Jd.r, Jd.g, Jd.b).multiplyByFloats(dd, dd, dd),
+                   Nd = new yd.n(1 / Math.max(pd.x, 1e-6), 1 / Math.max(pd.y, 1e-6), 1 / Math.max(pd.z, 1e-6));
```

#### 1009. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13498` → after: `L13498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L13498) · [Before (L13498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L13498)

```diff
-         const ub = bb.transmissionWeight > 0 && !bb.geometryThinWalled && bb.transmissionDepth > 0 && !bb.transmissionScatter.equals(Vb.b.Black()),
+         const Jd = dd.transmissionWeight > 0 && !dd.geometryThinWalled && dd.transmissionDepth > 0 && !dd.transmissionScatter.equals(ud.c.Black()),
```

#### 1010. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13506` → after: `L13506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L13506) · [Before (L13506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L13506)

```diff
-             let bb = Mb.q.Zero(),
+             let dd = yd.n.Zero(),
```

#### 1011. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13510-L13511` → after: `L13510-L13511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13510-L13511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L13510-L13511) · [Before (L13510-L13511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L13510-L13511)

```diff
-                 const ub = new Mb.q(Math.sqrt(1 - bb.x), Math.sqrt(1 - bb.y), Math.sqrt(1 - bb.z)),
-                   hb = new Mb.q(1, 1, 1),
+                 const Jd = new yd.n(Math.sqrt(1 - dd.x), Math.sqrt(1 - dd.y), Math.sqrt(1 - dd.z)),
+                   kd = new yd.n(1, 1, 1),
```

#### 1012. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13513-L13514` → after: `L13513-L13514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13513-L13514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L13513-L13514) · [Before (L13513-L13514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L13513-L13514)

```diff
-                   Ob = hb.subtract(new Mb.q(.139, .139, .139).multiplyInPlace(ub)),
-                   Gb = hb.add(new Mb.q(1.17, 1.17, 1.17).multiplyInPlace(ub));
+                   Nd = kd.subtract(new yd.n(.139, .139, .139).multiplyInPlace(Jd)),
+                   Wd = kd.add(new yd.n(1.17, 1.17, 1.17).multiplyInPlace(Jd));
```

#### 1013. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13516` → after: `L13516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L13516) · [Before (L13516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L13516)

```diff
-               }(new Mb.q(hb.transmissionScatter.r, hb.transmissionScatter.g, hb.transmissionScatter.b)), Bb = hb.transmissionScatterAnisotropy
+               }(new yd.n(kd.transmissionScatter.r, kd.transmissionScatter.g, kd.transmissionScatter.b)), pd = kd.transmissionScatterAnisotropy
```

#### 1014. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13518` → after: `L13518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L13518) · [Before (L13518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L13518)

```diff
-             const Ob = Mb.q.Zero();
+             const Nd = yd.n.Zero();
```

#### 1015. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13527` → after: `L13527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L13527) · [Before (L13527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L13527)

```diff
-                 multiscatterColorFactor: bb.multiplyByFloats(Sb, Sb, Sb).addInPlace(Ob.multiplyByFloats(ab, ab, ab)).ZBb(),
+                 multiscatterColorFactor: dd.multiplyByFloats(Cd, Cd, Cd).addInPlace(Nd.multiplyByFloats(Kd, Kd, Kd)).spd(),
```

#### 1016. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13618` → after: `L13618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L13618) · [Before (L13618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L13618)

```diff
-         if (hb.ZN() || ju.k.Warn(`${bb}: "scene" is not defined for Babylon texture ${hb.name}!`), (0 !== hb.uAng || 0 !== hb.vAng) && (ju.k.Warn(`${bb}: Texture ${hb.name} with rotation in the u or v axis is not supported in glTF.`), 0 !== hb.uRotationCenter || 0 !== hb.vRotatio … [truncated]
+         if (kd.Wm() || iJ.h.Warn(`${dd}: "scene" is not defined for Babylon texture ${kd.name}!`), (0 !== kd.uAng || 0 !== kd.vAng) && (iJ.h.Warn(`${dd}: Texture ${kd.name} with rotation in the u or v axis is not supported in glTF.`), 0 !== kd.uRotationCenter || 0 !== kd.vRotatio … [truncated]
```

#### 1017. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13623-L13624` → after: `L13623-L13624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13623-L13624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L13623-L13624) · [Before (L13623-L13624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L13623-L13624)

```diff
-             if (hb.homogeneousRotationInUVTransform && hb.uScale !== hb.vScale) return void ju.k.Warn(`${bb}: Texture ${hb.name} with homogenousRotationInUVTransform, non-uniform scaling, and non-zero rotation cannot be exported with ${EG}.`);
-             ju.k.Warn(`${bb}: Texture ${hb.name} with non-origin rotation center will be exported using an adjusted offset with ${EG}.`), Bb.offset = function(bb) {
+             if (kd.homogeneousRotationInUVTransform && kd.uScale !== kd.vScale) return void iJ.h.Warn(`${dd}: Texture ${kd.name} with homogenousRotationInUVTransform, non-uniform scaling, and non-zero rotation cannot be exported with ${uW}.`);
+             iJ.h.Warn(`${dd}: Texture ${kd.name} with non-origin rotation center will be exported using an adjusted offset with ${uW}.`), pd.offset = function(dd) {
```

#### 1018. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13648` → after: `L13648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L13648) · [Before (L13648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L13648)

```diff
-     var fG = hb(39511);
+     var HW = kd(40007);
```

#### 1019. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13663` → after: `L13663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L13663) · [Before (L13663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L13663)

```diff
-         "image/ktx2" === (Ob.mimeType || (0, fG.h)(Ob.uri)) && (hb.source = void 0, hb.extensions || (hb.extensions = {}), hb.extensions[kG] = {
+         "image/ktx2" === (Nd.mimeType || (0, HW.i)(Nd.uri)) && (kd.source = void 0, kd.extensions || (kd.extensions = {}), kd.extensions[wW] = {
```

#### 1020. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13688` → after: `L13688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L13688) · [Before (L13688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L13688)

```diff
-         "image/webp" === (Ob.mimeType || (0, fG.h)(Ob.uri)) && (hb.source = void 0, hb.extensions || (hb.extensions = {}), hb.extensions[RG] = {
+         "image/webp" === (Nd.mimeType || (0, HW.i)(Nd.uri)) && (kd.source = void 0, kd.extensions || (kd.extensions = {}), kd.extensions[kP] = {
```

#### 1021. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13713` → after: `L13713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L13713) · [Before (L13713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L13713)

```diff
-         "image/avif" === (Ob.mimeType || (0, fG.h)(Ob.uri)) && (hb.source = void 0, hb.extensions || (hb.extensions = {}), hb.extensions[BU] = {
+         "image/avif" === (Nd.mimeType || (0, HW.i)(Nd.uri)) && (kd.source = void 0, kd.extensions || (kd.extensions = {}), kd.extensions[PP] = {
```

#### 1022. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13735` → after: `L13735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L13735) · [Before (L13735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L13735)

```diff
-               Gb = [new Bb.YX(ub[Ob[0]], ub[Ob[0] + 2], ub[Ob[0] + 1]), new Bb.YX(ub[Ob[1]], ub[Ob[1] + 2], ub[Ob[1] + 1]), new Bb.YX(ub[Ob[2]], ub[Ob[2] + 2], ub[Ob[2] + 1])],
+               Wd = [new pd.IL(Jd[Nd[0]], Jd[Nd[0] + 2], Jd[Nd[0] + 1]), new pd.IL(Jd[Nd[1]], Jd[Nd[1] + 2], Jd[Nd[1] + 1]), new pd.IL(Jd[Nd[2]], Jd[Nd[2] + 2], Jd[Nd[2] + 1])],
```

#### 1023. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13740` → after: `L13740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L13740) · [Before (L13740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L13740)

```diff
-               n: Bb.YX.Cross(Lb, Ub).normalize()
+               n: pd.IL.Cross(Zd, Pd).normalize()
```

#### 1024. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13752-L13753` → after: `L13752-L13753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13752-L13753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L13752-L13753) · [Before (L13752-L13753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L13752-L13753)

```diff
-               bb instanceof Zb.d && (ub = bb.LOb);
-               const hb = ub.getVerticesData(ab.e.PositionKind, !0, !0);
+               dd instanceof Qd.e && (Jd = dd.RNd);
+               const kd = Jd.getVerticesData(Kd.f.PositionKind, !0, !0);
```

#### 1025. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13755` → after: `L13755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L13755) · [Before (L13755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L13755)

```diff
-               const Ob = Bb.YX.Zero();
+               const Nd = pd.IL.Zero();
```

#### 1026. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13757` → after: `L13757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L13757) · [Before (L13757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L13757)

```diff
-               for (Gb = 0; Gb < hb.length; Gb += 3) Bb.YX.TransformCoordinatesFromFloatsToRef(hb[Gb], hb[Gb + 1], hb[Gb + 2], bb.computeWorldMatrix(!0), Ob).toArray(hb, Gb);
+               for (Wd = 0; Wd < kd.length; Wd += 3) pd.IL.TransformCoordinatesFromFloatsToRef(kd[Wd], kd[Wd + 1], kd[Wd + 2], dd.computeWorldMatrix(!0), Nd).toArray(kd, Wd);
```

#### 1027. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13760` → after: `L13760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L13760) · [Before (L13760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L13760)

```diff
-             return bb.getVerticesData(ab.e.PositionKind) || []
+             return dd.getVerticesData(Kd.f.PositionKind) || []
```

#### 1028. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13768` → after: `L13768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L13768) · [Before (L13768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L13768)

```diff
-             const ub = bb[hb].XBb();
+             const Jd = dd[kd].ipd();
```

#### 1029. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13776` → after: `L13776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L13776) · [Before (L13776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L13776)

```diff
-           !Ob && Yb && (pb += "solid " + ub.name + "\r\n"), !Ub && ub instanceof SB.b && ub.bakeCurrentTransformIntoVertices();
+           !Nd && gd && (Od += "solid " + Jd.name + "\r\n"), !Pd && Jd instanceof op.d && Jd.bakeCurrentTransformIntoVertices();
```

#### 1030. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13778` → after: `L13778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L13778) · [Before (L13778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L13778)

```diff
-             Lb = ub.XBb() || [];
+             Zd = Jd.ipd() || [];
```

#### 1031. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13803` → after: `L13803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L13803) · [Before (L13803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L13803)

```diff
-         Ob.push(`(${Ub.toPrecision(ub.precision)}, ${Lb.toPrecision(ub.precision)}, ${Yb.toPrecision(ub.precision)})`)
+         Nd.push(`(${Pd.toPrecision(Jd.precision)}, ${Zd.toPrecision(Jd.precision)}, ${gd.toPrecision(Jd.precision)})`)
```

#### 1032. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13813` → after: `L13813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L13813) · [Before (L13813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L13813)

```diff
-         hb.push(`(${Ob.toPrecision(ub.precision)}, ${(1-Gb).toPrecision(ub.precision)})`)
+         kd.push(`(${Nd.toPrecision(Jd.precision)}, ${(1-Wd).toPrecision(Jd.precision)})`)
```

#### 1033. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13819-L13821` → after: `L13819-L13821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13819-L13821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L13819-L13821) · [Before (L13819-L13821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L13819-L13821)

```diff
-       const Ob = bb.getVerticesData(ab.e.PositionKind),
-         Gb = bb.getVerticesData(ab.e.NormalKind);
-       if (Ob && Gb) return `\n\tdef Mesh "Geometry"\n\t{\n        uniform token orientation = "${hb}"\n\t\tint[] faceVertexCounts = [${function(bb){const ub=bb.XBb()?.length?bb.getTotalIndices():bb.getTotalVertices();return Array(ub/3).fill(3).join(", ")}(bb)}]\n\t\tint[] faceVer … [truncated]
+       const Nd = dd.getVerticesData(Kd.f.PositionKind),
+         Wd = dd.getVerticesData(Kd.f.NormalKind);
+       if (Nd && Wd) return `\n\tdef Mesh "Geometry"\n\t{\n        uniform token orientation = "${kd}"\n\t\tint[] faceVertexCounts = [${function(dd){const Jd=dd.ipd()?.length?dd.getTotalIndices():dd.getTotalVertices();return Array(Jd/3).fill(3).join(", ")}(dd)}]\n\t\tint[] faceVer … [truncated]
```

#### 1034. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13825` → after: `L13825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L13825) · [Before (L13825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L13825)

```diff
-         n\ t\ t)`),hb}(bb,ub)}\n\t\tuniform token subdivisionScheme = "none"\n\t}\n`
+         n\ t\ t)`),kd}(dd,Jd)}\n\t\tuniform token subdivisionScheme = "none"\n\t}\n`
```

#### 1035. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13829` → after: `L13829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L13829) · [Before (L13829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L13829)

```diff
-       return `\n        def "Geometry"\n        {\n        ${aU(bb,ub,hb,Bb)}\n        }\n        `
+       return `\n        def "Geometry"\n        {\n        ${QP(dd,Jd,kd,pd)}\n        }\n        `
```

#### 1036. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13839` → after: `L13839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L13839) · [Before (L13839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L13839)

```diff
-       return `( ${XU(ub,0)}, ${XU(ub,4)}, ${XU(ub,8)}, ${XU(ub,12)} )`
+       return `( ${RP(Jd,0)}, ${RP(Jd,4)}, ${RP(Jd,8)}, ${RP(Jd,12)} )`
```

#### 1037. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13843` → after: `L13843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L13843) · [Before (L13843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L13843)

```diff
-       return `(${bb[ub+0]}, ${bb[ub+1]}, ${bb[ub+2]}, ${bb[ub+3]})`
+       return `(${dd[Jd+0]}, ${dd[Jd+1]}, ${dd[Jd+2]}, ${dd[Jd+3]})`
```

#### 1038. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13849` → after: `L13849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L13849) · [Before (L13849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L13849)

```diff
-       return `def Xform "${hb}" (\n\tprepend references = @./geometries/Geometry_${bb.geometry.uniqueId}.usda@</Geometry>\n\tprepend apiSchemas = ["MaterialBindingAPI"]\n)\n{\n\tmatrix4d xformOp:transform = ${Bb}\n\tuniform token[] xformOpOrder = ["xformOp:transform"]\t\n\n    re … [truncated]
+       return `def Xform "${kd}" (\n\tprepend references = @./geometries/Geometry_${dd.geometry.uniqueId}.usda@</Geometry>\n\tprepend apiSchemas = ["MaterialBindingAPI"]\n)\n{\n\tmatrix4d xformOp:transform = ${pd}\n\tuniform token[] xformOpOrder = ["xformOp:transform"]\t\n\n    re … [truncated]
```

#### 1039. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13865` → after: `L13865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L13865) · [Before (L13865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L13865)

```diff
-       return `(${bb.x}, ${bb.y})`
+       return `(${dd.x}, ${dd.y})`
```

#### 1040. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13869` → after: `L13869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L13869) · [Before (L13869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L13869)

```diff
-       return `(${bb.r}, ${bb.g}, ${bb.b})`
+       return `(${dd.r}, ${dd.g}, ${dd.b})`
```

#### 1041. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13878-L13879` → after: `L13878-L13879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13878-L13879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L13878-L13879) · [Before (L13878-L13879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L13878-L13879)

```diff
-         Sb = bb.mimeType || (0, Yb.c)(bb.getInternalTexture()?.url ?? ""),
-         ab = KU(Sb) ? Sb : "image/png",
+         Cd = dd.mimeType || (0, gd.e)(dd.getInternalTexture()?.url ?? ""),
+         Kd = qP(Cd) ? Cd : "image/png",
```

#### 1042. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13892` → after: `L13892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L13892) · [Before (L13892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L13892)

```diff
-       return Xb.y = 1 - Xb.y - Zb.y, Xb.x += ob * Zb.x, Xb.y += (1 - Ab) * Zb.y, `\n    def Shader "PrimvarReader_${hb}"\n    {\n        uniform token info:id = "UsdPrimvarReader_float2"\n        float2 inputs:fallback = (0.0, 0.0)\n        token inputs:varname = "${wb}"\n        … [truncated]
+       return Ld.y = 1 - Ld.y - Qd.y, Ld.x += ed * Qd.x, Ld.y += (1 - Rd) * Qd.y, `\n    def Shader "PrimvarReader_${kd}"\n    {\n        uniform token info:id = "UsdPrimvarReader_float2"\n        float2 inputs:fallback = (0.0, 0.0)\n        token inputs:varname = "${ld}"\n        … [truncated]
```

#### 1043. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13982` → after: `L13982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L13982) · [Before (L13982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L13982)

```diff
-       return null !== Ub ? (Ob.push(`${Bb}color3f inputs:diffuseColor.connect = </Root/Materials/Material_${bb.uniqueId}/Texture_${Ub.uniqueId}_diffuse.outputs:rgb>`), bb.needAlphaBlending() ? Ob.push(`${Bb}float inputs:opacity.connect = </Root/Materials/Material_${bb.uniqueId}/T … [truncated]
+       return null !== Pd ? (Nd.push(`${pd}color3f inputs:diffuseColor.connect = </Root/Materials/Material_${dd.uniqueId}/Texture_${Pd.uniqueId}_diffuse.outputs:rgb>`), dd.needAlphaBlending() ? Nd.push(`${pd}float inputs:opacity.connect = </Root/Materials/Material_${dd.uniqueId}/T … [truncated]
```

#### 1044. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13988` → after: `L13988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L13988) · [Before (L13988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L13988)

```diff
-         hb = bb.ZN().useRightHandedSystem;
+         kd = dd.Wm().useRightHandedSystem;
```

#### 1045. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13994` → after: `L13994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L13994) · [Before (L13994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L13994)

```diff
-           hb || (ub.multiplyToRef(Lb.getWorldMatrix().invert(), ub), Bb = Bb === Gb.e.ClockWiseSideOrientation ? Gb.e.CounterClockWiseSideOrientation : Gb.e.ClockWiseSideOrientation), Ub = !1;
+           kd || (Jd.multiplyToRef(Zd.getWorldMatrix().invert(), Jd), pd = pd === Wd.b.ClockWiseSideOrientation ? Wd.b.CounterClockWiseSideOrientation : Wd.b.ClockWiseSideOrientation), Pd = !1;
```

#### 1046. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13999` → after: `L13999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L13999) · [Before (L13999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L13999)

```diff
-       return ub.determinant() < 0 && Ob.Tools.Warn(`Mesh ${bb.name} has a negative scale, which may look incorrect in destinations like QuickLook.`), {
+       return Jd.determinant() < 0 && Nd.Tools.Warn(`Mesh ${dd.name} has a negative scale, which may look incorrect in destinations like QuickLook.`), {
```

#### 1047. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14001` → after: `L14001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L14001) · [Before (L14001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L14001)

```diff
-         windingOrder: Bb === Gb.e.ClockWiseSideOrientation ? "leftHanded" : "rightHanded",
+         windingOrder: pd === Wd.b.ClockWiseSideOrientation ? "leftHanded" : "rightHanded",
```

#### 1048. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14022` → after: `L14022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L14022) · [Before (L14022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L14022)

```diff
-         return `def Xform "Root"\n    {\n        def Scope "Scenes" (\n            kind = "sceneLibrary"\n        )\n        {\n            def Xform "Scene" (\n                customData = {\n                    bool preliminary_collidesWithEnvironment = 0\n                    s … [truncated]
+         return `def Xform "Root"\n    {\n        def Scope "Scenes" (\n            kind = "sceneLibrary"\n        )\n        {\n            def Xform "Scene" (\n                customData = {\n                    bool preliminary_collidesWithEnvironment = 0\n                    s … [truncated]
```

#### 1049. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14048` → after: `L14048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L14048) · [Before (L14048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L14048)

```diff
-         if (bb.mode === rb.e.ORTHOGRAPHIC_CAMERA) return `def Camera "${hb}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${Ob}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${bb.minZ.toPrecision(ub.precision)}, ${bb.maxZ.toPrecision(u … [truncated]
+         if (dd.mode === Bd.e.ORTHOGRAPHIC_CAMERA) return `def Camera "${kd}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${Nd}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${dd.minZ.toPrecision(Jd.precision)}, ${dd.maxZ.toPrecision(J … [truncated]
```

#### 1050. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14050` → after: `L14050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L14050) · [Before (L14050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L14050)

```diff
-           const Bb = bb.UX().getAspectRatio(bb),
+           const pd = dd.eL().getAspectRatio(dd),
```

#### 1051. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14052` → after: `L14052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L14052) · [Before (L14052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L14052)

```diff
-           return `def Camera "${hb}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${Ob}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${bb.minZ.toPrecision(ub.precision)}, ${bb.maxZ.toPrecision(ub.precision)})\n\t\t\tfloat focalLength  … [truncated]
+           return `def Camera "${kd}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${Nd}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${dd.minZ.toPrecision(Jd.precision)}, ${dd.maxZ.toPrecision(Jd.precision)})\n\t\t\tfloat focalLength  … [truncated]
```

#### 1052. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14062` → after: `L14062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L14062) · [Before (L14062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L14062)

```diff
-         return `\n    def "Materials"\n{\n${Bb.join("")}\n}\n\n`
+         return `\n    def "Materials"\n{\n${pd.join("")}\n}\n\n`
```

#### 1053. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14070` → after: `L14070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L14070) · [Before (L14070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L14070)

```diff
-         if (Ob && KU(Ob.mimeType) && Ob.mimeType === hb) Ub[`textures/Texture_${Bb}.${ub}`] = new Uint8Array(Ob.data);
+         if (Nd && qP(Nd.mimeType) && Nd.mimeType === kd) Pd[`textures/Texture_${pd}.${Jd}`] = new Uint8Array(Nd.data);
```

#### 1054. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14073` → after: `L14073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L14073) · [Before (L14073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L14073)

```diff
-             Gb = await (0, Wb.e)(bb),
+             Wd = await (0, vd.f)(dd),
```

#### 1055. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14075` → after: `L14075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L14075) · [Before (L14075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L14075)

```diff
-           Ub[`textures/Texture_${Bb}.${ub}`] = new Uint8Array(Lb).slice()
+           Pd[`textures/Texture_${pd}.${Jd}`] = new Uint8Array(Zd).slice()
```

#### 1056. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14098` → after: `L14098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L14098) · [Before (L14098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L14098)

```diff
-     var jU = hb(40547);
+     var MP = kd(41088);
```

#### 1057. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14109` → after: `L14109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L14109) · [Before (L14109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L14109)

```diff
-           ub && (Ob = Ob ? new jU.d("animation-range", Math.min(Ob.from, ub.from), Math.max(Ob.to, ub.to)) : ub)
+           Jd && (Nd = Nd ? new MP.b("animation-range", Math.min(Nd.from, Jd.from), Math.max(Nd.to, Jd.to)) : Jd)
```

#### 1058. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14118` → after: `L14118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L14118) · [Before (L14118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L14118)

```diff
-         return Yb += "HIERARCHY\n", Yb += this._ExportHierarchy(Ub, 0), Yb += "MOTION\n", Yb += `Frames: ${Lb}\n`, Yb += `Frame Time: ${Gb.toFixed(6)}\n`, Yb += this._ExportMotionData(Ub, Lb, 0, Bb), Yb
+         return gd += "HIERARCHY\n", gd += this._ExportHierarchy(Pd, 0), gd += "MOTION\n", gd += `Frames: ${Zd}\n`, gd += `Frame Time: ${Wd.toFixed(6)}\n`, gd += this._ExportMotionData(Pd, Zd, 0, pd), gd
```

#### 1059. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14151` → after: `L14151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L14151) · [Before (L14151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L14151)

```diff
-             hb += `${Bb}End Site\n`, hb += `${Bb}{\n`;
+             kd += `${pd}End Site\n`, kd += `${pd}{\n`;
```

#### 1060. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14153` → after: `L14153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L14153) · [Before (L14153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L14153)

```diff
-             hb += `${Bb}    OFFSET ${ub.x.toFixed(6)} ${ub.y.toFixed(6)} ${ub.z.toFixed(6)}\n`, hb += `${Bb}}\n`
+             kd += `${pd}    OFFSET ${Jd.x.toFixed(6)} ${Jd.y.toFixed(6)} ${Jd.z.toFixed(6)}\n`, kd += `${pd}}\n`
```

#### 1061. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14155` → after: `L14155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L14155) · [Before (L14155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L14155)

```diff
-             hb += `${0===ub?"ROOT":`${Bb}JOINT`} ${bb.name}\n`, hb += `${Bb}{\n`;
+             kd += `${0===Jd?"ROOT":`${pd}JOINT`} ${dd.name}\n`, kd += `${pd}{\n`;
```

#### 1062. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14157` → after: `L14157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L14157) · [Before (L14157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L14157)

```diff
-             hb += `${Bb}    OFFSET ${Gb.x.toFixed(6)} ${Gb.y.toFixed(6)} ${Gb.z.toFixed(6)}\n`;
+             kd += `${pd}    OFFSET ${Wd.x.toFixed(6)} ${Wd.y.toFixed(6)} ${Wd.z.toFixed(6)}\n`;
```

#### 1063. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14159` → after: `L14159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L14159) · [Before (L14159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L14159)

```diff
-             Ob.hasPositionChannels && Ub.push("Xposition", "Yposition", "Zposition"), Ob.hasRotationChannels && Ub.push("Zrotation", "Xrotation", "Yrotation"), Ub.length > 0 && (hb += `${Bb}    CHANNELS ${Ub.length} ${Ub.join(" ")}\n`), Ob.children.length > 0 && (hb += this._Expo … [truncated]
+             Nd.hasPositionChannels && Pd.push("Xposition", "Yposition", "Zposition"), Nd.hasRotationChannels && Pd.push("Zrotation", "Xrotation", "Yrotation"), Pd.length > 0 && (kd += `${pd}    CHANNELS ${Pd.length} ${Pd.join(" ")}\n`), Nd.children.length > 0 && (kd += this._Expo … [truncated]
```

#### 1064. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14172` → after: `L14172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L14172) · [Before (L14172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L14172)

```diff
-           return Bb.YX.Zero()
+           return pd.IL.Zero()
```

#### 1065. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14199` → after: `L14199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L14199) · [Before (L14199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L14199)

```diff
-         if (0 === bb.length) return Bb.YX.Zero();
+         if (0 === dd.length) return pd.IL.Zero();
```

#### 1066. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14212` → after: `L14212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L14212) · [Before (L14212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L14212)

```diff
-         return Yb > th.b ? (Gb = Math.atan2(hb[6], hb[10]), Ub = Math.atan2(-hb[2], Yb), Lb = Math.atan2(hb[1], hb[0])) : (Gb = Math.atan2(-hb[9], hb[5]), Ub = Math.atan2(-hb[2], Yb), Lb = 0), new Bb.YX(Ob.Tools.ToDegrees(Gb), Ob.Tools.ToDegrees(Ub), Ob.Tools.ToDegrees(Lb))
+         return gd > Xk.e ? (Wd = Math.atan2(kd[6], kd[10]), Pd = Math.atan2(-kd[2], gd), Zd = Math.atan2(kd[1], kd[0])) : (Wd = Math.atan2(-kd[9], kd[5]), Pd = Math.atan2(-kd[2], gd), Zd = 0), new pd.IL(Nd.Tools.ToDegrees(Wd), Nd.Tools.ToDegrees(Pd), Nd.Tools.ToDegrees(Zd))
```

#### 1067. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14257` → after: `L14257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L14257) · [Before (L14257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L14257)

```diff
-       const ub = "function" === typeof bb ? bb : bb?.constructor,
+       const Jd = "function" === typeof dd ? dd : dd?.constructor,
```

#### 1068. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14299` → after: `L14299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L14299) · [Before (L14299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L14299)

```diff
-       return ub ? `${ub}:${bb}` : bb
+       return Jd ? `${Jd}:${dd}` : dd
```

#### 1069. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14336` → after: `L14336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L14336) · [Before (L14336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L14336)

```diff
-         if (!Number.isFinite(bb)) throw new Error(`Cannot format non-finite number: ${bb}`);
+         if (!Number.isFinite(dd)) throw new Error(`Cannot format non-finite number: ${dd}`);
```

#### 1070. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14346` → after: `L14346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L14346) · [Before (L14346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L14346)

```diff
-         if (Bb && void 0 === ub.fixedDecimals && (Sb = Sb.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "").replace(/\.$/, "")), /[eE]/.test(Sb)) throw new Error(`Scientific notation not allowed in XML output: ${Sb}`);
+         if (pd && void 0 === Jd.fixedDecimals && (Cd = Cd.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "").replace(/\.$/, "")), /[eE]/.test(Cd)) throw new Error(`Scientific notation not allowed in XML output: ${Cd}`);
```

#### 1071. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14509` → after: `L14509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L14509) · [Before (L14509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L14509)

```diff
-         if (Bb.closed) throw new Error(`att() after start tag closed for <${Bb.name}>`);
+         if (pd.closed) throw new Error(`att() after start tag closed for <${pd.name}>`);
```

#### 1072. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14512` → after: `L14512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L14512) · [Before (L14512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L14512)

```diff
-           else if (bb) this._registerNamespace(Bb, ub, hb), this._writeAttStr(`${bb}:${ub}`, hb);
+           else if (dd) this._registerNamespace(pd, Jd, kd), this._writeAttStr(`${dd}:${Jd}`, kd);
```

#### 1073. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14521` → after: `L14521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L14521) · [Before (L14521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L14521)

```diff
-           Ob = `${this._ensurePrefixDeclared(Bb,bb)}:${ub}`
+           Nd = `${this._ensurePrefixDeclared(pd,dd)}:${Jd}`
```

#### 1074. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14530` → after: `L14530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L14530) · [Before (L14530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L14530)

```diff
-           Bb = `${this._lookupPrefix(bb)??bb}:${ub}`
+           pd = `${this._lookupPrefix(dd)??dd}:${Jd}`
```

#### 1075. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14581` → after: `L14581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L14581) · [Before (L14581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L14581)

```diff
-         if (ub === cU.Xml || ub === cU.Xmlns) throw new Error(`reserved prefix '${ub}'`);
+         if (Jd === dZ.Xml || Jd === dZ.Xmlns) throw new Error(`reserved prefix '${Jd}'`);
```

#### 1076. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14583` → after: `L14583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L14583) · [Before (L14583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L14583)

```diff
-         if (Bb && Bb !== hb) throw new Error(`prefix '${ub}' already bound to a different namespace`);
+         if (pd && pd !== kd) throw new Error(`prefix '${Jd}' already bound to a different namespace`);
```

#### 1077. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14596` → after: `L14596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L14596) · [Before (L14596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L14596)

```diff
-         if (bb.closed) throw new Error(`can not declare namespace after start tag closed for <${bb.name}>`);
+         if (dd.closed) throw new Error(`can not declare namespace after start tag closed for <${dd.name}>`);
```

#### 1078. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14598` → after: `L14598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L14598) · [Before (L14598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L14598)

```diff
-         return this._writeAttStr(`${cU.Xmlns}:${Bb}`, ub), this._registerNamespace(bb, Bb, ub), Bb
+         return this._writeAttStr(`${dZ.Xmlns}:${pd}`, Jd), this._registerNamespace(dd, pd, Jd), pd
```

#### 1079. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14692` → after: `L14692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L14692) · [Before (L14692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L14692)

```diff
-         return (0, nb.n)(ub, "ThreeMfContentTypes"), (() => {
+         return (0, ad.k)(Jd, "ThreeMfContentTypes"), (() => {
```

#### 1080. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14705` → after: `L14705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L14705) · [Before (L14705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L14705)

```diff
-           }), (0, nb.k)(ub, Bb)
+           }), (0, ad.i)(Jd, pd)
```

#### 1081. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14720` → after: `L14720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L14720) · [Before (L14720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L14720)

```diff
-             this.ext = (0, nb.k)(this, Ub, void 0), this.ct = ((0, nb.k)(this, Lb), (0, nb.k)(this, Yb, void 0)), (0, nb.k)(this, Sb), this.ext = bb, this.ct = ub
+             this.ext = (0, ad.i)(this, Pd, void 0), this.ct = ((0, ad.i)(this, Zd), (0, ad.i)(this, gd, void 0)), (0, ad.i)(this, Cd), this.ext = dd, this.ct = Jd
```

#### 1082. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14723` → after: `L14723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L14723) · [Before (L14723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L14723)

```diff
-         return (0, nb.n)(ub, "ThreeMfContentType"), (() => {
+         return (0, ad.k)(Jd, "ThreeMfContentType"), (() => {
```

#### 1083. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14772` → after: `L14772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L14772) · [Before (L14772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L14772)

```diff
-           }), (0, nb.k)(ub, Gb)
+           }), (0, ad.i)(Jd, Wd)
```

#### 1084. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14786` → after: `L14786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L14786) · [Before (L14786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L14786)

```diff
-         return (0, nb.n)(ub, "ThreeMfRelationships"), (() => {
+         return (0, ad.k)(Jd, "ThreeMfRelationships"), (() => {
```

#### 1085. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14799` → after: `L14799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L14799) · [Before (L14799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L14799)

```diff
-           }), (0, nb.k)(ub, Bb)
+           }), (0, ad.i)(Jd, pd)
```

#### 1086. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14816` → after: `L14816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L14816) · [Before (L14816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L14816)

```diff
-             this.id = (0, nb.k)(this, Lb, void 0), this.type = ((0, nb.k)(this, Yb), (0, nb.k)(this, Sb, void 0)), this.target = ((0, nb.k)(this, ab), (0, nb.k)(this, Hb, void 0)), (0, nb.k)(this, wb), this.id = bb, this.type = ub, this.target = hb
+             this.id = (0, ad.i)(this, Zd, void 0), this.type = ((0, ad.i)(this, gd), (0, ad.i)(this, Cd, void 0)), this.target = ((0, ad.i)(this, Kd), (0, ad.i)(this, od, void 0)), (0, ad.i)(this, ld), this.id = dd, this.type = Jd, this.target = kd
```

#### 1087. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14819` → after: `L14819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L14819) · [Before (L14819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L14819)

```diff
-         return (0, nb.n)(ub, "ThreeMfRelationship"), (() => {
+         return (0, ad.k)(Jd, "ThreeMfRelationship"), (() => {
```

#### 1088. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14877` → after: `L14877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L14877) · [Before (L14877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L14877)

```diff
-           }), (0, nb.k)(ub, Ub)
+           }), (0, ad.i)(Jd, Pd)
```

#### 1089. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14918` → after: `L14918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L14918) · [Before (L14918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L14918)

```diff
-             this.unit = (0, nb.k)(this, Lb, OL.millimeter), this.requiredextensions = ((0, nb.k)(this, Yb), (0, nb.k)(this, Sb, void 0)), this.recommendedextensions = ((0, nb.k)(this, ab), (0, nb.k)(this, Hb, void 0)), this.metadata = (0, nb.k)(this, wb)
+             this.unit = (0, ad.i)(this, Zd, ZZ.millimeter), this.requiredextensions = ((0, ad.i)(this, gd), (0, ad.i)(this, Cd, void 0)), this.recommendedextensions = ((0, ad.i)(this, Kd), (0, ad.i)(this, od, void 0)), this.metadata = (0, ad.i)(this, ld)
```

#### 1090. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14921` → after: `L14921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L14921) · [Before (L14921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L14921)

```diff
-         return (0, nb.n)(ub, "ThreeMfModel"), (() => {
+         return (0, ad.k)(Jd, "ThreeMfModel"), (() => {
```

#### 1091. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14980` → after: `L14980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L14980) · [Before (L14980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L14980)

```diff
-         })(), ub.KnownMeta = ["Title", "Designer", "Description", "Copyright", "LicenseTerms", "Rating", "CreationDate", "ModificationDate", "Application"], (0, nb.k)(ub, Ub), ub
+         })(), Jd.KnownMeta = ["Title", "Designer", "Description", "Copyright", "LicenseTerms", "Rating", "CreationDate", "ModificationDate", "Application"], (0, ad.i)(Jd, Pd), Jd
```

#### 1092. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14996` → after: `L14996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L14996) · [Before (L14996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L14996)

```diff
-             this.name = (0, nb.k)(this, Lb, void 0), this.preserve = ((0, nb.k)(this, Yb), (0, nb.k)(this, Sb, void 0)), this.type = ((0, nb.k)(this, ab), (0, nb.k)(this, Hb, void 0)), this.value = (0, nb.k)(this, wb), this.name = bb, this.value = ub, this.preserve = hb, this.typ … [truncated]
+             this.name = (0, ad.i)(this, Zd, void 0), this.preserve = ((0, ad.i)(this, gd), (0, ad.i)(this, Cd, void 0)), this.type = ((0, ad.i)(this, Kd), (0, ad.i)(this, od, void 0)), this.value = (0, ad.i)(this, ld), this.name = dd, this.value = Jd, this.preserve = kd, this.typ … [truncated]
```

#### 1093. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14999` → after: `L14999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L14999) · [Before (L14999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L14999)

```diff
-         return (0, nb.n)(ub, "ThreeMfMeta"), (() => {
+         return (0, ad.k)(Jd, "ThreeMfMeta"), (() => {
```

#### 1094. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L15057` → after: `L15057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L15057) · [Before (L15057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L15057)

```diff
-           }), (0, nb.k)(ub, Ub)
+           }), (0, ad.i)(Jd, Pd)
```

#### 1095. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L15071` → after: `L15071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L15071) · [Before (L15071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L15071)

```diff
-         return (0, nb.n)(ub, "ThreeMfMetadataGroup"), (() => {
+         return (0, ad.k)(Jd, "ThreeMfMetadataGroup"), (() => {
```

#### 1096. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L15084` → after: `L15084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L15084) · [Before (L15084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L15084)

```diff
-           }), (0, nb.k)(ub, Bb)
+           }), (0, ad.i)(Jd, pd)
```

#### 1097. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L15098` → after: `L15098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L15098) · [Before (L15098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L15098)

```diff
-         return (0, nb.n)(ub, "ThreeMfResources"), (() => {
+         return (0, ad.k)(Jd, "ThreeMfResources"), (() => {
```

#### 1098. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L15111` → after: `L15111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L15111) · [Before (L15111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L15111)

```diff
-           }), (0, nb.k)(ub, Bb)
+           }), (0, ad.i)(Jd, pd)
```

#### 1099. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L15137` → after: `L15137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L15137) · [Before (L15137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L15137)

```diff
-             this.id = (0, nb.k)(this, Hb, void 0), this.type = ((0, nb.k)(this, wb), (0, nb.k)(this, Zb, void 0)), this.thumbnail = ((0, nb.k)(this, Xb), (0, nb.k)(this, pb, void 0)), this.partnumber = ((0, nb.k)(this, ob), (0, nb.k)(this, Ab, void 0)), this.name = ((0, nb.k)(thi … [truncated]
+             this.id = (0, ad.i)(this, od, void 0), this.type = ((0, ad.i)(this, ld), (0, ad.i)(this, Qd, void 0)), this.thumbnail = ((0, ad.i)(this, Ld), (0, ad.i)(this, Od, void 0)), this.partnumber = ((0, ad.i)(this, ed), (0, ad.i)(this, Rd, void 0)), this.name = ((0, ad.i)(thi … [truncated]
```

#### 1100. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L15140` → after: `L15140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L15140) · [Before (L15140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L15140)

```diff
-         return (0, nb.n)(ub, "ThreeMfObject"), (() => {
+         return (0, ad.k)(Jd, "ThreeMfObject"), (() => {
```

#### 1101. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L15258` → after: `L15258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L15258) · [Before (L15258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L15258)

```diff
-           }), (0, nb.k)(ub, ab)
+           }), (0, ad.i)(Jd, Kd)
```

#### 1102. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L15272` → after: `L15272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L15272) · [Before (L15272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L15272)

```diff
-         return (0, nb.n)(ub, "ThreeMfMesh"), (() => {
+         return (0, ad.k)(Jd, "ThreeMfMesh"), (() => {
```

#### 1103. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L15285` → after: `L15285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L15285) · [Before (L15285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L15285)

```diff
-           }), (0, nb.k)(ub, Bb)
+           }), (0, ad.i)(Jd, pd)
```

#### 1104. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L15299` → after: `L15299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L15299) · [Before (L15299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L15299)

```diff
-         return (0, nb.n)(ub, "ThreeMfVertices"), (() => {
+         return (0, ad.k)(Jd, "ThreeMfVertices"), (() => {
```

#### 1105. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L15312` → after: `L15312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L15312) · [Before (L15312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L15312)

```diff
-           }), (0, nb.k)(ub, Bb)
+           }), (0, ad.i)(Jd, pd)
```

#### 1106. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L15332` → after: `L15332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L15332) · [Before (L15332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L15332)

```diff
-             this.x = (0, nb.k)(this, Lb, void 0), this.y = ((0, nb.k)(this, Yb), (0, nb.k)(this, Sb, void 0)), this.z = ((0, nb.k)(this, ab), (0, nb.k)(this, Hb, void 0)), (0, nb.k)(this, wb), this.x = bb, this.y = ub, this.z = hb
+             this.x = (0, ad.i)(this, Zd, void 0), this.y = ((0, ad.i)(this, gd), (0, ad.i)(this, Cd, void 0)), this.z = ((0, ad.i)(this, Kd), (0, ad.i)(this, od, void 0)), (0, ad.i)(this, ld), this.x = dd, this.y = Jd, this.z = kd
```

#### 1107. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L15335` → after: `L15335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L15335) · [Before (L15335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L15335)

```diff
-         return (0, nb.n)(ub, "ThreeMfVertex"), (() => {
+         return (0, ad.k)(Jd, "ThreeMfVertex"), (() => {
```

#### 1108. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L15393` → after: `L15393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L15393) · [Before (L15393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L15393)

```diff
-           }), (0, nb.k)(ub, Ub)
+           }), (0, ad.i)(Jd, Pd)
```

#### 1109. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L15407` → after: `L15407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L15407) · [Before (L15407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L15407)

```diff
-         return (0, nb.n)(ub, "ThreeMfTriangles"), (() => {
+         return (0, ad.k)(Jd, "ThreeMfTriangles"), (() => {
```

#### 1110. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L15420` → after: `L15420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L15420) · [Before (L15420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L15420)

```diff
-           }), (0, nb.k)(ub, Bb)
+           }), (0, ad.i)(Jd, pd)
```

#### 1111. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L15445` → after: `L15445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L15445) · [Before (L15445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L15445)

```diff
-             this.v1 = (0, nb.k)(this, Hb, void 0), this.v2 = ((0, nb.k)(this, wb), (0, nb.k)(this, Zb, void 0)), this.v3 = ((0, nb.k)(this, Xb), (0, nb.k)(this, pb, void 0)), this.p1 = ((0, nb.k)(this, ob), (0, nb.k)(this, Ab, void 0)), this.p2 = ((0, nb.k)(this, lb), (0, nb.k)(t … [truncated]
+             this.v1 = (0, ad.i)(this, od, void 0), this.v2 = ((0, ad.i)(this, ld), (0, ad.i)(this, Qd, void 0)), this.v3 = ((0, ad.i)(this, Ld), (0, ad.i)(this, Od, void 0)), this.p1 = ((0, ad.i)(this, ed), (0, ad.i)(this, Rd, void 0)), this.p2 = ((0, ad.i)(this, Id), (0, ad.i)(t … [truncated]
```

#### 1112. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L15448` → after: `L15448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L15448) · [Before (L15448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L15448)

```diff
-         return (0, nb.n)(ub, "ThreeMfTriangle"), (() => {
+         return (0, ad.k)(Jd, "ThreeMfTriangle"), (() => {
```

#### 1113. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L15566` → after: `L15566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L15566) · [Before (L15566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L15566)

```diff
-           }), (0, nb.k)(ub, ab)
+           }), (0, ad.i)(Jd, Kd)
```

#### 1114. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L15580` → after: `L15580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L15580) · [Before (L15580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L15580)

```diff
-         return (0, nb.n)(ub, "ThreeMfComponents"), (() => {
+         return (0, ad.k)(Jd, "ThreeMfComponents"), (() => {
```

#### 1115. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L15593` → after: `L15593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L15593) · [Before (L15593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L15593)

```diff
-           }), (0, nb.k)(ub, Bb)
+           }), (0, ad.i)(Jd, pd)
```

#### 1116. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L15608` → after: `L15608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L15608) · [Before (L15608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L15608)

```diff
-             this.objectid = (0, nb.k)(this, Ub, void 0), this.transform = ((0, nb.k)(this, Lb), (0, nb.k)(this, Yb, void 0)), (0, nb.k)(this, Sb), this.objectid = bb, this.transform = ub
+             this.objectid = (0, ad.i)(this, Pd, void 0), this.transform = ((0, ad.i)(this, Zd), (0, ad.i)(this, gd, void 0)), (0, ad.i)(this, Cd), this.objectid = dd, this.transform = Jd
```

#### 1117. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L15611` → after: `L15611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L15611) · [Before (L15611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L15611)

```diff
-         return (0, nb.n)(ub, "ThreeMfComponent"), (() => {
+         return (0, ad.k)(Jd, "ThreeMfComponent"), (() => {
```

#### 1118. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L15655` → after: `L15655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L15655) · [Before (L15655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L15655)

```diff
-           }), (0, nb.k)(ub, Gb)
+           }), (0, ad.i)(Jd, Wd)
```

#### 1119. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L15668` → after: `L15668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L15668) · [Before (L15668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L15668)

```diff
-             this.id = (0, nb.k)(this, Gb, void 0), this.base = ((0, nb.k)(this, Ub), []), this.id = bb
+             this.id = (0, ad.i)(this, Wd, void 0), this.base = ((0, ad.i)(this, Pd), []), this.id = dd
```

#### 1120. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L15671` → after: `L15671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L15671) · [Before (L15671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L15671)

```diff
-         return (0, nb.n)(ub, "ThreeMfBaseMaterials"), (() => {
+         return (0, ad.k)(Jd, "ThreeMfBaseMaterials"), (() => {
```

#### 1121. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L15699` → after: `L15699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L15699) · [Before (L15699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L15699)

```diff
-           }), (0, nb.k)(ub, Ob)
+           }), (0, ad.i)(Jd, Nd)
```

#### 1122. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L15714` → after: `L15714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L15714) · [Before (L15714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L15714)

```diff
-             this.name = (0, nb.k)(this, Ub, void 0), this.displaycolor = ((0, nb.k)(this, Lb), (0, nb.k)(this, Yb, void 0)), (0, nb.k)(this, Sb), this.name = bb, this.displaycolor = ub
+             this.name = (0, ad.i)(this, Pd, void 0), this.displaycolor = ((0, ad.i)(this, Zd), (0, ad.i)(this, gd, void 0)), (0, ad.i)(this, Cd), this.name = dd, this.displaycolor = Jd
```

#### 1123. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L15717` → after: `L15717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L15717) · [Before (L15717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L15717)

```diff
-         return (0, nb.n)(ub, "ThreeMfBase"), (() => {
+         return (0, ad.k)(Jd, "ThreeMfBase"), (() => {
```

#### 1124. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L15760` → after: `L15760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L15760) · [Before (L15760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L15760)

```diff
-           }), (0, nb.k)(ub, Gb)
+           }), (0, ad.i)(Jd, Wd)
```

#### 1125. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L15774` → after: `L15774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L15774) · [Before (L15774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L15774)

```diff
-         return (0, nb.n)(ub, "ThreeMfBuild"), (() => {
+         return (0, ad.k)(Jd, "ThreeMfBuild"), (() => {
```

#### 1126. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L15787` → after: `L15787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L15787) · [Before (L15787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L15787)

```diff
-           }), (0, nb.k)(ub, Bb)
+           }), (0, ad.i)(Jd, pd)
```

#### 1127. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L15804` → after: `L15804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L15804) · [Before (L15804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L15804)

```diff
-             this.objectid = (0, nb.k)(this, Lb, void 0), this.transform = ((0, nb.k)(this, Yb), (0, nb.k)(this, Sb, void 0)), this.partnumber = ((0, nb.k)(this, ab), (0, nb.k)(this, Hb, void 0)), this.metadatagroup = (0, nb.k)(this, wb), this.objectid = bb, this.transform = ub, t … [truncated]
+             this.objectid = (0, ad.i)(this, Zd, void 0), this.transform = ((0, ad.i)(this, gd), (0, ad.i)(this, Cd, void 0)), this.partnumber = ((0, ad.i)(this, Kd), (0, ad.i)(this, od, void 0)), this.metadatagroup = (0, ad.i)(this, ld), this.objectid = dd, this.transform = Jd, t … [truncated]
```

#### 1128. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L15807` → after: `L15807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L15807) · [Before (L15807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L15807)

```diff
-         return (0, nb.n)(ub, "ThreeMfItem"), (() => {
+         return (0, ad.k)(Jd, "ThreeMfItem"), (() => {
```

#### 1129. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L15866` → after: `L15866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L15866) · [Before (L15866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L15866)

```diff
-           }), (0, nb.k)(ub, Ub)
+           }), (0, ad.i)(Jd, Pd)
```

#### 1130. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L15959` → after: `L15959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L15959) · [Before (L15959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L15959)

```diff
-           return `#${hb}${Bb}${Ob}${Math.round(Math.min(255,Math.max(0,255*bb.a))).toString(16).padStart(2,"0").toUpperCase()}`
+           return `#${kd}${pd}${Nd}${Math.round(Math.min(255,Math.max(0,255*dd.a))).toString(16).padStart(2,"0").toUpperCase()}`
```

#### 1131. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L15961` → after: `L15961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L15961) · [Before (L15961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L15961)

```diff
-         return `#${hb}${Bb}${Ob}`
+         return `#${kd}${pd}${Nd}`
```

#### 1132. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16012` → after: `L16012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L16012) · [Before (L16012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L16012)

```diff
-         const bb = `${aL}${HL}`;
+         const dd = `${QZ}${LZ}`;
```

#### 1133. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16014` → after: `L16014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L16014) · [Before (L16014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L16014)

```diff
-           const ub = `/${bb}`;
+           const Jd = `/${dd}`;
```

#### 1134. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16051` → after: `L16051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L16051) · [Before (L16051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L16051)

```diff
-         Ob(Sb, ZL, Yb.contentTypes), Ob(Sb, `${SL}${wL}`, Yb.relationships), Ob(Sb, `${aL}${HL}`, Yb.model), Sb.end()
+         Nd(Cd, eZ, gd.contentTypes), Nd(Cd, `${lZ}${OZ}`, gd.relationships), Nd(Cd, `${QZ}${LZ}`, gd.model), Cd.end()
```

#### 1135. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16103` → after: `L16103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L16103) · [Before (L16103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L16103)

```diff
-         hb = hb.filter((bb => bb instanceof SB.b || bb instanceof Zb.d));
+         kd = kd.filter((dd => dd instanceof op.d || dd instanceof Qd.e));
```

#### 1136. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16110` → after: `L16110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L16110) · [Before (L16110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L16110)

```diff
-           if (bb instanceof Zb.d) {
+           if (dd instanceof Qd.e) {
```

#### 1137. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16114` → after: `L16114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L16114) · [Before (L16114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L16114)

```diff
-           const ub = bb.name || `mesh${Yb}`,
+           const Jd = dd.name || `mesh${gd}`,
```

#### 1138. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16117` → after: `L16117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L16117) · [Before (L16117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L16117)

```diff
-             ab = bb.FW;
+             Kd = dd.rG;
```

#### 1139. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16124` → after: `L16124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L16124) · [Before (L16124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L16124)

```diff
-               const bb = Hb ? `${ub}` : `${ub}_${hb}`,
+               const dd = od ? `${Jd}` : `${Jd}_${kd}`,
```

#### 1140. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16131` → after: `L16131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L16131) · [Before (L16131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L16131)

```diff
-           const bb = this._groupBy(Lb, (bb => bb.LOb));
+           const dd = this._groupBy(Zd, (dd => dd.RNd));
```

#### 1141. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16136` → after: `L16136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L16136) · [Before (L16136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L16136)

```diff
-                   Ob = ub.FW;
+                   Nd = Jd.rG;
```

#### 1142. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16153` → after: `L16153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L16153) · [Before (L16153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L16153)

```diff
-         const hb = bb.XBb();
+         const kd = dd.ipd();
```

#### 1143. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16190` → after: `L16190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L16190) · [Before (L16190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L16190)

```diff
-         const hb = bb.multiplyToRef(TL._R_BJS_TO_3MF, Mb.d.Zero()).m;
+         const kd = dd.multiplyToRef(AZ._R_BJS_TO_3MF, yd.b.Zero()).m;
```

#### 1144. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16197` → after: `L16197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/225.js#L16197) · [Before (L16197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/225.js#L16197)

```diff
-     }, TL._PositionKind = "position", TL._R_BJS_TO_3MF = Mb.d.RotationX(Math.PI / 2).multiply(Mb.d.Scaling(1, -1, 1))
+     }, AZ._PositionKind = "position", AZ._R_BJS_TO_3MF = yd.b.RotationX(Math.PI / 2).multiply(yd.b.Scaling(1, -1, 1))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/226.js` (halsg.2bd74967 → x17cru.159bd7ce)

- **File**: `bundles/bloxd.io/chunks/js/226.js` (141 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65)

#### 1. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L4)

```diff
-   36748: (bb, ub, hb) => {
+   37277: (dd, Jd, kd) => {
```

#### 2. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L6)

```diff
-       b: () => Ob
+       d: () => Nd
```

#### 3. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L8)

```diff
-     var Bb = hb(36753);
+     var pd = kd(37280);
```

#### 4. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L19)

```diff
-   36739: (bb, ub, hb) => {
+   37271: (dd, Jd, kd) => {
```

#### 5. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L37` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L37) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L37)

```diff
-   36760: (bb, ub, hb) => {
+   37296: (dd, Jd, kd) => {
```

#### 6. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L39-L41` → after: `L39-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L39-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L39-L40) · [Before (L39-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L39-L41)

```diff
-       b: () => Lb,
-       e: () => Sb,
-       h: () => Yb,
+       d: () => Zd,
+       g: () => Cd,
```

#### 7. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L44` → after: `L43-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L43-L44) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L44)

```diff
-       p: () => Ub
+       q: () => Wd,
+       r: () => Pd
```

#### 8. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L54-L55` → after: `L54-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L54-L55) · [Before (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L54-L55)

```diff
-       const Ob = bb.ZBb(),
-         Gb = ub.ZBb(),
+       const Nd = dd.spd(),
+         Wd = Jd.spd(),
```

#### 9. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L93` → after: `L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L93) · [Before (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L93)

```diff
-       Gb(bb, ub, hb.ZBb(), Bb), Ob(hb)
+       Wd(dd, Jd, kd.spd(), pd), Nd(kd)
```

#### 10. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L98` → after: `L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L98) · [Before (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L98)

```diff
-       const Bb = bb.ZBb();
+       const pd = dd.spd();
```

#### 11. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L103` → after: `L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L103) · [Before (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L103)

```diff
-       const hb = Sb(bb, ub.ZBb());
+       const kd = Cd(dd, Jd.spd());
```

#### 12. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L108` → after: `L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L108) · [Before (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L108)

```diff
-       const hb = bb.ZBb(),
+       const kd = dd.spd(),
```

#### 13. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L166` → after: `L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L166) · [Before (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L166)

```diff
-   36727: (bb, ub, hb) => {
+   37251: (dd, Jd, kd) => {
```

#### 14. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L171-L174` → after: `L172-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L172-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L172-L174) · [Before (L171-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L171-L174)

```diff
-       i: () => Ab,
-       m: () => Hb,
-       q: () => wb,
-       r: () => Zb
+       k: () => od,
+       n: () => ld,
+       o: () => Qd
```

#### 15. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L176-L182` → after: `L176-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L176-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L176-L182) · [Before (L176-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L176-L182)

```diff
-     var Bb = hb(36734),
-       Ob = hb(36736),
-       Gb = hb(36739),
-       Ub = hb(36748),
-       Lb = hb(36757),
-       Yb = hb(36760),
-       Sb = hb(36762);
+     var pd = kd(37259),
+       Nd = kd(37267),
+       Wd = kd(37271),
+       Pd = kd(37277),
+       Zd = kd(37289),
+       gd = kd(37296),
+       Cd = kd(37303);
```

#### 16. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L204` → after: `L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L204) · [Before (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L204)

```diff
-       Ohb(bb) {
+       lkd(dd) {
```

#### 17. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L208` → after: `L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L208) · [Before (L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L208)

```diff
-       ZBb() {
+       spd() {
```

#### 18. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L214` → after: `L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L214) · [Before (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L214)

```diff
-       M_(bb, ub) {
+       kdd(dd, Jd) {
```

#### 19. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L218` → after: `L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L218) · [Before (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L218)

```diff
-         return this.M_(bb, ub)
+         return this.kdd(dd, Jd)
```

#### 20. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L221` → after: `L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L221) · [Before (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L221)

```diff
-         return this.M_(bb, bb)
+         return this.kdd(dd, dd)
```

#### 21. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L244` → after: `L244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L244) · [Before (L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L244)

```diff
-       tBb(bb) {
+       hpd(dd) {
```

#### 22. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L311` → after: `L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L311) · [Before (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L311)

```diff
-         let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Bb.b;
+         let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pd.e;
```

#### 23. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L314` → after: `L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L314) · [Before (L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L314)

```diff
-       sUb(bb, ub) {
+       zPd(dd, Jd) {
```

#### 24. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L377` → after: `L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L377) · [Before (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L377)

```diff
-         return (arguments.length > 2 ? arguments[2] : void 0).M_((0, Lb.RandomRange)(bb, ub), (0, Lb.RandomRange)(bb, ub))
+         return (arguments.length > 2 ? arguments[2] : void 0).kdd((0, Zd.RandomRange)(dd, Jd), (0, Zd.RandomRange)(dd, Jd))
```

#### 25. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L390` → after: `L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L390) · [Before (L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L390)

```diff
-         return hb.M_(bb, ub), hb
+         return kd.kdd(dd, Jd), kd
```

#### 26. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L478` → after: `L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L478) · [Before (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L478)

```diff
-         return hb.M_((bb.x + ub.x) / 2, (bb.y + ub.y) / 2)
+         return kd.kdd((dd.x + Jd.x) / 2, (dd.y + Jd.y) / 2)
```

#### 27. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L519` → after: `L519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L519) · [Before (L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L519)

```diff
-         return "YX"
+         return "IL"
```

#### 28. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L525` → after: `L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L525) · [Before (L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L525)

```diff
-       ZBb() {
+       spd() {
```

#### 29. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L532` → after: `L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L532) · [Before (L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L532)

```diff
-       Ohb(bb) {
+       lkd(dd) {
```

#### 30. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L551` → after: `L551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L551) · [Before (L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L551)

```diff
-       tBb(bb) {
+       hpd(dd) {
```

#### 31. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L622` → after: `L622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L622) · [Before (L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L622)

```diff
-           Gb = ob.YX[0];
+           Wd = ed.IL[0];
```

#### 32. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L625` → after: `L625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L625) · [Before (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L625)

```diff
-         if (Math.abs(Ub) < 1e-10) hb.N9(1 / 0);
+         if (Math.abs(Pd) < 1e-10) kd.o5(1 / 0);
```

#### 33. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L637` → after: `L637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L637) · [Before (L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L637)

```diff
-         let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Bb.b;
+         let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pd.e;
```

#### 34. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L640` → after: `L640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L640) · [Before (L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L640)

```diff
-       sUb(bb, ub, hb) {
+       zPd(dd, Jd, kd) {
```

#### 35. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L714` → after: `L714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L714) · [Before (L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L714)

```diff
-         const ub = ob.YX[0].mD(this);
+         const Jd = ed.IL[0].Fs(this);
```

#### 36. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L721` → after: `L721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L721) · [Before (L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L721)

```diff
-         return this.subtractToRef(ub, ob.YX[0]), ob.YX[0].rotateByQuaternionToRef(bb, ob.YX[0]), ub.addToRef(ob.YX[0], hb), hb
+         return this.subtractToRef(Jd, ed.IL[0]), ed.IL[0].rotateByQuaternionToRef(dd, ed.IL[0]), Jd.addToRef(ed.IL[0], kd), kd
```

#### 37. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L740` → after: `L740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L740) · [Before (L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L740)

```diff
-         return this.M_(bb._x, bb._y, bb._z)
+         return this.kdd(dd._x, dd._y, dd._z)
```

#### 38. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L742` → after: `L742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L742) · [Before (L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L742)

```diff
-       M_(bb, ub, hb) {
+       kdd(dd, Jd, kd) {
```

#### 39. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L746` → after: `L746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L746) · [Before (L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L746)

```diff
-         return this.M_(bb, ub, hb)
+         return this.kdd(dd, Jd, kd)
```

#### 40. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L756-L757` → after: `L756-L757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L756-L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L756-L757) · [Before (L756-L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L756-L757)

```diff
-         const Bb = bb.normalizeToRef(ob.YX[1]),
-           Ob = ub.normalizeToRef(ob.YX[2]);
+         const pd = dd.normalizeToRef(ed.IL[1]),
+           Nd = Jd.normalizeToRef(ed.IL[2]);
```

#### 41. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L761-L762` → after: `L761-L762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L761-L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L761-L762) · [Before (L761-L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L761-L762)

```diff
-           Yb = ob.YX[3];
-         return wb.CrossToRef(Bb, Ob, Yb), wb.Dot(Yb, hb) > 0 ? isNaN(Ub) ? 0 : Ub : isNaN(Ub) ? -Math.PI : -Math.acos(Gb)
+           gd = ed.IL[3];
+         return ld.CrossToRef(pd, Nd, gd), ld.Dot(gd, kd) > 0 ? isNaN(Pd) ? 0 : Pd : isNaN(Pd) ? -Math.PI : -Math.acos(Wd)
```

#### 42. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L765-L772` → after: `L765-L772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L765-L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L765-L772) · [Before (L765-L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L765-L772)

```diff
-         ob.YX[0].mD(bb);
-         const Bb = ob.YX[0];
-         ob.YX[1].mD(ub);
-         const Ob = ob.YX[1];
-         ob.YX[2].mD(hb);
-         const Gb = ob.YX[2],
-           Ub = ob.YX[3],
-           Yb = ob.YX[4];
+         ed.IL[0].Fs(dd);
+         const pd = ed.IL[0];
+         ed.IL[1].Fs(Jd);
+         const Nd = ed.IL[1];
+         ed.IL[2].Fs(kd);
+         const Wd = ed.IL[2],
+           Pd = ed.IL[3],
+           gd = ed.IL[4];
```

#### 43. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L778` → after: `L778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L778) · [Before (L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L778)

```diff
-         const Bb = Ab.YX[0];
+         const pd = Rd.IL[0];
```

#### 44. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L787-L789` → after: `L787-L789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L787-L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L787-L789) · [Before (L787-L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L787-L789)

```diff
-         const Gb = ob.YX[0],
-           Ub = ob.YX[1];
-         Gb.mD(bb);
+         const Wd = ed.IL[0],
+           Pd = ed.IL[1];
+         Wd.Fs(dd);
```

#### 45. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L791` → after: `L791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L791) · [Before (L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L791)

```diff
-         Gb.normalizeFromLength(Yb), Ub.mD(ub);
+         Wd.normalizeFromLength(gd), Pd.Fs(Jd);
```

#### 46. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L796` → after: `L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L796) · [Before (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L796)

```diff
-         if (ab < 1 - Bb.b) {
+         if (Kd < 1 - pd.e) {
```

#### 47. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L801` → after: `L801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L801) · [Before (L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L801)

```diff
-         return Gb.scaleInPlace(Hb), Ub.scaleInPlace(Zb), Ob.mD(Gb).addInPlace(Ub), Ob.scaleInPlace((0, Lb.Lerp)(Yb, Sb, hb)), Ob
+         return Wd.scaleInPlace(od), Pd.scaleInPlace(Qd), Nd.Fs(Wd).addInPlace(Pd), Nd.scaleInPlace((0, Zd.Lerp)(gd, Cd, kd)), Nd
```

#### 48. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L820` → after: `L820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L820) · [Before (L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L820)

```diff
-         return Bb.M_(bb, ub, hb), Bb
+         return pd.kdd(dd, Jd, kd), pd
```

#### 49. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L884` → after: `L884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L884) · [Before (L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L884)

```diff
-         return (arguments.length > 2 ? arguments[2] : void 0).M_((0, Lb.RandomRange)(bb, ub), (0, Lb.RandomRange)(bb, ub), (0, Lb.RandomRange)(bb, ub))
+         return (arguments.length > 2 ? arguments[2] : void 0).kdd((0, Zd.RandomRange)(dd, Jd), (0, Zd.RandomRange)(dd, Jd), (0, Zd.RandomRange)(dd, Jd))
```

#### 50. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L930` → after: `L930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L930) · [Before (L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L930)

```diff
-         return Ub = Ub > hb._z ? hb._z : Ub, Ub = Ub < ub._z ? ub._z : Ub, Bb.M_(Ob, Gb, Ub), Bb
+         return Pd = Pd > kd._z ? kd._z : Pd, Pd = Pd < Jd._z ? Jd._z : Pd, pd.kdd(Nd, Wd, Pd), pd
```

#### 51. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L976` → after: `L976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L976) · [Before (L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L976)

```diff
-         return hb.M_(Bb, Ob, Gb), hb
+         return kd.kdd(pd, Nd, Wd), kd
```

#### 52. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L995` → after: `L995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L995) · [Before (L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L995)

```diff
-           Hb = Ub.b.LastCreatedEngine?.isNDCHalfZRange,
+           od = Pd.d.LastCreatedEngine?.isNDCHalfZRange,
```

#### 53. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1006-L1007` → after: `L1006-L1007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1006-L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L1006-L1007) · [Before (L1006-L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L1006-L1007)

```diff
-         const Bb = Ab.YX[0];
-         return Bb.mD(ub).scaleInPlace(2 * wb.Dot(bb, ub)), hb.mD(bb).tBb(Bb)
+         const pd = Rd.IL[0];
+         return pd.Fs(Jd).scaleInPlace(2 * ld.Dot(dd, Jd)), kd.Fs(dd).hpd(pd)
```

#### 54. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1022-L1023` → after: `L1022-L1023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1022-L1023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L1022-L1023) · [Before (L1022-L1023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L1022-L1023)

```diff
-         const Hb = ob.YX[0];
-         return Hb.x = bb / Bb * 2 - 1, Hb.y = -(ub / Ob * 2 - 1), Ub.b.LastCreatedEngine?.isNDCHalfZRange ? Hb.z = hb : Hb.z = 2 * hb - 1, wb.TransformCoordinatesToRef(Hb, ab, Sb), Sb
+         const od = ed.IL[0];
+         return od.x = dd / pd * 2 - 1, od.y = -(Jd / Nd * 2 - 1), Pd.d.LastCreatedEngine?.isNDCHalfZRange ? od.z = kd : od.z = 2 * kd - 1, ld.TransformCoordinatesToRef(od, Kd, Cd), Cd
```

#### 55. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1027` → after: `L1027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L1027) · [Before (L1027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L1027)

```diff
-         return hb.mD(bb), hb.minimizeInPlace(ub), hb
+         return kd.Fs(dd), kd.minimizeInPlace(Jd), kd
```

#### 56. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1031` → after: `L1031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L1031) · [Before (L1031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L1031)

```diff
-         return hb.mD(bb), hb.maximizeInPlace(ub), hb
+         return kd.Fs(dd), kd.maximizeInPlace(Jd), kd
```

#### 57. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1043-L1047` → after: `L1043-L1047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1043-L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L1043-L1047) · [Before (L1043-L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L1043-L1047)

```diff
-         const Ub = ob.YX[0],
-           Yb = ob.YX[1],
-           Sb = ob.YX[2],
-           ab = ob.YX[3],
-           Hb = ob.YX[4];
+         const Pd = ed.IL[0],
+           gd = ed.IL[1],
+           Cd = ed.IL[2],
+           Kd = ed.IL[3],
+           od = ed.IL[4];
```

#### 58. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1052` → after: `L1052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L1052) · [Before (L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L1052)

```diff
-         if (Zb < Bb.b || Xb < Bb.b || pb < Bb.b) return Gb.mD(ub), wb.Distance(bb, ub);
+         if (Qd < pd.e || Ld < pd.e || Od < pd.e) return Wd.Fs(Jd), ld.Distance(dd, Jd);
```

#### 59. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1055` → after: `L1055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L1055) · [Before (L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L1055)

```diff
-         if (Ab < Bb.b) return Gb.mD(ub), wb.Distance(bb, ub);
+         if (Rd < pd.e) return Wd.Fs(Jd), ld.Distance(dd, Jd);
```

#### 60. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1058` → after: `L1058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L1058) · [Before (L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L1058)

```diff
-         if (lb < Bb.b) return Gb.mD(ub), 0;
+         if (Id < pd.e) return Wd.Fs(Jd), 0;
```

#### 61. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1061-L1069` → after: `L1061-L1069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1061-L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L1061-L1069) · [Before (L1061-L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L1061-L1069)

```diff
-           Wb = ob.YX[5],
-           Cb = ob.YX[6];
-         Wb.mD(ab).scaleInPlace(-lb * Kb), Cb.mD(bb).addInPlace(Wb);
-         const db = ob.YX[4],
-           rb = ob.YX[5],
-           jb = ob.YX[7],
-           nb = ob.YX[8];
-         db.mD(Ub).scaleInPlace(1 / Zb), nb.mD(Yb).scaleInPlace(1 / Xb), db.addInPlace(nb).scaleInPlace(-1), rb.mD(Ub).scaleInPlace(-1 / Zb), nb.mD(Sb).scaleInPlace(1 / pb), rb.addInPlace(nb).scaleInPlace(-1), jb.mD(Sb).scaleInPlace(-1 / pb), nb.mD(Yb).scaleInPlace(-1 / Xb), jb.ad … [truncated]
-         const Db = ob.YX[9];
+           vd = ed.IL[5],
+           xd = ed.IL[6];
+         vd.Fs(Kd).scaleInPlace(-Id * Gd), xd.Fs(dd).addInPlace(vd);
+         const qd = ed.IL[4],
+           Bd = ed.IL[5],
+           sd = ed.IL[7],
+           ad = ed.IL[8];
+         qd.Fs(Pd).scaleInPlace(1 / Qd), ad.Fs(gd).scaleInPlace(1 / Ld), qd.addInPlace(ad).scaleInPlace(-1), Bd.Fs(Pd).scaleInPlace(-1 / Qd), ad.Fs(Cd).scaleInPlace(1 / Od), Bd.addInPlace(ad).scaleInPlace(-1), sd.Fs(Cd).scaleInPlace(-1 / Od), ad.Fs(gd).scaleInPlace(-1 / Ld), sd.ad … [truncated]
+         const Md = ed.IL[9];
```

#### 62. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1071` → after: `L1071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L1071) · [Before (L1071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L1071)

```diff
-         Db.mD(Cb).tBb(ub), wb.CrossToRef(db, Db, nb), xb = wb.Dot(nb, ab);
+         Md.Fs(xd).hpd(Jd), ld.CrossToRef(qd, Md, ad), Fd = ld.Dot(ad, Kd);
```

#### 63. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1073` → after: `L1073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L1073) · [Before (L1073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L1073)

```diff
-         Db.mD(Cb).tBb(hb), wb.CrossToRef(rb, Db, nb), xb = wb.Dot(nb, ab);
+         Md.Fs(xd).hpd(kd), ld.CrossToRef(Bd, Md, ad), Fd = ld.Dot(ad, Kd);
```

#### 64. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1075` → after: `L1075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L1075) · [Before (L1075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L1075)

```diff
-         Db.mD(Cb).tBb(Ob), wb.CrossToRef(jb, Db, nb), xb = wb.Dot(nb, ab);
+         Md.Fs(xd).hpd(Nd), ld.CrossToRef(sd, Md, ad), Fd = ld.Dot(ad, Kd);
```

#### 65. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1077` → after: `L1077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L1077) · [Before (L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L1077)

```diff
-           vb = ob.YX[10];
+           Sd = ed.IL[10];
```

#### 66. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1079-L1081` → after: `L1079-L1081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1079-L1081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L1079-L1081) · [Before (L1079-L1081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L1079-L1081)

```diff
-         zb > 0 && gb < 0 ? (vb.mD(Ub), tb = ub, Jb = hb) : gb > 0 && ib < 0 ? (vb.mD(Sb), tb = hb, Jb = Ob) : (vb.mD(Yb).scaleInPlace(-1), tb = Ob, Jb = ub);
-         const eb = ob.YX[9],
-           Nb = ob.YX[4];
+         Yd > 0 && md < 0 ? (Sd.Fs(Pd), jd = Jd, Xd = kd) : md > 0 && bd < 0 ? (Sd.Fs(Cd), jd = kd, Xd = Nd) : (Sd.Fs(gd).scaleInPlace(-1), jd = Nd, Xd = Jd);
+         const fd = ed.IL[9],
+           nd = ed.IL[4];
```

#### 67. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1083-L1084` → after: `L1083-L1084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1083-L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L1083-L1084) · [Before (L1083-L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L1083-L1084)

```diff
-         if (!(wb.Dot(Nb, ab) < 0)) return Gb.mD(Cb), Math.abs(lb * Kb);
-         const sb = ob.YX[5];
+         if (!(ld.Dot(nd, Kd) < 0)) return Wd.Fs(xd), Math.abs(Id * Gd);
+         const Ud = ed.IL[5];
```

#### 68. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1086-L1087` → after: `L1086-L1087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1086-L1087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L1086-L1087) · [Before (L1086-L1087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L1086-L1087)

```diff
-         const Mb = ob.YX[9];
-         Mb.mD(tb).tBb(Cb);
+         const yd = ed.IL[9];
+         yd.Fs(jd).hpd(xd);
```

#### 69. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1089` → after: `L1089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L1089) · [Before (L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L1089)

```diff
-         if (mb < Bb.b) return Gb.mD(tb), wb.Distance(bb, tb);
+         if (Dd < pd.e) return Wd.Fs(jd), ld.Distance(dd, jd);
```

#### 70. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1092-L1095` → after: `L1092-L1095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1092-L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L1092-L1095) · [Before (L1092-L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L1092-L1095)

```diff
-           Pb = ob.YX[7];
-         Pb.mD(Cb).addInPlace(sb.scaleInPlace(mb * Ib)), nb.mD(Pb).tBb(tb), lb = vb.length(), vb.normalizeFromLength(lb);
-         let qb = wb.Dot(nb, vb) / Math.max(lb, Bb.b);
-         return qb = (0, Lb.Clamp)(qb, 0, 1), Pb.mD(tb).addInPlace(vb.scaleInPlace(qb * lb)), Gb.mD(Pb), wb.Distance(bb, Pb)
+           Ed = ed.IL[7];
+         Ed.Fs(xd).addInPlace(Ud.scaleInPlace(Dd * Td)), ad.Fs(Ed).hpd(jd), Id = Sd.length(), Sd.normalizeFromLength(Id);
+         let cd = ld.Dot(ad, Sd) / Math.max(Id, pd.e);
+         return cd = (0, Zd.Clamp)(cd, 0, 1), Ed.Fs(jd).addInPlace(Sd.scaleInPlace(cd * Id)), Wd.Fs(Ed), ld.Distance(dd, Ed)
```

#### 71. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1101` → after: `L1101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L1101) · [Before (L1101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L1101)

```diff
-         return hb.M_((bb._x + ub._x) / 2, (bb._y + ub._y) / 2, (bb._z + ub._z) / 2)
+         return kd.kdd((dd._x + Jd._x) / 2, (dd._y + Jd._y) / 2, (dd._z + Jd._z) / 2)
```

#### 72. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1155` → after: `L1155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L1155) · [Before (L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L1155)

```diff
-       ZBb() {
+       spd() {
```

#### 73. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1161` → after: `L1161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L1161) · [Before (L1161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L1161)

```diff
-       Ohb(bb) {
+       lkd(dd) {
```

#### 74. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1177` → after: `L1177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L1177) · [Before (L1177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L1177)

```diff
-       tBb(bb) {
+       hpd(dd) {
```

#### 75. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1217` → after: `L1217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L1217) · [Before (L1217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L1217)

```diff
-         let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Bb.b;
+         let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pd.e;
```

#### 76. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1220` → after: `L1220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L1220) · [Before (L1220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L1220)

```diff
-       sUb(bb, ub, hb, Bb) {
+       zPd(dd, Jd, kd, pd) {
```

#### 77. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1296` → after: `L1296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L1296) · [Before (L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L1296)

```diff
-       M_(bb, ub, hb, Bb) {
+       kdd(dd, Jd, kd, pd) {
```

#### 78. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1300` → after: `L1300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L1300) · [Before (L1300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L1300)

```diff
-         return this.M_(bb, ub, hb, Bb)
+         return this.kdd(dd, Jd, kd, pd)
```

#### 79. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1357` → after: `L1357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L1357) · [Before (L1357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L1357)

```diff
-         return hb.mD(bb), hb.minimizeInPlace(ub), hb
+         return kd.Fs(dd), kd.minimizeInPlace(Jd), kd
```

#### 80. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1361` → after: `L1361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L1361) · [Before (L1361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L1361)

```diff
-         return hb.mD(bb), hb.maximizeInPlace(ub), hb
+         return kd.Fs(dd), kd.maximizeInPlace(Jd), kd
```

#### 81. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1458` → after: `L1458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L1458) · [Before (L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L1458)

```diff
-       ZBb() {
+       spd() {
```

#### 82. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1465` → after: `L1465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L1465) · [Before (L1465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L1465)

```diff
-       Ohb(bb) {
+       lkd(dd) {
```

#### 83. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1473` → after: `L1473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L1473) · [Before (L1473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L1473)

```diff
-         let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Bb.b;
+         let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pd.e;
```

#### 84. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1477` → after: `L1477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L1477) · [Before (L1477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L1477)

```diff
-         let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Bb.b;
+         let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pd.e;
```

#### 85. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1486` → after: `L1486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L1486) · [Before (L1486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L1486)

```diff
-       M_(bb, ub, hb, Bb) {
+       kdd(dd, Jd, kd, pd) {
```

#### 86. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1490` → after: `L1490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L1490) · [Before (L1490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L1490)

```diff
-         return this.M_(bb, ub, hb, Bb)
+         return this.kdd(dd, Jd, kd, pd)
```

#### 87. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1493` → after: `L1493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L1493) · [Before (L1493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L1493)

```diff
-         return this.M_(bb, bb, bb, bb)
+         return this.kdd(dd, dd, dd, dd)
```

#### 88. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1519` → after: `L1519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L1519) · [Before (L1519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L1519)

```diff
-       tBb(bb) {
+       hpd(dd) {
```

#### 89. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1543` → after: `L1543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L1543) · [Before (L1543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L1543)

```diff
-         return ub.M_(hb, Bb, Ob, Gb), ub
+         return Jd.kdd(kd, pd, Nd, Wd), Jd
```

#### 90. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1581` → after: `L1581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L1581) · [Before (L1581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L1581)

```diff
-       sUb(bb, ub, hb, Bb) {
+       zPd(dd, Jd, kd, pd) {
```

#### 91. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1597` → after: `L1597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L1597) · [Before (L1597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L1597)

```diff
-         return bb.M_(-this._x, -this._y, -this._z, this._w), bb
+         return dd.kdd(-this._x, -this._y, -this._z, this._w), dd
```

#### 92. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1633` → after: `L1633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L1633) · [Before (L1633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L1633)

```diff
-         return 0 === ub || 1 === ub ? bb.M_(this._x, this._y, this._z, this._w) : this.scaleToRef(1 / ub, bb)
+         return 0 === Jd || 1 === Jd ? dd.kdd(this._x, this._y, this._z, this._w) : this.scaleToRef(1 / Jd, dd)
```

#### 93. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1754` → after: `L1754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L1754) · [Before (L1754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L1754)

```diff
-         return Ob.M_(bb, ub, hb, Bb), Ob
+         return Nd.kdd(dd, Jd, kd, pd), Nd
```

#### 94. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1771` → after: `L1771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L1771) · [Before (L1771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L1771)

```diff
-         let Ob = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Bb.b;
+         let Nd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : pd.e;
```

#### 95. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1773` → after: `L1773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L1773) · [Before (L1773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L1773)

```diff
-         return Gb < Ob ? Math.abs(bb.x) > Math.abs(bb.z) ? hb.set(-bb.y, bb.x, 0, 0) : hb.set(0, -bb.z, bb.y, 0) : (wb.CrossToRef(bb, ub, Ab.YX[0]), hb.set(Ab.YX[0].x, Ab.YX[0].y, Ab.YX[0].z, Gb)), hb.normalize()
+         return Wd < Nd ? Math.abs(dd.x) > Math.abs(dd.z) ? kd.set(-dd.y, dd.x, 0, 0) : kd.set(0, -dd.z, dd.y, 0) : (ld.CrossToRef(dd, Jd, Rd.IL[0]), kd.set(Rd.IL[0].x, Rd.IL[0].y, Rd.IL[0].z, Wd)), kd.normalize()
```

#### 96. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1807` → after: `L1807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L1807) · [Before (L1807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L1807)

```diff
-         return bb = bb.normalizeToRef(ob.YX[0]), ub = ub.normalizeToRef(ob.YX[1]), hb = hb.normalizeToRef(ob.YX[2]), pb.FromXYZAxesToRef(bb, ub, hb, Ob), Xb.FromRotationMatrixToRef(Ob, Bb), Bb
+         return dd = dd.normalizeToRef(ed.IL[0]), Jd = Jd.normalizeToRef(ed.IL[1]), kd = kd.normalizeToRef(ed.IL[2]), Od.FromXYZAxesToRef(dd, Jd, kd, Nd), Ld.FromRotationMatrixToRef(Nd, pd), pd
```

#### 97. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1832` → after: `L1832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L1832) · [Before (L1832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L1832)

```diff
-         if (Ub < 0 && (Lb = !0, Ub = -Ub), Ub > .999999) Gb = 1 - hb, Ob = Lb ? -hb : hb;
+         if (Pd < 0 && (Zd = !0, Pd = -Pd), Pd > .999999) Wd = 1 - kd, Nd = Zd ? -kd : kd;
```

#### 98. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1836` → after: `L1836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L1836) · [Before (L1836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L1836)

```diff
-           Gb = Math.sin((1 - hb) * bb) * ub, Ob = Lb ? -Math.sin(hb * bb) * ub : Math.sin(hb * bb) * ub
+           Wd = Math.sin((1 - kd) * dd) * Jd, Nd = Zd ? -Math.sin(kd * dd) * Jd : Math.sin(kd * dd) * Jd
```

#### 99. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1873` → after: `L1873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L1873) · [Before (L1873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L1873)

```diff
-         return Bb.M_((0, Lb.Clamp)(bb.x, ub.x, hb.x), (0, Lb.Clamp)(bb.y, ub.y, hb.y), (0, Lb.Clamp)(bb.z, ub.z, hb.z), (0, Lb.Clamp)(bb.w, ub.w, hb.w))
+         return pd.kdd((0, Zd.Clamp)(dd.x, Jd.x, kd.x), (0, Zd.Clamp)(dd.y, Jd.y, kd.y), (0, Zd.Clamp)(dd.z, Jd.z, kd.z), (0, Zd.Clamp)(dd.w, Jd.w, kd.w))
```

#### 100. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1883` → after: `L1883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L1883) · [Before (L1883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L1883)

```diff
-         return (arguments.length > 2 ? arguments[2] : void 0).M_((0, Lb.RandomRange)(bb, ub), (0, Lb.RandomRange)(bb, ub), (0, Lb.RandomRange)(bb, ub), (0, Lb.RandomRange)(bb, ub))
+         return (arguments.length > 2 ? arguments[2] : void 0).kdd((0, Zd.RandomRange)(dd, Jd), (0, Zd.RandomRange)(dd, Jd), (0, Zd.RandomRange)(dd, Jd), (0, Zd.RandomRange)(dd, Jd))
```

#### 101. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1905` → after: `L1905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L1905) · [Before (L1905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L1905)

```diff
-         return hb.M_((bb.x + ub.x) / 2, (bb.y + ub.y) / 2, (bb.z + ub.z) / 2, (bb.w + ub.w) / 2)
+         return kd.kdd((dd.x + Jd.x) / 2, (dd.y + Jd.y) / 2, (dd.z + Jd.z) / 2, (dd.w + Jd.w) / 2)
```

#### 102. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1917` → after: `L1917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L1917) · [Before (L1917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L1917)

```diff
-         this.updateFlag = Yb.k._UpdateFlagSeed++, this._isIdentity = !1, this._isIdentity3x2 = !1, this._isIdentityDirty = !0, this._isIdentity3x2Dirty = !0
+         this.updateFlag = gd.o._UpdateFlagSeed++, this._isIdentity = !1, this._isIdentity3x2 = !1, this._isIdentityDirty = !0, this._isIdentity3x2Dirty = !0
```

#### 103. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1977` → after: `L1977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L1977) · [Before (L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L1977)

```diff
-       ZBb() {
+       spd() {
```

#### 104. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1980` → after: `L1980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L1980) · [Before (L1980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L1980)

```diff
-       Ohb(bb) {
+       lkd(dd) {
```

#### 105. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1984` → after: `L1984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L1984) · [Before (L1984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L1984)

```diff
-       M_() {
+       kdd() {
```

#### 106. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L2044` → after: `L2044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R2044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L2044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L2044) · [Before (L2044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L2044)

```diff
-       tBb(bb) {
+       hpd(dd) {
```

#### 107. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L2064` → after: `L2064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R2064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L2064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L2064) · [Before (L2064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L2064)

```diff
-         return !0 === this._isIdentity ? (pb.IdentityToRef(bb), bb) : ((0, Yb.e)(this, bb.ZBb()) ? bb.markAsUpdated() : bb.mD(this), bb)
+         return !0 === this._isIdentity ? (Od.IdentityToRef(dd), dd) : ((0, gd.g)(this, dd.spd()) ? dd.markAsUpdated() : dd.Fs(this), dd)
```

#### 108. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L2098` → after: `L2098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R2098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L2098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L2098) · [Before (L2098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L2098)

```diff
-         return (0, Yb.b)(this, bb, ub), this
+         return (0, gd.d)(this, dd, Jd), this
```

#### 109. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L2125` → after: `L2125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R2125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L2125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L2125) · [Before (L2125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L2125)

```diff
-         return this._isIdentity ? (ub.mD(bb), ub) : bb._isIdentity ? (ub.mD(this), ub) : (this.multiplyToArray(bb, ub._m, 0), ub.markAsUpdated(), ub)
+         return this._isIdentity ? (Jd.Fs(dd), Jd) : dd._isIdentity ? (Jd.Fs(this), Jd) : (this.multiplyToArray(dd, Jd._m, 0), Jd.markAsUpdated(), Jd)
```

#### 110. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L2128` → after: `L2128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R2128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L2128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L2128) · [Before (L2128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L2128)

```diff
-         return (0, Yb.o)(this, bb, ub, hb), this
+         return (0, gd.q)(this, dd, Jd, kd), this
```

#### 111. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L2198` → after: `L2198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R2198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L2198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L2198) · [Before (L2198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L2198)

```diff
-       sUb() {
+       zPd() {
```

#### 112. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L2224` → after: `L2224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R2224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L2224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L2224) · [Before (L2224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L2224)

```diff
-         return bb.mD(this), bb
+         return dd.Fs(this), dd
```

#### 113. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L2235` → after: `L2235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R2235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L2235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L2235) · [Before (L2235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L2235)

```diff
-         return bb.rotationQuaternion = bb.rotationQuaternion || new Xb, this.decompose(bb.pa, bb.rotationQuaternion, bb.position)
+         return dd.rotationQuaternion = dd.rotationQuaternion || new Ld, this.decompose(dd.fp, dd.rotationQuaternion, dd.position)
```

#### 114. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L2239` → after: `L2239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R2239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L2239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L2239) · [Before (L2239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L2239)

```diff
-         if (this._isIdentity) return hb && hb.N9(0), bb && bb.N9(1), ub && ub.M_(0, 0, 0, 1), !0;
+         if (this._isIdentity) return kd && kd.o5(0), dd && dd.o5(1), Jd && Jd.kdd(0, 0, 0, 1), !0;
```

#### 115. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L2241-L2244` → after: `L2241-L2244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R2241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L2241-L2244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L2241-L2244) · [Before (L2241-L2244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L2241-L2244)

```diff
-         if (hb && hb.M_(Gb[12], Gb[13], Gb[14]), (bb = bb || ob.YX[0]).x = Math.sqrt(Gb[0] * Gb[0] + Gb[1] * Gb[1] + Gb[2] * Gb[2]), bb.y = Math.sqrt(Gb[4] * Gb[4] + Gb[5] * Gb[5] + Gb[6] * Gb[6]), bb.z = Math.sqrt(Gb[8] * Gb[8] + Gb[9] * Gb[9] + Gb[10] * Gb[10]), Bb) {
-           const ub = (Ob ? Bb.absoluteScaling.x : Bb.pa.x) < 0 ? -1 : 1,
-             hb = (Ob ? Bb.absoluteScaling.y : Bb.pa.y) < 0 ? -1 : 1,
-             Gb = (Ob ? Bb.absoluteScaling.z : Bb.pa.z) < 0 ? -1 : 1;
+         if (kd && kd.kdd(Wd[12], Wd[13], Wd[14]), (dd = dd || ed.IL[0]).x = Math.sqrt(Wd[0] * Wd[0] + Wd[1] * Wd[1] + Wd[2] * Wd[2]), dd.y = Math.sqrt(Wd[4] * Wd[4] + Wd[5] * Wd[5] + Wd[6] * Wd[6]), dd.z = Math.sqrt(Wd[8] * Wd[8] + Wd[9] * Wd[9] + Wd[10] * Wd[10]), pd) {
+           const Jd = (Nd ? pd.absoluteScaling.x : pd.fp.x) < 0 ? -1 : 1,
+             kd = (Nd ? pd.absoluteScaling.y : pd.fp.y) < 0 ? -1 : 1,
+             Wd = (Nd ? pd.absoluteScaling.z : pd.fp.z) < 0 ? -1 : 1;
```

#### 116. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L2247` → after: `L2247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R2247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L2247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/226.js#L2247) · [Before (L2247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/226.js#L2247)

```diff
-         if (0 === bb._x || 0 === bb._y || 0 === bb._z) return ub && ub.M_(0, 0, 0, 1), !1;
+         if (0 === dd._x || 0 === dd._y || 0 === dd._z) return Jd && Jd.kdd(0, 0, 0, 1), !1;
```
