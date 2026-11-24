# Changed — Bundle Modifications Report (Part 015 / 069)

- **Updated at**: `2026-11-25T01:02 JST`
- **Part**: `15 / 69` (**298** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 014](part-014.md) · [Part 016 →](part-016.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/237.js` (w4ddu.56408518 → sn3sfj.2522680a · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/237.js` (99 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab)

#### 32. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L333-L355` → after: `L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L149) · [Before (L333-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L333-L355)

```diff
-         const wC = Array.isArray(zC) ? zC[0] : zC;
-         if (void 0 !== ZC && !QC._CheckLimit(wC, ZC)) return;
-         const bC = QC._FormatMessage(wC),
-           nC = this._Levels[CC],
-           fC = Array.isArray(zC) ? zC.slice(1) : [];
-         nC.logFunc && nC.logFunc("BJS - " + bC, ...fC);
-         const oC = `<div style='color:${nC.color}'>${bC}</div><br>`;
-         QC._AddLogEntry(oC), QC._GenerateLimitMessage(wC, CC)
-       }
-       static get LogCache() {
-         return QC._LogCache
-       }
-       static ClearLogCache() {
-         QC._LogCache = "", QC._LogLimitOutputs = {}, QC.errorsCount = 0
-       }
-       static set LogLevels(CC) {
- ... (7 more removed lines; see GitHub link above)
+         return cp.r = (0, Ip.Clamp)(this.r, pp, ip), cp.g = (0, Ip.Clamp)(this.g, pp, ip), cp.b = (0, Ip.Clamp)(this.b, pp, ip), cp
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L357-L412` → after: `L151-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L151-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L151-L152) · [Before (L357-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L357-L412)

```diff
-     }
-     QC.NoneLogLevel = 0, QC.MessageLogLevel = 1, QC.WarningLogLevel = 2, QC.ErrorLogLevel = 4, QC.AllLogLevel = 7, QC.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", QC._LogCache = "", QC._LogLimitOutputs = {}, QC._Levels =  … [truncated]
-       color: "white",
-       logFunc: console.log,
-       name: "Log"
-     }, {
-       color: "orange",
-       logFunc: console.warn,
-       name: "Warn"
-     }, {}, {
-       color: "red",
-       logFunc: console.error,
-       name: "Error"
-     }], QC.errorsCount = 0, QC.Log = QC._LogEnabled.bind(QC, QC.MessageLogLevel), QC.Warn = QC._LogEnabled.bind(QC, QC.WarningLogLevel), QC.Error = QC._LogEnabled.bind(QC, QC.ErrorLogLevel)
-   },
-   60925: (CC, zC, ZC) => {
- ... (40 more removed lines; see GitHub link above)
+       add(pp) {
+         return new Ap(this.r + pp.r, this.g + pp.g, this.b + pp.b)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L414-L416` → after: `L154-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L154-L155) · [Before (L414-L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L414-L416)

```diff
-       bind() {
-         let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         super.bind(CC), this._drawWrapper.effect.setFloat2("texelSize", this.texelSize.x, this.texelSize.y)
+       addInPlace(pp) {
+         return this.r += pp.r, this.g += pp.g, this.b += pp.b, this
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L418-L445` → after: `L157-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L157-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L157-L158) · [Before (L418-L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L418-L445)

```diff
-     }
-     FC.VertexUrl = "fxaa", FC.FragmentUrl = "fxaa", FC.Uniforms = ["texelSize"];
-     class WC extends bC.d {
-       getClassName() {
-         return "FxaaPostProcess"
-       }
-       constructor(CC, zC) {
-         let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
-           wC = arguments.length > 3 ? arguments[3] : void 0,
-           bC = arguments.length > 4 ? arguments[4] : void 0,
-           nC = arguments.length > 5 ? arguments[5] : void 0,
-           fC = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
-         const oC = {
-           uniforms: FC.Uniforms,
-           size: "number" === typeof zC ? zC : void 0,
-           camera: ZC,
- ... (12 more removed lines; see GitHub link above)
+       addInPlaceFromFloats(pp, ip, cp) {
+         return this.r += pp, this.g += ip, this.b += cp, this
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L447-L448` → after: `L160-L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L160-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L160-L161) · [Before (L447-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L447-L448)

```diff
-       static _Parse(CC, zC, ZC, QC) {
-         return nC.d.Parse((() => new WC(CC.name, CC.options, zC, CC.renderTargetSamplingMode, ZC.mg(), CC.reusable)), CC, ZC, QC)
+       addToRef(pp, ip) {
+         return ip.r = this.r + pp.r, ip.g = this.g + pp.g, ip.b = this.b + pp.b, ip
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L450-L459` → after: `L163-L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L163-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L163-L164) · [Before (L450-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L450-L459)

```diff
-     }
-     var NC = ZC(38507),
-       MC = ZC(39913),
-       gC = ZC(41648),
-       SC = ZC(41634),
-       pC = ZC(39712);
-     const PC = 0;
-     class GC {
-       constructor(CC, zC, ZC) {
-         this.name = CC, this._parentTask = zC, this._context = ZC, this.disabled = !1
+       subtract(pp) {
+         return new Ap(this.r - pp.r, this.g - pp.g, this.b - pp.b)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L461-L462` → after: `L166-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L166-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L166-L167) · [Before (L461-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L461-L462)

```diff
-       setInitializeFunc(CC) {
-         this._initFunc = CC
+       subtractToRef(pp, ip) {
+         return ip.r = this.r - pp.r, ip.g = this.g - pp.g, ip.b = this.b - pp.b, ip
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L464-L465` → after: `L169-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L169-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L169-L170) · [Before (L464-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L464-L465)

```diff
-       setExecuteFunc(CC) {
-         this._executeFunc = CC
+       Iop(pp) {
+         return this.r -= pp.r, this.g -= pp.g, this.b -= pp.b, this
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L467-L468` → after: `L172-L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L172-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L172-L173) · [Before (L467-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L467-L468)

```diff
-       _execute() {
-         this.disabled || this._executeFunc(this._context)
+       subtractFromFloats(pp, ip, cp) {
+         return new Ap(this.r - pp, this.g - ip, this.b - cp)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L470-L471` → after: `L175-L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L175-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L175-L176) · [Before (L470-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L470-L471)

```diff
-       _initialize() {
-         this._initFunc?.(this._context)
+       subtractFromFloatsToRef(pp, ip, cp, Op) {
+         return Op.r = this.r - pp, Op.g = this.g - ip, Op.b = this.b - cp, Op
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L473-L474` → after: `L178-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L178-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L178-L179) · [Before (L473-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L473-L474)

```diff
-       _isValid() {
-         return void 0 !== this._executeFunc ? null : "Execute function is not set (call setExecuteFunc to set it)"
+       clone() {
+         return new Ap(this.r, this.g, this.b)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L476-L480` → after: `L181-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L181-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L181-L182) · [Before (L476-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L476-L480)

```diff
-       _dispose() {}
-     }
-     class RC extends GC {
-       static IsObjectListPass(CC) {
-         return void 0 !== CC.setObjectList
+       rM(pp) {
+         return this.r = pp.r, this.g = pp.g, this.b = pp.b, this
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L482-L483` → after: `L184-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L184-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L184-L185) · [Before (L482-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L482-L483)

```diff
-       get objectList() {
-         return this._objectList
+       i5(pp, ip, cp) {
+         return this.r = pp, this.g = ip, this.b = cp, this
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L485-L486` → after: `L187-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L187-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L187-L188) · [Before (L485-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L485-L486)

```diff
-       setObjectList(CC) {
-         this._objectList = CC
+       set(pp, ip, cp) {
+         return this.i5(pp, ip, cp)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L488-L489` → after: `L190-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L190-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L190-L191) · [Before (L488-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L488-L489)

```diff
-       constructor(CC, zC, ZC, QC) {
-         super(CC, zC, ZC), this._engine = QC
+       E_(pp) {
+         return this.r = this.g = this.b = pp, this
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L491-L493` → after: `L193-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L193-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L193-L197) · [Before (L491-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L491-L493)

```diff
-       _isValid() {
-         const CC = super._isValid();
-         return CC || (void 0 !== this._objectList ? null : "Object list is not set (call setObjectList to set it)")
+       toHexString() {
+         const pp = Math.round(255 * this.r),
+           ip = Math.round(255 * this.g),
+           cp = Math.round(255 * this.b);
+         return "#" + (0, Ip.ToHex)(pp) + (0, Ip.ToHex)(ip) + (0, Ip.ToHex)(cp)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L495-L498` → after: `L199-L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L199-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L199-L249) · [Before (L495-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L495-L498)

```diff
-     }
-     class AC extends GC {
-       static IsRenderPass(CC) {
-         return void 0 !== CC.setRenderTarget
+       fromHexString(pp) {
+         return "#" !== pp.substring(0, 1) || 7 !== pp.length || (this.r = parseInt(pp.substring(1, 3), 16) / 255, this.g = parseInt(pp.substring(3, 5), 16) / 255, this.b = parseInt(pp.substring(5, 7), 16) / 255), this
+       }
+       toHSV() {
+         return this.toHSVToRef(new Ap)
+       }
+       toHSVToRef(pp) {
+         const ip = this.r,
+           cp = this.g,
+           Op = this.b,
+           op = Math.max(ip, cp, Op),
+           Ip = Math.min(ip, cp, Op);
+         let Sp = 0,
+           xp = 0;
+         const Lp = op,
+           Yp = op - Ip;
+ ... (35 more added lines; see GitHub link above)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L500-L501` → after: `L251-L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L251-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L251-L280) · [Before (L500-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L500-L501)

```diff
-       get renderTarget() {
-         return this._renderTarget
+       static FromArray(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         return new Ap(pp[ip], pp[ip + 1], pp[ip + 2])
+       }
+       static FromArrayToRef(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+           cp = arguments.length > 2 ? arguments[2] : void 0;
+         cp.r = pp[ip], cp.g = pp[ip + 1], cp.b = pp[ip + 2]
+       }
+       static FromInts(pp, ip, cp) {
+         return new Ap(pp / 255, ip / 255, cp / 255)
+       }
+       static Lerp(pp, ip, cp) {
+         const Op = new Ap(0, 0, 0);
+         return Ap.LerpToRef(pp, ip, cp, Op), Op
+       }
+ ... (14 more added lines; see GitHub link above)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L503-L504` → after: `L282-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L282-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L282-L284) · [Before (L503-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L503-L504)

```diff
-       get renderTargetDepth() {
-         return this._renderTargetDepth
+       static Hermite1stDerivative(pp, ip, cp, Op, op) {
+         const Ip = Ap.Black();
+         return this.Hermite1stDerivativeToRef(pp, ip, cp, Op, op, Ip), Ip
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L506-L507` → after: `L286-L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L286-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L286-L288) · [Before (L506-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L506-L507)

```diff
-       get frameGraphRenderTarget() {
-         return this._frameGraphRenderTarget
+       static Hermite1stDerivativeToRef(pp, ip, cp, Op, op, Ip) {
+         const Sp = op * op;
+         Ip.r = 6 * (Sp - op) * pp.r + (3 * Sp - 4 * op + 1) * ip.r + 6 * (-Sp + op) * cp.r + (3 * Sp - 2 * op) * Op.r, Ip.g = 6 * (Sp - op) * pp.g + (3 * Sp - 4 * op + 1) * ip.g + 6 * (-Sp + op) * cp.g + (3 * Sp - 2 * op) * Op.g, Ip.b = 6 * (Sp - op) * pp.b + (3 * Sp - 4 * op + 1 … [truncated]
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L509-L510` → after: `L290-L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L290-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L290-L291) · [Before (L509-L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L509-L510)

```diff
-       constructor(CC, zC, ZC, QC) {
-         super(CC, zC, ZC), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = QC
+       static Red() {
+         return new Ap(1, 0, 0)
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L512-L513` → after: `L293-L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L293-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L293-L294) · [Before (L512-L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L512-L513)

```diff
-       setRenderTarget(CC) {
-         this._renderTarget = CC
+       static Green() {
+         return new Ap(0, 1, 0)
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L515-L516` → after: `L296-L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L296-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L296-L297) · [Before (L515-L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L515-L516)

```diff
-       setRenderTargetDepth(CC) {
-         this._renderTargetDepth = CC
+       static Blue() {
+         return new Ap(0, 0, 1)
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L518-L522` → after: `L299-L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L299-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L299-L300) · [Before (L518-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L518-L522)

```diff
-       addDependencies(CC) {
-         if (void 0 !== CC)
-           if (Array.isArray(CC))
-             for (const zC of CC) this._dependencies.add(zC);
-           else this._dependencies.add(CC)
+       static Black() {
+         return new Ap(0, 0, 0)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L524-L531` → after: `L302-L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L302-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L302-L303) · [Before (L524-L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L524-L531)

```diff
-       collectDependencies(CC) {
-         const zC = this._dependencies.keys();
-         for (let ZC = zC.next(); !0 !== ZC.done; ZC = zC.next()) CC.add(ZC.value);
-         if (void 0 !== this._renderTarget)
-           if (Array.isArray(this._renderTarget))
-             for (const ZC of this._renderTarget) void 0 !== ZC && CC.add(ZC);
-           else CC.add(this._renderTarget);
-         void 0 !== this._renderTargetDepth && CC.add(this._renderTargetDepth)
+       static get BlackReadOnly() {
+         return Ap._BlackReadOnly
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L533-L536` → after: `L305-L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L305-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L305-L306) · [Before (L533-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L533-L536)

```diff
-       setOutputLayerAndFaceIndices(CC) {
-         const zC = this.frameGraphRenderTarget.renderTargetWrapper;
-         if (zC)
-           for (const ZC of CC) zC.setLayerAndFaceIndex(ZC.targetIndex, ZC.layerIndex, ZC.faceIndex)
+       static White() {
+         return new Ap(1, 1, 1)
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L538-L539` → after: `L308-L309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L308-L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L308-L309) · [Before (L538-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L538-L539)

```diff
-       _initialize() {
-         this._frameGraphRenderTarget = this._context.createRenderTarget(this.name, this._renderTarget, this._renderTargetDepth, this.depthReadOnly, this.stencilReadOnly), super._initialize()
+       static Purple() {
+         return new Ap(.5, 0, .5)
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L541-L542` → after: `L311-L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L311-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L311-L312) · [Before (L541-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L541-L542)

```diff
-       _execute() {
-         this._context.bindRenderTarget(this._frameGraphRenderTarget), super._execute(), this._context.restoreDefaultFramebuffer()
+       static Magenta() {
+         return new Ap(1, 0, 1)
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L544-L546` → after: `L314-L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L314-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L314-L315) · [Before (L544-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L544-L546)

```diff
-       _isValid() {
-         const CC = super._isValid();
-         return CC || (void 0 !== this._renderTarget || void 0 !== this.renderTargetDepth ? null : "Render target and render target depth cannot both be undefined.")
+       static Yellow() {
+         return new Ap(1, 1, 0)
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L548-L549` → after: `L317-L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L317-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L317-L324) · [Before (L548-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L548-L549)

```diff
-       _dispose() {
-         this._frameGraphRenderTarget?.dispose()
+       static Gray() {
+         return new Ap(.5, .5, .5)
+       }
+       static Teal() {
+         return new Ap(0, 1, 1)
+       }
+       static Random() {
+         return new Ap(Math.random(), Math.random(), Math.random())
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L552` → after: `L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L327) · [Before (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L552)

```diff
-     var xC = ZC(36987);
+     Ap._V8PerformanceHack = new Ap(.5, .5, .5), Ap._BlackReadOnly = Ap.Black();
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L554-L555` → after: `L329-L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L329-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L329-L334) · [Before (L554-L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L554-L555)

```diff
-       get name() {
-         return this._name
+       constructor() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+           ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+           cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
+           Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
+         this.r = pp, this.g = ip, this.b = cp, this.a = Op
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L557-L558` → after: `L336-L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L336-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L336-L337) · [Before (L557-L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L557-L558)

```diff
-       set name(CC) {
-         this._name = CC
+       BOp() {
+         return [this.r, this.g, this.b, this.a]
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L560-L561` → after: `L339-L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L339-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L339-L341) · [Before (L560-L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L560-L561)

```diff
-       get disabled() {
-         return this._disabled
+       toArray(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         return pp[ip] = this.r, pp[ip + 1] = this.g, pp[ip + 2] = this.b, pp[ip + 3] = this.a, this
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L563-L564` → after: `L343-L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L343-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L343-L345) · [Before (L563-L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L563-L564)

```diff
-       set disabled(CC) {
-         this._disabled = CC
+       vcp(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         return this.r = pp[ip], this.g = pp[ip + 1], this.b = pp[ip + 2], this.a = pp[ip + 3], this
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L566-L567` → after: `L347-L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L347-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L347-L348) · [Before (L566-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L566-L567)

```diff
-       get passes() {
-         return this._passes
+       equals(pp) {
+         return pp && this.r === pp.r && this.g === pp.g && this.b === pp.b && this.a === pp.a
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L569-L570` → after: `L350-L351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L350-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L350-L351) · [Before (L569-L570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L569-L570)

```diff
-       get passesDisabled() {
-         return this._passesDisabled
+       add(pp) {
+         return new Pp(this.r + pp.r, this.g + pp.g, this.b + pp.b, this.a + pp.a)
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L572-L632` → after: `L353-L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L353-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L353-L354) · [Before (L572-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L572-L632)

```diff
-       getClassName() {
-         return "FrameGraphTask"
-       }
-       initAsync() {
-         return Promise.resolve()
-       }
-       isReady() {
-         return !0
-       }
-       dispose() {
-         this._reset(), this.onTexturesAllocatedObservable.clear(), this.onBeforeTaskExecute.clear(), this.onAfterTaskExecute.clear()
-       }
-       constructor(CC, zC) {
-         this._passes = [], this._passesDisabled = [], this._disabled = !1, this.onTexturesAllocatedObservable = new xC.d, this.onBeforeTaskExecute = new xC.d, this.onAfterTaskExecute = new xC.d, this.name = CC, this._frameGraph = zC, this._reset()
-       }
-       _reset() {
- ... (45 more removed lines; see GitHub link above)
+       addToRef(pp, ip) {
+         return ip.r = this.r + pp.r, ip.g = this.g + pp.g, ip.b = this.b + pp.b, ip.a = this.a + pp.a, ip
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L634-L651` → after: `L356-L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L356-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L356-L357) · [Before (L634-L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L634-L651)

```diff
-       _execute() {
-         const CC = this._disabled && this._passesDisabled.length > 0 ? this._passesDisabled : this._passes;
-         this.onBeforeTaskExecute.notifyObservers(this), this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
-         try {
-           for (const zC of CC) zC._execute()
-         } finally {
-           this._frameGraph.engine._debugPopGroup?.()
-         }
-         this.onAfterTaskExecute.notifyObservers(this)
-       }
-       _initializePasses() {
-         this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
-         try {
-           for (const CC of this._passes) CC._initialize();
-           for (const CC of this._passesDisabled) CC._initialize()
-         } finally {
- ... (2 more removed lines; see GitHub link above)
+       addInPlace(pp) {
+         return this.r += pp.r, this.g += pp.g, this.b += pp.b, this.a += pp.a, this
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L653-L658` → after: `L359-L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L359-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L359-L360) · [Before (L653-L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L653-L658)

```diff
-       _checkSameRenderTarget(CC, zC) {
-         if (null === CC || null === zC) return CC === zC;
-         if (CC.length !== zC.length) return !1;
-         for (let ZC = 0; ZC < CC.length; ZC++)
-           if (CC[ZC] !== zC[ZC]) return !1;
-         return !0
+       addInPlaceFromFloats(pp, ip, cp, Op) {
+         return this.r += pp, this.g += ip, this.b += cp, this.a += Op, this
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L660-L663` → after: `L362-L363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L362-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L362-L363) · [Before (L660-L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L660-L663)

```diff
-     }
-     class IC extends JC {
-       get alphaMode() {
-         return this.postProcess.alphaMode
+       subtract(pp) {
+         return new Pp(this.r - pp.r, this.g - pp.g, this.b - pp.b, this.a - pp.a)
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L665-L666` → after: `L365-L366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L365-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L365-L366) · [Before (L665-L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L665-L666)

```diff
-       set alphaMode(CC) {
-         this.postProcess.alphaMode = CC
+       subtractToRef(pp, ip) {
+         return ip.r = this.r - pp.r, ip.g = this.g - pp.g, ip.b = this.b - pp.b, ip.a = this.a - pp.a, ip
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L668-L669` → after: `L368-L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L368-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L368-L369) · [Before (L668-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L668-L669)

```diff
-       get drawWrapper() {
-         return this._postProcessDrawWrapper
+       Iop(pp) {
+         return this.r -= pp.r, this.g -= pp.g, this.b -= pp.b, this.a -= pp.a, this
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L671-L672` → after: `L371-L372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L371-L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L371-L372) · [Before (L671-L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L671-L672)

```diff
-       constructor(CC, zC, ZC) {
-         super(CC, zC), this.sourceSamplingMode = 2, this.depthReadOnly = !1, this.stencilReadOnly = !1, this.disableColorWrite = !1, this.drawBackFace = !1, this.depthTest = !0, this.postProcess = ZC, this._postProcessDrawWrapper = this.postProcess.drawWrapper, this.outputTexture … [truncated]
+       subtractFromFloats(pp, ip, cp, Op) {
+         return new Pp(this.r - pp, this.g - ip, this.b - cp, this.a - Op)
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L674-L675` → after: `L374-L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L374-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L374-L375) · [Before (L674-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L674-L675)

```diff
-       isReady() {
-         return this.postProcess.isReady()
+       subtractFromFloatsToRef(pp, ip, cp, Op, op) {
+         return op.r = this.r - pp, op.g = this.g - ip, op.b = this.b - cp, op.a = this.a - Op, op
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L677-L678` → after: `L377-L381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L377-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L377-L381) · [Before (L677-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L677-L678)

```diff
-       getClassName() {
-         return "FrameGraphPostProcessTask"
+       scale(pp) {
+         return new Pp(this.r * pp, this.g * pp, this.b * pp, this.a * pp)
+       }
+       scaleInPlace(pp) {
+         return this.r *= pp, this.g *= pp, this.b *= pp, this.a *= pp, this
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L680-L682` → after: `L383-L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L383-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L383-L391) · [Before (L680-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L680-L682)

```diff
-       record() {
-         let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
-           zC = arguments.length > 1 ? arguments[1] : void 0,
+       scaleToRef(pp, ip) {
+         return ip.r = this.r * pp, ip.g = this.g * pp, ip.b = this.b * pp, ip.a = this.a * pp, ip
+       }
+       scaleAndAddToRef(pp, ip) {
+         return ip.r += this.r * pp, ip.g += this.g * pp, ip.b += this.b * pp, ip.a += this.a * pp, ip
+       }
+       clampToRef() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+           ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L684-L703` → after: `L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L393) · [Before (L684-L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L684-L703)

```diff
-         if (void 0 === this.sourceTexture && void 0 === this.targetTexture) throw new Error(`FrameGraphPostProcessTask "${this.name}": sourceTexture or targetTexture is required`);
-         const QC = void 0 !== this.sourceTexture ? this._frameGraph.textureManager.getTextureCreationOptions(this.sourceTexture) : void 0;
-         if (QC && (QC.options.samples = 1), this._frameGraph.textureManager.resolveDanglingHandle(this.outputTexture, this.targetTexture, this.name, QC), void 0 !== this.depthAttachmentTexture && this._frameGraph.textureManager.resolveDanglingHandle(this.outputDepthAttachmentText … [truncated]
-           const CC = this._frameGraph.textureManager.getTextureAbsoluteDimensions(QC);
-           this._sourceWidth = CC.width, this._sourceHeight = CC.height
-         }
-         const wC = this._frameGraph.textureManager.getTextureDescription(this.outputTexture);
-         this._outputWidth = wC.size.width, this._outputHeight = wC.size.height;
-         const bC = this._frameGraph.addRenderPass(this.name);
-         if (bC.depthReadOnly = this.depthReadOnly, bC.stencilReadOnly = this.stencilReadOnly, bC.addDependencies(this.sourceTexture), bC.setRenderTarget(this.outputTexture), bC.setRenderTargetDepth(this.depthAttachmentTexture), bC.setExecuteFunc((CC => {
-             CC.pushDebugGroup(`Apply post-process (${this.name})`), void 0 !== this.sourceTexture && CC.setTextureSamplingMode(this.sourceTexture, this.sourceSamplingMode), zC?.(CC), this.viewport && CC.setViewport(this.viewport), CC.applyFullScreenEffect(this._postProcessDrawWra … [truncated]
-               void 0 !== this.sourceTexture && CC.bindTextureHandle(this._postProcessDrawWrapper.effect, "textureSampler", this.sourceTexture), ZC?.(CC), this.postProcess.bind()
-             }), this.stencilState, this.disableColorWrite, this.drawBackFace, this.depthTest, void 0 !== this.viewport), CC.restoreDefaultFramebuffer(), CC.popDebugGroup()
-           })), !CC) {
-           const CC = this._frameGraph.addRenderPass(this.name + "_disabled", !0);
-           CC.depthReadOnly = this.depthReadOnly, CC.stencilReadOnly = this.stencilReadOnly, CC.addDependencies(this.sourceTexture), CC.setRenderTarget(this.outputTexture), CC.setRenderTargetDepth(this.depthAttachmentTexture), CC.setExecuteFunc((CC => {
- ... (4 more removed lines; see GitHub link above)
+         return cp.r = (0, Ip.Clamp)(this.r, pp, ip), cp.g = (0, Ip.Clamp)(this.g, pp, ip), cp.b = (0, Ip.Clamp)(this.b, pp, ip), cp.a = (0, Ip.Clamp)(this.a, pp, ip), cp
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L705-L706` → after: `L395-L396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L395-L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L395-L396) · [Before (L705-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L705-L706)

```diff
-       dispose() {
-         this.postProcess.dispose(), super.dispose()
+       multiply(pp) {
+         return new Pp(this.r * pp.r, this.g * pp.g, this.b * pp.b, this.a * pp.a)
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L708-L711` → after: `L398-L399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L398-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L398-L399) · [Before (L708-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L708-L711)

```diff
-     }
-     class iC extends IC {
-       constructor(CC, zC, ZC) {
-         super(CC, zC, ZC || new FC(CC, zC.engine))
+       multiplyToRef(pp, ip) {
+         return ip.r = this.r * pp.r, ip.g = this.g * pp.g, ip.b = this.b * pp.b, ip.a = this.a * pp.a, ip
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L713-L714` → after: `L401-L402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L401-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L401-L402) · [Before (L713-L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L713-L714)

```diff
-       getClassName() {
-         return "FrameGraphFXAATask"
+       multiplyInPlace(pp) {
+         return this.r *= pp.r, this.g *= pp.g, this.b *= pp.b, this.a *= pp.a, this
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L716-L721` → after: `L404-L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L404-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L404-L405) · [Before (L716-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L716-L721)

```diff
-       record() {
-         let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
-           zC = arguments.length > 1 ? arguments[1] : void 0,
-           ZC = arguments.length > 2 ? arguments[2] : void 0;
-         const QC = super.record(CC, zC, ZC);
-         return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, QC
+       multiplyByFloats(pp, ip, cp, Op) {
+         return new Pp(this.r * pp, this.g * ip, this.b * cp, this.a * Op)
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L723-L727` → after: `L407-L457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L407-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L407-L457) · [Before (L723-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L723-L727)

```diff
-     }
-     var vC = ZC(41640);
-     class eC extends IC {
-       constructor(CC, zC, ZC) {
-         super(CC, zC, ZC || new vC.g(CC, zC.engine))
+       divide(pp) {
+         throw new ReferenceError("Can not divide a color")
+       }
+       divideToRef(pp, ip) {
+         throw new ReferenceError("Can not divide a color")
+       }
+       divideInPlace(pp) {
+         throw new ReferenceError("Can not divide a color")
+       }
+       minimizeInPlace(pp) {
+         return this.r = Math.min(this.r, pp.r), this.g = Math.min(this.g, pp.g), this.b = Math.min(this.b, pp.b), this.a = Math.min(this.a, pp.a), this
+       }
+       maximizeInPlace(pp) {
+         return this.r = Math.max(this.r, pp.r), this.g = Math.max(this.g, pp.g), this.b = Math.max(this.b, pp.b), this.a = Math.max(this.a, pp.a), this
+       }
+       minimizeInPlaceFromFloats(pp, ip, cp, Op) {
+ ... (35 more added lines; see GitHub link above)
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L730` → after: `L460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L460) · [Before (L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L730)

```diff
-         return "FrameGraphPassTask"
+         return "Color4"
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L732-L744` → after: `L462-L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L462-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L462-L464) · [Before (L732-L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L732-L744)

```diff
-     }
-     var hC = ZC(39910),
-       KC = ZC(39993),
-       YC = ZC(39953),
-       dC = ZC(40078),
-       mC = ZC(37142);
-     class HC {
-       getRenderCamera(CC) {
-         if (this._renderCamera) return this._renderCamera;
-         {
-           let zC;
-           return zC = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, CC && zC && zC.isRigCamera ? zC.rigParent : zC
-         }
+       getHashCode() {
+         let pp = 255 * this.r | 0;
+         return pp = 397 * pp ^ 255 * this.g, pp = 397 * pp ^ 255 * this.b, pp = 397 * pp ^ 255 * this.a, pp
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L746-L813` → after: `L466-L470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L466-L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L466-L470) · [Before (L746-L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L746-L813)

```diff
-       setRenderCamera(CC) {
-         this._renderCamera = CC
-       }
-       _getSharedGizmoLight() {
-         return this._sharedGizmoLight || (this._sharedGizmoLight = new dC.b("shared gizmo light", new qC.r(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = mC.e.Gray()), this._sharedGizmoLight
-       }
-       static get DefaultUtilityLayer() {
-         return null == HC._DefaultUtilityLayer ? HC._CreateDefaultUtilityLayerFromScene(oC.c.LastCreatedScene) : HC._DefaultUtilityLayer
-       }
-       static _CreateDefaultUtilityLayerFromScene(CC) {
-         return HC._DefaultUtilityLayer = new HC(CC), HC._DefaultUtilityLayer.originalScene.Tm.addOnce((() => {
-           HC._DefaultUtilityLayer = null
-         })), HC._DefaultUtilityLayer
-       }
-       static get DefaultKeepDepthUtilityLayer() {
-         return null == HC._DefaultKeepDepthUtilityLayer ? HC._CreateDefaultKeepUtilityLayerFromScene(oC.c.LastCreatedScene) : HC._DefaultKeepDepthUtilityLayer
- ... (52 more removed lines; see GitHub link above)
+       clone() {
+         return (new Pp).rM(this)
+       }
+       rM(pp) {
+         return this.r = pp.r, this.g = pp.g, this.b = pp.b, this.a = pp.a, this
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L815-L816` → after: `L472-L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L472-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L472-L488) · [Before (L815-L816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L815-L816)

```diff
-       dispose() {
-         this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.Tm.remove(this._sceneDisposeObserver), this._originalPointerObserver && t … [truncated]
+       i5(pp, ip, cp, Op) {
+         return this.r = pp, this.g = ip, this.b = cp, this.a = Op, this
+       }
+       set(pp, ip, cp, Op) {
+         return this.i5(pp, ip, cp, Op)
+       }
+       E_(pp) {
+         return this.r = this.g = this.b = this.a = pp, this
+       }
+       toHexString() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         const ip = Math.round(255 * this.r),
+           cp = Math.round(255 * this.g),
+           Op = Math.round(255 * this.b);
+         if (pp) return "#" + (0, Ip.ToHex)(ip) + (0, Ip.ToHex)(cp) + (0, Ip.ToHex)(Op);
+         const op = Math.round(255 * this.a);
+ ... (1 more added lines; see GitHub link above)
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L818-L819` → after: `L490-L564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L490-L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L490-L564) · [Before (L818-L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L818-L819)

```diff
-       _updateCamera() {
-         this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
+       fromHexString(pp) {
+         return "#" !== pp.substring(0, 1) || 9 !== pp.length && 7 !== pp.length || (this.r = parseInt(pp.substring(1, 3), 16) / 255, this.g = parseInt(pp.substring(3, 5), 16) / 255, this.b = parseInt(pp.substring(5, 7), 16) / 255, 9 === pp.length && (this.a = parseInt(pp.substrin … [truncated]
+       }
+       toLinearSpace() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         const ip = new Pp;
+         return this.toLinearSpaceToRef(ip, pp), ip
+       }
+       toLinearSpaceToRef(pp) {
+         return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (pp.r = Lp(this.r), pp.g = Lp(this.g), pp.b = Lp(this.b)) : (pp.r = xp(this.r), pp.g = xp(this.g), pp.b = xp(this.b)), pp.a = this.a, this
+       }
+       toGammaSpace() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         const ip = new Pp;
+         return this.toGammaSpaceToRef(ip, pp), ip
+       }
+ ... (59 more added lines; see GitHub link above)
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L822-L845` → after: `L567-L570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L567-L570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L567-L570) · [Before (L822-L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L822-L845)

```diff
-     HC._DefaultUtilityLayer = null, HC._DefaultKeepDepthUtilityLayer = null;
-     const EC = {
-       FindMainCamera: function(CC) {
-         return CC.findMainCamera()
-       },
-       FindMainObjectRenderer: function(CC) {
-         return CC.findMainObjectRenderer()
-       },
-       CreateUtilityLayerRenderer: function(CC) {
-         let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         const ZC = CC.sS,
-           QC = new HC(ZC, zC, !0);
-         QC.utilityLayerScene.activeCamera = ZC.activeCamera;
-         let wC = EC.FindMainCamera(ZC.frameGraph);
-         !wC && ZC.cameras.length > 0 && (wC = ZC.cameras[0]), wC && (QC.setRenderCamera(wC), QC.utilityLayerScene.activeCamera = wC);
-         const bC = ZC.onAfterRenderObservable.add((() => {
- ... (8 more removed lines; see GitHub link above)
+     Pp._V8PerformanceHack = new Pp(.5, .5, .5, .5);
+     class Wp {}
+     Wp.Color3 = (0, Op.d)(3, Ap.Black), Wp.Color4 = (0, Op.d)(3, (() => new Pp(0, 0, 0, 0)));
+     let yp = !1;
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L847-L886` → after: `L572-L587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L572-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L572-L587) · [Before (L847-L886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L847-L886)

```diff
-     function XC(CC, zC, ZC, QC) {
-       let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
-         bC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         nC = arguments.length > 6 ? arguments[6] : void 0,
-         fC = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
-         oC = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
-       const {
-         height: qC,
-         width: FC
-       } = aC(CC, zC, ZC);
-       if (!qC || !FC) return void NC.c.Error("Invalid 'size' parameter !");
-       const WC = zC.Km();
-       let gC = WC.activeCamera !== zC;
-       if (WC.frameGraph) {
-         const CC = EC.FindMainObjectRenderer(WC.frameGraph);
-         CC && (gC = CC.camera !== zC)
- ... (24 more removed lines; see GitHub link above)
+     function Up() {
+       yp || (yp = !0, Object.defineProperties(Ap.prototype, {
+         dimension: {
+           value: [3]
+         },
+         rank: {
+           value: 1
+         }
+       }), Object.defineProperties(Pp.prototype, {
+         dimension: {
+           value: [4]
+         },
+         rank: {
+           value: 1
+         }
+       }), (0, Sp.g)("BABYLON.Color3", Ap), (0, Sp.g)("BABYLON.Color4", Pp))
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L888-L898` → after: `L589-L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L589-L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L589-L603) · [Before (L888-L898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L888-L898)

```diff
-     async function cC(CC, zC, ZC) {
-       let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
-         wC = arguments.length > 4 ? arguments[4] : void 0,
-         bC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         nC = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-         fC = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
-       return await new Promise(((oC, qC) => {
-         XC(CC, zC, ZC, (CC => {
-           "undefined" !== typeof CC ? oC(CC) : qC(new Error("Data is undefined"))
-         }), QC, fC, wC, bC, nC)
-       }))
+   },
+   37324: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Ip,
+       d: () => Op,
+       g: () => op
+     });
+     const Op = 1 / 2.2,
+       op = 2.2;
+     Math.sqrt(5);
+     let Ip = .001
+   },
+   37356: (pp, ip, cp) => {
+     function Op(pp) {
+       return parseInt(pp.toString().replace(/\W/g, ""))
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L900-L911` → after: `L605-L608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L605-L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L605-L608) · [Before (L900-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L900-L911)

```diff
-     async function uC(CC, zC, ZC, QC) {
-       let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
-         bC = arguments.length > 5 ? arguments[5] : void 0,
-         nC = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
-       return await new Promise((fC => {
-         XC(CC, zC, {
-           width: ZC,
-           height: QC
-         }, (() => {
-           fC()
-         }), wC, !0, bC, nC)
-       }))
+ 
+     function op(pp, ip) {
+       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
+       return Math.abs(pp - ip) <= cp
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L914-L986` → after: `L611-L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L611-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L611-L613) · [Before (L914-L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L914-L986)

```diff
-     function rC(CC, zC, bC, nC) {
-       let fC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
-         oC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
-         qC = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-         FC = arguments.length > 7 ? arguments[7] : void 0,
-         MC = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
-         PC = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
-         GC = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
-         RC = arguments.length > 11 ? arguments[11] : void 0,
-         AC = arguments.length > 12 ? arguments[12] : void 0,
-         xC = arguments.length > 13 ? arguments[13] : void 0,
-         JC = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
-         IC = arguments.length > 15 ? arguments[15] : void 0;
-       const iC = zC.Km();
-       if (iC.frameGraph) return void TC(iC.frameGraph, zC, bC, fC, oC, qC, FC, RC, xC, !nC).then((CC => {
-         nC && nC(CC)
- ... (57 more removed lines; see GitHub link above)
+     function Ip(pp, ip, cp) {
+       let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
+       return pp < ip - Op || pp > cp + Op
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L988-L1003` → after: `L615-L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L615-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L615-L617) · [Before (L988-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L988-L1003)

```diff
-     async function sC(CC, zC, ZC) {
-       let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
-         wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
-         bC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         nC = arguments.length > 6 ? arguments[6] : void 0,
-         fC = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
-         oC = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
-         qC = !(arguments.length > 9 && void 0 !== arguments[9]) || arguments[9],
-         FC = arguments.length > 10 ? arguments[10] : void 0,
-         WC = arguments.length > 11 ? arguments[11] : void 0,
-         NC = arguments.length > 12 ? arguments[12] : void 0;
-       return await new Promise(((MC, gC) => {
-         rC(CC, zC, ZC, (CC => {
-           "undefined" !== typeof CC ? MC(CC) : gC(new Error("Data is undefined"))
-         }), QC, wC, bC, nC, fC, oC, qC, FC, WC, NC)
-       }))
+ 
+     function Sp(pp, ip) {
+       return pp === ip ? pp : Math.random() * (ip - pp) + pp
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1005-L1092` → after: `L619-L626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L619-L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L619-L626) · [Before (L1005-L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L1005-L1092)

```diff
-     async function TC(CC, zC, ZC) {
-       let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
-         wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
-         bC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         nC = arguments.length > 6 ? arguments[6] : void 0,
-         fC = arguments.length > 7 ? arguments[7] : void 0,
-         oC = arguments.length > 8 ? arguments[8] : void 0,
-         qC = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
-         FC = arguments.length > 10 ? arguments[10] : void 0;
-       const WC = CC.engine,
-         NC = CC.textureManager,
-         {
-           height: MC,
-           width: SC,
-           finalWidth: pC,
-           finalHeight: GC
- ... (72 more removed lines; see GitHub link above)
+ 
+     function xp(pp, ip, cp) {
+       return pp + (ip - pp) * cp
+     }
+ 
+     function Lp(pp, ip, cp) {
+       let Op = wp(ip - pp, 360);
+       return Op > 180 && (Op -= 360), pp + Op * Pp(cp)
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1096-L1108` → after: `L630-L784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L630-L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L630-L784) · [Before (L1096-L1108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L1096-L1108)

```diff
-       let QC = 0,
-         wC = 0,
-         bC = 0,
-         nC = 0;
-       if ("object" === typeof ZC) {
-         const fC = ZC.precision ? Math.abs(ZC.precision) : 1;
-         ZC.width && ZC.height ? (QC = ZC.height * fC, wC = ZC.width * fC) : ZC.width && !ZC.height ? (wC = ZC.width * fC, QC = Math.round(wC / CC.getAspectRatio(zC))) : ZC.height && !ZC.width ? (QC = ZC.height * fC, wC = Math.round(QC * CC.getAspectRatio(zC))) : (wC = Math.round( … [truncated]
-       } else isNaN(ZC) || (QC = ZC, wC = ZC, bC = ZC, nC = ZC);
-       return wC && (wC = Math.floor(wC)), QC && (QC = Math.floor(QC)), bC && (bC = Math.floor(bC)), nC && (nC = Math.floor(nC)), {
-         height: 0 | QC,
-         width: 0 | wC,
-         finalWidth: 0 | bC,
-         finalHeight: 0 | nC
+       let Op;
+       return Op = pp != ip ? Pp((cp - pp) / (ip - pp)) : 0, Op
+     }
+ 
+     function Dp(pp, ip, cp, Op, op) {
+       const Ip = op * op,
+         Sp = op * Ip;
+       return pp * (2 * Sp - 3 * Ip + 1) + cp * (-2 * Sp + 3 * Ip) + ip * (Sp - 2 * Ip + op) + Op * (Sp - Ip)
+     }
+ 
+     function Ap(pp, ip, cp, Op, op) {
+       const Ip = op * op;
+       return 6 * (Ip - op) * pp + (3 * Ip - 4 * op + 1) * ip + 6 * (-Ip + op) * cp + (3 * Ip - 2 * op) * Op
+     }
+ 
+     function Pp(pp) {
+ ... (139 more added lines; see GitHub link above)
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1111-L1119` → after: `L787-L793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L787-L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L787-L793) · [Before (L1111-L1119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L1111-L1119)

```diff
-     const tC = {
-       CreateScreenshot: XC,
-       CreateScreenshotAsync: cC,
-       CreateScreenshotWithResizeAsync: uC,
-       CreateScreenshotUsingRenderTarget: rC,
-       CreateScreenshotUsingRenderTargetAsync: sC,
-       CreateScreenshotForFrameGraphAsync: TC
-     };
-     let DC = !1;
+   },
+   37368: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => Ip,
+       g: () => op
+     });
+     const Op = {};
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1121-L1124` → after: `L795-L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L795-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L795-L800) · [Before (L1121-L1124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L1121-L1124)

```diff
-     function jC() {
-       if (DC) return;
-       DC = !0;
-       MC.g.CreateScreenshot = XC, MC.g.CreateScreenshotAsync = cC, MC.g.CreateScreenshotUsingRenderTarget = rC, MC.g.CreateScreenshotUsingRenderTargetAsync = sC
+     function op(pp, ip) {
+       Op[pp] = ip
+     }
+ 
+     function Ip(pp) {
+       return Op[pp]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/238.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/238.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94)

#### 1. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/238.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/238.js#L4)

```diff
-   37590: (CC, zC, ZC) => {
+   37345: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L8-L134` → after: `L8-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L8-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/238.js#L8-L19) · [Before (L8-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/238.js#L8-L134)

```diff
-     var QC = ZC(37596);
-     class wC {
-       static GetPlanes(CC) {
-         const zC = [];
-         for (let ZC = 0; ZC < 6; ZC++) zC.push(new QC.d(0, 0, 0, 0));
-         return wC.GetPlanesToRef(CC, zC), zC
-       }
-       static GetNearPlaneToRef(CC, zC) {
-         const ZC = CC.m;
-         zC.normal.x = ZC[3] + ZC[2], zC.normal.y = ZC[7] + ZC[6], zC.normal.z = ZC[11] + ZC[10], zC.d = ZC[15] + ZC[14], zC.normalize()
-       }
-       static GetFarPlaneToRef(CC, zC) {
-         const ZC = CC.m;
-         zC.normal.x = ZC[3] - ZC[2], zC.normal.y = ZC[7] - ZC[6], zC.normal.z = ZC[11] - ZC[10], zC.d = ZC[15] - ZC[14], zC.normalize()
-       }
-       static GetLeftPlaneToRef(CC, zC) {
- ... (111 more removed lines; see GitHub link above)
+     var Op = cp(37349);
+     class op {
+       static get LastCreatedEngine() {
+         return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
+       }
+       static get LastCreatedScene() {
+         return this._LastCreatedScene
+       }
+     }
+     op.Instances = [], op.OnEnginesDisposedObservable = new Op.d, op._LastCreatedScene = null, op.UseFallbackTexture = !0, op.FallbackTexture = ""
+   },
+   38900: (pp, ip, cp) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L138` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/238.js#L23) · [Before (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/238.js#L138)

```diff
-     var QC = ZC(38507);
+     var Op = cp(38905);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L171` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/238.js#L56) · [Before (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/238.js#L171)

```diff
-             QC.c.Warn(oC.message)
+             Op.e.Warn(Lp.message)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L177` → after: `L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/238.js#L62) · [Before (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/238.js#L177)

```diff
-   37731: (CC, zC, ZC) => {
+   38124: (pp, ip, cp) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L181` → after: `L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/238.js#L66) · [Before (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/238.js#L181)

```diff
-         return ("x" === CC ? zC : 3 & zC | 8).toString(16)
+         return ("x" === pp ? ip : 3 & ip | 8).toString(16)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L185` → after: `L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/238.js#L70) · [Before (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/238.js#L185)

```diff
-       b: () => QC
+       e: () => Op
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L188-L190` → after: `L73-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L73-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/238.js#L73-L75) · [Before (L188-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/238.js#L188-L190)

```diff
-   38507: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       c: () => QC
+   38905: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Op
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L211` → after: `L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/238.js#L96) · [Before (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/238.js#L211)

```diff
-         const zC = CC => CC < 10 ? "0" + CC : "" + CC,
+         const ip = pp => pp < 10 ? "0" + pp : "" + pp,
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L226` → after: `L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/238.js#L111) · [Before (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/238.js#L226)

```diff
-         const oC = `<div style='color:${nC.color}'>${bC}</div><br>`;
+         const Lp = `<div style='color:${Sp.color}'>${Ip}</div><br>`;
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/239.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/239.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034)

#### 1. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/239.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/239.js#L2)

```diff
- export const ids = [238, 239];
+ export const ids = [239];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L4-L11` → after: `L4-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/239.js#L4-L8) · [Before (L4-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/239.js#L4-L11)

```diff
-   60929: (CC, zC, ZC) => {
-     ZC.r(zC), ZC.d(zC, {
-       RegisterShaderMaterial: () => QC.e,
-       ShaderMaterial: () => QC.r,
-       ShaderMaterialCreateFromSnippetAsync: () => QC.f,
-       ShaderMaterialParse: () => QC.o,
-       ShaderMaterialParseFromFileAsync: () => QC.i,
-       ShaderMaterialParseFromSnippetAsync: () => QC.k
+   37399: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => xp,
+       e: () => Sp,
+       f: () => op
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L13-L14` → after: `L10-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L10-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/239.js#L10-L70) · [Before (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/239.js#L13-L14)

```diff
-     var QC = ZC(40297);
-     (0, QC.e)()
+     const Op = 1024,
+       op = 16,
+       Ip = 36e4;
+     class Sp {
+       constructor(pp) {
+         this.boneCount = pp, this.rotation = void 0, this.position = void 0, this.scale = void 0, this.touched = void 0, this.rotation = new Float64Array(3 * pp), this.position = new Float64Array(3 * pp), this.scale = new Float64Array(3 * pp).fill(1), this.touched = new Uint8Arra … [truncated]
+       }
+       clampToLimits() {
+         for (let pp = 0; pp < this.boneCount; pp++)
+           if (0 !== this.touched[pp])
+             for (let ip = 3 * pp; ip < 3 * pp + 3; ip++) {
+               const pp = this.rotation[ip],
+                 cp = this.position[ip],
+                 Sp = this.scale[ip];
+               pp >= -36e4 && pp <= Ip || (this.rotation[ip] = Lp(pp, Ip)), cp >= -1024 && cp <= Op || (this.position[ip] = Lp(cp, Op)), Sp >= -op && Sp <= op || (this.scale[ip] = Lp(Sp, op, 1))
+             }
+ ... (45 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L16` → after: `L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/239.js#L72) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/239.js#L16)

```diff
-   37590: (CC, zC, ZC) => {
+   37395: (pp, ip, cp) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L18-L62` → after: `L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/239.js#L74) · [Before (L18-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/239.js#L18-L62)

```diff
-       e: () => wC
-     });
-     var QC = ZC(37596);
-     class wC {
-       static GetPlanes(CC) {
-         const zC = [];
-         for (let ZC = 0; ZC < 6; ZC++) zC.push(new QC.d(0, 0, 0, 0));
-         return wC.GetPlanesToRef(CC, zC), zC
-       }
-       static GetNearPlaneToRef(CC, zC) {
-         const ZC = CC.m;
-         zC.normal.x = ZC[3] + ZC[2], zC.normal.y = ZC[7] + ZC[6], zC.normal.z = ZC[11] + ZC[10], zC.d = ZC[15] + ZC[14], zC.normalize()
-       }
-       static GetFarPlaneToRef(CC, zC) {
-         const ZC = CC.m;
-         zC.normal.x = ZC[3] - ZC[2], zC.normal.y = ZC[7] - ZC[6], zC.normal.z = ZC[11] - ZC[10], zC.d = ZC[15] - ZC[14], zC.normalize()
- ... (29 more removed lines; see GitHub link above)
+       b: () => Lp,
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L65` → after: `L77-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L77-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/239.js#L77-L90) · [Before (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/239.js#L65)

```diff
-     var QC = ZC(36963);
+     var Op = cp(37385),
+       op = cp(337),
+       Ip = cp(1927),
+       Sp = cp(37399);
+ 
+     function xp(pp) {
+       if ("Lo" in pp) return Rp.createAnimationScript(pp);
+       return new Dp(pp).createAnimationScript()
+     }
+ 
+     function Lp(pp, ip, cp, op) {
+       const Ip = pp.Lo <= 0 ? 1 : ip + cp * Math.max(0, op) / pp.Lo;
+       return pp.Yo === Op.j.LoopOnLastFrame ? Ip % 1 : pp.Yo === Op.j.NoLoop && Ip >= 1 ? null : Math.min(1, Ip)
+     }
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L67-L144` → after: `L92-L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L92-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/239.js#L92-L370) · [Before (L67-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/239.js#L67-L144)

```diff
-       constructor(CC, zC, ZC, wC) {
-         this.normal = new QC.r(CC, zC, ZC), this.d = wC
-       }
-       VZC() {
-         return [this.normal.x, this.normal.y, this.normal.z, this.d]
-       }
-       clone() {
-         return new wC(this.normal.x, this.normal.y, this.normal.z, this.d)
-       }
-       getClassName() {
-         return "Plane"
-       }
-       getHashCode() {
-         let CC = this.normal.getHashCode();
-         return CC = 397 * CC ^ this.d, CC
-       }
- ... (62 more removed lines; see GitHub link above)
+       createAnimationScript(pp) {
+         const {
+           Lo: ip,
+           loop: cp,
+           Do: Op
+         } = pp;
+         return {
+           Lo: Math.round(ip),
+           Yo: this.createLoopMode(null !== cp && void 0 !== cp && cp),
+           Do: this.createNodeSkeletonAnimationScript(null !== Op && void 0 !== Op ? Op : null)
+         }
+       }
+       createLoopMode(pp) {
+         switch (pp) {
+           case !1:
+             return Op.j.NoLoop;
+ ... (263 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L146` → after: `L372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/239.js#L372) · [Before (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/239.js#L146)

```diff
-   38501: (CC, zC, ZC) => {
+   37385: (pp, ip, cp) => {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L148` → after: `L374-L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L374-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/239.js#L374-L377) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/239.js#L148)

```diff
-       e: () => bC
+       d: () => Sp,
+       e: () => Ip,
+       f: () => Op,
+       j: () => op
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L150-L269` → after: `L379-L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L379-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/239.js#L379-L390) · [Before (L150-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/239.js#L150-L269)

```diff
-     var QC = ZC(38507);
-     const wC = (CC, zC, ZC) => CC ? CC.getClassName && "Mesh" === CC.getClassName() ? null : !CC.getClassName || "SubMesh" !== CC.getClassName() && "PhysicsBody" !== CC.getClassName() ? CC.clone ? CC.clone() : Array.isArray(CC) ? CC.slice() : ZC && "object" === typeof CC ? {
-       ...CC
-     } : null : CC.clone(zC) : null;
-     class bC {
-       static DeepCopy(CC, zC, ZC, bC) {
-         let nC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         const fC = function(CC) {
-           const zC = [];
-           do {
-             const ZC = Object.getOwnPropertyNames(CC);
-             for (const CC of ZC) - 1 === zC.indexOf(CC) && zC.push(CC)
-           } while (CC = Object.getPrototypeOf(CC));
-           return zC
-         }(CC);
-         for (const qC of fC) {
- ... (104 more removed lines; see GitHub link above)
+     let Op = function(pp) {
+         return pp[pp.Linear = 0] = "Linear", pp[pp.CatmullRomSpline = 1] = "CatmullRomSpline", pp
+       }({}),
+       op = function(pp) {
+         return pp[pp.NoLoop = 0] = "NoLoop", pp[pp.LoopOnLastFrame = 1] = "LoopOnLastFrame", pp[pp.HoldOnLastFrame = 2] = "HoldOnLastFrame", pp
+       }({}),
+       Ip = function(pp) {
+         return pp[pp.Movement = 0] = "Movement", pp[pp.Action = 1] = "Action", pp[pp.Emote = 2] = "Emote", pp[pp.Custom = 3] = "Custom", pp
+       }({}),
+       Sp = function(pp) {
+         return pp[pp.Start = 0] = "Start", pp[pp.Stop = 1] = "Stop", pp
+       }({})
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/240.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/240.js` (31 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L4-L7` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/240.js#L4-L7) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/240.js#L4-L7)

```diff
-   37640: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       b: () => WC,
-       f: () => nC
+   61395: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       DEVTOOLS_SHADERS: () => Ip,
+       registerDevtoolsShader: () => Sp
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L9-L11` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/240.js#L9-L10) · [Before (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/240.js#L9-L11)

```diff
-     var QC = ZC(9217),
-       wC = ZC(9194),
-       bC = ZC(326);
+     var Op = cp(40062),
+       op = cp(37421);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L13-L3110` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/240.js#L12) · [Before (L13-L3110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/240.js#L13-L3110)

```diff
-       "Maple Door": {
-         positions: [{
-           block: "Maple Door",
-           x: 0,
-           y: 0,
-           z: 0
-         }, {
-           block: "_Maple Door Top",
-           x: 0,
-           y: 1,
-           z: 0
-         }]
-       },
-       "Maple Door|meta|rot1|open": {
-         positions: [{
-           block: "Maple Door|meta|rot1|open",
- ... (3082 more removed lines; see GitHub link above)
+       devtoolsNormal: function(pp) {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L3112-L3292` → after: `L14-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L14-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/240.js#L14-L15) · [Before (L3112-L3292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/240.js#L3112-L3292)

```diff
-           [CC]: {
-             positions: [{
-               block: CC,
-               x: 0,
-               y: 0,
-               z: 0
-             }, {
-               block: "_Lunite Auto Miner Body",
-               x: 0,
-               y: 1,
-               z: -1
-             }, {
-               block: "_Lunite Auto Miner Drill Front",
-               x: 0,
-               y: 1,
-               z: -2
- ... (165 more removed lines; see GitHub link above)
+           vertex: `\n\t\t\t${(0,op.d)(pp,"position","vec3")}\n\t\t\t${(0,op.d)(pp,"normal","vec3")}\n\t\t\t${(0,op.rb)(pp,"worldViewProjection","mat4")}\n\t\t\t${(0,op.rb)(pp,"world","mat4")}\n\t\t\t${(0,op.tb)(pp,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,op.vb)(pp,`\n\t\t\t\t${ … [truncated]
+           fragment: `\n\t\t\t${(0,op.tb)(pp,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,op.N)(pp,`\n\t\t\t\t\n\t\t\t\t${(0,op.A)(pp,"vec3","normalColor",`abs(${(0,op.R)(pp,"vNormal")})`)}\n\t\t\t\t${(0,op.I)(pp)} = ${(0,op.j)(pp,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L3365-L3386` → after: `L18-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L18-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/240.js#L18-L22) · [Before (L3365-L3386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/240.js#L3365-L3386)

```diff
-       "Solar Panel|meta|rot4": {
-         positions: [{
-           block: "Solar Panel|meta|rot4",
-           x: 0,
-           y: 0,
-           z: 0
-         }, {
-           block: "_Solar Panel SE|meta|rot4",
-           x: 0,
-           y: 0,
-           z: 1
-         }, {
-           block: "_Solar Panel NW|meta|rot4",
-           x: 1,
-           y: 0,
-           z: 0
- ... (6 more removed lines; see GitHub link above)
+       devtoolsWhite: function(pp) {
+         return {
+           vertex: `\n\t\t\t${(0,op.d)(pp,"position","vec3")}\n\t\t\t${(0,op.rb)(pp,"worldViewProjection","mat4")}\n\n\t\t\t${(0,op.vb)(pp,`\n\t\t\t\t${(0,op.i)(pp)} = ${(0,op.sb)(pp,"worldViewProjection")} * ${(0,op.j)(pp,"vec4",(0,op.zb)(pp,"position"),"1.0")};\n\t\t\t`)}\n\t\t` … [truncated]
+           fragment: `\n\t\t\t${(0,op.N)(pp,`\n\t\t\t\t${(0,op.I)(pp)} = ${(0,op.j)(pp,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
+         }
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L3388-L3404` → after: `L24-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L24-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/240.js#L24-L28) · [Before (L3388-L3404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/240.js#L3388-L3404)

```diff
-       "Homestead Core": {
-         positions: [{
-           block: "Homestead Core",
-           x: 0,
-           y: 0,
-           z: 0
-         }, {
-           block: "_Homestead Core Mid",
-           x: 0,
-           y: 1,
-           z: 0
-         }, {
-           block: "_Homestead Core Top",
-           x: 0,
-           y: 2,
-           z: 0
- ... (1 more removed lines; see GitHub link above)
+       devtoolsDepth: function(pp) {
+         return {
+           vertex: `\n\t\t\t${(0,op.d)(pp,"position","vec3")}\n\t\t\t${(0,op.rb)(pp,"worldViewProjection","mat4")}\n\t\t\t${(0,op.rb)(pp,"world","mat4")}\n\t\t\t${(0,op.rb)(pp,"cameraPosition","vec3")}\n\t\t\t${(0,op.tb)(pp,"vDepth","float","mediump")}\n\n\t\t\t${(0,op.vb)(pp,`\n\ … [truncated]
+           fragment: `\n\t\t\t${(0,op.tb)(pp,"vDepth","float","mediump")}\n\t\t\t${(0,op.rb)(pp,"maxDepth","float")}\n\t\t\t${(0,op.rb)(pp,"minDepth","float")}\n\n\t\t\t${(0,op.N)(pp,`\n\t\t\t\t\n\t\t\t\t${(0,op.A)(pp,"float","normalizedDepth",`clamp((${(0,op.R)(pp,"vDepth")} - ${ … [truncated]
+         }
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L3408-L3566` → after: `L32-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L32-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/240.js#L32-L37) · [Before (L3408-L3566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/240.js#L3408-L3566)

```diff
-     function fC(CC) {
-       return {
-         [`${CC} Banner`]: {
-           positions: [{
-             block: `${CC} Banner`,
-             x: 0,
-             y: 0,
-             z: 0
-           }, {
-             block: `_${CC} Banner Flag|meta|rot1|bot`,
-             x: 0,
-             y: 1,
-             z: 0
-           }]
-         },
-         [`${CC} Banner|meta|rot2|bot`]: {
- ... (143 more removed lines; see GitHub link above)
+     function Sp(pp, ip) {
+       const {
+         vertex: cp,
+         fragment: op
+       } = Ip[pp](ip), Sp = Op.b.GetShadersStore(ip);
+       Sp[`${pp}VertexShader`] = cp, Sp[`${pp}FragmentShader`] = op
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L3570-L3664` → after: `L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/240.js#L86) · [Before (L3570-L3664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/240.js#L3570-L3664)

```diff
-       const zC = (0, bC.Gb)(CC);
-       return {
-         [zC]: {
-           positions: [{
-             block: zC,
-             x: 0,
-             y: 0,
-             z: 0
-           }, {
-             block: `_${zC} Top Left`,
-             x: 0,
-             y: 1,
-             z: 0
-           }, {
-             block: `_${zC} Top Right`,
-             x: -1,
- ... (79 more removed lines; see GitHub link above)
+       return pp === Op.WGSL
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L3667-L3742` → after: `L89-L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L89-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/240.js#L89-L133) · [Before (L3667-L3742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/240.js#L3667-L3742)

```diff
-     function qC(CC) {
-       const zC = `_${CC} Back`,
-         ZC = `_${CC} Dish`;
-       return {
-         [CC]: {
-           positions: [{
-             block: CC,
-             x: 0,
-             y: 0,
-             z: 0
-           }, {
-             block: zC,
-             x: 0,
-             y: 0,
-             z: -1
-           }, {
- ... (60 more removed lines; see GitHub link above)
+     function Ip(pp, ip, cp) {
+       return op(pp) ? cp : ip
+     }
+     const Sp = new Map([
+       ["int", "i32"],
+       ["float", "f32"],
+       ["vec2", "vec2f"],
+       ["vec3", "vec3f"],
+       ["vec4", "vec4f"],
+       ["mat2", "mat2x2f"],
+       ["mat3", "mat3x3f"],
+       ["mat4", "mat4x4f"]
+     ]);
+ 
+     function xp(pp, ip) {
+       if (!op(pp)) return ip;
+ ... (29 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L3747-L3766` → after: `L155-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L155-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/240.js#L155-L168) · [Before (L3747-L3766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/240.js#L3747-L3766)

```diff
-       const zC = `Small ${CC} Pod`;
-       return {
-         [zC]: {
-           positions: [{
-             block: zC,
-             x: 0,
-             y: 0,
-             z: 0
-           }, {
-             block: `_Small ${CC} Pod Mid`,
-             x: 0,
-             y: 1,
-             z: 0
-           }, {
-             block: `_Small ${CC} Pod Top`,
-             x: 0,
- ... (4 more removed lines; see GitHub link above)
+       return op(pp) ? "vertexOutputs.position" : "gl_Position"
+     }
+ 
+     function Hp(pp, ip) {
+       return op(pp) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${ip}}` : `void main() {${ip}}`
+     }
+ 
+     function dp(pp, ip) {
+       return op(pp) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${ip}}` : `void main() {${ip}}`
+     }
+ 
+     function ep(pp, ip, cp) {
+       if (op(pp)) {
+         return [`var ${ip}Sampler: sampler;`, `var ${ip}: ${"2dArray"===cp?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L3769-L3772` → after: `L172-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L172-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/240.js#L172-L174) · [Before (L3769-L3772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/240.js#L3769-L3772)

```diff
-     for (const NC in nC) {
-       for (const CC of nC[NC].positions)
-         if (CC.id = wC.g[CC.block].id, NC === CC.block && (0 !== CC.x || 0 !== CC.y || 0 !== CC.z)) throw new Error(`Multiblock "${NC}" has main block "${CC.block}" at non-origin position (${CC.x}, ${CC.y}, ${CC.z}) - if you need to do something like this, you'll need to rethink  … [truncated]
-       nC[wC.g[NC].id] = nC[NC]
+ 
+     function jp(pp, ip, cp) {
+       return op(pp) ? `textureSample(${ip}, ${ip}Sampler, ${cp})` : `texture2D(${ip}, ${cp})`
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L3774-L3789` → after: `L176-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L176-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/240.js#L176-L179) · [Before (L3774-L3789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/240.js#L3774-L3789)

```diff
-     const WC = {};
-     for (const NC in nC)
-       for (const {
-           block: CC,
-           x: zC,
-           y: ZC,
-           z: QC
-         }
-         of nC[NC].positions) {
-         const bC = {
-           mainMultiblock: NC,
-           compX: zC,
-           compY: ZC,
-           compZ: QC
-         };
-         WC[CC] = bC, WC[wC.g[CC].id] = bC
+ 
+     function kp(pp, ip, cp, Op, Ip) {
+       if (op(pp)) {
+         return `${Ip?"textureSampleLevel":"textureSample"}(${ip}, ${ip}Sampler, ${cp}, ${Yp(pp,`round(${Op})`)}${Ip?`, ${Ip}`:""})`
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L3791-L3806` → after: `L181-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L181-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/240.js#L181-L183) · [Before (L3791-L3806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/240.js#L3791-L3806)

```diff
-   },
-   38047: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       d: () => oC,
-       g: () => fC
-     });
-     var QC = ZC(9194),
-       wC = ZC(9243),
-       bC = ZC(9252);
-     const nC = wC.w.map((CC => {
-       let {
-         dx: zC,
-         dz: ZC
-       } = CC;
-       return [zC, 0, ZC]
-     }));
+       const Sp = Lp(pp, "vec3", cp, Op);
+       return Ip ? `textureLod(${ip}, ${Sp}, ${Ip})` : `texture(${ip}, ${Sp})`
+     }
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L3809-L3810` → after: `L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/240.js#L186) · [Before (L3809-L3810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/240.js#L3809-L3810)

```diff
-       const zC = QC.g[CC];
-       return !!zC && CC !== QC.d && !zC.model && !zC.NM && !1 !== zC.solid && !zC.qp
+       return op(pp) ? "!baseColor\\=\\w+\\(diffuseSampler,diffuseSamplerSampler,fragmentInputs\\.vDiffuseUV\\+uvOffset\\);" : "!baseColor\\=\\w+\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);"
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L3812-L3835` → after: `L188-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L188-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/240.js#L188-L193) · [Before (L3812-L3835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/240.js#L3812-L3835)

```diff
-     class oC {
-       constructor(CC) {
-         this.model = CC, this.reshapeOffsets = [...nC, [0, -1, 0]]
-       }
-       handles(CC) {
-         const zC = QC.g[CC];
-         return (null === zC || void 0 === zC ? void 0 : zC.model) === this.model && void 0 !== zC.attachedTop
-       }
-       affects(CC) {
-         return this.handles(CC) || fC(CC) || (0, bC.A)(QC.g[CC])
-       }
-       shape(CC, zC, ZC, nC, oC) {
-         let qC = this.handles(CC(zC, ZC + 1, nC)) ? wC.m : 0;
-         return wC.w.forEach(((oC, FC) => {
-           let {
-             dx: WC,
- ... (8 more removed lines; see GitHub link above)
+ 
+     function Rp(pp) {
+       return op(pp) ? {
+         "!varying vMainUV1: vec2f;": "centroid varying vMainUV1: vec2f;"
+       } : {
+         "!varying vec2 vMainUV1;": "#ifdef WEBGL2\ncentroid varying vec2 vMainUV1;\n#else\nvarying vec2 vMainUV1;\n#endif"
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L3838-L3839` → after: `L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/240.js#L196) · [Before (L3838-L3839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/240.js#L3838-L3839)

```diff
-   },
-   37834: (CC, zC, ZC) => {
+ 
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L3841-L3868` → after: `L198-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L198-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/240.js#L198-L218) · [Before (L3841-L3868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/240.js#L3841-L3868)

```diff
-       var ZC;
-       zC || (zC = {});
-       const QC = null !== (ZC = zC.customAttributes) && void 0 !== ZC ? ZC : {};
-       var wC, bC, nC;
-       "Gun" === (null === CC || void 0 === CC ? void 0 : CC.type) && (QC.shotsLeft = null !== (wC = null !== (bC = QC.shotsLeft) && void 0 !== bC ? bC : null === (nC = QC.gunStats) || void 0 === nC ? void 0 : nC.clipSize) && void 0 !== wC ? wC : CC.clipSize);
-       if (QC.enchantmentTier && (QC.enchantmentTier = QC.enchantmentTier.toString()), QC.enchantments)
-         for (const WC in QC.enchantments) {
-           const CC = QC.enchantments[WC];
-           if ("number" !== typeof CC) {
-             const zC = parseInt(CC);
-             isNaN(zC) || zC < 0 ? QC.enchantments[WC] = void 0 : QC.enchantments[WC] = zC > 1e9 ? 1e9 : zC
-           }
-         }
-       if (QC.enchantmentData)
-         for (const WC in QC.enchantmentData) {
-           const CC = QC.enchantmentData[WC];
- ... (12 more removed lines; see GitHub link above)
+       return op(pp) ? `vertexInputs.${ip}` : ip
+     }
+ 
+     function Mp(pp, ip) {
+       return op(pp) ? `vertexOutputs.${ip}` : ip
+     }
+ 
+     function Cp(pp, ip) {
+       return op(pp) ? `fragmentInputs.${ip}` : ip
+     }
+ 
+     function Ep(pp, ip) {
+       return op(pp) ? `uniforms.${ip}` : ip
+     }
+ 
+     function Xp(pp, ip, cp) {
+ ... (5 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L3889` → after: `L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/240.js#L222) · [Before (L3889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/240.js#L3889)

```diff
-       return nC <= CC && CC <= fC
+       return op(pp) ? "mesh.visibility" : "visibility"
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L3898-L3899` → after: `L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/240.js#L226) · [Before (L3898-L3899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/240.js#L3898-L3899)

```diff
-       var zC, ZC;
-       return "string" === typeof(null === CC || void 0 === CC || null === (zC = CC.persisted) || void 0 === zC || null === (ZC = zC.shared) || void 0 === ZC ? void 0 : ZC.text)
+       return op(pp) ? "fragmentInputs.position" : "gl_FragCoord"
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L3903` → after: `L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/240.js#L230) · [Before (L3903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/240.js#L3903)

```diff
-       return pC(CC) && "" !== CC.persisted.shared.text.trim()
+       return op(pp) ? "fragmentOutputs.color" : "gl_FragColor"
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L3907-L3909` → after: `L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/240.js#L234) · [Before (L3907-L3909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/240.js#L3907-L3909)

```diff
-       let [ZC, , QC] = zC;
-       const [bC, , nC] = wC.q[CC][MC];
-       return ZC * bC + QC * nC
+       return op(pp) ? `dpdx(${ip})` : `dFdx(${ip})`
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L3912-L3913` → after: `L237-L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L237-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/240.js#L237-L238) · [Before (L3912-L3913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/240.js#L3912-L3913)

```diff
-     function RC(CC, zC, ZC) {
-       return ZC[1] - zC[1] || GC(CC, zC) - GC(CC, ZC)
+     function Tp(pp, ip) {
+       return op(pp) ? `dpdy(${ip})` : `dFdy(${ip})`
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L3916-L3921` → after: `L241-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L241-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/240.js#L241-L242) · [Before (L3916-L3921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/240.js#L3916-L3921)

```diff
-     function AC(CC, zC, ZC, bC, fC) {
-       var oC;
-       let FC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : CC(zC[0], zC[1], zC[2]);
-       if (!(qC[FC - nC] & 1 << ZC)) return null;
-       const [WC, NC, MC] = wC.q[fC][ZC], gC = [zC[0] + WC, zC[1] + NC, zC[2] + MC], SC = CC(gC[0], gC[1], gC[2]), pC = null === (oC = QC.g[SC]) || void 0 === oC ? void 0 : oC.meta;
-       return (null === pC || void 0 === pC ? void 0 : pC.rootId) === bC && pC.rot === fC && qC[SC - nC] & 1 << (1 ^ ZC) ? gC : null
+     function fp(pp, ip) {
+       return op(pp) ? `inverseSqrt(${ip})` : `inversesqrt(${ip})`
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L3925-L3949` → after: `L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/240.js#L246) · [Before (L3925-L3949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/240.js#L3925-L3949)

```diff
-       const nC = CC(zC, ZC, bC);
-       if (!oC(nC)) return null;
-       const {
-         rootId: fC,
-         rot: qC
-       } = QC.g[nC].meta, WC = (zC, ZC) => {
-         let QC = zC,
-           wC = 1;
-         for (let bC = AC(CC, QC, ZC, fC, qC); bC && wC < FC; bC = AC(CC, QC, ZC, fC, qC)) QC = bC, wC++;
-         return {
-           end: QC,
-           cells: wC
-         }
-       }, pC = WC(WC([zC, ZC, bC], NC).end, gC).end, PC = WC(pC, MC).cells, [GC, , RC] = wC.q[qC][MC];
-       let xC = 1;
-       CC: for (; xC < FC; xC++)
- ... (9 more removed lines; see GitHub link above)
+       return op(pp) ? `select(${Op}, ${cp}, ${ip})` : `((${ip}) ? (${cp}) : (${Op}))`
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L3952-L3966` → after: `L249-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L249-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/240.js#L249-L250) · [Before (L3952-L3966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/240.js#L3952-L3966)

```diff
-     function JC(CC, zC) {
-       for (const ZC of function(CC) {
-           let {
-             anchor: zC,
-             rot: ZC,
-             width: QC,
-             height: bC
-           } = CC;
-           const [nC, , fC] = wC.q[ZC][MC], oC = [];
-           for (let wC = 0; wC < bC; wC++)
-             for (let CC = 0; CC < QC; CC++) oC.push([zC[0] + nC * CC, zC[1] - wC, zC[2] + fC * CC]);
-           return oC
-         }(CC))
-         if (pC(zC(ZC[0], ZC[1], ZC[2]))) return ZC;
-       return null
+     function hp(pp, ip, cp) {
+       return op(pp) ? `((${ip}) - (${cp}) * floor((${ip}) / (${cp})))` : `mod(${ip}, ${cp})`
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L3969-L3996` → after: `L253-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/240.js#L253-L254) · [Before (L3969-L3996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/240.js#L3969-L3996)

```diff
-     function IC(CC, zC, ZC, wC, bC) {
-       const nC = CC(ZC, wC, bC);
-       if (!oC(nC)) return null;
-       const {
-         rootId: fC,
-         rot: qC
-       } = QC.g[nC].meta, FC = [
-         [ZC, wC, bC]
-       ], NC = new Set([FC[0].join()]);
-       let MC = FC[0],
-         gC = null;
-       for (let QC = 0; QC < FC.length; QC++) {
-         const ZC = FC[QC];
-         if (RC(qC, ZC, MC) < 0 && (MC = ZC), pC(zC(ZC[0], ZC[1], ZC[2]))) {
-           const zC = xC(CC, ZC[0], ZC[1], ZC[2]);
-           (!gC || RC(qC, zC.anchor, gC.anchor) < 0) && (gC = zC)
- ... (12 more removed lines; see GitHub link above)
+     function ap(pp, ip, cp) {
+       return op(pp) ? `${ip} = vec4f(${cp}, ${ip}.a);` : `${ip}.rgb = ${cp};`
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L3999-L4017` → after: `L257-L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L257-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/240.js#L257-L262) · [Before (L3999-L4017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/240.js#L3999-L4017)

```diff
-     function iC(CC, zC, ZC, nC, fC) {
-       if (null !== ZC && oC(ZC)) {
-         const {
-           rootName: CC,
-           rot: zC
-         } = QC.g[ZC].meta;
-         if (wC.q[zC].some((CC => {
-             let [zC, ZC, QC] = CC;
-             return zC === nC[0] && ZC === nC[1] && QC === nC[2]
-           }))) return {
-           root: CC,
-           rot: zC
-         }
-       }
-       const [qC, FC] = wC.i[fC], WC = CC(zC[0] - qC, zC[1], zC[2] - FC);
-       return {
- ... (3 more removed lines; see GitHub link above)
+     function np(pp, ip, cp) {
+       return op(pp) ? `${ip} = vec4f(${ip}.rgb * (${cp}), ${ip}.a);` : `${ip}.rgb *= ${cp};`
+     }
+ 
+     function Fp(pp, ip, cp) {
+       return op(pp) ? `${ip} = vec4f(${cp}, ${ip}.w);` : `${ip}.xyz = ${cp};`
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L4020` → after: `L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/240.js#L265) · [Before (L4020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/240.js#L4020)

```diff
-   38055: (CC, zC, ZC) => {
+   40062: (pp, ip, cp) => {
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L4022-L4025` → after: `L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/240.js#L267) · [Before (L4022-L4025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/240.js#L4022-L4025)

```diff
-       d: () => bC,
-       e: () => nC,
-       i: () => wC,
-       l: () => fC
+       b: () => Op
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L4027-L4038` → after: `L269-L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L269-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/240.js#L269-L277) · [Before (L4027-L4038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/240.js#L4027-L4038)

```diff
-     var QC = ZC(330);
-     const wC = ["Snowball", "Snowball Launcher", "Pebble", "Reinforced Pebble", "Ball", "Reinforced Ball", "Mango", "Moonstone Orb", ...ZC(597).B.map((CC => `${CC} Spawn Orb`)), "Fireball", "RPG", "Obby RPG", "Super RPG", "Grenade Launcher", "Iceball", "Bouncy Bomb", "Coconut", " … [truncated]
-       bC = ["Obby RPG"];
- 
-     function nC(CC) {
-       const zC = CC.indexOf("|");
-       return -1 === zC ? {
-         item: CC,
-         clientPredictedThrower: null
-       } : {
-         item: CC.slice(0, zC),
-         clientPredictedThrower: CC.slice(zC + 1)
+     class Op {
+       static GetShadersRepository() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Op.ShadersRepository : Op.ShadersRepositoryWGSL
+       }
+       static GetShadersStore() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Op.ShadersStore : Op.ShadersStoreWGSL
+       }
+       static GetIncludesShadersStore() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Op.IncludesShadersStore : Op.IncludesShadersStoreWGSL
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L4041` → after: `L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/240.js#L280) · [Before (L4041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/240.js#L4041)

```diff
-     const fC = [...wC, "Arrow", "Arrow of Speed", "Arrow of Slowness", "Arrow of Poison", "Arrow of Weakness", "Arrow of Knockback", "Arrow of Strength", "Arrow of Defense", "Arrow of Invisibility", "Arrow of Jumping", "Arrow of Milk", "Arrow of Instant Damage", "Arrow of Regener … [truncated]
+     Op.ShadersRepository = "src/Shaders/", Op.ShadersStore = {}, Op.IncludesShadersStore = {}, Op.ShadersRepositoryWGSL = "src/ShadersWGSL/", Op.ShadersStoreWGSL = {}, Op.IncludesShadersStoreWGSL = {}
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/241.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/241.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774)

#### 1. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/241.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/241.js#L4)

```diff
-   37900: (CC, zC, ZC) => {
+   37479: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L6-L11` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/241.js#L6-L7) · [Before (L6-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/241.js#L6-L11)

```diff
-       c: () => qC,
-       g: () => QC,
-       i: () => fC,
-       m: () => wC,
-       n: () => nC,
-       r: () => bC
+       Color3: () => Op.d,
+       b: () => Op.h
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L13-L645` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/241.js#L9-L10) · [Before (L13-L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/241.js#L13-L645)

```diff
-     const QC = 1.001,
-       wC = .501,
-       bC = .025,
-       nC = .75,
-       fC = .08,
-       oC = 4;
- 
-     function qC() {
-       const CC = wC,
-         zC = bC,
-         ZC = CC - zC / 2,
-         QC = (2 * CC - 2 * zC) / (2 * oC - 1),
-         nC = [];
-       for (const wC of [-ZC, ZC])
-         for (const bC of [-ZC, ZC])
-           for (let ZC = 0; ZC < oC; ZC++) {
- ... (617 more removed lines; see GitHub link above)
+     var Op = cp(37487);
+     (0, Op.i)()
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/242.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/242.js` (39 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L4-L3887` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/242.js#L4) · [Before (L4-L3887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/242.js#L4-L3887)

```diff
-   38944: (CC, zC, ZC) => {
-     function QC(CC) {
-       return !(!CC.lobbyLeaderboardInfo && !CC.lobbyManage)
-     }
-     ZC.d(zC, {
-       d: () => QC
-     })
-   },
-   38923: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       e: () => bC,
-       g: () => nC
-     });
-     var QC = ZC(28);
-     let wC = !1;
- 
- ... (3868 more removed lines; see GitHub link above)
+   41280: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L3889-L3894` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/242.js#L6) · [Before (L3889-L3894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/242.js#L3889-L3894)

```diff
-       d: () => gC,
-       e: () => FC,
-       f: () => MC,
-       j: () => NC,
-       m: () => SC,
-       o: () => WC
+       noaDevTools: () => Ap
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L3896-L3902` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/242.js#L8-L12) · [Before (L3896-L3902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/242.js#L3896-L3902)

```diff
-     var QC = ZC(38832),
-       wC = ZC(37103),
-       bC = ZC(3611),
-       nC = ZC(1843),
-       fC = ZC(28),
-       oC = ZC(2753);
-     const qC = new QC.c;
+     var Op = cp(37769),
+       op = cp(37760),
+       Ip = cp(2849),
+       Sp = cp(1765),
+       xp = cp(41182);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L3904-L3915` → after: `L14-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L14-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/242.js#L14-L33) · [Before (L3904-L3915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/242.js#L3904-L3915)

```diff
-     function FC() {
-       return qC
-     }
- 
-     function WC() {
-       qC.clear()
-     }
- 
-     function NC() {
-       for (const CC of qC.ids()) {
-         const zC = qC.getName(CC);
-         void 0 !== zC && nC.d.delete(zC)
+     function Lp(pp) {
+       const {
+         WU: ip
+       } = pp, cp = ip.engine, Op = {
+         width: cp.getRenderWidth(),
+         height: cp.getRenderHeight()
+       };
+       return {
+         canvas: cp.getRenderingCanvas(),
+         maxTextureSize: cp.getCaps().maxTextureSize,
+         drawing: () => !pp.Fk,
+         resize: (pp, ip) => {
+           cp.setSize(pp, ip)
+         },
+         restoreSize: () => {
+           cp.setSize(Op.width, Op.height), ip.resize()
+ ... (4 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L3921-L3925` → after: `L39-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L39-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/242.js#L39-L67) · [Before (L3921-L3925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/242.js#L3921-L3925)

```diff
-       var ZC, QC;
-       if (qC.has(CC)) return qC.getSetting(CC, zC);
-       const wC = (0, oC.e)();
-       return null === (ZC = wC.QE[wC.qE]) || void 0 === ZC || null === (QC = ZC[CC]) || void 0 === QC ? void 0 : QC[zC]
-     }
+       let {
+         width: Yp,
+         height: Dp,
+         colouring: Ap
+       } = ip;
+       const Pp = "normals" === Ap,
+         Wp = "depth" === Ap;
+       return new Promise((ip => {
+         try {
+           const yp = (0, Ip.g)();
+           if (yp.WU.yU) return "screenshot" !== pp || null !== Ap ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void ip()) : void(0, xp.g)(Lp(yp), Yp, Dp).finally(ip);
+           const Up = yp.WU.engine,
+             wp = yp.WU.Gl(),
+             vp = Yp,
+             tp = Dp;
+           Promise.all([Promise.all([cp.e(258), cp.e(259), cp.e(238)]).then((() => cp(61368))), Promise.all([cp.e(237), cp.e(236), cp.e(258), cp.e(259), cp.e(256), cp.e(260), cp.e(263), cp.e(316), cp.e(243)]).then((() => cp(61372))), Promise.all([cp.e(237), cp.e(236), cp.e(258), c … [truncated]
+ ... (13 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L3927-L3940` → after: `L69-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L69-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/242.js#L69-L222) · [Before (L3927-L3940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/242.js#L3927-L3940)

```diff
-     function gC(CC) {
-       const {
-         added: zC,
-         removed: ZC,
-         settingChanges: QC
-       } = qC.apply(CC);
-       for (const {
-           playerId: wC,
-           name: bC
-         }
-         of ZC) void 0 === bC || pC(wC) || nC.d.delete(bC);
-       for (const {
-           playerId: bC,
-           settings: nC
+             function kp() {
+               var pp;
+               ep && (ep = !1, (0, Op.f)(wp.meshes, !1)), null === (pp = jp) || void 0 === pp || pp(), jp = null, dp.forEach((pp => {
+                 const ip = Hp.get(pp);
+                 ip && (pp.material = ip)
+               }))
+             }
+             if (Pp) {
+               const pp = [],
+                 ip = [];
+               dp.forEach((cp => {
+                 const Op = cp.name.toLowerCase(),
+                   op = cp.bJ().boundingBox.center,
+                   Ip = wp.activeCamera.position.subtract(op).length();
+                 Op.includes("sky") || Op.includes("background") || Op.includes("environment") || Ip > 1e3 ? ip.push(cp) : pp.push(cp)
+               })), Ap("devtoolsNormal", yp);
+ ... (138 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L3942-L3946` → after: `L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/242.js#L224) · [Before (L3942-L3946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/242.js#L3942-L3946)

```diff
-         of QC)
-         if (pC(bC)) SC(bC, nC);
-         else
-           for (const CC in nC)(0, wC.h)(bC, CC, nC[CC]);
-       (zC.length > 0 || ZC.length > 0) && fC.o.bp("playerRosterChanged", qC.ids())
+       }))
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L3948-L3953` → after: `L226-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L226-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/242.js#L226-L242) · [Before (L3948-L3953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/242.js#L3948-L3953)

```diff
- 
-     function SC(CC) {
-       let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qC.getSettings(CC);
-       if (zC) {
-         (0, wC.d)(CC);
-         for (const ZC in zC)(0, wC.b)(CC, ZC, zC[ZC])
+     const Ap = new class {
+       constructor() {
+         this.tools = Yp.ALL_DEV_TOOLS
+       }
+       downloadScene(pp, ip) {
+         return Dp(pp, ip)
+       }
+       async setAmbientLightIntensity(pp) {
+         const {
+           Color3: ip
+         } = await Promise.all([cp.e(237), cp.e(241)]).then((() => cp(37479)));
+         (0, Ip.g)().WU.Gl().ambientColor = ip.FromArray([pp, pp, pp])
+       }
+       capturePhoto(pp, ip, cp) {
+         return function(pp, ip, cp, Op) {
+           return (0, xp.c)(Lp(pp), ip, cp, Op)
+ ... (1 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L3961` → after: `L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/242.js#L246) · [Before (L3961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/242.js#L3961)

```diff
-   37928: (CC, zC, ZC) => {
+   41182: (pp, ip, cp) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L3964-L3967` → after: `L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/242.js#L249) · [Before (L3964-L3967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/242.js#L3964-L3967)

```diff
-       d: () => JC,
-       f: () => iC,
-       h: () => vC,
-       j: () => hC
+       g: () => Lp
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L3969-L3990` → after: `L251-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L251-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/242.js#L251-L254) · [Before (L3969-L3990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/242.js#L3969-L3990)

```diff
-     var QC = ZC(36961),
-       wC = ZC(37931),
-       bC = ZC(338),
-       nC = ZC.n(bC),
-       fC = ZC(3392);
-     const oC = new QC.Eg,
-       qC = new QC.Eg,
-       FC = new QC.Eg,
-       WC = new QC.Eg,
-       NC = new QC.Eg,
-       MC = [0, 0, 0],
-       gC = {
-         x: 0,
-         y: 0
-       },
-       SC = new QC.Eg(1, 0, 0),
- ... (6 more removed lines; see GitHub link above)
+     var Op = cp(1779);
+     const op = 33177600,
+       Ip = 3e4;
+     let Sp = !1;
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L3992-L4015` → after: `L256-L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L256-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/242.js#L256-L305) · [Before (L3992-L4015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/242.js#L3992-L4015)

```diff
-     function JC(CC, zC) {
-       var ZC, wC;
-       const bC = IC(CC, zC);
-       if (bC) {
-         const CC = bC.x,
-           zC = bC.y,
-           ZC = CC - 50,
-           QC = zC - 50;
-         return Math.abs(ZC) <= fC.c && Math.abs(QC) <= (0, fC.n)() ? {
-           x: CC,
-           y: zC
-         } : YC(ZC, QC)
-       }
-       FC.L_(zC[0], zC[1], zC[2]),
-         function(CC) {
-           const zC = CC.Vg.iZC(),
- ... (8 more removed lines; see GitHub link above)
+     function xp(pp, ip, cp) {
+       let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
+       const {
+         scale: xp = 1,
+         type: Lp = "image/png",
+         quality: Yp
+       } = Op;
+       if (!pp.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
+       if (Sp) return Promise.reject(new Error("A screenshot is already being taken"));
+       Sp = !0;
+       const Dp = function(pp, ip, cp) {
+         const Op = Math.max(1, pp),
+           Ip = Math.max(1, ip),
+           Sp = Math.min(1, cp / Math.max(Op, Ip), Math.sqrt(op / (Op * Ip)));
+         return {
+           width: Math.max(1, Math.floor(Op * Sp)),
+ ... (34 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L4017-L4028` → after: `L307-L313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L307-L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/242.js#L307-L313) · [Before (L4017-L4028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/242.js#L4017-L4028)

```diff
- 
-     function IC(CC, zC) {
-       const ZC = CC.Vg.Km(),
-         wC = ZC.mg(),
-         bC = wC.getRenderWidth(),
-         nC = wC.getRenderHeight();
-       xC.width = bC, xC.height = nC;
-       const fC = CC.Vg.iZC(),
-         FC = fC ? AC.L_(fC.eye[0], fC.eye[1], fC.eye[2]) : CC.Vg.camera.globalPosition;
-       oC.L_(FC.x + 10 * zC[0], FC.y + 10 * zC[1], FC.z + 10 * zC[2]);
-       const WC = fC ? QC.Matrix.FromArrayToRef(fC.viewProjectionMatrix, 0, GC) : ZC.getTransformMatrix();
-       return QC.Eg.ProjectToRef(oC, PC, WC, xC, qC), qC.z < 0 || qC.z > 1 ? null : (gC.x = qC.x / bC * 100, gC.y = qC.y / nC * 100, gC)
+     async function Lp(pp, ip, cp) {
+       try {
+         const op = await xp(pp, ip, cp);
+         (0, Op.c)(op.blob, `bloxd-screenshot-${op.width}x${op.height}-${Date.now()}.png`)
+       } catch (op) {
+         console.error("Error taking screenshot:", op)
+       }
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L4032` → after: `L327-L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L327-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/242.js#L327-L330) · [Before (L4032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/242.js#L4032)

```diff
-       return JC(CC, KC(CC, zC))
+       const cp = pp;
+       cp._noaFaceGroups = null !== ip && void 0 !== ip ? ip : null, cp._noaFaceEpoch = -1, cp._noaFaceMask = -1, cp._noaFaceCount = -1, cp._noaFaceMaterial = null;
+       const Op = pp.Am;
+       Op && 1 === Op.length && (Op[0].indexStart = 0, Op[0].indexCount = pp.getTotalIndices())
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L4036-L4045` → after: `L334-L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L334-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/242.js#L334-L340) · [Before (L4036-L4045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/242.js#L4036-L4045)

```diff
-       const ZC = IC(CC, KC(CC, zC));
-       return ZC && {
-         x: ZC.x,
-         y: ZC.y
-       }
-     }
- 
-     function eC(CC) {
-       var zC, ZC;
-       return 1 / (null !== (zC = null === (ZC = CC.Vg.iZC()) || void 0 === ZC ? void 0 : ZC.projectionMatrix[0]) && void 0 !== zC ? zC : CC.Vg.Km().activeCamera.getProjectionMatrix().m[0])
+       if (ip) {
+         Ip++;
+         for (const ip of pp) {
+           const pp = ip._noaFaceGroups;
+           pp && Sp(ip, pp)
+         }
+       } else Ip = Math.max(0, Ip - 1)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L4049-L4129` → after: `L344-L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L344-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/242.js#L344-L349) · [Before (L4049-L4129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/242.js#L4049-L4129)

```diff
-       const QC = CC.Vg.iZC(),
-         wC = QC ? QC.worldMatrix : CC.Vg.Km().activeCamera.getWorldMatrix().m,
-         bC = CC.YN;
-       for (let nC = 0; nC < 3; nC++) zC[nC] = wC[12 + nC] + bC[nC], ZC[nC] = wC[8 + nC];
-       nC().normalize(ZC, ZC)
-     }
- 
-     function KC(CC, zC) {
-       const ZC = CC.YN,
-         QC = CC.Vg.iZC(),
-         wC = QC ? AC.L_(QC.eye[0], QC.eye[1], QC.eye[2]) : CC.Vg.camera.globalPosition;
-       return MC[0] = zC[0] - ZC[0] - wC.x, MC[1] = zC[1] - ZC[1] - wC.y, MC[2] = zC[2] - ZC[2] - wC.z, nC().normalize(MC, MC), MC
-     }
- 
-     function YC(CC, zC) {
-       return (0, fC.f)(CC, zC, fC.c, (0, fC.n)())
- ... (65 more removed lines; see GitHub link above)
+       let op = -1,
+         Ip = 0;
+       for (let Sp = 0; Sp < Op.f; Sp++) {
+         const cp = pp[Sp],
+           xp = pp[Sp + 1];
+         xp > cp && ip & 1 << Op.e[Sp] && (op < 0 && (op = cp), Ip = xp)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L4138-L4152` → after: `L354-L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L354-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/242.js#L354-L355) · [Before (L4138-L4152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/242.js#L4138-L4152)

```diff
-       constructor(CC) {
-         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
-         this.onSilent = CC, this.now = zC, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
-           const CC = this.now(),
-             zC = CC - this.lastCheckAt <= 2e3;
-           this.lastCheckAt = CC;
-           const ZC = "visible" === document.visibilityState;
-           !ZC || zC && this.wasVisible || (this.resumedAt = CC), this.wasVisible = ZC, ZC && CC - this.lastHeardAt > 12e3 && CC - this.resumedAt > 2e3 && this.onSilent()
-         }, this.lastHeardAt = zC(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
-       }
-       heard() {
-         this.lastHeardAt = this.now()
-       }
-       dispose() {
-         clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
+       constructor(pp, ip) {
+         this.Qy = pp, this.engine = ip, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L4154-L4216` → after: `L357-L389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L357-L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/242.js#L357-L389) · [Before (L4154-L4216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/242.js#L4154-L4216)

```diff
-     }
-   },
-   38804: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       b: () => NC
-     });
-     var QC = ZC(184),
-       wC = ZC(338),
-       bC = ZC.n(wC),
-       nC = ZC(36637),
-       fC = ZC(36641),
-       oC = ZC(2753);
-     const qC = QC.f.Dp * QC.f.playerEyeToHeightRatio,
-       FC = 250,
-       WC = 1.1,
-       NC = new class {
- ... (47 more removed lines; see GitHub link above)
+       apply(pp, ip) {
+         if (!ip) return;
+         const cp = ip.getProjectionMatrix().m,
+           Sp = 0 === Ip && 0 === cp[15],
+           xp = ip.globalPosition,
+           {
+             engine: Yp
+           } = this,
+           Dp = Sp ? (0, op.c)(cp, Yp.getRenderWidth(), Yp.getRenderHeight()) : 0;
+         xp.x === this.eyeX && xp.y === this.eyeY && xp.z === this.eyeZ && Dp === this.focalPx && Sp === this.culling || (this.epoch++, this.eyeX = xp.x, this.eyeY = xp.y, this.eyeZ = xp.z, this.focalPx = Dp, this.culling = Sp);
+         const {
+           epoch: Ap,
+           range: Pp
+         } = this, Wp = this.Qy / 2, yp = Wp * Math.sqrt(3), Up = pp.data, wp = pp.length;
+         let vp = 0;
+         for (let Ip = 0; Ip < wp; Ip++) {
+ ... (17 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L4263` → after: `L403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/242.js#L403) · [Before (L4263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/242.js#L4263)

```diff
-   38886: (CC, zC, ZC) => {
+   37760: (pp, ip, cp) => {
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L4265-L4266` → after: `L405-L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L405-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/242.js#L405-L406) · [Before (L4265-L4266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/242.js#L4265-L4266)

```diff
-       c: () => NC,
-       f: () => FC
+       d: () => Lp,
+       g: () => xp
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L4268-L4273` → after: `L408-L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L408-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/242.js#L408-L410) · [Before (L4268-L4273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/242.js#L4268-L4273)

```diff
-     var QC = ZC(184),
-       wC = ZC(1740),
-       bC = ZC(1152),
-       nC = ZC(8897);
-     const fC = [250, 500, 1e3, 2e3, 1250],
-       oC = 406;
+     const Op = new WeakSet;
+     let op = 0;
+     const Ip = new Set;
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L4275-L4294` → after: `L412-L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L412-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/242.js#L412-L413) · [Before (L4275-L4294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/242.js#L4275-L4294)

```diff
-     function qC(CC) {
-       if ("object" !== typeof CC || null === CC) return !1;
-       const {
-         code: zC,
-         message: ZC
-       } = CC, wC = QC.e.duplicateLobbyNameError;
-       return (zC === wC.code || zC === oC) && (ZC === wC.text || ZC === wC.text + QC.k)
-     }
-     async function FC(CC, zC) {
-       let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : wC.c;
-       for (let wC = 0;; wC++) {
-         let nC;
-         (0, bC.n)(zC);
-         try {
-           return await CC()
-         } catch (QC) {
- ... (4 more removed lines; see GitHub link above)
+     function Sp(pp, ip) {
+       pp._data = ip
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L4299-L4301` → after: `L417-L418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L417-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/242.js#L417-L418) · [Before (L4299-L4301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/242.js#L4299-L4301)

```diff
-       if (qC(CC)) return !0;
-       const zC = (0, nC.e)(CC);
-       return "number" === typeof zC && WC.has(zC)
+       var ip, cp;
+       (null !== (ip = null === (cp = pp.getBuffer()) || void 0 === cp ? void 0 : cp.TA) && void 0 !== ip ? ip : 0) > 0 && (Op.add(pp), 0 === op ? Sp(pp, null) : Ip.add(pp))
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L4312-L4323` → after: `L422-L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L422-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/242.js#L422-L441) · [Before (L4312-L4323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/242.js#L4312-L4323)

```diff
-       return "refetchCode" === CC || "devDownloadJson" === CC || CC.startsWith("Plugin")
-     }
- 
-     function bC(CC, zC) {
-       "refetchCode" !== CC ? "Plugin|MobAiPlugin|ShowPetUi" !== CC ? Promise.all([ZC.e(107), ZC.e(108), ZC.e(103), ZC.e(105), ZC.e(214)]).then((() => ZC(41552))).then((ZC => {
-         let {
-           runClientGameMessage: QC
-         } = ZC;
-         QC(CC, zC)
-       })).catch((zC => {
-         console.error(`Game message ${CC} failed`, zC)
-       })) : QC.o.bp("showPetUi", zC) : QC.o.bp("refetchCode")
+       op++;
+       for (const cp of function(pp) {
+           const ip = new Set;
+           for (const op of pp) {
+             const pp = op.geometry;
+             for (const op of Object.values(null !== (cp = null === pp || void 0 === pp ? void 0 : pp.getVertexBuffers()) && void 0 !== cp ? cp : {})) {
+               var cp;
+               const pp = op.getWrapperBuffer();
+               Op.has(pp) && ip.add(pp)
+             }
+           }
+           return ip
+         }(pp)) cp.getData() || Yp(cp), Ip.add(cp);
+       let ip = !0;
+       return () => {
+         if (ip && (ip = !1, op--, 0 === op)) {
+ ... (4 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L4339-L4346` → after: `L445-L449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L445-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/242.js#L445-L449) · [Before (L4339-L4346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/242.js#L4339-L4346)

```diff
-       let {
-         Kw: zC,
-         Yw: ZC
-       } = CC;
-       const FC = null !== zC && void 0 !== zC ? zC : (0, fC.d)().gameNameWithVariation;
-       (0, QC.R)(FC) && ((0, qC.k)(), (0, nC.X)((() => {
-         console.log("Received matchmaking order from game server to game", zC), (0, bC.g)("inGameReplay"), (0, oC.navigatePreserveSearch)((0, wC.b)(FC, null !== ZC && void 0 !== ZC ? ZC : void 0))
-       }), "video_start"))
+       const ip = pp.getBuffer();
+       if (!ip || !(ip.TA > 0)) return;
+       const cp = pp._engine,
+         Op = new Uint8Array(ip.TA);
+       cp.bindArrayBuffer(ip), cp._gl.getBufferSubData(cp._gl.ARRAY_BUFFER, 0, Op), cp._resetVertexBufferBinding(), Sp(pp, Op)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L4349` → after: `L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/242.js#L452) · [Before (L4349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/242.js#L4349)

```diff
-   38841: (CC, zC, ZC) => {
+   37767: (pp, ip, cp) => {
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L4352-L4354` → after: `L455-L460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L455-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/242.js#L455-L460) · [Before (L4352-L4354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/242.js#L4352-L4354)

```diff
-       i: () => nC,
-       m: () => fC,
-       o: () => qC
+       f: () => Ip,
+       g: () => Lp,
+       j: () => Op,
+       n: () => xp,
+       r: () => op,
+       v: () => Yp
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L4356-L4365` → after: `L462-L473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L462-L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/242.js#L462-L473) · [Before (L4356-L4365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/242.js#L4356-L4365)

```diff
-     var QC = ZC(28),
-       wC = ZC(1307);
-     const bC = new Map;
- 
-     function nC(CC, zC) {
-       QC.o.bp("newUiRequest", {
-         id: CC,
-         clientParameters: zC
-       }, !0)
-     }
+     const Op = 6,
+       op = [0, 2, 4, 1, 3, 5, 0, 2],
+       Ip = 6,
+       Sp = [1, 0, 3, 2, 5, 4];
+     for (let Dp = Ip; Dp < op.length; Dp++)
+       if (op[Dp] !== op[Dp - Ip]) throw new Error("FACE_LAYOUT must repeat a prefix of its base groups");
+     const xp = op.length + 1,
+       Lp = (() => {
+         const pp = [];
+         for (let ip = 0; ip < Ip; ip++) pp[op[ip]] = ip;
+         return pp
+       })();
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L4368-L4389` → after: `L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/242.js#L476) · [Before (L4368-L4389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/242.js#L4368-L4389)

```diff
-       QC.o.bp("removeUiRequest", CC, !0);
-       const zC = bC.get(CC);
-       zC && (zC.tearDownNotification(), bC.delete(CC))
-     }
- 
-     function oC() {
-       QC.o.bp("clearUiRequests");
-       for (const CC of bC.values()) CC.tearDownNotification();
-       bC.clear()
-     }
- 
-     function qC(CC, zC, ZC, QC) {
-       const nC = wC.NotificationProvider.showPromptPopup({
-         title: zC,
-         confirmText: "general:yes",
-         cancelText: "general:no",
- ... (6 more removed lines; see GitHub link above)
+       return !!pp && pp.backFaceCulling && (0 === pp.transparencyMode || 1 === pp.transparencyMode)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L4392` → after: `L479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/242.js#L479) · [Before (L4392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/242.js#L4392)

```diff
-   38920: (CC, zC, ZC) => {
+   37772: (pp, ip, cp) => {
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L4394-L4395` → after: `L481-L485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L481-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/242.js#L481-L485) · [Before (L4394-L4395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/242.js#L4394-L4395)

```diff
-       e: () => MC,
-       h: () => NC
+       c: () => xp,
+       d: () => Lp,
+       g: () => Dp,
+       j: () => Yp,
+       m: () => yp
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L4397-L4419` → after: `L487-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L487-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/242.js#L487-L491) · [Before (L4397-L4419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/242.js#L4397-L4419)

```diff
-     const QC = "ue:",
-       wC = ["keydown", "keyup", "mousedown", "mouseup", "pointerdown", "pointerup", "touchstart", "touchend"],
-       bC = "[A-Za-z0-9]{1,24}",
-       nC = 15,
-       fC = new RegExp(`^${bC}$`);
-     new RegExp(`^${QC}(${[...wC,"other"].join("|")}):(?:n|k(${bC})|b(0|[1-9][0-9]?)):([01])([01])$`);
- 
-     function oC(CC, zC, ZC, bC, oC) {
-       const qC = "string" === typeof CC && wC.includes(CC) ? CC : "other";
-       let FC = "n";
-       return "string" === typeof zC ? FC = fC.test(zC) ? `k${zC}` : "n" : "number" === typeof ZC && Number.isInteger(ZC) && ZC >= 0 && ZC <= nC && (FC = `b${ZC}`), `${QC}${qC}:${FC}:${bC?1:0}${oC?1:0}`
-     }
-     var qC = ZC(1584),
-       FC = ZC(1654);
-     let WC = null;
- 
- ... (7 more removed lines; see GitHub link above)
+     var Op = cp(37767);
+     const op = 1 / 16,
+       Ip = 1 / 64,
+       Sp = 2048;
+     Op.j;
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L4421-L4432` → after: `L493-L494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L493-L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/242.js#L493-L494) · [Before (L4421-L4432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/242.js#L4421-L4432)

```diff
-     function MC(CC) {
-       return WC ??= function(CC) {
-         try {
-           const {
-             editable: zC,
-             outsideView: ZC
-           } = NC(CC.target), QC = CC;
-           return oC(CC.type, QC.code, QC.button, zC, ZC)
-         } catch {
-           return oC(null, null, null, !1, !1)
-         }
-       }(CC), WC
+     function xp(pp, ip, cp) {
+       return Math.min(Math.abs(pp[0] * ip), Math.abs(pp[5] * cp)) / 2
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L4446-L4451` → after: `L497-L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L497-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/242.js#L497-L498) · [Before (L4446-L4451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/242.js#L4446-L4451)

```diff
-     function fC(CC) {
-       let {
-         lobbyName: zC,
-         gameNameWithVariation: ZC
-       } = CC;
-       return !(0, QC.U)(zC) || null !== ZC && (ZC.startsWith("testGym") || (0, wC.i)(ZC))
+     function Lp(pp, ip) {
+       return op + Ip * pp * pp / ip
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L4454-L4455` → after: `L501-L503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L501-L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/242.js#L501-L503) · [Before (L4454-L4455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/242.js#L4454-L4455)

```diff
-     function oC(CC) {
-       return CC.rb === bC.d.Leave || CC.rb === bC.d.Cursor
+     function Yp(pp, ip, cp, op, Ip) {
+       const Sp = Op.n;
+       return Dp(pp[Sp], pp[Sp + 1], pp[Sp + 2], pp[Sp + 3], pp[Sp + 4], pp[Sp + 5], ip, cp, op, Ip)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L4458-L4474` → after: `L506-L507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L506-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/242.js#L506-L507) · [Before (L4458-L4474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/242.js#L4458-L4474)

```diff
-     function qC(CC) {
-       nC.o.bp("codeCollab", {
-         type: CC.rb,
-         docKey: CC.sb,
-         version: CC.Tb,
-         editorCount: CC.ab,
-         peers: CC.tb,
-         updates: CC.Db,
-         playerId: CC.jb,
-         playerName: CC.yb,
-         colour: CC.Lb,
-         anchor: CC.Ub,
-         head: CC.Bb,
-         existingCursors: CC.Ob,
-         files: CC.kb,
-         engineSettings: CC.Vb
- ... (1 more removed lines; see GitHub link above)
+     function Dp(pp, ip, cp, Op, op, Ip, Sp, xp, Lp, Yp) {
+       return (Sp <= pp - Yp ? 0 : 1) | (Sp >= ip + Yp ? 0 : 2) | (xp <= cp - Yp ? 0 : 4) | (xp >= Op + Yp ? 0 : 8) | (Lp <= op - Yp ? 0 : 16) | (Lp >= Ip + Yp ? 0 : 32)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L4476-L4502` → after: `L509-L519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L509-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/242.js#L509-L519) · [Before (L4476-L4502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/242.js#L4476-L4502)

```diff
-   },
-   38832: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       c: () => QC
-     });
-     class QC {
-       constructor() {
-         this.members = new Map
-       }
-       apply(CC) {
-         const zC = {
-           added: [],
-           removed: [],
-           settingChanges: []
-         };
-         for (const QC of CC.OZ) {
- ... (11 more removed lines; see GitHub link above)
+     const Ap = (() => {
+         const pp = [];
+         for (let ip = 0; ip < Op.r.length; ip++) {
+           let cp = 0;
+           for (let op = ip + 1; op <= Op.r.length; op++) {
+             const Ip = 1 << Op.r[op - 1];
+             if (cp & Ip) break;
+             cp |= Ip, pp.push({
+               start: ip,
+               end: op,
+               Bc: cp
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L4515-L4536` → after: `L524-L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L524-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/242.js#L524-L529) · [Before (L4515-L4536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/242.js#L4515-L4536)

```diff
-       }
-       has(CC) {
-         return this.members.has(CC)
-       }
-       ids() {
-         return [...this.members.keys()]
-       }
-       getName(CC) {
-         var zC, ZC;
-         return null !== (zC = null === (ZC = this.members.get(CC)) || void 0 === ZC ? void 0 : ZC.name) && void 0 !== zC ? zC : void 0
-       }
-       getSettings(CC) {
-         var zC;
-         return null === (zC = this.members.get(CC)) || void 0 === zC ? void 0 : zC.settings
-       }
-       getSetting(CC, zC) {
- ... (6 more removed lines; see GitHub link above)
+       })(),
+       Pp = [];
+ 
+     function Wp(pp, ip) {
+       const cp = Op.g[ip];
+       return pp[cp + 1] - pp[cp]
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L4546-L4551` → after: `L532-L566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L532-L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/242.js#L532-L566) · [Before (L4546-L4551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/242.js#L4546-L4551)

```diff
-     function wC(CC) {
-       const zC = CC.type;
-       return {
-         type: zC,
-         params: CC[zC]
-       }
+     function yp(pp, ip, cp) {
+       let op = 0;
+       for (let Sp = 0; Sp < Op.j; Sp++) Wp(pp, Sp) > 0 && (op |= 1 << Sp);
+       if (0 === (ip &= op)) return 0;
+       if (ip === op) return cp[0] = 0, cp[1] = pp[Op.f], 1;
+       let Ip = null,
+         xp = 1 / 0;
+       for (const Yp of function(pp) {
+           let ip = Pp[pp];
+           if (ip) return ip;
+           const cp = new Map,
+             Op = (pp, ip) => {
+               const Op = 4 * pp + ip.length / 2;
+               cp.has(Op) || cp.set(Op, {
+                 Bc: pp,
+                 windows: ip
+ ... (19 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/243.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/243.js` (105 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7)

#### 1. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L2)

```diff
- export const ids = [243];
+ export const ids = [243, 244];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L4)

```diff
-   38326: (CC, zC, ZC) => {
+   40445: (pp, ip, cp) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L6-L15628` → after: `L6-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L6-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L6-L21) · [Before (L6-L15628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L6-L15628)

```diff
-       c: () => nC
-     });
-     var QC = ZC(38334);
-     const wC = [0, 0, 0];
-     class bC {
-       constructor(CC) {
-         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wC;
-         this.pool = CC, this.origin = zC, this.count = 0, this.free = []
-       }
-       take() {
-         var CC;
-         const zC = null !== (CC = this.free.pop()) && void 0 !== CC ? CC : this.count++;
-         return zC >= this.pool.HW && this.pool.grow(Math.max(2 * this.pool.HW, zC + 1)), this.hide(zC), zC
-       }
-       release(CC) {
-         this.hide(CC), this.free.push(CC)
- ... (15607 more removed lines; see GitHub link above)
+       b: () => Dp,
+       d: () => Pp
+     });
+     var Op = cp(40203),
+       op = cp(40210),
+       Ip = cp(37320),
+       Sp = cp(37487),
+       xp = cp(40451),
+       Lp = cp(40415),
+       Yp = cp(37368);
+     let Dp = (() => {
+         var pp;
+         let ip, cp, Lp = xp.d,
+           Yp = [],
+           Dp = [],
+           Ap = [],
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L15630-L15648` → after: `L23-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L23-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L23-L25) · [Before (L15630-L15648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L15630-L15648)

```diff
-         for (const QC of CC) {
-           const [CC, wC, bC] = QC.focus;
-           zC.push({
-             x: CC,
-             y: wC - 1,
-             z: bC,
-             h: 2,
-             faces: Lp
-           });
-           for (let zC = 0; zC < 4; zC++) {
-             if (!QC.live[zC]) continue;
-             const [CC, wC, bC] = pQ(QC.focus, zC, nQ.LASER_D), [nC, , fC] = SQ[zC], oC = Lp.filter((CC => CC[0] !== nC || CC[2] !== fC || 0 !== CC[1]));
-             ZC.push({
-               x: CC,
-               y: wC,
-               z: bC,
- ... (3 more removed lines; see GitHub link above)
+         return pp = class extends Lp {
+           constructor(pp, ip, cp, op) {
+             super(pp, cp, op), this.groundColor = (0, Op.l)(this, Yp, new Sp.d(0, 0, 0)), this.direction = ((0, Op.l)(this, Dp), (0, Op.l)(this, Ap, void 0)), (0, Op.l)(this, Pp), this.direction = ip || Ip.o.Up()
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L15650-L15689` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L27-L28) · [Before (L15650-L15689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L15650-L15689)

```diff
-         }
-         this.green.setSources(zC), this.pink.setSources(ZC)
-       }
-       onAfterRender(CC) {
-         const zC = performance.now(),
-           ZC = 0 === this.lastMs ? 0 : Math.min(zC - this.lastMs, 250) / 1e3;
-         if (this.lastMs = zC, 0 === this.colliders.length || !CC.particlesEnabled()) return;
-         const QC = CC.getCameraPosition();
-         this.green.ZN(CC, ZC, QC), this.pink.ZN(CC, ZC, QC)
-       }
-       dispose() {
-         this.green.dispose(), this.pink.dispose(), this.colliders = []
-       }
-     }
-     const Bp = 1.04,
-       Op = jp([1, 120 / 255, 220 / 255]),
- ... (24 more removed lines; see GitHub link above)
+           _buildUniformLayout() {
+             this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniform … [truncated]
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L15691-L15792` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L30-L31) · [Before (L15691-L15792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L15691-L15792)

```diff
-           of this.store.colliders()) ZC.on && ZC.live.some(Boolean) && (this.addBeams(CC, ZC), zC.push(ZC)), ZC.blockers.length > 0 && this.addMarkers(CC, ZC);
-         this.glow.setSources(zC)
-       }
-       addBeams(CC, zC) {
-         const [ZC, QC, wC] = zC.focus, bC = wq - .25, nC = (.25 + wq) / 2;
-         for (let fC = 0; fC < 4; fC++) {
-           if (!zC.live[fC]) continue;
-           const [oC, , qC] = SQ[fC], FC = 0 !== oC, WC = {
-             positions: [],
-             indices: []
-           };
-           Dp(WC, 0, 0, 0, FC ? bC : .2, .2, FC ? .2 : bC);
-           const NC = [ZC + .5 + oC * nC, QC + .5, wC + .5 + qC * nC],
-             MC = CC.createGameMesh(WC, Op, NC);
-           this.meshes.push(MC), this.beams.push({
-             mesh: MC,
- ... (86 more removed lines; see GitHub link above)
+           getClassName() {
+             return "HemisphericLight"
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L15794-L15836` → after: `L33-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L33-L34) · [Before (L15794-L15836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L15794-L15836)

```diff
-           of this.store.colliders()) {
-           bC.focus.every(((CC, ZC) => Math.abs(CC + .5 - zC[ZC]) <= nQ.GHOST_REACH)) && QC.push(Qq(bC, ZC))
-         }
-         const wC = fP(QC);
-         wC !== this.shownKey && this.show(CC, wC, QC)
-       }
-       preview(CC, zC) {
-         const ZC = CC.getTargetedBlock(),
-           QC = ZC ? [ZC.wp[0], ZC.wp[1], ZC.wp[2]] : null,
-           wC = null !== QC && QC.every(((CC, ZC) => Math.abs(CC + .5 - zC[ZC]) <= 8)),
-           bC = this.store.site(),
-           nC = wC && bC ? function(CC, zC, ZC) {
-             const QC = gQ(CC);
-             if (!QC.every(zC)) return null;
-             const wC = RQ(CC, ZC);
-             return {
- ... (27 more removed lines; see GitHub link above)
+           setDirectionToTarget(pp) {
+             return this.direction = Ip.o.Normalize(pp.subtract(Ip.o.Zero())), this.direction
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L15838-L15846` → after: `L36-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L36-L37) · [Before (L15838-L15846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L15838-L15846)

```diff
-           of ZC) {
-           for (const [zC, ZC, QC] of bC) {
-             const wC = {
-               positions: [],
-               indices: []
-             };
-             bP(wC, 0, 0, 0);
-             const bC = CC.createGameMesh(wC, jp(CP), [zC + .5, ZC + .5, QC + .5]);
-             this.meshes.push(bC), this.pulses.push(bC)
+           getShadowGenerator() {
+             return null
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L15848-L15854` → after: `L39-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L39-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L39-L95) · [Before (L15848-L15854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L15848-L15854)

```diff
-           nC.length > 0 && this.meshes.push(oP(CC, nC, jp(zP))), fC.length > 0 && this.meshes.push(oP(CC, fC, jp(ZP), 1.06, .07)), oC.length > 0 && this.meshes.push(oP(CC, oC, jp(wP)))
-         }
-       }
-       clear(CC) {
-         for (const zC of this.meshes) CC.disposeGameMesh(zC);
-         this.meshes = [], this.pulses = []
-       }
+           transferToEffect(pp, ip) {
+             const cp = Ip.o.Normalize(this.direction);
+             return this._uniformBuffer.updateFloat4("vLightData", cp.x, cp.y, cp.z, 0, ip), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), ip), this
+           }
+           transferToNodeMaterialEffect(pp, ip) {
+             const cp = Ip.o.Normalize(this.direction);
+             return pp.setFloat3(ip, cp.x, cp.y, cp.z), this
+           }
+           computeWorldMatrix() {
+             return this._worldMatrix || (this._worldMatrix = Ip.b.Identity()), this._worldMatrix
+           }
+           getTypeID() {
+             return xp.d.LIGHTTYPEID_HEMISPHERICLIGHT
+           }
+           prepareLightSpecificDefines(pp, ip) {
+             pp["HEMILIGHT" + ip] = !0
+ ... (41 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L15857-L15915` → after: `L104-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L104-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L104-L107) · [Before (L15857-L15915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L15857-L15915)

```diff
-       constructor() {
-         this.stored = new Map, this.vq = new Map, this.pending = [], this.order = [], this.recents = [], this.seq = 0, this.silos = 0, this.readOnly = !0, this.pocket = !1, this.listeners = new Set, this.version = 0
-       }
-       apply(CC) {
-         if (!CC.baf2TermOpen) return !1;
-         CC.baf2TermReset && (this.stored.clear(), this.pending = []);
-         for (const [zC, ZC] of CC.baf2TermItems) ZC > 0 ? this.stored.set(zC, ZC) : this.stored.delete(zC);
-         if (CC.baf2TermHeld && (this.vq = new Map(CC.baf2TermHeld)), this.pending = this.pending.filter((zC => zC.seq > CC.baf2TermAcked)), this.silos = CC.baf2TermSilos, this.readOnly = CC.baf2TermReadOnly, this.pocket = !0 === CC.baf2TermPocket, CC.baf2TermReset) this.resort();
-         else {
-           const CC = new Set(this.order);
-           for (const zC of this.stored.keys()) CC.has(zC) || this.order.push(zC)
-         }
-         return this.changed(), !0
-       }
-       resort() {
-         this.order = [...this.stored.keys()].sort(((CC, zC) => this.amount(zC) - this.amount(CC) || CC.localeCompare(zC))), this.changed()
- ... (43 more removed lines; see GitHub link above)
+       static GetPlanes(pp) {
+         const ip = [];
+         for (let cp = 0; cp < 6; cp++) ip.push(new Op.e(0, 0, 0, 0));
+         return op.GetPlanesToRef(pp, ip), ip
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L15917-L15918` → after: `L109-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L109-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L109-L111) · [Before (L15917-L15918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L15917-L15918)

```diff
-       items() {
-         return this.order.filter((CC => this.amount(CC) > 0))
+       static GetNearPlaneToRef(pp, ip) {
+         const cp = pp.m;
+         ip.normal.x = cp[3] + cp[2], ip.normal.y = cp[7] + cp[6], ip.normal.z = cp[11] + cp[10], ip.d = cp[15] + cp[14], ip.normalize()
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L15920-L15921` → after: `L113-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L113-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L113-L115) · [Before (L15920-L15921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L15920-L15921)

```diff
-       recent() {
-         return this.recents.filter((CC => this.amount(CC) > 0))
+       static GetFarPlaneToRef(pp, ip) {
+         const cp = pp.m;
+         ip.normal.x = cp[3] - cp[2], ip.normal.y = cp[7] - cp[6], ip.normal.z = cp[11] - cp[10], ip.d = cp[15] - cp[14], ip.normalize()
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L15923-L15924` → after: `L117-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L117-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L117-L119) · [Before (L15923-L15924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L15923-L15924)

```diff
-       siloCount() {
-         return this.silos
+       static GetLeftPlaneToRef(pp, ip) {
+         const cp = pp.m;
+         ip.normal.x = cp[3] + cp[0], ip.normal.y = cp[7] + cp[4], ip.normal.z = cp[11] + cp[8], ip.d = cp[15] + cp[12], ip.normalize()
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L15926-L15927` → after: `L121-L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L121-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L121-L123) · [Before (L15926-L15927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L15926-L15927)

```diff
-       isReadOnly() {
-         return this.readOnly
+       static GetRightPlaneToRef(pp, ip) {
+         const cp = pp.m;
+         ip.normal.x = cp[3] - cp[0], ip.normal.y = cp[7] - cp[4], ip.normal.z = cp[11] - cp[8], ip.d = cp[15] - cp[12], ip.normalize()
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L15929-L15930` → after: `L125-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L125-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L125-L127) · [Before (L15929-L15930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L15929-L15930)

```diff
-       isPocket() {
-         return this.pocket
+       static GetTopPlaneToRef(pp, ip) {
+         const cp = pp.m;
+         ip.normal.x = cp[3] - cp[1], ip.normal.y = cp[7] - cp[5], ip.normal.z = cp[11] - cp[9], ip.d = cp[15] - cp[13], ip.normalize()
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L15932-L15935` → after: `L129-L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L129-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L129-L131) · [Before (L15932-L15935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L15932-L15935)

```diff
-       subscribe(CC) {
-         return this.listeners.add(CC), () => {
-           this.listeners.delete(CC)
-         }
+       static GetBottomPlaneToRef(pp, ip) {
+         const cp = pp.m;
+         ip.normal.x = cp[3] + cp[1], ip.normal.y = cp[7] + cp[5], ip.normal.z = cp[11] + cp[9], ip.d = cp[15] + cp[13], ip.normalize()
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L15937-L15939` → after: `L133-L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L133-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L133-L134) · [Before (L15937-L15939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L15937-L15939)

```diff
-       changed() {
-         this.version++;
-         for (const CC of this.listeners) CC()
+       static GetPlanesToRef(pp, ip) {
+         op.GetNearPlaneToRef(pp, ip[0]), op.GetFarPlaneToRef(pp, ip[1]), op.GetLeftPlaneToRef(pp, ip[2]), op.GetRightPlaneToRef(pp, ip[3]), op.GetTopPlaneToRef(pp, ip[4]), op.GetBottomPlaneToRef(pp, ip[5])
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L15941-L15971` → after: `L136-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L136-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L136-L139) · [Before (L15941-L15971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L15941-L15971)

```diff
-     }
-     var WP = ZC(38256);
-     const NP = {
-       isBlock: CC => void 0 !== dC.g[CC],
-       harvestType: CC => {
-         var zC;
-         return null === (zC = dC.g[CC]) || void 0 === zC ? void 0 : zC.harvestType
-       },
-       harvestLevel: CC => {
-         var zC;
-         return null === (zC = dC.g[CC]) || void 0 === zC ? void 0 : zC.harvestLevel
-       },
-       dropsNothing: CC => {
-         var zC;
-         return null === (null === (zC = dC.g[CC]) || void 0 === zC ? void 0 : zC.drops)
-       },
- ... (15 more removed lines; see GitHub link above)
+       static IsPointInFrustum(pp, ip) {
+         for (let cp = 0; cp < 6; cp++)
+           if (ip[cp].dotCoordinate(pp) < 0) return !1;
+         return !0
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L16005-L16041` → after: `L142-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L142-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L142-L147) · [Before (L16005-L16041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L16005-L16041)

```diff
-     const SP = "buildAFactory2Game:";
-     const pP = [
-       [1, 0, 0],
-       [-1, 0, 0],
-       [0, 1, 0],
-       [0, -1, 0],
-       [0, 0, 1],
-       [0, 0, -1]
-     ];
- 
-     function PP(CC) {
-       return CC.endsWith(" Ore")
-     }
-     const GP = {
-         mode: null,
-         detail: null,
- ... (21 more removed lines; see GitHub link above)
+   },
+   37989: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => op
+     });
+     var Op = cp(37320);
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L16043-L16047` → after: `L149-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L149-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L149-L150) · [Before (L16043-L16047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L16043-L16047)

```diff
-       constructor() {
-         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
-           zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => null,
-           ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => null;
-         this.live = CC, this.planAt = zC, this.tierOf = ZC, this.SF = 0, this.missesMaker = !1, this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.afloatByRoot = new Map, this.besideMakerById = new Map, this.vq = null, this.express = !1, this.crouching = !1, this … [truncated]
+       constructor(pp, ip, cp, op) {
+         this.normal = new Op.o(pp, ip, cp), this.d = op
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L16049-L16161` → after: `L152-L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L152-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L152-L153) · [Before (L16049-L16161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L16049-L16161)

```diff
-       onAfterRender(CC, zC, ZC) {
-         var QC, wC, bC;
-         let nC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
-         const fC = null !== (QC = null === (wC = CC.XzC(zC)) || void 0 === wC ? void 0 : wC.name) && void 0 !== QC ? QC : null,
-           oC = CC.isPlayerCrouching(zC),
-           qC = 0 === ZC ? null : this.resolve(CC, ZC),
-           FC = null !== qC && null !== nC && JP.has(qC.rootName) && function(CC, zC) {
-             return IP.some((ZC => {
-               let [QC, wC] = ZC;
-               const bC = CC.getBlockId(zC[0] + QC, zC[1], zC[2] + wC);
-               return 0 !== bC && "Express Belt" === CC.getMetaInfo(bC).rootName
-             }))
-           }(CC, nC),
-           WC = this.updatePlan(0 === ZC ? null : nC),
-           NC = this.tierOf(),
-           MC = null === nC ? null : (0, WP.f)(ZC),
- ... (97 more removed lines; see GitHub link above)
+       BOp() {
+         return [this.normal.x, this.normal.y, this.normal.z, this.d]
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L16163-L16169` → after: `L155-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L155-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L155-L156) · [Before (L16163-L16169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L16163-L16169)

```diff
-       subscribe(CC) {
-         return this.listeners.add(CC), () => {
-           this.listeners.delete(CC)
-         }
-       }
-       dispose() {
-         this.listeners.clear(), this.byRootId.clear(), this.besideMakerById.clear(), this.missesMaker = !1, this.afloatByRoot.clear(), this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.rowsByKey.clear(), this.snapshot = AP, this.SF = 0, this.vq = null, this.expr … [truncated]
+       clone() {
+         return new op(this.normal.x, this.normal.y, this.normal.z, this.d)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L16171-L16185` → after: `L158-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L158-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L158-L159) · [Before (L16171-L16185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L16171-L16185)

```diff
-       readAfloat(CC, zC, ZC) {
-         if (null === ZC || 0 === zC || !fC() || !PP(this.resolve(CC, zC).rootName)) return !1;
-         const QC = `${ZC[0]},${ZC[1]},${ZC[2]},${zC}`,
-           wC = performance.now();
-         return QC === this.afloatKey && wC - this.afloatAt < vP ? this.afloat : (this.afloatKey = QC, this.afloatAt = wC, function(CC, zC) {
-           for (const [ZC, QC, wC] of pP) {
-             const bC = zC(CC[0] + ZC, CC[1] + QC, CC[2] + wC);
-             if (void 0 === bC || null !== bC && !PP(bC)) return !1
-           }
-           return !0
-         }(ZC, ((zC, ZC, QC) => function(CC, zC, ZC, QC) {
-           if (!CC.isBlockInLoadedChunk(zC, ZC, QC)) return;
-           const wC = CC.getBlockId(zC, ZC, QC);
-           return 0 === wC ? null : CC.getMetaInfo(wC).rootName
-         }(CC, zC, ZC, QC))))
+       getClassName() {
+         return "Plane"
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L16187-L16192` → after: `L161-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L161-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L161-L163) · [Before (L16187-L16192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L16187-L16192)

```diff
-       liveMoved(CC) {
-         var zC;
-         const {
-           livePos: ZC
-         } = this;
-         return null === CC || CC[0] !== ZC[0] || CC[1] !== ZC[1] || CC[2] !== ZC[2] || (null === (zC = this.live) || void 0 === zC ? void 0 : zC.version()) !== this.liveVersion
+       getHashCode() {
+         let pp = this.normal.getHashCode();
+         return pp = 397 * pp ^ this.d, pp
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L16194-L16201` → after: `L165-L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L165-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L165-L234) · [Before (L16194-L16201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L16194-L16201)

```diff
-       updatePlan(CC) {
-         const zC = null === CC ? "" : CC.join(","),
-           ZC = performance.now();
-         if (zC === this.planPos && ZC - this.planMs < 250) return !1;
-         this.planPos = zC, this.planMs = ZC;
-         const QC = null === CC ? null : this.planAt([CC[0], CC[1], CC[2]]),
-           wC = !zS(QC, this.plan);
-         return this.plan = QC, wC
+       normalize() {
+         const pp = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
+         let ip = 0;
+         return 0 !== pp && (ip = 1 / pp), this.normal.x *= ip, this.normal.y *= ip, this.normal.z *= ip, this.d *= ip, this
+       }
+       transform(pp) {
+         const ip = op._TmpMatrix;
+         pp.invertToRef(ip);
+         const cp = ip.m,
+           Op = this.normal.x,
+           Ip = this.normal.y,
+           Sp = this.normal.z,
+           xp = this.d,
+           Lp = Op * cp[0] + Ip * cp[1] + Sp * cp[2] + xp * cp[3],
+           Yp = Op * cp[4] + Ip * cp[5] + Sp * cp[6] + xp * cp[7],
+           Dp = Op * cp[8] + Ip * cp[9] + Sp * cp[10] + xp * cp[11],
+ ... (54 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L16203-L16217` → after: `L236-L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L236-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L236-L237) · [Before (L16203-L16217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L16203-L16217)

```diff
-       besideMaker(CC, zC, ZC) {
-         let {
-           info: QC
-         } = CC;
-         if (null === QC) return null;
-         let wC = this.besideMakerById.get(zC);
-         if (void 0 === wC) {
-           const CC = "cryo" === ZC ? "lookPipeMixerSide" : "lookPipeCondenserSide";
-           wC = {
-             ...QC,
-             detail: `${xP}${CC}`,
-             detailItem: null
-           }, this.besideMakerById.set(zC, wC)
-         }
-         return wC
+       toGlobal(pp, ip) {
+         return new Op(this.x * pp, this.y * ip, this.width * pp, this.height * ip)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L16219-L16230` → after: `L239-L240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L239-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L239-L240) · [Before (L16219-L16230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L16219-L16230)

```diff
-       hanging(CC) {
-         let {
-           info: zC,
-           rootName: ZC
-         } = CC;
-         if (null === zC) return null;
-         let QC = this.afloatByRoot.get(ZC);
-         return void 0 === QC && (QC = {
-           ...zC,
-           detail: `${xP}lookOreAfloat`,
-           detailItem: null
-         }, this.afloatByRoot.set(ZC, QC)), QC
+       toGlobalToRef(pp, ip, cp) {
+         return cp.x = this.x * pp, cp.y = this.y * ip, cp.width = this.width * pp, cp.height = this.height * ip, this
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L16232-L16260` → after: `L242-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L242-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L242-L243) · [Before (L16232-L16260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L16232-L16260)

```diff
-       rowsOf(CC, zC) {
-         if (null === zC) return RP;
-         const ZC = `${CC}|${zC}`;
-         let QC = this.rowsByKey.get(ZC);
-         if (void 0 === QC) {
-           const wC = function(CC, zC) {
-             var ZC;
-             if (!(CC in Ez)) return [];
-             const QC = null !== (ZC = lz[CC]) && void 0 !== ZC ? ZC : [],
-               wC = new Map;
-             for (const nC of ab(CC, zC))
-               if ((QC.includes(nC) || Tb(nC.output) && rb(nC.output) > BC(CC)) && rb(nC.output) <= zC) {
-                 var bC;
-                 const CC = null !== (bC = wC.get(nC.output)) && void 0 !== bC ? bC : [];
-                 CC.push(nC.input), wC.set(nC.output, CC)
-               } return Db([...wC], (CC => {
- ... (13 more removed lines; see GitHub link above)
+       clone() {
+         return new Op(this.x, this.y, this.width, this.height)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L16262-L16279` → after: `L245-L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L245-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L245-L285) · [Before (L16262-L16279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L16262-L16279)

```diff
-       resolve(CC, zC) {
-         const {
-           rootId: ZC,
-           rootName: QC
-         } = CC.getMetaInfo(zC), wC = (0, gZ.h)(QC) ? zC : ZC;
-         let bC = this.byRootId.get(wC);
-         const nC = fC();
-         if (void 0 === bC || bC.nuclear !== nC) {
-           var oC;
-           const ZC = function(CC) {
-             return XQ(NP, CC, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : CC)
-           }(QC, CC.blockIdToBlockName(zC));
-           bC = {
-             info: ZC,
-             rootName: QC,
-             live: null !== ZC && !0 === (null === (oC = this.live) || void 0 === oC ? void 0 : oC.handles(QC)),
- ... (2 more removed lines; see GitHub link above)
+     }
+   },
+   38900: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Ip
+     });
+     var Op = cp(38905);
+     const op = (pp, ip, cp) => pp ? pp.getClassName && "Mesh" === pp.getClassName() ? null : !pp.getClassName || "SubMesh" !== pp.getClassName() && "PhysicsBody" !== pp.getClassName() ? pp.clone ? pp.clone() : Array.isArray(pp) ? pp.slice() : cp && "object" === typeof pp ? {
+       ...pp
+     } : null : pp.clone(ip) : null;
+     class Ip {
+       static DeepCopy(pp, ip, cp, Ip) {
+         let Sp = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         const xp = function(pp) {
+           const ip = [];
+           do {
+ ... (25 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L16284-L16402` → after: `L289-L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L289-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L289-L295) · [Before (L16284-L16402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L16284-L16402)

```diff
-     const vP = 500;
-     const eP = (0, QC.memo)((function(CC) {
-       var zC, ZC;
-       let {
-         store: wC
-       } = CC;
-       const {
-         t: bC
-       } = (0, ew.y)(), [nC, fC] = (0, QC.useState)((() => wC.get()));
-       (0, QC.useEffect)((() => (fC(wC.get()), wC.subscribe((() => {
-         fC(wC.get())
-       })))), [wC]);
-       const {
-         openInGameMenuName: oC,
-         openEverythingMenuName: qC,
-         isTouchScreen: FC
- ... (103 more removed lines; see GitHub link above)
+   },
+   38124: (pp, ip, cp) => {
+     function Op() {
+       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (pp => {
+         const ip = 16 * Math.random() | 0;
+         return ("x" === pp ? ip : 3 & ip | 8).toString(16)
+       }))
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L16404-L16406` → after: `L297-L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L297-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L297-L304) · [Before (L16404-L16406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L16404-L16406)

```diff
-     const lP = [.5, .5, .5],
-       XP = [.2, .8, .3],
-       cP = [.45, 1, .5];
+     cp.d(ip, {
+       e: () => Op
+     })
+   },
+   38905: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Op
+     });
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L16408-L16455` → after: `L306-L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L306-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L306-L355) · [Before (L16408-L16455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L16408-L16455)

```diff
-       constructor() {
-         this.offsetsIndexById = new Uint8Array(65536), this.indexed = !1, this.offsetsList = [], this.hits = [], this.chunks = new Map, this.cellChunks = new Map, this.lastCheckMs = -1 / 0, this.checks = 0, this.scanFrom = 0, this.shownKey = "", this.meshes = []
-       }
-       index(CC) {
-         this.indexed = !0;
-         for (const zC of hz)
-           for (const ZC of dP(zC)) {
-             const zC = CC.blockNameToBlockId(ZC, !0),
-               QC = EP(ZC);
-             null !== zC && QC.length > 0 && (this.offsetsList.push(QC), this.offsetsIndexById[zC] = this.offsetsList.length)
-           }
-       }
-       onAfterRender(CC, zC) {
-         this.indexed || this.index(CC);
-         const ZC = performance.now();
-         if (ZC - this.lastCheckMs < 100) return;
- ... (32 more removed lines; see GitHub link above)
+       static _CheckLimit(pp, ip) {
+         let cp = Op._LogLimitOutputs[pp];
+         return cp ? cp.current++ : (cp = {
+           limit: ip,
+           current: 1
+         }, Op._LogLimitOutputs[pp] = cp), cp.current <= cp.limit
+       }
+       static _GenerateLimitMessage(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         const cp = Op._LogLimitOutputs[pp];
+         if (!cp || !Op.MessageLimitReached) return;
+         const op = this._Levels[ip];
+         cp.current === cp.limit && Op[op.name](Op.MessageLimitReached.replace(/%LIMIT%/g, "" + cp.limit).replace(/%TYPE%/g, op.name ?? ""))
+       }
+       static _AddLogEntry(pp) {
+         Op._LogCache = pp + Op._LogCache, Op.OnNewCacheEntry && Op.OnNewCacheEntry(pp)
+ ... (34 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L16457-L16458` → after: `L357-L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L357-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L357-L393) · [Before (L16457-L16458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L16457-L16458)

```diff
-       dispose(CC) {
-         this.clearMeshes(CC), this.chunks.clear(), this.cellChunks.clear(), this.shownKey = ""
+     }
+     Op.NoneLogLevel = 0, Op.MessageLogLevel = 1, Op.WarningLogLevel = 2, Op.ErrorLogLevel = 4, Op.AllLogLevel = 7, Op.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Op._LogCache = "", Op._LogLimitOutputs = {}, Op._Levels =  … [truncated]
+       color: "white",
+       logFunc: console.log,
+       name: "Log"
+     }, {
+       color: "orange",
+       logFunc: console.warn,
+       name: "Warn"
+     }, {}, {
+       color: "red",
+       logFunc: console.error,
+       name: "Error"
+     }], Op.errorsCount = 0, Op.Log = Op._LogEnabled.bind(Op, Op.MessageLogLevel), Op.Warn = Op._LogEnabled.bind(Op, Op.WarningLogLevel), Op.Error = Op._LogEnabled.bind(Op, Op.ErrorLogLevel)
+   },
+   61372: (pp, ip, cp) => {
+ ... (21 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L16460-L16479` → after: `L395-L396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L395-L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L395-L396) · [Before (L16460-L16479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L16460-L16479)

```diff
-       scanDue(CC, zC) {
-         const ZC = Math.max(zC.findIndex((CC => {
-           let {
-             slot: zC
-           } = CC;
-           return zC >= this.scanFrom
-         })), 0);
-         let QC = 96;
-         for (let wC = 0; wC < zC.length; wC++) {
-           const {
-             slot: bC,
-             entry: nC,
-             origin: fC
-           } = zC[(ZC + wC) % zC.length];
-           if (QC -= this.scan(CC, nC, fC), QC <= 0) {
-             this.scanFrom = bC + 1;
- ... (4 more removed lines; see GitHub link above)
+       _gatherImports(pp, ip) {
+         pp ? (this._webGPUReady = !0, ip.push(Promise.all([cp.e(379).then((() => cp(61601))), cp.e(380).then((() => cp(61604)))]))) : ip.push(Promise.all([cp.e(381).then((() => cp(61612))), cp.e(382).then((() => cp(61618)))]))
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L16481-L16506` → after: `L398-L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L398-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L398-L412) · [Before (L16481-L16506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L16481-L16506)

```diff
-       scan(CC, zC, ZC) {
-         let [QC, wC, bC] = ZC;
-         const nC = Jg.f.Ig,
-           fC = this.hits;
-         fC.length = 0;
-         const oC = CC.scanBlocks(QC, wC, bC, QC + nC, wC + nC, bC + nC, this.offsetsIndexById, fC),
-           qC = [];
-         for (let FC = 0; FC < fC.length; FC += 4) qC.push({
-           pos: [fC[FC], fC[FC + 1], fC[FC + 2]],
-           offsets: this.offsetsList[this.offsetsIndexById[fC[FC + 3]] - 1]
-         });
-         return zC.machines = qC, zC.cellChunks = function(CC, zC) {
-           const ZC = new Set,
-             QC = [];
-           for (const {
-               pos: wC,
- ... (10 more removed lines; see GitHub link above)
+       constructor(pp) {
+         const ip = {
+           ...arguments.length > 2 ? arguments[2] : void 0,
+           name: pp,
+           engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || Lp.e.LastCreatedEngine,
+           useShaderStore: !0,
+           useAsPostProcess: !0,
+           vertexShader: Dp.VertexUrl,
+           fragmentShader: Dp.FragmentUrl,
+           uniforms: Dp.Uniforms
+         };
+         super({
+           ...ip,
+           defines: Dp._GetDefines(ip.engine)
+         }), this.texelSize = new Yp.l(0, 0)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L16508-L16515` → after: `L414-L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L414-L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L414-L416) · [Before (L16508-L16515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L16508-L16515)

```diff
-       watchCellChunk(CC, zC, ZC, QC) {
-         const wC = HP(zC, ZC, QC),
-           bC = CC.getChunkVersion(zC, ZC, QC),
-           nC = this.cellChunks.get(wC);
-         return null === bC ? this.cellChunks.delete(wC) : (null === nC || void 0 === nC ? void 0 : nC.version) === bC ? (nC.seenAt = this.checks, !1) : (this.cellChunks.set(wC, {
-           version: bC,
-           seenAt: this.checks
-         }), !0)
+       bind() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         super.bind(pp), this._drawWrapper.effect.setFloat2("texelSize", this.texelSize.x, this.texelSize.y)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L16517-L16536` → after: `L418-L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L418-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L418-L422) · [Before (L16517-L16536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L16517-L16536)

```diff
-       refresh(CC) {
-         const zC = function(CC, zC) {
-             const ZC = new Set,
-               QC = [];
-             for (const {
-                 pos: wC,
-                 offsets: bC
-               }
-               of CC)
-               for (const [CC, nC, fC] of bC) {
-                 const bC = wC[0] + CC,
-                   oC = wC[1] + nC,
-                   qC = wC[2] + fC,
-                   FC = `${bC},${oC},${qC}`;
-                 ZC.has(FC) || (ZC.add(FC), zC(bC, oC, qC) && QC.push([bC, oC, qC]))
-               }
- ... (4 more removed lines; see GitHub link above)
+     }
+     Dp.VertexUrl = "fxaa", Dp.FragmentUrl = "fxaa", Dp.Uniforms = ["texelSize"];
+     class Ap extends Ip.c {
+       getClassName() {
+         return "FxaaPostProcess"
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L16538-L16549` → after: `L424-L445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L424-L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L424-L445) · [Before (L16538-L16549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L16538-L16549)

```diff
-       build(CC, zC, ZC) {
-         const QC = zC[0],
-           wC = [],
-           bC = [];
-         for (const [nC, fC, oC] of zC)(0, hP.e)(wC, bC, [nC - QC[0] + .5, fC - QC[1] + .5, oC - QC[2] + .5], lP, ZC);
-         return CC.createGameMesh({
-           positions: wC,
-           indices: bC
-         }, {
-           rgb: ZC ? cP : XP,
-           alpha: .4
-         }, QC)
+       constructor(pp, ip) {
+         let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
+           op = arguments.length > 3 ? arguments[3] : void 0,
+           Ip = arguments.length > 4 ? arguments[4] : void 0,
+           Sp = arguments.length > 5 ? arguments[5] : void 0,
+           xp = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
+         const Lp = {
+           uniforms: Dp.Uniforms,
+           size: "number" === typeof ip ? ip : void 0,
+           camera: cp,
+           samplingMode: op || Op.d.BILINEAR_SAMPLINGMODE,
+           engine: Ip,
+           reusable: Sp,
+           textureType: xp,
+           ...ip
+         };
+ ... (6 more added lines; see GitHub link above)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L16551-L16553` → after: `L447-L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L447-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L447-L448) · [Before (L16551-L16553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L16551-L16553)

```diff
-       clearMeshes(CC) {
-         for (const zC of this.meshes) CC.disposeGameMesh(zC);
-         this.meshes = []
+       static _Parse(pp, ip, cp, Op) {
+         return Sp.c.Parse((() => new Ap(pp.name, pp.options, ip, pp.renderTargetSamplingMode, cp.gy(), pp.reusable)), pp, cp, Op)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L16556-L16576` → after: `L451-L456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L451-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L451-L456) · [Before (L16556-L16576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L16556-L16576)

```diff
-     const rP = 1 / .6,
-       sP = 200,
-       TP = {
-         colours: [
-           [127, 233, 255],
-           [180, 140, 255]
-         ],
-         life: [.12, .22],
-         size: [.12, .2],
-         perBlock: 3
-       },
-       aP = {
-         colours: [
-           [120, 255, 150],
-           [200, 255, 120]
-         ],
- ... (5 more removed lines; see GitHub link above)
+     var Pp = cp(38905),
+       Wp = cp(40304),
+       yp = cp(42102),
+       Up = cp(42080),
+       wp = cp(40107);
+     const vp = 0;
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L16578-L16580` → after: `L458-L459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L458-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L458-L459) · [Before (L16578-L16580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L16578-L16580)

```diff
-       constructor() {
-         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : TP;
-         this.style = CC, this.particles = null, this.points = new Float32Array(800), this.budget = sP, this.lastMs = 0
+       constructor(pp, ip, cp) {
+         this.name = pp, this._parentTask = ip, this._context = cp, this.disabled = !1
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L16582-L16583` → after: `L461-L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L461-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L461-L462) · [Before (L16582-L16583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L16582-L16583)

```diff
-       static blade() {
-         return new DP(aP)
+       setInitializeFunc(pp) {
+         this._initFunc = pp
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L16585-L16587` → after: `L464-L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L464-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L464-L465) · [Before (L16585-L16587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L16585-L16587)

```diff
-       fR(CC, zC) {
-         const ZC = Math.min(zC.arcStruck, zC.arcPoints.length);
-         this.draw(CC, [zC.arcFrom, ...zC.arcPoints], zC.arcPoints.slice(0, ZC))
+       setExecuteFunc(pp) {
+         this._executeFunc = pp
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L16589-L16595` → after: `L467-L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L467-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L467-L468) · [Before (L16589-L16595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L16589-L16595)

```diff
-       onBlade(CC, zC) {
-         const [ZC, QC, wC] = zC.bladeCentre, [bC, nC] = zC.bladeFacing, fC = ZC - 1.5 * bC, oC = wC - 1.5 * nC, qC = Math.atan2(nC, bC), FC = [];
-         for (let WC = 0; WC <= 8; WC++) {
-           const CC = qC - tP / 2 + tP * WC / 8;
-           FC.push([fC + 2.5 * Math.cos(CC), QC, oC + 2.5 * Math.sin(CC)])
-         }
-         this.draw(CC, FC, zC.bladeStruck)
+       _execute() {
+         this.disabled || this._executeFunc(this._context)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L16597-L16599` → after: `L470-L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L470-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L470-L471) · [Before (L16597-L16599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L16597-L16599)

```diff
-       dispose() {
-         var CC;
-         null === (CC = this.particles) || void 0 === CC || CC.stop(), this.particles = null
+       _initialize() {
+         this._initFunc?.(this._context)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L16601-L16664` → after: `L473-L474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L473-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L473-L474) · [Before (L16601-L16664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L16601-L16664)

```diff
-       draw(CC, zC, ZC) {
-         if (!CC.particlesEnabled() || zC.length < 2) return;
-         const QC = performance.now();
-         this.budget = Math.min(sP, this.budget + (QC - this.lastMs) / 1e3 * sP), this.lastMs = QC;
-         const wC = [];
-         let bC = 0,
-           nC = zC[0];
-         for (const PC of zC.slice(1)) {
-           const CC = Math.min(48, Math.round(Math.hypot(PC[0] - nC[0], PC[1] - nC[1], PC[2] - nC[2]) * this.style.perBlock));
-           wC.push([nC, PC, CC]), bC += CC, nC = PC
-         }
-         const fC = ZC.length;
-         bC += 10 * fC;
-         const oC = bC > this.budget ? this.budget / bC : 1;
-         if (0 === bC || oC * bC < 1) return;
-         const qC = zC[0],
- ... (48 more removed lines; see GitHub link above)
+       _isValid() {
+         return void 0 !== this._executeFunc ? null : "Execute function is not set (call setExecuteFunc to set it)"
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L16667-L16678` → after: `L478-L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L478-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L478-L480) · [Before (L16667-L16678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L16667-L16678)

```diff
-     const jP = new Set(["Sky Spring"]);
- 
-     function yP(CC, zC, ZC) {
-       const QC = CC.split("|")[0];
-       return "Air" !== zC || ZC || ! function(CC) {
-         const zC = CC.split("|")[0];
-         return void 0 !== nZ[zC] || jP.has(zC)
-       }(QC) ? null : CC
-     }
-     class LP {
-       constructor() {
-         this.lastTapAt = -1 / 0
+     class Hp extends tp {
+       static IsObjectListPass(pp) {
+         return void 0 !== pp.setObjectList
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L16680-L16682` → after: `L482-L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L482-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L482-L483) · [Before (L16680-L16682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L16680-L16682)

```diff
-       isNewPress(CC) {
-         const zC = CC - this.lastTapAt >= 300;
-         return this.lastTapAt = CC, zC
+       get objectList() {
+         return this._objectList
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L16684-L16687` → after: `L485-L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L485-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L485-L486) · [Before (L16684-L16687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L16684-L16687)

```diff
-     }
-     class UP {
-       constructor() {
-         this.presses = new LP, this.predicted = null
+       setObjectList(pp) {
+         this._objectList = pp
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L16689-L16694` → after: `L488-L489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L488-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L488-L489) · [Before (L16689-L16694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L16689-L16694)

```diff
-       tap(CC, zC) {
-         const ZC = this.presses.isNewPress(zC);
-         return ZC && (this.predicted = {
-           station: CC,
-           at: zC
-         }), ZC
+       constructor(pp, ip, cp, Op) {
+         super(pp, ip, cp), this._engine = Op
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L16696-L16698` → after: `L491-L493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L491-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L491-L493) · [Before (L16696-L16698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L16696-L16698)

```diff
-       consumeServerOpen(CC, zC) {
-         const ZC = this.predicted;
-         return !(null === ZC || ZC.station !== CC || zC - ZC.at > 2e3) && (this.predicted = null, !0)
+       _isValid() {
+         const pp = super._isValid();
+         return pp || (void 0 !== this._objectList ? null : "Object list is not set (call setObjectList to set it)")
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L16701-L16703` → after: `L496-L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L496-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L496-L498) · [Before (L16701-L16703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L16701-L16703)

```diff
-     class BP {
-       constructor() {
-         this.thrustAt = -1 / 0
+     class dp extends tp {
+       static IsRenderPass(pp) {
+         return void 0 !== pp.setRenderTarget
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L16705-L16706` → after: `L500-L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L500-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L500-L501) · [Before (L16705-L16706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L16705-L16706)

```diff
-       lit(CC, zC) {
-         return CC && (this.thrustAt = zC), zC - this.thrustAt < 200
+       get renderTarget() {
+         return this._renderTarget
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L16708-L16736` → after: `L503-L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L503-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L503-L504) · [Before (L16708-L16736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L16708-L16736)

```diff
-     }
-     const OP = [.1, .05, .1],
-       kP = {
-         texture: "effect_5",
-         HW: Math.ceil(48),
-         minLifeTime: .35,
-         maxLifeTime: .8,
-         minEmitPower: 1,
-         maxEmitPower: 2,
-         minSize: .2,
-         maxSize: .45,
-         emitRate: 0,
-         gravity: [0, -2, 0],
-         dir1: [-.15, -1, -.15],
-         dir2: [.15, -1, .15],
-         colorGradients: [{
- ... (13 more removed lines; see GitHub link above)
+       get renderTargetDepth() {
+         return this._renderTargetDepth
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L16738-L16739` → after: `L506-L507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L506-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L506-L507) · [Before (L16738-L16739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L16738-L16739)

```diff
-       fR(CC, zC) {
-         for (const [ZC, QC] of zC.baf2JetFlames) CC.isLocalPlayer(ZC) || (QC ? this.lit.add(ZC) : this.lit.delete(ZC))
+       get frameGraphRenderTarget() {
+         return this._frameGraphRenderTarget
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L16741-L16746` → after: `L509-L510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L509-L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L509-L510) · [Before (L16741-L16746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L16741-L16746)

```diff
-       onAfterRender(CC, zC) {
-         const ZC = performance.now(),
-           QC = this.hold.lit(this.selfThrusting(CC, zC), ZC);
-         for (const [wC, bC] of this.flames)(wC === zC ? QC : this.lit.has(wC)) || this.setEmitting(bC, !1), wC === zC || CC.getPositionView(wC) ? !bC.emitting && ZC - bC.offAt >= 1300 && (bC.particles.stop(), this.flames.delete(wC)) : (bC.particles.dispose(), this.flames.delete(w … [truncated]
-         QC && this.draw(CC, zC, zC);
-         for (const wC of this.lit) this.draw(CC, zC, wC)
+       constructor(pp, ip, cp, Op) {
+         super(pp, ip, cp), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = Op
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L16748-L16750` → after: `L512-L513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L512-L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L512-L513) · [Before (L16748-L16750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L16748-L16750)

```diff
-       dispose() {
-         for (const CC of this.flames.values()) CC.particles.dispose();
-         this.flames.clear(), this.lit.clear()
+       setRenderTarget(pp) {
+         this._renderTarget = pp
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L16752-L16761` → after: `L515-L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L515-L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L515-L516) · [Before (L16752-L16761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L16752-L16761)

```diff
-       selfThrusting(CC, zC) {
-         var ZC;
-         const QC = CC.getLocalPlayerMovement();
-         return !!QC && (null !== (wC = {
-           option: null !== (ZC = CC.getClientOption(zC, "jumpHoldThrust")) && void 0 !== ZC ? ZC : null,
-           jumping: QC.jumpHeld,
-           onGround: QC.onGround,
-           alive: CC.isAlive(zC)
-         }).option && wC.option.maxUpSpeed >= 0 && wC.jumping && !wC.onGround && wC.alive);
-         var wC
+       setRenderTargetDepth(pp) {
+         this._renderTargetDepth = pp
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L16763-L16775` → after: `L518-L522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L518-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L518-L522) · [Before (L16763-L16775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L16763-L16775)

```diff
-       draw(CC, zC, ZC) {
-         var QC, wC;
-         const bC = this.pos;
-         if (!CC.readDrawnPosition(ZC, bC)) return;
-         const nC = CC.readDrawnPosition(zC, this.camera) ? this.camera : bC;
-         if (!((bC[0] - nC[0]) ** 2 + (bC[1] - nC[1]) ** 2 + (bC[2] - nC[2]) ** 2 < 1600) || !CC.particlesEnabled()) {
-           const CC = this.flames.get(ZC);
-           return void(CC && this.setEmitting(CC, !1))
-         }
-         const fC = null !== (QC = this.flames.get(ZC)) && void 0 !== QC ? QC : this.create(CC, ZC, bC),
-           oC = null !== (wC = CC.getDrawnHeading(ZC)) && void 0 !== wC ? wC : 0,
-           qC = this.at;
-         qC[0] = bC[0] - .35 * Math.sin(oC), qC[1] = bC[1] + 1.05, qC[2] = bC[2] - .35 * Math.cos(oC), fC.particles.moveTo(qC), this.setEmitting(fC, !0)
+       addDependencies(pp) {
+         if (void 0 !== pp)
+           if (Array.isArray(pp))
+             for (const ip of pp) this._dependencies.add(ip);
+           else this._dependencies.add(pp)
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L16777-L16778` → after: `L524-L531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L524-L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L524-L531) · [Before (L16777-L16778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L16777-L16778)

```diff
-       setEmitting(CC, zC) {
-         CC.emitting !== zC && (CC.emitting = zC, zC || (CC.offAt = performance.now()), CC.particles.setEmitRate(zC ? 60 : 0))
+       collectDependencies(pp) {
+         const ip = this._dependencies.keys();
+         for (let cp = ip.next(); !0 !== cp.done; cp = ip.next()) pp.add(cp.value);
+         if (void 0 !== this._renderTarget)
+           if (Array.isArray(this._renderTarget))
+             for (const cp of this._renderTarget) void 0 !== cp && pp.add(cp);
+           else pp.add(this._renderTarget);
+         void 0 !== this._renderTargetDepth && pp.add(this._renderTargetDepth)
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L16780-L16789` → after: `L533-L536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L533-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L533-L536) · [Before (L16780-L16789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L16780-L16789)

```diff
-       create(CC, zC, ZC) {
-         const QC = {
-           particles: CC.createParticles(kP, {
-             pos: ZC,
-             half: OP
-           }),
-           emitting: !1,
-           offAt: performance.now()
-         };
-         return this.flames.set(zC, QC), QC
+       setOutputLayerAndFaceIndices(pp) {
+         const ip = this.frameGraphRenderTarget.renderTargetWrapper;
+         if (ip)
+           for (const cp of pp) ip.setLayerAndFaceIndex(cp.targetIndex, cp.layerIndex, cp.faceIndex)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L16791-L16814` → after: `L538-L539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L538-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L538-L539) · [Before (L16791-L16814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L16791-L16814)

```diff
-     }
- 
-     function CG(CC) {
-       return "Reactor Frame" === QQ("reactor", CC)
-     }
- 
-     function zG(CC) {
-       return uZ("reactor", CC) && !CG(CC) && (CC.startsWith("Reactor Glass") || CC.startsWith("Reactor Port"))
-     }
-     const ZG = "baf2Goal";
-     class QG {
-       constructor() {
-         this.goal = null, this.open = null, this.checkedAt = -1 / 0, this.subs = [Hw.o.subscribe("setDirectionArrow", (CC => {
-           let {
-             id: zC,
-             position: ZC
- ... (8 more removed lines; see GitHub link above)
+       _initialize() {
+         this._frameGraphRenderTarget = this._context.createRenderTarget(this.name, this._renderTarget, this._renderTargetDepth, this.depthReadOnly, this.stencilReadOnly), super._initialize()
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L16816-L16817` → after: `L541-L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L541-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L541-L542) · [Before (L16816-L16817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L16816-L16817)

```diff
-       dispose() {
-         for (const CC of this.subs) Hw.o.unsubscribe(CC)
+       _execute() {
+         this._context.bindRenderTarget(this._frameGraphRenderTarget), super._execute(), this._context.restoreDefaultFramebuffer()
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L16819-L16841` → after: `L544-L549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L544-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L544-L549) · [Before (L16819-L16841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L16819-L16841)

```diff
-       sideOf(CC, zC, ZC, QC) {
-         const wC = this.goal;
-         if (!wC) return 0;
-         ZC - this.checkedAt > 1e3 && (this.checkedAt = ZC, this.open = function(CC, zC) {
-           const [ZC, QC, wC] = CC.map(Math.floor);
-           if (!zG(zC(ZC, QC, wC))) return null;
-           for (const [bC, nC] of [
-               [1, 0],
-               [0, 1]
-             ]) {
-             const CC = zC(ZC + bC, QC, wC + nC),
-               fC = zC(ZC - bC, QC, wC - nC);
-             if (CG(fC) && zG(CC)) return [bC, 0, nC];
-             if (CG(CC) && zG(fC)) return [0 - bC, 0, 0 - nC]
-           }
-           return null
- ... (7 more removed lines; see GitHub link above)
+       _isValid() {
+         const pp = super._isValid();
+         return pp || (void 0 !== this._renderTarget || void 0 !== this.renderTargetDepth ? null : "Render target and render target depth cannot both be undefined.")
+       }
+       _dispose() {
+         this._frameGraphRenderTarget?.dispose()
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L16845-L16854` → after: `L554-L555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L554-L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L554-L555) · [Before (L16845-L16854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L16845-L16854)

```diff
-       constructor() {
-         this.arrows = document.getElementsByClassName("DirectionArrow"), this.trackers = document.getElementsByClassName("Baf2QuestTracker"), this.statBars = document.getElementsByClassName("BottomScreenStatBarList"), this.toasts = document.getElementsByClassName("Baf2Toast"), th … [truncated]
-           this.boxStale = !0
-         }, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.mG = () => {
-           this.boxStale = !0, this.barsStale = !0, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight
-         }, this.sizes = new ResizeObserver((CC => {
-           for (const zC of CC) zC.target === this.tracker ? this.boxStale = !0 : this.halfWidths.set(zC.target, zC.borderBoxSize[0].inlineSize / 2)
-         })), this.hudStyle = new MutationObserver(this.onChange), this.run = () => {
-           this.queued = !1, this.Sg || this.clear()
-         }, window.addEventListener("resize", this.mG)
+       get name() {
+         return this._name
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L16856-L16858` → after: `L557-L558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L557-L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L557-L558) · [Before (L16856-L16858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L16856-L16858)

```diff
-       onAfterRender(CC, zC) {
-         var ZC;
-         this.api = CC, this.project = null !== (ZC = null === zC || void 0 === zC ? void 0 : zC.projectWorldPosToScreenPos) && void 0 !== ZC ? ZC : null, this.queued || this.Sg || (this.queued = !0, queueMicrotask(this.run))
+       set name(pp) {
+         this._name = pp
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L16860-L16865` → after: `L560-L561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L560-L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L560-L561) · [Before (L16860-L16865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L16860-L16865)

```diff
-       dispose() {
-         this.Sg = !0;
-         for (const CC of this.moved.keys()) CC.style.transform = "";
-         this.moved.clear();
-         for (const CC of this.sideLabels.keys()) CC.style.transform = "";
-         this.sideLabels.clear(), this.side.dispose(), this.watch(null), this.sizes.disconnect(), window.removeEventListener("resize", this.mG)
+       get disabled() {
+         return this._disabled
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L16867-L16888` → after: `L563-L564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L563-L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L563-L564) · [Before (L16867-L16888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L16867-L16888)

```diff
-       clear() {
-         for (const bC of this.moved.keys()) bC.isConnected || this.moved.delete(bC);
-         for (const bC of this.sideLabels.keys()) bC.isConnected || this.sideLabels.delete(bC);
-         if (0 === this.arrows.length) return;
-         const CC = performance.now(),
-           zC = CC - this.refreshedAt > 1e3;
-         zC && (this.refreshedAt = CC, this.boxStale = !0, this.barsStale = !0, this.forgetGoneLabels());
-         const ZC = this.trackerBox(),
-           QC = this.barsBox(),
-           wC = this.toastBox(zC);
-         (ZC || QC || wC) && zC && (this.em = parseFloat(getComputedStyle(this.arrows[0]).fontSize) || this.em);
-         for (let bC = 0; bC < this.arrows.length; bC++) {
-           const zC = this.arrows[bC];
-           this.labelOffsets.set(zC, this.runLabelAside(zC, CC));
-           const nC = (ZC ? this.shiftLeftOf(zC, ZC) : 0) || this.shiftOnScreen(zC),
-             fC = Math.min(QC ? this.liftAbove(zC, QC, nC) : 0, wC ? this.liftAbove(zC, wC, nC) : 0),
- ... (6 more removed lines; see GitHub link above)
+       set disabled(pp) {
+         this._disabled = pp
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L16890-L16907` → after: `L566-L567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L566-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L566-L567) · [Before (L16890-L16907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L16890-L16907)

```diff
-       trackerBox() {
-         var CC, zC;
-         const ZC = null !== (CC = this.tracker) && void 0 !== CC && CC.isConnected ? this.tracker : null !== (zC = this.trackers[0]) && void 0 !== zC ? zC : null;
-         if (ZC !== this.tracker && this.watch(ZC), this.boxStale && ZC) {
-           var QC, wC, bC;
-           this.boxStale = !1;
-           const CC = ZC.closest(".NoRoom") ? null : ZC.getBoundingClientRect(),
-             zC = CC && CC.width > 0 ? null === (QC = this.hud) || void 0 === QC ? void 0 : QC.getBoundingClientRect() : void 0,
-             nC = CC && zC ? Math.max(CC.top, zC.top) : null !== (wC = null === CC || void 0 === CC ? void 0 : CC.top) && void 0 !== wC ? wC : 0,
-             fC = CC && zC ? Math.min(CC.bottom, zC.bottom) : null !== (bC = null === CC || void 0 === CC ? void 0 : CC.bottom) && void 0 !== bC ? bC : 0;
-           this.box = CC && CC.width > 0 && fC > nC ? {
-             left: CC.left,
-             top: nC,
-             right: CC.right,
-             bottom: fC
-           } : null
- ... (2 more removed lines; see GitHub link above)
+       get passes() {
+         return this._passes
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L16909-L16921` → after: `L569-L570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L569-L570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L569-L570) · [Before (L16909-L16921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L16909-L16921)

```diff
-       barsBox() {
-         if (this.barsStale) {
-           var CC;
-           this.barsStale = !1;
-           const zC = null === (CC = this.statBars[0]) || void 0 === CC ? void 0 : CC.getBoundingClientRect();
-           this.bars = zC && zC.width > 0 && zC.height > 0 ? {
-             left: zC.left,
-             top: zC.top,
-             right: zC.right,
-             bottom: zC.bottom
-           } : null
-         }
-         return this.bars
+       get passesDisabled() {
+         return this._passesDisabled
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L16923-L16936` → after: `L572-L573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L572-L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L572-L573) · [Before (L16923-L16936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L16923-L16936)

```diff
-       toastBox(CC) {
-         var zC;
-         const ZC = null !== (zC = this.toasts[0]) && void 0 !== zC ? zC : null;
-         if (ZC !== this.toastEl || CC && ZC) {
-           this.toastEl = ZC;
-           const CC = null === ZC || void 0 === ZC ? void 0 : ZC.getBoundingClientRect();
-           this.toast = CC && CC.width > 0 && CC.height > 0 ? {
-             left: CC.left,
-             top: CC.top,
-             right: CC.right,
-             bottom: CC.bottom
-           } : null
-         }
-         return this.toast
+       getClassName() {
+         return "FrameGraphTask"
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L16938-L16948` → after: `L575-L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L575-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L575-L576) · [Before (L16938-L16948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L16938-L16948)

```diff
-       liftAbove(CC, zC, ZC) {
-         var QC;
-         const wC = this.anchorOf(CC);
-         if (!wC) return 0;
-         const bC = wC.x + ZC + (null !== (QC = this.labelOffsets.get(CC)) && void 0 !== QC ? QC : 0),
-           {
-             halfWidth: nC,
-             labelled: fC
-           } = this.extentOf(CC),
-           oC = wC.y + this.em * (fC ? 6.2 : 3);
-         return oC < zC.top - 6 || bC + nC < zC.left - 6 || bC - nC > zC.right + 6 ? 0 : zC.top - 6 - oC
+       initAsync() {
+         return Promise.resolve()
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L16950-L16957` → after: `L578-L579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L578-L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L578-L579) · [Before (L16950-L16957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L16950-L16957)

```diff
-       watch(CC) {
-         var zC, ZC;
-         this.tracker && this.sizes.unobserve(this.tracker), null === (zC = this.hud) || void 0 === zC || zC.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.tracker = CC, this.hud = null !== (ZC = null === CC || void 0 === CC ? void 0 : CC.closest(". … [truncated]
-           passive: !0
-         }), this.hudStyle.observe(this.hud, {
-           attributes: !0,
-           attributeFilter: ["style", "class"]
-         }))
+       isReady() {
+         return !0
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L16959-L16969` → after: `L581-L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L581-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L581-L582) · [Before (L16959-L16969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L16959-L16969)

```diff
-       shiftLeftOf(CC, zC) {
-         var ZC;
-         const QC = this.anchorOf(CC);
-         if (!QC) return 0;
-         const {
-           y: wC
-         } = QC, bC = QC.x + (null !== (ZC = this.labelOffsets.get(CC)) && void 0 !== ZC ? ZC : 0), nC = this.em, {
-           halfWidth: fC,
-           labelled: oC
-         } = this.extentOf(CC), qC = wC - nC, FC = bC + fC;
-         return wC + nC * (oC ? 6.2 : 3) < zC.top || qC > zC.bottom || FC < zC.left - 6 || bC - fC > zC.right ? 0 : Math.max(zC.left - 6 - FC, 6 - (bC - fC))
+       dispose() {
+         this._reset(), this.onTexturesAllocatedObservable.clear(), this.onBeforeTaskExecute.clear(), this.onAfterTaskExecute.clear()
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L16971-L16978` → after: `L584-L585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L584-L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L584-L585) · [Before (L16971-L16978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L16971-L16978)

```diff
-       shiftOnScreen(CC) {
-         var zC;
-         const ZC = this.anchorOf(CC);
-         if (!ZC) return 0;
-         const {
-           halfWidth: QC
-         } = this.extentOf(CC), wC = ZC.x + (null !== (zC = this.labelOffsets.get(CC)) && void 0 !== zC ? zC : 0), bC = wC + QC - (this.innerWidth - 6);
-         return bC > 0 ? -bC : Math.max(0, 6 - (wC - QC))
+       constructor(pp, ip) {
+         this._passes = [], this._passesDisabled = [], this._disabled = !1, this.onTexturesAllocatedObservable = new ep.d, this.onBeforeTaskExecute = new ep.d, this.onAfterTaskExecute = new ep.d, this.name = pp, this._frameGraph = ip, this._reset()
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L16980-L16990` → after: `L587-L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L587-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L587-L590) · [Before (L16980-L16990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L16980-L16990)

```diff
-       runLabelAside(CC, zC) {
-         var ZC;
-         let QC = null;
-         for (let nC = 0; nC < CC.children.length; nC++) CC.children[nC].classList.contains("DirectionArrowLabel") && (QC = CC.children[nC]);
-         if (!QC) return 0;
-         const wC = CC.classList.contains("DirectionArrowOnScreen") && this.project ? this.anchorOf(CC) : null,
-           bC = (wC && this.api ? this.side.sideOf(this.api, {
-             x: wC.x / this.innerWidth * 100,
-             y: wC.y / this.innerHeight * 100
-           }, zC, this.project) : 0) * this.halfWidthOf(QC);
-         return bC !== (null !== (ZC = this.sideLabels.get(QC)) && void 0 !== ZC ? ZC : 0) && (QC.style.transform = 0 === bC ? "" : `translateX(-50%) translateX(${bC}px)`, 0 === bC ? this.sideLabels.delete(QC) : this.sideLabels.set(QC, bC)), bC
+       _reset() {
+         for (const pp of this._passes) pp._dispose();
+         for (const pp of this._passesDisabled) pp._dispose();
+         this._passes.length = 0, this._passesDisabled.length = 0
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L16992-L16998` → after: `L592-L606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L592-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L592-L606) · [Before (L16992-L16998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L16992-L16998)

```diff
-       extentOf(CC) {
-         let zC = this.em,
-           ZC = !1;
-         for (let QC = 0; QC < CC.children.length; QC++) {
-           const wC = CC.children[QC],
-             bC = wC.classList.contains("DirectionArrowLabel");
-           ZC ||= bC, (bC || wC.classList.contains("DirectionArrowDistance")) && (zC = Math.max(zC, this.halfWidthOf(wC)))
+       _addPass(pp, ip) {
+         ip ? this._passesDisabled.push(pp) : this._passes.push(pp)
+       }
+       _checkTask() {
+         let pp, ip = null,
+           cp = null;
+         for (const xp of this._passes) {
+           const Op = xp._isValid();
+           if (Op) throw new Error(`Pass "${xp.name}" is not valid. ${Op}`);
+           if (dp.IsRenderPass(xp)) {
+             const pp = Array.isArray(xp.renderTarget) ? xp.renderTarget : [xp.renderTarget];
+             ip = [];
+             for (const cp of pp) void 0 !== cp && ip.push(this._frameGraph.textureManager.getTextureFromHandle(cp));
+             cp = void 0 !== xp.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(xp.renderTargetDepth) : null
+           } else Hp.IsObjectListPass(xp) && (pp = xp.objectList)
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L17000-L17002` → after: `L608-L640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L608-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L608-L640) · [Before (L17000-L17002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L17000-L17002)

```diff
-         return {
-           halfWidth: zC,
-           labelled: ZC
+         let Op, op = null,
+           Ip = [],
+           Sp = null;
+         for (const xp of this._passesDisabled) {
+           const pp = xp._isValid();
+           if (pp) throw new Error(`Pass "${xp.name}" is not valid. ${pp}`);
+           if (dp.IsRenderPass(xp)) {
+             const pp = Array.isArray(xp.renderTarget) ? xp.renderTarget : [xp.renderTarget];
+             op = [];
+             for (const ip of pp) void 0 !== ip && op.push(this._frameGraph.textureManager.getTextureFromHandle(ip));
+             Ip = pp, Sp = void 0 !== xp.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(xp.renderTargetDepth) : null
+           } else Hp.IsObjectListPass(xp) && (Op = xp.objectList)
+         }
+         if (this._passesDisabled.length > 0) {
+           if (!this._checkSameRenderTarget(ip, op)) {
+             let pp = !0;
+ ... (17 more added lines; see GitHub link above)
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L17005-L17010` → after: `L644-L651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L644-L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L644-L651) · [Before (L17005-L17010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L17005-L17010)

```diff
-       halfWidthOf(CC) {
-         let zC = this.halfWidths.get(CC);
-         return void 0 === zC && (zC = CC.offsetWidth / 2, this.halfWidths.set(CC, zC), this.sizes.observe(CC), this.labels.add(CC)), zC
-       }
-       forgetGoneLabels() {
-         for (const CC of this.labels) CC.isConnected || (this.sizes.unobserve(CC), this.halfWidths.delete(CC), this.labels.delete(CC))
+       _initializePasses() {
+         this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
+         try {
+           for (const pp of this._passes) pp._initialize();
+           for (const pp of this._passesDisabled) pp._initialize()
+         } finally {
+           this._frameGraph.engine._debugPopGroup?.()
+         }
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L17012-L17025` → after: `L653-L658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L653-L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L653-L658) · [Before (L17012-L17025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L17012-L17025)

```diff
-       anchorOf(CC) {
-         const zC = CC.style.translate,
-           ZC = this.anchors.get(CC);
-         if (ZC && ZC.translate === zC && ZC.innerWidth === this.innerWidth && ZC.innerHeight === this.innerHeight) return ZC;
-         const QC = /^(-?[\d.]+)vw (-?[\d.]+)vh$/.exec(zC);
-         if (!QC) return null;
-         const wC = {
-           translate: zC,
-           x: parseFloat(QC[1]) / 100 * this.innerWidth,
-           y: parseFloat(QC[2]) / 100 * this.innerHeight,
-           innerWidth: this.innerWidth,
-           innerHeight: this.innerHeight
-         };
-         return this.anchors.set(CC, wC), wC
+       _checkSameRenderTarget(pp, ip) {
+         if (null === pp || null === ip) return pp === ip;
+         if (pp.length !== ip.length) return !1;
+         for (let cp = 0; cp < pp.length; cp++)
+           if (pp[cp] !== ip[cp]) return !1;
+         return !0
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L17028-L17053` → after: `L661-L663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L661-L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L661-L663) · [Before (L17028-L17053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L17028-L17053)

```diff
-     const bG = "Baf2ArrowText";
- 
-     function nG(CC, zC) {
-       const ZC = CC.rows.find((CC => CC.current));
-       return HC(CC.tutorial) && null !== ZC && void 0 !== ZC && ZC.item && Dw(ZC) && KC(ZC.item).includes(zC) ? ZC.item : null
-     }
-     const fG = new class {
-       constructor(CC) {
-         this.select = CC, this.picks = new Map
-       }
-       open(CC, zC, ZC) {
-         const QC = nG(zC, CC);
-         null !== QC && this.CM(CC, QC, ZC)
-       }
-       follow(CC, zC) {
-         if (fC())
- ... (10 more removed lines; see GitHub link above)
+     class kp extends jp {
+       get alphaMode() {
+         return this.postProcess.alphaMode
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L17055-L17059` → after: `L665-L666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L665-L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L665-L666) · [Before (L17055-L17059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L17055-L17059)

```diff
-       CM(CC, zC, ZC) {
-         this.picks.set(CC, {
-           item: zC,
-           had: ZC(zC)
-         }), this.select(CC, zC)
+       set alphaMode(pp) {
+         this.postProcess.alphaMode = pp
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L17061-L17067` → after: `L668-L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L668-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L668-L669) · [Before (L17061-L17067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L17061-L17067)

```diff
-     }(Ew.s);
- 
-     function oG(CC) {
-       return zC => {
-         let ZC = 0;
-         for (const QC of CC.getInventoryItems())(null === QC || void 0 === QC ? void 0 : QC.name) === zC && (ZC += null === QC.amount ? 1 : Math.max(QC.amount, 0));
-         return ZC
+       get drawWrapper() {
+         return this._postProcessDrawWrapper
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L17069-L17087` → after: `L671-L701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L671-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L671-L701) · [Before (L17069-L17087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L17069-L17087)

```diff
-     }
- 
-     function qG(CC, zC, ZC, QC) {
-       CC.getClientOption(zC, "canCraft") && "inventory" !== Rw.b.get("openInGameMenuName") && (fG.open(ZC, QC.get(), oG(CC)), Hw.o.bp("toggleMenu", `inventory|${ZC}`))
-     }
-     let FG = null,
-       WG = !1;
- 
-     function NG(CC) {
-       const zC = ib();
-       CC === FG && zC === WG || (FG = CC, WG = zC, (0, Ew.t)(function(CC, zC) {
-         const ZC = new Map;
-         for (let QC = CC + 1; QC <= wC.length; QC++) {
-           const wC = jb(QC, CC, zC);
-           if (wC)
-             for (const zC of PC(QC).unlocks) ZC.set(zC, {
- ... (3 more removed lines; see GitHub link above)
+       constructor(pp, ip, cp) {
+         super(pp, ip), this.sourceSamplingMode = 2, this.depthReadOnly = !1, this.stencilReadOnly = !1, this.disableColorWrite = !1, this.drawBackFace = !1, this.depthTest = !0, this.postProcess = cp, this._postProcessDrawWrapper = this.postProcess.drawWrapper, this.outputTexture … [truncated]
+       }
+       isReady() {
+         return this.postProcess.isReady()
+       }
+       getClassName() {
+         return "FrameGraphPostProcessTask"
+       }
+       record() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
+           ip = arguments.length > 1 ? arguments[1] : void 0,
+           cp = arguments.length > 2 ? arguments[2] : void 0;
+         if (void 0 === this.sourceTexture && void 0 === this.targetTexture) throw new Error(`FrameGraphPostProcessTask "${this.name}": sourceTexture or targetTexture is required`);
+         const Op = void 0 !== this.sourceTexture ? this._frameGraph.textureManager.getTextureCreationOptions(this.sourceTexture) : void 0;
+         if (Op && (Op.options.samples = 1), this._frameGraph.textureManager.resolveDanglingHandle(this.outputTexture, this.targetTexture, this.name, Op), void 0 !== this.depthAttachmentTexture && this._frameGraph.textureManager.resolveDanglingHandle(this.outputDepthAttachmentText … [truncated]
+ ... (15 more added lines; see GitHub link above)
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L17090-L17102` → after: `L704-L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L704-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L704-L706) · [Before (L17090-L17102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L17090-L17102)

```diff
-       }(CC, zC)))
-     }
- 
-     function MG() {
-       return CC = () => {
-         null !== FG && NG(FG)
-       }, (0, Jb.g)(Ib, CC);
-       var CC
-     }
- 
-     function gG() {
-       return (0, Ew.y)(Db(Object.keys(hC), rb)), () => {
-         (0, Ew.y)([])
+       }
+       dispose() {
+         this.postProcess.dispose(), super.dispose()
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L17105-L17123` → after: `L709-L711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L709-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L709-L711) · [Before (L17105-L17123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L17105-L17123)

```diff
- 
-     function SG(CC, zC, ZC) {
-       var QC, wC;
-       const bC = CC.getTargetedBlock();
-       if (!bC || ! function(CC, zC, ZC) {
-           if ("Chest" !== zC) return !1;
-           const QC = CC.split("|")[0];
-           if (!qZ(QC) || 0 === Ez[QC].outputSlots.length) return !1;
-           const wC = dp(CC);
-           return ZC[0] === wC[0] && ZC[1] === wC[1] && ZC[2] === wC[2]
-         }(ZC, null === (QC = CC.XzC(zC)) || void 0 === QC ? void 0 : QC.name, bC.normal)) return !1;
-       const [nC, fC, oC] = bC.wp, qC = CC.getBlockId(nC, fC, oC);
-       return 0 === qC || !0 === (null === (wC = dC.g[qC]) || void 0 === wC ? void 0 : wC.canBePlacedOver)
-     }
-     var pG = ZC(36641);
-     const PG = new Set(SZ.d);
- ... (3 more removed lines; see GitHub link above)
+     class mp extends kp {
+       constructor(pp, ip, cp) {
+         super(pp, ip, cp || new Dp(pp, ip.engine))
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L17125-L17143` → after: `L713-L721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L713-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L713-L721) · [Before (L17125-L17143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L17125-L17143)

```diff
-       onAltAction(CC, zC, ZC) {
-         const QC = CC.getTargetedBlock();
-         if (!QC || function(CC) {
-             const zC = CC.split("|")[0];
-             return qZ(zC) || null !== IQ(zC) || vC(zC) || SZ.d.includes(zC)
-           }(ZC) && !PG.has(ZC.split("|")[0])) return;
-         const wC = CC.XzC(zC);
-         if (!wC || !PG.has(wC.name.split("|")[0]) || Date.now() - this.lastAt < 4e3) return;
-         const bC = wC.typeObj.id,
-           [nC, fC, oC] = QC.wp,
-           qC = CC.getBlockId(nC, fC, oC),
-           FC = dC.g[qC];
-         (0 === qC || null !== FC && void 0 !== FC && FC.NM || null !== FC && void 0 !== FC && FC.canBePlacedOver) && CC.isSolidToPlayerBlockId(bC) && CC.canModifyBlockAt(nC, fC, oC) && CC.QzC(nC, fC, oC, bC) && !CC.QzC(nC, fC, oC, bC, zC) && (this.lastAt = Date.now(), this.toasts … [truncated]
-           baf2ToastText: [(0, EC.Md)({
-             translationKey: "buildAFactory2Game:beltStepBack"
-           }, EC.H.whiteUiText)],
- ... (3 more removed lines; see GitHub link above)
+       getClassName() {
+         return "FrameGraphFXAATask"
+       }
+       record() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
+           ip = arguments.length > 1 ? arguments[1] : void 0,
+           cp = arguments.length > 2 ? arguments[2] : void 0;
+         const Op = super.record(pp, ip, cp);
+         return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, Op
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L17146-L17148` → after: `L724-L727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L724-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L724-L727) · [Before (L17146-L17148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L17146-L17148)

```diff
-     class RG {
-       constructor(CC) {
-         this.show = CC, this.started = null, this.gatedThisHold = new Set, this.hintedAt = new Map
+     var Rp = cp(42094);
+     class qp extends kp {
+       constructor(pp, ip, cp) {
+         super(pp, ip, cp || new Rp.d(pp, ip.engine))
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L17150-L17165` → after: `L729-L730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L729-L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L729-L730) · [Before (L17150-L17165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L17150-L17165)

```diff
-       onMining(CC, zC, ZC) {
-         var QC;
-         if (!zC) return this.started = null, void this.gatedThisHold.clear();
-         if (!CC) return void(this.started = null);
-         const wC = `${CC.x},${CC.y},${CC.z},${CC.vq}`;
-         if (wC === this.started) return;
-         this.started = wC;
-         const bC = cQ(CC.y) ? MP(CC.block, CC.vq, CC.level) : null;
-         if (null === bC || this.gatedThisHold.has(wC)) return;
-         this.gatedThisHold.add(wC);
-         const nC = CC.block.split("|")[0];
-         ZC - (null !== (QC = this.hintedAt.get(nC)) && void 0 !== QC ? QC : -1 / 0) < 5e3 || (this.hintedAt.set(nC, ZC), this.show({
-           baf2ToastText: gP(bC, CC.block),
-           baf2ToastMs: 2500,
-           baf2ToastStyle: "baf2ToastWarn"
-         }))
+       getClassName() {
+         return "FrameGraphPassTask"
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L17168-L17186` → after: `L733-L743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L733-L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L733-L743) · [Before (L17168-L17186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L17168-L17186)

```diff
-     var AG = ZC(38);
- 
-     function xG(CC, zC) {
-       const ZC = [...CC.baf2CoreBankPaused];
-       for (const [wC] of CC.baf2CoreBanked) ZC.push(wC);
-       for (const nC of wC) {
-         for (const {
-             item: CC
-           }
-           of nC.cost) ZC.push(CC);
-         for (const CC of nC.newDeposits) ZC.push(CC.block);
-         for (const CC of nC.unlocks) ZC.push(CC, YC(CC));
-         nC.reward && ZC.push(nC.reward);
-         for (const {
-             item: CC
-           }
- ... (3 more removed lines; see GitHub link above)
+     var Mp = cp(40296),
+       Cp = cp(40372),
+       Ep = cp(40334),
+       Xp = cp(40445),
+       lp = cp(37487);
+     class Qp {
+       getRenderCamera(pp) {
+         if (this._renderCamera) return this._renderCamera;
+         {
+           let ip;
+           return ip = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, pp && ip && ip.isRigCamera ? ip.rigParent : ip
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L17189-L17191` → after: `L746-L747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L746-L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L746-L747) · [Before (L17189-L17191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L17189-L17191)

```diff
-       return {
-         message: CC,
-         itemNames: zC([...new Set(ZC)])
+       setRenderCamera(pp) {
+         this._renderCamera = pp
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L17193-L17328` → after: `L749-L750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L749-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L749-L750) · [Before (L17193-L17328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L17193-L17328)

```diff
-     }
-     const JG = "baf2MultiblockGuide";
-     const IG = new Map;
-     const iG = function(CC, zC, ZC, wC) {
-       let {
-         localPlayerId: bC
-       } = wC;
-       const nC = new Rf,
-         fC = new WM,
-         qC = new GM,
-         FC = new pM(qC),
-         WC = (CC, zC) => {
-           zC ? FC.observe(CC) : FC.unobserve(CC)
-         },
-         NC = new SM,
-         MC = new JM(WC),
- ... (120 more removed lines; see GitHub link above)
+       _getSharedGizmoLight() {
+         return this._sharedGizmoLight || (this._sharedGizmoLight = new Xp.b("shared gizmo light", new Yp.o(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = lp.d.Gray()), this._sharedGizmoLight
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L17330-L17332` → after: `L752-L753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L752-L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L752-L753) · [Before (L17330-L17332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L17330-L17332)

```diff
- 
-       function xz() {
-         (0, Gw.h)(), Az(null)
+       static get DefaultUtilityLayer() {
+         return null == Qp._DefaultUtilityLayer ? Qp._CreateDefaultUtilityLayerFromScene(Lp.e.LastCreatedScene) : Qp._DefaultUtilityLayer
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L17334-L17393` → after: `L755-L787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L755-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L755-L787) · [Before (L17334-L17393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L17334-L17393)

```diff
-       let Jz = new Set,
-         Iz = !1;
-       const iz = {
-         onCreate: CC => {
-           pC = CC, pC.setGroundArrowStyle({
-             width: .6,
-             alpha: .5,
-             endAtSolidFace: !0
-           });
-           for (const zC of hz) {
-             const CC = Ez[zC].inputSlots ? Xf(nC) : Hf(zC, nC, YC, PC);
-             Rz.push((0, pw.e)(zC, CC))
-           }
-           Rz.push((0, Gw.C)((0, QC.createElement)(QC.Fragment, null, (0, QC.createElement)(vM, {
-             controller: MC
-           }), (0, QC.createElement)(Pg, {
- ... (44 more removed lines; see GitHub link above)
+       static _CreateDefaultUtilityLayerFromScene(pp) {
+         return Qp._DefaultUtilityLayer = new Qp(pp), Qp._DefaultUtilityLayer.originalScene.Kl.addOnce((() => {
+           Qp._DefaultUtilityLayer = null
+         })), Qp._DefaultUtilityLayer
+       }
+       static get DefaultKeepDepthUtilityLayer() {
+         return null == Qp._DefaultKeepDepthUtilityLayer ? Qp._CreateDefaultKeepUtilityLayerFromScene(Lp.e.LastCreatedScene) : Qp._DefaultKeepDepthUtilityLayer
+       }
+       static _CreateDefaultKeepUtilityLayerFromScene(pp) {
+         return Qp._DefaultKeepDepthUtilityLayer = new Qp(pp), Qp._DefaultKeepDepthUtilityLayer.utilityLayerScene.autoClearDepthAndStencil = !1, Qp._DefaultKeepDepthUtilityLayer.originalScene.Kl.addOnce((() => {
+           Qp._DefaultKeepDepthUtilityLayer = null
+         })), Qp._DefaultKeepDepthUtilityLayer
+       }
+       constructor(pp) {
+         let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
+           cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+ ... (17 more added lines; see GitHub link above)
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L17395-L17404` → after: `L789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L789) · [Before (L17395-L17404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L17395-L17404)

```diff
-             }),
-             onClose: () => {
-               Az(null)
-             }
-           })), Rz.push((0, Pw.v)({
-             id: "baf2Quests",
-             labelKey: "buildAFactory2Game:questBookTitle",
-             icon: {
-               kind: "item",
-               name: "Book"
+               return Op
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L17406-L17462` → after: `L791-L794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L791-L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L791-L794) · [Before (L17406-L17462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L17406-L17462)

```diff
-             className: "Baf2QuestsButton",
-             onClick: () => {
-               Az({
-                 kind: "quests"
-               }), (0, Gw.u)()
-             }
-           })), Rz.push(function(CC, zC) {
-             let ZC = null,
-               QC = () => {};
-             const wC = zC => {
-               var wC;
-               let {
-                 tutorial: bC,
-                 tutorialKnown: nC
-               } = zC;
-               (null === (wC = ZC) || void 0 === wC ? void 0 : wC.tutorial) === bC && ZC.tutorialKnown === nC || (ZC = {
- ... (41 more removed lines; see GitHub link above)
+             op = Op(this.utilityLayerScene);
+           if (!ip.ray && op && (ip.ray = op.ray), ip.originalPickingInfo?.aimTransform && op && (op.aimTransform = ip.originalPickingInfo.aimTransform, op.gripTransform = ip.originalPickingInfo.gripTransform), this.utilityLayerScene.onPrePointerObservable.notifyObservers(ip), thi … [truncated]
+           if (this.utilityLayerScene.autoClearDepthAndStencil || this.pickUtilitySceneFirst) op && op.hit && (ip.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new Cp.i(ip.type, ip.event, op), ip.type), ip.skipOnPointerObservable = !0);
+           else {
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L17464-L17505` → after: `L796-L797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L796-L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L796-L797) · [Before (L17464-L17505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L17464-L17505)

```diff
-               ZC = Hw.o.subscribe(lw, (CC => {
-                 fG.follow(CC, zC)
-               }));
-             return () => {
-               Hw.o.unsubscribe(ZC), fG.clear()
-             }
-           }(pC)), Rz.push(function() {
-             const CC = document.documentElement,
-               zC = (0, DM.b)(".InvenBodyRight", [], (() => {
-                 const zC = document.querySelector(".InvenBodyRight");
-                 zC && CC.style.setProperty("--baf2-backpack-width", `${zC.offsetWidth}px`)
-               }));
-             return () => {
-               zC(), CC.style.removeProperty("--baf2-backpack-width")
-             }
-           }()), Rz.push(function() {
- ... (26 more removed lines; see GitHub link above)
+               Ip = ip.event;
+             cp && op && (0 === op.distance && cp.pickedMesh ? this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(cp.pickedMesh) ? (this._notifyObservers(ip, cp, Ip), ip.skipOnPointerObservable = !0) : ip.type === Cp.d.POINTERDOWN ? (this._pointerCaptures[Ip.pointerI … [truncated]
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L17507-L17752` → after: `L799-L812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L799-L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L799-L812) · [Before (L17507-L17752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L17507-L17752)

```diff
-           Iz || (Iz = !0, PC.send("baf2clientready"));
-           const nC = pC.getPositionView(bC);
-           MC.onAfterRender(zC, nC, NC), hC.onAfterRender(zC, nC, NC, gC), FC.run(NC), wz.onAfterRender(pC, nC), bz.onAfterRender(pC, nC), KC.onAfterRender(pC, nC), cC.onAfterRender(pC, nC), uC.onAfterRender(pC, bC, nC), yC.onAfterRender(pC, bC, nC), BC.onAfterRender(pC, bC), OC.o … [truncated]
-           const oC = pC.getTargetedBlock();
-           Qz.onAfterRender(pC, bC, null !== (ZC = null === oC || void 0 === oC ? void 0 : oC.HV) && void 0 !== ZC ? ZC : 0, null !== (QC = null === oC || void 0 === oC ? void 0 : oC.position) && void 0 !== QC ? QC : null), Fz.onAfterRender(pC, zC), eC.onMining(function(CC, zC) {
-             var ZC, QC;
-             const wC = CC.getMiningBlock();
-             if (!wC) return null;
-             const bC = (0, dC.e)(CC.getBlockId(wC[0], wC[1], wC[2])),
-               nC = null !== (ZC = null === (QC = CC.XzC(zC)) || void 0 === QC ? void 0 : QC.name) && void 0 !== ZC ? ZC : null,
-               fC = CC.getItemStat(zC, bC.split("|")[0], "harvestLevel");
-             return {
-               block: bC,
-               x: wC[0],
-               y: wC[1],
-               z: wC[2],
- ... (230 more removed lines; see GitHub link above)
+         })), this._originalPointerObserver && pp.onPrePointerObservable.makeObserverTopPriority(this._originalPointerObserver)), this.utilityLayerScene.autoClear = !1, cp || (this._afterRenderObserver = this.originalScene.onAfterRenderCameraObservable.add((pp => {
+           this.shouldRender && pp == this.getRenderCamera() && this.render()
+         }))), this._sceneDisposeObserver = this.originalScene.Kl.add((() => {
+           this.dispose()
+         })), this._updateCamera()
+       }
+       _notifyObservers(pp, ip, cp) {
+         pp.skipOnPointerObservable || (this.utilityLayerScene.onPointerObservable.notifyObservers(new Cp.i(pp.type, pp.event, ip), pp.type), this._lastPointerEvents[cp.pointerId] = !0)
+       }
+       render() {
+         if (this._updateCamera(), this.utilityLayerScene.activeCamera) {
+           const pp = this.utilityLayerScene.activeCamera.Gl(),
+             ip = this.utilityLayerScene.activeCamera;
+           ip._scene = this.utilityLayerScene, ip.leftCamera && (ip.leftCamera._scene = this.utilityLayerScene), ip.rightCamera && (ip.rightCamera._scene = this.utilityLayerScene), this.utilityLayerScene.render(!1), ip._scene = pp, ip.leftCamera && (ip.leftCamera._scene = pp), ip. … [truncated]
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L17754-L17755` → after: `L814-L820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L814-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L814-L820) · [Before (L17754-L17755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L17754-L17755)

```diff
-       };
-       return iz
+       }
+       dispose() {
+         this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.Kl.remove(this._sceneDisposeObserver), this._originalPointerObserver && t … [truncated]
+       }
+       _updateCamera() {
+         this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
+       }
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L17757-L17782` → after: `L822-L838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L822-L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L822-L838) · [Before (L17757-L17782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L17757-L17782)

```diff
-   },
-   38341: (CC, zC, ZC) => {
-     function QC(CC, zC, ZC) {
-       const QC = new Set,
-         wC = new ResizeObserver(ZC),
-         bC = () => {
-           const zC = new Set(document.querySelectorAll(CC));
-           let bC = !1;
-           for (const CC of QC) zC.has(CC) || (wC.unobserve(CC), QC.delete(CC), bC = !0);
-           for (const CC of zC) QC.has(CC) || (wC.observe(CC), nC.observe(CC, {
-             attributes: !0,
-             attributeFilter: ["class", "style"]
-           }), QC.add(CC));
-           bC && ZC()
-         },
-         nC = new MutationObserver((zC => {
- ... (10 more removed lines; see GitHub link above)
+     Qp._DefaultUtilityLayer = null, Qp._DefaultKeepDepthUtilityLayer = null;
+     const Jp = {
+       FindMainCamera: function(pp) {
+         return pp.findMainCamera()
+       },
+       FindMainObjectRenderer: function(pp) {
+         return pp.findMainObjectRenderer()
+       },
+       CreateUtilityLayerRenderer: function(pp) {
+         let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+         const cp = pp.pw,
+           Op = new Qp(cp, ip, !0);
+         Op.utilityLayerScene.activeCamera = cp.activeCamera;
+         let op = Jp.FindMainCamera(cp.frameGraph);
+         !op && cp.cameras.length > 0 && (op = cp.cameras[0]), op && (Op.setRenderCamera(op), Op.utilityLayerScene.activeCamera = op);
+         const Ip = cp.onAfterRenderObservable.add((() => {
+ ... (1 more added lines; see GitHub link above)
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L17784-L17790` → after: `L840-L842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L840-L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L840-L842) · [Before (L17784-L17790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L17784-L17790)

```diff
-       nC.observe(document.body, {
-         childList: !0,
-         subtree: !0
-       });
-       for (const fC of zC) wC.observe(fC);
-       return window.addEventListener("resize", ZC), bC(), ZC(), () => {
-         wC.disconnect(), nC.disconnect(), window.removeEventListener("resize", ZC)
+         return Op.utilityLayerScene.Kl.addOnce((() => {
+           cp.onAfterRenderObservable.remove(Ip)
+         })), Op
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L17792-L17802` → after: `L844-L845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L844-L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L844-L845) · [Before (L17792-L17802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L17792-L17802)

```diff
-     }
-     ZC.d(zC, {
-       b: () => QC
-     })
-   },
-   38319: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       e: () => nC,
-       i: () => bC
-     });
-     const QC = new WeakMap;
+     };
+     let Bp = null;
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L17804-L17810` → after: `L847-L911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L847-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L847-L911) · [Before (L17804-L17810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L17804-L17810)

```diff
-     function wC(CC) {
-       let zC = QC.get(CC);
-       return zC || (zC = {
-         hidden: CC.hidden,
-         x: NaN,
-         y: NaN
-       }, QC.set(CC, zC)), zC
+     function Np(pp, ip, cp, Op) {
+       let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
+         Ip = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         Sp = arguments.length > 6 ? arguments[6] : void 0,
+         xp = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
+         Lp = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
+       const {
+         height: Yp,
+         width: Dp
+       } = np(pp, ip, cp);
+       if (!Yp || !Dp) return void Pp.e.Error("Invalid 'size' parameter !");
+       const Ap = ip.Gl();
+       let yp = Ap.activeCamera !== ip;
+       if (Ap.frameGraph) {
+         const pp = Jp.FindMainObjectRenderer(Ap.frameGraph);
+         pp && (yp = pp.camera !== ip)
+ ... (49 more added lines; see GitHub link above)
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L17813-L17815` → after: `L914-L1092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L914-L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L914-L1092) · [Before (L17813-L17815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L17813-L17815)

```diff
-     function bC(CC, zC) {
-       const ZC = wC(CC);
-       ZC.hidden !== zC && (ZC.hidden = zC, CC.hidden = zC)
+     function bp(pp, ip, Ip, Sp) {
+       let xp = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
+         Lp = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
+         Yp = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+         Dp = arguments.length > 7 ? arguments[7] : void 0,
+         Wp = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
+         vp = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
+         tp = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
+         Hp = arguments.length > 11 ? arguments[11] : void 0,
+         dp = arguments.length > 12 ? arguments[12] : void 0,
+         ep = arguments.length > 13 ? arguments[13] : void 0,
+         jp = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
+         kp = arguments.length > 15 ? arguments[15] : void 0;
+       const mp = ip.Gl();
+       if (mp.frameGraph) return void ap(mp.frameGraph, ip, Ip, xp, Lp, Yp, Dp, Hp, ep, !Sp).then((pp => {
+         Sp && Sp(pp)
+ ... (163 more added lines; see GitHub link above)
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L17819-L17820` → after: `L1096-L1124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R1096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L1096-L1124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/243.js#L1096-L1124) · [Before (L17819-L17820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/243.js#L17819-L17820)

```diff
-       const QC = wC(CC);
-       QC.x === zC && QC.y === ZC || (QC.x = zC, QC.y = ZC, CC.style.translate = `${zC}vw ${ZC}vh`)
+       let Op = 0,
+         op = 0,
+         Ip = 0,
+         Sp = 0;
+       if ("object" === typeof cp) {
+         const xp = cp.precision ? Math.abs(cp.precision) : 1;
+         cp.width && cp.height ? (Op = cp.height * xp, op = cp.width * xp) : cp.width && !cp.height ? (op = cp.width * xp, Op = Math.round(op / pp.getAspectRatio(ip))) : cp.height && !cp.width ? (Op = cp.height * xp, op = Math.round(Op * pp.getAspectRatio(ip))) : (op = Math.round( … [truncated]
+       } else isNaN(cp) || (Op = cp, op = cp, Ip = cp, Sp = cp);
+       return op && (op = Math.floor(op)), Op && (Op = Math.floor(Op)), Ip && (Ip = Math.floor(Ip)), Sp && (Sp = Math.floor(Sp)), {
+         height: 0 | Op,
+         width: 0 | op,
+         finalWidth: 0 | Ip,
+         finalHeight: 0 | Sp
+       }
+     }
+     const Fp = {
+ ... (13 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/244.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/244.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L4-L163` → after: `L4-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L4-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/244.js#L4-L72) · [Before (L4-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/244.js#L4-L163)

```diff
-   40930: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       c: () => nC,
-       d: () => FC,
-       g: () => qC
-     });
-     var QC, wC = ZC(36991),
-       bC = ZC(36963);
-     ! function(CC) {
-       CC[CC.CW = 0] = "CW", CC[CC.CCW = 1] = "CCW"
-     }(QC || (QC = {}));
-     class nC {
-       static Interpolate(CC, zC, ZC, QC, wC) {
-         if (0 === CC) return 0;
-         const bC = 1 - 3 * QC + 3 * zC,
-           nC = 3 * QC - 6 * zC,
- ... (144 more removed lines; see GitHub link above)
+   37985: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => op
+     });
+     var Op = cp(37989);
+     class op {
+       static GetPlanes(pp) {
+         const ip = [];
+         for (let cp = 0; cp < 6; cp++) ip.push(new Op.e(0, 0, 0, 0));
+         return op.GetPlanesToRef(pp, ip), ip
+       }
+       static GetNearPlaneToRef(pp, ip) {
+         const cp = pp.m;
+         ip.normal.x = cp[3] + cp[2], ip.normal.y = cp[7] + cp[6], ip.normal.z = cp[11] + cp[10], ip.d = cp[15] + cp[14], ip.normalize()
+       }
+       static GetFarPlaneToRef(pp, ip) {
+ ... (53 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L165-L300` → after: `L74-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L74-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/244.js#L74-L138) · [Before (L165-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/244.js#L165-L300)

```diff
-         for (let ZC = CC - 1, QC = 0; QC < CC; ZC = QC++) zC += this._points[ZC].x * this._points[QC].y - this._points[QC].x * this._points[ZC].y;
-         return .5 * zC
-       }
-       getPoints() {
-         return this._points
-       }
-       getPointAtLengthPosition(CC) {
-         if (CC < 0 || CC > 1) return bC.n.Zero();
-         const zC = CC * this.length();
-         let ZC = 0;
-         for (let QC = 0; QC < this._points.length; QC++) {
-           const CC = (QC + 1) % this._points.length,
-             wC = this._points[QC],
-             nC = this._points[CC].subtract(wC),
-             fC = nC.length() + ZC;
-           if (zC >= ZC && zC <= fC) {
- ... (120 more removed lines; see GitHub link above)
+         return 0 !== pp && (ip = 1 / pp), this.normal.x *= ip, this.normal.y *= ip, this.normal.z *= ip, this.d *= ip, this
+       }
+       transform(pp) {
+         const ip = op._TmpMatrix;
+         pp.invertToRef(ip);
+         const cp = ip.m,
+           Op = this.normal.x,
+           Ip = this.normal.y,
+           Sp = this.normal.z,
+           xp = this.d,
+           Lp = Op * cp[0] + Ip * cp[1] + Sp * cp[2] + xp * cp[3],
+           Yp = Op * cp[4] + Ip * cp[5] + Sp * cp[6] + xp * cp[7],
+           Dp = Op * cp[8] + Ip * cp[9] + Sp * cp[10] + xp * cp[11],
+           Ap = Op * cp[12] + Ip * cp[13] + Sp * cp[14] + xp * cp[15];
+         return new op(Lp, Yp, Dp, Ap)
+       }
+ ... (49 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L333` → after: `L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/244.js#L171) · [Before (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/244.js#L333)

```diff
-             QC.c.Warn(oC.message)
+             Op.e.Warn(Lp.message)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L339-L341` → after: `L177-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L177-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/244.js#L177-L190) · [Before (L339-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/244.js#L339-L341)

```diff
-   38507: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       c: () => QC
+   38124: (pp, ip, cp) => {
+     function Op() {
+       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (pp => {
+         const ip = 16 * Math.random() | 0;
+         return ("x" === pp ? ip : 3 & ip | 8).toString(16)
+       }))
+     }
+     cp.d(ip, {
+       e: () => Op
+     })
+   },
+   38905: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Op
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L362` → after: `L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/244.js#L211) · [Before (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/244.js#L362)

```diff
-         const zC = CC => CC < 10 ? "0" + CC : "" + CC,
+         const ip = pp => pp < 10 ? "0" + pp : "" + pp,
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L377` → after: `L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/244.js#L226) · [Before (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/244.js#L377)

```diff
-         const oC = `<div style='color:${nC.color}'>${bC}</div><br>`;
+         const Lp = `<div style='color:${Sp.color}'>${Ip}</div><br>`;
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/245.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/245.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad)

#### 1. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/245.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/245.js#L2)

```diff
- export const ids = [245];
+ export const ids = [244, 245];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L4-L35` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/245.js#L4) · [Before (L4-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/245.js#L4-L35)

```diff
-   38631: (CC, zC, ZC) => {
-     var QC = {
-       "./cape_cow_cream.png": 27940,
-       "./cape_cow_normal.png": 27949,
-       "./cape_creator_level1.png": 27958,
-       "./cape_creator_level2.png": 27960,
-       "./cape_creator_level3.png": 27965,
-       "./cape_none.png": 27970,
-       "./cape_pig.png": 27978,
-       "./cape_sheep.png": 27981,
-       "./cape_super.png": 27987,
-       "./cape_super_inverted.png": 27996,
-       "./cape_youtuber.png": 28e3
-     };
- 
-     function wC(CC) {
- ... (16 more removed lines; see GitHub link above)
+   61380: (pp, ip, cp) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L37-L109` → after: `L6-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L6-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/245.js#L6-L181) · [Before (L37-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/245.js#L37-L109)

```diff
-       openCharacterPreview: () => yC
-     });
-     var QC = ZC(37934),
-       wC = ZC(2753),
-       bC = ZC(583),
-       nC = ZC(37023),
-       fC = ZC(2173),
-       oC = ZC(37014),
-       qC = ZC(39635),
-       FC = ZC(39902),
-       WC = ZC(40925),
-       NC = ZC(36961),
-       MC = ZC(40076),
-       gC = ZC(37138),
-       SC = ZC(40092),
-       pC = ZC(40968),
- ... (57 more removed lines; see GitHub link above)
+       RegisterShaderMaterial: () => Op.e,
+       ShaderMaterial: () => Op.q,
+       ShaderMaterialCreateFromSnippetAsync: () => Op.f,
+       ShaderMaterialParse: () => Op.p,
+       ShaderMaterialParseFromFileAsync: () => Op.j,
+       ShaderMaterialParseFromSnippetAsync: () => Op.m
+     });
+     var Op = cp(40647);
+     (0, Op.e)()
+   },
+   37985: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => op
+     });
+     var Op = cp(37989);
+     class op {
+ ... (160 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L111-L365` → after: `L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/245.js#L183) · [Before (L111-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/245.js#L111-L365)

```diff
-             throw delete this.modelCache[QC], console.error(`Failed to load preview attachment ${QC}:`, wC), wC
-           }
-         })()), this.modelCache[QC]
-       }
-       async update(CC, zC) {
-         var ZC;
-         const {
-           thinInstMgr: QC,
-           WH: wC
-         } = this;
-         this.cosmeticNames[CC] = zC;
-         const bC = this.attachmentsByType[CC];
-         if (bC)
-           for (const {
-               mesh: fC,
-               destNode: oC,
- ... (239 more removed lines; see GitHub link above)
+             Op.e.Warn(Lp.message)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L368-L408` → after: `L186-L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L186-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/245.js#L186-L253) · [Before (L368-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/245.js#L368-L408)

```diff
-       };
-     (0, nC.o)(NC)
-   },
-   38517: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       b: () => FC,
-       c: () => WC
-     });
-     var QC = ZC(37044),
-       wC = ZC(37301),
-       bC = ZC(37050),
-       nC = ZC(37061);
-     const fC = "bloxdTextLodBias",
-       oC = [{
-         name: fC,
-         type: "float"
- ... (25 more removed lines; see GitHub link above)
+       }
+     }
+   },
+   38124: (pp, ip, cp) => {
+     function Op() {
+       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (pp => {
+         const ip = 16 * Math.random() | 0;
+         return ("x" === pp ? ip : 3 & ip | 8).toString(16)
+       }))
+     }
+     cp.d(ip, {
+       e: () => Op
+     })
+   },
+   38905: (pp, ip, cp) => {
+     cp.d(ip, {
+ ... (52 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L410-L891` → after: `L255-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L255-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/245.js#L255-L269) · [Before (L410-L891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/245.js#L410-L891)

```diff
-         }
-       };
-     (0, nC.o)(WC)
-   },
-   40956: (CC, zC, ZC) => {
-     ZC.r(zC), ZC.d(zC, {
-       CapeMaterialPlugin: () => AC,
-       HueTintMaterialPlugin: () => xC,
-       LifeformMaterialPlugin: () => JC,
-       OverlayMaterialPlugin: () => IC
-     });
-     var QC = ZC(40958),
-       wC = ZC(37849);
-     class bC extends((0, QC.g)(wC.e)) {}(0, QC.i)(wC.e, bC);
-     var nC = ZC(37040);
-     class fC extends((0, QC.g)(nC.f)) {}(0, QC.i)(nC.f, fC);
- ... (466 more removed lines; see GitHub link above)
+       }
+     }
+     Op.NoneLogLevel = 0, Op.MessageLogLevel = 1, Op.WarningLogLevel = 2, Op.ErrorLogLevel = 4, Op.AllLogLevel = 7, Op.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Op._LogCache = "", Op._LogLimitOutputs = {}, Op._Levels =  … [truncated]
+       color: "white",
+       logFunc: console.log,
+       name: "Log"
+     }, {
+       color: "orange",
+       logFunc: console.warn,
+       name: "Warn"
+     }, {}, {
+       color: "red",
+       logFunc: console.error,
+       name: "Error"
+     }], Op.errorsCount = 0, Op.Log = Op._LogEnabled.bind(Op, Op.MessageLogLevel), Op.Warn = Op._LogEnabled.bind(Op, Op.WarningLogLevel), Op.Error = Op._LogEnabled.bind(Op, Op.ErrorLogLevel)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/246.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/246.js` (37 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768)

#### 1. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L4-L8` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/246.js#L4-L7) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/246.js#L4-L8)

```diff
-   40923: (CC, zC, ZC) => {
-     ZC.r(zC), ZC.d(zC, {
-       openMobLineupPreview: () => sC,
-       openMobPreview: () => rC,
-       openPetPreview: () => TC
+   38033: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => Ap,
+       f: () => Sp
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L10-L37` → after: `L9-L3406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L9-L3406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/246.js#L9-L3406) · [Before (L10-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/246.js#L10-L37)

```diff
-     var QC = ZC(39635),
-       wC = ZC(39902),
-       bC = ZC(40925),
-       nC = ZC(37138),
-       fC = ZC(36961),
-       oC = ZC(40076),
-       qC = ZC(40946),
-       FC = ZC(38300),
-       WC = ZC(37032),
-       NC = ZC(37014),
-       MC = ZC(36952),
-       gC = ZC(38206),
-       SC = ZC(38201),
-       pC = ZC(37934),
-       PC = ZC(37988),
-       GC = ZC(37959),
- ... (12 more removed lines; see GitHub link above)
+     var Op = cp(9359),
+       op = cp(9338),
+       Ip = cp(337);
+     const Sp = {
+       "Maple Door": {
+         positions: [{
+           block: "Maple Door",
+           x: 0,
+           y: 0,
+           z: 0
+         }, {
+           block: "_Maple Door Top",
+           x: 0,
+           y: 1,
+           z: 0
+         }]
+ ... (3382 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L39-L56` → after: `L3408-L3566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R3408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L3408-L3566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/246.js#L3408-L3566) · [Before (L39-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/246.js#L39-L56)

```diff
-     function dC() {
-       if (null !== hC) return hC;
-       const CC = document.createElement("canvas");
-       CC.classList.add("MobPreviewCanvas");
-       const zC = new QC.d(CC, !0, {
-         preserveDrawingBuffer: !0
-       });
-       zC.BZC = (0, AC.e)().Vg.engine.BZC;
-       const ZC = new wC.e(zC);
-       ZC.clearColor = new nC.e(0, 0, 0, 0), ZC.ambientColor = new nC.Color3(1, 1, 1);
-       const qC = new bC.d("cp", Math.PI / 2, Math.PI / 2, JC, fC.Eg.Zero(), ZC),
-         FC = new oC.e("light", new fC.Eg(-.1, 1, -.3), ZC);
-       return FC.diffuse = new nC.Color3(1, 1, 1), FC.specular = new nC.Color3(1, 1, 1), FC.groundColor = new nC.Color3(.5, .5, .5), hC = {
-         engine: zC,
-         sS: ZC,
-         canvas: CC,
- ... (2 more removed lines; see GitHub link above)
+     function xp(pp) {
+       return {
+         [`${pp} Banner`]: {
+           positions: [{
+             block: `${pp} Banner`,
+             x: 0,
+             y: 0,
+             z: 0
+           }, {
+             block: `_${pp} Banner Flag|meta|rot1|bot`,
+             x: 0,
+             y: 1,
+             z: 0
+           }]
+         },
+         [`${pp} Banner|meta|rot2|bot`]: {
+ ... (143 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L60-L62` → after: `L3570-L3664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R3570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L3570-L3664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/246.js#L3570-L3664) · [Before (L60-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/246.js#L60-L62)

```diff
-       return KC[CC] ??= (0, pC.t)(CC, dC().sS, !0).catch((zC => {
-         throw delete KC[CC], zC
-       })), KC[CC]
+       const ip = (0, Ip.Ob)(pp);
+       return {
+         [ip]: {
+           positions: [{
+             block: ip,
+             x: 0,
+             y: 0,
+             z: 0
+           }, {
+             block: `_${ip} Top Left`,
+             x: 0,
+             y: 1,
+             z: 0
+           }, {
+             block: `_${ip} Top Right`,
+             x: -1,
+ ... (79 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L66-L69` → after: `L3668-L3743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R3668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L3668-L3743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/246.js#L3668-L3743) · [Before (L66-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/246.js#L66-L69)

```diff
-       let zC = YC.get(CC);
-       return zC || (zC = RC.x[CC].loadModel(dC().sS, !1).then((CC => (CC.IK(!1), CC)), (zC => {
-         throw YC.delete(CC), zC
-       })), YC.set(CC, zC)), zC
+       const ip = `_${pp} Back`,
+         cp = `_${pp} Dish`;
+       return {
+         [pp]: {
+           positions: [{
+             block: pp,
+             x: 0,
+             y: 0,
+             z: 0
+           }, {
+             block: ip,
+             x: 0,
+             y: 0,
+             z: -1
+           }, {
+             block: cp,
+ ... (60 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L73-L121` → after: `L3747-L3766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R3747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L3747-L3766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/246.js#L3747-L3766) · [Before (L73-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/246.js#L73-L121)

```diff
-       var zC, ZC, QC;
-       let {
-         mobType: wC,
-         variation: bC,
-         animation: nC
-       } = CC, oC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, JC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-       const vC = null !== (zC = null === oC || void 0 === oC ? void 0 : oC.size) && void 0 !== zC ? zC : 1,
-         eC = null !== (ZC = null === oC || void 0 === oC ? void 0 : oC.cosmetics) && void 0 !== ZC ? ZC : [],
-         hC = null !== (QC = null === oC || void 0 === oC ? void 0 : oC.Hx) && void 0 !== QC ? QC : null;
-       let KC = !1,
-         YC = null,
-         EC = null;
-       const {
-         engine: lC,
-         sS: XC
-       } = dC(), cC = XC.onBeforeRenderObservable.add((() => {
- ... (33 more removed lines; see GitHub link above)
+       const ip = `Small ${pp} Pod`;
+       return {
+         [ip]: {
+           positions: [{
+             block: ip,
+             x: 0,
+             y: 0,
+             z: 0
+           }, {
+             block: `_Small ${pp} Pod Mid`,
+             x: 0,
+             y: 1,
+             z: 0
+           }, {
+             block: `_Small ${pp} Pod Top`,
+             x: 0,
+ ... (4 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L124-L130` → after: `L3769-L3772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R3769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L3769-L3772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/246.js#L3769-L3772) · [Before (L124-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/246.js#L124-L130)

```diff
- 
-     function lC(CC, zC) {
-       return EC({
-         mobType: "NPC",
-         variation: null,
-         animation: CC.animation
-       }, CC, zC)
+     for (const Pp in Sp) {
+       for (const pp of Sp[Pp].positions)
+         if (pp.id = op.e[pp.block].id, Pp === pp.block && (0 !== pp.x || 0 !== pp.y || 0 !== pp.z)) throw new Error(`Multiblock "${Pp}" has main block "${pp.block}" at non-origin position (${pp.x}, ${pp.y}, ${pp.z}) - if you need to do something like this, you'll need to rethink  … [truncated]
+       Sp[op.e[Pp].id] = Sp[Pp]
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L132-L147` → after: `L3774-L3782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R3774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L3774-L3782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/246.js#L3774-L3782) · [Before (L132-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/246.js#L132-L147)

```diff
- 
-     function XC(CC) {
-       let {
-         mobType: zC,
-         variation: ZC,
-         metaInfo: QC,
-         tamed: wC
-       } = CC, bC = !1, nC = null, fC = 0;
-       const oC = (0, AC.e)(),
-         qC = oC.Vg.nH,
-         FC = CC => {
-           fC += eC * (CC / 1e3) % (2 * Math.PI), qC.setRotationEulerY(nC, fC)
-         };
-       return mC(zC).then((CC => {
-         if (bC) return;
-         nC = (0, pC.l)(zC, vC, !0, !0), qC.setPosition(nC, 0, -vC, 0), CC.meshApi.updateVariation(nC, zC, ZC);
+     const Ap = {};
+     for (const Pp in Sp)
+       for (const {
+           block: pp,
+           x: ip,
+           y: cp,
+           z: Op
+         }
+         of Sp[Pp].positions) {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L149-L152` → after: `L3784-L3787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R3784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L3784-L3787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/246.js#L3784-L3787) · [Before (L149-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/246.js#L149-L152)

```diff
-           wool: "Sheared" !== QC,
-           saddle: "Saddled" === QC,
-           antlers: "Antlers" === QC,
-           collar: wC
+           mainMultiblock: Pp,
+           compX: ip,
+           compY: cp,
+           compZ: Op
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L154-L187` → after: `L3789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R3789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L3789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/246.js#L3789) · [Before (L154-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/246.js#L154-L187)

```diff
-         for (const [zC, ZC] of Object.entries(fC)) qC.hasGroup(nC, zC) && CC.meshApi.setMeshGroupVisibility(nC, zC, ZC);
-         qC.set(nC, "aOpacity", 1), oC.on("renderTickBegin", FC)
-       })).catch((CC => {
-         console.error(`Pet preview: could not load ${zC}`, CC)
-       })), () => {
-         bC = !0, oC.off("renderTickBegin", FC), null !== nC && qC.delete(nC)
-       }
-     }
-     class cC {
-       constructor(CC, zC) {
-         this.place = zC, this.remove = null;
-         const {
-           engine: ZC,
-           sS: QC,
-           canvas: wC
-         } = dC();
- ... (18 more removed lines; see GitHub link above)
+         Ap[pp] = Ip, Ap[op.e[pp].id] = Ip
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L192-L201` → after: `L3814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R3814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L3814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/246.js#L3814) · [Before (L192-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/246.js#L192-L201)

```diff
-         this.preview = void 0, this.view = {
-           figures: [],
-           shown: []
-         }, this.aspect = 1, this.placed = [], this.preview = new cC(CC, (() => () => {}))
-       }
-       show(CC) {
-         CC.figures !== this.view.figures && this.preload(CC.figures), this.view = CC, this.place()
-       }
-       resize(CC, zC) {
-         this.preview.resize(CC, zC), this.aspect = CC / zC, this.place()
+         this.model = pp, this.reshapeOffsets = [...Sp, [0, -1, 0]]
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L203-L206` → after: `L3816-L3818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R3816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L3816-L3818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/246.js#L3816-L3818) · [Before (L203-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/246.js#L203-L206)

```diff
-       close() {
-         this.preview.close();
-         for (const CC of this.placed) null === CC || void 0 === CC || CC.remove();
-         this.placed = []
+       handles(pp) {
+         const ip = Op.e[pp];
+         return (null === ip || void 0 === ip ? void 0 : ip.model) === this.model && void 0 !== ip.attachedTop
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L208-L214` → after: `L3820-L3821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R3820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L3820-L3821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/246.js#L3820-L3821) · [Before (L208-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/246.js#L208-L214)

```diff
-       preload(CC) {
-         const zC = () => {};
-         mC("NPC").catch(zC);
-         for (const {
-             Hx: ZC
-           }
-           of CC) null !== ZC && HC(ZC).catch(zC)
+       affects(pp) {
+         return this.handles(pp) || xp(pp) || (0, Ip.F)(Op.e[pp])
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L216-L233` → after: `L3823-L3835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R3823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L3823-L3835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/246.js#L3823-L3835) · [Before (L216-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/246.js#L216-L233)

```diff
-       place() {
-         const {
-           figures: CC,
-           shown: zC
-         } = this.view, ZC = CC.map(((ZC, QC) => {
-           var wC;
-           const bC = null !== (wC = this.placed[QC]) && void 0 !== wC ? wC : null;
-           if (!zC[QC]) return null === bC || void 0 === bC || bC.remove(), null;
-           const nC = (fC = (QC + .5) / CC.length, oC = this.aspect, (.5 - fC) * (2 * JC * Math.tan(dC().camera.fov / 2)) * oC);
-           var fC, oC;
-           return null !== bC && bC.figure === ZC && bC.x === nC ? bC : (null === bC || void 0 === bC || bC.remove(), {
-             figure: ZC,
-             x: nC,
-             remove: lC(ZC, nC)
-           })
-         }));
- ... (2 more removed lines; see GitHub link above)
+       shape(pp, ip, cp, Sp, Lp) {
+         let Yp = this.handles(pp(ip, cp + 1, Sp)) ? op.h : 0;
+         return op.s.forEach(((Lp, Dp) => {
+           let {
+             dx: Ap,
+             dz: Pp
+           } = Lp;
+           const Wp = pp(ip + Ap, cp, Sp + Pp);
+           (this.handles(Wp) || xp(Wp) || function(pp, ip) {
+             const cp = Op.e[pp];
+             return (0, Ip.F)(cp) && (0, Ip.x)(cp.meta.rot) === (0 !== op.s[ip].dx)
+           }(Wp, Dp)) && (Yp |= 1 << Dp)
+         })), (0, Op.f)((0, op.j)(Op.e[Lp].meta.rootName, Yp))
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L249-L272` → after: `L3839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R3839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L3839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/246.js#L3839) · [Before (L249-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/246.js#L249-L272)

```diff
-   38623: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       e: () => NC
-     });
-     var QC = ZC(37044),
-       wC = ZC(37059),
-       bC = ZC(37301),
-       nC = ZC(37061),
-       fC = ZC(37050);
- 
-     function oC(CC) {
-       return `\n\t\t\t\t${(0,fC.u)(CC,"mat2","rotate",[{name:"ang",type:"float"}],`\
-       n\ t\ t\ t\ t\ t$ {
-         (0, fC.w)(CC, "float", "s", "sin(ang)")
-       }\
-       n\ t\ t\ t\ t\ t$ {
- ... (8 more removed lines; see GitHub link above)
+   38218: (pp, ip, cp) => {
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L274-L320` → after: `L3841-L3851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R3841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L3841-L3851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/246.js#L3841-L3851) · [Before (L274-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/246.js#L274-L320)

```diff
-       let ZC = (0, fC.ob)(CC, "skele" + (zC - 1));
-       for (let wC = zC - 2; wC >= 0; wC--) ZC = (0, fC.fb)(CC, `boneIdx == ${wC}`, (0, fC.ob)(CC, `skele${wC}`), ZC);
-       const QC = "bone.yz + rotate(bone.x) * pivot - pivot";
-       return `\n\t\t\t\t${(0,fC.w)(CC,"int","boneIdx",(0,fC.jb)(CC,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,fC.w)(CC,"vec3","bone",ZC)}\n\t\t\t\t${(0,fC.w)(CC,"vec2","pivot",(0,fC.l)(CC,"vec2","0.0",`${(0,fC.wb)(CC,"position")}.z`))}\n\t\t\t\t${(0,fC.S)(CC)?`positi … [truncated]
-     }
- 
-     function FC(CC) {
-       return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,fC.l)(CC,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
-     }
-     const WC = {
-         x: 0,
-         y: 0,
-         z: 0,
-         azC(CC, zC) {
-           return this.x = CC[zC], this.y = CC[zC + 1], this.z = CC[zC + 2], this
-         }
- ... (31 more removed lines; see GitHub link above)
+       var cp;
+       ip || (ip = {});
+       const Op = null !== (cp = ip.customAttributes) && void 0 !== cp ? cp : {};
+       var op, Ip, Sp;
+       "Gun" === (null === pp || void 0 === pp ? void 0 : pp.type) && (Op.shotsLeft = null !== (op = null !== (Ip = Op.shotsLeft) && void 0 !== Ip ? Ip : null === (Sp = Op.gunStats) || void 0 === Sp ? void 0 : Sp.clipSize) && void 0 !== op ? op : pp.clipSize);
+       if (Op.enchantmentTier && (Op.enchantmentTier = Op.enchantmentTier.toString()), Op.enchantments)
+         for (const Ap in Op.enchantments) {
+           const pp = Op.enchantments[Ap];
+           if ("number" !== typeof pp) {
+             const ip = parseInt(pp);
+             isNaN(ip) || ip < 0 ? Op.enchantments[Ap] = void 0 : Op.enchantments[Ap] = ip > 1e9 ? 1e9 : ip
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L323-L363` → after: `L3854-L3860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R3854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L3854-L3860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/246.js#L3854-L3860) · [Before (L323-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/246.js#L323-L363)

```diff
-       };
-     (0, nC.o)(NC)
-   },
-   38517: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       b: () => FC,
-       c: () => WC
-     });
-     var QC = ZC(37044),
-       wC = ZC(37301),
-       bC = ZC(37050),
-       nC = ZC(37061);
-     const fC = "bloxdTextLodBias",
-       oC = [{
-         name: fC,
-         type: "float"
- ... (25 more removed lines; see GitHub link above)
+       if (Op.enchantmentData)
+         for (const Ap in Op.enchantmentData) {
+           const pp = Op.enchantmentData[Ap];
+           if (!pp) continue;
+           if ("object" !== typeof pp) {
+             Op.enchantmentData[Ap] = void 0;
+             continue
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L366-L406` → after: `L3868-L3872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R3868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L3868-L3872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/246.js#L3868-L3872) · [Before (L366-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/246.js#L366-L406)

```diff
-       };
-     (0, nC.o)(WC)
-   },
-   40956: (CC, zC, ZC) => {
-     ZC.r(zC), ZC.d(zC, {
-       CapeMaterialPlugin: () => AC,
-       HueTintMaterialPlugin: () => xC,
-       LifeformMaterialPlugin: () => JC,
-       OverlayMaterialPlugin: () => IC
-     });
-     var QC = ZC(40958),
-       wC = ZC(37849);
-     class bC extends((0, QC.g)(wC.e)) {}(0, QC.i)(wC.e, bC);
-     var nC = ZC(37040);
-     class fC extends((0, QC.g)(nC.f)) {}(0, QC.i)(nC.f, fC);
-     var oC = ZC(37677);
- ... (25 more removed lines; see GitHub link above)
+       return ip.customAttributes = Op, ip
+     }
+     cp.d(ip, {
+       e: () => Op
+     })
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L408` → after: `L3874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R3874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L3874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/246.js#L3874) · [Before (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/246.js#L408)

```diff
-   40958: (CC, zC, ZC) => {
+   38430: (pp, ip, cp) => {
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L411` → after: `L3878-L3879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R3878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L3878-L3879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/246.js#L3878-L3879) · [Before (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/246.js#L411)

```diff
-       g: () => GC,
+       d: () => Lp,
+       e: () => Ap,
```
