# Changed — Bundle Modifications Report (Part 021 / 115)

- **Updated at**: `2026-11-21T00:51 JST`
- **Part**: `21 / 115` (**431** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 020](part-020.md) · [Part 022 →](part-022.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/225.js` (bcgkc.38229551 → bbb6l5.0244a119 · continued)

- **File**: `bundles/bloxd.io/chunks/js/225.js` (1245 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789)

#### 733. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8774` → after: `L8774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L8774) · [Before (L8774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L8774)

```diff
-           yT = xT.getVerticesData(IT.i.NormalKind);
+           xq = cq.getVerticesData(uq.f.NormalKind);
```

#### 734. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8779-L8780` → after: `L8779-L8780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8779-L8780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L8779-L8780) · [Before (L8779-L8780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L8779-L8780)

```diff
-             const kT = lT.Fv.FromArray(yT, 3 * cT).normalize();
-             lT.Fv.FromArray(KT, 3 * cT).normalize().subtractToRef(kT, CT), TT[3 * cT] = CT.x * AT, TT[3 * cT + 1] = CT.y, TT[3 * cT + 2] = CT.z
+             const Eq = Yq.Na.FromArray(xq, 3 * gq).normalize();
+             Yq.Na.FromArray(Oq, 3 * gq).normalize().subtractToRef(Eq, Wq), qq[3 * gq] = Wq.x * Bq, qq[3 * gq + 1] = Wq.y, qq[3 * gq + 2] = Wq.z
```

#### 735. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8785` → after: `L8785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L8785) · [Before (L8785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L8785)

```diff
-         } else MT.Tools.Warn(`Morph target normals for mesh ${kT.name} were not exported. Mesh does not have normals vertex data`)
+         } else lq.Tools.Warn(`Morph target normals for mesh ${Eq.name} were not exported. Mesh does not have normals vertex data`)
```

#### 736. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8789` → after: `L8789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L8789) · [Before (L8789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L8789)

```diff
-           yT = xT.getVerticesData(IT.i.TangentKind);
+           xq = cq.getVerticesData(uq.f.TangentKind);
```

#### 737. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8795` → after: `L8795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L8795) · [Before (L8795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L8795)

```diff
-             const kT = lT.Fv.FromArray(yT, 4 * cT);
+             const Eq = Yq.Na.FromArray(xq, 4 * gq);
```

#### 738. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8797` → after: `L8797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L8797) · [Before (L8797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L8797)

```diff
-             const MT = lT.Fv.FromArray(KT, 3 * cT);
+             const lq = Yq.Na.FromArray(Oq, 3 * gq);
```

#### 739. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8803` → after: `L8803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L8803) · [Before (L8803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L8803)

```diff
-         } else MT.Tools.Warn(`Morph target tangents for mesh ${kT.name} were not exported. Mesh does not have tangents vertex data`)
+         } else lq.Tools.Warn(`Morph target tangents for mesh ${Eq.name} were not exported. Mesh does not have tangents vertex data`)
```

#### 740. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8807-L8808` → after: `L8807-L8808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8807-L8808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L8807-L8808) · [Before (L8807-L8808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L8807-L8808)

```diff
-           yT = xT.getVerticesData(IT.i.ColorKind),
-           AT = xT.getVertexBuffer(IT.i.ColorKind);
+           xq = cq.getVerticesData(uq.f.ColorKind),
+           Bq = cq.getVertexBuffer(uq.f.ColorKind);
```

#### 741. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8816-L8817` → after: `L8816-L8817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8816-L8817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L8816-L8817) · [Before (L8816-L8817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L8816-L8817)

```diff
-               const MT = lT.Fv.FromArray(yT, cT * TT);
-               lT.Fv.FromArray(KT, cT * TT).subtractToRef(MT, CT), kT[3 * cT] = CT.x, kT[3 * cT + 1] = CT.y, kT[3 * cT + 2] = CT.z
+               const lq = Yq.Na.FromArray(xq, gq * qq);
+               Yq.Na.FromArray(Oq, gq * qq).subtractToRef(lq, Wq), Eq[3 * gq] = Wq.x, Eq[3 * gq + 1] = Wq.y, Eq[3 * gq + 2] = Wq.z
```

#### 742. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8822` → after: `L8822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L8822) · [Before (L8822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L8822)

```diff
-           } else MT.Tools.Warn(`Unsupported number of components for color attribute: ${TT}`);
+           } else lq.Tools.Warn(`Unsupported number of components for color attribute: ${qq}`);
```

#### 743. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8826` → after: `L8826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L8826) · [Before (L8826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L8826)

```diff
-         } else MT.Tools.Warn(`Morph target colors for mesh ${kT.name} were not exported. Mesh does not have colors vertex data`)
+         } else lq.Tools.Warn(`Morph target colors for mesh ${Eq.name} were not exported. Mesh does not have colors vertex data`)
```

#### 744. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8830` → after: `L8830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L8830) · [Before (L8830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L8830)

```diff
-     var vl = cT(41166);
+     var NY = gq(41334);
```

#### 745. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8832-L8833` → after: `L8832-L8833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8832-L8833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L8832-L8833) · [Before (L8832-L8833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L8832-L8833)

```diff
-     tl.DEFAULT_COLOR = YT.c.White(), tl.DEFAULT_WIDTH_ATTENUATED = 1, tl.DEFAULT_WIDTH = .1;
-     var hl = cT(40706);
+     aY.DEFAULT_COLOR = sq.d.White(), aY.DEFAULT_WIDTH_ATTENUATED = 1, aY.DEFAULT_WIDTH = .1;
+     var VY = gq(40835);
```

#### 746. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8839` → after: `L8839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L8839) · [Before (L8839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L8839)

```diff
-         this._currentPath = new hl.e(TT, kT), this._tempPaths.push(this._currentPath)
+         this._currentPath = new VY.h(qq, Eq), this._tempPaths.push(this._currentPath)
```

#### 747. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8934` → after: `L8934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L8934) · [Before (L8934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L8934)

```diff
-         if (TT.length && !Array.isArray(TT[0]) && TT[0] instanceof uT.m) {
+         if (qq.length && !Array.isArray(qq[0]) && qq[0] instanceof Gq.q) {
```

#### 748. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8942` → after: `L8942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L8942) · [Before (L8942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L8942)

```diff
-         if (TT.length > 0 && Array.isArray(TT[0]) && TT[0].length > 0 && TT[0][0] instanceof uT.m) {
+         if (qq.length > 0 && Array.isArray(qq[0]) && qq[0].length > 0 && qq[0][0] instanceof Gq.q) {
```

#### 749. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8986-L8987` → after: `L8986-L8987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8986-L8987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L8986-L8987) · [Before (L8986-L8987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L8986-L8987)

```diff
-             KT = MT.getVerticesData(XT.l.PositionKind),
-             OT = MT.FcT();
+             Oq = lq.getVerticesData(Lq.g.PositionKind),
+             mq = lq.iYq();
```

#### 750. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8993-L8995` → after: `L8993-L8995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8993-L8995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L8993-L8995) · [Before (L8993-L8995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L8993-L8995)

```diff
-                 AT = new uT.m(KT[fT], KT[fT + 1], KT[fT + 2]),
-                 CT = new uT.m(KT[xT], KT[xT + 1], KT[xT + 2]),
-                 jT = new uT.m(KT[IT], KT[IT + 1], KT[IT + 2]);
+                 Bq = new Gq.q(Oq[Aq], Oq[Aq + 1], Oq[Aq + 2]),
+                 Wq = new Gq.q(Oq[cq], Oq[cq + 1], Oq[cq + 2]),
+                 Nq = new Gq.q(Oq[uq], Oq[uq + 1], Oq[uq + 2]);
```

#### 751. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9011` → after: `L9011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L9011) · [Before (L9011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L9011)

```diff
-             for (let kT = 0; kT < TT.length; kT += 3) cT.push(new uT.m(TT[kT], TT[kT + 1], TT[kT + 2]));
+             for (let Eq = 0; Eq < qq.length; Eq += 3) gq.push(new Gq.q(qq[Eq], qq[Eq + 1], qq[Eq + 2]));
```

#### 752. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9018` → after: `L9018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L9018) · [Before (L9018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L9018)

```diff
-         for (let lT = 0; lT < kT.length; lT += 3) cT.push(new uT.m(kT[lT], kT[lT + 1], kT[lT + 2]));
+         for (let Yq = 0; Yq < Eq.length; Yq += 3) gq.push(new Gq.q(Eq[Yq], Eq[Yq + 1], Eq[Yq + 2]));
```

#### 753. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9037` → after: `L9037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L9037) · [Before (L9037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L9037)

```diff
-         const cT = uT.h.Fv[0];
+         const gq = Gq.o.Na[0];
```

#### 754. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9060-L9062` → after: `L9060-L9062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9060-L9062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L9060-L9062) · [Before (L9060-L9062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L9060-L9062)

```diff
-           KT = uT.h.Fv[0];
-         KT.Xs(cT);
-         const OT = uT.h.Fv[1];
+           Oq = Gq.o.Na[0];
+         Oq.A4(gq);
+         const mq = Gq.o.Na[1];
```

#### 755. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9070` → after: `L9070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L9070) · [Before (L9070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L9070)

```diff
-         const cT = TT[0] instanceof uT.m ? Dl.GetLineSegments(TT) : "number" === typeof TT[0] ? Dl.GetLineSegments(Dl.ToVector3Array(TT)) : TT,
+         const gq = qq[0] instanceof Gq.q ? oY.GetLineSegments(qq) : "number" === typeof qq[0] ? oY.GetLineSegments(oY.ToVector3Array(qq)) : qq,
```

#### 756. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9119` → after: `L9119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L9119) · [Before (L9119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L9119)

```diff
-         return TT[OT].point2.subtractToRef(TT[OT].point1, uT.h.Fv[0]), uT.h.Fv[0].scaleToRef(fT, uT.h.Fv[1]), lT || uT.h.Fv[1].addInPlace(TT[OT].point1), uT.h.Fv[1].clone()
+         return qq[mq].point2.subtractToRef(qq[mq].point1, Gq.o.Na[0]), Gq.o.Na[0].scaleToRef(Aq, Gq.o.Na[1]), Yq || Gq.o.Na[1].addInPlace(qq[mq].point1), Gq.o.Na[1].clone()
```

#### 757. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9126` → after: `L9126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L9126) · [Before (L9126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L9126)

```diff
-         for (let OT = 0; OT <= kT; OT++) KT.push(new uT.m(Math.cos(OT * MT) * TT, Math.sin(OT * MT) * lT, cT));
+         for (let mq = 0; mq <= Eq; mq++) Oq.push(new Gq.q(Math.cos(mq * lq) * qq, Math.sin(mq * lq) * Yq, gq));
```

#### 758. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9130` → after: `L9130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L9130) · [Before (L9130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L9130)

```diff
-         return hl.d.CreateQuadraticBezier(TT, kT, cT, lT).getPoints().flatMap((TT => [TT.x, TT.y, TT.z]))
+         return VY.e.CreateQuadraticBezier(qq, Eq, gq, Yq).getPoints().flatMap((qq => [qq.x, qq.y, qq.z]))
```

#### 759. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9168-L9169` → after: `L9168-L9169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9168-L9169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L9168-L9169) · [Before (L9168-L9169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L9168-L9169)

```diff
-         const MT = lT.Dv().getCaps().maxTextureSize ?? 1,
-           KT = kT.length > MT ? MT : kT.length,
+         const lq = Yq.Ba().getCaps().maxTextureSize ?? 1,
+           Oq = Eq.length > lq ? lq : Eq.length,
```

#### 760. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9173` → after: `L9173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L9173) · [Before (L9173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L9173)

```diff
-           fT = new FT.c(yT, KT, OT, Ac.c.TEXTUREFORMAT_RGBA, lT, !1, !0, cT);
+           Aq = new yq.d(xq, Oq, mq, ug.d.TEXTUREFORMAT_RGBA, Yq, !1, !0, gq);
```

#### 761. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9179` → after: `L9179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L9179) · [Before (L9179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L9179)

```diff
-           tl.EmptyColorsTexture = new FT.c(kT, 1, 1, Ac.c.TEXTUREFORMAT_RGBA, TT, !1, !1, FT.c.NEAREST_NEAREST), tl.EmptyColorsTexture.name = "grlEmptyColorsTexture", tl.EmptyColorsTexture.QJ.addOnce((() => {
+           aY.EmptyColorsTexture = new yq.d(Eq, 1, 1, ug.d.TEXTUREFORMAT_RGBA, qq, !1, !1, yq.d.NEAREST_NEAREST), aY.EmptyColorsTexture.name = "grlEmptyColorsTexture", aY.EmptyColorsTexture.MJ.addOnce((() => {
```

#### 762. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9192` → after: `L9192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L9192) · [Before (L9192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L9192)

```diff
-     class al extends dT.e {
+     class PY extends Jq.c {
```

#### 763. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9197` → after: `L9197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L9197) · [Before (L9197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L9197)

```diff
-     class Fl extends LT.b {
+     class QY extends kq.c {
```

#### 764. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9206` → after: `L9206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L9206) · [Before (L9206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L9206)

```diff
-         lT.GREASED_LINE_HAS_COLOR = !!cT.color && !cT.useColors, lT.GREASED_LINE_SIZE_ATTENUATION = cT.sizeAttenuation ?? !1, lT.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === cT.colorDistributionType, lT.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = (kT ?? TT.NJ()).useRightHa … [truncated]
+         Yq.GREASED_LINE_HAS_COLOR = !!gq.color && !gq.useColors, Yq.GREASED_LINE_SIZE_ATTENUATION = gq.sizeAttenuation ?? !1, Yq.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === gq.colorDistributionType, Yq.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = (Eq ?? qq.ZJ()).useRightHa … [truncated]
```

#### 765. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9261-L9262` → after: `L9261-L9262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9261-L9262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L9261-L9262) · [Before (L9261-L9262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L9261-L9262)

```diff
-           TT.X3("grl_projection", this._scene.getProjectionMatrix()), this._isGLSL(this._material.shaderLanguage) || TT.X3("viewProjection", this._scene.getTransformMatrix());
-           const kT = uT.h.Vector4[0];
+           qq.Eqq("grl_projection", this._scene.getProjectionMatrix()), this._isGLSL(this._material.shaderLanguage) || qq.Eqq("viewProjection", this._scene.getTransformMatrix());
+           const Eq = Gq.o.Vector4[0];
```

#### 766. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9265` → after: `L9265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L9265) · [Before (L9265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L9265)

```diff
-         const kT = uT.h.Vector4[0];
+         const Eq = Gq.o.Vector4[0];
```

#### 767. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9267` → after: `L9267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L9267) · [Before (L9267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L9267)

```diff
-         const cT = uT.h.Vector4[1];
+         const gq = Gq.o.Vector4[1];
```

#### 768. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9391` → after: `L9391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L9391) · [Before (L9391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L9391)

```diff
-         kT.colorsTexture?.dispose(), this._colors && (kT.colorsTexture = Dl.CreateColorsTexture(`${kT._material.name}-colors-texture`, this._colors, kT.colorsSampling, this._scene)), kT.setColor(this.color, !0), kT.colorsDistributionType = this.colorsDistributionType, kT.colorsSa … [truncated]
+         Eq.colorsTexture?.dispose(), this._colors && (Eq.colorsTexture = oY.CreateColorsTexture(`${Eq._material.name}-colors-texture`, this._colors, Eq.colorsSampling, this._scene)), Eq.setColor(this.color, !0), Eq.colorsDistributionType = this.colorsDistributionType, Eq.colorsSa … [truncated]
```

#### 769. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9398-L9403` → after: `L9398-L9403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9398-L9403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L9398-L9403) · [Before (L9398-L9403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L9398-L9403)

```diff
-     var rl = cT(40025),
-       Pl = cT(40038),
-       wl = cT(38507),
-       ml = cT(40104),
-       bl = cT(39458);
-     class zl extends ml.q {
+     var yY = gq(40163),
+       tY = gq(40176),
+       rY = gq(38649),
+       vY = gq(40225),
+       hY = gq(39602);
+     class nY extends vY.s {
```

#### 770. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9405` → after: `L9405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L9405) · [Before (L9405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L9405)

```diff
-         const MT = kT.Dv(),
+         const lq = Eq.Ba(),
```

#### 771. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9422` → after: `L9422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L9422) · [Before (L9422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L9422)

```diff
-               KT ? await Promise.all([cT.e(325).then((() => cT(61278))), cT.e(384).then((() => cT(61287)))]) : await Promise.all([cT.e(318).then((() => cT(61289))), cT.e(385).then((() => cT(61295)))])
+               Oq ? await Promise.all([gq.e(325).then((() => gq(61834))), gq.e(384).then((() => gq(61838)))]) : await Promise.all([gq.e(318).then((() => gq(61844))), gq.e(385).then((() => gq(61848)))])
```

#### 772. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9425` → after: `L9425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L9425) · [Before (L9425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L9425)

```diff
-           }), this._color = YT.c.White(), this._colorsDistributionType = 0, this._colorsTexture = null, lT = lT || {
+           }), this._color = sq.d.White(), this._colorsDistributionType = 0, this._colorsTexture = null, Yq = Yq || {
```

#### 773. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9427-L9428` → after: `L9427-L9428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9427-L9428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L9427-L9428) · [Before (L9427-L9428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L9427-L9428)

```diff
-           }, this.visibility = lT.visibility ?? 1, this.useDash = lT.useDash ?? !1, this.dashRatio = lT.dashRatio ?? .5, this.dashOffset = lT.dashOffset ?? 0, this.dashCount = lT.dashCount ?? 1, this.width = lT.width ? lT.width : lT.sizeAttenuation && lT.cameraFacing ? tl.DEFAULT … [truncated]
-           const TT = new bl.b;
+           }, this.visibility = Yq.visibility ?? 1, this.useDash = Yq.useDash ?? !1, this.dashRatio = Yq.dashRatio ?? .5, this.dashOffset = Yq.dashOffset ?? 0, this.dashCount = Yq.dashCount ?? 1, this.width = Yq.width ? Yq.width : Yq.sizeAttenuation && Yq.cameraFacing ? aY.DEFAULT … [truncated]
+           const qq = new hY.e;
```

#### 774. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9431` → after: `L9431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L9431) · [Before (L9431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L9431)

```diff
-         MT.QJ.add((() => {
+         lq.MJ.add((() => {
```

#### 775. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9439` → after: `L9439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L9439) · [Before (L9439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L9439)

```diff
-         this.setVector2("grl_colorModeAndColorDistributionType", new uT.i(this._colorMode, this._colorsDistributionType))
+         this.setVector2("grl_colorModeAndColorDistributionType", new Gq.p(this._colorMode, this._colorsDistributionType))
```

#### 776. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9459` → after: `L9459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L9459) · [Before (L9459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L9459)

```diff
-             } else this._colorsTexture && this._colorsTexture !== tl.EmptyColorsTexture && this._colorsTexture.dispose(), this.colorsTexture = Dl.CreateColorsTexture(`${this.name}-colors-texture`, TT, this.colorsSampling, this.NJ())
+             } else this._colorsTexture && this._colorsTexture !== aY.EmptyColorsTexture && this._colorsTexture.dispose(), this.colorsTexture = oY.CreateColorsTexture(`${this.name}-colors-texture`, qq, this.colorsSampling, this.ZJ())
```

#### 777. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9462` → after: `L9462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L9462) · [Before (L9462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L9462)

```diff
-           const TT = this.NJ();
+           const qq = this.ZJ();
```

#### 778. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9575` → after: `L9575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L9575) · [Before (L9575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L9575)

```diff
-         this._colorsTexture?.dispose(), lT.color && (this.color = lT.color), lT.colorDistributionType && (this.colorsDistributionType = lT.colorDistributionType), lT.colorsSampling && (this.colorsSampling = lT.colorsSampling), lT.colorMode && (this.colorMode = lT.colorMode), lT.u … [truncated]
+         this._colorsTexture?.dispose(), Yq.color && (this.color = Yq.color), Yq.colorDistributionType && (this.colorsDistributionType = Yq.colorDistributionType), Yq.colorsSampling && (this.colorsSampling = Yq.colorsSampling), Yq.colorMode && (this.colorMode = Yq.colorMode), Yq.u … [truncated]
```

#### 779. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9591` → after: `L9591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L9591) · [Before (L9591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L9591)

```diff
-         super(TT, kT, null, null, !1, !1), this.name = TT, this._options = cT, this._lazy = !1, this._updatable = !1, this._engine = kT.Dv(), this._lazy = cT.lazy ?? !1, this._updatable = cT.updatable ?? !1, this._vertexPositions = [], this._indices = [], this._uvs = [], this._po … [truncated]
+         super(qq, Eq, null, null, !1, !1), this.name = qq, this._options = gq, this._lazy = !1, this._updatable = !1, this._engine = Eq.Ba(), this._lazy = gq.lazy ?? !1, this._updatable = gq.updatable ?? !1, this._vertexPositions = [], this._indices = [], this._uvs = [], this._po … [truncated]
```

#### 780. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9603` → after: `L9603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L9603) · [Before (L9603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L9603)

```diff
-         this._setPoints(this._points), this._options.colorPointers || this._updateColorPointers(), this._createVertexBuffers(this._options.ribbonOptions?.smoothShading), !this.Pv && this.refreshBoundingInfo(), this.greasedLineMaterial?.updateLazy()
+         this._setPoints(this._points), this._options.colorPointers || this._updateColorPointers(), this._createVertexBuffers(this._options.ribbonOptions?.smoothShading), !this.Va && this.refreshBoundingInfo(), this.greasedLineMaterial?.updateLazy()
```

#### 781. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9620` → after: `L9620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L9620) · [Before (L9620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L9620)

```diff
-         this._uvs = TT instanceof Float32Array ? TT : new Float32Array(TT), this._createVertexBuffers()
+         this._uvs = qq instanceof Float32Array ? qq : new Float32Array(qq), this._createVertexBuffers()
```

#### 782. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9647` → after: `L9647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L9647) · [Before (L9647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L9647)

```diff
-         return wl.d.DeepCopy(this._points, TT), TT
+         return rY.b.DeepCopy(this._points, qq), qq
```

#### 783. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9675-L9676` → after: `L9675-L9676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9675-L9676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L9675-L9676) · [Before (L9675-L9676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L9675-L9676)

```diff
-         const kT = this._scene.Dv(),
-           cT = new XT.d(kT, TT, this._updatable, 3);
+         const Eq = this._scene.Ba(),
+           gq = new Lq.b(Eq, qq, this._updatable, 3);
```

#### 784. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9808` → after: `L9808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L9808) · [Before (L9808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L9808)

```diff
-         let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tT.d.LastCreatedScene,
+         let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vq.b.LastCreatedScene,
```

#### 785. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9812` → after: `L9812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L9812) · [Before (L9812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L9812)

```diff
-               generator: `Babylon.js v${vT.d.Version}`,
+               generator: `Babylon.js v${aq.b.Version}`,
```

#### 786. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9819` → after: `L9819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L9819) · [Before (L9819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L9819)

```diff
-           metadataSelector: TT => TT?.KJ?.extras,
+           metadataSelector: qq => qq?.QJ?.extras,
```

#### 787. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9840` → after: `L9840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L9840) · [Before (L9840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L9840)

```diff
-         Vl.UnregisterExtension(TT) && MT.Tools.Warn(`Extension with the name ${TT} already exists`), Vl._ExtensionFactories[TT] = kT;
+         TY.UnregisterExtension(qq) && lq.Tools.Warn(`Extension with the name ${qq} already exists`), TY._ExtensionFactories[qq] = Eq;
```

#### 788. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9863` → after: `L9863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L9863) · [Before (L9863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L9863)

```diff
-         return lT.byteLength && (this._glTF.buffers = [lT]), this._nodes && this._nodes.length && (this._glTF.nodes = this._nodes), this._meshes && this._meshes.length && (this._glTF.meshes = this._meshes), this._scenes && this._scenes.length && (this._glTF.scenes = this._scenes, … [truncated]
+         return Yq.byteLength && (this._glTF.buffers = [Yq]), this._nodes && this._nodes.length && (this._glTF.nodes = this._nodes), this._meshes && this._meshes.length && (this._glTF.meshes = this._meshes), this._scenes && this._scenes.length && (this._glTF.scenes = this._scenes, … [truncated]
```

#### 789. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9884` → after: `L9884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L9884) · [Before (L9884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L9884)

```diff
-         return 0 === kT ? kT : 4 - kT
+         return 0 === Eq ? Eq : 4 - Eq
```

#### 790. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9917-L9919` → after: `L9917-L9919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9917-L9919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L9917-L9919) · [Before (L9917-L9919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L9917-L9919)

```diff
-         if (kT.getPivotPoint().equalsWithEpsilon(Zc, Gc.b) || MT.Tools.Warn("Pivot points are not supported in the glTF serializer"), !kT.position.equalsWithEpsilon(Zc, Gc.b)) {
-           const MT = lT.TmpVectors.Fv[0].UkT(kT.position);
-           cT && Yc(MT), TT.translation = MT.acT()
+         if (Eq.getPivotPoint().equalsWithEpsilon(Sg, Mg.c) || lq.Tools.Warn("Pivot points are not supported in the glTF serializer"), !Eq.position.equalsWithEpsilon(Sg, Mg.c)) {
+           const lq = Yq.TmpVectors.Na[0].WG(Eq.position);
+           gq && Fg(lq), qq.translation = lq.bYq()
```

#### 791. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9921` → after: `L9921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L9921) · [Before (L9921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L9921)

```diff
-         kT.GA.equalsWithEpsilon(Xc, Gc.b) || (TT.scale = kT.GA.acT());
+         Eq.rc.equalsWithEpsilon(Gg, Mg.c) || (qq.scale = Eq.rc.bYq());
```

#### 792. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9923` → after: `L9923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L9923) · [Before (L9923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L9923)

```diff
-         KT.equalsWithEpsilon(uc, Gc.b) || (cT && Bc(KT), TT.rotation = KT.normalize().acT())
+         Oq.equalsWithEpsilon(pg, Mg.c) || (gq && sg(Oq), qq.rotation = Oq.normalize().bYq())
```

#### 793. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9926` → after: `L9926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L9926) · [Before (L9926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L9926)

```diff
-         const MT = lT.TmpVectors.Fv[0],
+         const lq = Yq.TmpVectors.Na[0],
```

#### 794. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9933` → after: `L9933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L9933) · [Before (L9933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L9933)

```diff
-         MT.equalsWithEpsilon(Zc, Gc.b) || (cT && Yc(MT), TT.translation = MT.acT()), cT && Bc(KT), this._babylonScene.useRightHandedSystem || Wc(KT), KT.equalsWithEpsilon(uc, Gc.b) || (TT.rotation = KT.acT())
+         lq.equalsWithEpsilon(Sg, Mg.c) || (gq && Fg(lq), qq.translation = lq.bYq()), gq && sg(Oq), this._babylonScene.useRightHandedSystem || Xg(Oq), Oq.equalsWithEpsilon(pg, Mg.c) || (qq.rotation = Oq.bYq())
```

#### 795. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9938` → after: `L9938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L9938) · [Before (L9938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L9938)

```diff
-             type: TT.mode === Ml.c.PERSPECTIVE_CAMERA ? "perspective" : "orthographic"
+             type: qq.mode === YY.e.PERSPECTIVE_CAMERA ? "perspective" : "orthographic"
```

#### 796. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9941-L9942` → after: `L9941-L9942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9941-L9942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L9941-L9942) · [Before (L9941-L9942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L9941-L9942)

```diff
-             aspectRatio: TT.Dv().getAspectRatio(TT),
-             yfov: TT.fovMode === Ml.c.FOVMODE_VERTICAL_FIXED ? TT.fov : TT.fov * TT.Dv().getAspectRatio(TT),
+             aspectRatio: qq.Ba().getAspectRatio(qq),
+             yfov: qq.fovMode === YY.e.FOVMODE_VERTICAL_FIXED ? qq.fov : qq.fov * qq.Ba().getAspectRatio(qq),
```

#### 797. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9947-L9948` → after: `L9947-L9948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9947-L9948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L9947-L9948) · [Before (L9947-L9948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L9947-L9948)

```diff
-             const cT = TT.orthoLeft && TT.orthoRight ? .5 * (TT.orthoRight - TT.orthoLeft) : .5 * TT.Dv().getRenderWidth(),
-               lT = TT.orthoBottom && TT.orthoTop ? .5 * (TT.orthoTop - TT.orthoBottom) : .5 * TT.Dv().getRenderHeight();
+             const gq = qq.orthoLeft && qq.orthoRight ? .5 * (qq.orthoRight - qq.orthoLeft) : .5 * qq.Ba().getRenderWidth(),
+               Yq = qq.orthoBottom && qq.orthoTop ? .5 * (qq.orthoTop - qq.orthoBottom) : .5 * qq.Ba().getRenderHeight();
```

#### 798. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10033` → after: `L10033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10033) · [Before (L10033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10033)

```diff
-               kT instanceof AT.b && !kT.parent && (KT ?? (KT = new Set)).add(kT)
+               Eq instanceof Bq.e && !Eq.parent && (Oq ?? (Oq = new Set)).add(Eq)
```

#### 799. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10058` → after: `L10058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10058) · [Before (L10058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10058)

```diff
-         return cT >= 0 ? cT : void 0
+         return gq >= 0 ? gq : void 0
```

#### 800. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10096` → after: `L10096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10096) · [Before (L10096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10096)

```diff
-             return cT >= 0 ? cT : void 0
+             return gq >= 0 ? gq : void 0
```

#### 801. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10104` → after: `L10104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10104) · [Before (L10104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10104)

```diff
-         if (!lT) throw new Error(`Cannot write ${kT}: glTF node ${TT} does not exist.`);
+         if (!Yq) throw new Error(`Cannot write ${Eq}: glTF node ${qq} does not exist.`);
```

#### 802. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10167-L10169` → after: `L10167-L10169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10167-L10169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10167-L10169) · [Before (L10167-L10169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10167-L10169)

```diff
-               case IT.i.NormalKind:
-               case IT.i.TangentKind:
-                 (0, Hc.g)(OT, cT, MT, KT, yT, fT, xT, (TT => {
+               case uq.f.NormalKind:
+               case uq.f.TangentKind:
+                 (0, Zg.h)(mq, gq, lq, Oq, xq, Aq, cq, (qq => {
```

#### 803. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10177` → after: `L10177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10177) · [Before (L10177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10177)

```diff
-               case IT.i.ColorKind: {
+               case uq.f.ColorKind: {
```

#### 804. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10181` → after: `L10181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10181) · [Before (L10181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10181)

```diff
-                   bT.e.Warn("Not converting vertex color space, as buffer is shared by StandardMaterials and other material types. Results may look incorrect.");
+                   nq.b.Warn("Not converting vertex color space, as buffer is shared by StandardMaterials and other material types. Results may look incorrect.");
```

#### 805. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10184` → after: `L10184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10184) · [Before (L10184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10184)

```diff
-                 yT == IT.i.UNSIGNED_BYTE && bT.e.Warn("Converting uint8 vertex colors to linear space. Results may look incorrect.");
+                 xq == uq.f.UNSIGNED_BYTE && nq.b.Warn("Converting uint8 vertex colors to linear space. Results may look incorrect.");
```

#### 806. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10187-L10189` → after: `L10187-L10189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10187-L10189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10187-L10189) · [Before (L10187-L10189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10187-L10189)

```diff
-                   CT = this._babylonScene.Dv().useExactSrgbConversions;
-                 (0, Hc.g)(OT, cT, MT, KT, yT, fT, xT, (TT => {
-                   3 === TT.length ? (lT.xkT(TT, 0), lT.toLinearSpaceToRef(lT, CT), lT.toArray(TT, 0)) : (AT.xkT(TT, 0), AT.toLinearSpaceToRef(AT, CT), AT.toArray(TT, 0))
+                   Wq = this._babylonScene.Ba().useExactSrgbConversions;
+                 (0, Zg.h)(mq, gq, lq, Oq, xq, Aq, cq, (qq => {
+                   3 === qq.length ? (Yq.ogq(qq, 0), Yq.toLinearSpaceToRef(Yq, Wq), Yq.toArray(qq, 0)) : (Bq.ogq(qq, 0), Bq.toLinearSpaceToRef(Bq, Wq), Bq.toArray(qq, 0))
```

#### 807. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10207-L10210` → after: `L10207-L10210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10207-L10210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10207-L10210) · [Before (L10207-L10210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10207-L10210)

```diff
-                 case IT.i.PositionKind:
-                 case IT.i.NormalKind:
-                 case IT.i.TangentKind:
-                   (0, Hc.g)(OT, cT, MT, KT, yT, fT, xT, (TT => {
+                 case uq.f.PositionKind:
+                 case uq.f.NormalKind:
+                 case uq.f.TangentKind:
+                   (0, Zg.h)(mq, gq, lq, Oq, xq, Aq, cq, (qq => {
```

#### 808. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10227-L10229` → after: `L10227-L10229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10227-L10229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10227-L10229) · [Before (L10227-L10229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10227-L10229)

```diff
-               case IT.i.MatricesIndicesKind:
-               case IT.i.MatricesIndicesExtraKind:
-                 if (kT.type == IT.i.FLOAT) {
+               case uq.f.MatricesIndicesKind:
+               case uq.f.MatricesIndicesExtraKind:
+                 if (Eq.type == uq.f.FLOAT) {
```

#### 809. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10235` → after: `L10235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10235) · [Before (L10235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10235)

```diff
-           0 !== xT.size && bT.e.Warn("Joint indices conversion needed: some joint indices are stored as floats in Babylon but GLTF requires UNSIGNED BYTES. We will perform the conversion but this might lead to unused data in the buffer.");
+           0 !== cq.size && nq.b.Warn("Joint indices conversion needed: some joint indices are stored as floats in Babylon but GLTF requires UNSIGNED BYTES. We will perform the conversion but this might lead to unused data in the buffer.");
```

#### 810. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10282-L10284` → after: `L10282-L10284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10282-L10284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10282-L10284) · [Before (L10282-L10284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10282-L10284)

```diff
-         if (TT instanceof AT.b && (this._setNodeTransformation(cT, TT, kT.convertToRightHanded), TT instanceof CT.d)) {
-           const lT = TT instanceof jT.e ? TT.hlT : TT;
-           if (lT.kF && lT.kF.length > 0 && (cT.mesh = await this._exportMeshAsync(lT, kT)), TT.skeleton) {
+         if (qq instanceof Bq.e && (this._setNodeTransformation(gq, qq, Eq.convertToRightHanded), qq instanceof Wq.d)) {
+           const Yq = qq instanceof Nq.c ? qq.Plq : qq;
+           if (Yq.fn && Yq.fn.length > 0 && (gq.mesh = await this._exportMeshAsync(Yq, Eq)), qq.skeleton) {
```

#### 811. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10289` → after: `L10289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10289) · [Before (L10289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10289)

```diff
-         if (TT instanceof ec.g) {
+         if (qq instanceof fg.h) {
```

#### 812. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10304` → after: `L10304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10304) · [Before (L10304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10304)

```diff
-         return await this._extensionsPostExportNodeAsync("exportNodeAsync", cT, TT, this._nodeMap, kT.convertToRightHanded) ? cT : (bT.e.Warn(`Not exporting node ${TT.name}`), null)
+         return await this._extensionsPostExportNodeAsync("exportNodeAsync", gq, qq, this._nodeMap, Eq.convertToRightHanded) ? gq : (nq.b.Warn(`Not exporting node ${qq.name}`), null)
```

#### 813. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10326` → after: `L10326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10326) · [Before (L10326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10326)

```diff
-           throw new Error(`Unknown fill mode: ${TT}`)
+           throw new Error(`Unknown fill mode: ${qq}`)
```

#### 814. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10370` → after: `L10370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10370) · [Before (L10370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10370)

```diff
-             KT = OT === IT.i.PositionKind ? function(TT, kT, cT, lT) {
+             Oq = mq === uq.f.PositionKind ? function(qq, Eq, gq, Yq) {
```

#### 815. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10377` → after: `L10377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10377) · [Before (L10377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10377)

```diff
-               return (0, Hc.g)(TT, MT + cT * KT, KT, fT, OT, lT * fT, yT, (TT => {
+               return (0, Zg.h)(qq, lq + gq * Oq, Oq, Aq, mq, Yq * Aq, xq, (qq => {
```

#### 816. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10384-L10385` → after: `L10384-L10385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10384-L10385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10384-L10385) · [Before (L10384-L10385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10384-L10385)

```diff
-             fT = (OT === IT.i.MatricesIndicesKind || OT === IT.i.MatricesIndicesExtraKind) && TT.type === IT.i.FLOAT,
-             xT = fT ? IT.i.UNSIGNED_BYTE : TT.type,
+             Aq = (mq === uq.f.MatricesIndicesKind || mq === uq.f.MatricesIndicesExtraKind) && qq.type === uq.f.FLOAT,
+             cq = Aq ? uq.f.UNSIGNED_BYTE : qq.type,
```

#### 817. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10390` → after: `L10390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10390) · [Before (L10390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10390)

```diff
-             if (TT == IT.i.ColorKind) return kT ? "VEC4" : "VEC3";
+             if (qq == uq.f.ColorKind) return Eq ? "VEC4" : "VEC3";
```

#### 818. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10392-L10393` → after: `L10392-L10393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10392-L10393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10392-L10393) · [Before (L10392-L10393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10392-L10393)

```diff
-               case IT.i.PositionKind:
-               case IT.i.NormalKind:
+               case uq.f.PositionKind:
+               case uq.f.NormalKind:
```

#### 819. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10395-L10399` → after: `L10395-L10399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10395-L10399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10395-L10399) · [Before (L10395-L10399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10395-L10399)

```diff
-               case IT.i.TangentKind:
-               case IT.i.MatricesIndicesKind:
-               case IT.i.MatricesIndicesExtraKind:
-               case IT.i.MatricesWeightsKind:
-               case IT.i.MatricesWeightsExtraKind:
+               case uq.f.TangentKind:
+               case uq.f.MatricesIndicesKind:
+               case uq.f.MatricesIndicesExtraKind:
+               case uq.f.MatricesWeightsKind:
+               case uq.f.MatricesWeightsExtraKind:
```

#### 820. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10401-L10406` → after: `L10401-L10406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10401-L10406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10401-L10406) · [Before (L10401-L10406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10401-L10406)

```diff
-               case IT.i.UVKind:
-               case IT.i.UV2Kind:
-               case IT.i.UV3Kind:
-               case IT.i.UV4Kind:
-               case IT.i.UV5Kind:
-               case IT.i.UV6Kind:
+               case uq.f.UVKind:
+               case uq.f.UV2Kind:
+               case uq.f.UV3Kind:
+               case uq.f.UV4Kind:
+               case uq.f.UV5Kind:
+               case uq.f.UV6Kind:
```

#### 821. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10409` → after: `L10409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10409) · [Before (L10409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10409)

```diff
-             throw new Error(`Unknown kind ${TT}`)
+             throw new Error(`Unknown kind ${qq}`)
```

#### 822. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10414` → after: `L10414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10414) · [Before (L10414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10414)

```diff
-             case IT.i.PositionKind:
+             case uq.f.PositionKind:
```

#### 823. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10416` → after: `L10416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10416) · [Before (L10416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10416)

```diff
-             case IT.i.NormalKind:
+             case uq.f.NormalKind:
```

#### 824. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10418` → after: `L10418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10418) · [Before (L10418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10418)

```diff
-             case IT.i.TangentKind:
+             case uq.f.TangentKind:
```

#### 825. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10420` → after: `L10420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10420) · [Before (L10420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10420)

```diff
-             case IT.i.ColorKind:
+             case uq.f.ColorKind:
```

#### 826. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10422` → after: `L10422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10422) · [Before (L10422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10422)

```diff
-             case IT.i.UVKind:
+             case uq.f.UVKind:
```

#### 827. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10424` → after: `L10424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10424) · [Before (L10424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10424)

```diff
-             case IT.i.UV2Kind:
+             case uq.f.UV2Kind:
```

#### 828. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10426` → after: `L10426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10426) · [Before (L10426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10426)

```diff
-             case IT.i.UV3Kind:
+             case uq.f.UV3Kind:
```

#### 829. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10428` → after: `L10428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10428) · [Before (L10428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10428)

```diff
-             case IT.i.UV4Kind:
+             case uq.f.UV4Kind:
```

#### 830. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10430` → after: `L10430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10430) · [Before (L10430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10430)

```diff
-             case IT.i.UV5Kind:
+             case uq.f.UV5Kind:
```

#### 831. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10432` → after: `L10432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10432) · [Before (L10432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10432)

```diff
-             case IT.i.UV6Kind:
+             case uq.f.UV6Kind:
```

#### 832. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10434` → after: `L10434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10434) · [Before (L10434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10434)

```diff
-             case IT.i.MatricesIndicesKind:
+             case uq.f.MatricesIndicesKind:
```

#### 833. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10436` → after: `L10436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10436) · [Before (L10436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10436)

```diff
-             case IT.i.MatricesIndicesExtraKind:
+             case uq.f.MatricesIndicesExtraKind:
```

#### 834. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10438` → after: `L10438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10438) · [Before (L10438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10438)

```diff
-             case IT.i.MatricesWeightsKind:
+             case uq.f.MatricesWeightsKind:
```

#### 835. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10440` → after: `L10440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10440) · [Before (L10440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10440)

```diff
-             case IT.i.MatricesWeightsExtraKind:
+             case uq.f.MatricesWeightsExtraKind:
```

#### 836. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10443` → after: `L10443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10443) · [Before (L10443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10443)

```diff
-           throw new Error(`Unknown kind: ${TT}`)
+           throw new Error(`Unknown kind: ${qq}`)
```

#### 837. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10450` → after: `L10450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10450) · [Before (L10450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10450)

```diff
-           if ((TT = TT instanceof Kl.c ? TT.o4[cT.materialIndex] : TT) instanceof Fk) MT = await this._materialExporter.exportPBRMaterialAsync(TT, lT);
+           if ((qq = qq instanceof lY.b ? qq.Bqq[gq.materialIndex] : qq) instanceof yE) lq = await this._materialExporter.exportPBRMaterialAsync(qq, Yq);
```

#### 838. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10453` → after: `L10453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10453) · [Before (L10453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10453)

```diff
-             if (!(TT instanceof sk)) return void bT.e.Warn(`Unsupported material '${TT.name}' with type ${TT.getClassName()}`);
+             if (!(qq instanceof eE)) return void nq.b.Warn(`Unsupported material '${qq.name}' with type ${qq.getClassName()}`);
```

#### 839. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10467` → after: `L10467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10467) · [Before (L10467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10467)

```diff
-         const MT = TT.isUnIndexed ? null : TT.FcT(),
+         const lq = qq.isUnIndexed ? null : qq.iYq(),
```

#### 840. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10470` → after: `L10470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10470) · [Before (L10470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10470)

```diff
-           fT = TT instanceof vl.c,
+           Aq = qq instanceof NY.b,
```

#### 841. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10472` → after: `L10472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10472) · [Before (L10472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10472)

```diff
-           IT = TT.kF;
+           uq = qq.fn;
```

#### 842. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10478` → after: `L10478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10478) · [Before (L10478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10478)

```diff
-               IT = AT.wv() || this._babylonScene.defaultMaterial;
+               uq = Bq.da() || this._babylonScene.defaultMaterial;
```

#### 843. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10487-L10488` → after: `L10487-L10488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10487-L10488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10487-L10488) · [Before (L10487-L10488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10487-L10488)

```diff
-               (!OT.equalsWithEpsilon(MT, Gc.b) || KT < 1) && (kT.pbrMetallicRoughness = {
-                 baseColorFactor: [...OT.acT(), KT]
+               (!mq.equalsWithEpsilon(lq, Mg.c) || Oq < 1) && (Eq.pbrMetallicRoughness = {
+                 baseColorFactor: [...mq.bYq(), Oq]
```

#### 844. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10495-L10496` → after: `L10495-L10496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10495-L10496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10495-L10496) · [Before (L10495-L10496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10495-L10496)

```diff
-               (!lT.color.equalsWithEpsilon(hT.Color3.White(), Gc.b) || lT.alpha < 1) && (kT.pbrMetallicRoughness = {
-                 baseColorFactor: [...lT.color.acT(), lT.alpha]
+               (!Yq.color.equalsWithEpsilon(dq.Color3.White(), Mg.c) || Yq.alpha < 1) && (Eq.pbrMetallicRoughness = {
+                 baseColorFactor: [...Yq.color.bYq(), Yq.alpha]
```

#### 845. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10501` → after: `L10501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10501) · [Before (L10501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10501)

```diff
-             kT.wasAddedByNoopNode && !TT.NJ().useRightHandedSystem && (jT = jT === KT.e.ClockWiseSideOrientation ? KT.e.CounterClockWiseSideOrientation : KT.e.ClockWiseSideOrientation), this._exportIndices(MT, MT ? (0, Hc.e)(MT, AT.indexCount, AT.indexStart, AT.verticesStart) : A … [truncated]
+             Eq.wasAddedByNoopNode && !qq.ZJ().useRightHandedSystem && (Nq = Nq === Oq.e.ClockWiseSideOrientation ? Oq.e.CounterClockWiseSideOrientation : Oq.e.ClockWiseSideOrientation), this._exportIndices(lq, lq ? (0, Zg.c)(lq, Bq.indexCount, Bq.indexStart, Bq.verticesStart) : B … [truncated]
```

#### 846. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10550-L10552` → after: `L10550-L10552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10550-L10552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10550-L10552) · [Before (L10550-L10552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10550-L10552)

```diff
-             const TT = uT.m.Zero(),
-               lT = uT.f.Identity(),
-               OT = uT.m.One(),
+             const qq = Gq.q.Zero(),
+               Yq = Gq.h.Identity(),
+               mq = Gq.q.One(),
```

#### 847. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10554-L10556` → after: `L10554-L10556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10554-L10556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10554-L10556) · [Before (L10554-L10556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10554-L10556)

```diff
-               fT = uT.h.Fv[2],
-               xT = uT.h.Quaternion[1],
-               IT = uT.h.Fv[3];
+               Aq = Gq.o.Na[2],
+               cq = Gq.o.Quaternion[1],
+               uq = Gq.o.Na[3];
```

#### 848. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10560-L10562` → after: `L10560-L10562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10560-L10562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10560-L10562) · [Before (L10560-L10562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10560-L10562)

```diff
-             const vT = new Float32Array(3 * cT.w6),
-               tT = new Float32Array(4 * cT.w6),
-               hT = new Float32Array(3 * cT.w6);
+             const aq = new Float32Array(3 * gq.o5),
+               Vq = new Float32Array(4 * gq.o5),
+               dq = new Float32Array(3 * gq.o5);
```

#### 849. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10564` → after: `L10564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10564) · [Before (L10564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10564)

```diff
-             for (const kT of yT) kT.decompose(IT, xT, fT), MT && (Yc(fT), Bc(xT)), vT.set(fT.acT(), 3 * NT), tT.set(xT.normalize().acT(), 4 * NT), hT.set(IT.acT(), 3 * NT), AT = AT || !fT.equalsWithEpsilon(TT), CT = CT || !xT.equalsWithEpsilon(lT), jT = jT || !IT.equalsWithEpsilo … [truncated]
+             for (const Eq of xq) Eq.decompose(uq, cq, Aq), lq && (Fg(Aq), sg(cq)), aq.set(Aq.bYq(), 3 * jq), Vq.set(cq.normalize().bYq(), 4 * jq), dq.set(uq.bYq(), 3 * jq), Bq = Bq || !Aq.equalsWithEpsilon(qq), Wq = Wq || !cq.equalsWithEpsilon(Yq), Nq = Nq || !uq.equalsWithEpsilo … [truncated]
```

#### 850. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10568` → after: `L10568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10568) · [Before (L10568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10568)

```diff
-             AT && (QT.attributes.TRANSLATION = this._buildAccessor(vT, "VEC3", cT.w6, KT)), CT && (QT.attributes.ROTATION = this._buildAccessor(tT, "VEC4", cT.w6, KT)), jT && (QT.attributes.SCALE = this._buildAccessor(hT, "VEC3", cT.w6, KT));
+             Bq && (Hq.attributes.TRANSLATION = this._buildAccessor(aq, "VEC3", gq.o5, Oq)), Wq && (Hq.attributes.ROTATION = this._buildAccessor(Vq, "VEC4", gq.o5, Oq)), Nq && (Hq.attributes.SCALE = this._buildAccessor(dq, "VEC3", gq.o5, Oq));
```

#### 851. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10571` → after: `L10571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10571) · [Before (L10571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10571)

```diff
-               const TT = cT.w6,
+               const qq = gq.o5,
```

#### 852. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10573` → after: `L10573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10573) · [Before (L10573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10573)

```diff
-               cT.hasVertexAlpha && ST.length === 4 * TT ? (this._instanceColorWarned || (bT.e.Warn("EXT_mesh_gpu_instancing: Exporting instance colors as RGB, alpha channel of instance color is not exported"), this._instanceColorWarned = !0), ST = ul(ST, TT)) : ST.length === 4 *  … [truncated]
+               gq.hasVertexAlpha && oq.length === 4 * qq ? (this._instanceColorWarned || (nq.b.Warn("EXT_mesh_gpu_instancing: Exporting instance colors as RGB, alpha channel of instance color is not exported"), this._instanceColorWarned = !0), oq = pY(oq, qq)) : oq.length === 4 *  … [truncated]
```

#### 853. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10591` → after: `L10591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10591) · [Before (L10591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10591)

```diff
-     cT(40120);
+     gq(40236);
```

#### 854. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10593` → after: `L10593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10593) · [Before (L10593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10593)

```diff
-     var Rl = cT(41405);
+     var kY = gq(41607);
```

#### 855. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10680-L10681` → after: `L10680-L10681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10680-L10681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10680-L10681) · [Before (L10680-L10681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10680-L10681)

```diff
-             url: MT ? Pk.h.GetBabylonScriptURL(TT.wasmUrl, !0) : "",
-             wasmBinaryPromise: kT ? Promise.resolve(kT) : Pk.h.LoadFileAsync(Pk.h.GetBabylonScriptURL(TT.wasmBinaryUrl, !0))
+             url: lq ? rE.f.GetBabylonScriptURL(qq.wasmUrl, !0) : "",
+             wasmBinaryPromise: Eq ? Promise.resolve(Eq) : rE.f.LoadFileAsync(rE.f.GetBabylonScriptURL(qq.wasmBinaryUrl, !0))
```

#### 856. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10683` → after: `L10683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10683) · [Before (L10683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10683)

```diff
-             url: MT ? Pk.h.GetBabylonScriptURL(TT.fallbackUrl) : "",
+             url: lq ? rE.f.GetBabylonScriptURL(qq.fallbackUrl) : "",
```

#### 857. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10691` → after: `L10691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10691) · [Before (L10691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10691)

```diff
-           return new Rl.d(cT, (() => async function(TT, kT, cT) {
+           return new kY.b(gq, (() => async function(qq, Eq, gq) {
```

#### 858. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10715` → after: `L10715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10715) · [Before (L10715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10715)

```diff
-             await Pk.h.LoadBabylonScriptAsync(KT.url)
+             await rE.f.LoadBabylonScriptAsync(Oq.url)
```

#### 859. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10745` → after: `L10745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10745) · [Before (L10745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10745)

```diff
-       return TT === XT.l.PositionKind ? "POSITION" : TT === XT.l.NormalKind ? "NORMAL" : TT === XT.l.ColorKind ? "COLOR" : TT.startsWith(XT.l.UVKind) ? "TEX_COORD" : "GENERIC"
+       return qq === Lq.g.PositionKind ? "POSITION" : qq === Lq.g.NormalKind ? "NORMAL" : qq === Lq.g.ColorKind ? "COLOR" : qq.startsWith(Lq.g.UVKind) ? "TEX_COORD" : "GENERIC"
```

#### 860. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10781` → after: `L10781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10781) · [Before (L10781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10781)

```diff
-         return `${gl}(${Ul})()`
+         return `${RY}(${UY})()`
```

#### 861. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10817` → after: `L10817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10817) · [Before (L10817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10817)

```diff
-         TT instanceof rl.e && TT.morphTargetManager && "MESH_EDGEBREAKER_ENCODING" === kT?.method && (bT.e.Warn("Draco: Cannot use EDGEBREAKER encoding method with morph targets. Falling back to SEQUENTIAL method."), kT.method = "MESH_SEQUENTIAL_ENCODING");
+         qq instanceof yY.e && qq.morphTargetManager && "MESH_EDGEBREAKER_ENCODING" === Eq?.method && (nq.b.Warn("Draco: Cannot use EDGEBREAKER encoding method with morph targets. Falling back to SEQUENTIAL method."), Eq.method = "MESH_SEQUENTIAL_ENCODING");
```

#### 862. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10819-L10820` → after: `L10819-L10820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10819-L10820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10819-L10820) · [Before (L10819-L10820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10819-L10820)

```diff
-             let kT = TT.FcT(void 0, !0);
-             return !kT || kT instanceof Uint32Array || kT instanceof Uint16Array || (kT = ((0, Hc.e)(kT, kT.length) ? Uint32Array : Uint16Array).from(kT)), kT
+             let Eq = qq.iYq(void 0, !0);
+             return !Eq || Eq instanceof Uint32Array || Eq instanceof Uint16Array || (Eq = ((0, Zg.c)(Eq, Eq.length) ? Uint32Array : Uint16Array).from(Eq)), Eq
```

#### 863. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10826` → after: `L10826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10826) · [Before (L10826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10826)

```diff
-                 if (lT === XT.l.PositionKind) throw new Error("Draco: Cannot exclude position attribute from encoding.");
+                 if (Yq === Lq.g.PositionKind) throw new Error("Draco: Cannot exclude position attribute from encoding.");
```

#### 864. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10831` → after: `L10831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10831) · [Before (L10831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10831)

```diff
-                 OT = (0, Hc.m)(MT.getData(), KT, MT.type, MT.byteOffset, MT.byteStride, TT.getTotalVertices(), !0);
+                 mq = (0, Zg.r)(lq.getData(), Oq, lq.type, lq.byteOffset, lq.byteStride, qq.getTotalVertices(), !0);
```

#### 865. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10845-L10847` → after: `L10845-L10847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10845-L10847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10845-L10847) · [Before (L10845-L10847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10845-L10847)

```diff
-       wasmUrl: `${Pk.h._DefaultCdnUrl}/draco_encoder_wasm_wrapper.js`,
-       wasmBinaryUrl: `${Pk.h._DefaultCdnUrl}/draco_encoder.wasm`,
-       fallbackUrl: `${Pk.h._DefaultCdnUrl}/draco_encoder.js`
+       wasmUrl: `${rE.f._DefaultCdnUrl}/draco_encoder_wasm_wrapper.js`,
+       wasmBinaryUrl: `${rE.f._DefaultCdnUrl}/draco_encoder.wasm`,
+       fallbackUrl: `${rE.f._DefaultCdnUrl}/draco_encoder.js`
```

#### 866. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10860` → after: `L10860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10860) · [Before (L10860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10860)

```diff
-         if (4 !== TT.mode && 5 !== TT.mode) return void bT.e.Warn("Cannot compress primitive with mode " + TT.mode + ".");
+         if (4 !== qq.mode && 5 !== qq.mode) return void nq.b.Warn("Cannot compress primitive with mode " + qq.mode + ".");
```

#### 867. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10874` → after: `L10874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10874) · [Before (L10874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10874)

```diff
-             xT = (0, Hc.m)(kT.getData(KT), fT, TT.componentType, TT.byteOffset || 0, KT.byteStride || (0, Hc.j)(TT.componentType) * fT, TT.count, !0);
+             cq = (0, Zg.r)(Eq.getData(Oq), Aq, qq.componentType, qq.byteOffset || 0, Oq.byteStride || (0, Zg.q)(qq.componentType) * Aq, qq.count, !0);
```

#### 868. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10897` → after: `L10897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10897) · [Before (L10897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10897)

```diff
-             bT.e.Error("KHR_draco_mesh_compression: Failed to export Draco-encoded primitive. Resulting glTF may be invalid. " + TT.message)
+             nq.b.Error("KHR_draco_mesh_compression: Failed to export Draco-encoded primitive. Resulting glTF may be invalid. " + qq.message)
```

#### 869. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10913` → after: `L10913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10913) · [Before (L10913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10913)

```diff
-     var kM = cT(41164);
+     var ql = gq(41329);
```

#### 870. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10925` → after: `L10925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10925) · [Before (L10925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10925)

```diff
-       KM = uT.m.Backward();
+       ll = Gq.q.Backward();
```

#### 871. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10941-L10946` → after: `L10941-L10946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10941-L10946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10941-L10946) · [Before (L10941-L10946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10941-L10946)

```diff
-           if (!(cT instanceof Al.d)) return void KT(kT);
-           const OT = cT.getTypeID() == Al.d.LIGHTTYPEID_POINTLIGHT ? "point" : cT.getTypeID() == Al.d.LIGHTTYPEID_DIRECTIONALLIGHT ? "directional" : cT.getTypeID() == Al.d.LIGHTTYPEID_SPOTLIGHT ? "spot" : null;
-           if (!OT || !(cT instanceof kM.c)) return bT.e.Warn(`${TT}: Light ${cT.name} is not supported in ${cM}`), void KT(kT);
-           if (cT.falloffType !== Al.d.FALLOFF_GLTF && bT.e.Warn(`${TT}: Light falloff for ${cT.name} does not match the ${cM} specification!`), !cT.position.qKT(0, 0, 0)) {
-             const TT = uT.h.Fv[0].UkT(cT.position);
-             MT && Yc(TT), kT.translation = TT.acT()
+           if (!(gq instanceof uY.c)) return void Oq(Eq);
+           const mq = gq.getTypeID() == uY.c.LIGHTTYPEID_POINTLIGHT ? "point" : gq.getTypeID() == uY.c.LIGHTTYPEID_DIRECTIONALLIGHT ? "directional" : gq.getTypeID() == uY.c.LIGHTTYPEID_SPOTLIGHT ? "spot" : null;
+           if (!mq || !(gq instanceof ql.e)) return nq.b.Warn(`${qq}: Light ${gq.name} is not supported in ${El}`), void Oq(Eq);
+           if (gq.falloffType !== uY.c.FALLOFF_GLTF && nq.b.Warn(`${qq}: Light falloff for ${gq.name} does not match the ${El} specification!`), !gq.position.Cmq(0, 0, 0)) {
+             const qq = Gq.o.Na[0].WG(gq.position);
+             lq && Fg(qq), Eq.translation = qq.bYq()
```

#### 872. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10949` → after: `L10949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10949) · [Before (L10949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10949)

```diff
-             const TT = cT.direction.normalizeToRef(uT.h.Fv[0]);
+             const qq = gq.direction.normalizeToRef(Gq.o.Na[0]);
```

#### 873. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10951-L10952` → after: `L10951-L10952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10951-L10952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10951-L10952) · [Before (L10951-L10952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10951-L10952)

```diff
-             const lT = uT.f.FromUnitVectorsToRef(KM, TT, uT.h.Quaternion[0]);
-             uT.f.IsIdentity(lT) || (kT.rotation = lT.acT())
+             const Yq = Gq.h.FromUnitVectorsToRef(ll, qq, Gq.o.Quaternion[0]);
+             Gq.h.IsIdentity(Yq) || (Eq.rotation = Yq.bYq())
```

#### 874. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10957` → after: `L10957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L10957) · [Before (L10957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L10957)

```diff
-             color: cT.diffuse.acT(),
+             color: gq.diffuse.bYq(),
```

#### 875. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11037` → after: `L11037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11037) · [Before (L11037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11037)

```diff
-       hM = uT.m.Backward();
+       Vl = Gq.q.Backward();
```

#### 876. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11053-L11055` → after: `L11053-L11055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11053-L11055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11053-L11055) · [Before (L11053-L11055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11053-L11055)

```diff
-           if (!(cT instanceof Al.d)) return void KT(kT);
-           const OT = cT.getTypeID() == Al.d.LIGHTTYPEID_RECT_AREALIGHT ? "rect" : null;
-           if (!OT) return bT.e.Warn(`${TT}: Light ${cT.name} is not supported in ${jM}`), void KT(kT);
+           if (!(gq instanceof uY.c)) return void Oq(Eq);
+           const mq = gq.getTypeID() == uY.c.LIGHTTYPEID_RECT_AREALIGHT ? "rect" : null;
+           if (!mq) return nq.b.Warn(`${qq}: Light ${gq.name} is not supported in ${Wl}`), void Oq(Eq);
```

#### 877. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11057-L11059` → after: `L11057-L11059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11057-L11059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11057-L11059) · [Before (L11057-L11059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11057-L11059)

```diff
-           if (yT.falloffType !== Al.d.FALLOFF_GLTF && bT.e.Warn(`${TT}: Light falloff for ${cT.name} does not match the ${jM} specification!`), !yT.position.qKT(0, 0, 0)) {
-             const TT = uT.h.Fv[0].UkT(yT.position);
-             MT && Yc(TT), kT.translation = TT.acT()
+           if (xq.falloffType !== uY.c.FALLOFF_GLTF && nq.b.Warn(`${qq}: Light falloff for ${gq.name} does not match the ${Wl} specification!`), !xq.position.Cmq(0, 0, 0)) {
+             const qq = Gq.o.Na[0].WG(xq.position);
+             lq && Fg(qq), Eq.translation = qq.bYq()
```

#### 878. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11061` → after: `L11061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11061) · [Before (L11061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11061)

```diff
-           const fT = uT.m.Forward();
+           const Aq = Gq.q.Forward();
```

#### 879. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11063-L11064` → after: `L11063-L11064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11063-L11064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11063-L11064) · [Before (L11063-L11064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11063-L11064)

```diff
-           const xT = uT.f.FromUnitVectorsToRef(hM, fT, uT.h.Quaternion[0]);
-           uT.f.IsIdentity(xT) || (kT.rotation = xT.acT());
+           const cq = Gq.h.FromUnitVectorsToRef(Vl, Aq, Gq.o.Quaternion[0]);
+           Gq.h.IsIdentity(cq) || (Eq.rotation = cq.bYq());
```

#### 880. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11068` → after: `L11068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11068) · [Before (L11068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11068)

```diff
-             color: yT.diffuse.acT(),
+             color: xq.diffuse.bYq(),
```

#### 881. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11116` → after: `L11116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11116) · [Before (L11116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11116)

```diff
-             return `${kT&&kT.getInternalTexture()?kT.getInternalTexture().uniqueId:"NoStrength"}_${cT&&cT.getInternalTexture()?cT.getInternalTexture().uniqueId:"NoTangent"}`
+             return `${Eq&&Eq.getInternalTexture()?Eq.getInternalTexture().uniqueId:"NoStrength"}_${gq&&gq.getInternalTexture()?gq.getInternalTexture().uniqueId:"NoTangent"}`
```

#### 882. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11121` → after: `L11121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11121) · [Before (L11121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11121)

```diff
-               const kT = TT.NJ(),
+               const Eq = qq.ZJ(),
```

#### 883. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11195-L11196` → after: `L11195-L11196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11195-L11196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11195-L11196) · [Before (L11195-L11196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11195-L11196)

```diff
-       const cT = new JT.f(kT.name, kT.NJ());
-       return cT._texture = TT, cT.coordinatesIndex = kT.coordinatesIndex, kT instanceof JT.f && (cT.uOffset = kT.uOffset, cT.vOffset = kT.vOffset, cT.uScale = kT.uScale, cT.vScale = kT.vScale, cT.wAng = kT.wAng), cT.wrapU = kT.wrapU, cT.wrapV = kT.wrapV, cT
+       const gq = new iq.d(Eq.name, Eq.ZJ());
+       return gq._texture = qq, gq.coordinatesIndex = Eq.coordinatesIndex, Eq instanceof iq.d && (gq.uOffset = Eq.uOffset, gq.vOffset = Eq.vOffset, gq.uScale = Eq.uScale, gq.vScale = Eq.vScale, gq.wAng = Eq.wAng), gq.wrapU = Eq.wrapU, gq.wrapV = Eq.wrapV, gq
```

#### 884. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11226` → after: `L11226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11226) · [Before (L11226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11226)

```diff
-               return `${cT}_${lT&&lT.getInternalTexture()?lT.getInternalTexture().uniqueId:"NoRoughness"}`
+               return `${gq}_${Yq&&Yq.getInternalTexture()?Yq.getInternalTexture().uniqueId:"NoRoughness"}`
```

#### 885. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11230` → after: `L11230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11230) · [Before (L11230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11230)

```diff
-                 const kT = TT.NJ(),
+                 const Eq = qq.ZJ(),
```

#### 886. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11250` → after: `L11250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11250) · [Before (L11250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11250)

```diff
-             MT = cT.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(cT.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(cT.clearCoat.textureRoughness), cT.clearCoat.isTintEnabled && Pk.h.Warn(`Clear Color tint is not sup … [truncated]
+             lq = gq.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(gq.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(gq.clearCoat.textureRoughness), gq.clearCoat.isTintEnabled && rE.f.Warn(`Clear Color tint is not sup … [truncated]
```

#### 887. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11263` → after: `L11263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11263) · [Before (L11263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11263)

```diff
-             this._wasUsed = !0, kT.extensions = kT.extensions || {}, cT.coatWeightTexture && (lT = this._mergedTexturesMap[cT.coatWeightTexture.uniqueId], MT = this._exporter._materialExporter.getTextureInfo(lT)), cT.coatRoughnessTexture && (KT = this._mergedTexturesMap[cT.coatRo … [truncated]
+             this._wasUsed = !0, Eq.extensions = Eq.extensions || {}, gq.coatWeightTexture && (Yq = this._mergedTexturesMap[gq.coatWeightTexture.uniqueId], lq = this._exporter._materialExporter.getTextureInfo(Yq)), gq.coatRoughnessTexture && (Oq = this._mergedTexturesMap[gq.coatRo … [truncated]
```

#### 888. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11289` → after: `L11289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11289) · [Before (L11289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11289)

```diff
-       return `${kT&&kT.getInternalTexture()?kT.getInternalTexture().uniqueId:"NoStrength"}_${cT&&cT.getInternalTexture()?cT.getInternalTexture().uniqueId:"NoTangent"}`
+       return `${Eq&&Eq.getInternalTexture()?Eq.getInternalTexture().uniqueId:"NoStrength"}_${gq&&gq.getInternalTexture()?gq.getInternalTexture().uniqueId:"NoTangent"}`
```

#### 889. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11293-L11294` → after: `L11293-L11294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11293-L11294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11293-L11294) · [Before (L11293-L11294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11293-L11294)

```diff
-       const cT = new JT.f(kT.name, kT.NJ());
-       return cT._texture = TT, cT.coordinatesIndex = kT.coordinatesIndex, kT instanceof JT.f && (cT.uOffset = kT.uOffset, cT.vOffset = kT.vOffset, cT.uScale = kT.uScale, cT.vScale = kT.vScale, cT.wAng = kT.wAng), cT.wrapU = kT.wrapU, cT.wrapV = kT.wrapV, cT
+       const gq = new iq.d(Eq.name, Eq.ZJ());
+       return gq._texture = qq, gq.coordinatesIndex = Eq.coordinatesIndex, Eq instanceof iq.d && (gq.uOffset = Eq.uOffset, gq.vOffset = Eq.vOffset, gq.uScale = Eq.uScale, gq.vScale = Eq.vScale, gq.wAng = Eq.wAng), gq.wrapU = Eq.wrapU, gq.wrapV = Eq.wrapV, gq
```

#### 890. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11324` → after: `L11324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11324) · [Before (L11324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11324)

```diff
-               return `${cT}_${lT&&lT.getInternalTexture()?lT.getInternalTexture().uniqueId:"NoRoughness"}`
+               return `${gq}_${Yq&&Yq.getInternalTexture()?Yq.getInternalTexture().uniqueId:"NoRoughness"}`
```

#### 891. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11328` → after: `L11328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11328) · [Before (L11328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11328)

```diff
-                 const kT = TT.NJ(),
+                 const Eq = qq.ZJ(),
```

#### 892. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11342` → after: `L11342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11342) · [Before (L11342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11342)

```diff
-                 const kT = TT.NJ(),
+                 const Eq = qq.ZJ(),
```

#### 893. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11372` → after: `L11372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11372) · [Before (L11372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11372)

```diff
-                 coatColorFactor: cT.clearCoat.tintColor.acT(),
+                 coatColorFactor: gq.clearCoat.tintColor.bYq(),
```

#### 894. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11374` → after: `L11374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11374) · [Before (L11374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11374)

```diff
-                 coatIor: 1.5 !== yT ? yT : void 0
+                 coatIor: 1.5 !== xq ? xq : void 0
```

#### 895. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11419` → after: `L11419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11419) · [Before (L11419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11419)

```diff
-               coatColorFactor: cT.coatColor.acT(),
+               coatColorFactor: gq.coatColor.bYq(),
```

#### 896. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11421-L11422` → after: `L11421-L11422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11421-L11422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11421-L11422) · [Before (L11421-L11422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11421-L11422)

```diff
-               coatIor: 1.5 !== IT ? IT : void 0,
-               coatDarkeningFactor: 1 !== AT ? AT : void 0,
+               coatIor: 1.5 !== uq ? uq : void 0,
+               coatDarkeningFactor: 1 !== Bq ? Bq : void 0,
```

#### 897. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11580` → after: `L11580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11580) · [Before (L11580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11580)

```diff
-           (0, wT.d)(this, kT, TT, "f")
+           (0, vq.e)(this, Eq, qq, "f")
```

#### 898. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11586` → after: `L11586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11586) · [Before (L11586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11586)

```diff
-           (0, wT.d)(this, cT, TT, "f")
+           (0, vq.e)(this, gq, qq, "f")
```

#### 899. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11592` → after: `L11592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11592) · [Before (L11592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11592)

```diff
-           (0, wT.d)(this, lT, TT, "f")
+           (0, vq.e)(this, Yq, qq, "f")
```

#### 900. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11598` → after: `L11598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11598) · [Before (L11598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11598)

```diff
-           (0, wT.d)(this, MT, TT, "f")
+           (0, vq.e)(this, lq, qq, "f")
```

#### 901. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11604` → after: `L11604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11604) · [Before (L11604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11604)

```diff
-           (0, wT.d)(this, OT, TT, "f")
+           (0, vq.e)(this, mq, qq, "f")
```

#### 902. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11610` → after: `L11610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11610) · [Before (L11610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11610)

```diff
-           (0, wT.d)(this, yT, TT, "f")
+           (0, vq.e)(this, xq, qq, "f")
```

#### 903. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11616` → after: `L11616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11616) · [Before (L11616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11616)

```diff
-           (0, wT.d)(this, fT, TT, "f")
+           (0, vq.e)(this, Aq, qq, "f")
```

#### 904. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11622` → after: `L11622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11622) · [Before (L11622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11622)

```diff
-           (0, wT.d)(this, xT, TT, "f")
+           (0, vq.e)(this, cq, qq, "f")
```

#### 905. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11628` → after: `L11628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11628) · [Before (L11628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11628)

```diff
-           (0, wT.d)(this, IT, TT, "f")
+           (0, vq.e)(this, uq, qq, "f")
```

#### 906. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11634` → after: `L11634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11634) · [Before (L11634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11634)

```diff
-           (0, wT.d)(this, AT, TT, "f")
+           (0, vq.e)(this, Bq, qq, "f")
```

#### 907. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11640` → after: `L11640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11640) · [Before (L11640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11640)

```diff
-           (0, wT.d)(this, CT, TT, "f")
+           (0, vq.e)(this, Wq, qq, "f")
```

#### 908. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11646` → after: `L11646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11646) · [Before (L11646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11646)

```diff
-           (0, wT.d)(this, jT, TT, "f")
+           (0, vq.e)(this, Nq, qq, "f")
```

#### 909. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11652` → after: `L11652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11652) · [Before (L11652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11652)

```diff
-           (0, wT.d)(this, vT, TT, "f")
+           (0, vq.e)(this, aq, qq, "f")
```

#### 910. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11658` → after: `L11658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11658) · [Before (L11658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11658)

```diff
-           (0, wT.d)(this, tT, TT, "f")
+           (0, vq.e)(this, Vq, qq, "f")
```

#### 911. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11664` → after: `L11664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11664) · [Before (L11664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11664)

```diff
-           (0, wT.d)(this, hT, TT, "f")
+           (0, vq.e)(this, dq, qq, "f")
```

#### 912. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11670` → after: `L11670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11670) · [Before (L11670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11670)

```diff
-           (0, wT.d)(this, NT, TT, "f")
+           (0, vq.e)(this, jq, qq, "f")
```

#### 913. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11676` → after: `L11676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11676) · [Before (L11676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11676)

```diff
-           (0, wT.d)(this, QT, TT, "f")
+           (0, vq.e)(this, Hq, qq, "f")
```

#### 914. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11682` → after: `L11682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11682) · [Before (L11682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11682)

```diff
-           (0, wT.d)(this, ST, TT, "f")
+           (0, vq.e)(this, oq, qq, "f")
```

#### 915. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11688` → after: `L11688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11688) · [Before (L11688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11688)

```diff
-           (0, wT.d)(this, DT, TT, "f")
+           (0, vq.e)(this, Pq, qq, "f")
```

#### 916. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11694` → after: `L11694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11694) · [Before (L11694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11694)

```diff
-           (0, wT.d)(this, aT, TT, "f")
+           (0, vq.e)(this, Qq, qq, "f")
```

#### 917. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11700` → after: `L11700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11700) · [Before (L11700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11700)

```diff
-           (0, wT.d)(this, FT, TT, "f")
+           (0, vq.e)(this, yq, qq, "f")
```

#### 918. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11706` → after: `L11706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11706) · [Before (L11706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11706)

```diff
-           (0, wT.d)(this, rT, TT, "f")
+           (0, vq.e)(this, tq, qq, "f")
```

#### 919. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11712` → after: `L11712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11712) · [Before (L11712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11712)

```diff
-           (0, wT.d)(this, PT, TT, "f")
+           (0, vq.e)(this, rq, qq, "f")
```

#### 920. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11718` → after: `L11718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11718) · [Before (L11718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11718)

```diff
-           (0, wT.d)(this, bT, TT, "f")
+           (0, vq.e)(this, nq, qq, "f")
```

#### 921. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11724` → after: `L11724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11724) · [Before (L11724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11724)

```diff
-           (0, wT.d)(this, zT, TT, "f")
+           (0, vq.e)(this, bq, qq, "f")
```

#### 922. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11730` → after: `L11730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11730) · [Before (L11730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11730)

```diff
-           (0, wT.d)(this, JT, TT, "f")
+           (0, vq.e)(this, iq, qq, "f")
```

#### 923. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11742` → after: `L11742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11742) · [Before (L11742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11742)

```diff
-           (0, wT.d)(this, oT, TT, "f")
+           (0, vq.e)(this, Zq, qq, "f")
```

#### 924. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11748` → after: `L11748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11748) · [Before (L11748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11748)

```diff
-           (0, wT.d)(this, HT, TT, "f")
+           (0, vq.e)(this, fq, qq, "f")
```

#### 925. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11754` → after: `L11754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11754) · [Before (L11754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11754)

```diff
-           (0, wT.d)(this, eT, TT, "f")
+           (0, vq.e)(this, Mq, qq, "f")
```

#### 926. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11760` → after: `L11760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11760) · [Before (L11760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11760)

```diff
-           (0, wT.d)(this, VT, TT, "f")
+           (0, vq.e)(this, zq, qq, "f")
```

#### 927. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11766` → after: `L11766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11766) · [Before (L11766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11766)

```diff
-           (0, wT.d)(this, ET, TT, "f")
+           (0, vq.e)(this, Sq, qq, "f")
```

#### 928. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11772` → after: `L11772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11772) · [Before (L11772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11772)

```diff
-           (0, wT.d)(this, ZT, TT, "f")
+           (0, vq.e)(this, pq, qq, "f")
```

#### 929. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11778` → after: `L11778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11778) · [Before (L11778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11778)

```diff
-           (0, wT.d)(this, uT, TT, "f")
+           (0, vq.e)(this, Gq, qq, "f")
```

#### 930. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11784` → after: `L11784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11784) · [Before (L11784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11784)

```diff
-           (0, wT.d)(this, XT, TT, "f")
+           (0, vq.e)(this, Lq, qq, "f")
```

#### 931. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11808` → after: `L11808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11808) · [Before (L11808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11808)

```diff
-           (0, wT.d)(this, dT, TT, "f")
+           (0, vq.e)(this, Jq, qq, "f")
```

#### 932. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11814` → after: `L11814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11814) · [Before (L11814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11814)

```diff
-           (0, wT.d)(this, LT, TT, "f")
+           (0, vq.e)(this, kq, qq, "f")
```

#### 933. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11820` → after: `L11820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11820) · [Before (L11820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11820)

```diff
-           (0, wT.d)(this, RT, TT, "f")
+           (0, vq.e)(this, Rq, qq, "f")
```

#### 934. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11826` → after: `L11826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11826) · [Before (L11826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11826)

```diff
-           (0, wT.d)(this, gT, TT, "f")
+           (0, vq.e)(this, Uq, qq, "f")
```

#### 935. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11832` → after: `L11832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11832) · [Before (L11832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11832)

```diff
-           (0, wT.d)(this, UT, TT, "f")
+           (0, vq.e)(this, Fq, qq, "f")
```

#### 936. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11838` → after: `L11838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11838) · [Before (L11838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11838)

```diff
-           (0, wT.d)(this, BT, TT, "f")
+           (0, vq.e)(this, Xq, qq, "f")
```

#### 937. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11844` → after: `L11844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11844) · [Before (L11844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11844)

```diff
-           (0, wT.d)(this, WT, TT, "f")
+           (0, vq.e)(this, wq, qq, "f")
```

#### 938. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11850` → after: `L11850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11850) · [Before (L11850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11850)

```diff
-           (0, wT.d)(this, nT, TT, "f")
+           (0, vq.e)(this, Kq, qq, "f")
```

#### 939. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11856` → after: `L11856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11856) · [Before (L11856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11856)

```diff
-           (0, wT.d)(this, pT, TT, "f")
+           (0, vq.e)(this, Cq, qq, "f")
```

#### 940. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11862` → after: `L11862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11862) · [Before (L11862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11862)

```diff
-           (0, wT.d)(this, iT, TT, "f")
+           (0, vq.e)(this, Iq, qq, "f")
```

#### 941. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11868` → after: `L11868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11868) · [Before (L11868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11868)

```diff
-           (0, wT.d)(this, qT, TT, "f")
+           (0, vq.e)(this, eq, qq, "f")
```

#### 942. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11874` → after: `L11874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11874) · [Before (L11874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11874)

```diff
-           (0, wT.d)(this, sT, TT, "f")
+           (0, vq.e)(this, Dq, qq, "f")
```

#### 943. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11892` → after: `L11892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11892) · [Before (L11892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11892)

```diff
-           (0, wT.d)(this, Tk, TT, "f")
+           (0, vq.e)(this, qE, qq, "f")
```

#### 944. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11898` → after: `L11898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11898) · [Before (L11898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11898)

```diff
-           (0, wT.d)(this, kk, TT, "f")
+           (0, vq.e)(this, EE, qq, "f")
```

#### 945. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11904` → after: `L11904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11904) · [Before (L11904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11904)

```diff
-           (0, wT.d)(this, ck, TT, "f")
+           (0, vq.e)(this, gE, qq, "f")
```

#### 946. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11910` → after: `L11910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11910) · [Before (L11910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11910)

```diff
-           (0, wT.d)(this, lk, TT, "f")
+           (0, vq.e)(this, YE, qq, "f")
```

#### 947. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11916` → after: `L11916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11916) · [Before (L11916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11916)

```diff
-           (0, wT.d)(this, Mk, TT, "f")
+           (0, vq.e)(this, lE, qq, "f")
```

#### 948. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11922` → after: `L11922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11922) · [Before (L11922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11922)

```diff
-           (0, wT.d)(this, Kk, TT, "f")
+           (0, vq.e)(this, OE, qq, "f")
```

#### 949. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11928` → after: `L11928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11928) · [Before (L11928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11928)

```diff
-           (0, wT.d)(this, Ok, TT, "f")
+           (0, vq.e)(this, mE, qq, "f")
```

#### 950. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11934` → after: `L11934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11934) · [Before (L11934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11934)

```diff
-           (0, wT.d)(this, yk, TT, "f")
+           (0, vq.e)(this, xE, qq, "f")
```

#### 951. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11940` → after: `L11940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11940) · [Before (L11940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11940)

```diff
-           (0, wT.d)(this, fk, TT, "f")
+           (0, vq.e)(this, AE, qq, "f")
```

#### 952. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11946` → after: `L11946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11946) · [Before (L11946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11946)

```diff
-           (0, wT.d)(this, xk, TT, "f")
+           (0, vq.e)(this, cE, qq, "f")
```

#### 953. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11952` → after: `L11952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11952) · [Before (L11952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11952)

```diff
-           (0, wT.d)(this, Ik, TT, "f")
+           (0, vq.e)(this, uE, qq, "f")
```

#### 954. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11958` → after: `L11958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11958) · [Before (L11958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11958)

```diff
-           (0, wT.d)(this, Ak, TT, "f")
+           (0, vq.e)(this, BE, qq, "f")
```

#### 955. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11964` → after: `L11964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11964) · [Before (L11964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11964)

```diff
-           (0, wT.d)(this, Ck, TT, "f")
+           (0, vq.e)(this, WE, qq, "f")
```

#### 956. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11970` → after: `L11970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11970) · [Before (L11970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11970)

```diff
-           (0, wT.d)(this, jk, TT, "f")
+           (0, vq.e)(this, NE, qq, "f")
```

#### 957. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11976` → after: `L11976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11976) · [Before (L11976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11976)

```diff
-           (0, wT.d)(this, vk, TT, "f")
+           (0, vq.e)(this, aE, qq, "f")
```

#### 958. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11982` → after: `L11982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11982) · [Before (L11982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11982)

```diff
-           (0, wT.d)(this, tk, TT, "f")
+           (0, vq.e)(this, VE, qq, "f")
```

#### 959. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11988` → after: `L11988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11988) · [Before (L11988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11988)

```diff
-           (0, wT.d)(this, hk, TT, "f")
+           (0, vq.e)(this, dE, qq, "f")
```

#### 960. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L11994` → after: `L11994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L11994) · [Before (L11994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L11994)

```diff
-           (0, wT.d)(this, Nk, TT, "f")
+           (0, vq.e)(this, jE, qq, "f")
```

#### 961. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12000` → after: `L12000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12000) · [Before (L12000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12000)

```diff
-           (0, wT.d)(this, Qk, TT, "f")
+           (0, vq.e)(this, HE, qq, "f")
```

#### 962. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12006` → after: `L12006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12006) · [Before (L12006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12006)

```diff
-           (0, wT.d)(this, Sk, TT, "f")
+           (0, vq.e)(this, oE, qq, "f")
```

#### 963. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12009` → after: `L12009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12009) · [Before (L12009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12009)

```diff
-           super(KT, mT, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), kT.set(this, ((0, wT.h)(this, Lc), (0, wT.h)(this, Rc, 1))), cT.set(this, ((0, wT.h)(this, gc), (0, wT.h)(this, Uc, 1))), lT.set(this, ((0, wT.h)(this, Yc), (0, wT.h)(this, Bc, 1))), MT.set( … [truncated]
+           super(Oq, hq, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), Eq.set(this, ((0, vq.i)(this, Jg), (0, vq.i)(this, kg, 1))), gq.set(this, ((0, vq.i)(this, Rg), (0, vq.i)(this, Ug, 1))), Yq.set(this, ((0, vq.i)(this, Fg), (0, vq.i)(this, sg, 1))), lq.set( … [truncated]
```

#### 964. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12017` → after: `L12017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12017) · [Before (L12017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12017)

```diff
-           const MT = rk.d.Clone((() => new TT(kT, this.NJ())), this, {
+           const lq = tE.d.Clone((() => new qq(Eq, this.ZJ())), this, {
```

#### 965. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12032` → after: `L12032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12032) · [Before (L12032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12032)

```diff
-         Dk = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], ak = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], Pk = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], wk = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], mk = … [truncated]
+         PE = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], QE = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], rE = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], vE = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], hE = … [truncated]
```

#### 966. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12045` → after: `L12045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12045) · [Before (L12045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12045)

```diff
-         }, Rc, gc), (0, wT.e)(TT, null, ak, {
+         }, kg, Rg), (0, vq.f)(qq, null, QE, {
```

#### 967. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12058` → after: `L12058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12058) · [Before (L12058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12058)

```diff
-         }, Uc, Yc), (0, wT.e)(TT, null, Pk, {
+         }, Ug, Fg), (0, vq.f)(qq, null, rE, {
```

#### 968. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12071` → after: `L12071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12071) · [Before (L12071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12071)

```diff
-         }, Bc, Wc), (0, wT.e)(TT, null, wk, {
+         }, sg, Xg), (0, vq.f)(qq, null, vE, {
```

#### 969. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12084` → after: `L12084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12084) · [Before (L12084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12084)

```diff
-         }, nc, pc), (0, wT.e)(TT, null, mk, {
+         }, wg, Kg), (0, vq.f)(qq, null, hE, {
```

#### 970. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12097` → after: `L12097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12097) · [Before (L12097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12097)

```diff
-         }, ic, qc), (0, wT.e)(TT, null, bk, {
+         }, Cg, Ig), (0, vq.f)(qq, null, nE, {
```

#### 971. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12110` → after: `L12110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12110) · [Before (L12110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12110)

```diff
-         }, sc, Tl), (0, wT.e)(TT, null, zk, {
+         }, eg, Dg), (0, vq.f)(qq, null, bE, {
```

#### 972. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12123` → after: `L12123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12123) · [Before (L12123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12123)

```diff
-         }, kl, cl), (0, wT.e)(TT, null, Jk, {
+         }, qY, EY), (0, vq.f)(qq, null, iE, {
```

#### 973. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12136` → after: `L12136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12136) · [Before (L12136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12136)

```diff
-         }, ll, Ml), (0, wT.e)(TT, null, Hk, {
+         }, gY, YY), (0, vq.f)(qq, null, ZE, {
```

#### 974. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12149` → after: `L12149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12149) · [Before (L12149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12149)

```diff
-         }, Kl, Ol), (0, wT.e)(TT, null, ek, {
+         }, lY, OY), (0, vq.f)(qq, null, fE, {
```

#### 975. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12162` → after: `L12162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12162) · [Before (L12162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12162)

```diff
-         }, yl, fl), (0, wT.e)(TT, null, Gk, {
+         }, mY, xY), (0, vq.f)(qq, null, ME, {
```

#### 976. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12175` → after: `L12175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12175) · [Before (L12175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12175)

```diff
-         }, xl, Il), (0, wT.e)(TT, null, Vk, {
+         }, AY, cY), (0, vq.f)(qq, null, TE, {
```

#### 977. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12188` → after: `L12188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12188) · [Before (L12188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12188)

```diff
-         }, Al, Cl), (0, wT.e)(TT, null, Ek, {
+         }, uY, BY), (0, vq.f)(qq, null, zE, {
```

#### 978. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12201` → after: `L12201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12201) · [Before (L12201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12201)

```diff
-         }, jl, vl), (0, wT.e)(TT, null, Zk, {
+         }, WY, NY), (0, vq.f)(qq, null, SE, {
```

#### 979. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12214` → after: `L12214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12214) · [Before (L12214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12214)

```diff
-         }, tl, hl), (0, wT.e)(TT, null, uk, {
+         }, aY, VY), (0, vq.f)(qq, null, pE, {
```

#### 980. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12227` → after: `L12227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12227) · [Before (L12227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12227)

```diff
-         }, Nl, Ql), (0, wT.e)(TT, null, Xk, {
+         }, dY, jY), (0, vq.f)(qq, null, GE, {
```

#### 981. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12240` → after: `L12240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12240) · [Before (L12240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12240)

```diff
-         }, Sl, Dl), (0, wT.e)(TT, null, dk, {
+         }, HY, oY), (0, vq.f)(qq, null, LE, {
```

#### 982. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12253` → after: `L12253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12253) · [Before (L12253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12253)

```diff
-         }, al, Fl), (0, wT.e)(TT, null, Lk, {
+         }, PY, QY), (0, vq.f)(qq, null, JE, {
```

#### 983. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12266` → after: `L12266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12266) · [Before (L12266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12266)

```diff
-         }, rl, Pl), (0, wT.e)(TT, null, Rk, {
+         }, yY, tY), (0, vq.f)(qq, null, kE, {
```

#### 984. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12279` → after: `L12279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12279) · [Before (L12279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12279)

```diff
-         }, wl, ml), (0, wT.e)(TT, null, gk, {
+         }, rY, vY), (0, vq.f)(qq, null, RE, {
```

#### 985. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12292` → after: `L12292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12292) · [Before (L12292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12292)

```diff
-         }, bl, zl), (0, wT.e)(TT, null, Uk, {
+         }, hY, nY), (0, vq.f)(qq, null, UE, {
```

#### 986. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12305` → after: `L12305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12305) · [Before (L12305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12305)

```diff
-         }, Jl, ol), (0, wT.e)(TT, null, Yk, {
+         }, bY, iY), (0, vq.f)(qq, null, FE, {
```

#### 987. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12318` → after: `L12318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12318) · [Before (L12318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12318)

```diff
-         }, Hl, el), (0, wT.e)(TT, null, Bk, {
+         }, ZY, fY), (0, vq.f)(qq, null, sE, {
```

#### 988. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12331` → after: `L12331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12331) · [Before (L12331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12331)

```diff
-         }, Gl, Vl), (0, wT.e)(TT, null, Wk, {
+         }, MY, TY), (0, vq.f)(qq, null, XE, {
```

#### 989. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12344` → after: `L12344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12344) · [Before (L12344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12344)

```diff
-         }, El, Zl), (0, wT.e)(TT, null, nk, {
+         }, zY, SY), (0, vq.f)(qq, null, wE, {
```

#### 990. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12357` → after: `L12357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12357) · [Before (L12357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12357)

```diff
-         }, ul, Xl), (0, wT.e)(TT, null, pk, {
+         }, pY, GY), (0, vq.f)(qq, null, KE, {
```

#### 991. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12370` → after: `L12370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12370) · [Before (L12370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12370)

```diff
-         }, dl, Ll), (0, wT.e)(TT, null, ik, {
+         }, LY, JY), (0, vq.f)(qq, null, CE, {
```

#### 992. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12383` → after: `L12383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12383) · [Before (L12383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12383)

```diff
-         }, Rl, gl), (0, wT.e)(TT, null, qk, {
+         }, kY, RY), (0, vq.f)(qq, null, IE, {
```

#### 993. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12396` → after: `L12396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12396) · [Before (L12396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12396)

```diff
-         }, Ul, Yl), (0, wT.e)(TT, null, sk, {
+         }, UY, FY), (0, vq.f)(qq, null, eE, {
```

#### 994. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12409` → after: `L12409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12409) · [Before (L12409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12409)

```diff
-         }, Bl, Wl), (0, wT.e)(TT, null, Tc, {
+         }, sY, XY), (0, vq.f)(qq, null, DE, {
```

#### 995. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12422` → after: `L12422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12422) · [Before (L12422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12422)

```diff
-         }, nl, pl), (0, wT.e)(TT, null, kc, {
+         }, wY, KY), (0, vq.f)(qq, null, qg, {
```

#### 996. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12435` → after: `L12435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12435) · [Before (L12435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12435)

```diff
-         }, il, ql), (0, wT.e)(TT, null, cc, {
+         }, CY, IY), (0, vq.f)(qq, null, Eg, {
```

#### 997. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12448` → after: `L12448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12448) · [Before (L12448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12448)

```diff
-         }, sl, TM), (0, wT.e)(TT, null, lc, {
+         }, eY, DY), (0, vq.f)(qq, null, gg, {
```

#### 998. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12461` → after: `L12461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12461) · [Before (L12461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12461)

```diff
-         }, kM, cM), (0, wT.e)(TT, null, Mc, {
+         }, ql, El), (0, vq.f)(qq, null, Yg, {
```

#### 999. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12474` → after: `L12474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12474) · [Before (L12474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12474)

```diff
-         }, lM, MM), (0, wT.e)(TT, null, Kc, {
+         }, gl, Yl), (0, vq.f)(qq, null, lg, {
```

#### 1000. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12487` → after: `L12487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12487) · [Before (L12487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12487)

```diff
-         }, KM, OM), (0, wT.e)(TT, null, Oc, {
+         }, ll, Ol), (0, vq.f)(qq, null, Og, {
```

#### 1001. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12500` → after: `L12500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12500) · [Before (L12500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12500)

```diff
-         }, yM, fM), (0, wT.e)(TT, null, yc, {
+         }, ml, xl), (0, vq.f)(qq, null, mg, {
```

#### 1002. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12513` → after: `L12513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12513) · [Before (L12513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12513)

```diff
-         }, xM, IM), (0, wT.e)(TT, null, fc, {
+         }, Al, cl), (0, vq.f)(qq, null, xg, {
```

#### 1003. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12526` → after: `L12526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12526) · [Before (L12526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12526)

```diff
-         }, AM, CM), (0, wT.e)(TT, null, xc, {
+         }, ul, Bl), (0, vq.f)(qq, null, Ag, {
```

#### 1004. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12539` → after: `L12539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12539) · [Before (L12539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12539)

```diff
-         }, jM, vM), (0, wT.e)(TT, null, Ic, {
+         }, Wl, Nl), (0, vq.f)(qq, null, cg, {
```

#### 1005. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12552` → after: `L12552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12552) · [Before (L12552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12552)

```diff
-         }, tM, hM), (0, wT.e)(TT, null, Ac, {
+         }, al, Vl), (0, vq.f)(qq, null, ug, {
```

#### 1006. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12565` → after: `L12565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12565) · [Before (L12565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12565)

```diff
-         }, NM, QM), (0, wT.e)(TT, null, Cc, {
+         }, dl, jl), (0, vq.f)(qq, null, Bg, {
```

#### 1007. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12578` → after: `L12578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12578) · [Before (L12578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12578)

```diff
-         }, SM, DM), (0, wT.e)(TT, null, jc, {
+         }, Hl, ol), (0, vq.f)(qq, null, Wg, {
```

#### 1008. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12591` → after: `L12591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12591) · [Before (L12591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12591)

```diff
-         }, aM, FM), (0, wT.e)(TT, null, vc, {
+         }, Pl, Ql), (0, vq.f)(qq, null, Ng, {
```

#### 1009. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12604` → after: `L12604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12604) · [Before (L12604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12604)

```diff
-         }, rM, PM), (0, wT.e)(TT, null, tc, {
+         }, yl, tl), (0, vq.f)(qq, null, ag, {
```

#### 1010. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12617` → after: `L12617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12617) · [Before (L12617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12617)

```diff
-         }, wM, mM), (0, wT.e)(TT, null, hc, {
+         }, rl, vl), (0, vq.f)(qq, null, Vg, {
```

#### 1011. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12630` → after: `L12630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12630) · [Before (L12630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12630)

```diff
-         }, bM, zM), (0, wT.e)(TT, null, Nc, {
+         }, hl, nl), (0, vq.f)(qq, null, dg, {
```

#### 1012. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12640` → after: `L12640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12640) · [Before (L12640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12640)

```diff
-         }, null, Lc), (0, wT.e)(TT, null, Qc, {
+         }, null, Jg), (0, vq.f)(qq, null, jg, {
```

#### 1013. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12650` → after: `L12650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12650) · [Before (L12650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12650)

```diff
-         }, null, Lc), (0, wT.e)(TT, null, Sc, {
+         }, null, Jg), (0, vq.f)(qq, null, Hg, {
```

#### 1014. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12663` → after: `L12663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12663) · [Before (L12663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12663)

```diff
-         }, JM, oM), (0, wT.e)(TT, null, Dc, {
+         }, bl, il), (0, vq.f)(qq, null, og, {
```

#### 1015. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12676` → after: `L12676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12676) · [Before (L12676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12676)

```diff
-         }, HM, eM), (0, wT.e)(TT, null, ac, {
+         }, Zl, fl), (0, vq.f)(qq, null, Pg, {
```

#### 1016. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12689` → after: `L12689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12689) · [Before (L12689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12689)

```diff
-         }, GM, VM), (0, wT.e)(TT, null, Fc, {
+         }, Ml, Tl), (0, vq.f)(qq, null, Qg, {
```

#### 1017. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12702` → after: `L12702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12702) · [Before (L12702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12702)

```diff
-         }, EM, ZM), (0, wT.e)(TT, null, rc, {
+         }, zl, Sl), (0, vq.f)(qq, null, yg, {
```

#### 1018. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12715` → after: `L12715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12715) · [Before (L12715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12715)

```diff
-         }, uM, XM), (0, wT.e)(TT, null, Pc, {
+         }, pl, Gl), (0, vq.f)(qq, null, tg, {
```

#### 1019. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12728` → after: `L12728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12728) · [Before (L12728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12728)

```diff
-         }, dM, LM), (0, wT.e)(TT, null, wc, {
+         }, Ll, Jl), (0, vq.f)(qq, null, rg, {
```

#### 1020. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12741` → after: `L12741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12741) · [Before (L12741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12741)

```diff
-         }, RM, gM), (0, wT.e)(TT, null, mc, {
+         }, kl, Rl), (0, vq.f)(qq, null, vg, {
```

#### 1021. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12754` → after: `L12754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12754) · [Before (L12754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12754)

```diff
-         }, UM, YM), (0, wT.e)(TT, null, bc, {
+         }, Ul, Fl), (0, vq.f)(qq, null, hg, {
```

#### 1022. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12767` → after: `L12767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12767) · [Before (L12767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12767)

```diff
-         }, BM, WM), (0, wT.e)(TT, null, zc, {
+         }, sl, Xl), (0, vq.f)(qq, null, ng, {
```

#### 1023. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12780` → after: `L12780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12780) · [Before (L12780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12780)

```diff
-         }, nM, pM), (0, wT.e)(TT, null, Jc, {
+         }, wl, Kl), (0, vq.f)(qq, null, bg, {
```

#### 1024. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12793` → after: `L12793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12793) · [Before (L12793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12793)

```diff
-         }, iM, qM), (0, wT.e)(TT, null, oc, {
+         }, Cl, Il), (0, vq.f)(qq, null, ig, {
```

#### 1025. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12806` → after: `L12806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12806) · [Before (L12806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12806)

```diff
-         }, sM, TK), (0, wT.e)(TT, null, Hc, {
+         }, el, Dl), (0, vq.f)(qq, null, Zg, {
```

#### 1026. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12819` → after: `L12819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12819) · [Before (L12819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12819)

```diff
-         }, kK, cK), (0, wT.e)(TT, null, ec, {
+         }, qO, EO), (0, vq.f)(qq, null, fg, {
```

#### 1027. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12832` → after: `L12832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12832) · [Before (L12832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12832)

```diff
-         }, lK, MK), (0, wT.e)(TT, null, Gc, {
+         }, gO, YO), (0, vq.f)(qq, null, Mg, {
```

#### 1028. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12845` → after: `L12845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12845) · [Before (L12845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12845)

```diff
-         }, KK, OK), (0, wT.e)(TT, null, Vc, {
+         }, lO, OO), (0, vq.f)(qq, null, Tg, {
```

#### 1029. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12858` → after: `L12858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12858) · [Before (L12858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12858)

```diff
-         }, yK, fK), (0, wT.e)(TT, null, Ec, {
+         }, mO, xO), (0, vq.f)(qq, null, zg, {
```

#### 1030. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12871` → after: `L12871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12871) · [Before (L12871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12871)

```diff
-         }, xK, IK), (0, wT.e)(TT, null, Zc, {
+         }, AO, cO), (0, vq.f)(qq, null, Sg, {
```

#### 1031. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12884` → after: `L12884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12884) · [Before (L12884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12884)

```diff
-         }, AK, CK), (0, wT.e)(TT, null, uc, {
+         }, uO, BO), (0, vq.f)(qq, null, pg, {
```

#### 1032. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12897` → after: `L12897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12897) · [Before (L12897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12897)

```diff
-         }, jK, vK), (0, wT.e)(TT, null, Xc, {
+         }, WO, NO), (0, vq.f)(qq, null, Gg, {
```

#### 1033. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12923` → after: `L12923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12923) · [Before (L12923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12923)

```diff
-       return cT.translucencyIntensityTexture ? lT = cT.translucencyIntensityTexture : cT.thicknessTexture && cT.useMaskFromThicknessTexture && (lT = cT.thicknessTexture), lT && !cT.useGltfStyleTextures ? (bT.e.Warn(`${TT}: Translucency intensity texture is not supported when useG … [truncated]
+       return gq.translucencyIntensityTexture ? Yq = gq.translucencyIntensityTexture : gq.thicknessTexture && gq.useMaskFromThicknessTexture && (Yq = gq.thicknessTexture), Yq && !gq.useGltfStyleTextures ? (nq.b.Warn(`${qq}: Translucency intensity texture is not supported when useG … [truncated]
```

#### 1034. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12954` → after: `L12954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L12954) · [Before (L12954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L12954)

```diff
-               yT = !lT.translucencyColor || lT.translucencyColor.equalsFloats(1, 1, 1) ? void 0 : lT.translucencyColor.acT(),
+               xq = !Yq.translucencyColor || Yq.translucencyColor.equalsFloats(1, 1, 1) ? void 0 : Yq.translucencyColor.bYq(),
```

#### 1035. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13020` → after: `L13020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L13020) · [Before (L13020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L13020)

```diff
-             MT = Math.max(...lT.acT());
+             lq = Math.max(...Yq.bYq());
```

#### 1036. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13022` → after: `L13022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L13022) · [Before (L13022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L13022)

```diff
-             kT.emissiveFactor = lT.scale(1 / MT).acT(), this._wasUsed = !0;
+             Eq.emissiveFactor = Yq.scale(1 / lq).bYq(), this._wasUsed = !0;
```

#### 1037. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13027` → after: `L13027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L13027) · [Before (L13027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L13027)

```diff
-           } else kT.emissiveFactor = lT.acT();
+           } else Eq.emissiveFactor = Yq.bYq();
```

#### 1038. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13150` → after: `L13150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L13150) · [Before (L13150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L13150)

```diff
-               sheenColorFactor: cT.sheen.color.acT(),
+               sheenColorFactor: gq.sheen.color.bYq(),
```

#### 1039. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13168-L13169` → after: `L13168-L13169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13168-L13169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L13168-L13169) · [Before (L13168-L13169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L13168-L13169)

```diff
-       const cT = new JT.f(kT.name, kT.NJ());
-       return cT._texture = TT, cT.coordinatesIndex = kT.coordinatesIndex, kT instanceof JT.f && (cT.uOffset = kT.uOffset, cT.vOffset = kT.vOffset, cT.uScale = kT.uScale, cT.vScale = kT.vScale, cT.wAng = kT.wAng), cT.wrapU = kT.wrapU, cT.wrapV = kT.wrapV, cT
+       const gq = new iq.d(Eq.name, Eq.ZJ());
+       return gq._texture = qq, gq.coordinatesIndex = Eq.coordinatesIndex, Eq instanceof iq.d && (gq.uOffset = Eq.uOffset, gq.vOffset = Eq.vOffset, gq.uScale = Eq.uScale, gq.vScale = Eq.vScale, gq.wAng = Eq.wAng), gq.wrapU = Eq.wrapU, gq.wrapV = Eq.wrapV, gq
```

#### 1040. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13199` → after: `L13199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L13199) · [Before (L13199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L13199)

```diff
-                 return `FuzzColor_${cT}_FuzzRoughness_${lT&&lT.getInternalTexture()?lT.getInternalTexture().uniqueId:"NoFuzzRoughness"}`
+                 return `FuzzColor_${gq}_FuzzRoughness_${Yq&&Yq.getInternalTexture()?Yq.getInternalTexture().uniqueId:"NoFuzzRoughness"}`
```

#### 1041. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13203` → after: `L13203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L13203) · [Before (L13203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L13203)

```diff
-                   const kT = TT.NJ(),
+                   const Eq = qq.ZJ(),
```

#### 1042. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13224` → after: `L13224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L13224) · [Before (L13224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L13224)

```diff
-               fuzzColorFactor: cT.fuzzColor.acT(),
+               fuzzColorFactor: gq.fuzzColor.bYq(),
```

#### 1043. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13269` → after: `L13269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L13269) · [Before (L13269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L13269)

```diff
-                 specularColorFactor: cT.metallicReflectanceColor.equalsFloats(1, 1, 1) ? void 0 : cT.metallicReflectanceColor.acT(),
+                 specularColorFactor: gq.metallicReflectanceColor.equalsFloats(1, 1, 1) ? void 0 : gq.metallicReflectanceColor.bYq(),
```

#### 1044. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13278` → after: `L13278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L13278) · [Before (L13278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L13278)

```diff
-               yT = cT.specularColor.equalsFloats(1, 1, 1) ? void 0 : cT.specularColor.acT();
+               xq = gq.specularColor.equalsFloats(1, 1, 1) ? void 0 : gq.specularColor.bYq();
```

#### 1045. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13340` → after: `L13340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L13340) · [Before (L13340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L13340)

```diff
-             } else bT.e.Warn(`${TT}: Exporting a subsurface refraction intensity texture without \`useGltfStyleTextures\` is not supported`);
+             } else nq.b.Warn(`${qq}: Exporting a subsurface refraction intensity texture without \`useGltfStyleTextures\` is not supported`);
```

#### 1046. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13356` → after: `L13356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L13356) · [Before (L13356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L13356)

```diff
-           if (0 == cT.transmissionDepth && (!cT.transmissionColor.equals(YT.c.White()) || cT.transmissionColorTexture) && kT.pbrMetallicRoughness && (kT.pbrMetallicRoughness.baseColorFactor || (kT.pbrMetallicRoughness.baseColorFactor = [1, 1, 1, 1]), kT.pbrMetallicRoughness.baseC … [truncated]
+           if (0 == gq.transmissionDepth && (!gq.transmissionColor.equals(sq.d.White()) || gq.transmissionColorTexture) && Eq.pbrMetallicRoughness && (Eq.pbrMetallicRoughness.baseColorFactor || (Eq.pbrMetallicRoughness.baseColorFactor = [1, 1, 1, 1]), Eq.pbrMetallicRoughness.baseC … [truncated]
```

#### 1047. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13371` → after: `L13371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L13371) · [Before (L13371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L13371)

```diff
-     var FK = cT(39896);
+     var QO = gq(40010);
```

#### 1048. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13384` → after: `L13384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L13384) · [Before (L13384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L13384)

```diff
-           cT instanceof EM ? lT = cT.unlit : cT instanceof FK.f && (lT = cT.disableLighting), lT && (this._wasUsed = !0, null == kT.extensions && (kT.extensions = {}), kT.extensions[rK] = {}), TT(kT)
+           gq instanceof zl ? Yq = gq.unlit : gq instanceof QO.g && (Yq = gq.disableLighting), Yq && (this._wasUsed = !0, null == Eq.extensions && (Eq.extensions = {}), Eq.extensions[yO] = {}), qq(Eq)
```

#### 1049. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13413` → after: `L13413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L13413) · [Before (L13413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L13413)

```diff
-         return !(!kT.isRefractionEnabled && !kT.isTranslucencyEnabled) && (void 0 != kT.maximumThickness && 0 != kT.maximumThickness || void 0 != kT.tintColorAtDistance && kT.tintColorAtDistance != Number.POSITIVE_INFINITY || void 0 != kT.tintColor && kT.tintColor != YT.c.White() … [truncated]
+         return !(!Eq.isRefractionEnabled && !Eq.isTranslucencyEnabled) && (void 0 != Eq.maximumThickness && 0 != Eq.maximumThickness || void 0 != Eq.tintColorAtDistance && Eq.tintColorAtDistance != Number.POSITIVE_INFINITY || void 0 != Eq.tintColor && Eq.tintColor != sq.d.White() … [truncated]
```

#### 1050. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13427` → after: `L13427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L13427) · [Before (L13427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L13427)

```diff
-                 attenuationColor: TT.tintColor.equalsFloats(1, 1, 1) ? void 0 : TT.tintColor.acT()
+                 attenuationColor: qq.tintColor.equalsFloats(1, 1, 1) ? void 0 : qq.tintColor.bYq()
```

#### 1051. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13439` → after: `L13439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L13439) · [Before (L13439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L13439)

```diff
-               const yT = YT.c.White().acT();
+               const xq = sq.d.White().bYq();
```

#### 1052. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13442-L13443` → after: `L13442-L13443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13442-L13443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L13442-L13443) · [Before (L13442-L13443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L13442-L13443)

```diff
-                 let kT = new uT.m(-Math.log(cT.transmissionColor.r) * TT, -Math.log(cT.transmissionColor.g) * TT, -Math.log(cT.transmissionColor.b) * TT);
-                 const lT = new uT.m(cT.transmissionScatter.r * TT, cT.transmissionScatter.g * TT, cT.transmissionScatter.b * TT),
+                 let Eq = new Gq.q(-Math.log(gq.transmissionColor.r) * qq, -Math.log(gq.transmissionColor.g) * qq, -Math.log(gq.transmissionColor.b) * qq);
+                 const Yq = new Gq.q(gq.transmissionScatter.r * qq, gq.transmissionScatter.g * qq, gq.transmissionScatter.b * qq),
```

#### 1053. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13450` → after: `L13450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L13450) · [Before (L13450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L13450)

```diff
-               const xT = YT.c.White().acT();
+               const cq = sq.d.White().bYq();
```

#### 1054. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13454-L13455` → after: `L13454-L13455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13454-L13455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L13454-L13455) · [Before (L13454-L13455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L13454-L13455)

```diff
-                   lT = new uT.m(kT.r, kT.g, kT.b).multiplyByFloats(TT, TT, TT),
-                   MT = new uT.m(1 / Math.max(lT.x, 1e-6), 1 / Math.max(lT.y, 1e-6), 1 / Math.max(lT.z, 1e-6));
+                   Yq = new Gq.q(Eq.r, Eq.g, Eq.b).multiplyByFloats(qq, qq, qq),
+                   lq = new Gq.q(1 / Math.max(Yq.x, 1e-6), 1 / Math.max(Yq.y, 1e-6), 1 / Math.max(Yq.z, 1e-6));
```

#### 1055. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13498` → after: `L13498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L13498) · [Before (L13498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L13498)

```diff
-         const kT = TT.transmissionWeight > 0 && !TT.geometryThinWalled && TT.transmissionDepth > 0 && !TT.transmissionScatter.equals(YT.c.Black()),
+         const Eq = qq.transmissionWeight > 0 && !qq.geometryThinWalled && qq.transmissionDepth > 0 && !qq.transmissionScatter.equals(sq.d.Black()),
```

#### 1056. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13506` → after: `L13506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L13506) · [Before (L13506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L13506)

```diff
-             let TT = uT.m.Zero(),
+             let qq = Gq.q.Zero(),
```

#### 1057. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13510-L13511` → after: `L13510-L13511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13510-L13511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L13510-L13511) · [Before (L13510-L13511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L13510-L13511)

```diff
-                 const kT = new uT.m(Math.sqrt(1 - TT.x), Math.sqrt(1 - TT.y), Math.sqrt(1 - TT.z)),
-                   cT = new uT.m(1, 1, 1),
+                 const Eq = new Gq.q(Math.sqrt(1 - qq.x), Math.sqrt(1 - qq.y), Math.sqrt(1 - qq.z)),
+                   gq = new Gq.q(1, 1, 1),
```

#### 1058. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13513-L13514` → after: `L13513-L13514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13513-L13514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L13513-L13514) · [Before (L13513-L13514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L13513-L13514)

```diff
-                   MT = cT.subtract(new uT.m(.139, .139, .139).multiplyInPlace(kT)),
-                   KT = cT.add(new uT.m(1.17, 1.17, 1.17).multiplyInPlace(kT));
+                   lq = gq.subtract(new Gq.q(.139, .139, .139).multiplyInPlace(Eq)),
+                   Oq = gq.add(new Gq.q(1.17, 1.17, 1.17).multiplyInPlace(Eq));
```

#### 1059. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13516` → after: `L13516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L13516) · [Before (L13516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L13516)

```diff
-               }(new uT.m(cT.transmissionScatter.r, cT.transmissionScatter.g, cT.transmissionScatter.b)), lT = cT.transmissionScatterAnisotropy
+               }(new Gq.q(gq.transmissionScatter.r, gq.transmissionScatter.g, gq.transmissionScatter.b)), Yq = gq.transmissionScatterAnisotropy
```

#### 1060. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13518` → after: `L13518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L13518) · [Before (L13518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L13518)

```diff
-             const MT = uT.m.Zero();
+             const lq = Gq.q.Zero();
```

#### 1061. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13527` → after: `L13527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L13527) · [Before (L13527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L13527)

```diff
-                 multiscatterColorFactor: TT.multiplyByFloats(xT, xT, xT).addInPlace(MT.multiplyByFloats(IT, IT, IT)).acT(),
+                 multiscatterColorFactor: qq.multiplyByFloats(cq, cq, cq).addInPlace(lq.multiplyByFloats(uq, uq, uq)).bYq(),
```

#### 1062. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13618` → after: `L13618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L13618) · [Before (L13618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L13618)

```diff
-         if (cT.NJ() || Pk.h.Warn(`${TT}: "scene" is not defined for Babylon texture ${cT.name}!`), (0 !== cT.uAng || 0 !== cT.vAng) && (Pk.h.Warn(`${TT}: Texture ${cT.name} with rotation in the u or v axis is not supported in glTF.`), 0 !== cT.uRotationCenter || 0 !== cT.vRotatio … [truncated]
+         if (gq.ZJ() || rE.f.Warn(`${qq}: "scene" is not defined for Babylon texture ${gq.name}!`), (0 !== gq.uAng || 0 !== gq.vAng) && (rE.f.Warn(`${qq}: Texture ${gq.name} with rotation in the u or v axis is not supported in glTF.`), 0 !== gq.uRotationCenter || 0 !== gq.vRotatio … [truncated]
```

#### 1063. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13623-L13624` → after: `L13623-L13624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13623-L13624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L13623-L13624) · [Before (L13623-L13624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L13623-L13624)

```diff
-             if (cT.homogeneousRotationInUVTransform && cT.uScale !== cT.vScale) return void Pk.h.Warn(`${TT}: Texture ${cT.name} with homogenousRotationInUVTransform, non-uniform scaling, and non-zero rotation cannot be exported with ${UK}.`);
-             Pk.h.Warn(`${TT}: Texture ${cT.name} with non-origin rotation center will be exported using an adjusted offset with ${UK}.`), lT.offset = function(TT) {
+             if (gq.homogeneousRotationInUVTransform && gq.uScale !== gq.vScale) return void rE.f.Warn(`${qq}: Texture ${gq.name} with homogenousRotationInUVTransform, non-uniform scaling, and non-zero rotation cannot be exported with ${UO}.`);
+             rE.f.Warn(`${qq}: Texture ${gq.name} with non-origin rotation center will be exported using an adjusted offset with ${UO}.`), Yq.offset = function(qq) {
```

#### 1064. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13648` → after: `L13648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L13648) · [Before (L13648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L13648)

```diff
-     var nK = cT(39666);
+     var wO = gq(39799);
```

#### 1065. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13663` → after: `L13663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L13663) · [Before (L13663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L13663)

```diff
-         "image/ktx2" === (MT.mimeType || (0, nK.f)(MT.uri)) && (cT.source = void 0, cT.extensions || (cT.extensions = {}), cT.extensions[pK] = {
+         "image/ktx2" === (lq.mimeType || (0, wO.m)(lq.uri)) && (gq.source = void 0, gq.extensions || (gq.extensions = {}), gq.extensions[KO] = {
```

#### 1066. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13688` → after: `L13688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L13688) · [Before (L13688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L13688)

```diff
-         "image/webp" === (MT.mimeType || (0, nK.f)(MT.uri)) && (cT.source = void 0, cT.extensions || (cT.extensions = {}), cT.extensions[TO] = {
+         "image/webp" === (lq.mimeType || (0, wO.m)(lq.uri)) && (gq.source = void 0, gq.extensions || (gq.extensions = {}), gq.extensions[DO] = {
```

#### 1067. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13713` → after: `L13713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L13713) · [Before (L13713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L13713)

```diff
-         "image/avif" === (MT.mimeType || (0, nK.f)(MT.uri)) && (cT.source = void 0, cT.extensions || (cT.extensions = {}), cT.extensions[MO] = {
+         "image/avif" === (lq.mimeType || (0, wO.m)(lq.uri)) && (gq.source = void 0, gq.extensions || (gq.extensions = {}), gq.extensions[Ym] = {
```

#### 1068. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13735` → after: `L13735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L13735) · [Before (L13735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L13735)

```diff
-               KT = [new lT.Fv(kT[MT[0]], kT[MT[0] + 2], kT[MT[0] + 1]), new lT.Fv(kT[MT[1]], kT[MT[1] + 2], kT[MT[1] + 1]), new lT.Fv(kT[MT[2]], kT[MT[2] + 2], kT[MT[2] + 1])],
+               Oq = [new Yq.Na(Eq[lq[0]], Eq[lq[0] + 2], Eq[lq[0] + 1]), new Yq.Na(Eq[lq[1]], Eq[lq[1] + 2], Eq[lq[1] + 1]), new Yq.Na(Eq[lq[2]], Eq[lq[2] + 2], Eq[lq[2] + 1])],
```

#### 1069. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13740` → after: `L13740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L13740) · [Before (L13740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L13740)

```diff
-               n: lT.Fv.Cross(yT, OT).normalize()
+               n: Yq.Na.Cross(xq, mq).normalize()
```

#### 1070. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13752-L13753` → after: `L13752-L13753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13752-L13753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L13752-L13753) · [Before (L13752-L13753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L13752-L13753)

```diff
-               TT instanceof jT.e && (kT = TT.hlT);
-               const cT = kT.getVerticesData(IT.i.PositionKind, !0, !0);
+               qq instanceof Nq.c && (Eq = qq.Plq);
+               const gq = Eq.getVerticesData(uq.f.PositionKind, !0, !0);
```

#### 1071. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13755` → after: `L13755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L13755) · [Before (L13755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L13755)

```diff
-               const MT = lT.Fv.Zero();
+               const lq = Yq.Na.Zero();
```

#### 1072. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13757` → after: `L13757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L13757) · [Before (L13757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L13757)

```diff
-               for (KT = 0; KT < cT.length; KT += 3) lT.Fv.TransformCoordinatesFromFloatsToRef(cT[KT], cT[KT + 1], cT[KT + 2], TT.computeWorldMatrix(!0), MT).toArray(cT, KT);
+               for (Oq = 0; Oq < gq.length; Oq += 3) Yq.Na.TransformCoordinatesFromFloatsToRef(gq[Oq], gq[Oq + 1], gq[Oq + 2], qq.computeWorldMatrix(!0), lq).toArray(gq, Oq);
```

#### 1073. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13760` → after: `L13760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L13760) · [Before (L13760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L13760)

```diff
-             return TT.getVerticesData(IT.i.PositionKind) || []
+             return qq.getVerticesData(uq.f.PositionKind) || []
```

#### 1074. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13768` → after: `L13768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L13768) · [Before (L13768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L13768)

```diff
-             const kT = TT[cT].FcT();
+             const Eq = qq[gq].iYq();
```

#### 1075. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13778` → after: `L13778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L13778) · [Before (L13778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L13778)

```diff
-             yT = kT.FcT() || [];
+             xq = Eq.iYq() || [];
```

#### 1076. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13803` → after: `L13803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L13803) · [Before (L13803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L13803)

```diff
-         MT.push(`(${OT.toPrecision(kT.precision)}, ${yT.toPrecision(kT.precision)}, ${fT.toPrecision(kT.precision)})`)
+         lq.push(`(${mq.toPrecision(Eq.precision)}, ${xq.toPrecision(Eq.precision)}, ${Aq.toPrecision(Eq.precision)})`)
```

#### 1077. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13813` → after: `L13813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L13813) · [Before (L13813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L13813)

```diff
-         cT.push(`(${MT.toPrecision(kT.precision)}, ${(1-KT).toPrecision(kT.precision)})`)
+         gq.push(`(${lq.toPrecision(Eq.precision)}, ${(1-Oq).toPrecision(Eq.precision)})`)
```

#### 1078. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13819-L13821` → after: `L13819-L13821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13819-L13821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L13819-L13821) · [Before (L13819-L13821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L13819-L13821)

```diff
-       const MT = TT.getVerticesData(IT.i.PositionKind),
-         KT = TT.getVerticesData(IT.i.NormalKind);
-       if (MT && KT) return `\n\tdef Mesh "Geometry"\n\t{\n        uniform token orientation = "${cT}"\n\t\tint[] faceVertexCounts = [${function(TT){const kT=TT.FcT()?.length?TT.getTotalIndices():TT.getTotalVertices();return Array(kT/3).fill(3).join(", ")}(TT)}]\n\t\tint[] faceVer … [truncated]
+       const lq = qq.getVerticesData(uq.f.PositionKind),
+         Oq = qq.getVerticesData(uq.f.NormalKind);
+       if (lq && Oq) return `\n\tdef Mesh "Geometry"\n\t{\n        uniform token orientation = "${gq}"\n\t\tint[] faceVertexCounts = [${function(qq){const Eq=qq.iYq()?.length?qq.getTotalIndices():qq.getTotalVertices();return Array(Eq/3).fill(3).join(", ")}(qq)}]\n\t\tint[] faceVer … [truncated]
```

#### 1079. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13825` → after: `L13825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L13825) · [Before (L13825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L13825)

```diff
-         n\ t\ t)`),cT}(TT,kT)}\n\t\tuniform token subdivisionScheme = "none"\n\t}\n`
+         n\ t\ t)`),gq}(qq,Eq)}\n\t\tuniform token subdivisionScheme = "none"\n\t}\n`
```

#### 1080. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13829` → after: `L13829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L13829) · [Before (L13829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L13829)

```diff
-       return `\n        def "Geometry"\n        {\n        ${AO(TT,kT,cT,lT)}\n        }\n        `
+       return `\n        def "Geometry"\n        {\n        ${um(qq,Eq,gq,Yq)}\n        }\n        `
```

#### 1081. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13839` → after: `L13839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L13839) · [Before (L13839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L13839)

```diff
-       return `( ${tO(kT,0)}, ${tO(kT,4)}, ${tO(kT,8)}, ${tO(kT,12)} )`
+       return `( ${am(Eq,0)}, ${am(Eq,4)}, ${am(Eq,8)}, ${am(Eq,12)} )`
```

#### 1082. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13843` → after: `L13843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L13843) · [Before (L13843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L13843)

```diff
-       return `(${TT[kT+0]}, ${TT[kT+1]}, ${TT[kT+2]}, ${TT[kT+3]})`
+       return `(${qq[Eq+0]}, ${qq[Eq+1]}, ${qq[Eq+2]}, ${qq[Eq+3]})`
```

#### 1083. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13849` → after: `L13849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L13849) · [Before (L13849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L13849)

```diff
-       return `def Xform "${cT}" (\n\tprepend references = @./geometries/Geometry_${TT.geometry.uniqueId}.usda@</Geometry>\n\tprepend apiSchemas = ["MaterialBindingAPI"]\n)\n{\n\tmatrix4d xformOp:transform = ${lT}\n\tuniform token[] xformOpOrder = ["xformOp:transform"]\t\n\n    re … [truncated]
+       return `def Xform "${gq}" (\n\tprepend references = @./geometries/Geometry_${qq.geometry.uniqueId}.usda@</Geometry>\n\tprepend apiSchemas = ["MaterialBindingAPI"]\n)\n{\n\tmatrix4d xformOp:transform = ${Yq}\n\tuniform token[] xformOpOrder = ["xformOp:transform"]\t\n\n    re … [truncated]
```

#### 1084. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13854` → after: `L13854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L13854) · [Before (L13854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L13854)

```diff
-         case rT.e.TEXTURE_CLAMP_ADDRESSMODE:
+         case tq.c.TEXTURE_CLAMP_ADDRESSMODE:
```

#### 1085. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13856` → after: `L13856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L13856) · [Before (L13856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L13856)

```diff
-         case rT.e.TEXTURE_MIRROR_ADDRESSMODE:
+         case tq.c.TEXTURE_MIRROR_ADDRESSMODE:
```

#### 1086. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13858` → after: `L13858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L13858) · [Before (L13858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L13858)

```diff
-         case rT.e.TEXTURE_WRAP_ADDRESSMODE:
+         case tq.c.TEXTURE_WRAP_ADDRESSMODE:
```

#### 1087. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13865` → after: `L13865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L13865) · [Before (L13865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L13865)

```diff
-       return `(${TT.x}, ${TT.y})`
+       return `(${qq.x}, ${qq.y})`
```

#### 1088. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13869` → after: `L13869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L13869) · [Before (L13869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L13869)

```diff
-       return `(${TT.r}, ${TT.g}, ${TT.b})`
+       return `(${qq.r}, ${qq.g}, ${qq.b})`
```

#### 1089. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13878-L13879` → after: `L13878-L13879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13878-L13879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L13878-L13879) · [Before (L13878-L13879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L13878-L13879)

```diff
-         xT = TT.mimeType || (0, fT.e)(TT.getInternalTexture()?.url ?? ""),
-         IT = DO(xT) ? xT : "image/png",
+         cq = qq.mimeType || (0, Aq.d)(qq.getInternalTexture()?.url ?? ""),
+         uq = om(cq) ? cq : "image/png",
```

#### 1090. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13892` → after: `L13892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L13892) · [Before (L13892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L13892)

```diff
-       return vT.y = 1 - vT.y - jT.y, vT.x += hT * jT.x, vT.y += (1 - NT) * jT.y, `\n    def Shader "PrimvarReader_${cT}"\n    {\n        uniform token info:id = "UsdPrimvarReader_float2"\n        float2 inputs:fallback = (0.0, 0.0)\n        token inputs:varname = "${CT}"\n        … [truncated]
+       return aq.y = 1 - aq.y - Nq.y, aq.x += dq * Nq.x, aq.y += (1 - jq) * Nq.y, `\n    def Shader "PrimvarReader_${gq}"\n    {\n        uniform token info:id = "UsdPrimvarReader_float2"\n        float2 inputs:fallback = (0.0, 0.0)\n        token inputs:varname = "${Wq}"\n        … [truncated]
```

#### 1091. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13982` → after: `L13982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L13982) · [Before (L13982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L13982)

```diff
-       return null !== OT ? (MT.push(`${lT}color3f inputs:diffuseColor.connect = </Root/Materials/Material_${TT.uniqueId}/Texture_${OT.uniqueId}_diffuse.outputs:rgb>`), TT.needAlphaBlending() ? MT.push(`${lT}float inputs:opacity.connect = </Root/Materials/Material_${TT.uniqueId}/T … [truncated]
+       return null !== mq ? (lq.push(`${Yq}color3f inputs:diffuseColor.connect = </Root/Materials/Material_${qq.uniqueId}/Texture_${mq.uniqueId}_diffuse.outputs:rgb>`), qq.needAlphaBlending() ? lq.push(`${Yq}float inputs:opacity.connect = </Root/Materials/Material_${qq.uniqueId}/T … [truncated]
```

#### 1092. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13988` → after: `L13988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L13988) · [Before (L13988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L13988)

```diff
-         cT = TT.NJ().useRightHandedSystem;
+         gq = qq.ZJ().useRightHandedSystem;
```

#### 1093. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L13999` → after: `L13999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L13999) · [Before (L13999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L13999)

```diff
-       return kT.determinant() < 0 && MT.Tools.Warn(`Mesh ${TT.name} has a negative scale, which may look incorrect in destinations like QuickLook.`), {
+       return Eq.determinant() < 0 && lq.Tools.Warn(`Mesh ${qq.name} has a negative scale, which may look incorrect in destinations like QuickLook.`), {
```

#### 1094. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14022` → after: `L14022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L14022) · [Before (L14022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L14022)

```diff
-         return `def Xform "Root"\n    {\n        def Scope "Scenes" (\n            kind = "sceneLibrary"\n        )\n        {\n            def Xform "Scene" (\n                customData = {\n                    bool preliminary_collidesWithEnvironment = 0\n                    s … [truncated]
+         return `def Xform "Root"\n    {\n        def Scope "Scenes" (\n            kind = "sceneLibrary"\n        )\n        {\n            def Xform "Scene" (\n                customData = {\n                    bool preliminary_collidesWithEnvironment = 0\n                    s … [truncated]
```

#### 1095. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14048` → after: `L14048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L14048) · [Before (L14048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L14048)

```diff
-         if (TT.mode === rT.e.ORTHOGRAPHIC_CAMERA) return `def Camera "${cT}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${MT}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${TT.minZ.toPrecision(kT.precision)}, ${TT.maxZ.toPrecision(k … [truncated]
+         if (qq.mode === tq.c.ORTHOGRAPHIC_CAMERA) return `def Camera "${gq}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${lq}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${qq.minZ.toPrecision(Eq.precision)}, ${qq.maxZ.toPrecision(E … [truncated]
```

#### 1096. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14050` → after: `L14050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L14050) · [Before (L14050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L14050)

```diff
-           const lT = TT.Dv().getAspectRatio(TT),
+           const Yq = qq.Ba().getAspectRatio(qq),
```

#### 1097. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14052` → after: `L14052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L14052) · [Before (L14052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L14052)

```diff
-           return `def Camera "${cT}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${MT}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${TT.minZ.toPrecision(kT.precision)}, ${TT.maxZ.toPrecision(kT.precision)})\n\t\t\tfloat focalLength  … [truncated]
+           return `def Camera "${gq}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${lq}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${qq.minZ.toPrecision(Eq.precision)}, ${qq.maxZ.toPrecision(Eq.precision)})\n\t\t\tfloat focalLength  … [truncated]
```

#### 1098. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14062` → after: `L14062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L14062) · [Before (L14062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L14062)

```diff
-         return `\n    def "Materials"\n{\n${lT.join("")}\n}\n\n`
+         return `\n    def "Materials"\n{\n${Yq.join("")}\n}\n\n`
```

#### 1099. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14070` → after: `L14070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L14070) · [Before (L14070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L14070)

```diff
-         if (MT && DO(MT.mimeType) && MT.mimeType === cT) OT[`textures/Texture_${lT}.${kT}`] = new Uint8Array(MT.data);
+         if (lq && om(lq.mimeType) && lq.mimeType === gq) mq[`textures/Texture_${Yq}.${Eq}`] = new Uint8Array(lq.data);
```

#### 1100. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14073` → after: `L14073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L14073) · [Before (L14073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L14073)

```diff
-             KT = await (0, DT.c)(TT),
+             Oq = await (0, Pq.g)(qq),
```

#### 1101. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14075` → after: `L14075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L14075) · [Before (L14075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L14075)

```diff
-           OT[`textures/Texture_${lT}.${kT}`] = new Uint8Array(yT).slice()
+           mq[`textures/Texture_${Yq}.${Eq}`] = new Uint8Array(xq).slice()
```

#### 1102. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14098` → after: `L14098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L14098) · [Before (L14098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L14098)

```diff
-     var wO = cT(40718);
+     var rm = gq(40851);
```

#### 1103. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14118` → after: `L14118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L14118) · [Before (L14118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L14118)

```diff
-         return fT += "HIERARCHY\n", fT += this._ExportHierarchy(OT, 0), fT += "MOTION\n", fT += `Frames: ${yT}\n`, fT += `Frame Time: ${KT.toFixed(6)}\n`, fT += this._ExportMotionData(OT, yT, 0, lT), fT
+         return Aq += "HIERARCHY\n", Aq += this._ExportHierarchy(mq, 0), Aq += "MOTION\n", Aq += `Frames: ${xq}\n`, Aq += `Frame Time: ${Oq.toFixed(6)}\n`, Aq += this._ExportMotionData(mq, xq, 0, Yq), Aq
```

#### 1104. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14151` → after: `L14151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L14151) · [Before (L14151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L14151)

```diff
-             cT += `${lT}End Site\n`, cT += `${lT}{\n`;
+             gq += `${Yq}End Site\n`, gq += `${Yq}{\n`;
```

#### 1105. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14153` → after: `L14153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L14153) · [Before (L14153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L14153)

```diff
-             cT += `${lT}    OFFSET ${kT.x.toFixed(6)} ${kT.y.toFixed(6)} ${kT.z.toFixed(6)}\n`, cT += `${lT}}\n`
+             gq += `${Yq}    OFFSET ${Eq.x.toFixed(6)} ${Eq.y.toFixed(6)} ${Eq.z.toFixed(6)}\n`, gq += `${Yq}}\n`
```

#### 1106. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14155` → after: `L14155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L14155) · [Before (L14155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L14155)

```diff
-             cT += `${0===kT?"ROOT":`${lT}JOINT`} ${TT.name}\n`, cT += `${lT}{\n`;
+             gq += `${0===Eq?"ROOT":`${Yq}JOINT`} ${qq.name}\n`, gq += `${Yq}{\n`;
```

#### 1107. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14157` → after: `L14157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L14157) · [Before (L14157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L14157)

```diff
-             cT += `${lT}    OFFSET ${KT.x.toFixed(6)} ${KT.y.toFixed(6)} ${KT.z.toFixed(6)}\n`;
+             gq += `${Yq}    OFFSET ${Oq.x.toFixed(6)} ${Oq.y.toFixed(6)} ${Oq.z.toFixed(6)}\n`;
```

#### 1108. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14159` → after: `L14159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L14159) · [Before (L14159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L14159)

```diff
-             MT.hasPositionChannels && OT.push("Xposition", "Yposition", "Zposition"), MT.hasRotationChannels && OT.push("Zrotation", "Xrotation", "Yrotation"), OT.length > 0 && (cT += `${lT}    CHANNELS ${OT.length} ${OT.join(" ")}\n`), MT.children.length > 0 && (cT += this._Expo … [truncated]
+             lq.hasPositionChannels && mq.push("Xposition", "Yposition", "Zposition"), lq.hasRotationChannels && mq.push("Zrotation", "Xrotation", "Yrotation"), mq.length > 0 && (gq += `${Yq}    CHANNELS ${mq.length} ${mq.join(" ")}\n`), lq.children.length > 0 && (gq += this._Expo … [truncated]
```

#### 1109. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14172` → after: `L14172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L14172) · [Before (L14172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L14172)

```diff
-           return lT.Fv.Zero()
+           return Yq.Na.Zero()
```

#### 1110. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14199` → after: `L14199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L14199) · [Before (L14199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L14199)

```diff
-         if (0 === TT.length) return lT.Fv.Zero();
+         if (0 === qq.length) return Yq.Na.Zero();
```

#### 1111. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14212` → after: `L14212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L14212) · [Before (L14212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L14212)

```diff
-         return fT > Gc.b ? (KT = Math.atan2(cT[6], cT[10]), OT = Math.atan2(-cT[2], fT), yT = Math.atan2(cT[1], cT[0])) : (KT = Math.atan2(-cT[9], cT[5]), OT = Math.atan2(-cT[2], fT), yT = 0), new lT.Fv(MT.Tools.ToDegrees(KT), MT.Tools.ToDegrees(OT), MT.Tools.ToDegrees(yT))
+         return Aq > Mg.c ? (Oq = Math.atan2(gq[6], gq[10]), mq = Math.atan2(-gq[2], Aq), xq = Math.atan2(gq[1], gq[0])) : (Oq = Math.atan2(-gq[9], gq[5]), mq = Math.atan2(-gq[2], Aq), xq = 0), new Yq.Na(lq.Tools.ToDegrees(Oq), lq.Tools.ToDegrees(mq), lq.Tools.ToDegrees(xq))
```

#### 1112. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14257` → after: `L14257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L14257) · [Before (L14257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L14257)

```diff
-       const kT = "function" === typeof TT ? TT : TT?.constructor,
+       const Eq = "function" === typeof qq ? qq : qq?.constructor,
```

#### 1113. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14299` → after: `L14299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L14299) · [Before (L14299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L14299)

```diff
-       return kT ? `${kT}:${TT}` : TT
+       return Eq ? `${Eq}:${qq}` : qq
```

#### 1114. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14336` → after: `L14336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L14336) · [Before (L14336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L14336)

```diff
-         if (!Number.isFinite(TT)) throw new Error(`Cannot format non-finite number: ${TT}`);
+         if (!Number.isFinite(qq)) throw new Error(`Cannot format non-finite number: ${qq}`);
```

#### 1115. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14346` → after: `L14346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L14346) · [Before (L14346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L14346)

```diff
-         if (lT && void 0 === kT.fixedDecimals && (xT = xT.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "").replace(/\.$/, "")), /[eE]/.test(xT)) throw new Error(`Scientific notation not allowed in XML output: ${xT}`);
+         if (Yq && void 0 === Eq.fixedDecimals && (cq = cq.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "").replace(/\.$/, "")), /[eE]/.test(cq)) throw new Error(`Scientific notation not allowed in XML output: ${cq}`);
```

#### 1116. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14509` → after: `L14509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L14509) · [Before (L14509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L14509)

```diff
-         if (lT.closed) throw new Error(`att() after start tag closed for <${lT.name}>`);
+         if (Yq.closed) throw new Error(`att() after start tag closed for <${Yq.name}>`);
```

#### 1117. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14512` → after: `L14512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L14512) · [Before (L14512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L14512)

```diff
-           else if (TT) this._registerNamespace(lT, kT, cT), this._writeAttStr(`${TT}:${kT}`, cT);
+           else if (qq) this._registerNamespace(Yq, Eq, gq), this._writeAttStr(`${qq}:${Eq}`, gq);
```

#### 1118. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14521` → after: `L14521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L14521) · [Before (L14521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L14521)

```diff
-           MT = `${this._ensurePrefixDeclared(lT,TT)}:${kT}`
+           lq = `${this._ensurePrefixDeclared(Yq,qq)}:${Eq}`
```

#### 1119. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14530` → after: `L14530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L14530) · [Before (L14530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L14530)

```diff
-           lT = `${this._lookupPrefix(TT)??TT}:${kT}`
+           Yq = `${this._lookupPrefix(qq)??qq}:${Eq}`
```

#### 1120. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14581` → after: `L14581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L14581) · [Before (L14581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L14581)

```diff
-         if (kT === qO.Xml || kT === qO.Xmlns) throw new Error(`reserved prefix '${kT}'`);
+         if (Eq === em.Xml || Eq === em.Xmlns) throw new Error(`reserved prefix '${Eq}'`);
```

#### 1121. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14583` → after: `L14583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L14583) · [Before (L14583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L14583)

```diff
-         if (lT && lT !== cT) throw new Error(`prefix '${kT}' already bound to a different namespace`);
+         if (Yq && Yq !== gq) throw new Error(`prefix '${Eq}' already bound to a different namespace`);
```

#### 1122. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14596` → after: `L14596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L14596) · [Before (L14596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L14596)

```diff
-         if (TT.closed) throw new Error(`can not declare namespace after start tag closed for <${TT.name}>`);
+         if (qq.closed) throw new Error(`can not declare namespace after start tag closed for <${qq.name}>`);
```

#### 1123. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14598` → after: `L14598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L14598) · [Before (L14598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L14598)

```diff
-         return this._writeAttStr(`${qO.Xmlns}:${lT}`, kT), this._registerNamespace(TT, lT, kT), lT
+         return this._writeAttStr(`${em.Xmlns}:${Yq}`, Eq), this._registerNamespace(qq, Yq, Eq), Yq
```

#### 1124. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14692` → after: `L14692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L14692) · [Before (L14692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L14692)

```diff
-         return (0, wT.l)(kT, "ThreeMfContentTypes"), (() => {
+         return (0, vq.j)(Eq, "ThreeMfContentTypes"), (() => {
```

#### 1125. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14694` → after: `L14694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L14694) · [Before (L14694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L14694)

```diff
-           (0, wT.e)(null, TT = {
+           (0, vq.f)(null, qq = {
```

#### 1126. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14705` → after: `L14705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L14705) · [Before (L14705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L14705)

```diff
-           }), (0, wT.h)(kT, lT)
+           }), (0, vq.i)(Eq, Yq)
```

#### 1127. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14720` → after: `L14720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L14720) · [Before (L14720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L14720)

```diff
-             this.ext = (0, wT.h)(this, OT, void 0), this.ct = ((0, wT.h)(this, yT), (0, wT.h)(this, fT, void 0)), (0, wT.h)(this, xT), this.ext = TT, this.ct = kT
+             this.ext = (0, vq.i)(this, mq, void 0), this.ct = ((0, vq.i)(this, xq), (0, vq.i)(this, Aq, void 0)), (0, vq.i)(this, cq), this.ext = qq, this.ct = Eq
```

#### 1128. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14723` → after: `L14723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L14723) · [Before (L14723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L14723)

```diff
-         return (0, wT.l)(kT, "ThreeMfContentType"), (() => {
+         return (0, vq.j)(Eq, "ThreeMfContentType"), (() => {
```

#### 1129. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14735` → after: `L14735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L14735) · [Before (L14735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L14735)

```diff
-           })], (0, wT.e)(null, null, cT, {
+           })], (0, vq.f)(null, null, gq, {
```

#### 1130. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14748` → after: `L14748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L14748) · [Before (L14748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L14748)

```diff
-           }, OT, yT), (0, wT.e)(null, null, lT, {
+           }, mq, xq), (0, vq.f)(null, null, Yq, {
```

#### 1131. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14761` → after: `L14761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L14761) · [Before (L14761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L14761)

```diff
-           }, fT, xT), (0, wT.e)(null, TT = {
+           }, Aq, cq), (0, vq.f)(null, qq = {
```

#### 1132. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14772` → after: `L14772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L14772) · [Before (L14772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L14772)

```diff
-           }), (0, wT.h)(kT, KT)
+           }), (0, vq.i)(Eq, Oq)
```

#### 1133. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14786` → after: `L14786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L14786) · [Before (L14786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L14786)

```diff
-         return (0, wT.l)(kT, "ThreeMfRelationships"), (() => {
+         return (0, vq.j)(Eq, "ThreeMfRelationships"), (() => {
```

#### 1134. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14788` → after: `L14788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L14788) · [Before (L14788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L14788)

```diff
-           (0, wT.e)(null, TT = {
+           (0, vq.f)(null, qq = {
```

#### 1135. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14799` → after: `L14799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L14799) · [Before (L14799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L14799)

```diff
-           }), (0, wT.h)(kT, lT)
+           }), (0, vq.i)(Eq, Yq)
```

#### 1136. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14816` → after: `L14816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L14816) · [Before (L14816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L14816)

```diff
-             this.id = (0, wT.h)(this, yT, void 0), this.type = ((0, wT.h)(this, fT), (0, wT.h)(this, xT, void 0)), this.target = ((0, wT.h)(this, IT), (0, wT.h)(this, AT, void 0)), (0, wT.h)(this, CT), this.id = TT, this.type = kT, this.target = cT
+             this.id = (0, vq.i)(this, xq, void 0), this.type = ((0, vq.i)(this, Aq), (0, vq.i)(this, cq, void 0)), this.target = ((0, vq.i)(this, uq), (0, vq.i)(this, Bq, void 0)), (0, vq.i)(this, Wq), this.id = qq, this.type = Eq, this.target = gq
```

#### 1137. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14819` → after: `L14819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L14819) · [Before (L14819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L14819)

```diff
-         return (0, wT.l)(kT, "ThreeMfRelationship"), (() => {
+         return (0, vq.j)(Eq, "ThreeMfRelationship"), (() => {
```

#### 1138. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14827` → after: `L14827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L14827) · [Before (L14827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L14827)

```diff
-           })], (0, wT.e)(null, null, cT, {
+           })], (0, vq.f)(null, null, gq, {
```

#### 1139. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14840` → after: `L14840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L14840) · [Before (L14840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L14840)

```diff
-           }, yT, fT), (0, wT.e)(null, null, lT, {
+           }, xq, Aq), (0, vq.f)(null, null, Yq, {
```

#### 1140. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14853` → after: `L14853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L14853) · [Before (L14853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L14853)

```diff
-           }, xT, IT), (0, wT.e)(null, null, MT, {
+           }, cq, uq), (0, vq.f)(null, null, lq, {
```

#### 1141. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14866` → after: `L14866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L14866) · [Before (L14866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L14866)

```diff
-           }, AT, CT), (0, wT.e)(null, TT = {
+           }, Bq, Wq), (0, vq.f)(null, qq = {
```

#### 1142. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14877` → after: `L14877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L14877) · [Before (L14877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L14877)

```diff
-           }), (0, wT.h)(kT, OT)
+           }), (0, vq.i)(Eq, mq)
```

#### 1143. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14918` → after: `L14918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L14918) · [Before (L14918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L14918)

```diff
-             this.unit = (0, wT.h)(this, yT, Ky.millimeter), this.requiredextensions = ((0, wT.h)(this, fT), (0, wT.h)(this, xT, void 0)), this.recommendedextensions = ((0, wT.h)(this, IT), (0, wT.h)(this, AT, void 0)), this.metadata = (0, wT.h)(this, CT)
+             this.unit = (0, vq.i)(this, xq, Ox.millimeter), this.requiredextensions = ((0, vq.i)(this, Aq), (0, vq.i)(this, cq, void 0)), this.recommendedextensions = ((0, vq.i)(this, uq), (0, vq.i)(this, Bq, void 0)), this.metadata = (0, vq.i)(this, Wq)
```

#### 1144. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14921` → after: `L14921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L14921) · [Before (L14921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L14921)

```diff
-         return (0, wT.l)(kT, "ThreeMfModel"), (() => {
+         return (0, vq.j)(Eq, "ThreeMfModel"), (() => {
```

#### 1145. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14929` → after: `L14929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L14929) · [Before (L14929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L14929)

```diff
-           })], (0, wT.e)(null, null, cT, {
+           })], (0, vq.f)(null, null, gq, {
```

#### 1146. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14942` → after: `L14942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L14942) · [Before (L14942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L14942)

```diff
-           }, yT, fT), (0, wT.e)(null, null, lT, {
+           }, xq, Aq), (0, vq.f)(null, null, Yq, {
```

#### 1147. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14955` → after: `L14955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L14955) · [Before (L14955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L14955)

```diff
-           }, xT, IT), (0, wT.e)(null, null, MT, {
+           }, cq, uq), (0, vq.f)(null, null, lq, {
```

#### 1148. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14968` → after: `L14968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L14968) · [Before (L14968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L14968)

```diff
-           }, AT, CT), (0, wT.e)(null, TT = {
+           }, Bq, Wq), (0, vq.f)(null, qq = {
```

#### 1149. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14980` → after: `L14980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L14980) · [Before (L14980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L14980)

```diff
-         })(), kT.KnownMeta = ["Title", "Designer", "Description", "Copyright", "LicenseTerms", "Rating", "CreationDate", "ModificationDate", "Application"], (0, wT.h)(kT, OT), kT
+         })(), Eq.KnownMeta = ["Title", "Designer", "Description", "Copyright", "LicenseTerms", "Rating", "CreationDate", "ModificationDate", "Application"], (0, vq.i)(Eq, mq), Eq
```

#### 1150. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14996` → after: `L14996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L14996) · [Before (L14996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L14996)

```diff
-             this.name = (0, wT.h)(this, yT, void 0), this.preserve = ((0, wT.h)(this, fT), (0, wT.h)(this, xT, void 0)), this.type = ((0, wT.h)(this, IT), (0, wT.h)(this, AT, void 0)), this.value = (0, wT.h)(this, CT), this.name = TT, this.value = kT, this.preserve = cT, this.typ … [truncated]
+             this.name = (0, vq.i)(this, xq, void 0), this.preserve = ((0, vq.i)(this, Aq), (0, vq.i)(this, cq, void 0)), this.type = ((0, vq.i)(this, uq), (0, vq.i)(this, Bq, void 0)), this.value = (0, vq.i)(this, Wq), this.name = qq, this.value = Eq, this.preserve = gq, this.typ … [truncated]
```

#### 1151. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L14999` → after: `L14999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L14999) · [Before (L14999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L14999)

```diff
-         return (0, wT.l)(kT, "ThreeMfMeta"), (() => {
+         return (0, vq.j)(Eq, "ThreeMfMeta"), (() => {
```

#### 1152. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L15007` → after: `L15007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L15007) · [Before (L15007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L15007)

```diff
-           })], (0, wT.e)(null, null, cT, {
+           })], (0, vq.f)(null, null, gq, {
```

#### 1153. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L15020` → after: `L15020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L15020) · [Before (L15020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L15020)

```diff
-           }, yT, fT), (0, wT.e)(null, null, lT, {
+           }, xq, Aq), (0, vq.f)(null, null, Yq, {
```

#### 1154. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L15033` → after: `L15033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L15033) · [Before (L15033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L15033)

```diff
-           }, xT, IT), (0, wT.e)(null, null, MT, {
+           }, cq, uq), (0, vq.f)(null, null, lq, {
```

#### 1155. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L15046` → after: `L15046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L15046) · [Before (L15046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L15046)

```diff
-           }, AT, CT), (0, wT.e)(null, TT = {
+           }, Bq, Wq), (0, vq.f)(null, qq = {
```

#### 1156. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L15057` → after: `L15057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L15057) · [Before (L15057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L15057)

```diff
-           }), (0, wT.h)(kT, OT)
+           }), (0, vq.i)(Eq, mq)
```

#### 1157. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L15071` → after: `L15071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L15071) · [Before (L15071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L15071)

```diff
-         return (0, wT.l)(kT, "ThreeMfMetadataGroup"), (() => {
+         return (0, vq.j)(Eq, "ThreeMfMetadataGroup"), (() => {
```

#### 1158. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L15073` → after: `L15073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L15073) · [Before (L15073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L15073)

```diff
-           (0, wT.e)(null, TT = {
+           (0, vq.f)(null, qq = {
```

#### 1159. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L15084` → after: `L15084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L15084) · [Before (L15084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L15084)

```diff
-           }), (0, wT.h)(kT, lT)
+           }), (0, vq.i)(Eq, Yq)
```

#### 1160. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L15098` → after: `L15098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L15098) · [Before (L15098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L15098)

```diff
-         return (0, wT.l)(kT, "ThreeMfResources"), (() => {
+         return (0, vq.j)(Eq, "ThreeMfResources"), (() => {
```

#### 1161. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L15100` → after: `L15100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L15100) · [Before (L15100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L15100)

```diff
-           (0, wT.e)(null, TT = {
+           (0, vq.f)(null, qq = {
```

#### 1162. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L15111` → after: `L15111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L15111) · [Before (L15111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L15111)

```diff
-           }), (0, wT.h)(kT, lT)
+           }), (0, vq.i)(Eq, Yq)
```

#### 1163. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L15137` → after: `L15137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/225.js#L15137) · [Before (L15137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/225.js#L15137)

```diff
-             this.id = (0, wT.h)(this, AT, void 0), this.type = ((0, wT.h)(this, CT), (0, wT.h)(this, jT, void 0)), this.thumbnail = ((0, wT.h)(this, vT), (0, wT.h)(this, tT, void 0)), this.partnumber = ((0, wT.h)(this, hT), (0, wT.h)(this, NT, void 0)), this.name = ((0, wT.h)(thi … [truncated]
+             this.id = (0, vq.i)(this, Bq, void 0), this.type = ((0, vq.i)(this, Wq), (0, vq.i)(this, Nq, void 0)), this.thumbnail = ((0, vq.i)(this, aq), (0, vq.i)(this, Vq, void 0)), this.partnumber = ((0, vq.i)(this, dq), (0, vq.i)(this, jq, void 0)), this.name = ((0, vq.i)(thi … [truncated]
```
