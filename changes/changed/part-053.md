# Changed — Bundle Modifications Report (Part 053 / 142)

- **Updated at**: `2026-11-25T04:31 JST`
- **Part**: `53 / 142` (**439** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 052](part-052.md) · [Part 054 →](part-054.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/265.js` (sn3sfj.2522680a → yma3ej.f92ebd70 · continued)

- **File**: `bundles/bloxd.io/chunks/js/265.js` (270 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89)

#### 47. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L749-L750` → after: `L749-L750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L749-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L749-L750) · [Before (L749-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L749-L750)

```diff
-                         this._uboDeclaration += Op > 0 ? `uniform ${ip.name}: array<${pp}, ${Op}>;\n` : `uniform ${ip.name}: ${pp};\n`
-                       } else this._uboDeclaration += `${ip.type} ${ip.name}${Op>0?`[${Op}]`:""};\n`
+                         this._uboDeclaration += WT > 0 ? `uniform ${UT.name}: array<${TT}, ${WT}>;\n` : `uniform ${UT.name}: ${TT};\n`
+                       } else this._uboDeclaration += `${UT.type} ${UT.name}${WT>0?`[${WT}]`:""};\n`
```

#### 48. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L784-L785` → after: `L784-L785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L784-L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L784-L785) · [Before (L784-L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L784-L785)

```diff
-                 shadersRepository: Sp.b.GetShadersRepository(xp),
-                 includesShadersStore: Sp.b.GetIncludesShadersStore(xp),
+                 shadersRepository: gT.d.GetShadersRepository(nT),
+                 includesShadersStore: gT.d.GetIncludesShadersStore(nT),
```

#### 49. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L790` → after: `L790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L790) · [Before (L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L790)

```diff
-                 lOp: this._engine.lOp,
+                 pWT: this._engine.pWT,
```

#### 50. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L829-L830` → after: `L829-L830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L829-L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L829-L830) · [Before (L829-L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L829-L830)

```diff
-     var Dp = cp(40233),
-       Ap = cp(37368);
+     var jT = mT(40122),
+       lT = mT(37239);
```

#### 51. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L852` → after: `L852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L852) · [Before (L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L852)

```diff
-             this.name = (0, Op.l)(this, xp, void 0), this.priority = ((0, Op.l)(this, Yp), (0, Op.l)(this, Ap, 500)), this.resolveIncludes = ((0, Op.l)(this, Pp), (0, Op.l)(this, Wp, !1)), this.registerForExtraEvents = ((0, Op.l)(this, yp), (0, Op.l)(this, Up, !1)), this.doNotSer … [truncated]
+             this.name = (0, WT.k)(this, nT, void 0), this.priority = ((0, WT.k)(this, kT), (0, WT.k)(this, lT, 500)), this.resolveIncludes = ((0, WT.k)(this, LT), (0, WT.k)(this, pT, !1)), this.registerForExtraEvents = ((0, WT.k)(this, BT), (0, WT.k)(this, ZT, !1)), this.doNotSer … [truncated]
```

#### 52. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L900` → after: `L900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L900) · [Before (L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L900)

```diff
-             Dp.c.Clone((() => pp), this)
+             jT.e.Clone((() => TT), this)
```

#### 53. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L903` → after: `L903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L903) · [Before (L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L903)

```diff
-             return Dp.c.Serialize(this)
+             return jT.e.Serialize(this)
```

#### 54. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L906` → after: `L906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L906) · [Before (L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L906)

```diff
-             Dp.c.Parse((() => this), pp, ip, cp)
+             jT.e.Parse((() => this), TT, UT, mT)
```

#### 55. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L910` → after: `L910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L910) · [Before (L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L910)

```diff
-           ip = [(0, op.K)()], cp = [(0, op.K)()], Ip = [(0, op.K)()], Sp = [(0, op.K)()], (0, Op.j)(null, null, ip, {
+           UT = [(0, zT.L)()], mT = [(0, zT.L)()], MT = [(0, zT.L)()], gT = [(0, zT.L)()], (0, WT.h)(null, null, UT, {
```

#### 56. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L923` → after: `L923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L923) · [Before (L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L923)

```diff
-           }, xp, Yp), (0, Op.j)(null, null, cp, {
+           }, nT, kT), (0, WT.h)(null, null, mT, {
```

#### 57. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L936` → after: `L936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L936) · [Before (L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L936)

```diff
-           }, Ap, Pp), (0, Op.j)(null, null, Ip, {
+           }, lT, LT), (0, WT.h)(null, null, MT, {
```

#### 58. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L949` → after: `L949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L949) · [Before (L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L949)

```diff
-           }, Wp, yp), (0, Op.j)(null, null, Sp, {
+           }, pT, BT), (0, WT.h)(null, null, gT, {
```

#### 59. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L973` → after: `L973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L973) · [Before (L973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L973)

```diff
-       Wp || (Wp = !0, (0, Ap.g)("BABYLON.MaterialPluginBase", Pp))
+       pT || (pT = !0, (0, lT.h)("BABYLON.MaterialPluginBase", LT))
```

#### 60. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L976` → after: `L976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L976) · [Before (L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L976)

```diff
-   40465: (pp, ip, cp) => {
+   40394: (TT, UT, mT) => {
```

#### 61. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L978` → after: `L978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L978) · [Before (L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L978)

```diff
-       c: () => Op
+       d: () => WT
```

#### 62. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L991-L992` → after: `L991-L992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L991-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L991-L992) · [Before (L991-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L991-L992)

```diff
-           const op = ip.gy();
-           this.currentViewProjection.updateFlag !== ip.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = op.frameId, this.previousViewProjection.rM(this.currentViewProjection), this.currentViewProjection.rM(ip.getTransformMatrix())) : this._lastUpdateFrameId !== op.fra … [truncated]
+           const zT = UT.eB();
+           this.currentViewProjection.updateFlag !== UT.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = zT.frameId, this.previousViewProjection.Gw(this.currentViewProjection), this.currentViewProjection.Gw(UT.getTransformMatrix())) : this._lastUpdateFrameId !== zT.fra … [truncated]
```

#### 63. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L997` → after: `L997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L997) · [Before (L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L997)

```diff
-   40556: (pp, ip, cp) => {
+   40521: (TT, UT, mT) => {
```

#### 64. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1006` → after: `L1006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1006) · [Before (L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1006)

```diff
-       c: () => Op
+       e: () => WT
```

#### 65. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1009` → after: `L1009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1009) · [Before (L1009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1009)

```diff
-   40459: (pp, ip, cp) => {
+   40379: (TT, UT, mT) => {
```

#### 66. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1013-L1014` → after: `L1013-L1014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1013-L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1013-L1014) · [Before (L1013-L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1013-L1014)

```diff
-     var Op = cp(40463);
-     (0, Op.e)()
+     var WT = mT(40387);
+     (0, WT.b)()
```

#### 67. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1016` → after: `L1016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1016) · [Before (L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1016)

```diff
-   40463: (pp, ip, cp) => {
+   40387: (TT, UT, mT) => {
```

#### 68. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1018` → after: `L1018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1018) · [Before (L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1018)

```diff
-       e: () => Np,
+       b: () => sT,
```

#### 69. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1021-L1026` → after: `L1021-L1032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1021-L1032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1021-L1032) · [Before (L1021-L1026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1021-L1026)

```diff
-     var Op = cp(40203),
-       op = cp(40210),
-       Ip = cp(40314),
-       Sp = cp(40296),
-       xp = cp(37487),
-       Lp = cp(40342),
+     var WT = mT(40095),
+       zT = mT(40102),
+       MT = mT(40215),
+       gT = mT(40198),
+       nT = mT(37367),
+       HT = mT(40257),
+       kT = mT(40394),
+       jT = mT(40399),
+       lT = mT(40223),
+       LT = mT(40413),
+       pT = mT(40407),
+       BT = mT(40474),
```

#### 70. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1028-L1046` → after: `L1034-L1046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1034-L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1034-L1046) · [Before (L1028-L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1028-L1046)

```diff
-       Dp = cp(40467),
-       Ap = cp(40318),
-       Pp = cp(40476),
-       Wp = cp(40472),
-       yp = cp(40523),
-       Up = cp(40519),
-       wp = cp(40530),
-       vp = cp(40533),
-       tp = cp(40516),
-       Hp = cp(40544),
-       dp = cp(40512),
-       ep = cp(40233),
-       jp = cp(40546),
-       kp = cp(40550),
-       mp = cp(40554),
-       Rp = cp(40556),
- ... (3 more removed lines; see GitHub link above)
+       cT = mT(40479),
+       vT = mT(40484),
+       fT = mT(40463),
+       qT = mT(40495),
+       iT = mT(40456),
+       bT = mT(40122),
+       OT = mT(40503),
+       eT = mT(40511),
+       YT = mT(40513),
+       JT = mT(40521),
+       xT = mT(40524),
+       dT = mT(37239),
+       wT = mT(39965);
```

#### 71. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1051-L1052` → after: `L1051-L1052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1051-L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1051-L1052) · [Before (L1051-L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1051-L1052)

```diff
-     class Xp extends((0, Rp.c)((0, mp.c)(Wp.c))) {}
-     class lp extends((0, Dp.h)(Xp)) {
+     class aT extends((0, JT.e)((0, YT.b)(pT.d))) {}
+     class yT extends((0, jT.f)(aT)) {
```

#### 72. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1057` → after: `L1057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1057) · [Before (L1057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1057)

```diff
-     class Qp extends((0, qp.b)(yp.e)) {}
+     class XT extends((0, xT.b)(BT.c)) {}
```

#### 73. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1209` → after: `L1209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1209) · [Before (L1209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1209)

```diff
-             return (0, Op.e)(this, ip, "f")
+             return (0, WT.d)(this, UT, "f")
```

#### 74. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1212` → after: `L1212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1212) · [Before (L1212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1212)

```diff
-             (0, Op.f)(this, ip, pp, "f")
+             (0, WT.e)(this, UT, TT, "f")
```

#### 75. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1215` → after: `L1215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1215) · [Before (L1215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1215)

```diff
-             return (0, Op.e)(this, Dp, "f")
+             return (0, WT.d)(this, jT, "f")
```

#### 76. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1218` → after: `L1218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1218) · [Before (L1218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1218)

```diff
-             (0, Op.f)(this, Dp, pp, "f")
+             (0, WT.e)(this, jT, TT, "f")
```

#### 77. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1221` → after: `L1221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1221) · [Before (L1221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1221)

```diff
-             return (0, Op.e)(this, Wp, "f")
+             return (0, WT.d)(this, pT, "f")
```

#### 78. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1224` → after: `L1224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1224) · [Before (L1224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1224)

```diff
-             (0, Op.f)(this, Wp, pp, "f")
+             (0, WT.e)(this, pT, TT, "f")
```

#### 79. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1227` → after: `L1227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1227) · [Before (L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1227)

```diff
-             return (0, Op.e)(this, mp, "f")
+             return (0, WT.d)(this, YT, "f")
```

#### 80. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1230` → after: `L1230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1230) · [Before (L1230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1230)

```diff
-             (0, Op.f)(this, mp, pp, "f")
+             (0, WT.e)(this, YT, TT, "f")
```

#### 81. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1233` → after: `L1233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1233) · [Before (L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1233)

```diff
-             return (0, Op.e)(this, Rp, "f")
+             return (0, WT.d)(this, JT, "f")
```

#### 82. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1236` → after: `L1236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1236) · [Before (L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1236)

```diff
-             (0, Op.f)(this, Rp, pp, "f")
+             (0, WT.e)(this, JT, TT, "f")
```

#### 83. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1239` → after: `L1239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1239) · [Before (L1239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1239)

```diff
-             return (0, Op.e)(this, qp, "f")
+             return (0, WT.d)(this, xT, "f")
```

#### 84. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1242` → after: `L1242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1242) · [Before (L1242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1242)

```diff
-             (0, Op.f)(this, qp, pp, "f")
+             (0, WT.e)(this, xT, TT, "f")
```

#### 85. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1245` → after: `L1245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1245) · [Before (L1245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1245)

```diff
-             return (0, Op.e)(this, Mp, "f")
+             return (0, WT.d)(this, dT, "f")
```

#### 86. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1248` → after: `L1248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1248) · [Before (L1248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1248)

```diff
-             (0, Op.f)(this, Mp, pp, "f")
+             (0, WT.e)(this, dT, TT, "f")
```

#### 87. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1251` → after: `L1251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1251) · [Before (L1251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1251)

```diff
-             return (0, Op.e)(this, Cp, "f")
+             return (0, WT.d)(this, wT, "f")
```

#### 88. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1254` → after: `L1254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1254) · [Before (L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1254)

```diff
-             (0, Op.f)(this, Cp, pp, "f")
+             (0, WT.e)(this, wT, TT, "f")
```

#### 89. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1257` → after: `L1257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1257) · [Before (L1257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1257)

```diff
-             return (0, Op.e)(this, Xp, "f")
+             return (0, WT.d)(this, aT, "f")
```

#### 90. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1260` → after: `L1260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1260) · [Before (L1260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1260)

```diff
-             (0, Op.f)(this, Xp, pp, "f")
+             (0, WT.e)(this, aT, TT, "f")
```

#### 91. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1263` → after: `L1263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1263) · [Before (L1263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1263)

```diff
-             return (0, Op.e)(this, Jp, "f")
+             return (0, WT.d)(this, IT, "f")
```

#### 92. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1266` → after: `L1266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1266) · [Before (L1266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1266)

```diff
-             (0, Op.f)(this, Jp, pp, "f")
+             (0, WT.e)(this, IT, TT, "f")
```

#### 93. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1269` → after: `L1269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1269) · [Before (L1269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1269)

```diff
-             return (0, Op.e)(this, Bp, "f")
+             return (0, WT.d)(this, QT, "f")
```

#### 94. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1272` → after: `L1272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1272) · [Before (L1272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1272)

```diff
-             (0, Op.f)(this, Bp, pp, "f")
+             (0, WT.e)(this, QT, TT, "f")
```

#### 95. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1275` → after: `L1275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1275) · [Before (L1275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1275)

```diff
-             return (0, Op.e)(this, Np, "f")
+             return (0, WT.d)(this, sT, "f")
```

#### 96. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1278` → after: `L1278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1278) · [Before (L1278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1278)

```diff
-             (0, Op.f)(this, Np, pp, "f")
+             (0, WT.e)(this, sT, TT, "f")
```

#### 97. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1281` → after: `L1281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1281) · [Before (L1281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1281)

```diff
-             return (0, Op.e)(this, Tp, "f")
+             return (0, WT.d)(this, FT, "f")
```

#### 98. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1284` → after: `L1284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1284) · [Before (L1284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1284)

```diff
-             (0, Op.f)(this, Tp, pp, "f")
+             (0, WT.e)(this, FT, TT, "f")
```

#### 99. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1287` → after: `L1287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1287) · [Before (L1287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1287)

```diff
-             return (0, Op.e)(this, fp, "f")
+             return (0, WT.d)(this, PT, "f")
```

#### 100. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1290` → after: `L1290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1290) · [Before (L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1290)

```diff
-             (0, Op.f)(this, fp, pp, "f")
+             (0, WT.e)(this, PT, TT, "f")
```

#### 101. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1293` → after: `L1293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1293) · [Before (L1293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1293)

```diff
-             return (0, Op.e)(this, bp, "f")
+             return (0, WT.d)(this, VT, "f")
```

#### 102. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1296` → after: `L1296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1296) · [Before (L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1296)

```diff
-             (0, Op.f)(this, bp, pp, "f")
+             (0, WT.e)(this, VT, TT, "f")
```

#### 103. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1299` → after: `L1299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1299) · [Before (L1299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1299)

```diff
-             return (0, Op.e)(this, hp, "f")
+             return (0, WT.d)(this, uT, "f")
```

#### 104. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1302` → after: `L1302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1302) · [Before (L1302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1302)

```diff
-             (0, Op.f)(this, hp, pp, "f")
+             (0, WT.e)(this, uT, TT, "f")
```

#### 105. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1305` → after: `L1305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1305) · [Before (L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1305)

```diff
-             return (0, Op.e)(this, ap, "f")
+             return (0, WT.d)(this, CT, "f")
```

#### 106. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1308` → after: `L1308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1308) · [Before (L1308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1308)

```diff
-             (0, Op.f)(this, ap, pp, "f")
+             (0, WT.e)(this, CT, TT, "f")
```

#### 107. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1311` → after: `L1311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1311) · [Before (L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1311)

```diff
-             return (0, Op.e)(this, np, "f")
+             return (0, WT.d)(this, rT, "f")
```

#### 108. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1314` → after: `L1314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1314) · [Before (L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1314)

```diff
-             (0, Op.f)(this, np, pp, "f")
+             (0, WT.e)(this, rT, TT, "f")
```

#### 109. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1317` → after: `L1317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1317) · [Before (L1317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1317)

```diff
-             return (0, Op.e)(this, Fp, "f")
+             return (0, WT.d)(this, KT, "f")
```

#### 110. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1320` → after: `L1320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1320) · [Before (L1320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1320)

```diff
-             (0, Op.f)(this, Fp, pp, "f")
+             (0, WT.e)(this, KT, TT, "f")
```

#### 111. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1323` → after: `L1323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1323) · [Before (L1323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1323)

```diff
-             return (0, Op.e)(this, gp, "f")
+             return (0, WT.d)(this, ST, "f")
```

#### 112. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1326` → after: `L1326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1326) · [Before (L1326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1326)

```diff
-             (0, Op.f)(this, gp, pp, "f")
+             (0, WT.e)(this, ST, TT, "f")
```

#### 113. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1329` → after: `L1329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1329) · [Before (L1329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1329)

```diff
-             return (0, Op.e)(this, Gp, "f")
+             return (0, WT.d)(this, GT, "f")
```

#### 114. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1332` → after: `L1332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1332) · [Before (L1332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1332)

```diff
-             (0, Op.f)(this, Gp, pp, "f")
+             (0, WT.e)(this, GT, TT, "f")
```

#### 115. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1335` → after: `L1335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1335) · [Before (L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1335)

```diff
-             return (0, Op.e)(this, rp, "f")
+             return (0, WT.d)(this, NT, "f")
```

#### 116. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1338` → after: `L1338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1338) · [Before (L1338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1338)

```diff
-             (0, Op.f)(this, rp, pp, "f")
+             (0, WT.e)(this, NT, TT, "f")
```

#### 117. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1341` → after: `L1341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1341) · [Before (L1341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1341)

```diff
-             return (0, Op.e)(this, Zp, "f")
+             return (0, WT.d)(this, ET, "f")
```

#### 118. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1344` → after: `L1344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1344) · [Before (L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1344)

```diff
-             (0, Op.f)(this, Zp, pp, "f")
+             (0, WT.e)(this, ET, TT, "f")
```

#### 119. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1347` → after: `L1347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1347) · [Before (L1347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1347)

```diff
-             return (0, Op.e)(this, zp, "f")
+             return (0, WT.d)(this, hT, "f")
```

#### 120. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1350` → after: `L1350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1350) · [Before (L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1350)

```diff
-             (0, Op.f)(this, zp, pp, "f")
+             (0, WT.e)(this, hT, TT, "f")
```

#### 121. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1353` → after: `L1353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1353) · [Before (L1353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1353)

```diff
-             return (0, Op.e)(this, sp, "f")
+             return (0, WT.d)(this, DT, "f")
```

#### 122. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1356` → after: `L1356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1356) · [Before (L1356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1356)

```diff
-             (0, Op.f)(this, sp, pp, "f")
+             (0, WT.e)(this, DT, TT, "f")
```

#### 123. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1359` → after: `L1359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1359) · [Before (L1359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1359)

```diff
-             return (0, Op.e)(this, Kp, "f")
+             return (0, WT.d)(this, oT, "f")
```

#### 124. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1362` → after: `L1362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1362) · [Before (L1362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1362)

```diff
-             (0, Op.f)(this, Kp, pp, "f")
+             (0, WT.e)(this, oT, TT, "f")
```

#### 125. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1365` → after: `L1365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1365) · [Before (L1365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1365)

```diff
-             return (0, Op.e)(this, Vp, "f")
+             return (0, WT.d)(this, AT, "f")
```

#### 126. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1368` → after: `L1368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1368) · [Before (L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1368)

```diff
-             (0, Op.f)(this, Vp, pp, "f")
+             (0, WT.e)(this, AT, TT, "f")
```

#### 127. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1371` → after: `L1371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1371) · [Before (L1371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1371)

```diff
-             return (0, Op.e)(this, ii, "f")
+             return (0, WT.d)(this, RT, "f")
```

#### 128. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1374` → after: `L1374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1374) · [Before (L1374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1374)

```diff
-             (0, Op.f)(this, ii, pp, "f")
+             (0, WT.e)(this, RT, TT, "f")
```

#### 129. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1377` → after: `L1377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1377) · [Before (L1377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1377)

```diff
-             return (0, Op.e)(this, ci, "f")
+             return (0, WT.d)(this, TU, "f")
```

#### 130. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1380` → after: `L1380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1380) · [Before (L1380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1380)

```diff
-             (0, Op.f)(this, ci, pp, "f")
+             (0, WT.e)(this, TU, TT, "f")
```

#### 131. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1383` → after: `L1383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1383) · [Before (L1383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1383)

```diff
-             return (0, Op.e)(this, Oi, "f")
+             return (0, WT.d)(this, UU, "f")
```

#### 132. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1386` → after: `L1386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1386) · [Before (L1386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1386)

```diff
-             (0, Op.f)(this, Oi, pp, "f")
+             (0, WT.e)(this, UU, TT, "f")
```

#### 133. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1389` → after: `L1389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1389) · [Before (L1389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1389)

```diff
-             return (0, Op.e)(this, oi, "f")
+             return (0, WT.d)(this, mU, "f")
```

#### 134. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1392` → after: `L1392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1392) · [Before (L1392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1392)

```diff
-             (0, Op.f)(this, oi, pp, "f")
+             (0, WT.e)(this, mU, TT, "f")
```

#### 135. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1395` → after: `L1395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1395) · [Before (L1395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1395)

```diff
-             return (0, Op.e)(this, Ii, "f")
+             return (0, WT.d)(this, WU, "f")
```

#### 136. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1398` → after: `L1398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1398) · [Before (L1398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1398)

```diff
-             (0, Op.f)(this, Ii, pp, "f")
+             (0, WT.e)(this, WU, TT, "f")
```

#### 137. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1407` → after: `L1407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1407) · [Before (L1407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1407)

```diff
-             super(cp, op, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || pp.ForceGLSL), this._diffuseTexture = (0, Op.l)(this, Cc, null), ip.set(this, ((0, Op.l)(this, Ec), (0, Op.l)(this, Xc, void 0))), this._ambientTexture = ((0, Op.l)(this, lc), (0, … [truncated]
+             super(mT, zT, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || TT.ForceGLSL), this._diffuseTexture = (0, WT.k)(this, dm, null), UT.set(this, ((0, WT.k)(this, wm), (0, WT.k)(this, tm, void 0))), this._ambientTexture = ((0, WT.k)(this, am), (0, … [truncated]
```

#### 138. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1436` → after: `L1436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1436) · [Before (L1436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1436)

```diff
-             const Ip = this.Gl(),
+             const MT = this.KF(),
```

#### 139. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1439-L1443` → after: `L1439-L1443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1439-L1443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1439-L1443) · [Before (L1439-L1443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1439-L1443)

```diff
-             const xp = Ip.gy();
-             if (Sp._needNormals = (0, dp.ab)(Ip, ip, Sp, !0, this._maxSimultaneousLights, this._disableLighting), !(0, dp.c)(Ip, ip, this._maxSimultaneousLights, this._disableLighting)) return !1;
-             (0, dp.ib)(Ip, Sp);
-             const Dp = this.needAlphaBlendingForMesh(ip) && this.Gl().useOrderIndependentTransparency;
-             if ((0, dp.nb)(Ip, Sp, this.canRenderToMRT && !Dp), (0, dp.lb)(Ip, Sp, Dp), kp.e.PrepareDefines(xp.currentRenderPassId, ip, Sp), Sp._areTexturesDirty) {
+             const nT = MT.eB();
+             if (gT._needNormals = (0, iT.W)(MT, UT, gT, !0, this._maxSimultaneousLights, this._disableLighting), !(0, iT.c)(MT, UT, this._maxSimultaneousLights, this._disableLighting)) return !1;
+             (0, iT.db)(MT, gT);
+             const jT = this.needAlphaBlendingForMesh(UT) && this.KF().useOrderIndependentTransparency;
+             if ((0, iT.ib)(MT, gT, this.canRenderToMRT && !jT), (0, iT.gb)(MT, gT, jT), eT.c.PrepareDefines(nT.currentRenderPassId, UT, gT), gT._areTexturesDirty) {
```

#### 140. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1449` → after: `L1449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1449) · [Before (L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1449)

```diff
-                   (0, dp.eb)(this._diffuseTexture, Sp, "DIFFUSE")
+                   (0, iT.X)(this._diffuseTexture, gT, "DIFFUSE")
```

#### 141. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1453` → after: `L1453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1453) · [Before (L1453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1453)

```diff
-                   (0, dp.eb)(this._ambientTexture, Sp, "AMBIENT")
+                   (0, iT.X)(this._ambientTexture, gT, "AMBIENT")
```

#### 142. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1457` → after: `L1457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1457) · [Before (L1457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1457)

```diff
-                   (0, dp.eb)(this._opacityTexture, Sp, "OPACITY"), Sp.OPACITYRGB = this._opacityTexture.getAlphaFromRGB
+                   (0, iT.X)(this._opacityTexture, gT, "OPACITY"), gT.OPACITYRGB = this._opacityTexture.getAlphaFromRGB
```

#### 143. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1459` → after: `L1459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1459) · [Before (L1459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1459)

```diff
-                 if (this._reflectionTexture && pp.ReflectionTextureEnabled ? (Sp.ROUGHNESS = this._roughness > 0, Sp.REFLECTIONOVERALPHA = this._useReflectionOverAlpha) : (Sp.ROUGHNESS = !1, Sp.REFLECTIONOVERALPHA = !1), !(0, dp.Y)(Ip, this._reflectionTexture, Sp)) return !1;
+                 if (this._reflectionTexture && TT.ReflectionTextureEnabled ? (gT.ROUGHNESS = this._roughness > 0, gT.REFLECTIONOVERALPHA = this._useReflectionOverAlpha) : (gT.ROUGHNESS = !1, gT.REFLECTIONOVERALPHA = !1), !(0, iT.S)(MT, this._reflectionTexture, gT)) return !1;
```

#### 144. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1462` → after: `L1462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1462) · [Before (L1462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1462)

```diff
-                   (0, dp.eb)(this._emissiveTexture, Sp, "EMISSIVE")
+                   (0, iT.X)(this._emissiveTexture, gT, "EMISSIVE")
```

#### 145. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1466` → after: `L1466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1466) · [Before (L1466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1466)

```diff
-                   (0, dp.eb)(this._lightmapTexture, Sp, "LIGHTMAP"), Sp.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, Sp.RGBDLIGHTMAP = this._lightmapTexture.isRGBD
+                   (0, iT.X)(this._lightmapTexture, gT, "LIGHTMAP"), gT.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, gT.RGBDLIGHTMAP = this._lightmapTexture.isRGBD
```

#### 146. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1470` → after: `L1470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1470) · [Before (L1470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1470)

```diff
-                   (0, dp.eb)(this._specularTexture, Sp, "SPECULAR"), Sp.GLOSSINESS = this._useGlossinessFromSpecularMapAlpha
+                   (0, iT.X)(this._specularTexture, gT, "SPECULAR"), gT.GLOSSINESS = this._useGlossinessFromSpecularMapAlpha
```

#### 147. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1472` → after: `L1472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1472) · [Before (L1472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1472)

```diff
-                 if (Ip.gy().getCaps().standardDerivatives && this._bumpTexture && pp.BumpTextureEnabled) {
+                 if (MT.eB().getCaps().standardDerivatives && this._bumpTexture && TT.BumpTextureEnabled) {
```

#### 148. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1474` → after: `L1474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1474) · [Before (L1474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1474)

```diff
-                   (0, dp.eb)(this._bumpTexture, Sp, "BUMP"), Sp.PARALLAX = this._useParallax, Sp.PARALLAX_RHS = Ip.useRightHandedSystem, Sp.PARALLAXOCCLUSION = this._useParallaxOcclusion, Sp.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap
+                   (0, iT.X)(this._bumpTexture, gT, "BUMP"), gT.PARALLAX = this._useParallax, gT.PARALLAX_RHS = MT.useRightHandedSystem, gT.PARALLAXOCCLUSION = this._useParallaxOcclusion, gT.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap
```

#### 149. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1492` → after: `L1492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1492) · [Before (L1492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1492)

```diff
-             (0, dp.hb)(ip, Ip, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(ip), Sp, this._applyDecalMapAfterDetailMap, this._useVertexPulling, cp.getRenderingMesh(), this._isVertexOutputInvariant), (0, dp.X)(Ip, xp, this, Sp, Op, nul … [truncated]
+             (0, iT.$)(UT, MT, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(UT), gT, this._applyDecalMapAfterDetailMap, this._useVertexPulling, mT.getRenderingMesh(), this._isVertexOutputInvariant), (0, iT.R)(MT, nT, this, gT, WT, null … [truncated]
```

#### 150. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1498-L1502` → after: `L1498-L1502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1498-L1502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1498-L1502) · [Before (L1498-L1502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1498-L1502)

```diff
-               Sp.REFLECTION && op.addFallback(0, "REFLECTION"), Sp.SPECULAR && op.addFallback(0, "SPECULAR"), Sp.BUMP && op.addFallback(0, "BUMP"), Sp.PARALLAX && op.addFallback(1, "PARALLAX"), Sp.PARALLAX_RHS && op.addFallback(1, "PARALLAX_RHS"), Sp.PARALLAXOCCLUSION && op.addFa … [truncated]
-               const Dp = [Lp.j.PositionKind];
-               Sp.NORMAL && Dp.push(Lp.j.NormalKind), Sp.TANGENT && Dp.push(Lp.j.TangentKind);
-               for (let pp = 1; pp <= 6; ++pp) Sp["UV" + pp] && Dp.push(`uv${1===pp?"":pp}`);
-               Sp.VERTEXCOLOR && Dp.push(Lp.j.ColorKind), (0, dp.K)(Dp, ip, Sp, op), (0, dp.L)(Dp, Sp), (0, dp.P)(Dp, ip, Sp), (0, dp.G)(Dp, ip, Sp);
+               gT.REFLECTION && zT.addFallback(0, "REFLECTION"), gT.SPECULAR && zT.addFallback(0, "SPECULAR"), gT.BUMP && zT.addFallback(0, "BUMP"), gT.PARALLAX && zT.addFallback(1, "PARALLAX"), gT.PARALLAX_RHS && zT.addFallback(1, "PARALLAX_RHS"), gT.PARALLAXOCCLUSION && zT.addFa … [truncated]
+               const jT = [HT.i.PositionKind];
+               gT.NORMAL && jT.push(HT.i.NormalKind), gT.TANGENT && jT.push(HT.i.TangentKind);
+               for (let TT = 1; TT <= 6; ++TT) gT["UV" + TT] && jT.push(`uv${1===TT?"":TT}`);
+               gT.VERTEXCOLOR && jT.push(HT.i.ColorKind), (0, iT.E)(jT, UT, gT, zT), (0, iT.G)(jT, gT), (0, iT.J)(jT, UT, gT), (0, iT.C)(jT, UT, gT);
```

#### 151. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1506` → after: `L1506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1506) · [Before (L1506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1506)

```diff
-               (0, dp.ub)(yp, Up, !1);
+               (0, iT.ob)(BT, ZT, !1);
```

#### 152. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1512` → after: `L1512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1512) · [Before (L1512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1512)

```diff
-               if (this._eventInfo.fallbacks = op, this._eventInfo.fallbackRank = 0, this._eventInfo.defines = Sp, this._eventInfo.uniforms = yp, this._eventInfo.attributes = Dp, this._eventInfo.samplers = Up, this._eventInfo.uniformBuffersNames = vp, this._eventInfo.customCode =  … [truncated]
+               if (this._eventInfo.fallbacks = zT, this._eventInfo.fallbackRank = 0, this._eventInfo.defines = gT, this._eventInfo.uniforms = BT, this._eventInfo.attributes = jT, this._eventInfo.samplers = ZT, this._eventInfo.uniformBuffersNames = vT, this._eventInfo.customCode =  … [truncated]
```

#### 153. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1519` → after: `L1519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1519) · [Before (L1519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1519)

```diff
-                 }), (0, tp.c)(yp), this._useVertexPulling) {
+                 }), (0, fT.b)(BT), this._useVertexPulling) {
```

#### 154. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1522-L1523` → after: `L1522-L1523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1522-L1523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1522-L1523) · [Before (L1522-L1523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1522-L1523)

```diff
-                 ip && (this._vertexPullingMetadata = (0, Hp.i)(ip), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((pp, ip) => {
-                   yp.push(`vp_${ip}_info`)
+                 UT && (this._vertexPullingMetadata = (0, qT.f)(UT), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((TT, UT) => {
+                   BT.push(`vp_${UT}_info`)
```

#### 155. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1530` → after: `L1530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1530) · [Before (L1530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1530)

```diff
-                 qp = Ip.gy().createEffect(Wp, {
+                 xT = MT.eB().createEffect(pT, {
```

#### 156. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1555` → after: `L1555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1555) · [Before (L1555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1555)

```diff
-             pp.addUniform("diffuseLeftColor", 4), pp.addUniform("diffuseRightColor", 4), pp.addUniform("opacityParts", 4), pp.addUniform("reflectionLeftColor", 4), pp.addUniform("reflectionRightColor", 4), pp.addUniform("refractionLeftColor", 4), pp.addUniform("refractionRightCol … [truncated]
+             TT.addUniform("diffuseLeftColor", 4), TT.addUniform("diffuseRightColor", 4), TT.addUniform("opacityParts", 4), TT.addUniform("reflectionLeftColor", 4), TT.addUniform("reflectionRightColor", 4), TT.addUniform("refractionLeftColor", 4), TT.addUniform("refractionRightCol … [truncated]
```

#### 157. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1558` → after: `L1558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1558) · [Before (L1558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1558)

```diff
-             const op = this.Gl(),
+             const zT = this.KF(),
```

#### 158. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1563` → after: `L1563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1563) · [Before (L1563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1563)

```diff
-             this._activeEffect = Lp, cp.getMeshUniformBuffer().bindToEffect(Lp, "Mesh"), cp.transferToEffect(ip), this._uniformBuffer.bindToEffect(Lp, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, op, cp, ip, this.isFrozen), kp.e.Bind(op.gy().currentRe … [truncated]
+             this._activeEffect = HT, mT.getMeshUniformBuffer().bindToEffect(HT, "Mesh"), mT.transferToEffect(UT), this._uniformBuffer.bindToEffect(HT, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, zT, mT, UT, this.isFrozen), eT.c.Bind(zT.eB().currentRe … [truncated]
```

#### 159. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1569-L1570` → after: `L1569-L1570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1569-L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1569-L1570) · [Before (L1569-L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1569-L1570)

```diff
-               Pp = op.gy()._features.needToAlwaysBindUniformBuffers;
-             (0, dp.g)(cp, Lp), this._vertexPullingMetadata && (0, Hp.e)(Lp, this._vertexPullingMetadata);
+               LT = zT.eB()._features.needToAlwaysBindUniformBuffers;
+             (0, iT.d)(mT, HT), this._vertexPullingMetadata && (0, qT.c)(HT, this._vertexPullingMetadata);
```

#### 160. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1576` → after: `L1576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1576) · [Before (L1576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1576)

```diff
-                     const pp = xp.j.Color3[0];
+                     const TT = nT.m.Color3[0];
```

#### 161. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1581` → after: `L1581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1581) · [Before (L1581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1581)

```diff
-                 if (Ip.ALPHATEST && Wp.updateFloat("alphaCutOff", this.alphaCutOff), op.texturesEnabled && (this._diffuseTexture && pp.DiffuseTextureEnabled && (Wp.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), (0, dp.A)(this._di … [truncated]
+                 if (MT.ALPHATEST && pT.updateFloat("alphaCutOff", this.alphaCutOff), zT.texturesEnabled && (this._diffuseTexture && TT.DiffuseTextureEnabled && (pT.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), (0, iT.x)(this._di … [truncated]
```

#### 162. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1583` → after: `L1583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1583) · [Before (L1583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1583)

```diff
-                   if (this._refractionTexture.isCube || (Wp.I3("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix()), this._refractionTexture.depth && (pp = this._refractionTexture.depth)), Wp.updateFloat4("vRefractionInfos", this._refractionTexture.level, thi … [truncated]
+                   if (this._refractionTexture.isCube || (pT.R7("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix()), this._refractionTexture.depth && (TT = this._refractionTexture.depth)), pT.updateFloat4("vRefractionInfos", this._refractionTexture.level, thi … [truncated]
```

#### 163. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1590` → after: `L1590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1590) · [Before (L1590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1590)

```diff
-               op.texturesEnabled && (this._diffuseTexture && pp.DiffuseTextureEnabled && Lp.setTexture("diffuseSampler", this._diffuseTexture), this._ambientTexture && pp.AmbientTextureEnabled && Lp.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && pp.Op … [truncated]
+               zT.texturesEnabled && (this._diffuseTexture && TT.DiffuseTextureEnabled && HT.setTexture("diffuseSampler", this._diffuseTexture), this._ambientTexture && TT.AmbientTextureEnabled && HT.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && TT.Op … [truncated]
```

#### 164. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1592` → after: `L1592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1592) · [Before (L1592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1592)

```diff
-             !Ap && this.isFrozen && !Pp || !op.lightsEnabled || this._disableLighting || (0, dp.p)(op, cp, Lp, Ip, this._maxSimultaneousLights), !Ap && this.isFrozen || ((op.fogEnabled && cp.applyFog && op.fogMode !== Sp.f.FOGMODE_NONE || this._reflectionTexture || this._refracti … [truncated]
+             !lT && this.isFrozen && !LT || !zT.lightsEnabled || this._disableLighting || (0, iT.l)(zT, mT, HT, MT, this._maxSimultaneousLights), !lT && this.isFrozen || ((zT.fogEnabled && mT.applyFog && zT.fogMode !== gT.i.FOGMODE_NONE || this._reflectionTexture || this._refracti … [truncated]
```

#### 165. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1596` → after: `L1596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1596) · [Before (L1596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1596)

```diff
-             return this.isFrozen && this._storeEffectOnSubMeshes && this._uniformBufferLayoutBuilt && !this._needToBindSceneUbo && this.isReadyForSubMesh === pp.prototype.isReadyForSubMesh && this.bindForSubMesh === pp.prototype.bindForSubMesh && this._mustRebind === yp.e.prototy … [truncated]
+             return this.isFrozen && this._storeEffectOnSubMeshes && this._uniformBufferLayoutBuilt && !this._needToBindSceneUbo && this.isReadyForSubMesh === TT.prototype.isReadyForSubMesh && this.bindForSubMesh === TT.prototype.bindForSubMesh && this._mustRebind === BT.c.prototy … [truncated]
```

#### 166. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1624` → after: `L1624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1624) · [Before (L1624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1624)

```diff
-             const op = ep.c.Clone((() => new pp(ip, this.Gl())), this, {
+             const zT = bT.e.Clone((() => new TT(UT, this.KF())), this, {
```

#### 167. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1630` → after: `L1630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1630) · [Before (L1630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1630)

```diff
-             const op = ep.c.Parse((() => new pp(ip.name, cp)), ip, cp, Op);
+             const zT = bT.e.Parse((() => new TT(UT.name, mT)), UT, mT, WT);
```

#### 168. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1634` → after: `L1634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1634) · [Before (L1634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1634)

```diff
-             return Up.c.DiffuseTextureEnabled
+             return ZT.e.DiffuseTextureEnabled
```

#### 169. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1637` → after: `L1637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1637) · [Before (L1637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1637)

```diff
-             Up.c.DiffuseTextureEnabled = pp
+             ZT.e.DiffuseTextureEnabled = TT
```

#### 170. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1640` → after: `L1640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1640) · [Before (L1640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1640)

```diff
-             return Up.c.DetailTextureEnabled
+             return ZT.e.DetailTextureEnabled
```

#### 171. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1643` → after: `L1643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1643) · [Before (L1643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1643)

```diff
-             Up.c.DetailTextureEnabled = pp
+             ZT.e.DetailTextureEnabled = TT
```

#### 172. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1646` → after: `L1646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1646) · [Before (L1646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1646)

```diff
-             return Up.c.AmbientTextureEnabled
+             return ZT.e.AmbientTextureEnabled
```

#### 173. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1649` → after: `L1649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1649) · [Before (L1649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1649)

```diff
-             Up.c.AmbientTextureEnabled = pp
+             ZT.e.AmbientTextureEnabled = TT
```

#### 174. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1652` → after: `L1652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1652) · [Before (L1652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1652)

```diff
-             return Up.c.OpacityTextureEnabled
+             return ZT.e.OpacityTextureEnabled
```

#### 175. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1655` → after: `L1655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1655) · [Before (L1655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1655)

```diff
-             Up.c.OpacityTextureEnabled = pp
+             ZT.e.OpacityTextureEnabled = TT
```

#### 176. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1658` → after: `L1658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1658) · [Before (L1658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1658)

```diff
-             return Up.c.ReflectionTextureEnabled
+             return ZT.e.ReflectionTextureEnabled
```

#### 177. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1661` → after: `L1661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1661) · [Before (L1661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1661)

```diff
-             Up.c.ReflectionTextureEnabled = pp
+             ZT.e.ReflectionTextureEnabled = TT
```

#### 178. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1664` → after: `L1664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1664) · [Before (L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1664)

```diff
-             return Up.c.EmissiveTextureEnabled
+             return ZT.e.EmissiveTextureEnabled
```

#### 179. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1667` → after: `L1667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1667) · [Before (L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1667)

```diff
-             Up.c.EmissiveTextureEnabled = pp
+             ZT.e.EmissiveTextureEnabled = TT
```

#### 180. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1670` → after: `L1670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1670) · [Before (L1670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1670)

```diff
-             return Up.c.SpecularTextureEnabled
+             return ZT.e.SpecularTextureEnabled
```

#### 181. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1673` → after: `L1673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1673) · [Before (L1673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1673)

```diff
-             Up.c.SpecularTextureEnabled = pp
+             ZT.e.SpecularTextureEnabled = TT
```

#### 182. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1676` → after: `L1676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1676) · [Before (L1676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1676)

```diff
-             return Up.c.BumpTextureEnabled
+             return ZT.e.BumpTextureEnabled
```

#### 183. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1679` → after: `L1679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1679) · [Before (L1679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1679)

```diff
-             Up.c.BumpTextureEnabled = pp
+             ZT.e.BumpTextureEnabled = TT
```

#### 184. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1682` → after: `L1682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1682) · [Before (L1682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1682)

```diff
-             return Up.c.LightmapTextureEnabled
+             return ZT.e.LightmapTextureEnabled
```

#### 185. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1685` → after: `L1685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1685) · [Before (L1685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1685)

```diff
-             Up.c.LightmapTextureEnabled = pp
+             ZT.e.LightmapTextureEnabled = TT
```

#### 186. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1688` → after: `L1688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1688) · [Before (L1688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1688)

```diff
-             return Up.c.RefractionTextureEnabled
+             return ZT.e.RefractionTextureEnabled
```

#### 187. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1691` → after: `L1691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1691) · [Before (L1691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1691)

```diff
-             Up.c.RefractionTextureEnabled = pp
+             ZT.e.RefractionTextureEnabled = TT
```

#### 188. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1694` → after: `L1694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1694) · [Before (L1694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1694)

```diff
-             return Up.c.ColorGradingTextureEnabled
+             return ZT.e.ColorGradingTextureEnabled
```

#### 189. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1697` → after: `L1697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1697) · [Before (L1697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1697)

```diff
-             Up.c.ColorGradingTextureEnabled = pp
+             ZT.e.ColorGradingTextureEnabled = TT
```

#### 190. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1700` → after: `L1700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1700) · [Before (L1700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1700)

```diff
-             return Up.c.FresnelEnabled
+             return ZT.e.FresnelEnabled
```

#### 191. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1703` → after: `L1703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1703) · [Before (L1703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1703)

```diff
-             Up.c.FresnelEnabled = pp
+             ZT.e.FresnelEnabled = TT
```

#### 192. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1707` → after: `L1707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1707) · [Before (L1707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1707)

```diff
-           Si = [(0, op.C)("diffuseTexture")], xi = [(0, op.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], Li = [(0, op.C)("ambientTexture")], Yi = [(0, op.e)("_markAllSubMeshesAsTexturesDirty")], Di = [(0, op.C)("opacityTexture")], Ai = [(0, op.e)("_markAllSubMeshesAsTexturesAnd … [truncated]
+           zU = [(0, zT.C)("diffuseTexture")], MU = [(0, zT.g)("_markAllSubMeshesAsTexturesAndMiscDirty")], gU = [(0, zT.C)("ambientTexture")], nU = [(0, zT.g)("_markAllSubMeshesAsTexturesDirty")], HU = [(0, zT.C)("opacityTexture")], kU = [(0, zT.g)("_markAllSubMeshesAsTexturesAnd … [truncated]
```

#### 193. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1717` → after: `L1717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1717) · [Before (L1717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1717)

```diff
-           })], Xi = [(0, op.K)("useEmissiveAsIllumination")], li = [(0, op.e)("_markAllSubMeshesAsTexturesDirty")], Qi = [(0, op.K)("linkEmissiveWithDiffuse")], Ji = [(0, op.e)("_markAllSubMeshesAsTexturesDirty")], Bi = [(0, op.K)("useSpecularOverAlpha")], Ni = [(0, op.e)("_markA … [truncated]
+           })], tU = [(0, zT.L)("useEmissiveAsIllumination")], aU = [(0, zT.g)("_markAllSubMeshesAsTexturesDirty")], yU = [(0, zT.L)("linkEmissiveWithDiffuse")], XU = [(0, zT.g)("_markAllSubMeshesAsTexturesDirty")], IU = [(0, zT.L)("useSpecularOverAlpha")], QU = [(0, zT.g)("_markA … [truncated]
```

#### 194. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1730` → after: `L1730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1730) · [Before (L1730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1730)

```diff
-           }, Xc, lc), (0, Op.j)(pp, null, Yi, {
+           }, tm, am), (0, WT.h)(TT, null, nU, {
```

#### 195. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1743` → after: `L1743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1743) · [Before (L1743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1743)

```diff
-           }, Bc, Nc), (0, Op.j)(pp, null, Ai, {
+           }, Im, Qm), (0, WT.h)(TT, null, kU, {
```

#### 196. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1756` → after: `L1756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1756) · [Before (L1756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1756)

```diff
-           }, bc, hc), (0, Op.j)(pp, null, Wi, {
+           }, Pm, Vm), (0, WT.h)(TT, null, lU, {
```

#### 197. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1769` → after: `L1769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1769) · [Before (L1769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1769)

```diff
-           }, Fc, gc), (0, Op.j)(pp, null, Ui, {
+           }, rm, Km), (0, WT.h)(TT, null, pU, {
```

#### 198. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1782` → after: `L1782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1782) · [Before (L1782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1782)

```diff
-           }, Zc, zc), (0, Op.j)(pp, null, vi, {
+           }, Nm, Em), (0, WT.h)(TT, null, ZU, {
```

#### 199. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1795` → after: `L1795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1795) · [Before (L1795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1795)

```diff
-           }, Vc, pO), (0, Op.j)(pp, null, Hi, {
+           }, om, Am), (0, WT.h)(TT, null, vU, {
```

#### 200. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1808` → after: `L1808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1808) · [Before (L1808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1808)

```diff
-           }, OO, oO), (0, Op.j)(pp, null, ei, {
+           }, UW, mW), (0, WT.h)(TT, null, qU, {
```

#### 201. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1821` → after: `L1821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1821) · [Before (L1821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1821)

```diff
-           }, xO, LO), (0, Op.j)(pp, null, ji, {
+           }, MW, gW), (0, WT.h)(TT, null, bU, {
```

#### 202. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1834` → after: `L1834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1834) · [Before (L1834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1834)

```diff
-           }, AO, PO), (0, Op.j)(pp, null, Ei, {
+           }, kW, jW), (0, WT.h)(TT, null, wU, {
```

#### 203. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1847` → after: `L1847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1847) · [Before (L1847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1847)

```diff
-           }, mO, RO), (0, Op.j)(pp, null, li, {
+           }, eW, YW), (0, WT.h)(TT, null, aU, {
```

#### 204. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1860` → after: `L1860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1860) · [Before (L1860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1860)

```diff
-           }, CO, EO), (0, Op.j)(pp, null, Ji, {
+           }, dW, wW), (0, WT.h)(TT, null, XU, {
```

#### 205. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1873` → after: `L1873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1873) · [Before (L1873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1873)

```diff
-           }, QO, JO), (0, Op.j)(pp, null, Ni, {
+           }, yW, XW), (0, WT.h)(TT, null, QU, {
```

#### 206. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1886` → after: `L1886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1886) · [Before (L1886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1886)

```diff
-           }, TO, fO), (0, Op.j)(pp, null, fi, {
+           }, sW, FW), (0, WT.h)(TT, null, FU, {
```

#### 207. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1899` → after: `L1899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1899) · [Before (L1899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1899)

```diff
-           }, aO, nO), (0, Op.j)(pp, null, ai, {
+           }, uW, CW), (0, WT.h)(TT, null, VU, {
```

#### 208. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1912` → after: `L1912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1912) · [Before (L1912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1912)

```diff
-           }, GO, rO), (0, Op.j)(pp, null, Fi, {
+           }, SW, GW), (0, WT.h)(TT, null, CU, {
```

#### 209. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1925` → after: `L1925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1925) · [Before (L1925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1925)

```diff
-           }, sO, KO), (0, Op.j)(pp, null, Gi, {
+           }, hW, DW), (0, WT.h)(TT, null, KU, {
```

#### 210. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1938` → after: `L1938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1938) · [Before (L1938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1938)

```diff
-           }, io, co), (0, Op.j)(pp, null, Zi, {
+           }, RW, Tz), (0, WT.h)(TT, null, GU, {
```

#### 211. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1951` → after: `L1951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1951) · [Before (L1951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1951)

```diff
-           }, Io, So), (0, Op.j)(pp, null, Ki, {
+           }, Wz, zz), (0, WT.h)(TT, null, hU, {
```

#### 212. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1964` → after: `L1964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1964) · [Before (L1964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1964)

```diff
-           }, Ao, Po), (0, Op.j)(pp, null, Oc, {
+           }, kz, jz), (0, WT.h)(TT, null, Tm, {
```

#### 213. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1977` → after: `L1977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1977) · [Before (L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1977)

```diff
-           }, uo, jo), (0, Op.j)(pp, null, Ic, {
+           }, qz, iz), (0, WT.h)(TT, null, mm, {
```

#### 214. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1990` → after: `L1990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L1990) · [Before (L1990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L1990)

```diff
-           }, Ro, qo), (0, Op.j)(pp, null, xc, {
+           }, ez, Yz), (0, WT.h)(TT, null, zm, {
```

#### 215. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2003` → after: `L2003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L2003) · [Before (L2003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L2003)

```diff
-           }, Eo, Xo), (0, Op.j)(pp, null, Yc, {
+           }, dz, wz), (0, WT.h)(TT, null, gm, {
```

#### 216. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2016` → after: `L2016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L2016) · [Before (L2016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L2016)

```diff
-           }, Bo, No), (0, Op.j)(pp, null, Ac, {
+           }, yz, Xz), (0, WT.h)(TT, null, Hm, {
```

#### 217. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2029` → after: `L2029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L2029) · [Before (L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L2029)

```diff
-           }, bo, ho), (0, Op.j)(pp, null, Wc, {
+           }, sz, Fz), (0, WT.h)(TT, null, jm, {
```

#### 218. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2042` → after: `L2042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L2042) · [Before (L2042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L2042)

```diff
-           }, Fo, go), (0, Op.j)(pp, null, Uc, {
+           }, uz, Cz), (0, WT.h)(TT, null, Lm, {
```

#### 219. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2055` → after: `L2055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L2055) · [Before (L2055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L2055)

```diff
-           }, Zo, zo), (0, Op.j)(pp, null, vc, {
+           }, Sz, Gz), (0, WT.h)(TT, null, Bm, {
```

#### 220. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2068` → after: `L2068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L2068) · [Before (L2068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L2068)

```diff
-           }, Vo, pI), (0, Op.j)(pp, null, Hc, {
+           }, hz, Dz), (0, WT.h)(TT, null, cm, {
```

#### 221. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2081` → after: `L2081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L2081) · [Before (L2081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L2081)

```diff
-           }, OI, oI), (0, Op.j)(pp, null, ec, {
+           }, Rz, TM), (0, WT.h)(TT, null, qm, {
```

#### 222. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2094` → after: `L2094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L2094) · [Before (L2094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L2094)

```diff
-           }, xI, LI), (0, Op.j)(pp, null, jc, {
+           }, WM, zM), (0, WT.h)(TT, null, bm, {
```

#### 223. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2107` → after: `L2107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L2107) · [Before (L2107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L2107)

```diff
-           }, AI, PI), (0, Op.j)(pp, null, mc, {
+           }, nM, HM), (0, WT.h)(TT, null, em, {
```

#### 224. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2120` → after: `L2120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L2120) · [Before (L2120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L2120)

```diff
-           }, UI, wI), (0, Op.j)(pp, null, qc, {
+           }, lM, LM), (0, WT.h)(TT, null, Jm, {
```

#### 225. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2133` → after: `L2133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L2133) · [Before (L2133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L2133)

```diff
-           }, HI, dI), (0, Op.j)(null, null, Si, {
+           }, ZM, cM), (0, WT.h)(null, null, zU, {
```

#### 226. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2146` → after: `L2146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L2146) · [Before (L2146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L2146)

```diff
-           }, Cc, Ec), (0, Op.j)(null, null, Li, {
+           }, dm, wm), (0, WT.h)(null, null, gU, {
```

#### 227. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2159` → after: `L2159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L2159) · [Before (L2159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L2159)

```diff
-           }, Qc, Jc), (0, Op.j)(null, null, Di, {
+           }, ym, Xm), (0, WT.h)(null, null, HU, {
```

#### 228. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2172` → after: `L2172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L2172) · [Before (L2172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L2172)

```diff
-           }, Tc, fc), (0, Op.j)(null, null, Pi, {
+           }, sm, Fm), (0, WT.h)(null, null, jU, {
```

#### 229. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2185` → after: `L2185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L2185) · [Before (L2185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L2185)

```diff
-           }, ac, nc), (0, Op.j)(null, null, yi, {
+           }, um, Cm), (0, WT.h)(null, null, LU, {
```

#### 230. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2198` → after: `L2198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L2198) · [Before (L2198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L2198)

```diff
-           }, Gc, rc), (0, Op.j)(null, null, wi, {
+           }, Sm, Gm), (0, WT.h)(null, null, BU, {
```

#### 231. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2211` → after: `L2211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L2211) · [Before (L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L2211)

```diff
-           }, sc, Kc), (0, Op.j)(null, null, ti, {
+           }, hm, Dm), (0, WT.h)(null, null, cU, {
```

#### 232. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2224` → after: `L2224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L2224) · [Before (L2224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L2224)

```diff
-           }, iO, cO), (0, Op.j)(null, null, di, {
+           }, Rm, TW), (0, WT.h)(null, null, fU, {
```

#### 233. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2237` → after: `L2237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L2237) · [Before (L2237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L2237)

```diff
-           }, IO, SO), (0, Op.j)(null, null, ui, {
+           }, WW, zW), (0, WT.h)(null, null, iU, {
```

#### 234. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2250` → after: `L2250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L2250) · [Before (L2250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L2250)

```diff
-           }, YO, DO), (0, Op.j)(null, null, ki, {
+           }, nW, HW), (0, WT.h)(null, null, OU, {
```

#### 235. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2263` → after: `L2263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L2263) · [Before (L2263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L2263)

```diff
-           }, WO, yO), (0, Op.j)(null, null, mi, {
+           }, lW, LW), (0, WT.h)(null, null, eU, {
```

#### 236. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2276` → after: `L2276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L2276) · [Before (L2276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L2276)

```diff
-           }, UO, wO), (0, Op.j)(null, null, Ri, {
+           }, pW, BW), (0, WT.h)(null, null, YU, {
```

#### 237. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2289` → after: `L2289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L2289) · [Before (L2289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L2289)

```diff
-           }, vO, tO), (0, Op.j)(null, null, qi, {
+           }, ZW, cW), (0, WT.h)(null, null, JU, {
```

#### 238. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2302` → after: `L2302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L2302) · [Before (L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L2302)

```diff
-           }, HO, dO), (0, Op.j)(null, null, Mi, {
+           }, vW, fW), (0, WT.h)(null, null, xU, {
```

#### 239. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2315` → after: `L2315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L2315) · [Before (L2315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L2315)

```diff
-           }, eO, uO), (0, Op.j)(null, null, Ci, {
+           }, qW, iW), (0, WT.h)(null, null, dU, {
```

#### 240. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2328` → after: `L2328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L2328) · [Before (L2328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L2328)

```diff
-           }, jO, kO), (0, Op.j)(null, null, Xi, {
+           }, bW, OW), (0, WT.h)(null, null, tU, {
```

#### 241. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2341` → after: `L2341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L2341) · [Before (L2341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L2341)

```diff
-           }, qO, MO), (0, Op.j)(null, null, Qi, {
+           }, JW, xW), (0, WT.h)(null, null, yU, {
```

#### 242. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2354` → after: `L2354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L2354) · [Before (L2354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L2354)

```diff
-           }, XO, lO), (0, Op.j)(null, null, Bi, {
+           }, tW, aW), (0, WT.h)(null, null, IU, {
```

#### 243. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2367` → after: `L2367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L2367) · [Before (L2367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L2367)

```diff
-           }, BO, NO), (0, Op.j)(null, null, Ti, {
+           }, IW, QW), (0, WT.h)(null, null, sU, {
```

#### 244. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2380` → after: `L2380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L2380) · [Before (L2380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L2380)

```diff
-           }, bO, hO), (0, Op.j)(null, null, bi, {
+           }, PW, VW), (0, WT.h)(null, null, PU, {
```

#### 245. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2393` → after: `L2393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L2393) · [Before (L2393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L2393)

```diff
-           }, FO, gO), (0, Op.j)(null, null, ni, {
+           }, rW, KW), (0, WT.h)(null, null, uU, {
```

#### 246. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2406` → after: `L2406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L2406) · [Before (L2406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L2406)

```diff
-           }, ZO, zO), (0, Op.j)(null, null, gi, {
+           }, NW, EW), (0, WT.h)(null, null, rU, {
```

#### 247. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2419` → after: `L2419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L2419) · [Before (L2419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L2419)

```diff
-           }, VO, po), (0, Op.j)(null, null, ri, {
+           }, oW, AW), (0, WT.h)(null, null, SU, {
```

#### 248. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2432` → after: `L2432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L2432) · [Before (L2432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L2432)

```diff
-           }, Oo, oo), (0, Op.j)(null, null, zi, {
+           }, Uz, mz), (0, WT.h)(null, null, NU, {
```

#### 249. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2445` → after: `L2445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L2445) · [Before (L2445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L2445)

```diff
-           }, xo, Lo), (0, Op.j)(null, null, si, {
+           }, Mz, gz), (0, WT.h)(null, null, EU, {
```

#### 250. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2458` → after: `L2458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L2458) · [Before (L2458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L2458)

```diff
-           }, Yo, Do), (0, Op.j)(null, null, Vi, {
+           }, nz, Hz), (0, WT.h)(null, null, DU, {
```

#### 251. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2471` → after: `L2471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L2471) · [Before (L2471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L2471)

```diff
-           }, Wo, yo), (0, Op.j)(null, null, pc, {
+           }, lz, Lz), (0, WT.h)(null, null, oU, {
```

#### 252. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2484` → after: `L2484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L2484) · [Before (L2484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L2484)

```diff
-           }, Uo, wo), (0, Op.j)(null, null, ic, {
+           }, pz, Bz), (0, WT.h)(null, null, AU, {
```

#### 253. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2497` → after: `L2497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L2497) · [Before (L2497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L2497)

```diff
-           }, vo, to), (0, Op.j)(null, null, cc, {
+           }, Zz, cz), (0, WT.h)(null, null, RU, {
```

#### 254. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2510` → after: `L2510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L2510) · [Before (L2510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L2510)

```diff
-           }, Ho, eo), (0, Op.j)(null, null, oc, {
+           }, vz, fz), (0, WT.h)(null, null, Um, {
```

#### 255. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2523` → after: `L2523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L2523) · [Before (L2523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L2523)

```diff
-           }, ko, mo), (0, Op.j)(null, null, Sc, {
+           }, bz, Oz), (0, WT.h)(null, null, Wm, {
```

#### 256. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2536` → after: `L2536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L2536) · [Before (L2536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L2536)

```diff
-           }, Mo, Co), (0, Op.j)(null, null, Lc, {
+           }, Jz, xz), (0, WT.h)(null, null, Mm, {
```

#### 257. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2549` → after: `L2549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L2549) · [Before (L2549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L2549)

```diff
-           }, Qo, Jo), (0, Op.j)(null, null, Dc, {
+           }, tz, az), (0, WT.h)(null, null, nm, {
```

#### 258. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2562` → after: `L2562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L2562) · [Before (L2562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L2562)

```diff
-           }, To, fo), (0, Op.j)(null, null, Pc, {
+           }, Iz, Qz), (0, WT.h)(null, null, km, {
```

#### 259. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2575` → after: `L2575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L2575) · [Before (L2575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L2575)

```diff
-           }, ao, no), (0, Op.j)(null, null, yc, {
+           }, Pz, Vz), (0, WT.h)(null, null, lm, {
```

#### 260. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2588` → after: `L2588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L2588) · [Before (L2588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L2588)

```diff
-           }, Go, ro), (0, Op.j)(null, null, wc, {
+           }, rz, Kz), (0, WT.h)(null, null, pm, {
```

#### 261. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2601` → after: `L2601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L2601) · [Before (L2601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L2601)

```diff
-           }, so, Ko), (0, Op.j)(null, null, tc, {
+           }, Nz, Ez), (0, WT.h)(null, null, Zm, {
```

#### 262. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2614` → after: `L2614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L2614) · [Before (L2614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L2614)

```diff
-           }, iI, cI), (0, Op.j)(null, null, dc, {
+           }, oz, Az), (0, WT.h)(null, null, fm, {
```

#### 263. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2627` → after: `L2627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L2627) · [Before (L2627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L2627)

```diff
-           }, II, SI), (0, Op.j)(null, null, uc, {
+           }, UM, mM), (0, WT.h)(null, null, im, {
```

#### 264. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2640` → after: `L2640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L2640) · [Before (L2640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L2640)

```diff
-           }, YI, DI), (0, Op.j)(null, null, kc, {
+           }, MM, gM), (0, WT.h)(null, null, Om, {
```

#### 265. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2653` → after: `L2653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L2653) · [Before (L2653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L2653)

```diff
-           }, WI, yI), (0, Op.j)(null, null, Rc, {
+           }, kM, jM), (0, WT.h)(null, null, Ym, {
```

#### 266. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2672` → after: `L2672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L2672) · [Before (L2672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L2672)

```diff
-         })(), pp.ForceGLSL = !1, pp._ShaderLoader = new jp.c((() => [Promise.all([cp.e(322), cp.e(321)]).then((() => cp(42143))), Promise.all([cp.e(327), cp.e(323), cp.e(336), cp.e(326)]).then((() => cp(42350)))]), (() => [Promise.all([cp.e(343), cp.e(338)]).then((() => cp(42492) … [truncated]
+         })(), TT.ForceGLSL = !1, TT._ShaderLoader = new OT.c((() => [Promise.all([mT.e(322), mT.e(321)]).then((() => mT(42005))), Promise.all([mT.e(327), mT.e(323), mT.e(336), mT.e(326)]).then((() => mT(42196)))]), (() => [Promise.all([mT.e(343), mT.e(338)]).then((() => mT(42347) … [truncated]
```

#### 267. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2677` → after: `L2677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L2677) · [Before (L2677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L2677)

```diff
-       Bp || (Bp = !0, (0, Ap.g)(), (0, Mp.g)("BABYLON.StandardMaterial", Jp), Sp.f.DefaultMaterialFactory = pp => new Jp("default material", pp))
+       QT || (QT = !0, (0, lT.d)(), (0, dT.h)("BABYLON.StandardMaterial", IT), gT.i.DefaultMaterialFactory = TT => new IT("default material", TT))
```

#### 268. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2681` → after: `L2681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L2681) · [Before (L2681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L2681)

```diff
-   40554: (pp, ip, cp) => {
+   40513: (TT, UT, mT) => {
```

#### 269. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2690` → after: `L2690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L2690) · [Before (L2690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L2690)

```diff
-       c: () => Op
+       b: () => WT
```

#### 270. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2693` → after: `L2693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/265.js#L2693) · [Before (L2693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/265.js#L2693)

```diff
-   40546: (pp, ip, cp) => {
+   40503: (TT, UT, mT) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/266.js` (sn3sfj.2522680a → yma3ej.f92ebd70)

- **File**: `bundles/bloxd.io/chunks/js/266.js` (242 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e)

#### 1. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L4)

```diff
-   40489: (pp, ip, cp) => {
+   40426: (TT, UT, mT) => {
```

#### 2. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L6)

```diff
-       e: () => Op
+       d: () => WT
```

#### 3. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L14` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L14) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L14)

```diff
-   40504: (pp, ip, cp) => {
+   40440: (TT, UT, mT) => {
```

#### 4. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L16` → after: `L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L16) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L16)

```diff
-       d: () => Sp
+       e: () => gT
```

#### 5. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L18-L20` → after: `L18-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L18-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L18-L20) · [Before (L18-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L18-L20)

```diff
-     var Op = cp(37329),
-       op = cp(37320),
-       Ip = cp(37324);
+     var WT = mT(37205),
+       zT = mT(37188),
+       MT = mT(37196);
```

#### 6. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L23` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L23) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L23)

```diff
-         this.vectors = (0, Op.d)(8, op.o.Zero), this.center = op.o.Zero(), this.centerWorld = op.o.Zero(), this.extendSize = op.o.Zero(), this.extendSizeWorld = op.o.Zero(), this.directions = (0, Op.d)(3, op.o.Zero), this.vectorsWorld = (0, Op.d)(8, op.o.Zero), this.minimumWorld  … [truncated]
+         this.vectors = (0, WT.c)(8, zT.p.Zero), this.center = zT.p.Zero(), this.centerWorld = zT.p.Zero(), this.extendSize = zT.p.Zero(), this.extendSizeWorld = zT.p.Zero(), this.directions = (0, WT.c)(3, zT.p.Zero), this.vectorsWorld = (0, WT.c)(8, zT.p.Zero), this.minimumWorld  … [truncated]
```

#### 7. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L33` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L33) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L33)

```diff
-         this.minimum.i5(Op, Ip, Sp), this.maximum.i5(xp, Lp, Yp), Dp[0].i5(Op, Ip, Sp), Dp[1].i5(xp, Lp, Yp), Dp[2].i5(xp, Ip, Sp), Dp[3].i5(Op, Lp, Sp), Dp[4].i5(Op, Ip, Yp), Dp[5].i5(xp, Lp, Sp), Dp[6].i5(Op, Lp, Yp), Dp[7].i5(xp, Ip, Yp), ip.addToRef(pp, this.center).scaleInPl … [truncated]
+         this.minimum.J9(WT, MT, gT), this.maximum.J9(nT, HT, kT), jT[0].J9(WT, MT, gT), jT[1].J9(nT, HT, kT), jT[2].J9(nT, MT, gT), jT[3].J9(WT, HT, gT), jT[4].J9(WT, MT, kT), jT[5].J9(nT, HT, gT), jT[6].J9(WT, HT, kT), jT[7].J9(nT, MT, kT), UT.addToRef(TT, this.center).scaleInPl … [truncated]
```

#### 8. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L56-L58` → after: `L56-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L56-L58) · [Before (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L56-L58)

```diff
-           ip.rM(this.minimum), cp.rM(this.maximum);
-           for (let pp = 0; pp < 8; ++pp) Ip[pp].rM(Sp[pp]);
-           this.extendSizeWorld.rM(this.extendSize), this.centerWorld.rM(this.center)
+           UT.Gw(this.minimum), mT.Gw(this.maximum);
+           for (let TT = 0; TT < 8; ++TT) MT[TT].Gw(gT[TT]);
+           this.extendSizeWorld.Gw(this.extendSize), this.centerWorld.Gw(this.center)
```

#### 9. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L60` → after: `L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L60) · [Before (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L60)

```diff
-           ip.E_(Number.MAX_VALUE), cp.E_(-Number.MAX_VALUE);
+           UT.B3(Number.MAX_VALUE), mT.B3(-Number.MAX_VALUE);
```

#### 10. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L63` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L63) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L63)

```diff
-             op.o.TransformCoordinatesToRef(Sp[Op], pp, xp), ip.minimizeInPlace(xp), cp.maximizeInPlace(xp)
+             zT.p.TransformCoordinatesToRef(gT[WT], TT, nT), UT.minimizeInPlace(nT), mT.maximizeInPlace(nT)
```

#### 11. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L67` → after: `L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L67) · [Before (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L67)

```diff
-         op.o.FromArrayToRef(pp.m, 0, Op[0]), op.o.FromArrayToRef(pp.m, 4, Op[1]), op.o.FromArrayToRef(pp.m, 8, Op[2]), this._worldMatrix = pp
+         zT.p.FromArrayToRef(TT.m, 0, WT[0]), zT.p.FromArrayToRef(TT.m, 4, WT[1]), zT.p.FromArrayToRef(TT.m, 8, WT[2]), this._worldMatrix = TT
```

#### 12. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L87` → after: `L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L87) · [Before (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L87)

```diff
-           Wp = -Ip.b;
+           pT = -MT.c;
```

#### 13. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L118-L119` → after: `L118-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L118-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L118-L119) · [Before (L118-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L118-L119)

```diff
-         op.o.ClampToRef(cp, pp, ip, Ip);
-         return op.o.DistanceSquared(cp, Ip) <= Op * Op
+         zT.p.ClampToRef(mT, TT, UT, MT);
+         return zT.p.DistanceSquared(mT, MT) <= WT * WT
```

#### 14. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L142` → after: `L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L142) · [Before (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L142)

```diff
-     Sp._TmpVector3 = (0, Op.d)(3, op.o.Zero)
+     gT._TmpVector3 = (0, WT.c)(3, zT.p.Zero)
```

#### 15. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L144` → after: `L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L144) · [Before (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L144)

```diff
-   40498: (pp, ip, cp) => {
+   40432: (TT, UT, mT) => {
```

#### 16. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L146` → after: `L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L146) · [Before (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L146)

```diff
-       d: () => Ap
+       e: () => lT
```

#### 17. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L148-L150` → after: `L148-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L148-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L148-L150) · [Before (L148-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L148-L150)

```diff
-     var Op = cp(37329),
-       op = cp(37320),
-       Ip = cp(40504);
+     var WT = mT(37205),
+       zT = mT(37188),
+       MT = mT(40440);
```

#### 18. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L153` → after: `L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L153) · [Before (L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L153)

```diff
-         this.center = op.o.Zero(), this.centerWorld = op.o.Zero(), this.minimum = op.o.Zero(), this.maximum = op.o.Zero(), this.reConstruct(pp, ip, cp)
+         this.center = zT.p.Zero(), this.centerWorld = zT.p.Zero(), this.minimum = zT.p.Zero(), this.maximum = zT.p.Zero(), this.reConstruct(TT, UT, mT)
```

#### 19. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L156-L158` → after: `L156-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L156-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L156-L158) · [Before (L156-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L156-L158)

```diff
-         this.minimum.rM(pp), this.maximum.rM(ip);
-         const Op = op.o.Distance(pp, ip);
-         ip.addToRef(pp, this.center).scaleInPlace(.5), this.radius = .5 * Op, this._update(cp || op.b.IdentityReadOnly)
+         this.minimum.Gw(TT), this.maximum.Gw(UT);
+         const WT = zT.p.Distance(TT, UT);
+         UT.addToRef(TT, this.center).scaleInPlace(.5), this.radius = .5 * WT, this._update(mT || zT.e.IdentityReadOnly)
```

#### 20. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L175` → after: `L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L175) · [Before (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L175)

```diff
-         if (pp.isIdentity()) this.centerWorld.rM(this.center), this.radiusWorld = this.radius;
+         if (TT.isIdentity()) this.centerWorld.Gw(this.center), this.radiusWorld = this.radius;
```

#### 21. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L177` → after: `L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L177) · [Before (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L177)

```diff
-           op.o.TransformCoordinatesToRef(this.center, pp, this.centerWorld);
+           zT.p.TransformCoordinatesToRef(this.center, TT, this.centerWorld);
```

#### 22. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L179` → after: `L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L179) · [Before (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L179)

```diff
-           op.o.TransformNormalFromFloatsToRef(1, 1, 1, pp, ip), this.radiusWorld = Math.max(Math.abs(ip.x), Math.abs(ip.y), Math.abs(ip.z)) * this.radius
+           zT.p.TransformNormalFromFloatsToRef(1, 1, 1, TT, UT), this.radiusWorld = Math.max(Math.abs(UT.x), Math.abs(UT.y), Math.abs(UT.z)) * this.radius
```

#### 23. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L196` → after: `L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L196) · [Before (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L196)

```diff
-         const ip = op.o.DistanceSquared(this.centerWorld, pp);
+         const UT = zT.p.DistanceSquared(this.centerWorld, TT);
```

#### 24. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L200` → after: `L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L200) · [Before (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L200)

```diff
-         const cp = op.o.DistanceSquared(pp.centerWorld, ip.centerWorld),
+         const mT = zT.p.DistanceSquared(TT.centerWorld, UT.centerWorld),
```

#### 25. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L205` → after: `L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L205) · [Before (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L205)

```diff
-         this._TmpVector3[0].rM(pp), this._TmpVector3[1].i5(0, 0, ip), this._TmpVector3[2].rM(pp), this._TmpVector3[0].addInPlace(this._TmpVector3[1]), this._TmpVector3[2].Iop(this._TmpVector3[1]);
+         this._TmpVector3[0].Gw(TT), this._TmpVector3[1].J9(0, 0, UT), this._TmpVector3[2].Gw(TT), this._TmpVector3[0].addInPlace(this._TmpVector3[1]), this._TmpVector3[2].FWT(this._TmpVector3[1]);
```

#### 26. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L207` → after: `L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L207) · [Before (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L207)

```diff
-         return Op._worldMatrix = cp || op.b.Identity(), Op
+         return WT._worldMatrix = mT || zT.e.Identity(), WT
```

#### 27. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L210` → after: `L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L210) · [Before (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L210)

```diff
-     Sp._TmpVector3 = (0, Op.d)(3, op.o.Zero);
+     gT._TmpVector3 = (0, WT.c)(3, zT.p.Zero);
```

#### 28. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L220-L221` → after: `L220-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L220-L221) · [Before (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L220-L221)

```diff
-         const Op = op.o.Dot(ip.centerWorld, pp),
-           Ip = Math.abs(op.o.Dot(ip.directions[0], pp)) * ip.extendSize.x + Math.abs(op.o.Dot(ip.directions[1], pp)) * ip.extendSize.y + Math.abs(op.o.Dot(ip.directions[2], pp)) * ip.extendSize.z;
+         const WT = zT.p.Dot(UT.centerWorld, TT),
+           MT = Math.abs(zT.p.Dot(UT.directions[0], TT)) * UT.extendSize.x + Math.abs(zT.p.Dot(UT.directions[1], TT)) * UT.extendSize.y + Math.abs(zT.p.Dot(UT.directions[2], TT)) * UT.extendSize.z;
```

#### 29. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L227` → after: `L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L227) · [Before (L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L227)

```diff
-         this._isLocked = !1, this.boundingBox = new Ip.d(pp, ip, cp), this.Yop = new Sp(pp, ip, cp)
+         this._isLocked = !1, this.boundingBox = new MT.e(TT, UT, mT), this.rWT = new gT(TT, UT, mT)
```

#### 30. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L230` → after: `L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L230) · [Before (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L230)

```diff
-         this.boundingBox.reConstruct(pp, ip, cp), this.Yop.reConstruct(pp, ip, cp)
+         this.boundingBox.reConstruct(TT, UT, mT), this.rWT.reConstruct(TT, UT, mT)
```

#### 31. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L245` → after: `L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L245) · [Before (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L245)

```diff
-         this._isLocked || (this.boundingBox._update(pp), this.Yop._update(pp))
+         this._isLocked || (this.boundingBox._update(TT), this.rWT._update(TT))
```

#### 32. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L248-L250` → after: `L248-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L248-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L248-L250) · [Before (L248-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L248-L250)

```diff
-         const cp = Ap._TmpVector3[0].rM(pp).Iop(ip),
-           Op = Ap._TmpVector3[1].rM(pp).addInPlace(ip);
-         return this.boundingBox.reConstruct(cp, Op, this.boundingBox.getWorldMatrix()), this.Yop.reConstruct(cp, Op, this.boundingBox.getWorldMatrix()), this
+         const mT = lT._TmpVector3[0].Gw(TT).FWT(UT),
+           WT = lT._TmpVector3[1].Gw(TT).addInPlace(UT);
+         return this.boundingBox.reConstruct(mT, WT, this.boundingBox.getWorldMatrix()), this.rWT.reConstruct(mT, WT, this.boundingBox.getWorldMatrix()), this
```

#### 33. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L253-L254` → after: `L253-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L253-L254) · [Before (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L253-L254)

```diff
-         const ip = op.o.Minimize(this.minimum, pp),
-           cp = op.o.Maximize(this.maximum, pp);
+         const UT = zT.p.Minimize(this.minimum, TT),
+           mT = zT.p.Maximize(this.maximum, TT);
```

#### 34. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L258` → after: `L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L258) · [Before (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L258)

```diff
-         const ip = op.i.Matrix[0];
+         const UT = zT.l.Matrix[0];
```

#### 35. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L260-L261` → after: `L260-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L260-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L260-L261) · [Before (L260-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L260-L261)

```diff
-         const cp = op.i.Zy[0];
-         return op.o.TransformCoordinatesToRef(pp.boundingBox.minimumWorld, ip, cp), this.encapsulate(cp), op.o.TransformCoordinatesToRef(pp.boundingBox.maximumWorld, ip, cp), this.encapsulate(cp), this
+         const mT = zT.l.JB[0];
+         return zT.p.TransformCoordinatesToRef(TT.boundingBox.minimumWorld, UT, mT), this.encapsulate(mT), zT.p.TransformCoordinatesToRef(TT.boundingBox.maximumWorld, UT, mT), this.encapsulate(mT), this
```

#### 36. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L264` → after: `L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L264) · [Before (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L264)

```diff
-         return this.boundingBox.scale(pp), this.Yop.scale(pp), this
+         return this.boundingBox.scale(TT), this.rWT.scale(TT), this
```

#### 37. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L268-L269` → after: `L268-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L268-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L268-L269) · [Before (L268-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L268-L269)

```diff
-         if ((2 === ip || 3 === ip) && this.Yop.isCenterInFrustum(pp)) return !0;
-         if (!this.Yop.isInFrustum(pp)) return !1;
+         if ((2 === UT || 3 === UT) && this.rWT.isCenterInFrustum(TT)) return !0;
+         if (!this.rWT.isInFrustum(TT)) return !1;
```

#### 38. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L280` → after: `L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L280) · [Before (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L280)

```diff
-         return pp._canDoCollision(this.Yop.centerWorld, this.Yop.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
+         return TT._canDoCollision(this.rWT.centerWorld, this.rWT.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
```

#### 39. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L283` → after: `L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L283) · [Before (L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L283)

```diff
-         return !!this.Yop.centerWorld && (!!this.Yop.intersectsPoint(pp) && !!this.boundingBox.intersectsPoint(pp))
+         return !!this.rWT.centerWorld && (!!this.rWT.intersectsPoint(TT) && !!this.boundingBox.intersectsPoint(TT))
```

#### 40. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L286-L287` → after: `L286-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L286-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L286-L287) · [Before (L286-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L286-L287)

```diff
-         if (!Sp.Intersects(this.Yop, pp.Yop)) return !1;
-         if (!Ip.d.Intersects(this.boundingBox, pp.boundingBox)) return !1;
+         if (!gT.Intersects(this.rWT, TT.rWT)) return !1;
+         if (!MT.e.Intersects(this.boundingBox, TT.boundingBox)) return !1;
```

#### 41. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L291` → after: `L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L291) · [Before (L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L291)

```diff
-         return !!Dp(cp.directions[0], cp, Op) && (!!Dp(cp.directions[1], cp, Op) && (!!Dp(cp.directions[2], cp, Op) && (!!Dp(Op.directions[0], cp, Op) && (!!Dp(Op.directions[1], cp, Op) && (!!Dp(Op.directions[2], cp, Op) && (!!Dp(op.o.Cross(cp.directions[0], Op.directions[0]), cp … [truncated]
+         return !!jT(mT.directions[0], mT, WT) && (!!jT(mT.directions[1], mT, WT) && (!!jT(mT.directions[2], mT, WT) && (!!jT(WT.directions[0], mT, WT) && (!!jT(WT.directions[1], mT, WT) && (!!jT(WT.directions[2], mT, WT) && (!!jT(zT.p.Cross(mT.directions[0], WT.directions[0]), mT … [truncated]
```

#### 42. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L294` → after: `L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L294) · [Before (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L294)

```diff
-     Ap._TmpVector3 = (0, Op.d)(2, op.o.Zero)
+     lT._TmpVector3 = (0, WT.c)(2, zT.p.Zero)
```

#### 43. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L296` → after: `L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L296) · [Before (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L296)

```diff
-   40516: (pp, ip, cp) => {
+   40463: (TT, UT, mT) => {
```

#### 44. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L303-L304` → after: `L303-L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L303-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L303-L304) · [Before (L303-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L303-L304)

```diff
-     var Op = cp(40352),
-       op = cp(37320);
+     var WT = mT(40263),
+       zT = mT(37188);
```

#### 45. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L338-L339` → after: `L338-L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L338-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L338-L339) · [Before (L338-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L338-L339)

```diff
-         const Ip = Op.c.Gl()?.floatingOriginOffset || op.o.ZeroReadOnly;
-         pp.setFloat4(ip, cp.normal.x, cp.normal.y, cp.normal.z, cp.d + op.o.Dot(cp.normal, Ip))
+         const MT = WT.b.KF()?.floatingOriginOffset || zT.p.ZeroReadOnly;
+         TT.setFloat4(UT, mT.normal.x, mT.normal.y, mT.normal.z, mT.d + zT.p.Dot(mT.normal, MT))
```

#### 46. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L343` → after: `L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L343) · [Before (L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L343)

```diff
-   40530: (pp, ip, cp) => {
+   40479: (TT, UT, mT) => {
```

#### 47. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L366` → after: `L366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L366) · [Before (L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L366)

```diff
-           const cp = this._mesh.Gl();
+           const mT = this._mesh.KF();
```

#### 48. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L372-L373` → after: `L372-L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L372-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L372-L373) · [Before (L372-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L372-L373)

```diff
-                 else if (Op.Am)
-                 for (const pp of Op.Am) {
+                 else if (WT.rY)
+                 for (const TT of WT.rY) {
```

#### 49. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L391` → after: `L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L391) · [Before (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L391)

```diff
-   40476: (pp, ip, cp) => {
+   40413: (TT, UT, mT) => {
```

#### 50. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L395-L405` → after: `L395-L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L395-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L395-L405) · [Before (L395-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L395-L405)

```diff
-     var Op = cp(40203),
-       op = cp(40210),
-       Ip = cp(40304),
-       Sp = cp(37349),
-       xp = cp(37345),
-       Lp = cp(40481),
-       Yp = cp(40332),
-       Dp = cp(38905),
-       Ap = cp(37989),
-       Pp = cp(40509),
-       Wp = cp(40233);
+     var WT = mT(40095),
+       zT = mT(40102),
+       MT = mT(40201),
+       gT = mT(37219),
+       nT = mT(37216),
+       HT = mT(40418),
+       kT = mT(40242),
+       jT = mT(38800),
+       lT = mT(37889),
+       LT = mT(40449),
+       pT = mT(40122);
```

#### 51. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L411` → after: `L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L411) · [Before (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L411)

```diff
-           this._func = (0, Op.l)(this, wp), this.reset()
+           this._func = (0, WT.k)(this, cT), this.reset()
```

#### 52. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L492` → after: `L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L492) · [Before (L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L492)

```diff
-           Wp.c.Clone((() => pp), this)
+           pT.e.Clone((() => TT), this)
```

#### 53. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L495` → after: `L495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L495) · [Before (L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L495)

```diff
-           return Wp.c.Serialize(this)
+           return pT.e.Serialize(this)
```

#### 54. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L498` → after: `L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L498) · [Before (L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L498)

```diff
-           Wp.c.Parse((() => this), pp, ip, cp)
+           pT.e.Parse((() => this), TT, UT, mT)
```

#### 55. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L502` → after: `L502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L502) · [Before (L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L502)

```diff
-         ip = [(0, op.K)()], cp = [(0, op.K)()], Ip = [(0, op.K)()], Sp = [(0, op.K)()], xp = [(0, op.K)()], Lp = [(0, op.K)()], Yp = [(0, op.K)()], Dp = [(0, op.K)()], Ap = [(0, op.K)()], Pp = [(0, op.K)()], yp = [(0, op.K)()], Up = [(0, op.K)()], (0, Op.j)(pp, null, ip, {
+         UT = [(0, zT.L)()], mT = [(0, zT.L)()], MT = [(0, zT.L)()], gT = [(0, zT.L)()], nT = [(0, zT.L)()], HT = [(0, zT.L)()], kT = [(0, zT.L)()], jT = [(0, zT.L)()], lT = [(0, zT.L)()], LT = [(0, zT.L)()], BT = [(0, zT.L)()], ZT = [(0, zT.L)()], (0, WT.h)(TT, null, UT, {
```

#### 56. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L512` → after: `L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L512) · [Before (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L512)

```diff
-         }, null, wp), (0, Op.j)(pp, null, cp, {
+         }, null, cT), (0, WT.h)(TT, null, mT, {
```

#### 57. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L522` → after: `L522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L522) · [Before (L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L522)

```diff
-         }, null, wp), (0, Op.j)(pp, null, Ip, {
+         }, null, cT), (0, WT.h)(TT, null, MT, {
```

#### 58. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L532` → after: `L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L532) · [Before (L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L532)

```diff
-         }, null, wp), (0, Op.j)(pp, null, Sp, {
+         }, null, cT), (0, WT.h)(TT, null, gT, {
```

#### 59. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L542` → after: `L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L542) · [Before (L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L542)

```diff
-         }, null, wp), (0, Op.j)(pp, null, xp, {
+         }, null, cT), (0, WT.h)(TT, null, nT, {
```

#### 60. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L552` → after: `L552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L552) · [Before (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L552)

```diff
-         }, null, wp), (0, Op.j)(pp, null, Lp, {
+         }, null, cT), (0, WT.h)(TT, null, HT, {
```

#### 61. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L562` → after: `L562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L562) · [Before (L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L562)

```diff
-         }, null, wp), (0, Op.j)(pp, null, Yp, {
+         }, null, cT), (0, WT.h)(TT, null, kT, {
```

#### 62. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L572` → after: `L572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L572) · [Before (L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L572)

```diff
-         }, null, wp), (0, Op.j)(pp, null, Dp, {
+         }, null, cT), (0, WT.h)(TT, null, jT, {
```

#### 63. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L582` → after: `L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L582) · [Before (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L582)

```diff
-         }, null, wp), (0, Op.j)(pp, null, Ap, {
+         }, null, cT), (0, WT.h)(TT, null, lT, {
```

#### 64. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L592` → after: `L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L592) · [Before (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L592)

```diff
-         }, null, wp), (0, Op.j)(pp, null, Pp, {
+         }, null, cT), (0, WT.h)(TT, null, LT, {
```

#### 65. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L602` → after: `L602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L602) · [Before (L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L602)

```diff
-         }, null, wp), (0, Op.j)(pp, null, yp, {
+         }, null, cT), (0, WT.h)(TT, null, BT, {
```

#### 66. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L612` → after: `L612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L612) · [Before (L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L612)

```diff
-         }, null, wp), (0, Op.j)(pp, null, Up, {
+         }, null, cT), (0, WT.h)(TT, null, ZT, {
```

#### 67. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L630-L632` → after: `L630-L632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L630-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L630-L632) · [Before (L630-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L630-L632)

```diff
-     var Up = cp(40512),
-       wp = cp(40127),
-       vp = cp(40096);
+     var ZT = mT(40456),
+       cT = mT(40001),
+       vT = mT(39965);
```

#### 68. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L691` → after: `L691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L691) · [Before (L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L691)

```diff
-           this._useVertexPulling !== ip && (this._useVertexPulling = ip, this.ocp(pp.MiscDirtyFlag))
+           this._useVertexPulling !== UT && (this._useVertexPulling = UT, this.NUT(TT.MiscDirtyFlag))
```

#### 69. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L706` → after: `L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L706) · [Before (L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L706)

```diff
-           this._alpha = ip, 1 !== cp && 1 !== ip || this.ocp(pp.MiscDirtyFlag + pp.PrePassDirtyFlag)
+           this._alpha = UT, 1 !== mT && 1 !== UT || this.NUT(TT.MiscDirtyFlag + TT.PrePassDirtyFlag)
```

#### 70. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L712` → after: `L712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L712) · [Before (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L712)

```diff
-           this._backFaceCulling !== ip && (this._backFaceCulling = ip, this.ocp(pp.TextureDirtyFlag))
+           this._backFaceCulling !== UT && (this._backFaceCulling = UT, this.NUT(TT.TextureDirtyFlag))
```

#### 71. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L719` → after: `L719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L719) · [Before (L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L719)

```diff
-           this._textureRepetitionMode !== cp && (this._textureRepetitionMode = cp, this.ocp(pp.TextureDirtyFlag))
+           this._textureRepetitionMode !== mT && (this._textureRepetitionMode = mT, this.NUT(TT.TextureDirtyFlag))
```

#### 72. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L725` → after: `L725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L725) · [Before (L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L725)

```diff
-           this._cullBackFaces !== ip && (this._cullBackFaces = ip, this.ocp(pp.TextureDirtyFlag))
+           this._cullBackFaces !== UT && (this._cullBackFaces = UT, this.NUT(TT.TextureDirtyFlag))
```

#### 73. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L748` → after: `L748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L748) · [Before (L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L748)

```diff
-           this._onDisposeObserver && this.Kl.remove(this._onDisposeObserver), this._onDisposeObserver = this.Kl.add(pp)
+           this._onDisposeObserver && this.SF.remove(this._onDisposeObserver), this._onDisposeObserver = this.SF.add(TT)
```

#### 74. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L773` → after: `L773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L773) · [Before (L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L773)

```diff
-           this._alphaMode[cp] !== ip && (this._alphaMode[cp] = ip, this.ocp(pp.TextureDirtyFlag))
+           this._alphaMode[mT] !== UT && (this._alphaMode[mT] = UT, this.NUT(TT.TextureDirtyFlag))
```

#### 75. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L785` → after: `L785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L785) · [Before (L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L785)

```diff
-           this._fogEnabled !== ip && (this._fogEnabled = ip, this.ocp(pp.MiscDirtyFlag))
+           this._fogEnabled !== UT && (this._fogEnabled = UT, this.NUT(TT.MiscDirtyFlag))
```

#### 76. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L818` → after: `L818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L818) · [Before (L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L818)

```diff
-           this._fillMode !== ip && (this._fillMode = ip, this.ocp(pp.MiscDirtyFlag))
+           this._fillMode !== UT && (this._fillMode = UT, this.NUT(TT.MiscDirtyFlag))
```

#### 77. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L824-L825` → after: `L824-L825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L824-L825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L824-L825) · [Before (L824-L825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L824-L825)

```diff
-           const ip = this.Gl().gy().getCaps().fragmentDepthSupported;
-           pp && !ip && Dp.e.Warn("Logarithmic depth has been requested for a material on a device that doesn't support it."), this._useLogarithmicDepth = pp && ip, this._markAllSubMeshesAsMiscDirty()
+           const UT = this.KF().eB().getCaps().fragmentDepthSupported;
+           TT && !UT && jT.b.Warn("Logarithmic depth has been requested for a material on a device that doesn't support it."), this._useLogarithmicDepth = TT && UT, this._markAllSubMeshesAsMiscDirty()
```

#### 78. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L841-L843` → after: `L841-L843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L841-L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L841-L843) · [Before (L841-L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L841-L843)

```diff
-           this.customShaderNameResolve = (0, Op.l)(this, Gp), this.shadowDepthWrapper = null, this.allowShaderHotSwapping = !0, this._shaderLanguage = 0, this._forceGLSL = !1, this._useVertexPulling = !1, this.id = (0, Op.l)(this, rp, void 0), this.uniqueId = ((0, Op.l)(this, Zp) … [truncated]
-           const Dp = cp || xp.e.LastCreatedScene;
-           Dp && (this._scene = Dp, this._dirtyCallbacks = {}, this._forceGLSL = Lp, this._dirtyCallbacks[1] = this._markAllSubMeshesAsTexturesDirty.bind(this), this._dirtyCallbacks[2] = this._markAllSubMeshesAsLightsDirty.bind(this), this._dirtyCallbacks[4] = this._markAllSubMesh … [truncated]
+           this.customShaderNameResolve = (0, WT.k)(this, GT), this.shadowDepthWrapper = null, this.allowShaderHotSwapping = !0, this._shaderLanguage = 0, this._forceGLSL = !1, this._useVertexPulling = !1, this.id = (0, WT.k)(this, NT, void 0), this.uniqueId = ((0, WT.k)(this, ET) … [truncated]
+           const jT = mT || nT.c.LastCreatedScene;
+           jT && (this._scene = jT, this._dirtyCallbacks = {}, this._forceGLSL = HT, this._dirtyCallbacks[1] = this._markAllSubMeshesAsTexturesDirty.bind(this), this._dirtyCallbacks[2] = this._markAllSubMeshesAsLightsDirty.bind(this), this._dirtyCallbacks[4] = this._markAllSubMesh … [truncated]
```

#### 79. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L846-L847` → after: `L846-L847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L846-L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L846-L847) · [Before (L846-L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L846-L847)

```diff
-           const pp = this.Gl().gy();
-           this._uniformBuffer?.dispose(), pp.isWebGPU && !this._forceGLSL ? (this._uniformBuffer = new Yp.b(pp, void 0, void 0, this.name, !0), this._shaderLanguage = 1) : this._uniformBuffer = new Yp.b(this._scene.gy(), void 0, void 0, this.name), this._uniformBufferLayoutBuilt  … [truncated]
+           const TT = this.KF().eB();
+           this._uniformBuffer?.dispose(), TT.isWebGPU && !this._forceGLSL ? (this._uniformBuffer = new kT.c(TT, void 0, void 0, this.name, !0), this._shaderLanguage = 1) : this._uniformBuffer = new kT.c(this._scene.eB(), void 0, void 0, this.name), this._uniformBufferLayoutBuilt  … [truncated]
```

#### 80. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L918` → after: `L918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L918) · [Before (L918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L918)

```diff
-           const cp = this.Gl().meshes;
+           const mT = this.KF().meshes;
```

#### 81. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L920-L922` → after: `L920-L922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L920-L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L920-L922) · [Before (L920-L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L920-L922)

```diff
-             if (pp.Am)
-               for (const cp of pp.Am)
-                 if (cp.Ky() === this)
+             if (TT.rY)
+               for (const mT of TT.rY)
+                 if (mT.wB() === this)
```

#### 82. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L924` → after: `L924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L924) · [Before (L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L924)

```diff
-           ip && this.ocp(pp.AllDirtyFlag)
+           UT && this.NUT(TT.AllDirtyFlag)
```

#### 83. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L928` → after: `L928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L928) · [Before (L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L928)

```diff
-           const Op = this._scene.gy(),
+           const WT = this._scene.eB(),
```

#### 84. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L931` → after: `L931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L931) · [Before (L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L931)

```diff
-           return (0, wp.e)(Ip) && Ip.materialContext && (Ip.materialContext.useVertexPulling = this.useVertexPulling), Op.enableEffect(Ip), Op.setState(this.backFaceCulling, this.zOffset, !1, op, this._scene._mirroredCameraPosition ? !this.cullBackFaces : this.cullBackFaces, this … [truncated]
+           return (0, cT.b)(MT) && MT.materialContext && (MT.materialContext.useVertexPulling = this.useVertexPulling), WT.enableEffect(MT), WT.setState(this.backFaceCulling, this.zOffset, !1, zT, this._scene._mirroredCameraPosition ? !this.cullBackFaces : this.cullBackFaces, this … [truncated]
```

#### 85. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L944` → after: `L944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L944) · [Before (L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L944)

```diff
-           this._useUBO ? this._needToBindSceneUbo = !0 : pp.setMatrix("view", this.Gl().getViewMatrix())
+           this._useUBO ? this._needToBindSceneUbo = !0 : TT.setMatrix("view", this.KF().getViewMatrix())
```

#### 86. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L947` → after: `L947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L947) · [Before (L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L947)

```diff
-           this._useUBO ? this._needToBindSceneUbo = !0 : (pp.setMatrix("viewProjection", this.Gl().getTransformMatrix()), pp.setMatrix("projection", this.Gl().getProjectionMatrix()), pp.setMatrix("inverseProjection", this.Gl().getInverseProjectionMatrix()))
+           this._useUBO ? this._needToBindSceneUbo = !0 : (TT.setMatrix("viewProjection", this.KF().getTransformMatrix()), TT.setMatrix("projection", this.KF().getProjectionMatrix()), TT.setMatrix("inverseProjection", this.KF().getInverseProjectionMatrix()))
```

#### 87. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L954-L955` → after: `L954-L955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L954-L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L954-L955) · [Before (L954-L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L954-L955)

```diff
-           if (this._scene._cachedMaterial = this, this._needToBindSceneUbo && ip && (this._needToBindSceneUbo = !1, (0, Up.y)(ip, this.Gl().getSceneUniformBuffer()), this._scene.finalizeSceneUbo()), this._scene._cachedVisibility = pp ? pp.visibility : 1, this._onBindObservable && … [truncated]
-             const pp = this._scene.gy();
+           if (this._scene._cachedMaterial = this, this._needToBindSceneUbo && UT && (this._needToBindSceneUbo = !1, (0, ZT.v)(UT, this.KF().getSceneUniformBuffer()), this._scene.finalizeSceneUbo()), this._scene._cachedVisibility = TT ? TT.visibility : 1, this._onBindObservable && … [truncated]
+             const TT = this._scene.eB();
```

#### 88. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L959` → after: `L959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L959) · [Before (L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L959)

```diff
-             const pp = this._scene.gy();
+             const TT = this._scene.eB();
```

#### 89. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L963` → after: `L963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L963) · [Before (L963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L963)

```diff
-             const pp = this._scene.gy();
+             const TT = this._scene.eB();
```

#### 90. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L969` → after: `L969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L969) · [Before (L969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L969)

```diff
-             this._scene.gy().setDepthFunction(this._cachedDepthFunctionState)
+             this._scene.eB().setDepthFunction(this._cachedDepthFunctionState)
```

#### 91. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L972` → after: `L972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L972) · [Before (L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L972)

```diff
-             this._scene.gy().setDepthWrite(this._cachedDepthWriteState)
+             this._scene.eB().setDepthWrite(this._cachedDepthWriteState)
```

#### 92. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L975` → after: `L975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L975) · [Before (L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L975)

```diff
-             this._scene.gy().setColorWrite(this._cachedColorWriteState)
+             this._scene.eB().setColorWrite(this._cachedColorWriteState)
```

#### 93. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1015` → after: `L1015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1015) · [Before (L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1015)

```diff
-             Ip = this.Gl(),
+             MT = this.KF(),
```

#### 94. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1019` → after: `L1019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1019) · [Before (L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1019)

```diff
-             if (!this._scene || !this._scene.gy()) return;
+             if (!this._scene || !this._scene.eB()) return;
```

#### 95. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1024-L1025` → after: `L1024-L1025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1024-L1025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1024-L1025) · [Before (L1024-L1025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1024-L1025)

```diff
-               if (pp.Am) {
-                 const ip = new Lp.d(0, 0, 0, 0, 0, pp, void 0, !1, !1);
+               if (TT.rY) {
+                 const UT = new HT.e(0, 0, 0, 0, 0, TT, void 0, !1, !1);
```

#### 96. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1043-L1044` → after: `L1043-L1044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1043-L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1043-L1044) · [Before (L1043-L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1043-L1044)

```diff
-         ocp(ip) {
-           this.Gl().blockMaterialDirtyMechanism || this._blockDirtyMechanism || (pp._DirtyCallbackArray.length = 0, ip & pp.ImageProcessingDirtyFlag && pp._DirtyCallbackArray.push(pp._ImageProcessingDirtyCallBack), ip & pp.TextureDirtyFlag && pp._DirtyCallbackArray.push(pp._Textu … [truncated]
+         NUT(UT) {
+           this.KF().blockMaterialDirtyMechanism || this._blockDirtyMechanism || (TT._DirtyCallbackArray.length = 0, UT & TT.ImageProcessingDirtyFlag && TT._DirtyCallbackArray.push(TT._ImageProcessingDirtyCallBack), UT & TT.TextureDirtyFlag && TT._DirtyCallbackArray.push(TT._Textu … [truncated]
```

#### 97. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1047` → after: `L1047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1047) · [Before (L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1047)

```diff
-           const pp = this.Gl().meshes;
+           const TT = this.KF().meshes;
```

#### 98. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1049-L1050` → after: `L1049-L1050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1049-L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1049-L1050) · [Before (L1049-L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1049-L1050)

```diff
-             if (ip.Am)
-               for (const pp of ip.Am) pp.Ky() === this && pp.resetDrawCache()
+             if (UT.rY)
+               for (const TT of UT.rY) TT.wB() === this && TT.resetDrawCache()
```

#### 99. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1053` → after: `L1053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1053) · [Before (L1053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1053)

```diff
-           const ip = this.Gl();
+           const UT = this.KF();
```

#### 100. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1057-L1059` → after: `L1057-L1059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1057-L1059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1057-L1059) · [Before (L1057-L1059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1057-L1059)

```diff
-             if (Op.Am)
-               for (const cp of Op.Am) {
-                 if ((cp.Ky() || (ip._hasDefaultMaterial ? ip.defaultMaterial : null)) === this)
+             if (WT.rY)
+               for (const mT of WT.rY) {
+                 if ((mT.wB() || (UT._hasDefaultMaterial ? UT.defaultMaterial : null)) === this)
```

#### 101. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1064-L1066` → after: `L1064-L1066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1064-L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1064-L1066) · [Before (L1064-L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1064-L1066)

```diff
-           if (this.Gl().blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
-           const pp = this.Gl().enablePrePassRenderer();
-           pp && pp.ocp()
+           if (this.KF().blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
+           const TT = this.KF().enablePrePassRenderer();
+           TT && TT.NUT()
```

#### 102. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1104` → after: `L1104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1104) · [Before (L1104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1104)

```diff
-             this.Kl.add((() => {
+             this.SF.add((() => {
```

#### 103. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1113` → after: `L1113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1113) · [Before (L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1113)

```diff
-           const Op = this.Gl();
+           const WT = this.KF();
```

#### 104. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1127` → after: `L1127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1127) · [Before (L1127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1127)

```diff
-           this._uniformBuffer.dispose(), this._drawWrapper.effect && (this._storeEffectOnSubMeshes || this._drawWrapper.effect.dispose(), this._drawWrapper.effect = null), this.metadata = null, this.Kl.notifyObservers(this), this.Kl.clear(), this._onBindObservable && this._onBind … [truncated]
+           this._uniformBuffer.dispose(), this._drawWrapper.effect && (this._storeEffectOnSubMeshes || this._drawWrapper.effect.dispose(), this._drawWrapper.effect = null), this.metadata = null, this.SF.notifyObservers(this), this.SF.clear(), this._onBindObservable && this._onBind … [truncated]
```

#### 105. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1134-L1135` → after: `L1134-L1135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1134-L1135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1134-L1135) · [Before (L1134-L1135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1134-L1135)

```diff
-             if (pp.Am && cp)
-               for (const Op of pp.Am) {
+             if (TT.rY && mT)
+               for (const WT of TT.rY) {
```

#### 106. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1144` → after: `L1144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1144) · [Before (L1144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1144)

```diff
-           pp.material !== this || pp.aop || (pp.material = null)
+           TT.material !== this || TT.czT || (TT.material = null)
```

#### 107. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1147` → after: `L1147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1147) · [Before (L1147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1147)

```diff
-           const pp = Wp.c.Serialize(this);
+           const TT = pT.e.Serialize(this);
```

#### 108. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1159` → after: `L1159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1159) · [Before (L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1159)

```diff
-             if ("BABYLON.PBRMaterial" === ip.customType && ip.overloadedAlbedo && (ip.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return Dp.e.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials  … [truncated]
+             if ("BABYLON.PBRMaterial" === UT.customType && UT.overloadedAlbedo && (UT.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return jT.b.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials  … [truncated]
```

#### 109. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1161` → after: `L1161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1161) · [Before (L1161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1161)

```diff
-           const op = Ip.i.Instantiate(ip.customType).Parse(ip, cp, Op);
+           const zT = MT.j.Instantiate(UT.customType).Parse(UT, mT, WT);
```

#### 110. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1170` → after: `L1170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1170) · [Before (L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1170)

```diff
-                 const pp = Ip.i.Instantiate("BABYLON." + op);
+                 const TT = MT.j.Instantiate("BABYLON." + zT);
```

#### 111. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1178` → after: `L1178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1178) · [Before (L1178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1178)

```diff
-         ip = [(0, op.K)()], cp = [(0, op.K)()], vp = [(0, op.K)()], tp = [(0, op.K)()], Hp = [(0, op.K)()], dp = [(0, op.K)()], ep = [(0, op.K)()], jp = [(0, op.K)("alpha")], kp = [(0, op.K)("backFaceCulling")], mp = [(0, op.K)("textureRepetitionMode")], Rp = [(0, op.K)("textureR … [truncated]
+         UT = [(0, zT.L)()], mT = [(0, zT.L)()], vT = [(0, zT.L)()], fT = [(0, zT.L)()], qT = [(0, zT.L)()], iT = [(0, zT.L)()], bT = [(0, zT.L)()], OT = [(0, zT.L)("alpha")], eT = [(0, zT.L)("backFaceCulling")], YT = [(0, zT.L)("textureRepetitionMode")], JT = [(0, zT.L)("textureR … [truncated]
```

#### 112. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1188` → after: `L1188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1188) · [Before (L1188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1188)

```diff
-         }, null, Gp), (0, Op.j)(pp, null, ap, {
+         }, null, GT), (0, WT.h)(TT, null, CT, {
```

#### 113. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1198` → after: `L1198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1198) · [Before (L1198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1198)

```diff
-         }, null, Gp), (0, Op.j)(pp, null, np, {
+         }, null, GT), (0, WT.h)(TT, null, rT, {
```

#### 114. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1208` → after: `L1208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1208) · [Before (L1208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1208)

```diff
-         }, null, Gp), (0, Op.j)(pp, null, gp, {
+         }, null, GT), (0, WT.h)(TT, null, ST, {
```

#### 115. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1218` → after: `L1218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1218) · [Before (L1218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1218)

```diff
-         }, null, Gp), (0, Op.j)(null, null, ip, {
+         }, null, GT), (0, WT.h)(null, null, UT, {
```

#### 116. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1231` → after: `L1231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1231) · [Before (L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1231)

```diff
-         }, rp, Zp), (0, Op.j)(null, null, cp, {
+         }, NT, ET), (0, WT.h)(null, null, mT, {
```

#### 117. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1244` → after: `L1244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1244) · [Before (L1244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1244)

```diff
-         }, zp, sp), (0, Op.j)(null, null, vp, {
+         }, hT, DT), (0, WT.h)(null, null, vT, {
```

#### 118. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1257` → after: `L1257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1257) · [Before (L1257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1257)

```diff
-         }, Kp, Vp), (0, Op.j)(null, null, tp, {
+         }, oT, AT), (0, WT.h)(null, null, fT, {
```

#### 119. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1270` → after: `L1270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1270) · [Before (L1270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1270)

```diff
-         }, ii, ci), (0, Op.j)(null, null, Hp, {
+         }, RT, TU), (0, WT.h)(null, null, qT, {
```

#### 120. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1283` → after: `L1283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1283) · [Before (L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1283)

```diff
-         }, Oi, oi), (0, Op.j)(null, null, dp, {
+         }, UU, mU), (0, WT.h)(null, null, iT, {
```

#### 121. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1296` → after: `L1296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1296) · [Before (L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1296)

```diff
-         }, Ii, Si), (0, Op.j)(null, null, ep, {
+         }, WU, zU), (0, WT.h)(null, null, bT, {
```

#### 122. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1309` → after: `L1309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1309) · [Before (L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1309)

```diff
-         }, xi, Li), (0, Op.j)(null, null, jp, {
+         }, MU, gU), (0, WT.h)(null, null, OT, {
```

#### 123. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1322` → after: `L1322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1322) · [Before (L1322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1322)

```diff
-         }, Yi, Di), (0, Op.j)(null, null, kp, {
+         }, nU, HU), (0, WT.h)(null, null, eT, {
```

#### 124. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1335` → after: `L1335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1335) · [Before (L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1335)

```diff
-         }, Ai, Pi), (0, Op.j)(null, null, mp, {
+         }, kU, jU), (0, WT.h)(null, null, YT, {
```

#### 125. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1348` → after: `L1348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1348) · [Before (L1348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1348)

```diff
-         }, Wi, yi), (0, Op.j)(null, null, Rp, {
+         }, lU, LU), (0, WT.h)(null, null, JT, {
```

#### 126. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1361` → after: `L1361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1361) · [Before (L1361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1361)

```diff
-         }, Ui, wi), (0, Op.j)(null, null, qp, {
+         }, pU, BU), (0, WT.h)(null, null, xT, {
```

#### 127. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1374` → after: `L1374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1374) · [Before (L1374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1374)

```diff
-         }, vi, ti), (0, Op.j)(null, null, Mp, {
+         }, ZU, cU), (0, WT.h)(null, null, dT, {
```

#### 128. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1387` → after: `L1387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1387) · [Before (L1387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1387)

```diff
-         }, Hi, di), (0, Op.j)(null, null, Cp, {
+         }, vU, fU), (0, WT.h)(null, null, wT, {
```

#### 129. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1400` → after: `L1400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1400) · [Before (L1400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1400)

```diff
-         }, ei, ui), (0, Op.j)(null, null, Ep, {
+         }, qU, iU), (0, WT.h)(null, null, tT, {
```

#### 130. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1413` → after: `L1413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1413) · [Before (L1413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1413)

```diff
-         }, ji, ki), (0, Op.j)(null, null, Xp, {
+         }, bU, OU), (0, WT.h)(null, null, aT, {
```

#### 131. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1426` → after: `L1426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1426) · [Before (L1426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1426)

```diff
-         }, mi, Ri), (0, Op.j)(null, null, lp, {
+         }, eU, YU), (0, WT.h)(null, null, yT, {
```

#### 132. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1439` → after: `L1439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1439) · [Before (L1439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1439)

```diff
-         }, qi, Mi), (0, Op.j)(null, null, Qp, {
+         }, JU, xU), (0, WT.h)(null, null, XT, {
```

#### 133. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1452` → after: `L1452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1452) · [Before (L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1452)

```diff
-         }, Ci, Ei), (0, Op.j)(null, null, Jp, {
+         }, dU, wU), (0, WT.h)(null, null, IT, {
```

#### 134. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1465` → after: `L1465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1465) · [Before (L1465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1465)

```diff
-         }, Xi, li), (0, Op.j)(null, null, Bp, {
+         }, tU, aU), (0, WT.h)(null, null, QT, {
```

#### 135. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1478` → after: `L1478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1478) · [Before (L1478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1478)

```diff
-         }, Qi, Ji), (0, Op.j)(null, null, Np, {
+         }, yU, XU), (0, WT.h)(null, null, sT, {
```

#### 136. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1491` → after: `L1491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1491) · [Before (L1491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1491)

```diff
-         }, Bi, Ni), (0, Op.j)(null, null, Tp, {
+         }, IU, QU), (0, WT.h)(null, null, FT, {
```

#### 137. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1504` → after: `L1504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1504) · [Before (L1504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1504)

```diff
-         }, Ti, fi), (0, Op.j)(null, null, fp, {
+         }, sU, FU), (0, WT.h)(null, null, PT, {
```

#### 138. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1517` → after: `L1517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1517) · [Before (L1517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1517)

```diff
-         }, bi, ai), (0, Op.j)(null, null, bp, {
+         }, PU, VU), (0, WT.h)(null, null, VT, {
```

#### 139. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1530` → after: `L1530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1530) · [Before (L1530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1530)

```diff
-         }, ni, Fi), (0, Op.j)(null, null, Fp, {
+         }, uU, CU), (0, WT.h)(null, null, KT, {
```

#### 140. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1559` → after: `L1559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1559) · [Before (L1559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1559)

```diff
-   40519: (pp, ip, cp) => {
+   40465: (TT, UT, mT) => {
```

#### 141. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1561` → after: `L1561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1561) · [Before (L1561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1561)

```diff
-       c: () => op
+       e: () => zT
```

#### 142. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1563` → after: `L1563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1563) · [Before (L1563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1563)

```diff
-     var Op = cp(40113);
+     var WT = mT(39982);
```

#### 143. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1569` → after: `L1569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1569) · [Before (L1569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1569)

```diff
-         this._DiffuseTextureEnabled !== pp && (this._DiffuseTextureEnabled = pp, Op.b.MarkAllMaterialsAsDirty(1))
+         this._DiffuseTextureEnabled !== TT && (this._DiffuseTextureEnabled = TT, WT.c.MarkAllMaterialsAsDirty(1))
```

#### 144. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1575` → after: `L1575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1575) · [Before (L1575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1575)

```diff
-         this._BaseWeightTextureEnabled !== pp && (this._BaseWeightTextureEnabled = pp, Op.b.MarkAllMaterialsAsDirty(1))
+         this._BaseWeightTextureEnabled !== TT && (this._BaseWeightTextureEnabled = TT, WT.c.MarkAllMaterialsAsDirty(1))
```

#### 145. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1581` → after: `L1581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1581) · [Before (L1581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1581)

```diff
-         this._BaseDiffuseRoughnessTextureEnabled !== pp && (this._BaseDiffuseRoughnessTextureEnabled = pp, Op.b.MarkAllMaterialsAsDirty(1))
+         this._BaseDiffuseRoughnessTextureEnabled !== TT && (this._BaseDiffuseRoughnessTextureEnabled = TT, WT.c.MarkAllMaterialsAsDirty(1))
```

#### 146. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1587` → after: `L1587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1587) · [Before (L1587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1587)

```diff
-         this._DetailTextureEnabled !== pp && (this._DetailTextureEnabled = pp, Op.b.MarkAllMaterialsAsDirty(1))
+         this._DetailTextureEnabled !== TT && (this._DetailTextureEnabled = TT, WT.c.MarkAllMaterialsAsDirty(1))
```

#### 147. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1593` → after: `L1593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1593) · [Before (L1593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1593)

```diff
-         this._DecalMapEnabled !== pp && (this._DecalMapEnabled = pp, Op.b.MarkAllMaterialsAsDirty(1))
+         this._DecalMapEnabled !== TT && (this._DecalMapEnabled = TT, WT.c.MarkAllMaterialsAsDirty(1))
```

#### 148. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1599` → after: `L1599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1599) · [Before (L1599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1599)

```diff
-         this._AmbientTextureEnabled !== pp && (this._AmbientTextureEnabled = pp, Op.b.MarkAllMaterialsAsDirty(1))
+         this._AmbientTextureEnabled !== TT && (this._AmbientTextureEnabled = TT, WT.c.MarkAllMaterialsAsDirty(1))
```

#### 149. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1605` → after: `L1605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1605) · [Before (L1605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1605)

```diff
-         this._OpacityTextureEnabled !== pp && (this._OpacityTextureEnabled = pp, Op.b.MarkAllMaterialsAsDirty(1))
+         this._OpacityTextureEnabled !== TT && (this._OpacityTextureEnabled = TT, WT.c.MarkAllMaterialsAsDirty(1))
```

#### 150. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1611` → after: `L1611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1611) · [Before (L1611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1611)

```diff
-         this._ReflectionTextureEnabled !== pp && (this._ReflectionTextureEnabled = pp, Op.b.MarkAllMaterialsAsDirty(1))
+         this._ReflectionTextureEnabled !== TT && (this._ReflectionTextureEnabled = TT, WT.c.MarkAllMaterialsAsDirty(1))
```

#### 151. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1617` → after: `L1617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1617) · [Before (L1617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1617)

```diff
-         this._EmissiveTextureEnabled !== pp && (this._EmissiveTextureEnabled = pp, Op.b.MarkAllMaterialsAsDirty(1))
+         this._EmissiveTextureEnabled !== TT && (this._EmissiveTextureEnabled = TT, WT.c.MarkAllMaterialsAsDirty(1))
```

#### 152. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1623` → after: `L1623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1623) · [Before (L1623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1623)

```diff
-         this._SpecularTextureEnabled !== pp && (this._SpecularTextureEnabled = pp, Op.b.MarkAllMaterialsAsDirty(1))
+         this._SpecularTextureEnabled !== TT && (this._SpecularTextureEnabled = TT, WT.c.MarkAllMaterialsAsDirty(1))
```

#### 153. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1629` → after: `L1629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1629) · [Before (L1629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1629)

```diff
-         this._BumpTextureEnabled !== pp && (this._BumpTextureEnabled = pp, Op.b.MarkAllMaterialsAsDirty(1))
+         this._BumpTextureEnabled !== TT && (this._BumpTextureEnabled = TT, WT.c.MarkAllMaterialsAsDirty(1))
```

#### 154. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1635` → after: `L1635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1635) · [Before (L1635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1635)

```diff
-         this._LightmapTextureEnabled !== pp && (this._LightmapTextureEnabled = pp, Op.b.MarkAllMaterialsAsDirty(1))
+         this._LightmapTextureEnabled !== TT && (this._LightmapTextureEnabled = TT, WT.c.MarkAllMaterialsAsDirty(1))
```

#### 155. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1641` → after: `L1641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1641) · [Before (L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1641)

```diff
-         this._RefractionTextureEnabled !== pp && (this._RefractionTextureEnabled = pp, Op.b.MarkAllMaterialsAsDirty(1))
+         this._RefractionTextureEnabled !== TT && (this._RefractionTextureEnabled = TT, WT.c.MarkAllMaterialsAsDirty(1))
```

#### 156. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1647` → after: `L1647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1647) · [Before (L1647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1647)

```diff
-         this._ColorGradingTextureEnabled !== pp && (this._ColorGradingTextureEnabled = pp, Op.b.MarkAllMaterialsAsDirty(1))
+         this._ColorGradingTextureEnabled !== TT && (this._ColorGradingTextureEnabled = TT, WT.c.MarkAllMaterialsAsDirty(1))
```

#### 157. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1653` → after: `L1653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1653) · [Before (L1653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1653)

```diff
-         this._FresnelEnabled !== pp && (this._FresnelEnabled = pp, Op.b.MarkAllMaterialsAsDirty(4))
+         this._FresnelEnabled !== TT && (this._FresnelEnabled = TT, WT.c.MarkAllMaterialsAsDirty(4))
```

#### 158. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1659` → after: `L1659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1659) · [Before (L1659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1659)

```diff
-         this._ClearCoatTextureEnabled !== pp && (this._ClearCoatTextureEnabled = pp, Op.b.MarkAllMaterialsAsDirty(1))
+         this._ClearCoatTextureEnabled !== TT && (this._ClearCoatTextureEnabled = TT, WT.c.MarkAllMaterialsAsDirty(1))
```

#### 159. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1665` → after: `L1665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1665) · [Before (L1665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1665)

```diff
-         this._ClearCoatBumpTextureEnabled !== pp && (this._ClearCoatBumpTextureEnabled = pp, Op.b.MarkAllMaterialsAsDirty(1))
+         this._ClearCoatBumpTextureEnabled !== TT && (this._ClearCoatBumpTextureEnabled = TT, WT.c.MarkAllMaterialsAsDirty(1))
```

#### 160. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1671` → after: `L1671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1671) · [Before (L1671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1671)

```diff
-         this._ClearCoatTintTextureEnabled !== pp && (this._ClearCoatTintTextureEnabled = pp, Op.b.MarkAllMaterialsAsDirty(1))
+         this._ClearCoatTintTextureEnabled !== TT && (this._ClearCoatTintTextureEnabled = TT, WT.c.MarkAllMaterialsAsDirty(1))
```

#### 161. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1677` → after: `L1677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1677) · [Before (L1677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1677)

```diff
-         this._SheenTextureEnabled !== pp && (this._SheenTextureEnabled = pp, Op.b.MarkAllMaterialsAsDirty(1))
+         this._SheenTextureEnabled !== TT && (this._SheenTextureEnabled = TT, WT.c.MarkAllMaterialsAsDirty(1))
```

#### 162. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1683` → after: `L1683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1683) · [Before (L1683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1683)

```diff
-         this._AnisotropicTextureEnabled !== pp && (this._AnisotropicTextureEnabled = pp, Op.b.MarkAllMaterialsAsDirty(1))
+         this._AnisotropicTextureEnabled !== TT && (this._AnisotropicTextureEnabled = TT, WT.c.MarkAllMaterialsAsDirty(1))
```

#### 163. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1689` → after: `L1689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1689) · [Before (L1689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1689)

```diff
-         this._ThicknessTextureEnabled !== pp && (this._ThicknessTextureEnabled = pp, Op.b.MarkAllMaterialsAsDirty(1))
+         this._ThicknessTextureEnabled !== TT && (this._ThicknessTextureEnabled = TT, WT.c.MarkAllMaterialsAsDirty(1))
```

#### 164. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1695` → after: `L1695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1695) · [Before (L1695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1695)

```diff
-         this._RefractionIntensityTextureEnabled !== pp && (this._RefractionIntensityTextureEnabled = pp, Op.b.MarkAllMaterialsAsDirty(1))
+         this._RefractionIntensityTextureEnabled !== TT && (this._RefractionIntensityTextureEnabled = TT, WT.c.MarkAllMaterialsAsDirty(1))
```

#### 165. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1701` → after: `L1701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1701) · [Before (L1701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1701)

```diff
-         this._TranslucencyIntensityTextureEnabled !== pp && (this._TranslucencyIntensityTextureEnabled = pp, Op.b.MarkAllMaterialsAsDirty(1))
+         this._TranslucencyIntensityTextureEnabled !== TT && (this._TranslucencyIntensityTextureEnabled = TT, WT.c.MarkAllMaterialsAsDirty(1))
```

#### 166. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1707` → after: `L1707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1707) · [Before (L1707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1707)

```diff
-         this._TranslucencyColorTextureEnabled !== pp && (this._TranslucencyColorTextureEnabled = pp, Op.b.MarkAllMaterialsAsDirty(1))
+         this._TranslucencyColorTextureEnabled !== TT && (this._TranslucencyColorTextureEnabled = TT, WT.c.MarkAllMaterialsAsDirty(1))
```

#### 167. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1713` → after: `L1713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1713) · [Before (L1713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1713)

```diff
-         this._IridescenceTextureEnabled !== pp && (this._IridescenceTextureEnabled = pp, Op.b.MarkAllMaterialsAsDirty(1))
+         this._IridescenceTextureEnabled !== TT && (this._IridescenceTextureEnabled = TT, WT.c.MarkAllMaterialsAsDirty(1))
```

#### 168. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1718` → after: `L1718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1718) · [Before (L1718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1718)

```diff
-   40512: (pp, ip, cp) => {
+   40456: (TT, UT, mT) => {
```

#### 169. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1720-L1721` → after: `L1720-L1721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1720-L1721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1720-L1721) · [Before (L1720-L1721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1720-L1721)

```diff
-       A: () => dp,
-       Ab: () => yp,
+       $: () => aT,
+       C: () => bT,
```

#### 170. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1724` → after: `L1724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1724) · [Before (L1724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1724)

```diff
-       K: () => Mp,
+       J: () => pT,
```

#### 171. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1726-L1728` → after: `L1726-L1729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1726-L1729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1726-L1729) · [Before (L1726-L1728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1726-L1728)

```diff
-       P: () => Wp,
-       Q: () => Pp,
-       T: () => ap,
+       O: () => CT,
+       R: () => sT,
+       S: () => IT,
+       W: () => XT,
```

#### 172. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1733-L1735` → after: `L1732-L1735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1732-L1735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1732-L1735) · [Before (L1733-L1735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1733-L1735)

```diff
-       eb: () => Hp,
-       g: () => jp,
-       hb: () => Xp,
+       d: () => OT,
+       db: () => rT,
+       f: () => lT,
+       gb: () => KT,
```

#### 173. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1738-L1741` → after: `L1738-L1741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1738-L1741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1738-L1741) · [Before (L1738-L1741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1738-L1741)

```diff
-       k: () => vp,
-       lb: () => Fp,
-       m: () => tp,
-       nb: () => gp,
+       j: () => fT,
+       kb: () => hT,
+       l: () => xT,
+       ob: () => NT,
```

#### 174. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1743-L1745` → after: `L1743-L1745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1743-L1745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1743-L1745) · [Before (L1743-L1745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1743-L1745)

```diff
-       qb: () => zp,
-       r: () => Lp,
-       ub: () => rp,
+       rb: () => ET,
+       s: () => ZT,
+       sb: () => BT,
```

#### 175. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1747` → after: `L1747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1747) · [Before (L1747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1747)

```diff
-       xb: () => Zp,
+       x: () => iT,
```

#### 176. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1750-L1754` → after: `L1750-L1754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1750-L1754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1750-L1754) · [Before (L1750-L1754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1750-L1754)

```diff
-     var Op = cp(38905),
-       op = cp(37345),
-       Ip = cp(40398),
-       Sp = cp(40516),
-       xp = cp(40519);
+     var WT = mT(38800),
+       zT = mT(37216),
+       MT = mT(40310),
+       gT = mT(40463),
+       nT = mT(40465);
```

#### 177. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1759` → after: `L1759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1759) · [Before (L1759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1759)

```diff
-         1 === pp.mode && Op.e.Error("Logarithmic depth is not compatible with orthographic cameras!", 20), ip.setFloat("logarithmicDepthConstant", 2 / (Math.log(pp.maxZ + 1) / Math.LN2))
+         1 === TT.mode && WT.b.Error("Logarithmic depth is not compatible with orthographic cameras!", 20), UT.setFloat("logarithmicDepthConstant", 2 / (Math.log(TT.maxZ + 1) / Math.LN2))
```

#### 178. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1778` → after: `L1778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1778) · [Before (L1778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1778)

```diff
-       cp && pp.fogEnabled && (!ip || ip.applyFog) && 0 !== pp.fogMode && (cp.setFloat4("vFogInfos", pp.fogMode, pp.fogStart, pp.fogEnd, pp.fogDensity), Op ? (pp.fogColor.toLinearSpaceToRef(Yp, pp.gy().useExactSrgbConversions), cp.setColor3("vFogColor", Yp)) : cp.setColor3("vFogCo … [truncated]
+       mT && TT.fogEnabled && (!UT || UT.applyFog) && 0 !== TT.fogMode && (mT.setFloat4("vFogInfos", TT.fogMode, TT.fogStart, TT.fogEnd, TT.fogDensity), WT ? (TT.fogColor.toLinearSpaceToRef(kT, TT.eB().useExactSrgbConversions), mT.setColor3("vFogColor", kT)) : mT.setColor3("vFogCo … [truncated]
```

#### 179. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1789-L1790` → after: `L1789-L1790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1789-L1790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1789-L1790) · [Before (L1789-L1790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1789-L1790)

```diff
-       if (Sp > 0 && op.e.LastCreatedEngine) {
-         const xp = op.e.LastCreatedEngine.getCaps().maxVertexAttribs,
+       if (gT > 0 && zT.c.LastCreatedEngine) {
+         const nT = zT.c.LastCreatedEngine.getCaps().maxVertexAttribs,
```

#### 180. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1799` → after: `L1799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1799) · [Before (L1799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1799)

```diff
-         for (let cp = 0; cp < Sp; cp++) Yp && pp.push("position" + cp), Dp && pp.push("normal" + cp), Ap && pp.push("tangent" + cp), Pp && pp.push("uv_" + cp), Wp && pp.push("uv2_" + cp), yp && pp.push("color" + cp), pp.length > xp && Op.e.Error("Cannot add more vertex attributes … [truncated]
+         for (let mT = 0; mT < gT; mT++) kT && TT.push("position" + mT), jT && TT.push("normal" + mT), lT && TT.push("tangent" + mT), LT && TT.push("uv_" + mT), pT && TT.push("uv2_" + mT), BT && TT.push("color" + mT), TT.length > nT && WT.b.Error("Cannot add more vertex attributes … [truncated]
```

#### 181. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1826-L1827` → after: `L1826-L1827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1826-L1827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1826-L1827) · [Before (L1826-L1827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1826-L1827)

```diff
-       if (pp.texturesEnabled && op && xp.c.ReflectionTextureEnabled) {
-         if (cp.I3("reflectionMatrix", op.getReflectionTextureMatrix()), cp.updateFloat2("vReflectionInfos", op.level * pp.iblIntensity, Pp), Lp && op.boundingBoxSize) {
+       if (TT.texturesEnabled && zT && nT.e.ReflectionTextureEnabled) {
+         if (mT.R7("reflectionMatrix", zT.getReflectionTextureMatrix()), mT.updateFloat2("vReflectionInfos", zT.level * TT.iblIntensity, LT), HT && zT.boundingBoxSize) {
```

#### 182. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1851` → after: `L1851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1851) · [Before (L1851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1851)

```diff
-       if (Op && xp.c.ReflectionTextureEnabled) {
+       if (WT && nT.e.ReflectionTextureEnabled) {
```

#### 183. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1864` → after: `L1864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1864) · [Before (L1864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1864)

```diff
-       ip.I3(cp + "Matrix", Op)
+       UT.R7(mT + "Matrix", WT)
```

#### 184. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1880` → after: `L1880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1880) · [Before (L1880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1880)

```diff
-           Ip && (ip.setMatrices("mBones", Ip), cp && pp.Gl().prePassRenderer && pp.Gl().prePassRenderer.getIndex(2) && (cp.previousBones[pp.uniqueId] || (cp.previousBones[pp.uniqueId] = Ip.slice()), ip.setMatrices("mPreviousBones", cp.previousBones[pp.uniqueId]), Op = Ip, cp.prev … [truncated]
+           MT && (UT.setMatrices("mBones", MT), mT && TT.KF().prePassRenderer && TT.KF().prePassRenderer.getIndex(2) && (mT.previousBones[TT.uniqueId] || (mT.previousBones[TT.uniqueId] = MT.slice()), UT.setMatrices("mPreviousBones", mT.previousBones[TT.uniqueId]), WT = MT, mT.prev … [truncated]
```

#### 185. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1896` → after: `L1896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1896) · [Before (L1896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1896)

```diff
-         kp(ip.lightSources[Sp], Sp, pp, cp, "boolean" === typeof Op ? Op : Op.SPECULARTERM, ip.receiveShadows)
+         eT(UT.lightSources[gT], gT, TT, mT, "boolean" === typeof WT ? WT : WT.SPECULARTERM, UT.receiveShadows)
```

#### 186. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1947` → after: `L1947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1947) · [Before (L1947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1947)

```diff
-         const cp = pp.gy().getCaps().maxUniformBuffersPerShaderStage;
+         const mT = TT.eB().getCaps().maxUniformBuffersPerShaderStage;
```

#### 187. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1963-L1964` → after: `L1963-L1964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1963-L1964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1963-L1964) · [Before (L1963-L1964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1963-L1964)

```diff
-           Ip || (Ip = new Set, Rp.set(pp, Ip)), Ip.has(op) || (Ip.add(op), Op.e.Warn(`maxSimultaneousLights is ${ip} but this engine supports at most ${cp} simultaneous lights. Each light declares its own uniform buffer in the vertex shader, so the ${op} lights affecting this mes … [truncated]
-         }(pp.gy(), xp, Ip, Math.min(ip.lightSources.length, xp));
+           MT || (MT = new Set, JT.set(TT, MT)), MT.has(zT) || (MT.add(zT), WT.b.Warn(`maxSimultaneousLights is ${UT} but this engine supports at most ${mT} simultaneous lights. Each light declares its own uniform buffer in the vertex shader, so the ${zT} lights affecting this mes … [truncated]
+         }(TT.eB(), nT, MT, Math.min(UT.lightSources.length, nT));
```

#### 188. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1972` → after: `L1972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1972) · [Before (L1972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1972)

```diff
-       const Ap = pp.gy().getCaps();
+       const lT = TT.eB().getCaps();
```

#### 189. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1980` → after: `L1980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1980) · [Before (L1980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1980)

```diff
-       if (ip && xp.c.ReflectionTextureEnabled) {
+       if (UT && nT.e.ReflectionTextureEnabled) {
```

#### 190. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1982-L1983` → after: `L1982-L1983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1982-L1983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L1982-L1983) · [Before (L1982-L1983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L1982-L1983)

```diff
-         cp._needNormals = !0, cp.REFLECTION = !0, cp.GAMMAREFLECTION = ip.gammaSpace, cp.RGBDREFLECTION = ip.isRGBD, cp.LODINREFLECTIONALPHA = ip.lodLevelInAlpha, cp.LINEARSPECULARREFLECTION = ip.linearSpecularLOD, cp.USEIRRADIANCEMAP = !1, cp.LODBASEDMICROSFURACE = pp.gy().getCa … [truncated]
-         const Sp = pp.gy();
+         mT._needNormals = !0, mT.REFLECTION = !0, mT.GAMMAREFLECTION = UT.gammaSpace, mT.RGBDREFLECTION = UT.isRGBD, mT.LODINREFLECTIONALPHA = UT.lodLevelInAlpha, mT.LINEARSPECULARREFLECTION = UT.linearSpecularLOD, mT.USEIRRADIANCEMAP = !1, mT.LODBASEDMICROSFURACE = TT.eB().getCa … [truncated]
+         const gT = TT.eB();
```

#### 191. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2052` → after: `L2052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L2052) · [Before (L2052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L2052)

```diff
-       !1 !== Ip && (Lp = (0, Sp.i)(cp, pp, Op)), Op.DEPTHPREPASS !== !ip.getColorWrite() && (Op.DEPTHPREPASS = !Op.DEPTHPREPASS, Lp = !0), Op.INSTANCES !== op && (Op.INSTANCES = op, Lp = !0), Op.THIN_INSTANCES !== xp && (Op.THIN_INSTANCES = xp, Lp = !0), Lp && Op.markAsUnprocesse … [truncated]
+       !1 !== MT && (HT = (0, gT.g)(mT, TT, WT)), WT.DEPTHPREPASS !== !UT.getColorWrite() && (WT.DEPTHPREPASS = !WT.DEPTHPREPASS, HT = !0), WT.INSTANCES !== zT && (WT.INSTANCES = zT, HT = !0), WT.THIN_INSTANCES !== nT && (WT.THIN_INSTANCES = nT, HT = !0), HT && WT.markAsUnprocesse … [truncated]
```

#### 192. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2065` → after: `L2065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L2065) · [Before (L2065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L2065)

```diff
-       for (let Op = 1; Op <= 6; ++Op) ip["UV" + Op] = !!ip._needUVs && pp.isVerticesDataPresent(`uv${1===Op?"":Op}`);
+       for (let WT = 1; WT <= 6; ++WT) UT["UV" + WT] = !!UT._needUVs && TT.isVerticesDataPresent(`uv${1===WT?"":WT}`);
```

#### 193. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2070` → after: `L2070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L2070) · [Before (L2070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L2070)

```diff
-       return pp.isVerticesDataPresent("instanceColor") && (pp.fop || pp.hasThinInstances) && (ip.INSTANCESCOLOR = !0), op && function(pp, ip) {
+       return TT.isVerticesDataPresent("instanceColor") && (TT.ZzT || TT.hasThinInstances) && (UT.INSTANCESCOLOR = !0), zT && function(TT, UT) {
```

#### 194. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2077` → after: `L2077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L2077) · [Before (L2077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L2077)

```diff
-             const op = pp.Gl(),
+             const zT = TT.KF(),
```

#### 195. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2087` → after: `L2087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L2087) · [Before (L2087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L2087)

```diff
-               const cp = op.gy().getCaps().maxVertexUniformVectors;
+               const mT = zT.eB().getCaps().maxVertexUniformVectors;
```

#### 196. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2090` → after: `L2090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L2090) · [Before (L2090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L2090)

```diff
-                   Ip = Sp ? fp : Tp,
+                   MT = gT ? PT : FT,
```

#### 197. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2092` → after: `L2092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L2092) · [Before (L2092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L2092)

```diff
-                 (op > xp || Sp && 3 * op > cp) && (hp.add(pp.skeleton), Op.e.Warn(`Skeleton "${pp.skeleton.name}": ${pp.skeleton.bones.length} bones stored as vertex uniforms use ${op} of ~${xp} usable uniform vectors${Sp?" (multiview)":""} on a device reporting ${cp}. This can e … [truncated]
+                 (zT > nT || gT && 3 * zT > mT) && (uT.add(TT.skeleton), WT.b.Warn(`Skeleton "${TT.skeleton.name}": ${TT.skeleton.bones.length} bones stored as vertex uniforms use ${zT} of ~${nT} usable uniform vectors${gT?" (multiview)":""} on a device reporting ${mT}. This can e … [truncated]
```

#### 198. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2116` → after: `L2116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L2116) · [Before (L2116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L2116)

```diff
-       ip.ORDER_INDEPENDENT_TRANSPARENCY = pp.useOrderIndependentTransparency && cp, ip.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !pp.gy().getCaps().textureFloatLinearFiltering, Op === ip.ORDER_INDEPENDENT_TRANSPARENCY && op === ip.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || ip.markAsU … [truncated]
+       UT.ORDER_INDEPENDENT_TRANSPARENCY = TT.useOrderIndependentTransparency && mT, UT.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !TT.eB().getCaps().textureFloatLinearFiltering, WT === UT.ORDER_INDEPENDENT_TRANSPARENCY && zT === UT.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || UT.markAsU … [truncated]
```

#### 199. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2219` → after: `L2219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L2219) · [Before (L2219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L2219)

```diff
-   40523: (pp, ip, cp) => {
+   40474: (TT, UT, mT) => {
```

#### 200. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2221` → after: `L2221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L2221) · [Before (L2221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L2221)

```diff
-       e: () => Ip
+       c: () => MT
```

#### 201. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2223-L2224` → after: `L2223-L2224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2223-L2224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L2223-L2224) · [Before (L2223-L2224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L2223-L2224)

```diff
-     var Op = cp(37320),
-       op = cp(40476);
+     var WT = mT(37188),
+       zT = mT(40413);
```

#### 202. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2228` → after: `L2228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L2228) · [Before (L2228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L2228)

```diff
-         super(pp, ip, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new Op.b, this._storeEffectOnSubMeshes = cp
+         super(TT, UT, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new WT.e, this._storeEffectOnSubMeshes = mT
```

#### 203. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2234` → after: `L2234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L2234) · [Before (L2234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L2234)

```diff
-         return !!pp && (!this._storeEffectOnSubMeshes || (!pp.Am || 0 === pp.Am.length || this.isReadyForSubMesh(pp, pp.Am[0], ip)))
+         return !!TT && (!this._storeEffectOnSubMeshes || (!TT.rY || 0 === TT.rY.length || this.isReadyForSubMesh(TT, TT.rY[0], UT)))
```

#### 204. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2238` → after: `L2238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L2238) · [Before (L2238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L2238)

```diff
-         return !(this.checkReadyOnEveryCall || !pp.effect || !ip || ip._renderId !== this.Gl().getRenderId())
+         return !(this.checkReadyOnEveryCall || !TT.effect || !UT || UT._renderId !== this.KF().getRenderId())
```

#### 205. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2247` → after: `L2247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L2247) · [Before (L2247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L2247)

```diff
-         ip && this.bindForSubMesh(pp, ip, ip.Am[0])
+         UT && this.bindForSubMesh(TT, UT, UT.rY[0])
```

#### 206. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2252` → after: `L2252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L2252) · [Before (L2252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L2252)

```diff
-         super._afterBind(pp, ip, cp), this.Gl()._cachedEffect = ip, cp ? cp._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
+         super._afterBind(TT, UT, mT), this.KF()._cachedEffect = UT, mT ? mT._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
```

#### 207. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2263` → after: `L2263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L2263) · [Before (L2263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L2263)

```diff
-   40544: (pp, ip, cp) => {
+   40495: (TT, UT, mT) => {
```

#### 208. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2265-L2266` → after: `L2265-L2266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2265-L2266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L2265-L2266) · [Before (L2265-L2266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L2265-L2266)

```diff
-       e: () => Ip,
-       i: () => op
+       c: () => MT,
+       f: () => zT
```

#### 209. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2302` → after: `L2302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L2302) · [Before (L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L2302)

```diff
-         const Op = `vp_${cp}_info`;
+         const WT = `vp_${mT}_info`;
```

#### 210. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2307` → after: `L2307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L2307) · [Before (L2307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L2307)

```diff
-   40506: (pp, ip, cp) => {
+   40444: (TT, UT, mT) => {
```

#### 211. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2309` → after: `L2309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L2309) · [Before (L2309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L2309)

```diff
-       e: () => xp,
+       c: () => nT,
```

#### 212. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2312-L2314` → after: `L2312-L2314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2312-L2314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L2312-L2314) · [Before (L2312-L2314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L2312-L2314)

```diff
-     var Op = cp(40203),
-       op = cp(37320),
-       Ip = cp(40210);
+     var WT = mT(40095),
+       zT = mT(37188),
+       MT = mT(40102);
```

#### 213. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2338` → after: `L2338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L2338) · [Before (L2338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L2338)

```diff
-         ip = [Ip.f.filter((function() {
+         UT = [MT.i.filter((function() {
```

#### 214. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2340` → after: `L2340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L2340) · [Before (L2340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L2340)

```diff
-         }))], cp = [Ip.f.filter((function() {
+         }))], mT = [MT.i.filter((function() {
```

#### 215. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2342` → after: `L2342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/266.js#L2342) · [Before (L2342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/266.js#L2342)

```diff
-         }))], (0, Op.j)(pp, null, ip, {
+         }))], (0, WT.h)(TT, null, UT, {
```
