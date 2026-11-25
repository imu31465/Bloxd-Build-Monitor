# Changed — Bundle Modifications Report (Part 013 / 056)

- **Updated at**: `2026-11-26T01:33 JST`
- **Part**: `13 / 56` (**283** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 012](part-012.md) · [Part 014 →](part-014.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/262.js` (wp3j0a.a13381cf → fo1voe.f743fbcf · continued)

- **File**: `bundles/bloxd.io/chunks/js/262.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e)

#### 11. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L819-L856` → after: `L235-L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L235-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/262.js#L235-L241) · [Before (L819-L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/262.js#L819-L856)

```diff
-     }(zG = uG.prototype).addDeviceOrientation ?? (zG.addDeviceOrientation = (0, XG.h)("FreeCameraInputsManager", "addDeviceOrientation")), (EG = uG.prototype).addVirtualJoystick ?? (EG.addVirtualJoystick = (0, XG.h)("FreeCameraInputsManager", "addVirtualJoystick")), (oG = uG.prot … [truncated]
-     var iG = ZG(40280),
-       CG = ZG(37484);
-     let WG = (() => {
-         var GG;
-         let bG, ZG, kG, UG, VG = yG.e,
-           pG = [],
-           fG = [],
-           QG = [],
-           KG = [],
-           hG = [],
-           dG = [],
-           JG = [],
-           rG = [];
-         return GG = class extends VG {
-           get angularSensibility() {
- ... (22 more removed lines; see GitHub link above)
+       static set LogLevels(MM) {
+         OM.Log = OM._LogDisabled, OM.Warn = OM._LogDisabled, OM.Error = OM._LogDisabled;
+         const rM = [OM.MessageLogLevel, OM.WarningLogLevel, OM.ErrorLogLevel];
+         for (const iM of rM)
+           if ((MM & iM) === iM) {
+             const MM = this._Levels[iM];
+             OM[MM.name] = OM._LogEnabled.bind(OM, iM)
```

#### 12. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L858-L1033` → after: `L243-L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L243-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/262.js#L243-L257) · [Before (L858-L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/262.js#L858-L1033)

```diff
-           get keysDown() {
-             const GG = this.inputs.attached.keyboard;
-             return GG ? GG.keysDown : []
-           }
-           set keysDown(GG) {
-             const bG = this.inputs.attached.keyboard;
-             bG && (bG.keysDown = GG)
-           }
-           get keysDownward() {
-             const GG = this.inputs.attached.keyboard;
-             return GG ? GG.keysDownward : []
-           }
-           set keysDownward(GG) {
-             const bG = this.inputs.attached.keyboard;
-             bG && (bG.keysDownward = GG)
-           }
- ... (160 more removed lines; see GitHub link above)
+       }
+     }
+     OM.NoneLogLevel = 0, OM.MessageLogLevel = 1, OM.WarningLogLevel = 2, OM.ErrorLogLevel = 4, OM.AllLogLevel = 7, OM.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", OM._LogCache = "", OM._LogLimitOutputs = {}, OM._Levels =  … [truncated]
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
+     }], OM.errorsCount = 0, OM.Log = OM._LogEnabled.bind(OM, OM.MessageLogLevel), OM.Warn = OM._LogEnabled.bind(OM, OM.WarningLogLevel), OM.Error = OM._LogEnabled.bind(OM, OM.ErrorLogLevel)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/263.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/263.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2)

#### 1. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/263.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/263.js#L2)

```diff
- export const ids = [263];
+ export const ids = [262, 263];
```

#### 2. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L4` → after: `L4-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L4-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/263.js#L4-L16) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/263.js#L4)

```diff
-   40635: (GG, bG, ZG) => {
+   63896: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       RegisterShaderMaterial: () => OM.d,
+       ShaderMaterial: () => OM.n,
+       ShaderMaterialCreateFromSnippetAsync: () => OM.f,
+       ShaderMaterialParse: () => OM.m,
+       ShaderMaterialParseFromFileAsync: () => OM.g,
+       ShaderMaterialParseFromSnippetAsync: () => OM.j
+     });
+     var OM = iM(41556);
+     (0, OM.d)()
+   },
+   38740: (MM, rM, iM) => {
```

#### 3. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L6` → after: `L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/263.js#L18) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/263.js#L6)

```diff
-       c: () => fG
+       d: () => SM
```

#### 4. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L8-L476` → after: `L20-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L20-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/263.js#L20-L59) · [Before (L8-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/263.js#L8-L476)

```diff
-     var wG = ZG(40393),
-       SG = ZG(40398),
-       LG = ZG(37439),
-       yG = ZG(37621),
-       kG = ZG(40599),
-       UG = ZG(40508),
-       YG = ZG(37484),
-       VG = ZG(40573),
-       pG = ZG(40416);
-     let fG = (() => {
-       var GG, bG;
-       let ZG, fG, QG, KG, hG, dG, JG, rG, zG, EG, oG, XG, uG, iG = kG.e,
-         CG = [],
-         WG = [],
-         mG = [],
-         IG = [],
- ... (453 more removed lines; see GitHub link above)
+     var OM = iM(38744);
+     class SM {
+       static GetPlanes(MM) {
+         const rM = [];
+         for (let iM = 0; iM < 6; iM++) rM.push(new OM.d(0, 0, 0, 0));
+         return SM.GetPlanesToRef(MM, rM), rM
+       }
+       static GetNearPlaneToRef(MM, rM) {
+         const iM = MM.m;
+         rM.normal.x = iM[3] + iM[2], rM.normal.y = iM[7] + iM[6], rM.normal.z = iM[11] + iM[10], rM.d = iM[15] + iM[14], rM.normalize()
+       }
+       static GetFarPlaneToRef(MM, rM) {
+         const iM = MM.m;
+         rM.normal.x = iM[3] - iM[2], rM.normal.y = iM[7] - iM[6], rM.normal.z = iM[11] - iM[10], rM.d = iM[15] - iM[14], rM.normalize()
+       }
+       static GetLeftPlaneToRef(MM, rM) {
+ ... (24 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L478` → after: `L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/263.js#L61) · [Before (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/263.js#L478)

```diff
-   40599: (GG, bG, ZG) => {
+   38744: (MM, rM, iM) => {
```

#### 6. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L480` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/263.js#L63) · [Before (L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/263.js#L480)

```diff
-       e: () => pG
+       d: () => SM
```

#### 7. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L482-L488` → after: `L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/263.js#L65) · [Before (L482-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/263.js#L482-L488)

```diff
-     var wG = ZG(40393),
-       SG = ZG(37439),
-       LG = ZG(40398),
-       yG = ZG(37465),
-       kG = ZG(37463),
-       UG = ZG(40258),
-       YG = ZG(40416);
+     var OM = iM(38040);
```

#### 8. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L490-L491` → after: `L67-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L67-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/263.js#L67-L141) · [Before (L490-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/263.js#L490-L491)

```diff
-       constructor() {
-         this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new yG.c, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedO … [truncated]
+       constructor(MM, rM, iM, SM) {
+         this.normal = new OM.q(MM, rM, iM), this.d = SM
+       }
+       HOM() {
+         return [this.normal.x, this.normal.y, this.normal.z, this.d]
+       }
+       clone() {
+         return new SM(this.normal.x, this.normal.y, this.normal.z, this.d)
+       }
+       getClassName() {
+         return "Plane"
+       }
+       getHashCode() {
+         let MM = this.normal.getHashCode();
+         return MM = 397 * MM ^ this.d, MM
+       }
+ ... (59 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L494-L738` → after: `L144-L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L144-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/263.js#L144-L157) · [Before (L494-L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/263.js#L494-L738)

```diff
-     let pG = (() => {
-       var GG;
-       let bG, ZG, pG, fG, QG, KG = [],
-         hG = [],
-         dG = [],
-         JG = [],
-         rG = [],
-         zG = [],
-         EG = [],
-         oG = [],
-         XG = [],
-         uG = [];
-       return GG = class {
-         static AddNodeConstructor(GG, bG) {
-           this._NodeConstructors[GG] = bG
-         }
- ... (229 more removed lines; see GitHub link above)
+     SM._TmpMatrix = OM.d.Identity()
+   },
+   39705: (MM, rM, iM) => {
+     iM.d(rM, {
+       b: () => jM
+     });
+     var OM = iM(39711);
+     const SM = (MM, rM, iM) => MM ? MM.getClassName && "Mesh" === MM.getClassName() ? null : !MM.getClassName || "SubMesh" !== MM.getClassName() && "PhysicsBody" !== MM.getClassName() ? MM.clone ? MM.clone() : Array.isArray(MM) ? MM.slice() : iM && "object" === typeof MM ? {
+       ...MM
+     } : null : MM.clone(rM) : null;
+     class jM {
+       static DeepCopy(MM, rM, iM, jM) {
+         let aM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         const PM = function(MM) {
```

#### 10. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L740-L741` → after: `L159-L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L159-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/263.js#L159-L162) · [Before (L740-L741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/263.js#L740-L741)

```diff
-           let bG;
-           for (bG in this._ranges) GG.push(this._ranges[bG]);
+           do {
+             const iM = Object.getOwnPropertyNames(MM);
+             for (const MM of iM) - 1 === rM.indexOf(MM) && rM.push(MM)
+           } while (MM = Object.getPrototypeOf(MM));
```

#### 11. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L743-L754` → after: `L164-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L164-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/263.js#L164-L183) · [Before (L743-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/263.js#L743-L754)

```diff
-         }
-         beginAnimation(GG, bG, ZG, wG) {
-           const SG = this.getAnimationRange(GG);
-           return SG ? this._scene.beginAnimation(this, SG.from, SG.to, bG, ZG, wG) : null
-         }
-         serializeAnimationRanges() {
-           const GG = [];
-           for (const bG in this._ranges) {
-             const ZG = this._ranges[bG];
-             if (!ZG) continue;
-             const wG = {};
-             wG.name = bG, wG.from = ZG.from, wG.to = ZG.to, GG.push(wG)
+         }(MM);
+         for (const QM of PM) {
+           if ("_" === QM[0] && (!jM || -1 === jM.indexOf(QM))) continue;
+           if (QM.endsWith("Observable")) continue;
+           if (iM && -1 !== iM.indexOf(QM)) continue;
+           const PM = MM[QM],
+             zM = typeof PM;
+           if ("function" !== zM) try {
+             if ("object" === zM)
+               if (PM instanceof Uint8Array) rM[QM] = Uint8Array.from(PM);
+               else if (PM instanceof Array) {
+               if (rM[QM] = [], PM.length > 0)
+                 if ("object" == typeof PM[0])
+                   for (let MM = 0; MM < PM.length; MM++) {
+                     const iM = SM(PM[MM], rM, aM); - 1 === rM[QM].indexOf(iM) && rM[QM].push(iM)
+                   } else rM[QM] = PM.slice(0)
+ ... (4 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L761-L801` → after: `L186-L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L186-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/263.js#L186-L253) · [Before (L761-L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/263.js#L761-L801)

```diff
-         dispose(GG) {
-           let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-           if (this._nodeDataStorage._isDisposed = !0, !GG) {
-             const ZG = this.getDescendants(!0);
-             for (const wG of ZG) wG.dispose(GG, bG)
-           }
-           this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.Gl.notifyObservers(this), this.Gl.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
-           for (const ZG of this._behaviors) ZG.detach();
-           this._behaviors.length = 0, this.metadata = null
-         }
-         static ParseAnimationRanges(GG, bG, ZG) {
-           if (bG.Bh)
-             for (let wG = 0; wG < bG.Bh.length; wG++) {
-               const ZG = bG.Bh[wG];
-               GG.createAnimationRange(ZG.name, ZG.from, ZG.to)
-             }
- ... (25 more removed lines; see GitHub link above)
+       }
+     }
+   },
+   38885: (MM, rM, iM) => {
+     function OM() {
+       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (MM => {
+         const rM = 16 * Math.random() | 0;
+         return ("x" === MM ? rM : 3 & rM | 8).toString(16)
+       }))
+     }
+     iM.d(rM, {
+       d: () => OM
+     })
+   },
+   39711: (MM, rM, iM) => {
+     iM.d(rM, {
+ ... (52 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L803-L880` → after: `L255-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L255-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/263.js#L255-L269) · [Before (L803-L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/263.js#L803-L880)

```diff
-         }
-       }, (() => {
-         const SG = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         bG = [(0, LG.Q)()], ZG = [(0, LG.Q)()], pG = [(0, LG.Q)()], fG = [(0, LG.Q)()], QG = [(0, LG.Q)()], (0, wG.k)(null, null, bG, {
-           kind: "field",
-           name: "name",
-           static: !1,
-           private: !1,
-           access: {
-             has: GG => "name" in GG,
-             get: GG => GG.name,
-             set: (GG, bG) => {
-               GG.name = bG
-             }
-           },
-           metadata: SG
- ... (62 more removed lines; see GitHub link above)
+       }
+     }
+     OM.NoneLogLevel = 0, OM.MessageLogLevel = 1, OM.WarningLogLevel = 2, OM.ErrorLogLevel = 4, OM.AllLogLevel = 7, OM.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", OM._LogCache = "", OM._LogLimitOutputs = {}, OM._Levels =  … [truncated]
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
+     }], OM.errorsCount = 0, OM.Log = OM._LogEnabled.bind(OM, OM.MessageLogLevel), OM.Warn = OM._LogEnabled.bind(OM, OM.WarningLogLevel), OM.Error = OM._LogEnabled.bind(OM, OM.ErrorLogLevel)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/264.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/264.js` (54 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6)

#### 1. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/264.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/264.js#L4)

```diff
-   41476: (GG, bG, ZG) => {
+   38784: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/264.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/264.js#L6)

```diff
-       d: () => qG
+       e: () => LM,
+       g: () => aM
```

#### 3. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L8-L969` → after: `L9-L3138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L9-L3138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/264.js#L9-L3138) · [Before (L8-L969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/264.js#L8-L969)

```diff
-     var wG = ZG(40393),
-       SG = ZG(40398),
-       LG = ZG(37465),
-       yG = ZG(37439),
-       kG = ZG(37471),
-       UG = ZG(40599),
-       YG = ZG(40784),
-       VG = ZG(40550),
-       pG = ZG(40285),
-       fG = ZG(37443);
-     class QG {
-       constructor() {
-         this._zoomStopsAnimation = !1, this._idleRotationSpeed = .05, this._idleRotationWaitTime = 2e3, this._idleRotationSpinupTime = 2e3, this.targetAlpha = null, this._attachedCamera = null, this._isPointerDown = !1, this._lastFrameTime = null, this._lastInteractionTime = -1 / … [truncated]
-       }
-       get name() {
-         return "AutoRotation"
- ... (946 more removed lines; see GitHub link above)
+     var OM = iM(9839),
+       SM = iM(9816),
+       jM = iM(332);
+     const aM = {
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
+ ... (3114 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L971-L982` → after: `L3140-L3166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R3140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L3140-L3166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/264.js#L3140-L3166) · [Before (L971-L982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/264.js#L971-L982)

```diff
-           metadata: yG
-         }, cG, lG), (0, wG.k)(null, null, fG, {
-           kind: "field",
-           name: "zoomingSensibility",
-           static: !1,
-           private: !1,
-           access: {
-             has: GG => "zoomingSensibility" in GG,
-             get: GG => GG.zoomingSensibility,
-             set: (GG, bG) => {
-               GG.zoomingSensibility = bG
-             }
+           [`${MM}|meta|rot2`]: {
+             positions: [{
+               block: `${MM}|meta|rot2`,
+               x: 0,
+               y: 0,
+               z: 0
+             }, {
+               block: "_Lunite Auto Miner Body|meta|rot2",
+               x: -1,
+               y: 1,
+               z: 0
+             }, {
+               block: "_Lunite Auto Miner Drill Front|meta|rot2",
+               x: -2,
+               y: 1,
+               z: 0
+ ... (11 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L984-L995` → after: `L3168-L3194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R3168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L3168-L3194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/264.js#L3168-L3194) · [Before (L984-L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/264.js#L984-L995)

```diff
-           metadata: yG
-         }, jG, PG), (0, wG.k)(null, null, QG, {
-           kind: "field",
-           name: "angularSpeed",
-           static: !1,
-           private: !1,
-           access: {
-             has: GG => "angularSpeed" in GG,
-             get: GG => GG.angularSpeed,
-             set: (GG, bG) => {
-               GG.angularSpeed = bG
-             }
+           [`${MM}|meta|rot3`]: {
+             positions: [{
+               block: `${MM}|meta|rot3`,
+               x: 0,
+               y: 0,
+               z: 0
+             }, {
+               block: "_Lunite Auto Miner Body|meta|rot3",
+               x: 0,
+               y: 1,
+               z: 1
+             }, {
+               block: "_Lunite Auto Miner Drill Front|meta|rot3",
+               x: 0,
+               y: 1,
+               z: 2
+ ... (11 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L997-L1024` → after: `L3196-L3223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R3196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L3196-L3223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/264.js#L3196-L3223) · [Before (L997-L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/264.js#L997-L1024)

```diff
-           metadata: yG
-         }, MG, AG), yG && Object.defineProperty(GG, Symbol.metadata, {
-           enumerable: !0,
-           configurable: !0,
-           writable: !0,
-           value: yG
-         })
-       })(), GG
-     })();
-     EG.d.ArcRotateCameraKeyboardMoveInput = WG;
-     var mG = ZG(38175),
-       IG = ZG(40560);
-     let FG = (() => {
-       var GG;
-       let bG, ZG, LG, UG = [],
-         YG = [],
- ... (12 more removed lines; see GitHub link above)
+           [`${MM}|meta|rot4`]: {
+             positions: [{
+               block: `${MM}|meta|rot4`,
+               x: 0,
+               y: 0,
+               z: 0
+             }, {
+               block: "_Lunite Auto Miner Body|meta|rot4",
+               x: 1,
+               y: 1,
+               z: 0
+             }, {
+               block: "_Lunite Auto Miner Drill Front|meta|rot4",
+               x: 2,
+               y: 1,
+               z: 0
+ ... (12 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1026-L1040` → after: `L3225-L3258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R3225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L3225-L3258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/264.js#L3225-L3258) · [Before (L1026-L1040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/264.js#L1026-L1040)

```diff
-         attachControl(GG) {
-           GG = oG.f.BackCompatCameraNoPreventDefault(arguments), this._wheel = bG => {
-             if (bG.type !== VG.b.POINTERWHEEL) return;
-             const ZG = bG.event;
-             let wG;
-             const SG = ZG.deltaMode === IG.d.DOM_DELTA_LINE ? 40 : 1,
-               LG = -ZG.deltaY * SG;
-             if (this.customComputeDeltaFromMouseWheel) wG = this.customComputeDeltaFromMouseWheel(LG, this, ZG);
-             else if (this.wheelDeltaPercentage) {
-               if (wG = this._computeDeltaFromMouseWheelLegacyEvent(LG, this.camera.radius), wG > 0) {
-                 const GG = this.zoomToMouseLocation ? this._zoomToMouseRadiusOffset : this.camera.inertialRadiusOffset;
-                 let bG = this.camera.radius,
-                   ZG = GG + wG;
-                 for (let wG = 0; wG < 20 && !(bG <= ZG) && !(Math.abs(ZG * this.camera.inertia) < .001); wG++) bG -= ZG, ZG *= this.camera.inertia;
-                 bG = (0, kG.Clamp)(bG, 0, Number.MAX_VALUE), wG = this._computeDeltaFromMouseWheelLegacyEvent(LG, bG)
+       }(),
+       ... function() {
+         const MM = {
+             1: MM => ({
+               x: 0,
+               z: MM
+             }),
+             2: MM => ({
+               x: MM,
+               z: 0
+             }),
+             3: MM => ({
+               x: 0,
+               z: -MM
+             }),
+             4: MM => ({
+ ... (18 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1042-L1050` → after: `L3260-L3261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R3260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L3260-L3261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/264.js#L3260-L3261) · [Before (L1042-L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/264.js#L1042-L1050)

```diff
-             } else {
-               const GG = this.camera.movement.input.getEntry("wheel", "zoom");
-               wG = LG * (GG?.sensitivity ?? 1 / (40 * this.wheelPrecision))
-             }
-             wG && (this.zoomToMouseLocation ? (this._hitPlane || this._updateHitPlane(), this._zoomToMouse(wG)) : this.camera.movement.zoomAccumulatedPixels += wG), ZG.preventDefault && (GG || ZG.preventDefault())
-           }, this._observer = this.camera.Dv()._inputManager._addCameraPointerObserver(this._wheel, VG.b.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.N7(0)
-         }
-         detachControl() {
-           this._observer && (this.camera.Dv()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
+             }))
+           }
```

#### 9. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1052-L1058` → after: `L3263-L3291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R3263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L3263-L3291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/264.js#L3263-L3291) · [Before (L1052-L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/264.js#L1052-L1058)

```diff
-         checkInputs() {
-           if (!this.zoomToMouseLocation) return;
-           const GG = this.camera;
-           if (Math.abs(this._zoomToMouseRadiusOffset) + this._inertialPanning.lengthSquared() + Math.abs(GG.inertialAlphaOffset) + Math.abs(GG.inertialBetaOffset) + Math.abs(GG.inertialRadiusOffset)) {
-             this._updateHitPlane(), GG.target.addInPlace(this._inertialPanning), GG.radius -= this._zoomToMouseRadiusOffset;
-             const bG = GG.movement.getFrameIndependentDecay(GG.inertia);
-             this._inertialPanning.scaleInPlace(bG), this._zoomToMouseRadiusOffset *= bG, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < fG.d && (this._zoomToMouseRadiusOffset = 0)
+         return rM
+       }(),
+       ... function() {
+         const MM = {};
+         for (let rM = 1; rM <= OM.s; rM++) {
+           const iM = (0, OM.fc)(rM),
+             SM = OM.v[rM - 1],
+             jM = [{
+               block: iM,
+               x: 0,
+               y: 0,
+               z: 0
+             }];
+           for (const MM of OM.k)
+             for (let rM = 1; rM <= SM; rM++) {
+               if ("southwest" === MM && 1 === rM) continue;
+ ... (13 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1061-L1062` → after: `L3294-L3662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R3294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L3294-L3662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/264.js#L3294-L3662) · [Before (L1061-L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/264.js#L1061-L1062)

```diff
-         getClassName() {
-           return "ArcRotateCameraMouseWheelInput"
+         return MM
+       }(),
+       "Solar Panel": {
+         positions: [{
+           block: "Solar Panel",
+           x: 0,
+           y: 0,
+           z: 0
+         }, {
+           block: "_Solar Panel SE",
+           x: 1,
+           y: 0,
+           z: 0
+         }, {
+           block: "_Solar Panel NW",
+           x: 0,
+ ... (353 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1064-L1065` → after: `L3664-L3741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R3664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L3664-L3741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/264.js#L3664-L3741) · [Before (L1064-L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/264.js#L1064-L1065)

```diff
-         getSimpleName() {
-           return "mousewheel"
+       }
+     }
+ 
+     function QM(MM) {
+       const rM = `_${MM} Back`,
+         iM = `_${MM} Dish`;
+       return {
+         [MM]: {
+           positions: [{
+             block: MM,
+             x: 0,
+             y: 0,
+             z: 0
+           }, {
+             block: rM,
+             x: 0,
+ ... (62 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1067-L1070` → after: `L3743-L3765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R3743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L3743-L3765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/264.js#L3743-L3765) · [Before (L1067-L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/264.js#L1067-L1070)

```diff
-         _updateHitPlane() {
-           const GG = this.camera,
-             bG = GG.target.subtract(GG.position);
-           this._hitPlane = mG.b.FromPositionAndNormal(GG.target, bG)
+       }
+     }
+ 
+     function zM(MM) {
+       const rM = `Small ${MM} Pod`;
+       return {
+         [rM]: {
+           positions: [{
+             block: rM,
+             x: 0,
+             y: 0,
+             z: 0
+           }, {
+             block: `_Small ${MM} Pod Mid`,
+             x: 0,
+             y: 1,
+ ... (7 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1072-L1078` → after: `L3767-L3780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R3767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L3767-L3780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/264.js#L3767-L3780) · [Before (L1072-L1078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/264.js#L1072-L1078)

```diff
-         _getPosition() {
-           const GG = this.camera,
-             bG = GG.Dv(),
-             ZG = bG.createPickingRay(bG.pointerX, bG.pointerY, yG.e.Identity(), GG, !1);
-           0 === GG.targetScreenOffset.x && 0 === GG.targetScreenOffset.y || (this._viewOffset.set(GG.targetScreenOffset.x, GG.targetScreenOffset.y, 0), GG.getViewMatrix().invertToRef(GG._cameraTransformMatrix), this._globalOffset = yG.p.TransformNormal(this._viewOffset, GG._camer … [truncated]
-           let wG = 0;
-           return this._hitPlane && (wG = ZG.intersectsPlane(this._hitPlane) ?? 0), ZG.origin.addInPlace(ZG.direction.scaleInPlace(wG))
+       }
+     }
+     for (const mM in aM) {
+       for (const MM of aM[mM].positions)
+         if (MM.id = SM.k[MM.block].id, mM === MM.block && (0 !== MM.x || 0 !== MM.y || 0 !== MM.z)) throw new Error(`Multiblock "${mM}" has main block "${MM.block}" at non-origin position (${MM.x}, ${MM.y}, ${MM.z}) - if you need to do something like this, you'll need to rethink  … [truncated]
+       aM[SM.k[mM].id] = aM[mM]
+     }
+     const LM = {};
+     for (const mM in aM)
+       for (const {
+           block: MM,
+           x: rM,
+           y: iM,
+           z: OM
```

#### 14. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1080-L1086` → after: `L3782-L3851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R3782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L3782-L3851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/264.js#L3782-L3851) · [Before (L1080-L1086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/264.js#L1080-L1086)

```diff
-         _zoomToMouse(GG) {
-           const bG = this.camera,
-             ZG = 1 - bG.inertia,
-             wG = bG.movement.getFrameIndependentInputScale(bG.inertia);
-           if (bG.lowerRadiusLimit) {
-             const SG = bG.lowerRadiusLimit ?? 0;
-             bG.radius - (this._zoomToMouseRadiusOffset + GG * wG) / ZG < SG && (GG = ((bG.radius - SG) * ZG - this._zoomToMouseRadiusOffset) / wG)
+         of aM[mM].positions) {
+         const jM = {
+           mainMultiblock: mM,
+           compX: rM,
+           compY: iM,
+           compZ: OM
+         };
+         LM[MM] = jM, LM[SM.k[MM].id] = jM
+       }
+   },
+   39224: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => nM,
+       h: () => PM
+     });
+     var OM = iM(9816),
+ ... (54 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1088-L1090` → after: `L3853-L3860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R3853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L3853-L3860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/264.js#L3853-L3860) · [Before (L1088-L1090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/264.js#L1088-L1090)

```diff
-           if (bG.upperRadiusLimit) {
-             const SG = bG.upperRadiusLimit ?? 0;
-             bG.radius - (this._zoomToMouseRadiusOffset + GG * wG) / ZG > SG && (GG = ((bG.radius - SG) * ZG - this._zoomToMouseRadiusOffset) / wG)
+         }
+       if (OM.enchantmentData)
+         for (const LM in OM.enchantmentData) {
+           const MM = OM.enchantmentData[LM];
+           if (!MM) continue;
+           if ("object" !== typeof MM) {
+             OM.enchantmentData[LM] = void 0;
+             continue
```

#### 16. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1092-L1095` → after: `L3862-L3984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R3862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L3862-L3984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/264.js#L3862-L3984) · [Before (L1092-L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/264.js#L1092-L1095)

```diff
-           const SG = GG / ZG / bG.radius,
-             LG = this._getPosition(),
-             kG = yG.j.mK[6];
-           LG.subtractToRef(bG.target, kG), kG.scaleInPlace(SG), kG.scaleInPlace(ZG), kG.scaleInPlace(wG), this._inertialPanning.addInPlace(kG), this._zoomToMouseRadiusOffset += GG * wG
+           const rM = MM.icon,
+             iM = MM.description;
+           var PM, nM, QM, zM;
+           if ("string" !== typeof rM) OM.enchantmentData[LM].icon = null !== (PM = null === rM || void 0 === rM || null === (nM = rM.toString) || void 0 === nM ? void 0 : nM.call(rM)) && void 0 !== PM ? PM : void 0;
+           if ("string" !== typeof iM) OM.enchantmentData[LM].description = null !== (QM = null === iM || void 0 === iM || null === (zM = iM.toString) || void 0 === zM ? void 0 : zM.call(iM)) && void 0 !== QM ? QM : void 0
+         }
+       return rM.customAttributes = OM, rM
+     }
+     iM.d(rM, {
+       b: () => OM
+     })
+   },
+   39218: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => eM,
+       f: () => yM,
+ ... (107 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1097-L1098` → after: `L3986-L3988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R3986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L3986-L3988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/264.js#L3986-L3988) · [Before (L1097-L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/264.js#L1097-L1098)

```diff
-         _zeroIfClose(GG) {
-           Math.abs(GG.x) < fG.d && (GG.x = 0), Math.abs(GG.y) < fG.d && (GG.y = 0), Math.abs(GG.z) < fG.d && (GG.z = 0)
+         for (let rM = 0; rM < 4 && zM.length < LM; rM++) {
+           const OM = UM(MM, iM, rM, PM, QM);
+           OM && !mM.has(OM.join()) && (mM.add(OM.join()), zM.push(OM))
```

#### 18. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1155-L1156` → after: `L3991-L3995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R3991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L3991-L3995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/264.js#L3991-L3995) · [Before (L1155-L1156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/264.js#L1155-L1156)

```diff
-       addMouseWheel() {
-         return this.add(new FG), this
+       return hM ??= GM(MM, HM[0], HM[1], HM[2]), {
+         cells: zM,
+         topLeft: HM,
+         rect: hM,
+         textCell: CM(hM, rM)
```

#### 19. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1158-L1159` → after: `L3997-L4011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R3997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L3997-L4011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/264.js#L3997-L4011) · [Before (L1158-L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/264.js#L1158-L1159)

```diff
-       addPointers() {
-         return this.add(new iG), this
+     }
+ 
+     function bM(MM, rM, iM, aM, PM) {
+       if (null !== iM && nM(iM)) {
+         const {
+           rootName: MM,
+           rot: rM
+         } = OM.k[iM].meta;
+         if (SM.C[rM].some((MM => {
+             let [rM, iM, OM] = MM;
+             return rM === aM[0] && iM === aM[1] && OM === aM[2]
+           }))) return {
+           root: MM,
+           rot: rM
+         }
```

#### 20. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1161-L1162` → after: `L4013-L4016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R4013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L4013-L4016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/264.js#L4013-L4016) · [Before (L1161-L1162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/264.js#L1161-L1162)

```diff
-       addKeyboard() {
-         return this.add(new WG), this
+       const [QM, zM] = SM.p[PM], LM = MM(rM[0] - QM, rM[1], rM[2] - zM);
+       return {
+         root: (0, jM.h)(LM) ? SM.I : SM.G,
+         rot: PM
```

#### 21. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1164-L1172` → after: `L4018-L4062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R4018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L4018-L4062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/264.js#L4018-L4062) · [Before (L1164-L1172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/264.js#L1164-L1172)

```diff
-     }(vG = lG.prototype).addVRDeviceOrientation ?? (vG.addVRDeviceOrientation = (0, cG.h)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (aG = lG.prototype).addGamepad ?? (aG.addGamepad = (0, cG.h)("ArcRotateCameraInputsManager", "addGamepad"));
-     var jG = ZG(37484),
-       PG = ZG(40610),
-       MG = ZG(40617);
-     class AG extends PG.b {
-       constructor(GG, bG, ZG) {
-         super(GG, bG, ZG), this.input = new MG.e({
-           pan: (GG, bG) => {
-             this.panAccumulatedPixels.x += GG, this.panAccumulatedPixels.y += bG
+     }
+   },
+   39210: (MM, rM, iM) => {
+     iM.d(rM, {
+       B: () => tM,
+       C: () => mM,
+       e: () => yM,
+       f: () => UM,
+       i: () => eM,
+       m: () => bM,
+       q: () => hM,
+       s: () => LM,
+       w: () => HM,
+       x: () => wM
+     });
+     var OM = iM(6944),
+ ... (29 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1174-L1175` → after: `L4064-L4072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R4064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L4064-L4072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/264.js#L4064-L4072) · [Before (L1174-L1175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/264.js#L1174-L1175)

```diff
-           rotate: (GG, bG) => {
-             this.rotationAccumulatedPixels.x += GG, this.rotationAccumulatedPixels.y += bG
+           validBlockIds: [aM, PM],
+           meshSize: 1.2,
+           placeSound: "splash1"
+         },
+         "Obsidian Boat": {
+           meshItemName: "INTERNAL_MESH_Obsidian Boat",
+           physicsState: {
+             type: OM.n.BOAT,
+             tier: OM.d.OBSIDIAN
```

#### 23. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1177-L1187` → after: `L4074-L4082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R4074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L4074-L4082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/264.js#L4074-L4082) · [Before (L1177-L1187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/264.js#L1177-L1187)

```diff
-           zoom: GG => {
-             this.zoomAccumulatedPixels += GG
-           }
-         }, (() => this._createDefaultInputMap()))
-       }
-       _createDefaultInputMap() {
-         return [{
-           source: "pointer",
-           button: 0,
-           modifiers: {
-             ctrl: !0
+           validBlockIds: [aM, PM],
+           meshSize: 1.2,
+           placeSound: "splash1"
+         },
+         Speedboat: {
+           meshItemName: "INTERNAL_MESH_Speedboat",
+           physicsState: {
+             type: OM.n.BOAT,
+             tier: OM.d.SPEED
```

#### 24. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1189-L1208` → after: `L4084-L4092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R4084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L4084-L4092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/264.js#L4084-L4092) · [Before (L1189-L1208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/264.js#L1189-L1208)

```diff
-           interaction: "pan"
-         }, {
-           source: "pointer",
-           button: 0,
-           interaction: "rotate"
-         }, {
-           source: "pointer",
-           button: 2,
-           interaction: "pan"
-         }, {
-           source: "wheel",
-           interaction: "zoom"
-         }, {
-           source: "keyboard",
-           key: [187, 107, 189, 109],
-           interaction: "zoom"
- ... (4 more removed lines; see GitHub link above)
+           validBlockIds: [aM],
+           meshSize: 1.2,
+           placeSound: "splash1"
+         },
+         Hovercraft: {
+           meshItemName: "INTERNAL_MESH_Hovercraft",
+           physicsState: {
+             type: OM.n.HOVERCRAFT,
+             tier: null
```

#### 25. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1210-L1214` → after: `L4094-L4166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R4094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L4094-L4166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/264.js#L4094-L4166) · [Before (L1210-L1214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/264.js#L1210-L1214)

```diff
-           interaction: "pan"
-         }, {
-           source: "keyboard",
-           modifiers: {
-             alt: !0
+           validBlockIds: "solidBlocksOrFluid",
+           meshSize: 4,
+           placeSound: null
+         },
+         "Yellow Kart": {
+           ...QM,
+           meshItemName: "INTERNAL_MESH_Yellow Kart"
+         },
+         "White Kart": {
+           ...QM,
+           meshItemName: "INTERNAL_MESH_White Kart"
+         },
+         "Red Kart": {
+           ...QM,
+           meshItemName: "INTERNAL_MESH_Red Kart"
+         },
+ ... (57 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1216-L1333` → after: `L4168-L4184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R4168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L4168-L4184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/264.js#L4168-L4184) · [Before (L1216-L1333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/264.js#L1216-L1333)

```diff
-           interaction: "zoom"
-         }, {
-           source: "keyboard",
-           interaction: "rotate"
-         }]
-       }
-     }
- 
-     function sG(GG, bG) {
-       return isNaN(GG) ? bG : GG
-     }
-     let qG = (() => {
-         var GG;
-         let bG, ZG, UG, VG, pG, KG, hG, EG, XG, uG, iG, CG, WG, mG, IG, FG, vG, aG, cG, jG, PG, MG, qG, nG, gG, eG, RG, TG, HG = zG.e,
-           tG = [],
-           DG = [],
- ... (102 more removed lines; see GitHub link above)
+           validBlockIds: "solidBlocks",
+           meshSize: 4,
+           placeSound: null,
+           seats: [{
+             role: "driver",
+             localOffset: [0, .25, -.2]
+           }, {
+             role: "passenger",
+             localOffset: [0, .25, -1.2]
+           }]
+         },
+         "Gold Mining Drill": {
+           ...zM,
+           meshItemName: "INTERNAL_MESH_Gold Mining Drill",
+           physicsState: {
+             type: OM.n.CAR,
+ ... (1 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1335-L1336` → after: `L4186-L4192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R4186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L4186-L4192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/264.js#L4186-L4192) · [Before (L1335-L1336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/264.js#L1335-L1336)

```diff
-           get panningInertia() {
-             return this._panningInertia
+         },
+         "Iron Mining Drill": {
+           ...zM,
+           meshItemName: "INTERNAL_MESH_Iron Mining Drill",
+           physicsState: {
+             type: OM.n.CAR,
+             tier: OM.e.IRON_MINING_DRILL
```

#### 28. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1338-L1339` → after: `L4194-L4200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R4194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L4194-L4200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/264.js#L4194-L4200) · [Before (L1338-L1339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/264.js#L1338-L1339)

```diff
-           set panningInertia(GG) {
-             this._panningInertia = GG, this.movement && (this.movement.panInertia = GG)
+         },
+         "Diamond Mining Drill": {
+           ...zM,
+           meshItemName: "INTERNAL_MESH_Diamond Mining Drill",
+           physicsState: {
+             type: OM.n.CAR,
+             tier: OM.e.DIAMOND_MINING_DRILL
```

#### 29. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1341-L1342` → after: `L4202-L4208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R4202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L4202-L4208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/264.js#L4202-L4208) · [Before (L1341-L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/264.js#L1341-L1342)

```diff
-           get inertia() {
-             return this._inertia
+         },
+         "Moonstone Mining Drill": {
+           ...zM,
+           meshItemName: "INTERNAL_MESH_Moonstone Mining Drill",
+           physicsState: {
+             type: OM.n.CAR,
+             tier: OM.e.MOONSTONE_MINING_DRILL
```

#### 30. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1344-L1561` → after: `L4210-L4267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R4210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L4210-L4267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/264.js#L4210-L4267) · [Before (L1344-L1561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/264.js#L1344-L1561)

```diff
-           set inertia(GG) {
-             this._inertia = GG, this.movement && (this.movement.rotationInertia = GG, this.movement.zoomInertia = GG)
-           }
-           get angularSensibilityX() {
-             const GG = this.inputs.attached.pointers;
-             return GG ? GG.angularSensibilityX : 0
-           }
-           set angularSensibilityX(GG) {
-             const bG = this.inputs.attached.pointers;
-             bG && (bG.angularSensibilityX = GG)
-           }
-           get angularSensibilityY() {
-             const GG = this.inputs.attached.pointers;
-             return GG ? GG.angularSensibilityY : 0
-           }
-           set angularSensibilityY(GG) {
- ... (202 more removed lines; see GitHub link above)
+         },
+         "Armored Car": {
+           meshItemName: "INTERNAL_MESH_Armored Car",
+           physicsState: {
+             type: OM.n.CAR,
+             tier: OM.e.ARMORED_CAR
+           },
+           validBlockIds: "solidBlocks",
+           meshSize: 4,
+           placeSound: null,
+           seats: [{
+             role: "driver",
+             localOffset: [0, .25, -.2]
+           }, {
+             role: "passenger",
+             localOffset: [0, .25, -1.2]
+ ... (42 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1563-L1570` → after: `L4269-L4274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R4269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L4269-L4274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/264.js#L4269-L4274) · [Before (L1563-L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/264.js#L1563-L1570)

```diff
-           interpolateTo() {
-             let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.alpha,
-               bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.beta,
-               ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.radius,
-               wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.target,
-               SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.targetScreenOffset,
-               LG = arguments.length > 5 ? arguments[5] : void 0;
-             this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != LG ? this._currentInterpolationFactor = LG : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolation … [truncated]
+         },
+         "White Balloon": {
+           ...JM,
+           physicsState: {
+             type: OM.n.BALLOON,
+             tier: OM.b.WHITE
```

#### 32. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1572-L1573` → after: `L4276-L4281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R4276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L4276-L4281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/264.js#L4276-L4281) · [Before (L1572-L1573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/264.js#L1572-L1573)

```diff
-           _isSynchronizedViewMatrix() {
-             return !!super._isSynchronizedViewMatrix() && (this._cache.U1.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset … [truncated]
+         },
+         "Red Balloon": {
+           ...JM,
+           physicsState: {
+             type: OM.n.BALLOON,
+             tier: OM.b.RED
```

#### 33. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1575-L1581` → after: `L4283-L4288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R4283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L4283-L4288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/264.js#L4283-L4288) · [Before (L1575-L1581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/264.js#L1575-L1581)

```diff
-           attachControl(GG, bG) {
-             let ZG = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
-               wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
-             const SG = arguments;
-             bG = oG.f.BackCompatCameraNoPreventDefault(SG), this._useCtrlForPanning = ZG, this._panningMouseButton = wG, "boolean" === typeof SG[0] && (SG.length > 1 && (this._useCtrlForPanning = SG[1]), SG.length > 2 && (this._panningMouseButton = SG[2])), this.inputs.attachElem … [truncated]
-               this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0
-             }
+         },
+         "Purple Balloon": {
+           ...JM,
+           physicsState: {
+             type: OM.n.BALLOON,
+             tier: OM.b.PURPLE
```

#### 34. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1583-L1584` → after: `L4290-L4295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R4290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L4290-L4295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/264.js#L4290-L4295) · [Before (L1583-L1584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/264.js#L1583-L1584)

```diff
-           detachControl() {
-             this.inputs.detachElement(), this._reset && this._reset()
+         },
+         "Pink Balloon": {
+           ...JM,
+           physicsState: {
+             type: OM.n.BALLOON,
+             tier: OM.b.PINK
```

#### 35. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1586-L1589` → after: `L4297-L4302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R4297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L4297-L4302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/264.js#L4297-L4302) · [Before (L1586-L1589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/264.js#L1586-L1589)

```diff
-           _applyRotationAndZoomDelta(GG, bG, ZG) {
-             const wG = this.invertRotation ? -1 : 1;
-             let SG = GG * this._calculateHandednessMultiplier();
-             this.beta < 0 && (SG *= -1), this.alpha += SG * wG, this.beta += bG * wG, this.radius -= ZG
+         },
+         "Orange Balloon": {
+           ...JM,
+           physicsState: {
+             type: OM.n.BALLOON,
+             tier: OM.b.ORANGE
```

#### 36. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1591-L1608` → after: `L4304-L4309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R4304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L4304-L4309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/264.js#L4304-L4309) · [Before (L1591-L1608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/264.js#L1591-L1608)

```diff
-           _applyPanDelta(GG, bG) {
-             const ZG = yG.j.mK[0].fGG(GG, bG, bG);
-             if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), ZG.multiplyInPlace(this.panningAxis), yG.p.TransformNormalToRef(ZG, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
-               const GG = this.upVector,
-                 bG = yG.p.CrossToRef(this._transformedDirection, GG, this._transformedDirection);
-               yG.p.CrossToRef(GG, bG, this._transformedDirection)
-             } else this.panningAxis.y || (this._transformedDirection.y = 0);
-             if (!this._targetHost)
-               if (null !== this.panningDistanceLimit) {
-                 this._transformedDirection.addInPlace(this.U1);
-                 yG.p.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.U1.oW(this._transformedDirection)
-               } else {
-                 if (this.parent) {
-                   const GG = yG.j.Matrix[0];
-                   this.parent.getWorldMatrix().getRotationMatrixToRef(GG), GG.transposeToRef(GG), yG.p.TransformCoordinatesToRef(this._transformedDirection, GG, this._transformedDirection)
-                 }
- ... (2 more removed lines; see GitHub link above)
+         },
+         "Magenta Balloon": {
+           ...JM,
+           physicsState: {
+             type: OM.n.BALLOON,
+             tier: OM.b.MAGENTA
```

#### 37. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1610-L1651` → after: `L4311-L4316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R4311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L4311-L4316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/264.js#L4311-L4316) · [Before (L1610-L1651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/264.js#L1610-L1651)

```diff
-           _checkInputs() {
-             if (this._collisionTriggered) return;
-             this.inputs.checkInputs();
-             let GG = !1;
-             this.movement.computeCurrentFrameDeltas();
-             const bG = this.movement.rotationDeltaCurrentFrame,
-               ZG = this.movement.zoomDeltaCurrentFrame,
-               wG = this.movement.panDeltaCurrentFrame;
-             if (0 === bG.x && 0 === bG.y && 0 === ZG && 0 === wG.x && 0 === wG.y || (GG = !0, 0 === bG.x && 0 === bG.y && 0 === ZG || this._applyRotationAndZoomDelta(bG.x, bG.y, ZG), 0 === wG.x && 0 === wG.y || this._applyPanDelta(wG.x, wG.y)), 0 === this._inertialAlphaOffset &&  … [truncated]
-               this._applyPanDelta(this.inertialPanningX, this.inertialPanningY), this.inertialPanningX *= this.panningInertia, this.inertialPanningY *= this.panningInertia;
-               const bG = this._panningEpsilon;
-               Math.abs(this.inertialPanningX) < bG && (this.inertialPanningX = 0), Math.abs(this.inertialPanningY) < bG && (this.inertialPanningY = 0), GG = !0
-             }
-             if (GG) this.stopInterpolation();
-             else if (this._isInterpolating) {
-               let GG = !1;
- ... (26 more removed lines; see GitHub link above)
+         },
+         "Lime Balloon": {
+           ...JM,
+           physicsState: {
+             type: OM.n.BALLOON,
+             tier: OM.b.LIME
```

#### 38. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1653-L1654` → after: `L4318-L4323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R4318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L4318-L4323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/264.js#L4318-L4323) · [Before (L1653-L1654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/264.js#L1653-L1654)

```diff
-           _checkLimits() {
-             null === this.lowerBetaLimit || void 0 === this.lowerBetaLimit ? this.allowUpsideDown && this.beta > Math.PI && (this.beta = this.beta - 2 * Math.PI) : this.beta < this.lowerBetaLimit && (this.beta = this.lowerBetaLimit), null === this.upperBetaLimit || void 0 === thi … [truncated]
+         },
+         "Light Gray Balloon": {
+           ...JM,
+           physicsState: {
+             type: OM.n.BALLOON,
+             tier: OM.b.LIGHT_GRAY
```

#### 39. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1656-L1665` → after: `L4325-L4330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R4325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L4325-L4330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/264.js#L4325-L4330) · [Before (L1656-L1665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/264.js#L1656-L1665)

```diff
-           rebuildAnglesAndRadius() {
-             this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || yG.p.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.ra … [truncated]
-             const GG = this.alpha;
-             var bG, ZG;
-             this.alpha = function(GG) {
-               let bG = Math.PI / 2;
-               return 0 === GG.x && 0 === GG.z || (bG = Math.acos(GG.x / Math.sqrt(Math.pow(GG.x, 2) + Math.pow(GG.z, 2)))), GG.z < 0 && (bG = 2 * Math.PI - bG), bG
-             }(this._computationVector), this.beta = (bG = this._computationVector.y, ZG = this.radius, Math.acos(bG / ZG));
-             const wG = Math.round((GG - this.alpha) / (2 * Math.PI));
-             this.alpha += 2 * wG * Math.PI, this._checkLimits()
+         },
+         "Light Blue Balloon": {
+           ...JM,
+           physicsState: {
+             type: OM.n.BALLOON,
+             tier: OM.b.LIGHT_BLUE
```

#### 40. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1667-L1668` → after: `L4332-L4337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R4332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L4332-L4337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/264.js#L4332-L4337) · [Before (L1667-L1668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/264.js#L1667-L1668)

```diff
-           setPosition(GG) {
-             this._position.equals(GG) || (this._position.oW(GG), this.rebuildAnglesAndRadius())
+         },
+         "Green Balloon": {
+           ...JM,
+           physicsState: {
+             type: OM.n.BALLOON,
+             tier: OM.b.GREEN
```

#### 41. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1670-L1681` → after: `L4339-L4344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R4339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L4339-L4344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/264.js#L4339-L4344) · [Before (L1670-L1681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/264.js#L1670-L1681)

```diff
-           setTarget(GG) {
-             let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-               ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-               wG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-             if (wG = this.overrideCloneAlphaBetaRadius ?? wG, GG.computeWorldMatrix) bG && GG.HA ? this._targetBoundingCenter = GG.HA().boundingBox.centerWorld.clone() : this._targetBoundingCenter = null, GG.computeWorldMatrix(), this._targetHost = GG, this.U1 = this._getTargetPo … [truncated]
-             else {
-               const bG = GG,
-                 wG = this._getTargetPosition();
-               if (wG && !ZG && wG.equals(bG)) return;
-               this._targetHost = null, this.U1 = bG, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
-             }
-             wG || this.rebuildAnglesAndRadius()
+         },
+         "Gray Balloon": {
+           ...JM,
+           physicsState: {
+             type: OM.n.BALLOON,
+             tier: OM.b.GRAY
```

#### 42. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1683-L1698` → after: `L4346-L4351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R4346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L4346-L4351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/264.js#L4346-L4351) · [Before (L1683-L1698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/264.js#L1683-L1698)

```diff
-           _getViewMatrix() {
-             const GG = Math.cos(this.alpha),
-               bG = Math.sin(this.alpha),
-               ZG = Math.cos(this.beta);
-             let wG = Math.sin(this.beta);
-             0 === wG && (wG = 1e-4), 0 === this.radius && (this.radius = 1e-4);
-             const SG = this._getTargetPosition();
-             if (this._computationVector.fGG(this.radius * GG * wG, this.radius * ZG, this.radius * bG * wG), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || yG.p.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationV … [truncated]
-               const GG = this.Dv().collisionCoordinator;
-               this._collider || (this._collider = GG.createCollider()), this._collider._radius = this.collisionRadius, this._newPosition.subtractToRef(this._position, this._collisionVelocity), this._collisionTriggered = !0, GG.getNewPosition(this._position, this._collisionVelocit … [truncated]
-             } else {
-               this._position.oW(this._newPosition);
-               let GG = this.upVector;
-               this.allowUpsideDown && wG < 0 && (GG = GG.By()), this._computeViewMatrix(this._position, SG, GG), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
-             }
-             return this._currentTarget.oW(SG), this._viewMatrix
+         },
+         "Cyan Balloon": {
+           ...JM,
+           physicsState: {
+             type: OM.n.BALLOON,
+             tier: OM.b.CYAN
```

#### 43. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1700-L1714` → after: `L4353-L4358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R4353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L4353-L4358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/264.js#L4353-L4358) · [Before (L1700-L1714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/264.js#L1700-L1714)

```diff
-           zoomOn(GG) {
-             let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-             GG = GG || this.Dv().meshes;
-             const ZG = YG.c.MinMax(GG);
-             let wG = this._calculateLowerRadiusFromModelBoundingSphere(ZG.min, ZG.max);
-             if (wG = Math.max(Math.min(wG, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = wG * this.zoomOnFactor, this.mode === rG.d.ORTHOGRAPHIC_CAMERA) {
-               const GG = this.Dv().CK().getAspectRatio(this),
-                 bG = wG * this.zoomOnFactor / 2;
-               this.orthoLeft = -bG * GG, this.orthoRight = bG * GG, this.orthoBottom = -bG, this.orthoTop = bG
-             }
-             this.focusOn({
-               min: ZG.min,
-               max: ZG.max,
-               distance: wG
-             }, bG)
+         },
+         "Brown Balloon": {
+           ...JM,
+           physicsState: {
+             type: OM.n.BALLOON,
+             tier: OM.b.BROWN
```

#### 44. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1716-L1724` → after: `L4360-L4365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R4360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L4360-L4365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/264.js#L4360-L4365) · [Before (L1716-L1724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/264.js#L1716-L1724)

```diff
-           focusOn(GG) {
-             let bG, ZG, wG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-             if (void 0 === GG.min) {
-               const wG = GG || this.Dv().meshes;
-               bG = YG.c.MinMax(wG), ZG = yG.p.Distance(bG.min, bG.max)
-             } else {
-               bG = GG, ZG = GG.distance
-             }
-             this.U1 = YG.c.Center(bG), wG || (this.maxZ = 2 * ZG)
+         },
+         "Blue Balloon": {
+           ...JM,
+           physicsState: {
+             type: OM.n.BALLOON,
+             tier: OM.b.BLUE
```

#### 45. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1726-L1740` → after: `L4367-L4372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R4367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L4367-L4372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/264.js#L4367-L4372) · [Before (L1726-L1740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/264.js#L1726-L1740)

```diff
-           createRigCamera(bG, ZG) {
-             let wG = 0;
-             switch (this.cameraRigMode) {
-               case rG.d.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
-               case rG.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
-               case rG.d.RIG_MODE_STEREOSCOPIC_OVERUNDER:
-               case rG.d.RIG_MODE_STEREOSCOPIC_INTERLACED:
-               case rG.d.RIG_MODE_VR:
-                 wG = this._cameraRigParams.stereoHalfAngle * (0 === ZG ? 1 : -1);
-                 break;
-               case rG.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
-                 wG = this._cameraRigParams.stereoHalfAngle * (0 === ZG ? -1 : 1)
-             }
-             const SG = new GG(bG, this.alpha + wG, this.beta, this.radius, this.U1, this.Dv());
-             return SG._cameraRigParams = {}, SG.isRigCamera = !0, SG.rigParent = this, SG.upVector = this.upVector, SG.mode = this.mode, SG.orthoLeft = this.orthoLeft, SG.orthoRight = this.orthoRight, SG.orthoBottom = this.orthoBottom, SG.orthoTop = this.orthoTop, SG
+         },
+         "Black Balloon": {
+           ...JM,
+           physicsState: {
+             type: OM.n.BALLOON,
+             tier: OM.b.BLACK
```

#### 46. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1742-L1756` → after: `L4374-L4393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R4374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L4374-L4393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/264.js#L4374-L4393) · [Before (L1742-L1756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/264.js#L1742-L1756)

```diff
-           _updateRigCameras() {
-             const GG = this._rigCameras[0],
-               bG = this._rigCameras[1];
-             switch (GG.beta = bG.beta = this.beta, this.cameraRigMode) {
-               case rG.d.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
-               case rG.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
-               case rG.d.RIG_MODE_STEREOSCOPIC_OVERUNDER:
-               case rG.d.RIG_MODE_STEREOSCOPIC_INTERLACED:
-               case rG.d.RIG_MODE_VR:
-                 GG.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle, bG.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle;
-                 break;
-               case rG.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
-                 GG.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle, bG.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle
-             }
-             super._updateRigCameras()
+         }
+       };
+ 
+     function yM(MM) {
+       var rM;
+       return null === MM || void 0 === MM ? null : null !== (rM = dM[MM]) && void 0 !== rM ? rM : null
+     }
+     const lM = {
+         meshAttachment: {
+           size: 3,
+           offset: [0, .72, .3],
+           rotation: [-Math.PI / 2, Math.PI, Math.PI]
+         }
+       },
+       EM = {
+         "Wood Hang Glider": {
+ ... (4 more added lines; see GitHub link above)
```

#### 47. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1758-L1767` → after: `L4395-L4400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R4395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L4395-L4400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/264.js#L4395-L4400) · [Before (L1758-L1767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/264.js#L1758-L1767)

```diff
-           _calculateLowerRadiusFromModelBoundingSphere(GG, bG) {
-             let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
-             const wG = yG.p.Distance(GG, bG),
-               SG = this.Dv().CK().getAspectRatio(this),
-               LG = Math.tan(this.fov / 2),
-               kG = LG * SG,
-               UG = .5 * wG * ZG,
-               YG = UG * Math.sqrt(1 + 1 / (kG * kG)),
-               VG = UG * Math.sqrt(1 + 1 / (LG * LG));
-             return Math.max(YG, VG)
+         },
+         "Iron Hang Glider": {
+           ...lM,
+           physicsState: {
+             type: OM.n.GLIDER,
+             tier: OM.h.IRON
```

#### 48. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1769-L1770` → after: `L4402-L4407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R4402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L4402-L4407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/264.js#L4402-L4407) · [Before (L1769-L1770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/264.js#L1769-L1770)

```diff
-           dispose() {
-             this.inputs.clear(), super.dispose()
+         },
+         "Gold Hang Glider": {
+           ...lM,
+           physicsState: {
+             type: OM.n.GLIDER,
+             tier: OM.h.GOLD
```

#### 49. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1772-L1773` → after: `L4409-L4414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R4409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L4409-L4414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/264.js#L4409-L4414) · [Before (L1772-L1773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/264.js#L1772-L1773)

```diff
-           getClassName() {
-             return "ArcRotateCamera"
+         },
+         "Diamond Hang Glider": {
+           ...lM,
+           physicsState: {
+             type: OM.n.GLIDER,
+             tier: OM.h.DIAMOND
```

#### 50. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1775-L2142` → after: `L4416-L4442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R4416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L4416-L4442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/264.js#L4416-L4442) · [Before (L1775-L2142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/264.js#L1775-L2142)

```diff
-         }, (() => {
-           const LG = "function" === typeof Symbol && Symbol.metadata ? Object.create(HG[Symbol.metadata] ?? null) : void 0;
-           bG = [(0, SG.Q)()], ZG = [(0, SG.Q)()], UG = [(0, SG.Q)()], VG = [(0, SG.Q)()], pG = [(0, SG.M)("target")], KG = [(0, SG.z)("targetHost")], hG = [(0, SG.Q)()], EG = [(0, SG.Q)()], XG = [(0, SG.Q)()], uG = [(0, SG.Q)()], iG = [(0, SG.Q)()], CG = [(0, SG.Q)()], WG = [(0,  … [truncated]
-             kind: "getter",
-             name: "inertialAlphaOffset",
-             static: !1,
-             private: !1,
-             access: {
-               has: GG => "inertialAlphaOffset" in GG,
-               get: GG => GG.inertialAlphaOffset
-             },
-             metadata: LG
-           }, null, tG), (0, wG.k)(GG, null, EG, {
-             kind: "getter",
-             name: "inertialBetaOffset",
-             static: !1,
- ... (352 more removed lines; see GitHub link above)
+         }
+       };
+ 
+     function UM(MM) {
+       var rM;
+       return null === MM || void 0 === MM ? null : null !== (rM = EM[MM]) && void 0 !== rM ? rM : null
+     }
+     const GM = new Set(Object.values(dM).map((MM => MM.physicsState.type))),
+       CM = new Set(Object.values(EM).map((MM => MM.physicsState.type)));
+ 
+     function eM(MM) {
+       return GM.has(MM)
+     }
+ 
+     function bM(MM) {
+       return CM.has(MM)
+ ... (11 more added lines; see GitHub link above)
```

#### 51. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2144` → after: `L4444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R4444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L4444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/264.js#L4444) · [Before (L2144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/264.js#L2144)

```diff
-   40631: (GG, bG, ZG) => {
+   39230: (MM, rM, iM) => {
```

#### 52. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2147` → after: `L4448-L4449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R4448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L4448-L4449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/264.js#L4448-L4449) · [Before (L2147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/264.js#L2147)

```diff
-       f: () => fG
+       g: () => SM,
+       j: () => PM
```

#### 53. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2149-L2232` → after: `L4451-L4453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R4451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L4451-L4453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/264.js#L4451-L4453) · [Before (L2149-L2232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/264.js#L2149-L2232)

```diff
-     var wG = ZG(40393),
-       SG = ZG(40398),
-       LG = ZG(37439),
-       yG = ZG(37621),
-       kG = ZG(40635),
-       UG = ZG(40599),
-       YG = ZG(37484);
-     let VG = (() => {
-         var GG;
-         let bG, ZG, UG = kG.c,
-           YG = [],
-           VG = [],
-           pG = [],
-           fG = [];
-         return GG = class extends UG {
-           constructor(GG, bG, ZG, SG) {
- ... (68 more removed lines; see GitHub link above)
+     var OM = iM(340);
+     const SM = ["Snowball", "Snowball Launcher", "Pebble", "Reinforced Pebble", "Ball", "Reinforced Ball", "Mango", "Moonstone Orb", ...iM(620).w.map((MM => `${MM} Spawn Orb`)), "Fireball", "RPG", "Obby RPG", "Super RPG", "Grenade Launcher", "Iceball", "Bouncy Bomb", "Coconut", " … [truncated]
+       jM = ["Obby RPG"];
```

#### 54. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2234-L2235` → after: `L4455-L4463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R4455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L4455-L4463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/264.js#L4455-L4463) · [Before (L2234-L2235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/264.js#L2234-L2235)

```diff
-     function fG() {
-       pG || (pG = !0, UG.e.AddNodeConstructor("Light_Type_3", ((GG, bG) => () => new VG(GG, LG.p.Zero(), bG))), (0, YG.i)("BABYLON.HemisphericLight", VG))
+     function aM(MM) {
+       const rM = MM.indexOf("|");
+       return -1 === rM ? {
+         item: MM,
+         clientPredictedThrower: null
+       } : {
+         item: MM.slice(0, rM),
+         clientPredictedThrower: MM.slice(rM + 1)
+       }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/265.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/265.js` (41 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89)

#### 1. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/265.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/265.js#L4)

```diff
-   40767: (GG, bG, ZG) => {
+   39040: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L6` → after: `L6-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L6-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/265.js#L6-L11) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/265.js#L6)

```diff
-       b: () => SG
+       d: () => QM,
+       g: () => OM,
+       i: () => PM,
+       k: () => SM,
+       l: () => aM,
+       m: () => jM
```

#### 3. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L8` → after: `L13-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L13-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/265.js#L13-L18) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/265.js#L8)

```diff
-     var wG = ZG(40402);
+     const OM = 1.001,
+       SM = .501,
+       jM = .025,
+       aM = .75,
+       PM = .08,
+       nM = 4;
```

#### 4. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L10-L78` → after: `L20-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L20-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/265.js#L20-L35) · [Before (L10-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/265.js#L10-L78)

```diff
-     function SG(GG) {
-       return class extends GG {
-         constructor() {
-           super(...arguments);
-           const GG = new.target;
-           if (!GG[Symbol.metadata]) {
-             const bG = Object.getPrototypeOf(GG)?.[Symbol.metadata];
-             GG[Symbol.metadata] = bG ? Object.create(bG) : {}
-           }
-           const bG = (0, wG.c)(GG[Symbol.metadata]);
-           bG._imageProcessingConfiguration || (bG._imageProcessingConfiguration = {
-             type: 9,
-             sourceName: void 0
-           })
-         }
-         get imageProcessingConfiguration() {
- ... (53 more removed lines; see GitHub link above)
+     function QM() {
+       const MM = SM,
+         rM = jM,
+         iM = MM - rM / 2,
+         OM = (2 * MM - 2 * rM) / (2 * nM - 1),
+         aM = [];
+       for (const SM of [-iM, iM])
+         for (const jM of [-iM, iM])
+           for (let iM = 0; iM < nM; iM++) {
+             const PM = -MM + rM + OM * (2 * iM + .5);
+             aM.push([OM, rM, rM, PM, SM, jM]), aM.push([rM, OM, rM, SM, PM, jM]), aM.push([rM, rM, OM, SM, jM, PM])
+           }
+       for (const SM of [-iM, iM])
+         for (const MM of [-iM, iM])
+           for (const OM of [-iM, iM]) aM.push([rM, rM, rM, SM, MM, OM]);
+       return aM
```

#### 5. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L81` → after: `L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/265.js#L38) · [Before (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/265.js#L81)

```diff
-   40658: (GG, bG, ZG) => {
+   39426: (MM, rM, iM) => {
```

#### 6. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L83-L84` → after: `L40-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L40-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/265.js#L40-L56) · [Before (L83-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/265.js#L83-L84)

```diff
-       c: () => LG,
-       d: () => SG
+       C: () => eM,
+       D: () => HM,
+       F: () => CM,
+       J: () => bM,
+       L: () => GM,
+       P: () => UM,
+       Q: () => mM,
+       S: () => JM,
+       V: () => yM,
+       X: () => SM,
+       d: () => zM,
+       h: () => nM,
+       k: () => EM,
+       o: () => QM,
+       s: () => PM,
+       u: () => aM,
+ ... (1 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L86` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/265.js#L58) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/265.js#L86)

```diff
-     var wG = ZG(40660);
+     var OM = iM(9904);
```

#### 8. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L89-L93` → after: `L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/265.js#L61) · [Before (L89-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/265.js#L89-L93)

```diff
-       return class extends GG {
-         constructor() {
-           super(...arguments), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING … [truncated]
-         }
-       }
+       return Math.floor(MM).toLocaleString("en-US")
```

#### 9. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L95-L98` → after: `L63-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L63-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/265.js#L63-L73) · [Before (L95-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/265.js#L95-L98)

```diff
-     class LG extends wG.d {
-       constructor() {
-         super(), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this. … [truncated]
-       }
+     const jM = 2e3,
+       aM = .005,
+       PM = .001,
+       nM = 2,
+       QM = "Fluid Tank",
+       zM = "Coolant Mixer",
+       LM = 144;
+ 
+     function mM(MM) {
+       const rM = MM.split("|")[0];
+       return (0, OM.p)(rM) ? rM === OM.e ? "cryo" : "water" : null
```

#### 10. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L100-L114` → after: `L75-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L75-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/265.js#L75-L102) · [Before (L100-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/265.js#L100-L114)

```diff
-   },
-   40727: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       c: () => pG
-     });
-     var wG = ZG(40393),
-       SG = ZG(40664),
-       LG = ZG(40398),
-       yG = ZG(40717),
-       kG = ZG(40660),
-       UG = ZG(40735),
-       YG = ZG(40705);
-     class VG extends kG.d {
-       constructor() {
-         super(...arguments), this.DETAIL = !1, this.DETAILDIRECTUV = 0, this.DETAIL_NORMALBLENDMETHOD = 0
+     const HM = [
+         [1, 0, 0],
+         [-1, 0, 0],
+         [0, 1, 0],
+         [0, -1, 0],
+         [0, 0, 1],
+         [0, 0, -1]
+       ],
+       hM = 63;
+ 
+     function JM(MM) {
+       let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
+       const iM = rM ? function(MM, rM, iM) {
+         const OM = HM.findIndex((OM => {
+           let [SM, jM, aM] = OM;
+           return SM === MM && jM === rM && aM === iM
+ ... (12 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L117-L392` → after: `L105-L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L105-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/265.js#L105-L175) · [Before (L117-L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/265.js#L117-L392)

```diff
-     let pG = (() => {
-       var GG, bG, ZG, kG;
-       let pG, fG, QG, KG, hG, dG, JG = UG.e,
-         rG = [],
-         zG = [],
-         EG = [],
-         oG = [],
-         XG = [],
-         uG = [],
-         iG = [],
-         CG = [],
-         WG = [],
-         mG = [],
-         IG = [],
-         FG = [];
-       return GG = class extends JG {
- ... (260 more removed lines; see GitHub link above)
+ 
+     function dM(MM) {
+       return "pipe" === MM || "tank" === MM || "maker" === MM
+     }
+ 
+     function yM(MM, rM, iM) {
+       return 0 !== (MM.faces & 1 << iM) && 0 !== (rM.faces & 1 << (1 ^ iM)) && (dM(MM.kind) || dM(rM.kind))
+     }
+     const lM = (MM, rM, iM, OM) => ({
+         input: MM,
+         inputAmount: OM,
+         output: rM,
+         outputAmount: iM
+       }),
+       EM = {
+         Condenser: {
+ ... (55 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L395` → after: `L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/265.js#L181) · [Before (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/265.js#L395)

```diff
-   40750: (GG, bG, ZG) => {
+   39414: (MM, rM, iM) => {
```

#### 13. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L397-L399` → after: `L183-L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L183-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/265.js#L183-L184) · [Before (L397-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/265.js#L397-L399)

```diff
-       e: () => kG,
-       f: () => yG,
-       g: () => LG
+       d: () => sM,
+       h: () => DM
```

#### 14. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L401` → after: `L186-L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L186-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/265.js#L186-L209) · [Before (L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/265.js#L401)

```diff
-     var wG, SG = ZG(37439);
+     var OM = iM(9816),
+       SM = iM(9852);
+     const jM = [
+       [1, 0, 0],
+       [-1, 0, 0],
+       [0, 0, 1],
+       [0, 0, -1],
+       [0, 1, 0],
+       [0, -1, 0]
+     ];
+     var aM = iM(9866),
+       PM = iM(39224),
+       nM = iM(9863);
+     const QM = {
+       1: [0, -1],
+       2: [-1, 0],
+ ... (8 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L404-L407` → after: `L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/265.js#L212) · [Before (L404-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/265.js#L404-L407)

```diff
-       let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16777215;
-       const wG = bG(GG);
-       if (!Number.isInteger(wG) || wG < 0 || wG > ZG) throw new Error(`Invalid geometry object ID ${wG} for mesh "${GG.name}". Object IDs must be integers between 0 and 0x${ZG.toString(16).toUpperCase()}.`);
-       return wG
+       return MM[0] === rM[0] && MM[1] === rM[1]
```

#### 16. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L411-L432` → after: `L216-L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L216-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/265.js#L216-L265) · [Before (L411-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/265.js#L411-L432)

```diff
-       const ZG = bG(GG);
-       if (!Number.isInteger(ZG) || ZG < 0 || ZG > 255 || 0 !== ZG && 0 === (63 & ZG)) throw new Error(`Invalid geometry mesh-blending tag ${ZG} for mesh "${GG.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
-       return ZG
-     }! function(GG) {
-       GG[GG.Zero = 0] = "Zero", GG[GG.One = 1] = "One", GG[GG.MaxViewZ = 2] = "MaxViewZ", GG[GG.NoClear = 3] = "NoClear"
-     }(wG || (wG = {}));
-     class kG {
-       static CreateConfiguration(GG) {
-         return kG._Configurations[GG] = {
-           defines: {},
-           previousWorldMatrices: {},
-           previousViewProjection: SG.e.Zero(),
-           currentViewProjection: SG.e.Zero(),
-           previousBones: {},
-           lastUpdateFrameId: -1,
-           excludedSkinnedMesh: [],
- ... (6 more removed lines; see GitHub link above)
+       return MM[0] * rM[0] + MM[1] * rM[1] === 0
+     }
+     const HM = [
+       [1, 0, 0],
+       [-1, 0, 0],
+       [0, 0, 1],
+       [0, 0, -1]
+     ];
+     var hM = iM(9895);
+ 
+     function JM(MM, rM, iM, OM, SM) {
+       return rM < hM.q || rM >= hM.q + hM.t || Math.floor(MM / hM.y) === Math.floor(OM / hM.y) && Math.floor(iM / hM.y) === Math.floor(SM / hM.y)
+     }
+     const dM = "Splitter",
+       yM = "Sorting Gate",
+       lM = new Set(hM.M),
+ ... (34 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L434-L435` → after: `L267-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L267-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/265.js#L267-L284) · [Before (L434-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/265.js#L434-L435)

```diff
-       static GetConfiguration(GG) {
-         return kG._Configurations[GG]
+     }
+ 
+     function uM(MM, rM, iM, OM) {
+       return gM(MM(rM, iM, OM))
+     }
+ 
+     function RM(MM, rM, iM, OM, SM) {
+       let {
+         rot: jM,
+         half: aM
+       } = SM;
+       const [PM, nM] = (0, wM.e)(jM, aM), QM = uM(MM, rM + PM, iM, OM + nM);
+       return null !== QM && QM.rot === jM && QM.half === wM.i[aM]
+     }
+     var pM = iM(39420);
+     const WM = [new class {
+ ... (2 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L437-L443` → after: `L286-L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L286-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/265.js#L286-L327) · [Before (L437-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/265.js#L437-L443)

```diff
-       static _PrepareConfiguration(GG, bG, ZG) {
-         const wG = kG._Configurations[GG];
-         wG._attachments = bG, wG._colorAttachments = ZG, wG._mrtCount = bG.length;
-         let SG = "#define PREPASS\n";
-         for (const LG of kG.GeometryTextureDescriptions) {
-           const GG = wG.defines[LG.defineIndex];
-           void 0 !== GG && (SG += `#define ${LG.define}\n#define ${LG.defineIndex} ${GG}\n`)
+       handles(MM) {
+         var rM;
+         return "Stairs" === (null === (rM = OM.k[MM]) || void 0 === rM ? void 0 : rM.model)
+       }
+       affects(MM) {
+         return this.handles(MM)
+       }
+       shape(MM, rM, iM, SM, jM) {
+         const aM = this.stairsOf(jM),
+           PM = this.cornerAt(MM, rM, iM, SM, aM),
+           QM = aM.half === nM.b.top ? "top" : "bot";
+         return (0, OM.l)(`${OM.k[jM].meta.rootName}|meta|rot${aM.rot}|${QM}${null===PM?"":`|${PM}`}`)
+       }
+       stairsOf(MM) {
+         const {
+           rot: rM,
+ ... (26 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L445-L461` → after: `L329-L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L329-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/265.js#L329-L334) · [Before (L445-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/265.js#L445-L461)

```diff
-         wG.objectIdIsRedFormat && (SG += "#define PREPASS_OBJECT_ID_R8\n"), wG._defines = SG + `#define SCENE_MRT_COUNT ${bG.length}\n`
-       }
-       static _PrepareStringDefines(GG, bG) {
-         const ZG = kG._Configurations[GG];
-         return !!ZG?._defines && (bG.push(ZG._defines), !0)
-       }
-       static _BindAttachmentsForEffect(GG, bG) {
-         const ZG = kG._Configurations[GG.currentRenderPassId];
-         return !ZG?._attachments || (GG.bindAttachments(bG._multiTarget ? ZG._attachments : ZG._colorAttachments), bG._multiTarget || void 0 !== ZG.defines.PREPASS_COLOR_INDEX)
-       }
-       static _RestoreAttachments(GG) {
-         const bG = kG._Configurations[GG.currentRenderPassId];
-         bG?._colorAttachments && GG.bindAttachments(bG._colorAttachments)
-       }
-       static _BindColorAttachments(GG) {
-         const bG = kG._Configurations[GG.currentRenderPassId];
- ... (1 more removed lines; see GitHub link above)
+         const hM = this.stairsAt(MM, rM - PM[0], iM, OM - PM[1]);
+         if (null !== hM && hM.half === aM) {
+           const MM = QM[hM.rot];
+           if (mM(PM, MM) && !nM(MM)) return LM(MM, zM(PM)) ? "innerLeft" : "innerRight"
+         }
+         return null
```

#### 20. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L463-L465` → after: `L336-L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L336-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/265.js#L336-L338) · [Before (L463-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/265.js#L463-L465)

```diff
-       static _IsColorAttachmentEnabled(GG) {
-         const bG = kG._Configurations[GG.currentRenderPassId];
-         return !bG?._colorAttachments || void 0 !== bG.defines.PREPASS_COLOR_INDEX
+     }, new class {
+       constructor() {
+         this.reshapeOffsets = jM, this.rootIds = new Set(SM.h.map((MM => (0, OM.l)(MM))))
```

#### 21. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L467-L472` → after: `L340-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L340-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/265.js#L340-L343) · [Before (L467-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/265.js#L467-L472)

```diff
-       static _BindZeroAlphaDiscard(GG, bG) {
-         const ZG = kG._Configurations[GG.currentRenderPassId];
-         if (!ZG) return;
-         const wG = GG.getAlphaMode(),
-           SG = void 0 === ZG.defines.PREPASS_COLOR_INDEX || 2 === wG || 1 === wG || 17 === wG;
-         bG.setFloat("geometryZeroAlphaDiscard", SG ? 1 : 0)
+       handles(MM) {
+         var rM;
+         const iM = null === (rM = OM.k[MM]) || void 0 === rM ? void 0 : rM.meta;
+         return void 0 !== iM && this.rootIds.has(iM.rootId)
```

#### 22. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L474-L475` → after: `L345-L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L345-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/265.js#L345-L346) · [Before (L474-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/265.js#L474-L475)

```diff
-       static AddUniformsAndSamplers(GG, bG) {
-         GG.push("previousWorld", "previousViewProjection", "mPreviousBones", "objectId", "meshBlendTag")
+       affects(MM) {
+         return this.handles(MM)
```

#### 23. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L477-L480` → after: `L348-L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L348-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/265.js#L348-L349) · [Before (L477-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/265.js#L477-L480)

```diff
-       static MarkAsDirty(GG, bG) {
-         for (const ZG of bG)
-           if (ZG.aE)
-             for (const bG of ZG.aE) bG._removeDrawWrapper(GG)
+       placedBy(MM) {
+         return OM.k[MM].meta.rootName === SM.t ? null : SM.t
```

#### 24. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L482-L486` → after: `L351-L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L351-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/265.js#L351-L356) · [Before (L482-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/265.js#L482-L486)

```diff
-       static PrepareDefines(GG, bG, ZG) {
-         if (!ZG._arePrePassDirty) return;
-         const wG = kG._Configurations[GG];
-         if (!wG) return;
-         ZG.PREPASS = !0;
+       shape(MM, rM, iM, jM, aM) {
+         const {
+           rootId: PM,
+           rootName: nM,
+           rot: QM
+         } = OM.k[aM].meta;
```

#### 25. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L488-L495` → after: `L358-L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L358-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/265.js#L358-L415) · [Before (L488-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/265.js#L488-L495)

```diff
-         for (let LG = 0; LG < kG.GeometryTextureDescriptions.length; LG++) {
-           const GG = kG.GeometryTextureDescriptions[LG],
-             bG = GG.define,
-             yG = GG.defineIndex,
-             UG = wG.defines[yG];
-           void 0 !== UG ? (ZG[bG] = !0, ZG[yG] = UG, SG++) : (ZG[bG] = !1, delete ZG[yG])
-         }
-         ZG.PREPASS_OBJECT_ID_R8 = wG.objectIdIsRedFormat, ZG.SCENE_MRT_COUNT = wG._mrtCount ?? SG, ZG.BONES_VELOCITY_ENABLED = bG.useBones && bG.computeBonesUsingShaders && bG.skeleton && !bG.skeleton.isUsingTextureForMatrices && -1 === wG.excludedSkinnedMesh.indexOf(bG)
+         return SM.C[QM].forEach(((SM, aM) => {
+           var nM;
+           let [LM, mM, HM] = SM;
+           const hM = null === (nM = OM.k[MM(rM + LM, iM + mM, jM + HM)]) || void 0 === nM ? void 0 : nM.meta;
+           (null === hM || void 0 === hM ? void 0 : hM.rootId) === PM && hM.rot === QM && (zM |= 1 << aM)
+         })), (0, OM.l)((0, SM.e)(nM, QM, zM))
+       }
+     }, ...aM.b.map((MM => new PM.e(MM))), new class {
+       constructor() {
+         this.reshapeOffsets = GM
+       }
+       handles(MM) {
+         const rM = CM(MM);
+         return lM.has(rM) || rM === hM.j
+       }
+       affects(MM) {
+ ... (42 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L497-L511` → after: `L417-L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L417-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/265.js#L417-L438) · [Before (L497-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/265.js#L497-L511)

```diff
-       static Bind(GG, bG, ZG, wG, SG) {
-         const UG = kG._Configurations[GG];
-         if (!UG) return;
-         const YG = ZG.Dv(),
-           VG = YG.CK();
-         if (UG.reverseCulling && VG.setStateCullFaceType(YG._mirroredCameraPosition ? SG.cullBackFaces : !SG.cullBackFaces), void 0 !== UG.defines.PREPASS_OBJECT_ID_INDEX) {
-           const GG = UG.objectIdIsRedFormat ? 255 : 16777215;
-           let wG = ZG.uniqueId;
-           if (UG.objectIdProvider) wG = LG(ZG, UG.objectIdProvider, GG);
-           else if (wG > GG) throw new Error(`Invalid geometry object ID ${wG} for mesh "${ZG.name}". Object IDs must be integers between 0 and 0x${GG.toString(16).toUpperCase()}.`);
-           bG.setFloat("objectId", wG)
-         }
-         if (void 0 !== UG.defines.PREPASS_MESH_BLEND_TAG_INDEX) {
-           const GG = UG.meshBlendTagProvider ? yG(ZG, UG.meshBlendTagProvider) : ZG.meshBlendingTag;
-           bG.setInt("meshBlendTag", GG)
+       handles(MM) {
+         var rM;
+         return (null === (rM = OM.k[MM]) || void 0 === rM ? void 0 : rM.meta.rootId) === this.rootId
+       }
+       affects(MM) {
+         return this.handles(MM)
+       }
+       shape(MM, rM, iM, SM, jM, aM) {
+         const PM = gM(jM);
+         return (0, OM.l)((nM = PM.rot, null !== (QM = aM ? this.reshapedHalf(MM, rM, iM, SM, PM) : this.placedHalf(MM, rM, iM, SM, PM.rot)) ? (0, wM.b)(wM.g, nM, QM) : 1 === nM ? wM.g : `${wM.g}|meta|rot${nM}`));
+         var nM, QM
+       }
+       placedHalf(MM, rM, iM, OM, SM) {
+         const [jM, aM] = bM.c[SM];
+         for (const [PM, nM] of [
+             ["right", 1],
+ ... (6 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L513-L522` → after: `L440-L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L440-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/265.js#L440-L446) · [Before (L513-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/265.js#L513-L522)

```diff
-         if (void 0 !== UG.defines.PREPASS_VELOCITY_INDEX || void 0 !== UG.defines.PREPASS_VELOCITY_LINEAR_INDEX) {
-           const GG = UG._currentWorldMatrices ?? (UG._currentWorldMatrices = {}),
-             SG = UG._worldMatrixFrameIds ?? (UG._worldMatrixFrameIds = {});
-           if (GG[ZG.uniqueId] || (GG[ZG.uniqueId] = wG.clone(), UG.previousWorldMatrices[ZG.uniqueId] = wG.clone()), SG[ZG.uniqueId] !== VG.frameId && (UG.previousWorldMatrices[ZG.uniqueId].oW(GG[ZG.uniqueId]), SG[ZG.uniqueId] = VG.frameId), GG[ZG.uniqueId].oW(wG), -1 === UG.last … [truncated]
-             const GG = ZG.skeleton;
-             if (!GG.isUsingTextureForMatrices || -1 === bG.getUniformIndex("boneTextureInfo")) {
-               const wG = GG.getTransformMatrices(ZG);
-               wG && (UG.previousBones[ZG.uniqueId] || (UG.previousBones[ZG.uniqueId] = wG.slice()), bG.setMatrices("mPreviousBones", UG.previousBones[ZG.uniqueId]), UG.previousBones[ZG.uniqueId].set(wG))
-             }
-           }
+         return null
+       }
+       reshapedHalf(MM, rM, iM, OM, SM) {
+         if (null !== SM.half && RM(MM, rM, iM, OM, SM)) return SM.half;
+         for (const jM of ["right", "left"]) {
+           const [aM, PM] = (0, wM.e)(SM.rot, jM), nM = uM(MM, rM + aM, iM, OM + PM);
+           if (null !== nM && nM.rot === SM.rot && nM.half === wM.i[jM]) return jM
```

#### 28. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L630` → after: `L467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/265.js#L467) · [Before (L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/265.js#L630)

```diff
-   40735: (GG, bG, ZG) => {
+   39420: (MM, rM, iM) => {
```

#### 29. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L633` → after: `L470-L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L470-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/265.js#L470-L471) · [Before (L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/265.js#L633)

```diff
-       f: () => KG
+       i: () => UM,
+       m: () => EM
```

#### 30. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L635-L818` → after: `L473-L487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L473-L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/265.js#L473-L487) · [Before (L635-L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/265.js#L635-L818)

```diff
-     var wG = ZG(40393),
-       SG = ZG(40398),
-       LG = ZG(40262),
-       yG = ZG(40237);
-     const kG = new RegExp("^([gimus]+)!");
-     class UG {
-       constructor(GG) {
-         this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = GG, this._scene = GG.Dv(), this._engine = this._scene.CK()
-       }
-       _addPlugin(GG) {
-         for (let wG = 0; wG < this._plugins.length; ++wG)
-           if (this._plugins[wG].name === GG.name) return !1;
-         if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !GG.isCompatible(this._material.shaderLanguage)) throw `The plugin "${GG.name}" can't be added to the material "${this._material.name}" because the pl … [truncated]
-         const bG = GG.getClassName();
-         UG._MaterialPluginClassToMainDefine[bG] || (UG._MaterialPluginClassToMainDefine[bG] = "MATERIALPLUGIN_" + ++UG._MaterialPluginCounter), this._material._callbackPluginEventGeneric = (GG, bG) => this._handlePluginEvent(GG, bG), this._plugins.push(GG), this._plugins.sort(((G … [truncated]
-         const ZG = {};
- ... (168 more removed lines; see GitHub link above)
+     var OM = iM(9816),
+       SM = iM(9839),
+       jM = iM(9904),
+       aM = iM(39426),
+       PM = iM(9895);
+     const nM = (0, aM.S)("pipe"),
+       QM = (0, aM.S)("tank"),
+       zM = (0, aM.S)("port"),
+       LM = "Reactor Port";
+ 
+     function mM(MM, rM, iM) {
+       const OM = new Set([jM.h, jM.e, LM, ...rM, ...iM, ...MM ? [aM.o] : []]);
+       return {
+         makers: new Set(rM),
+         roots: OM
```

#### 31. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L821` → after: `L490-L510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L490-L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/265.js#L490-L510) · [Before (L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/265.js#L821)

```diff
-     UG._MaterialPluginClassToMainDefine = {}, UG._MaterialPluginCounter = 0;
+     const HM = {
+         water: mM(!0, ["Condenser"], ["Centrifuge", "Synthesizer", aM.d]),
+         cryo: mM(!1, [aM.d], [])
+       },
+       hM = new Set([...HM.water.roots, ...HM.cryo.roots]),
+       JM = {
+         nx: [-1, 0, 0],
+         ny: [0, -1, 0],
+         nz: [0, 0, -1],
+         px: [1, 0, 0],
+         py: [0, 1, 0],
+         pz: [0, 0, 1]
+       },
+       dM = SM.h.map((MM => JM[MM])),
+       yM = dM.map((MM => {
+         let [rM, iM, OM] = MM;
+ ... (5 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L823-L826` → after: `L512-L535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L512-L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/265.js#L512-L535) · [Before (L823-L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/265.js#L823-L826)

```diff
-     function YG(GG, bG) {
-       return GG.replace(/\$(\d+)/g, ((GG, ZG) => {
-         const wG = Number(ZG);
-         return wG < bG.length ? bG[wG] : ""
+     function lM(MM) {
+       let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
+       const iM = OM.k[MM],
+         SM = null === iM || void 0 === iM ? void 0 : iM.meta.rootName,
+         mM = HM[rM];
+       if (!SM || !mM.roots.has(SM)) return null;
+       if ((0, jM.p)(SM)) return (0, aM.Q)(iM.name) === rM ? nM : null;
+       if (SM === aM.o) return QM;
+       if (SM === LM) return iM.name.endsWith("|Water") ? zM : null;
+       const [hM, JM] = PM.i[(iM.meta.rot || 1) - 1];
+       return (0, aM.S)(mM.makers.has(SM) ? "maker" : "user", [-hM, 0, -JM])
+     }
+ 
+     function EM(MM, rM, iM, SM) {
+       let jM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
+       const {
+ ... (8 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L972-L973` → after: `L539-L573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L539-L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/265.js#L539-L573) · [Before (L972-L973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/265.js#L972-L973)

```diff
-     function KG() {
-       QG || (QG = !0, (0, pG.i)("BABYLON.MaterialPluginBase", fG))
+     function UM(MM) {
+       const rM = OM.k[MM];
+       return rM ? (0, aM.Q)(rM.name) : null
+     }
+     let GM = null;
+ 
+     function CM(MM) {
+       if (!GM) {
+         GM = new Map;
+         for (const MM of ["water", "cryo"])
+           for (let rM = 0; rM < 64; rM++)
+             for (const iM of [!1, !0]) GM.set((0, jM.t)(MM, rM, iM), {
+               CH: MM,
+               mask: rM,
+               full: iM
+             })
+ ... (19 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L982` → after: `L577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/265.js#L577) · [Before (L982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/265.js#L982)

```diff
-         this.previousWorldMatrices = {}, this.previousBones = {}
+         this.reshapeOffsets = dM
```

#### 35. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L984-L985` → after: `L579-L580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L579-L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/265.js#L579-L580) · [Before (L984-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/265.js#L984-L985)

```diff
-       static AddUniforms(GG) {
-         GG.push("previousWorld", "previousViewProjection", "mPreviousBones")
+       handles(MM) {
+         return null !== UM(MM)
```

#### 36. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L987-L993` → after: `L582-L584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L582-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/265.js#L582-L584) · [Before (L987-L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/265.js#L987-L993)

```diff
-       static AddSamplers(GG) {}
-       bindForSubMesh(GG, bG, ZG, wG, SG) {
-         if (bG.prePassRenderer && bG.prePassRenderer.enabled && bG.prePassRenderer.currentRTisSceneRT && (-1 !== bG.prePassRenderer.getIndex(2) || -1 !== bG.prePassRenderer.getIndex(11))) {
-           this.previousWorldMatrices[ZG.uniqueId] || (this.previousWorldMatrices[ZG.uniqueId] = wG.clone()), this.previousViewProjection || (this.previousViewProjection = bG.getTransformMatrix().clone(), this.currentViewProjection = bG.getTransformMatrix().clone());
-           const SG = bG.CK();
-           this.currentViewProjection.updateFlag !== bG.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = SG.frameId, this.previousViewProjection.oW(this.currentViewProjection), this.currentViewProjection.oW(bG.getTransformMatrix())) : this._lastUpdateFrameId !== SG.fra … [truncated]
-         }
+       affects(MM) {
+         var rM, iM;
+         return hM.has(null !== (rM = null === (iM = OM.k[MM]) || void 0 === iM ? void 0 : iM.meta.rootName) && void 0 !== rM ? rM : "")
```

#### 37. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L995-L1002` → after: `L586-L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L586-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/265.js#L586-L613) · [Before (L995-L1002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/265.js#L995-L1002)

```diff
-     }
-   },
-   40761: (GG, bG, ZG) => {
-     function wG(GG) {
-       return class extends GG {
-         constructor() {
-           super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, th … [truncated]
-         }
+       placedBy(MM) {
+         var rM;
+         return (null === (rM = OM.k[MM]) || void 0 === rM ? void 0 : rM.meta.rootName) === jM.e ? jM.h : null
+       }
+       shape(MM, rM, iM, SM, PM, QM) {
+         var zM, LM, mM;
+         const HM = null !== (zM = null === (LM = OM.k[PM]) || void 0 === LM ? void 0 : LM.name) && void 0 !== zM ? zM : "",
+           hM = QM || HM !== jM.h ? null !== (mM = (0, aM.Q)(HM)) && void 0 !== mM ? mM : "water" : function(MM, rM, iM, OM) {
+             return dM.some(((SM, jM) => {
+               let [PM, QM, zM] = SM;
+               const LM = lM(MM(rM + PM, iM + QM, OM + zM), "cryo");
+               return null !== LM && "port" !== LM.kind && (0, aM.V)(nM, LM, yM[jM])
+             })) ? "cryo" : "water"
+           }(MM, rM, iM, SM),
+           JM = function(MM, rM, iM, OM) {
+             let SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
+ ... (12 more added lines; see GitHub link above)
```

#### 38. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1009` → after: `L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/265.js#L617) · [Before (L1009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/265.js#L1009)

```diff
-   40644: (GG, bG, ZG) => {
+   39168: (MM, rM, iM) => {
```

#### 39. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1011-L1019` → after: `L619-L620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L619-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/265.js#L619-L620) · [Before (L1011-L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/265.js#L1011-L1019)

```diff
-       StandardMaterial: () => wG.e
-     });
-     var wG = ZG(40648);
-     (0, wG.b)()
-   },
-   40648: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       b: () => PG,
-       e: () => lG
+       c: () => OM,
+       f: () => jM
```

#### 40. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1021-L2674` → after: `L622-L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L622-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/265.js#L622-L641) · [Before (L1021-L2674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/265.js#L1021-L2674)

```diff
-     var wG = ZG(40393),
-       SG = ZG(40398),
-       LG = ZG(40484),
-       yG = ZG(40475),
-       kG = ZG(37621),
-       UG = ZG(40524),
-       YG = ZG(40655),
-       VG = ZG(40658),
-       pG = ZG(40491),
-       fG = ZG(40664),
-       QG = ZG(40660),
-       KG = ZG(40720),
-       hG = ZG(40717),
-       dG = ZG(40725),
-       JG = ZG(40727),
-       rG = ZG(40709),
- ... (1638 more removed lines; see GitHub link above)
+     const OM = ["Chest", "Loot Chest", "Moonstone Chest"],
+       SM = [{
+         name: "Workbench",
+         exactMatch: !0
+       }, {
+         name: "Furnace",
+         exactMatch: !0
+       }, {
+         name: "Artisan Bench",
+         exactMatch: !0
+       }, {
+         name: "Potion Table",
+         exactMatch: !0
+       }, {
+         name: "Salvaging Table",
+         exactMatch: !0
+ ... (4 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2683-L2729` → after: `L644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/265.js#L644) · [Before (L2683-L2729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/265.js#L2683-L2729)

```diff
-       return class extends GG {
-         constructor() {
-           super(...arguments), this.MAINUV1 = !1, this.MAINUV2 = !1, this.MAINUV3 = !1, this.MAINUV4 = !1, this.MAINUV5 = !1, this.MAINUV6 = !1, this.UV1 = !1, this.UV2 = !1, this.UV3 = !1, this.UV4 = !1, this.UV5 = !1, this.UV6 = !1
-         }
-       }
-     }
-     ZG.d(bG, {
-       d: () => wG
-     })
-   },
-   40747: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       c: () => wG
-     });
-     class wG {
-       constructor(GG, bG) {
- ... (31 more removed lines; see GitHub link above)
+       return SM.find((rM => rM.exactMatch ? MM === rM.name : MM.includes(rM.name)))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/266.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/266.js` (141 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e)

#### 1. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L4` → after: `L4-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L4-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L4-L12) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L4)

```diff
-   40678: (GG, bG, ZG) => {
+   40140: (MM, rM, iM) => {
+     function OM(MM) {
+       return !(!MM.lobbyLeaderboardInfo && !MM.lobbyManage)
+     }
+     iM.d(rM, {
+       d: () => OM
+     })
+   },
+   40059: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L6` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L14) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L6)

```diff
-       b: () => wG
+       c: () => jM
```

#### 3. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L8-L11` → after: `L16-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L16-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L16-L33) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L8-L11)

```diff
-     class wG {
-       constructor(GG, bG, ZG) {
-         this.bu = GG, this.bv = bG, this.distance = ZG, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
-       }
+     var OM = iM(22),
+       SM = iM(2067);
+ 
+     function jM(MM) {
+       let {
+         taskId: rM,
+         progress: iM
+       } = MM;
+       const OM = SM.d.get("_tasks");
+       null !== OM && void 0 !== OM && OM[rM] && SM.d.apply({
+         _tasks: {
+           ...OM,
+           [rM]: {
+             ...OM[rM],
+             progress: iM
+           }
+ ... (2 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L14` → after: `L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L39) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L14)

```diff
-   40683: (GG, bG, ZG) => {
+   40004: (MM, rM, iM) => {
```

#### 5. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L16` → after: `L41-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L41-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L41-L43) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L16)

```diff
-       c: () => yG
+       e: () => Mi,
+       i: () => Vr,
+       k: () => cr
```

#### 6. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L18-L20` → after: `L45-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L45-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L45-L54) · [Before (L18-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L18-L20)

```diff
-     var wG = ZG(37448),
-       SG = ZG(37439),
-       LG = ZG(37443);
+     var OM = iM(4069),
+       SM = iM(143),
+       jM = iM(181),
+       aM = iM(632),
+       PM = iM(30),
+       nM = iM(3063),
+       QM = iM(4129),
+       zM = iM(4118),
+       LM = iM(1229);
+     const mM = new WeakMap;
```

#### 7. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L22-L23` → after: `L56-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L56-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L56-L94) · [Before (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L22-L23)

```diff
-       constructor(GG, bG, ZG) {
-         this.vectors = (0, wG.d)(8, SG.p.Zero), this.center = SG.p.Zero(), this.centerWorld = SG.p.Zero(), this.extendSize = SG.p.Zero(), this.extendSizeWorld = SG.p.Zero(), this.directions = (0, wG.d)(3, SG.p.Zero), this.vectorsWorld = (0, wG.d)(8, SG.p.Zero), this.minimumWorld  … [truncated]
+       constructor(MM, rM) {
+         let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
+           sQM: !0
+         };
+         this.callbacks = rM, this.options = iM, this.RiM = void 0, this.sessionId = void 0, this.fR = [], this.DQM = !1, this.dh = !1, this.kQM = void 0, this.oR = 0, this.pSM = 0, this.ZQM = (MM, rM) => {
+           if (this.dh) return;
+           const iM = Number(MM);
+           this.DQM ? this.oQM(iM, rM) : this.fR.push({
+             id: iM,
+             payload: rM
+           })
+         }, this.dispose = () => {
+           this.dh || (this.dh = !0, mM.delete(this), this.fR.length = 0, this.kQM())
+         }, this.RiM = MM, this.sessionId = MM.sessionId, mM.set(this, []), this.kQM = this.fQM()
+       }
+       YQM(MM) {
+ ... (23 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L25-L63` → after: `L96-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L96-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L96-L119) · [Before (L25-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L25-L63)

```diff
-       reConstruct(GG, bG, ZG) {
-         const wG = GG.x,
-           LG = GG.y,
-           yG = GG.z,
-           kG = bG.x,
-           UG = bG.y,
-           YG = bG.z,
-           VG = this.vectors;
-         this.minimum.fGG(wG, LG, yG), this.maximum.fGG(kG, UG, YG), VG[0].fGG(wG, LG, yG), VG[1].fGG(kG, UG, YG), VG[2].fGG(kG, LG, yG), VG[3].fGG(wG, UG, yG), VG[4].fGG(wG, LG, YG), VG[5].fGG(kG, UG, yG), VG[6].fGG(wG, UG, YG), VG[7].fGG(kG, LG, YG), bG.addToRef(GG, this.center) … [truncated]
-       }
-       scale(GG) {
-         const bG = yG._TmpVector3,
-           ZG = this.maximum.subtractToRef(this.minimum, bG[0]),
-           wG = ZG.length();
-         ZG.normalizeFromLength(wG);
-         const SG = wG * GG,
- ... (23 more removed lines; see GitHub link above)
+       vQM() {
+         for (const {
+             id: MM,
+             payload: rM
+           }
+           of this.fR) {
+           if (this.dh) break;
+           this.oQM(MM, rM)
+         }
+         this.fR.length = 0
+       }
+       xG() {
+         return this.dh
+       }
+       FQM() {
+         if (this.DQM || this.dh) throw new Error("Trying to getOnMessageRegistrationHandler after registration finished");
+ ... (8 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L69-L70` → after: `L123-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L123-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L123-L128) · [Before (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L69-L70)

```diff
-       isInFrustum(GG) {
-         return yG.IsInFrustum(this.vectorsWorld, GG)
+       TE(MM, rM) {
+         var iM, OM;
+         null === (iM = (OM = this.callbacks).BQM) || void 0 === iM || iM.call(OM);
+         const SM = mM.get(this);
+         for (; MM > SM.length;) SM[SM.length] = null;
+         SM[MM] = rM
```

#### 10. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L72-L73` → after: `L130-L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L130-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L130-L131) · [Before (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L72-L73)

```diff
-       isCompletelyInFrustum(GG) {
-         return yG.IsCompletelyInFrustum(this.vectorsWorld, GG)
+       send(MM, rM) {
+         this.XQM(), (0, LM.G)(rM) ? this.RiM.Xp(MM, rM) : this.RiM.send(MM, rM)
```

#### 11. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L75-L88` → after: `L133-L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L133-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L133-L135) · [Before (L75-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L75-L88)

```diff
-       intersectsPoint(GG) {
-         const bG = this.minimumWorld,
-           ZG = this.maximumWorld,
-           wG = bG.x,
-           SG = bG.y,
-           yG = bG.z,
-           kG = ZG.x,
-           UG = ZG.y,
-           YG = ZG.z,
-           VG = GG.x,
-           pG = GG.y,
-           fG = GG.z,
-           QG = -LG.d;
-         return !(kG - VG < QG || QG > VG - wG) && (!(UG - pG < QG || QG > pG - SG) && !(YG - fG < QG || QG > fG - yG))
+       XQM() {
+         var MM, rM;
+         (this.pSM++, 5 === hM++) && (null === (MM = (rM = this.callbacks).BQM) || void 0 === MM || MM.call(rM), hM = 0)
```

#### 12. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L90-L91` → after: `L137-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L137-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L137-L138) · [Before (L90-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L90-L91)

```diff
-       intersectsSphere(GG) {
-         return yG.IntersectsSphere(this.minimumWorld, this.maximumWorld, GG.centerWorld, GG.radiusWorld)
+       aE() {
+         this.dispose(), this.RiM.aE()
```

#### 13. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L93-L108` → after: `L140-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L140-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L140-L141) · [Before (L93-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L93-L108)

```diff
-       intersectsMinMax(GG, bG) {
-         const ZG = this.minimumWorld,
-           wG = this.maximumWorld,
-           SG = ZG.x,
-           LG = ZG.y,
-           yG = ZG.z,
-           kG = wG.x,
-           UG = wG.y,
-           YG = wG.z,
-           VG = GG.x,
-           pG = GG.y,
-           fG = GG.z,
-           QG = bG.x,
-           KG = bG.y,
-           hG = bG.z;
-         return !(kG < VG || SG > QG) && (!(UG < pG || LG > KG) && !(YG < fG || yG > hG))
+       leave() {
+         this.dispose(), this.RiM.leave()
```

#### 14. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L110-L111` → after: `L143-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L143-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L143-L158) · [Before (L110-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L110-L111)

```diff
-       dispose() {
-         this._drawWrapperFront?.dispose(), this._drawWrapperBack?.dispose()
+     }
+     let hM = 0;
+     var JM = iM(4086);
+     class dM extends HM {
+       constructor(MM) {
+         super(MM, {
+           BQM: () => {
+             (0, PM.l)(!0) && (0, OM.uR)()
+           },
+           AQM: (MM, rM) => {
+             var iM;
+             null === (iM = (0, nM.f)()) || void 0 === iM || iM.GJ(MM, rM)
+           }
+         }, {
+           sQM: !1
+         }), (0, JM.d)(MM)
```

#### 15. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L113-L114` → after: `L160-L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L160-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L160-L161) · [Before (L113-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L113-L114)

```diff
-       static Intersects(GG, bG) {
-         return GG.intersectsMinMax(bG.minimumWorld, bG.maximumWorld)
+       xR(MM, rM) {
+         return !!(0, JM.l)((0, JM.c)(), this.RiM, MM, rM) && (this.XQM(), !0)
```

#### 16. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L116-L119` → after: `L163-L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L163-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L163-L164) · [Before (L116-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L116-L119)

```diff
-       static IntersectsSphere(GG, bG, ZG, wG) {
-         const LG = yG._TmpVector3[0];
-         SG.p.ClampToRef(ZG, GG, bG, LG);
-         return SG.p.DistanceSquared(ZG, LG) <= wG * wG
+       YQM(MM) {
+         this.IQM(), super.YQM(MM), (0, JM.d)(MM)
```

#### 17. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L121-L127` → after: `L166-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L166-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L166-L167) · [Before (L121-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L121-L127)

```diff
-       static IsCompletelyInFrustum(GG, bG) {
-         for (let ZG = 0; ZG < 6; ++ZG) {
-           const wG = bG[ZG];
-           for (let bG = 0; bG < 8; ++bG)
-             if (wG.dotCoordinate(GG[bG]) < 0) return !1
-         }
-         return !0
+       aE() {
+         super.aE(), this.IQM()
```

#### 18. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L129-L139` → after: `L169-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L169-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L169-L170) · [Before (L129-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L129-L139)

```diff
-       static IsInFrustum(GG, bG) {
-         for (let ZG = 0; ZG < 6; ++ZG) {
-           let wG = !0;
-           const SG = bG[ZG];
-           for (let bG = 0; bG < 8; ++bG)
-             if (SG.dotCoordinate(GG[bG]) >= 0) {
-               wG = !1;
-               break
-             } if (wG) return !1
-         }
-         return !0
+       IQM() {
+         this.RiM.QE.PL.mD = void 0
```

#### 19. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L142-L150` → after: `L173-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L173-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L173-L223) · [Before (L142-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L142-L150)

```diff
-     yG._TmpVector3 = (0, wG.d)(3, SG.p.Zero)
-   },
-   40681: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       c: () => pG
-     });
-     var wG = ZG(37448),
-       SG = ZG(37439),
-       LG = ZG(40683);
+     var yM = iM(22),
+       lM = iM(2067),
+       EM = iM(1830),
+       UM = iM(37414),
+       GM = iM(40007),
+       CM = iM(39017),
+       eM = iM(38784),
+       bM = iM(625),
+       wM = iM(39406);
+ 
+     function tM(MM, rM, iM) {
+       const OM = function(MM) {
+           const rM = new Int32Array(MM.length * wM.e);
+           return MM.forEach(((MM, iM) => {
+             const OM = iM * wM.e;
+             if (4 === MM.length) {
+ ... (35 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L152-L180` → after: `L225-L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L225-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L225-L448) · [Before (L152-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L152-L180)

```diff
-       constructor(GG, bG, ZG) {
-         this.center = SG.p.Zero(), this.centerWorld = SG.p.Zero(), this.minimum = SG.p.Zero(), this.maximum = SG.p.Zero(), this.reConstruct(GG, bG, ZG)
-       }
-       reConstruct(GG, bG, ZG) {
-         this.minimum.oW(GG), this.maximum.oW(bG);
-         const wG = SG.p.Distance(GG, bG);
-         bG.addToRef(GG, this.center).scaleInPlace(.5), this.radius = .5 * wG, this._update(ZG || SG.e.IdentityReadOnly)
-       }
-       scale(GG) {
-         const bG = yG._TmpVector3,
-           ZG = this.maximum.subtractToRef(this.minimum, bG[0]),
-           wG = ZG.length();
-         ZG.normalizeFromLength(wG);
-         const SG = wG * GG,
-           LG = ZG.scaleInPlace(.5 * SG),
-           kG = this.center.subtractToRef(LG, bG[1]),
- ... (13 more removed lines; see GitHub link above)
+       constructor(MM) {
+         this.Cm = MM
+       }
+       register(MM) {
+         const rM = this.Cm,
+           iM = (0, nM.b)();
+         MM.TE(QM.Z, (MM => {
+           rM.uL.liM.add(MM), rM.uL.GiM.delete(MM)
+         })), MM.TE(QM.fb, (MM => {
+           rM.uL.GiM.add(MM), rM.uL.liM.delete(MM)
+         })), MM.TE(QM.Xd, (MM => {
+           rM.uL.GiM.delete(MM), rM.uL.liM.delete(MM)
+         })), MM.TE(QM.db, (MM => {
+           rM.uL.EiM.add(MM), rM.uL.CiM.delete(MM)
+         })), MM.TE(QM.hb, (MM => {
+           rM.uL.CiM.add(MM), rM.uL.EiM.delete(MM)
+ ... (208 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L182-L187` → after: `L450-L527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L450-L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L450-L527) · [Before (L182-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L182-L187)

```diff
-       isInFrustum(GG) {
-         const bG = this.centerWorld,
-           ZG = this.radiusWorld;
-         for (let wG = 0; wG < 6; wG++)
-           if (GG[wG].dotCoordinate(bG) <= -ZG) return !1;
-         return !0
+     }
+     var ZM = iM(40028),
+       oM = iM(38097),
+       fM = iM(4560),
+       YM = iM(39083),
+       NM = iM(37699),
+       AM = iM(37705),
+       xM = iM(38010),
+       vM = iM(38130),
+       FM = iM(39092),
+       BM = iM(40032);
+     class XM {
+       constructor(MM, rM) {
+         this.Cm = MM, this.setUpQueuedEntity = rM
+       }
+       register(MM) {
+ ... (62 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L189-L193` → after: `L529-L534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L529-L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L529-L534) · [Before (L189-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L189-L193)

```diff
-       isCenterInFrustum(GG) {
-         const bG = this.centerWorld;
-         for (let ZG = 0; ZG < 6; ZG++)
-           if (GG[ZG].dotCoordinate(bG) < 0) return !1;
-         return !0
+     }
+     var IM = iM(38764),
+       KM = iM(38735);
+     class qM {
+       constructor(MM) {
+         this.Cm = MM
```

#### 23. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L195-L197` → after: `L536-L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L536-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L536-L653) · [Before (L195-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L195-L197)

```diff
-       intersectsPoint(GG) {
-         const bG = SG.p.DistanceSquared(this.centerWorld, GG);
-         return !(this.radiusWorld * this.radiusWorld < bG)
+       register(MM) {
+         const rM = this.Cm,
+           iM = (0, nM.b)();
+ 
+         function OM() {
+           return rM.hU.RrM(rM.eD)
+         }
+         MM.TE(QM.jc, (MM => {
+           let {
+             zi: iM,
+             Li: OM,
+             mi: SM,
+             Hi: jM,
+             Ji: aM,
+             di: PM,
+             yi: nM,
+ ... (102 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L199-L202` → after: `L655-L785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L655-L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L655-L785) · [Before (L199-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L199-L202)

```diff
-       static Intersects(GG, bG) {
-         const ZG = SG.p.DistanceSquared(GG.centerWorld, bG.centerWorld),
-           wG = GG.radiusWorld + bG.radiusWorld;
-         return !(wG * wG < ZG)
+     }
+     var TM = iM(6944),
+       VM = iM(38576),
+       cM = iM(347),
+       Mr = iM.n(cM),
+       rr = iM(4906),
+       ir = iM(38670),
+       Or = iM(39258),
+       Sr = iM(38572);
+     class jr {
+       constructor(MM, rM) {
+         this.Cm = MM, this.setUpQueuedEntity = rM
+       }
+       register(MM) {
+         const rM = this.Cm,
+           iM = (0, nM.b)();
+ ... (115 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L204-L207` → after: `L787-L840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L787-L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L787-L840) · [Before (L204-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L204-L207)

```diff
-       static CreateFromCenterAndRadius(GG, bG, ZG) {
-         this._TmpVector3[0].oW(GG), this._TmpVector3[1].fGG(0, 0, bG), this._TmpVector3[2].oW(GG), this._TmpVector3[0].addInPlace(this._TmpVector3[1]), this._TmpVector3[2].twG(this._TmpVector3[1]);
-         const wG = new yG(this._TmpVector3[0], this._TmpVector3[2]);
-         return wG._worldMatrix = ZG || SG.e.Identity(), wG
+     }
+ 
+     function ar(MM, rM, iM, OM, SM) {
+       let jM = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+       if (!MM.hU.urM(MM.eD)) return console.log("Got resync inven but don't have inven component"), void rM.acknowledge(OM);
+       jM && console.error("Had to sync inven"), rM.rMM(OM, SM) && iM.Tz("chestToggleFromServer", !1, !0), iM.Tz("syncedInvenFromServer")
+     }
+     var Pr = iM(40043),
+       nr = iM(40048),
+       Qr = iM(2074);
+     var zr = iM(4887);
+ 
+     function Lr(MM) {
+       const rM = MM.uL;
+       let iM = 0,
+         SM = -1,
+ ... (38 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L210-L224` → after: `L843-L848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L843-L848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L843-L848) · [Before (L210-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L210-L224)

```diff
-     yG._TmpVector3 = (0, wG.d)(3, SG.p.Zero);
-     const kG = {
-         min: 0,
-         max: 0
-       },
-       UG = {
-         min: 0,
-         max: 0
-       },
-       YG = (GG, bG, ZG) => {
-         const wG = SG.p.Dot(bG.centerWorld, GG),
-           LG = Math.abs(SG.p.Dot(bG.directions[0], GG)) * bG.extendSize.x + Math.abs(SG.p.Dot(bG.directions[1], GG)) * bG.extendSize.y + Math.abs(SG.p.Dot(bG.directions[2], GG)) * bG.extendSize.z;
-         ZG.min = wG - LG, ZG.max = wG + LG
-       },
-       VG = (GG, bG, ZG) => (YG(GG, bG, kG), YG(GG, ZG, UG), !(kG.min > UG.max || UG.min > kG.max));
+     var mr = iM(40053),
+       Hr = iM(1591),
+       hr = iM(3057),
+       Jr = iM(1911),
+       dr = iM(3241),
+       yr = iM(5184);
```

#### 27. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L227` → after: `L851-L1024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L851-L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L851-L1024) · [Before (L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L227)

```diff
-         this._isLocked = !1, this.boundingBox = new LG.c(GG, bG, ZG), this.xwG = new yG(GG, bG, ZG)
+         this.Cm = MM, this.gameNameWithVariation = rM, this.connectionResume = iM, this.stopChunkReports = () => {}, this.replayResume = null
+       }
+       clearUiRequestsAndQTEs() {
+         yr.d.reset(), (0, Pr.b)()
+       }
+       startChunkReports() {
+         const MM = function(MM) {
+             let rM = null,
+               iM = -1 / 0,
+               SM = null;
+             const jM = () => {
+                 SM = null;
+                 const jM = Math.ceil(MM.jW[0]),
+                   aM = Math.ceil(MM.jW[1]);
+                 rM && rM[0] === jM && rM[1] === aM || (rM = [jM, aM], iM = performance.now(), (0, OM.sendColyMessage)(QM.tg, {
+                   la: jM,
+ ... (158 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L229-L230` → after: `L1026-L1183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1026-L1183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L1026-L1183) · [Before (L229-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L229-L230)

```diff
-       reConstruct(GG, bG, ZG) {
-         this.boundingBox.reConstruct(GG, bG, ZG), this.xwG.reConstruct(GG, bG, ZG)
+     }
+     var Er = iM(40059),
+       Ur = iM(40073),
+       Gr = iM(1073),
+       Cr = iM(40065),
+       er = iM(2633),
+       br = iM(4019);
+     class wr {
+       constructor(MM, rM) {
+         this.Cm = MM, this.clientApi = rM
+       }
+       register(MM) {
+         const rM = this.Cm,
+           iM = (0, nM.b)();
+         MM.TE(QM.nb, (MM => {
+           let {
+ ... (142 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L232-L233` → after: `L1185-L1188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1185-L1188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L1185-L1188) · [Before (L232-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L232-L233)

```diff
-       get minimum() {
-         return this.boundingBox.minimum
+     }
+     class tr {
+       constructor(MM, rM, iM, OM) {
+         this.gameNameWithVariation = MM, this.Cm = iM, this.connectionResume = OM, this.stateReplicationHandler = void 0, this.stateReplicationHandler = new GM.d(rM, this.Cm)
```

#### 30. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L235-L236` → after: `L1190-L1193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1190-L1193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L1190-L1193) · [Before (L235-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L235-L236)

```diff
-       get maximum() {
-         return this.boundingBox.maximum
+       setupStateReplicationHandlers() {
+         this.stateReplicationHandler.setup(), (0, OM.onGameResetOnce)((() => {
+           this.stateReplicationHandler.dispose()
+         }))
```

#### 31. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L238-L239` → after: `L1195-L1196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1195-L1196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L1195-L1196) · [Before (L238-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L238-L239)

```diff
-       get isLocked() {
-         return this._isLocked
+       YQM(MM) {
+         this.stateReplicationHandler.dispose(), this.stateReplicationHandler = new GM.d(MM, this.Cm), this.stateReplicationHandler.setup()
```

#### 32. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L241-L242` → after: `L1198-L1203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1198-L1203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L1198-L1203) · [Before (L241-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L241-L242)

```diff
-       set isLocked(GG) {
-         this._isLocked = GG
+       setupOnMessageListeners(MM, rM) {
+         const iM = this.Cm,
+           OM = MM => {
+             this.stateReplicationHandler.setUpIfQueued(MM)
+           };
+         new lr(iM, this.gameNameWithVariation, this.connectionResume).register(MM), new uM(iM).register(MM), new qM(iM).register(MM), new kM(iM, OM).register(MM), new XM(iM, OM).register(MM), new wr(iM, rM).register(MM), new jr(iM, OM).register(MM)
```

#### 33. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L244-L245` → after: `L1205-L1230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1205-L1230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L1205-L1230) · [Before (L244-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L244-L245)

```diff
-       update(GG) {
-         this._isLocked || (this.boundingBox._update(GG), this.xwG._update(GG))
+     }
+     window.addEventListener("beforeunload", (() => {}));
+     var gr = iM(40077),
+       ur = iM(40079),
+       Rr = iM(673),
+       pr = iM(3258);
+     class Wr {
+       constructor(MM, rM, iM, OM) {
+         this.msgHandler = iM, this.listener = OM, this.session = void 0, this.attachedRoom = null, this.detachRoomListeners = null, this.suspended = !1, this.droppedAt = 0, this.session = new gr.e({
+           reconnect: MM,
+           isLive: () => OM.isLive(),
+           onReconnected: MM => {
+             this.resumeOnRoom(MM)
+           },
+           onGaveUp: (MM, rM) => {
+             OM.onGaveUp(MM, rM)
+ ... (10 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L247-L250` → after: `L1232-L1233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1232-L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L1232-L1233) · [Before (L247-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L247-L250)

```diff
-       centerOn(GG, bG) {
-         const ZG = pG._TmpVector3[0].oW(GG).twG(bG),
-           wG = pG._TmpVector3[1].oW(GG).addInPlace(bG);
-         return this.boundingBox.reConstruct(ZG, wG, this.boundingBox.getWorldMatrix()), this.xwG.reConstruct(ZG, wG, this.boundingBox.getWorldMatrix()), this
+       onInitialInfo(MM, rM) {
+         this.session.onInitialInfo(MM, rM)
```

#### 35. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L252-L255` → after: `L1235-L1236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1235-L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L1235-L1236) · [Before (L252-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L252-L255)

```diff
-       encapsulate(GG) {
-         const bG = SG.p.Minimize(this.minimum, GG),
-           ZG = SG.p.Maximize(this.maximum, GG);
-         return this.reConstruct(bG, ZG, this.boundingBox.getWorldMatrix()), this
+       isResuming() {
+         return this.session.isResuming()
```

#### 36. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L257-L261` → after: `L1238-L1239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1238-L1239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L1238-L1239) · [Before (L257-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L257-L261)

```diff
-       encapsulateBoundingInfo(GG) {
-         const bG = SG.j.Matrix[0];
-         this.boundingBox.getWorldMatrix().invertToRef(bG);
-         const ZG = SG.j.mK[0];
-         return SG.p.TransformCoordinatesToRef(GG.boundingBox.minimumWorld, bG, ZG), this.encapsulate(ZG), SG.p.TransformCoordinatesToRef(GG.boundingBox.maximumWorld, bG, ZG), this.encapsulate(ZG), this
+       getDroppedAt() {
+         return this.droppedAt
```

#### 37. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L263-L264` → after: `L1241-L1249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1241-L1249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L1241-L1249) · [Before (L263-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L263-L264)

```diff
-       scale(GG) {
-         return this.boundingBox.scale(GG), this.xwG.scale(GG), this
+       onResumeInitialInfo(MM, rM) {
+         if (this.session.onResuming(), null === MM) {
+           try {
+             (0, nM.b)().client.itemDropPrediction.reset()
+           } catch (iM) {
+             console.error("Error dropping the item drop predictions on resuming", iM)
+           }
+           return OM.offlineInputReplay.discard(), void this.setSuspended(!1)
+         }(0, nM.b)().client.itemDropPrediction.onResumeReplayOffered(), OM.offlineInputReplay.replayFrom(MM.Vj, rM)
```

#### 38. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L266-L270` → after: `L1251-L1277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1251-L1277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L1251-L1277) · [Before (L266-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L266-L270)

```diff
-       isInFrustum(GG) {
-         let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         if ((2 === bG || 3 === bG) && this.xwG.isCenterInFrustum(GG)) return !0;
-         if (!this.xwG.isInFrustum(GG)) return !1;
-         return !(1 !== bG && 3 !== bG) || this.boundingBox.isInFrustum(GG)
+       onResumed(MM) {
+         this.setSuspended(!1), (0, OM.resendBeacons)();
+         try {
+           MM()
+         } catch (rM) {
+           console.error("Error completing the resume", rM)
+         } finally {
+           this.session.onResumed()
+         }
+       }
+       attachRoom(MM) {
+         const rM = (0, Rr.h)((() => MM.connection.isOpen));
+         MM.rU(rM);
+         const iM = new ur.b((() => {
+           this.session.canHoldSeat() && this.listener.isLive() && (console.warn("The game server went silent, reconnecting"), this.onConnectionDropped(MM, "silent"), MM.leave(!1))
+         }));
+ ... (11 more added lines; see GitHub link above)
```

#### 39. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L272-L274` → after: `L1279-L1280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1279-L1280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L1279-L1280) · [Before (L272-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L272-L274)

```diff
-       get diagonalLength() {
-         const GG = this.boundingBox;
-         return GG.maximumWorld.subtractToRef(GG.minimumWorld, pG._TmpVector3[0]).length()
+       dispose() {
+         this.detachRoom(), this.session.leave(), this.setSuspended(!1)
```

#### 40. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L276-L277` → after: `L1282-L1283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1282-L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L1282-L1283) · [Before (L276-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L276-L277)

```diff
-       isCompletelyInFrustum(GG) {
-         return this.boundingBox.isCompletelyInFrustum(GG)
+       setSuspended(MM) {
+         MM !== this.suspended && (this.suspended = MM, (0, OM.setConnectionSuspended)(MM), (0, nM.b)().client.itemDropPrediction.setSuspended(MM))
```

#### 41. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L279-L280` → after: `L1285-L1287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1285-L1287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L1285-L1287) · [Before (L279-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L279-L280)

```diff
-       _checkCollision(GG) {
-         return GG._canDoCollision(this.xwG.centerWorld, this.xwG.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
+       detachRoom() {
+         var MM;
+         null === (MM = this.detachRoomListeners) || void 0 === MM || MM.call(this), this.detachRoomListeners = null, this.attachedRoom = null
```

#### 42. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L282-L283` → after: `L1289-L1290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1289-L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L1289-L1290) · [Before (L282-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L282-L283)

```diff
-       intersectsPoint(GG) {
-         return !!this.xwG.centerWorld && (!!this.xwG.intersectsPoint(GG) && !!this.boundingBox.intersectsPoint(GG))
+       onConnectionDropped(MM, rM) {
+         (0, pr.reportClientError)("disconnect", "Left room", rM), this.isResuming() || (this.droppedAt = Date.now()), this.detachRoom(), OM.offlineInputReplay.onConnectionLost(), this.setSuspended(!0), this.session.onConnectionLost(MM.reconnectionToken)
```

#### 43. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L285-L291` → after: `L1292-L1294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1292-L1294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L1292-L1294) · [Before (L285-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L285-L291)

```diff
-       intersects(GG, bG) {
-         if (!yG.Intersects(this.xwG, GG.xwG)) return !1;
-         if (!LG.c.Intersects(this.boundingBox, GG.boundingBox)) return !1;
-         if (!bG) return !0;
-         const ZG = this.boundingBox,
-           wG = GG.boundingBox;
-         return !!VG(ZG.directions[0], ZG, wG) && (!!VG(ZG.directions[1], ZG, wG) && (!!VG(ZG.directions[2], ZG, wG) && (!!VG(wG.directions[0], ZG, wG) && (!!VG(wG.directions[1], ZG, wG) && (!!VG(wG.directions[2], ZG, wG) && (!!VG(SG.p.Cross(ZG.directions[0], wG.directions[0]), ZG … [truncated]
+       resumeOnRoom(MM) {
+         if (!this.listener.isLive()) return console.warn("Left the game while reconnecting, leaving the resumed room"), MM.leave(!0), void this.dispose();
+         console.log("Reconnected to the game server, waiting for the game to resume"), (0, BM.p)(), OM.offlineInputReplay.onConnectionReplaced(), this.msgHandler.YQM(MM), this.listener.onReconnected(MM), this.attachRoom(MM)
```

#### 44. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L294-L304` → after: `L1297-L1312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1297-L1312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L1297-L1312) · [Before (L294-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L294-L304)

```diff
-     pG._TmpVector3 = (0, wG.d)(2, SG.p.Zero)
-   },
-   40709: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       b: () => LG,
-       e: () => UG,
-       i: () => kG,
-       k: () => yG
-     });
-     var wG = ZG(40532),
-       SG = ZG(37439);
+     var sr = iM(3324),
+       Dr = iM(3333),
+       kr = iM(1373),
+       Zr = iM(1327),
+       or = iM(5052),
+       fr = iM(3563),
+       Yr = iM(1329),
+       Nr = iM(38692),
+       Ar = iM(40087),
+       xr = iM(9510),
+       vr = iM(40089),
+       Fr = iM(1215),
+       Br = iM(37437),
+       Xr = iM(40094),
+       Ir = iM(1818),
+       Kr = iM(3070);
```

#### 45. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L307-L328` → after: `L1315-L1325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1315-L1325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L1315-L1325) · [Before (L307-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L307-L328)

```diff
-       -1 === GG.indexOf("vClipPlane") && GG.push("vClipPlane"), -1 === GG.indexOf("vClipPlane2") && GG.push("vClipPlane2"), -1 === GG.indexOf("vClipPlane3") && GG.push("vClipPlane3"), -1 === GG.indexOf("vClipPlane4") && GG.push("vClipPlane4"), -1 === GG.indexOf("vClipPlane5") &&  … [truncated]
-     }
- 
-     function yG(GG, bG, ZG) {
-       const wG = !!(GG.clipPlane ?? bG.clipPlane),
-         SG = !!(GG.clipPlane2 ?? bG.clipPlane2),
-         LG = !!(GG.clipPlane3 ?? bG.clipPlane3),
-         yG = !!(GG.clipPlane4 ?? bG.clipPlane4),
-         kG = !!(GG.clipPlane5 ?? bG.clipPlane5),
-         UG = !!(GG.clipPlane6 ?? bG.clipPlane6);
-       wG && ZG.push("#define CLIPPLANE"), SG && ZG.push("#define CLIPPLANE2"), LG && ZG.push("#define CLIPPLANE3"), yG && ZG.push("#define CLIPPLANE4"), kG && ZG.push("#define CLIPPLANE5"), UG && ZG.push("#define CLIPPLANE6")
-     }
- 
-     function kG(GG, bG, ZG) {
-       let wG = !1;
-       const SG = !!(GG.clipPlane ?? bG.clipPlane),
- ... (6 more removed lines; see GitHub link above)
+       var rM, iM;
+       if ("object" !== typeof MM || null === MM) return {
+         errType: typeof MM
+       };
+       const OM = MM;
+       return {
+         errType: null !== (rM = null === (iM = MM.constructor) || void 0 === iM ? void 0 : iM.name) && void 0 !== rM ? rM : "",
+         errName: "string" === typeof OM.name ? OM.name : "",
+         eventType: "string" === typeof OM.type ? OM.type : "",
+         errStack: "string" === typeof OM.stack ? OM.stack.split("\n").slice(1).join(" | ") : ""
+       }
```

#### 46. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L331-L334` → after: `L1328-L1336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1328-L1336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L1328-L1336) · [Before (L331-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L331-L334)

```diff
-     function UG(GG, bG, ZG) {
-       let wG = bG.clipPlane ?? ZG.clipPlane;
-       YG(GG, "vClipPlane", wG), wG = bG.clipPlane2 ?? ZG.clipPlane2, YG(GG, "vClipPlane2", wG), wG = bG.clipPlane3 ?? ZG.clipPlane3, YG(GG, "vClipPlane3", wG), wG = bG.clipPlane4 ?? ZG.clipPlane4, YG(GG, "vClipPlane4", wG), wG = bG.clipPlane5 ?? ZG.clipPlane5, YG(GG, "vClipPlane5 … [truncated]
-     }
+     function Tr(MM) {
+       if ("undefined" !== typeof ProgressEvent && MM instanceof ProgressEvent) return !0;
+       if (!(MM instanceof Error)) return !1;
+       const rM = MM.code;
+       return "ServerError" === MM.name && void 0 === rM || "AbortError" === MM.name || "seat reservation expired." === MM.message || "early_leave" === MM.message
+     }(0, JM.o)((MM => {
+       (0, pr.reportClientError)("wasm_net", MM)
+     }));
+     let Vr = !0;
```

#### 47. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L336-L340` → after: `L1338-L1339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1338-L1339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L1338-L1339) · [Before (L336-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L336-L340)

```diff
-     function YG(GG, bG, ZG) {
-       if (ZG) {
-         const LG = wG.e.Dv()?.floatingOriginOffset || SG.p.ZeroReadOnly;
-         GG.setFloat4(bG, ZG.normal.x, ZG.normal.y, ZG.normal.z, ZG.d + SG.p.Dot(ZG.normal, LG))
-       }
+     function cr() {
+       Vr = !1
```

#### 48. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L348-L379` → after: `L1342-L1526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1342-L1526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L1342-L1526) · [Before (L348-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L348-L379)

```diff
-       constructor() {
-         this._defines = {}, this._currentRank = 32, this._maxRank = -1, this._mesh = null
-       }
-       unBindMesh() {
-         this._mesh = null
-       }
-       addFallback(GG, bG) {
-         this._defines[GG] || (GG < this._currentRank && (this._currentRank = GG), GG > this._maxRank && (this._maxRank = GG), this._defines[GG] = new Array), this._defines[GG].push(bG)
-       }
-       addCPUSkinningFallback(GG, bG) {
-         this._mesh = bG, GG < this._currentRank && (this._currentRank = GG), GG > this._maxRank && (this._maxRank = GG)
-       }
-       get hasMoreFallbacks() {
-         return this._currentRank <= this._maxRank
-       }
-       reduce(GG, bG) {
- ... (16 more removed lines; see GitHub link above)
+       constructor(MM) {
+         this.gameNameWithVariation = void 0, this.lobbyName = void 0, this.colyClient = void 0, this.userContext = void 0, this.joinedAt = null, this.joinAdHold = !1, this.checkSendPath = () => {}, this.Cm = void 0, this.connectionResume = void 0, this.incomingMsgInitialisor = vo … [truncated]
+       }
+       async connectToServer(MM, rM, iM) {
+         lM.d.reset(), MM.rY = {
+           [MM.eD]: {}
+         }, MM.IMM = void 0, (0, BM.p)(), (0, nM.b)().removeAllEntityNames(), (0, nM.b)().setEntityName(MM.eD, this.userContext.getPlayerName()), (0, kr.p)({
+           lobbyName: this.lobbyName
+         }), console.log("Waiting for clientConnection passed promise to resolve"), this.joinAdHold = (0, Ir.e)(), console.log("joining server with game", this.gameNameWithVariation, "lobbyName", this.lobbyName);
+         const aM = performance.now();
+         iM.aborted || (0, Zr.s)("wasm_core_ready", aM);
+         const PM = (0, vr.h)(this.userContext, (() => {
+           const {
+             roomName: OM,
+             joinOptions: SM
+           } = (0, UM.f)(this.userContext, this.gameNameWithVariation, this.lobbyName, rM, (MM => fr.e.isUsingCustomGameTexturePack(MM)));
+ ... (169 more added lines; see GitHub link above)
```

#### 49. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L387` → after: `L1529-L1543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1529-L1543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L1529-L1543) · [Before (L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L387)

```diff
-         return GG
+         return console.log("Didn't match known error, leaving game"), (0, Dr.d)(MM) || SM ? console.warn("Connection lost", MM, rM) : this.logUnrecognisedConnectionLoss(MM, rM, iM), {
+           reason: `Either your internet isn't working or this is a bug.\nCode: ${MM}`,
+           requiresRefresh: !1,
+           canReconnect: !1,
+           gameServerUnreachable: SM ? "failed" : void 0
+         }
+       }
+       logUnrecognisedConnectionLoss(MM, rM, iM) {
+         (0, Yr.CJ)(new Error("Unrecognised connection loss"), {
+           code: String(MM),
+           cause: null !== rM && void 0 !== rM ? rM : "",
+           ...iM,
+           game: this.gameNameWithVariation,
+           ...(0, Dr.h)()
+         })
```

#### 50. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L391` → after: `L1547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L1547) · [Before (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L391)

```diff
-   40664: (GG, bG, ZG) => {
+   40007: (MM, rM, iM) => {
```

#### 51. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L393` → after: `L1549-L1550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1549-L1550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L1549-L1550) · [Before (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L393)

```diff
-       e: () => rG
+       d: () => Ki,
+       f: () => rO
```

#### 52. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L395-L409` → after: `L1552-L1560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1552-L1560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L1552-L1560) · [Before (L395-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L395-L409)

```diff
-     var wG = ZG(40393),
-       SG = ZG(40398),
-       LG = ZG(40477),
-       yG = ZG(37465),
-       kG = ZG(37463),
-       UG = ZG(40673),
-       YG = ZG(40508),
-       VG = ZG(39093),
-       pG = ZG(38175),
-       fG = ZG(40697),
-       QG = ZG(40416);
-     let KG = (() => {
-       var GG;
-       let bG, ZG, LG, yG, kG, UG, YG, VG, pG, fG, KG, hG, dG = [];
-       return GG = class {
+     var OM, SM, jM, aM, PM, nM, QM, zM, LM, mM, HM, hM, JM, dM, yM, lM, EM, UM, GM, CM, eM, bM, wM, tM, gM, uM, RM, pM, WM, sM, DM, kM, ZM, oM, fM, YM, NM, AM, xM, vM, FM, BM, XM, IM, KM, qM, TM, VM, cM, Mr, rr, ir, Or, Sr, jr, ar, Pr, nr, Qr, zr, Lr, mr, Hr, hr, Jr, dr, yr, lr,  … [truncated]
+       cr = iM(38104),
+       Mi = iM(40016),
+       ri = iM(40024),
+       ii = iM(9726),
+       Oi = iM(620),
+       Si = iM(613),
+       ji = iM(37758);
+     let ai = (OM = (0, ii.type)("number"), SM = (0, ii.type)("number"), jM = (0, ii.type)("number"), aM = (0, ii.type)("number"), PM = (0, ii.type)("number"), nM = (0, ii.type)("number"), QM = (0, ii.type)("string"), zM = class extends ii.Schema {
```

#### 53. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L411` → after: `L1562-L1704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1562-L1704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L1562-L1704) · [Before (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L411)

```diff
-           this._func = (0, wG.n)(this, dG), this.reset()
+           super(...arguments), (0, Mi.d)(this, "id", LM, this), (0, Mi.d)(this, "amount", mM, this), (0, Mi.d)(this, "x", HM, this), (0, Mi.d)(this, "y", hM, this), (0, Mi.d)(this, "z", JM, this), (0, Mi.d)(this, "size", dM, this), (0, Mi.d)(this, "attributes", yM, this)
+         }
+       }, LM = (0, ri.e)(zM.prototype, "id", [OM], {
+         configurable: !0,
+         enumerable: !0,
+         writable: !0,
+         initializer: function() {
+           return 0
+         }
+       }), mM = (0, ri.e)(zM.prototype, "amount", [SM], {
+         configurable: !0,
+         enumerable: !0,
+         writable: !0,
+         initializer: function() {
+           return 0
+         }
+ ... (127 more added lines; see GitHub link above)
```

#### 54. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L413-L414` → after: `L1706-L1732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1706-L1732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L1706-L1732) · [Before (L413-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L413-L414)

```diff
-         reset() {
-           this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = 519, this.opStencilFail = 7680, this.opDepthFail = 7680, this.opStencilDepthPass = 7681, this.backFunc = 519, this.backOpStencilFail = 7680, this.backOpDepthFail = 7680, this.backOpSt … [truncated]
+       }), kM),
+       Qi = (IM = (0, ii.type)("float32"), KM = (0, ii.type)("float32"), qM = (0, ii.type)("boolean"), TM = (0, ii.type)("boolean"), VM = (0, ii.type)("float32"), cM = (0, ii.type)("boolean"), Mr = (0, ii.type)("string"), rr = (0, ii.type)("string"), ir = (0, ii.type)("string"), O … [truncated]
+         map: Pi
+       }), Pr = class extends ni {
+         constructor() {
+           super(...arguments), (0, Mi.d)(this, "scale", nr, this), (0, Mi.d)(this, "speed", Qr, this), (0, Mi.d)(this, "jumping", zr, this), (0, Mi.d)(this, "crouching", Lr, this), (0, Mi.d)(this, "cameraPitch", mr, this), (0, Mi.d)(this, "armSwinging", Hr, this), (0, Mi.d)(this, … [truncated]
+         }
+       }, nr = (0, ri.e)(Pr.prototype, "scale", [IM], {
+         configurable: !0,
+         enumerable: !0,
+         writable: !0,
+         initializer: function() {
+           return 1
+         }
+       }), Qr = (0, ri.e)(Pr.prototype, "speed", [KM], {
+         configurable: !0,
+ ... (11 more added lines; see GitHub link above)
```

#### 55. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L416-L417` → after: `L1734-L1739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1734-L1739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L1734-L1739) · [Before (L416-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L416-L417)

```diff
-         get func() {
-           return this._func
+       }), Lr = (0, ri.e)(Pr.prototype, "crouching", [TM], {
+         configurable: !0,
+         enumerable: !0,
+         writable: !0,
+         initializer: function() {
+           return !1
```

#### 56. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L419-L420` → after: `L1741-L1753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1741-L1753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L1741-L1753) · [Before (L419-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L419-L420)

```diff
-         set func(GG) {
-           this._func = GG
+       }), mr = (0, ri.e)(Pr.prototype, "cameraPitch", [VM], {
+         configurable: !0,
+         enumerable: !0,
+         writable: !0,
+         initializer: function() {
+           return 0
+         }
+       }), Hr = (0, ri.e)(Pr.prototype, "armSwinging", [cM], {
+         configurable: !0,
+         enumerable: !0,
+         writable: !0,
+         initializer: function() {
+           return !1
```

#### 57. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L422-L423` → after: `L1755-L1777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1755-L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L1755-L1777) · [Before (L422-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L422-L423)

```diff
-         get backFunc() {
-           return this._backFunc
+       }), hr = (0, ri.e)(Pr.prototype, "heldItemName", [Mr], {
+         configurable: !0,
+         enumerable: !0,
+         writable: !0,
+         initializer: null
+       }), Jr = (0, ri.e)(Pr.prototype, "heldItemEnchantmentTier", [rr], {
+         configurable: !0,
+         enumerable: !0,
+         writable: !0,
+         initializer: null
+       }), dr = (0, ri.e)(Pr.prototype, "pose", [ir], {
+         configurable: !0,
+         enumerable: !0,
+         writable: !0,
+         initializer: function() {
+           return "standing"
+ ... (7 more added lines; see GitHub link above)
```

#### 58. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L425-L426` → after: `L1779-L1817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1779-L1817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L1779-L1817) · [Before (L425-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L425-L426)

```diff
-         set backFunc(GG) {
-           this._backFunc = GG
+       }), lr = (0, ri.e)(Pr.prototype, "meshOffset", [Sr], {
+         configurable: !0,
+         enumerable: !0,
+         writable: !0,
+         initializer: function() {
+           return new ii.ArraySchema(0, 0, 0)
+         }
+       }), Er = (0, ri.e)(Pr.prototype, "baseRenderHeading", [jr], {
+         configurable: !0,
+         enumerable: !0,
+         writable: !0,
+         initializer: function() {
+           return 0
+         }
+       }), Ur = (0, ri.e)(Pr.prototype, "armour", [ar], {
+         configurable: !0,
+ ... (23 more added lines; see GitHub link above)
```

#### 59. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L428-L429` → after: `L1819-L2135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1819-L2135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L1819-L2135) · [Before (L428-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L428-L429)

```diff
-         get funcRef() {
-           return this._funcRef
+       }), ur = (0, ri.e)(wr.prototype, "metaInfo", [er], {
+         configurable: !0,
+         enumerable: !0,
+         writable: !0,
+         initializer: function() {
+           return ""
+         }
+       }), Rr = (0, ri.e)(wr.prototype, "aiState", [br], {
+         configurable: !0,
+         enumerable: !0,
+         writable: !0,
+         initializer: function() {
+           return 0
+         }
+       }), wr);
+     pr = (0, ii.type)("string"), Wr = (0, ii.type)("string"), sr = (0, ii.type)("string"), Dr = (0, ii.type)("string"), kr = class extends ni {
+ ... (301 more added lines; see GitHub link above)
```

#### 60. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L431-L432` → after: `L2137-L2178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2137-L2178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L2137-L2178) · [Before (L431-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L431-L432)

```diff
-         set funcRef(GG) {
-           this._funcRef = GG
+         const SM = null !== (rM = null === (iM = this.Cm.hU.GrM(this.eId)) || void 0 === iM ? void 0 : iM.Zk) && void 0 !== rM ? rM : null;
+         null !== SM && Ci.b.Player.meshApi.updateMeshOverlayColour(SM, OM)
+       }
+       updateZIndex(MM) {
+         var rM;
+         if ("Person" !== this.meshKind) return;
+         const iM = null === (rM = this.Cm.hU.GrM(this.eId)) || void 0 === rM ? void 0 : rM.Zk;
+         "number" === typeof iM && this.Cm.CL.Dk.setRenderingGroupId(iM, MM)
+       }
+       updateOpacity(MM) {
+         const rM = this.Cm.hU.GrM(this.eId);
+         rM && ("number" !== typeof rM.Zk ? rM.mesh && "ParticleEmitter" !== this.meshKind && (0, Ri.f)(rM.mesh, MM) : Ci.b.Player.meshApi.updateMeshOpacity(rM.Zk, MM))
+       }
+     }
+     var Zi = iM(40014);
+     class oi {
+ ... (26 more added lines; see GitHub link above)
```

#### 61. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L434-L960` → after: `L2180-L2204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2180-L2204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L2180-L2204) · [Before (L434-L960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L434-L960)

```diff
-         get funcMask() {
-           return this._funcMask
-         }
-         set funcMask(GG) {
-           this._funcMask = GG
-         }
-         get opStencilFail() {
-           return this._opStencilFail
-         }
-         set opStencilFail(GG) {
-           this._opStencilFail = GG
-         }
-         get opDepthFail() {
-           return this._opDepthFail
-         }
-         set opDepthFail(GG) {
- ... (511 more removed lines; see GitHub link above)
+       }
+     }
+     var fi = iM(4069),
+       Yi = iM(37722),
+       Ni = iM(6944),
+       Ai = iM(38764),
+       xi = iM(3063),
+       vi = iM(39139),
+       Fi = iM(9689),
+       Bi = iM(39474),
+       Xi = iM(38735),
+       Ii = iM(3258);
+     class Ki {
+       constructor(MM, rM) {
+         let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
+           OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now();
+ ... (9 more added lines; see GitHub link above)
```

#### 62. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L962-L964` → after: `L2206-L2218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2206-L2218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L2206-L2218) · [Before (L962-L964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L962-L964)

```diff
-           if (0 !== this.depthFunction) {
-             const GG = this._scene.CK();
-             this._cachedDepthFunctionState = GG.getDepthFunction() || 0, GG.setDepthFunction(this.depthFunction)
+         }, this.createStateCallbacks = (0, Fi.getStateCallbacks)(MM), this.roomStateCallbacks = this.createStateCallbacks(MM.state), this.roomState = MM.state, this.setupBudgetLeftMs = iM, this.lastRefillMs = OM()
+       }
+       setup() {
+         this.setupEntityHandlers(), this.setupItemHandlers(), this.RiM.onStateChange(this.setUpPromoted), this.Cm.on("beforeInputs", this.onFrame), this.Cm.on("bL", this.kE)
+       }
+       setUpQueuedEntities(MM) {
+         var rM;
+         if ((null === (rM = (0, xi.b)().client.getMsgHandler()) || void 0 === rM ? void 0 : rM.RiM) !== this.RiM) return this.Cm.off("beforeInputs", this.onFrame), this.Cm.off("bL", this.kE), this.queuedSetups.clear(), void this.promotedSetups.clear();
+         if (MM && (this.setupBudgetLeftMs = this.setupBudgetMs, this.lastRefillMs = this.now()), this.setUpPromoted(), 0 !== this.queuedSetups.size)
+           for (ui().copy(qi, this.Cm.hU.XE(this.Cm.eD)); this.setupBudgetLeftMs > 0;) {
+             const MM = this.nearestQueued(qi);
+             if (null === MM) return;
+             this.setUpIfQueued(MM), this.setUpPromoted()
```

#### 63. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L967-L969` → after: `L2340-L2351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2340-L2351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L2340-L2351) · [Before (L967-L969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L967-L969)

```diff
-         unbind() {
-           if (this._scene.getSceneUniformBuffer().unbindEffect(), this._onUnBindObservable && this._onUnBindObservable.notifyObservers(this), 0 !== this.depthFunction) {
-             this._scene.CK().setDepthFunction(this._cachedDepthFunctionState)
+         this.detachers.delete(MM)
+       }
+       listenForFutureChanges(MM, rM, iM) {
+         return MM.listen(rM, iM, !1)
+       }
+       onEntityFieldChange(MM, rM, iM, OM) {
+         switch (iM) {
+           case "ridingVehicleEId": {
+             this.promoteIfQueued(OM);
+             const rM = this.Cm.hU.grM((0, Yi.e)(MM));
+             rM && (rM.ridingVehicleEId = OM);
+             break
```

#### 64. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L971-L972` → after: `L2353-L2403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2353-L2403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L2353-L2403) · [Before (L971-L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L971-L972)

```diff
-           if (this.disableDepthWrite) {
-             this._scene.CK().setDepthWrite(this._cachedDepthWriteState)
+           case "armour":
+             this.handleArmourChange(MM, OM);
+             break;
+           case "followingEId":
+             this.promoteIfQueued(OM), this.handleFollowingEIdChange(MM, rM, OM);
+             break;
+           case "xRotation":
+           case "yRotation":
+           case "zRotation":
+             this.handleRotationChange(MM, iM, OM);
+             break;
+           case "scale":
+             this.handleScaleChange(MM, OM);
+             break;
+           case "baseRenderHeading":
+             this.handleBaseRenderHeadingChange(MM, OM);
+ ... (35 more added lines; see GitHub link above)
```

#### 65. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L974-L975` → after: `L2405-L2488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2405-L2488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L2405-L2488) · [Before (L974-L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L974-L975)

```diff
-           if (this.disableColorWrite) {
-             this._scene.CK().setColorWrite(this._cachedColorWriteState)
+         });
+         else if (!SM) {
+           this.Cm.hU.BMM(OM, "smoothToServerPos") || this.Cm.hU.eZ(OM, "smoothToServerPos");
+           const MM = this.Cm.hU.getState(OM, "smoothToServerPos"),
+             rM = this.Cm.hU.jK(OM).position;
+           (0, Xi.setServerPosition)(MM, rM[0], rM[1], rM[2])
+         }
+       }
+       handleRotationChange(MM, rM, iM) {
+         const OM = "xRotation" === rM ? 0 : "yRotation" === rM ? 1 : 2;
+         for (const SM of (0, xi.b)().getFollowingEntities(MM)) {
+           const MM = this.Cm.hU.getState(SM, "meshRotation"),
+             rM = this.Cm.hU.ziM(SM);
+           MM && rM.LiM && (MM.serverSetRotation[OM] = iM)
+         }
+       }
+ ... (68 more added lines; see GitHub link above)
```

#### 66. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L978-L988` → after: `L2492-L2504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2492-L2504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L2492-L2504) · [Before (L978-L988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L978-L988)

```diff
-         getAnimatables() {
-           return this._eventInfo.animatables = [], this._callbackPluginEventGeneric(256, this._eventInfo), this._eventInfo.animatables
-         }
-         getActiveTextures() {
-           return this._eventInfo.activeTextures = [], this._callbackPluginEventGeneric(512, this._eventInfo), this._eventInfo.activeTextures
-         }
-         hasTexture(GG) {
-           return this._eventInfo.hasTexture = !1, this._eventInfo.texture = GG, this._callbackPluginEventGeneric(1024, this._eventInfo), this._eventInfo.hasTexture
-         }
-         clone(GG) {
-           return null
+         if (!this.Cm.hU.BMM(MM, "itemState")) return;
+         const OM = this.Cm.hU.getState(MM, "itemState");
+         "amount" === rM && iM !== OM.amount && (OM.creationTime = Date.now()), OM[rM] = "attributes" === rM ? JSON.parse(iM) : iM
+       }
+       dispose() {
+         if (!this.dh) {
+           this.dh = !0, this.Cm.off("beforeInputs", this.onFrame), this.Cm.off("bL", this.kE), this.queuedSetups.clear(), this.promotedSetups.clear();
+           for (const MM of this.deferredSetups.values()) Vr.i.unsubscribe(MM);
+           this.deferredSetups.clear(), this.Cm.hU.bZ(this.Cm.eD, this.Cm.hU.names.mG);
+           for (const MM in this.allItems) this.Cm.hU.deleteEntity(MM), delete this.allItems[MM];
+           for (const MM of [...this.detachers.keys()]) this.detach(MM);
+           (0, cr.b)(this.Cm).clear();
+           for (const MM of (0, xi.b)().client.iterateEntityIds())(0, xi.b)().client.disposeEntity(MM)
```

#### 67. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L990-L995` → after: `L2506-L2892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2506-L2892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L2506-L2892) · [Before (L990-L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L990-L995)

```diff
-         _clonePlugins(bG, ZG) {
-           const wG = {};
-           if (this._serializePlugins(wG), GG._ParsePlugins(wG, bG, this._scene, ZG), this.pluginManager)
-             for (const GG of this.pluginManager._plugins) {
-               const ZG = bG.pluginManager.getPlugin(GG.name);
-               ZG && GG.copyTo(ZG)
+       }
+     }
+     const qi = [0, 0, 0];
+ 
+     function Ti(MM) {
+       if ("string" !== typeof MM) return;
+       const rM = MM.indexOf("|"),
+         iM = -1 === rM ? MM : MM.slice(0, rM),
+         OM = rO();
+       return Object.hasOwn(OM, iM) ? OM[iM] : void 0
+     }
+     const Vi = new Set;
+     const ci = {
+       x: 0,
+       y: 1,
+       z: 2
+ ... (371 more added lines; see GitHub link above)
```

#### 68. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L998-L1005` → after: `L2895-L2992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2895-L2992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L2895-L2992) · [Before (L998-L1005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L998-L1005)

```diff
-         getBindedMeshes() {
-           if (this.meshMap) {
-             const GG = [];
-             for (const bG in this.meshMap) {
-               const ZG = this.meshMap[bG];
-               ZG && GG.push(ZG)
-             }
-             return GG
+         return aM > -tr[1] && OM.push((SM | aM << jM) & tr[3]), ur(OM)
+       }(lr[MM[tr[0]]]) : yr[MM[tr[0]]]
+     }
+ 
+     function ur(MM) {
+       return typeof Ur !== tr[10] && Ur ? (new Ur).decode(new Gr(MM)) : typeof Cr !== tr[10] && Cr ? Cr.from(MM).toString("utf-8") : wr(MM)
+     }
+ 
+     function Rr(...MM) {
+       if (MM[tr[4]] = tr[24], MM[tr[0]] === gr(76)) return MM[tr[1]] + MM[tr[6]]
+     }
+ 
+     function pr() {}
+ 
+     function Wr() {
+       Wr = function() {}
+ ... (82 more added lines; see GitHub link above)
```

#### 69. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1007` → after: `L2994-L3159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2994-L3159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L2994-L3159) · [Before (L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L1007)

```diff
-           return this._scene.meshes.filter((GG => GG.material === this))
+         },
+         pM = new xM.c,
+         WM = lM((() => {
+           xM.c.stopRunning();
+           const MM = Date.now() - mM;
+           LM.registerClickDownDuration(MM), rM().xiM(), vr(HM.c.UpFirePrimary), xr(!1);
+           const iM = LM.clickDownDurationsCheck(4e4);
+           (0, OM.sendColyMessage)(zM.Bg, iM)
+         }));
+       let sM = 0;
+       MM.inputs.down.on("primary-fire", (function(MM) {
+         sM = WM.press(), WM.owns(sM) && (mM = Date.now(), Math.abs(performance.now() - MM.timeStamp) > 5e3 || (GM(MM.altKey, "changedTouches" in MM), hr(MM)))
+       })), MM.inputs.up.on("primary-fire", (function(MM) {
+         WM.release(sM) && hr(MM, !0)
+       }));
+       const kM = () => {
+ ... (150 more added lines; see GitHub link above)
```

#### 70. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1009-L1022` → after: `L3161-L3213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR3161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L3161-L3213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L3161-L3213) · [Before (L1009-L1022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L1009-L1022)

```diff
-         forceCompilation(GG, bG, ZG, wG) {
-           const SG = {
-               clipPlane: !1,
-               useInstances: !1,
-               ...ZG
-             },
-             LG = this.Dv(),
-             yG = this.allowShaderHotSwapping;
-           this.allowShaderHotSwapping = !1;
-           const kG = () => {
-             if (!this._scene || !this._scene.CK()) return;
-             const ZG = LG.clipPlane;
-             if (SG.clipPlane && (LG.clipPlane = new pG.b(0, 0, 0, 1)), this._storeEffectOnSubMeshes) {
-               let ZG = !0,
+         MM.inputs.oB.dx = 0, MM.inputs.oB.dy = 0
+       }));
+       let br = 0;
+       const wr = [0, 0, 0],
+         tr = [0, 0, 0],
+         gr = {
+           base: wr,
+           max: tr
+         },
+         ur = MM => {
+           const rM = NM.f.droppedBlockSize / 2;
+           return [0, 1, 2].every((iM => MM[iM] >= wr[iM] - rM && MM[iM] <= tr[iM] + rM))
+         };
+       MM.on("bL", (function(rM) {
+         JM.i.Tz("noaTick", rM);
+         const iM = (0, gM.b)().client;
+ ... (37 more added lines; see GitHub link above)
```

#### 71. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1024-L1026` → after: `L3215-L3221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR3215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L3215-L3221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L3215-L3221) · [Before (L1024-L1026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L1024-L1026)

```diff
-               if (GG.aE) {
-                 const bG = new UG.c(0, 0, 0, 0, 0, GG, void 0, !1, !1);
-                 bG.materialDefines && (bG.materialDefines._renderId = -1), this.isReadyForSubMesh(GG, bG, SG.useInstances) || (bG.effect && bG.effect.getCompilationError() && bG.effect.allFallbacksProcessed() ? LG = bG.effect.getCompilationError() : (ZG = !1, setTimeout(kG, 16)))
+               if (rM.li) {
+                 const MM = aM.pickupTarget(LM, ur, nM);
+                 if (null === MM) continue;
+                 ({
+                   ZQ: iM,
+                   YQ: SM
+                 } = MM)
```

#### 72. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1028-L1060` → after: `L3223-L3239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR3223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L3223-L3239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L3223-L3239) · [Before (L1028-L1060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L1028-L1060)

```diff
-               ZG && (this.allowShaderHotSwapping = yG, LG && wG && wG(LG), bG && bG(this))
-             } else this.isReady() ? (this.allowShaderHotSwapping = yG, bG && bG(this)) : setTimeout(kG, 16);
-             SG.clipPlane && (LG.clipPlane = ZG)
-           };
-           kG()
-         }
-         async forceCompilationAsync(GG, bG) {
-           return await new Promise(((ZG, wG) => {
-             this.forceCompilation(GG, (() => {
-               ZG()
-             }), bG, (GG => {
-               wG(GG)
-             }))
-           }))
-         }
-         wZG(bG) {
- ... (17 more removed lines; see GitHub link above)
+               const jM = MM.hU.getState(iM, "itemState");
+               if (jM.li && null === SM) continue;
+               let mM = 0,
+                 HM = null,
+                 hM = !1;
+               if (0 === jM.amount) hM = !0;
+               else {
+                 const {
+                   amountPickedUp: rM
+                 } = MM.hU.RrM(MM.eD).pickUpItem({
+                   name: jM.name,
+                   typeObj: jM.typeObj,
+                   amount: jM.amount,
+                   attributes: jM.attributes
+                 });
+                 if (mM = rM, 0 === mM) continue;
+ ... (1 more added lines; see GitHub link above)
```

#### 73. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1063-L1084` → after: `L3252-L3256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR3252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L3252-L3256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L3252-L3256) · [Before (L1063-L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L1063-L1084)

```diff
-         _markScenePrePassDirty() {
-           if (this.Dv().blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
-           const GG = this.Dv().enablePrePassRenderer();
-           GG && GG.wZG()
-         }
-         _markAllSubMeshesAsAllDirty() {
-           this._markAllSubMeshesAsDirty(GG._AllDirtyCallBack)
-         }
-         _markAllSubMeshesAsImageProcessingDirty() {
-           this._markAllSubMeshesAsDirty(GG._ImageProcessingDirtyCallBack)
-         }
-         _markAllSubMeshesAsTexturesDirty() {
-           this._markAllSubMeshesAsDirty(GG._TextureDirtyCallBack)
-         }
-         _markAllSubMeshesAsFresnelDirty() {
-           this._markAllSubMeshesAsDirty(GG._FresnelDirtyCallBack)
- ... (6 more removed lines; see GitHub link above)
+         if (!MM.hU.GrM(MM.eD)) return;
+         const jM = MM.inputs.oB.HrM;
+         if (0 !== jM) {
+           const rM = jM > 0 ? 1 : -1;
+           MM.inputs.state["mid-fire"] || MM.inputs.state.Alt || !MM.aU.useInventory ? (MM.inputs.state["mid-fire"] && JM.i.Tz("requestEmoteWheelClose"), (0, gM.b)().client.cameraController.handleScrollZoom(rM)) : JM.i.Tz("ScrollInventorySlot", rM)
```

#### 74. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1086-L1087` → after: `L3258-L3268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR3258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L3258-L3268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L3258-L3268) · [Before (L1086-L1087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L1086-L1087)

```diff
-         _markAllSubMeshesAsAttributesDirty() {
-           this._markAllSubMeshesAsDirty(GG._AttributeDirtyCallBack)
+       })), dM.d.subscribe("droppedItemScale", (MM => {
+         nr = "number" === typeof MM && isFinite(MM) ? MM : ar
+       }))
+     }
+ 
+     function Dr() {
+       const MM = (0, gM.f)();
+       if (MM)
+         for (const rM in EM.v) {
+           MM.inputs.unbind(rM);
+           for (const iM of EM.v[rM]) MM.inputs.bind(rM, iM)
```

#### 75. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1089-L1090` → after: `L3270-L3380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR3270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L3270-L3380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L3270-L3380) · [Before (L1089-L1090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L1089-L1090)

```diff
-         _markAllSubMeshesAsMiscDirty() {
-           this._markAllSubMeshesAsDirty(GG._MiscDirtyCallBack)
+     }
+     Wr(yr = {}, lr = ['YUUM3P6Q>mj6c%Po1UN|@/E%gl`>N5".Lz%U.0`9ftoyX_+*iE&p', "=w^PNl?c8d>,=?d", '%lJ]L0X>,t%fM)8]I!Qq:@^I`Goro+4k4o_]8J|xjU{Y]+I"ev9yPuhF', '=gi+D_4"wY2W#%R!>o{/e<iPkWFu^E', "d]t+HMr!YGOU07d54O", ">}{/UoV$?v[p9j", 'D9[#)VJWlC2E!5)cc0yfwk7I|":yC*>R', "5N*mQ{~vwn4! … [truncated]
+       Wr(MM[tr[4]] = tr[0], MM[tr[8]] = [function() {
+         return globalThis
+       }, function() {
+         return global
+       }, function() {
+         return window
+       }, function() {
+         return new Function("return this")()
+       }], MM[tr[5]] = tr[12], MM[tr[6]] = []);
+       try {
+         Wr(MM[tr[5]] = Object, MM[tr[6]][tr[22]]("".__proto__.constructor.name))
+       } catch (lr) {}
+       MM: for (MM[-tr[7]] = tr[0]; MM[-tr[7]] < MM[tr[8]][tr[4]]; MM[-tr[7]]++) try {
+         for (MM[tr[5]] = MM[tr[8]][MM[-tr[7]]](), MM[-tr[9]] = tr[0]; MM[-tr[9]] < MM[tr[6]][tr[4]]; MM[-tr[9]]++)
+ ... (95 more added lines; see GitHub link above)
```

#### 76. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1092-L1093` → after: `L3382-L3384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR3382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L3382-L3384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L3382-L3384) · [Before (L1092-L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L1092-L1093)

```diff
-         _markAllSubMeshesAsPrePassDirty() {
-           this._markAllSubMeshesAsDirty(GG._PrePassDirtyCallBack)
+ 
+         function iM(MM) {
+           return typeof yr[MM] === tr[10] ? yr[MM] = rM(lr[MM]) : yr[MM]
```

#### 77. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1095-L1096` → after: `L3386-L3400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR3386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L3386-L3400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L3386-L3400) · [Before (L1095-L1096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L1095-L1096)

```diff
-         _markAllSubMeshesAsTexturesAndMiscDirty() {
-           this._markAllSubMeshesAsDirty(GG._TextureAndMiscDirtyCallBack)
+ 
+         function OM() {
+           console.log((function(...MM) {
+             for (Wr(MM[tr[4]] = tr[1], MM[tr[52]] = MM[tr[0]].length, MM[tr[23]] = [], MM[-tr[54]] = tr[0], MM[tr[14]] = tr[0], MM[tr[0]].sort(((MM, rM) => MM - rM))), MM[-tr[53]] = tr[0]; MM[-tr[53]] < MM[tr[52]]; MM[-tr[53]]++)
+               if (!(MM[-tr[53]] > tr[0] && MM[tr[0]][MM[-tr[53]]] === MM[tr[0]][MM[-tr[53]] - tr[1]]))
+                 for (Wr(MM[-tr[54]] = MM[-tr[53]] + tr[1], MM[tr[14]] = MM[tr[52]] - tr[1]); MM[-tr[54]] < MM[tr[14]];)
+                   if (MM[tr[0]][MM[-tr[53]]] + MM[tr[0]][MM[-tr[54]]] + MM[tr[0]][MM[tr[14]]] < tr[0]) MM[-tr[54]]++;
+                   else if (MM[tr[0]][MM[-tr[53]]] + MM[tr[0]][MM[-tr[54]]] + MM[tr[0]][MM[tr[14]]] > tr[0]) MM[tr[14]]--;
+             else {
+               for (MM[tr[23]].push([MM[tr[0]][MM[-tr[53]]], MM[tr[0]][MM[-tr[54]]], MM[tr[0]][MM[tr[14]]]]); MM[-tr[54]] < MM[tr[14]] && MM[tr[0]][MM[-tr[54]]] === MM[tr[0]][MM[-tr[54]] + tr[1]];) MM[-tr[54]]++;
+               for (; MM[-tr[54]] < MM[tr[14]] && MM[tr[0]][MM[tr[14]]] === MM[tr[0]][MM[tr[14]] - tr[1]];) MM[tr[14]]--;
+               Wr(MM[-tr[54]]++, MM[tr[14]]--)
+             }
+             return MM[tr[23]]
+           }))
```

#### 78. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1098-L1106` → after: `L3402-L3418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR3402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L3402-L3418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L3402-L3418) · [Before (L1098-L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L1098-L1106)

```diff
-         _checkScenePerformancePriority() {
-           if (0 !== this._scene.performancePriority) {
-             this.checkReadyOnlyOnce = !0;
-             const GG = this._scene.onScenePerformancePriorityChangedObservable.addOnce((() => {
-               this.checkReadyOnlyOnce = !1
-             }));
-             this.Gl.add((() => {
-               this._scene.onScenePerformancePriorityChangedObservable.remove(GG)
-             }))
+         if (iM(80) + "P" in pr && OM(), (0, lM.l)()) {
+           function SM(...MM) {
+             function rM(...MM) {
+               return MM[tr[4]] = tr[1], typeof yr[MM[tr[0]]] === tr[10] ? yr[MM[tr[0]]] = function(...MM) {
+                 for (Wr(MM[tr[4]] = tr[1], MM[tr[11]] = 'MCkZej,06?LoS<rWX2EiKmuy^)p;(4Rfc%7&./$=N}tF5!wHg{_B9q[v>n~Ax|bhQD`+Y3lU#"]*:TazJsGVOdIP81@', MM[tr[23]] = "" + (MM[tr[0]] || ""), MM[-tr[56]] = MM[tr[23]].length, MM[tr[26]] = [], MM[tr[50]] = tr[0], MM[tr[18]] = tr[0], MM … [truncated]
+                   if (MM[tr[15]] = MM[tr[11]].indexOf(MM[tr[23]][MM[tr[55]]]), MM[tr[15]] !== -tr[1])
+                     if (MM[tr[20]] < tr[0]) MM[tr[20]] = MM[tr[15]];
+                     else {
+                       Wr(MM[tr[20]] += MM[tr[15]] * tr[32], MM[tr[50]] |= MM[tr[20]] << MM[tr[18]], MM[tr[18]] += (MM[tr[20]] & tr[34]) > tr[35] ? tr[36] : tr[37]);
+                       do {
+                         Wr(MM[tr[26]].push(MM[tr[50]] & tr[3]), MM[tr[50]] >>= tr[2], MM[tr[18]] -= tr[2])
+                       } while (MM[tr[18]] > tr[20]);
+                       MM[tr[20]] = -tr[1]
+                     } return MM[tr[20]] > -tr[1] && MM[tr[26]].push((MM[tr[50]] | MM[tr[20]] << MM[tr[18]]) & tr[3]), ur(MM[tr[26]])
+               }(lr[MM[tr[0]]]) : yr[MM[tr[0]]]
+             }
+ ... (1 more added lines; see GitHub link above)
```

#### 79. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1109-L1110` → after: `L3444-L3446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR3444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L3444-L3446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L3444-L3446) · [Before (L1109-L1110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L1109-L1110)

```diff
-         setPrePassRenderer(GG) {
-           return !1
+ 
+         function OM(...MM) {
+           return MM[tr[4]] = tr[1], typeof yr[MM[tr[0]]] === tr[10] ? yr[MM[tr[0]]] = iM(lr[MM[tr[0]]]) : yr[MM[tr[0]]]
```

#### 80. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1112-L1125` → after: `L3448-L3456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR3448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L3448-L3456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L3448-L3456) · [Before (L1112-L1125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L1112-L1125)

```diff
-         dispose(GG, bG, ZG) {
-           const wG = this.Dv();
-           if (wG.stopAnimation(this), wG.freeProcessedMaterials(), wG.removeMaterial(this), this._eventInfo.forceDisposeTextures = bG, this._callbackPluginEventGeneric(2, this._eventInfo), this._parentContainer) {
-             const GG = this._parentContainer.materials.indexOf(this);
-             GG > -1 && this._parentContainer.materials.splice(GG, 1), this._parentContainer = null
-           }
-           if (!0 !== ZG)
-             if (this.meshMap)
-               for (const SG in this.meshMap) {
-                 const GG = this.meshMap[SG];
-                 this._disposeMeshResources(GG)
-               } else {
-                 const GG = wG.meshes;
-                 for (const bG of GG) this._disposeMeshResources(bG)
+ 
+         function SM(...MM) {
+           MM[tr[4]] = tr[0],
+             function(MM) {
+               var rM, iM, SM, jM;
+ 
+               function aM(...MM) {
+                 for (Wr(MM[tr[4]] = tr[1], MM[tr[29]] = [], MM[tr[67]] = tr[0], MM[tr[24]] = MM[tr[0]].length, MM[tr[14]] = tr[12], MM[tr[68]] = tr[12]); MM[tr[67]] < MM[tr[24]];) Wr(MM[tr[14]] = MM[tr[0]].charCodeAt(MM[tr[67]]++), MM[tr[14]] >= tr[73] && MM[tr[14]] <= tr[114] && … [truncated]
+                 return MM[tr[29]]
```

#### 81. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1127-L1140` → after: `L3458-L3477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR3458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L3458-L3477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L3458-L3477) · [Before (L1127-L1140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L1127-L1140)

```diff
-           this._uniformBuffer.dispose(), this._drawWrapper.effect && (this._storeEffectOnSubMeshes || this._drawWrapper.effect.dispose(), this._drawWrapper.effect = null), this.metadata = null, this.Gl.notifyObservers(this), this.Gl.clear(), this._onBindObservable && this._onBind … [truncated]
-         }
-         _disposeMeshResources(GG) {
-           if (!GG) return;
-           const bG = GG.geometry,
-             ZG = GG._internalAbstractMeshDataInfo._materialForRenderPass;
-           if (this._storeEffectOnSubMeshes) {
-             if (GG.aE && ZG)
-               for (const wG of GG.aE) {
-                 const GG = wG._drawWrappers;
-                 for (let SG = 0; SG < GG.length; SG++) {
-                   const LG = GG[SG]?.effect;
-                   if (!LG) continue;
-                   ZG[SG] === this && (bG?._releaseVertexArrayObject(LG), wG._removeDrawWrapper(SG, !0, !0))
+ 
+               function PM(...MM) {
+                 if (MM[tr[4]] = tr[1], MM[tr[0]] >= tr[73] && MM[tr[0]] <= tr[115]) {
+                   function rM(...MM) {
+                     for (Wr(MM[tr[4]] = tr[1], MM[-tr[7]] = '80Hg&xSfV2A4U?$n"rO{@~`[>o|h,FLq;5Bw#s}.Jm1]lvMjbT/WE*N6adXDtR^i(pu=PQ+!y<Ce:)7Y%czI_G9KkZ3', MM[-tr[75]] = "" + (MM[tr[0]] || ""), MM[tr[27]] = MM[-tr[75]].length, MM[tr[14]] = [], MM[tr[50]] = tr[0], MM[tr[77]] = tr[0 … [truncated]
+                       if (MM[tr[15]] = MM[-tr[7]].indexOf(MM[-tr[75]][MM[-tr[76]]]), MM[tr[15]] !== -tr[1])
+                         if (MM[tr[20]] < tr[0]) MM[tr[20]] = MM[tr[15]];
+                         else {
+                           Wr(MM[tr[20]] += MM[tr[15]] * tr[32], MM[tr[50]] |= MM[tr[20]] << MM[tr[77]], MM[tr[77]] += (MM[tr[20]] & tr[34]) > tr[35] ? tr[36] : tr[37]);
+                           do {
+                             Wr(MM[tr[14]].push(MM[tr[50]] & tr[3]), MM[tr[50]] >>= tr[2], MM[tr[77]] -= tr[2])
+                           } while (MM[tr[77]] > tr[20]);
+                           MM[tr[20]] = -tr[1]
+                         } return MM[tr[20]] > -tr[1] && MM[tr[14]].push((MM[tr[50]] | MM[tr[20]] << MM[tr[77]]) & tr[3]), ur(MM[tr[14]])
+                   }
+ 
+ ... (4 more added lines; see GitHub link above)
```

#### 82. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1143-L1171` → after: `L3480-L3482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR3480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L3480-L3482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L3480-L3482) · [Before (L1143-L1171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L1143-L1171)

```diff
-           } else bG?._releaseVertexArrayObject(this._drawWrapper.effect);
-           GG.material !== this || GG.ESG || (GG.material = null)
-         }
-         serialize() {
-           const GG = QG.b.Serialize(this);
-           return GG.stencil = this.stencil.serialize(), GG.uniqueId = this.uniqueId, this._serializePlugins(GG), GG
-         }
-         _serializePlugins(GG) {
-           if (GG.plugins = {}, this.pluginManager)
-             for (const bG of this.pluginManager._plugins) bG.doNotSerialize || (GG.plugins[bG.getClassName()] = bG.serialize())
-         }
-         static ParseAlphaMode(GG, bG) {
-           void 0 !== GG._alphaMode ? bG._alphaMode = Array.isArray(GG._alphaMode) ? [...GG._alphaMode] : [GG._alphaMode] : void 0 !== GG.alphaMode ? bG._alphaMode = Array.isArray(GG.alphaMode) ? [...GG.alphaMode] : [GG.alphaMode] : bG._alphaMode = [2]
-         }
-         static Parse(bG, ZG, wG) {
-           if (bG.customType) {
- ... (13 more removed lines; see GitHub link above)
+ 
+               function nM(...MM) {
+                 return MM[tr[4]] = tr[6], rM(MM[tr[0]] >> MM[tr[1]] & tr[17] | tr[78])
```

#### 83. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1173` → after: `L3484-L3624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR3484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L3484-L3624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L3484-L3624) · [Before (L1173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L1173)

```diff
-               kG?.parse(yG, ZG, wG)
+ 
+               function QM(MM) {
+                 var iM;
+                 return (4294967168 & MM) == tr[0] ? rM(MM) : (iM = "", (4294965248 & MM) == tr[0] ? iM = rM(MM >> tr[18] & tr[52] | tr[86]) : (4294901760 & MM) == tr[0] ? Wr(PM(MM), iM = rM(MM >> tr[21] & tr[44] | tr[89]), iM += nM(MM, tr[18])) : (4292870144 & MM) == tr[0] && Wr( … [truncated]
+               }
+ 
+               function zM() {
+                 var MM;
+                 if (jM >= SM) throw Error(OM(tr[88]));
+                 if (Wr(MM = iM[jM] & tr[3], jM++), (MM & tr[86]) == tr[78]) return MM & tr[17];
+                 throw Error(function(...MM) {
+                   return MM[tr[4]] = tr[1], typeof yr[MM[tr[0]]] === tr[10] ? yr[MM[tr[0]]] = function(...MM) {
+                     for (Wr(MM[tr[4]] = tr[1], MM[tr[11]] = '8v^|kg]"~`+ap!6KC@U$>{<)MAluE%.5LRbX*3=YF?fyQj1Bt2H[J}V9;/wSI4hNne&qWsx#,iDcOo0ZzdPT7(:Gr_m', MM[tr[81]] = "" + (MM[tr[0]] || ""), MM[tr[83]] = MM[tr[81]].length, MM[tr[14]] = [], MM[tr[82]] = tr[0], MM[tr[85]] = tr[0], … [truncated]
+                       if (MM[tr[84]] = MM[tr[11]].indexOf(MM[tr[81]][MM[tr[55]]]), MM[tr[84]] !== -tr[1])
+                         if (MM[tr[20]] < tr[0]) MM[tr[20]] = MM[tr[84]];
+                         else {
+ ... (125 more added lines; see GitHub link above)
```

#### 84. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1176-L1500` → after: `L3641-L3659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR3641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L3641-L3659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L3641-L3659) · [Before (L1176-L1500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L1176-L1500)

```diff
-       }, (() => {
-         const LG = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         bG = [(0, SG.Q)()], ZG = [(0, SG.Q)()], JG = [(0, SG.Q)()], rG = [(0, SG.Q)()], zG = [(0, SG.Q)()], EG = [(0, SG.Q)()], oG = [(0, SG.Q)()], XG = [(0, SG.Q)("alpha")], uG = [(0, SG.Q)("backFaceCulling")], iG = [(0, SG.Q)("textureRepetitionMode")], CG = [(0, SG.Q)("textureR … [truncated]
-           kind: "getter",
-           name: "pointsCloud",
-           static: !1,
-           private: !1,
-           access: {
-             has: GG => "pointsCloud" in GG,
-             get: GG => GG.pointsCloud
-           },
-           metadata: LG
-         }, null, TG), (0, wG.k)(GG, null, nG, {
-           kind: "getter",
-           name: "fillMode",
-           static: !1,
- ... (309 more removed lines; see GitHub link above)
+ 
+         function aM(...MM) {
+           return MM[tr[4]] = tr[1], typeof yr[MM[tr[0]]] === tr[10] ? yr[MM[tr[0]]] = jM(lr[MM[tr[0]]]) : yr[MM[tr[0]]]
+         }
+         if (MM[aM(118) + aM(tr[59])] === tr[57]) {
+           function PM(...MM) {
+             function rM(...MM) {
+               return MM[tr[4]] = tr[1], typeof yr[MM[tr[0]]] === tr[10] ? yr[MM[tr[0]]] = function(...MM) {
+                 for (Wr(MM[tr[4]] = tr[1], MM[tr[99]] = '(ANTKn2Qh>)go[|*m0!F&ZqxiB/L47sSC%vM,Jz$Wk}6y"+IG@3;YU5R8dPc]jurb~=tp.VX{1D^wE?HO_<l#9a`fe:', MM[tr[23]] = "" + (MM[tr[0]] || ""), MM[tr[100]] = MM[tr[23]].length, MM[tr[14]] = [], MM[tr[50]] = tr[0], MM[tr[18]] = tr[0], MM … [truncated]
+                   if (MM[tr[15]] = MM[tr[99]].indexOf(MM[tr[23]][MM[tr[55]]]), MM[tr[15]] !== -tr[1])
+                     if (MM[tr[31]] < tr[0]) MM[tr[31]] = MM[tr[15]];
+                     else {
+                       Wr(MM[tr[31]] += MM[tr[15]] * tr[32], MM[tr[50]] |= MM[tr[31]] << MM[tr[18]], MM[tr[18]] += (MM[tr[31]] & tr[34]) > tr[35] ? tr[36] : tr[37]);
+                       do {
+                         Wr(MM[tr[14]].push(MM[tr[50]] & tr[3]), MM[tr[50]] >>= tr[2], MM[tr[18]] -= tr[2])
+                       } while (MM[tr[18]] > tr[20]);
+ ... (3 more added lines; see GitHub link above)
```

#### 85. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1502-L1513` → after: `L3661-L3668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR3661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L3661-L3668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L3661-L3668) · [Before (L1502-L1513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L1502-L1513)

```diff
-           },
-           metadata: LG
-         }, Pb, Mb), (0, wG.k)(null, null, AG, {
-           kind: "field",
-           name: "zOffset",
-           static: !1,
-           private: !1,
-           access: {
-             has: GG => "zOffset" in GG,
-             get: GG => GG.zOffset,
-             set: (GG, bG) => {
-               GG.zOffset = bG
+ 
+             function iM(...MM) {
+               if (MM[tr[4]] = tr[1], !MM[tr[0]]) return -tr[1];
+               const rM = iM(MM[tr[0]].left),
+                 OM = iM(MM[tr[0]].right),
+                 SM = Math.abs(rM - OM);
+               if (rM === 1 / 0 || OM === 1 / 0 || SM > tr[1]) return 1 / 0;
+               return Math.max(rM, OM) + tr[1]
```

#### 86. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1515-L1526` → after: `L3670-L3687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR3670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L3670-L3687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L3670-L3687) · [Before (L1515-L1526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L1515-L1526)

```diff
-           },
-           metadata: LG
-         }, Ab, sb), (0, wG.k)(null, null, sG, {
-           kind: "field",
-           name: "zOffsetUnits",
-           static: !1,
-           private: !1,
-           access: {
-             has: GG => "zOffsetUnits" in GG,
-             get: GG => GG.zOffsetUnits,
-             set: (GG, bG) => {
-               GG.zOffsetUnits = bG
+             MM[tr[4]] = tr[0], window[rM(tr[70]) + rM(122) + rM(123) + "_"] = {
+               buildCharacterMap: function(MM) {
+                 const rM = {};
+                 for (let iM of MM.replace(/[^w]/g, "").toLowerCase()) rM[iM] = rM[iM] + tr[1] || tr[1];
+                 return rM
+               },
+               isAnagrams: function(...MM) {
+                 MM[tr[4]] = tr[6];
+                 const rM = buildCharMap(MM[tr[0]]),
+                   iM = buildCharMap(MM[tr[1]]);
+                 for (let OM in rM)
+                   if (rM[OM] !== iM[OM]) return tr[57];
+                 return Object.keys(rM).length !== Object.keys(iM).length ? tr[57] : tr[101]
+               },
+               isBalanced: function(...MM) {
+                 return MM[tr[4]] = tr[1], iM(MM[tr[0]]) !== 1 / 0
+ ... (2 more added lines; see GitHub link above)
```

#### 87. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1528-L1539` → after: `L3689-L3704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR3689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L3689-L3704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L3689-L3704) · [Before (L1528-L1539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L1528-L1539)

```diff
-           },
-           metadata: LG
-         }, qb, nb), (0, wG.k)(null, null, eG, {
-           kind: "field",
-           name: "_isVertexOutputInvariant",
-           static: !1,
-           private: !1,
-           access: {
-             has: GG => "_isVertexOutputInvariant" in GG,
-             get: GG => GG._isVertexOutputInvariant,
-             set: (GG, bG) => {
-               GG._isVertexOutputInvariant = bG
+           }
+           aM(tr[56]) in pr && PM(), (0, LM[tr[14]])("2 " + (0, mM[tr[27]])(MM))
+         } else {
+           function nM(MM) {
+             var rM, iM, OM, SM, jM, aM, PM;
+             for (Wr(rM = "" + (MM || ""), iM = rM.length, OM = [], SM = tr[0], jM = tr[0], aM = -tr[1]), PM = tr[0]; PM < iM; PM++) {
+               var nM = '=cZQCGToBzmO2%8t9$gD<Y5Ue04;~>"w6[iFvLI!dPaMq&+:H3r/7_.,lX{N(JbAKS?@pR}1jh]snx*uV^k|Wy`f)E#'.indexOf(rM[PM]);
+               if (nM !== -tr[1])
+                 if (aM < tr[0]) aM = nM;
+                 else {
+                   Wr(aM += nM * tr[32], SM |= aM << jM, jM += (aM & tr[34]) > tr[35] ? tr[36] : tr[37]);
+                   do {
+                     Wr(OM.push(SM & tr[3]), SM >>= tr[2], jM -= tr[2])
+                   } while (jM > tr[20]);
+                   aM = -tr[1]
+                 }
```

#### 88. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1541-L1754` → after: `L3706-L3879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR3706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L3706-L3879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L3706-L3879) · [Before (L1541-L1754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L1541-L1754)

```diff
-           },
-           metadata: LG
-         }, gb, eb), LG && Object.defineProperty(GG, Symbol.metadata, {
-           enumerable: !0,
-           configurable: !0,
-           writable: !0,
-           value: LG
-         })
-       })(), GG.TriangleFillMode = 0, GG.WireFrameFillMode = 1, GG.PointFillMode = 2, GG.PointListDrawMode = 3, GG.LineListDrawMode = 4, GG.LineLoopDrawMode = 5, GG.LineStripDrawMode = 6, GG.TriangleStripDrawMode = 7, GG.TriangleFanDrawMode = 8, GG.ClockWiseSideOrientation = 0, GG … [truncated]
-         GG._FresnelDirtyCallBack(bG), GG._MiscDirtyCallBack(bG)
-       }, GG._TextureAndMiscDirtyCallBack = bG => {
-         GG._TextureDirtyCallBack(bG), GG._MiscDirtyCallBack(bG)
-       }, GG._DirtyCallbackArray = [], GG._RunDirtyCallBacks = bG => {
-         for (const ZG of GG._DirtyCallbackArray) ZG(bG)
-       }, GG
-     })();
- ... (198 more removed lines; see GitHub link above)
+             return aM > -tr[1] && OM.push((SM | aM << jM) & tr[3]), ur(OM)
+           }
+ 
+           function QM(...MM) {
+             return MM[tr[4]] = tr[1], typeof yr[MM[tr[0]]] === tr[10] ? yr[MM[tr[0]]] = nM(lr[MM[tr[0]]]) : yr[MM[tr[0]]]
+           }
+ 
+           function zM(...MM) {
+             function rM() {}
+             MM[tr[4]] = tr[0], Wr(MM[-tr[103]] = function(MM, iM) {
+               var OM, SM, jM, aM, PM, nM = tr[0];
+               for (Wr(OM = tr[0], SM = new rM(tr[0]), jM = SM, aM = MM, PM = iM); aM !== tr[102] || PM !== tr[102];) Wr(OM = (aM ? aM.val : tr[0]) + (PM ? PM.val : tr[0]) + nM, nM = Math.floor(OM / tr[72]), jM.next = new rM(OM % tr[72]), jM = jM.next, aM = aM ? aM.next : tr[102], … [truncated]
+               return nM && (jM.next = new rM(nM)), SM.next
+             }, console.log(MM[-tr[103]]))
+           }
+           if (QM(124) in pr && zM(), dr(MM) < tr[72]) {
+ ... (158 more added lines; see GitHub link above)
```

#### 89. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1756-L1765` → after: `L3881-L3924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR3881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L3881-L3924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L3881-L3924) · [Before (L1756-L1765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L1756-L1765)

```diff
-     function UG(GG, bG, ZG) {
-       if (!GG || GG.LOGARITHMICDEPTH || GG.indexOf && GG.indexOf("LOGARITHMICDEPTH") >= 0) {
-         const GG = ZG.activeCamera;
-         1 === GG.mode && wG.c.Error("Logarithmic depth is not compatible with orthographic cameras!", 20), bG.setFloat("logarithmicDepthConstant", 2 / (Math.log(GG.maxZ + 1) / Math.LN2))
-       }
-     }
-     const YG = {
-         r: 0,
-         g: 0,
-         b: 0
+                 function lM(MM, rM) {
+                   var iM = (MM & tr[117]) + (rM & tr[117]);
+                   return (MM >> tr[108]) + (rM >> tr[108]) + (iM >> tr[108]) << tr[108] | iM & tr[117]
+                 }
+                 return Wr(MM[tr[4]] = tr[0], MM[-tr[63]] = tr[0], MM[tr[23]] = ""), MM[tr[6]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680 … [truncated]
+                   hex: function(...MM) {
+                     return MM[tr[4]] = tr[1], SM(function(...MM) {
+                       return MM[tr[4]] = tr[1], nM(yM(PM(MM[tr[0]]), MM[tr[0]].length * tr[2]))
+                     }(aM(MM[tr[0]])))
+                   },
+                   b64: rM,
+                   any: iM,
+                   hex_hmac: function(...MM) {
+                     return MM[tr[4]] = tr[6], SM(OM(aM(MM[tr[0]]), aM(MM[tr[1]])))
+                   },
+                   b64_hmac: rM,
+ ... (28 more added lines; see GitHub link above)
```

#### 90. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1767-L1773` → after: `L3926-L3932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR3926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L3926-L3932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L3926-L3932) · [Before (L1767-L1773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L1767-L1773)

```diff
-       VG = {
-         NUM_MORPH_INFLUENCERS: 0,
-         NORMAL: !1,
-         TANGENT: !1,
-         UV: !1,
-         UV2: !1,
-         COLOR: !1
+       Nr = () => {
+         window.removeEventListener("wheel", Ar), (kr || Zr) && window.addEventListener("wheel", Ar, {
+           passive: !1
+         })
+       },
+       Ar = MM => {
+         !0 === MM.ctrlKey && or() && MM.preventDefault()
```

#### 91. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1776-L1778` → after: `L3935-L3938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR3935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L3935-L3938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L3935-L3938) · [Before (L1776-L1778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L1776-L1778)

```diff
-     function pG(GG, bG, ZG) {
-       let wG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-       ZG && GG.fogEnabled && (!bG || bG.applyFog) && 0 !== GG.fogMode && (ZG.setFloat4("vFogInfos", GG.fogMode, GG.fogStart, GG.fogEnd, GG.fogDensity), wG ? (GG.fogColor.toLinearSpaceToRef(YG, GG.CK().useExactSrgbConversions), ZG.setColor3("vFogColor", YG)) : ZG.setColor3("vFogCo … [truncated]
+     function xr(MM) {
+       JM.i.Tz("QTEMouseState", {
+         isDown: MM
+       })
```

#### 92. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1781-L1783` → after: `L3941-L3980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR3941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L3941-L3980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L3941-L3980) · [Before (L1781-L1783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L1781-L1783)

```diff
-     function fG(GG, bG, ZG, wG, SG, LG, yG, kG, UG, YG) {
-       const pG = GG.numMaxInfluencers || GG.numInfluencers;
-       return pG <= 0 ? 0 : (bG.push("#define MORPHTARGETS"), GG.hasPositions && bG.push("#define MORPHTARGETTEXTURE_HASPOSITIONS"), GG.hasNormals && bG.push("#define MORPHTARGETTEXTURE_HASNORMALS"), GG.hasTangents && bG.push("#define MORPHTARGETTEXTURE_HASTANGENTS"), GG.hasUVs && … [truncated]
+     function vr(MM) {
+       var rM, iM, SM, jM, aM, PM, nM, QM;
+       const LM = (0, gM.f)();
+       LM.pMM = null !== (rM = function(MM, rM) {
+         var iM, OM;
+         if (!Lr) return null;
+         const SM = MM.bloxd;
+         Pr ??= SM.getMetaInfo("Board").rootId;
+         const jM = null !== (iM = null === rM || void 0 === rM ? void 0 : rM.VV) && void 0 !== iM ? iM : null;
+         if (!jM || SM.getMetaInfo(jM).rootId !== Pr) return null;
+         const aM = null !== (OM = null === rM || void 0 === rM ? void 0 : rM.position) && void 0 !== OM ? OM : null;
+         if (SM.playerCanChangePos(MM.eD, aM[0], aM[1], aM[2])) return null;
+         const PM = (MM, rM, iM) => {
+           const OM = SM.blockDataOwner.getBlockData(MM, rM, iM),
+             jM = null === OM || void 0 === OM ? void 0 : OM.persisted.shared.text.split("\n")[0].toLowerCase().trim();
+           return sM.singleLineBoardActions.has(jM)
+ ... (24 more added lines; see GitHub link above)
```

#### 93. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1786-L1800` → after: `L3999-L4000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR3999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L3999-L4000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L3999-L4000) · [Before (L1786-L1800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L1786-L1800)

```diff
-     function QG(GG, bG, ZG) {
-       let LG = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
-       const yG = ZG.NUM_MORPH_INFLUENCERS;
-       if (yG > 0 && SG.c.LastCreatedEngine) {
-         const kG = SG.c.LastCreatedEngine.getCaps().maxVertexAttribs,
-           UG = bG.morphTargetManager;
-         if (UG?.isUsingTextureForTargets) return;
-         const YG = UG && UG.supportsPositions && LG,
-           VG = UG && UG.supportsNormals && ZG.NORMAL,
-           pG = UG && UG.supportsTangents && ZG.TANGENT,
-           fG = UG && UG.supportsUVs && ZG.UV1,
-           QG = UG && UG.supportsUV2s && ZG.UV2,
-           KG = UG && UG.supportsColors && ZG.VERTEXCOLOR;
-         for (let ZG = 0; ZG < yG; ZG++) YG && GG.push("position" + ZG), VG && GG.push("normal" + ZG), pG && GG.push("tangent" + ZG), fG && GG.push("uv_" + ZG), QG && GG.push("uv2_" + ZG), KG && GG.push("color" + ZG), GG.length > kG && wG.c.Error("Cannot add more vertex attributes … [truncated]
-       }
+     function jM() {
+       return SM
```

#### 94. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1804-L1805` → after: `L4004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR4004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L4004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L4004) · [Before (L1804-L1805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L1804-L1805)

```diff
-       let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-       GG.push("world0"), GG.push("world1"), GG.push("world2"), GG.push("world3"), bG && (GG.push("previousWorld0"), GG.push("previousWorld1"), GG.push("previousWorld2"), GG.push("previousWorld3"))
+       SM = MM, MM ? OM.i.setMultiplierType("emoteWheel", 0) : OM.i.removeMultiplier("emoteWheel")
```

#### 95. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1807-L1810` → after: `L4006-L4009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR4006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L4006-L4009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L4006-L4009) · [Before (L1807-L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L1807-L1810)

```diff
- 
-     function hG(GG, bG) {
-       const ZG = GG.morphTargetManager;
-       GG && ZG && bG.setFloatArray("morphTargetInfluences", ZG.influences)
+   },
+   40134: (MM, rM, iM) => {
+     function OM(MM) {
+       return Boolean(MM.aU.useInventory && MM.aU.useFullInventory && MM.hU.WrM(MM.eD))
```

#### 96. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1814-L1854` → after: `L4023-L4025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR4023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L4023-L4025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L4023-L4025) · [Before (L1814-L1854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L1814-L1854)

```diff
-       bG.bindToEffect(GG, "Scene")
-     }
- 
-     function JG(GG, bG, ZG, wG) {
-       let SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
-         LG = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         yG = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-         UG = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
-         YG = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
-         VG = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
-         pG = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
-         fG = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0;
-       if (GG.texturesEnabled && SG && kG.d.ReflectionTextureEnabled) {
-         if (ZG.R6("reflectionMatrix", SG.getReflectionTextureMatrix()), ZG.updateFloat2("vReflectionInfos", SG.level * GG.iblIntensity, fG), UG && SG.boundingBoxSize) {
-           const GG = SG;
-           ZG.updateVector3("vReflectionPosition", GG.boundingBoxPosition), ZG.updateVector3("vReflectionSize", GG.boundingBoxSize)
- ... (25 more removed lines; see GitHub link above)
+       return {
+         replayedClipName: MM,
+         replayedClipAgeSeconds: rM
```

#### 97. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1858-L1859` → after: `L4029-L4046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR4029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L4029-L4046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L4029-L4046) · [Before (L1858-L1859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L1858-L1859)

```diff
-     function zG(GG, bG, ZG) {
-       bG._needUVs = !0, bG[ZG] = !0, GG.optimizeUVAllocation && GG.getTextureMatrix().isIdentityAs3x2() ? (bG[ZG + "DIRECTUV"] = GG.coordinatesIndex + 1, bG["MAINUV" + (GG.coordinatesIndex + 1)] = !0) : bG[ZG + "DIRECTUV"] = 0
+     function jM(MM, rM, iM, SM, jM) {
+       const aM = function(MM) {
+           if ("object" !== typeof MM || null === MM) return null;
+           const {
+             replayedClipName: rM,
+             replayedClipAgeSeconds: iM
+           } = MM;
+           return "string" === typeof rM && "number" === typeof iM ? {
+             HS: rM,
+             hS: iM
+           } : null
+         }(iM),
+         PM = null === aM ? iM : null,
+         {
+           HS: nM = null,
+           hS: QM = 0
+ ... (2 more added lines; see GitHub link above)
```

#### 98. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1862-L1864` → after: `L4057-L4063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR4057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L4057-L4063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L4057-L4063) · [Before (L1862-L1864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L1862-L1864)

```diff
-     function EG(GG, bG, ZG) {
-       const wG = GG.getTextureMatrix();
-       bG.R6(ZG + "Matrix", wG)
+     function aM() {
+       var MM, rM, iM, OM;
+       const aM = (0, jM.f)(),
+         PM = null !== (MM = null === (rM = aM.hU.urM(aM.eD)) || void 0 === rM ? void 0 : rM.selectedItem) && void 0 !== MM ? MM : null,
+         nM = PM ? (0, jM.b)().getItemStat(aM.eD, PM.name, "attackCooldownMs") : null,
+         QM = (0, SM.cd)(nM, null === PM || void 0 === PM || null === (iM = PM.attributes.customAttributes) || void 0 === iM || null === (OM = iM.enchantments) || void 0 === OM ? void 0 : OM["Attack Speed"]);
+       return Math.max(56, Math.ceil((QM + 30) / 3))
```

#### 99. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1866-L1868` → after: `L4065-L4081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR4065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L4065-L4081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L4065-L4081) · [Before (L1866-L1868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L1866-L1868)

```diff
- 
-     function oG(GG, bG, ZG) {
-       ZG.BAKED_VERTEX_ANIMATION_TEXTURE && ZG.INSTANCES && GG.push("bakedVertexAnimationSettingsInstanced")
+     class PM {
+       constructor(MM, rM) {
+         this.tries = void 0, this.dueMs = void 0, this.intervalMs = void 0, this.tries = [MM], this.dueMs = MM, this.intervalMs = rM
+       }
+       spacedBy(MM, rM) {
+         if (MM === this.intervalMs) return this;
+         const iM = this.tries[this.tries.length - 1],
+           OM = new PM(iM, MM);
+         return OM.dueMs = Math.max(iM, rM - MM), OM
+       }
+       nextDueMs() {
+         const MM = this.tries[this.tries.length - 1];
+         return Math.max(MM + 56, this.tries[0] + this.tries.length * this.intervalMs, this.dueMs + this.intervalMs)
+       }
+       noteTry(MM, rM) {
+         this.tries.push(MM), this.tries.length > 3 && this.tries.shift(), this.dueMs = rM
+ ... (1 more added lines; see GitHub link above)
```

#### 100. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1870-L1880` → after: `L4083-L4100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR4083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L4083-L4100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L4083-L4100) · [Before (L1870-L1880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L1870-L1880)

```diff
- 
-     function XG(GG, bG, ZG) {
-       var wG;
-       if (bG && GG && (GG.computeBonesUsingShaders && bG._bonesComputationForcedToCPU && (GG.computeBonesUsingShaders = !1), GG.useBones && GG.computeBonesUsingShaders && GG.skeleton)) {
-         const SG = GG.skeleton;
-         if (SG.isUsingTextureForMatrices && bG.getUniformIndex("boneTextureInfo") > -1) {
-           const ZG = SG.getTransformMatrixTexture(GG);
-           bG.setTexture("boneSampler", ZG), bG.setFloat2("boneTextureInfo", SG._textureWidth, SG._textureHeight)
-         } else {
-           const LG = SG.getTransformMatrices(GG);
-           LG && (bG.setMatrices("mBones", LG), ZG && GG.Dv().prePassRenderer && GG.Dv().prePassRenderer.getIndex(2) && (ZG.previousBones[GG.uniqueId] || (ZG.previousBones[GG.uniqueId] = LG.slice()), bG.setMatrices("mPreviousBones", ZG.previousBones[GG.uniqueId]), wG = LG, ZG.prev … [truncated]
+     var nM = iM(40121),
+       QM = iM(1313);
+     class zM {
+       constructor() {
+         this.timer = null, this.tries = new PM(0, 0), this.check = () => {
+           const MM = Date.now(),
+             rM = this.tries.spacedBy(aM(), MM),
+             iM = rM.nextDueMs();
+           if (MM < iM) this.schedule();
+           else {
+             if (rM.noteTry(MM, iM), this.tries = rM, (0, QM.B)() && !(0, nM.c)()) {
+               var SM, PM;
+               (0, OM.g)();
+               const MM = (0, jM.f)();
+               null === (SM = MM.hU.qrM(MM.eD)) || void 0 === SM || null === (PM = SM.QG) || void 0 === PM || PM.repeatAttack()
+             }
+ ... (2 more added lines; see GitHub link above)
```

#### 101. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1883-L1896` → after: `L4103-L4117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR4103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L4103-L4117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L4103-L4117) · [Before (L1883-L1896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L1883-L1896)

```diff
-     }
- 
-     function uG(GG, bG, ZG, wG, SG) {
-       let LG = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
-       GG._bindLight(bG, ZG, wG, SG, LG)
-     }
-     const iG = 4,
-       CG = new WeakMap;
- 
-     function WG(GG, bG, ZG, wG) {
-       let SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4;
-       const LG = Math.min(bG.lightSources.length, SG);
-       for (let yG = 0; yG < LG; yG++) {
-         uG(bG.lightSources[yG], yG, GG, ZG, "boolean" === typeof wG ? wG : wG.SPECULARTERM, bG.receiveShadows)
+       start() {
+         var MM;
+         null === (MM = zM.running) || void 0 === MM || MM.stop(), zM.running = this, this.tries = new PM(Date.now(), aM()), this.schedule()
+       }
+       static stopRunning() {
+         var MM;
+         null === (MM = zM.running) || void 0 === MM || MM.stop()
+       }
+       stop() {
+         clearTimeout(this.timer), this.timer = null, zM.running === this && (zM.running = null)
+       }
+       schedule() {
+         const MM = Date.now(),
+           rM = this.tries.spacedBy(aM(), MM).nextDueMs() - MM;
+         this.timer = setTimeout(this.check, Math.min(rM, 100))
```

#### 102. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1900-L1912` → after: `L4139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR4139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L4139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L4139) · [Before (L1900-L1912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L1900-L1912)

```diff
-     function mG(GG, bG, ZG, wG) {
-       ZG.NUM_BONE_INFLUENCERS > 0 && (wG.addCPUSkinningFallback(0, bG), GG.push("matricesIndices"), GG.push("matricesWeights"), ZG.NUM_BONE_INFLUENCERS > 4 && (GG.push("matricesIndicesExtra"), GG.push("matricesWeightsExtra")))
-     }
- 
-     function IG(GG, bG) {
-       (bG.INSTANCES || bG.THIN_INSTANCES) && KG(GG, !!bG.PREPASS_VELOCITY), bG.INSTANCESCOLOR && GG.push("instanceColor")
-     }
- 
-     function FG(GG, bG) {
-       let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
-         wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
-         SG = 0;
-       for (let LG = 0; LG < ZG && GG["LIGHT" + LG]; LG++) LG > 0 && (SG = wG + LG, bG.addFallback(SG, "LIGHT" + LG)), GG.SHADOWS || (GG["SHADOW" + LG] && bG.addFallback(wG, "SHADOW" + LG), GG["SHADOWPCF" + LG] && bG.addFallback(wG, "SHADOWPCF" + LG), GG["SHADOWPCSS" + LG] && bG.a … [truncated]
+     function zM() {
```

#### 103. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1916-L1928` → after: `L4143-L4144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR4143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L4143-L4144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L4143-L4144) · [Before (L1916-L1928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L1916-L1928)

```diff
-     function vG(GG, bG, ZG, wG, SG, LG, yG) {
-       let kG = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
-         UG = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
-         YG = arguments.length > 9 ? arguments[9] : void 0,
-         VG = arguments.length > 10 ? arguments[10] : void 0;
-       if (yG._areMiscDirty) {
-         yG.LOGARITHMICDEPTH = ZG, yG.POINTSIZE = wG, yG.FOG = SG && function(GG, bG) {
-           return bG.fogEnabled && GG.applyFog && 0 !== bG.fogMode
-         }(GG, bG), yG.NONUNIFORMSCALING = GG.nonUniformScaling, yG.ALPHATEST = LG, yG.DECAL_AFTER_DETAIL = kG, yG.USE_VERTEX_PULLING = UG, yG.RIGHT_HANDED = bG.useRightHandedSystem;
-         const pG = UG ? YG?.geometry?.getIndexBuffer() : null,
-           fG = !!YG && YG.isUnIndexed;
-         yG.VERTEX_PULLING_USE_INDEX_BUFFER = !!pG && !fG, yG.VERTEX_PULLING_INDEX_BUFFER_32BITS = !(!pG || fG) && pG.is32Bits, yG.VERTEXOUTPUT_INVARIANT = !!VG
-       }
+     function LM() {
+       QM.clear()
```

#### 104. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1931-L1938` → after: `L4147-L4152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR4147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L4147-L4152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L4147-L4152) · [Before (L1931-L1938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L1931-L1938)

```diff
-     function aG(GG, bG, ZG) {
-       let wG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-       if (!GG.lightsEnabled || wG) return !0;
-       const SG = bG.lightSources,
-         LG = Math.min(SG.length, ZG);
-       for (let yG = 0; yG < LG; yG++)
-         if (!SG[yG].areLightTexturesReady()) return !1;
-       return !0
+     function mM() {
+       for (const MM of QM.ids()) {
+         const rM = QM.getName(MM);
+         void 0 !== rM && aM.c.delete(rM)
+       }
+       LM(), PM.i.Tz("playerRosterChanged", QM.ids())
```

#### 105. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1941-L1973` → after: `L4155-L4159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR4155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L4155-L4159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L4155-L4159) · [Before (L1941-L1973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L1941-L1973)

```diff
-     function cG(GG, bG, ZG, SG) {
-       let LG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4,
-         yG = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
-       if (!ZG._areLightsDirty) return ZG._needNormals;
-       const kG = LG;
-       LG = function(GG, bG) {
-         const ZG = GG.CK().getCaps().maxUniformBuffersPerShaderStage;
-         if (null == ZG) return bG;
-         const wG = Math.max(ZG - iG, 1);
-         return Math.min(bG, wG)
-       }(GG, LG);
-       let UG = 0;
-       const YG = {
-         needNormals: ZG._needNormals,
-         needRebuild: !1,
-         lightmapMode: !1,
- ... (17 more removed lines; see GitHub link above)
+     function HM(MM, rM) {
+       var iM, OM;
+       if (QM.has(MM)) return QM.getSetting(MM, rM);
+       const SM = (0, nM.f)();
+       return null === (iM = SM.rY[SM.eD]) || void 0 === iM || null === (OM = iM[MM]) || void 0 === OM ? void 0 : OM[rM]
```

#### 106. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1976-L2014` → after: `L4162-L4181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR4162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L4162-L4181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L4162-L4181) · [Before (L1976-L2014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L1976-L2014)

```diff
-     function lG(GG, bG, ZG) {
-       let wG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-         SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 8,
-         LG = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
-       if (bG && kG.d.ReflectionTextureEnabled) {
-         if (!bG.isReadyOrNotBlocking()) return !1;
-         ZG._needNormals = !0, ZG.REFLECTION = !0, ZG.GAMMAREFLECTION = bG.gammaSpace, ZG.RGBDREFLECTION = bG.isRGBD, ZG.LODINREFLECTIONALPHA = bG.lodLevelInAlpha, ZG.LINEARSPECULARREFLECTION = bG.linearSpecularLOD, ZG.USEIRRADIANCEMAP = !1, ZG.LODBASEDMICROSFURACE = GG.CK().getCa … [truncated]
-         const yG = GG.CK();
-         switch (wG && SG > 0 ? (ZG.NUM_SAMPLES = "" + SG, yG._features.needTypeSuffixInShaderConstants && (ZG.NUM_SAMPLES = ZG.NUM_SAMPLES + "u"), ZG.REALTIME_FILTERING = !0, GG.iblCdfGenerator && (ZG.IBL_CDF_FILTERING = !0)) : ZG.REALTIME_FILTERING = !1, ZG.INVERTCUBICMAP = 6 == … [truncated]
-           case 0:
-             ZG.REFLECTIONMAP_EXPLICIT = !0;
-             break;
-           case 2:
-             ZG.REFLECTIONMAP_PLANAR = !0;
-             break;
-           case 4:
- ... (23 more removed lines; see GitHub link above)
+     function hM(MM) {
+       const {
+         added: rM,
+         removed: iM,
+         settingChanges: OM
+       } = QM.apply(MM);
+       for (const {
+           playerId: SM,
+           name: jM
+         }
+         of iM) void 0 === jM || dM(SM) || aM.c.delete(jM);
+       for (const {
+           playerId: jM,
+           settings: aM
+         }
+         of OM)
+ ... (4 more added lines; see GitHub link above)
```

#### 107. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2017-L2033` → after: `L4184-L4188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR4184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L4184-L4188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L4184-L4188) · [Before (L2017-L2033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L2017-L2033)

```diff
-     function jG(GG, bG, ZG, wG, SG, yG, kG) {
-       switch (kG.needNormals = !0, void 0 === SG["LIGHT" + wG] && (kG.needRebuild = !0), SG["LIGHT" + wG] = !0, SG["SPOTLIGHT" + wG] = !1, SG["HEMILIGHT" + wG] = !1, SG["POINTLIGHT" + wG] = !1, SG["DIRLIGHT" + wG] = !1, SG["AREALIGHT" + wG] = !1, SG["CLUSTLIGHT" + wG] = !1, ZG.pr … [truncated]
-         case LG.b.FALLOFF_GLTF:
-           SG["LIGHT_FALLOFF_GLTF" + wG] = !0;
-           break;
-         case LG.b.FALLOFF_PHYSICAL:
-           SG["LIGHT_FALLOFF_PHYSICAL" + wG] = !0;
-           break;
-         case LG.b.FALLOFF_STANDARD:
-           SG["LIGHT_FALLOFF_STANDARD" + wG] = !0
-       }
-       if (yG && !ZG.specular.equalsFloats(0, 0, 0) && (kG.specularEnabled = !0), SG["SHADOW" + wG] = !1, SG["SHADOWCSM" + wG] = !1, SG["SHADOWCSMDEBUG" + wG] = !1, SG["SHADOWCSMNUM_CASCADES" + wG] = !1, SG["SHADOWCSMUSESHADOWMAXZ" + wG] = !1, SG["SHADOWCSMNOBLEND" + wG] = !1, SG[ … [truncated]
-         const bG = ZG.getShadowGenerator(GG.activeCamera) ?? ZG.getShadowGenerator();
-         if (bG) {
-           const GG = bG.getShadowMap();
-           GG && GG.renderList && GG.renderList.length > 0 && (kG.shadowEnabled = !0, bG.prepareDefines(SG, wG))
- ... (1 more removed lines; see GitHub link above)
+     function JM(MM) {
+       let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QM.getSettings(MM);
+       if (rM) {
+         (0, SM.e)(MM);
+         for (const iM in rM)(0, SM.d)(MM, iM, rM[iM])
```

#### 108. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2038-L2057` → after: `L4192-L4225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR4192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L4192-L4225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L4192-L4225) · [Before (L2038-L2057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L2038-L2057)

```diff
-     function PG(GG, bG, ZG, wG, SG) {
-       let LG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
-         kG = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-         UG = function(GG, bG) {
-           let ZG = !1;
-           if (GG.activeCamera) {
-             const wG = bG.CAMERA_ORTHOGRAPHIC ? 1 : 0,
-               SG = bG.CAMERA_PERSPECTIVE ? 1 : 0,
-               LG = 1 === GG.activeCamera.mode ? 1 : 0,
-               yG = 0 === GG.activeCamera.mode ? 1 : 0;
-             (wG ^ LG || SG ^ yG) && (bG.CAMERA_ORTHOGRAPHIC = 1 === LG, bG.CAMERA_PERSPECTIVE = 1 === yG, ZG = !0)
-           }
-           return ZG
-         }(GG, wG);
-       !1 !== LG && (UG = (0, yG.i)(ZG, GG, wG)), wG.DEPTHPREPASS !== !bG.getColorWrite() && (wG.DEPTHPREPASS = !wG.DEPTHPREPASS, UG = !0), wG.INSTANCES !== SG && (wG.INSTANCES = SG, UG = !0), wG.THIN_INSTANCES !== kG && (wG.THIN_INSTANCES = kG, UG = !0), UG && wG.markAsUnprocesse … [truncated]
-     }
- ... (4 more removed lines; see GitHub link above)
+     function dM(MM) {
+       return MM === (0, nM.f)().IMM || (0, nM.b)().client.hasEntity(MM)
+     }(0, jM.onGameReset)(LM)
+   },
+   39074: (MM, rM, iM) => {
+     iM.d(rM, {
+       b: () => tM,
+       f: () => CM,
+       j: () => bM,
+       n: () => wM,
+       r: () => gM
+     });
+     var OM = iM(38034),
+       SM = iM(39078),
+       jM = iM(347),
+       aM = iM.n(jM),
+ ... (18 more added lines; see GitHub link above)
```

#### 109. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2059-L2065` → after: `L4227-L4229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR4227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L4227-L4229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L4227-L4229) · [Before (L2059-L2065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L2059-L2065)

```diff
-     function nG(GG, bG, ZG, SG) {
-       let LG = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
-         yG = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
-         kG = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
-       if (!bG._areAttributesDirty && bG._needNormals === bG._normals && bG._needUVs === bG._uvs) return !1;
-       bG._normals = bG._needNormals, bG._uvs = bG._needUVs, bG.NORMAL = bG._needNormals && GG.isVerticesDataPresent("normal"), bG._needNormals && GG.isVerticesDataPresent("tangent") && (bG.TANGENT = !0);
-       for (let wG = 1; wG <= 6; ++wG) bG["UV" + wG] = !!bG._needUVs && GG.isVerticesDataPresent(`uv${1===wG?"":wG}`);
+     function CM(MM, rM) {
+       var iM, SM;
+       const jM = eM(MM, rM);
```

#### 110. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2067-L2103` → after: `L4231-L4250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR4231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L4231-L4250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L4231-L4250) · [Before (L2067-L2103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L2067-L2103)

```diff
-         const ZG = GG.useVertexColors && GG.isVerticesDataPresent("color");
-         bG.VERTEXCOLOR = ZG, bG.VERTEXALPHA = GG.hasVertexAlpha && ZG && yG
-       }
-       return GG.isVerticesDataPresent("instanceColor") && (GG.zSG || GG.hasThinInstances) && (bG.INSTANCESCOLOR = !0), SG && function(GG, bG) {
-         if (GG.useBones && GG.computeBonesUsingShaders && GG.skeleton) {
-           bG.NUM_BONE_INFLUENCERS = GG.numBoneInfluencers;
-           const ZG = void 0 !== bG.BONETEXTURE;
-           if (GG.skeleton.isUsingTextureForMatrices && ZG) bG.BONETEXTURE = !0;
-           else {
-             bG.BonesPerMesh = GG.skeleton.bones.length + 1, bG.BONETEXTURE = !ZG && void 0;
-             const SG = GG.Dv(),
-               LG = SG.prePassRenderer;
-             if (LG && LG.enabled) {
-               const ZG = -1 === LG.excludedSkinnedMesh.indexOf(GG);
-               bG.BONES_VELOCITY_ENABLED = ZG
-             }
- ... (21 more removed lines; see GitHub link above)
+         const MM = jM.x,
+           rM = jM.y,
+           iM = MM - 50,
+           OM = rM - 50;
+         return Math.abs(iM) <= PM.e && Math.abs(OM) <= (0, PM.k)() ? {
+           x: MM,
+           y: rM
+         } : RM(iM, OM)
+       }
+       zM.iMM(rM[0], rM[1], rM[2]),
+         function(MM) {
+           const rM = MM.CL.YiM(),
+             iM = rM ? OM.Matrix.FromArrayToRef(rM.worldMatrix, 0, EM) : MM.CL.Hk().activeCamera.getWorldMatrix();
+           OM.sh.TransformNormalToRef(JM, iM, LM), LM.normalize(), OM.sh.TransformNormalToRef(dM, iM, mM), mM.normalize()
+         }(MM);
+       const aM = OM.sh.Dot(zM, LM);
+ ... (4 more added lines; see GitHub link above)
```

#### 111. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2107-L2110` → after: `L4254-L4263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR4254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L4254-L4263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L4254-L4263) · [Before (L2107-L2110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L2107-L2110)

```diff
-       if (GG.activeCamera) {
-         const ZG = bG.MULTIVIEW;
-         bG.MULTIVIEW = null !== GG.activeCamera.outputRenderTarget && GG.activeCamera.outputRenderTarget.getViewCount() > 1, bG.MULTIVIEW != ZG && bG.markAsUnprocessed()
-       }
+       const iM = MM.CL.Hk(),
+         SM = iM.ph(),
+         jM = SM.getRenderWidth(),
+         aM = SM.getRenderHeight();
+       GM.width = jM, GM.height = aM;
+       const PM = MM.CL.YiM(),
+         zM = PM ? UM.iMM(PM.eye[0], PM.eye[1], PM.eye[2]) : MM.CL.camera.globalPosition;
+       nM.iMM(zM.x + 10 * rM[0], zM.y + 10 * rM[1], zM.z + 10 * rM[2]);
+       const LM = PM ? OM.Matrix.FromArrayToRef(PM.viewProjectionMatrix, 0, lM) : iM.getTransformMatrix();
+       return OM.sh.ProjectToRef(nM, yM, LM, GM, QM), QM.z < 0 || QM.z > 1 ? null : (hM.x = QM.x / jM * 100, hM.y = QM.y / aM * 100, hM)
```

#### 112. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2113-L2116` → after: `L4266-L4267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR4266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L4266-L4267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L4266-L4267) · [Before (L2113-L2116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L2113-L2116)

```diff
-     function eG(GG, bG, ZG) {
-       const wG = bG.ORDER_INDEPENDENT_TRANSPARENCY,
-         SG = bG.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;
-       bG.ORDER_INDEPENDENT_TRANSPARENCY = GG.useOrderIndependentTransparency && ZG, bG.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !GG.CK().getCaps().textureFloatLinearFiltering, wG === bG.ORDER_INDEPENDENT_TRANSPARENCY && SG === bG.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || bG.markAsU … [truncated]
+     function bM(MM, rM) {
+       return CM(MM, uM(MM, rM))
```

#### 113. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2119-L2180` → after: `L4270-L4275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR4270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L4270-L4275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L4270-L4275) · [Before (L2119-L2180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L2119-L2180)

```diff
-     function RG(GG, bG, ZG) {
-       const wG = bG.PREPASS;
-       if (!bG._arePrePassDirty) return;
-       const SG = [{
-         type: 1,
-         define: "PREPASS_POSITION",
-         index: "PREPASS_POSITION_INDEX"
-       }, {
-         type: 9,
-         define: "PREPASS_LOCAL_POSITION",
-         index: "PREPASS_LOCAL_POSITION_INDEX"
-       }, {
-         type: 2,
-         define: "PREPASS_VELOCITY",
-         index: "PREPASS_VELOCITY_INDEX"
-       }, {
- ... (46 more removed lines; see GitHub link above)
+     function wM(MM, rM) {
+       const iM = eM(MM, uM(MM, rM));
+       return iM && {
+         x: iM.x,
+         y: iM.y
+       }
```

#### 114. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2183-L2190` → after: `L4278-L4280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR4278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L4278-L4280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L4278-L4280) · [Before (L2183-L2190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L2183-L2190)

```diff
-     function TG(GG, bG, ZG, wG) {
-       let SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
-         LG = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         yG = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-         kG = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
-         UG = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
-         YG = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
-       SG && SG.push("Light" + GG), LG || (bG.push("vLightData" + GG, "vLightDiffuse" + GG, "vLightSpecular" + GG, "vLightDirection" + GG, "vLightWidth" + GG, "vLightHeight" + GG, "vLightFalloff" + GG, "vLightGround" + GG, "vSliceData" + GG, "vSliceRanges" + GG, "lightMatrix" + GG … [truncated]
+     function tM(MM) {
+       var rM, iM;
+       return 1 / (null !== (rM = null === (iM = MM.CL.YiM()) || void 0 === iM ? void 0 : iM.projectionMatrix[0]) && void 0 !== rM ? rM : MM.CL.Hk().activeCamera.getProjectionMatrix().m[0])
```

#### 115. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2194-L2196` → after: `L4284-L4288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR4284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L4284-L4288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L4284-L4288) · [Before (L2194-L2196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L2194-L2196)

```diff
-       const wG = ["vReflectionMicrosurfaceInfos", "vReflectionDominantDirection", "reflectionMatrix", "vReflectionInfos", "vReflectionPosition", "vReflectionSize", "vReflectionColor", "vReflectionFilteringInfo"];
-       ZG && wG.push("vSphericalX", "vSphericalY", "vSphericalZ", "vSphericalXX_ZZ", "vSphericalYY_ZZ", "vSphericalZZ", "vSphericalXY", "vSphericalYZ", "vSphericalZX", "vSphericalL00", "vSphericalL1_1", "vSphericalL10", "vSphericalL11", "vSphericalL2_2", "vSphericalL2_1", "vSpheri … [truncated]
-       bG.push("reflectionSampler", "reflectionSamplerLow", "reflectionSamplerHigh", "irradianceSampler", "icdfSampler")
+       const OM = MM.CL.YiM(),
+         SM = OM ? OM.worldMatrix : MM.CL.Hk().activeCamera.getWorldMatrix().m,
+         jM = MM.Am;
+       for (let aM = 0; aM < 3; aM++) rM[aM] = SM[12 + aM] + jM[aM], iM[aM] = SM[8 + aM];
+       aM().normalize(iM, iM)
```

#### 116. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2199-L2207` → after: `L4291-L4295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR4291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L4291-L4295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L4291-L4295) · [Before (L2199-L2207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L2199-L2207)

```diff
-     function tG(GG, bG, ZG) {
-       let wG, SG, LG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
-         yG = null;
-       if (GG.uniformsNames) {
-         const kG = GG;
-         wG = kG.uniformsNames, SG = kG.uniformBuffersNames, bG = kG.samplers, ZG = kG.defines, LG = kG.maxSimultaneousLights || 0, yG = kG.shaderLanguage ?? null
-       } else wG = GG, bG || (bG = []);
-       for (let kG = 0; kG < LG && ZG["LIGHT" + kG]; kG++) TG(kG, wG, bG, ZG["PROJECTEDLIGHTTEXTURE" + kG], SG, !1, ZG["IESLIGHTTEXTURE" + kG], ZG["CLUSTLIGHT" + kG], ZG["RECTAREALIGHTEMISSIONTEXTURE" + kG], 1 === yG);
-       ZG.NUM_MORPH_INFLUENCERS && (wG.push("morphTargetInfluences"), wG.push("morphTargetCount")), ZG.BAKED_VERTEX_ANIMATION_TEXTURE && (wG.push("bakedVertexAnimationSettings"), wG.push("bakedVertexAnimationTextureSizeInverted"), wG.push("bakedVertexAnimationTime"), bG.push("bake … [truncated]
+     function uM(MM, rM) {
+       const iM = MM.Am,
+         OM = MM.CL.YiM(),
+         SM = OM ? UM.iMM(OM.eye[0], OM.eye[1], OM.eye[2]) : MM.CL.camera.globalPosition;
+       return HM[0] = rM[0] - iM[0] - SM.x, HM[1] = rM[1] - iM[1] - SM.y, HM[2] = rM[2] - iM[2] - SM.z, aM().normalize(HM, HM), HM
```

#### 117. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2210-L2216` → after: `L4298-L4299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR4298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L4298-L4299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L4298-L4299) · [Before (L2210-L2216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L2210-L2216)

```diff
-     function DG(GG) {
-       let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-         ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-         wG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-         SG = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
-         LG = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
-       GG.addUniform("vReflectionInfos", 2), GG.addUniform("reflectionMatrix", 16), bG && GG.addUniform("vReflectionMicrosurfaceInfos", 3), ZG && (GG.addUniform("vReflectionPosition", 3), GG.addUniform("vReflectionSize", 3)), wG && (GG.addUniform("vReflectionFilteringInfo", 2), GG … [truncated]
+     function RM(MM, rM) {
+       return (0, PM.g)(MM, rM, PM.e, (0, PM.k)())
```

#### 118. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2219` → after: `L4302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR4302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L4302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L4302) · [Before (L2219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L2219)

```diff
-   40720: (GG, bG, ZG) => {
+   40014: (MM, rM, iM) => {
```

#### 119. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2221` → after: `L4304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR4304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L4304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L4304) · [Before (L2221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L2221)

```diff
-       c: () => LG
+       e: () => mM
```

#### 120. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2223-L2259` → after: `L4306-L4364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR4306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L4306-L4364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L4306-L4364) · [Before (L2223-L2259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L2223-L2259)

```diff
-     var wG = ZG(37439),
-       SG = ZG(40664);
-     class LG extends SG.e {
-       constructor(GG, bG) {
-         let ZG = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
-         super(GG, bG, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new wG.e, this._storeEffectOnSubMeshes = ZG
-       }
-       getEffect() {
-         return this._storeEffectOnSubMeshes ? this._activeEffect : super.getEffect()
-       }
-       isReady(GG, bG) {
-         return !!GG && (!this._storeEffectOnSubMeshes || (!GG.aE || 0 === GG.aE.length || this.isReadyForSubMesh(GG, GG.aE[0], bG)))
-       }
-       _isReadyForSubMesh(GG) {
-         const bG = GG.materialDefines;
-         return !(this.checkReadyOnEveryCall || !GG.effect || !bG || bG._renderId !== this.Dv().getRenderId())
- ... (21 more removed lines; see GitHub link above)
+     var OM = iM(181),
+       SM = iM(347),
+       jM = iM.n(SM),
+       aM = iM(37699),
+       PM = iM(37705),
+       nM = iM(3063);
+     const QM = OM.f.jy * OM.f.playerEyeToHeightRatio,
+       zM = 250,
+       LM = 1.1,
+       mM = new class {
+         constructor() {
+           this.entities = new Map, this.playing = new Map, this.msSinceLastScan = 0
+         }
+         add(MM, rM) {
+           this.entities.set(MM, rM)
+         }
+ ... (43 more added lines; see GitHub link above)
```

#### 121. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2263` → after: `L4367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR4367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L4367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L4367) · [Before (L2263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L2263)

```diff
-   40742: (GG, bG, ZG) => {
+   40065: (MM, rM, iM) => {
```

#### 122. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2265-L2266` → after: `L4369-L4370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR4369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L4369-L4370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L4369-L4370) · [Before (L2265-L2266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L2265-L2266)

```diff
-       d: () => LG,
-       g: () => SG
+       b: () => jM,
+       d: () => SM
```

#### 123. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2268` → after: `L4372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR4372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L4372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L4372) · [Before (L2268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L2268)

```diff
-     const wG = new WeakMap;
+     var OM = iM(22);
```

#### 124. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2271-L2297` → after: `L4375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR4375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L4375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L4375) · [Before (L2271-L2297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L2271-L2297)

```diff
-       const bG = GG.getVertexBuffers();
-       if (!bG) return null;
-       let ZG = wG.get(GG);
-       if (ZG) {
-         let GG = !1;
-         for (const wG in bG)
-           if (!ZG.has(wG)) {
-             GG = !0;
-             break
-           } if (!GG) return ZG
-       } else ZG = new Map, wG.set(GG, ZG);
-       for (const wG in bG) {
-         const GG = bG[wG];
-         if (GG) {
-           const bG = GG.byteOffset,
-             SG = GG.byteStride,
- ... (11 more removed lines; see GitHub link above)
+       return "refetchCode" === MM || "devDownloadJson" === MM || MM.startsWith("Plugin")
```

#### 125. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2301-L2304` → after: `L4379-L4386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR4379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L4379-L4386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L4379-L4386) · [Before (L2301-L2304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L2301-L2304)

```diff
-       bG.forEach(((bG, ZG) => {
-         const wG = `vp_${ZG}_info`;
-         GG.setFloat4(wG, bG.offset, bG.stride, bG.type, bG.normalized ? 1 : 0)
-       }))
+       "refetchCode" !== MM ? "Plugin|MobAiPlugin|ShowPetUi" !== MM ? Promise.all([iM.e(121), iM.e(122), iM.e(117), iM.e(119), iM.e(236)]).then((() => iM(44386))).then((iM => {
+         let {
+           runClientGameMessage: OM
+         } = iM;
+         OM(MM, rM)
+       })).catch((rM => {
+         console.error(`Game message ${MM} failed`, rM)
+       })) : OM.i.Tz("showPetUi", rM) : OM.i.Tz("refetchCode")
```

#### 126. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2307` → after: `L4389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR4389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L4389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L4389) · [Before (L2307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L2307)

```diff
-   40688: (GG, bG, ZG) => {
+   40048: (MM, rM, iM) => {
```

#### 127. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2309-L2310` → after: `L4391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR4391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L4391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L4391) · [Before (L2309-L2310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L2309-L2310)

```diff
-       d: () => kG,
-       g: () => UG
+       c: () => zM
```

#### 128. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2312-L2369` → after: `L4393-L4399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR4393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L4393-L4399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L4393-L4399) · [Before (L2312-L2369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L2312-L2369)

```diff
-     var wG = ZG(40393),
-       SG = ZG(37439),
-       LG = ZG(40398);
-     let yG = (() => {
-       var GG;
-       let bG, ZG, SG = [];
-       return GG = class {
-         static extractMinAndMaxIndexed(GG, bG, ZG, wG, SG, LG) {
-           for (let yG = ZG; yG < ZG + wG; yG++) {
-             const ZG = 3 * bG[yG],
-               wG = GG[ZG],
-               kG = GG[ZG + 1],
-               UG = GG[ZG + 2];
-             SG.minimizeInPlaceFromFloats(wG, kG, UG), LG.maximizeInPlaceFromFloats(wG, kG, UG)
-           }
-         }
- ... (42 more removed lines; see GitHub link above)
+     var OM = iM(1229),
+       SM = iM(1382),
+       jM = iM(19),
+       aM = iM(1360),
+       PM = iM(1373),
+       nM = iM(1591),
+       QM = iM(37416);
```

#### 129. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2371-L2378` → after: `L4401-L4409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR4401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L4401-L4409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L4401-L4409) · [Before (L2371-L2378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L2371-L2378)

```diff
-     function kG(GG, bG, ZG, wG) {
-       let LG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
-       const kG = new SG.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
-         UG = new SG.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
-       return yG.extractMinAndMaxIndexed(GG, bG, ZG, wG, kG, UG), LG && (kG.x -= kG.x * LG.x + LG.y, kG.y -= kG.y * LG.x + LG.y, kG.z -= kG.z * LG.x + LG.y, UG.x += UG.x * LG.x + LG.y, UG.y += UG.y * LG.x + LG.y, UG.z += UG.z * LG.x + LG.y), {
-         minimum: kG,
-         maximum: UG
-       }
+     function zM(MM) {
+       let {
+         Wr: rM,
+         sr: iM
+       } = MM;
+       const zM = null !== rM && void 0 !== rM ? rM : (0, PM.e)().gameNameWithVariation;
+       (0, OM.L)(zM) && ((0, QM.k)(), (0, aM.bb)((() => {
+         console.log("Received matchmaking order from game server to game", rM), (0, jM.j)("inGameReplay"), (0, nM.navigatePreserveSearch)((0, SM.b)(zM, null !== iM && void 0 !== iM ? iM : void 0))
+       }), "video_start"))
```

#### 130. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2381-L2389` → after: `L4425-L4460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR4425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L4425-L4460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L4425-L4460) · [Before (L2381-L2389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L2381-L2389)

```diff
-     function UG(GG, bG, ZG) {
-       let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
-         LG = arguments.length > 4 ? arguments[4] : void 0;
-       const kG = new SG.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
-         UG = new SG.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
-       return LG || (LG = 3), yG.extractMinAndMax(GG, bG, ZG, LG, kG, UG), wG && (kG.x -= kG.x * wG.x + wG.y, kG.y -= kG.y * wG.x + wG.y, kG.z -= kG.z * wG.x + wG.y, UG.x += UG.x * wG.x + wG.y, UG.y += UG.y * wG.x + wG.y, UG.z += UG.z * wG.x + wG.y), {
-         minimum: kG,
-         maximum: UG
-       }
+     function nM(MM, rM) {
+       SM.i.Tz("newUiRequest", {
+         id: MM,
+         clientParameters: rM
+       }, !0)
+     }
+ 
+     function QM(MM) {
+       SM.i.Tz("removeUiRequest", MM, !0);
+       const rM = PM.get(MM);
+       rM && (rM.tearDownNotification(), PM.delete(MM))
+     }
+ 
+     function zM() {
+       SM.i.Tz("clearUiRequests");
+       for (const MM of PM.values()) MM.tearDownNotification();
+ ... (20 more added lines; see GitHub link above)
```

#### 131. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2392` → after: `L4463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR4463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L4463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L4463) · [Before (L2392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L2392)

```diff
-   40673: (GG, bG, ZG) => {
+   40036: (MM, rM, iM) => {
```

#### 132. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2403-L2443` → after: `L4468-L4490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR4468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L4468-L4490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L4468-L4490) · [Before (L2403-L2443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L2403-L2443)

```diff
-       get materialDefines() {
-         const GG = this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.defines : this._getDrawWrapper()?.defines;
-         return "string" === typeof GG ? null : GG
-       }
-       set materialDefines(GG) {
-         (this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)).defines = GG
-       }
-       _getDrawWrapper(GG) {
-         let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         GG = GG ?? this._engine.currentRenderPassId;
-         let ZG = this._drawWrappers[GG];
-         return !ZG && bG && (this._drawWrappers[GG] = ZG = new UG.c(this._mesh.Dv().CK())), ZG
-       }
-       _removeDrawWrapper(GG) {
-         let bG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._drawWrappers[GG]?.dispose(bG), this._drawWrappers[GG] = void 0
- ... (25 more removed lines; see GitHub link above)
+       constructor() {
+         this.members = new Map
+       }
+       apply(MM) {
+         const rM = {
+           added: [],
+           removed: [],
+           settingChanges: []
+         };
+         for (const OM of MM.MM) {
+           let MM = this.members.get(OM.rM);
+           if (MM || (MM = {
+               name: null,
+               settings: {}
+             }, this.members.set(OM.rM, MM), rM.added.push(OM.rM)), null !== OM.iM && (MM.name = OM.iM), null !== OM.OM || OM.SM.length > 0) {
+             const iM = null === OM.OM ? {} : JSON.parse(OM.OM);
+ ... (7 more added lines; see GitHub link above)
```

#### 133. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2445-L2483` → after: `L4492-L4498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR4492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L4492-L4498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L4492-L4498) · [Before (L2445-L2483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L2445-L2483)

```diff
-         this._drawWrappers = []
-       }
-       static AddToMesh(GG, bG, ZG, wG, SG, LG, yG) {
-         return new VG(GG, bG, ZG, wG, SG, LG, yG, !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7])
-       }
-       constructor(GG, bG, ZG, wG, SG, LG, yG) {
-         let kG = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
-           UG = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8];
-         this.materialIndex = GG, this.verticesStart = bG, this.verticesCount = ZG, this.indexStart = wG, this.indexCount = SG, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastCollide … [truncated]
-       }
-       get IsGlobal() {
-         return 0 === this.verticesStart && this.verticesCount === this._mesh.getTotalVertices() && 0 === this.indexStart && this.indexCount === this._mesh.getTotalIndices()
-       }
-       HA() {
-         return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.HA() : this._boundingInfo
-       }
- ... (23 more removed lines; see GitHub link above)
+         for (const OM of MM.jM) {
+           const MM = this.members.get(OM);
+           var iM;
+           if (MM) this.members.delete(OM), rM.removed.push({
+             playerId: OM,
+             name: null !== (iM = MM.name) && void 0 !== iM ? iM : void 0
+           })
```

#### 134. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2487-L2488` → after: `L4502-L4503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR4502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L4502-L4503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L4502-L4503) · [Before (L2487-L2488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L2487-L2488)

```diff
-       _isMultiMaterial(GG) {
-         return void 0 !== GG.getSubMaterial
+       has(MM) {
+         return this.members.has(MM)
```

#### 135. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2490-L2564` → after: `L4505-L4506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR4505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L4505-L4506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L4505-L4506) · [Before (L2490-L2564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L2490-L2564)

```diff
-       refreshBoundingInfo() {
-         let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
-         if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.geometry) return this;
-         if (GG || (GG = this._renderingMesh.getVerticesData(SG.l.PositionKind)), !GG) return this._boundingInfo = this._mesh.HA(), this;
-         const bG = this._renderingMesh.IwG();
-         let ZG;
-         if (0 === this.indexStart && this.indexCount === bG.length) {
-           const GG = this._renderingMesh.HA();
-           ZG = {
-             minimum: GG.minimum.clone(),
-             maximum: GG.maximum.clone()
-           }
-         } else ZG = (0, kG.d)(GG, bG, this.indexStart, this.indexCount, this._renderingMesh.geometry.boundingBias);
-         return this._boundingInfo ? this._boundingInfo.reConstruct(ZG.minimum, ZG.maximum) : this._boundingInfo = new yG.c(ZG.minimum, ZG.maximum), this
-       }
-       _checkCollision(GG) {
- ... (59 more removed lines; see GitHub link above)
+       ids() {
+         return [...this.members.keys()]
```

#### 136. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2566-L2574` → after: `L4508-L4510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR4508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L4508-L4510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L4508-L4510) · [Before (L2566-L2574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L2566-L2574)

```diff
-       _intersectUnIndexedLines(GG, bG, ZG, wG, SG) {
-         let yG = null;
-         for (let kG = this.verticesStart; kG < this.verticesStart + this.verticesCount; kG += 2) {
-           const ZG = bG[kG],
-             UG = bG[kG + 1],
-             YG = GG.intersectionSegment(ZG, UG, wG);
-           if (!(YG < 0) && ((SG || !yG || YG < yG.distance) && (yG = new LG.b(null, null, YG), yG.faceId = kG / 2, SG))) break
-         }
-         return yG
+       getName(MM) {
+         var rM, iM;
+         return null !== (rM = null === (iM = this.members.get(MM)) || void 0 === iM ? void 0 : iM.name) && void 0 !== rM ? rM : void 0
```

#### 137. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2576-L2599` → after: `L4512-L4514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR4512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L4512-L4514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L4512-L4514) · [Before (L2576-L2599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L2576-L2599)

```diff
-       _intersectTriangles(GG, bG, ZG, wG, SG, LG, yG) {
-         let kG = null,
-           UG = -1;
-         for (let YG = this.indexStart; YG < this.indexStart + this.indexCount - (3 - wG); YG += wG) {
-           UG++;
-           const wG = ZG[YG],
-             VG = ZG[YG + 1],
-             pG = ZG[YG + 2];
-           if (SG && 4294967295 === pG) {
-             YG += 2;
-             continue
-           }
-           const fG = bG[wG],
-             QG = bG[VG],
-             KG = bG[pG];
-           if (!fG || !QG || !KG) continue;
- ... (8 more removed lines; see GitHub link above)
+       getSettings(MM) {
+         var rM;
+         return null === (rM = this.members.get(MM)) || void 0 === rM ? void 0 : rM.settings
```

#### 138. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2601-L2614` → after: `L4516-L4518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR4516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L4516-L4518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L4516-L4518) · [Before (L2601-L2614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L2601-L2614)

```diff
-       _intersectUnIndexedTriangles(GG, bG, ZG, wG, SG) {
-         let LG = null;
-         for (let yG = this.verticesStart; yG < this.verticesStart + this.verticesCount; yG += 3) {
-           const ZG = bG[yG],
-             kG = bG[yG + 1],
-             UG = bG[yG + 2];
-           if (SG && !SG(ZG, kG, UG, GG, -1, -1, -1)) continue;
-           const YG = GG.intersectsTriangle(ZG, kG, UG);
-           if (YG) {
-             if (YG.distance < 0) continue;
-             if ((wG || !LG || YG.distance < LG.distance) && (LG = YG, LG.faceId = yG / 3, wG)) break
-           }
-         }
-         return LG
+       getSetting(MM, rM) {
+         var iM;
+         return null === (iM = this.members.get(MM)) || void 0 === iM ? void 0 : iM.settings[rM]
```

#### 139. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2616-L2617` → after: `L4520-L4521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR4520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L4520-L4521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L4520-L4521) · [Before (L2616-L2617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L2616-L2617)

```diff
-       _rebuild() {
-         this._linesIndexBuffer && (this._linesIndexBuffer = null)
+       clear() {
+         this.members.clear()
```

#### 140. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2619-L2626` → after: `L4523-L4536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR4523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L4523-L4536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L4523-L4536) · [Before (L2619-L2626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L2619-L2626)

```diff
-       clone(GG, bG) {
-         const ZG = new VG(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, GG, bG, !1);
-         if (!this.IsGlobal) {
-           const GG = this.HA();
-           if (!GG) return ZG;
-           ZG._boundingInfo = new yG.c(GG.minimum, GG.maximum)
-         }
-         return ZG
+     }
+   },
+   40073: (MM, rM, iM) => {
+     iM.d(rM, {
+       b: () => OM,
+       e: () => SM
+     });
+     const OM = ["description", "label"];
+ 
+     function SM(MM) {
+       const rM = MM.type;
+       return {
+         type: rM,
+         params: MM[rM]
```

#### 141. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2628-L2648` → after: `L4538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR4538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L4538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/266.js#L4538) · [Before (L2628-L2648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/266.js#L2628-L2648)

```diff
-       dispose() {
-         let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         this._linesIndexBuffer && (this._mesh.Dv().CK()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
-         const bG = this._mesh.aE.indexOf(this);
-         this._mesh.aE.splice(bG, 1), this.resetDrawCache(void 0, GG)
-       }
-       getClassName() {
-         return "SubMesh"
-       }
-       static CreateFromIndices(GG, bG, ZG, wG, SG) {
-         let LG = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
-           yG = Number.MAX_VALUE,
-           kG = -Number.MAX_VALUE;
-         const UG = (SG || wG).IwG();
-         for (let YG = bG; YG < bG + ZG; YG++) {
-           const GG = UG[YG];
- ... (5 more removed lines; see GitHub link above)
+     }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/267.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/267.js` (67 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8)

#### 1. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L4)

```diff
-   42032: (GG, bG, ZG) => {
+   39505: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L6)

```diff
-       d: () => wG
+       e: () => aM
```

#### 3. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L8-L9` → after: `L8-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L8-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L8-L72) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L8-L9)

```diff
-     class wG {}
-     wG.AUTOSAMPLERSUFFIX = "Sampler", wG.DISABLEUA = "#define DISABLE_UNIFORMITY_ANALYSIS", wG.ALPHA_DISABLE = 0, wG.ALPHA_ADD = 1, wG.ALPHA_COMBINE = 2, wG.ALPHA_SUBTRACT = 3, wG.ALPHA_MULTIPLY = 4, wG.ALPHA_MAXIMIZED = 5, wG.ALPHA_ONEONE = 6, wG.ALPHA_PREMULTIPLIED = 7, wG.ALPH … [truncated]
+     var OM = iM(39507);
+     const SM = [0, 0, 0];
+     class jM {
+       constructor(MM) {
+         let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SM;
+         this.pool = MM, this.origin = rM, this.count = 0, this.free = []
+       }
+       take() {
+         var MM;
+         const rM = null !== (MM = this.free.pop()) && void 0 !== MM ? MM : this.count++;
+         return rM >= this.pool.vL && this.pool.grow(Math.max(2 * this.pool.vL, rM + 1)), this.hide(rM), rM
+       }
+       release(MM) {
+         this.hide(MM), this.free.push(MM)
+       }
+       write(MM, rM, iM, SM) {
+ ... (49 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L11` → after: `L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L74) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L11)

```diff
-   42009: (GG, bG, ZG) => {
+   39511: (MM, rM, iM) => {
```

#### 5. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L13` → after: `L76-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L76-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L76-L78) · [Before (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L13)

```diff
-       b: () => UG
+       c: () => aM,
+       d: () => PM,
+       h: () => nM
```

#### 6. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L15-L32` → after: `L80-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L80-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L80-L107) · [Before (L15-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L15-L32)

```diff
-     var wG = ZG(40393),
-       SG = ZG(40398),
-       LG = ZG(37439),
-       yG = ZG(40635),
-       kG = ZG(40601);
-     let UG = (() => {
-       var GG;
-       let bG, ZG, UG, YG, VG = yG.c,
-         pG = [];
-       return GG = class extends VG {
-         constructor() {
-           super(...arguments), this._position = (0, wG.n)(this, pG), this._needProjectionMatrixCompute = !0, this._viewMatrix = LG.e.Identity(), this._projectionMatrix = LG.e.Identity()
-         }
-         _setPosition(GG) {
-           this._position = GG
-         }
- ... (2 more removed lines; see GitHub link above)
+     const OM = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
+       SM = [0, 1, 2, 0, 2, 3],
+       jM = [4, 5];
+ 
+     function aM(MM, rM, iM, OM, SM) {
+       for (let aM = 0; aM < 6; aM++) jM.includes(aM) === SM && QM(MM, rM, iM, OM, aM)
+     }
+ 
+     function PM(MM, rM, iM, OM) {
+       for (let SM = 0; SM < 6; SM++) QM(MM, rM, iM, OM, SM)
+     }
+ 
+     function nM(MM, rM, iM, jM, aM) {
+       for (let PM = 0; PM < 6; PM++)
+         for (const nM of [0, 1]) {
+           const [QM, zM, LM] = [nM + 2, nM + 1, (nM + 3) % 4], mM = MM.length / 3;
+ ... (12 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L34-L35` → after: `L109-L621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L109-L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L109-L621) · [Before (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L34-L35)

```diff
-         set position(GG) {
-           this._setPosition(GG)
+     }
+ 
+     function QM(MM, rM, iM, jM, aM) {
+       let [PM, nM, QM] = iM, [zM, LM, mM] = jM;
+       const HM = MM.length / 3;
+       for (let SM = 4 * aM; SM < 4 * aM + 4; SM++) MM.push(OM[3 * SM] * zM / 2 + PM, OM[3 * SM + 1] * LM / 2 + nM, OM[3 * SM + 2] * mM / 2 + QM);
+       for (const OM of SM) rM.push(HM + OM)
+     }
+   },
+   39483: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       default: () => dl
+     });
+     var OM = iM(44);
+     const SM = [{
+         nameKey: "tierBurner",
+ ... (497 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L37-L38` → after: `L623-L894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L623-L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L623-L894) · [Before (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L37-L38)

```diff
-         _setDirection(GG) {
-           this._direction = GG
+       }
+     }
+     const hM = {
+       tier: "coreTierName",
+       stage: "coreStageName",
+       atomic: "coreAtomicName"
+     };
+ 
+     function JM(MM, rM) {
+       return LM(MM) > 0 && rM < jM
+     }
+ 
+     function dM(MM) {
+       const rM = LM(MM);
+       if (rM > 0) return {
+         kind: "atomic",
+ ... (256 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L40-L41` → after: `L896-L900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L896-L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L896-L900) · [Before (L40-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L40-L41)

```diff
-         get direction() {
-           return this._direction
+       },
+       Wr = function(MM, rM) {
+         return {
+           ...pr(MM, rM, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
+           nuclear: !0
```

#### 10. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L43-L44` → after: `L902-L1387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L902-L1387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L902-L1387) · [Before (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L43-L44)

```diff
-         set direction(GG) {
-           this._setDirection(GG)
+       },
+       sr = ur.map((MM => Wr(MM, "Biomass", 2))),
+       Dr = {
+         "Burner Drill": {
+           kind: "Burner Drill",
+           opMs: 4e3,
+           inputSlot: null,
+           fuelSlot: 0,
+           outputSlots: [1, 2, 3],
+           recipes: []
+         },
+         Crusher: {
+           kind: "Crusher",
+           opMs: 4e3,
+           inputSlot: 0,
+           fuelSlot: 1,
+ ... (470 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L46-L47` → after: `L1389-L1740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R1389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L1389-L1740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L1389-L1740) · [Before (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L46-L47)

```diff
-         get shadowMinZ() {
-           return this._shadowMinZ
+       },
+       bi = "Reactor Frame",
+       wi = "Reactor Glass",
+       ti = {
+         edge: [bi],
+         cap: [wi, li],
+         wall: [wi, li],
+         inside: ["Fuel Rod", "Graphite Block", "Coolant Channel", "Air"],
+         ctrl: [yi]
+       },
+       gi = {
+         edge: [Ei],
+         cap: [Ei],
+         wall: [Ei],
+         inside: [Ei],
+         ctrl: [Ei]
+ ... (336 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L49-L50` → after: `L1742-L1835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R1742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L1742-L1835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L1742-L1835) · [Before (L49-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L49-L50)

```diff
-         set shadowMinZ(GG) {
-           this._shadowMinZ = GG, this.forceProjectionMatrixCompute()
+       }
+       return {
+         name: zM,
+         detail: (0, DM.se)(MM.description(rM)),
+         detailItem: null
+       }
+     }
+ 
+     function oO(MM) {
+       return MM < mi.q - 24
+     }
+     const fO = new Set(["Comet Ore", "Comet Heart", "Isotope Comet Ore", "Isotope Comet Heart"]);
+     const YO = "Wrench",
+       NO = "Nova Wrench";
+ 
+     function AO(MM) {
+ ... (78 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L52-L53` → after: `L1837-L15485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R1837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L1837-L15485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L1837-L15485) · [Before (L52-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L52-L53)

```diff
-         get shadowMaxZ() {
-           return this._shadowMaxZ
+       }
+       const nM = AO(rM) ? TO(MM) : null;
+       if (null === nM) return {
+         mode: jM,
+         detail: aM,
+         next: null,
+         nextState: null
+       };
+       const QM = qO(nM);
+       return null === QM || XO(nM) !== XO(MM) ? {
+         mode: jM,
+         detail: aM,
+         next: `${MS}lookWrenchTurn`,
+         nextState: null
+       } : {
+         mode: jM,
+ ... (13633 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L55-L56` → after: `L15487-L15490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R15487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L15487-L15490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L15487-L15490) · [Before (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L55-L56)

```diff
-         set shadowMaxZ(GG) {
-           this._shadowMaxZ = GG, this.forceProjectionMatrixCompute()
+       }
+       subscribe(MM) {
+         return this.listeners.add(MM), () => {
+           this.listeners.delete(MM)
```

#### 15. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L58-L59` → after: `L15492-L15549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R15492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L15492-L15549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L15492-L15549) · [Before (L58-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L58-L59)

```diff
-         computeTransformedInformation() {
-           return !(!this.parent || !this.parent.getWorldMatrix) && (this.transformedPosition || (this.transformedPosition = LG.p.Zero()), LG.p.TransformCoordinatesToRef(this.position, this.parent.getWorldMatrix(), this.transformedPosition), this.direction && (this.transformedDire … [truncated]
+       }
+       dispose() {
+         this.listeners.clear(), this.island = null, this.views = [], this.status = null, this.openHeld = null
+       }
+       emit() {
+         for (const MM of this.listeners) MM()
+       }
+     }
+     const kd = {
+       positions: [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1].map((MM => … [truncated]
+       indices: [0, 4, 8, 12, 16, 20].flatMap((MM => [MM, MM + 1, MM + 2, MM, MM + 2, MM + 3]))
+     };
+ 
+     function Zd(MM, rM, iM, OM, SM, jM, aM) {
+       let PM = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
+       const nM = Math.cos(PM),
+ ... (42 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L61-L62` → after: `L15551-L15615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R15551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L15551-L15615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L15551-L15615) · [Before (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L61-L62)

```diff
-         getDepthScale() {
-           return 50
+       }
+       dispose() {
+         var MM;
+         null === (MM = this.particles) || void 0 === MM || MM.dispose(), this.particles = null, this.sources = []
+       }
+       puff(MM, rM) {
+         let {
+           x: iM,
+           y: OM,
+           z: SM,
+           h: jM,
+           faces: aM
+         } = rM;
+         const PM = function(MM, rM, iM, OM, SM) {
+             const [jM, aM, PM] = SM[Math.floor(Math.random() * SM.length)], nM = .04, QM = (MM, rM, iM) => MM > 0 ? rM + iM + nM : MM < 0 ? rM - nM : rM + .1, zM = (MM, rM, iM) => MM > 0 ? rM + iM + nM : MM < 0 ? rM - nM : rM + iM - .1, LM = [QM(jM, MM, 1), QM(aM, rM, OM), QM(PM, … [truncated]
+             return {
+ ... (49 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L64-L65` → after: `L15617-L15644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R15617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L15617-L15644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L15617-L15644) · [Before (L64-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L64-L65)

```diff
-         getShadowDirection(GG) {
-           return this.transformedDirection ? this.transformedDirection : this.direction
+         this.green.setSources(rM), this.pink.setSources(iM)
+       }
+       onAfterRender(MM) {
+         const rM = performance.now(),
+           iM = 0 === this.lastMs ? 0 : Math.min(rM - this.lastMs, 250) / 1e3;
+         if (this.lastMs = rM, 0 === this.colliders.length || !MM.particlesEnabled()) return;
+         const OM = MM.getCameraPosition();
+         this.green.bL(MM, iM, OM), this.pink.bL(MM, iM, OM)
+       }
+       dispose() {
+         this.green.dispose(), this.pink.dispose(), this.colliders = []
+       }
+     }
+     const Ad = 1.04,
+       xd = od([1, 120 / 255, 220 / 255]),
+       vd = od([1, .25, .25], .35);
+ ... (12 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L67-L68` → after: `L15646-L15675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R15646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L15646-L15675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L15646-L15675) · [Before (L67-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L67-L68)

```diff
-         getAbsolutePosition() {
-           return this.transformedPosition ? this.transformedPosition : this.position
+         this.glow.onAfterRender(MM)
+       }
+       dispose(MM) {
+         this.clear(MM), this.glow.dispose(), this.builtVersion = -1
+       }
+       rebuild(MM) {
+         this.clear(MM), this.builtVersion = this.store.version();
+         const rM = [];
+         for (const {
+             entry: iM
+           }
+           of this.store.colliders()) iM.on && iM.live.some(Boolean) && (this.addBeams(MM, iM), rM.push(iM)), iM.blockers.length > 0 && this.addMarkers(MM, iM);
+         this.glow.setSources(rM)
+       }
+       addBeams(MM, rM) {
+         const [iM, OM, SM] = rM.focus, jM = qn - .25, aM = (.25 + qn) / 2;
+ ... (14 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L70-L71` → after: `L15677-L15748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R15677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L15677-L15748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L15677-L15748) · [Before (L70-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L70-L71)

```diff
-         setDirectionToTarget(GG) {
-           return this.direction = LG.p.Normalize(GG.subtract(this.position)), this.direction
+       }
+       addMarkers(MM, rM) {
+         const iM = rM.blockers[0],
+           OM = {
+             positions: [],
+             indices: []
+           };
+         for (const [SM, jM, aM] of rM.blockers) Zd(OM, SM - iM[0] + .5, jM - iM[1] + .5, aM - iM[2] + .5, Ad, Ad, Ad);
+         this.meshes.push(MM.createGameMesh(OM, vd, iM))
+       }
+       clear(MM) {
+         for (const rM of this.meshes) MM.disposeGameMesh(rM);
+         this.meshes = [], this.beams = []
+       }
+     }
+     const Bd = [.56, .83, 1],
+ ... (56 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L73-L77` → after: `L15750-L15761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R15750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L15750-L15761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L15750-L15761) · [Before (L73-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L73-L77)

```diff
-         getRotation() {
-           this.direction.normalize();
-           const GG = LG.p.Cross(this.direction, kG.c.Y),
-             bG = LG.p.Cross(GG, this.direction);
-           return LG.p.RotationFromAxis(GG, bG, this.direction)
+       }
+       dispose(MM) {
+         this.clear(MM), this.shownKey = ""
+       }
+       check(MM, rM) {
+         const iM = Vd(MM),
+           OM = [];
+         for (const {
+             entry: jM
+           }
+           of this.store.colliders()) {
+           jM.focus.every(((MM, iM) => Math.abs(MM + .5 - rM[iM]) <= nO.GHOST_REACH)) && OM.push(Kn(jM, iM))
```

#### 21. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L79-L80` → after: `L15763-L15814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R15763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L15763-L15814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L15763-L15814) · [Before (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L79-L80)

```diff
-         needCube() {
-           return !1
+         const SM = cd(OM);
+         SM !== this.shownKey && this.show(MM, SM, OM)
+       }
+       preview(MM, rM) {
+         const iM = MM.getTargetedBlock(),
+           OM = iM ? [iM.zd[0], iM.zd[1], iM.zd[2]] : null,
+           SM = null !== OM && OM.every(((MM, iM) => Math.abs(MM + .5 - rM[iM]) <= 8)),
+           jM = this.store.site(),
+           aM = SM && jM ? function(MM, rM, iM) {
+             const OM = dO(MM);
+             if (!OM.every(rM)) return null;
+             const SM = GO(MM, iM);
+             return {
+               column: OM,
+               spots: Kn({
+                 focus: OM[1],
+ ... (36 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L82-L83` → after: `L15816-L15833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R15816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L15816-L15833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L15816-L15833) · [Before (L82-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L82-L83)

```diff
-         needProjectionMatrixCompute() {
-           return this._needProjectionMatrixCompute
+       }
+       clear(MM) {
+         for (const rM of this.meshes) MM.disposeGameMesh(rM);
+         this.meshes = [], this.pulses = []
+       }
+     }
+     class iy {
+       constructor() {
+         this.stored = new Map, this.sQ = new Map, this.pending = [], this.order = [], this.recents = [], this.seq = 0, this.silos = 0, this.readOnly = !0, this.pocket = !1, this.listeners = new Set, this.version = 0
+       }
+       apply(MM) {
+         if (!MM.baf2TermOpen) return !1;
+         MM.baf2TermReset && (this.stored.clear(), this.pending = []);
+         for (const [rM, iM] of MM.baf2TermItems) iM > 0 ? this.stored.set(rM, iM) : this.stored.delete(rM);
+         if (MM.baf2TermHeld && (this.sQ = new Map(MM.baf2TermHeld)), this.pending = this.pending.filter((rM => rM.seq > MM.baf2TermAcked)), this.silos = MM.baf2TermSilos, this.readOnly = MM.baf2TermReadOnly, this.pocket = !0 === MM.baf2TermPocket, MM.baf2TermReset) this.resort();
+         else {
+ ... (2 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L85-L86` → after: `L15835-L15900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R15835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L15835-L15900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L15835-L15900) · [Before (L85-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L85-L86)

```diff
-         forceProjectionMatrixCompute() {
-           this._needProjectionMatrixCompute = !0
+         return this.changed(), !0
+       }
+       resort() {
+         this.order = [...this.stored.keys()].sort(((MM, rM) => this.amount(rM) - this.amount(MM) || MM.localeCompare(rM))), this.changed()
+       }
+       take(MM, rM) {
+         const iM = Pr(MM, this.amount(rM));
+         return this.seq++, this.pending.push({
+           seq: this.seq,
+           item: rM,
+           amount: iM,
+           put: !1
+         }), this.recents = [rM, ...this.recents.filter((MM => MM !== rM))].slice(0, 6), this.changed(), ir(this.seq, MM, rM)
+       }
+       put(MM, rM) {
+         return this.seq++, this.pending.push({
+ ... (50 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L88-L89` → after: `L15902-L16123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R15902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L15902-L16123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L15902-L16123) · [Before (L88-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L88-L89)

```diff
-         _initCache() {
-           super._initCache(), this._cache.position = LG.p.Zero()
+       }
+       changed() {
+         this.version++;
+         for (const MM of this.listeners) MM()
+       }
+     }
+     var Oy = iM(39420);
+     const Sy = {
+       isBlock: MM => void 0 !== pM.k[MM],
+       harvestType: MM => {
+         var rM;
+         return null === (rM = pM.k[MM]) || void 0 === rM ? void 0 : rM.harvestType
+       },
+       harvestLevel: MM => {
+         var rM;
+         return null === (rM = pM.k[MM]) || void 0 === rM ? void 0 : rM.harvestLevel
+ ... (206 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L91-L92` → after: `L16125-L16131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R16125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L16125-L16131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L16125-L16131) · [Before (L91-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L91-L92)

```diff
-         _isSynchronized() {
-           return !!this._cache.position.equals(this.position)
+       }
+       get() {
+         return this.snapshot
+       }
+       subscribe(MM) {
+         return this.listeners.add(MM), () => {
+           this.listeners.delete(MM)
```

#### 26. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L94-L95` → after: `L16133-L16181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R16133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L16133-L16181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L16133-L16181) · [Before (L94-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L94-L95)

```diff
-         computeWorldMatrix(GG) {
-           return !GG && this.isSynchronized() ? (this._currentRenderId = this.Dv().getRenderId(), this._worldMatrix) : (this._updateCache(), this._cache.position.oW(this.position), this._worldMatrix || (this._worldMatrix = LG.e.Identity()), LG.e.TranslationToRef(this.position.x,  … [truncated]
+       }
+       dispose() {
+         this.listeners.clear(), this.byRootId.clear(), this.besideMakerById.clear(), this.missesMaker = !1, this.afloatByRoot.clear(), this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.rowsByKey.clear(), this.snapshot = my, this.jP = 0, this.sQ = null, this.expr … [truncated]
+       }
+       readAfloat(MM, rM, iM) {
+         if (null === iM || 0 === rM || !PM() || !Qy(this.resolve(MM, rM).rootName)) return !1;
+         const OM = `${iM[0]},${iM[1]},${iM[2]},${rM}`,
+           SM = performance.now();
+         return OM === this.afloatKey && SM - this.afloatAt < yy ? this.afloat : (this.afloatKey = OM, this.afloatAt = SM, function(MM, rM) {
+           for (const [iM, OM, SM] of ny) {
+             const jM = rM(MM[0] + iM, MM[1] + OM, MM[2] + SM);
+             if (void 0 === jM || null !== jM && !Qy(jM)) return !1
+           }
+           return !0
+         }(iM, ((rM, iM, OM) => function(MM, rM, iM, OM) {
+           if (!MM.isBlockInLoadedChunk(rM, iM, OM)) return;
+ ... (33 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L97-L98` → after: `L16183-L16224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R16183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L16183-L16224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L16183-L16224) · [Before (L97-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L97-L98)

```diff
-         getDepthMinZ(GG) {
-           return void 0 !== this.shadowMinZ ? this.shadowMinZ : GG?.minZ || 0
+         return SM
+       }
+       hanging(MM) {
+         let {
+           info: rM,
+           rootName: iM
+         } = MM;
+         if (null === rM) return null;
+         let OM = this.afloatByRoot.get(iM);
+         return void 0 === OM && (OM = {
+           ...rM,
+           detail: `${Hy}lookOreAfloat`,
+           detailItem: null
+         }, this.afloatByRoot.set(iM, OM)), OM
+       }
+       rowsOf(MM, rM) {
+ ... (26 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L100-L101` → after: `L16226-L16245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R16226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L16226-L16245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L16226-L16245) · [Before (L100-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L100-L101)

```diff
-         getDepthMaxZ(GG) {
-           return void 0 !== this.shadowMaxZ ? this.shadowMaxZ : GG?.maxZ || 1e4
+         return OM
+       }
+       resolve(MM, rM) {
+         const {
+           rootId: iM,
+           rootName: OM
+         } = MM.getMetaInfo(rM), SM = (0, Ji.p)(OM) ? rM : iM;
+         let jM = this.byRootId.get(SM);
+         const aM = PM();
+         if (void 0 === jM || jM.nuclear !== aM) {
+           var nM;
+           const iM = function(MM) {
+             return ZO(Sy, MM, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : MM)
+           }(OM, MM.blockIdToBlockName(rM));
+           jM = {
+             info: iM,
+ ... (4 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L103-L104` → after: `L16247-L16443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R16247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L16247-L16443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L16247-L16443) · [Before (L103-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L103-L104)

```diff
-         setShadowProjectionMatrix(GG, bG, ZG) {
-           return this.customProjectionMatrixBuilder ? this.customProjectionMatrixBuilder(bG, ZG, GG) : this._setDefaultShadowProjectionMatrix(GG, bG, ZG), this
+         return jM
+       }
+     }
+     const yy = 500;
+     const ly = (0, OM.memo)((function(MM) {
+       var rM, iM;
+       let {
+         store: SM
+       } = MM;
+       const {
+         t: jM
+       } = (0, tS.A)(), [aM, PM] = (0, OM.useState)((() => SM.get()));
+       (0, OM.useEffect)((() => (PM(SM.get()), SM.subscribe((() => {
+         PM(SM.get())
+       })))), [SM]);
+       const {
+ ... (181 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L106-L107` → after: `L16445-L16559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R16445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L16445-L16559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L16445-L16559) · [Before (L106-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L106-L107)

```diff
-         _syncParentEnabledState() {
-           super._syncParentEnabledState(), this.parent && this.parent.getWorldMatrix || (this.transformedPosition = null, this.transformedDirection = null)
+         return rM.length > 0
+       }
+       scan(MM, rM, iM) {
+         let [OM, SM, jM] = iM;
+         const aM = Hh.f.HL,
+           PM = this.hits;
+         PM.length = 0;
+         const nM = MM.scanBlocks(OM, SM, jM, OM + aM, SM + aM, jM + aM, this.offsetsIndexById, PM),
+           QM = [];
+         for (let zM = 0; zM < PM.length; zM += 4) QM.push({
+           pos: [PM[zM], PM[zM + 1], PM[zM + 2]],
+           offsets: this.offsetsList[this.offsetsIndexById[PM[zM + 3]] - 1]
+         });
+         return rM.machines = QM, rM.cellChunks = function(MM, rM) {
+           const iM = new Set,
+             OM = [];
+ ... (99 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L109-L114` → after: `L16561-L16576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R16561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L16561-L16576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L16561-L16576) · [Before (L109-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L109-L114)

```diff
-         getViewMatrix(GG) {
-           const bG = LG.j.mK[0];
-           let ZG = this.position;
-           this.computeTransformedInformation() && (ZG = this.transformedPosition), LG.p.NormalizeToRef(this.getShadowDirection(GG), bG), 1 === Math.abs(LG.p.Dot(bG, LG.p.Up())) && (bG.z = 1e-13);
-           const wG = LG.j.mK[1];
-           return ZG.addToRef(bG, wG), LG.e.LookAtLHToRef(ZG, wG, LG.p.Up(), this._viewMatrix), this._viewMatrix
+         this.draw(MM, zM, rM.bladeStruck)
+       }
+       dispose() {
+         var MM;
+         null === (MM = this.particles) || void 0 === MM || MM.stop(), this.particles = null
+       }
+       draw(MM, rM, iM) {
+         if (!MM.particlesEnabled() || rM.length < 2) return;
+         const OM = performance.now();
+         this.budget = Math.min(Wy, this.budget + (OM - this.lastMs) / 1e3 * Wy), this.lastMs = OM;
+         const SM = [];
+         let jM = 0,
+           aM = rM[0];
+         for (const yM of rM.slice(1)) {
+           const MM = Math.min(48, Math.round(Math.hypot(yM[0] - aM[0], yM[1] - aM[1], yM[2] - aM[2]) * this.style.perBlock));
+           SM.push([aM, yM, MM]), jM += MM, aM = yM
```

#### 32. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L116-L117` → after: `L16578-L16603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R16578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L16578-L16603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L16578-L16603) · [Before (L116-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L116-L117)

```diff
-         getProjectionMatrix(GG, bG) {
-           return this.setShadowProjectionMatrix(this._projectionMatrix, GG ?? this._viewMatrix, bG ?? []), this._projectionMatrix
+         const PM = iM.length;
+         jM += 10 * PM;
+         const nM = jM > this.budget ? this.budget / jM : 1;
+         if (0 === jM || nM * jM < 1) return;
+         const QM = rM[0],
+           [zM, LM, mM] = QM,
+           HM = this.points;
+         let hM = 0;
+         const JM = (MM, rM, iM, OM) => {
+           const SM = 4 * hM;
+           HM[SM] = MM - zM, HM[SM + 1] = rM - LM, HM[SM + 2] = iM - mM, HM[SM + 3] = OM, hM++
+         };
+         SM.forEach(((MM, rM) => {
+           let [iM, OM, SM] = MM;
+           const jM = Math.min(Math.floor(SM * nM), Wy - hM),
+             aM = Math.hypot(OM[0] - iM[0], OM[1] - iM[1], OM[2] - iM[2]),
+ ... (10 more added lines; see GitHub link above)
```
