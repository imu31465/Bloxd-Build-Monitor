# Changed — Bundle Modifications Report (Part 065 / 161)

- **Updated at**: `2026-11-27T02:05 JST`
- **Part**: `65 / 161` (**421** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 064](part-064.md) · [Part 066 →](part-066.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/290.js` (cwj32u.ae3e40c2 → gw4e3a.937868ec · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/290.js` (272 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1)

#### 45. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L647` → after: `L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L647) · [Before (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L647)

```diff
-         if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !HH.isCompatible(this._material.shaderLanguage)) throw `The plugin "${HH.name}" can't be added to the material "${this._material.name}" because the pl … [truncated]
+         if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !BB.isCompatible(this._material.shaderLanguage)) throw `The plugin "${BB.name}" can't be added to the material "${this._material.name}" because the pl … [truncated]
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L747` → after: `L747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L747) · [Before (L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L747)

```diff
-                             HH = `${BH.type}f`
+                             BB = `${OB.type}f`
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L749-L750` → after: `L749-L750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L749-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L749-L750) · [Before (L749-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L749-L750)

```diff
-                         this._uboDeclaration += AH > 0 ? `uniform ${BH.name}: array<${HH}, ${AH}>;\n` : `uniform ${BH.name}: ${HH};\n`
-                       } else this._uboDeclaration += `${BH.type} ${BH.name}${AH>0?`[${AH}]`:""};\n`
+                         this._uboDeclaration += YB > 0 ? `uniform ${OB.name}: array<${BB}, ${YB}>;\n` : `uniform ${OB.name}: ${BB};\n`
+                       } else this._uboDeclaration += `${OB.type} ${OB.name}${YB>0?`[${YB}]`:""};\n`
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L784-L785` → after: `L784-L785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L784-L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L784-L785) · [Before (L784-L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L784-L785)

```diff
-                 shadersRepository: hH.c.GetShadersRepository(tH),
-                 includesShadersStore: hH.c.GetIncludesShadersStore(tH),
+                 shadersRepository: oB.b.GetShadersRepository(jB),
+                 includesShadersStore: oB.b.GetIncludesShadersStore(jB),
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L790` → after: `L790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L790) · [Before (L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L790)

```diff
-                 WrH: this._engine.WrH,
+                 fDB: this._engine.fDB,
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L829-L830` → after: `L829-L830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L829-L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L829-L830) · [Before (L829-L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L829-L830)

```diff
-     var EH = LH(41319),
-       XH = LH(38012);
+     var MB = GB(41022),
+       PB = GB(37823);
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L852` → after: `L852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L852) · [Before (L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L852)

```diff
-             this.name = (0, AH.k)(this, tH, void 0), this.priority = ((0, AH.k)(this, CH), (0, AH.k)(this, XH, 500)), this.resolveIncludes = ((0, AH.k)(this, GH), (0, AH.k)(this, YH, !1)), this.registerForExtraEvents = ((0, AH.k)(this, uH), (0, AH.k)(this, QH, !1)), this.doNotSer … [truncated]
+             this.name = (0, YB.j)(this, jB, void 0), this.priority = ((0, YB.j)(this, JB), (0, YB.j)(this, PB, 500)), this.resolveIncludes = ((0, YB.j)(this, zB), (0, YB.j)(this, lB, !1)), this.registerForExtraEvents = ((0, YB.j)(this, pB), (0, YB.j)(this, qB, !1)), this.doNotSer … [truncated]
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L900` → after: `L900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L900) · [Before (L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L900)

```diff
-             EH.c.Clone((() => HH), this)
+             MB.d.Clone((() => BB), this)
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L903` → after: `L903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L903) · [Before (L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L903)

```diff
-             return EH.c.Serialize(this)
+             return MB.d.Serialize(this)
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L906` → after: `L906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L906) · [Before (L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L906)

```diff
-             EH.c.Parse((() => this), HH, BH, LH)
+             MB.d.Parse((() => this), BB, OB, GB)
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L910` → after: `L910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L910) · [Before (L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L910)

```diff
-           BH = [(0, rH.H)()], LH = [(0, rH.H)()], SH = [(0, rH.H)()], hH = [(0, rH.H)()], (0, AH.g)(null, null, BH, {
+           OB = [(0, DB.L)()], GB = [(0, DB.L)()], QB = [(0, DB.L)()], oB = [(0, DB.L)()], (0, YB.h)(null, null, OB, {
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L923` → after: `L923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L923) · [Before (L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L923)

```diff
-           }, tH, CH), (0, AH.g)(null, null, LH, {
+           }, jB, JB), (0, YB.h)(null, null, GB, {
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L936` → after: `L936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L936) · [Before (L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L936)

```diff
-           }, XH, GH), (0, AH.g)(null, null, SH, {
+           }, PB, zB), (0, YB.h)(null, null, QB, {
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L949` → after: `L949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L949) · [Before (L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L949)

```diff
-           }, YH, uH), (0, AH.g)(null, null, hH, {
+           }, lB, pB), (0, YB.h)(null, null, oB, {
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L976` → after: `L976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L976) · [Before (L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L976)

```diff
-   41554: (HH, BH, LH) => {
+   41266: (BB, OB, GB) => {
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L978` → after: `L978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L978) · [Before (L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L978)

```diff
-       d: () => AH
+       c: () => YB
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L991-L992` → after: `L991-L992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L991-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L991-L992) · [Before (L991-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L991-L992)

```diff
-           const rH = BH.Iu();
-           this.currentViewProjection.updateFlag !== BH.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = rH.frameId, this.previousViewProjection.Tm(this.currentViewProjection), this.currentViewProjection.Tm(BH.getTransformMatrix())) : this._lastUpdateFrameId !== rH.fra … [truncated]
+           const DB = OB.Lp();
+           this.currentViewProjection.updateFlag !== OB.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = DB.frameId, this.previousViewProjection.IU(this.currentViewProjection), this.currentViewProjection.IU(OB.getTransformMatrix())) : this._lastUpdateFrameId !== DB.fra … [truncated]
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L997` → after: `L997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L997) · [Before (L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L997)

```diff
-   41674: (HH, BH, LH) => {
+   41392: (BB, OB, GB) => {
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1006` → after: `L1006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1006) · [Before (L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1006)

```diff
-       c: () => AH
+       b: () => YB
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1009` → after: `L1009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1009) · [Before (L1009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1009)

```diff
-   41538: (HH, BH, LH) => {
+   41258: (BB, OB, GB) => {
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1011` → after: `L1011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1011) · [Before (L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1011)

```diff
-       StandardMaterial: () => AH.e
+       StandardMaterial: () => YB.h
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1013-L1014` → after: `L1013-L1014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1013-L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1013-L1014) · [Before (L1013-L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1013-L1014)

```diff
-     var AH = LH(41545);
-     (0, AH.d)()
+     var YB = GB(41262);
+     (0, YB.e)()
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1016` → after: `L1016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1016) · [Before (L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1016)

```diff
-   41545: (HH, BH, LH) => {
+   41262: (BB, OB, GB) => {
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1018-L1019` → after: `L1018-L1019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1018-L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1018-L1019) · [Before (L1018-L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1018-L1019)

```diff
-       d: () => qH,
-       e: () => cH
+       e: () => gB,
+       h: () => iB
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1021-L1046` → after: `L1021-L1046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1021-L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1021-L1046) · [Before (L1021-L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1021-L1046)

```diff
-     var AH = LH(41290),
-       rH = LH(41297),
-       SH = LH(41398),
-       hH = LH(41383),
-       tH = LH(38074),
-       zH = LH(41427),
-       CH = LH(41554),
-       EH = LH(41561),
-       XH = LH(41402),
-       GH = LH(41573),
-       YH = LH(41564),
-       uH = LH(41634),
-       QH = LH(41632),
-       WH = LH(41636),
-       MH = LH(41644),
-       xH = LH(41623),
- ... (10 more removed lines; see GitHub link above)
+     var YB = GB(40998),
+       DB = GB(41004),
+       QB = GB(41112),
+       oB = GB(41091),
+       jB = GB(37894),
+       yB = GB(41150),
+       JB = GB(41266),
+       MB = GB(41273),
+       PB = GB(41119),
+       zB = GB(41283),
+       lB = GB(41275),
+       pB = GB(41346),
+       qB = GB(41341),
+       ZB = GB(41354),
+       NB = GB(41358),
+       RB = GB(41333),
+ ... (10 more added lines; see GitHub link above)
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1051-L1052` → after: `L1051-L1052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1051-L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1051-L1052) · [Before (L1051-L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1051-L1052)

```diff
-     class fH extends((0, bH.c)((0, OH.b)(YH.c))) {}
-     class lH extends((0, EH.e)(fH)) {
+     class mB extends((0, fB.b)((0, UB.e)(lB.c))) {}
+     class IB extends((0, MB.f)(mB)) {
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1057` → after: `L1057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1057) · [Before (L1057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1057)

```diff
-     class KH extends((0, kH.b)(uH.b)) {}
+     class FB extends((0, kB.d)(pB.d)) {}
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1209` → after: `L1209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1209) · [Before (L1209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1209)

```diff
-             return (0, AH.e)(this, BH, "f")
+             return (0, YB.c)(this, OB, "f")
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1212` → after: `L1212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1212) · [Before (L1212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1212)

```diff
-             (0, AH.f)(this, BH, HH, "f")
+             (0, YB.d)(this, OB, BB, "f")
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1215` → after: `L1215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1215) · [Before (L1215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1215)

```diff
-             return (0, AH.e)(this, EH, "f")
+             return (0, YB.c)(this, MB, "f")
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1218` → after: `L1218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1218) · [Before (L1218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1218)

```diff
-             (0, AH.f)(this, EH, HH, "f")
+             (0, YB.d)(this, MB, BB, "f")
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1221` → after: `L1221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1221) · [Before (L1221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1221)

```diff
-             return (0, AH.e)(this, YH, "f")
+             return (0, YB.c)(this, lB, "f")
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1224` → after: `L1224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1224) · [Before (L1224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1224)

```diff
-             (0, AH.f)(this, YH, HH, "f")
+             (0, YB.d)(this, lB, BB, "f")
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1227` → after: `L1227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1227) · [Before (L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1227)

```diff
-             return (0, AH.e)(this, OH, "f")
+             return (0, YB.c)(this, UB, "f")
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1230` → after: `L1230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1230) · [Before (L1230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1230)

```diff
-             (0, AH.f)(this, OH, HH, "f")
+             (0, YB.d)(this, UB, BB, "f")
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1233` → after: `L1233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1233) · [Before (L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1233)

```diff
-             return (0, AH.e)(this, bH, "f")
+             return (0, YB.c)(this, fB, "f")
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1236` → after: `L1236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1236) · [Before (L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1236)

```diff
-             (0, AH.f)(this, bH, HH, "f")
+             (0, YB.d)(this, fB, BB, "f")
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1239` → after: `L1239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1239) · [Before (L1239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1239)

```diff
-             return (0, AH.e)(this, kH, "f")
+             return (0, YB.c)(this, kB, "f")
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1242` → after: `L1242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1242) · [Before (L1242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1242)

```diff
-             (0, AH.f)(this, kH, HH, "f")
+             (0, YB.d)(this, kB, BB, "f")
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1245` → after: `L1245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1245) · [Before (L1245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1245)

```diff
-             return (0, AH.e)(this, mH, "f")
+             return (0, YB.c)(this, dB, "f")
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1248` → after: `L1248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1248) · [Before (L1248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1248)

```diff
-             (0, AH.f)(this, mH, HH, "f")
+             (0, YB.d)(this, dB, BB, "f")
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1251` → after: `L1251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1251) · [Before (L1251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1251)

```diff
-             return (0, AH.e)(this, oH, "f")
+             return (0, YB.c)(this, KB, "f")
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1254` → after: `L1254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1254) · [Before (L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1254)

```diff
-             (0, AH.f)(this, oH, HH, "f")
+             (0, YB.d)(this, KB, BB, "f")
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1257` → after: `L1257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1257) · [Before (L1257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1257)

```diff
-             return (0, AH.e)(this, fH, "f")
+             return (0, YB.c)(this, mB, "f")
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1260` → after: `L1260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1260) · [Before (L1260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1260)

```diff
-             (0, AH.f)(this, fH, HH, "f")
+             (0, YB.d)(this, mB, BB, "f")
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1263` → after: `L1263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1263) · [Before (L1263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1263)

```diff
-             return (0, AH.e)(this, cH, "f")
+             return (0, YB.c)(this, iB, "f")
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1266` → after: `L1266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1266) · [Before (L1266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1266)

```diff
-             (0, AH.f)(this, cH, HH, "f")
+             (0, YB.d)(this, iB, BB, "f")
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1269` → after: `L1269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1269) · [Before (L1269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1269)

```diff
-             return (0, AH.e)(this, eH, "f")
+             return (0, YB.c)(this, LB, "f")
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1272` → after: `L1272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1272) · [Before (L1272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1272)

```diff
-             (0, AH.f)(this, eH, HH, "f")
+             (0, YB.d)(this, LB, BB, "f")
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1275` → after: `L1275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1275) · [Before (L1275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1275)

```diff
-             return (0, AH.e)(this, qH, "f")
+             return (0, YB.c)(this, gB, "f")
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1278` → after: `L1278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1278) · [Before (L1278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1278)

```diff
-             (0, AH.f)(this, qH, HH, "f")
+             (0, YB.d)(this, gB, BB, "f")
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1281` → after: `L1281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1281) · [Before (L1281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1281)

```diff
-             return (0, AH.e)(this, gH, "f")
+             return (0, YB.c)(this, rB, "f")
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1284` → after: `L1284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1284) · [Before (L1284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1284)

```diff
-             (0, AH.f)(this, gH, HH, "f")
+             (0, YB.d)(this, rB, BB, "f")
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1287` → after: `L1287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1287) · [Before (L1287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1287)

```diff
-             return (0, AH.e)(this, NH, "f")
+             return (0, YB.c)(this, XB, "f")
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1290` → after: `L1290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1290) · [Before (L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1290)

```diff
-             (0, AH.f)(this, NH, HH, "f")
+             (0, YB.d)(this, XB, BB, "f")
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1293` → after: `L1293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1293) · [Before (L1293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1293)

```diff
-             return (0, AH.e)(this, RH, "f")
+             return (0, YB.c)(this, wB, "f")
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1296` → after: `L1296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1296) · [Before (L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1296)

```diff
-             (0, AH.f)(this, RH, HH, "f")
+             (0, YB.d)(this, wB, BB, "f")
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1299` → after: `L1299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1299) · [Before (L1299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1299)

```diff
-             return (0, AH.e)(this, jH, "f")
+             return (0, YB.c)(this, EB, "f")
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1302` → after: `L1302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1302) · [Before (L1302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1302)

```diff
-             (0, AH.f)(this, jH, HH, "f")
+             (0, YB.d)(this, EB, BB, "f")
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1305` → after: `L1305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1305) · [Before (L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1305)

```diff
-             return (0, AH.e)(this, nH, "f")
+             return (0, YB.c)(this, cB, "f")
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1308` → after: `L1308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1308) · [Before (L1308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1308)

```diff
-             (0, AH.f)(this, nH, HH, "f")
+             (0, YB.d)(this, cB, BB, "f")
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1311` → after: `L1311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1311) · [Before (L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1311)

```diff
-             return (0, AH.e)(this, FH, "f")
+             return (0, YB.c)(this, hB, "f")
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1314` → after: `L1314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1314) · [Before (L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1314)

```diff
-             (0, AH.f)(this, FH, HH, "f")
+             (0, YB.d)(this, hB, BB, "f")
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1317` → after: `L1317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1317) · [Before (L1317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1317)

```diff
-             return (0, AH.e)(this, DH, "f")
+             return (0, YB.c)(this, aB, "f")
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1320` → after: `L1320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1320) · [Before (L1320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1320)

```diff
-             (0, AH.f)(this, DH, HH, "f")
+             (0, YB.d)(this, aB, BB, "f")
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1323` → after: `L1323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1323) · [Before (L1323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1323)

```diff
-             return (0, AH.e)(this, wH, "f")
+             return (0, YB.c)(this, eB, "f")
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1326` → after: `L1326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1326) · [Before (L1326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1326)

```diff
-             (0, AH.f)(this, wH, HH, "f")
+             (0, YB.d)(this, eB, BB, "f")
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1329` → after: `L1329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1329) · [Before (L1329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1329)

```diff
-             return (0, AH.e)(this, ZH, "f")
+             return (0, YB.c)(this, TB, "f")
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1332` → after: `L1332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1332) · [Before (L1332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1332)

```diff
-             (0, AH.f)(this, ZH, HH, "f")
+             (0, YB.d)(this, TB, BB, "f")
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1335` → after: `L1335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1335) · [Before (L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1335)

```diff
-             return (0, AH.e)(this, dH, "f")
+             return (0, YB.c)(this, bB, "f")
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1338` → after: `L1338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1338) · [Before (L1338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1338)

```diff
-             (0, AH.f)(this, dH, HH, "f")
+             (0, YB.d)(this, bB, BB, "f")
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1341` → after: `L1341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1341) · [Before (L1341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1341)

```diff
-             return (0, AH.e)(this, aH, "f")
+             return (0, YB.c)(this, CB, "f")
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1344` → after: `L1344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1344) · [Before (L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1344)

```diff
-             (0, AH.f)(this, aH, HH, "f")
+             (0, YB.d)(this, CB, BB, "f")
```

#### 118. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1347` → after: `L1347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1347) · [Before (L1347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1347)

```diff
-             return (0, AH.e)(this, sH, "f")
+             return (0, YB.c)(this, HB, "f")
```

#### 119. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1350` → after: `L1350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1350) · [Before (L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1350)

```diff
-             (0, AH.f)(this, sH, HH, "f")
+             (0, YB.d)(this, HB, BB, "f")
```

#### 120. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1353` → after: `L1353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1353) · [Before (L1353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1353)

```diff
-             return (0, AH.e)(this, JH, "f")
+             return (0, YB.c)(this, vB, "f")
```

#### 121. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1356` → after: `L1356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1356) · [Before (L1356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1356)

```diff
-             (0, AH.f)(this, JH, HH, "f")
+             (0, YB.d)(this, vB, BB, "f")
```

#### 122. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1359` → after: `L1359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1359) · [Before (L1359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1359)

```diff
-             return (0, AH.e)(this, iH, "f")
+             return (0, YB.c)(this, sB, "f")
```

#### 123. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1362` → after: `L1362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1362) · [Before (L1362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1362)

```diff
-             (0, AH.f)(this, iH, HH, "f")
+             (0, YB.d)(this, sB, BB, "f")
```

#### 124. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1365` → after: `L1365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1365) · [Before (L1365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1365)

```diff
-             return (0, AH.e)(this, pH, "f")
+             return (0, YB.c)(this, xB, "f")
```

#### 125. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1368` → after: `L1368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1368) · [Before (L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1368)

```diff
-             (0, AH.f)(this, pH, HH, "f")
+             (0, YB.d)(this, xB, BB, "f")
```

#### 126. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1371` → after: `L1371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1371) · [Before (L1371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1371)

```diff
-             return (0, AH.e)(this, yH, "f")
+             return (0, YB.c)(this, tB, "f")
```

#### 127. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1374` → after: `L1374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1374) · [Before (L1374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1374)

```diff
-             (0, AH.f)(this, yH, HH, "f")
+             (0, YB.d)(this, tB, BB, "f")
```

#### 128. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1377` → after: `L1377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1377) · [Before (L1377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1377)

```diff
-             return (0, AH.e)(this, HB, "f")
+             return (0, YB.c)(this, BO, "f")
```

#### 129. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1380` → after: `L1380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1380) · [Before (L1380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1380)

```diff
-             (0, AH.f)(this, HB, HH, "f")
+             (0, YB.d)(this, BO, BB, "f")
```

#### 130. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1383` → after: `L1383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1383) · [Before (L1383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1383)

```diff
-             return (0, AH.e)(this, BB, "f")
+             return (0, YB.c)(this, OO, "f")
```

#### 131. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1386` → after: `L1386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1386) · [Before (L1386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1386)

```diff
-             (0, AH.f)(this, BB, HH, "f")
+             (0, YB.d)(this, OO, BB, "f")
```

#### 132. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1389` → after: `L1389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1389) · [Before (L1389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1389)

```diff
-             return (0, AH.e)(this, LB, "f")
+             return (0, YB.c)(this, GO, "f")
```

#### 133. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1392` → after: `L1392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1392) · [Before (L1392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1392)

```diff
-             (0, AH.f)(this, LB, HH, "f")
+             (0, YB.d)(this, GO, BB, "f")
```

#### 134. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1395` → after: `L1395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1395) · [Before (L1395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1395)

```diff
-             return (0, AH.e)(this, AB, "f")
+             return (0, YB.c)(this, YO, "f")
```

#### 135. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1398` → after: `L1398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1398) · [Before (L1398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1398)

```diff
-             (0, AH.f)(this, AB, HH, "f")
+             (0, YB.d)(this, YO, BB, "f")
```

#### 136. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1407` → after: `L1407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1407) · [Before (L1407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1407)

```diff
-             super(LH, rH, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || HH.ForceGLSL), this._diffuseTexture = (0, AH.k)(this, kL, null), BH.set(this, ((0, AH.k)(this, mL), (0, AH.k)(this, oL, void 0))), this._ambientTexture = ((0, AH.k)(this, IL), (0, … [truncated]
+             super(GB, DB, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || BB.ForceGLSL), this._diffuseTexture = (0, YB.j)(this, kG, null), OB.set(this, ((0, YB.j)(this, dG), (0, YB.j)(this, KG, void 0))), this._ambientTexture = ((0, YB.j)(this, uG), (0, … [truncated]
```

#### 137. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1419` → after: `L1419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1419) · [Before (L1419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1419)

```diff
-             return this._hasTransparencyMode ? this._transparencyModeIsTest : this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === GH.c.MATERIAL_ALPHATEST)
+             return this._hasTransparencyMode ? this._transparencyModeIsTest : this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === zB.b.MATERIAL_ALPHATEST)
```

#### 138. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1422` → after: `L1422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1422) · [Before (L1422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1422)

```diff
-             return null != this._diffuseTexture && this._diffuseTexture.hasAlpha && this._useAlphaFromDiffuseTexture && this._transparencyMode !== GH.c.MATERIAL_OPAQUE
+             return null != this._diffuseTexture && this._diffuseTexture.hasAlpha && this._useAlphaFromDiffuseTexture && this._transparencyMode !== zB.b.MATERIAL_OPAQUE
```

#### 139. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1436` → after: `L1436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1436) · [Before (L1436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1436)

```diff
-             const SH = this.yN(),
+             const QB = this.JF(),
```

#### 140. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1439-L1443` → after: `L1439-L1443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1439-L1443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1439-L1443) · [Before (L1439-L1443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1439-L1443)

```diff
-             const tH = SH.Iu();
-             if (hH._needNormals = (0, PH.U)(SH, BH, hH, !0, this._maxSimultaneousLights, this._disableLighting), !(0, PH.c)(SH, BH, this._maxSimultaneousLights, this._disableLighting)) return !1;
-             (0, PH._)(SH, hH);
-             const EH = this.needAlphaBlendingForMesh(BH) && this.yN().useOrderIndependentTransparency;
-             if ((0, PH.ab)(SH, hH, this.canRenderToMRT && !EH), (0, PH.$)(SH, hH, EH), VH.e.PrepareDefines(tH.currentRenderPassId, BH, hH), hH._areTexturesDirty) {
+             const jB = QB.Lp();
+             if (oB._needNormals = (0, AB.$)(QB, OB, oB, !0, this._maxSimultaneousLights, this._disableLighting), !(0, AB.e)(QB, OB, this._maxSimultaneousLights, this._disableLighting)) return !1;
+             (0, AB.db)(QB, oB);
+             const MB = this.needAlphaBlendingForMesh(OB) && this.JF().useOrderIndependentTransparency;
+             if ((0, AB.jb)(QB, oB, this.canRenderToMRT && !MB), (0, AB.gb)(QB, oB, MB), nB.d.PrepareDefines(jB.currentRenderPassId, OB, oB), oB._areTexturesDirty) {
```

#### 141. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1449` → after: `L1449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1449) · [Before (L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1449)

```diff
-                   (0, PH.X)(this._diffuseTexture, hH, "DIFFUSE")
+                   (0, AB.ab)(this._diffuseTexture, oB, "DIFFUSE")
```

#### 142. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1453` → after: `L1453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1453) · [Before (L1453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1453)

```diff
-                   (0, PH.X)(this._ambientTexture, hH, "AMBIENT")
+                   (0, AB.ab)(this._ambientTexture, oB, "AMBIENT")
```

#### 143. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1457` → after: `L1457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1457) · [Before (L1457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1457)

```diff
-                   (0, PH.X)(this._opacityTexture, hH, "OPACITY"), hH.OPACITYRGB = this._opacityTexture.getAlphaFromRGB
+                   (0, AB.ab)(this._opacityTexture, oB, "OPACITY"), oB.OPACITYRGB = this._opacityTexture.getAlphaFromRGB
```

#### 144. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1459` → after: `L1459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1459) · [Before (L1459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1459)

```diff
-                 if (this._reflectionTexture && HH.ReflectionTextureEnabled ? (hH.ROUGHNESS = this._roughness > 0, hH.REFLECTIONOVERALPHA = this._useReflectionOverAlpha) : (hH.ROUGHNESS = !1, hH.REFLECTIONOVERALPHA = !1), !(0, PH.R)(SH, this._reflectionTexture, hH)) return !1;
+                 if (this._reflectionTexture && BB.ReflectionTextureEnabled ? (oB.ROUGHNESS = this._roughness > 0, oB.REFLECTIONOVERALPHA = this._useReflectionOverAlpha) : (oB.ROUGHNESS = !1, oB.REFLECTIONOVERALPHA = !1), !(0, AB._)(QB, this._reflectionTexture, oB)) return !1;
```

#### 145. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1462` → after: `L1462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1462) · [Before (L1462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1462)

```diff
-                   (0, PH.X)(this._emissiveTexture, hH, "EMISSIVE")
+                   (0, AB.ab)(this._emissiveTexture, oB, "EMISSIVE")
```

#### 146. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1466` → after: `L1466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1466) · [Before (L1466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1466)

```diff
-                   (0, PH.X)(this._lightmapTexture, hH, "LIGHTMAP"), hH.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, hH.RGBDLIGHTMAP = this._lightmapTexture.isRGBD
+                   (0, AB.ab)(this._lightmapTexture, oB, "LIGHTMAP"), oB.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, oB.RGBDLIGHTMAP = this._lightmapTexture.isRGBD
```

#### 147. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1470` → after: `L1470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1470) · [Before (L1470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1470)

```diff
-                   (0, PH.X)(this._specularTexture, hH, "SPECULAR"), hH.GLOSSINESS = this._useGlossinessFromSpecularMapAlpha
+                   (0, AB.ab)(this._specularTexture, oB, "SPECULAR"), oB.GLOSSINESS = this._useGlossinessFromSpecularMapAlpha
```

#### 148. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1472` → after: `L1472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1472) · [Before (L1472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1472)

```diff
-                 if (SH.Iu().getCaps().standardDerivatives && this._bumpTexture && HH.BumpTextureEnabled) {
+                 if (QB.Lp().getCaps().standardDerivatives && this._bumpTexture && BB.BumpTextureEnabled) {
```

#### 149. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1474` → after: `L1474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1474) · [Before (L1474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1474)

```diff
-                   (0, PH.X)(this._bumpTexture, hH, "BUMP"), hH.PARALLAX = this._useParallax, hH.PARALLAX_RHS = SH.useRightHandedSystem, hH.PARALLAXOCCLUSION = this._useParallaxOcclusion, hH.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap
+                   (0, AB.ab)(this._bumpTexture, oB, "BUMP"), oB.PARALLAX = this._useParallax, oB.PARALLAX_RHS = QB.useRightHandedSystem, oB.PARALLAXOCCLUSION = this._useParallaxOcclusion, oB.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap
```

#### 150. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1492` → after: `L1492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1492) · [Before (L1492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1492)

```diff
-             (0, PH.Z)(BH, SH, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(BH), hH, this._applyDecalMapAfterDetailMap, this._useVertexPulling, LH.getRenderingMesh(), this._isVertexOutputInvariant), (0, PH.P)(SH, tH, this, hH, AH, null … [truncated]
+             (0, AB.cb)(OB, QB, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(OB), oB, this._applyDecalMapAfterDetailMap, this._useVertexPulling, GB.getRenderingMesh(), this._isVertexOutputInvariant), (0, AB.Y)(QB, jB, this, oB, YB, nul … [truncated]
```

#### 151. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1497-L1502` → after: `L1497-L1502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1497-L1502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1497-L1502) · [Before (L1497-L1502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1497-L1502)

```diff
-               const rH = new WH.b;
-               hH.REFLECTION && rH.addFallback(0, "REFLECTION"), hH.SPECULAR && rH.addFallback(0, "SPECULAR"), hH.BUMP && rH.addFallback(0, "BUMP"), hH.PARALLAX && rH.addFallback(1, "PARALLAX"), hH.PARALLAX_RHS && rH.addFallback(1, "PARALLAX_RHS"), hH.PARALLAXOCCLUSION && rH.addFa … [truncated]
-               const EH = [zH.i.PositionKind];
-               hH.NORMAL && EH.push(zH.i.NormalKind), hH.TANGENT && EH.push(zH.i.TangentKind);
-               for (let HH = 1; HH <= 6; ++HH) hH["UV" + HH] && EH.push(`uv${1===HH?"":HH}`);
-               hH.VERTEXCOLOR && EH.push(zH.i.ColorKind), (0, PH.E)(EH, BH, hH, rH), (0, PH.F)(EH, hH), (0, PH.G)(EH, BH, hH), (0, PH.C)(EH, BH, hH);
+               const DB = new ZB.c;
+               oB.REFLECTION && DB.addFallback(0, "REFLECTION"), oB.SPECULAR && DB.addFallback(0, "SPECULAR"), oB.BUMP && DB.addFallback(0, "BUMP"), oB.PARALLAX && DB.addFallback(1, "PARALLAX"), oB.PARALLAX_RHS && DB.addFallback(1, "PARALLAX_RHS"), oB.PARALLAXOCCLUSION && DB.addFa … [truncated]
+               const MB = [yB.h.PositionKind];
+               oB.NORMAL && MB.push(yB.h.NormalKind), oB.TANGENT && MB.push(yB.h.TangentKind);
+               for (let BB = 1; BB <= 6; ++BB) oB["UV" + BB] && MB.push(`uv${1===BB?"":BB}`);
+               oB.VERTEXCOLOR && MB.push(yB.h.ColorKind), (0, AB.M)(MB, OB, oB, DB), (0, AB.P)(MB, oB), (0, AB.R)(MB, OB, oB), (0, AB.L)(MB, OB, oB);
```

#### 152. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1506` → after: `L1506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1506) · [Before (L1506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1506)

```diff
-               (0, PH.fb)(uH, QH, !1);
+               (0, AB.mb)(pB, qB, !1);
```

#### 153. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1512` → after: `L1512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1512) · [Before (L1512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1512)

```diff
-               if (this._eventInfo.fallbacks = rH, this._eventInfo.fallbackRank = 0, this._eventInfo.defines = hH, this._eventInfo.uniforms = uH, this._eventInfo.attributes = EH, this._eventInfo.samplers = QH, this._eventInfo.uniformBuffersNames = MH, this._eventInfo.customCode =  … [truncated]
+               if (this._eventInfo.fallbacks = DB, this._eventInfo.fallbackRank = 0, this._eventInfo.defines = oB, this._eventInfo.uniforms = pB, this._eventInfo.attributes = MB, this._eventInfo.samplers = qB, this._eventInfo.uniformBuffersNames = NB, this._eventInfo.customCode =  … [truncated]
```

#### 154. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1519` → after: `L1519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1519) · [Before (L1519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1519)

```diff
-                 }), (0, xH.b)(uH), this._useVertexPulling) {
+                 }), (0, RB.e)(pB), this._useVertexPulling) {
```

#### 155. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1522-L1523` → after: `L1522-L1523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1522-L1523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1522-L1523) · [Before (L1522-L1523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1522-L1523)

```diff
-                 BH && (this._vertexPullingMetadata = (0, vH.f)(BH), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((HH, BH) => {
-                   uH.push(`vp_${BH}_info`)
+                 OB && (this._vertexPullingMetadata = (0, WB.e)(OB), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((BB, OB) => {
+                   pB.push(`vp_${OB}_info`)
```

#### 156. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1530` → after: `L1530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1530) · [Before (L1530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1530)

```diff
-                 kH = SH.Iu().createEffect(YH, {
+                 kB = QB.Lp().createEffect(lB, {
```

#### 157. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1555` → after: `L1555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1555) · [Before (L1555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1555)

```diff
-             HH.addUniform("diffuseLeftColor", 4), HH.addUniform("diffuseRightColor", 4), HH.addUniform("opacityParts", 4), HH.addUniform("reflectionLeftColor", 4), HH.addUniform("reflectionRightColor", 4), HH.addUniform("refractionLeftColor", 4), HH.addUniform("refractionRightCol … [truncated]
+             BB.addUniform("diffuseLeftColor", 4), BB.addUniform("diffuseRightColor", 4), BB.addUniform("opacityParts", 4), BB.addUniform("reflectionLeftColor", 4), BB.addUniform("reflectionRightColor", 4), BB.addUniform("refractionLeftColor", 4), BB.addUniform("refractionRightCol … [truncated]
```

#### 158. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1558` → after: `L1558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1558) · [Before (L1558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1558)

```diff
-             const rH = this.yN(),
+             const DB = this.JF(),
```

#### 159. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1563` → after: `L1563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1563) · [Before (L1563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1563)

```diff
-             this._activeEffect = zH, LH.getMeshUniformBuffer().bindToEffect(zH, "Mesh"), LH.transferToEffect(BH), this._uniformBuffer.bindToEffect(zH, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, rH, LH, BH, this.isFrozen), VH.e.Bind(rH.Iu().currentRe … [truncated]
+             this._activeEffect = yB, GB.getMeshUniformBuffer().bindToEffect(yB, "Mesh"), GB.transferToEffect(OB), this._uniformBuffer.bindToEffect(yB, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, DB, GB, OB, this.isFrozen), nB.d.Bind(DB.Lp().currentRe … [truncated]
```

#### 160. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1569-L1570` → after: `L1569-L1570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1569-L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1569-L1570) · [Before (L1569-L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1569-L1570)

```diff
-               GH = rH.Iu()._features.needToAlwaysBindUniformBuffers;
-             (0, PH.d)(LH, zH), this._vertexPullingMetadata && (0, vH.d)(zH, this._vertexPullingMetadata);
+               zB = DB.Lp()._features.needToAlwaysBindUniformBuffers;
+             (0, AB.i)(GB, yB), this._vertexPullingMetadata && (0, WB.c)(yB, this._vertexPullingMetadata);
```

#### 161. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1576` → after: `L1576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1576) · [Before (L1576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1576)

```diff
-                     const HH = tH.m.Color3[0];
+                     const BB = jB.o.Color3[0];
```

#### 162. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1581` → after: `L1581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1581) · [Before (L1581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1581)

```diff
-                 if (SH.ALPHATEST && YH.updateFloat("alphaCutOff", this.alphaCutOff), rH.texturesEnabled && (this._diffuseTexture && HH.DiffuseTextureEnabled && (YH.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), (0, PH.u)(this._di … [truncated]
+                 if (QB.ALPHATEST && lB.updateFloat("alphaCutOff", this.alphaCutOff), DB.texturesEnabled && (this._diffuseTexture && BB.DiffuseTextureEnabled && (lB.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), (0, AB.F)(this._di … [truncated]
```

#### 163. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1583` → after: `L1583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1583) · [Before (L1583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1583)

```diff
-                   if (this._refractionTexture.isCube || (YH.wHH("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix()), this._refractionTexture.depth && (HH = this._refractionTexture.depth)), YH.updateFloat4("vRefractionInfos", this._refractionTexture.level, th … [truncated]
+                   if (this._refractionTexture.isCube || (lB.TBB("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix()), this._refractionTexture.depth && (BB = this._refractionTexture.depth)), lB.updateFloat4("vRefractionInfos", this._refractionTexture.level, th … [truncated]
```

#### 164. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1590` → after: `L1590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1590) · [Before (L1590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1590)

```diff
-               rH.texturesEnabled && (this._diffuseTexture && HH.DiffuseTextureEnabled && zH.setTexture("diffuseSampler", this._diffuseTexture), this._ambientTexture && HH.AmbientTextureEnabled && zH.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && HH.Op … [truncated]
+               DB.texturesEnabled && (this._diffuseTexture && BB.DiffuseTextureEnabled && yB.setTexture("diffuseSampler", this._diffuseTexture), this._ambientTexture && BB.AmbientTextureEnabled && yB.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && BB.Op … [truncated]
```

#### 165. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1592` → after: `L1592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1592) · [Before (L1592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1592)

```diff
-             !XH && this.isFrozen && !GH || !rH.lightsEnabled || this._disableLighting || (0, PH.p)(rH, LH, zH, SH, this._maxSimultaneousLights), !XH && this.isFrozen || ((rH.fogEnabled && LH.applyFog && rH.fogMode !== hH.d.FOGMODE_NONE || this._reflectionTexture || this._refracti … [truncated]
+             !PB && this.isFrozen && !zB || !DB.lightsEnabled || this._disableLighting || (0, AB.t)(DB, GB, yB, QB, this._maxSimultaneousLights), !PB && this.isFrozen || ((DB.fogEnabled && GB.applyFog && DB.fogMode !== oB.e.FOGMODE_NONE || this._reflectionTexture || this._refracti … [truncated]
```

#### 166. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1596` → after: `L1596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1596) · [Before (L1596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1596)

```diff
-             return this.isFrozen && this._storeEffectOnSubMeshes && this._uniformBufferLayoutBuilt && !this._needToBindSceneUbo && this.isReadyForSubMesh === HH.prototype.isReadyForSubMesh && this.bindForSubMesh === HH.prototype.bindForSubMesh && this._mustRebind === uH.b.prototy … [truncated]
+             return this.isFrozen && this._storeEffectOnSubMeshes && this._uniformBufferLayoutBuilt && !this._needToBindSceneUbo && this.isReadyForSubMesh === BB.prototype.isReadyForSubMesh && this.bindForSubMesh === BB.prototype.bindForSubMesh && this._mustRebind === pB.d.prototy … [truncated]
```

#### 167. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1624` → after: `L1624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1624) · [Before (L1624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1624)

```diff
-             const rH = TH.c.Clone((() => new HH(BH, this.yN())), this, {
+             const DB = VB.d.Clone((() => new BB(OB, this.JF())), this, {
```

#### 168. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1630-L1631` → after: `L1630-L1631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1630-L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1630-L1631) · [Before (L1630-L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1630-L1631)

```diff
-             const rH = TH.c.Parse((() => new HH(BH.name, LH)), BH, LH, AH);
-             return BH.stencil && rH.stencil.parse(BH.stencil, LH, AH), GH.c._ParsePlugins(BH, rH, LH, AH), rH
+             const DB = VB.d.Parse((() => new BB(OB.name, GB)), OB, GB, YB);
+             return OB.stencil && DB.stencil.parse(OB.stencil, GB, YB), zB.b._ParsePlugins(OB, DB, GB, YB), DB
```

#### 169. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1634` → after: `L1634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1634) · [Before (L1634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1634)

```diff
-             return QH.e.DiffuseTextureEnabled
+             return qB.d.DiffuseTextureEnabled
```

#### 170. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1637` → after: `L1637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1637) · [Before (L1637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1637)

```diff
-             QH.e.DiffuseTextureEnabled = HH
+             qB.d.DiffuseTextureEnabled = BB
```

#### 171. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1640` → after: `L1640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1640) · [Before (L1640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1640)

```diff
-             return QH.e.DetailTextureEnabled
+             return qB.d.DetailTextureEnabled
```

#### 172. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1643` → after: `L1643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1643) · [Before (L1643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1643)

```diff
-             QH.e.DetailTextureEnabled = HH
+             qB.d.DetailTextureEnabled = BB
```

#### 173. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1646` → after: `L1646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1646) · [Before (L1646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1646)

```diff
-             return QH.e.AmbientTextureEnabled
+             return qB.d.AmbientTextureEnabled
```

#### 174. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1649` → after: `L1649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1649) · [Before (L1649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1649)

```diff
-             QH.e.AmbientTextureEnabled = HH
+             qB.d.AmbientTextureEnabled = BB
```

#### 175. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1652` → after: `L1652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1652) · [Before (L1652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1652)

```diff
-             return QH.e.OpacityTextureEnabled
+             return qB.d.OpacityTextureEnabled
```

#### 176. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1655` → after: `L1655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1655) · [Before (L1655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1655)

```diff
-             QH.e.OpacityTextureEnabled = HH
+             qB.d.OpacityTextureEnabled = BB
```

#### 177. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1658` → after: `L1658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1658) · [Before (L1658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1658)

```diff
-             return QH.e.ReflectionTextureEnabled
+             return qB.d.ReflectionTextureEnabled
```

#### 178. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1661` → after: `L1661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1661) · [Before (L1661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1661)

```diff
-             QH.e.ReflectionTextureEnabled = HH
+             qB.d.ReflectionTextureEnabled = BB
```

#### 179. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1664` → after: `L1664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1664) · [Before (L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1664)

```diff
-             return QH.e.EmissiveTextureEnabled
+             return qB.d.EmissiveTextureEnabled
```

#### 180. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1667` → after: `L1667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1667) · [Before (L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1667)

```diff
-             QH.e.EmissiveTextureEnabled = HH
+             qB.d.EmissiveTextureEnabled = BB
```

#### 181. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1670` → after: `L1670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1670) · [Before (L1670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1670)

```diff
-             return QH.e.SpecularTextureEnabled
+             return qB.d.SpecularTextureEnabled
```

#### 182. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1673` → after: `L1673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1673) · [Before (L1673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1673)

```diff
-             QH.e.SpecularTextureEnabled = HH
+             qB.d.SpecularTextureEnabled = BB
```

#### 183. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1676` → after: `L1676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1676) · [Before (L1676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1676)

```diff
-             return QH.e.BumpTextureEnabled
+             return qB.d.BumpTextureEnabled
```

#### 184. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1679` → after: `L1679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1679) · [Before (L1679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1679)

```diff
-             QH.e.BumpTextureEnabled = HH
+             qB.d.BumpTextureEnabled = BB
```

#### 185. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1682` → after: `L1682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1682) · [Before (L1682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1682)

```diff
-             return QH.e.LightmapTextureEnabled
+             return qB.d.LightmapTextureEnabled
```

#### 186. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1685` → after: `L1685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1685) · [Before (L1685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1685)

```diff
-             QH.e.LightmapTextureEnabled = HH
+             qB.d.LightmapTextureEnabled = BB
```

#### 187. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1688` → after: `L1688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1688) · [Before (L1688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1688)

```diff
-             return QH.e.RefractionTextureEnabled
+             return qB.d.RefractionTextureEnabled
```

#### 188. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1691` → after: `L1691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1691) · [Before (L1691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1691)

```diff
-             QH.e.RefractionTextureEnabled = HH
+             qB.d.RefractionTextureEnabled = BB
```

#### 189. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1694` → after: `L1694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1694) · [Before (L1694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1694)

```diff
-             return QH.e.ColorGradingTextureEnabled
+             return qB.d.ColorGradingTextureEnabled
```

#### 190. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1697` → after: `L1697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1697) · [Before (L1697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1697)

```diff
-             QH.e.ColorGradingTextureEnabled = HH
+             qB.d.ColorGradingTextureEnabled = BB
```

#### 191. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1700` → after: `L1700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1700) · [Before (L1700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1700)

```diff
-             return QH.e.FresnelEnabled
+             return qB.d.FresnelEnabled
```

#### 192. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1703` → after: `L1703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1703) · [Before (L1703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1703)

```diff
-             QH.e.FresnelEnabled = HH
+             qB.d.FresnelEnabled = BB
```

#### 193. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1707` → after: `L1707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1707) · [Before (L1707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1707)

```diff
-           rB = [(0, rH.A)("diffuseTexture")], SB = [(0, rH.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], hB = [(0, rH.A)("ambientTexture")], tB = [(0, rH.e)("_markAllSubMeshesAsTexturesDirty")], zB = [(0, rH.A)("opacityTexture")], CB = [(0, rH.e)("_markAllSubMeshesAsTexturesAnd … [truncated]
+           DO = [(0, DB.B)("diffuseTexture")], QO = [(0, DB.g)("_markAllSubMeshesAsTexturesAndMiscDirty")], oO = [(0, DB.B)("ambientTexture")], jO = [(0, DB.g)("_markAllSubMeshesAsTexturesDirty")], yO = [(0, DB.B)("opacityTexture")], JO = [(0, DB.g)("_markAllSubMeshesAsTexturesAnd … [truncated]
```

#### 194. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1717` → after: `L1717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1717) · [Before (L1717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1717)

```diff
-           })], IB = [(0, rH.H)("useEmissiveAsIllumination")], fB = [(0, rH.e)("_markAllSubMeshesAsTexturesDirty")], lB = [(0, rH.H)("linkEmissiveWithDiffuse")], KB = [(0, rH.e)("_markAllSubMeshesAsTexturesDirty")], cB = [(0, rH.H)("useSpecularOverAlpha")], eB = [(0, rH.e)("_markA … [truncated]
+           })], uO = [(0, DB.L)("useEmissiveAsIllumination")], mO = [(0, DB.g)("_markAllSubMeshesAsTexturesDirty")], IO = [(0, DB.L)("linkEmissiveWithDiffuse")], FO = [(0, DB.g)("_markAllSubMeshesAsTexturesDirty")], iO = [(0, DB.L)("useSpecularOverAlpha")], LO = [(0, DB.g)("_markA … [truncated]
```

#### 195. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1730` → after: `L1730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1730) · [Before (L1730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1730)

```diff
-           }, oL, IL), (0, AH.g)(HH, null, tB, {
+           }, KG, uG), (0, YB.h)(BB, null, jO, {
```

#### 196. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1743` → after: `L1743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1743) · [Before (L1743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1743)

```diff
-           }, KL, cL), (0, AH.g)(HH, null, CB, {
+           }, FG, iG), (0, YB.h)(BB, null, JO, {
```

#### 197. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1756` → after: `L1756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1756) · [Before (L1756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1756)

```diff
-           }, gL, NL), (0, AH.g)(HH, null, XB, {
+           }, rG, XG), (0, YB.h)(BB, null, PO, {
```

#### 198. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1769` → after: `L1769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1769) · [Before (L1769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1769)

```diff
-           }, nL, FL), (0, AH.g)(HH, null, YB, {
+           }, cG, hG), (0, YB.h)(BB, null, lO, {
```

#### 199. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1782` → after: `L1782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1782) · [Before (L1782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1782)

```diff
-           }, ZL, dL), (0, AH.g)(HH, null, QB, {
+           }, TG, bG), (0, YB.h)(BB, null, qO, {
```

#### 200. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1795` → after: `L1795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1795) · [Before (L1795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1795)

```diff
-           }, JL, iL), (0, AH.g)(HH, null, MB, {
+           }, vG, sG), (0, YB.h)(BB, null, NO, {
```

#### 201. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1808` → after: `L1808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1808) · [Before (L1808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1808)

```diff
-           }, HA, BA), (0, AH.g)(HH, null, vB, {
+           }, BY, OY), (0, YB.h)(BB, null, WO, {
```

#### 202. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1821` → after: `L1821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1821) · [Before (L1821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1821)

```diff
-           }, rA, SA), (0, AH.g)(HH, null, TB, {
+           }, DY, QY), (0, YB.h)(BB, null, VO, {
```

#### 203. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1834` → after: `L1834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1834) · [Before (L1834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1834)

```diff
-           }, zA, CA), (0, AH.g)(HH, null, oB, {
+           }, yY, JY), (0, YB.h)(BB, null, KO, {
```

#### 204. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1847` → after: `L1847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1847) · [Before (L1847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1847)

```diff
-           }, UA, VA), (0, AH.g)(HH, null, fB, {
+           }, SY, nY), (0, YB.h)(BB, null, mO, {
```

#### 205. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1860` → after: `L1860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1860) · [Before (L1860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1860)

```diff
-           }, kA, mA), (0, AH.g)(HH, null, KB, {
+           }, kY, dY), (0, YB.h)(BB, null, FO, {
```

#### 206. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1873` → after: `L1873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1873) · [Before (L1873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1873)

```diff
-           }, fA, lA), (0, AH.g)(HH, null, eB, {
+           }, mY, IY), (0, YB.h)(BB, null, LO, {
```

#### 207. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1886` → after: `L1886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1886) · [Before (L1886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1886)

```diff
-           }, eA, qA), (0, AH.g)(HH, null, gB, {
+           }, LY, gY), (0, YB.h)(BB, null, rO, {
```

#### 208. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1899` → after: `L1899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1899) · [Before (L1899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1899)

```diff
-           }, RA, jA), (0, AH.g)(HH, null, RB, {
+           }, wY, EY), (0, YB.h)(BB, null, wO, {
```

#### 209. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1912` → after: `L1912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1912) · [Before (L1912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1912)

```diff
-           }, DA, wA), (0, AH.g)(HH, null, nB, {
+           }, aY, eY), (0, YB.h)(BB, null, cO, {
```

#### 210. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1925` → after: `L1925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1925) · [Before (L1925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1925)

```diff
-           }, aA, sA), (0, AH.g)(HH, null, DB, {
+           }, CY, HY), (0, YB.h)(BB, null, aO, {
```

#### 211. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1938` → after: `L1938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1938) · [Before (L1938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1938)

```diff
-           }, pA, yA), (0, AH.g)(HH, null, ZB, {
+           }, xY, tY), (0, YB.h)(BB, null, TO, {
```

#### 212. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1951` → after: `L1951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1951) · [Before (L1951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1951)

```diff
-           }, Lr, Ar), (0, AH.g)(HH, null, sB, {
+           }, GD, YD), (0, YB.h)(BB, null, HO, {
```

#### 213. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1964` → after: `L1964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1964) · [Before (L1964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1964)

```diff
-           }, zr, Cr), (0, AH.g)(HH, null, HL, {
+           }, yD, JD), (0, YB.h)(BB, null, BG, {
```

#### 214. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1977` → after: `L1977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1977) · [Before (L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1977)

```diff
-           }, xr, vr), (0, AH.g)(HH, null, LL, {
+           }, RD, WD), (0, YB.h)(BB, null, GG, {
```

#### 215. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1990` → after: `L1990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R1990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L1990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L1990) · [Before (L1990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L1990)

```diff
-           }, Ur, Vr), (0, AH.g)(HH, null, rL, {
+           }, SD, nD), (0, YB.h)(BB, null, DG, {
```

#### 216. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L2003` → after: `L2003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R2003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L2003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L2003) · [Before (L2003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L2003)

```diff
-           }, kr, mr), (0, AH.g)(HH, null, hL, {
+           }, kD, dD), (0, YB.h)(BB, null, oG, {
```

#### 217. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L2016` → after: `L2016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R2016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L2016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L2016) · [Before (L2016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L2016)

```diff
-           }, fr, lr), (0, AH.g)(HH, null, zL, {
+           }, mD, ID), (0, YB.h)(BB, null, yG, {
```

#### 218. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L2029` → after: `L2029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R2029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L2029) · [Before (L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L2029)

```diff
-           }, er, qr), (0, AH.g)(HH, null, EL, {
+           }, LD, gD), (0, YB.h)(BB, null, MG, {
```

#### 219. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L2042` → after: `L2042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R2042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L2042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L2042) · [Before (L2042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L2042)

```diff
-           }, Rr, jr), (0, AH.g)(HH, null, GL, {
+           }, wD, ED), (0, YB.h)(BB, null, zG, {
```

#### 220. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L2055` → after: `L2055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R2055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L2055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L2055) · [Before (L2055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L2055)

```diff
-           }, Dr, wr), (0, AH.g)(HH, null, uL, {
+           }, aD, eD), (0, YB.h)(BB, null, pG, {
```

#### 221. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L2068` → after: `L2068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R2068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L2068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L2068) · [Before (L2068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L2068)

```diff
-           }, ar, sr), (0, AH.g)(HH, null, WL, {
+           }, CD, HD), (0, YB.h)(BB, null, ZG, {
```

#### 222. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L2081` → after: `L2081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R2081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L2081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L2081) · [Before (L2081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L2081)

```diff
-           }, pr, yr), (0, AH.g)(HH, null, xL, {
+           }, xD, tD), (0, YB.h)(BB, null, RG, {
```

#### 223. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L2094` → after: `L2094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R2094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L2094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L2094) · [Before (L2094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L2094)

```diff
-           }, LS, AS), (0, AH.g)(HH, null, PL, {
+           }, GQ, YQ), (0, YB.h)(BB, null, AG, {
```

#### 224. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L2107` → after: `L2107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R2107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L2107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L2107) · [Before (L2107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L2107)

```diff
-           }, hS, tS), (0, AH.g)(HH, null, UL, {
+           }, oQ, jQ), (0, YB.h)(BB, null, SG, {
```

#### 225. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L2120` → after: `L2120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R2120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L2120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L2120) · [Before (L2120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L2120)

```diff
-           }, ES, XS), (0, AH.g)(HH, null, OL, {
+           }, MQ, PQ), (0, YB.h)(BB, null, UG, {
```

#### 226. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L2133` → after: `L2133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R2133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L2133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L2133) · [Before (L2133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L2133)

```diff
-           }, uS, QS), (0, AH.g)(null, null, rB, {
+           }, pQ, qQ), (0, YB.h)(null, null, DO, {
```

#### 227. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L2146` → after: `L2146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R2146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L2146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L2146) · [Before (L2146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L2146)

```diff
-           }, kL, mL), (0, AH.g)(null, null, hB, {
+           }, kG, dG), (0, YB.h)(null, null, oO, {
```

#### 228. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L2159` → after: `L2159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R2159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L2159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L2159) · [Before (L2159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L2159)

```diff
-           }, fL, lL), (0, AH.g)(null, null, zB, {
+           }, mG, IG), (0, YB.h)(null, null, yO, {
```

#### 229. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L2172` → after: `L2172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R2172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L2172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L2172) · [Before (L2172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L2172)

```diff
-           }, eL, qL), (0, AH.g)(null, null, EB, {
+           }, LG, gG), (0, YB.h)(null, null, MO, {
```

#### 230. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L2185` → after: `L2185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R2185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L2185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L2185) · [Before (L2185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L2185)

```diff
-           }, RL, jL), (0, AH.g)(null, null, GB, {
+           }, wG, EG), (0, YB.h)(null, null, zO, {
```

#### 231. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L2198` → after: `L2198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R2198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L2198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L2198) · [Before (L2198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L2198)

```diff
-           }, DL, wL), (0, AH.g)(null, null, uB, {
+           }, aG, eG), (0, YB.h)(null, null, pO, {
```

#### 232. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L2211` → after: `L2211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R2211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L2211) · [Before (L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L2211)

```diff
-           }, aL, sL), (0, AH.g)(null, null, WB, {
+           }, CG, HG), (0, YB.h)(null, null, ZO, {
```

#### 233. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L2224` → after: `L2224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R2224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L2224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L2224) · [Before (L2224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L2224)

```diff
-           }, pL, yL), (0, AH.g)(null, null, xB, {
+           }, xG, tG), (0, YB.h)(null, null, RO, {
```

#### 234. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L2237` → after: `L2237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R2237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L2237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L2237) · [Before (L2237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L2237)

```diff
-           }, LA, AA), (0, AH.g)(null, null, PB, {
+           }, GY, YY), (0, YB.h)(null, null, AO, {
```

#### 235. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L2250` → after: `L2250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R2250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L2250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L2250) · [Before (L2250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L2250)

```diff
-           }, hA, tA), (0, AH.g)(null, null, UB, {
+           }, oY, jY), (0, YB.h)(null, null, SO, {
```

#### 236. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L2263` → after: `L2263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R2263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L2263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L2263) · [Before (L2263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L2263)

```diff
-           }, EA, XA), (0, AH.g)(null, null, VB, {
+           }, MY, PY), (0, YB.h)(null, null, nO, {
```

#### 237. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L2276` → after: `L2276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R2276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L2276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L2276) · [Before (L2276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L2276)

```diff
-           }, GA, YA), (0, AH.g)(null, null, OB, {
+           }, zY, lY), (0, YB.h)(null, null, UO, {
```

#### 238. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L2289` → after: `L2289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R2289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L2289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L2289) · [Before (L2289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L2289)

```diff
-           }, uA, QA), (0, AH.g)(null, null, bB, {
+           }, pY, qY), (0, YB.h)(null, null, fO, {
```

#### 239. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L2302` → after: `L2302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R2302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L2302) · [Before (L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L2302)

```diff
-           }, WA, MA), (0, AH.g)(null, null, kB, {
+           }, ZY, NY), (0, YB.h)(null, null, kO, {
```

#### 240. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L2315` → after: `L2315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R2315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L2315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L2315) · [Before (L2315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L2315)

```diff
-           }, xA, vA), (0, AH.g)(null, null, mB, {
+           }, RY, WY), (0, YB.h)(null, null, dO, {
```

#### 241. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L2328` → after: `L2328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R2328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L2328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L2328) · [Before (L2328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L2328)

```diff
-           }, PA, TA), (0, AH.g)(null, null, IB, {
+           }, AY, VY), (0, YB.h)(null, null, uO, {
```

#### 242. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L2341` → after: `L2341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R2341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L2341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L2341) · [Before (L2341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L2341)

```diff
-           }, OA, bA), (0, AH.g)(null, null, lB, {
+           }, UY, fY), (0, YB.h)(null, null, IO, {
```

#### 243. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L2354` → after: `L2354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R2354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L2354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L2354) · [Before (L2354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L2354)

```diff
-           }, oA, IA), (0, AH.g)(null, null, cB, {
+           }, KY, uY), (0, YB.h)(null, null, iO, {
```

#### 244. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L2367` → after: `L2367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R2367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L2367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L2367) · [Before (L2367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L2367)

```diff
-           }, KA, cA), (0, AH.g)(null, null, qB, {
+           }, FY, iY), (0, YB.h)(null, null, gO, {
```

#### 245. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L2380` → after: `L2380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R2380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L2380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L2380) · [Before (L2380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L2380)

```diff
-           }, gA, NA), (0, AH.g)(null, null, NB, {
+           }, rY, XY), (0, YB.h)(null, null, XO, {
```

#### 246. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L2393` → after: `L2393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R2393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L2393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L2393) · [Before (L2393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L2393)

```diff
-           }, nA, FA), (0, AH.g)(null, null, jB, {
+           }, cY, hY), (0, YB.h)(null, null, EO, {
```

#### 247. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L2406` → after: `L2406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R2406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L2406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L2406) · [Before (L2406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L2406)

```diff
-           }, ZA, dA), (0, AH.g)(null, null, FB, {
+           }, TY, bY), (0, YB.h)(null, null, hO, {
```

#### 248. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L2419` → after: `L2419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R2419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L2419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L2419) · [Before (L2419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L2419)

```diff
-           }, JA, iA), (0, AH.g)(null, null, wB, {
+           }, vY, sY), (0, YB.h)(null, null, eO, {
```

#### 249. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L2432` → after: `L2432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R2432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L2432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L2432) · [Before (L2432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L2432)

```diff
-           }, Hr, Br), (0, AH.g)(null, null, dB, {
+           }, BD, OD), (0, YB.h)(null, null, bO, {
```

#### 250. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L2445` → after: `L2445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R2445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L2445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L2445) · [Before (L2445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L2445)

```diff
-           }, rr, Sr), (0, AH.g)(null, null, aB, {
+           }, DD, QD), (0, YB.h)(null, null, CO, {
```

#### 251. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L2458` → after: `L2458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R2458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L2458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L2458) · [Before (L2458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L2458)

```diff
-           }, hr, tr), (0, AH.g)(null, null, JB, {
+           }, oD, jD), (0, YB.h)(null, null, vO, {
```

#### 252. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L2471` → after: `L2471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R2471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L2471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L2471) · [Before (L2471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L2471)

```diff
-           }, Er, Xr), (0, AH.g)(null, null, iB, {
+           }, MD, PD), (0, YB.h)(null, null, sO, {
```

#### 253. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L2484` → after: `L2484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R2484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L2484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L2484) · [Before (L2484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L2484)

```diff
-           }, Gr, Yr), (0, AH.g)(null, null, pB, {
+           }, zD, lD), (0, YB.h)(null, null, xO, {
```

#### 254. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L2497` → after: `L2497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R2497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L2497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L2497) · [Before (L2497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L2497)

```diff
-           }, ur, Qr), (0, AH.g)(null, null, yB, {
+           }, pD, qD), (0, YB.h)(null, null, tO, {
```

#### 255. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L2510` → after: `L2510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R2510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L2510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L2510) · [Before (L2510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L2510)

```diff
-           }, Wr, Mr), (0, AH.g)(null, null, BL, {
+           }, ZD, ND), (0, YB.h)(null, null, OG, {
```

#### 256. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L2523` → after: `L2523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R2523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L2523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L2523) · [Before (L2523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L2523)

```diff
-           }, Pr, Tr), (0, AH.g)(null, null, AL, {
+           }, AD, VD), (0, YB.h)(null, null, YG, {
```

#### 257. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L2536` → after: `L2536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R2536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L2536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L2536) · [Before (L2536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L2536)

```diff
-           }, Or, br), (0, AH.g)(null, null, SL, {
+           }, UD, fD), (0, YB.h)(null, null, QG, {
```

#### 258. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L2549` → after: `L2549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R2549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L2549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L2549) · [Before (L2549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L2549)

```diff
-           }, or, Ir), (0, AH.g)(null, null, tL, {
+           }, KD, uD), (0, YB.h)(null, null, jG, {
```

#### 259. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L2562` → after: `L2562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R2562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L2562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L2562) · [Before (L2562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L2562)

```diff
-           }, Kr, cr), (0, AH.g)(null, null, CL, {
+           }, FD, iD), (0, YB.h)(null, null, JG, {
```

#### 260. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L2575` → after: `L2575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R2575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L2575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L2575) · [Before (L2575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L2575)

```diff
-           }, gr, Nr), (0, AH.g)(null, null, XL, {
+           }, rD, XD), (0, YB.h)(null, null, PG, {
```

#### 261. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L2588` → after: `L2588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R2588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L2588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L2588) · [Before (L2588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L2588)

```diff
-           }, nr, Fr), (0, AH.g)(null, null, YL, {
+           }, cD, hD), (0, YB.h)(null, null, lG, {
```

#### 262. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L2601` → after: `L2601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R2601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L2601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L2601) · [Before (L2601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L2601)

```diff
-           }, Zr, dr), (0, AH.g)(null, null, QL, {
+           }, TD, bD), (0, YB.h)(null, null, qG, {
```

#### 263. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L2614` → after: `L2614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R2614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L2614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L2614) · [Before (L2614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L2614)

```diff
-           }, Jr, ir), (0, AH.g)(null, null, ML, {
+           }, vD, sD), (0, YB.h)(null, null, NG, {
```

#### 264. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L2627` → after: `L2627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R2627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L2627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L2627) · [Before (L2627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L2627)

```diff
-           }, HS, BS), (0, AH.g)(null, null, vL, {
+           }, BQ, OQ), (0, YB.h)(null, null, WG, {
```

#### 265. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L2640` → after: `L2640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R2640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L2640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L2640) · [Before (L2640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L2640)

```diff
-           }, rS, SS), (0, AH.g)(null, null, TL, {
+           }, DQ, QQ), (0, YB.h)(null, null, VG, {
```

#### 266. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L2653` → after: `L2653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R2653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L2653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L2653) · [Before (L2653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L2653)

```diff
-           }, zS, CS), (0, AH.g)(null, null, VL, {
+           }, yQ, JQ), (0, YB.h)(null, null, nG, {
```

#### 267. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L2672` → after: `L2672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R2672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L2672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L2672) · [Before (L2672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L2672)

```diff
-         })(), HH.ForceGLSL = !1, HH._ShaderLoader = new UH.b((() => [Promise.all([LH.e(626), LH.e(625)]).then((() => LH(45328))), Promise.all([LH.e(631), LH.e(627), LH.e(640), LH.e(630)]).then((() => LH(45518)))]), (() => [Promise.all([LH.e(647), LH.e(642)]).then((() => LH(45679) … [truncated]
+         })(), BB.ForceGLSL = !1, BB._ShaderLoader = new SB.d((() => [Promise.all([GB.e(626), GB.e(625)]).then((() => GB(45016))), Promise.all([GB.e(631), GB.e(627), GB.e(640), GB.e(630)]).then((() => GB(45220)))]), (() => [Promise.all([GB.e(647), GB.e(642)]).then((() => GB(45372) … [truncated]
```

#### 268. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L2677` → after: `L2677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R2677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L2677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L2677) · [Before (L2677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L2677)

```diff
-       eH || (eH = !0, (0, XH.d)(), (0, mH.f)("BABYLON.StandardMaterial", cH), hH.d.DefaultMaterialFactory = HH => new cH("default material", HH))
+       LB || (LB = !0, (0, PB.f)(), (0, dB.f)("BABYLON.StandardMaterial", iB), oB.e.DefaultMaterialFactory = BB => new iB("default material", BB))
```

#### 269. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L2681` → after: `L2681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R2681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L2681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L2681) · [Before (L2681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L2681)

```diff
-   41669: (HH, BH, LH) => {
+   41385: (BB, OB, GB) => {
```

#### 270. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L2690` → after: `L2690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R2690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L2690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L2690) · [Before (L2690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L2690)

```diff
-       b: () => AH
+       e: () => YB
```

#### 271. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L2693` → after: `L2693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R2693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L2693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L2693) · [Before (L2693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L2693)

```diff
-   41657: (HH, BH, LH) => {
+   41372: (BB, OB, GB) => {
```

#### 272. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L2695` → after: `L2695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R2695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L2695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L2695) · [Before (L2695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L2695)

```diff
-       b: () => AH
+       d: () => YB
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/291.js` (cwj32u.ae3e40c2 → gw4e3a.937868ec)

- **File**: `bundles/preprod.bloxd.io/chunks/js/291.js` (255 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade)

#### 1. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L4)

```diff
-   41585: (HH, BH, LH) => {
+   41294: (BB, OB, GB) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L6)

```diff
-       b: () => AH
+       c: () => YB
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L14` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L14) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L14)

```diff
-   41595: (HH, BH, LH) => {
+   41307: (BB, OB, GB) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L16` → after: `L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L16) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L16)

```diff
-       b: () => hH
+       c: () => oB
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L18-L20` → after: `L18-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L18-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L18-L20) · [Before (L18-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L18-L20)

```diff
-     var AH = LH(37974),
-       rH = LH(37963),
-       SH = LH(37972);
+     var YB = GB(37785),
+       DB = GB(37778),
+       QB = GB(37782);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L23` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L23) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L23)

```diff
-         this.vectors = (0, AH.d)(8, rH.o.Zero), this.center = rH.o.Zero(), this.centerWorld = rH.o.Zero(), this.extendSize = rH.o.Zero(), this.extendSizeWorld = rH.o.Zero(), this.directions = (0, AH.d)(3, rH.o.Zero), this.vectorsWorld = (0, AH.d)(8, rH.o.Zero), this.minimumWorld  … [truncated]
+         this.vectors = (0, YB.e)(8, DB.r.Zero), this.center = DB.r.Zero(), this.centerWorld = DB.r.Zero(), this.extendSize = DB.r.Zero(), this.extendSizeWorld = DB.r.Zero(), this.directions = (0, YB.e)(3, DB.r.Zero), this.vectorsWorld = (0, YB.e)(8, DB.r.Zero), this.minimumWorld  … [truncated]
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L33` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L33) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L33)

```diff
-         this.minimum.SBH(AH, SH, hH), this.maximum.SBH(tH, zH, CH), EH[0].SBH(AH, SH, hH), EH[1].SBH(tH, zH, CH), EH[2].SBH(tH, SH, hH), EH[3].SBH(AH, zH, hH), EH[4].SBH(AH, SH, CH), EH[5].SBH(tH, zH, hH), EH[6].SBH(AH, zH, CH), EH[7].SBH(tH, SH, CH), BH.addToRef(HH, this.center) … [truncated]
+         this.minimum.zOB(YB, QB, oB), this.maximum.zOB(jB, yB, JB), MB[0].zOB(YB, QB, oB), MB[1].zOB(jB, yB, JB), MB[2].zOB(jB, QB, oB), MB[3].zOB(YB, yB, oB), MB[4].zOB(YB, QB, JB), MB[5].zOB(jB, yB, oB), MB[6].zOB(YB, yB, JB), MB[7].zOB(jB, QB, JB), OB.addToRef(BB, this.center) … [truncated]
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L56-L58` → after: `L56-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L56-L58) · [Before (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L56-L58)

```diff
-           BH.Tm(this.minimum), LH.Tm(this.maximum);
-           for (let HH = 0; HH < 8; ++HH) SH[HH].Tm(hH[HH]);
-           this.extendSizeWorld.Tm(this.extendSize), this.centerWorld.Tm(this.center)
+           OB.IU(this.minimum), GB.IU(this.maximum);
+           for (let BB = 0; BB < 8; ++BB) QB[BB].IU(oB[BB]);
+           this.extendSizeWorld.IU(this.extendSize), this.centerWorld.IU(this.center)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L60` → after: `L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L60) · [Before (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L60)

```diff
-           BH.IHH(Number.MAX_VALUE), LH.IHH(-Number.MAX_VALUE);
+           OB.uBB(Number.MAX_VALUE), GB.uBB(-Number.MAX_VALUE);
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L63` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L63) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L63)

```diff
-             rH.o.TransformCoordinatesToRef(hH[AH], HH, tH), BH.minimizeInPlace(tH), LH.maximizeInPlace(tH)
+             DB.r.TransformCoordinatesToRef(oB[YB], BB, jB), OB.minimizeInPlace(jB), GB.maximizeInPlace(jB)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L67` → after: `L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L67) · [Before (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L67)

```diff
-         rH.o.FromArrayToRef(HH.m, 0, AH[0]), rH.o.FromArrayToRef(HH.m, 4, AH[1]), rH.o.FromArrayToRef(HH.m, 8, AH[2]), this._worldMatrix = HH
+         DB.r.FromArrayToRef(BB.m, 0, YB[0]), DB.r.FromArrayToRef(BB.m, 4, YB[1]), DB.r.FromArrayToRef(BB.m, 8, YB[2]), this._worldMatrix = BB
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L87` → after: `L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L87) · [Before (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L87)

```diff
-           YH = -SH.d;
+           lB = -QB.b;
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L118-L119` → after: `L118-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L118-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L118-L119) · [Before (L118-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L118-L119)

```diff
-         rH.o.ClampToRef(LH, HH, BH, SH);
-         return rH.o.DistanceSquared(LH, SH) <= AH * AH
+         DB.r.ClampToRef(GB, BB, OB, QB);
+         return DB.r.DistanceSquared(GB, QB) <= YB * YB
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L142` → after: `L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L142) · [Before (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L142)

```diff
-     hH._TmpVector3 = (0, AH.d)(3, rH.o.Zero)
+     oB._TmpVector3 = (0, YB.e)(3, DB.r.Zero)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L144` → after: `L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L144) · [Before (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L144)

```diff
-   41588: (HH, BH, LH) => {
+   41300: (BB, OB, GB) => {
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L146` → after: `L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L146) · [Before (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L146)

```diff
-       d: () => XH
+       e: () => PB
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L148-L150` → after: `L148-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L148-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L148-L150) · [Before (L148-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L148-L150)

```diff
-     var AH = LH(37974),
-       rH = LH(37963),
-       SH = LH(41595);
+     var YB = GB(37785),
+       DB = GB(37778),
+       QB = GB(41307);
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L153` → after: `L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L153) · [Before (L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L153)

```diff
-         this.center = rH.o.Zero(), this.centerWorld = rH.o.Zero(), this.minimum = rH.o.Zero(), this.maximum = rH.o.Zero(), this.reConstruct(HH, BH, LH)
+         this.center = DB.r.Zero(), this.centerWorld = DB.r.Zero(), this.minimum = DB.r.Zero(), this.maximum = DB.r.Zero(), this.reConstruct(BB, OB, GB)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L156-L158` → after: `L156-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L156-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L156-L158) · [Before (L156-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L156-L158)

```diff
-         this.minimum.Tm(HH), this.maximum.Tm(BH);
-         const AH = rH.o.Distance(HH, BH);
-         BH.addToRef(HH, this.center).scaleInPlace(.5), this.radius = .5 * AH, this._update(LH || rH.e.IdentityReadOnly)
+         this.minimum.IU(BB), this.maximum.IU(OB);
+         const YB = DB.r.Distance(BB, OB);
+         OB.addToRef(BB, this.center).scaleInPlace(.5), this.radius = .5 * YB, this._update(GB || DB.d.IdentityReadOnly)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L175` → after: `L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L175) · [Before (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L175)

```diff
-         if (HH.isIdentity()) this.centerWorld.Tm(this.center), this.radiusWorld = this.radius;
+         if (BB.isIdentity()) this.centerWorld.IU(this.center), this.radiusWorld = this.radius;
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L177` → after: `L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L177) · [Before (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L177)

```diff
-           rH.o.TransformCoordinatesToRef(this.center, HH, this.centerWorld);
+           DB.r.TransformCoordinatesToRef(this.center, BB, this.centerWorld);
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L179` → after: `L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L179) · [Before (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L179)

```diff
-           rH.o.TransformNormalFromFloatsToRef(1, 1, 1, HH, BH), this.radiusWorld = Math.max(Math.abs(BH.x), Math.abs(BH.y), Math.abs(BH.z)) * this.radius
+           DB.r.TransformNormalFromFloatsToRef(1, 1, 1, BB, OB), this.radiusWorld = Math.max(Math.abs(OB.x), Math.abs(OB.y), Math.abs(OB.z)) * this.radius
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L196` → after: `L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L196) · [Before (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L196)

```diff
-         const BH = rH.o.DistanceSquared(this.centerWorld, HH);
+         const OB = DB.r.DistanceSquared(this.centerWorld, BB);
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L200` → after: `L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L200) · [Before (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L200)

```diff
-         const LH = rH.o.DistanceSquared(HH.centerWorld, BH.centerWorld),
+         const GB = DB.r.DistanceSquared(BB.centerWorld, OB.centerWorld),
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L205` → after: `L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L205) · [Before (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L205)

```diff
-         this._TmpVector3[0].Tm(HH), this._TmpVector3[1].SBH(0, 0, BH), this._TmpVector3[2].Tm(HH), this._TmpVector3[0].addInPlace(this._TmpVector3[1]), this._TmpVector3[2].grH(this._TmpVector3[1]);
+         this._TmpVector3[0].IU(BB), this._TmpVector3[1].zOB(0, 0, OB), this._TmpVector3[2].IU(BB), this._TmpVector3[0].addInPlace(this._TmpVector3[1]), this._TmpVector3[2].CDB(this._TmpVector3[1]);
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L207` → after: `L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L207) · [Before (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L207)

```diff
-         return AH._worldMatrix = LH || rH.e.Identity(), AH
+         return YB._worldMatrix = GB || DB.d.Identity(), YB
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L210` → after: `L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L210) · [Before (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L210)

```diff
-     hH._TmpVector3 = (0, AH.d)(3, rH.o.Zero);
+     oB._TmpVector3 = (0, YB.e)(3, DB.r.Zero);
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L220-L221` → after: `L220-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L220-L221) · [Before (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L220-L221)

```diff
-         const AH = rH.o.Dot(BH.centerWorld, HH),
-           SH = Math.abs(rH.o.Dot(BH.directions[0], HH)) * BH.extendSize.x + Math.abs(rH.o.Dot(BH.directions[1], HH)) * BH.extendSize.y + Math.abs(rH.o.Dot(BH.directions[2], HH)) * BH.extendSize.z;
+         const YB = DB.r.Dot(OB.centerWorld, BB),
+           QB = Math.abs(DB.r.Dot(OB.directions[0], BB)) * OB.extendSize.x + Math.abs(DB.r.Dot(OB.directions[1], BB)) * OB.extendSize.y + Math.abs(DB.r.Dot(OB.directions[2], BB)) * OB.extendSize.z;
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L227` → after: `L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L227) · [Before (L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L227)

```diff
-         this._isLocked = !1, this.boundingBox = new SH.b(HH, BH, LH), this.nrH = new hH(HH, BH, LH)
+         this._isLocked = !1, this.boundingBox = new QB.c(BB, OB, GB), this.xDB = new oB(BB, OB, GB)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L230` → after: `L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L230) · [Before (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L230)

```diff
-         this.boundingBox.reConstruct(HH, BH, LH), this.nrH.reConstruct(HH, BH, LH)
+         this.boundingBox.reConstruct(BB, OB, GB), this.xDB.reConstruct(BB, OB, GB)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L245` → after: `L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L245) · [Before (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L245)

```diff
-         this._isLocked || (this.boundingBox._update(HH), this.nrH._update(HH))
+         this._isLocked || (this.boundingBox._update(BB), this.xDB._update(BB))
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L248-L250` → after: `L248-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L248-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L248-L250) · [Before (L248-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L248-L250)

```diff
-         const LH = XH._TmpVector3[0].Tm(HH).grH(BH),
-           AH = XH._TmpVector3[1].Tm(HH).addInPlace(BH);
-         return this.boundingBox.reConstruct(LH, AH, this.boundingBox.getWorldMatrix()), this.nrH.reConstruct(LH, AH, this.boundingBox.getWorldMatrix()), this
+         const GB = PB._TmpVector3[0].IU(BB).CDB(OB),
+           YB = PB._TmpVector3[1].IU(BB).addInPlace(OB);
+         return this.boundingBox.reConstruct(GB, YB, this.boundingBox.getWorldMatrix()), this.xDB.reConstruct(GB, YB, this.boundingBox.getWorldMatrix()), this
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L253-L254` → after: `L253-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L253-L254) · [Before (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L253-L254)

```diff
-         const BH = rH.o.Minimize(this.minimum, HH),
-           LH = rH.o.Maximize(this.maximum, HH);
+         const OB = DB.r.Minimize(this.minimum, BB),
+           GB = DB.r.Maximize(this.maximum, BB);
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L258` → after: `L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L258) · [Before (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L258)

```diff
-         const BH = rH.l.Matrix[0];
+         const OB = DB.k.Matrix[0];
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L260-L261` → after: `L260-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L260-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L260-L261) · [Before (L260-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L260-L261)

```diff
-         const LH = rH.l.lu[0];
-         return rH.o.TransformCoordinatesToRef(HH.boundingBox.minimumWorld, BH, LH), this.encapsulate(LH), rH.o.TransformCoordinatesToRef(HH.boundingBox.maximumWorld, BH, LH), this.encapsulate(LH), this
+         const GB = DB.k.Xp[0];
+         return DB.r.TransformCoordinatesToRef(BB.boundingBox.minimumWorld, OB, GB), this.encapsulate(GB), DB.r.TransformCoordinatesToRef(BB.boundingBox.maximumWorld, OB, GB), this.encapsulate(GB), this
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L264` → after: `L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L264) · [Before (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L264)

```diff
-         return this.boundingBox.scale(HH), this.nrH.scale(HH), this
+         return this.boundingBox.scale(BB), this.xDB.scale(BB), this
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L268-L269` → after: `L268-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L268-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L268-L269) · [Before (L268-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L268-L269)

```diff
-         if ((2 === BH || 3 === BH) && this.nrH.isCenterInFrustum(HH)) return !0;
-         if (!this.nrH.isInFrustum(HH)) return !1;
+         if ((2 === OB || 3 === OB) && this.xDB.isCenterInFrustum(BB)) return !0;
+         if (!this.xDB.isInFrustum(BB)) return !1;
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L280` → after: `L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L280) · [Before (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L280)

```diff
-         return HH._canDoCollision(this.nrH.centerWorld, this.nrH.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
+         return BB._canDoCollision(this.xDB.centerWorld, this.xDB.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L283` → after: `L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L283) · [Before (L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L283)

```diff
-         return !!this.nrH.centerWorld && (!!this.nrH.intersectsPoint(HH) && !!this.boundingBox.intersectsPoint(HH))
+         return !!this.xDB.centerWorld && (!!this.xDB.intersectsPoint(BB) && !!this.boundingBox.intersectsPoint(BB))
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L286-L287` → after: `L286-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L286-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L286-L287) · [Before (L286-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L286-L287)

```diff
-         if (!hH.Intersects(this.nrH, HH.nrH)) return !1;
-         if (!SH.b.Intersects(this.boundingBox, HH.boundingBox)) return !1;
+         if (!oB.Intersects(this.xDB, BB.xDB)) return !1;
+         if (!QB.c.Intersects(this.boundingBox, BB.boundingBox)) return !1;
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L291` → after: `L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L291) · [Before (L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L291)

```diff
-         return !!EH(LH.directions[0], LH, AH) && (!!EH(LH.directions[1], LH, AH) && (!!EH(LH.directions[2], LH, AH) && (!!EH(AH.directions[0], LH, AH) && (!!EH(AH.directions[1], LH, AH) && (!!EH(AH.directions[2], LH, AH) && (!!EH(rH.o.Cross(LH.directions[0], AH.directions[0]), LH … [truncated]
+         return !!MB(GB.directions[0], GB, YB) && (!!MB(GB.directions[1], GB, YB) && (!!MB(GB.directions[2], GB, YB) && (!!MB(YB.directions[0], GB, YB) && (!!MB(YB.directions[1], GB, YB) && (!!MB(YB.directions[2], GB, YB) && (!!MB(DB.r.Cross(GB.directions[0], YB.directions[0]), GB … [truncated]
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L294` → after: `L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L294) · [Before (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L294)

```diff
-     XH._TmpVector3 = (0, AH.d)(2, rH.o.Zero)
+     PB._TmpVector3 = (0, YB.e)(2, DB.r.Zero)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L296` → after: `L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L296) · [Before (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L296)

```diff
-   41623: (HH, BH, LH) => {
+   41333: (BB, OB, GB) => {
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L298-L301` → after: `L298-L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L298-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L298-L301) · [Before (L298-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L298-L301)

```diff
-       b: () => SH,
-       d: () => zH,
-       h: () => tH,
-       i: () => hH
+       e: () => QB,
+       g: () => yB,
+       k: () => jB,
+       o: () => oB
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L303-L304` → after: `L303-L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L303-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L303-L304) · [Before (L303-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L303-L304)

```diff
-     var AH = LH(41439),
-       rH = LH(37963);
+     var YB = GB(41164),
+       DB = GB(37778);
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L338-L339` → after: `L338-L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L338-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L338-L339) · [Before (L338-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L338-L339)

```diff
-         const SH = AH.d.yN()?.floatingOriginOffset || rH.o.ZeroReadOnly;
-         HH.setFloat4(BH, LH.normal.x, LH.normal.y, LH.normal.z, LH.d + rH.o.Dot(LH.normal, SH))
+         const QB = YB.c.JF()?.floatingOriginOffset || DB.r.ZeroReadOnly;
+         BB.setFloat4(OB, GB.normal.x, GB.normal.y, GB.normal.z, GB.d + DB.r.Dot(GB.normal, QB))
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L343` → after: `L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L343) · [Before (L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L343)

```diff
-   41636: (HH, BH, LH) => {
+   41354: (BB, OB, GB) => {
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L345` → after: `L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L345) · [Before (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L345)

```diff
-       b: () => AH
+       c: () => YB
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L366` → after: `L366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L366) · [Before (L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L366)

```diff
-           const LH = this._mesh.yN();
+           const GB = this._mesh.JF();
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L372-L373` → after: `L372-L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L372-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L372-L373) · [Before (L372-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L372-L373)

```diff
-                 else if (AH.jU)
-                 for (const HH of AH.jU) {
+                 else if (YB.iW)
+                 for (const BB of YB.iW) {
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L391` → after: `L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L391) · [Before (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L391)

```diff
-   41573: (HH, BH, LH) => {
+   41283: (BB, OB, GB) => {
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L393` → after: `L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L393) · [Before (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L393)

```diff
-       c: () => xH
+       b: () => RB
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L395-L405` → after: `L395-L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L395-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L395-L405) · [Before (L395-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L395-L405)

```diff
-     var AH = LH(41290),
-       rH = LH(41297),
-       SH = LH(41387),
-       hH = LH(37997),
-       tH = LH(37989),
-       zH = LH(41578),
-       CH = LH(41416),
-       EH = LH(39595),
-       XH = LH(38619),
-       GH = LH(41609),
-       YH = LH(41319);
+     var YB = GB(40998),
+       DB = GB(41004),
+       QB = GB(41097),
+       oB = GB(37802),
+       jB = GB(37796),
+       yB = GB(41287),
+       JB = GB(41136),
+       MB = GB(39366),
+       PB = GB(38432),
+       zB = GB(41323),
+       lB = GB(41022);
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L411` → after: `L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L411) · [Before (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L411)

```diff
-           this._func = (0, AH.k)(this, WH), this.reset()
+           this._func = (0, YB.j)(this, ZB), this.reset()
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L492` → after: `L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L492) · [Before (L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L492)

```diff
-           YH.c.Clone((() => HH), this)
+           lB.d.Clone((() => BB), this)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L495` → after: `L495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L495) · [Before (L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L495)

```diff
-           return YH.c.Serialize(this)
+           return lB.d.Serialize(this)
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L498` → after: `L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L498) · [Before (L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L498)

```diff
-           YH.c.Parse((() => this), HH, BH, LH)
+           lB.d.Parse((() => this), BB, OB, GB)
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L502` → after: `L502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L502) · [Before (L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L502)

```diff
-         BH = [(0, rH.H)()], LH = [(0, rH.H)()], SH = [(0, rH.H)()], hH = [(0, rH.H)()], tH = [(0, rH.H)()], zH = [(0, rH.H)()], CH = [(0, rH.H)()], EH = [(0, rH.H)()], XH = [(0, rH.H)()], GH = [(0, rH.H)()], uH = [(0, rH.H)()], QH = [(0, rH.H)()], (0, AH.g)(HH, null, BH, {
+         OB = [(0, DB.L)()], GB = [(0, DB.L)()], QB = [(0, DB.L)()], oB = [(0, DB.L)()], jB = [(0, DB.L)()], yB = [(0, DB.L)()], JB = [(0, DB.L)()], MB = [(0, DB.L)()], PB = [(0, DB.L)()], zB = [(0, DB.L)()], pB = [(0, DB.L)()], qB = [(0, DB.L)()], (0, YB.h)(BB, null, OB, {
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L512` → after: `L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L512) · [Before (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L512)

```diff
-         }, null, WH), (0, AH.g)(HH, null, LH, {
+         }, null, ZB), (0, YB.h)(BB, null, GB, {
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L522` → after: `L522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L522) · [Before (L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L522)

```diff
-         }, null, WH), (0, AH.g)(HH, null, SH, {
+         }, null, ZB), (0, YB.h)(BB, null, QB, {
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L532` → after: `L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L532) · [Before (L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L532)

```diff
-         }, null, WH), (0, AH.g)(HH, null, hH, {
+         }, null, ZB), (0, YB.h)(BB, null, oB, {
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L542` → after: `L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L542) · [Before (L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L542)

```diff
-         }, null, WH), (0, AH.g)(HH, null, tH, {
+         }, null, ZB), (0, YB.h)(BB, null, jB, {
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L552` → after: `L552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L552) · [Before (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L552)

```diff
-         }, null, WH), (0, AH.g)(HH, null, zH, {
+         }, null, ZB), (0, YB.h)(BB, null, yB, {
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L562` → after: `L562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L562) · [Before (L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L562)

```diff
-         }, null, WH), (0, AH.g)(HH, null, CH, {
+         }, null, ZB), (0, YB.h)(BB, null, JB, {
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L572` → after: `L572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L572) · [Before (L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L572)

```diff
-         }, null, WH), (0, AH.g)(HH, null, EH, {
+         }, null, ZB), (0, YB.h)(BB, null, MB, {
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L582` → after: `L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L582) · [Before (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L582)

```diff
-         }, null, WH), (0, AH.g)(HH, null, XH, {
+         }, null, ZB), (0, YB.h)(BB, null, PB, {
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L592` → after: `L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L592) · [Before (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L592)

```diff
-         }, null, WH), (0, AH.g)(HH, null, GH, {
+         }, null, ZB), (0, YB.h)(BB, null, zB, {
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L602` → after: `L602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L602) · [Before (L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L602)

```diff
-         }, null, WH), (0, AH.g)(HH, null, uH, {
+         }, null, ZB), (0, YB.h)(BB, null, pB, {
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L612` → after: `L612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L612) · [Before (L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L612)

```diff
-         }, null, WH), (0, AH.g)(HH, null, QH, {
+         }, null, ZB), (0, YB.h)(BB, null, qB, {
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L630-L632` → after: `L630-L632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L630-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L630-L632) · [Before (L630-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L630-L632)

```diff
-     var QH = LH(41618),
-       WH = LH(41202),
-       MH = LH(41169);
+     var qB = GB(41325),
+       ZB = GB(40918),
+       NB = GB(40890);
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L691` → after: `L691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L691) · [Before (L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L691)

```diff
-           this._useVertexPulling !== BH && (this._useVertexPulling = BH, this.dLH(HH.MiscDirtyFlag))
+           this._useVertexPulling !== OB && (this._useVertexPulling = OB, this.DYB(BB.MiscDirtyFlag))
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L706` → after: `L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L706) · [Before (L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L706)

```diff
-           this._alpha = BH, 1 !== LH && 1 !== BH || this.dLH(HH.MiscDirtyFlag + HH.PrePassDirtyFlag)
+           this._alpha = OB, 1 !== GB && 1 !== OB || this.DYB(BB.MiscDirtyFlag + BB.PrePassDirtyFlag)
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L712` → after: `L712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L712) · [Before (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L712)

```diff
-           this._backFaceCulling !== BH && (this._backFaceCulling = BH, this.dLH(HH.TextureDirtyFlag))
+           this._backFaceCulling !== OB && (this._backFaceCulling = OB, this.DYB(BB.TextureDirtyFlag))
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L719` → after: `L719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L719) · [Before (L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L719)

```diff
-           this._textureRepetitionMode !== LH && (this._textureRepetitionMode = LH, this.dLH(HH.TextureDirtyFlag))
+           this._textureRepetitionMode !== GB && (this._textureRepetitionMode = GB, this.DYB(BB.TextureDirtyFlag))
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L725` → after: `L725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L725) · [Before (L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L725)

```diff
-           this._cullBackFaces !== BH && (this._cullBackFaces = BH, this.dLH(HH.TextureDirtyFlag))
+           this._cullBackFaces !== OB && (this._cullBackFaces = OB, this.DYB(BB.TextureDirtyFlag))
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L748` → after: `L748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L748) · [Before (L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L748)

```diff
-           this._onDisposeObserver && this.uR.remove(this._onDisposeObserver), this._onDisposeObserver = this.uR.add(HH)
+           this._onDisposeObserver && this.lF.remove(this._onDisposeObserver), this._onDisposeObserver = this.lF.add(BB)
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L751` → after: `L751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L751) · [Before (L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L751)

```diff
-           return this._onBindObservable || (this._onBindObservable = new hH.d), this._onBindObservable
+           return this._onBindObservable || (this._onBindObservable = new oB.b), this._onBindObservable
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L757` → after: `L757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L757) · [Before (L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L757)

```diff
-           return this._onUnBindObservable || (this._onUnBindObservable = new hH.d), this._onUnBindObservable
+           return this._onUnBindObservable || (this._onUnBindObservable = new oB.b), this._onUnBindObservable
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L760` → after: `L760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L760) · [Before (L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L760)

```diff
-           return this._onEffectCreatedObservable || (this._onEffectCreatedObservable = new hH.d), this._onEffectCreatedObservable
+           return this._onEffectCreatedObservable || (this._onEffectCreatedObservable = new oB.b), this._onEffectCreatedObservable
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L773` → after: `L773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L773) · [Before (L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L773)

```diff
-           this._alphaMode[LH] !== BH && (this._alphaMode[LH] = BH, this.dLH(HH.TextureDirtyFlag))
+           this._alphaMode[GB] !== OB && (this._alphaMode[GB] = OB, this.DYB(BB.TextureDirtyFlag))
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L785` → after: `L785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L785) · [Before (L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L785)

```diff
-           this._fogEnabled !== BH && (this._fogEnabled = BH, this.dLH(HH.MiscDirtyFlag))
+           this._fogEnabled !== OB && (this._fogEnabled = OB, this.DYB(BB.MiscDirtyFlag))
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L818` → after: `L818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L818) · [Before (L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L818)

```diff
-           this._fillMode !== BH && (this._fillMode = BH, this.dLH(HH.MiscDirtyFlag))
+           this._fillMode !== OB && (this._fillMode = OB, this.DYB(BB.MiscDirtyFlag))
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L824-L825` → after: `L824-L825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L824-L825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L824-L825) · [Before (L824-L825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L824-L825)

```diff
-           const BH = this.yN().Iu().getCaps().fragmentDepthSupported;
-           HH && !BH && EH.e.Warn("Logarithmic depth has been requested for a material on a device that doesn't support it."), this._useLogarithmicDepth = HH && BH, this._markAllSubMeshesAsMiscDirty()
+           const OB = this.JF().Lp().getCaps().fragmentDepthSupported;
+           BB && !OB && MB.b.Warn("Logarithmic depth has been requested for a material on a device that doesn't support it."), this._useLogarithmicDepth = BB && OB, this._markAllSubMeshesAsMiscDirty()
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L841-L843` → after: `L841-L843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L841-L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L841-L843) · [Before (L841-L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L841-L843)

```diff
-           this.customShaderNameResolve = (0, AH.k)(this, ZH), this.shadowDepthWrapper = null, this.allowShaderHotSwapping = !0, this._shaderLanguage = 0, this._forceGLSL = !1, this._useVertexPulling = !1, this.id = (0, AH.k)(this, dH, void 0), this.uniqueId = ((0, AH.k)(this, aH) … [truncated]
-           const EH = LH || tH.d.LastCreatedScene;
-           EH && (this._scene = EH, this._dirtyCallbacks = {}, this._forceGLSL = zH, this._dirtyCallbacks[1] = this._markAllSubMeshesAsTexturesDirty.bind(this), this._dirtyCallbacks[2] = this._markAllSubMeshesAsLightsDirty.bind(this), this._dirtyCallbacks[4] = this._markAllSubMesh … [truncated]
+           this.customShaderNameResolve = (0, YB.j)(this, TB), this.shadowDepthWrapper = null, this.allowShaderHotSwapping = !0, this._shaderLanguage = 0, this._forceGLSL = !1, this._useVertexPulling = !1, this.id = (0, YB.j)(this, bB, void 0), this.uniqueId = ((0, YB.j)(this, CB) … [truncated]
+           const MB = GB || jB.b.LastCreatedScene;
+           MB && (this._scene = MB, this._dirtyCallbacks = {}, this._forceGLSL = yB, this._dirtyCallbacks[1] = this._markAllSubMeshesAsTexturesDirty.bind(this), this._dirtyCallbacks[2] = this._markAllSubMeshesAsLightsDirty.bind(this), this._dirtyCallbacks[4] = this._markAllSubMesh … [truncated]
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L846-L847` → after: `L846-L847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L846-L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L846-L847) · [Before (L846-L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L846-L847)

```diff
-           const HH = this.yN().Iu();
-           this._uniformBuffer?.dispose(), HH.isWebGPU && !this._forceGLSL ? (this._uniformBuffer = new CH.c(HH, void 0, void 0, this.name, !0), this._shaderLanguage = 1) : this._uniformBuffer = new CH.c(this._scene.Iu(), void 0, void 0, this.name), this._uniformBufferLayoutBuilt  … [truncated]
+           const BB = this.JF().Lp();
+           this._uniformBuffer?.dispose(), BB.isWebGPU && !this._forceGLSL ? (this._uniformBuffer = new JB.d(BB, void 0, void 0, this.name, !0), this._shaderLanguage = 1) : this._uniformBuffer = new JB.d(this._scene.Lp(), void 0, void 0, this.name), this._uniformBufferLayoutBuilt  … [truncated]
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L918` → after: `L918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L918) · [Before (L918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L918)

```diff
-           const LH = this.yN().meshes;
+           const GB = this.JF().meshes;
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L920-L922` → after: `L920-L922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L920-L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L920-L922) · [Before (L920-L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L920-L922)

```diff
-             if (HH.jU)
-               for (const LH of HH.jU)
-                 if (LH.eu() === this)
+             if (BB.iW)
+               for (const GB of BB.iW)
+                 if (GB.cp() === this)
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L924` → after: `L924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L924) · [Before (L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L924)

```diff
-           BH && this.dLH(HH.AllDirtyFlag)
+           OB && this.DYB(BB.AllDirtyFlag)
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L928` → after: `L928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L928) · [Before (L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L928)

```diff
-           const AH = this._scene.Iu(),
+           const YB = this._scene.Lp(),
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L944` → after: `L944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L944) · [Before (L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L944)

```diff
-           this._useUBO ? this._needToBindSceneUbo = !0 : HH.setMatrix("view", this.yN().getViewMatrix())
+           this._useUBO ? this._needToBindSceneUbo = !0 : BB.setMatrix("view", this.JF().getViewMatrix())
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L947` → after: `L947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L947) · [Before (L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L947)

```diff
-           this._useUBO ? this._needToBindSceneUbo = !0 : (HH.setMatrix("viewProjection", this.yN().getTransformMatrix()), HH.setMatrix("projection", this.yN().getProjectionMatrix()), HH.setMatrix("inverseProjection", this.yN().getInverseProjectionMatrix()))
+           this._useUBO ? this._needToBindSceneUbo = !0 : (BB.setMatrix("viewProjection", this.JF().getTransformMatrix()), BB.setMatrix("projection", this.JF().getProjectionMatrix()), BB.setMatrix("inverseProjection", this.JF().getInverseProjectionMatrix()))
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L954-L955` → after: `L954-L955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L954-L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L954-L955) · [Before (L954-L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L954-L955)

```diff
-           if (this._scene._cachedMaterial = this, this._needToBindSceneUbo && BH && (this._needToBindSceneUbo = !1, (0, QH.t)(BH, this.yN().getSceneUniformBuffer()), this._scene.finalizeSceneUbo()), this._scene._cachedVisibility = HH ? HH.visibility : 1, this._onBindObservable && … [truncated]
-             const HH = this._scene.Iu();
+           if (this._scene._cachedMaterial = this, this._needToBindSceneUbo && OB && (this._needToBindSceneUbo = !1, (0, qB.E)(OB, this.JF().getSceneUniformBuffer()), this._scene.finalizeSceneUbo()), this._scene._cachedVisibility = BB ? BB.visibility : 1, this._onBindObservable && … [truncated]
+             const BB = this._scene.Lp();
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L959` → after: `L959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L959) · [Before (L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L959)

```diff
-             const HH = this._scene.Iu();
+             const BB = this._scene.Lp();
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L963` → after: `L963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L963) · [Before (L963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L963)

```diff
-             const HH = this._scene.Iu();
+             const BB = this._scene.Lp();
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L969` → after: `L969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L969) · [Before (L969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L969)

```diff
-             this._scene.Iu().setDepthFunction(this._cachedDepthFunctionState)
+             this._scene.Lp().setDepthFunction(this._cachedDepthFunctionState)
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L972` → after: `L972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L972) · [Before (L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L972)

```diff
-             this._scene.Iu().setDepthWrite(this._cachedDepthWriteState)
+             this._scene.Lp().setDepthWrite(this._cachedDepthWriteState)
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L975` → after: `L975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L975) · [Before (L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L975)

```diff
-             this._scene.Iu().setColorWrite(this._cachedColorWriteState)
+             this._scene.Lp().setColorWrite(this._cachedColorWriteState)
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1015` → after: `L1015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1015) · [Before (L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1015)

```diff
-             SH = this.yN(),
+             QB = this.JF(),
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1019` → after: `L1019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1019) · [Before (L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1019)

```diff
-             if (!this._scene || !this._scene.Iu()) return;
+             if (!this._scene || !this._scene.Lp()) return;
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1021` → after: `L1021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1021) · [Before (L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1021)

```diff
-             if (rH.clipPlane && (SH.clipPlane = new XH.d(0, 0, 0, 1)), this._storeEffectOnSubMeshes) {
+             if (DB.clipPlane && (QB.clipPlane = new PB.c(0, 0, 0, 1)), this._storeEffectOnSubMeshes) {
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1024-L1025` → after: `L1024-L1025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1024-L1025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1024-L1025) · [Before (L1024-L1025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1024-L1025)

```diff
-               if (HH.jU) {
-                 const BH = new zH.d(0, 0, 0, 0, 0, HH, void 0, !1, !1);
+               if (BB.iW) {
+                 const OB = new yB.c(0, 0, 0, 0, 0, BB, void 0, !1, !1);
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1043-L1044` → after: `L1043-L1044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1043-L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1043-L1044) · [Before (L1043-L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1043-L1044)

```diff
-         dLH(BH) {
-           this.yN().blockMaterialDirtyMechanism || this._blockDirtyMechanism || (HH._DirtyCallbackArray.length = 0, BH & HH.ImageProcessingDirtyFlag && HH._DirtyCallbackArray.push(HH._ImageProcessingDirtyCallBack), BH & HH.TextureDirtyFlag && HH._DirtyCallbackArray.push(HH._Textu … [truncated]
+         DYB(OB) {
+           this.JF().blockMaterialDirtyMechanism || this._blockDirtyMechanism || (BB._DirtyCallbackArray.length = 0, OB & BB.ImageProcessingDirtyFlag && BB._DirtyCallbackArray.push(BB._ImageProcessingDirtyCallBack), OB & BB.TextureDirtyFlag && BB._DirtyCallbackArray.push(BB._Textu … [truncated]
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1047` → after: `L1047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1047) · [Before (L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1047)

```diff
-           const HH = this.yN().meshes;
+           const BB = this.JF().meshes;
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1049-L1050` → after: `L1049-L1050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1049-L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1049-L1050) · [Before (L1049-L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1049-L1050)

```diff
-             if (BH.jU)
-               for (const HH of BH.jU) HH.eu() === this && HH.resetDrawCache()
+             if (OB.iW)
+               for (const BB of OB.iW) BB.cp() === this && BB.resetDrawCache()
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1053` → after: `L1053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1053) · [Before (L1053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1053)

```diff
-           const BH = this.yN();
+           const OB = this.JF();
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1057-L1059` → after: `L1057-L1059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1057-L1059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1057-L1059) · [Before (L1057-L1059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1057-L1059)

```diff
-             if (AH.jU)
-               for (const LH of AH.jU) {
-                 if ((LH.eu() || (BH._hasDefaultMaterial ? BH.defaultMaterial : null)) === this)
+             if (YB.iW)
+               for (const GB of YB.iW) {
+                 if ((GB.cp() || (OB._hasDefaultMaterial ? OB.defaultMaterial : null)) === this)
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1064-L1066` → after: `L1064-L1066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1064-L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1064-L1066) · [Before (L1064-L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1064-L1066)

```diff
-           if (this.yN().blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
-           const HH = this.yN().enablePrePassRenderer();
-           HH && HH.dLH()
+           if (this.JF().blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
+           const BB = this.JF().enablePrePassRenderer();
+           BB && BB.DYB()
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1104` → after: `L1104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1104) · [Before (L1104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1104)

```diff
-             this.uR.add((() => {
+             this.lF.add((() => {
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1113` → after: `L1113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1113) · [Before (L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1113)

```diff
-           const AH = this.yN();
+           const YB = this.JF();
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1127` → after: `L1127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1127) · [Before (L1127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1127)

```diff
-           this._uniformBuffer.dispose(), this._drawWrapper.effect && (this._storeEffectOnSubMeshes || this._drawWrapper.effect.dispose(), this._drawWrapper.effect = null), this.metadata = null, this.uR.notifyObservers(this), this.uR.clear(), this._onBindObservable && this._onBind … [truncated]
+           this._uniformBuffer.dispose(), this._drawWrapper.effect && (this._storeEffectOnSubMeshes || this._drawWrapper.effect.dispose(), this._drawWrapper.effect = null), this.metadata = null, this.lF.notifyObservers(this), this.lF.clear(), this._onBindObservable && this._onBind … [truncated]
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1134-L1135` → after: `L1134-L1135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1134-L1135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1134-L1135) · [Before (L1134-L1135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1134-L1135)

```diff
-             if (HH.jU && LH)
-               for (const AH of HH.jU) {
+             if (BB.iW && GB)
+               for (const YB of BB.iW) {
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1144` → after: `L1144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1144) · [Before (L1144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1144)

```diff
-           HH.material !== this || HH.XSH || (HH.material = null)
+           BB.material !== this || BB.AQB || (BB.material = null)
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1147` → after: `L1147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1147) · [Before (L1147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1147)

```diff
-           const HH = YH.c.Serialize(this);
+           const BB = lB.d.Serialize(this);
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1159` → after: `L1159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1159) · [Before (L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1159)

```diff
-             if ("BABYLON.PBRMaterial" === BH.customType && BH.overloadedAlbedo && (BH.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return EH.e.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials  … [truncated]
+             if ("BABYLON.PBRMaterial" === OB.customType && OB.overloadedAlbedo && (OB.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return MB.b.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials  … [truncated]
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1161` → after: `L1161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1161) · [Before (L1161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1161)

```diff
-           const rH = SH.i.Instantiate(BH.customType).Parse(BH, LH, AH);
+           const DB = QB.j.Instantiate(OB.customType).Parse(OB, GB, YB);
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1170` → after: `L1170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1170) · [Before (L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1170)

```diff
-                 const HH = SH.i.Instantiate("BABYLON." + rH);
+                 const BB = QB.j.Instantiate("BABYLON." + DB);
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1178` → after: `L1178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1178) · [Before (L1178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1178)

```diff
-         BH = [(0, rH.H)()], LH = [(0, rH.H)()], MH = [(0, rH.H)()], xH = [(0, rH.H)()], vH = [(0, rH.H)()], PH = [(0, rH.H)()], TH = [(0, rH.H)()], UH = [(0, rH.H)("alpha")], VH = [(0, rH.H)("backFaceCulling")], OH = [(0, rH.H)("textureRepetitionMode")], bH = [(0, rH.H)("textureR … [truncated]
+         OB = [(0, DB.L)()], GB = [(0, DB.L)()], NB = [(0, DB.L)()], RB = [(0, DB.L)()], WB = [(0, DB.L)()], AB = [(0, DB.L)()], VB = [(0, DB.L)()], SB = [(0, DB.L)("alpha")], nB = [(0, DB.L)("backFaceCulling")], UB = [(0, DB.L)("textureRepetitionMode")], fB = [(0, DB.L)("textureR … [truncated]
```

#### 118. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1188` → after: `L1188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1188) · [Before (L1188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1188)

```diff
-         }, null, ZH), (0, AH.g)(HH, null, nH, {
+         }, null, TB), (0, YB.h)(BB, null, cB, {
```

#### 119. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1198` → after: `L1198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1198) · [Before (L1198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1198)

```diff
-         }, null, ZH), (0, AH.g)(HH, null, FH, {
+         }, null, TB), (0, YB.h)(BB, null, hB, {
```

#### 120. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1208` → after: `L1208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1208) · [Before (L1208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1208)

```diff
-         }, null, ZH), (0, AH.g)(HH, null, wH, {
+         }, null, TB), (0, YB.h)(BB, null, eB, {
```

#### 121. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1218` → after: `L1218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1218) · [Before (L1218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1218)

```diff
-         }, null, ZH), (0, AH.g)(null, null, BH, {
+         }, null, TB), (0, YB.h)(null, null, OB, {
```

#### 122. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1231` → after: `L1231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1231) · [Before (L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1231)

```diff
-         }, dH, aH), (0, AH.g)(null, null, LH, {
+         }, bB, CB), (0, YB.h)(null, null, GB, {
```

#### 123. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1244` → after: `L1244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1244) · [Before (L1244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1244)

```diff
-         }, sH, JH), (0, AH.g)(null, null, MH, {
+         }, HB, vB), (0, YB.h)(null, null, NB, {
```

#### 124. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1257` → after: `L1257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1257) · [Before (L1257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1257)

```diff
-         }, iH, pH), (0, AH.g)(null, null, xH, {
+         }, sB, xB), (0, YB.h)(null, null, RB, {
```

#### 125. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1270` → after: `L1270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1270) · [Before (L1270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1270)

```diff
-         }, yH, HB), (0, AH.g)(null, null, vH, {
+         }, tB, BO), (0, YB.h)(null, null, WB, {
```

#### 126. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1283` → after: `L1283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1283) · [Before (L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1283)

```diff
-         }, BB, LB), (0, AH.g)(null, null, PH, {
+         }, OO, GO), (0, YB.h)(null, null, AB, {
```

#### 127. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1296` → after: `L1296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1296) · [Before (L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1296)

```diff
-         }, AB, rB), (0, AH.g)(null, null, TH, {
+         }, YO, DO), (0, YB.h)(null, null, VB, {
```

#### 128. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1309` → after: `L1309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1309) · [Before (L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1309)

```diff
-         }, SB, hB), (0, AH.g)(null, null, UH, {
+         }, QO, oO), (0, YB.h)(null, null, SB, {
```

#### 129. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1322` → after: `L1322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1322) · [Before (L1322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1322)

```diff
-         }, tB, zB), (0, AH.g)(null, null, VH, {
+         }, jO, yO), (0, YB.h)(null, null, nB, {
```

#### 130. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1335` → after: `L1335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1335) · [Before (L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1335)

```diff
-         }, CB, EB), (0, AH.g)(null, null, OH, {
+         }, JO, MO), (0, YB.h)(null, null, UB, {
```

#### 131. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1348` → after: `L1348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1348) · [Before (L1348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1348)

```diff
-         }, XB, GB), (0, AH.g)(null, null, bH, {
+         }, PO, zO), (0, YB.h)(null, null, fB, {
```

#### 132. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1361` → after: `L1361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1361) · [Before (L1361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1361)

```diff
-         }, YB, uB), (0, AH.g)(null, null, kH, {
+         }, lO, pO), (0, YB.h)(null, null, kB, {
```

#### 133. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1374` → after: `L1374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1374) · [Before (L1374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1374)

```diff
-         }, QB, WB), (0, AH.g)(null, null, mH, {
+         }, qO, ZO), (0, YB.h)(null, null, dB, {
```

#### 134. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1387` → after: `L1387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1387) · [Before (L1387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1387)

```diff
-         }, MB, xB), (0, AH.g)(null, null, oH, {
+         }, NO, RO), (0, YB.h)(null, null, KB, {
```

#### 135. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1400` → after: `L1400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1400) · [Before (L1400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1400)

```diff
-         }, vB, PB), (0, AH.g)(null, null, IH, {
+         }, WO, AO), (0, YB.h)(null, null, uB, {
```

#### 136. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1413` → after: `L1413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1413) · [Before (L1413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1413)

```diff
-         }, TB, UB), (0, AH.g)(null, null, fH, {
+         }, VO, SO), (0, YB.h)(null, null, mB, {
```

#### 137. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1426` → after: `L1426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1426) · [Before (L1426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1426)

```diff
-         }, VB, OB), (0, AH.g)(null, null, lH, {
+         }, nO, UO), (0, YB.h)(null, null, IB, {
```

#### 138. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1439` → after: `L1439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1439) · [Before (L1439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1439)

```diff
-         }, bB, kB), (0, AH.g)(null, null, KH, {
+         }, fO, kO), (0, YB.h)(null, null, FB, {
```

#### 139. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1452` → after: `L1452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1452) · [Before (L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1452)

```diff
-         }, mB, oB), (0, AH.g)(null, null, cH, {
+         }, dO, KO), (0, YB.h)(null, null, iB, {
```

#### 140. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1465` → after: `L1465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1465) · [Before (L1465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1465)

```diff
-         }, IB, fB), (0, AH.g)(null, null, eH, {
+         }, uO, mO), (0, YB.h)(null, null, LB, {
```

#### 141. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1478` → after: `L1478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1478) · [Before (L1478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1478)

```diff
-         }, lB, KB), (0, AH.g)(null, null, qH, {
+         }, IO, FO), (0, YB.h)(null, null, gB, {
```

#### 142. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1491` → after: `L1491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1491) · [Before (L1491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1491)

```diff
-         }, cB, eB), (0, AH.g)(null, null, gH, {
+         }, iO, LO), (0, YB.h)(null, null, rB, {
```

#### 143. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1504` → after: `L1504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1504) · [Before (L1504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1504)

```diff
-         }, qB, gB), (0, AH.g)(null, null, NH, {
+         }, gO, rO), (0, YB.h)(null, null, XB, {
```

#### 144. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1517` → after: `L1517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1517) · [Before (L1517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1517)

```diff
-         }, NB, RB), (0, AH.g)(null, null, RH, {
+         }, XO, wO), (0, YB.h)(null, null, wB, {
```

#### 145. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1530` → after: `L1530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1530) · [Before (L1530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1530)

```diff
-         }, jB, nB), (0, AH.g)(null, null, DH, {
+         }, EO, cO), (0, YB.h)(null, null, aB, {
```

#### 146. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1549` → after: `L1549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1549) · [Before (L1549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1549)

```diff
-       })(), HH.TriangleFillMode = 0, HH.WireFrameFillMode = 1, HH.PointFillMode = 2, HH.PointListDrawMode = 3, HH.LineListDrawMode = 4, HH.LineLoopDrawMode = 5, HH.LineStripDrawMode = 6, HH.TriangleStripDrawMode = 7, HH.TriangleFanDrawMode = 8, HH.ClockWiseSideOrientation = 0, HH … [truncated]
+       })(), BB.TriangleFillMode = 0, BB.WireFrameFillMode = 1, BB.PointFillMode = 2, BB.PointListDrawMode = 3, BB.LineListDrawMode = 4, BB.LineLoopDrawMode = 5, BB.LineStripDrawMode = 6, BB.TriangleStripDrawMode = 7, BB.TriangleFanDrawMode = 8, BB.ClockWiseSideOrientation = 0, BB … [truncated]
```

#### 147. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1559` → after: `L1559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1559) · [Before (L1559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1559)

```diff
-   41632: (HH, BH, LH) => {
+   41341: (BB, OB, GB) => {
```

#### 148. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1561` → after: `L1561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1561) · [Before (L1561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1561)

```diff
-       e: () => rH
+       d: () => DB
```

#### 149. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1563` → after: `L1563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1563) · [Before (L1563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1563)

```diff
-     var AH = LH(41184);
+     var YB = GB(40905);
```

#### 150. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1569` → after: `L1569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1569) · [Before (L1569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1569)

```diff
-         this._DiffuseTextureEnabled !== HH && (this._DiffuseTextureEnabled = HH, AH.c.MarkAllMaterialsAsDirty(1))
+         this._DiffuseTextureEnabled !== BB && (this._DiffuseTextureEnabled = BB, YB.d.MarkAllMaterialsAsDirty(1))
```

#### 151. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1575` → after: `L1575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1575) · [Before (L1575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1575)

```diff
-         this._BaseWeightTextureEnabled !== HH && (this._BaseWeightTextureEnabled = HH, AH.c.MarkAllMaterialsAsDirty(1))
+         this._BaseWeightTextureEnabled !== BB && (this._BaseWeightTextureEnabled = BB, YB.d.MarkAllMaterialsAsDirty(1))
```

#### 152. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1581` → after: `L1581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1581) · [Before (L1581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1581)

```diff
-         this._BaseDiffuseRoughnessTextureEnabled !== HH && (this._BaseDiffuseRoughnessTextureEnabled = HH, AH.c.MarkAllMaterialsAsDirty(1))
+         this._BaseDiffuseRoughnessTextureEnabled !== BB && (this._BaseDiffuseRoughnessTextureEnabled = BB, YB.d.MarkAllMaterialsAsDirty(1))
```

#### 153. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1587` → after: `L1587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1587) · [Before (L1587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1587)

```diff
-         this._DetailTextureEnabled !== HH && (this._DetailTextureEnabled = HH, AH.c.MarkAllMaterialsAsDirty(1))
+         this._DetailTextureEnabled !== BB && (this._DetailTextureEnabled = BB, YB.d.MarkAllMaterialsAsDirty(1))
```

#### 154. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1593` → after: `L1593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1593) · [Before (L1593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1593)

```diff
-         this._DecalMapEnabled !== HH && (this._DecalMapEnabled = HH, AH.c.MarkAllMaterialsAsDirty(1))
+         this._DecalMapEnabled !== BB && (this._DecalMapEnabled = BB, YB.d.MarkAllMaterialsAsDirty(1))
```

#### 155. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1599` → after: `L1599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1599) · [Before (L1599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1599)

```diff
-         this._AmbientTextureEnabled !== HH && (this._AmbientTextureEnabled = HH, AH.c.MarkAllMaterialsAsDirty(1))
+         this._AmbientTextureEnabled !== BB && (this._AmbientTextureEnabled = BB, YB.d.MarkAllMaterialsAsDirty(1))
```

#### 156. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1605` → after: `L1605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1605) · [Before (L1605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1605)

```diff
-         this._OpacityTextureEnabled !== HH && (this._OpacityTextureEnabled = HH, AH.c.MarkAllMaterialsAsDirty(1))
+         this._OpacityTextureEnabled !== BB && (this._OpacityTextureEnabled = BB, YB.d.MarkAllMaterialsAsDirty(1))
```

#### 157. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1611` → after: `L1611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1611) · [Before (L1611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1611)

```diff
-         this._ReflectionTextureEnabled !== HH && (this._ReflectionTextureEnabled = HH, AH.c.MarkAllMaterialsAsDirty(1))
+         this._ReflectionTextureEnabled !== BB && (this._ReflectionTextureEnabled = BB, YB.d.MarkAllMaterialsAsDirty(1))
```

#### 158. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1617` → after: `L1617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1617) · [Before (L1617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1617)

```diff
-         this._EmissiveTextureEnabled !== HH && (this._EmissiveTextureEnabled = HH, AH.c.MarkAllMaterialsAsDirty(1))
+         this._EmissiveTextureEnabled !== BB && (this._EmissiveTextureEnabled = BB, YB.d.MarkAllMaterialsAsDirty(1))
```

#### 159. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1623` → after: `L1623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1623) · [Before (L1623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1623)

```diff
-         this._SpecularTextureEnabled !== HH && (this._SpecularTextureEnabled = HH, AH.c.MarkAllMaterialsAsDirty(1))
+         this._SpecularTextureEnabled !== BB && (this._SpecularTextureEnabled = BB, YB.d.MarkAllMaterialsAsDirty(1))
```

#### 160. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1629` → after: `L1629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1629) · [Before (L1629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1629)

```diff
-         this._BumpTextureEnabled !== HH && (this._BumpTextureEnabled = HH, AH.c.MarkAllMaterialsAsDirty(1))
+         this._BumpTextureEnabled !== BB && (this._BumpTextureEnabled = BB, YB.d.MarkAllMaterialsAsDirty(1))
```

#### 161. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1635` → after: `L1635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1635) · [Before (L1635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1635)

```diff
-         this._LightmapTextureEnabled !== HH && (this._LightmapTextureEnabled = HH, AH.c.MarkAllMaterialsAsDirty(1))
+         this._LightmapTextureEnabled !== BB && (this._LightmapTextureEnabled = BB, YB.d.MarkAllMaterialsAsDirty(1))
```

#### 162. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1641` → after: `L1641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1641) · [Before (L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1641)

```diff
-         this._RefractionTextureEnabled !== HH && (this._RefractionTextureEnabled = HH, AH.c.MarkAllMaterialsAsDirty(1))
+         this._RefractionTextureEnabled !== BB && (this._RefractionTextureEnabled = BB, YB.d.MarkAllMaterialsAsDirty(1))
```

#### 163. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1647` → after: `L1647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1647) · [Before (L1647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1647)

```diff
-         this._ColorGradingTextureEnabled !== HH && (this._ColorGradingTextureEnabled = HH, AH.c.MarkAllMaterialsAsDirty(1))
+         this._ColorGradingTextureEnabled !== BB && (this._ColorGradingTextureEnabled = BB, YB.d.MarkAllMaterialsAsDirty(1))
```

#### 164. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1653` → after: `L1653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1653) · [Before (L1653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1653)

```diff
-         this._FresnelEnabled !== HH && (this._FresnelEnabled = HH, AH.c.MarkAllMaterialsAsDirty(4))
+         this._FresnelEnabled !== BB && (this._FresnelEnabled = BB, YB.d.MarkAllMaterialsAsDirty(4))
```

#### 165. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1659` → after: `L1659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1659) · [Before (L1659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1659)

```diff
-         this._ClearCoatTextureEnabled !== HH && (this._ClearCoatTextureEnabled = HH, AH.c.MarkAllMaterialsAsDirty(1))
+         this._ClearCoatTextureEnabled !== BB && (this._ClearCoatTextureEnabled = BB, YB.d.MarkAllMaterialsAsDirty(1))
```

#### 166. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1665` → after: `L1665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1665) · [Before (L1665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1665)

```diff
-         this._ClearCoatBumpTextureEnabled !== HH && (this._ClearCoatBumpTextureEnabled = HH, AH.c.MarkAllMaterialsAsDirty(1))
+         this._ClearCoatBumpTextureEnabled !== BB && (this._ClearCoatBumpTextureEnabled = BB, YB.d.MarkAllMaterialsAsDirty(1))
```

#### 167. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1671` → after: `L1671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1671) · [Before (L1671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1671)

```diff
-         this._ClearCoatTintTextureEnabled !== HH && (this._ClearCoatTintTextureEnabled = HH, AH.c.MarkAllMaterialsAsDirty(1))
+         this._ClearCoatTintTextureEnabled !== BB && (this._ClearCoatTintTextureEnabled = BB, YB.d.MarkAllMaterialsAsDirty(1))
```

#### 168. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1677` → after: `L1677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1677) · [Before (L1677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1677)

```diff
-         this._SheenTextureEnabled !== HH && (this._SheenTextureEnabled = HH, AH.c.MarkAllMaterialsAsDirty(1))
+         this._SheenTextureEnabled !== BB && (this._SheenTextureEnabled = BB, YB.d.MarkAllMaterialsAsDirty(1))
```

#### 169. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1683` → after: `L1683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1683) · [Before (L1683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1683)

```diff
-         this._AnisotropicTextureEnabled !== HH && (this._AnisotropicTextureEnabled = HH, AH.c.MarkAllMaterialsAsDirty(1))
+         this._AnisotropicTextureEnabled !== BB && (this._AnisotropicTextureEnabled = BB, YB.d.MarkAllMaterialsAsDirty(1))
```

#### 170. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1689` → after: `L1689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1689) · [Before (L1689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1689)

```diff
-         this._ThicknessTextureEnabled !== HH && (this._ThicknessTextureEnabled = HH, AH.c.MarkAllMaterialsAsDirty(1))
+         this._ThicknessTextureEnabled !== BB && (this._ThicknessTextureEnabled = BB, YB.d.MarkAllMaterialsAsDirty(1))
```

#### 171. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1695` → after: `L1695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1695) · [Before (L1695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1695)

```diff
-         this._RefractionIntensityTextureEnabled !== HH && (this._RefractionIntensityTextureEnabled = HH, AH.c.MarkAllMaterialsAsDirty(1))
+         this._RefractionIntensityTextureEnabled !== BB && (this._RefractionIntensityTextureEnabled = BB, YB.d.MarkAllMaterialsAsDirty(1))
```

#### 172. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1701` → after: `L1701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1701) · [Before (L1701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1701)

```diff
-         this._TranslucencyIntensityTextureEnabled !== HH && (this._TranslucencyIntensityTextureEnabled = HH, AH.c.MarkAllMaterialsAsDirty(1))
+         this._TranslucencyIntensityTextureEnabled !== BB && (this._TranslucencyIntensityTextureEnabled = BB, YB.d.MarkAllMaterialsAsDirty(1))
```

#### 173. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1707` → after: `L1707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1707) · [Before (L1707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1707)

```diff
-         this._TranslucencyColorTextureEnabled !== HH && (this._TranslucencyColorTextureEnabled = HH, AH.c.MarkAllMaterialsAsDirty(1))
+         this._TranslucencyColorTextureEnabled !== BB && (this._TranslucencyColorTextureEnabled = BB, YB.d.MarkAllMaterialsAsDirty(1))
```

#### 174. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1713` → after: `L1713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1713) · [Before (L1713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1713)

```diff
-         this._IridescenceTextureEnabled !== HH && (this._IridescenceTextureEnabled = HH, AH.c.MarkAllMaterialsAsDirty(1))
+         this._IridescenceTextureEnabled !== BB && (this._IridescenceTextureEnabled = BB, YB.d.MarkAllMaterialsAsDirty(1))
```

#### 175. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1718` → after: `L1718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1718) · [Before (L1718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1718)

```diff
-   41618: (HH, BH, LH) => {
+   41325: (BB, OB, GB) => {
```

#### 176. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1721` → after: `L1721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1721) · [Before (L1721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1721)

```diff
-       C: () => TH,
+       A: () => qB,
```

#### 177. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1724-L1725` → after: `L1724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1724) · [Before (L1724-L1725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1724-L1725)

```diff
-       G: () => YH,
-       H: () => GH,
+       J: () => uB,
```

#### 178. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1729` → after: `L1729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1729) · [Before (L1729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1729)

```diff
-       U: () => KH,
+       V: () => zB,
```

#### 179. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1731` → after: `L1731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1731) · [Before (L1731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1731)

```diff
-       Z: () => fH,
+       Y: () => gB,
```

#### 180. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1734-L1735` → after: `L1734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1734) · [Before (L1734-L1735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1734-L1735)

```diff
-       c: () => lH,
-       d: () => UH,
+       cb: () => mB,
```

#### 181. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1737-L1739` → after: `L1736-L1738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1736-L1738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1736-L1738) · [Before (L1737-L1739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1737-L1739)

```diff
-       f: () => XH,
-       fb: () => dH,
-       j: () => MH,
+       e: () => IB,
+       gb: () => aB,
+       i: () => SB,
```

#### 182. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1741-L1743` → after: `L1740-L1744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1740-L1744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1740-L1744) · [Before (L1741-L1743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1741-L1743)

```diff
-       kb: () => uH,
-       n: () => xH,
-       p: () => kH,
+       k: () => PB,
+       lb: () => HB,
+       mb: () => bB,
+       nb: () => CB,
+       o: () => NB,
```

#### 183. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1745` → after: `L1746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1746) · [Before (L1745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1745)

```diff
-       r: () => QH,
+       rb: () => pB,
```

#### 184. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1747-L1748` → after: `L1748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1748) · [Before (L1747-L1748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1747-L1748)

```diff
-       u: () => PH,
-       y: () => IH
+       x: () => yB
```

#### 185. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1750-L1754` → after: `L1750-L1754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1750-L1754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1750-L1754) · [Before (L1750-L1754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1750-L1754)

```diff
-     var AH = LH(39595),
-       rH = LH(37989),
-       SH = LH(41472),
-       hH = LH(41623),
-       tH = LH(41632);
+     var YB = GB(39366),
+       DB = GB(37796),
+       QB = GB(41211),
+       oB = GB(41333),
+       jB = GB(41341);
```

#### 186. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1759` → after: `L1759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1759) · [Before (L1759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1759)

```diff
-         1 === HH.mode && AH.e.Error("Logarithmic depth is not compatible with orthographic cameras!", 20), BH.setFloat("logarithmicDepthConstant", 2 / (Math.log(HH.maxZ + 1) / Math.LN2))
+         1 === BB.mode && YB.b.Error("Logarithmic depth is not compatible with orthographic cameras!", 20), OB.setFloat("logarithmicDepthConstant", 2 / (Math.log(BB.maxZ + 1) / Math.LN2))
```

#### 187. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1778` → after: `L1778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1778) · [Before (L1778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1778)

```diff
-       LH && HH.fogEnabled && (!BH || BH.applyFog) && 0 !== HH.fogMode && (LH.setFloat4("vFogInfos", HH.fogMode, HH.fogStart, HH.fogEnd, HH.fogDensity), AH ? (HH.fogColor.toLinearSpaceToRef(CH, HH.Iu().useExactSrgbConversions), LH.setColor3("vFogColor", CH)) : LH.setColor3("vFogCo … [truncated]
+       GB && BB.fogEnabled && (!OB || OB.applyFog) && 0 !== BB.fogMode && (GB.setFloat4("vFogInfos", BB.fogMode, BB.fogStart, BB.fogEnd, BB.fogDensity), YB ? (BB.fogColor.toLinearSpaceToRef(JB, BB.Lp().useExactSrgbConversions), GB.setColor3("vFogColor", JB)) : GB.setColor3("vFogCo … [truncated]
```

#### 188. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1789-L1790` → after: `L1789-L1790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1789-L1790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1789-L1790) · [Before (L1789-L1790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1789-L1790)

```diff
-       if (hH > 0 && rH.d.LastCreatedEngine) {
-         const tH = rH.d.LastCreatedEngine.getCaps().maxVertexAttribs,
+       if (oB > 0 && DB.b.LastCreatedEngine) {
+         const jB = DB.b.LastCreatedEngine.getCaps().maxVertexAttribs,
```

#### 189. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1799` → after: `L1799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1799) · [Before (L1799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1799)

```diff
-         for (let LH = 0; LH < hH; LH++) CH && HH.push("position" + LH), EH && HH.push("normal" + LH), XH && HH.push("tangent" + LH), GH && HH.push("uv_" + LH), YH && HH.push("uv2_" + LH), uH && HH.push("color" + LH), HH.length > tH && AH.e.Error("Cannot add more vertex attributes … [truncated]
+         for (let GB = 0; GB < oB; GB++) JB && BB.push("position" + GB), MB && BB.push("normal" + GB), PB && BB.push("tangent" + GB), zB && BB.push("uv_" + GB), lB && BB.push("uv2_" + GB), pB && BB.push("color" + GB), BB.length > jB && YB.b.Error("Cannot add more vertex attributes … [truncated]
```

#### 190. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1826-L1827` → after: `L1826-L1827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1826-L1827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1826-L1827) · [Before (L1826-L1827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1826-L1827)

```diff
-       if (HH.texturesEnabled && rH && tH.e.ReflectionTextureEnabled) {
-         if (LH.wHH("reflectionMatrix", rH.getReflectionTextureMatrix()), LH.updateFloat2("vReflectionInfos", rH.level * HH.iblIntensity, GH), zH && rH.boundingBoxSize) {
+       if (BB.texturesEnabled && DB && jB.d.ReflectionTextureEnabled) {
+         if (GB.TBB("reflectionMatrix", DB.getReflectionTextureMatrix()), GB.updateFloat2("vReflectionInfos", DB.level * BB.iblIntensity, zB), yB && DB.boundingBoxSize) {
```

#### 191. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1851` → after: `L1851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1851) · [Before (L1851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1851)

```diff
-       if (AH && tH.e.ReflectionTextureEnabled) {
+       if (YB && jB.d.ReflectionTextureEnabled) {
```

#### 192. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1864` → after: `L1864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1864) · [Before (L1864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1864)

```diff
-       BH.wHH(LH + "Matrix", AH)
+       OB.TBB(GB + "Matrix", YB)
```

#### 193. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1880` → after: `L1880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1880) · [Before (L1880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1880)

```diff
-           SH && (BH.setMatrices("mBones", SH), LH && HH.yN().prePassRenderer && HH.yN().prePassRenderer.getIndex(2) && (LH.previousBones[HH.uniqueId] || (LH.previousBones[HH.uniqueId] = SH.slice()), BH.setMatrices("mPreviousBones", LH.previousBones[HH.uniqueId]), AH = SH, LH.prev … [truncated]
+           QB && (OB.setMatrices("mBones", QB), GB && BB.JF().prePassRenderer && BB.JF().prePassRenderer.getIndex(2) && (GB.previousBones[BB.uniqueId] || (GB.previousBones[BB.uniqueId] = QB.slice()), OB.setMatrices("mPreviousBones", GB.previousBones[BB.uniqueId]), YB = QB, GB.prev … [truncated]
```
