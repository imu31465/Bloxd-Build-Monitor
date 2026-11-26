# Changed — Bundle Modifications Report (Part 036 / 116)

- **Updated at**: `2026-11-27T00:59 JST`
- **Part**: `36 / 116` (**296** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 035](part-035.md) · [Part 037 →](part-037.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/291.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2 · continued)

- **File**: `bundles/bloxd.io/chunks/js/291.js` (223 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4)

#### 40. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1141-L1226` → after: `L437-L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L437-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L437-L438) · [Before (L1141-L1226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L1141-L1226)

```diff
-         comment(VV) {
-           let eV = this.raw(VV, "left", "commentLeft"),
-             xV = this.raw(VV, "right", "commentRight");
-           this.builder("/*" + eV + VV.text + xV + "*/", VV)
-         }
-         decl(VV, eV) {
-           let xV = this.raw(VV, "between", "colon"),
-             JV = VV.prop + xV + this.rawValue(VV, "value");
-           VV.important && (JV += VV.raws.important || " !important"), eV && (JV += ";"), this.builder(JV, VV)
-         }
-         document(VV) {
-           this.body(VV)
-         }
-         raw(eV, xV, JV) {
-           let YV;
-           if (JV || (JV = xV), xV && (YV = eV.raws[xV], "undefined" !== typeof YV)) return YV;
- ... (70 more removed lines; see GitHub link above)
+         set funcMask(HH) {
+           this._funcMask = HH
```

#### 41. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1228-L1232` → after: `L440-L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L440-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L440-L441) · [Before (L1228-L1232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L1228-L1232)

```diff
-         rawSemicolon(VV) {
-           let eV;
-           return VV.walk((VV => {
-             if (VV.nodes && VV.nodes.length && "decl" === VV.last.type && (eV = VV.raws.semicolon, "undefined" !== typeof eV)) return !1
-           })), eV
+         get opStencilFail() {
+           return this._opStencilFail
```

#### 42. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1234-L1237` → after: `L443-L444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L443-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L443-L444) · [Before (L1234-L1237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L1234-L1237)

```diff
-         rawValue(VV, eV) {
-           let xV = VV[eV],
-             JV = VV.raws[eV];
-           return JV && JV.value === xV ? JV.raw : xV
+         set opStencilFail(HH) {
+           this._opStencilFail = HH
```

#### 43. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1239-L1240` → after: `L446-L447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L446-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L446-L447) · [Before (L1239-L1240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L1239-L1240)

```diff
-         root(VV) {
-           this.body(VV), VV.raws.after && this.builder(VV.raws.after)
+         get opDepthFail() {
+           return this._opDepthFail
```

#### 44. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1242-L1243` → after: `L449-L450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L449-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L449-L450) · [Before (L1242-L1243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L1242-L1243)

```diff
-         rule(VV) {
-           this.block(VV, this.rawValue(VV, "selector")), VV.raws.ownSemicolon && this.builder(VV.raws.ownSemicolon, VV, "end")
+         set opDepthFail(HH) {
+           this._opDepthFail = HH
```

#### 45. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1245-L1247` → after: `L452-L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L452-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L452-L453) · [Before (L1245-L1247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L1245-L1247)

```diff
-         stringify(VV, eV) {
-           if (!this[VV.type]) throw new Error("Unknown AST node type " + VV.type + ". Maybe you need to change PostCSS stringifier.");
-           this[VV.type](VV, eV)
+         get opStencilDepthPass() {
+           return this._opStencilDepthPass
```

#### 46. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1249-L1279` → after: `L455-L456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L455-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L455-L456) · [Before (L1249-L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L1249-L1279)

```diff
-       }
-       return Te = eV, eV.default = eV, Te
-     }
- 
-     function Nx() {
-       if (Ne) return Ae;
-       Ne = 1;
-       let VV = Ax();
- 
-       function eV(eV, xV) {
-         new VV(xV).stringify(eV)
-       }
-       return Ae = eV, eV.default = eV, Ae
-     }
- 
-     function Xx() {
- ... (15 more removed lines; see GitHub link above)
+         set opStencilDepthPass(HH) {
+           this._opStencilDepthPass = HH
```

#### 47. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1281-L1298` → after: `L458-L459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L458-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L458-L459) · [Before (L1281-L1298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L1281-L1298)

```diff
-         return xV
-       }
-       class yV {
-         constructor() {
-           let xV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
-           this.raws = {}, this[VV] = !1, this[eV] = !0;
-           for (let VV in xV)
-             if ("nodes" === VV) {
-               this.nodes = [];
-               for (let eV of xV[VV]) "function" === typeof eV.clone ? this.append(eV.clone()) : this.append(eV)
-             } else this[VV] = xV[VV]
-         }
-         addToError(VV) {
-           if (VV.postcssNode = this, VV.stack && this.source && /\n\s{4}at /.test(VV.stack)) {
-             let eV = this.source;
-             VV.stack = VV.stack.replace(/\n\s{4}at /, `$&${eV.input.from}:${eV.start.line}:${eV.start.column}$&`)
- ... (2 more removed lines; see GitHub link above)
+         get backOpStencilFail() {
+           return this._backOpStencilFail
```

#### 48. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1300-L1301` → after: `L461-L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L461-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L461-L462) · [Before (L1300-L1301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L1300-L1301)

```diff
-         after(VV) {
-           return this.parent.insertAfter(this, VV), this
+         set backOpStencilFail(HH) {
+           this._backOpStencilFail = HH
```

#### 49. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1303-L1306` → after: `L464-L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L464-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L464-L465) · [Before (L1303-L1306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L1303-L1306)

```diff
-         assign() {
-           let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
-           for (let eV in VV) this[eV] = VV[eV];
-           return this
+         get backOpDepthFail() {
+           return this._backOpDepthFail
```

#### 50. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1308-L1309` → after: `L467-L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L467-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L467-L468) · [Before (L1308-L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L1308-L1309)

```diff
-         before(VV) {
-           return this.parent.insertBefore(this, VV), this
+         set backOpDepthFail(HH) {
+           this._backOpDepthFail = HH
```

#### 51. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1311-L1312` → after: `L470-L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L470-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L470-L471) · [Before (L1311-L1312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L1311-L1312)

```diff
-         cleanRaws(VV) {
-           delete this.raws.before, delete this.raws.after, VV || delete this.raws.between
+         get backOpStencilDepthPass() {
+           return this._backOpStencilDepthPass
```

#### 52. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1314-L1318` → after: `L473-L474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L473-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L473-L474) · [Before (L1314-L1318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L1314-L1318)

```diff
-         clone() {
-           let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
-             eV = UV(this);
-           for (let xV in VV) eV[xV] = VV[xV];
-           return eV
+         set backOpStencilDepthPass(HH) {
+           this._backOpStencilDepthPass = HH
```

#### 53. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1320-L1345` → after: `L476-L477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L476-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L476-L477) · [Before (L1320-L1345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L1320-L1345)

```diff
-         cloneAfter() {
-           let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
-             eV = this.clone(VV);
-           return this.parent.insertAfter(this, eV), eV
-         }
-         cloneBefore() {
-           let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
-             eV = this.clone(VV);
-           return this.parent.insertBefore(this, eV), eV
-         }
-         error(VV) {
-           let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-           if (this.source) {
-             let {
-               end: xV,
-               start: JV
- ... (10 more removed lines; see GitHub link above)
+         get mask() {
+           return this._mask
```

#### 54. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1347-L1351` → after: `L479-L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L479-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L479-L480) · [Before (L1347-L1351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L1347-L1351)

```diff
-         getProxyProcessor() {
-           return {
-             get: (VV, eV) => "proxyOf" === eV ? VV : "root" === eV ? () => VV.root().toProxy() : VV[eV],
-             set: (VV, eV, xV) => (VV[eV] === xV || (VV[eV] = xV, "prop" !== eV && "value" !== eV && "name" !== eV && "params" !== eV && "important" !== eV && "text" !== eV || VV.markDirty()), !0)
-           }
+         set mask(HH) {
+           this._mask = HH
```

#### 55. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1353-L1358` → after: `L482-L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L482-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L482-L483) · [Before (L1353-L1358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L1353-L1358)

```diff
-         markDirty() {
-           if (this[VV]) {
-             this[VV] = !1;
-             let eV = this;
-             for (; eV = eV.parent;) eV[VV] = !1
-           }
+         get enabled() {
+           return this._enabled
```

#### 56. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1360-L1363` → after: `L485-L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L485-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L485-L486) · [Before (L1360-L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L1360-L1363)

```diff
-         next() {
-           if (!this.parent) return;
-           let VV = this.parent.index(this);
-           return this.parent.nodes[VV + 1]
+         set enabled(HH) {
+           this._enabled = HH
```

#### 57. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1365-L1371` → after: `L488-L489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L488-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L488-L489) · [Before (L1365-L1371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L1365-L1371)

```diff
-         positionBy(VV, eV) {
-           let xV = this.source.start;
-           if (VV.index) xV = this.positionInside(VV.index, eV);
-           else if (VV.word) {
-             let JV = (eV = this.toString()).indexOf(VV.word); - 1 !== JV && (xV = this.positionInside(JV, eV))
-           }
-           return xV
+         getClassName() {
+           return "MaterialStencilState"
```

#### 58. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1373-L1381` → after: `L491-L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L491-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L491-L492) · [Before (L1373-L1381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L1373-L1381)

```diff
-         positionInside(VV, eV) {
-           let xV = eV || this.toString(),
-             JV = this.source.start.column,
-             YV = this.source.start.line;
-           for (let UV = 0; UV < VV; UV++) "\n" === xV[UV] ? (JV = 1, YV += 1) : JV += 1;
-           return {
-             column: JV,
-             line: YV
-           }
+         copyTo(HH) {
+           YH.c.Clone((() => HH), this)
```

#### 59. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1383-L1386` → after: `L494-L495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L494-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L494-L495) · [Before (L1383-L1386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L1383-L1386)

```diff
-         prev() {
-           if (!this.parent) return;
-           let VV = this.parent.index(this);
-           return this.parent.nodes[VV - 1]
+         serialize() {
+           return YH.c.Serialize(this)
```

#### 60. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1388-L1416` → after: `L497-L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L497-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L497-L498) · [Before (L1388-L1416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L1388-L1416)

```diff
-         rangeBy(VV) {
-           let eV = {
-               column: this.source.start.column,
-               line: this.source.start.line
-             },
-             xV = this.source.end ? {
-               column: this.source.end.column + 1,
-               line: this.source.end.line
-             } : {
-               column: eV.column + 1,
-               line: eV.line
-             };
-           if (VV.word) {
-             let JV = this.toString(),
-               YV = JV.indexOf(VV.word); - 1 !== YV && (eV = this.positionInside(YV, JV), xV = this.positionInside(YV + VV.word.length, JV))
-           } else VV.start ? eV = {
- ... (13 more removed lines; see GitHub link above)
+         parse(HH, BH, LH) {
+           YH.c.Parse((() => this), HH, BH, LH)
```

#### 61. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1418-L1419` → after: `L500-L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L500-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L500-L688) · [Before (L1418-L1419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L1418-L1419)

```diff
-         raw(VV, eV) {
-           return (new JV).raw(this, VV, eV)
+       }, (() => {
+         const YH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
+         BH = [(0, rH.H)()], LH = [(0, rH.H)()], SH = [(0, rH.H)()], hH = [(0, rH.H)()], tH = [(0, rH.H)()], zH = [(0, rH.H)()], CH = [(0, rH.H)()], EH = [(0, rH.H)()], XH = [(0, rH.H)()], GH = [(0, rH.H)()], uH = [(0, rH.H)()], QH = [(0, rH.H)()], (0, AH.g)(HH, null, BH, {
+           kind: "getter",
+           name: "func",
+           static: !1,
+           private: !1,
+           access: {
+             has: HH => "func" in HH,
+             get: HH => HH.func
+           },
+           metadata: YH
+         }, null, WH), (0, AH.g)(HH, null, LH, {
+           kind: "getter",
+           name: "backFunc",
+           static: !1,
+ ... (173 more added lines; see GitHub link above)
```

#### 62. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1421-L1422` → after: `L690-L691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L690-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L690-L691) · [Before (L1421-L1422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L1421-L1422)

```diff
-         remove() {
-           return this.parent && this.parent.removeChild(this), this.parent = void 0, this
+         set useVertexPulling(BH) {
+           this._useVertexPulling !== BH && (this._useVertexPulling = BH, this.dLH(HH.MiscDirtyFlag))
```

#### 63. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1424-L1432` → after: `L693-L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L693-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L693-L694) · [Before (L1424-L1432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L1424-L1432)

```diff
-         replaceWith() {
-           if (this.parent) {
-             let JV = this,
-               YV = !1;
-             for (var VV = arguments.length, eV = new Array(VV), xV = 0; xV < VV; xV++) eV[xV] = arguments[xV];
-             for (let VV of eV) VV === this ? YV = !0 : YV ? (this.parent.insertAfter(JV, VV), JV = VV) : this.parent.insertBefore(JV, VV);
-             YV || this.remove()
-           }
-           return this
+         get _supportGlowLayer() {
+           return !1
```

#### 64. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1434-L1437` → after: `L696-L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L696-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L696-L698) · [Before (L1434-L1437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L1434-L1437)

```diff
-         root() {
-           let VV = this;
-           for (; VV.parent && "document" !== VV.parent.type;) VV = VV.parent;
-           return VV
+         set _glowModeEnabled(HH) {}
+         get shaderLanguage() {
+           return this._shaderLanguage
```

#### 65. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1439-L1477` → after: `L700-L701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L700-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L700-L701) · [Before (L1439-L1477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L1439-L1477)

```diff
-         toJSON(VV, eV) {
-           let xV = {},
-             JV = null == eV;
-           eV = eV || new Map;
-           let YV = 0;
-           for (let UV in this) {
-             if (!Object.prototype.hasOwnProperty.call(this, UV)) continue;
-             if ("parent" === UV || "proxyCache" === UV) continue;
-             let VV = this[UV];
-             if (Array.isArray(VV)) xV[UV] = VV.map((VV => "object" === typeof VV && VV.toJSON ? VV.toJSON(null, eV) : VV));
-             else if ("object" === typeof VV && VV.toJSON) xV[UV] = VV.toJSON(null, eV);
-             else if ("source" === UV) {
-               let JV = eV.get(VV.input);
-               null == JV && (JV = YV, eV.set(VV.input, YV), YV++), xV[UV] = {
-                 end: VV.end,
-                 inputId: JV,
- ... (23 more removed lines; see GitHub link above)
+         get canRenderToMRT() {
+           return !1
```

#### 66. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1479-L1480` → after: `L703-L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L703-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L703-L706) · [Before (L1479-L1480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L1479-L1480)

```diff
-         get proxyOf() {
-           return this
+         set alpha(BH) {
+           if (this._alpha === BH) return;
+           const LH = this._alpha;
+           this._alpha = BH, 1 !== LH && 1 !== BH || this.dLH(HH.MiscDirtyFlag + HH.PrePassDirtyFlag)
```

#### 67. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1482-L1521` → after: `L708-L709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L708-L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L708-L709) · [Before (L1482-L1521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L1482-L1521)

```diff
-       }
-       return Xe = yV, yV.default = yV, Xe
-     }
- 
-     function Mx() {
-       if (Ge) return ze;
-       Ge = 1;
-       let VV = Xx();
-       class eV extends VV {
-         constructor(VV) {
-           VV && "undefined" !== typeof VV.value && "string" !== typeof VV.value && (VV = {
-             ...VV,
-             value: String(VV.value)
-           }), super(VV), this.type = "decl"
-         }
-         get variable() {
- ... (24 more removed lines; see GitHub link above)
+         get alpha() {
+           return this._alpha
```

#### 68. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1523-L1568` → after: `L711-L712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L711-L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L711-L712) · [Before (L1523-L1568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L1523-L1568)

```diff
-       }, We
-     }
- 
-     function Gx() {
-       if (De) return ge;
-       De = 1;
-       let {
-         SourceMapConsumer: VV,
-         SourceMapGenerator: eV
-       } = Be, {
-         existsSync: xV,
-         readFileSync: JV
-       } = Be, {
-         dirname: YV,
-         join: UV
-       } = Be;
- ... (30 more removed lines; see GitHub link above)
+         set backFaceCulling(BH) {
+           this._backFaceCulling !== BH && (this._backFaceCulling = BH, this.dLH(HH.TextureDirtyFlag))
```

#### 69. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1570-L1571` → after: `L714-L715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L714-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L714-L715) · [Before (L1570-L1571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L1570-L1571)

```diff
-         loadFile(VV) {
-           if (this.root = YV(VV), xV(VV)) return this.mapFile = VV, JV(VV, "utf-8").toString().trim()
+         get backFaceCulling() {
+           return this._backFaceCulling
```

#### 70. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1573-L1596` → after: `L717-L719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L717-L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L717-L719) · [Before (L1573-L1596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L1573-L1596)

```diff
-         loadMap(xV, JV) {
-           if (!1 === JV) return !1;
-           if (JV) {
-             if ("string" === typeof JV) return JV;
-             if ("function" !== typeof JV) {
-               if (JV instanceof VV) return eV.fromSourceMap(JV).toString();
-               if (JV instanceof eV) return JV.toString();
-               if (this.isMap(JV)) return JSON.stringify(JV);
-               throw new Error("Unsupported previous source map format: " + JV.toString())
-             } {
-               let VV = JV(xV);
-               if (VV) {
-                 let eV = this.loadFile(VV);
-                 if (!eV) throw new Error("Unable to load previous source map: " + VV.toString());
-                 return eV
-               }
- ... (8 more removed lines; see GitHub link above)
+         set textureRepetitionMode(BH) {
+           const LH = Math.max(0, Math.min(0 | BH, 4));
+           this._textureRepetitionMode !== LH && (this._textureRepetitionMode = LH, this.dLH(HH.TextureDirtyFlag))
```

#### 71. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1598-L1599` → after: `L721-L722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L721-L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L721-L722) · [Before (L1598-L1599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L1598-L1599)

```diff
-         startWith(VV, eV) {
-           return !!VV && VV.substr(0, eV.length) === eV
+         get textureRepetitionMode() {
+           return this._textureRepetitionMode
```

#### 72. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1601-L1602` → after: `L724-L725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L724-L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L724-L725) · [Before (L1601-L1602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L1601-L1602)

```diff
-         withContent() {
-           return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0)
+         set cullBackFaces(BH) {
+           this._cullBackFaces !== BH && (this._cullBackFaces = BH, this.dLH(HH.TextureDirtyFlag))
```

#### 73. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1604-L1703` → after: `L727-L728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L727-L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L727-L728) · [Before (L1604-L1703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L1604-L1703)

```diff
-       }
-       return ge = yV, yV.default = yV, ge
-     }
- 
-     function Wx() {
-       if (Ce) return ie;
-       Ce = 1;
-       let {
-         SourceMapConsumer: VV,
-         SourceMapGenerator: eV
-       } = Be, {
-         fileURLToPath: xV,
-         pathToFileURL: JV
-       } = Be, {
-         isAbsolute: YV,
-         resolve: UV
- ... (84 more removed lines; see GitHub link above)
+         get cullBackFaces() {
+           return this._cullBackFaces
```

#### 74. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1705-L1729` → after: `L730-L741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L730-L741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L730-L741) · [Before (L1705-L1729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L1705-L1729)

```diff
-         mapResolve(VV) {
-           return /^\w+:\/\//.test(VV) ? VV : UV(this.map.consumer().sourceRoot || this.map.root || ".", VV)
-         }
-         origin(VV, eV, UV, yV) {
-           if (!this.map) return !1;
-           let pV, QV, nV = this.map.consumer(),
-             wV = nV.originalPositionFor({
-               column: eV,
-               line: VV
-             });
-           if (!wV.source) return !1;
-           "number" === typeof UV && (pV = nV.originalPositionFor({
-             column: yV,
-             line: UV
-           })), QV = YV(wV.source) ? JV(wV.source) : new URL(wV.source, this.map.consumer().sourceRoot || JV(this.map.mapFile));
-           let ZV = {
- ... (9 more removed lines; see GitHub link above)
+         get blockDirtyMechanism() {
+           return this._blockDirtyMechanism
+         }
+         set blockDirtyMechanism(HH) {
+           this._blockDirtyMechanism !== HH && (this._blockDirtyMechanism = HH, HH || this.markDirty())
+         }
+         atomicMaterialsUpdate(HH) {
+           this.blockDirtyMechanism = !0;
+           try {
+             HH(this)
+           } finally {
+             this.blockDirtyMechanism = !1
```

#### 75. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1734-L1739` → after: `L744-L745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L744-L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L744-L745) · [Before (L1734-L1739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L1734-L1739)

```diff
-         toJSON() {
-           let VV = {};
-           for (let eV of ["hasBOM", "css", "file", "id"]) null != this[eV] && (VV[eV] = this[eV]);
-           return this.map && (VV.map = {
-             ...this.map
-           }, VV.map.consumerCache && (VV.map.consumerCache = void 0)), VV
+         get hasRenderTargetTextures() {
+           return this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._eventInfo.hasRenderTargetTextures
```

#### 76. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1741-L1742` → after: `L747-L748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L747-L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L747-L748) · [Before (L1741-L1742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L1741-L1742)

```diff
-         get from() {
-           return this.file || this.id
+         set onDispose(HH) {
+           this._onDisposeObserver && this.uR.remove(this._onDisposeObserver), this._onDisposeObserver = this.uR.add(HH)
```

#### 77. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1744-L1777` → after: `L750-L751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L750-L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L750-L751) · [Before (L1744-L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L1744-L1777)

```diff
-       }
-       return ie = rV, rV.default = rV, pV && pV.registerInput && pV.registerInput(rV), ie
-     }
- 
-     function Rx() {
-       if (oe) return ae;
-       oe = 1;
-       let {
-         SourceMapConsumer: VV,
-         SourceMapGenerator: eV
-       } = Be, {
-         dirname: xV,
-         relative: JV,
-         resolve: YV,
-         sep: UV
-       } = Be, {
- ... (18 more removed lines; see GitHub link above)
+         get onBindObservable() {
+           return this._onBindObservable || (this._onBindObservable = new hH.d), this._onBindObservable
```

#### 78. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1779-L1793` → after: `L753-L754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L753-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L753-L754) · [Before (L1779-L1793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L1779-L1793)

```diff
-         clearAnnotation() {
-           if (!1 !== this.mapOpts.annotation)
-             if (this.root) {
-               let VV;
-               for (let eV = this.root.nodes.length - 1; eV >= 0; eV--) VV = this.root.nodes[eV], "comment" === VV.type && 0 === VV.text.indexOf("# sourceMappingURL=") && this.root.removeChild(eV)
-             } else this.css && (this.css = this.css.replace(/\n*?\/\*#[\S\s]*?\*\/$/gm, ""))
-         }
-         generate() {
-           if (this.clearAnnotation(), nV && QV && this.isMap()) return this.generateMap();
-           {
-             let VV = "";
-             return this.stringify(this.root, (eV => {
-               VV += eV
-             })), [VV]
-           }
+         set onBind(HH) {
+           this._onBindObserver && this.onBindObservable.remove(this._onBindObserver), this._onBindObserver = this.onBindObservable.add(HH)
```

#### 79. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1795-L1844` → after: `L756-L757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L756-L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L756-L757) · [Before (L1795-L1844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L1795-L1844)

```diff
-         generateMap() {
-           if (this.root) this.generateString();
-           else if (1 === this.previous().length) {
-             let VV = this.previous()[0].consumer();
-             VV.file = this.outputFile(), this.map = eV.fromSourceMap(VV, {
-               ignoreInvalidMapping: !0
-             })
-           } else this.map = new eV({
-             file: this.outputFile(),
-             ignoreInvalidMapping: !0
-           }), this.map.addMapping({
-             generated: {
-               column: 0,
-               line: 1
-             },
-             original: {
- ... (34 more removed lines; see GitHub link above)
+         get onUnBindObservable() {
+           return this._onUnBindObservable || (this._onUnBindObservable = new hH.d), this._onUnBindObservable
```

#### 80. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1846-L1902` → after: `L759-L760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L759-L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L759-L760) · [Before (L1846-L1902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L1846-L1902)

```diff
-         isAnnotation() {
-           return !!this.isInline() || ("undefined" !== typeof this.mapOpts.annotation ? this.mapOpts.annotation : !this.previous().length || this.previous().some((VV => VV.annotation)))
-         }
-         isInline() {
-           if ("undefined" !== typeof this.mapOpts.inline) return this.mapOpts.inline;
-           let VV = this.mapOpts.annotation;
-           return ("undefined" === typeof VV || !0 === VV) && (!this.previous().length || this.previous().some((VV => VV.inline)))
-         }
-         isMap() {
-           return "undefined" !== typeof this.opts.map ? !!this.opts.map : this.previous().length > 0
-         }
-         isSourcesContent() {
-           return "undefined" !== typeof this.mapOpts.sourcesContent ? this.mapOpts.sourcesContent : !this.previous().length || this.previous().some((VV => VV.withContent()))
-         }
-         outputFile() {
-           return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css"
- ... (41 more removed lines; see GitHub link above)
+         get onEffectCreatedObservable() {
+           return this._onEffectCreatedObservable || (this._onEffectCreatedObservable = new hH.d), this._onEffectCreatedObservable
```

#### 81. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1904-L1905` → after: `L762-L763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L762-L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L762-L763) · [Before (L1904-L1905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L1904-L1905)

```diff
-         sourcePath(VV) {
-           return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(VV.source.input.from) : this.toUrl(this.path(VV.source.input.from))
+         set alphaMode(HH) {
+           this._alphaMode[0] = HH
```

#### 82. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1907-L1908` → after: `L765-L766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L765-L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L765-L766) · [Before (L1907-L1908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L1907-L1908)

```diff
-         toBase64(VV) {
-           return Buffer ? Buffer.from(VV).toString("base64") : window.btoa(unescape(encodeURIComponent(VV)))
+         get alphaMode() {
+           return this._alphaMode[0]
```

#### 83. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1910-L1917` → after: `L768-L769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L768-L769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L768-L769) · [Before (L1910-L1917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L1910-L1917)

```diff
-         toFileUrl(VV) {
-           let eV = this.memoizedFileURLs.get(VV);
-           if (eV) return eV;
-           if (yV) {
-             let eV = yV(VV).toString();
-             return this.memoizedFileURLs.set(VV, eV), eV
-           }
-           throw new Error("`map.absolute` option is not available in this PostCSS build")
+         get alphaModes() {
+           return this._alphaMode
```

#### 84. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1919-L1924` → after: `L771-L773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L771-L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L771-L773) · [Before (L1919-L1924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L1919-L1924)

```diff
-         toUrl(VV) {
-           let eV = this.memoizedURLs.get(VV);
-           if (eV) return eV;
-           "\\" === UV && (VV = VV.replace(/\\/g, "/"));
-           let xV = encodeURI(VV).replace(/[#?]/g, encodeURIComponent);
-           return this.memoizedURLs.set(VV, xV), xV
+         setAlphaMode(BH) {
+           let LH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+           this._alphaMode[LH] !== BH && (this._alphaMode[LH] = BH, this.dLH(HH.TextureDirtyFlag))
```

#### 85. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1926-L1935` → after: `L775-L776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L775-L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L775-L776) · [Before (L1926-L1935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L1926-L1935)

```diff
-       }
-     }
- 
-     function gx() {
-       if (he) return ce;
-       he = 1;
-       let VV = Xx();
-       class eV extends VV {
-         constructor(VV) {
-           super(VV), this.type = "comment"
+         set needDepthPrePass(HH) {
+           this._needDepthPrePass !== HH && (this._needDepthPrePass = HH, this._needDepthPrePass && (this.checkReadyOnEveryCall = !0))
```

#### 86. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1937-L1997` → after: `L778-L779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L778-L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L778-L779) · [Before (L1937-L1997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L1937-L1997)

```diff
-       }
-       return ce = eV, eV.default = eV, ce
-     }
- 
-     function Dx() {
-       if (Le) return le;
-       Le = 1;
-       let VV, eV, xV, JV, {
-           isClean: YV,
-           my: UV
-         } = Px(),
-         yV = Mx(),
-         pV = gx(),
-         QV = Xx();
- 
-       function nV(VV) {
- ... (45 more removed lines; see GitHub link above)
+         get needDepthPrePass() {
+           return this._needDepthPrePass
```

#### 87. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L1999-L2046` → after: `L781-L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L781-L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L781-L796) · [Before (L1999-L2046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L1999-L2046)

```diff
-         index(VV) {
-           return "number" === typeof VV ? VV : (VV.proxyOf && (VV = VV.proxyOf), this.proxyOf.nodes.indexOf(VV))
-         }
-         insertAfter(VV, eV) {
-           let xV, JV = this.index(VV),
-             YV = this.normalize(eV, this.proxyOf.nodes[JV]).reverse();
-           JV = this.index(VV);
-           for (let UV of YV) this.proxyOf.nodes.splice(JV + 1, 0, UV);
-           for (let UV in this.indexes) xV = this.indexes[UV], JV < xV && (this.indexes[UV] = xV + YV.length);
-           return this.markDirty(), this
-         }
-         insertBefore(VV, eV) {
-           let xV, JV = this.index(VV),
-             YV = 0 === JV && "prepend",
-             UV = this.normalize(eV, this.proxyOf.nodes[JV], YV).reverse();
-           JV = this.index(VV);
- ... (32 more removed lines; see GitHub link above)
+         get isPrePassCapable() {
+           return !1
+         }
+         set fogEnabled(BH) {
+           this._fogEnabled !== BH && (this._fogEnabled = BH, this.dLH(HH.MiscDirtyFlag))
+         }
+         get fogEnabled() {
+           return this._fogEnabled
+         }
+         get wireframe() {
+           switch (this._fillMode) {
+             case HH.WireFrameFillMode:
+             case HH.LineListDrawMode:
+             case HH.LineLoopDrawMode:
+             case HH.LineStripDrawMode:
+               return !0
```

#### 88. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L2048-L2080` → after: `L798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L798) · [Before (L2048-L2080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L2048-L2080)

```diff
-           return this.markDirty(), this
-         }
-         push(VV) {
-           return VV.parent = this, this.proxyOf.nodes.push(VV), this
-         }
-         removeAll() {
-           for (let VV of this.proxyOf.nodes) VV.parent = void 0;
-           return this.proxyOf.nodes = [], this.markDirty(), this
-         }
-         removeChild(VV) {
-           let eV;
-           VV = this.index(VV), this.proxyOf.nodes[VV].parent = void 0, this.proxyOf.nodes.splice(VV, 1);
-           for (let xV in this.indexes) eV = this.indexes[xV], eV >= VV && (this.indexes[xV] = eV - 1);
-           return this.markDirty(), this
-         }
-         replaceValues(VV, eV, xV) {
- ... (17 more removed lines; see GitHub link above)
+           return this._scene.forceWireframe
```

#### 89. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L2082-L2094` → after: `L800-L801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L800-L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L800-L801) · [Before (L2082-L2094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L2082-L2094)

```diff
-         walkAtRules(VV, eV) {
-           return eV ? VV instanceof RegExp ? this.walk(((xV, JV) => {
-             if ("atrule" === xV.type && VV.test(xV.name)) return eV(xV, JV)
-           })) : this.walk(((xV, JV) => {
-             if ("atrule" === xV.type && xV.name === VV) return eV(xV, JV)
-           })) : (eV = VV, this.walk(((VV, xV) => {
-             if ("atrule" === VV.type) return eV(VV, xV)
-           })))
-         }
-         walkComments(VV) {
-           return this.walk(((eV, xV) => {
-             if ("comment" === eV.type) return VV(eV, xV)
-           }))
+         set wireframe(BH) {
+           this.fillMode = BH ? HH.WireFrameFillMode : HH.TriangleFillMode
```

#### 90. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L2096-L2176` → after: `L803-L807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L803-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L803-L807) · [Before (L2096-L2176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L2096-L2176)

```diff
-         walkDecls(VV, eV) {
-           return eV ? VV instanceof RegExp ? this.walk(((xV, JV) => {
-             if ("decl" === xV.type && VV.test(xV.prop)) return eV(xV, JV)
-           })) : this.walk(((xV, JV) => {
-             if ("decl" === xV.type && xV.prop === VV) return eV(xV, JV)
-           })) : (eV = VV, this.walk(((VV, xV) => {
-             if ("decl" === VV.type) return eV(VV, xV)
-           })))
-         }
-         walkRules(VV, eV) {
-           return eV ? VV instanceof RegExp ? this.walk(((xV, JV) => {
-             if ("rule" === xV.type && VV.test(xV.selector)) return eV(xV, JV)
-           })) : this.walk(((xV, JV) => {
-             if ("rule" === xV.type && xV.selector === VV) return eV(xV, JV)
-           })) : (eV = VV, this.walk(((VV, xV) => {
-             if ("rule" === VV.type) return eV(VV, xV)
- ... (65 more removed lines; see GitHub link above)
+         get pointsCloud() {
+           switch (this._fillMode) {
+             case HH.PointFillMode:
+             case HH.PointListDrawMode:
+               return !0
```

#### 91. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L2178` → after: `L809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L809) · [Before (L2178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L2178)

```diff
-           for (let xV in eV) this[xV] = eV[xV]
+           return this._scene.forcePointsCloud
```

#### 92. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L2180-L2185` → after: `L811-L812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L811-L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L811-L812) · [Before (L2180-L2185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L2180-L2185)

```diff
-         toString() {
-           return this.node ? this.node.error(this.text, {
-             index: this.index,
-             plugin: this.plugin,
-             word: this.word
-           }).message : this.plugin ? this.plugin + ": " + this.text : this.text
+         set pointsCloud(BH) {
+           this.fillMode = BH ? HH.PointFillMode : HH.TriangleFillMode
```

#### 93. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L2187-L2197` → after: `L814-L815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L814-L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L814-L815) · [Before (L2187-L2197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L2187-L2197)

```diff
-       }
-       return ue = VV, VV.default = VV, ue
-     }
- 
-     function ox() {
-       if (Ie) return Se;
-       Ie = 1;
-       let VV = ax();
-       class eV {
-         constructor(VV, eV, xV) {
-           this.processor = VV, this.messages = [], this.root = eV, this.opts = xV, this.css = void 0, this.map = void 0
+         get fillMode() {
+           return this._fillMode
```

#### 94. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L2199-L2200` → after: `L817-L818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L817-L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L817-L818) · [Before (L2199-L2200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L2199-L2200)

```diff
-         toString() {
-           return this.css
+         set fillMode(BH) {
+           this._fillMode !== BH && (this._fillMode = BH, this.dLH(HH.MiscDirtyFlag))
```

#### 95. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L2202-L2206` → after: `L820-L821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L820-L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L820-L821) · [Before (L2202-L2206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L2202-L2206)

```diff
-         warn(eV) {
-           let xV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-           xV.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (xV.plugin = this.lastPlugin.postcssPlugin);
-           let JV = new VV(eV, xV);
-           return this.messages.push(JV), JV
+         get useLogarithmicDepth() {
+           return this._useLogarithmicDepth
```

#### 96. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L2208-L2209` → after: `L823-L825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L823-L825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L823-L825) · [Before (L2208-L2209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L2208-L2209)

```diff
-         warnings() {
-           return this.messages.filter((VV => "warning" === VV.type))
+         set useLogarithmicDepth(HH) {
+           const BH = this.yN().Iu().getCaps().fragmentDepthSupported;
+           HH && !BH && EH.e.Warn("Logarithmic depth has been requested for a material on a device that doesn't support it."), this._useLogarithmicDepth = HH && BH, this._markAllSubMeshesAsMiscDirty()
```

#### 97. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L2211-L2212` → after: `L827-L828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L827-L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L827-L828) · [Before (L2211-L2212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L2211-L2212)

```diff
-         get content() {
-           return this.css
+         get isVertexOutputInvariant() {
+           return this._isVertexOutputInvariant
```

#### 98. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L2214-L2224` → after: `L830-L831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L830-L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L830-L831) · [Before (L2214-L2224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L2214-L2224)

```diff
-       }
-       return Se = eV, eV.default = eV, Se
-     }
- 
-     function cx() {
-       if (ex) return Vx;
-       ex = 1;
-       let VV = Dx();
-       class eV extends VV {
-         constructor(VV) {
-           super(VV), this.type = "atrule"
+         set isVertexOutputInvariant(HH) {
+           this._isVertexOutputInvariant !== HH && (this._isVertexOutputInvariant = HH, this._markAllSubMeshesAsMiscDirty())
```

#### 99. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L2226-L2227` → after: `L833-L834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L833-L834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L833-L834) · [Before (L2226-L2227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L2226-L2227)

```diff
-         append() {
-           return this.proxyOf.nodes || (this.nodes = []), super.append(...arguments)
+         _getDrawWrapper() {
+           return this._drawWrapper
```

#### 100. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L2229-L2230` → after: `L836-L837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L836-L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L836-L837) · [Before (L2229-L2230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L2229-L2230)

```diff
-         prepend() {
-           return this.proxyOf.nodes || (this.nodes = []), super.prepend(...arguments)
+         _setDrawWrapper(HH) {
+           this._drawWrapper = HH
```

#### 101. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L2232-L2250` → after: `L839-L843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L839-L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L839-L843) · [Before (L2232-L2250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L2232-L2250)

```diff
-       }
-       return Vx = eV, eV.default = eV, VV.registerAtRule(eV), Vx
-     }
- 
-     function hx() {
-       if (Jx) return xx;
-       Jx = 1;
-       let VV, eV, xV = Dx();
-       class JV extends xV {
-         constructor(VV) {
-           super(VV), this.type = "root", this.nodes || (this.nodes = [])
-         }
-         normalize(VV, eV, xV) {
-           let JV = super.normalize(VV);
-           if (eV)
-             if ("prepend" === xV) this.nodes.length > 1 ? eV.raws.before = this.nodes[1].raws.before : delete eV.raws.before;
- ... (3 more removed lines; see GitHub link above)
+         constructor(BH, LH, rH) {
+           let zH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+           this.customShaderNameResolve = (0, AH.k)(this, ZH), this.shadowDepthWrapper = null, this.allowShaderHotSwapping = !0, this._shaderLanguage = 0, this._forceGLSL = !1, this._useVertexPulling = !1, this.id = (0, AH.k)(this, dH, void 0), this.uniqueId = ((0, AH.k)(this, aH) … [truncated]
+           const EH = LH || tH.d.LastCreatedScene;
+           EH && (this._scene = EH, this._dirtyCallbacks = {}, this._forceGLSL = zH, this._dirtyCallbacks[1] = this._markAllSubMeshesAsTexturesDirty.bind(this), this._dirtyCallbacks[2] = this._markAllSubMeshesAsLightsDirty.bind(this), this._dirtyCallbacks[4] = this._markAllSubMesh … [truncated]
```

#### 102. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L2252-L2254` → after: `L845-L847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L845-L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L845-L847) · [Before (L2252-L2254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L2252-L2254)

```diff
-         removeChild(VV, eV) {
-           let xV = this.index(VV);
-           return !eV && 0 === xV && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[xV].raws.before), super.removeChild(VV)
+         _createUniformBuffer() {
+           const HH = this.yN().Iu();
+           this._uniformBuffer?.dispose(), HH.isWebGPU && !this._forceGLSL ? (this._uniformBuffer = new CH.c(HH, void 0, void 0, this.name, !0), this._shaderLanguage = 1) : this._uniformBuffer = new CH.c(this._scene.Iu(), void 0, void 0, this.name), this._uniformBufferLayoutBuilt  … [truncated]
```

#### 103. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L2256-L2258` → after: `L849-L850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L849-L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L849-L850) · [Before (L2256-L2258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L2256-L2258)

```diff
-         toResult() {
-           let xV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
-           return new VV(new eV, this, xV).stringify()
+         toString(HH) {
+           return "Name: " + this.name
```

#### 104. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L2260-L2283` → after: `L852-L853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L852-L853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L852-L853) · [Before (L2260-L2283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L2260-L2283)

```diff
-       }
-       return JV.registerLazyResult = eV => {
-         VV = eV
-       }, JV.registerProcessor = VV => {
-         eV = VV
-       }, xx = JV, JV.default = JV, xV.registerRoot(JV), xx
-     }
- 
-     function lx() {
-       if (Ux) return Yx;
-       Ux = 1;
-       let VV = {
-         comma: eV => VV.split(eV, [","], !0),
-         space: eV => VV.split(eV, [" ", "\n", "\t"]),
-         split(VV, eV, xV) {
-           let JV = [],
- ... (8 more removed lines; see GitHub link above)
+         getClassName() {
+           return "Material"
```

#### 105. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L2285-L2296` → after: `L855-L856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L855-L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L855-L856) · [Before (L2285-L2296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L2285-L2296)

```diff
-       };
-       return Yx = VV, VV.default = VV, Yx
-     }
- 
-     function Lx() {
-       if (px) return yx;
-       px = 1;
-       let VV = Dx(),
-         eV = lx();
-       class xV extends VV {
-         constructor(VV) {
-           super(VV), this.type = "rule", this.nodes || (this.nodes = [])
+         get _isMaterial() {
+           return !0
```

#### 106. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L2298-L2299` → after: `L858-L859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L858-L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L858-L859) · [Before (L2298-L2299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L2298-L2299)

```diff
-         get selectors() {
-           return eV.comma(this.selector)
+         get isFrozen() {
+           return this.checkReadyOnlyOnce
```

#### 107. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L2301-L2304` → after: `L861-L862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L861-L862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L861-L862) · [Before (L2301-L2304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L2301-L2304)

```diff
-         set selectors(VV) {
-           let eV = this.selector ? this.selector.match(/,\s*/) : null,
-             xV = eV ? eV[0] : "," + this.raw("between", "beforeOpen");
-           this.selector = VV.join(xV)
+         freeze() {
+           this.markDirty(), this.checkReadyOnlyOnce = !0
```

#### 108. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L2306-L2456` → after: `L864-L865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L864-L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L864-L865) · [Before (L2306-L2456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L2306-L2456)

```diff
-       }
-       return yx = xV, xV.default = xV, VV.registerRule(xV), yx
-     }
- 
-     function fx() {
-       if (nx) return Qx;
-       nx = 1;
-       let VV = Mx(),
-         eV = function() {
-           if (Oe) return de;
-           Oe = 1;
-           const VV = "'".charCodeAt(0),
-             eV = '"'.charCodeAt(0),
-             xV = "\\".charCodeAt(0),
-             JV = "/".charCodeAt(0),
-             YV = "\n".charCodeAt(0),
- ... (135 more removed lines; see GitHub link above)
+         unfreeze() {
+           this.markDirty(), this.checkReadyOnlyOnce = !1
```

#### 109. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L2458-L2511` → after: `L867-L868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L867-L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L867-L868) · [Before (L2458-L2511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L2458-L2511)

```diff
-         atrule(VV) {
-           let eV, xV, YV, UV = new JV;
-           UV.name = VV[1].slice(1), "" === UV.name && this.unnamedAtrule(UV, VV), this.init(UV, VV[2]);
-           let yV = !1,
-             pV = !1,
-             QV = [],
-             nV = [];
-           for (; !this.tokenizer.endOfFile();) {
-             if (eV = (VV = this.tokenizer.nextToken())[0], "(" === eV || "[" === eV ? nV.push("(" === eV ? ")" : "]") : "{" === eV && nV.length > 0 ? nV.push("}") : eV === nV[nV.length - 1] && nV.pop(), 0 === nV.length) {
-               if (";" === eV) {
-                 UV.source.end = this.YF(VV[2]), UV.source.end.offset++, this.semicolon = !0;
-                 break
-               }
-               if ("{" === eV) {
-                 pV = !0;
-                 break
- ... (38 more removed lines; see GitHub link above)
+         isReady(HH, BH) {
+           return !0
```

#### 110. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L2513-L2521` → after: `L870-L872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L870-L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L870-L872) · [Before (L2513-L2521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L2513-L2521)

```diff
-         comment(VV) {
-           let eV = new xV;
-           this.init(eV, VV[2]), eV.source.end = this.YF(VV[3] || VV[2]), eV.source.end.offset++;
-           let JV = VV[1].slice(2, -2);
-           if (/^\s*$/.test(JV)) eV.text = "", eV.raws.left = JV, eV.raws.right = "";
-           else {
-             let VV = JV.match(/^(\s*)([^]*\S)(\s*)$/);
-             eV.text = VV[2], eV.raws.left = VV[1], eV.raws.right = VV[3]
-           }
+         isReadyForSubMesh(HH, BH, LH) {
+           const AH = BH.materialDefines;
+           return !!AH && (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = AH, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), this._eventInfo.isReadyForSubMesh)
```

#### 111. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L2523-L2573` → after: `L874-L875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L874-L875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L874-L875) · [Before (L2523-L2573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L2523-L2573)

```diff
-         createTokenizer() {
-           this.tokenizer = eV(this.input)
-         }
-         decl(eV, xV) {
-           let JV = new VV;
-           this.init(JV, eV[0][2]);
-           let YV, UV = eV[eV.length - 1];
-           for (";" === UV[0] && (this.semicolon = !0, eV.pop()), JV.source.end = this.YF(UV[3] || UV[2] || function(VV) {
-               for (let eV = VV.length - 1; eV >= 0; eV--) {
-                 let xV = VV[eV],
-                   JV = xV[3] || xV[2];
-                 if (JV) return JV
-               }
-             }(eV)), JV.source.end.offset++;
-             "word" !== eV[0][0];) 1 === eV.length && this.unknownWord(eV), JV.raws.before += eV.shift()[1];
-           for (JV.source.start = this.YF(eV[0][2]), JV.prop = ""; eV.length;) {
- ... (35 more removed lines; see GitHub link above)
+         getEffect() {
+           return this._drawWrapper.effect
```

#### 112. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L2575-L2580` → after: `L877-L878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L877-L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L877-L878) · [Before (L2575-L2580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L2575-L2580)

```diff
-         doubleColon(VV) {
-           throw this.input.error("Double colon", {
-             offset: VV[2]
-           }, {
-             offset: VV[2] + VV[1].length
-           })
+         yN() {
+           return this._scene
```

#### 113. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L2582-L2584` → after: `L880-L881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L880-L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L880-L881) · [Before (L2582-L2584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L2582-L2584)

```diff
-         emptyRule(VV) {
-           let eV = new UV;
-           this.init(eV, VV[2]), eV.selector = "", eV.raws.between = "", this.current = eV
+         _getEffectiveOrientation(HH) {
+           return null !== this.sideOrientation ? this.sideOrientation : HH.sideOrientation
```

#### 114. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L2586-L2587` → after: `L883-L884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L883-L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L883-L884) · [Before (L2586-L2587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L2586-L2587)

```diff
-         end(VV) {
-           this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = !1, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.YF(VV … [truncated]
+         get transparencyMode() {
+           return this._transparencyMode
```

#### 115. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L2589-L2590` → after: `L886-L887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L886-L887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L886-L887) · [Before (L2589-L2590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L2589-L2590)

```diff
-         endFile() {
-           this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.root.source.end = this.YF(this.tokenizer.positio … [truncated]
+         set transparencyMode(HH) {
+           this._transparencyMode = HH
```

#### 116. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L2592-L2596` → after: `L889-L890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L889-L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L889-L890) · [Before (L2592-L2596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L2592-L2596)

```diff
-         freeSemicolon(VV) {
-           if (this.spaces += VV[1], this.current.nodes) {
-             let VV = this.current.nodes[this.current.nodes.length - 1];
-             VV && "rule" === VV.type && !VV.raws.ownSemicolon && (VV.raws.ownSemicolon = this.spaces, this.spaces = "")
-           }
+         get _hasTransparencyMode() {
+           return null != this._transparencyMode
```

#### 117. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L2598-L2604` → after: `L892-L893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L892-L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L892-L893) · [Before (L2598-L2604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L2598-L2604)

```diff
-         YF(VV) {
-           let eV = this.input.fromOffset(VV);
-           return {
-             column: eV.col,
-             line: eV.line,
-             offset: VV
-           }
+         get _transparencyModeIsBlend() {
+           return this._transparencyMode === HH.MATERIAL_ALPHABLEND || this._transparencyMode === HH.MATERIAL_ALPHATESTANDBLEND
```

#### 118. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L2606-L2668` → after: `L895-L896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L895-L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L895-L896) · [Before (L2606-L2668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L2606-L2668)

```diff
-         init(VV, eV) {
-           this.current.push(VV), VV.source = {
-             input: this.input,
-             start: this.YF(eV)
-           }, VV.raws.before = this.spaces, this.spaces = "", "comment" !== VV.type && (this.semicolon = !1)
-         }
-         other(VV) {
-           let eV = !1,
-             xV = null,
-             JV = !1,
-             YV = null,
-             UV = [],
-             yV = VV[1].startsWith("--"),
-             pV = [],
-             QV = VV;
-           for (; QV;) {
- ... (47 more removed lines; see GitHub link above)
+         get _transparencyModeIsTest() {
+           return this._transparencyMode === HH.MATERIAL_ALPHATEST || this._transparencyMode === HH.MATERIAL_ALPHATESTANDBLEND
```

#### 119. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L2670-L2683` → after: `L898-L899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L898-L899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L898-L899) · [Before (L2670-L2683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L2670-L2683)

```diff
-         precheckMissedSemicolon() {}
-         raw(VV, eV, xV, JV) {
-           let YV, UV, pV, QV, nV = xV.length,
-             wV = "",
-             ZV = !0;
-           for (let vV = 0; vV < nV; vV += 1) YV = xV[vV], UV = YV[0], "space" !== UV || vV !== nV - 1 || JV ? "comment" === UV ? (QV = xV[vV - 1] ? xV[vV - 1][0] : "empty", pV = xV[vV + 1] ? xV[vV + 1][0] : "empty", yV[QV] || yV[pV] || "," === wV.slice(-1) ? ZV = !1 : wV += YV[1] … [truncated]
-           if (!ZV) {
-             let JV = xV.reduce(((VV, eV) => VV + eV[1]), "");
-             VV.raws[eV] = {
-               raw: JV,
-               value: wV
-             }
-           }
-           VV[eV] = wV
+         get _disableAlphaBlending() {
+           return this._transparencyMode === HH.MATERIAL_OPAQUE || this._transparencyMode === HH.MATERIAL_ALPHATEST
```

#### 120. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L2685-L2688` → after: `L901-L902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L901-L902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L901-L902) · [Before (L2685-L2688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L2685-L2688)

```diff
-         rule(VV) {
-           VV.pop();
-           let eV = new UV;
-           this.init(eV, VV[0][2]), eV.raws.between = this.spacesAndCommentsFromEnd(VV), this.raw(eV, "selector", VV), this.current = eV
+         needAlphaBlending() {
+           return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && this.alpha < 1
```

#### 121. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L2690-L2693` → after: `L904-L905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L904-L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L904-L905) · [Before (L2690-L2693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L2690-L2693)

```diff
-         spacesAndCommentsFromEnd(VV) {
-           let eV, xV = "";
-           for (; VV.length && (eV = VV[VV.length - 1][0], "space" === eV || "comment" === eV);) xV = VV.pop()[1] + xV;
-           return xV
+         needAlphaBlendingForMesh(HH) {
+           return this._hasTransparencyMode ? this._transparencyModeIsBlend : HH.visibility < 1 || !this._disableAlphaBlending && (HH.hasVertexAlpha || this.needAlphaBlending())
```

#### 122. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L2695-L2698` → after: `L907-L908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L907-L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L907-L908) · [Before (L2695-L2698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L2695-L2698)

```diff
-         spacesAndCommentsFromStart(VV) {
-           let eV, xV = "";
-           for (; VV.length && (eV = VV[0][0], "space" === eV || "comment" === eV);) xV += VV.shift()[1];
-           return xV
+         needAlphaTesting() {
+           return !!this._hasTransparencyMode && this._transparencyModeIsTest
```

#### 123. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L2700-L2703` → after: `L910-L911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L910-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L910-L911) · [Before (L2700-L2703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L2700-L2703)

```diff
-         spacesFromEnd(VV) {
-           let eV, xV = "";
-           for (; VV.length && (eV = VV[VV.length - 1][0], "space" === eV);) xV = VV.pop()[1] + xV;
-           return xV
+         needAlphaTestingForMesh(HH) {
+           return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.needAlphaBlendingForMesh(HH) && this.needAlphaTesting()
```

#### 124. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L2705-L2708` → after: `L913-L914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L913-L914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L913-L914) · [Before (L2705-L2708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L2705-L2708)

```diff
-         stringFrom(VV, eV) {
-           let xV = "";
-           for (let JV = eV; JV < VV.length; JV++) xV += VV[JV][1];
-           return VV.splice(eV, VV.length - eV), xV
+         getAlphaTestTexture() {
+           return null
```

#### 125. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L2710-L2712` → after: `L916-L924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L916-L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L916-L924) · [Before (L2710-L2712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L2710-L2712)

```diff
-         unclosedBlock() {
-           let VV = this.current.source.start;
-           throw this.input.error("Unclosed block", VV.line, VV.column)
+         markDirty() {
+           let BH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+           const LH = this.yN().meshes;
+           for (const HH of LH)
+             if (HH.jU)
+               for (const LH of HH.jU)
+                 if (LH.eu() === this)
+                   for (const HH of LH._drawWrappers) HH && this._materialContext === HH.materialContext && (HH._wasPreviouslyReady = !1, HH._wasPreviouslyUsingInstances = null, HH._forceRebindOnNextCall = BH);
+           BH && this.dLH(HH.AllDirtyFlag)
```

#### 126. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L2714-L2719` → after: `L926-L931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L926-L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L926-L931) · [Before (L2714-L2719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L2714-L2719)

```diff
-         unclosedBracket(VV) {
-           throw this.input.error("Unclosed bracket", {
-             offset: VV[2]
-           }, {
-             offset: VV[2] + 1
-           })
+         _preBind(BH) {
+           let LH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
+           const AH = this._scene.Iu(),
+             rH = (null == LH ? this.sideOrientation : LH) === HH.ClockWiseSideOrientation,
+             SH = BH || this._getDrawWrapper();
+           return (0, WH.b)(SH) && SH.materialContext && (SH.materialContext.useVertexPulling = this.useVertexPulling), AH.enableEffect(SH), AH.setState(this.backFaceCulling, this.zOffset, !1, rH, this._scene._mirroredCameraPosition ? !this.cullBackFaces : this.cullBackFaces, this … [truncated]
```

#### 127. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L2721-L2726` → after: `L933-L936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L933-L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L933-L936) · [Before (L2721-L2726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L2721-L2726)

```diff
-         unexpectedClose(VV) {
-           throw this.input.error("Unexpected }", {
-             offset: VV[2]
-           }, {
-             offset: VV[2] + 1
-           })
+         bind(HH, BH) {}
+         buildUniformLayout() {
+           const HH = this._uniformBuffer;
+           this._eventInfo.ubo = HH, this._callbackPluginEventGeneric(8, this._eventInfo), HH.create(), this._uniformBufferLayoutBuilt = !0
```

#### 128. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L2728-L2733` → after: `L938-L940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L938-L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L938-L940) · [Before (L2728-L2733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L2728-L2733)

```diff
-         unknownWord(VV) {
-           throw this.input.error("Unknown word", {
-             offset: VV[0][2]
-           }, {
-             offset: VV[0][2] + VV[0][1].length
-           })
+         bindForSubMesh(HH, BH, LH) {
+           const AH = LH._drawWrapper;
+           this._eventInfo.subMesh = LH, this._callbackPluginEventBindForSubMesh(this._eventInfo), AH._forceRebindOnNextCall = !1
```

#### 129. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L2735-L2740` → after: `L942-L944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L942-L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L942-L944) · [Before (L2735-L2740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L2735-L2740)

```diff
-         unnamedAtrule(VV, eV) {
-           throw this.input.error("At-rule without name", {
-             offset: eV[2]
-           }, {
-             offset: eV[2] + eV[1].length
-           })
+         bindOnlyWorldMatrix(HH) {}
+         bindView(HH) {
+           this._useUBO ? this._needToBindSceneUbo = !0 : HH.setMatrix("view", this.yN().getViewMatrix())
```

#### 130. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L2742-L2758` → after: `L946-L947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L946-L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L946-L947) · [Before (L2742-L2758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L2742-L2758)

```diff
-       }
-     }
- 
-     function mx() {
-       if (Zx) return wx;
-       Zx = 1;
-       let VV = Dx(),
-         eV = fx(),
-         xV = Wx();
- 
-       function JV(VV, JV) {
-         let YV = new xV(VV, JV),
-           UV = new eV(YV);
-         try {
-           UV.parse()
-         } catch (yV) {
- ... (1 more removed lines; see GitHub link above)
+         bindViewProjection(HH) {
+           this._useUBO ? this._needToBindSceneUbo = !0 : (HH.setMatrix("viewProjection", this.yN().getTransformMatrix()), HH.setMatrix("projection", this.yN().getProjectionMatrix()), HH.setMatrix("inverseProjection", this.yN().getInverseProjectionMatrix()))
```

#### 131. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L2760-L2822` → after: `L949-L950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L949-L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L949-L950) · [Before (L2760-L2822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L2760-L2822)

```diff
-         return UV.root
-       }
-       return wx = JV, JV.default = JV, VV.registerParse(JV), wx
-     }
- 
-     function Kx() {
-       if (rx) return vx;
-       rx = 1;
-       let {
-         isClean: VV,
-         my: eV
-       } = Px(), xV = Rx(), JV = Nx(), YV = Dx(), UV = ix(), yV = (Cx(), ox()), pV = mx(), QV = hx();
-       const nV = {
-           atrule: "AtRule",
-           comment: "Comment",
-           decl: "Declaration",
- ... (47 more removed lines; see GitHub link above)
+         bindEyePosition(HH, BH) {
+           this._useUBO ? this._needToBindSceneUbo = !0 : this._scene.bindEyePosition(HH, BH)
```

#### 132. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L2824-L2870` → after: `L952-L956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L952-L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L952-L956) · [Before (L2824-L2870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L2824-L2870)

```diff
-       }
- 
-       function bV(eV) {
-         return eV[VV] = !1, eV.nodes && eV.nodes.forEach((VV => bV(VV))), eV
-       }
-       let EV = {};
-       class BV {
-         constructor(VV, xV, JV) {
-           let UV;
-           if (this.stringified = !1, this.processed = !1, "object" !== typeof xV || null === xV || "root" !== xV.type && "document" !== xV.type)
-             if (xV instanceof BV || xV instanceof yV) UV = bV(xV.root), xV.map && ("undefined" === typeof JV.map && (JV.map = {}), JV.map.inline || (JV.map.inline = !1), JV.map.prev = xV.map);
-             else {
-               let VV = pV;
-               JV.syntax && (VV = JV.syntax.parse), JV.parser && (VV = JV.parser), VV.parse && (VV = VV.parse);
-               try {
-                 UV = VV(xV, JV)
- ... (31 more removed lines; see GitHub link above)
+         _afterBind(HH) {
+           let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
+           if (this._scene._cachedMaterial = this, this._needToBindSceneUbo && BH && (this._needToBindSceneUbo = !1, (0, QH.t)(BH, this.yN().getSceneUniformBuffer()), this._scene.finalizeSceneUbo()), this._scene._cachedVisibility = HH ? HH.visibility : 1, this._onBindObservable && … [truncated]
+             const HH = this._scene.Iu();
+             this._cachedDepthWriteState = HH.getDepthWrite(), HH.setDepthWrite(!1)
```

#### 133. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L2872-L2899` → after: `L958-L960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L958-L960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L958-L960) · [Before (L2872-L2899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L2872-L2899)

```diff
-           return VV
-         }
-         prepareVisitors() {
-           this.listeners = {};
-           let VV = (VV, eV, xV) => {
-             this.listeners[eV] || (this.listeners[eV] = []), this.listeners[eV].push([VV, xV])
-           };
-           for (let eV of this.plugins)
-             if ("object" === typeof eV)
-               for (let xV in eV) {
-                 if (!wV[xV] && /^[A-Z]/.test(xV)) throw new Error(`Unknown event ${xV} in ${eV.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
-                 if (!ZV[xV])
-                   if ("object" === typeof eV[xV])
-                     for (let JV in eV[xV]) VV(eV, "*" === JV ? xV : xV + "-" + JV.toLowerCase(), eV[xV][JV]);
-                   else "function" === typeof eV[xV] && VV(eV, xV, eV[xV])
-               }
- ... (12 more removed lines; see GitHub link above)
+           if (this.disableColorWrite) {
+             const HH = this._scene.Iu();
+             this._cachedColorWriteState = HH.getColorWrite(), HH.setColorWrite(!1)
```

#### 134. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L2901-L2927` → after: `L962-L964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L962-L964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L962-L964) · [Before (L2901-L2927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L2901-L2927)

```diff
-           if (this.prepareVisitors(), this.hasListener) {
-             let eV = this.result.root;
-             for (; !eV[VV];) {
-               eV[VV] = !0;
-               let JV = [kV(eV)];
-               for (; JV.length > 0;) {
-                 let VV = this.visitTick(JV);
-                 if (vV(VV)) try {
-                   await VV
-                 } catch (xV) {
-                   let VV = JV[JV.length - 1].node;
-                   throw this.handleError(xV, VV)
-                 }
-               }
-             }
-             if (this.listeners.OnceExit)
- ... (11 more removed lines; see GitHub link above)
+           if (0 !== this.depthFunction) {
+             const HH = this._scene.Iu();
+             this._cachedDepthFunctionState = HH.getDepthFunction() || 0, HH.setDepthFunction(this.depthFunction)
```

#### 135. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L2931-L2943` → after: `L967-L969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L967-L969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L967-L969) · [Before (L2931-L2943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L2931-L2943)

```diff
-         runOnRoot(VV) {
-           this.result.lastPlugin = VV;
-           try {
-             if ("object" === typeof VV && VV.Once) {
-               if ("document" === this.result.root.type) {
-                 let eV = this.result.root.nodes.map((eV => VV.Once(eV, this.helpers)));
-                 return vV(eV[0]) ? Promise.all(eV) : eV
-               }
-               return VV.Once(this.result.root, this.helpers)
-             }
-             if ("function" === typeof VV) return VV(this.result.root, this.result)
-           } catch (eV) {
-             throw this.handleError(eV)
+         unbind() {
+           if (this._scene.getSceneUniformBuffer().unbindEffect(), this._onUnBindObservable && this._onUnBindObservable.notifyObservers(this), 0 !== this.depthFunction) {
+             this._scene.Iu().setDepthFunction(this._cachedDepthFunctionState)
```

#### 136. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L2945-L2961` → after: `L971-L972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L971-L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L971-L972) · [Before (L2945-L2961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L2945-L2961)

```diff
-         }
-         stringify() {
-           if (this.error) throw this.error;
-           if (this.stringified) return this.result;
-           this.stringified = !0, this.sync();
-           let VV = this.result.opts,
-             eV = JV;
-           VV.syntax && (eV = VV.syntax.stringify), VV.stringifier && (eV = VV.stringifier), eV.stringify && (eV = eV.stringify);
-           let YV = new xV(eV, this.result.root, this.result.opts).generate();
-           return this.result.css = YV[0], this.result.map = YV[1], this.result
-         }
-         sync() {
-           if (this.error) throw this.error;
-           if (this.processed) return this.result;
-           if (this.processed = !0, this.processing) throw this.getAsyncError();
-           for (let VV of this.plugins) {
- ... (1 more removed lines; see GitHub link above)
+           if (this.disableDepthWrite) {
+             this._scene.Iu().setDepthWrite(this._cachedDepthWriteState)
```

#### 137. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L2963-L2969` → after: `L974-L975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L974-L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L974-L975) · [Before (L2963-L2969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L2963-L2969)

```diff
-           if (this.prepareVisitors(), this.hasListener) {
-             let eV = this.result.root;
-             for (; !eV[VV];) eV[VV] = !0, this.walkSync(eV);
-             if (this.listeners.OnceExit)
-               if ("document" === eV.type)
-                 for (let VV of eV.nodes) this.visitSync(this.listeners.OnceExit, VV);
-               else this.visitSync(this.listeners.OnceExit, eV)
+           if (this.disableColorWrite) {
+             this._scene.Iu().setColorWrite(this._cachedColorWriteState)
```

#### 138. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L2971-L2986` → after: `L977-L995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L977-L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L977-L995) · [Before (L2971-L2986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L2971-L2986)

```diff
-           return this.result
-         }
-         then(VV, eV) {
-           return this.async().then(VV, eV)
-         }
-         toString() {
-           return this.css
-         }
-         visitSync(VV, eV) {
-           for (let [JV, YV] of VV) {
-             let VV;
-             this.result.lastPlugin = JV;
-             try {
-               VV = YV(eV, this.helpers)
-             } catch (xV) {
-               throw this.handleError(xV, eV.proxyOf)
+         }
+         getAnimatables() {
+           return this._eventInfo.animatables = [], this._callbackPluginEventGeneric(256, this._eventInfo), this._eventInfo.animatables
+         }
+         getActiveTextures() {
+           return this._eventInfo.activeTextures = [], this._callbackPluginEventGeneric(512, this._eventInfo), this._eventInfo.activeTextures
+         }
+         hasTexture(HH) {
+           return this._eventInfo.hasTexture = !1, this._eventInfo.texture = HH, this._callbackPluginEventGeneric(1024, this._eventInfo), this._eventInfo.hasTexture
+         }
+         clone(HH) {
+           return null
+         }
+         _clonePlugins(BH, LH) {
+           const AH = {};
+           if (this._serializePlugins(AH), HH._ParsePlugins(AH, BH, this._scene, LH), this.pluginManager)
+ ... (3 more added lines; see GitHub link above)
```

#### 139. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L2992-L3005` → after: `L998-L1003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L998-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L998-L1003) · [Before (L2992-L3005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L2992-L3005)

```diff
-         visitTick(eV) {
-           let xV = eV[eV.length - 1],
-             {
-               node: JV,
-               visitors: YV
-             } = xV;
-           if ("root" !== JV.type && "document" !== JV.type && !JV.parent) return void eV.pop();
-           if (YV.length > 0 && xV.visitorIndex < YV.length) {
-             let [VV, eV] = YV[xV.visitorIndex];
-             xV.visitorIndex += 1, xV.visitorIndex === YV.length && (xV.visitors = [], xV.visitorIndex = 0), this.result.lastPlugin = VV;
-             try {
-               return eV(JV.toProxy(), this.helpers)
-             } catch (yV) {
-               throw this.handleError(yV, JV)
+         getBindedMeshes() {
+           if (this.meshMap) {
+             const HH = [];
+             for (const BH in this.meshMap) {
+               const LH = this.meshMap[BH];
+               LH && HH.push(LH)
```

#### 140. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L3008-L3032` → after: `L1007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R1007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L1007) · [Before (L3008-L3032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L3008-L3032)

```diff
-           if (0 !== xV.iterator) {
-             let YV, UV = xV.iterator;
-             for (; YV = JV.nodes[JV.indexes[UV]];)
-               if (JV.indexes[UV] += 1, !YV[VV]) return YV[VV] = !0, void eV.push(kV(YV));
-             xV.iterator = 0, delete JV.indexes[UV]
-           }
-           let UV = xV.events;
-           for (; xV.eventIndex < UV.length;) {
-             let eV = UV[xV.eventIndex];
-             if (xV.eventIndex += 1, 0 === eV) return void(JV.nodes && JV.nodes.length && (JV[VV] = !0, xV.iterator = JV.getIterator()));
-             if (this.listeners[eV]) return void(xV.visitors = this.listeners[eV])
-           }
-           eV.pop()
-         }
-         walkSync(eV) {
-           eV[VV] = !0;
- ... (9 more removed lines; see GitHub link above)
+           return this._scene.meshes.filter((HH => HH.material === this))
```

#### 141. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L3034-L3035` → after: `L1009-L1032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R1009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L1009-L1032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L1009-L1032) · [Before (L3034-L3035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L3034-L3035)

```diff
-         warnings() {
-           return this.sync().warnings()
+         forceCompilation(HH, BH, LH, AH) {
+           const rH = {
+               clipPlane: !1,
+               useInstances: !1,
+               ...LH
+             },
+             SH = this.yN(),
+             hH = this.allowShaderHotSwapping;
+           this.allowShaderHotSwapping = !1;
+           const tH = () => {
+             if (!this._scene || !this._scene.Iu()) return;
+             const LH = SH.clipPlane;
+             if (rH.clipPlane && (SH.clipPlane = new XH.d(0, 0, 0, 1)), this._storeEffectOnSubMeshes) {
+               let LH = !0,
+                 SH = null;
+               if (HH.jU) {
+ ... (8 more added lines; see GitHub link above)
```

#### 142. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L3037-L3038` → after: `L1034-L1041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R1034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L1034-L1041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L1034-L1041) · [Before (L3037-L3038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L3037-L3038)

```diff
-         get content() {
-           return this.stringify().content
+         async forceCompilationAsync(HH, BH) {
+           return await new Promise(((LH, AH) => {
+             this.forceCompilation(HH, (() => {
+               LH()
+             }), BH, (HH => {
+               AH(HH)
+             }))
+           }))
```

#### 143. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L3040-L3041` → after: `L1043-L1044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R1043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L1043-L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L1043-L1044) · [Before (L3040-L3041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L3040-L3041)

```diff
-         get css() {
-           return this.stringify().css
+         dLH(BH) {
+           this.yN().blockMaterialDirtyMechanism || this._blockDirtyMechanism || (HH._DirtyCallbackArray.length = 0, BH & HH.ImageProcessingDirtyFlag && HH._DirtyCallbackArray.push(HH._ImageProcessingDirtyCallBack), BH & HH.TextureDirtyFlag && HH._DirtyCallbackArray.push(HH._Textu … [truncated]
```

#### 144. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L3043-L3044` → after: `L1046-L1050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R1046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L1046-L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L1046-L1050) · [Before (L3043-L3044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L3043-L3044)

```diff
-         get map() {
-           return this.stringify().map
+         resetDrawCache() {
+           const HH = this.yN().meshes;
+           for (const BH of HH)
+             if (BH.jU)
+               for (const HH of BH.jU) HH.eu() === this && HH.resetDrawCache()
```

#### 145. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L3046-L3047` → after: `L1052-L1061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R1052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L1052-L1061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L1052-L1061) · [Before (L3046-L3047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L3046-L3047)

```diff
-         get messages() {
-           return this.sync().messages
+         _markAllSubMeshesAsDirty(HH) {
+           const BH = this.yN();
+           if (BH.blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
+           const LH = BH.meshes;
+           for (const AH of LH)
+             if (AH.jU)
+               for (const LH of AH.jU) {
+                 if ((LH.eu() || (BH._hasDefaultMaterial ? BH.defaultMaterial : null)) === this)
+                   for (const BH of LH._drawWrappers) BH && BH.defines && BH.defines.markAllAsDirty && this._materialContext === BH.materialContext && HH(BH.defines)
+               }
```

#### 146. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L3049-L3050` → after: `L1063-L1066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R1063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L1063-L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L1063-L1066) · [Before (L3049-L3050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L3049-L3050)

```diff
-         get opts() {
-           return this.result.opts
+         _markScenePrePassDirty() {
+           if (this.yN().blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
+           const HH = this.yN().enablePrePassRenderer();
+           HH && HH.dLH()
```

#### 147. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L3052-L3053` → after: `L1068-L1069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R1068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L1068-L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L1068-L1069) · [Before (L3052-L3053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L3052-L3053)

```diff
-         get processor() {
-           return this.result.processor
+         _markAllSubMeshesAsAllDirty() {
+           this._markAllSubMeshesAsDirty(HH._AllDirtyCallBack)
```

#### 148. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L3055-L3056` → after: `L1071-L1072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R1071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L1071-L1072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L1071-L1072) · [Before (L3055-L3056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L3055-L3056)

```diff
-         get root() {
-           return this.sync().root
+         _markAllSubMeshesAsImageProcessingDirty() {
+           this._markAllSubMeshesAsDirty(HH._ImageProcessingDirtyCallBack)
```

#### 149. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L3058-L3059` → after: `L1074-L1075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R1074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L1074-L1075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L1074-L1075) · [Before (L3058-L3059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L3058-L3059)

```diff
-         get[Symbol.toStringTag]() {
-           return "LazyResult"
+         _markAllSubMeshesAsTexturesDirty() {
+           this._markAllSubMeshesAsDirty(HH._TextureDirtyCallBack)
```

#### 150. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L3061-L3091` → after: `L1077-L1279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R1077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L1077-L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L1077-L1279) · [Before (L3061-L3091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L3061-L3091)

```diff
-       }
-       return BV.registerPostcss = VV => {
-         EV = VV
-       }, vx = BV, BV.default = BV, QV.registerLazyResult(BV), UV.registerLazyResult(BV), vx
-     }
- 
-     function Hx() {
-       if (Bx) return Ex;
-       Bx = 1;
-       let VV = function() {
-           if (bx) return kx;
-           bx = 1;
-           let VV = Rx(),
-             eV = Nx(),
-             xV = (Cx(), mx());
-           const JV = ox();
- ... (15 more removed lines; see GitHub link above)
+         _markAllSubMeshesAsFresnelDirty() {
+           this._markAllSubMeshesAsDirty(HH._FresnelDirtyCallBack)
+         }
+         _markAllSubMeshesAsFresnelAndMiscDirty() {
+           this._markAllSubMeshesAsDirty(HH._FresnelAndMiscDirtyCallBack)
+         }
+         _markAllSubMeshesAsLightsDirty() {
+           this._markAllSubMeshesAsDirty(HH._LightsDirtyCallBack)
+         }
+         _markAllSubMeshesAsAttributesDirty() {
+           this._markAllSubMeshesAsDirty(HH._AttributeDirtyCallBack)
+         }
+         _markAllSubMeshesAsMiscDirty() {
+           this._markAllSubMeshesAsDirty(HH._MiscDirtyCallBack)
+         }
+         _markAllSubMeshesAsPrePassDirty() {
+ ... (187 more added lines; see GitHub link above)
```

#### 151. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L3093-L3098` → after: `L1281-L1292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R1281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L1281-L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L1281-L1292) · [Before (L3093-L3098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L3093-L3098)

```diff
-             async () {
-               return this.error ? Promise.reject(this.error) : Promise.resolve(this.result)
-             } catch (VV) {
-               return this.async().catch(VV)
-             } finally(VV) {
-               return this.async().then(VV, VV)
+           },
+           metadata: SH
+         }, BB, LB), (0, AH.g)(null, null, PH, {
+           kind: "field",
+           name: "checkReadyOnlyOnce",
+           static: !1,
+           private: !1,
+           access: {
+             has: HH => "checkReadyOnlyOnce" in HH,
+             get: HH => HH.checkReadyOnlyOnce,
+             set: (HH, BH) => {
+               HH.checkReadyOnlyOnce = BH
```

#### 152. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L3100-L3102` → after: `L1294-L1305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R1294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L1294-L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L1294-L1305) · [Before (L3100-L3102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L3100-L3102)

```diff
-             sync() {
-               if (this.error) throw this.error;
-               return this.result
+           },
+           metadata: SH
+         }, AB, rB), (0, AH.g)(null, null, TH, {
+           kind: "field",
+           name: "state",
+           static: !1,
+           private: !1,
+           access: {
+             has: HH => "state" in HH,
+             get: HH => HH.state,
+             set: (HH, BH) => {
+               HH.state = BH
```

#### 153. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L3104-L3105` → after: `L1307-L1318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R1307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L1307-L1318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L1307-L1318) · [Before (L3104-L3105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L3104-L3105)

```diff
-             then(VV, eV) {
-               return this.async().then(VV, eV)
+           },
+           metadata: SH
+         }, SB, hB), (0, AH.g)(null, null, UH, {
+           kind: "field",
+           name: "_alpha",
+           static: !1,
+           private: !1,
+           access: {
+             has: HH => "_alpha" in HH,
+             get: HH => HH._alpha,
+             set: (HH, BH) => {
+               HH._alpha = BH
```

#### 154. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L3107-L3108` → after: `L1320-L1331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R1320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L1320-L1331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L1320-L1331) · [Before (L3107-L3108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L3107-L3108)

```diff
-             toString() {
-               return this._css
+           },
+           metadata: SH
+         }, tB, zB), (0, AH.g)(null, null, VH, {
+           kind: "field",
+           name: "_backFaceCulling",
+           static: !1,
+           private: !1,
+           access: {
+             has: HH => "_backFaceCulling" in HH,
+             get: HH => HH._backFaceCulling,
+             set: (HH, BH) => {
+               HH._backFaceCulling = BH
```

#### 155. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L3110-L3111` → after: `L1333-L1344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R1333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L1333-L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L1333-L1344) · [Before (L3110-L3111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L3110-L3111)

```diff
-             warnings() {
-               return []
+           },
+           metadata: SH
+         }, CB, EB), (0, AH.g)(null, null, OH, {
+           kind: "field",
+           name: "_textureRepetitionMode",
+           static: !1,
+           private: !1,
+           access: {
+             has: HH => "_textureRepetitionMode" in HH,
+             get: HH => HH._textureRepetitionMode,
+             set: (HH, BH) => {
+               HH._textureRepetitionMode = BH
```

#### 156. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L3113-L3114` → after: `L1346-L1357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R1346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L1346-L1357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L1346-L1357) · [Before (L3113-L3114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L3113-L3114)

```diff
-             get content() {
-               return this.result.css
+           },
+           metadata: SH
+         }, XB, GB), (0, AH.g)(null, null, bH, {
+           kind: "field",
+           name: "textureRepetitionHexTilingParams",
+           static: !1,
+           private: !1,
+           access: {
+             has: HH => "textureRepetitionHexTilingParams" in HH,
+             get: HH => HH.textureRepetitionHexTilingParams,
+             set: (HH, BH) => {
+               HH.textureRepetitionHexTilingParams = BH
```

#### 157. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L3116-L3117` → after: `L1359-L1370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R1359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L1359-L1370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L1359-L1370) · [Before (L3116-L3117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L3116-L3117)

```diff
-             get css() {
-               return this.result.css
+           },
+           metadata: SH
+         }, YB, uB), (0, AH.g)(null, null, kH, {
+           kind: "field",
+           name: "_cullBackFaces",
+           static: !1,
+           private: !1,
+           access: {
+             has: HH => "_cullBackFaces" in HH,
+             get: HH => HH._cullBackFaces,
+             set: (HH, BH) => {
+               HH._cullBackFaces = BH
```

#### 158. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L3119-L3120` → after: `L1372-L1383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R1372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L1372-L1383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L1372-L1383) · [Before (L3119-L3120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L3119-L3120)

```diff
-             get map() {
-               return this.result.map
+           },
+           metadata: SH
+         }, QB, WB), (0, AH.g)(null, null, mH, {
+           kind: "field",
+           name: "sideOrientation",
+           static: !1,
+           private: !1,
+           access: {
+             has: HH => "sideOrientation" in HH,
+             get: HH => HH.sideOrientation,
+             set: (HH, BH) => {
+               HH.sideOrientation = BH
```

#### 159. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L3122-L3123` → after: `L1385-L1396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R1385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L1385-L1396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L1385-L1396) · [Before (L3122-L3123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L3122-L3123)

```diff
-             get messages() {
-               return []
+           },
+           metadata: SH
+         }, MB, xB), (0, AH.g)(null, null, oH, {
+           kind: "field",
+           name: "_alphaMode",
+           static: !1,
+           private: !1,
+           access: {
+             has: HH => "_alphaMode" in HH,
+             get: HH => HH._alphaMode,
+             set: (HH, BH) => {
+               HH._alphaMode = BH
```

#### 160. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L3125-L3126` → after: `L1398-L1409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R1398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L1398-L1409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L1398-L1409) · [Before (L3125-L3126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L3125-L3126)

```diff
-             get opts() {
-               return this.result.opts
+           },
+           metadata: SH
+         }, vB, PB), (0, AH.g)(null, null, IH, {
+           kind: "field",
+           name: "_needDepthPrePass",
+           static: !1,
+           private: !1,
+           access: {
+             has: HH => "_needDepthPrePass" in HH,
+             get: HH => HH._needDepthPrePass,
+             set: (HH, BH) => {
+               HH._needDepthPrePass = BH
```

#### 161. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L3128-L3129` → after: `L1411-L1422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R1411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L1411-L1422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L1411-L1422) · [Before (L3128-L3129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L3128-L3129)

```diff
-             get processor() {
-               return this.result.processor
+           },
+           metadata: SH
+         }, TB, UB), (0, AH.g)(null, null, fH, {
+           kind: "field",
+           name: "disableDepthWrite",
+           static: !1,
+           private: !1,
+           access: {
+             has: HH => "disableDepthWrite" in HH,
+             get: HH => HH.disableDepthWrite,
+             set: (HH, BH) => {
+               HH.disableDepthWrite = BH
```

#### 162. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L3131-L3140` → after: `L1424-L1435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R1424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L1424-L1435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L1424-L1435) · [Before (L3131-L3140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L3131-L3140)

```diff
-             get root() {
-               if (this._root) return this._root;
-               let VV, eV = xV;
-               try {
-                 VV = eV(this._css, this._opts)
-               } catch (JV) {
-                 this.error = JV
-               }
-               if (this.error) throw this.error;
-               return this._root = VV, VV
+           },
+           metadata: SH
+         }, VB, OB), (0, AH.g)(null, null, lH, {
+           kind: "field",
+           name: "disableColorWrite",
+           static: !1,
+           private: !1,
+           access: {
+             has: HH => "disableColorWrite" in HH,
+             get: HH => HH.disableColorWrite,
+             set: (HH, BH) => {
+               HH.disableColorWrite = BH
```

#### 163. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L3142-L3143` → after: `L1437-L1448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R1437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L1437-L1448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L1437-L1448) · [Before (L3142-L3143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L3142-L3143)

```diff
-             get[Symbol.toStringTag]() {
-               return "NoWorkResult"
+           },
+           metadata: SH
+         }, bB, kB), (0, AH.g)(null, null, KH, {
+           kind: "field",
+           name: "forceDepthWrite",
+           static: !1,
+           private: !1,
+           access: {
+             has: HH => "forceDepthWrite" in HH,
+             get: HH => HH.forceDepthWrite,
+             set: (HH, BH) => {
+               HH.forceDepthWrite = BH
```

#### 164. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L3145-L3214` → after: `L1450-L1461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R1450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L1450-L1461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L1450-L1461) · [Before (L3145-L3214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L3145-L3214)

```diff
-           }
-           return kx = YV, YV.default = YV, kx
-         }(),
-         eV = Kx(),
-         xV = ix(),
-         JV = hx();
-       class YV {
-         constructor() {
-           let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
-           this.version = "8.4.38", this.plugins = this.normalize(VV)
-         }
-         normalize(VV) {
-           let eV = [];
-           for (let xV of VV)
-             if (!0 === xV.postcss ? xV = xV() : xV.postcss && (xV = xV.postcss), "object" === typeof xV && Array.isArray(xV.plugins)) eV = eV.concat(xV.plugins);
-             else if ("object" === typeof xV && xV.postcssPlugin) eV.push(xV);
- ... (54 more removed lines; see GitHub link above)
+           },
+           metadata: SH
+         }, mB, oB), (0, AH.g)(null, null, cH, {
+           kind: "field",
+           name: "depthFunction",
+           static: !1,
+           private: !1,
+           access: {
+             has: HH => "depthFunction" in HH,
+             get: HH => HH.depthFunction,
+             set: (HH, BH) => {
+               HH.depthFunction = BH
```

#### 165. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L3216-L3221` → after: `L1463-L1474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R1463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L1463-L1474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L1463-L1474) · [Before (L3216-L3221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L3216-L3221)

```diff
-             if (ZV.nodes && (ZV.nodes = QV.nodes.map((VV => pV(VV, nV)))), ZV.source) {
-               let {
-                 inputId: VV,
-                 ...eV
-               } = ZV.source;
-               ZV.source = eV, null != VV && (ZV.source.input = nV[VV])
+           },
+           metadata: SH
+         }, IB, fB), (0, AH.g)(null, null, eH, {
+           kind: "field",
+           name: "separateCullingPass",
+           static: !1,
+           private: !1,
+           access: {
+             has: HH => "separateCullingPass" in HH,
+             get: HH => HH.separateCullingPass,
+             set: (HH, BH) => {
+               HH.separateCullingPass = BH
```

#### 166. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L3223-L3246` → after: `L1476-L1713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R1476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L1476-L1713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L1476-L1713) · [Before (L3223-L3246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L3223-L3246)

```diff
-             if ("root" === ZV.type) return new UV(ZV);
-             if ("decl" === ZV.type) return new VV(ZV);
-             if ("rule" === ZV.type) return new yV(ZV);
-             if ("comment" === ZV.type) return new xV(ZV);
-             if ("atrule" === ZV.type) return new JV(ZV);
-             throw new Error("Unknown node type: " + QV.type)
-           }
-           return jx = pV, pV.default = pV, jx
-         }(),
-         pV = ix(),
-         QV = ax(),
-         nV = gx(),
-         wV = cx(),
-         ZV = ox(),
-         vV = Wx(),
-         rV = mx(),
- ... (8 more removed lines; see GitHub link above)
+           },
+           metadata: SH
+         }, lB, KB), (0, AH.g)(null, null, qH, {
+           kind: "field",
+           name: "_fogEnabled",
+           static: !1,
+           private: !1,
+           access: {
+             has: HH => "_fogEnabled" in HH,
+             get: HH => HH._fogEnabled,
+             set: (HH, BH) => {
+               HH._fogEnabled = BH
+             }
+           },
+           metadata: SH
+         }, cB, eB), (0, AH.g)(null, null, gH, {
+ ... (222 more added lines; see GitHub link above)
```

#### 167. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L3332-L3334` → after: `L1756-L1759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R1756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L1756-L1759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L1756-L1759) · [Before (L3332-L3334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L3332-L3334)

```diff
-     function Ix() {
-       return {
-         stylesWithHoverClass: new Map
+     function zH(HH, BH, LH) {
+       if (!HH || HH.LOGARITHMICDEPTH || HH.indexOf && HH.indexOf("LOGARITHMICDEPTH") >= 0) {
+         const HH = LH.activeCamera;
+         1 === HH.mode && AH.e.Error("Logarithmic depth is not compatible with orthographic cameras!", 20), BH.setFloat("logarithmicDepthConstant", 2 / (Math.log(HH.maxZ + 1) / Math.LN2))
```

#### 168. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L3337-L3338` → after: `L1762-L1774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R1762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L1762-L1774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L1762-L1774) · [Before (L3337-L3338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L3337-L3338)

```diff
-     const dx = "rrweb-snapshot.createSandboxedIframe() requires root to be connected to a document before creating a sandboxed iframe.",
-       Ox = new WeakSet;
+     const CH = {
+         r: 0,
+         g: 0,
+         b: 0
+       },
+       EH = {
+         NUM_MORPH_INFLUENCERS: 0,
+         NORMAL: !1,
+         TANGENT: !1,
+         UV: !1,
+         UV2: !1,
+         COLOR: !1
+       };
```

#### 169. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L3340-L3348` → after: `L1776-L1778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R1776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L1776-L1778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L1776-L1778) · [Before (L3340-L3348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L3340-L3348)

```diff
-     function VJ(VV) {
-       if (VV.UNSAFE_allowUnprotectedRebuild) return;
-       const eV = VV.doc.defaultView;
-       if (eV && (!Ox.has(VV.doc) || ! function(VV) {
-           if (!VV || "IFRAME" !== VV.tagName) return !1;
-           if (!("sandbox" in VV)) return !1;
-           const eV = Array.from(VV.sandbox);
-           return 1 === eV.length && "allow-same-origin" === eV[0]
-         }(eV.frameElement))) throw new Error("rrweb-snapshot.rebuild() cannot rebuild into an unprotected browser document. Use rebuildIntoSandboxedIframe() or set UNSAFE_allowUnprotectedRebuild: true only when you accept the script-execution risk.")
+     function XH(HH, BH, LH) {
+       let AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+       LH && HH.fogEnabled && (!BH || BH.applyFog) && 0 !== HH.fogMode && (LH.setFloat4("vFogInfos", HH.fogMode, HH.fogStart, HH.fogEnd, HH.fogDensity), AH ? (HH.fogColor.toLinearSpaceToRef(CH, HH.Iu().useExactSrgbConversions), LH.setColor3("vFogColor", CH)) : LH.setColor3("vFogCo … [truncated]
```

#### 170. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L3351-L3386` → after: `L1781-L1783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R1781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L1781-L1783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L1781-L1783) · [Before (L3351-L3386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L3351-L3386)

```diff
-     function eJ(VV, eV, xV, JV) {
-       const {
-         doc: YV,
-         hackCss: UV,
-         cache: yV
-       } = JV;
-       VV.childNodes.length ? function(VV, eV, xV, JV) {
-         const YV = [];
-         for (const wV of VV.childNodes) wV.type === QV.Text && YV.push(wV);
-         const UV = eV.split("/* rr_split */");
-         for (; UV.length > 1 && UV.length > YV.length;) UV.splice(-2, 2, UV.slice(-2).join(""));
-         let yV = "";
-         xV && (yV = Sx(UV.join(""), JV));
-         let pV = 0,
-           nV = -1;
-         for (let QV = 0; QV < YV.length && QV !== UV.length; QV++) {
- ... (20 more removed lines; see GitHub link above)
+     function GH(HH, BH, LH, AH, rH, SH, hH, tH, zH, CH) {
+       const XH = HH.numMaxInfluencers || HH.numInfluencers;
+       return XH <= 0 ? 0 : (BH.push("#define MORPHTARGETS"), HH.hasPositions && BH.push("#define MORPHTARGETTEXTURE_HASPOSITIONS"), HH.hasNormals && BH.push("#define MORPHTARGETTEXTURE_HASNORMALS"), HH.hasTangents && BH.push("#define MORPHTARGETTEXTURE_HASTANGENTS"), HH.hasUVs && … [truncated]
```

#### 171. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L3389-L3477` → after: `L1786-L1799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R1786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L1786-L1799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L1786-L1799) · [Before (L3389-L3477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L3389-L3477)

```diff
-     function xJ(VV, eV) {
-       var xV;
-       const {
-         doc: JV,
-         hackCss: YV,
-         cache: UV
-       } = eV;
-       switch (VV.type) {
-         case QV.Document:
-           return JV.implementation.createDocument(null, "", null);
-         case QV.DocumentType:
-           return JV.implementation.createDocumentType(VV.name || "html", VV.publicId, VV.systemId);
-         case QV.Element: {
-           const YV = function(VV) {
-             let eV = sx[VV.tagName] ? sx[VV.tagName] : VV.tagName;
-             return "link" === eV && VV.attributes._cssText && (eV = "style"), eV
- ... (73 more removed lines; see GitHub link above)
+     function YH(HH, BH, LH) {
+       let SH = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
+       const hH = LH.NUM_MORPH_INFLUENCERS;
+       if (hH > 0 && rH.d.LastCreatedEngine) {
+         const tH = rH.d.LastCreatedEngine.getCaps().maxVertexAttribs,
+           zH = BH.morphTargetManager;
+         if (zH?.isUsingTextureForTargets) return;
+         const CH = zH && zH.supportsPositions && SH,
+           EH = zH && zH.supportsNormals && LH.NORMAL,
+           XH = zH && zH.supportsTangents && LH.TANGENT,
+           GH = zH && zH.supportsUVs && LH.UV1,
+           YH = zH && zH.supportsUV2s && LH.UV2,
+           uH = zH && zH.supportsColors && LH.VERTEXCOLOR;
+         for (let LH = 0; LH < hH; LH++) CH && HH.push("position" + LH), EH && HH.push("normal" + LH), XH && HH.push("tangent" + LH), GH && HH.push("uv_" + LH), YH && HH.push("uv2_" + LH), uH && HH.push("color" + LH), HH.length > tH && AH.e.Error("Cannot add more vertex attributes … [truncated]
```

#### 172. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L3482-L3524` → after: `L1809-L1810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R1809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L1809-L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L1809-L1810) · [Before (L3482-L3524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L3482-L3524)

```diff
-       const {
-         doc: xV,
-         mirror: JV,
-         skipChild: YV = !1,
-         hackCss: UV = !0,
-         afterAppend: yV,
-         cache: pV
-       } = eV;
-       if (JV.has(VV.id)) {
-         const eV = JV.rD(VV.id),
-           xV = JV.getMeta(eV);
-         if (wV = VV, (nV = xV) && wV && nV.type === wV.type && (nV.type === QV.Document ? nV.compatMode === wV.compatMode : nV.type === QV.DocumentType ? nV.name === wV.name && nV.publicId === wV.publicId && nV.systemId === wV.systemId : nV.type === QV.Comment || nV.type === QV.T … [truncated]
-       }
-       var nV, wV;
-       let ZV = xJ(VV, {
-         doc: xV,
- ... (27 more removed lines; see GitHub link above)
+       const LH = HH.morphTargetManager;
+       HH && LH && BH.setFloatArray("morphTargetInfluences", LH.influences)
```

#### 173. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L3528-L3559` → after: `L1814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R1814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L1814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L1814) · [Before (L3528-L3559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L3528-L3559)

```diff
-       VJ(eV);
-       const {
-         doc: xV,
-         onVisit: JV,
-         hackCss: YV = !0,
-         afterAppend: UV,
-         cache: yV,
-         mirror: pV = new NV
-       } = eV, nV = JJ(VV, {
-         doc: xV,
-         mirror: pV,
-         skipChild: !1,
-         hackCss: YV,
-         afterAppend: UV,
-         cache: yV
-       });
- ... (16 more removed lines; see GitHub link above)
+       BH.bindToEffect(HH, "Scene")
```

#### 174. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L3561-L3609` → after: `L1816-L1830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R1816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L1816-L1830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L1816-L1830) · [Before (L3561-L3609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L3561-L3609)

```diff
-     var UJ = Object.defineProperty,
-       yJ = (VV, eV, xV) => ((VV, eV, xV) => eV in VV ? UJ(VV, eV, {
-         enumerable: !0,
-         configurable: !0,
-         writable: !0,
-         value: xV
-       }) : VV[eV] = xV)(VV, "symbol" !== typeof eV ? eV + "" : eV, xV),
-       pJ = Object.defineProperty,
-       QJ = (VV, eV, xV) => ((VV, eV, xV) => eV in VV ? pJ(VV, eV, {
-         enumerable: !0,
-         configurable: !0,
-         writable: !0,
-         value: xV
-       }) : VV[eV] = xV)(VV, "symbol" !== typeof eV ? eV + "" : eV, xV);
-     Date.now().toString();
-     let nJ = class {
- ... (33 more removed lines; see GitHub link above)
+ 
+     function MH(HH, BH, LH, AH) {
+       let rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
+         SH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         hH = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+         zH = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
+         CH = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
+         EH = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
+         XH = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
+         GH = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0;
+       if (HH.texturesEnabled && rH && tH.e.ReflectionTextureEnabled) {
+         if (LH.wHH("reflectionMatrix", rH.getReflectionTextureMatrix()), LH.updateFloat2("vReflectionInfos", rH.level * HH.iblIntensity, GH), zH && rH.boundingBoxSize) {
+           const HH = rH;
+           LH.updateVector3("vReflectionPosition", HH.boundingBoxPosition), LH.updateVector3("vReflectionSize", HH.boundingBoxSize)
+         }
```

#### 175. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L3611-L3612` → after: `L1832-L1833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R1832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L1832-L1833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L1832-L1833) · [Before (L3611-L3612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L3611-L3612)

```diff
-           const VV = this.nodeMetaMap.get(xV);
-           VV && this.nodeMetaMap.set(eV, VV)
+           const HH = rH.getSize().width;
+           LH.updateFloat2("vReflectionFilteringInfo", HH, Math.log2(HH))
```

#### 176. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L3614` → after: `L1835-L1843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R1835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L1835-L1843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L1835-L1843) · [Before (L3614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L3614)

```diff
-         this.idNodeMap.set(VV, eV)
+         if (EH && !BH.USEIRRADIANCEMAP) {
+           const HH = rH.sphericalPolynomial;
+           if (BH.USESPHERICALFROMREFLECTIONMAP && HH)
+             if (BH.SPHERICAL_HARMONICS) {
+               const BH = HH.preScaledHarmonics;
+               LH.updateVector3("vSphericalL00", BH.l00), LH.updateVector3("vSphericalL1_1", BH.l1_1), LH.updateVector3("vSphericalL10", BH.l10), LH.updateVector3("vSphericalL11", BH.l11), LH.updateVector3("vSphericalL2_2", BH.l2_2), LH.updateVector3("vSphericalL2_1", BH.l2_1), LH … [truncated]
+             } else LH.updateFloat3("vSphericalX", HH.x.x, HH.x.y, HH.x.z), LH.updateFloat3("vSphericalY", HH.y.x, HH.y.y, HH.y.z), LH.updateFloat3("vSphericalZ", HH.z.x, HH.z.y, HH.z.z), LH.updateFloat3("vSphericalXX_ZZ", HH.xx.x - HH.zz.x, HH.xx.y - HH.zz.y, HH.xx.z - HH.zz.z),  … [truncated]
+         } else CH && BH.USEIRRADIANCEMAP && BH.USE_IRRADIANCE_DOMINANT_DIRECTION && rH.irradianceTexture && LH.updateVector3("vReflectionDominantDirection", rH.irradianceTexture._dominantDirection);
+         hH && LH.updateFloat3("vReflectionMicrosurfaceInfos", rH.getSize().width, rH.lodGenerationScale, rH.lodGenerationOffset)
```

#### 177. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L3616-L3617` → after: `L1845-L1854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R1845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L1845-L1854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L1845-L1854) · [Before (L3616-L3617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L3616-L3617)

```diff
-       reset() {
-         this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
+       XH && LH.updateColor3("vReflectionColor", AH)
+     }
+ 
+     function xH(HH, BH, LH) {
+       let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
+         rH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+       if (AH && tH.e.ReflectionTextureEnabled) {
+         BH.LODBASEDMICROSFURACE ? LH.setTexture("reflectionSampler", AH) : (LH.setTexture("reflectionSampler", AH._lodTextureMid || AH), LH.setTexture("reflectionSamplerLow", AH._lodTextureLow || AH), LH.setTexture("reflectionSamplerHigh", AH._lodTextureHigh || AH)), BH.USEIRRADI … [truncated]
+         const SH = HH.iblCdfGenerator;
+         rH && SH && LH.setTexture("icdfSampler", SH.getIcdfTexture())
```

#### 178. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L3619` → after: `L1856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R1856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L1856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L1856) · [Before (L3619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L3619)

```diff
-     };
+     }
```

#### 179. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L3621-L3622` → after: `L1858-L1859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R1858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L1858-L1859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L1858-L1859) · [Before (L3621-L3622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L3621-L3622)

```diff
-     function wJ(VV) {
-       return VV && VV.__esModule && Object.prototype.hasOwnProperty.call(VV, "default") ? VV.default : VV
+     function vH(HH, BH, LH) {
+       BH._needUVs = !0, BH[LH] = !0, HH.optimizeUVAllocation && HH.getTextureMatrix().isIdentityAs3x2() ? (BH[LH + "DIRECTUV"] = HH.coordinatesIndex + 1, BH["MAINUV" + (HH.coordinatesIndex + 1)] = !0) : BH[LH + "DIRECTUV"] = 0
```

#### 180. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L3625-L3644` → after: `L1862-L1864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R1862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L1862-L1864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L1862-L1864) · [Before (L3625-L3644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L3625-L3644)

```diff
-     function ZJ(VV) {
-       if (VV.__esModule) return VV;
-       var eV = VV.default;
-       if ("function" == typeof eV) {
-         var xV = function VV() {
-           return this instanceof VV ? Reflect.construct(eV, arguments, this.constructor) : eV.apply(this, arguments)
-         };
-         xV.prototype = eV.prototype
-       } else xV = {};
-       return Object.defineProperty(xV, "__esModule", {
-         value: !0
-       }), Object.keys(VV).forEach((function(eV) {
-         var JV = Object.getOwnPropertyDescriptor(VV, eV);
-         Object.defineProperty(xV, eV, JV.get ? JV : {
-           enumerable: !0,
-           get: function() {
- ... (4 more removed lines; see GitHub link above)
+     function PH(HH, BH, LH) {
+       const AH = HH.getTextureMatrix();
+       BH.wHH(LH + "Matrix", AH)
```

#### 181. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L3650-L3684` → after: `L1867-L1868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R1867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L1867-L1868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L1867-L1868) · [Before (L3650-L3684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L3650-L3684)

```diff
-     function kJ() {
-       if (vJ) return rJ.exports;
-       vJ = 1;
-       var VV = String,
-         eV = function() {
-           return {
-             isColorSupported: !1,
-             reset: VV,
-             bold: VV,
-             dim: VV,
-             italic: VV,
-             underline: VV,
-             inverse: VV,
-             hidden: VV,
-             strikethrough: VV,
-             black: VV,
- ... (19 more removed lines; see GitHub link above)
+     function TH(HH, BH, LH) {
+       LH.BAKED_VERTEX_ANIMATION_TEXTURE && LH.INSTANCES && HH.push("bakedVertexAnimationSettingsInstanced")
```

#### 182. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L3694-L3734` → after: `L1871-L1880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R1871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L1871-L1880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L1871-L1880) · [Before (L3694-L3734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L3694-L3734)

```diff
-     function jJ() {
-       if (BJ) return EJ;
-       BJ = 1;
-       let VV = kJ(),
-         eV = bJ;
-       class xV extends Error {
-         constructor(VV, eV, JV, YV, UV, yV) {
-           super(VV), this.name = "CssSyntaxError", this.reason = VV, UV && (this.file = UV), YV && (this.source = YV), yV && (this.plugin = yV), "undefined" !== typeof eV && "undefined" !== typeof JV && ("number" === typeof eV ? (this.line = eV, this.column = JV) : (this.line = e … [truncated]
-         }
-         setMessage() {
-           this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", "undefined" !== typeof this.line && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason
-         }
-         showSourceCode(xV) {
-           if (!this.source) return "";
-           let JV = this.source;
-           null == xV && (xV = VV.isColorSupported), eV && xV && (JV = eV(JV));
- ... (25 more removed lines; see GitHub link above)
+     function UH(HH, BH, LH) {
+       var AH;
+       if (BH && HH && (HH.computeBonesUsingShaders && BH._bonesComputationForcedToCPU && (HH.computeBonesUsingShaders = !1), HH.useBones && HH.computeBonesUsingShaders && HH.skeleton)) {
+         const rH = HH.skeleton;
+         if (rH.isUsingTextureForMatrices && BH.getUniformIndex("boneTextureInfo") > -1) {
+           const LH = rH.getTransformMatrixTexture(HH);
+           BH.setTexture("boneSampler", LH), BH.setFloat2("boneTextureInfo", rH._textureWidth, rH._textureHeight)
+         } else {
+           const SH = rH.getTransformMatrices(HH);
+           SH && (BH.setMatrices("mBones", SH), LH && HH.yN().prePassRenderer && HH.yN().prePassRenderer.getIndex(2) && (LH.previousBones[HH.uniqueId] || (LH.previousBones[HH.uniqueId] = SH.slice()), BH.setMatrices("mPreviousBones", LH.previousBones[HH.uniqueId]), AH = SH, LH.prev … [truncated]
```

#### 183. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L3741-L3742` → after: `L1885-L1887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R1885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L1885-L1887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L1885-L1887) · [Before (L3741-L3742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L3741-L3742)

```diff
-     function FY() {
-       return qJ || (qJ = 1, tY.isClean = Symbol("isClean"), tY.my = Symbol("my")), tY
+     function VH(HH, BH, LH, AH, rH) {
+       let SH = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
+       HH._bindLight(BH, LH, AH, rH, SH)
```

#### 184. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L3745-L3909` → after: `L1892-L1896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R1892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L1892-L1896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L1892-L1896) · [Before (L3745-L3909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L3745-L3909)

```diff
-     function TY() {
-       if (FJ) return tJ;
-       FJ = 1;
-       const VV = {
-         after: "\n",
-         beforeClose: "\n",
-         beforeComment: "\n",
-         beforeDecl: "\n",
-         beforeOpen: " ",
-         beforeRule: "\n",
-         colon: ": ",
-         commentLeft: " ",
-         commentRight: " ",
-         emptyBody: "",
-         indent: "    ",
-         semicolon: !1
- ... (149 more removed lines; see GitHub link above)
+     function kH(HH, BH, LH, AH) {
+       let rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4;
+       const SH = Math.min(BH.lightSources.length, rH);
+       for (let hH = 0; hH < SH; hH++) {
+         VH(BH.lightSources[hH], hH, HH, LH, "boolean" === typeof AH ? AH : AH.SPECULARTERM, BH.receiveShadows)
```

#### 185. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L3914-L3917` → after: `L1900-L1902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R1900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L1900-L1902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L1900-L1902) · [Before (L3914-L3917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L3914-L3917)

```diff
-     function PY() {
-       if (PJ) return TJ;
-       PJ = 1;
-       let VV = TY();
+     function mH(HH, BH, LH, AH) {
+       LH.NUM_BONE_INFLUENCERS > 0 && (AH.addCPUSkinningFallback(0, BH), HH.push("matricesIndices"), HH.push("matricesWeights"), LH.NUM_BONE_INFLUENCERS > 4 && (HH.push("matricesIndicesExtra"), HH.push("matricesWeightsExtra")))
+     }
```

#### 186. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L3919-L3922` → after: `L1904-L1905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R1904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L1904-L1905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L1904-L1905) · [Before (L3919-L3922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L3919-L3922)

```diff
-       function eV(eV, xV) {
-         new VV(xV).stringify(eV)
-       }
-       return TJ = eV, eV.default = eV, TJ
+     function oH(HH, BH) {
+       (BH.INSTANCES || BH.THIN_INSTANCES) && uH(HH, !!BH.PREPASS_VELOCITY), BH.INSTANCESCOLOR && HH.push("instanceColor")
```

#### 187. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L3925-L3931` → after: `L1908-L1914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R1908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L1908-L1914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L1908-L1914) · [Before (L3925-L3931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L3925-L3931)

```diff
-     function AY() {
-       if (NJ) return AJ;
-       NJ = 1;
-       let {
-         isClean: VV,
-         my: eV
-       } = FY(), xV = jJ(), JV = TY(), YV = PY();
+     function IH(HH, BH) {
+       let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
+         AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
+         rH = 0;
+       for (let SH = 0; SH < LH && HH["LIGHT" + SH]; SH++) SH > 0 && (rH = AH + SH, BH.addFallback(rH, "LIGHT" + SH)), HH.SHADOWS || (HH["SHADOW" + SH] && BH.addFallback(AH, "SHADOW" + SH), HH["SHADOWPCF" + SH] && BH.addFallback(AH, "SHADOWPCF" + SH), HH["SHADOWPCSS" + SH] && BH.a … [truncated]
+       return rH
+     }
```

#### 188. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L3933-L3942` → after: `L1916-L1927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R1916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L1916-L1927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L1916-L1927) · [Before (L3933-L3942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L3933-L3942)

```diff
-       function UV(VV, eV) {
-         let xV = new VV.constructor;
-         for (let JV in VV) {
-           if (!Object.prototype.hasOwnProperty.call(VV, JV)) continue;
-           if ("proxyCache" === JV) continue;
-           let YV = VV[JV],
-             yV = typeof YV;
-           "parent" === JV && "object" === yV ? eV && (xV[JV] = eV) : "source" === JV ? xV[JV] = YV : Array.isArray(YV) ? xV[JV] = YV.map((VV => UV(VV, xV))) : ("object" === yV && null !== YV && (YV = UV(YV)), xV[JV] = YV)
-         }
-         return xV
+     function fH(HH, BH, LH, AH, rH, SH, hH) {
+       let tH = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
+         zH = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
+         CH = arguments.length > 9 ? arguments[9] : void 0,
+         EH = arguments.length > 10 ? arguments[10] : void 0;
+       if (hH._areMiscDirty) {
+         hH.LOGARITHMICDEPTH = LH, hH.POINTSIZE = AH, hH.FOG = rH && function(HH, BH) {
+           return BH.fogEnabled && HH.applyFog && 0 !== BH.fogMode
+         }(HH, BH), hH.NONUNIFORMSCALING = HH.nonUniformScaling, hH.ALPHATEST = SH, hH.DECAL_AFTER_DETAIL = tH, hH.USE_VERTEX_PULLING = zH, hH.RIGHT_HANDED = BH.useRightHandedSystem;
+         const XH = zH ? CH?.geometry?.getIndexBuffer() : null,
+           GH = !!CH && CH.isUnIndexed;
+         hH.VERTEX_PULLING_USE_INDEX_BUFFER = !!XH && !GH, hH.VERTEX_PULLING_INDEX_BUFFER_32BITS = !(!XH || GH) && XH.is32Bits, hH.VERTEXOUTPUT_INVARIANT = !!EH
```

#### 189. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L4147-L4162` → after: `L1931-L1938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R1931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L1931-L1938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L1931-L1938) · [Before (L4147-L4162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L4147-L4162)

```diff
-     function NY() {
-       if (MJ) return XJ;
-       MJ = 1;
-       let VV = AY();
-       class eV extends VV {
-         constructor(VV) {
-           VV && "undefined" !== typeof VV.value && "string" !== typeof VV.value && (VV = {
-             ...VV,
-             value: String(VV.value)
-           }), super(VV), this.type = "decl"
-         }
-         get variable() {
-           return this.prop.startsWith("--") || "$" === this.prop[0]
-         }
-       }
-       return XJ = eV, eV.default = eV, XJ
+     function lH(HH, BH, LH) {
+       let AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+       if (!HH.lightsEnabled || AH) return !0;
+       const rH = BH.lightSources,
+         SH = Math.min(rH.length, LH);
+       for (let hH = 0; hH < SH; hH++)
+         if (!rH[hH].areLightTexturesReady()) return !1;
+       return !0
```

#### 190. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L4165-L4184` → after: `L1941-L1973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R1941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L1941-L1973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L1941-L1973) · [Before (L4165-L4184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L4165-L4184)

```diff
-     function XY() {
-       if (GJ) return zJ;
-       GJ = 1;
-       return zJ = {
-         nanoid: function() {
-           let VV = "",
-             eV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 21;
-           for (; eV--;) VV += "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict" [64 * Math.random() | 0];
-           return VV
-         },
-         customAlphabet: function(VV) {
-           let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 21;
-           return function() {
-             let xV = "",
-               JV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV;
-             for (; JV--;) xV += VV[Math.random() * VV.length | 0];
- ... (4 more removed lines; see GitHub link above)
+     function KH(HH, BH, LH, rH) {
+       let SH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4,
+         hH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+       if (!LH._areLightsDirty) return LH._needNormals;
+       const tH = SH;
+       SH = function(HH, BH) {
+         const LH = HH.Iu().getCaps().maxUniformBuffersPerShaderStage;
+         if (null == LH) return BH;
+         const AH = Math.max(LH - OH, 1);
+         return Math.min(BH, AH)
+       }(HH, SH);
+       let zH = 0;
+       const CH = {
+         needNormals: LH._needNormals,
+         needRebuild: !1,
+         lightmapMode: !1,
+ ... (17 more added lines; see GitHub link above)
```

#### 191. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L4187-L4263` → after: `L1976-L2010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R1976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L1976-L2010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L1976-L2010) · [Before (L4187-L4263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L4187-L4263)

```diff
-     function MY() {
-       if (RJ) return WJ;
-       RJ = 1;
-       let {
-         SourceMapConsumer: VV,
-         SourceMapGenerator: eV
-       } = bJ, {
-         existsSync: xV,
-         readFileSync: JV
-       } = bJ, {
-         dirname: YV,
-         join: UV
-       } = bJ;
-       class yV {
-         constructor(VV, eV) {
-           if (!1 === eV.map) return;
- ... (61 more removed lines; see GitHub link above)
+     function cH(HH, BH, LH) {
+       let AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+         rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 8,
+         SH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+       if (BH && tH.e.ReflectionTextureEnabled) {
+         if (!BH.isReadyOrNotBlocking()) return !1;
+         LH._needNormals = !0, LH.REFLECTION = !0, LH.GAMMAREFLECTION = BH.gammaSpace, LH.RGBDREFLECTION = BH.isRGBD, LH.LODINREFLECTIONALPHA = BH.lodLevelInAlpha, LH.LINEARSPECULARREFLECTION = BH.linearSpecularLOD, LH.USEIRRADIANCEMAP = !1, LH.LODBASEDMICROSFURACE = HH.Iu().getCa … [truncated]
+         const hH = HH.Iu();
+         switch (AH && rH > 0 ? (LH.NUM_SAMPLES = "" + rH, hH._features.needTypeSuffixInShaderConstants && (LH.NUM_SAMPLES = LH.NUM_SAMPLES + "u"), LH.REALTIME_FILTERING = !0, HH.iblCdfGenerator && (LH.IBL_CDF_FILTERING = !0)) : LH.REALTIME_FILTERING = !1, LH.INVERTCUBICMAP = 6 == … [truncated]
+           case 0:
+             LH.REFLECTIONMAP_EXPLICIT = !0;
+             break;
+           case 2:
+             LH.REFLECTIONMAP_PLANAR = !0;
+             break;
+           case 4:
+ ... (19 more added lines; see GitHub link above)
```

#### 192. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L4265-L4266` → after: `L2012-L2014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R2012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L2012-L2014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L2012-L2014) · [Before (L4265-L4266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L4265-L4266)

```diff
-       }
-       return WJ = yV, yV.default = yV, WJ
+         5 !== BH.coordinatesMode && (BH.irradianceTexture ? (LH.USEIRRADIANCEMAP = !0, LH.USESPHERICALFROMREFLECTIONMAP = !1, LH.USESPHERICALINVERTEX = !1, BH.irradianceTexture._dominantDirection ? LH.USE_IRRADIANCE_DOMINANT_DIRECTION = !0 : LH.USE_IRRADIANCE_DOMINANT_DIRECTION = … [truncated]
+       } else LH.REFLECTION = !1, LH.REFLECTIONMAP_3D = !1, LH.REFLECTIONMAP_SPHERICAL = !1, LH.REFLECTIONMAP_PLANAR = !1, LH.REFLECTIONMAP_CUBIC = !1, LH.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, LH.REFLECTIONMAP_PROJECTION = !1, LH.REFLECTIONMAP_SKYBOX = !1, LH.REFLECTIONMAP_EXPLICIT  … [truncated]
+       return !0
```

#### 193. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L4269-L4403` → after: `L2017-L2032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R2017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L2017-L2032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L2017-L2032) · [Before (L4269-L4403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L4269-L4403)

```diff
-     function zY() {
-       if (DJ) return gJ;
-       DJ = 1;
-       let {
-         SourceMapConsumer: VV,
-         SourceMapGenerator: eV
-       } = bJ, {
-         fileURLToPath: xV,
-         pathToFileURL: JV
-       } = bJ, {
-         isAbsolute: YV,
-         resolve: UV
-       } = bJ, {
-         nanoid: yV
-       } = XY(), pV = bJ, QV = jJ(), nV = MY(), wV = Symbol("fromOffsetCache"), ZV = Boolean(VV && eV), vV = Boolean(UV && YV);
-       class rV {
- ... (119 more removed lines; see GitHub link above)
+     function eH(HH, BH, LH, AH, rH, hH, tH) {
+       switch (tH.needNormals = !0, void 0 === rH["LIGHT" + AH] && (tH.needRebuild = !0), rH["LIGHT" + AH] = !0, rH["SPOTLIGHT" + AH] = !1, rH["HEMILIGHT" + AH] = !1, rH["POINTLIGHT" + AH] = !1, rH["DIRLIGHT" + AH] = !1, rH["AREALIGHT" + AH] = !1, rH["CLUSTLIGHT" + AH] = !1, LH.pr … [truncated]
+         case SH.e.FALLOFF_GLTF:
+           rH["LIGHT_FALLOFF_GLTF" + AH] = !0;
+           break;
+         case SH.e.FALLOFF_PHYSICAL:
+           rH["LIGHT_FALLOFF_PHYSICAL" + AH] = !0;
+           break;
+         case SH.e.FALLOFF_STANDARD:
+           rH["LIGHT_FALLOFF_STANDARD" + AH] = !0
+       }
+       if (hH && !LH.specular.equalsFloats(0, 0, 0) && (tH.specularEnabled = !0), rH["SHADOW" + AH] = !1, rH["SHADOWCSM" + AH] = !1, rH["SHADOWCSMDEBUG" + AH] = !1, rH["SHADOWCSMNUM_CASCADES" + AH] = !1, rH["SHADOWCSMUSESHADOWMAXZ" + AH] = !1, rH["SHADOWCSMNOBLEND" + AH] = !1, rH[ … [truncated]
+         const BH = LH.getShadowGenerator(HH.activeCamera) ?? LH.getShadowGenerator();
+         if (BH) {
+           const HH = BH.getShadowMap();
+           HH && HH.renderList && HH.renderList.length > 0 && (tH.shadowEnabled = !0, BH.prepareDefines(rH, AH))
```

#### 194. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L4406` → after: `L2035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R2035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L2035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L2035) · [Before (L4406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L4406)

```diff
-       return gJ = rV, rV.default = rV, pV && pV.registerInput && pV.registerInput(rV), gJ
+       LH.lightmapMode != SH.e.LIGHTMAP_DEFAULT ? (tH.lightmapMode = !0, rH["LIGHTMAPEXCLUDED" + AH] = !0, rH["LIGHTMAPNOSPECULAR" + AH] = LH.lightmapMode == SH.e.LIGHTMAP_SHADOWSONLY) : (rH["LIGHTMAPEXCLUDED" + AH] = !1, rH["LIGHTMAPNOSPECULAR" + AH] = !1)
```

#### 195. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L4409-L4576` → after: `L2038-L2048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R2038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L2038-L2048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L2038-L2048) · [Before (L4409-L4576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L4409-L4576)

```diff
-     function GY() {
-       if (CJ) return iJ;
-       CJ = 1;
-       let {
-         SourceMapConsumer: VV,
-         SourceMapGenerator: eV
-       } = bJ, {
-         dirname: xV,
-         relative: JV,
-         resolve: YV,
-         sep: UV
-       } = bJ, {
-         pathToFileURL: yV
-       } = bJ, pV = zY(), QV = Boolean(VV && eV), nV = Boolean(xV && YV && JV && UV);
-       return iJ = class {
-         constructor(VV, eV, xV, JV) {
- ... (152 more removed lines; see GitHub link above)
+     function qH(HH, BH, LH, AH, rH) {
+       let SH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
+         tH = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+         zH = function(HH, BH) {
+           let LH = !1;
+           if (HH.activeCamera) {
+             const AH = BH.CAMERA_ORTHOGRAPHIC ? 1 : 0,
+               rH = BH.CAMERA_PERSPECTIVE ? 1 : 0,
+               SH = 1 === HH.activeCamera.mode ? 1 : 0,
+               hH = 0 === HH.activeCamera.mode ? 1 : 0;
+             (AH ^ SH || rH ^ hH) && (BH.CAMERA_ORTHOGRAPHIC = 1 === SH, BH.CAMERA_PERSPECTIVE = 1 === hH, LH = !0)
```

#### 196. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L4578-L4587` → after: `L2050-L2052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R2050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L2050-L2052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L2050-L2052) · [Before (L4578-L4587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L4578-L4587)

```diff
-           throw new Error("`map.absolute` option is not available in this PostCSS build")
-         }
-         toUrl(VV) {
-           let eV = this.memoizedURLs.get(VV);
-           if (eV) return eV;
-           "\\" === UV && (VV = VV.replace(/\\/g, "/"));
-           let xV = encodeURI(VV).replace(/[#?]/g, encodeURIComponent);
-           return this.memoizedURLs.set(VV, xV), xV
-         }
-       }
+           return LH
+         }(HH, AH);
+       !1 !== SH && (zH = (0, hH.h)(LH, HH, AH)), AH.DEPTHPREPASS !== !BH.getColorWrite() && (AH.DEPTHPREPASS = !AH.DEPTHPREPASS, zH = !0), AH.INSTANCES !== rH && (AH.INSTANCES = rH, zH = !0), AH.THIN_INSTANCES !== tH && (AH.THIN_INSTANCES = tH, zH = !0), zH && AH.markAsUnprocesse … [truncated]
```

#### 197. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L4590-L4597` → after: `L2059-L2109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R2059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L2059-L2109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L2059-L2109) · [Before (L4590-L4597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L4590-L4597)

```diff
-     function WY() {
-       if (oJ) return aJ;
-       oJ = 1;
-       let VV = AY();
-       class eV extends VV {
-         constructor(VV) {
-           super(VV), this.type = "comment"
-         }
+     function nH(HH, BH, LH, rH) {
+       let SH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
+         hH = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
+         tH = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
+       if (!BH._areAttributesDirty && BH._needNormals === BH._normals && BH._needUVs === BH._uvs) return !1;
+       BH._normals = BH._needNormals, BH._uvs = BH._needUVs, BH.NORMAL = BH._needNormals && HH.isVerticesDataPresent("normal"), BH._needNormals && HH.isVerticesDataPresent("tangent") && (BH.TANGENT = !0);
+       for (let AH = 1; AH <= 6; ++AH) BH["UV" + AH] = !!BH._needUVs && HH.isVerticesDataPresent(`uv${1===AH?"":AH}`);
+       if (LH) {
+         const LH = HH.useVertexColors && HH.isVerticesDataPresent("color");
+         BH.VERTEXCOLOR = LH, BH.VERTEXALPHA = HH.hasVertexAlpha && LH && hH
+       }
+       return HH.isVerticesDataPresent("instanceColor") && (HH.ESH || HH.hasThinInstances) && (BH.INSTANCESCOLOR = !0), rH && function(HH, BH) {
+         if (HH.useBones && HH.computeBonesUsingShaders && HH.skeleton) {
+           BH.NUM_BONE_INFLUENCERS = HH.numBoneInfluencers;
+           const LH = void 0 !== BH.BONETEXTURE;
+           if (HH.skeleton.isUsingTextureForMatrices && LH) BH.BONETEXTURE = !0;
+ ... (35 more added lines; see GitHub link above)
```

#### 198. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L4602-L4611` → after: `L2113-L2117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R2113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L2113-L2117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L2113-L2117) · [Before (L4602-L4611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L4602-L4611)

```diff
-     function RY() {
-       if (hJ) return cJ;
-       hJ = 1;
-       let VV, eV, xV, JV, {
-           isClean: YV,
-           my: UV
-         } = FY(),
-         yV = NY(),
-         pV = WY(),
-         QV = AY();
+     function DH(HH, BH, LH) {
+       const AH = BH.ORDER_INDEPENDENT_TRANSPARENCY,
+         rH = BH.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;
+       BH.ORDER_INDEPENDENT_TRANSPARENCY = HH.useOrderIndependentTransparency && LH, BH.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !HH.Iu().getCaps().textureFloatLinearFiltering, AH === BH.ORDER_INDEPENDENT_TRANSPARENCY && rH === BH.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || BH.markAsU … [truncated]
+     }
```

#### 199. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L4613-L4614` → after: `L2119-L2178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R2119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L2119-L2178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L2119-L2178) · [Before (L4613-L4614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L4613-L4614)

```diff
-       function nV(VV) {
-         return VV.map((VV => (VV.nodes && (VV.nodes = nV(VV.nodes)), delete VV.source, VV)))
+     function wH(HH, BH, LH) {
+       const AH = BH.PREPASS;
+       if (!BH._arePrePassDirty) return;
+       const rH = [{
+         type: 1,
+         define: "PREPASS_POSITION",
+         index: "PREPASS_POSITION_INDEX"
+       }, {
+         type: 9,
+         define: "PREPASS_LOCAL_POSITION",
+         index: "PREPASS_LOCAL_POSITION_INDEX"
+       }, {
+         type: 2,
+         define: "PREPASS_VELOCITY",
+         index: "PREPASS_VELOCITY_INDEX"
+       }, {
+ ... (44 more added lines; see GitHub link above)
```

#### 200. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L4617-L4794` → after: `L2183-L2190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R2183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L2183-L2190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L2183-L2190) · [Before (L4617-L4794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L4617-L4794)

```diff
-       function wV(VV) {
-         if (VV[YV] = !1, VV.proxyOf.nodes)
-           for (let eV of VV.proxyOf.nodes) wV(eV)
-       }
-       class ZV extends QV {
-         append() {
-           for (var VV = arguments.length, eV = new Array(VV), xV = 0; xV < VV; xV++) eV[xV] = arguments[xV];
-           for (let JV of eV) {
-             let VV = this.normalize(JV, this.last);
-             for (let eV of VV) this.proxyOf.nodes.push(eV)
-           }
-           return this.markDirty(), this
-         }
-         cleanRaws(VV) {
-           if (super.cleanRaws(VV), this.nodes)
-             for (let eV of this.nodes) eV.cleanRaws(VV)
- ... (162 more removed lines; see GitHub link above)
+     function ZH(HH, BH, LH, AH) {
+       let rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
+         SH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         hH = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+         tH = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
+         zH = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
+         CH = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
+       rH && rH.push("Light" + HH), SH || (BH.push("vLightData" + HH, "vLightDiffuse" + HH, "vLightSpecular" + HH, "vLightDirection" + HH, "vLightWidth" + HH, "vLightHeight" + HH, "vLightFalloff" + HH, "vLightGround" + HH, "vSliceData" + HH, "vSliceRanges" + HH, "lightMatrix" + HH … [truncated]
```

#### 201. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L4797-L4817` → after: `L2193-L2196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R2193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L2193-L2196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L2193-L2196) · [Before (L4797-L4817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L4797-L4817)

```diff
-     function gY() {
-       if (LJ) return lJ;
-       LJ = 1;
-       let VV, eV, xV = RY();
-       class JV extends xV {
-         constructor(VV) {
-           super({
-             type: "document",
-             ...VV
-           }), this.nodes || (this.nodes = [])
-         }
-         toResult() {
-           let xV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
-           return new VV(new eV, this, xV).stringify()
-         }
-       }
- ... (5 more removed lines; see GitHub link above)
+     function dH(HH, BH, LH) {
+       const AH = ["vReflectionMicrosurfaceInfos", "vReflectionDominantDirection", "reflectionMatrix", "vReflectionInfos", "vReflectionPosition", "vReflectionSize", "vReflectionColor", "vReflectionFilteringInfo"];
+       LH && AH.push("vSphericalX", "vSphericalY", "vSphericalZ", "vSphericalXX_ZZ", "vSphericalYY_ZZ", "vSphericalZZ", "vSphericalXY", "vSphericalYZ", "vSphericalZX", "vSphericalL00", "vSphericalL1_1", "vSphericalL10", "vSphericalL11", "vSphericalL2_2", "vSphericalL2_1", "vSpheri … [truncated]
+       BH.push("reflectionSampler", "reflectionSamplerLow", "reflectionSamplerHigh", "irradianceSampler", "icdfSampler")
```

#### 202. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L4820-L4826` → after: `L2199-L2207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R2199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L2199-L2207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L2199-L2207) · [Before (L4820-L4826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L4820-L4826)

```diff
-     function DY() {
-       if (mJ) return fJ;
-       mJ = 1;
-       let VV = {};
-       return fJ = function(eV) {
-         VV[eV] || (VV[eV] = !0, "undefined" !== typeof console && console.warn && console.warn(eV))
-       }
+     function aH(HH, BH, LH) {
+       let AH, rH, SH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
+         hH = null;
+       if (HH.uniformsNames) {
+         const tH = HH;
+         AH = tH.uniformsNames, rH = tH.uniformBuffersNames, BH = tH.samplers, LH = tH.defines, SH = tH.maxSimultaneousLights || 0, hH = tH.shaderLanguage ?? null
+       } else AH = HH, BH || (BH = []);
+       for (let tH = 0; tH < SH && LH["LIGHT" + tH]; tH++) ZH(tH, AH, BH, LH["PROJECTEDLIGHTTEXTURE" + tH], rH, !1, LH["IESLIGHTTEXTURE" + tH], LH["CLUSTLIGHT" + tH], LH["RECTAREALIGHTEMISSIONTEXTURE" + tH], 1 === hH);
+       LH.NUM_MORPH_INFLUENCERS && (AH.push("morphTargetInfluences"), AH.push("morphTargetCount")), LH.BAKED_VERTEX_ANIMATION_TEXTURE && (AH.push("bakedVertexAnimationSettings"), AH.push("bakedVertexAnimationTextureSizeInverted"), AH.push("bakedVertexAnimationTime"), BH.push("bake … [truncated]
```

#### 203. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L4829-L4847` → after: `L2210-L2259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R2210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L2210-L2259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L2210-L2259) · [Before (L4829-L4847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L4829-L4847)

```diff
-     function iY() {
-       if (HJ) return KJ;
-       HJ = 1;
-       class VV {
-         constructor(VV) {
-           let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-           if (this.type = "warning", this.text = VV, eV.node && eV.node.source) {
-             let VV = eV.node.rangeBy(eV);
-             this.line = VV.start.line, this.column = VV.start.column, this.endLine = VV.end.line, this.endColumn = VV.end.column
-           }
-           for (let xV in eV) this[xV] = eV[xV]
-         }
-         toString() {
-           return this.node ? this.node.error(this.text, {
-             index: this.index,
-             plugin: this.plugin,
- ... (3 more removed lines; see GitHub link above)
+     function sH(HH) {
+       let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+         LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+         AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+         rH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
+         SH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+       HH.addUniform("vReflectionInfos", 2), HH.addUniform("reflectionMatrix", 16), BH && HH.addUniform("vReflectionMicrosurfaceInfos", 3), LH && (HH.addUniform("vReflectionPosition", 3), HH.addUniform("vReflectionSize", 3)), AH && (HH.addUniform("vReflectionFilteringInfo", 2), HH … [truncated]
+     }
+   },
+   41634: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => SH
+     });
+     var AH = LH(37963),
+       rH = LH(41573);
+     class SH extends rH.c {
+ ... (34 more added lines; see GitHub link above)
```

#### 204. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L4852-L4873` → after: `L2270-L2294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R2270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L2270-L2294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L2270-L2294) · [Before (L4852-L4873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L4852-L4873)

```diff
-     function CY() {
-       if (sJ) return uJ;
-       sJ = 1;
-       let VV = iY();
-       class eV {
-         constructor(VV, eV, xV) {
-           this.processor = VV, this.messages = [], this.root = eV, this.opts = xV, this.css = void 0, this.map = void 0
-         }
-         toString() {
-           return this.css
-         }
-         warn(eV) {
-           let xV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-           xV.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (xV.plugin = this.lastPlugin.postcssPlugin);
-           let JV = new VV(eV, xV);
-           return this.messages.push(JV), JV
- ... (6 more removed lines; see GitHub link above)
+     function rH(HH) {
+       const BH = HH.getVertexBuffers();
+       if (!BH) return null;
+       let LH = AH.get(HH);
+       if (LH) {
+         let HH = !1;
+         for (const AH in BH)
+           if (!LH.has(AH)) {
+             HH = !0;
+             break
+           } if (!HH) return LH
+       } else LH = new Map, AH.set(HH, LH);
+       for (const AH in BH) {
+         const HH = BH[AH];
+         if (HH) {
+           const BH = HH.byteOffset,
+ ... (9 more added lines; see GitHub link above)
```

#### 205. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L4876` → after: `L2297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R2297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L2297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L2297) · [Before (L4876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L4876)

```diff
-       return uJ = eV, eV.default = eV, uJ
+       return LH
```

#### 206. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L4879-L4894` → after: `L2300-L2304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R2300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L2300-L2304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L2300-L2304) · [Before (L4879-L4894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L4879-L4894)

```diff
-     function aY() {
-       if (OJ) return dJ;
-       OJ = 1;
-       let VV = RY();
-       class eV extends VV {
-         constructor(VV) {
-           super(VV), this.type = "atrule"
-         }
-         append() {
-           return this.proxyOf.nodes || (this.nodes = []), super.append(...arguments)
-         }
-         prepend() {
-           return this.proxyOf.nodes || (this.nodes = []), super.prepend(...arguments)
-         }
-       }
-       return dJ = eV, eV.default = eV, VV.registerAtRule(eV), dJ
+     function SH(HH, BH) {
+       BH.forEach(((BH, LH) => {
+         const AH = `vp_${LH}_info`;
+         HH.setFloat4(AH, BH.offset, BH.stride, BH.type, BH.normalized ? 1 : 0)
+       }))
```

#### 207. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L4897-L4920` → after: `L2371-L2377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R2371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L2371-L2377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L2371-L2377) · [Before (L4897-L4920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L4897-L4920)

```diff
-     function oY() {
-       if (eY) return VY;
-       eY = 1;
-       let VV, eV, xV = RY();
-       class JV extends xV {
-         constructor(VV) {
-           super(VV), this.type = "root", this.nodes || (this.nodes = [])
-         }
-         normalize(VV, eV, xV) {
-           let JV = super.normalize(VV);
-           if (eV)
-             if ("prepend" === xV) this.nodes.length > 1 ? eV.raws.before = this.nodes[1].raws.before : delete eV.raws.before;
-             else if (this.first !== eV)
-             for (let YV of JV) YV.raws.before = eV.raws.before;
-           return JV
-         }
- ... (8 more removed lines; see GitHub link above)
+     function tH(HH, BH, LH, AH) {
+       let SH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
+       const tH = new rH.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
+         zH = new rH.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
+       return hH.extractMinAndMaxIndexed(HH, BH, LH, AH, tH, zH), SH && (tH.x -= tH.x * SH.x + SH.y, tH.y -= tH.y * SH.x + SH.y, tH.z -= tH.z * SH.x + SH.y, zH.x += zH.x * SH.x + SH.y, zH.y += zH.y * SH.x + SH.y, zH.z += zH.z * SH.x + SH.y), {
+         minimum: tH,
+         maximum: zH
```

#### 208. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L4929-L4947` → after: `L2381-L2389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R2381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L2381-L2389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L2381-L2389) · [Before (L4929-L4947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L4929-L4947)

```diff
-     function cY() {
-       if (JY) return xY;
-       JY = 1;
-       let VV = {
-         comma: eV => VV.split(eV, [","], !0),
-         space: eV => VV.split(eV, [" ", "\n", "\t"]),
-         split(VV, eV, xV) {
-           let JV = [],
-             YV = "",
-             UV = !1,
-             yV = 0,
-             pV = !1,
-             QV = "",
-             nV = !1;
-           for (let wV of VV) nV ? nV = !1 : "\\" === wV ? nV = !0 : pV ? wV === QV && (pV = !1) : '"' === wV || "'" === wV ? (pV = !0, QV = wV) : "(" === wV ? yV += 1 : ")" === wV ? yV > 0 && (yV -= 1) : 0 === yV && eV.includes(wV) && (UV = !0), UV ? ("" !== YV && JV.push(YV.trim … [truncated]
-           return (xV || "" !== YV) && JV.push(YV.trim()), JV
- ... (3 more removed lines; see GitHub link above)
+     function zH(HH, BH, LH) {
+       let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
+         SH = arguments.length > 4 ? arguments[4] : void 0;
+       const tH = new rH.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
+         zH = new rH.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
+       return SH || (SH = 3), hH.extractMinAndMax(HH, BH, LH, SH, tH, zH), AH && (tH.x -= tH.x * AH.x + AH.y, tH.y -= tH.y * AH.x + AH.y, tH.z -= tH.z * AH.x + AH.y, zH.x += zH.x * AH.x + AH.y, zH.y += zH.y * AH.x + AH.y, zH.z += zH.z * AH.x + AH.y), {
+         minimum: tH,
+         maximum: zH
+       }
```

#### 209. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L4949-L4960` → after: `L2391-L2443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R2391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L2391-L2443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L2391-L2443) · [Before (L4949-L4960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L4949-L4960)

```diff
- 
-     function hY() {
-       if (UY) return YY;
-       UY = 1;
-       let VV = RY(),
-         eV = cY();
-       class xV extends VV {
-         constructor(VV) {
-           super(VV), this.type = "rule", this.nodes || (this.nodes = [])
-         }
-         get selectors() {
-           return eV.comma(this.selector)
+   },
+   41578: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => EH
+     });
+     var AH, rH = LH(41427),
+       SH = LH(41585),
+       hH = LH(41588),
+       tH = LH(41602),
+       zH = LH(41609),
+       CH = LH(41169);
+     class EH {
+       get materialDefines() {
+         const HH = this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.defines : this._getDrawWrapper()?.defines;
+         return "string" === typeof HH ? null : HH
+       }
+ ... (37 more added lines; see GitHub link above)
```

#### 210. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L4962-L4965` → after: `L2445-L2483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R2445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L2445-L2483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L2445-L2483) · [Before (L4962-L4965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L4962-L4965)

```diff
-         set selectors(VV) {
-           let eV = this.selector ? this.selector.match(/,\s*/) : null,
-             xV = eV ? eV[0] : "," + this.raw("between", "beforeOpen");
-           this.selector = VV.join(xV)
+         this._drawWrappers = []
+       }
+       static AddToMesh(HH, BH, LH, AH, rH, SH, hH) {
+         return new EH(HH, BH, LH, AH, rH, SH, hH, !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7])
+       }
+       constructor(HH, BH, LH, AH, rH, SH, hH) {
+         let tH = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
+           zH = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8];
+         this.materialIndex = HH, this.verticesStart = BH, this.verticesCount = LH, this.indexStart = AH, this.indexCount = rH, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastCollide … [truncated]
+       }
+       get IsGlobal() {
+         return 0 === this.verticesStart && this.verticesCount === this._mesh.getTotalVertices() && 0 === this.indexStart && this.indexCount === this._mesh.getTotalIndices()
+       }
+       jF() {
+         return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.jF() : this._boundingInfo
+       }
+ ... (23 more added lines; see GitHub link above)
```

#### 211. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L4968-L5116` → after: `L2487-L2500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R2487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L2487-L2500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L2487-L2500) · [Before (L4968-L5116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L4968-L5116)

```diff
-       return YY = xV, xV.default = xV, VV.registerRule(xV), YY
-     }
- 
-     function lY() {
-       if (pY) return yY;
-       pY = 1;
-       let VV = NY(),
-         eV = function() {
-           if (IJ) return SJ;
-           IJ = 1;
-           const VV = "'".charCodeAt(0),
-             eV = '"'.charCodeAt(0),
-             xV = "\\".charCodeAt(0),
-             JV = "/".charCodeAt(0),
-             YV = "\n".charCodeAt(0),
-             UV = " ".charCodeAt(0),
- ... (133 more removed lines; see GitHub link above)
+       _isMultiMaterial(HH) {
+         return void 0 !== HH.getSubMaterial
+       }
+       refreshBoundingInfo() {
+         let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
+         if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.geometry) return this;
+         if (HH || (HH = this._renderingMesh.getVerticesData(rH.i.PositionKind)), !HH) return this._boundingInfo = this._mesh.jF(), this;
+         const BH = this._renderingMesh.vrH();
+         let LH;
+         if (0 === this.indexStart && this.indexCount === BH.length) {
+           const HH = this._renderingMesh.jF();
+           LH = {
+             minimum: HH.minimum.clone(),
+             maximum: HH.maximum.clone()
```

#### 212. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L5119-L9460` → after: `L2534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R2534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L2534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L2534) · [Before (L5119-L9460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L5119-L9460)

```diff
-         atrule(VV) {
-           let eV, xV, YV, UV = new JV;
-           UV.name = VV[1].slice(1), "" === UV.name && this.unnamedAtrule(UV, VV), this.init(UV, VV[2]);
-           let yV = !1,
-             pV = !1,
-             QV = [],
-             nV = [];
-           for (; !this.tokenizer.endOfFile();) {
-             if (eV = (VV = this.tokenizer.nextToken())[0], "(" === eV || "[" === eV ? nV.push("(" === eV ? ")" : "]") : "{" === eV && nV.length > 0 ? nV.push("}") : eV === nV[nV.length - 1] && nV.pop(), 0 === nV.length) {
-               if (";" === eV) {
-                 UV.source.end = this.YF(VV[2]), UV.source.end.offset++, this.semicolon = !0;
-                 break
-               }
-               if ("{" === eV) {
-                 pV = !0;
-                 break
- ... (4326 more removed lines; see GitHub link above)
+         return this._linesIndexBuffer
```

#### 213. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L9462-L9491` → after: `L2536-L2538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R2536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L2536-L2538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L2536-L2538) · [Before (L9462-L9491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L9462-L9491)

```diff
-     }
- 
-     function op(VV, eV) {
-       return "string" == typeof(VV = "string" == typeof VV && eV && eV[VV] ? eV[VV] : VV) ? {
-         type: VV
-       } : "function" == typeof VV ? {
-         type: VV.name,
-         exec: VV
-       } : VV
-     }
- 
-     function cp(VV) {
-       return function(eV) {
-         return VV === eV
-       }
-     }
- ... (14 more removed lines; see GitHub link above)
+       canIntersects(HH) {
+         const BH = this.jF();
+         return !!BH && HH.intersectsBox(BH.boundingBox)
```

#### 214. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L9493-L9869` → after: `L2540-L2562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R2540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L2540-L2562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L2540-L2562) · [Before (L9493-L9869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L9493-L9869)

```diff
-     }
- 
-     function Lp(VV, eV, xV) {
-       var JV = eV,
-         YV = !1;
-       return [VV.filter((function(VV) {
-         if ("xstate.assign" === VV.type) {
-           YV = !0;
-           var eV = Object.assign({}, JV);
-           return "function" == typeof VV.assignment ? eV = VV.assignment(JV, xV) : Object.keys(VV.assignment).forEach((function(YV) {
-             eV[YV] = "function" == typeof VV.assignment[YV] ? VV.assignment[YV](JV, xV) : VV.assignment[YV]
-           })), JV = eV, !1
-         }
-         return !0
-       })), JV, YV]
-     }
- ... (361 more removed lines; see GitHub link above)
+       intersects(HH, BH, LH, AH, rH) {
+         const SH = this.eu();
+         if (!SH) return null;
+         let hH = 3,
+           tH = !1;
+         switch (SH.fillMode) {
+           case 3:
+           case 5:
+           case 6:
+           case 8:
+             return null;
+           case 7:
+             hH = 1, tH = !0
+         }
+         return 4 === SH.fillMode ? LH.length ? this._intersectLines(HH, BH, LH, this._mesh.intersectionThreshold, AH) : this._intersectUnIndexedLines(HH, BH, LH, this._mesh.intersectionThreshold, AH) : !LH.length && this._mesh._unIndexed ? this._intersectUnIndexedTriangles(HH, BH … [truncated]
+       }
+ ... (7 more added lines; see GitHub link above)
```

#### 215. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L9873-L10143` → after: `L2566-L2572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R2566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L2566-L2572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L2566-L2572) · [Before (L9873-L10143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L9873-L10143)

```diff
-     }
-     const dp = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject"];
-     async function Op(VV) {
-       let {
-         mutation: eV,
-         target: xV,
-         type: JV,
-         imageMap: YV,
-         errorHandler: UV
-       } = VV;
-       try {
-         const VV = function(VV, eV) {
-           try {
-             return eV === Ry.WebGL ? VV.getContext("webgl") || VV.getContext("experimental-webgl") : VV.getContext("webgl2")
-           } catch (xV) {
-             return null
- ... (255 more removed lines; see GitHub link above)
+       _intersectUnIndexedLines(HH, BH, LH, AH, rH) {
+         let hH = null;
+         for (let tH = this.verticesStart; tH < this.verticesStart + this.verticesCount; tH += 2) {
+           const LH = BH[tH],
+             zH = BH[tH + 1],
+             CH = HH.intersectionSegment(LH, zH, AH);
+           if (!(CH < 0) && ((rH || !hH || CH < hH.distance) && (hH = new SH.b(null, null, CH), hH.faceId = tH / 2, rH))) break
```

#### 216. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L10145-L10486` → after: `L2574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R2574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L2574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L2574) · [Before (L10145-L10486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L10145-L10486)

```diff
-       },
-       UQ = "[replayer]",
-       yQ = {
-         duration: 500,
-         lineCap: "round",
-         lineWidth: 3,
-         strokeStyle: "red"
-       };
- 
-     function pQ(VV) {
-       return VV.type == My.IncrementalSnapshot && (VV.data.source == zy.TouchMove || VV.data.source == zy.MouseInteraction && VV.data.type == Gy.TouchStart)
-     }
-     class QQ {
-       constructor(VV, eV) {
-         var xV = this;
-         if (UV(this, "wrapper"), UV(this, "iframe"), UV(this, "UNSAFE_replayCanvas", !1), UV(this, "service"), UV(this, "speedService"), UV(this, "config"), UV(this, "usingVirtualDom", !1), UV(this, "virtualDom", new TU), UV(this, "mouse"), UV(this, "mouseTail", null), UV(this, " … [truncated]
- ... (326 more removed lines; see GitHub link above)
+         return hH
```

#### 217. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L10488-L10573` → after: `L2576-L2586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R2576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L2576-L2586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L2576-L2586) · [Before (L10488-L10573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L10488-L10573)

```diff
-       addEvent(VV) {
-         const eV = this.config.unpackFn ? this.config.unpackFn(VV) : VV;
-         pQ(eV) && this.mouse.classList.add("touch-device"), Promise.resolve().then((() => this.service.send({
-           type: "ADD_EVENT",
-           payload: {
-             event: eV
-           }
-         })))
-       }
-       enableInteract() {
-         this.iframe.setAttribute("scrolling", "auto"), this.iframe.style.pointerEvents = "auto"
-       }
-       disableInteract() {
-         this.iframe.setAttribute("scrolling", "no"), this.iframe.style.pointerEvents = "none"
-       }
-       resetCache() {
- ... (70 more removed lines; see GitHub link above)
+       _intersectTriangles(HH, BH, LH, AH, rH, SH, hH) {
+         let tH = null,
+           zH = -1;
+         for (let CH = this.indexStart; CH < this.indexStart + this.indexCount - (3 - AH); CH += AH) {
+           zH++;
+           const AH = LH[CH],
+             EH = LH[CH + 1],
+             XH = LH[CH + 2];
+           if (rH && 4294967295 === XH) {
+             CH += 2;
+             continue
```

#### 218. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L10575-L10606` → after: `L2588-L2596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R2588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L2588-L2596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L2588-L2596) · [Before (L10575-L10606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L10575-L10606)

```diff
-       }
-       attachDocumentToIframe(VV, eV) {
-         const xV = this.usingVirtualDom ? this.virtualDom.mirror : this.mirror,
-           JV = [],
-           YV = new Set,
-           UV = (VV, UV) => {
-             "DIALOG" === VV.nodeName && YV.add(VV), this.collectIframeAndAttachDocument(JV, VV);
-             const yV = xV.getMeta(VV);
-             if ((null == yV ? void 0 : yV.type) === iy.Element && "HTML" === (null == yV ? void 0 : yV.tagName.toUpperCase())) {
-               const {
-                 documentElement: VV,
-                 head: xV
-               } = eV.contentDocument;
-               this.insertStyleRules(VV, xV)
-             }
-             if (!this.usingVirtualDom)
- ... (16 more removed lines; see GitHub link above)
+           const GH = BH[AH],
+             YH = BH[EH],
+             uH = BH[XH];
+           if (!GH || !YH || !uH) continue;
+           if (hH && !hH(GH, YH, uH, HH, AH, EH, XH)) continue;
+           const QH = HH.intersectsTriangle(GH, YH, uH);
+           if (QH) {
+             if (QH.distance < 0) continue;
+             if ((SH || !tH || QH.distance < tH.distance) && (tH = QH, tH.faceId = zH, SH)) break
```

#### 219. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L10662-L10684` → after: `L2601-L2611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R2601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L2601-L2611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L2601-L2611) · [Before (L10662-L10684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L10662-L10684)

```diff
-       async deserializeAndPreloadCanvasEvents(VV, eV) {
-         if (!this.canvasEventMap.has(eV)) {
-           const xV = {
-             isUnchanged: !0
-           };
-           if ("commands" in VV) {
-             const JV = await Promise.all(VV.commands.map((async VV => {
-               const eV = await Promise.all(VV.args.map(Ip(this.imageMap, null, xV)));
-               return {
-                 ...VV,
-                 args: eV
-               }
-             })));
-             !1 === xV.isUnchanged && this.canvasEventMap.set(eV, {
-               ...VV,
-               commands: JV
- ... (7 more removed lines; see GitHub link above)
+       _intersectUnIndexedTriangles(HH, BH, LH, AH, rH) {
+         let SH = null;
+         for (let hH = this.verticesStart; hH < this.verticesStart + this.verticesCount; hH += 3) {
+           const LH = BH[hH],
+             tH = BH[hH + 1],
+             zH = BH[hH + 2];
+           if (rH && !rH(LH, tH, zH, HH, -1, -1, -1)) continue;
+           const CH = HH.intersectsTriangle(LH, tH, zH);
+           if (CH) {
+             if (CH.distance < 0) continue;
+             if ((AH || !SH || CH.distance < SH.distance) && (SH = CH, SH.faceId = hH / 3, AH)) break
```

#### 220. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L10688-L11077` → after: `L2616-L2617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R2616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L2616-L2617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L2616-L2617) · [Before (L10688-L11077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L10688-L11077)

```diff
-       applyIncremental(VV, eV) {
-         var xV, JV, YV;
-         const {
-           data: UV
-         } = VV;
-         switch (UV.source) {
-           case zy.Mutation:
-             try {
-               this.applyMutation(UV, eV)
-             } catch (yV) {
-               this.warn(`Exception in mutation ${yV.message||yV}`, UV)
-             }
-             break;
-           case zy.Drag:
-           case zy.TouchMove:
-           case zy.MouseMove:
- ... (374 more removed lines; see GitHub link above)
+       _rebuild() {
+         this._linesIndexBuffer && (this._linesIndexBuffer = null)
```

#### 221. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L11079-L11165` → after: `L2619-L2624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R2619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L2619-L2624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L2619-L2624) · [Before (L11079-L11165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L11079-L11165)

```diff
-       applyStyleSheetMutation(VV) {
-         var eV;
-         let xV = null;
-         VV.styleId ? xV = this.styleMirror.getStyle(VV.styleId) : VV.id && (xV = (null == (eV = this.mirror.rD(VV.id)) ? void 0 : eV.sheet) || null), xV && (VV.source === zy.StyleSheetRule ? this.applyStyleSheetRule(VV, xV) : VV.source === zy.StyleDeclaration && this.applyStyleDe … [truncated]
-       }
-       applyStyleSheetRule(VV, eV) {
-         var xV, JV, YV, UV;
-         if (null == (xV = VV.adds) || xV.forEach((VV => {
-             let {
-               rule: xV,
-               index: JV
-             } = VV;
-             try {
-               if (Array.isArray(JV)) {
-                 const {
-                   positions: VV,
- ... (71 more removed lines; see GitHub link above)
+       clone(HH, BH) {
+         const LH = new EH(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, HH, BH, !1);
+         if (!this.IsGlobal) {
+           const HH = this.jF();
+           if (!HH) return LH;
+           LH._boundingInfo = new hH.d(HH.minimum, HH.maximum)
```

#### 222. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L11167-L11238` → after: `L2626-L2644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R2626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L2626-L2644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L2626-L2644) · [Before (L11167-L11238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L11167-L11238)

```diff
-         if (pV) {
-           const {
-             node: JV,
-             mutation: YV
-           } = pV;
-           eV.insertBefore(JV, xV.nextSibling), delete VV[YV.node.id], delete this.legacy_missingNodeRetryMap[YV.node.id], (YV.previousId || YV.nextId) && this.legacy_resolveMissingNode(VV, eV, JV, YV)
-         }
-       }
-       moveAndHover(VV, eV, xV, JV, YV) {
-         const UV = this.mirror.rD(xV);
-         if (!UV) return this.debugNodeNotFound(YV, xV);
-         const yV = By(UV, this.iframe),
-           pV = VV * yV.absoluteScale + yV.x,
-           QV = eV * yV.absoluteScale + yV.y;
-         this.mouse.style.left = `${pV}px`, this.mouse.style.top = `${QV}px`, JV || this.drawMouseTail({
-           x: pV,
- ... (56 more removed lines; see GitHub link above)
+         return LH
+       }
+       dispose() {
+         let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         this._linesIndexBuffer && (this._mesh.yN().Iu()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
+         const BH = this._mesh.jU.indexOf(this);
+         this._mesh.jU.splice(BH, 1), this.resetDrawCache(void 0, HH)
+       }
+       getClassName() {
+         return "SubMesh"
+       }
+       static CreateFromIndices(HH, BH, LH, AH, rH) {
+         let SH = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
+           hH = Number.MAX_VALUE,
+           tH = -Number.MAX_VALUE;
+         const zH = (rH || AH).vrH();
+ ... (3 more added lines; see GitHub link above)
```

#### 223. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L11241-L11248` → after: `L2648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R2648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L2648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/291.js#L2648) · [Before (L11241-L11248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/291.js#L11241-L11248)

```diff
-     }
-     const {
-       addCustomEvent: nQ
-     } = Mp, {
-       freezePage: wQ
-     } = Mp, {
-       takeFullSnapshot: ZQ
-     } = Mp
+     }(AH = EH.prototype).projectToRef ?? (AH.projectToRef = (0, CH.f)("SubMesh", "projectToRef"))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/292.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/292.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76)

#### 1. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L5-L27` → after: `L4-L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L4-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/292.js#L4-L365) · [Before (L5-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/292.js#L5-L27)

```diff
-   41779: (VV, eV, xV) => {
-     xV.r(eV), xV.d(eV, {
-       FirebaseError: () => JV.c,
-       SDK_VERSION: () => JV.e,
-       _DEFAULT_ENTRY_NAME: () => JV.g,
-       jYV: () => JV.i,
-       _addOrOverwriteComponent: () => JV.l,
-       _apps: () => JV.m,
-       _clearComponents: () => JV.n,
-       _components: () => JV.o,
-       _getProvider: () => JV.r,
-       _registerComponent: () => JV.v,
-       _removeServiceInstance: () => JV.y,
-       deleteApp: () => JV.B,
-       getApp: () => JV.J,
-       getApps: () => JV.F,
- ... (7 more removed lines; see GitHub link above)
+   45065: (HH, BH, LH) => {
+     LH.d(BH, {
+       c: () => AH
+     });
+     class AH {}
+     AH.AUTOSAMPLERSUFFIX = "Sampler", AH.DISABLEUA = "#define DISABLE_UNIFORMITY_ANALYSIS", AH.ALPHA_DISABLE = 0, AH.ALPHA_ADD = 1, AH.ALPHA_COMBINE = 2, AH.ALPHA_SUBTRACT = 3, AH.ALPHA_MULTIPLY = 4, AH.ALPHA_MAXIMIZED = 5, AH.ALPHA_ONEONE = 6, AH.ALPHA_PREMULTIPLIED = 7, AH.ALPH … [truncated]
+   },
+   45047: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => zH
+     });
+     var AH = LH(41290),
+       rH = LH(41297),
+       SH = LH(37963),
+       hH = LH(41535),
+       tH = LH(41504);
+ ... (346 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/293.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/293.js` (63 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663)

#### 1. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L5` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L4) · [Before (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L5)

```diff
-   41794: (VV, eV, xV) => {
+   41769: (HH, BH, LH) => {
```

#### 2. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L7-L21` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L6-L7) · [Before (L7-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L7-L21)

```diff
-       A: () => ZV,
-       E: () => wV,
-       I: () => vV,
-       L: () => hV,
-       P: () => kV,
-       Q: () => EV,
-       S: () => NV,
-       W: () => jV,
-       Z: () => qV,
-       _: () => bV,
-       bb: () => BV,
-       d: () => rV,
-       db: () => GV,
-       g: () => PV,
-       hb: () => zV,
+       e: () => VH,
+       f: () => TH,
```

#### 3. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L23-L30` → after: `L9-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L9-L11) · [Before (L23-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L23-L30)

```diff
-       jb: () => tV,
-       m: () => FV,
-       o: () => pV,
-       s: () => yV,
-       u: () => cV,
-       w: () => RV,
-       x: () => XV,
-       z: () => WV
+       n: () => PH,
+       q: () => xH,
+       r: () => MH
```

#### 4. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L32-L126` → after: `L13-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L13-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L13-L45) · [Before (L32-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L32-L126)

```diff
-     const JV = function(VV) {
-         const eV = [];
-         let xV = 0;
-         for (let JV = 0; JV < VV.length; JV++) {
-           let YV = VV.charCodeAt(JV);
-           YV < 128 ? eV[xV++] = YV : YV < 2048 ? (eV[xV++] = YV >> 6 | 192, eV[xV++] = 63 & YV | 128) : 55296 === (64512 & YV) && JV + 1 < VV.length && 56320 === (64512 & VV.charCodeAt(JV + 1)) ? (YV = 65536 + ((1023 & YV) << 10) + (1023 & VV.charCodeAt(++JV)), eV[xV++] = YV >> 1 … [truncated]
-         }
-         return eV
-       },
-       YV = {
-         byteToCharMap_: null,
-         charToByteMap_: null,
-         byteToCharMapWebSafe_: null,
-         charToByteMapWebSafe_: null,
-         ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
-         get ENCODED_VALS() {
- ... (79 more removed lines; see GitHub link above)
+     var AH = LH(41319),
+       rH = LH(41383),
+       SH = LH(37963),
+       hH = LH(41427),
+       tH = LH(41777),
+       zH = LH(41636),
+       CH = LH(41339),
+       EH = LH(41634),
+       XH = LH(37989),
+       GH = LH(41623),
+       YH = LH(41618),
+       uH = LH(41653),
+       QH = LH(38012);
+     const WH = {
+       effect: null,
+       subMesh: null
+ ... (17 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L133-L189` → after: `L48-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L48-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L48-L49) · [Before (L133-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L133-L189)

```diff
-     }
-     const yV = function(VV) {
-         return function(VV) {
-           const eV = JV(VV);
-           return YV.encodeByteArray(eV, !0)
-         }(VV).replace(/\./g, "")
-       },
-       pV = function(VV) {
-         try {
-           return YV.decodeString(VV, !0)
-         } catch (eV) {
-           console.error("base64Decode failed: ", eV)
-         }
-         return null
-       };
-     const QV = () => function() {
- ... (41 more removed lines; see GitHub link above)
+       get shaderPath() {
+         return this._shaderPath
```

#### 6. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L191-L194` → after: `L51-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L51-L52) · [Before (L191-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L191-L194)

```diff
-       wrapCallback(VV) {
-         return (eV, xV) => {
-           eV ? this.reject(eV) : this.resolve(xV), "function" === typeof VV && (this.promise.catch((() => {})), 1 === VV.length ? VV(eV) : VV(eV, xV))
-         }
+       set shaderPath(HH) {
+         this._shaderPath = HH
```

#### 7. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L196-L224` → after: `L54-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L54-L55) · [Before (L196-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L196-L224)

```diff
-     }
- 
-     function kV() {
-       return "undefined" !== typeof navigator && "string" === typeof navigator.userAgent ? navigator.userAgent : ""
-     }
- 
-     function bV() {
-       return "undefined" !== typeof window && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(kV())
-     }
- 
-     function EV() {
-       const VV = "object" === typeof chrome ? chrome.runtime : "object" === typeof browser ? browser.runtime : void 0;
-       return "object" === typeof VV && void 0 !== VV.id
-     }
- 
-     function BV() {
- ... (13 more removed lines; see GitHub link above)
+       get options() {
+         return this._options
```

#### 8. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L226-L253` → after: `L57-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L57-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L57-L58) · [Before (L226-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L226-L253)

```diff
-     }
- 
-     function tV() {
-       return new Promise(((VV, eV) => {
-         try {
-           let xV = !0;
-           const JV = "validate-browser-context-for-indexeddb-analytics-module",
-             YV = self.indexedDB.open(JV);
-           YV.onsuccess = () => {
-             YV.result.close(), xV || self.indexedDB.deleteDatabase(JV), VV(!0)
-           }, YV.onupgradeneeded = () => {
-             xV = !1
-           }, YV.onerror = () => {
-             var VV;
-             eV((null === (VV = YV.error) || void 0 === VV ? void 0 : VV.message) || "")
-           }
- ... (12 more removed lines; see GitHub link above)
+       get isMultiview() {
+         return this._multiview
```

#### 9. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L255-L258` → after: `L60-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L60-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L60-L61) · [Before (L255-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L255-L258)

```diff
-     }
-     class PV {
-       constructor(VV, eV, xV) {
-         this.service = VV, this.serviceName = eV, this.errors = xV
+       getClassName() {
+         return "ShaderMaterial"
```

#### 10. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L260-L271` → after: `L63-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L63-L64) · [Before (L260-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L260-L271)

```diff
-       create(VV) {
-         const eV = (arguments.length <= 1 ? void 0 : arguments[1]) || {},
-           xV = `${this.service}/${VV}`,
-           JV = this.errors[VV],
-           YV = JV ? function(VV, eV) {
-             return VV.replace(AV, ((VV, xV) => {
-               const JV = eV[xV];
-               return null != JV ? String(JV) : `<${xV}?>`
-             }))
-           }(JV, eV) : "Error",
-           UV = `${this.serviceName}: ${YV} (${xV}).`;
-         return new TV(xV, UV, eV)
+       needAlphaBlending() {
+         return this.alpha < 1 || this._options.needAlphaBlending
```

#### 11. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L273-L292` → after: `L66-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L66-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L66-L67) · [Before (L273-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L273-L292)

```diff
-     }
-     const AV = /\{\$([^}]+)}/g;
- 
-     function NV(VV) {
-       for (const eV in VV)
-         if (Object.prototype.hasOwnProperty.call(VV, eV)) return !1;
-       return !0
-     }
- 
-     function XV(VV, eV) {
-       if (VV === eV) return !0;
-       const xV = Object.keys(VV),
-         JV = Object.keys(eV);
-       for (const YV of xV) {
-         if (!JV.includes(YV)) return !1;
-         const xV = VV[YV],
- ... (4 more removed lines; see GitHub link above)
+       needAlphaTesting() {
+         return this._options.needAlphaTesting
```

#### 12. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L294-L338` → after: `L69-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L69-L70) · [Before (L294-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L294-L338)

```diff
-       for (const YV of JV)
-         if (!xV.includes(YV)) return !1;
-       return !0
-     }
- 
-     function MV(VV) {
-       return null !== VV && "object" === typeof VV
-     }
- 
-     function zV(VV) {
-       const eV = [];
-       for (const [xV, JV] of Object.entries(VV)) Array.isArray(JV) ? JV.forEach((VV => {
-         eV.push(encodeURIComponent(xV) + "=" + encodeURIComponent(VV))
-       })) : eV.push(encodeURIComponent(xV) + "=" + encodeURIComponent(JV));
-       return eV.length ? "&" + eV.join("&") : ""
-     }
- ... (29 more removed lines; see GitHub link above)
+       _checkUniform(HH) {
+         -1 === this._options.uniforms.indexOf(HH) && this._options.uniforms.push(HH)
```

#### 13. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L340-L343` → after: `L72-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L72-L73) · [Before (L340-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L340-L343)

```diff
-       next(VV) {
-         this.forEachObserver((eV => {
-           eV.next(VV)
-         }))
+       setTexture(HH, BH) {
+         return -1 === this._options.samplers.indexOf(HH) && this._options.samplers.push(HH), this._textures[HH] = BH, this
```

#### 14. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L345-L348` → after: `L75-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L75-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L75-L76) · [Before (L345-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L345-L348)

```diff
-       error(VV) {
-         this.forEachObserver((eV => {
-           eV.error(VV)
-         })), this.close(VV)
+       setInternalTexture(HH, BH) {
+         return -1 === this._options.samplers.indexOf(HH) && this._options.samplers.push(HH), this._internalTextures[HH] = BH, this
```

#### 15. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L350-L353` → after: `L78-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L78-L79) · [Before (L350-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L350-L353)

```diff
-       complete() {
-         this.forEachObserver((VV => {
-           VV.complete()
-         })), this.close()
+       removeTexture(HH) {
+         delete this._textures[HH]
```

#### 16. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L355-L373` → after: `L81-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L81-L82) · [Before (L355-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L355-L373)

```diff
-       subscribe(VV, eV, xV) {
-         let JV;
-         if (void 0 === VV && void 0 === eV && void 0 === xV) throw new Error("Missing Observer.");
-         JV = function(VV, eV) {
-           if ("object" !== typeof VV || null === VV) return !1;
-           for (const xV of eV)
-             if (xV in VV && "function" === typeof VV[xV]) return !0;
-           return !1
-         }(VV, ["next", "error", "complete"]) ? VV : {
-           next: VV,
-           error: eV,
-           complete: xV
-         }, void 0 === JV.next && (JV.next = DV), void 0 === JV.error && (JV.error = DV), void 0 === JV.complete && (JV.complete = DV);
-         const YV = this.unsubscribeOne.bind(this, this.observers.length);
-         return this.finalized && this.task.then((() => {
-           try {
- ... (3 more removed lines; see GitHub link above)
+       setTextureArray(HH, BH) {
+         return -1 === this._options.samplers.indexOf(HH) && this._options.samplers.push(HH), this._checkUniform(HH), this._textureArrays[HH] = BH, this
```

#### 17. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L375-L376` → after: `L84-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L84-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L84-L85) · [Before (L375-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L375-L376)

```diff
-       unsubscribeOne(VV) {
-         void 0 !== this.observers && void 0 !== this.observers[VV] && (delete this.observers[VV], this.observerCount -= 1, 0 === this.observerCount && void 0 !== this.onNoObservers && this.onNoObservers(this))
+       setExternalTexture(HH, BH) {
+         return -1 === this._options.externalTextures.indexOf(HH) && this._options.externalTextures.push(HH), this._externalTextures[HH] = BH, this
```

#### 18. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L378-L380` → after: `L87-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L87-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L87-L88) · [Before (L378-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L378-L380)

```diff
-       forEachObserver(VV) {
-         if (!this.finalized)
-           for (let eV = 0; eV < this.observers.length; eV++) this.sendOne(eV, VV)
+       setFloat(HH, BH) {
+         return this._checkUniform(HH), this._floats[HH] = BH, this
```

#### 19. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L382-L389` → after: `L90-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L90-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L90-L91) · [Before (L382-L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L382-L389)

```diff
-       sendOne(VV, eV) {
-         this.task.then((() => {
-           if (void 0 !== this.observers && void 0 !== this.observers[VV]) try {
-             eV(this.observers[VV])
-           } catch (xV) {
-             "undefined" !== typeof console && console.error && console.error(xV)
-           }
-         }))
+       setInt(HH, BH) {
+         return this._checkUniform(HH), this._ints[HH] = BH, this
```

#### 20. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L391-L394` → after: `L93-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L93-L94) · [Before (L391-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L391-L394)

```diff
-       close(VV) {
-         this.finalized || (this.finalized = !0, void 0 !== VV && (this.finalError = VV), this.task.then((() => {
-           this.observers = void 0, this.onNoObservers = void 0
-         })))
+       setUInt(HH, BH) {
+         return this._checkUniform(HH), this._uints[HH] = BH, this
```

#### 21. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L396-L468` → after: `L96-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L96-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L96-L97) · [Before (L396-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L396-L468)

```diff
-     }
- 
-     function DV() {}
-     const iV = 1e3,
-       CV = 2,
-       aV = 144e5,
-       oV = .5;
- 
-     function cV(VV) {
-       let eV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : CV;
-       const xV = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : iV) * Math.pow(eV, VV),
-         JV = Math.round(oV * xV * (Math.random() - .5) * 2);
-       return Math.min(aV, xV + JV)
-     }
- 
-     function hV(VV) {
- ... (57 more removed lines; see GitHub link above)
+       setFloats(HH, BH) {
+         return this._checkUniform(HH), this._floatsArrays[HH] = BH, this
```

#### 22. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L470-L541` → after: `L99-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L99-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L99-L100) · [Before (L470-L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L470-L541)

```diff
-     }
- 
-     function bV(VV) {
-       return "function" === typeof VV ? kV(VV) : (VV instanceof IDBTransaction && function(VV) {
-         if (nV.has(VV)) return;
-         const eV = new Promise(((eV, xV) => {
-           const JV = () => {
-               VV.removeEventListener("complete", YV), VV.removeEventListener("error", UV), VV.removeEventListener("abort", UV)
-             },
-             YV = () => {
-               eV(), JV()
-             },
-             UV = () => {
-               xV(VV.error || new DOMException("AbortError", "AbortError")), JV()
-             };
-           VV.addEventListener("complete", YV), VV.addEventListener("error", UV), VV.addEventListener("abort", UV)
- ... (56 more removed lines; see GitHub link above)
+       setColor3(HH, BH) {
+         return this._checkUniform(HH), this._colors3[HH] = BH, this
```

#### 23. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L543-L553` → after: `L102-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L102-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L102-L103) · [Before (L543-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L543-L553)

```diff
-       getPlatformInfoString() {
-         return this.container.getProviders().map((VV => {
-           if (function(VV) {
-               const eV = VV.getComponent();
-               return "VERSION" === (null === eV || void 0 === eV ? void 0 : eV.type)
-             }(VV)) {
-             const eV = VV.getImmediate();
-             return `${eV.library}/${eV.version}`
-           }
-           return null
-         })).filter((VV => VV)).join(" ")
+       setColor3Array(HH, BH) {
+         return this._checkUniform(HH), this._colors3Arrays[HH] = BH.reduce(((HH, BH) => (HH.push(BH.r, BH.g, BH.b), HH)), []), this
```

#### 24. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L555-L619` → after: `L105-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L105-L106) · [Before (L555-L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L555-L619)

```diff
-     }
-     const PV = "@firebase/app",
-       AV = "0.9.13",
-       NV = new YV.g("@firebase/app"),
-       XV = "@firebase/app-compat",
-       MV = "@firebase/analytics-compat",
-       zV = "@firebase/analytics",
-       GV = "@firebase/app-check-compat",
-       WV = "@firebase/app-check",
-       RV = "@firebase/auth",
-       gV = "@firebase/auth-compat",
-       DV = "@firebase/database",
-       iV = "@firebase/database-compat",
-       CV = "@firebase/functions",
-       aV = "@firebase/functions-compat",
-       oV = "@firebase/installations",
- ... (49 more removed lines; see GitHub link above)
+       setColor4(HH, BH) {
+         return this._checkUniform(HH), this._colors4[HH] = BH, this
```

#### 25. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L621-L666` → after: `L108-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L108-L109) · [Before (L621-L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L621-L666)

```diff
-     }
- 
-     function Je(VV, eV) {
-       VV.container.addOrOverwriteComponent(eV)
-     }
- 
-     function Ye(VV) {
-       const eV = VV.name;
-       if (ee.has(eV)) return NV.debug(`There were multiple attempts to register component ${eV}.`), !1;
-       ee.set(eV, VV);
-       for (const xV of Ve.values()) xe(xV, VV);
-       return !0
-     }
- 
-     function Ue(VV, eV) {
-       const xV = VV.container.getProvider("heartbeat").getImmediate({
- ... (30 more removed lines; see GitHub link above)
+       setColor4Array(HH, BH) {
+         return this._checkUniform(HH), this._colors4Arrays[HH] = BH.reduce(((HH, BH) => (HH.push(BH.r, BH.g, BH.b, BH.a), HH)), []), this
```

#### 26. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L668-L669` → after: `L111-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L111-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L111-L112) · [Before (L668-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L668-L669)

```diff
-       get automaticDataCollectionEnabled() {
-         return this.checkDestroyed(), this._automaticDataCollectionEnabled
+       setVector2(HH, BH) {
+         return this._checkUniform(HH), this._vectors2[HH] = BH, this
```

#### 27. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L671-L672` → after: `L114-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L114-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L114-L115) · [Before (L671-L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L671-L672)

```diff
-       set automaticDataCollectionEnabled(VV) {
-         this.checkDestroyed(), this._automaticDataCollectionEnabled = VV
+       setVector3(HH, BH) {
+         return this._checkUniform(HH), this._vectors3[HH] = BH, this
```

#### 28. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L674-L675` → after: `L117-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L117-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L117-L118) · [Before (L674-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L674-L675)

```diff
-       get name() {
-         return this.checkDestroyed(), this._name
+       setVector4(HH, BH) {
+         return this._checkUniform(HH), this._vectors4[HH] = BH, this
```

#### 29. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L677-L678` → after: `L120-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L120-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L120-L121) · [Before (L677-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L677-L678)

```diff
-       get options() {
-         return this.checkDestroyed(), this._options
+       setQuaternion(HH, BH) {
+         return this._checkUniform(HH), this._quaternions[HH] = BH, this
```

#### 30. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L680-L681` → after: `L123-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L123-L124) · [Before (L680-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L680-L681)

```diff
-       get config() {
-         return this.checkDestroyed(), this._config
+       setQuaternionArray(HH, BH) {
+         return this._checkUniform(HH), this._quaternionsArrays[HH] = BH.reduce(((HH, BH) => (BH.toArray(HH, HH.length), HH)), []), this
```

#### 31. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L683-L684` → after: `L126-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L126-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L126-L127) · [Before (L683-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L683-L684)

```diff
-       get container() {
-         return this._container
+       setMatrix(HH, BH) {
+         return this._checkUniform(HH), this._matrices[HH] = BH, this
```

#### 32. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L686-L687` → after: `L129-L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L129-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L129-L135) · [Before (L686-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L686-L687)

```diff
-       get isDeleted() {
-         return this._isDeleted
+       setMatrices(HH, BH) {
+         this._checkUniform(HH);
+         const LH = new Float32Array(16 * BH.length);
+         for (let AH = 0; AH < BH.length; AH++) {
+           BH[AH].copyToArray(LH, 16 * AH)
+         }
+         return this._matrixArrays[HH] = LH, this
```

#### 33. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L689-L690` → after: `L137-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L137-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L137-L138) · [Before (L689-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L689-L690)

```diff
-       set isDeleted(VV) {
-         this._isDeleted = VV
+       setMatrix3x3(HH, BH) {
+         return this._checkUniform(HH), this._matrices3x3[HH] = BH, this
```

#### 34. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L692-L695` → after: `L140-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L140-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L140-L141) · [Before (L692-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L692-L695)

```diff
-       checkDestroyed() {
-         if (this.isDeleted) throw ne.create("app-deleted", {
-           appName: this._name
-         })
+       setMatrix2x2(HH, BH) {
+         return this._checkUniform(HH), this._matrices2x2[HH] = BH, this
```

#### 35. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L697-L706` → after: `L143-L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L143-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L143-L144) · [Before (L697-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L697-L706)

```diff
-     }
-     const Ze = "9.23.0";
- 
-     function ve(VV) {
-       let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
-         xV = VV;
-       if ("object" !== typeof eV) {
-         eV = {
-           name: eV
-         }
+       setArray2(HH, BH) {
+         return this._checkUniform(HH), this._vectors2Arrays[HH] = BH, this
```

#### 36. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L708-L722` → after: `L146-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L146-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L146-L147) · [Before (L708-L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L708-L722)

```diff
-       const YV = Object.assign({
-           name: dV,
-           automaticDataCollectionEnabled: !1
-         }, eV),
-         yV = YV.name;
-       if ("string" !== typeof yV || !yV) throw ne.create("bad-app-name", {
-         appName: String(yV)
-       });
-       if (xV || (xV = (0, UV.A)()), !xV) throw ne.create("no-options");
-       const pV = Ve.get(yV);
-       if (pV) {
-         if ((0, UV.x)(xV, pV.options) && (0, UV.x)(YV, pV.config)) return pV;
-         throw ne.create("duplicate-app", {
-           appName: yV
-         })
+       setArray3(HH, BH) {
+         return this._checkUniform(HH), this._vectors3Arrays[HH] = BH, this
```

#### 37. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L724-L756` → after: `L149-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L149-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L149-L150) · [Before (L724-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L724-L756)

```diff
-       const QV = new JV.d(yV);
-       for (const JV of ee.values()) QV.WC(JV);
-       const nV = new we(xV, YV, QV);
-       return Ve.set(yV, nV), nV
-     }
- 
-     function re() {
-       let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dV;
-       const eV = Ve.get(VV);
-       if (!eV && VV === dV && (0, UV.A)()) return ve();
-       if (!eV) throw ne.create("no-app", {
-         appName: VV
-       });
-       return eV
-     }
- 
- ... (17 more removed lines; see GitHub link above)
+       setArray4(HH, BH) {
+         return this._checkUniform(HH), this._vectors4Arrays[HH] = BH, this
```

#### 38. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L758-L812` → after: `L152-L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L152-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L152-L153) · [Before (L758-L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L758-L812)

```diff
-       Ye(new JV.e(`${UV}-version`, (() => ({
-         library: UV,
-         version: eV
-       })), "VERSION"))
-     }
- 
-     function Be(VV, eV) {
-       if (null !== VV && "function" !== typeof VV) throw ne.create("invalid-log-argument");
-       (0, YV.n)(VV, eV)
-     }
- 
-     function je(VV) {
-       (0, YV.k)(VV)
-     }
-     const qe = "firebase-heartbeat-store";
-     let te = null;
- ... (39 more removed lines; see GitHub link above)
+       setUniformBuffer(HH, BH) {
+         return -1 === this._options.uniformBuffers.indexOf(HH) && this._options.uniformBuffers.push(HH), this._uniformBuffers[HH] = BH, this
```

#### 39. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L814-L823` → after: `L155-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L155-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L155-L156) · [Before (L814-L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L814-L823)

```diff
-     }
- 
-     function Pe(VV) {
-       return `${VV.name}!${VV.options.appId}`
-     }
-     class Ae {
-       constructor(VV) {
-         this.container = VV, this._heartbeatsCache = null;
-         const eV = this.container.getProvider("app").getImmediate();
-         this.Cb = new Xe(eV), this._heartbeatsCachePromise = this.Cb.read().then((VV => (this._heartbeatsCache = VV, VV)))
+       setTextureSampler(HH, BH) {
+         return -1 === this._options.samplerObjects.indexOf(HH) && this._options.samplerObjects.push(HH), this._textureSamplers[HH] = BH, this
```

#### 40. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L825-L834` → after: `L158-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L158-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L158-L159) · [Before (L825-L834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L825-L834)

```diff
-       async triggerHeartbeat() {
-         const VV = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),
-           eV = Ne();
-         if (null === this._heartbeatsCache && (this._heartbeatsCache = await this._heartbeatsCachePromise), this._heartbeatsCache.lastSentHeartbeatDate !== eV && !this._heartbeatsCache.heartbeats.some((VV => VV.date === eV))) return this._heartbeatsCache.heartbeats.push({
-           date: eV,
-           agent: VV
-         }), this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((VV => {
-           const eV = new Date(VV.date).valueOf();
-           return Date.now() - eV <= 2592e6
-         })), this.Cb.overwrite(this._heartbeatsCache)
+       setStorageBuffer(HH, BH) {
+         return -1 === this._options.storageBuffers.indexOf(HH) && this._options.storageBuffers.push(HH), this._storageBuffers[HH] = BH, this
```

#### 41. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L836-L871` → after: `L161-L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L161-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L161-L164) · [Before (L836-L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L836-L871)

```diff
-       async getHeartbeatsHeader() {
-         if (null === this._heartbeatsCache && await this._heartbeatsCachePromise, null === this._heartbeatsCache || 0 === this._heartbeatsCache.heartbeats.length) return "";
-         const VV = Ne(),
-           {
-             heartbeatsToSend: eV,
-             unsentEntries: xV
-           } = function(VV) {
-             let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1024;
-             const xV = [];
-             let JV = VV.slice();
-             for (const YV of VV) {
-               const VV = xV.find((VV => VV.agent === YV.agent));
-               if (VV) {
-                 if (VV.dates.push(YV.date), Me(xV) > eV) {
-                   VV.dates.pop();
-                   break
- ... (20 more removed lines; see GitHub link above)
+       setDefine(HH, BH) {
+         const LH = HH.trimEnd() + " ",
+           AH = this.options.defines.findIndex((BH => BH === HH || BH.startsWith(LH)));
+         return AH >= 0 && this.options.defines.splice(AH, 1), ("boolean" !== typeof BH || BH) && this.options.defines.push(LH + BH), this
```

#### 42. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L873-L883` → after: `L166-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L166-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L166-L167) · [Before (L873-L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L873-L883)

```diff
-     }
- 
-     function Ne() {
-       return (new Date).toISOString().substring(0, 10)
-     }
-     class Xe {
-       constructor(VV) {
-         this.app = VV, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()
-       }
-       async runIndexedDBEnvironmentCheck() {
-         return !!(0, UV.Z)() && (0, UV.jb)().then((() => !0)).catch((() => !1))
+       isReadyForSubMesh(HH, BH, LH) {
+         return this.isReady(HH, LH, BH)
```

#### 43. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L885-L898` → after: `L169-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L169-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L169-L269) · [Before (L885-L898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L885-L898)

```diff
-       async read() {
-         if (await this._canUseIndexedDBPromise) {
-           return await async function(VV) {
-             try {
-               const eV = await Fe();
-               return await eV.transaction(qe).objectStore(qe).get(Pe(VV))
-             } catch (eV) {
-               if (eV instanceof UV.j) NV.warn(eV.message);
-               else {
-                 const VV = ne.create("idb-get", {
-                   originalErrorMessage: null === eV || void 0 === eV ? void 0 : eV.message
-                 });
-                 NV.warn(VV.message)
-               }
+       isReady(HH, BH, LH) {
+         const AH = LH && this._storeEffectOnSubMeshes;
+         if (this.isFrozen) {
+           const HH = AH ? LH._drawWrapper : this._drawWrapper;
+           if (HH.effect && HH._wasPreviouslyReady && HH._wasPreviouslyUsingInstances === BH) return !0
+         }
+         const SH = this.yN(),
+           tH = SH.Iu(),
+           CH = [],
+           EH = [];
+         let XH = null,
+           QH = this._shaderPath,
+           MH = this._options.uniforms,
+           xH = this._options.uniformBuffers,
+           vH = this._options.samplers;
+         tH.getCaps().multiview && SH.activeCamera && SH.activeCamera.outputRenderTarget && SH.activeCamera.outputRenderTarget.getViewCount() > 1 && (this._multiview = !0, CH.push("#define MULTIVIEW"), -1 !== MH.indexOf("viewProjection") && -1 === MH.indexOf("viewProjectionR") &&  … [truncated]
+ ... (85 more added lines; see GitHub link above)
```

#### 44. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L904-L905` → after: `L316-L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L316-L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L316-L322) · [Before (L904-L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L904-L905)

```diff
-         return {
-           heartbeats: []
+         if (SH && BH && (CH || !this.isFrozen)) {
+           (0, YH.r)(BH, SH), BH.morphTargetManager && BH.morphTargetManager.isUsingTextureForTargets && BH.morphTargetManager._bind(SH);
+           const HH = BH.bakedVertexAnimationManager;
+           if (HH && HH.isEnabled) {
+             const HH = rH ? AH._drawWrapper : this._drawWrapper;
+             BH.bakedVertexAnimationManager?.bind(SH, !!HH._wasPreviouslyUsingInstances)
+           }
```

#### 45. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L907-L915` → after: `L324-L331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L324-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L324-L331) · [Before (L907-L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L907-L915)

```diff
-       }
-       async overwrite(VV) {
-         var eV;
-         if (await this._canUseIndexedDBPromise) {
-           const xV = await this.read();
-           return Te(this.app, {
-             lastSentHeartbeatDate: null !== (eV = VV.lastSentHeartbeatDate) && void 0 !== eV ? eV : xV.lastSentHeartbeatDate,
-             heartbeats: VV.heartbeats
-           })
+         this._afterBind(BH, SH, AH)
+       }
+       getActiveTextures() {
+         const HH = super.getActiveTextures();
+         for (const BH in this._textures) HH.push(this._textures[BH]);
+         for (const BH in this._textureArrays) {
+           const LH = this._textureArrays[BH];
+           for (let BH = 0; BH < LH.length; BH++) HH.push(LH[BH])
```

#### 46. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L918-L925` → after: `L335-L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L335-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L335-L345) · [Before (L918-L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L918-L925)

```diff
-       async add(VV) {
-         var eV;
-         if (await this._canUseIndexedDBPromise) {
-           const xV = await this.read();
-           return Te(this.app, {
-             lastSentHeartbeatDate: null !== (eV = VV.lastSentHeartbeatDate) && void 0 !== eV ? eV : xV.lastSentHeartbeatDate,
-             heartbeats: [...xV.heartbeats, ...VV.heartbeats]
-           })
+       hasTexture(HH) {
+         if (super.hasTexture(HH)) return !0;
+         for (const LH in this._textures)
+           if (this._textures[LH] === HH) return !0;
+         const BH = HH.getInternalTexture();
+         for (const LH in this._internalTextures)
+           if (this._internalTextures[LH] === BH) return !0;
+         for (const LH in this._textureArrays) {
+           const BH = this._textureArrays[LH];
+           for (let LH = 0; LH < BH.length; LH++)
+             if (BH[LH] === HH) return !0
```

#### 47. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L928-L965` → after: `L349-L389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L349-L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L349-L389) · [Before (L928-L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L928-L965)

```diff
-     }
- 
-     function Me(VV) {
-       return (0, UV.s)(JSON.stringify({
-         version: 2,
-         heartbeats: VV
-       })).length
-     }
-     var ze;
-     ze = "", Ye(new JV.e("platform-logger", (VV => new TV(VV)), "PRIVATE")), Ye(new JV.e("heartbeat", (VV => new Ae(VV)), "PRIVATE")), Ee(PV, AV, ze), Ee(PV, AV, "esm2017"), Ee("fire-js", "")
-   },
-   41787: (VV, eV, xV) => {
-     xV.d(eV, {
-       d: () => pV,
-       e: () => YV
-     });
- ... (22 more removed lines; see GitHub link above)
+       clone(HH) {
+         const BH = AH.c.Clone((() => new MH(HH, this.yN(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
+         BH.name = HH, BH.id = HH, "object" === typeof BH._shaderPath && (BH._shaderPath = {
+           ...BH._shaderPath
+         }), this._options = {
+           ...this._options
+         };
+         const LH = Object.keys(this._options);
+         for (const AH of LH) {
+           const HH = this._options[AH];
+           Array.isArray(HH) && (this._options[AH] = HH.slice(0))
+         }
+         this.stencil.copyTo(BH.stencil);
+         for (const AH in this._textures) BH.setTexture(AH, this._textures[AH]);
+         for (const AH in this._internalTextures) BH.setInternalTexture(AH, this._internalTextures[AH]);
+         for (const AH in this._textureArrays) BH.setTextureArray(AH, this._textureArrays[AH]);
+ ... (25 more added lines; see GitHub link above)
```

#### 48. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L967-L976` → after: `L391-L399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L391-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L391-L399) · [Before (L967-L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L967-L976)

```diff
-       get(VV) {
-         const eV = this.normalizeInstanceIdentifier(VV);
-         if (!this.instancesDeferred.has(eV)) {
-           const VV = new JV.d;
-           if (this.instancesDeferred.set(eV, VV), this.isInitialized(eV) || this.shouldAutoInitialize()) try {
-             const xV = this.getOrInitializeService({
-               instanceIdentifier: eV
-             });
-             xV && VV.resolve(xV)
-           } catch (xV) {}
+       dispose(HH, BH, LH) {
+         if (BH) {
+           let HH;
+           for (HH in this._textures) this._textures[HH].dispose();
+           for (HH in this._internalTextures) this._internalTextures[HH].dispose();
+           for (HH in this._textureArrays) {
+             const BH = this._textureArrays[HH];
+             for (let HH = 0; HH < BH.length; HH++) BH[HH].dispose()
+           }
```

#### 49. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L978` → after: `L401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L401) · [Before (L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L978)

```diff
-         return this.instancesDeferred.get(eV).promise
+         this._textures = {}, this._internalTextures = {}, super.dispose(HH, BH, LH)
```

#### 50. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L980-L986` → after: `L403-L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L403-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L403-L410) · [Before (L980-L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L980-L986)

```diff
-       getImmediate(VV) {
-         var eV;
-         const xV = this.normalizeInstanceIdentifier(null === VV || void 0 === VV ? void 0 : VV.identifier),
-           JV = null !== (eV = null === VV || void 0 === VV ? void 0 : VV.optional) && void 0 !== eV && eV;
-         if (!this.isInitialized(xV) && !this.shouldAutoInitialize()) {
-           if (JV) return null;
-           throw Error(`Service ${this.name} is not available`)
+       serialize() {
+         const HH = AH.c.Serialize(this);
+         let BH;
+         for (BH in HH.customType = "BABYLON.ShaderMaterial", HH.uniqueId = this.uniqueId, HH.options = this._options, HH.shaderPath = this._shaderPath, HH.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, HH.stencil = this.stencil.serialize(), HH.textures = {}, this._texture … [truncated]
+         for (BH in HH.textureArrays = {}, this._textureArrays) {
+           HH.textureArrays[BH] = [];
+           const LH = this._textureArrays[BH];
+           for (let AH = 0; AH < LH.length; AH++) HH.textureArrays[BH].push(LH[AH].serialize())
```

#### 51. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L988-L994` → after: `L412-L418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L412-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L412-L418) · [Before (L988-L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L988-L994)

```diff
-         try {
-           return this.getOrInitializeService({
-             instanceIdentifier: xV
-           })
-         } catch (YV) {
-           if (JV) return null;
-           throw YV
+         for (BH in HH.ints = {}, this._ints) HH.ints[BH] = this._ints[BH];
+         for (BH in HH.uints = {}, this._uints) HH.uints[BH] = this._uints[BH];
+         for (BH in HH.floats = {}, this._floats) HH.floats[BH] = this._floats[BH];
+         for (BH in HH.floatsArrays = {}, this._floatsArrays) HH.floatsArrays[BH] = this._floatsArrays[BH];
+         for (BH in HH.colors3 = {}, this._colors3) {
+           const LH = this._colors3[BH];
+           HH.colors3[BH] = [LH.r, LH.g, LH.b]
```

#### 52. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L996-L1019` → after: `L420-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L420-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L420-L423) · [Before (L996-L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L996-L1019)

```diff
-       }
-       getComponent() {
-         return this.component
-       }
-       setComponent(VV) {
-         if (VV.name !== this.name) throw Error(`Mismatching Component ${VV.name} for Provider ${this.name}.`);
-         if (this.component) throw Error(`Component for ${this.name} has already been provided`);
-         if (this.component = VV, this.shouldAutoInitialize()) {
-           if (function(VV) {
-               return "EAGER" === VV.instantiationMode
-             }(VV)) try {
-             this.getOrInitializeService({
-               instanceIdentifier: UV
-             })
-           } catch (eV) {}
-           for (const [VV, xV] of this.instancesDeferred.entries()) {
- ... (8 more removed lines; see GitHub link above)
+         for (BH in HH.colors3Arrays = {}, this._colors3Arrays) HH.colors3Arrays[BH] = this._colors3Arrays[BH];
+         for (BH in HH.colors4 = {}, this._colors4) {
+           const LH = this._colors4[BH];
+           HH.colors4[BH] = [LH.r, LH.g, LH.b, LH.a]
```

#### 53. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1021-L1053` → after: `L425-L428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L425-L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L425-L428) · [Before (L1021-L1053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L1021-L1053)

```diff
-       }
-       clearInstance() {
-         let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : UV;
-         this.instancesDeferred.delete(VV), this.instancesOptions.delete(VV), this.instances.delete(VV)
-       }
-       async delete() {
-         const VV = Array.from(this.instances.values());
-         await Promise.all([...VV.filter((VV => "INTERNAL" in VV)).map((VV => VV.INTERNAL.delete())), ...VV.filter((VV => "_delete" in VV)).map((VV => VV._delete()))])
-       }
-       isComponentSet() {
-         return null != this.component
-       }
-       isInitialized() {
-         let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : UV;
-         return this.instances.has(VV)
-       }
- ... (17 more removed lines; see GitHub link above)
+         for (BH in HH.colors4Arrays = {}, this._colors4Arrays) HH.colors4Arrays[BH] = this._colors4Arrays[BH];
+         for (BH in HH.vectors2 = {}, this._vectors2) {
+           const LH = this._vectors2[BH];
+           HH.vectors2[BH] = [LH.x, LH.y]
```

#### 54. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1055-L1064` → after: `L430-L432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L430-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L430-L432) · [Before (L1055-L1064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L1055-L1064)

```diff
-         return JV
-       }
-       oZ(VV, eV) {
-         var xV;
-         const JV = this.normalizeInstanceIdentifier(eV),
-           YV = null !== (xV = this.onInitCallbacks.get(JV)) && void 0 !== xV ? xV : new Set;
-         YV.add(VV), this.onInitCallbacks.set(JV, YV);
-         const UV = this.instances.get(JV);
-         return UV && VV(UV, JV), () => {
-           YV.delete(VV)
+         for (BH in HH.vectors3 = {}, this._vectors3) {
+           const LH = this._vectors3[BH];
+           HH.vectors3[BH] = [LH.x, LH.y, LH.z]
```

#### 55. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1066-L1093` → after: `L434-L447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L434-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L434-L447) · [Before (L1066-L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L1066-L1093)

```diff
-       }
-       invokeOnInitCallbacks(VV, eV) {
-         const xV = this.onInitCallbacks.get(eV);
-         if (xV)
-           for (const YV of xV) try {
-             YV(VV, eV)
-           } catch (JV) {}
-       }
-       getOrInitializeService(VV) {
-         let {
-           instanceIdentifier: eV,
-           options: xV = {}
-         } = VV, JV = this.instances.get(eV);
-         if (!JV && this.component && (JV = this.component.instanceFactory(this.container, {
-             instanceIdentifier: (YV = eV, YV === UV ? void 0 : YV),
-             options: xV
- ... (12 more removed lines; see GitHub link above)
+         for (BH in HH.vectors4 = {}, this._vectors4) {
+           const LH = this._vectors4[BH];
+           HH.vectors4[BH] = [LH.x, LH.y, LH.z, LH.w]
+         }
+         for (BH in HH.quaternions = {}, this._quaternions) HH.quaternions[BH] = this._quaternions[BH].xrH();
+         for (BH in HH.matrices = {}, this._matrices) HH.matrices[BH] = this._matrices[BH].xrH();
+         for (BH in HH.matrixArray = {}, this._matrixArrays) HH.matrixArray[BH] = this._matrixArrays[BH];
+         for (BH in HH.matrices3x3 = {}, this._matrices3x3) HH.matrices3x3[BH] = this._matrices3x3[BH];
+         for (BH in HH.matrices2x2 = {}, this._matrices2x2) HH.matrices2x2[BH] = this._matrices2x2[BH];
+         for (BH in HH.vectors2Arrays = {}, this._vectors2Arrays) HH.vectors2Arrays[BH] = this._vectors2Arrays[BH];
+         for (BH in HH.vectors3Arrays = {}, this._vectors3Arrays) HH.vectors3Arrays[BH] = this._vectors3Arrays[BH];
+         for (BH in HH.vectors4Arrays = {}, this._vectors4Arrays) HH.vectors4Arrays[BH] = this._vectors4Arrays[BH];
+         for (BH in HH.quaternionsArrays = {}, this._quaternionsArrays) HH.quaternionsArrays[BH] = this._quaternionsArrays[BH];
+         return HH
```

#### 56. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1096-L1098` → after: `L450-L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L450-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L450-L471) · [Before (L1096-L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L1096-L1098)

```diff
-     class pV {
-       constructor(VV) {
-         this.name = VV, this.providers = new Map
+ 
+     function xH(HH, BH, LH) {
+       const rH = AH.c.Parse((() => new MH(HH.name, BH, HH.shaderPath, HH.options, HH.storeEffectOnSubMeshes)), HH, BH, LH);
+       let hH;
+       for (hH in HH.stencil && rH.stencil.parse(HH.stencil, BH, LH), HH.textures) rH.setTexture(hH, tH.g.Parse(HH.textures[hH], BH, LH));
+       for (hH in HH.textureArrays) {
+         const AH = HH.textureArrays[hH],
+           SH = [];
+         for (let HH = 0; HH < AH.length; HH++) SH.push(tH.g.Parse(AH[HH], BH, LH));
+         rH.setTextureArray(hH, SH)
+       }
+       for (hH in HH.ints) rH.setInt(hH, HH.ints[hH]);
+       for (hH in HH.uints) rH.setUInt(hH, HH.uints[hH]);
+       for (hH in HH.floats) rH.setFloat(hH, HH.floats[hH]);
+       for (hH in HH.floatsArrays) rH.setFloats(hH, HH.floatsArrays[hH]);
+       for (hH in HH.colors3) {
+ ... (6 more added lines; see GitHub link above)
```

#### 57. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1100-L1103` → after: `L473-L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L473-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L473-L488) · [Before (L1100-L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L1100-L1103)

```diff
-       WC(VV) {
-         const eV = this.getProvider(VV.name);
-         if (eV.isComponentSet()) throw new Error(`Component ${VV.name} has already been registered with ${this.name}`);
-         eV.setComponent(VV)
+       for (hH in HH.colors3Arrays) {
+         const BH = HH.colors3Arrays[hH].reduce(((HH, BH, LH) => (LH % 3 === 0 ? HH.push([BH]) : HH[HH.length - 1].push(BH), HH)), []).map((HH => ({
+           r: HH[0],
+           g: HH[1],
+           b: HH[2]
+         })));
+         rH.setColor3Array(hH, BH)
+       }
+       for (hH in HH.colors4) {
+         const BH = HH.colors4[hH];
+         rH.setColor4(hH, {
+           r: BH[0],
+           g: BH[1],
+           b: BH[2],
+           a: BH[3]
+         })
```

#### 58. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1105-L1106` → after: `L490-L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L490-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L490-L504) · [Before (L1105-L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L1105-L1106)

```diff
-       addOrOverwriteComponent(VV) {
-         this.getProvider(VV.name).isComponentSet() && this.providers.delete(VV.name), this.WC(VV)
+       for (hH in HH.colors4Arrays) {
+         const BH = HH.colors4Arrays[hH].reduce(((HH, BH, LH) => (LH % 4 === 0 ? HH.push([BH]) : HH[HH.length - 1].push(BH), HH)), []).map((HH => ({
+           r: HH[0],
+           g: HH[1],
+           b: HH[2],
+           a: HH[3]
+         })));
+         rH.setColor4Array(hH, BH)
+       }
+       for (hH in HH.vectors2) {
+         const BH = HH.vectors2[hH];
+         rH.setVector2(hH, {
+           x: BH[0],
+           y: BH[1]
+         })
```

#### 59. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1108-L1111` → after: `L506-L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L506-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L506-L512) · [Before (L1108-L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L1108-L1111)

```diff
-       getProvider(VV) {
-         if (this.providers.has(VV)) return this.providers.get(VV);
-         const eV = new yV(VV, this);
-         return this.providers.set(VV, eV), eV
+       for (hH in HH.vectors3) {
+         const BH = HH.vectors3[hH];
+         rH.setVector3(hH, {
+           x: BH[0],
+           y: BH[1],
+           z: BH[2]
+         })
```

#### 60. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1113-L1114` → after: `L514-L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L514-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L514-L521) · [Before (L1113-L1114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L1113-L1114)

```diff
-       getProviders() {
-         return Array.from(this.providers.values())
+       for (hH in HH.vectors4) {
+         const BH = HH.vectors4[hH];
+         rH.setVector4(hH, {
+           x: BH[0],
+           y: BH[1],
+           z: BH[2],
+           w: BH[3]
+         })
```

#### 61. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1117-L1200` → after: `L535-L546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L535-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L535-L546) · [Before (L1117-L1200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L1117-L1200)

```diff
-   },
-   41802: (VV, eV, xV) => {
-     xV.d(eV, {
-       d: () => YV,
-       g: () => nV,
-       k: () => wV,
-       n: () => ZV
-     });
-     const JV = [];
-     var YV;
-     ! function(VV) {
-       VV[VV.DEBUG = 0] = "DEBUG", VV[VV.VERBOSE = 1] = "VERBOSE", VV[VV.INFO = 2] = "INFO", VV[VV.WARN = 3] = "WARN", VV[VV.ERROR = 4] = "ERROR", VV[VV.SILENT = 5] = "SILENT"
-     }(YV || (YV = {}));
-     const UV = {
-         debug: YV.DEBUG,
-         verbose: YV.VERBOSE,
- ... (68 more removed lines; see GitHub link above)
+     async function vH(HH, BH, LH) {
+       let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
+       return await new Promise(((rH, SH) => {
+         const hH = new CH.d;
+         hH.addEventListener("readystatechange", (() => {
+           if (4 == hH.readyState)
+             if (200 == hH.status) {
+               const BH = xH(JSON.parse(hH.responseText), LH || XH.d.LastCreatedScene, AH);
+               HH && (BH.name = HH), rH(BH)
+             } else SH("Unable to load the ShaderMaterial")
+         })), hH.open("GET", BH), hH.send()
+       }))
```

#### 62. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1202-L1205` → after: `L548-L560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L548-L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L548-L560) · [Before (L1202-L1205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L1202-L1205)

```diff
- 
-     function wV(VV) {
-       JV.forEach((eV => {
-         eV.setLogLevel(VV)
+     async function PH(HH, BH) {
+       let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
+       const AH = this?.SnippetUrl ?? MH.SnippetUrl;
+       return await new Promise(((rH, SH) => {
+         const hH = new CH.d;
+         hH.addEventListener("readystatechange", (() => {
+           if (4 == hH.readyState)
+             if (200 == hH.status) {
+               const AH = JSON.parse(JSON.parse(hH.responseText).jsonPayload),
+                 SH = xH(JSON.parse(AH.shaderMaterial), BH || XH.d.LastCreatedScene, LH);
+               SH.snippetId = HH, rH(SH)
+             } else SH("Unable to load the snippet " + HH)
+         })), hH.open("GET", AH + "/" + HH.replace(/#/g, "/")), hH.send()
```

#### 63. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1209-L1232` → after: `L567-L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L567-L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/293.js#L567-L568) · [Before (L1209-L1232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/293.js#L1209-L1232)

```diff
-     function ZV(VV, eV) {
-       for (const xV of JV) {
-         let JV = null;
-         eV && eV.level && (JV = UV[eV.level]), xV.userLogHandler = null === VV ? null : function(eV, xV) {
-           for (var UV = arguments.length, yV = new Array(UV > 2 ? UV - 2 : 0), pV = 2; pV < UV; pV++) yV[pV - 2] = arguments[pV];
-           const QV = yV.map((VV => {
-             if (null == VV) return null;
-             if ("string" === typeof VV) return VV;
-             if ("number" === typeof VV || "boolean" === typeof VV) return VV.toString();
-             if (VV instanceof Error) return VV.message;
-             try {
-               return JSON.stringify(VV)
-             } catch (eV) {
-               return null
-             }
-           })).filter((VV => VV)).join(" ");
- ... (8 more removed lines; see GitHub link above)
+     function VH() {
+       UH || (UH = !0, MH.Parse = xH, MH.ParseFromFileAsync = vH, MH.ParseFromSnippetAsync = PH, MH.CreateFromSnippetAsync = TH, (0, QH.f)("BABYLON.ShaderMaterial", MH))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/294.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/294.js` (60 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b)

#### 1. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L5` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/294.js#L4) · [Before (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/294.js#L5)

```diff
-   41810: (VV, eV, xV) => {
+   41790: (HH, BH, LH) => {
```

#### 2. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L7-L18` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/294.js#L6) · [Before (L7-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/294.js#L7-L18)

```diff
-       getAnalytics: () => He,
-       getGoogleAnalyticsClientId: () => Ie,
-       initializeAnalytics: () => ue,
-       isSupported: () => se,
-       logEvent: () => xx,
-       setAnalyticsCollectionEnabled: () => Vx,
-       setConsent: () => Jx,
-       setCurrentScreen: () => Se,
-       setDefaultEventParameters: () => ex,
-       setUserId: () => de,
-       setUserProperties: () => Oe,
-       settings: () => me
+       default: () => fL
```

#### 3. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L20-L55` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/294.js#L8-L12) · [Before (L20-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/294.js#L20-L55)

```diff
-     var JV = xV(41783),
-       YV = xV(41802),
-       UV = xV(41794),
-       yV = xV(41787);
-     let pV, QV;
-     const nV = new WeakMap,
-       wV = new WeakMap,
-       ZV = new WeakMap,
-       vV = new WeakMap,
-       rV = new WeakMap;
-     let kV = {
-       get(VV, eV, xV) {
-         if (VV instanceof IDBTransaction) {
-           if ("done" === eV) return wV.get(VV);
-           if ("objectStoreNames" === eV) return VV.objectStoreNames || ZV.get(VV);
-           if ("store" === eV) return xV.objectStoreNames[1] ? void 0 : xV.objectStore(xV.objectStoreNames[0])
- ... (20 more removed lines; see GitHub link above)
+     var AH = LH(45),
+       rH = LH(1038),
+       SH = LH.n(rH);
+     const hH = ["forward", "backward", "left", "right", "jump", "sprint", "crouch", "primary", "secondary", "middle"],
+       tH = 3e3;
```

#### 4. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L58-L74` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/294.js#L15) · [Before (L58-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/294.js#L58-L74)

```diff
-       return "function" === typeof VV ? bV(VV) : (VV instanceof IDBTransaction && function(VV) {
-         if (wV.has(VV)) return;
-         const eV = new Promise(((eV, xV) => {
-           const JV = () => {
-               VV.removeEventListener("complete", YV), VV.removeEventListener("error", UV), VV.removeEventListener("abort", UV)
-             },
-             YV = () => {
-               eV(), JV()
-             },
-             UV = () => {
-               xV(VV.error || new DOMException("AbortError", "AbortError")), JV()
-             };
-           VV.addEventListener("complete", YV), VV.addEventListener("error", UV), VV.addEventListener("abort", UV)
-         }));
-         wV.set(VV, eV)
-       }(VV), eV = VV, (pV || (pV = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((VV => eV instanceof VV)) ? new Proxy(VV, kV) : VV);
- ... (1 more removed lines; see GitHub link above)
+       return HH.down && HH.inPlay && !HH.bound
```

#### 5. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L105-L167` → after: `L19-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L19-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/294.js#L19-L25) · [Before (L105-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/294.js#L105-L167)

```diff
-       if (!(VV instanceof IDBDatabase) || eV in VV || "string" !== typeof eV) return;
-       if (FV.get(eV)) return FV.get(eV);
-       const xV = eV.replace(/FromIndex$/, ""),
-         JV = eV !== xV,
-         YV = tV.includes(xV);
-       if (!(xV in (JV ? IDBIndex : IDBObjectStore).prototype) || !YV && !qV.includes(xV)) return;
-       const UV = async function(VV) {
-         const eV = this.transaction(VV, YV ? "readwrite" : "readonly");
-         let UV = eV.store;
-         for (var yV = arguments.length, pV = new Array(yV > 1 ? yV - 1 : 0), QV = 1; QV < yV; QV++) pV[QV - 1] = arguments[QV];
-         return JV && (UV = UV.index(pV.shift())), (await Promise.all([UV[xV](...pV), YV && eV.done]))[0]
-       };
-       return FV.set(eV, UV), UV
-     }
-     kV = (VV => ({
-       ...VV,
- ... (47 more removed lines; see GitHub link above)
+       let LH = 0,
+         AH = HH.length;
+       for (; LH < AH;) {
+         const rH = LH + AH >> 1;
+         HH[rH].atMs <= BH ? LH = rH + 1 : AH = rH
+       }
+       return LH - 1
```

#### 6. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L172` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/294.js#L30-L31) · [Before (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/294.js#L172)

```diff
-         apiKey: eV
+         code: BH,
+         unbound: LH
```

#### 7. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L174-L178` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/294.js#L33) · [Before (L174-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/294.js#L174-L178)

```diff
-       return new Headers({
-         "Content-Type": "application/json",
-         Accept: "application/json",
-         "x-goog-api-key": eV
-       })
+       return `${BH}:${LH}`
```

#### 8. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L182-L192` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/294.js#L37) · [Before (L182-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/294.js#L182-L192)

```diff
-       let {
-         refreshToken: xV
-       } = eV;
-       const JV = CV(VV);
-       return JV.append("Authorization", function(VV) {
-         return `${MV} ${VV}`
-       }(xV)), JV
-     }
-     async function oV(VV) {
-       const eV = await VV();
-       return eV.status >= 500 && eV.status < 600 ? VV() : eV
+       return BH[1] - HH[1] || (HH[0] < BH[0] ? -1 : 1)
```

#### 9. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L196-L214` → after: `L75-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L75-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/294.js#L75-L79) · [Before (L196-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/294.js#L196-L214)

```diff
-       return new Promise((eV => {
-         setTimeout(eV, VV)
-       }))
-     }
-     const hV = /^[cdef][\w-]{21}$/;
- 
-     function lV() {
-       try {
-         const VV = new Uint8Array(17);
-         (self.crypto || self.msCrypto).getRandomValues(VV), VV[0] = 112 + VV[0] % 16;
-         const eV = function(VV) {
-           const eV = (xV = VV, btoa(String.fromCharCode(...xV)).replace(/\+/g, "-").replace(/\//g, "_"));
-           var xV;
-           return eV.substr(0, 22)
-         }(VV);
-         return hV.test(eV) ? eV : ""
- ... (3 more removed lines; see GitHub link above)
+       var BH;
+       const LH = GH[HH];
+       if (void 0 !== LH) return LH;
+       const AH = null !== (BH = /^(?:Key|Digit)(.)$/.exec(HH)) && void 0 !== BH ? BH : /^Numpad(.+)$/.exec(HH);
+       return null !== AH ? HH.startsWith("Numpad") ? `Num ${AH[1]}` : AH[1] : HH
```

#### 10. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L218` → after: `L87-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L87-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/294.js#L87-L91) · [Before (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/294.js#L218)

```diff
-       return `${VV.appName}!${VV.appId}`
+       const BH = Math.max(0, Math.floor(HH / 1e3)),
+         LH = Math.floor(BH / 3600),
+         AH = Math.floor(BH % 3600 / 60),
+         rH = String(BH % 60).padStart(2, "0");
+       return LH > 0 ? `${LH}:${String(AH).padStart(2,"0")}:${rH}` : `${AH}:${rH}`
```

#### 11. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L223-L232` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/294.js#L95) · [Before (L223-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/294.js#L223-L232)

```diff
-       const xV = LV(VV);
-       KV(xV, eV),
-         function(VV, eV) {
-           const xV = uV();
-           xV && xV.postMessage({
-             key: VV,
-             fid: eV
-           });
-           sV()
-         }(xV, eV)
+       return getComputedStyle(HH).getPropertyValue(BH).trim()
```

#### 12. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L236-L396` → after: `L99-L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L99-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/294.js#L99-L105) · [Before (L236-L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/294.js#L236-L396)

```diff
-       const xV = fV.get(VV);
-       if (xV)
-         for (const JV of xV) JV(eV)
-     }
-     let HV = null;
- 
-     function uV() {
-       return !HV && "BroadcastChannel" in self && (HV = new BroadcastChannel("[Firebase] FID Change"), HV.onmessage = VV => {
-         KV(VV.data.key, VV.data.fid)
-       }), HV
-     }
- 
-     function sV() {
-       0 === fV.size && HV && (HV.close(), HV = null)
-     }
-     const SV = "firebase-installations-store";
- ... (145 more removed lines; see GitHub link above)
+       switch (HH.kind) {
+         case "note":
+           return HH.label;
+         case "hidden":
+           return BH.tabHidden;
+         default:
+           return BH[HH.kind]
```

#### 13. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L402-L405` → after: `L110-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L110-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/294.js#L110-L127) · [Before (L402-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/294.js#L402-L405)

```diff
-       return ee(VV, (VV => {
-         if (!VV) throw WV.create("installation-not-found");
-         return Ue(VV)
-       }))
+       let {
+         draw: BH,
+         className: LH
+       } = HH;
+       const rH = (0, AH.useRef)(null);
+       return (0, AH.useEffect)((() => {
+         const HH = rH.current,
+           LH = HH.getContext("2d");
+         if (null === BH || null === LH) return;
+         const {
+           clientWidth: AH,
+           clientHeight: SH
+         } = HH, hH = window.devicePixelRatio;
+         HH.width = Math.round(AH * hH), HH.height = Math.round(SH * hH), LH.setTransform(hH, 0, 0, hH, 0, 0), BH(LH, AH, SH, HH)
+       }), [BH]), (0, WH.jsx)("canvas", {
+         ref: rH,
+ ... (2 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L417-L418` → after: `L132-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L132-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/294.js#L132-L138) · [Before (L417-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/294.js#L417-L418)

```diff
-         appConfig: xV,
-         heartbeatServiceProvider: JV
+         controller: BH,
+         frames: LH,
+         input: rH,
+         markers: SH,
+         inactiveRanges: hH,
+         videoGaps: CH,
+         labels: EH
```

#### 15. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L420-L437` → after: `L140-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L140-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/294.js#L140-L154) · [Before (L420-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/294.js#L420-L437)

```diff
-       const YV = function(VV, eV) {
-           let {
-             fid: xV
-           } = eV;
-           return `${gV(VV)}/${xV}/authTokens:generate`
-         }(xV, eV),
-         UV = aV(xV, eV),
-         yV = JV.getImmediate({
-           optional: !0
-         });
-       if (yV) {
-         const VV = await yV.getHeartbeatsHeader();
-         VV && UV.append("x-firebase-client", VV)
-       }
-       const pV = {
-           installation: {
- ... (2 more removed lines; see GitHub link above)
+       const {
+         timeline: GH
+       } = BH, UH = (0, AH.useRef)(null), [VH, OH] = (0, AH.useState)(0), [bH, kH] = (0, AH.useState)(null), mH = (0, AH.useRef)(null), oH = Math.max(1, GH.durationMs);
+       ! function(HH, BH, LH) {
+         (0, AH.useEffect)((() => {
+           let AH = 0,
+             rH = NaN;
+           const SH = () => {
+             var hH;
+             AH = requestAnimationFrame(SH);
+             const tH = (null !== (hH = BH.current) && void 0 !== hH ? hH : HH.getPositionMs()) / Math.max(1, HH.timeline.durationMs) * 100;
+             tH !== rH && (rH = tH, LH.current.style.setProperty("--brv-position", `${tH}%`))
+           };
+           return SH(), () => {
+             cancelAnimationFrame(AH)
```

#### 16. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L439-L476` → after: `L156-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L156-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/294.js#L156-L218) · [Before (L439-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/294.js#L439-L476)

```diff
-         },
-         QV = {
-           method: "POST",
-           headers: UV,
-           body: JSON.stringify(pV)
-         },
-         nV = await oV((() => fetch(YV, QV)));
-       if (nV.ok) {
-         return DV(await nV.json())
-       }
-       throw await iV("Generate Auth Token", nV)
-     }
-     async function pe(VV) {
-       let eV, xV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-       const JV = await ee(VV.appConfig, (JV => {
-         if (!ne(JV)) throw WV.create("not-registered");
- ... (22 more removed lines; see GitHub link above)
+         }), [HH])
+       }(BH, mH, UH), (0, AH.useEffect)((() => {
+         const HH = UH.current,
+           BH = new ResizeObserver((() => {
+             OH(HH.clientWidth)
+           }));
+         return BH.observe(HH), () => {
+           BH.disconnect()
+         }
+       }), []);
+       const IH = (0, AH.useMemo)((() => 0 === VH ? null : function(HH, BH, LH) {
+           const AH = Math.max(1, Math.min(LH, Math.floor(BH.durationMs / uH))),
+             rH = BH.durationMs / AH,
+             SH = new Array(AH).fill(0);
+           for (const hH of HH) BH.contains(hH.atMs) && SH[Math.min(AH - 1, Math.floor(BH.toPosition(hH.atMs) / rH))]++;
+           return {
+ ... (47 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L478-L495` → after: `L220-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L220-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/294.js#L220-L243) · [Before (L478-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/294.js#L478-L495)

```diff
-           }(JV);
-           return eV = async function(VV, eV) {
-             try {
-               const xV = await ye(VV, eV),
-                 JV = Object.assign(Object.assign({}, eV), {
-                   authToken: xV
-                 });
-               return await OV(VV.appConfig, JV), xV
-             } catch (xV) {
-               if (!RV(xV) || 401 !== xV.customData.serverCode && 404 !== xV.customData.serverCode) {
-                 const xV = Object.assign(Object.assign({}, eV), {
-                   authToken: {
-                     requestStatus: 0
-                   }
-                 });
-                 await OV(VV.appConfig, xV)
- ... (2 more removed lines; see GitHub link above)
+           }
+         }), [rH, GH, VH]),
+         cH = (0, AH.useMemo)((() => function(HH) {
+           const BH = [];
+           for (const AH of HH) {
+             var LH;
+             if (!zH(AH)) continue;
+             let HH = BH.at(-1);
+             (void 0 === HH || AH.atMs - HH.endMs > tH) && (HH = {
+               startMs: AH.atMs,
+               endMs: AH.atMs,
+               counts: new Map
+             }, BH.push(HH)), HH.endMs = AH.atMs, HH.counts.set(AH.code, (null !== (LH = HH.counts.get(AH.code)) && void 0 !== LH ? LH : 0) + 1)
+           }
+           return BH.map((HH => {
+             let {
+ ... (8 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L497-L509` → after: `L245-L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L245-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/294.js#L245-L253) · [Before (L497-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/294.js#L497-L509)

```diff
-           }(VV, xV), xV
-         }
-       }));
-       return eV ? await eV : JV.authToken
-     }
- 
-     function Qe(VV) {
-       return ee(VV, (VV => {
-         if (!ne(VV)) throw WV.create("not-registered");
-         const eV = VV.authToken;
-         return 1 === (xV = eV).requestStatus && xV.requestTime + NV < Date.now() ? Object.assign(Object.assign({}, VV), {
-           authToken: {
-             requestStatus: 0
+           }))
+         }(rH.keys.filter((HH => GH.contains(HH.atMs))))), [rH.keys, GH]),
+         eH = HH => GH.toPosition(HH) / oH * 100,
+         qH = HH => eH(HH) / 100 * VH,
+         gH = HH => {
+           const BH = UH.current.getBoundingClientRect();
+           return {
+             px: HH - BH.left,
+             positionMs: Math.max(0, Math.min(BH.width, HH - BH.left)) / BH.width * oH
```

#### 19. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L511-L528` → after: `L255-L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L255-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/294.js#L255-L350) · [Before (L511-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/294.js#L511-L528)

```diff
-         }) : VV;
-         var xV
-       }))
-     }
- 
-     function ne(VV) {
-       return void 0 !== VV && 2 === VV.registrationStatus
-     }
-     async function we(VV) {
-       let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-       const xV = VV;
-       await async function(VV) {
-         const {
-           registrationPromise: eV
-         } = await xe(VV);
-         eV && await eV
- ... (2 more removed lines; see GitHub link above)
+         },
+         NH = null === bH || 0 === VH ? null : {
+           px: bH,
+           positionMs: Math.max(0, Math.min(VH, bH)) / VH * oH
+         },
+         RH = null === NH || null === IH ? null : function(HH, BH) {
+           const LH = Math.max(0, Math.min(HH.fps.length - 1, Math.floor(BH / HH.bucketMs))),
+             AH = HH.fps[LH];
+           return null === AH ? null : Math.round(AH)
+         }(IH, NH.positionMs),
+         jH = null !== NH && CH.some((HH => NH.px >= qH(HH.startMs) && NH.px < qH(HH.endMs))),
+         nH = null === NH ? void 0 : SH.find((HH => {
+           var BH;
+           return NH.px >= qH(HH.atMs) - MH && NH.px <= qH(null !== (BH = HH.endMs) && void 0 !== BH ? BH : HH.atMs) + MH
+         })),
+         FH = null === NH ? void 0 : cH.find((HH => NH.px >= qH(HH.startMs) - MH && NH.px <= qH(HH.endMs) + MH));
+ ... (80 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L532-L534` → after: `L365-L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L365-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/294.js#L365-L373) · [Before (L532-L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/294.js#L532-L534)

```diff
-       return WV.create("missing-app-config-values", {
-         valueName: VV
-       })
+       const BH = HH.filter((HH => HH.endMs > HH.startMs)).sort(((HH, BH) => HH.startMs - BH.startMs)),
+         LH = [];
+       for (const AH of BH) {
+         const HH = LH.at(-1);
+         void 0 !== HH && AH.startMs <= HH.endMs ? HH.endMs = Math.max(HH.endMs, AH.endMs) : LH.push({
+           ...AH
+         })
+       }
+       return LH
```

#### 21. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L536-L556` → after: `L375-L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L375-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/294.js#L375-L393) · [Before (L536-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/294.js#L536-L556)

```diff
-     const ve = "installations",
-       re = VV => {
-         const eV = VV.getProvider("app").getImmediate(),
-           xV = function(VV) {
-             if (!VV || !VV.options) throw Ze("App Configuration");
-             if (!VV.name) throw Ze("App Name");
-             const eV = ["projectId", "apiKey", "appId"];
-             for (const xV of eV)
-               if (!VV.options[xV]) throw Ze(xV);
-             return {
-               appName: VV.name,
-               projectId: VV.options.projectId,
-               apiKey: VV.options.apiKey,
-               appId: VV.options.appId
-             }
-           }(eV);
- ... (5 more removed lines; see GitHub link above)
+     class qH {
+       constructor(HH) {
+         this.rW = void 0, this.durationMs = void 0, this.positionStarts = void 0, this.rW = eH(HH), this.positionStarts = [];
+         let BH = 0;
+         for (const LH of this.rW) this.positionStarts.push(BH), BH += LH.endMs - LH.startMs;
+         this.durationMs = BH
+       }
+       get startMs() {
+         var HH, BH;
+         return null !== (HH = null === (BH = this.rW[0]) || void 0 === BH ? void 0 : BH.startMs) && void 0 !== HH ? HH : 0
+       }
+       get endMs() {
+         var HH, BH;
+         return null !== (HH = null === (BH = this.rW.at(-1)) || void 0 === BH ? void 0 : BH.endMs) && void 0 !== HH ? HH : 0
+       }
+       toPosition(HH) {
+ ... (3 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L558-L571` → after: `L395-L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L395-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/294.js#L395-L409) · [Before (L558-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/294.js#L558-L571)

```diff
-       },
-       ke = VV => {
-         const eV = VV.getProvider("app").getImmediate(),
-           xV = (0, JV.r)(eV, ve).getImmediate();
-         return {
-           getId: () => async function(VV) {
-             const eV = VV,
-               {
-                 installationEntry: xV,
-                 registrationPromise: JV
-               } = await xe(eV);
-             return JV ? JV.catch(console.error) : pe(eV).catch(console.error), xV.fid
-           }(xV),
-           getToken: VV => we(xV, VV)
+         return this.durationMs
+       }
+       toTime(HH) {
+         const BH = Math.max(0, Math.min(this.durationMs, HH));
+         for (let LH = this.rW.length - 1; LH >= 0; LH--)
+           if (BH >= this.positionStarts[LH]) return this.rW[LH].startMs + (BH - this.positionStarts[LH]);
+         return this.startMs
+       }
+       contains(HH) {
+         return this.rW.some((BH => HH >= BH.startMs && HH < BH.endMs))
+       }
+       nextPlayableTime(HH) {
+         for (const BH of this.rW) {
+           if (HH < BH.startMs) return BH.startMs;
+           if (HH < BH.endMs) return HH
```

#### 23. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L573-L599` → after: `L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/294.js#L411) · [Before (L573-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/294.js#L573-L599)

```diff
-       };
-     (0, JV.v)(new yV.e(ve, re, "PUBLIC")), (0, JV.v)(new yV.e("installations-internal", ke, "PRIVATE")), (0, JV.O)(PV, AV), (0, JV.O)(PV, AV, "esm2017");
-     const be = "analytics",
-       Ee = "https://www.googletagmanager.com/gtag/js",
-       Be = new YV.g("@firebase/analytics"),
-       je = {
-         "already-exists": "A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",
-         "already-initialized": "initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the alrea … [truncated]
-         "already-initialized-settings": "Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",
-         "interop-component-reg-failed": "Firebase Analytics Interop Component failed to instantiate: {$reason}",
-         "invalid-analytics-context": "Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",
-         "indexeddb-unavailable": "IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",
-         "fetch-throttle": "The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",
-         "config-fetch-failed": "Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",
-         "no-api-key": 'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',
-         "no-app-id": 'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',
- ... (11 more removed lines; see GitHub link above)
+         return null
```

#### 24. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L605` → after: `L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/294.js#L416) · [Before (L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/294.js#L605)

```diff
-       return Promise.all(VV.map((VV => VV.catch((VV => VV)))))
+       return [...HH].sort(((HH, BH) => HH.startMs - BH.startMs))
```

#### 25. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L609-L675` → after: `L420-L432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L420-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/294.js#L420-L432) · [Before (L609-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/294.js#L609-L675)

```diff
-       const xV = function(VV, eV) {
-           let xV;
-           return window.trustedTypes && (xV = window.trustedTypes.createPolicy(VV, eV)), xV
-         }("firebase-js-sdk-policy", {
-           createScriptURL: te
-         }),
-         JV = document.createElement("script"),
-         YV = `${Ee}?l=${VV}&id=${eV}`;
-       JV.src = xV ? null === xV || void 0 === xV ? void 0 : xV.createScriptURL(YV) : YV, JV.async = !0, document.head.appendChild(JV)
-     }
- 
-     function Pe(VV, eV, xV, JV) {
-       return async function(YV) {
-         try {
-           for (var UV = arguments.length, yV = new Array(UV > 1 ? UV - 1 : 0), pV = 1; pV < UV; pV++) yV[pV - 1] = arguments[pV];
-           if ("event" === YV) {
- ... (51 more removed lines; see GitHub link above)
+       let LH = 1 / 0,
+         AH = -1 / 0;
+       const rH = HH => {
+         LH = Math.min(LH, HH), AH = Math.max(AH, HH)
+       };
+       for (const SH of [...HH.videoSegments, ...HH.telemetryChunks]) rH(SH.startMs), rH(SH.endMs);
+       for (const SH of HH.domEvents) rH(BH.toEpoch(SH.timestamp));
+       return LH < AH ? {
+         startMs: LH,
+         endMs: AH
+       } : {
+         startMs: 0,
+         endMs: 0
```

#### 26. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L678-L682` → after: `L435-L437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L435-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/294.js#L435-L437) · [Before (L678-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/294.js#L678-L682)

```diff
-     const Ae = new class {
-       constructor() {
-         let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
-           eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
-         this.throttleMetadata = VV, this.intervalMillis = eV
+     class RH {
+       constructor(HH, BH) {
+         this.wallNowMs = BH, this.anchorTimeMs = void 0, this.anchorWallMs = void 0, this.playingState = !1, this.speedState = 1, this.anchorTimeMs = HH, this.anchorWallMs = BH()
```

#### 27. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L684-L685` → after: `L439-L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L439-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/294.js#L439-L440) · [Before (L684-L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/294.js#L684-L685)

```diff
-       getThrottleMetadata(VV) {
-         return this.throttleMetadata[VV]
+       get playing() {
+         return this.playingState
```

#### 28. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L687-L688` → after: `L442-L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L442-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/294.js#L442-L443) · [Before (L687-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/294.js#L687-L688)

```diff
-       setThrottleMetadata(VV, eV) {
-         this.throttleMetadata[VV] = eV
+       get speed() {
+         return this.speedState
```

#### 29. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L690-L691` → after: `L445-L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L445-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/294.js#L445-L446) · [Before (L690-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/294.js#L690-L691)

```diff
-       deleteThrottleMetadata(VV) {
-         delete this.throttleMetadata[VV]
+       timeMs() {
+         return this.timeAtWall(this.wallNowMs())
```

#### 30. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L693-L715` → after: `L448-L449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L448-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/294.js#L448-L449) · [Before (L693-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/294.js#L693-L715)

```diff
-     };
- 
-     function Ne(VV) {
-       return new Headers({
-         Accept: "application/json",
-         "x-goog-api-key": VV
-       })
-     }
-     async function Xe(VV) {
-       let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ae,
-         xV = arguments.length > 2 ? arguments[2] : void 0;
-       const {
-         appId: JV,
-         apiKey: YV,
-         measurementId: UV
-       } = VV.options;
- ... (7 more removed lines; see GitHub link above)
+       timeAtWall(HH) {
+         return this.playingState ? this.anchorTimeMs + (HH - this.anchorWallMs) * this.speedState : this.anchorTimeMs
```

#### 31. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L717-L758` → after: `L451-L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L451-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/294.js#L451-L452) · [Before (L717-L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/294.js#L717-L758)

```diff
-       const yV = eV.getThrottleMetadata(JV) || {
-           backoffCount: 0,
-           throttleEndTimeMillis: Date.now()
-         },
-         pV = new ze;
-       return setTimeout((async () => {
-         pV.abort()
-       }), void 0 !== xV ? xV : 6e4), Me({
-         appId: JV,
-         apiKey: YV,
-         measurementId: UV
-       }, yV, pV, eV)
-     }
-     async function Me(VV, eV, xV) {
-       let {
-         throttleEndTimeMillis: JV,
- ... (26 more removed lines; see GitHub link above)
+       play() {
+         this.reanchor(), this.playingState = !0
```

#### 32. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L760-L802` → after: `L454-L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L454-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/294.js#L454-L455) · [Before (L760-L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/294.js#L760-L802)

```diff
-       try {
-         const eV = await async function(VV) {
-           var eV;
-           const {
-             appId: xV,
-             apiKey: JV
-           } = VV, YV = {
-             method: "GET",
-             headers: Ne(JV)
-           }, UV = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", xV), yV = await fetch(UV, YV);
-           if (200 !== yV.status && 304 !== yV.status) {
-             let VV = "";
-             try {
-               const xV = await yV.json();
-               (null === (eV = xV.error) || void 0 === eV ? void 0 : eV.message) && (VV = xV.error.message)
-             } catch (pV) {}
- ... (27 more removed lines; see GitHub link above)
+       pause() {
+         this.reanchor(), this.playingState = !1
```

#### 33. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L804-L807` → after: `L457-L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L457-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/294.js#L457-L458) · [Before (L804-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/294.js#L804-L807)

```diff
-     }
-     class ze {
-       constructor() {
-         this.listeners = []
+       seek(HH) {
+         this.anchorTimeMs = HH, this.anchorWallMs = this.wallNowMs()
```

#### 34. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L809-L810` → after: `L460-L461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L460-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/294.js#L460-L461) · [Before (L809-L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/294.js#L809-L810)

```diff
-       addEventListener(VV) {
-         this.listeners.push(VV)
+       setSpeed(HH) {
+         this.reanchor(), this.speedState = HH
```

#### 35. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L812-L813` → after: `L463-L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L463-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/294.js#L463-L465) · [Before (L812-L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/294.js#L812-L813)

```diff
-       abort() {
-         this.listeners.forEach((VV => VV()))
+       reanchor() {
+         const HH = this.wallNowMs();
+         this.anchorTimeMs = this.timeAtWall(HH), this.anchorWallMs = HH
```

#### 36. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L816-L852` → after: `L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/294.js#L468) · [Before (L816-L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/294.js#L816-L852)

```diff
-     let Ge, We;
- 
-     function Re(VV) {
-       We = VV
-     }
- 
-     function ge(VV) {
-       Ge = VV
-     }
-     async function De(VV, eV, xV, JV, YV, yV, pV) {
-       var QV;
-       const nV = Xe(VV);
-       nV.then((eV => {
-         xV[eV.measurementId] = eV.appId, VV.options.measurementId && eV.measurementId !== VV.options.measurementId && Be.warn(`The measurement ID in the local Firebase config (${VV.options.measurementId}) does not match the measurement ID fetched from the server (${eV.measurement … [truncated]
-       })).catch((VV => Be.error(VV))), eV.push(nV);
-       const wV = async function() {
- ... (21 more removed lines; see GitHub link above)
+     const jH = "bloxd-clock";
```

#### 37. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L855` → after: `L471-L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L471-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/294.js#L471-L480) · [Before (L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/294.js#L855)

```diff
-         this.app = VV
+         this.samples = void 0, this.samples = [];
+         for (const LH of HH) {
+           var BH;
+           const HH = LH.data;
+           LH.type === cH.b.Custom && (null === HH || void 0 === HH ? void 0 : HH.tag) === jH && "number" === typeof(null === (BH = HH.payload) || void 0 === BH ? void 0 : BH.epochMs) && this.samples.push({
+             domMs: LH.timestamp,
+             offsetMs: HH.payload.epochMs - LH.timestamp
+           })
+         }
+         this.samples.sort(((HH, BH) => HH.domMs - BH.domMs))
```

#### 38. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L857-L858` → after: `L482-L496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L482-L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/294.js#L482-L496) · [Before (L857-L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/294.js#L857-L858)

```diff
-       _delete() {
-         return delete Ce[this.app.options.appId], Promise.resolve()
+       toEpoch(HH) {
+         return HH + this.offsetAtDom(HH)
+       }
+       toDom(HH) {
+         return HH - this.offsetAtDom(HH)
+       }
+       offsetAtDom(HH) {
+         var BH, LH;
+         let AH = 0,
+           rH = this.samples.length - 1;
+         for (; AH < rH;) {
+           const BH = Math.ceil((AH + rH) / 2);
+           this.samples[BH].domMs <= HH ? AH = BH : rH = BH - 1
+         }
+         return null !== (BH = null === (LH = this.samples[AH]) || void 0 === LH ? void 0 : LH.offsetMs) && void 0 !== BH ? BH : 0
```

#### 39. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L861-L871` → after: `L499-L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L499-L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/294.js#L499-L508) · [Before (L861-L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/294.js#L861-L871)

```diff
-     let Ce = {},
-       ae = [];
-     const oe = {};
-     let ce, he, le = "dataLayer",
-       Le = "gtag",
-       fe = !1;
- 
-     function me(VV) {
-       if (fe) throw qe.create("already-initialized");
-       VV.dataLayerName && (le = VV.dataLayerName), VV.gtagName && (Le = VV.gtagName)
-     }
+     const FH = new Set([cH.d.MouseMove, cH.d.MouseInteraction, cH.d.Scroll, cH.d.Input, cH.d.TouchMove, cH.d.Drag]),
+       DH = "bloxd-active",
+       wH = "player_death",
+       ZH = "error",
+       dH = {
+         $exception: "error",
+         [ZH]: "error",
+         death: "death",
+         [wH]: "death"
+       };
```

#### 40. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L874` → after: `L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/294.js#L511) · [Before (L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/294.js#L874)

```diff
-       ! function() {
+       return function(HH, BH) {
```

#### 41. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L876-L881` → after: `L513-L522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L513-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/294.js#L513-L522) · [Before (L876-L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/294.js#L876-L881)

```diff
-         if ((0, UV.Q)() && VV.push("This is a browser extension environment."), (0, UV.m)() || VV.push("Cookies are not available."), VV.length > 0) {
-           const eV = VV.map(((VV, eV) => `(${eV+1}) ${VV}`)).join(" "),
-             xV = qe.create("invalid-analytics-context", {
-               errorInfo: eV
-             });
-           Be.warn(xV.message)
+         for (const AH of HH) {
+           let HH = AH.startMs;
+           for (const rH of BH) rH.endMs <= HH || rH.startMs >= AH.endMs || (rH.startMs > HH && LH.push({
+             startMs: HH,
+             endMs: rH.startMs
+           }), HH = Math.max(HH, rH.endMs));
+           HH < AH.endMs && LH.push({
+             startMs: HH,
+             endMs: AH.endMs
+           })
```

#### 42. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L883-L921` → after: `L524-L535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L524-L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/294.js#L524-L535) · [Before (L883-L921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/294.js#L883-L921)

```diff
-       }();
-       const JV = VV.options.appId;
-       if (!JV) throw qe.create("no-app-id");
-       if (!VV.options.apiKey) {
-         if (!VV.options.measurementId) throw qe.create("no-api-key");
-         Be.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${VV.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
-       }
-       if (null != Ce[JV]) throw qe.create("already-exists", {
-         id: JV
-       });
-       if (!fe) {
-         ! function(VV) {
-           let eV = [];
-           Array.isArray(window[VV]) ? eV = window[VV] : window[VV] = eV
-         }(le);
-         const {
- ... (23 more removed lines; see GitHub link above)
+         return LH
+       }(function(HH) {
+         const BH = [];
+         for (const LH of HH) {
+           const HH = BH.at(-1);
+           void 0 !== HH && LH.atMs - HH.endMs <= 5e3 ? HH.endMs = LH.atMs : BH.push({
+             startMs: LH.atMs,
+             endMs: LH.atMs
+           })
+         }
+         return BH
+       }(HH), eH([...BH, ...LH])).filter((HH => HH.endMs - HH.startMs >= 1e3))
```

#### 43. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L925-L966` → after: `L539-L540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L539-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/294.js#L539-L540) · [Before (L925-L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/294.js#L925-L966)

```diff
-       let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-       const xV = (0, JV.r)(VV, be);
-       if (xV.isInitialized()) {
-         const VV = xV.getImmediate();
-         if ((0, UV.x)(eV, xV.getOptions())) return VV;
-         throw qe.create("already-initialized")
-       }
-       return xV.initialize({
-         options: eV
-       })
-     }
-     async function se() {
-       if ((0, UV.Q)()) return !1;
-       if (!(0, UV.m)()) return !1;
-       if (!(0, UV.Z)()) return !1;
-       try {
- ... (26 more removed lines; see GitHub link above)
+       var BH, LH, AH;
+       return HH.type === cH.b.IncrementalSnapshot ? FH.has(null !== (LH = null === (AH = HH.data) || void 0 === AH ? void 0 : AH.source) && void 0 !== LH ? LH : -1) : HH.type === cH.b.Custom && (null === (BH = HH.data) || void 0 === BH ? void 0 : BH.tag) === DH
```

#### 44. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L969-L976` → after: `L543-L559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L543-L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/294.js#L543-L559) · [Before (L969-L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/294.js#L969-L976)

```diff
-     function de(VV, eV, xV) {
-       VV = (0, UV.L)(VV), async function(VV, eV, xV, JV) {
-         if (JV && JV.global) return VV("set", {
-           user_id: xV
-         }), Promise.resolve();
-         VV("config", await eV, {
-           update: !0,
-           user_id: xV
+     function JH(HH, BH) {
+       const LH = [];
+       for (const hH of HH)
+         if (hH.type === cH.b.Custom) {
+           var AH;
+           const HH = null === (AH = hH.data) || void 0 === AH ? void 0 : AH.tag,
+             rH = void 0 === HH ? void 0 : dH[HH];
+           void 0 !== rH && LH.push({
+             kind: rH,
+             atMs: BH.toEpoch(hH.timestamp)
+           })
+         } else if (hH.type === cH.b.Plugin) {
+         var rH, SH;
+         const HH = hH.data;
+         "rrweb/console@1" !== (null === HH || void 0 === HH ? void 0 : HH.plugin) || "error" !== (null === (rH = HH.payload) || void 0 === rH ? void 0 : rH.level) && "assert" !== (null === (SH = HH.payload) || void 0 === SH ? void 0 : SH.level) || LH.push({
+           kind: "error",
+ ... (1 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L978` → after: `L561-L1138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L561-L1138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/294.js#L561-L1138) · [Before (L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/294.js#L978)

```diff
-       }(he, Ce[VV.app.options.appId], eV, xV).catch((VV => Be.error(VV)))
+       }
+       return LH
+     }
+     const iH = 3e6;
+     class pH {
+       constructor(HH, BH) {
+         let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now,
+           AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : iH;
+         this.fetchUrls = HH, this.onUrls = BH, this.wallNowMs = LH, this.refreshableAfterMs = AH, this.lastRefreshWallMs = -1 / 0, this.urlsFetchedAtWallMs = void 0, this.inFlight = !1, this.timer = null, this.destroyed = !1, this.urlsFetchedAtWallMs = LH()
+       }
+       get refreshing() {
+         return this.inFlight
+       }
+       request() {
+         if (null === this.fetchUrls || this.destroyed || null !== this.timer || this.inFlight) return;
+         if (this.wallNowMs() - this.urlsFetchedAtWallMs < this.refreshableAfterMs) return;
+ ... (562 more added lines; see GitHub link above)
```

#### 46. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L982-L986` → after: `L1142-L1181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR1142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L1142-L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/294.js#L1142-L1181) · [Before (L982-L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/294.js#L982-L986)

```diff
-       VV = (0, UV.L)(VV), async function(VV, eV, xV, JV) {
-         if (JV && JV.global) {
-           const eV = {};
-           for (const VV of Object.keys(xV)) eV[`user_properties.${VV}`] = xV[VV];
-           return VV("set", eV), Promise.resolve()
+       var AH;
+       if ("string" === typeof HH) return null !== LH.pointer && eB.has(BH) ? qB(HH, LH.pointer) : HH;
+       if (Array.isArray(HH)) {
+         let BH = !1;
+         const AH = HH.map((HH => {
+           const AH = RB(HH, "", LH);
+           return BH ||= AH !== HH, AH
+         }));
+         return BH ? AH : HH
+       }
+       if (null === HH || "object" !== typeof HH) return HH;
+       const rH = function(HH, BH) {
+         const LH = HH.attributes,
+           AH = gB(HH),
+           rH = null !== AH && void 0 === (null === LH || void 0 === LH ? void 0 : LH._cssText) ? BH.sheets.get(AH) : void 0;
+         return void 0 === rH ? HH : {
+ ... (24 more added lines; see GitHub link above)
```

#### 47. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L988-L990` → after: `L1183-L1251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR1183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L1183-L1251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/294.js#L1183-L1251) · [Before (L988-L990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/294.js#L988-L990)

```diff
-         VV("config", await eV, {
-           update: !0,
-           user_properties: xV
+       return null !== (AH = SH) && void 0 !== AH ? AH : rH
+     }
+     const jB = "brv-styles",
+       nB = [".brv-video-layer { position: absolute !important; margin: 0 !important; padding: 0 !important; border: 0 !important; }", ".brv-video-layer { overflow: hidden !important; pointer-events: none !important; background: none !important; transform: none !important; }", ".b … [truncated]
+       FB = `\n.brv-player {\n\t--brv-bg: #22283b;\n\t--brv-panel: #2b3249;\n\t--brv-text: #f2f2f2;\n\t--brv-muted: #a4a4a4;\n\t--brv-accent: #ffb914;\n\t--brv-track: #3c4b68;\n\t--brv-fps: #1dd06d;\n\t--brv-low-fps: #e34f4f;\n\t--brv-inactive: rgba(164, 164, 164, 0.18);\n\t--brv- … [truncated]
+     class DB {
+       static create(HH, BH, LH, AH, rH, SH, hH, tH) {
+         if (!BH.some((HH => HH.type === cH.b.FullSnapshot))) return null;
+         const zH = function(HH, BH) {
+           const LH = {
+             sheets: NB(HH),
+             styleTextIds: mB(HH),
+             pointer: BH
+           };
+           return HH.map((HH => {
+             if (HH.type !== cH.b.FullSnapshot && HH.type !== cH.b.IncrementalSnapshot) return HH;
+ ... (53 more added lines; see GitHub link above)
```

#### 48. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L992` → after: `L1253-L1424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR1253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L1253-L1424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/294.js#L1253-L1424) · [Before (L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/294.js#L992)

```diff
-       }(he, Ce[VV.app.options.appId], eV, xV).catch((VV => Be.error(VV)))
+       }
+       invalidateCanvasRect() {
+         this.lastCanvasRectMs = -1 / 0
+       }
+       destroy() {
+         this.replayer.destroy()
+       }
+       domOffsetAt(HH) {
+         return Math.max(0, Math.min(this.lastDomMs + 1, this.domClock.toDom(HH)) - this.firstDomMs)
+       }
+       checkDrift(HH) {
+         const BH = this.domOffsetAt(HH);
+         BH >= this.lastDomMs - this.firstDomMs || Math.abs(this.replayer.getCurrentTime() - BH) > 400 && this.replayer.play(BH)
+       }
+       placeVideoOverCanvas() {
+         const HH = this.replayer.iframe.contentDocument,
+ ... (156 more added lines; see GitHub link above)
```
