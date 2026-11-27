# Changed — Bundle Modifications Report (Part 016 / 086)

- **Updated at**: `2026-11-28T01:59 JST`
- **Part**: `16 / 86` (**304** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 015](part-015.md) · [Part 017 →](part-017.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/261.js` (gw4e3a.937868ec → 1yqdn.8419f1e1 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/261.js` (44 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa)

#### 34. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L332-L337` → after: `L532-L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L532-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/261.js#L532-L542) · [Before (L332-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/261.js#L332-L337)

```diff
-     function ZB(BB) {
-       return NB("number" === typeof BB ? [BB, BB, BB] : BB)
-     }
- 
-     function NB(BB) {
-       return [RB(BB[0]), RB(BB[1]), RB(BB[2])]
+     function xW(WW, iW) {
+       let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+       const mW = iW.colors ? [iW.colors] : null;
+       return ZW(WW, {
+         lines: [iW.points],
+         updatable: iW.updatable,
+         instance: iW.instance,
+         colors: mW,
+         useVertexAlpha: iW.useVertexAlpha,
+         material: iW.material
+       }, OW)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L340-L341` → after: `L545-L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L545-L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/261.js#L545-L568) · [Before (L340-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/261.js#L340-L341)

```diff
-     function RB(BB) {
-       return Number.isFinite(BB) ? Math.min(oB.g, Math.max(-oB.g, BB)) : BB
+     function lW(WW, iW) {
+       let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+       const NW = iW.points,
+         LW = iW.instance,
+         wW = iW.gapSize || 1,
+         ZW = iW.dashSize || 3;
+       if (LW) {
+         const WW = WW => {
+           const iW = mW.q.Zero(),
+             OW = WW.length / 6;
+           let EW, PW, cW, wW, tW = 0,
+             ZW = 0;
+           for (cW = 0; cW < NW.length - 1; cW++) NW[cW + 1].subtractToRef(NW[cW], iW), tW += iW.length();
+           const xW = tW / OW,
+             lW = LW._creationDataStorage.dashSize,
+             AW = lW * xW / (lW + LW._creationDataStorage.gapSize);
+ ... (8 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L343-L346` → after: `L570-L691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L570-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/261.js#L570-L691) · [Before (L343-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/261.js#L343-L346)

```diff
- 
-     function WB(BB) {
-       const [OB, GB, YB] = BB, oB = -(0, QB.h)(OB), jB = -(0, QB.h)(GB), yB = (0, QB.h)(YB), JB = DB.b.quaternionFromEulerZYX(oB, jB, yB);
-       return DB.b.eulerYXZFromQuaternion(JB)
+     let AW = !1;
+     AW || (AW = !0, NW.c.CreateLineSystem = wW, NW.c.CreateDashedLines = tW, EW.e.CreateLines = function(WW, iW) {
+       return xW(WW, {
+         points: iW,
+         updatable: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+         instance: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
+       }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
+     }, EW.e.CreateDashedLines = function(WW, iW, OW, mW, EW) {
+       return lW(WW, {
+         points: iW,
+         dashSize: OW,
+         gapSize: mW,
+         dashNb: EW,
+         updatable: arguments.length > 6 ? arguments[6] : void 0,
+         instance: arguments.length > 7 ? arguments[7] : void 0
+       }, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null)
+ ... (106 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L348-L355` → after: `L693-L700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L693-L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/261.js#L693-L700) · [Before (L348-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/261.js#L348-L355)

```diff
-     MB.LERP_MODE_SCHEMA_MAPPING = {
-       linear: YB.j.Linear,
-       catmullrom: YB.j.CatmullRomSpline
-     };
-     const AB = 1 / 16;
- 
-     function VB(BB) {
-       return [-BB[0] * AB, BB[1] * AB, BB[2] * AB]
+     xW.ForceGLSL = !1;
+     class lW extends cW.e {
+       constructor(WW, iW) {
+         super(WW, iW), this.intersectionThreshold = iW.intersectionThreshold
+       }
+       getClassName() {
+         return "InstancedLinesMesh"
+       }
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L358-L360` → after: `L704-L748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L704-L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/261.js#L704-L748) · [Before (L358-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/261.js#L358-L360)

```diff
-     function SB(BB) {
-       const [OB, GB, YB] = BB;
-       return [OB >= 0 ? Math.PI - OB : -Math.PI - OB, nB(GB + Math.PI), nB(YB + Math.PI)]
+     function bW() {
+       AW || (AW = !0, LW.e._LinesMeshParser = (WW, iW) => xW.Parse(WW, iW))
+     }(mW = xW.prototype).enableEdgesRendering ?? (mW.enableEdgesRendering = (0, ZW.k)("LinesMesh", "enableEdgesRendering")), (EW = lW.prototype).enableEdgesRendering ?? (EW.enableEdgesRendering = (0, ZW.k)("InstancedLinesMesh", "enableEdgesRendering"))
+   },
+   39908: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => NW
+     });
+     var mW = OW(39911);
+     const EW = (WW, iW, OW) => WW ? WW.getClassName && "Mesh" === WW.getClassName() ? null : !WW.getClassName || "SubMesh" !== WW.getClassName() && "PhysicsBody" !== WW.getClassName() ? WW.clone ? WW.clone() : Array.isArray(WW) ? WW.slice() : OW && "object" === typeof WW ? {
+       ...WW
+     } : null : WW.clone(iW) : null;
+     class NW {
+       static DeepCopy(WW, iW, OW, NW) {
+         let PW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         const LW = function(WW) {
+ ... (29 more added lines; see GitHub link above)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L362-L364` → after: `L750-L756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L750-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/261.js#L750-L756) · [Before (L362-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/261.js#L362-L364)

```diff
- 
-     function nB(BB) {
-       return DB.b.mod(BB + Math.PI, 2 * Math.PI) - Math.PI
+   },
+   39088: (WW, iW, OW) => {
+     function mW() {
+       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (WW => {
+         const iW = 16 * Math.random() | 0;
+         return ("x" === WW ? iW : 3 & iW | 8).toString(16)
+       }))
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L366-L368` → after: `L758-L817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L758-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/261.js#L758-L817) · [Before (L366-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/261.js#L366-L368)

```diff
- 
-     function UB(BB, OB) {
-       return Math.abs(DB.b.computeShortestRotation(BB[0], OB[0])) + Math.abs(DB.b.computeShortestRotation(BB[1], OB[1])) + Math.abs(DB.b.computeShortestRotation(BB[2], OB[2]))
+     OW.d(iW, {
+       b: () => mW
+     })
+   },
+   39911: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => mW
+     });
+     class mW {
+       static _CheckLimit(WW, iW) {
+         let OW = mW._LogLimitOutputs[WW];
+         return OW ? OW.current++ : (OW = {
+           limit: iW,
+           current: 1
+         }, mW._LogLimitOutputs[WW] = OW), OW.current <= OW.limit
+       }
+ ... (44 more added lines; see GitHub link above)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L370` → after: `L819-L831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L819-L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/261.js#L819-L831) · [Before (L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/261.js#L370)

```diff
-     const fB = new JB
+     mW.NoneLogLevel = 0, mW.MessageLogLevel = 1, mW.WarningLogLevel = 2, mW.ErrorLogLevel = 4, mW.AllLogLevel = 7, mW.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", mW._LogCache = "", mW._LogLimitOutputs = {}, mW._Levels =  … [truncated]
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
+     }], mW.errorsCount = 0, mW.Log = mW._LogEnabled.bind(mW, mW.MessageLogLevel), mW.Warn = mW._LogEnabled.bind(mW, mW.WarningLogLevel), mW.Error = mW._LogEnabled.bind(mW, mW.ErrorLogLevel)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L372` → after: `L833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/261.js#L833) · [Before (L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/261.js#L372)

```diff
-   37836: (BB, OB, GB) => {
+   41604: (WW, iW, OW) => {
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L374-L377` → after: `L835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/261.js#L835) · [Before (L374-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/261.js#L374-L377)

```diff
-       b: () => oB,
-       f: () => QB,
-       j: () => YB,
-       m: () => DB
+       c: () => mW.i
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L379-L390` → after: `L837-L838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L837-L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/261.js#L837-L838) · [Before (L379-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/261.js#L379-L390)

```diff
-     let YB = function(BB) {
-         return BB[BB.Linear = 0] = "Linear", BB[BB.CatmullRomSpline = 1] = "CatmullRomSpline", BB
-       }({}),
-       DB = function(BB) {
-         return BB[BB.NoLoop = 0] = "NoLoop", BB[BB.LoopOnLastFrame = 1] = "LoopOnLastFrame", BB[BB.HoldOnLastFrame = 2] = "HoldOnLastFrame", BB
-       }({}),
-       QB = function(BB) {
-         return BB[BB.Movement = 0] = "Movement", BB[BB.Action = 1] = "Action", BB[BB.Emote = 2] = "Emote", BB[BB.Custom = 3] = "Custom", BB
-       }({}),
-       oB = function(BB) {
-         return BB[BB.Start = 0] = "Start", BB[BB.Stop = 1] = "Stop", BB
-       }({})
+     var mW = OW(41612);
+     (0, mW.e)()
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/262.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/262.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/262.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/262.js#L2)

```diff
- export const ids = [262];
+ export const ids = [262, 267];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/262.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/262.js#L4)

```diff
-   37885: (BB, OB, GB) => {
+   54015: (WW, iW, OW) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/262.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/262.js#L6-L7)

```diff
-       Color3: () => YB.c,
-       e: () => YB.g
+       c: () => PW
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L9-L10` → after: `L8-L16197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L8-L16197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/262.js#L8-L16197) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/262.js#L9-L10)

```diff
-     var YB = GB(37894);
-     (0, YB.k)()
+     var mW = OW(53951),
+       EW = OW(41511);
+     let NW = !1;
+ 
+     function PW() {
+       NW || (NW = !0, EW.c.prototype._sphericalPolynomialTargetSize = 0, EW.c.prototype.forceSphericalPolynomialsRecompute = function() {
+         this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
+       }, Object.defineProperty(EW.c.prototype, "sphericalPolynomial", {
+         get: function() {
+           if (this._texture) {
+             if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
+             if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = mW.b.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialCo … [truncated]
+               this._texture._sphericalPolynomial = WW, this._texture._sphericalPolynomialComputed = !0
+             }))), null
+           }
+           return null
+ ... (16174 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/263.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/263.js` (20 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696)

#### 1. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L4-L7` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/263.js#L4-L6) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/263.js#L4-L7)

```diff
-   63894: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       DEVTOOLS_SHADERS: () => QB,
-       registerDevtoolsShader: () => oB
+   38270: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => EW
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L9-L28` → after: `L8-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L8-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/263.js#L8-L32) · [Before (L9-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/263.js#L9-L28)

```diff
-     var YB = GB(40864),
-       DB = GB(37910);
-     const QB = {
-       devtoolsNormal: function(BB) {
-         return {
-           vertex: `\n\t\t\t${(0,DB.e)(BB,"position","vec3")}\n\t\t\t${(0,DB.e)(BB,"normal","vec3")}\n\t\t\t${(0,DB.xb)(BB,"worldViewProjection","mat4")}\n\t\t\t${(0,DB.xb)(BB,"world","mat4")}\n\t\t\t${(0,DB.Eb)(BB,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,DB.Hb)(BB,`\n\t\t\t\t${ … [truncated]
-           fragment: `\n\t\t\t${(0,DB.Eb)(BB,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,DB.H)(BB,`\n\t\t\t\t\n\t\t\t\t${(0,DB.t)(BB,"vec3","normalColor",`abs(${(0,DB.I)(BB,"vNormal")})`)}\n\t\t\t\t${(0,DB.D)(BB)} = ${(0,DB.h)(BB,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
-         }
-       },
-       devtoolsWhite: function(BB) {
-         return {
-           vertex: `\n\t\t\t${(0,DB.e)(BB,"position","vec3")}\n\t\t\t${(0,DB.xb)(BB,"worldViewProjection","mat4")}\n\n\t\t\t${(0,DB.Hb)(BB,`\n\t\t\t\t${(0,DB.g)(BB)} = ${(0,DB.Ab)(BB,"worldViewProjection")} * ${(0,DB.h)(BB,"vec4",(0,DB.Lb)(BB,"position"),"1.0")};\n\t\t\t`)}\n\t\t` … [truncated]
-           fragment: `\n\t\t\t${(0,DB.H)(BB,`\n\t\t\t\t${(0,DB.D)(BB)} = ${(0,DB.h)(BB,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
-         }
-       },
-       devtoolsDepth: function(BB) {
- ... (4 more removed lines; see GitHub link above)
+     var mW = OW(38276);
+     class EW {
+       static get LastCreatedEngine() {
+         return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
+       }
+       static get LastCreatedScene() {
+         return this._LastCreatedScene
+       }
+     }
+     EW.Instances = [], EW.OnEnginesDisposedObservable = new mW.e, EW._LastCreatedScene = null, EW.UseFallbackTexture = !0, EW.FallbackTexture = ""
+   },
+   38262: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => mW
+     });
+     class mW {
+ ... (9 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L40` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/263.js#L37) · [Before (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/263.js#L40)

```diff
-   37910: (BB, OB, GB) => {
+   38291: (WW, iW, OW) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L42-L62` → after: `L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/263.js#L39) · [Before (L42-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/263.js#L42-L62)

```diff
-       $: () => hB,
-       A: () => IB,
-       Ab: () => uB,
-       C: () => QB,
-       D: () => LB,
-       Eb: () => ZB,
-       F: () => iB,
-       H: () => AB,
-       Hb: () => WB,
-       I: () => KB,
-       L: () => mB,
-       Lb: () => kB,
-       Nb: () => dB,
-       O: () => XB,
-       S: () => DB,
-       V: () => FB,
- ... (5 more removed lines; see GitHub link above)
+       d: () => LW,
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L68-L69` → after: `L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/263.js#L42) · [Before (L68-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/263.js#L68-L69)

```diff
-       kb: () => aB,
-       l: () => rB,
+       k: () => mW,
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L71-L78` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/263.js#L44) · [Before (L71-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/263.js#L71-L78)

```diff
-       nb: () => wB,
-       q: () => lB,
-       r: () => PB,
-       rb: () => VB,
-       t: () => MB,
-       tb: () => JB,
-       w: () => UB,
-       xb: () => NB
+       o: () => PW
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L80-L83` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/263.js#L46) · [Before (L80-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/263.js#L80-L83)

```diff
-     const YB = {
-       GLSL: 0,
-       WGSL: 1
-     };
+     class mW {}
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L86` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/263.js#L49) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/263.js#L86)

```diff
-       return BB === YB.WGSL
+       WW.updateFlag = mW._UpdateFlagSeed++
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L90-L120` → after: `L53-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L53-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/263.js#L53-L88) · [Before (L90-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/263.js#L90-L120)

```diff
-       return DB(BB) ? GB : OB
-     }
-     const oB = new Map([
-       ["int", "i32"],
-       ["float", "f32"],
-       ["vec2", "vec2f"],
-       ["vec3", "vec3f"],
-       ["vec4", "vec4f"],
-       ["mat2", "mat2x2f"],
-       ["mat3", "mat3x3f"],
-       ["mat4", "mat4x4f"]
-     ]);
- 
-     function jB(BB, OB) {
-       if (!DB(BB)) return OB;
-       const GB = oB.get(OB);
- ... (15 more removed lines; see GitHub link above)
+       let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+       const EW = WW.wEW(),
+         NW = iW.wEW(),
+         PW = EW[0],
+         LW = EW[1],
+         cW = EW[2],
+         wW = EW[3],
+         tW = EW[4],
+         ZW = EW[5],
+         xW = EW[6],
+         lW = EW[7],
+         AW = EW[8],
+         bW = EW[9],
+         jW = EW[10],
+         UW = EW[11],
+         kW = EW[12],
+ ... (20 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L124-L135` → after: `L92-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L92-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/263.js#L92-L93) · [Before (L124-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/263.js#L124-L135)

```diff
-       return DB(BB) ? `var ${GB}: ${jB(BB,OB)};` : `${OB} ${GB};`
-     }
- 
-     function zB(BB, OB, GB, YB) {
-       return DB(BB) ? `const ${GB}: ${jB(BB,OB)} = ${YB};` : `const ${OB} ${GB} = ${YB};`
-     }
- 
-     function lB(BB, OB, GB, YB, QB) {
-       if (DB(BB)) {
-         return `fn ${GB}(${YB.map((OB=>`${OB.name}: ${jB(BB,OB.type)}`)).join(", ")}) -> ${jB(BB,OB)} {${QB}}`
-       }
-       return `${OB} ${GB}(${YB.map((BB=>`${BB.type} ${BB.name}`)).join(", ")}) {${QB}}`
+       let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+       NW(WW, iW, OW.wEW(), mW), EW(OW)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L139-L155` → after: `L97-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L97-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/263.js#L97-L99) · [Before (L139-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/263.js#L139-L155)

```diff
-       return !OB || DB(BB) ? "" : `${OB} `
-     }
- 
-     function qB(BB, OB, GB, YB) {
-       return DB(BB) ? `attribute ${OB}: ${jB(BB,GB)};` : `attribute ${pB(BB,YB)}${GB} ${OB};`
-     }
- 
-     function ZB(BB, OB, GB, YB) {
-       return DB(BB) ? `varying ${OB}: ${jB(BB,GB)};` : `varying ${pB(BB,YB)}${GB} ${OB};`
-     }
- 
-     function NB(BB, OB, GB) {
-       return DB(BB) ? `uniform ${OB}: ${jB(BB,GB)};` : `uniform ${GB} ${OB};`
-     }
- 
-     function RB(BB) {
- ... (1 more removed lines; see GitHub link above)
+       let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+       const mW = WW.wEW();
+       iW[OW] = mW[0], iW[OW + 1] = mW[1], iW[OW + 2] = mW[2], iW[OW + 3] = mW[3], iW[OW + 4] = mW[4], iW[OW + 5] = mW[5], iW[OW + 6] = mW[6], iW[OW + 7] = mW[7], iW[OW + 8] = mW[8], iW[OW + 9] = mW[9], iW[OW + 10] = mW[10], iW[OW + 11] = mW[11], iW[OW + 12] = mW[12], iW[OW + 13]  … [truncated]
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L159` → after: `L103-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L103-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/263.js#L103-L104) · [Before (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/263.js#L159)

```diff
-       return DB(BB) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${OB}}` : `void main() {${OB}}`
+       const OW = wW(WW, iW.wEW());
+       return OW && EW(iW), OW
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L163` → after: `L108-L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L108-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/263.js#L108-L162) · [Before (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/263.js#L163)

```diff
-       return DB(BB) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${OB}}` : `void main() {${OB}}`
+       const OW = WW.wEW(),
+         mW = OW[0],
+         EW = OW[1],
+         NW = OW[2],
+         PW = OW[3],
+         LW = OW[4],
+         cW = OW[5],
+         wW = OW[6],
+         tW = OW[7],
+         ZW = OW[8],
+         xW = OW[9],
+         lW = OW[10],
+         AW = OW[11],
+         bW = OW[12],
+         jW = OW[13],
+         UW = OW[14],
+ ... (39 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L165-L168` → after: `L164-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L164-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/263.js#L164-L188) · [Before (L165-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/263.js#L165-L168)

```diff
- 
-     function VB(BB, OB, GB) {
-       if (DB(BB)) {
-         return [`var ${OB}Sampler: sampler;`, `var ${OB}: ${"2dArray"===GB?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
+     mW._UpdateFlagSeed = 0
+   },
+   38241: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => bW,
+       g: () => AW,
+       j: () => MW,
+       l: () => UW,
+       m: () => ZW,
+       q: () => xW,
+       r: () => lW
+     });
+     var mW = OW(38249),
+       EW = OW(38253),
+       NW = OW(38262),
+       PW = OW(38270),
+ ... (9 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L170-L179` → after: `L190-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L190-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/263.js#L190-L191) · [Before (L170-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/263.js#L170-L179)

```diff
-       return `uniform highp ${"2dArray"===GB?"sampler2DArray":"sampler2D"} ${OB};`
-     }
- 
-     function SB(BB, OB, GB) {
-       return DB(BB) ? `textureSample(${OB}, ${OB}Sampler, ${GB})` : `texture2D(${OB}, ${GB})`
-     }
- 
-     function nB(BB, OB, GB, YB, QB) {
-       if (DB(BB)) {
-         return `${QB?"textureSampleLevel":"textureSample"}(${OB}, ${OB}Sampler, ${GB}, ${JB(BB,`round(${YB})`)}${QB?`, ${QB}`:""})`
+       toString() {
+         return `{X: ${this.x} Y: ${this.y}}`
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L181-L193` → after: `L193-L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L193-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/263.js#L193-L486) · [Before (L181-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/263.js#L181-L193)

```diff
-       const oB = yB(BB, "vec3", GB, YB);
-       return QB ? `textureLod(${OB}, ${oB}, ${QB})` : `texture(${OB}, ${oB})`
-     }
- 
-     function UB(BB) {
-       return DB(BB) ? "!baseColor\\=\\w+\\(diffuseSampler,diffuseSamplerSampler,fragmentInputs\\.vDiffuseUV\\+uvOffset\\);" : "!baseColor\\=\\w+\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);"
-     }
- 
-     function fB(BB) {
-       return DB(BB) ? {
-         "!varying vMainUV1: vec2f;": "centroid varying vMainUV1: vec2f;"
-       } : {
-         "!varying vec2 vMainUV1;": "#ifdef WEBGL2\ncentroid varying vec2 vMainUV1;\n#else\nvarying vec2 vMainUV1;\n#endif"
+       getClassName() {
+         return "Vector2"
+       }
+       getHashCode() {
+         let WW = tW(this.x);
+         return WW = 397 * WW ^ tW(this.y), WW
+       }
+       toArray(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         return WW[iW] = this.x, WW[iW + 1] = this.y, this
+       }
+       mZ(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         return ZW.FromArrayToRef(WW, iW, this), this
+       }
+       wEW() {
+ ... (278 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L196-L268` → after: `L489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/263.js#L489) · [Before (L196-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/263.js#L196-L268)

```diff
- 
-     function kB(BB, OB) {
-       return DB(BB) ? `vertexInputs.${OB}` : OB
-     }
- 
-     function dB(BB, OB) {
-       return DB(BB) ? `vertexOutputs.${OB}` : OB
-     }
- 
-     function KB(BB, OB) {
-       return DB(BB) ? `fragmentInputs.${OB}` : OB
-     }
- 
-     function uB(BB, OB) {
-       return DB(BB) ? `uniforms.${OB}` : OB
-     }
- ... (57 more removed lines; see GitHub link above)
+     ZW._V8PerformanceHack = new ZW(.5, .5), ZW._ZeroReadOnly = ZW.Zero();
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L270-L271` → after: `L491-L2905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L491-L2905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/263.js#L491-L2905) · [Before (L270-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/263.js#L270-L271)

```diff
-       static GetShadersRepository() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? YB.ShadersRepository : YB.ShadersRepositoryWGSL
+       get x() {
+         return this._x
+       }
+       set x(WW) {
+         this._x = WW, this._isDirty = !0
+       }
+       get y() {
+         return this._y
+       }
+       set y(WW) {
+         this._y = WW, this._isDirty = !0
+       }
+       get z() {
+         return this._z
+       }
+       set z(WW) {
+ ... (2399 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L273-L274` → after: `L2907-L2909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R2907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L2907-L2909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/263.js#L2907-L2909) · [Before (L273-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/263.js#L273-L274)

```diff
-       static GetShadersStore() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? YB.ShadersStore : YB.ShadersStoreWGSL
+       clone() {
+         const WW = new PW;
+         return WW._observers = this._observers.slice(0), WW
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L276-L277` → after: `L2911-L2915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R2911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L2911-L2915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/263.js#L2911-L2915) · [Before (L276-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/263.js#L276-L277)

```diff
-       static GetIncludesShadersStore() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? YB.IncludesShadersStore : YB.IncludesShadersStoreWGSL
+       hasSpecificMask() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
+         for (const iW of this._observers)
+           if (iW.mask & WW || iW.mask === WW) return !0;
+         return !1
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/264.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/264.js` (31 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42)

#### 1. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/264.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/264.js#L4)

```diff
-   42066: (BB, OB, GB) => {
+   38372: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L6` → after: `L6-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/264.js#L6-L9) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/264.js#L6)

```diff
-       noaDevTools: () => PB
+       b: () => ZW,
+       d: () => xW,
+       f: () => bW,
+       j: () => lW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L8-L12` → after: `L11-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L11-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/264.js#L11-L14) · [Before (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/264.js#L8-L12)

```diff
-     var YB = GB(38146),
-       DB = GB(38133),
-       QB = GB(3088),
-       oB = GB(1822),
-       jB = GB(41990);
+     var mW = OW(38253),
+       EW = OW(38249),
+       NW = OW(38285),
+       PW = OW(38299);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L15-L39` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/264.js#L17) · [Before (L15-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/264.js#L15-L39)

```diff
-       const {
-         UP: OB
-       } = BB, GB = OB.engine, YB = {
-         width: GB.getRenderWidth(),
-         height: GB.getRenderHeight()
-       };
-       return {
-         canvas: GB.getRenderingCanvas(),
-         maxTextureSize: GB.getCaps().maxTextureSize,
-         WP: () => !BB.fP,
-         resize: (BB, OB) => {
-           GB.setSize(BB, OB)
-         },
-         restoreSize: () => {
-           GB.setSize(YB.width, YB.height), OB.resize()
-         },
- ... (9 more removed lines; see GitHub link above)
+       return Math.pow(WW, EW.i)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L43-L229` → after: `L20-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L20-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/264.js#L20-L25) · [Before (L43-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/264.js#L43-L229)

```diff
-     function MB(BB, OB) {
-       let {
-         width: JB,
-         height: MB,
-         colouring: PB
-       } = OB;
-       const zB = "normals" === PB,
-         lB = "depth" === PB;
-       return new Promise((OB => {
-         try {
-           const pB = (0, QB.g)();
-           if (pB.UP.Dq) return "screenshot" !== BB || null !== PB ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void OB()) : void(0, jB.h)(yB(pB), JB, MB).finally(OB);
-           const qB = pB.UP.engine,
-             ZB = pB.UP.JF(),
-             NB = JB,
-             RB = MB;
- ... (171 more removed lines; see GitHub link above)
+     function cW(WW) {
+       return WW <= .04045 ? .0773993808 * WW : Math.pow(.947867299 * (WW + .055), 2.4)
+     }
+ 
+     function wW(WW) {
+       return Math.pow(WW, EW.h)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L231` → after: `L27-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L27-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/264.js#L27-L31) · [Before (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/264.js#L231)

```diff
-     const PB = new class {
+ 
+     function tW(WW) {
+       return WW <= .0031308 ? 12.92 * WW : 1.055 * Math.pow(WW, .41666) - .055
+     }
+     class ZW {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L233` → after: `L33-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L33-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/264.js#L33-L215) · [Before (L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/264.js#L233)

```diff
-         this.tools = JB.ALL_DEV_TOOLS
+         let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+           iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+           OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         this.r = WW, this.g = iW, this.b = OW
+       }
+       toString() {
+         return "{R: " + this.r + " G:" + this.g + " B:" + this.b + "}"
+       }
+       getClassName() {
+         return "Color3"
+       }
+       getHashCode() {
+         let WW = 255 * this.r | 0;
+         return WW = 397 * WW ^ 255 * this.g, WW = 397 * WW ^ 255 * this.b, WW
+       }
+       toArray(WW) {
+ ... (167 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L235-L236` → after: `L217-L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L217-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/264.js#L217-L220) · [Before (L235-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/264.js#L235-L236)

```diff
-       downloadScene(BB, OB) {
-         return MB(BB, OB)
+       toLinearSpace() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         const iW = new ZW;
+         return this.toLinearSpaceToRef(iW, WW), iW
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L238-L242` → after: `L222-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L222-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/264.js#L222-L223) · [Before (L238-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/264.js#L238-L242)

```diff
-       async setAmbientLightIntensity(BB) {
-         const {
-           Color3: OB
-         } = await Promise.all([GB.e(259), GB.e(262)]).then((() => GB(37885)));
-         (0, QB.g)().UP.JF().ambientColor = OB.FromArray([BB, BB, BB])
+       toLinearSpaceToRef(WW) {
+         return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (WW.r = cW(this.r), WW.g = cW(this.g), WW.b = cW(this.b)) : (WW.r = LW(this.r), WW.g = LW(this.g), WW.b = LW(this.b)), this
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L244-L247` → after: `L225-L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L225-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/264.js#L225-L324) · [Before (L244-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/264.js#L244-L247)

```diff
-       capturePhoto(BB, OB, GB) {
-         return function(BB, OB, GB, YB) {
-           return (0, jB.e)(yB(BB), OB, GB, YB)
-         }((0, QB.g)(), BB, OB, GB)
+       toGammaSpace() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         const iW = new ZW;
+         return this.toGammaSpaceToRef(iW, WW), iW
+       }
+       toGammaSpaceToRef(WW) {
+         return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (WW.r = tW(this.r), WW.g = tW(this.g), WW.b = tW(this.b)) : (WW.r = wW(this.r), WW.g = wW(this.g), WW.b = wW(this.b)), this
+       }
+       static HSVtoRGBToRef(WW, iW, OW, mW) {
+         const EW = OW * iW,
+           NW = WW / 60,
+           PW = EW * (1 - Math.abs(NW % 2 - 1));
+         let LW = 0,
+           cW = 0,
+           wW = 0;
+         NW >= 0 && NW <= 1 ? (LW = EW, cW = PW) : NW >= 1 && NW <= 2 ? (LW = PW, cW = EW) : NW >= 2 && NW <= 3 ? (cW = EW, wW = PW) : NW >= 3 && NW <= 4 ? (cW = PW, wW = EW) : NW >= 4 && NW <= 5 ? (LW = PW, wW = EW) : NW >= 5 && NW <= 6 && (LW = EW, wW = PW);
+ ... (84 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L250-L277` → after: `L327-L560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L327-L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/264.js#L327-L560) · [Before (L250-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/264.js#L250-L277)

```diff
-   },
-   41990: (BB, OB, GB) => {
-     GB.d(OB, {
-       e: () => jB,
-       h: () => yB
-     });
-     var YB = GB(1834);
-     const DB = 33177600,
-       QB = 3e4;
-     let oB = !1;
- 
-     function jB(BB, OB, GB) {
-       let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
-       const {
-         scale: jB = 1,
-         type: yB = "image/png",
- ... (12 more removed lines; see GitHub link above)
+     ZW._V8PerformanceHack = new ZW(.5, .5, .5), ZW._BlackReadOnly = ZW.Black();
+     class xW {
+       constructor() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+           iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+           OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
+           mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
+         this.r = WW, this.g = iW, this.b = OW, this.a = mW
+       }
+       wEW() {
+         return [this.r, this.g, this.b, this.a]
+       }
+       toArray(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         return WW[iW] = this.r, WW[iW + 1] = this.g, WW[iW + 2] = this.b, WW[iW + 3] = this.a, this
+       }
+ ... (218 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L279-L295` → after: `L562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/264.js#L562) · [Before (L279-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/264.js#L279-L295)

```diff
-         };
-         PB = setTimeout((() => {
-           pB(), MB(new Error("No frame was drawn to capture"))
-         }), QB);
-         try {
-           const YB = function(BB, OB, GB) {
-             const YB = Math.max(1, BB),
-               QB = Math.max(1, OB),
-               oB = Math.min(1, GB / Math.max(YB, QB), Math.sqrt(DB / (YB * QB)));
-             return {
-               width: Math.max(1, Math.floor(YB * oB)),
-               height: Math.max(1, Math.floor(QB * oB))
-             }
-           }(OB, GB, BB.maxTextureSize);
-           BB.resize(YB.width, YB.height, jB * YB.width / Math.max(1, OB))
-         } catch (qB) {
- ... (1 more removed lines; see GitHub link above)
+           return iW
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L297-L325` → after: `L564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/264.js#L564) · [Before (L297-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/264.js#L297-L325)

```diff
-         lB = BB.onFrameDrawn((() => {
-           if (zB--, zB > 0) return;
-           const {
-             canvas: OB
-           } = BB, GB = {
-             width: OB.width,
-             height: OB.height
-           };
-           try {
-             OB.toBlob((BB => {
-               BB ? YB({
-                 blob: BB,
-                 ...GB
-               }) : MB(new Error("The canvas gave no image"))
-             }), yB, JB)
-           } catch (qB) {
- ... (13 more removed lines; see GitHub link above)
+         return WW
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L329` → after: `L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/264.js#L590) · [Before (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/264.js#L329)

```diff
-   38146: (BB, OB, GB) => {
+   38249: (WW, iW, OW) => {
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L331-L332` → after: `L592-L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L592-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/264.js#L592-L593) · [Before (L331-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/264.js#L331-L332)

```diff
-       d: () => JB,
-       f: () => jB,
+       e: () => NW,
+       h: () => mW,
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L335-L337` → after: `L596-L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L596-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/264.js#L596-L604) · [Before (L335-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/264.js#L335-L337)

```diff
-     var YB = GB(38140),
-       DB = GB(38151);
-     let QB = 0;
+     const mW = 1 / 2.2,
+       EW = 2.2;
+     Math.sqrt(5);
+     let NW = .001
+   },
+   38285: (WW, iW, OW) => {
+     function mW(WW) {
+       return parseInt(WW.toString().replace(/\W/g, ""))
+     }
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L340-L343` → after: `L607-L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L607-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/264.js#L607-L613) · [Before (L340-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/264.js#L340-L343)

```diff
-       const GB = BB;
-       GB._noaFaceGroups = null !== OB && void 0 !== OB ? OB : null, GB._noaFaceEpoch = -1, GB._noaFaceMask = -1, GB._noaFaceCount = -1, GB._noaFaceMaterial = null;
-       const YB = BB.iW;
-       YB && 1 === YB.length && (YB[0].indexStart = 0, YB[0].indexCount = BB.getTotalIndices())
+       let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
+       return Math.abs(WW - iW) <= OW
+     }
+ 
+     function NW(WW, iW, OW) {
+       let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
+       return WW < iW - mW || WW > OW + mW
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L347-L353` → after: `L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/264.js#L617) · [Before (L347-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/264.js#L347-L353)

```diff
-       if (OB) {
-         QB++;
-         for (const OB of BB) {
-           const BB = OB._noaFaceGroups;
-           BB && oB(OB, BB)
-         }
-       } else QB = Math.max(0, QB - 1)
+       return WW === iW ? WW : Math.random() * (iW - WW) + WW
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L357-L364` → after: `L621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/264.js#L621) · [Before (L357-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/264.js#L357-L364)

```diff
-       let DB = -1,
-         QB = 0;
-       for (let oB = 0; oB < YB.f; oB++) {
-         const GB = BB[oB],
-           jB = BB[oB + 1];
-         jB > GB && OB & 1 << YB.e[oB] && (DB < 0 && (DB = GB), QB = jB)
-       }
-       return DB < 0 ? (GB[0] = 0, GB[1] = 0, 0) : (GB[0] = DB, GB[1] = QB - DB, QB - DB)
+       return WW + (iW - WW) * OW
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L366-L413` → after: `L623-L626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L623-L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/264.js#L623-L626) · [Before (L366-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/264.js#L366-L413)

```diff
-     class JB {
-       constructor(BB, OB) {
-         this.pP = BB, this.engine = OB, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
-       }
-       apply(BB, OB) {
-         if (!OB) return;
-         const GB = OB.getProjectionMatrix().m,
-           oB = 0 === QB && 0 === GB[15],
-           jB = OB.globalPosition,
-           {
-             engine: JB
-           } = this,
-           MB = oB ? (0, DB.b)(GB, JB.getRenderWidth(), JB.getRenderHeight()) : 0;
-         jB.x === this.eyeX && jB.y === this.eyeY && jB.z === this.eyeZ && MB === this.focalPx && oB === this.culling || (this.epoch++, this.eyeX = jB.x, this.eyeY = jB.y, this.eyeZ = jB.z, this.focalPx = MB, this.culling = oB);
-         const {
-           epoch: PB,
- ... (32 more removed lines; see GitHub link above)
+ 
+     function cW(WW, iW, OW) {
+       let mW = jW(iW - WW, 360);
+       return mW > 180 && (mW -= 360), WW + mW * xW(OW)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L425-L426` → after: `L629-L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L629-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/264.js#L629-L642) · [Before (L425-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/264.js#L425-L426)

```diff
-     function oB(BB, OB) {
-       BB._data = OB
+     function wW(WW, iW, OW) {
+       let mW;
+       return mW = WW != iW ? xW((OW - WW) / (iW - WW)) : 0, mW
+     }
+ 
+     function tW(WW, iW, OW, mW, EW) {
+       const NW = EW * EW,
+         PW = EW * NW;
+       return WW * (2 * PW - 3 * NW + 1) + OW * (-2 * PW + 3 * NW) + iW * (PW - 2 * NW + EW) + mW * (PW - NW)
+     }
+ 
+     function ZW(WW, iW, OW, mW, EW) {
+       const NW = EW * EW;
+       return 6 * (NW - EW) * WW + (3 * NW - 4 * EW + 1) * iW + 6 * (-NW + EW) * OW + (3 * NW - 2 * EW) * mW
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L430-L431` → after: `L646-L648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L646-L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/264.js#L646-L648) · [Before (L430-L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/264.js#L430-L431)

```diff
-       var OB, GB;
-       (null !== (OB = null === (GB = BB.getBuffer()) || void 0 === GB ? void 0 : GB.CP) && void 0 !== OB ? OB : 0) > 0 && (YB.add(BB), 0 === DB ? oB(BB, null) : QB.add(BB))
+       let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+         OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
+       return Math.min(OW, Math.max(iW, WW))
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L435-L454` → after: `L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/264.js#L652) · [Before (L435-L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/264.js#L435-L454)

```diff
-       DB++;
-       for (const GB of function(BB) {
-           const OB = new Set;
-           for (const DB of BB) {
-             const BB = DB.geometry;
-             for (const DB of Object.values(null !== (GB = null === BB || void 0 === BB ? void 0 : BB.getVertexBuffers()) && void 0 !== GB ? GB : {})) {
-               var GB;
-               const BB = DB.getWrapperBuffer();
-               YB.has(BB) && OB.add(BB)
-             }
-           }
-           return OB
-         }(BB)) GB.getData() || JB(GB), QB.add(GB);
-       let OB = !0;
-       return () => {
-         if (OB && (OB = !1, DB--, 0 === DB)) {
- ... (4 more removed lines; see GitHub link above)
+       return WW -= 2 * Math.PI * Math.floor((WW + Math.PI) / (2 * Math.PI))
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L458-L462` → after: `L656-L657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L656-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/264.js#L656-L657) · [Before (L458-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/264.js#L458-L462)

```diff
-       const OB = BB.getBuffer();
-       if (!OB || !(OB.CP > 0)) return;
-       const GB = BB._engine,
-         YB = new Uint8Array(OB.CP);
-       GB.bindArrayBuffer(OB), GB._gl.getBufferSubData(GB._gl.ARRAY_BUFFER, 0, YB), GB._resetVertexBufferBinding(), oB(BB, YB)
+       const iW = WW.toString(16);
+       return WW <= 15 ? ("0" + iW).toUpperCase() : iW.toUpperCase()
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L489` → after: `L661-L674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L661-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/264.js#L661-L674) · [Before (L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/264.js#L489)

```diff
-       return !!BB && BB.backFaceCulling && (0 === BB.transparencyMode || 1 === BB.transparencyMode)
+       if (Math.log2) return Math.floor(Math.log2(WW));
+       if (WW < 0) return NaN;
+       if (0 === WW) return -1 / 0;
+       let iW = 0;
+       if (WW < 1) {
+         for (; WW < 1;) iW++, WW *= 2;
+         iW = -iW
+       } else if (WW > 1)
+         for (; WW > 1;) iW++, WW = Math.floor(WW / 2);
+       return iW
+     }
+ 
+     function jW(WW, iW) {
+       return WW - Math.floor(WW / iW) * iW
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L507` → after: `L678-L682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L678-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/264.js#L678-L682) · [Before (L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/264.js#L507)

```diff
-       return Math.min(Math.abs(BB[0] * OB), Math.abs(BB[5] * GB)) / 2
+       return (WW - iW) / (OW - iW)
+     }
+ 
+     function kW(WW, iW, OW) {
+       return WW * (OW - iW) + iW
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L511` → after: `L686-L687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L686-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/264.js#L686-L687) · [Before (L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/264.js#L511)

```diff
-       return DB + QB * BB * BB / OB
+       let OW = jW(iW - WW, 360);
+       return OW > 180 && (OW -= 360), OW
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L514-L534` → after: `L690-L780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L690-L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/264.js#L690-L780) · [Before (L514-L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/264.js#L514-L534)

```diff
-     function JB(BB, OB, GB, DB, QB) {
-       const oB = YB.k;
-       return MB(BB[oB], BB[oB + 1], BB[oB + 2], BB[oB + 3], BB[oB + 4], BB[oB + 5], OB, GB, DB, QB)
-     }
- 
-     function MB(BB, OB, GB, YB, DB, QB, oB, jB, yB, JB) {
-       return (oB <= BB - JB ? 0 : 1) | (oB >= OB + JB ? 0 : 2) | (jB <= GB - JB ? 0 : 4) | (jB >= YB + JB ? 0 : 8) | (yB <= DB - JB ? 0 : 16) | (yB >= QB + JB ? 0 : 32)
-     }
-     const PB = (() => {
-         const BB = [];
-         for (let OB = 0; OB < YB.m.length; OB++) {
-           let GB = 0;
-           for (let DB = OB + 1; DB <= YB.m.length; DB++) {
-             const QB = 1 << YB.m[DB - 1];
-             if (GB & QB) break;
-             GB |= QB, BB.push({
- ... (5 more removed lines; see GitHub link above)
+     function MW(WW, iW) {
+       const OW = jW(WW, 2 * iW);
+       return iW - Math.abs(OW - iW)
+     }
+ 
+     function KW(WW, iW, OW) {
+       let mW = xW(OW);
+       return mW = -2 * mW * mW * mW + 3 * mW * mW, iW * mW + WW * (1 - mW)
+     }
+ 
+     function SW(WW, iW, OW) {
+       let mW;
+       return mW = Math.abs(iW - WW) <= OW ? iW : WW + Math.sign(iW - WW) * OW, mW
+     }
+ 
+     function YW(WW, iW, OW) {
+ ... (75 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L536-L538` → after: `L782-L793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L782-L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/264.js#L782-L793) · [Before (L536-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/264.js#L536-L538)

```diff
-         return BB
-       })(),
-       zB = [];
+       }(WW, OW, iW)));
+       return () => {
+         for (const WW of OW) WW?.()
+       }
+     }
+   },
+   38299: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => NW,
+       h: () => EW
+     });
+     const mW = {};
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L541-L542` → after: `L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/264.js#L796) · [Before (L541-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/264.js#L541-L542)

```diff
-       const GB = YB.g[OB];
-       return BB[GB + 1] - BB[GB]
+       mW[WW] = iW
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L545-L579` → after: `L799-L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L799-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/264.js#L799-L800) · [Before (L545-L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/264.js#L545-L579)

```diff
-     function pB(BB, OB, GB) {
-       let DB = 0;
-       for (let oB = 0; oB < YB.h; oB++) lB(BB, oB) > 0 && (DB |= 1 << oB);
-       if (0 === (OB &= DB)) return 0;
-       if (OB === DB) return GB[0] = 0, GB[1] = BB[YB.f], 1;
-       let QB = null,
-         jB = 1 / 0;
-       for (const JB of function(BB) {
-           let OB = zB[BB];
-           if (OB) return OB;
-           const GB = new Map,
-             YB = (BB, OB) => {
-               const YB = 4 * BB + OB.length / 2;
-               GB.has(YB) || GB.set(YB, {
-                 dB: BB,
-                 windows: OB
- ... (19 more removed lines; see GitHub link above)
+     function NW(WW) {
+       return mW[WW]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/265.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/265.js` (37 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250)

#### 1. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/265.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/265.js#L2)

```diff
- export const ids = [265, 266];
+ export const ids = [265];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/265.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/265.js#L4)

```diff
-   41248: (BB, OB, GB) => {
+   38270: (WW, iW, OW) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L9-L147` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/265.js#L8) · [Before (L9-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/265.js#L9-L147)

```diff
-     var YB = GB(40998),
-       DB = GB(41004),
-       QB = GB(37778),
-       oB = GB(37894),
-       jB = GB(41250),
-       yB = GB(41220),
-       JB = GB(37823);
-     let MB = (() => {
-         var BB;
-         let OB, GB, yB = jB.d,
-           JB = [],
-           MB = [],
-           PB = [],
-           zB = [];
-         return BB = class extends yB {
-           constructor(BB, OB, GB, DB) {
- ... (123 more removed lines; see GitHub link above)
+     var mW = OW(38276);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L149-L219` → after: `L10-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/265.js#L10-L11) · [Before (L149-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/265.js#L149-L219)

```diff
-       constructor(BB, OB, GB, DB) {
-         this.normal = new YB.r(BB, OB, GB), this.d = DB
-       }
-       dDB() {
-         return [this.normal.x, this.normal.y, this.normal.z, this.d]
-       }
-       clone() {
-         return new DB(this.normal.x, this.normal.y, this.normal.z, this.d)
-       }
-       getClassName() {
-         return "Plane"
-       }
-       getHashCode() {
-         let BB = this.normal.getHashCode();
-         return BB = 397 * BB ^ this.d, BB
-       }
- ... (55 more removed lines; see GitHub link above)
+       static get LastCreatedEngine() {
+         return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L221-L223` → after: `L13-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/265.js#L13-L14) · [Before (L221-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/265.js#L221-L223)

```diff
-       static SignedDistanceToPlaneFromPositionAndNormal(BB, OB, GB) {
-         const DB = -(OB.x * BB.x + OB.y * BB.y + OB.z * BB.z);
-         return YB.r.Dot(GB, OB) + DB
+       static get LastCreatedScene() {
+         return this._LastCreatedScene
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L226` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/265.js#L17) · [Before (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/265.js#L226)

```diff
-     DB._TmpMatrix = YB.d.Identity()
+     EW.Instances = [], EW.OnEnginesDisposedObservable = new mW.e, EW._LastCreatedScene = null, EW.UseFallbackTexture = !0, EW.FallbackTexture = ""
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L228` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/265.js#L19) · [Before (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/265.js#L228)

```diff
-   38769: (BB, OB, GB) => {
+   39908: (WW, iW, OW) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L232-L251` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/265.js#L23) · [Before (L232-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/265.js#L232-L251)

```diff
-     class YB {
-       constructor(BB, OB, GB, YB) {
-         this.x = BB, this.y = OB, this.width = GB, this.height = YB
-       }
-       toGlobal(BB, OB) {
-         return new YB(this.x * BB, this.y * OB, this.width * BB, this.height * OB)
-       }
-       toGlobalToRef(BB, OB, GB) {
-         return GB.x = this.x * BB, GB.y = this.y * OB, GB.width = this.width * BB, GB.height = this.height * OB, this
-       }
-       clone() {
-         return new YB(this.x, this.y, this.width, this.height)
-       }
-     }
-   },
-   39358: (BB, OB, GB) => {
- ... (4 more removed lines; see GitHub link above)
+     var mW = OW(39911);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L290` → after: `L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/265.js#L62) · [Before (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/265.js#L290)

```diff
-   38589: (BB, OB, GB) => {
+   39088: (WW, iW, OW) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L294` → after: `L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/265.js#L66) · [Before (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/265.js#L294)

```diff
-         return ("x" === BB ? OB : 3 & OB | 8).toString(16)
+         return ("x" === WW ? iW : 3 & iW | 8).toString(16)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L298` → after: `L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/265.js#L70) · [Before (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/265.js#L298)

```diff
-       e: () => YB
+       b: () => mW
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L301` → after: `L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/265.js#L73) · [Before (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/265.js#L301)

```diff
-   39366: (BB, OB, GB) => {
+   39911: (WW, iW, OW) => {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L324` → after: `L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/265.js#L96) · [Before (L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/265.js#L324)

```diff
-         const OB = BB => BB < 10 ? "0" + BB : "" + BB,
+         const iW = WW => WW < 10 ? "0" + WW : "" + WW,
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L339` → after: `L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/265.js#L111) · [Before (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/265.js#L339)

```diff
-         const yB = `<div style='color:${oB.color}'>${QB}</div><br>`;
+         const cW = `<div style='color:${PW.color}'>${NW}</div><br>`;
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L372-L381` → after: `L144-L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L144-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/265.js#L144-L146) · [Before (L372-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/265.js#L372-L381)

```diff
-   63871: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       CreateScreenshot: () => gB,
-       CreateScreenshotAsync: () => rB,
-       CreateScreenshotForFrameGraphAsync: () => cB,
-       CreateScreenshotUsingRenderTarget: () => wB,
-       CreateScreenshotUsingRenderTargetAsync: () => EB,
-       CreateScreenshotWithResizeAsync: () => XB,
-       RegisterScreenshotTools: () => TB,
-       ScreenshotTools: () => aB
+   38276: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L383-L456` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/265.js#L148) · [Before (L383-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/265.js#L383-L456)

```diff
-     var YB = GB(41470),
-       DB = GB(44953),
-       QB = GB(44931),
-       oB = GB(41022),
-       jB = GB(44939),
-       yB = GB(37796),
-       JB = GB(37778);
-     class MB extends jB.h {
-       static _GetDefines(BB) {
-         if (!BB) return null;
-         return BB.extractDriverInfo().toLowerCase().indexOf("mali") > -1 ? "#define MALI 1\n" : null
-       }
-       _gatherImports(BB, OB) {
-         BB ? (this._webGPUReady = !0, OB.push(Promise.all([GB.e(683).then((() => GB(64093))), GB.e(684).then((() => GB(64095)))]))) : OB.push(Promise.all([GB.e(685).then((() => GB(64104))), GB.e(686).then((() => GB(64106)))]))
-       }
-       constructor(BB) {
- ... (58 more removed lines; see GitHub link above)
+     const mW = "undefined" !== typeof WeakRef;
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L458-L546` → after: `L150-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L150-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/265.js#L150-L154) · [Before (L458-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/265.js#L458-L546)

```diff
-       constructor(BB, OB, GB) {
-         this.name = BB, this._parentTask = OB, this._context = GB, this.disabled = !1
-       }
-       setInitializeFunc(BB) {
-         this._initFunc = BB
-       }
-       setExecuteFunc(BB) {
-         this._executeFunc = BB
-       }
-       _execute() {
-         this.disabled || this._executeFunc(this._context)
-       }
-       _initialize() {
-         this._initFunc?.(this._context)
-       }
-       _isValid() {
- ... (73 more removed lines; see GitHub link above)
+       constructor(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           OW = arguments.length > 2 ? arguments[2] : void 0,
+           mW = arguments.length > 3 ? arguments[3] : void 0;
+         this.initialize(WW, iW, OW, mW)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L548-L549` → after: `L156-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L156-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/265.js#L156-L160) · [Before (L548-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/265.js#L548-L549)

```diff
-       _dispose() {
-         this._frameGraphRenderTarget?.dispose()
+       initialize(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           OW = arguments.length > 2 ? arguments[2] : void 0,
+           mW = arguments.length > 3 ? arguments[3] : void 0;
+         return this.mask = WW, this.skipNextObservers = iW, this.target = OW, this.currentTarget = mW, this
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L585-L593` → after: `L165-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L165-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/265.js#L165-L166) · [Before (L585-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/265.js#L585-L593)

```diff
-         this._passes = [], this._passesDisabled = [], this._disabled = !1, this.onTexturesAllocatedObservable = new VB.b, this.onBeforeTaskExecute = new VB.b, this.onAfterTaskExecute = new VB.b, this.name = BB, this._frameGraph = OB, this._reset()
-       }
-       _reset() {
-         for (const BB of this._passes) BB._dispose();
-         for (const BB of this._passesDisabled) BB._dispose();
-         this._passes.length = 0, this._passesDisabled.length = 0
-       }
-       _addPass(BB, OB) {
-         OB ? this._passesDisabled.push(BB) : this._passes.push(BB)
+         let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+         this.callback = WW, this.mask = iW, this.scope = OW, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L595-L706` → after: `L168-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L168-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/265.js#L168-L170) · [Before (L595-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/265.js#L595-L706)

```diff
-       _checkTask() {
-         let BB, OB = null,
-           GB = null;
-         for (const jB of this._passes) {
-           const YB = jB._isValid();
-           if (YB) throw new Error(`Pass "${jB.name}" is not valid. ${YB}`);
-           if (AB.IsRenderPass(jB)) {
-             const BB = Array.isArray(jB.renderTarget) ? jB.renderTarget : [jB.renderTarget];
-             OB = [];
-             for (const GB of BB) void 0 !== GB && OB.push(this._frameGraph.textureManager.getTextureFromHandle(GB));
-             GB = void 0 !== jB.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(jB.renderTargetDepth) : null
-           } else WB.IsObjectListPass(jB) && (BB = jB.objectList)
-         }
-         let YB, DB = null,
-           QB = [],
-           oB = null;
- ... (96 more removed lines; see GitHub link above)
+       remove() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         this._remove && this._remove(WW)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L709-L721` → after: `L173-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L173-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/265.js#L173-L181) · [Before (L709-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/265.js#L709-L721)

```diff
-     class UB extends nB {
-       constructor(BB, OB, GB) {
-         super(BB, OB, GB || new MB(BB, OB.engine))
-       }
-       getClassName() {
-         return "FrameGraphFXAATask"
-       }
-       record() {
-         let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
-           OB = arguments.length > 1 ? arguments[1] : void 0,
-           GB = arguments.length > 2 ? arguments[2] : void 0;
-         const YB = super.record(BB, OB, GB);
-         return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, YB
+     class PW {
+       static FromPromise(WW, iW) {
+         const OW = new PW;
+         return WW.then((WW => {
+           OW.notifyObservers(WW)
+         })).catch((WW => {
+           if (!iW) throw WW;
+           iW.notifyObservers(WW)
+         })), OW
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L723-L727` → after: `L183-L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L183-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/265.js#L183-L184) · [Before (L723-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/265.js#L723-L727)

```diff
-     }
-     var fB = GB(44960);
-     class kB extends nB {
-       constructor(BB, OB, GB) {
-         super(BB, OB, GB || new fB.d(BB, OB.engine))
+       get observers() {
+         return this._observers
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L729-L730` → after: `L186-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L186-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/265.js#L186-L188) · [Before (L729-L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/265.js#L729-L730)

```diff
-       getClassName() {
-         return "FrameGraphPassTask"
+       constructor(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         this.notifyIfTriggered = iW, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new EW(0), WW && (this._onObserverAdded = WW)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L732-L743` → after: `L190-L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L190-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/265.js#L190-L216) · [Before (L732-L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/265.js#L732-L743)

```diff
-     }
-     var dB = GB(41091),
-       KB = GB(41190),
-       uB = GB(41145),
-       mB = GB(41248),
-       IB = GB(37894);
-     class FB {
-       getRenderCamera(BB) {
-         if (this._renderCamera) return this._renderCamera;
-         {
-           let OB;
-           return OB = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, BB && OB && OB.isRigCamera ? OB.rigParent : OB
+       add(WW) {
+         let iW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+           OW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         if (!WW) return null;
+         const EW = new NW(WW, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
+         EW.unregisterOnNextCall = OW, iW ? this._observers.unshift(EW) : this._observers.push(EW), this._onObserverAdded && this._onObserverAdded(EW), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(EW, this._lastNotifiedValue);
+         const PW = mW ? new WeakRef(this) : {
+           deref: () => this
+         };
+         return EW._remove = function() {
+           let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+           const iW = PW.deref();
+           iW && (WW ? iW.remove(EW) : iW._remove(EW))
+         }, EW
+       }
+       addOnce(WW) {
+ ... (11 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L746-L747` → after: `L220-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L220-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/265.js#L220-L223) · [Before (L746-L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/265.js#L746-L747)

```diff
-       setRenderCamera(BB) {
-         this._renderCamera = BB
+       _deferUnregister(WW) {
+         WW._willBeUnregistered || (this._numObserversMarkedAsDeleted++, WW.unregisterOnNextCall = !1, WW._willBeUnregistered = !0, setTimeout((() => {
+           this._remove(WW)
+         }), 0))
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L749-L753` → after: `L225-L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L225-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/265.js#L225-L229) · [Before (L749-L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/265.js#L749-L753)

```diff
-       _getSharedGizmoLight() {
-         return this._sharedGizmoLight || (this._sharedGizmoLight = new mB.c("shared gizmo light", new JB.r(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = IB.c.Gray()), this._sharedGizmoLight
-       }
-       static get DefaultUtilityLayer() {
-         return null == FB._DefaultUtilityLayer ? FB._CreateDefaultUtilityLayerFromScene(yB.b.LastCreatedScene) : FB._DefaultUtilityLayer
+       _remove(WW) {
+         let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+         if (!WW) return !1;
+         const OW = this._observers.indexOf(WW);
+         return -1 !== OW && (iW && this._numObserversMarkedAsDeleted--, this._observers.splice(OW, 1), !0)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L755-L758` → after: `L231-L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L231-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/265.js#L231-L232) · [Before (L755-L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/265.js#L755-L758)

```diff
-       static _CreateDefaultUtilityLayerFromScene(BB) {
-         return FB._DefaultUtilityLayer = new FB(BB), FB._DefaultUtilityLayer.originalScene.lF.addOnce((() => {
-           FB._DefaultUtilityLayer = null
-         })), FB._DefaultUtilityLayer
+       makeObserverTopPriority(WW) {
+         this._remove(WW, !1), this._observers.unshift(WW)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L760-L761` → after: `L234-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L234-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/265.js#L234-L235) · [Before (L760-L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/265.js#L760-L761)

```diff
-       static get DefaultKeepDepthUtilityLayer() {
-         return null == FB._DefaultKeepDepthUtilityLayer ? FB._CreateDefaultKeepUtilityLayerFromScene(yB.b.LastCreatedScene) : FB._DefaultKeepDepthUtilityLayer
+       makeObserverBottomPriority(WW) {
+         this._remove(WW, !1), this._observers.push(WW)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L763-L766` → after: `L237-L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L237-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/265.js#L237-L247) · [Before (L763-L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/265.js#L763-L766)

```diff
-       static _CreateDefaultKeepUtilityLayerFromScene(BB) {
-         return FB._DefaultKeepDepthUtilityLayer = new FB(BB), FB._DefaultKeepDepthUtilityLayer.utilityLayerScene.autoClearDepthAndStencil = !1, FB._DefaultKeepDepthUtilityLayer.originalScene.lF.addOnce((() => {
-           FB._DefaultKeepDepthUtilityLayer = null
-         })), FB._DefaultKeepDepthUtilityLayer
+       notifyObservers(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
+           OW = arguments.length > 2 ? arguments[2] : void 0,
+           mW = arguments.length > 3 ? arguments[3] : void 0,
+           EW = arguments.length > 4 ? arguments[4] : void 0;
+         if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = WW), !this._observers.length) return !0;
+         const NW = this._eventState;
+         NW.mask = iW, NW.target = OW, NW.currentTarget = mW, NW.skipNextObservers = !1, NW.lastReturnValue = WW, NW.userInfo = EW;
+         for (const PW of this._observers)
+           if (!PW._willBeUnregistered && (PW.mask & iW && (PW.unregisterOnNextCall && this._deferUnregister(PW), PW.scope ? NW.lastReturnValue = PW.callback.apply(PW.scope, [WW, NW]) : NW.lastReturnValue = PW.callback(WW, NW)), NW.skipNextObservers)) return !1;
+         return !0
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L768-L803` → after: `L249-L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L249-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/265.js#L249-L253) · [Before (L768-L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/265.js#L768-L803)

```diff
-       constructor(BB) {
-         let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
-           GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         this.originalScene = BB, this.handleEvents = OB, this._pointerCaptures = {}, this._lastPointerEvents = {}, this._sharedGizmoLight = null, this._renderCamera = null, this.pickUtilitySceneFirst = !0, this.shouldRender = !0, this.onlyCheckPointerDownEvents = !0, this.process … [truncated]
-           virtual: !0,
-           useFloatingOrigin: BB.floatingOriginMode
-         }), this.utilityLayerScene.useRightHandedSystem = BB.useRightHandedSystem, this.utilityLayerScene._allowPostProcessClearColor = !1, this.utilityLayerScene.postProcessesEnabled = !1, this.utilityLayerScene.detachControl(), OB && (this._originalPointerObserver = BB.onPrePoi … [truncated]
-           if (!this.utilityLayerScene.activeCamera) return;
-           if (!this.pickingEnabled) return;
-           if (!this.processAllEvents && OB.type !== KB.c.POINTERMOVE && OB.type !== KB.c.POINTERUP && OB.type !== KB.c.POINTERDOWN && OB.type !== KB.c.POINTERDOUBLETAP) return;
-           this.utilityLayerScene.pointerX = BB.pointerX, this.utilityLayerScene.pointerY = BB.pointerY;
-           const GB = OB.event;
-           if (BB.isPointerCaptured(GB.pointerId)) return void(this._pointerCaptures[GB.pointerId] = !1);
-           const YB = GB => {
-               let YB;
-               if (OB.nearInteractionPickingInfo) YB = OB.nearInteractionPickingInfo.pickedMesh.JF() == GB ? OB.nearInteractionPickingInfo : new uB.e;
- ... (20 more removed lines; see GitHub link above)
+       notifyObserver(WW, iW) {
+         let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
+         if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = iW), WW._willBeUnregistered) return;
+         const mW = this._eventState;
+         mW.mask = OW, mW.skipNextObservers = !1, WW.unregisterOnNextCall && this._deferUnregister(WW), WW.callback(iW, mW)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L805-L806` → after: `L255-L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L255-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/265.js#L255-L256) · [Before (L805-L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/265.js#L805-L806)

```diff
-       _notifyObservers(BB, OB, GB) {
-         BB.skipOnPointerObservable || (this.utilityLayerScene.onPointerObservable.notifyObservers(new KB.f(BB.type, BB.event, OB), BB.type), this._lastPointerEvents[GB.pointerId] = !0)
+       hasObservers() {
+         return this._observers.length - this._numObserversMarkedAsDeleted > 0
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L808-L812` → after: `L258-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L258-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/265.js#L258-L261) · [Before (L808-L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/265.js#L808-L812)

```diff
-       render() {
-         if (this._updateCamera(), this.utilityLayerScene.activeCamera) {
-           const BB = this.utilityLayerScene.activeCamera.JF(),
-             OB = this.utilityLayerScene.activeCamera;
-           OB._scene = this.utilityLayerScene, OB.leftCamera && (OB.leftCamera._scene = this.utilityLayerScene), OB.rightCamera && (OB.rightCamera._scene = this.utilityLayerScene), this.utilityLayerScene.render(!1), OB._scene = BB, OB.leftCamera && (OB.leftCamera._scene = BB), OB. … [truncated]
+       clear() {
+         for (; this._observers.length;) {
+           const WW = this._observers.pop();
+           WW && (WW._remove = null)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L815-L816` → after: `L265-L266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L265-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/265.js#L265-L266) · [Before (L815-L816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/265.js#L815-L816)

```diff
-       dispose() {
-         this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.lF.remove(this._sceneDisposeObserver), this._originalPointerObserver && t … [truncated]
+       cleanLastNotifiedState() {
+         this._hasNotified = !1, this._lastNotifiedValue = void 0
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L818-L1059` → after: `L268-L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L268-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/265.js#L268-L270) · [Before (L818-L1059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/265.js#L818-L1059)

```diff
-       _updateCamera() {
-         this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
-       }
-     }
-     FB._DefaultUtilityLayer = null, FB._DefaultKeepDepthUtilityLayer = null;
-     const iB = {
-       FindMainCamera: function(BB) {
-         return BB.findMainCamera()
-       },
-       FindMainObjectRenderer: function(BB) {
-         return BB.findMainObjectRenderer()
-       },
-       CreateUtilityLayerRenderer: function(BB) {
-         let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         const GB = BB.eq,
-           YB = new FB(GB, OB, !0);
- ... (226 more removed lines; see GitHub link above)
+       clone() {
+         const WW = new PW;
+         return WW._observers = this._observers.slice(0), WW
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L1061-L1077` → after: `L272-L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L272-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/265.js#L272-L276) · [Before (L1061-L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/265.js#L1061-L1077)

```diff
-       if (ZB !== qB || RB !== lB) {
-         const OB = new kB("pass", BB);
-         OB.sourceTexture = dB, OB.targetTexture = BB.textureManager.createRenderTargetTexture("pass_output", {
-           size: {
-             width: ZB,
-             height: RB
-           },
-           options: {
-             createMipMaps: !1,
-             types: [0],
-             formats: [5],
-             samples: 1,
-             labels: ["screenshot_final_texture"],
-             useSRGBBuffers: [!1]
-           },
-           sizeIsPercentage: !1
- ... (1 more removed lines; see GitHub link above)
+       hasSpecificMask() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
+         for (const iW of this._observers)
+           if (iW.mask & WW || iW.mask === WW) return !0;
+         return !1
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L1095-L1109` → after: `L297-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L297-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/265.js#L297-L298) · [Before (L1095-L1109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/265.js#L1095-L1109)

```diff
-     function hB(BB, OB, GB) {
-       let YB = 0,
-         DB = 0,
-         QB = 0,
-         oB = 0;
-       if ("object" === typeof GB) {
-         const jB = GB.precision ? Math.abs(GB.precision) : 1;
-         GB.width && GB.height ? (YB = GB.height * jB, DB = GB.width * jB) : GB.width && !GB.height ? (DB = GB.width * jB, YB = Math.round(DB / BB.getAspectRatio(OB))) : GB.height && !GB.width ? (YB = GB.height * jB, DB = Math.round(YB * BB.getAspectRatio(OB))) : (DB = Math.round( … [truncated]
-       } else isNaN(GB) || (YB = GB, DB = GB, QB = GB, oB = GB);
-       return DB && (DB = Math.floor(DB)), YB && (YB = Math.floor(YB)), QB && (QB = Math.floor(QB)), oB && (oB = Math.floor(oB)), {
-         height: 0 | YB,
-         width: 0 | DB,
-         finalWidth: 0 | QB,
-         finalHeight: 0 | oB
-       }
+     function EW(WW, iW) {
+       mW[WW] = iW
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L1121-L1124` → after: `L301-L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L301-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/265.js#L301-L302) · [Before (L1121-L1124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/265.js#L1121-L1124)

```diff
-     function TB() {
-       if (eB) return;
-       eB = !0;
-       lB.j.CreateScreenshot = gB, lB.j.CreateScreenshotAsync = rB, lB.j.CreateScreenshotUsingRenderTarget = wB, lB.j.CreateScreenshotUsingRenderTargetAsync = EB
+     function NW(WW) {
+       return mW[WW]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/266.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/266.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927)

#### 1. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/266.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/266.js#L4)

```diff
-   38424: (BB, OB, GB) => {
+   38323: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L6` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/266.js#L6-L8) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/266.js#L6)

```diff
-       b: () => DB
+       c: () => LW,
+       g: () => PW,
+       i: () => EW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L8` → after: `L10-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L10-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/266.js#L10-L12) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/266.js#L8)

```diff
-     var YB = GB(38432);
+     const mW = 1024,
+       EW = 16,
+       NW = 36e4;
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L10` → after: `L14-L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L14-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/266.js#L14-L135) · [Before (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/266.js#L10)

```diff
-       static GetPlanes(BB) {
+       constructor(WW) {
+         this.boneCount = WW, this.rotation = void 0, this.position = void 0, this.scale = void 0, this.touched = void 0, this.rotation = new Float64Array(3 * WW), this.position = new Float64Array(3 * WW), this.scale = new Float64Array(3 * WW).fill(1), this.touched = new Uint8Arra … [truncated]
+       }
+       clampToLimits() {
+         for (let WW = 0; WW < this.boneCount; WW++)
+           if (0 !== this.touched[WW])
+             for (let iW = 3 * WW; iW < 3 * WW + 3; iW++) {
+               const WW = this.rotation[iW],
+                 OW = this.position[iW],
+                 PW = this.scale[iW];
+               WW >= -36e4 && WW <= NW || (this.rotation[iW] = cW(WW, NW)), OW >= -1024 && OW <= mW || (this.position[iW] = cW(OW, mW)), PW >= -EW && PW <= EW || (this.scale[iW] = cW(PW, EW, 1))
+             }
+       }
+       reset() {
+         for (let WW = 0; WW < this.boneCount; WW++)
+           if (0 !== this.touched[WW]) {
+ ... (106 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L12-L47` → after: `L137-L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L137-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/266.js#L137-L370) · [Before (L12-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/266.js#L12-L47)

```diff
-         for (let GB = 0; GB < 6; GB++) OB.push(new YB.c(0, 0, 0, 0));
-         return DB.GetPlanesToRef(BB, OB), OB
-       }
-       static GetNearPlaneToRef(BB, OB) {
-         const GB = BB.m;
-         OB.normal.x = GB[3] + GB[2], OB.normal.y = GB[7] + GB[6], OB.normal.z = GB[11] + GB[10], OB.d = GB[15] + GB[14], OB.normalize()
-       }
-       static GetFarPlaneToRef(BB, OB) {
-         const GB = BB.m;
-         OB.normal.x = GB[3] - GB[2], OB.normal.y = GB[7] - GB[6], OB.normal.z = GB[11] - GB[10], OB.d = GB[15] - GB[14], OB.normalize()
-       }
-       static GetLeftPlaneToRef(BB, OB) {
-         const GB = BB.m;
-         OB.normal.x = GB[3] + GB[0], OB.normal.y = GB[7] + GB[4], OB.normal.z = GB[11] + GB[8], OB.d = GB[15] + GB[12], OB.normalize()
-       }
-       static GetRightPlaneToRef(BB, OB) {
- ... (20 more removed lines; see GitHub link above)
+         for (const wW of WW) {
+           const WW = wW[iW];
+           if (WW) {
+             const iW = this.createAnimationFrameWithoutPrecomputes(wW.timeFraction, WW, mW);
+             ZW(iW) && EW.push(iW)
+           }
+         }
+         const NW = [];
+         for (let wW = 0; wW < EW.length; wW++) {
+           var PW, LW, cW;
+           const WW = EW[wW],
+             iW = null !== (PW = EW[wW - 1]) && void 0 !== PW ? PW : WW,
+             mW = null !== (LW = EW[wW + 1]) && void 0 !== LW ? LW : WW,
+             tW = null !== (cW = EW[wW + 2]) && void 0 !== cW ? cW : mW;
+           NW.push({
+             ...WW,
+ ... (218 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L49` → after: `L372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/266.js#L372) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/266.js#L49)

```diff
-   38432: (BB, OB, GB) => {
+   38307: (WW, iW, OW) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L51` → after: `L374-L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L374-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/266.js#L374-L377) · [Before (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/266.js#L51)

```diff
-       c: () => DB
+       b: () => PW,
+       d: () => NW,
+       f: () => mW,
+       i: () => EW
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L53-L257` → after: `L379-L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L379-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/266.js#L379-L390) · [Before (L53-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/266.js#L53-L257)

```diff
-     var YB = GB(37778);
-     class DB {
-       constructor(BB, OB, GB, DB) {
-         this.normal = new YB.r(BB, OB, GB), this.d = DB
-       }
-       dDB() {
-         return [this.normal.x, this.normal.y, this.normal.z, this.d]
-       }
-       clone() {
-         return new DB(this.normal.x, this.normal.y, this.normal.z, this.d)
-       }
-       getClassName() {
-         return "Plane"
-       }
-       getHashCode() {
-         let BB = this.normal.getHashCode();
- ... (189 more removed lines; see GitHub link above)
+     let mW = function(WW) {
+         return WW[WW.Linear = 0] = "Linear", WW[WW.CatmullRomSpline = 1] = "CatmullRomSpline", WW
+       }({}),
+       EW = function(WW) {
+         return WW[WW.NoLoop = 0] = "NoLoop", WW[WW.LoopOnLastFrame = 1] = "LoopOnLastFrame", WW[WW.HoldOnLastFrame = 2] = "HoldOnLastFrame", WW
+       }({}),
+       NW = function(WW) {
+         return WW[WW.Movement = 0] = "Movement", WW[WW.Action = 1] = "Action", WW[WW.Emote = 2] = "Emote", WW[WW.Custom = 3] = "Custom", WW
+       }({}),
+       PW = function(WW) {
+         return WW[WW.Start = 0] = "Start", WW[WW.Stop = 1] = "Stop", WW
+       }({})
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/267.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/267.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/267.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/267.js#L2)

```diff
- export const ids = [266, 267];
+ export const ids = [267];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L4-L11` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/267.js#L4-L7) · [Before (L4-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/267.js#L4-L11)

```diff
-   63878: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       RegisterShaderMaterial: () => YB.b,
-       ShaderMaterial: () => YB.k,
-       ShaderMaterialCreateFromSnippetAsync: () => YB.c,
-       ShaderMaterialParse: () => YB.j,
-       ShaderMaterialParseFromFileAsync: () => YB.d,
-       ShaderMaterialParseFromSnippetAsync: () => YB.f
+   38369: (WW, iW, OW) => {
+     OW.d(iW, {
+       Color3: () => mW.b,
+       c: () => mW.d
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L13-L269` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/267.js#L9-L10) · [Before (L13-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/267.js#L13-L269)

```diff
-     var YB = GB(41468);
-     (0, YB.b)()
-   },
-   38424: (BB, OB, GB) => {
-     GB.d(OB, {
-       b: () => DB
-     });
-     var YB = GB(38432);
-     class DB {
-       static GetPlanes(BB) {
-         const OB = [];
-         for (let GB = 0; GB < 6; GB++) OB.push(new YB.c(0, 0, 0, 0));
-         return DB.GetPlanesToRef(BB, OB), OB
-       }
-       static GetNearPlaneToRef(BB, OB) {
-         const GB = BB.m;
- ... (241 more removed lines; see GitHub link above)
+     var mW = OW(38372);
+     (0, mW.f)()
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/268.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/268.js` (37 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813)

#### 1. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L4-L7` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/268.js#L4-L7) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/268.js#L4-L7)

```diff
-   38488: (BB, OB, GB) => {
-     GB.d(OB, {
-       c: () => PB,
-       f: () => oB
+   64410: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       DEVTOOLS_SHADERS: () => NW,
+       registerDevtoolsShader: () => PW
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L9-L11` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/268.js#L9-L10) · [Before (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/268.js#L9-L11)

```diff
-     var YB = GB(9955),
-       DB = GB(9927),
-       QB = GB(353);
+     var mW = OW(41392),
+       EW = OW(38388);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L13-L3110` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/268.js#L12) · [Before (L13-L3110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/268.js#L13-L3110)

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
+       devtoolsNormal: function(WW) {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L3112-L3261` → after: `L14-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L14-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/268.js#L14-L15) · [Before (L3112-L3261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/268.js#L3112-L3261)

```diff
-           [BB]: {
-             positions: [{
-               block: BB,
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
- ... (134 more removed lines; see GitHub link above)
+           vertex: `\n\t\t\t${(0,EW.g)(WW,"position","vec3")}\n\t\t\t${(0,EW.g)(WW,"normal","vec3")}\n\t\t\t${(0,EW.Eb)(WW,"worldViewProjection","mat4")}\n\t\t\t${(0,EW.Eb)(WW,"world","mat4")}\n\t\t\t${(0,EW.Kb)(WW,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,EW.Ob)(WW,`\n\t\t\t\t${ … [truncated]
+           fragment: `\n\t\t\t${(0,EW.Kb)(WW,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,EW.V)(WW,`\n\t\t\t\t\n\t\t\t\t${(0,EW.B)(WW,"vec3","normalColor",`abs(${(0,EW.W)(WW,"vNormal")})`)}\n\t\t\t\t${(0,EW.O)(WW)} = ${(0,EW.m)(WW,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L3365-L3386` → after: `L18-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L18-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/268.js#L18-L22) · [Before (L3365-L3386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/268.js#L3365-L3386)

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
+       devtoolsWhite: function(WW) {
+         return {
+           vertex: `\n\t\t\t${(0,EW.g)(WW,"position","vec3")}\n\t\t\t${(0,EW.Eb)(WW,"worldViewProjection","mat4")}\n\n\t\t\t${(0,EW.Ob)(WW,`\n\t\t\t\t${(0,EW.l)(WW)} = ${(0,EW.Ib)(WW,"worldViewProjection")} * ${(0,EW.m)(WW,"vec4",(0,EW.Pb)(WW,"position"),"1.0")};\n\t\t\t`)}\n\t\t` … [truncated]
+           fragment: `\n\t\t\t${(0,EW.V)(WW,`\n\t\t\t\t${(0,EW.O)(WW)} = ${(0,EW.m)(WW,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
+         }
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L3388-L3404` → after: `L24-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L24-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/268.js#L24-L28) · [Before (L3388-L3404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/268.js#L3388-L3404)

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
+       devtoolsDepth: function(WW) {
+         return {
+           vertex: `\n\t\t\t${(0,EW.g)(WW,"position","vec3")}\n\t\t\t${(0,EW.Eb)(WW,"worldViewProjection","mat4")}\n\t\t\t${(0,EW.Eb)(WW,"world","mat4")}\n\t\t\t${(0,EW.Eb)(WW,"cameraPosition","vec3")}\n\t\t\t${(0,EW.Kb)(WW,"vDepth","float","mediump")}\n\n\t\t\t${(0,EW.Ob)(WW,`\n\ … [truncated]
+           fragment: `\n\t\t\t${(0,EW.Kb)(WW,"vDepth","float","mediump")}\n\t\t\t${(0,EW.Eb)(WW,"maxDepth","float")}\n\t\t\t${(0,EW.Eb)(WW,"minDepth","float")}\n\n\t\t\t${(0,EW.V)(WW,`\n\t\t\t\t\n\t\t\t\t${(0,EW.B)(WW,"float","normalizedDepth",`clamp((${(0,EW.W)(WW,"vDepth")} - ${ … [truncated]
+         }
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L3408-L3566` → after: `L32-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L32-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/268.js#L32-L37) · [Before (L3408-L3566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/268.js#L3408-L3566)

```diff
-     function jB(BB) {
-       return {
-         [`${BB} Banner`]: {
-           positions: [{
-             block: `${BB} Banner`,
-             x: 0,
-             y: 0,
-             z: 0
-           }, {
-             block: `_${BB} Banner Flag|meta|rot1|bot`,
-             x: 0,
-             y: 1,
-             z: 0
-           }]
-         },
-         [`${BB} Banner|meta|rot2|bot`]: {
- ... (143 more removed lines; see GitHub link above)
+     function PW(WW, iW) {
+       const {
+         vertex: OW,
+         fragment: EW
+       } = NW[WW](iW), PW = mW.c.GetShadersStore(iW);
+       PW[`${WW}VertexShader`] = OW, PW[`${WW}FragmentShader`] = EW
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L3570-L3664` → after: `L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/268.js#L86) · [Before (L3570-L3664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/268.js#L3570-L3664)

```diff
-       const OB = (0, QB.ec)(BB);
-       return {
-         [OB]: {
-           positions: [{
-             block: OB,
-             x: 0,
-             y: 0,
-             z: 0
-           }, {
-             block: `_${OB} Top Left`,
-             x: 0,
-             y: 1,
-             z: 0
-           }, {
-             block: `_${OB} Top Right`,
-             x: -1,
- ... (79 more removed lines; see GitHub link above)
+       return WW === mW.WGSL
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L3667-L3743` → after: `L89-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L89-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/268.js#L89-L90) · [Before (L3667-L3743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/268.js#L3667-L3743)

```diff
-     function JB(BB) {
-       const OB = `_${BB} Back`,
-         GB = `_${BB} Dish`;
-       return {
-         [BB]: {
-           positions: [{
-             block: BB,
-             x: 0,
-             y: 0,
-             z: 0
-           }, {
-             block: OB,
-             x: 0,
-             y: 0,
-             z: -1
-           }, {
- ... (61 more removed lines; see GitHub link above)
+     function NW(WW, iW, OW) {
+       return EW(WW) ? OW : iW
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L3746-L3767` → after: `L103-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L103-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/268.js#L103-L107) · [Before (L3746-L3767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/268.js#L3746-L3767)

```diff
-     function MB(BB) {
-       const OB = `Small ${BB} Pod`;
-       return {
-         [OB]: {
-           positions: [{
-             block: OB,
-             x: 0,
-             y: 0,
-             z: 0
-           }, {
-             block: `_Small ${BB} Pod Mid`,
-             x: 0,
-             y: 1,
-             z: 0
-           }, {
-             block: `_Small ${BB} Pod Top`,
- ... (6 more removed lines; see GitHub link above)
+     function LW(WW, iW) {
+       if (!EW(WW)) return iW;
+       const OW = PW.get(iW);
+       if (!OW) throw new Error(`No WGSL name for shader type "${iW}"`);
+       return OW
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L3769-L3772` → after: `L109-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L109-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/268.js#L109-L112) · [Before (L3769-L3772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/268.js#L3769-L3772)

```diff
-     for (const zB in oB) {
-       for (const BB of oB[zB].positions)
-         if (BB.id = DB.h[BB.block].id, zB === BB.block && (0 !== BB.x || 0 !== BB.y || 0 !== BB.z)) throw new Error(`Multiblock "${zB}" has main block "${BB.block}" at non-origin position (${BB.x}, ${BB.y}, ${BB.z}) - if you need to do something like this, you'll need to rethink  … [truncated]
-       oB[DB.h[zB].id] = oB[zB]
+ 
+     function cW(WW, iW) {
+       for (var OW = arguments.length, mW = new Array(OW > 2 ? OW - 2 : 0), EW = 2; EW < OW; EW++) mW[EW - 2] = arguments[EW];
+       return `${LW(WW,iW)}(${mW.join(", ")})`
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L3808-L3810` → after: `L115-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L115-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/268.js#L115-L116) · [Before (L3808-L3810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/268.js#L3808-L3810)

```diff
-     function jB(BB) {
-       const OB = YB.h[BB];
-       return !!OB && BB !== YB.b && !OB.model && !OB.fl && !1 !== OB.solid && !OB.MZ
+     function wW(WW, iW) {
+       return cW(WW, "int", iW)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L3812-L3835` → after: `L118-L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L118-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/268.js#L118-L133) · [Before (L3812-L3835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/268.js#L3812-L3835)

```diff
-     class yB {
-       constructor(BB) {
-         this.model = BB, this.reshapeOffsets = [...oB, [0, -1, 0]]
-       }
-       handles(BB) {
-         const OB = YB.h[BB];
-         return (null === OB || void 0 === OB ? void 0 : OB.model) === this.model && void 0 !== OB.attachedTop
-       }
-       affects(BB) {
-         return this.handles(BB) || jB(BB) || (0, QB.x)(YB.h[BB])
-       }
-       shape(BB, OB, GB, oB, yB) {
-         let JB = this.handles(BB(OB, GB + 1, oB)) ? DB.g : 0;
-         return DB.q.forEach(((yB, MB) => {
-           let {
-             dx: PB,
- ... (8 more removed lines; see GitHub link above)
+ 
+     function tW(WW, iW, OW, mW, NW) {
+       return EW(WW) ? `var ${OW}: ${LW(WW,iW)} = ${mW};` : `${AW(WW,NW)}${iW} ${OW} = ${mW};`
+     }
+ 
+     function ZW(WW, iW, OW) {
+       return EW(WW) ? `var ${OW}: ${LW(WW,iW)};` : `${iW} ${OW};`
+     }
+ 
+     function xW(WW, iW, OW, mW) {
+       return EW(WW) ? `const ${OW}: ${LW(WW,iW)} = ${mW};` : `const ${iW} ${OW} = ${mW};`
+     }
+ 
+     function lW(WW, iW, OW, mW, NW) {
+       if (EW(WW)) {
+         return `fn ${OW}(${mW.map((iW=>`${iW.name}: ${LW(WW,iW.type)}`)).join(", ")}) -> ${LW(WW,iW)} {${NW}}`
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L3838-L3839` → after: `L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/268.js#L137) · [Before (L3838-L3839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/268.js#L3838-L3839)

```diff
-   },
-   38675: (BB, OB, GB) => {
+ 
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L3841-L3868` → after: `L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/268.js#L139) · [Before (L3841-L3868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/268.js#L3841-L3868)

```diff
-       var GB;
-       OB || (OB = {});
-       const YB = null !== (GB = OB.customAttributes) && void 0 !== GB ? GB : {};
-       var DB, QB, oB;
-       "Gun" === (null === BB || void 0 === BB ? void 0 : BB.type) && (YB.shotsLeft = null !== (DB = null !== (QB = YB.shotsLeft) && void 0 !== QB ? QB : null === (oB = YB.gunStats) || void 0 === oB ? void 0 : oB.clipSize) && void 0 !== DB ? DB : BB.clipSize);
-       if (YB.enchantmentTier && (YB.enchantmentTier = YB.enchantmentTier.toString()), YB.enchantments)
-         for (const PB in YB.enchantments) {
-           const BB = YB.enchantments[PB];
-           if ("number" !== typeof BB) {
-             const OB = parseInt(BB);
-             isNaN(OB) || OB < 0 ? YB.enchantments[PB] = void 0 : YB.enchantments[PB] = OB > 1e9 ? 1e9 : OB
-           }
-         }
-       if (YB.enchantmentData)
-         for (const PB in YB.enchantmentData) {
-           const BB = YB.enchantmentData[PB];
- ... (12 more removed lines; see GitHub link above)
+       return !iW || EW(WW) ? "" : `${iW} `
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L3888-L3889` → after: `L142-L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L142-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/268.js#L142-L143) · [Before (L3888-L3889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/268.js#L3888-L3889)

```diff
-     function yB(BB) {
-       return oB <= BB && BB <= jB
+     function bW(WW, iW, OW, mW) {
+       return EW(WW) ? `attribute ${iW}: ${LW(WW,OW)};` : `attribute ${AW(WW,mW)}${OW} ${iW};`
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L3897-L3899` → after: `L146-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L146-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/268.js#L146-L151) · [Before (L3897-L3899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/268.js#L3897-L3899)

```diff
-     function ZB(BB) {
-       var OB, GB;
-       return "string" === typeof(null === BB || void 0 === BB || null === (OB = BB.persisted) || void 0 === OB || null === (GB = OB.shared) || void 0 === GB ? void 0 : GB.text)
+     function jW(WW, iW, OW, mW) {
+       return EW(WW) ? `varying ${iW}: ${LW(WW,OW)};` : `varying ${AW(WW,mW)}${OW} ${iW};`
+     }
+ 
+     function UW(WW, iW, OW) {
+       return EW(WW) ? `uniform ${iW}: ${LW(WW,OW)};` : `uniform ${OW} ${iW};`
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L3903` → after: `L155-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L155-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/268.js#L155-L159) · [Before (L3903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/268.js#L3903)

```diff
-       return ZB(BB) && "" !== BB.persisted.shared.text.trim()
+       return EW(WW) ? "vertexOutputs.position" : "gl_Position"
+     }
+ 
+     function sW(WW, iW) {
+       return EW(WW) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${iW}}` : `void main() {${iW}}`
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L3907-L3909` → after: `L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/268.js#L163) · [Before (L3907-L3909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/268.js#L3907-L3909)

```diff
-       let [GB, , YB] = OB;
-       const [QB, , oB] = DB.z[BB][lB];
-       return GB * QB + YB * oB
+       return EW(WW) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${iW}}` : `void main() {${iW}}`
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L3913` → after: `L167-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L167-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/268.js#L167-L170) · [Before (L3913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/268.js#L3913)

```diff
-       return GB[1] - OB[1] || RB(BB, OB) - RB(BB, GB)
+       if (EW(WW)) {
+         return [`var ${iW}Sampler: sampler;`, `var ${iW}: ${"2dArray"===OW?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
+       }
+       return `uniform highp ${"2dArray"===OW?"sampler2DArray":"sampler2D"} ${iW};`
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L3916-L3921` → after: `L173-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L173-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/268.js#L173-L174) · [Before (L3916-L3921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/268.js#L3916-L3921)

```diff
-     function AB(BB, OB, GB, QB, jB) {
-       var yB;
-       let MB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : BB(OB[0], OB[1], OB[2]);
-       if (!(JB[MB - oB] & 1 << GB)) return null;
-       const [PB, zB, lB] = DB.z[jB][GB], pB = [OB[0] + PB, OB[1] + zB, OB[2] + lB], qB = BB(pB[0], pB[1], pB[2]), ZB = null === (yB = YB.h[qB]) || void 0 === yB ? void 0 : yB.meta;
-       return (null === ZB || void 0 === ZB ? void 0 : ZB.rootId) === QB && ZB.rot === jB && JB[qB - oB] & 1 << (1 ^ GB) ? pB : null
+     function SW(WW, iW, OW) {
+       return EW(WW) ? `textureSample(${iW}, ${iW}Sampler, ${OW})` : `texture2D(${iW}, ${OW})`
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L3924-L3948` → after: `L177-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L177-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/268.js#L177-L179) · [Before (L3924-L3948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/268.js#L3924-L3948)

```diff
-     function VB(BB, OB, GB, QB) {
-       const oB = BB(OB, GB, QB);
-       if (!yB(oB)) return null;
-       const {
-         rootId: jB,
-         rot: JB
-       } = YB.h[oB].meta, PB = (OB, GB) => {
-         let YB = OB,
-           DB = 1;
-         for (let QB = AB(BB, YB, GB, jB, JB); QB && DB < MB; QB = AB(BB, YB, GB, jB, JB)) YB = QB, DB++;
-         return {
-           end: YB,
-           cells: DB
-         }
-       }, ZB = PB(PB([OB, GB, QB], zB).end, pB).end, NB = PB(ZB, lB).cells, [RB, , WB] = DB.z[JB][lB];
-       let VB = 1;
- ... (9 more removed lines; see GitHub link above)
+     function YW(WW, iW, OW, mW, NW) {
+       if (EW(WW)) {
+         return `${NW?"textureSampleLevel":"textureSample"}(${iW}, ${iW}Sampler, ${OW}, ${wW(WW,`round(${mW})`)}${NW?`, ${NW}`:""})`
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L3952-L3966` → after: `L185-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L185-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/268.js#L185-L186) · [Before (L3952-L3966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/268.js#L3952-L3966)

```diff
-     function SB(BB, OB) {
-       for (const GB of function(BB) {
-           let {
-             anchor: OB,
-             rot: GB,
-             width: YB,
-             height: QB
-           } = BB;
-           const [oB, , jB] = DB.z[GB][lB], yB = [];
-           for (let DB = 0; DB < QB; DB++)
-             for (let BB = 0; BB < YB; BB++) yB.push([OB[0] + oB * BB, OB[1] - DB, OB[2] + jB * BB]);
-           return yB
-         }(BB))
-         if (ZB(OB(GB[0], GB[1], GB[2]))) return GB;
-       return null
+     function yW(WW) {
+       return EW(WW) ? "!baseColor\\=\\w+\\(diffuseSampler,diffuseSamplerSampler,fragmentInputs\\.vDiffuseUV\\+uvOffset\\);" : "!baseColor\\=\\w+\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);"
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L3969-L3995` → after: `L189-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L189-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/268.js#L189-L193) · [Before (L3969-L3995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/268.js#L3969-L3995)

```diff
-     function nB(BB, OB, GB, DB, QB) {
-       const oB = BB(GB, DB, QB);
-       if (!yB(oB)) return null;
-       const {
-         rootId: jB,
-         rot: JB
-       } = YB.h[oB].meta, MB = [
-         [GB, DB, QB]
-       ], zB = new Set([MB[0].join()]);
-       let lB = MB[0],
-         pB = null;
-       for (let YB = 0; YB < MB.length; YB++) {
-         const GB = MB[YB];
-         if (WB(JB, GB, lB) < 0 && (lB = GB), ZB(OB(GB[0], GB[1], GB[2]))) {
-           const OB = VB(BB, GB[0], GB[1], GB[2]);
-           (!pB || WB(JB, OB.anchor, pB.anchor) < 0) && (pB = OB)
- ... (11 more removed lines; see GitHub link above)
+     function TW(WW) {
+       return EW(WW) ? {
+         "!varying vMainUV1: vec2f;": "centroid varying vMainUV1: vec2f;"
+       } : {
+         "!varying vec2 vMainUV1;": "#ifdef WEBGL2\ncentroid varying vec2 vMainUV1;\n#else\nvarying vec2 vMainUV1;\n#endif"
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L3999-L4017` → after: `L197-L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L197-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/268.js#L197-L198) · [Before (L3999-L4017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/268.js#L3999-L4017)

```diff
-     function UB(BB, OB, GB, oB, jB) {
-       if (null !== GB && yB(GB)) {
-         const {
-           rootName: BB,
-           rot: OB
-         } = YB.h[GB].meta;
-         if (DB.z[OB].some((BB => {
-             let [OB, GB, YB] = BB;
-             return OB === oB[0] && GB === oB[1] && YB === oB[2]
-           }))) return {
-           root: BB,
-           rot: OB
-         }
-       }
-       const [JB, MB] = DB.p[jB], PB = BB(OB[0] - JB, OB[1], OB[2] - MB);
-       return {
- ... (3 more removed lines; see GitHub link above)
+     function JW(WW, iW) {
+       return EW(WW) ? `vertexInputs.${iW}` : iW
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L4241-L4244` → after: `L201-L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L201-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/268.js#L201-L202) · [Before (L4241-L4244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/268.js#L4241-L4244)

```diff
-     function lB(BB) {
-       for (const OB of DB.b)
-         if (PB[OB].meshItemName === BB) return OB;
-       return null
+     function hW(WW, iW) {
+       return EW(WW) ? `vertexOutputs.${iW}` : iW
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L4248-L4253` → after: `L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/268.js#L206) · [Before (L4248-L4253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/268.js#L4248-L4253)

```diff
-       const GB = BB.validBlockIds;
-       if (Array.isArray(GB)) return GB.includes(OB);
-       if (OB === yB) return !1;
-       if ("solidBlocks" === GB) return !0 !== QB.h[OB].fl;
-       if ("solidBlocksOrFluid" === GB) return !0;
-       throw new Error(`Unsupported validBlockIds for ${OB}: ${JSON.stringify(GB)}`)
+       return EW(WW) ? `fragmentInputs.${iW}` : iW
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L4377-L4379` → after: `L209-L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L209-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/268.js#L209-L210) · [Before (L4377-L4379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/268.js#L4377-L4379)

```diff
-     function NB(BB) {
-       var OB;
-       return null === BB || void 0 === BB ? null : null !== (OB = ZB[BB]) && void 0 !== OB ? OB : null
+     function nW(WW, iW) {
+       return EW(WW) ? `uniforms.${iW}` : iW
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L4419-L4421` → after: `L213-L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L213-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/268.js#L213-L214) · [Before (L4419-L4421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/268.js#L4419-L4421)

```diff
-     function AB(BB) {
-       var OB;
-       return null === BB || void 0 === BB ? null : null !== (OB = WB[BB]) && void 0 !== OB ? OB : null
+     function uW(WW, iW, OW) {
+       return EW(WW) ? `frame.${iW}` : OW
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L4427` → after: `L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/268.js#L218) · [Before (L4427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/268.js#L4427)

```diff
-       return VB.has(BB)
+       return EW(WW) ? "scene.vEyePosition" : "vEyePosition"
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L4431` → after: `L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/268.js#L222) · [Before (L4431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/268.js#L4431)

```diff
-       return SB.has(BB)
+       return EW(WW) ? "mesh.visibility" : "visibility"
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L4435-L4437` → after: `L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/268.js#L226) · [Before (L4435-L4437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/268.js#L4435-L4437)

```diff
-       return BB === YB.o.DEFAULT || function(BB) {
-         return VB.has(BB) || SB.has(BB)
-       }(BB)
+       return EW(WW) ? "fragmentInputs.position" : "gl_FragCoord"
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L4441` → after: `L230-L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L230-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/268.js#L230-L262) · [Before (L4441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/268.js#L4441)

```diff
-       return !fB(BB) && BB !== YB.o.SLEEPING
+       return EW(WW) ? "fragmentOutputs.color" : "gl_FragColor"
+     }
+ 
+     function gW(WW, iW) {
+       return EW(WW) ? `dpdx(${iW})` : `dFdx(${iW})`
+     }
+ 
+     function DW(WW, iW) {
+       return EW(WW) ? `dpdy(${iW})` : `dFdy(${iW})`
+     }
+ 
+     function VW(WW, iW) {
+       return EW(WW) ? `inverseSqrt(${iW})` : `inversesqrt(${iW})`
+     }
+ 
+     function pW(WW, iW, OW, mW) {
+ ... (17 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L4444` → after: `L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/268.js#L265) · [Before (L4444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/268.js#L4444)

```diff
-   38894: (BB, OB, GB) => {
+   41392: (WW, iW, OW) => {
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L4446-L4449` → after: `L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/268.js#L267) · [Before (L4446-L4449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/268.js#L4446-L4449)

```diff
-       e: () => QB,
-       i: () => oB,
-       j: () => DB,
-       n: () => jB
+       c: () => mW
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L4451-L4462` → after: `L269-L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L269-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/268.js#L269-L277) · [Before (L4451-L4462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/268.js#L4451-L4462)

```diff
-     var YB = GB(358);
-     const DB = ["Snowball", "Snowball Launcher", "Pebble", "Reinforced Pebble", "Ball", "Reinforced Ball", "Mango", "Moonstone Orb", ...GB(635).w.map((BB => `${BB} Spawn Orb`)), "Fireball", "RPG", "Obby RPG", "Super RPG", "Grenade Launcher", "Iceball", "Bouncy Bomb", "Coconut", " … [truncated]
-       QB = ["Obby RPG"];
- 
-     function oB(BB) {
-       const OB = BB.indexOf("|");
-       return -1 === OB ? {
-         item: BB,
-         clientPredictedThrower: null
-       } : {
-         item: BB.slice(0, OB),
-         clientPredictedThrower: BB.slice(OB + 1)
+     class mW {
+       static GetShadersRepository() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? mW.ShadersRepository : mW.ShadersRepositoryWGSL
+       }
+       static GetShadersStore() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? mW.ShadersStore : mW.ShadersStoreWGSL
+       }
+       static GetIncludesShadersStore() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? mW.IncludesShadersStore : mW.IncludesShadersStoreWGSL
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L4465` → after: `L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/268.js#L280) · [Before (L4465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/268.js#L4465)

```diff
-     const jB = [...DB, "Arrow", "Arrow of Speed", "Arrow of Slowness", "Arrow of Poison", "Arrow of Weakness", "Arrow of Knockback", "Arrow of Strength", "Arrow of Defense", "Arrow of Invisibility", "Arrow of Jumping", "Arrow of Milk", "Arrow of Instant Damage", "Arrow of Regener … [truncated]
+     mW.ShadersRepository = "src/Shaders/", mW.ShadersStore = {}, mW.IncludesShadersStore = {}, mW.ShadersRepositoryWGSL = "src/ShadersWGSL/", mW.ShadersStoreWGSL = {}, mW.IncludesShadersStoreWGSL = {}
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/269.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/269.js` (38 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70)

#### 1. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/269.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/269.js#L4)

```diff
-   38739: (BB, OB, GB) => {
+   42543: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L6-L11` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/269.js#L6) · [Before (L6-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/269.js#L6-L11)

```diff
-       d: () => JB,
-       f: () => YB,
-       j: () => jB,
-       l: () => DB,
-       o: () => oB,
-       q: () => QB
+       noaDevTools: () => ZW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L13-L18` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/269.js#L8-L12) · [Before (L13-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/269.js#L13-L18)

```diff
-     const YB = 1.001,
-       DB = .501,
-       QB = .025,
-       oB = .75,
-       jB = .08,
-       yB = 4;
+     var mW = OW(38626),
+       EW = OW(38612),
+       NW = OW(2365),
+       PW = OW(1856),
+       LW = OW(42471);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L20-L30` → after: `L14-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L14-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/269.js#L14-L36) · [Before (L20-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/269.js#L20-L30)

```diff
-     function JB() {
-       const BB = DB,
-         OB = QB,
-         GB = BB - OB / 2,
-         YB = (2 * BB - 2 * OB) / (2 * yB - 1),
-         oB = [];
-       for (const DB of [-GB, GB])
-         for (const QB of [-GB, GB])
-           for (let GB = 0; GB < yB; GB++) {
-             const jB = -BB + OB + YB * (2 * GB + .5);
-             oB.push([YB, OB, OB, jB, DB, QB]), oB.push([OB, YB, OB, DB, jB, QB]), oB.push([OB, OB, YB, DB, QB, jB])
+     function cW(WW) {
+       const {
+         TZ: iW
+       } = WW, OW = iW.engine, mW = {
+         width: OW.getRenderWidth(),
+         height: OW.getRenderHeight()
+       };
+       return {
+         canvas: OW.getRenderingCanvas(),
+         maxTextureSize: OW.getCaps().maxTextureSize,
+         KZ: () => !WW.JZ,
+         resize: (WW, iW) => {
+           OW.setSize(WW, iW)
+         },
+         restoreSize: () => {
+           OW.setSize(mW.width, mW.height), iW.resize()
+ ... (7 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L32-L35` → after: `L38-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/269.js#L38-L39) · [Before (L32-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/269.js#L32-L35)

```diff
-       for (const DB of [-GB, GB])
-         for (const BB of [-GB, GB])
-           for (const YB of [-GB, GB]) oB.push([OB, OB, OB, DB, BB, YB]);
-       return oB
+         }
+       }
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L37-L58` → after: `L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/269.js#L41) · [Before (L37-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/269.js#L37-L58)

```diff
-   },
-   39084: (BB, OB, GB) => {
-     GB.d(OB, {
-       B: () => lB,
-       C: () => SB,
-       F: () => UB,
-       J: () => VB,
-       L: () => AB,
-       O: () => zB,
-       S: () => qB,
-       V: () => NB,
-       W: () => DB,
-       b: () => MB,
-       e: () => yB,
-       g: () => WB,
-       j: () => JB,
- ... (6 more removed lines; see GitHub link above)
+     var wW = OW(35114);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L60-L69` → after: `L43-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L43-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/269.js#L43-L72) · [Before (L60-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/269.js#L60-L69)

```diff
-     function DB(BB) {
-       return Math.floor(BB).toLocaleString("en-US")
-     }
-     const QB = 2e3,
-       oB = .005,
-       jB = .001,
-       yB = 2,
-       JB = "Fluid Tank",
-       MB = "Coolant Mixer",
-       PB = 144;
+     function tW(WW, iW) {
+       let {
+         width: wW,
+         height: tW,
+         colouring: ZW
+       } = iW;
+       const xW = "normals" === ZW,
+         lW = "depth" === ZW;
+       return new Promise((iW => {
+         try {
+           const AW = (0, NW.h)();
+           if (AW.TZ.Lb) return "screenshot" !== WW || null !== ZW ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void iW()) : void(0, LW.f)(cW(AW), wW, tW).finally(iW);
+           const bW = AW.TZ.engine,
+             jW = AW.TZ.bD(),
+             UW = wW,
+             kW = tW;
+ ... (14 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L71-L73` → after: `L74-L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L74-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/269.js#L74-L229) · [Before (L71-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/269.js#L71-L73)

```diff
-     function zB(BB) {
-       const OB = BB.split("|")[0];
-       return (0, YB.n)(OB) ? OB === YB.e ? "cryo" : "water" : null
+             function YW() {
+               var WW;
+               KW && (KW = !1, (0, mW.g)(jW.meshes, !1)), null === (WW = SW) || void 0 === WW || WW(), SW = null, MW.forEach((WW => {
+                 const iW = sW.get(WW);
+                 iW && (WW.material = iW)
+               }))
+             }
+             if (xW) {
+               const WW = [],
+                 iW = [];
+               MW.forEach((OW => {
+                 const mW = OW.name.toLowerCase(),
+                   EW = OW.KV().boundingBox.center,
+                   NW = jW.activeCamera.position.subtract(EW).length();
+                 mW.includes("sky") || mW.includes("background") || mW.includes("environment") || NW > 1e3 ? iW.push(OW) : WW.push(OW)
+               })), ZW("devtoolsNormal", AW);
+ ... (140 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L75-L102` → after: `L231-L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L231-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/269.js#L231-L247) · [Before (L75-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/269.js#L75-L102)

```diff
-     const lB = [
-         [1, 0, 0],
-         [-1, 0, 0],
-         [0, 1, 0],
-         [0, -1, 0],
-         [0, 0, 1],
-         [0, 0, -1]
-       ],
-       pB = 63;
- 
-     function qB(BB) {
-       let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-       const GB = OB ? function(BB, OB, GB) {
-         const YB = lB.findIndex((YB => {
-           let [DB, QB, oB] = YB;
-           return DB === BB && QB === OB && oB === GB
- ... (12 more removed lines; see GitHub link above)
+     const ZW = new class {
+       constructor() {
+         this.tools = wW.ALL_DEV_TOOLS
+       }
+       downloadScene(WW, iW) {
+         return tW(WW, iW)
+       }
+       async setAmbientLightIntensity(WW) {
+         const {
+           Color3: iW
+         } = await Promise.all([OW.e(264), OW.e(267)]).then((() => OW(38369)));
+         (0, NW.h)().TZ.bD().ambientColor = iW.FromArray([WW, WW, WW])
+       }
+       capturePhoto(WW, iW, OW) {
+         return function(WW, iW, OW, mW) {
+           return (0, LW.d)(cW(WW), iW, OW, mW)
+ ... (1 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L105-L108` → after: `L250-L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L250-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/269.js#L250-L259) · [Before (L105-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/269.js#L105-L108)

```diff
- 
-     function ZB(BB) {
-       return "pipe" === BB || "tank" === BB || "maker" === BB
-     }
+   },
+   42471: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => LW,
+       f: () => cW
+     });
+     var mW = OW(1876);
+     const EW = 33177600,
+       NW = 3e4;
+     let PW = !1;
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L111-L164` → after: `L262-L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L262-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/269.js#L262-L295) · [Before (L111-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/269.js#L111-L164)

```diff
-       return 0 !== (BB.faces & 1 << GB) && 0 !== (OB.faces & 1 << (1 ^ GB)) && (ZB(BB.kind) || ZB(OB.kind))
-     }
-     const RB = (BB, OB, GB, YB) => ({
-         input: BB,
-         inputAmount: YB,
-         output: OB,
-         outputAmount: GB
-       }),
-       WB = {
-         Condenser: {
-           kind: "Condenser",
-           opMs: 2e3,
-           inputSlot: null,
-           fuelSlot: null,
-           outputSlots: [],
-           recipes: [],
- ... (38 more removed lines; see GitHub link above)
+       let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
+       const {
+         scale: LW = 1,
+         type: cW = "image/png",
+         quality: wW
+       } = mW;
+       return WW.KZ() ? PW ? Promise.reject(new Error("A screenshot is already being taken")) : (PW = !0, new Promise(((mW, tW) => {
+         let ZW, xW = 2,
+           lW = null;
+         const AW = () => {
+           var iW;
+           PW = !1, null === (iW = lW) || void 0 === iW || iW(), clearTimeout(ZW);
+           try {
+             WW.restoreSize()
+           } catch (OW) {
+             console.error("A screenshot couldn't size the canvas back", OW)
+ ... (18 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L166-L169` → after: `L297-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L297-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/269.js#L297-L318) · [Before (L166-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/269.js#L166-L169)

```diff
-       };
- 
-     function AB(BB, OB) {
-       return 1e3 * (null !== OB && void 0 !== OB ? OB : 0) / BB.opMs
+         lW = WW.onFrameDrawn((() => {
+           if (xW--, xW > 0) return;
+           const {
+             canvas: iW
+           } = WW, OW = {
+             width: iW.width,
+             height: iW.height
+           };
+           try {
+             iW.toBlob((WW => {
+               WW ? mW({
+                 blob: WW,
+                 ...OW
+               }) : tW(new Error("The canvas gave no image"))
+             }), cW, wW)
+           } catch (bW) {
+ ... (6 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L171-L175` → after: `L320-L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L320-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/269.js#L320-L326) · [Before (L171-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/269.js#L171-L175)

```diff
- 
-     function VB(BB) {
-       let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-       const GB = AB(WB["Coolant Mixer"], PB) * OB;
-       return BB <= 0 ? 0 : Math.ceil(BB / GB - 1e-9)
+     async function cW(WW, iW, OW) {
+       try {
+         const EW = await LW(WW, iW, OW);
+         (0, mW.e)(EW.blob, `bloxd-screenshot-${EW.width}x${EW.height}-${Date.now()}.png`)
+       } catch (EW) {
+         console.error("Error taking screenshot:", EW)
+       }
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L181` → after: `L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/269.js#L329) · [Before (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/269.js#L181)

```diff
-   39074: (BB, OB, GB) => {
+   38626: (WW, iW, OW) => {
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L183-L184` → after: `L331-L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L331-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/269.js#L331-L333) · [Before (L183-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/269.js#L183-L184)

```diff
-       b: () => FB,
-       d: () => iB
+       d: () => wW,
+       g: () => LW,
+       i: () => PW
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L186-L209` → after: `L335-L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L335-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/269.js#L335-L337) · [Before (L186-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/269.js#L186-L209)

```diff
-     var YB = GB(9927),
-       DB = GB(9965);
-     const QB = [
-       [1, 0, 0],
-       [-1, 0, 0],
-       [0, 0, 1],
-       [0, 0, -1],
-       [0, 1, 0],
-       [0, -1, 0]
-     ];
-     var oB = GB(9983),
-       jB = GB(38888),
-       yB = GB(9974);
-     const JB = {
-       1: [0, -1],
-       2: [-1, 0],
- ... (8 more removed lines; see GitHub link above)
+     var mW = OW(38623),
+       EW = OW(38631);
+     let NW = 0;
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L212` → after: `L340-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L340-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/269.js#L340-L343) · [Before (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/269.js#L212)

```diff
-       return BB[0] === OB[0] && BB[1] === OB[1]
+       const OW = WW;
+       OW._noaFaceGroups = null !== iW && void 0 !== iW ? iW : null, OW._noaFaceEpoch = -1, OW._noaFaceMask = -1, OW._noaFaceCount = -1, OW._noaFaceMaterial = null;
+       const mW = WW.hY;
+       mW && 1 === mW.length && (mW[0].indexStart = 0, mW[0].indexCount = WW.getTotalIndices())
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L216` → after: `L347-L353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L347-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/269.js#L347-L353) · [Before (L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/269.js#L216)

```diff
-       return BB[0] * OB[0] + BB[1] * OB[1] === 0
+       if (iW) {
+         NW++;
+         for (const iW of WW) {
+           const WW = iW._noaFaceGroups;
+           WW && PW(iW, WW)
+         }
+       } else NW = Math.max(0, NW - 1)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L226-L227` → after: `L356-L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L356-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/269.js#L356-L364) · [Before (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/269.js#L226-L227)

```diff
-     function qB(BB, OB, GB, YB, DB) {
-       return OB < pB.k || OB >= pB.k + pB.o || Math.floor(BB / pB.t) === Math.floor(YB / pB.t) && Math.floor(GB / pB.t) === Math.floor(DB / pB.t)
+     function cW(WW, iW, OW) {
+       let EW = -1,
+         NW = 0;
+       for (let PW = 0; PW < mW.f; PW++) {
+         const OW = WW[PW],
+           LW = WW[PW + 1];
+         LW > OW && iW & 1 << mW.d[PW] && (EW < 0 && (EW = OW), NW = LW)
+       }
+       return EW < 0 ? (OW[0] = 0, OW[1] = 0, 0) : (OW[0] = EW, OW[1] = NW - EW, NW - EW)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L229-L245` → after: `L366-L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L366-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/269.js#L366-L413) · [Before (L229-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/269.js#L229-L245)

```diff
-     const ZB = "Splitter",
-       NB = "Sorting Gate",
-       RB = new Set(pB.E),
-       WB = new Set([...pB.E, "Belt Loader", "Fast Loader", NB]),
-       AB = new Set(pB.s),
-       VB = [
-         [1, 0, 0],
-         [-1, 0, 0],
-         [0, 0, 1],
-         [0, 0, -1],
-         [0, 1, 0],
-         [0, -1, 0]
-       ];
- 
-     function SB(BB) {
-       var OB, GB;
- ... (1 more removed lines; see GitHub link above)
+     class wW {
+       constructor(WW, iW) {
+         this.jZ = WW, this.engine = iW, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
+       }
+       apply(WW, iW) {
+         if (!iW) return;
+         const OW = iW.getProjectionMatrix().m,
+           PW = 0 === NW && 0 === OW[15],
+           LW = iW.globalPosition,
+           {
+             engine: wW
+           } = this,
+           tW = PW ? (0, EW.e)(OW, wW.getRenderWidth(), wW.getRenderHeight()) : 0;
+         LW.x === this.eyeX && LW.y === this.eyeY && LW.z === this.eyeZ && tW === this.focalPx && PW === this.culling || (this.epoch++, this.eyeX = LW.x, this.eyeY = LW.y, this.eyeZ = LW.z, this.focalPx = tW, this.culling = PW);
+         const {
+           epoch: ZW,
+ ... (32 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L248-L249` → after: `L425-L426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L425-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/269.js#L425-L426) · [Before (L248-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/269.js#L248-L249)

```diff
-     function nB(BB) {
-       return SB(BB) === pB.e && (0, pB.O)(YB.h[BB].name)
+     function PW(WW, iW) {
+       WW._data = iW
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L262-L270` → after: `L431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/269.js#L431) · [Before (L262-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/269.js#L262-L270)

```diff
-       const DB = null === (OB = YB.h[BB]) || void 0 === OB ? void 0 : OB.meta;
-       return (null === DB || void 0 === DB ? void 0 : DB.rootName) !== fB.p ? null : {
-         rot: null !== (GB = DB.rot) && void 0 !== GB ? GB : 1,
-         half: (0, fB.h)(DB.rootName, DB.metaStr)
-       }
-     }
- 
-     function KB(BB, OB, GB, YB) {
-       return dB(BB(OB, GB, YB))
+       (null !== (iW = null === (OW = WW.getBuffer()) || void 0 === OW ? void 0 : OW.aZ) && void 0 !== iW ? iW : 0) > 0 && (mW.add(WW), 0 === EW ? PW(WW, null) : NW.add(WW))
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L273-L386` → after: `L434-L444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L434-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/269.js#L434-L444) · [Before (L273-L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/269.js#L273-L386)

```diff
-     function uB(BB, OB, GB, YB, DB) {
-       let {
-         rot: QB,
-         half: oB
-       } = DB;
-       const [jB, yB] = (0, fB.l)(QB, oB), JB = KB(BB, OB + jB, GB, YB + yB);
-       return null !== JB && JB.rot === QB && JB.half === fB.s[oB]
-     }
-     var mB = GB(39081);
-     const IB = [new class {
-       constructor() {
-         this.reshapeOffsets = lB
-       }
-       handles(BB) {
-         var OB;
-         return "Stairs" === (null === (OB = YB.h[BB]) || void 0 === OB ? void 0 : OB.model)
- ... (98 more removed lines; see GitHub link above)
+     function cW(WW) {
+       EW++;
+       for (const OW of function(WW) {
+           const iW = new Set;
+           for (const EW of WW) {
+             const WW = EW.geometry;
+             for (const EW of Object.values(null !== (OW = null === WW || void 0 === WW ? void 0 : WW.getVertexBuffers()) && void 0 !== OW ? OW : {})) {
+               var OW;
+               const WW = EW.getWrapperBuffer();
+               mW.has(WW) && iW.add(WW)
+             }
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L388-L438` → after: `L446-L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L446-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/269.js#L446-L452) · [Before (L388-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/269.js#L388-L438)

```diff
-           return (0, YB.j)((0, pB.Y)(QB, !1))
-         }(BB, OB, GB, DB, yB) : (0, YB.j)((0, pB.F)(jB, yB, function(BB, OB, GB, DB, QB) {
-           const [oB, jB] = pB.d[QB - 1], yB = (QB, oB) => function(BB, OB, GB) {
-             var DB;
-             const QB = null === (DB = YB.h[BB]) || void 0 === DB ? void 0 : DB.meta;
-             if (!QB) return !1;
-             const oB = QB.rootName,
-               jB = WB.has(oB) || nB(BB);
-             if (!jB && !AB.has(oB) && oB !== ZB) return !1;
-             const [yB, JB] = pB.d[QB.rot - 1];
-             if (jB && yB === -OB && JB === -GB) return !0;
-             if (AB.has(oB)) return yB === OB && JB === GB;
-             const MB = YB.h[BB].name;
-             return (oB === ZB ? (0, pB.U)(MB, yB, JB) : oB === NB ? [(0, pB.J)(MB, yB, JB)] : []).some((BB => {
-               let [YB, DB] = BB;
-               return YB === -OB && DB === -GB
- ... (35 more removed lines; see GitHub link above)
+           return iW
+         }(WW)) OW.getData() || wW(OW), NW.add(OW);
+       let iW = !0;
+       return () => {
+         if (iW && (iW = !1, EW--, 0 === EW)) {
+           for (const WW of NW) PW(WW, null);
+           NW.clear()
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L442-L450` → after: `L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/269.js#L455) · [Before (L442-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/269.js#L442-L450)

```diff
-       reshapedHalf(BB, OB, GB, YB, DB) {
-         if (null !== DB.half && uB(BB, OB, GB, YB, DB)) return DB.half;
-         for (const QB of ["right", "left"]) {
-           const [oB, jB] = (0, fB.l)(DB.rot, QB), yB = KB(BB, OB + oB, GB, YB + jB);
-           if (null !== yB && yB.rot === DB.rot && yB.half === fB.s[QB]) return QB
-         }
-         return null
-       }
-     }, new mB.e];
+     }
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L452-L456` → after: `L457-L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L457-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/269.js#L457-L462) · [Before (L452-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/269.js#L452-L456)

```diff
-     function FB(BB, OB, GB, YB, DB) {
-       let QB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
-       for (const oB of IB)
-         if (oB.handles(DB)) return oB.shape(BB, OB, GB, YB, DB, QB);
-       return DB
+     function wW(WW) {
+       const iW = WW.getBuffer();
+       if (!iW || !(iW.aZ > 0)) return;
+       const OW = WW._engine,
+         mW = new Uint8Array(iW.aZ);
+       OW.bindArrayBuffer(iW), OW._gl.getBufferSubData(OW._gl.ARRAY_BUFFER, 0, mW), OW._resetVertexBufferBinding(), PW(WW, mW)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L460-L464` → after: `L489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/269.js#L489) · [Before (L460-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/269.js#L460-L464)

```diff
-       for (const YB of IB) {
-         var OB, GB;
-         if (YB.handles(BB)) return null !== (OB = null === (GB = YB.placedBy) || void 0 === GB ? void 0 : GB.call(YB, BB)) && void 0 !== OB ? OB : null
-       }
-       return null
+       return !!WW && WW.backFaceCulling && (0 === WW.transparencyMode || 1 === WW.transparencyMode)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L467` → after: `L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/269.js#L492) · [Before (L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/269.js#L467)

```diff
-   39081: (BB, OB, GB) => {
+   38631: (WW, iW, OW) => {
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L470-L471` → after: `L495-L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L495-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/269.js#L495-L498) · [Before (L470-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/269.js#L470-L471)

```diff
-       g: () => AB,
-       k: () => WB
+       h: () => cW,
+       j: () => tW,
+       m: () => wW,
+       o: () => AW
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L473-L481` → after: `L500-L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L500-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/269.js#L500-L504) · [Before (L473-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/269.js#L473-L481)

```diff
-     var YB = GB(9927),
-       DB = GB(9955),
-       QB = GB(10010),
-       oB = GB(39084),
-       jB = GB(10004);
-     const yB = (0, oB.S)("pipe"),
-       JB = (0, oB.S)("tank"),
-       MB = (0, oB.S)("port"),
-       PB = "Reactor Port";
+     var mW = OW(38623);
+     const EW = 1 / 16,
+       NW = 1 / 64,
+       PW = 2048;
+     mW.k;
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L484-L488` → after: `L507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/269.js#L507) · [Before (L484-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/269.js#L484-L488)

```diff
-       const YB = new Set([QB.g, QB.e, PB, ...OB, ...GB, ...BB ? [oB.j] : []]);
-       return {
-         makers: new Set(OB),
-         roots: YB
-       }
+       return Math.min(Math.abs(WW[0] * iW), Math.abs(WW[5] * OW)) / 2
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L512-L522` → after: `L510-L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L510-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/269.js#L510-L511) · [Before (L512-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/269.js#L512-L522)

```diff
-     function RB(BB) {
-       let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
-       const GB = YB.h[BB],
-         DB = null === GB || void 0 === GB ? void 0 : GB.meta.rootName,
-         zB = lB[OB];
-       if (!DB || !zB.roots.has(DB)) return null;
-       if ((0, QB.n)(DB)) return (0, oB.O)(GB.name) === OB ? yB : null;
-       if (DB === oB.j) return JB;
-       if (DB === PB) return GB.name.endsWith("|Water") ? MB : null;
-       const [pB, qB] = jB.d[(GB.meta.rot || 1) - 1];
-       return (0, oB.S)(zB.makers.has(DB) ? "maker" : "user", [-pB, 0, -qB])
+     function cW(WW, iW) {
+       return EW + NW * WW * WW / iW
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L525-L536` → after: `L514-L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L514-L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/269.js#L514-L516) · [Before (L525-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/269.js#L525-L536)

```diff
-     function WB(BB, OB, GB, DB) {
-       let QB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
-       const {
-         makers: jB
-       } = lB[QB];
-       return ZB.some(((JB, MB) => {
-         var PB, zB;
-         let [lB, pB, qB] = JB;
-         const ZB = BB(OB + lB, GB + pB, DB + qB),
-           WB = RB(ZB, QB);
-         return null !== WB && jB.has(null !== (PB = null === (zB = YB.h[ZB]) || void 0 === zB ? void 0 : zB.meta.rootName) && void 0 !== PB ? PB : "") && !(0, oB.V)(yB, WB, NB[MB])
-       }))
+     function wW(WW, iW, OW, EW, NW) {
+       const PW = mW.o;
+       return tW(WW[PW], WW[PW + 1], WW[PW + 2], WW[PW + 3], WW[PW + 4], WW[PW + 5], iW, OW, EW, NW)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L539-L541` → after: `L519-L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L519-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/269.js#L519-L520) · [Before (L539-L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/269.js#L539-L541)

```diff
-     function AB(BB) {
-       const OB = YB.h[BB];
-       return OB ? (0, oB.O)(OB.name) : null
+     function tW(WW, iW, OW, mW, EW, NW, PW, LW, cW, wW) {
+       return (PW <= WW - wW ? 0 : 1) | (PW >= iW + wW ? 0 : 2) | (LW <= OW - wW ? 0 : 4) | (LW >= mW + wW ? 0 : 8) | (cW <= EW - wW ? 0 : 16) | (cW >= NW + wW ? 0 : 32)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L543-L553` → after: `L522-L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L522-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/269.js#L522-L532) · [Before (L543-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/269.js#L543-L553)

```diff
-     let VB = null;
- 
-     function SB(BB) {
-       if (!VB) {
-         VB = new Map;
-         for (const BB of ["water", "cryo"])
-           for (let OB = 0; OB < 64; OB++)
-             for (const GB of [!1, !0]) VB.set((0, QB.p)(BB, OB, GB), {
-               fl: BB,
-               mask: OB,
-               full: GB
+     const ZW = (() => {
+         const WW = [];
+         for (let iW = 0; iW < mW.s.length; iW++) {
+           let OW = 0;
+           for (let EW = iW + 1; EW <= mW.s.length; EW++) {
+             const NW = 1 << mW.s[EW - 1];
+             if (OW & NW) break;
+             OW |= NW, WW.push({
+               start: iW,
+               end: EW,
+               iW: OW
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L555-L560` → after: `L534-L538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L534-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/269.js#L534-L538) · [Before (L555-L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/269.js#L555-L560)

```diff
-       }
-       return VB.get(BB)
-     }
-     const nB = new Map(Array.from({
-       length: QB.k + 1
-     }, ((BB, OB) => [(0, QB.q)(OB), OB])));
+           }
+         }
+         return WW
+       })(),
+       xW = [];
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L562-L614` → after: `L540-L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L540-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/269.js#L540-L542) · [Before (L562-L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/269.js#L562-L614)

```diff
-     function UB(BB, OB, GB, DB, QB, oB) {
-       return ZB.some(((jB, yB) => {
-         var JB, MB, PB;
-         let [zB, lB, pB] = jB;
-         if (0 === (oB >> yB & 1)) return !1;
-         const qB = null !== (JB = null === (MB = YB.h[BB(OB + zB, GB + lB, DB + pB)]) || void 0 === MB ? void 0 : MB.name) && void 0 !== JB ? JB : "",
-           ZB = SB(qB);
-         return ZB ? ZB.fl === QB && ZB.full : (null !== (PB = function(BB) {
-           var OB;
-           return null !== (OB = nB.get(BB)) && void 0 !== OB ? OB : null
-         }(qB)) && void 0 !== PB ? PB : 0) > 0
-       }))
-     }
-     class fB {
-       constructor() {
-         this.reshapeOffsets = ZB
- ... (37 more removed lines; see GitHub link above)
+     function lW(WW, iW) {
+       const OW = mW.g[iW];
+       return WW[OW + 1] - WW[OW]
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L643-L644` → after: `L545-L579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L545-L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/269.js#L545-L579) · [Before (L643-L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/269.js#L643-L644)

```diff
-     function QB(BB) {
-       return DB.find((OB => OB.exactMatch ? BB === OB.name : BB.includes(OB.name)))
+     function AW(WW, iW, OW) {
+       let EW = 0;
+       for (let PW = 0; PW < mW.k; PW++) lW(WW, PW) > 0 && (EW |= 1 << PW);
+       if (0 === (iW &= EW)) return 0;
+       if (iW === EW) return OW[0] = 0, OW[1] = WW[mW.f], 1;
+       let NW = null,
+         LW = 1 / 0;
+       for (const wW of function(WW) {
+           let iW = xW[WW];
+           if (iW) return iW;
+           const OW = new Map,
+             mW = (WW, iW) => {
+               const mW = 4 * WW + iW.length / 2;
+               OW.has(mW) || OW.set(mW, {
+                 iW: WW,
+                 windows: iW
+ ... (19 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/270.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/270.js` (24 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L4-L38` → after: `L4-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/270.js#L4-L10) · [Before (L4-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/270.js#L4-L38)

```diff
-   39162: (BB, OB, GB) => {
-     GB.d(OB, {
-       c: () => oB
-     });
-     var YB = GB(39167);
-     const DB = [0, 0, 0];
-     class QB {
-       constructor(BB) {
-         let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DB;
-         this.pool = BB, this.origin = OB, this.count = 0, this.free = []
-       }
-       take() {
-         var BB;
-         const OB = null !== (BB = this.free.pop()) && void 0 !== BB ? BB : this.count++;
-         return OB >= this.pool.CP && this.pool.grow(Math.max(2 * this.pool.CP, OB + 1)), this.hide(OB), OB
-       }
- ... (19 more removed lines; see GitHub link above)
+   38900: (WW, iW, OW) => {
+     var mW = OW(38905);
+ 
+     function EW(WW) {
+       for (var iW, OW, EW = 0, NW = WW.length, PW = 0; PW < WW.length;) {
+         for (iW = WW[PW], OW = 0; PW < NW && WW[PW] === iW;) ++PW, ++OW;
+         EW += mW.log2(OW) / 7 | 0, EW += mW.log2(iW >>> 0) / 7 | 0, EW += 2
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L41-L63` → after: `L14-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L14-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/270.js#L14-L22) · [Before (L41-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/270.js#L41-L63)

```diff
-     class oB {
-       constructor(BB, OB, GB) {
-         this.api = BB, this.model = OB, this.initialCapacity = GB, this.kinds = new Map, this.origin = [0, 0, 0]
-       }
-       kindOf(BB) {
-         let OB = this.kinds.get(BB);
-         if (void 0 === OB) {
-           const GB = this.api.createInstancePool({
-             ...this.model,
-             item: BB
-           }, this.initialCapacity);
-           null === GB || void 0 === GB || GB.setOrigin(this.origin[0], this.origin[1], this.origin[2]), OB = GB && new QB(GB, this.origin), this.kinds.set(BB, OB)
-         }
-         return OB
-       }
-       follow(BB) {
- ... (7 more removed lines; see GitHub link above)
+     iW.size = EW, iW.encode = function(WW, iW) {
+       iW || (iW = new Uint8Array(EW(WW)));
+       for (var OW, mW, NW = 0, PW = iW.length, LW = 0; LW < WW.length;) {
+         for (OW = WW[LW], mW = 0; LW < WW.length && WW[LW] === OW;) ++LW, ++mW;
+         for (; NW < PW && mW >= 128;) iW[NW++] = 128 + (127 & mW), mW >>>= 7;
+         if (NW >= PW) throw new Error("RLE buffer overflow");
+         for (iW[NW++] = mW, OW >>>= 0; NW < PW && OW >= 128;) iW[NW++] = 128 + (127 & OW), OW >>>= 7;
+         if (NW >= PW) throw new Error("RLE buffer overflow");
+         iW[NW++] = OW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L65-L70` → after: `L24-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L24-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/270.js#L24-L32) · [Before (L65-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/270.js#L65-L70)

```diff
-       commit() {
-         for (const BB of this.kinds.values()) null === BB || void 0 === BB || BB.commit()
-       }
-       dispose() {
-         for (const BB of this.kinds.values()) null === BB || void 0 === BB || BB.dispose();
-         this.kinds.clear()
+       return iW
+     }, iW.decode = function(WW, iW) {
+       for (var OW, mW, EW, NW, PW = iW.length, LW = WW.length, cW = 0, wW = 0; wW < LW;) {
+         for (OW = 0, mW = 0; wW < LW && WW[wW] >= 128;) OW += (127 & WW[wW++]) << mW, mW += 7;
+         if (OW += WW[wW++] << mW, wW >= LW) throw new Error("RLE buffer underrun");
+         if (cW + OW > PW) throw new Error("Chunk buffer overflow");
+         for (EW = 0, mW = 0; wW < LW && WW[wW] >= 128;) EW += (127 & WW[wW++]) << mW, mW += 7;
+         if (wW >= LW) throw new Error("RLE buffer underrun");
+         for (EW += WW[wW++] << mW, NW = 0; NW < OW; ++NW) iW[cW++] = EW
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L74-L115` → after: `L37-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L37-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/270.js#L37-L88) · [Before (L74-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/270.js#L74-L115)

```diff
-   39176: (BB, OB, GB) => {
-     GB.d(OB, {
-       b: () => oB,
-       c: () => jB,
-       f: () => yB
-     });
-     const YB = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
-       DB = [0, 1, 2, 0, 2, 3],
-       QB = [4, 5];
- 
-     function oB(BB, OB, GB, YB, DB) {
-       for (let oB = 0; oB < 6; oB++) QB.includes(oB) === DB && JB(BB, OB, GB, YB, oB)
-     }
- 
-     function jB(BB, OB, GB, YB) {
-       for (let DB = 0; DB < 6; DB++) JB(BB, OB, GB, YB, DB)
- ... (26 more removed lines; see GitHub link above)
+   38905: (WW, iW) => {
+     function OW(WW) {
+       var iW = 32;
+       return (WW &= -WW) && iW--, 65535 & WW && (iW -= 16), 16711935 & WW && (iW -= 8), 252645135 & WW && (iW -= 4), 858993459 & WW && (iW -= 2), 1431655765 & WW && (iW -= 1), iW
+     }
+     iW.INT_BITS = 32, iW.INT_MAX = 2147483647, iW.INT_MIN = -1 << 31, iW.sign = function(WW) {
+       return (WW > 0) - (WW < 0)
+     }, iW.abs = function(WW) {
+       var iW = WW >> 31;
+       return (WW ^ iW) - iW
+     }, iW.min = function(WW, iW) {
+       return iW ^ (WW ^ iW) & -(WW < iW)
+     }, iW.max = function(WW, iW) {
+       return WW ^ (WW ^ iW) & -(WW < iW)
+     }, iW.isPow2 = function(WW) {
+       return !(WW & WW - 1) && !!WW
+ ... (36 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L118` → after: `L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/270.js#L91) · [Before (L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/270.js#L118)

```diff
-   39142: (BB, OB, GB) => {
+   41343: (WW, iW, OW) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L120` → after: `L93-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L93-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/270.js#L93-L95) · [Before (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/270.js#L120)

```diff
-       default: () => PR
+       emptyColumnHeight: () => sW,
+       loadHeatmapSchematic: () => MW,
+       readSchematicBlocks: () => KW
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L122` → after: `L97-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L97-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/270.js#L97-L103) · [Before (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/270.js#L122)

```diff
-     var YB = GB(56);
+     var mW = OW(2484),
+       EW = OW.n(mW),
+       NW = OW(2437),
+       PW = OW(38900),
+       LW = OW(182),
+       cW = OW(5725),
+       wW = OW(40748);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L124-L368` → after: `L105-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/270.js#L105-L106) · [Before (L124-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/270.js#L124-L368)

```diff
-         nameKey: "tierBurner",
-         cost: [],
-         islandRadius: 11.5,
-         machineAllowance: 16,
-         beltAllowance: 64,
-         newDeposits: [],
-         unlocks: [],
-         reward: null
-       }, {
-         nameKey: "tierCurrent",
-         cost: [{
-           item: "Iron Bar",
-           amount: 40
-         }, {
-           item: "Glass",
-           amount: 12
- ... (229 more removed lines; see GitHub link above)
+         name: "x",
+         type: "int"
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L370-L404` → after: `L108-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/270.js#L108-L109) · [Before (L370-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/270.js#L370-L404)

```diff
-         nameKey: "tierStage5",
-         stage: 5,
-         cost: [{
-           item: "Star Alloy",
-           amount: 32
-         }, {
-           item: "Voltite Cell",
-           amount: 64
-         }, {
-           item: "Machine Hull",
-           amount: 20
-         }, {
-           item: "Comet Core",
-           amount: 3
-         }],
-         charge: {
- ... (19 more removed lines; see GitHub link above)
+         name: "y",
+         type: "int"
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L406-L443` → after: `L111-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L111-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/270.js#L111-L116) · [Before (L406-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/270.js#L406-L443)

```diff
-         nameKey: "tierIsotope",
-         reactorTier: 1,
-         cost: [{
-           item: "Uranium Grit",
-           amount: 256
-         }, {
-           item: "Star Alloy",
-           amount: 8
-         }, {
-           item: "Comet Core",
-           amount: 3
-         }, {
-           item: "Glass",
-           amount: 16
-         }],
-         charge: {
- ... (22 more removed lines; see GitHub link above)
+         name: "z",
+         type: "int"
+       }],
+       ZW = [{
+         name: "name",
+         type: "string"
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L445-L476` → after: `L118-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L118-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/270.js#L118-L122) · [Before (L445-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/270.js#L445-L476)

```diff
-         nameKey: "tierFission",
-         reactorTier: 2,
-         cost: [{
-           item: "Uranium Pellet",
-           amount: 16
-         }, {
-           item: "Heat Exchanger",
-           amount: 8
-         }, {
-           item: "Star Alloy",
-           amount: 16
-         }, {
-           item: "Comet Core",
-           amount: 2
-         }],
-         charge: {
- ... (16 more removed lines; see GitHub link above)
+         name: "startOffset",
+         type: {
+           type: "record",
+           fields: tW
+         }
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L478-L509` → after: `L124-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L124-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/270.js#L124-L128) · [Before (L478-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/270.js#L478-L509)

```diff
-         nameKey: "tierCritical",
-         reactorTier: 3,
-         cost: [{
-           item: "Uranium Pellet",
-           amount: 24
-         }, {
-           item: "Spent Pellet",
-           amount: 8
-         }, {
-           item: "Star Alloy",
-           amount: 24
-         }, {
-           item: "Comet Core",
-           amount: 3
-         }],
-         charge: {
- ... (16 more removed lines; see GitHub link above)
+         name: "dimensions",
+         type: {
+           type: "record",
+           fields: tW
+         }
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L511-L535` → after: `L130-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L130-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/270.js#L130-L213) · [Before (L511-L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/270.js#L511-L535)

```diff
-         nameKey: "tierCollider",
-         reactorTier: 4,
-         cost: [{
-           item: "Plutonium Pellet",
-           amount: 2
-         }, {
-           item: "Battery Cell",
-           amount: 4
-         }, {
-           item: "Star Alloy",
-           amount: 16
-         }, {
-           item: "Glow Dust",
-           amount: 16
-         }, {
-           item: "Comet Core",
- ... (9 more removed lines; see GitHub link above)
+         name: "chunkData",
+         type: {
+           type: "array",
+           items: {
+             type: "record",
+             fields: [...tW, {
+               name: "rle",
+               type: "bytes"
+             }]
+           }
+         }
+       }],
+       xW = EW().Type.forSchema({
+         type: "record",
+         fields: ZW
+       }),
+ ... (68 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L537-L571` → after: `L215-L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L215-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/270.js#L215-L252) · [Before (L537-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/270.js#L537-L571)

```diff
-         islandRadius: 78,
-         machineAllowance: 616,
-         beltAllowance: 2640,
-         newDeposits: [{
-           block: "Uranium Deposit",
-           offset: [53, 0, -53]
-         }],
-         unlocks: ["Collider", "Laser", "Focus Lens", "Wireless Terminal", "Comet Beacon"],
-         reward: null
-       }, {
-         nameKey: "tierNovaCore",
-         reactorTier: 5,
-         cost: [{
-           item: "Nova Matter",
-           amount: 8
-         }, {
- ... (19 more removed lines; see GitHub link above)
+         MW = new Map,
+         KW = [],
+         YW = [];
+       for (const [NW, PW] of wW.entries()) {
+         const WW = tW.get(`${PW.x},${PW.y},${PW.z}`),
+           OW = [PW.x * kW, PW.y * kW, PW.z * kW],
+           mW = (iW, mW, EW) => iW < 0 || mW < 0 || EW < 0 || iW >= kW || mW >= kW || EW >= kW ? UW(OW[0] + iW, OW[1] + mW, OW[2] + EW) : WW[ZW(iW, mW, EW)],
+           EW = `${PW.x},${PW.z}`;
+         let LW = MW.get(EW);
+         void 0 === LW && (LW = {
+           chunkX: PW.x,
+           chunkZ: PW.z,
+           heights: new Int32Array(kW * kW).fill(sW),
+           colours: new Uint8Array(kW * kW * 3)
+         }, MW.set(EW, LW));
+         for (let NW = 0; NW < kW; NW++)
+ ... (22 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L573-L584` → after: `L254-L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L254-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/270.js#L254-L255) · [Before (L573-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/270.js#L573-L584)

```diff
-         islandRadius: 80,
-         machineAllowance: 680,
-         beltAllowance: 2928,
-         newDeposits: [],
-         unlocks: ["Nova Helmet", "Nova Chestplate", "Nova Gauntlets", "Nova Leggings", "Nova Boots", "Nova Blade", "Nova Jet Chestplate", "Nova Multitool", "Nova Coupler", "Pocket Terminal", "Atomic Bomb", "Nova Wrench", "Nova Bomb"],
-         reward: "Deposit Seed (Uranium)"
-       }],
-       QB = 10;
-     let oB = !0;
- 
-     function jB() {
-       return oB
+         columnTops: [...MW.values()]
+       }
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L588-L599` → after: `L259-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L259-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/270.js#L259-L261) · [Before (L588-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/270.js#L588-L599)

```diff
-       oB = BB
-     }
-     const JB = {
-       11: "uraniumLine",
-       12: "centrifuge",
-       13: "reactorOnline",
-       14: "cryoCoolant",
-       15: "moreLasers"
-     };
- 
-     function MB() {
-       return oB ? DB.length : QB
+       if (0 === WW) return !0;
+       const iW = cW.j[WW];
+       return void 0 === iW || iW.dl || iW.transTex || !1 === iW.solid
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L603-L604` → after: `L265-L309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L265-L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/270.js#L265-L309) · [Before (L603-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/270.js#L603-L604)

```diff
-       var OB, GB;
-       return null !== (OB = null === (GB = DB[BB - 1]) || void 0 === GB ? void 0 : GB.reactorTier) && void 0 !== OB ? OB : 0
+       let iW = 1 / 0,
+         OW = -1 / 0,
+         mW = 1 / 0,
+         EW = -1 / 0;
+       for (const {
+           chunkX: AW,
+           chunkZ: bW,
+           heights: jW
+         }
+         of WW) jW.forEach(((WW, NW) => {
+         if (WW === sW) return;
+         const PW = AW * kW + NW % kW,
+           LW = bW * kW + Math.floor(NW / kW);
+         iW = Math.min(iW, PW), OW = Math.max(OW, PW), mW = Math.min(mW, LW), EW = Math.max(EW, LW)
+       }));
+       const NW = OW - iW + 1,
+ ... (29 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L607-L609` → after: `L312-L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L312-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/270.js#L312-L315) · [Before (L607-L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/270.js#L607-L609)

```diff
-     function zB(BB, OB) {
-       let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : PB(BB) > 0;
-       return GB && !oB ? "hidden" : BB <= OB ? "open" : GB ? OB < 5 ? "hidden" : OB < QB ? "teaser" : "locked" : "locked"
+     function yW() {
+       return new Promise((WW => {
+         setTimeout(WW, 0)
+       }))
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L611-L613` → after: `L317-L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L317-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/270.js#L317-L323) · [Before (L611-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/270.js#L611-L613)

```diff
- 
-     function lB(BB, OB) {
-       let GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+   },
+   40748: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => EW
+     });
+     var mW = OW(40751);
+     async function EW() {
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L615-L623` → after: `L325-L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L325-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/270.js#L325-L327) · [Before (L615-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/270.js#L615-L623)

```diff
-         kind: YB,
-         n: DB
-       } = ZB(BB);
-       return {
-         key: OB[YB],
-         params: {
-           [YB]: GB ? String(DB) : DB
-         }
-       }
+         averageColors: WW
+       } = await OW.e(234).then((() => OW(35332)));
+       return new mW.d(WW)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L626-L716` → after: `L337-L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L337-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/270.js#L337-L338) · [Before (L626-L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/270.js#L626-L716)

```diff
-       tier: "coreTierName",
-       stage: "coreStageName",
-       atomic: "coreAtomicName"
-     };
- 
-     function qB(BB, OB) {
-       return PB(BB) > 0 && OB < QB
-     }
- 
-     function ZB(BB) {
-       const OB = PB(BB);
-       if (OB > 0) return {
-         kind: "atomic",
-         n: OB,
-         short: `A${OB}`
-       };
- ... (75 more removed lines; see GitHub link above)
+         Water: [63, 118, 228],
+         Lava: [232, 110, 30]
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L718-L734` → after: `L340-L344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L340-L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/270.js#L340-L344) · [Before (L718-L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/270.js#L718-L734)

```diff
-       wB = "baf2farmvoid",
-       EB = "Caged ",
-       cB = " Spawner Block";
- 
-     function hB(BB) {
-       return `lifeform:${(0,iB.ef)(BB)}`
-     }
- 
-     function aB(BB) {
-       if (!BB) return null;
-       if (BB.startsWith(EB)) {
-         const OB = BB.slice(6);
-         return rB.includes(OB) ? OB : null
-       }
-       if (BB.endsWith(cB)) {
-         const OB = BB.slice(0, -14);
- ... (1 more removed lines; see GitHub link above)
+       NW = [150, 150, 150],
+       PW = -2147483648;
+     class LW {
+       constructor(WW) {
+         this.averages = WW, this.byId = new Map
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L736-L800` → after: `L346-L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L346-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/270.js#L346-L359) · [Before (L736-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/270.js#L736-L800)

```diff
-       return null
-     }
- 
-     function eB(BB) {
-       return !0 === BB.mobFarm
-     }
- 
-     function TB(BB, OB) {
-       return XB[gB[OB]] * BB.opMs / 1e3
-     }
-     const bB = new Map;
-     const CB = "baf2islands",
-       HB = "baf2islandnew";
- 
-     function vB(BB) {
-       const OB = DB.findIndex((OB => OB.unlocks.includes(BB)));
- ... (49 more removed lines; see GitHub link above)
+       get(WW) {
+         var iW, OW, PW, LW, cW;
+         const wW = this.byId.get(WW);
+         if (void 0 !== wW) return wW;
+         const tW = null !== (iW = null === (OW = mW.j[WW]) || void 0 === OW ? void 0 : OW.name) && void 0 !== iW ? iW : "",
+           ZW = tW.split("|")[0],
+           xW = null !== (PW = this.averages[tW]) && void 0 !== PW ? PW : this.averages[ZW],
+           lW = null !== (LW = null !== (cW = null === xW || void 0 === xW ? void 0 : xW[0]) && void 0 !== cW ? cW : EW[ZW]) && void 0 !== LW ? LW : 0 === (null === xW || void 0 === xW ? void 0 : xW.length) ? null : NW;
+         return this.byId.set(WW, lW), lW
+       }
+       getDrawnIds() {
+         const WW = new Uint8Array(65536);
+         for (let iW = 1; iW < 65536; iW++) void 0 !== mW.j[iW] && null !== this.get(iW) && (WW[iW] = 1);
+         return WW
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L802-L881` → after: `L361-L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L361-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/270.js#L361-L367) · [Before (L802-L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/270.js#L802-L881)

```diff
-     }
- 
-     function jO(BB, OB) {
-       const GB = "number" === typeof BB ? BB : "one" === BB ? 1 : "stack" === BB ? 99 : OB;
-       return Math.min(OB, GB)
-     }
- 
-     function yO(BB, OB) {
-       const GB = BB => "number" === typeof BB ? BB : "one" === BB ? 1 : 99;
-       return "fill" === BB || "fill" === OB ? "fill" : GB(BB) + GB(OB)
-     }
- 
-     function JO(BB, OB) {
-       const GB = oO(BB),
-         YB = oO(OB),
-         DB = GB && YB ? function(BB, OB) {
- ... (64 more removed lines; see GitHub link above)
+       drawPixel(WW, iW, OW, mW, EW, NW) {
+         const LW = function(WW, iW, OW) {
+             const mW = WW - iW + (WW - OW);
+             return Math.max(.65, Math.min(1.2, .97 + .055 * mW))
+           }(mW, EW === PW ? mW : EW, NW === PW ? mW : NW),
+           cW = this.get(OW);
+         WW[iW] = cW[0] * LW, WW[iW + 1] = cW[1] * LW, WW[iW + 2] = cW[2] * LW, WW[iW + 3] = 255
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/271.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/271.js` (93 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136)

#### 1. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L2)

```diff
- export const ids = [271];
+ export const ids = [271, 272];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L4)

```diff
-   44737: (BB, OB, GB) => {
+   41765: (WW, iW, OW) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L6` → after: `L6-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L6-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L6-L100) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L6)

```diff
-       d: () => QB
+       c: () => tW,
+       e: () => xW
+     });
+     var mW = OW(41516),
+       EW = OW(41519),
+       NW = OW(38241),
+       PW = OW(38372),
+       LW = OW(41773),
+       cW = OW(41732),
+       wW = OW(38299);
+     let tW = (() => {
+         var WW;
+         let iW, OW, cW = LW.b,
+           wW = [],
+           tW = [],
+           ZW = [],
+ ... (79 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L8-L9` → after: `L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L102) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L8-L9)

```diff
-     var YB = GB(41112),
-       DB = GB(44746);
+     var mW = OW(38939);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L11-L13` → after: `L104-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L104-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L104-L107) · [Before (L11-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L11-L13)

```diff
-       constructor(BB, OB) {
-         let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
-         this.maxDepth = GB, this.hDB = [], this._maxBlockCapacity = OB || 64, this._selectionContent = new YB.b(1024), this._creationFunc = BB
+       static GetPlanes(WW) {
+         const iW = [];
+         for (let OW = 0; OW < 6; OW++) iW.push(new mW.c(0, 0, 0, 0));
+         return EW.GetPlanesToRef(WW, iW), iW
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L15-L16` → after: `L109-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L109-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L109-L111) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L15-L16)

```diff
-       update(BB, OB, GB) {
-         DB.b._CreateBlocks(BB, OB, GB, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
+       static GetNearPlaneToRef(WW, iW) {
+         const OW = WW.m;
+         iW.normal.x = OW[3] + OW[2], iW.normal.y = OW[7] + OW[6], iW.normal.z = OW[11] + OW[10], iW.d = OW[15] + OW[14], iW.normalize()
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L18-L21` → after: `L113-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L113-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L113-L115) · [Before (L18-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L18-L21)

```diff
-       UDB(BB) {
-         for (let OB = 0; OB < this.blocks.length; OB++) {
-           this.blocks[OB].addEntry(BB)
-         }
+       static GetFarPlaneToRef(WW, iW) {
+         const OW = WW.m;
+         iW.normal.x = OW[3] - OW[2], iW.normal.y = OW[7] - OW[6], iW.normal.z = OW[11] - OW[10], iW.d = OW[15] - OW[14], iW.normalize()
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L23-L26` → after: `L117-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L117-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L117-L119) · [Before (L23-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L23-L26)

```diff
-       sF(BB) {
-         for (let OB = 0; OB < this.blocks.length; OB++) {
-           this.blocks[OB].removeEntry(BB)
-         }
+       static GetLeftPlaneToRef(WW, iW) {
+         const OW = WW.m;
+         iW.normal.x = OW[3] + OW[0], iW.normal.y = OW[7] + OW[4], iW.normal.z = OW[11] + OW[8], iW.d = OW[15] + OW[12], iW.normalize()
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L28-L33` → after: `L121-L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L121-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L121-L123) · [Before (L28-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L28-L33)

```diff
-       select(BB, OB) {
-         this._selectionContent.reset();
-         for (let GB = 0; GB < this.blocks.length; GB++) {
-           this.blocks[GB].select(BB, this._selectionContent, OB)
-         }
-         return OB ? this._selectionContent.concat(this.hDB) : this._selectionContent.concatWithNoDuplicate(this.hDB), this._selectionContent
+       static GetRightPlaneToRef(WW, iW) {
+         const OW = WW.m;
+         iW.normal.x = OW[3] - OW[0], iW.normal.y = OW[7] - OW[4], iW.normal.z = OW[11] - OW[8], iW.d = OW[15] - OW[12], iW.normalize()
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L35-L40` → after: `L125-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L125-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L125-L127) · [Before (L35-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L35-L40)

```diff
-       intersects(BB, OB, GB) {
-         this._selectionContent.reset();
-         for (let YB = 0; YB < this.blocks.length; YB++) {
-           this.blocks[YB].intersects(BB, OB, this._selectionContent, GB)
-         }
-         return GB ? this._selectionContent.concat(this.hDB) : this._selectionContent.concatWithNoDuplicate(this.hDB), this._selectionContent
+       static GetTopPlaneToRef(WW, iW) {
+         const OW = WW.m;
+         iW.normal.x = OW[3] - OW[1], iW.normal.y = OW[7] - OW[5], iW.normal.z = OW[11] - OW[9], iW.d = OW[15] - OW[13], iW.normalize()
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L42-L47` → after: `L129-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L129-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L129-L139) · [Before (L42-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L42-L47)

```diff
-       intersectsRay(BB) {
-         this._selectionContent.reset();
-         for (let OB = 0; OB < this.blocks.length; OB++) {
-           this.blocks[OB].intersectsRay(BB, this._selectionContent)
-         }
-         return this._selectionContent.concatWithNoDuplicate(this.hDB), this._selectionContent
+       static GetBottomPlaneToRef(WW, iW) {
+         const OW = WW.m;
+         iW.normal.x = OW[3] + OW[1], iW.normal.y = OW[7] + OW[5], iW.normal.z = OW[11] + OW[9], iW.d = OW[15] + OW[13], iW.normalize()
+       }
+       static GetPlanesToRef(WW, iW) {
+         EW.GetNearPlaneToRef(WW, iW[0]), EW.GetFarPlaneToRef(WW, iW[1]), EW.GetLeftPlaneToRef(WW, iW[2]), EW.GetRightPlaneToRef(WW, iW[3]), EW.GetTopPlaneToRef(WW, iW[4]), EW.GetBottomPlaneToRef(WW, iW[5])
+       }
+       static IsPointInFrustum(WW, iW) {
+         for (let OW = 0; OW < 6; OW++)
+           if (iW[OW].dotCoordinate(WW) < 0) return !1;
+         return !0
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L57` → after: `L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L143) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L57)

```diff
-   44746: (BB, OB, GB) => {
+   38939: (WW, iW, OW) => {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L59` → after: `L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L145) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L59)

```diff
-       b: () => QB
+       c: () => EW
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L61-L62` → after: `L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L147) · [Before (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L61-L62)

```diff
-     var YB = GB(37778),
-       DB = GB(41307);
+     var mW = OW(38241);
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L64-L65` → after: `L149-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L149-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L149-L150) · [Before (L64-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L64-L65)

```diff
-       constructor(BB, OB, GB, YB, DB, QB) {
-         this.entries = [], this.aDB = new Array, this._capacity = GB, this._depth = YB, this._maxDepth = DB, this._creationFunc = QB, this._minPoint = BB, this._maxPoint = OB, this.aDB.push(BB.clone()), this.aDB.push(OB.clone()), this.aDB.push(BB.clone()), this.aDB[2].x = OB.x, t … [truncated]
+       constructor(WW, iW, OW, EW) {
+         this.normal = new mW.q(WW, iW, OW), this.d = EW
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L67-L68` → after: `L152-L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L152-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L152-L153) · [Before (L67-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L67-L68)

```diff
-       get CP() {
-         return this._capacity
+       wEW() {
+         return [this.normal.x, this.normal.y, this.normal.z, this.d]
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L70-L71` → after: `L155-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L155-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L155-L156) · [Before (L70-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L70-L71)

```diff
-       get LDB() {
-         return this._minPoint
+       clone() {
+         return new EW(this.normal.x, this.normal.y, this.normal.z, this.d)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L73-L74` → after: `L158-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L158-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L158-L159) · [Before (L73-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L73-L74)

```diff
-       get iDB() {
-         return this._maxPoint
+       getClassName() {
+         return "Plane"
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L76-L80` → after: `L161-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L161-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L161-L163) · [Before (L76-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L76-L80)

```diff
-       addEntry(BB) {
-         if (this.blocks)
-           for (let OB = 0; OB < this.blocks.length; OB++) {
-             this.blocks[OB].addEntry(BB)
-           } else this._creationFunc(BB, this), this.entries.length > this.CP && this._depth < this._maxDepth && this.createInnerBlocks()
+       getHashCode() {
+         let WW = this.normal.getHashCode();
+         return WW = 397 * WW ^ this.d, WW
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L82-L90` → after: `L165-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L165-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L165-L199) · [Before (L82-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L82-L90)

```diff
-       removeEntry(BB) {
-         if (this.blocks) {
-           for (let OB = 0; OB < this.blocks.length; OB++) {
-             this.blocks[OB].removeEntry(BB)
-           }
-           return
-         }
-         const OB = this.entries.indexOf(BB);
-         OB > -1 && this.entries.splice(OB, 1)
+       normalize() {
+         const WW = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
+         let iW = 0;
+         return 0 !== WW && (iW = 1 / WW), this.normal.x *= iW, this.normal.y *= iW, this.normal.z *= iW, this.d *= iW, this
+       }
+       transform(WW) {
+         const iW = EW._TmpMatrix;
+         WW.invertToRef(iW);
+         const OW = iW.m,
+           mW = this.normal.x,
+           NW = this.normal.y,
+           PW = this.normal.z,
+           LW = this.d,
+           cW = mW * OW[0] + NW * OW[1] + PW * OW[2] + LW * OW[3],
+           wW = mW * OW[4] + NW * OW[5] + PW * OW[6] + LW * OW[7],
+           tW = mW * OW[8] + NW * OW[9] + PW * OW[10] + LW * OW[11],
+ ... (19 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L92-L96` → after: `L201-L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L201-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L201-L202) · [Before (L92-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L92-L96)

```diff
-       addEntries(BB) {
-         for (let OB = 0; OB < BB.length; OB++) {
-           const GB = BB[OB];
-           this.addEntry(GB)
-         }
+       isFrontFacingTo(WW, iW) {
+         return mW.q.Dot(this.normal, WW) <= iW
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L98-L107` → after: `L204-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L204-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L204-L205) · [Before (L98-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L98-L107)

```diff
-       select(BB, OB, GB) {
-         if (DB.c.IsInFrustum(this.aDB, BB)) {
-           if (this.blocks) {
-             for (let YB = 0; YB < this.blocks.length; YB++) {
-               this.blocks[YB].select(BB, OB, GB)
-             }
-             return
-           }
-           GB ? OB.concat(this.entries) : OB.concatWithNoDuplicate(this.entries)
-         }
+       signedDistanceTo(WW) {
+         return mW.q.Dot(WW, this.normal) + this.d
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L109-L118` → after: `L207-L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L207-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L207-L208) · [Before (L109-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L109-L118)

```diff
-       intersects(BB, OB, GB, YB) {
-         if (DB.c.IntersectsSphere(this._minPoint, this._maxPoint, BB, OB)) {
-           if (this.blocks) {
-             for (let DB = 0; DB < this.blocks.length; DB++) {
-               this.blocks[DB].intersects(BB, OB, GB, YB)
-             }
-             return
-           }
-           YB ? GB.concat(this.entries) : GB.concatWithNoDuplicate(this.entries)
-         }
+       static FromArray(WW) {
+         return new EW(WW[0], WW[1], WW[2], WW[3])
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L120-L129` → after: `L210-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L210-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L210-L212) · [Before (L120-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L120-L129)

```diff
-       intersectsRay(BB, OB) {
-         if (BB.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
-           if (this.blocks) {
-             for (let GB = 0; GB < this.blocks.length; GB++) {
-               this.blocks[GB].intersectsRay(BB, OB)
-             }
-             return
-           }
-           OB.concatWithNoDuplicate(this.entries)
-         }
+       static FromPoints(WW, iW, OW) {
+         const mW = new EW(0, 0, 0, 0);
+         return mW.copyFromPoints(WW, iW, OW), mW
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L131-L132` → after: `L214-L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L214-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L214-L216) · [Before (L131-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L131-L132)

```diff
-       createInnerBlocks() {
-         QB._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc), this.entries.splice(0)
+       static FromPositionAndNormal(WW, iW) {
+         const OW = new EW(0, 0, 0, 0);
+         return this.FromPositionAndNormalToRef(WW, iW, OW)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L134-L144` → after: `L218-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L218-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L218-L223) · [Before (L134-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L134-L144)

```diff
-       static _CreateBlocks(BB, OB, GB, DB, oB, jB, yB, JB) {
-         yB.blocks = new Array;
-         const MB = new YB.r((OB.x - BB.x) / 2, (OB.y - BB.y) / 2, (OB.z - BB.z) / 2);
-         for (let YB = 0; YB < 2; YB++)
-           for (let OB = 0; OB < 2; OB++)
-             for (let PB = 0; PB < 2; PB++) {
-               const zB = BB.add(MB.multiplyByFloats(YB, OB, PB)),
-                 lB = BB.add(MB.multiplyByFloats(YB + 1, OB + 1, PB + 1)),
-                 pB = new QB(zB, lB, DB, oB + 1, jB, JB);
-               pB.addEntries(GB), yB.blocks.push(pB)
-             }
+       static FromPositionAndNormalToRef(WW, iW, OW) {
+         return OW.normal.HJ(iW), OW.normal.normalize(), OW.d = -WW.dot(OW.normal), OW
+       }
+       static SignedDistanceToPlaneFromPositionAndNormal(WW, iW, OW) {
+         const EW = -(iW.x * WW.x + iW.y * WW.y + iW.z * WW.z);
+         return mW.q.Dot(OW, iW) + EW
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L148` → after: `L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L228) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L148)

```diff
-   44748: (BB, OB, GB) => {
+   39271: (WW, iW, OW) => {
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L150` → after: `L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L230) · [Before (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L150)

```diff
-       b: () => MB
+       e: () => mW
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L160-L172` → after: `L233-L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L233-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L233-L234) · [Before (L160-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L160-L172)

```diff
-       constructor(BB) {
-         this.name = jB.b.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new oB.B(DB.r.Zero(), new DB.r(1, 1, 1)), (BB = BB || yB.b.LastCreatedScene) && (this.eq = BB, this.eq.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.eq.getActiveSubMeshCandidat … [truncated]
-       }
-       register() {
-         this.eq.onMeshRemovedObservable.add((BB => {
-           const OB = this.eq.selectionOctree;
-           if (void 0 !== OB && null !== OB) {
-             const GB = OB.hDB.indexOf(BB); - 1 !== GB && OB.hDB.splice(GB, 1)
-           }
-         })), this.eq.onMeshImportedObservable.add((BB => {
-           const OB = this.eq.selectionOctree;
-           void 0 !== OB && null !== OB && OB.UDB(BB)
-         }))
+       constructor(WW, iW, OW, mW) {
+         this.x = WW, this.y = iW, this.width = OW, this.height = mW
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L174-L175` → after: `L236-L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L236-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L236-L237) · [Before (L174-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L174-L175)

```diff
-       getActiveMeshCandidates() {
-         return this.eq.vDB?.select(this.eq.frustumPlanes) || this.eq._getDefaultMeshCandidates()
+       toGlobal(WW, iW) {
+         return new mW(this.x * WW, this.y * iW, this.width * WW, this.height * iW)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L177-L181` → after: `L239-L240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L239-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L239-L240) · [Before (L177-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L177-L181)

```diff
-       getActiveSubMeshCandidates(BB) {
-         if (BB._submeshesOctree && BB.useOctreeForRenderingSelection) {
-           return BB._submeshesOctree.select(this.eq.frustumPlanes)
-         }
-         return this.eq._getDefaultSubMeshCandidates(BB)
+       toGlobalToRef(WW, iW, OW) {
+         return OW.x = this.x * WW, OW.y = this.y * iW, OW.width = this.width * WW, OW.height = this.height * iW, this
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L183-L188` → after: `L242-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L242-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L242-L243) · [Before (L183-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L183-L188)

```diff
-       getIntersectingSubMeshCandidates(BB, OB) {
-         if (BB._submeshesOctree && BB.useOctreeForPicking) {
-           oB.B.TransformToRef(OB, BB.getWorldMatrix(), this._tempRay);
-           return BB._submeshesOctree.intersectsRay(this._tempRay)
-         }
-         return this.eq._getDefaultSubMeshCandidates(BB)
+       clone() {
+         return new mW(this.x, this.y, this.width, this.height)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L190-L193` → after: `L245-L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L245-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L245-L285) · [Before (L190-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L190-L193)

```diff
-       getCollidingSubMeshCandidates(BB, OB) {
-         if (BB._submeshesOctree && BB.useOctreeForCollisions) {
-           const GB = OB._velocityWorldLength + Math.max(OB._radius.x, OB._radius.y, OB._radius.z);
-           return BB._submeshesOctree.intersects(OB._basePointWorld, GB)
+     }
+   },
+   39908: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => NW
+     });
+     var mW = OW(39911);
+     const EW = (WW, iW, OW) => WW ? WW.getClassName && "Mesh" === WW.getClassName() ? null : !WW.getClassName || "SubMesh" !== WW.getClassName() && "PhysicsBody" !== WW.getClassName() ? WW.clone ? WW.clone() : Array.isArray(WW) ? WW.slice() : OW && "object" === typeof WW ? {
+       ...WW
+     } : null : WW.clone(iW) : null;
+     class NW {
+       static DeepCopy(WW, iW, OW, NW) {
+         let PW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         const LW = function(WW) {
+           const iW = [];
+           do {
+ ... (25 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L200-L221` → after: `L289-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L289-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L289-L298) · [Before (L200-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L200-L221)

```diff
-     let PB = !1;
-     PB || (PB = !0, YB.e.prototype.createOrUpdateSelectionOctree = function() {
-       let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
-         OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
-         GB = this._getComponent(jB.b.NAME_OCTREE);
-       GB || (GB = new MB(this), this.pDB(GB)), this.vDB || (this.vDB = new JB.d(JB.d.CreationFuncForMeshes, BB, OB));
-       const YB = this.getWorldExtends();
-       return this.vDB.update(YB.min, YB.max, this.meshes), this.vDB
-     }, Object.defineProperty(YB.e.prototype, "selectionOctree", {
-       get: function() {
-         return this.vDB
-       },
-       enumerable: !0,
-       configurable: !0
-     }), QB.c.prototype.createOrUpdateSubmeshesOctree = function() {
-       let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
- ... (6 more removed lines; see GitHub link above)
+   },
+   39088: (WW, iW, OW) => {
+     function mW() {
+       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (WW => {
+         const iW = 16 * Math.random() | 0;
+         return ("x" === WW ? iW : 3 & iW | 8).toString(16)
+       }))
+     }
+     OW.d(iW, {
+       b: () => mW
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L224` → after: `L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L301) · [Before (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L224)

```diff
-   44695: (BB, OB, GB) => {
+   39911: (WW, iW, OW) => {
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L226-L235` → after: `L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L303) · [Before (L226-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L226-L235)

```diff
-       B: () => PB,
-       d: () => uB,
-       g: () => qB,
-       j: () => pB,
-       m: () => lB,
-       q: () => dB,
-       u: () => kB,
-       x: () => nB,
-       y: () => fB,
-       z: () => UB
+       b: () => mW
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L249-L251` → after: `L425-L445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L425-L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L425-L445) · [Before (L249-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L249-L251)

```diff
-         let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
-           DB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : YB.b;
-         this.origin = BB, this.direction = OB, this.length = GB, this.epsilon = DB
+         let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
+           EW = arguments.length > 3 ? arguments[3] : void 0,
+           NW = arguments.length > 4 ? arguments[4] : void 0,
+           PW = arguments.length > 5 ? arguments[5] : void 0,
+           LW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
+         const cW = {
+           uniforms: tW.Uniforms,
+           size: "number" === typeof iW ? iW : void 0,
+           camera: OW,
+           samplingMode: EW || mW.h.BILINEAR_SAMPLINGMODE,
+           engine: NW,
+           reusable: PW,
+           textureType: LW,
+           ...iW
+         };
+         super(WW, tW.FragmentUrl, {
+ ... (5 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L253-L254` → after: `L447-L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L447-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L447-L448) · [Before (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L253-L254)

```diff
-       clone() {
-         return new PB(this.origin.clone(), this.direction.clone(), this.length)
+       static _Parse(WW, iW, OW, mW) {
+         return PW.d.Parse((() => new ZW(WW.name, WW.options, iW, WW.renderTargetSamplingMode, OW.VA(), WW.reusable)), WW, OW, mW)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L256-L271` → after: `L450-L459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L450-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L450-L459) · [Before (L256-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L256-L271)

```diff
-       intersectsBoxMinMax(BB, OB) {
-         let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-         const YB = PB._TmpVector3[0].zOB(BB.x - GB, BB.y - GB, BB.z - GB),
-           DB = PB._TmpVector3[1].zOB(OB.x + GB, OB.y + GB, OB.z + GB);
-         let QB, oB, jB, yB, JB = 0,
-           MB = Number.MAX_VALUE;
-         if (Math.abs(this.direction.x) < 1e-7) {
-           if (this.origin.x < YB.x || this.origin.x > DB.x) return !1
-         } else if (QB = 1 / this.direction.x, oB = (YB.x - this.origin.x) * QB, jB = (DB.x - this.origin.x) * QB, jB === -1 / 0 && (jB = 1 / 0), oB > jB && (yB = oB, oB = jB, jB = yB), JB = Math.max(oB, JB), MB = Math.min(jB, MB), JB > MB) return !1;
-         if (Math.abs(this.direction.y) < 1e-7) {
-           if (this.origin.y < YB.y || this.origin.y > DB.y) return !1
-         } else if (QB = 1 / this.direction.y, oB = (YB.y - this.origin.y) * QB, jB = (DB.y - this.origin.y) * QB, jB === -1 / 0 && (jB = 1 / 0), oB > jB && (yB = oB, oB = jB, jB = yB), JB = Math.max(oB, JB), MB = Math.min(jB, MB), JB > MB) return !1;
-         if (Math.abs(this.direction.z) < 1e-7) {
-           if (this.origin.z < YB.z || this.origin.z > DB.z) return !1
-         } else if (QB = 1 / this.direction.z, oB = (YB.z - this.origin.z) * QB, jB = (DB.z - this.origin.z) * QB, jB === -1 / 0 && (jB = 1 / 0), oB > jB && (yB = oB, oB = jB, jB = yB), JB = Math.max(oB, JB), MB = Math.min(jB, MB), JB > MB) return !1;
-         return !0
+     }
+     var xW = OW(39911),
+       lW = OW(41620),
+       AW = OW(54011),
+       bW = OW(53995),
+       jW = OW(41420);
+     const UW = 0;
+     class kW {
+       constructor(WW, iW, OW) {
+         this.name = WW, this._parentTask = iW, this._context = OW, this.disabled = !1
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L273-L275` → after: `L461-L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L461-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L461-L462) · [Before (L273-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L273-L275)

```diff
-       intersectsBox(BB) {
-         let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         return this.intersectsBoxMinMax(BB.minimum, BB.maximum, OB)
+       setInitializeFunc(WW) {
+         this._initFunc = WW
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L277-L288` → after: `L464-L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L464-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L464-L465) · [Before (L277-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L277-L288)

```diff
-       intersectsSphere(BB) {
-         let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         const GB = BB.center.x - this.origin.x,
-           YB = BB.center.y - this.origin.y,
-           DB = BB.center.z - this.origin.z,
-           QB = GB * GB + YB * YB + DB * DB,
-           oB = BB.radius + OB,
-           jB = oB * oB;
-         if (QB <= jB) return !0;
-         const yB = GB * this.direction.x + YB * this.direction.y + DB * this.direction.z;
-         if (yB < 0) return !1;
-         return QB - yB * yB <= jB
+       setExecuteFunc(WW) {
+         this._executeFunc = WW
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L290-L307` → after: `L467-L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L467-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L467-L468) · [Before (L290-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L290-L307)

```diff
-       intersectsTriangle(BB, OB, GB) {
-         const YB = PB._TmpVector3[0],
-           QB = PB._TmpVector3[1],
-           jB = PB._TmpVector3[2],
-           yB = PB._TmpVector3[3],
-           JB = PB._TmpVector3[4];
-         OB.subtractToRef(BB, YB), GB.subtractToRef(BB, QB), DB.r.CrossToRef(this.direction, QB, jB);
-         const MB = DB.r.Dot(YB, jB);
-         if (0 === MB) return null;
-         const zB = 1 / MB;
-         this.origin.subtractToRef(BB, yB);
-         const lB = DB.r.Dot(yB, jB) * zB;
-         if (lB < -this.epsilon || lB > 1 + this.epsilon) return null;
-         DB.r.CrossToRef(yB, YB, JB);
-         const pB = DB.r.Dot(this.direction, JB) * zB;
-         if (pB < -this.epsilon || lB + pB > 1 + this.epsilon) return null;
- ... (2 more removed lines; see GitHub link above)
+       _execute() {
+         this.disabled || this._executeFunc(this._context)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L309-L316` → after: `L470-L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L470-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L470-L471) · [Before (L309-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L309-L316)

```diff
-       intersectsPlane(BB) {
-         let OB;
-         const GB = DB.r.Dot(BB.normal, this.direction);
-         if (Math.abs(GB) < 9.99999997475243e-7) return null;
-         {
-           const YB = DB.r.Dot(BB.normal, this.origin);
-           return OB = (-BB.d - YB) / GB, OB < 0 ? OB < -9.99999997475243e-7 ? null : 0 : OB
-         }
+       _initialize() {
+         this._initFunc?.(this._context)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L318-L335` → after: `L473-L474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L473-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L473-L474) · [Before (L318-L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L318-L335)

```diff
-       intersectsAxis(BB) {
-         let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         switch (BB) {
-           case "y": {
-             const BB = (this.origin.y - OB) / this.direction.y;
-             return BB > 0 ? null : new DB.r(this.origin.x + this.direction.x * -BB, OB, this.origin.z + this.direction.z * -BB)
-           }
-           case "x": {
-             const BB = (this.origin.x - OB) / this.direction.x;
-             return BB > 0 ? null : new DB.r(OB, this.origin.y + this.direction.y * -BB, this.origin.z + this.direction.z * -BB)
-           }
-           case "z": {
-             const BB = (this.origin.z - OB) / this.direction.z;
-             return BB > 0 ? null : new DB.r(this.origin.x + this.direction.x * -BB, this.origin.y + this.direction.y * -BB, OB)
-           }
-           default:
- ... (2 more removed lines; see GitHub link above)
+       _isValid() {
+         return void 0 !== this._executeFunc ? null : "Execute function is not set (call setExecuteFunc to set it)"
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L337-L342` → after: `L476-L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L476-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L476-L480) · [Before (L337-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L337-L342)

```diff
-       lQB(BB, OB, GB) {
-         let YB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-           QB = arguments.length > 4 ? arguments[4] : void 0,
-           oB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
-         const jB = DB.k.Matrix[0];
-         return BB.getWorldMatrix().invertToRef(jB), this._tmpRay ? PB.TransformToRef(this, jB, this._tmpRay) : this._tmpRay = PB.Transform(this, jB), BB.intersects(this._tmpRay, OB, GB, YB, QB, oB)
+       _dispose() {}
+     }
+     class sW extends kW {
+       static IsObjectListPass(WW) {
+         return void 0 !== WW.setObjectList
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L344-L350` → after: `L482-L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L482-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L482-L483) · [Before (L344-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L344-L350)

```diff
-       intersectsMeshes(BB, OB, GB) {
-         GB ? GB.length = 0 : GB = [];
-         for (let YB = 0; YB < BB.length; YB++) {
-           const DB = this.lQB(BB[YB], OB);
-           DB.hit && GB.push(DB)
-         }
-         return GB.sort(this._comparePickingInfo), GB
+       get objectList() {
+         return this._objectList
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L352-L353` → after: `L485-L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L485-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L485-L486) · [Before (L352-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L352-L353)

```diff
-       _comparePickingInfo(BB, OB) {
-         return BB.distance < OB.distance ? -1 : BB.distance > OB.distance ? 1 : 0
+       setObjectList(WW) {
+         this._objectList = WW
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L355-L379` → after: `L488-L489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L488-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L488-L489) · [Before (L355-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L355-L379)

```diff
-       intersectionSegment(BB, OB, GB) {
-         const YB = this.origin,
-           QB = DB.k.Xp[0],
-           oB = DB.k.Xp[1],
-           jB = DB.k.Xp[2],
-           yB = DB.k.Xp[3];
-         OB.subtractToRef(BB, QB), this.direction.scaleToRef(PB._Rayl, jB), YB.addToRef(jB, oB), BB.subtractToRef(YB, yB);
-         const JB = DB.r.Dot(QB, QB),
-           MB = DB.r.Dot(QB, jB),
-           zB = DB.r.Dot(jB, jB),
-           lB = DB.r.Dot(QB, yB),
-           pB = DB.r.Dot(jB, yB),
-           qB = JB * zB - MB * MB;
-         let ZB, NB, RB = qB,
-           WB = qB;
-         qB < PB._Smallnum ? (ZB = 0, RB = 1, NB = pB, WB = zB) : (ZB = MB * pB - zB * lB, NB = JB * pB - MB * lB, ZB < 0 ? (ZB = 0, NB = pB, WB = zB) : ZB > RB && (ZB = RB, NB = pB + MB, WB = zB)), NB < 0 ? (NB = 0, -lB < 0 ? ZB = 0 : -lB > JB ? ZB = RB : (ZB = -lB, RB = JB)) : N … [truncated]
- ... (9 more removed lines; see GitHub link above)
+       constructor(WW, iW, OW, mW) {
+         super(WW, iW, OW), this._engine = mW
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L381-L387` → after: `L491-L493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L491-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L491-L493) · [Before (L381-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L381-L387)

```diff
-       update(BB, OB, GB, YB, QB, oB, jB) {
-         if (arguments.length > 7 && void 0 !== arguments[7] && arguments[7]) {
-           PB._RayDistant || (PB._RayDistant = PB.Zero()), PB._RayDistant.unprojectRayToRef(BB, OB, GB, YB, DB.d.IdentityReadOnly, oB, jB);
-           const yB = DB.k.Matrix[0];
-           QB.invertToRef(yB), PB.TransformToRef(PB._RayDistant, yB, this)
-         } else this.unprojectRayToRef(BB, OB, GB, YB, QB, oB, jB);
-         return this
+       _isValid() {
+         const WW = super._isValid();
+         return WW || (void 0 !== this._objectList ? null : "Object list is not set (call setObjectList to set it)")
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L389-L390` → after: `L495-L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L495-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L495-L498) · [Before (L389-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L389-L390)

```diff
-       static Zero() {
-         return new PB(DB.r.Zero(), DB.r.Zero())
+     }
+     class MW extends kW {
+       static IsRenderPass(WW) {
+         return void 0 !== WW.setRenderTarget
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L392-L393` → after: `L500-L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L500-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L500-L501) · [Before (L392-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L392-L393)

```diff
-       static CreateNew(BB, OB, GB, YB, DB, QB, oB) {
-         return PB.Zero().update(BB, OB, GB, YB, DB, QB, oB)
+       get renderTarget() {
+         return this._renderTarget
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L395-L398` → after: `L503-L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L503-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L503-L504) · [Before (L395-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L395-L398)

```diff
-       static CreateNewFromTo(BB, OB) {
-         let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : DB.d.IdentityReadOnly;
-         const YB = new PB(new DB.r(0, 0, 0), new DB.r(0, 0, 0));
-         return PB.CreateFromToToRef(BB, OB, YB, GB)
+       get renderTargetDepth() {
+         return this._renderTargetDepth
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L400-L405` → after: `L506-L507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L506-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L506-L507) · [Before (L400-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L400-L405)

```diff
-       static CreateFromToToRef(BB, OB, GB) {
-         let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : DB.d.IdentityReadOnly;
-         GB.origin.IU(BB);
-         const QB = OB.subtractToRef(BB, GB.direction),
-           oB = Math.sqrt(QB.x * QB.x + QB.y * QB.y + QB.z * QB.z);
-         return GB.length = oB, GB.direction.normalize(), PB.TransformToRef(GB, YB, GB)
+       get frameGraphRenderTarget() {
+         return this._frameGraphRenderTarget
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L407-L409` → after: `L509-L510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L509-L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L509-L510) · [Before (L407-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L407-L409)

```diff
-       static Transform(BB, OB) {
-         const GB = new PB(new DB.r(0, 0, 0), new DB.r(0, 0, 0));
-         return PB.TransformToRef(BB, OB, GB), GB
+       constructor(WW, iW, OW, mW) {
+         super(WW, iW, OW), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = mW
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L411-L419` → after: `L512-L513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L512-L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L512-L513) · [Before (L411-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L411-L419)

```diff
-       static TransformToRef(BB, OB, GB) {
-         DB.r.TransformCoordinatesToRef(BB.origin, OB, GB.origin), DB.r.TransformNormalToRef(BB.direction, OB, GB.direction), GB.length = BB.length, GB.epsilon = BB.epsilon;
-         const YB = GB.direction,
-           QB = YB.length();
-         if (0 !== QB && 1 !== QB) {
-           const BB = 1 / QB;
-           YB.x *= BB, YB.y *= BB, YB.z *= BB, GB.length *= QB
-         }
-         return GB
+       setRenderTarget(WW) {
+         this._renderTarget = WW
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L421-L430` → after: `L515-L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L515-L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L515-L516) · [Before (L421-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L421-L430)

```diff
-       unprojectRayToRef(BB, OB, GB, YB, QB, oB, jB) {
-         const JB = DB.k.Matrix[0];
-         QB.multiplyToRef(oB, JB), JB.multiplyToRef(jB, JB), JB.invert();
-         const MB = yB.b.LastCreatedEngine,
-           PB = DB.k.Xp[0];
-         PB.x = BB / GB * 2 - 1, PB.y = -(OB / YB * 2 - 1), PB.z = MB?.fDB ? 1 : MB?.isNDCHalfZRange ? 0 : -1;
-         const zB = DB.k.Xp[1].zOB(PB.x, PB.y, 1 - 1e-8),
-           lB = DB.k.Xp[2],
-           pB = DB.k.Xp[3];
-         DB.r.TransformCoordinatesToRef(PB, JB, lB), DB.r.TransformCoordinatesToRef(zB, JB, pB), this.origin.IU(lB), pB.subtractToRef(lB, this.direction), this.direction.normalize()
+       setRenderTargetDepth(WW) {
+         this._renderTargetDepth = WW
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L432-L501` → after: `L518-L549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L518-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L518-L549) · [Before (L432-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L432-L501)

```diff
-     }
- 
-     function zB(BB, OB, GB, YB, DB) {
-       let QB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
-       const oB = PB.Zero();
-       return lB(BB, OB, GB, YB, oB, DB, QB), oB
-     }
- 
-     function lB(BB, OB, GB, YB, QB, oB) {
-       let jB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-         yB = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
-       const JB = BB.Lp();
-       if (!oB && !(oB = BB.activeCamera) && !(oB = BB.cameraToUseForPointers)) return BB;
-       const MB = oB.viewport,
-         PB = JB.getRenderHeight(),
-         {
- ... (54 more removed lines; see GitHub link above)
+       addDependencies(WW) {
+         if (void 0 !== WW)
+           if (Array.isArray(WW))
+             for (const iW of WW) this._dependencies.add(iW);
+           else this._dependencies.add(WW)
+       }
+       collectDependencies(WW) {
+         const iW = this._dependencies.keys();
+         for (let OW = iW.next(); !0 !== OW.done; OW = iW.next()) WW.add(OW.value);
+         if (void 0 !== this._renderTarget)
+           if (Array.isArray(this._renderTarget))
+             for (const OW of this._renderTarget) void 0 !== OW && WW.add(OW);
+           else WW.add(this._renderTarget);
+         void 0 !== this._renderTargetDepth && WW.add(this._renderTargetDepth)
+       }
+       setOutputLayerAndFaceIndices(WW) {
+ ... (16 more added lines; see GitHub link above)
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L504-L547` → after: `L552-L640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L552-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L552-L640) · [Before (L504-L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L504-L547)

```diff
- 
-     function AB(BB, OB, GB, YB, DB) {
-       const QB = BB(GB, OB.enableDistantPicking);
-       return QB.intersectsSphere(YB.xDB, DB) && QB.intersectsBox(YB.boundingBox, DB) ? QB : null
-     }
- 
-     function VB(BB, OB, GB, YB, QB, oB) {
-       let yB = null;
-       const JB = !!(BB.activeCameras && BB.activeCameras.length > 1 && BB.cameraToUseForPointers !== BB.activeCamera),
-         PB = BB.cameraToUseForPointers || BB.activeCamera,
-         zB = MB.internalPickerForMesh || ZB,
-         lB = zB === ZB;
-       for (let jB = 0; jB < BB.meshes.length; jB++) {
-         const MB = BB.meshes[jB];
-         if (GB) {
-           if (!GB(MB, -1)) continue
- ... (28 more removed lines; see GitHub link above)
+     var KW = OW(38276);
+     class SW {
+       get name() {
+         return this._name
+       }
+       set name(WW) {
+         this._name = WW
+       }
+       get disabled() {
+         return this._disabled
+       }
+       set disabled(WW) {
+         this._disabled = WW
+       }
+       get passes() {
+         return this._passes
+ ... (73 more added lines; see GitHub link above)
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L550-L589` → after: `L644-L650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L644-L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L644-L650) · [Before (L550-L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L550-L589)

```diff
-       return yB || new jB.e
-     }
- 
-     function SB(BB, OB, GB, YB) {
-       if (!jB.e) return null;
-       const QB = [],
-         oB = !!(BB.activeCameras && BB.activeCameras.length > 1 && BB.cameraToUseForPointers !== BB.activeCamera),
-         yB = BB.cameraToUseForPointers || BB.activeCamera,
-         JB = MB.internalPickerForMesh || ZB,
-         PB = JB === ZB;
-       for (let jB = 0; jB < BB.meshes.length; jB++) {
-         const MB = BB.meshes[jB];
-         if (GB) {
-           if (!GB(MB, -1)) continue
-         } else if (!MB.isEnabled() || !MB.isVisible || !MB.bq) continue;
-         const zB = oB && MB.isWorldMatrixCameraDependent(),
- ... (24 more removed lines; see GitHub link above)
+       _initializePasses() {
+         this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
+         try {
+           for (const WW of this._passes) WW._initialize();
+           for (const WW of this._passesDisabled) WW._initialize()
+         } finally {
+           this._frameGraph.engine._debugPopGroup?.()
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L592-L616` → after: `L653-L659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L653-L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L653-L659) · [Before (L592-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L592-L616)

```diff
-       return QB
-     }
- 
-     function nB(BB, OB, GB, YB, QB, oB) {
-       if (!jB.e) return null;
-       const yB = VB(BB, (YB => (BB._tempPickingRay || (BB._tempPickingRay = PB.Zero()), lB(BB, OB, GB, YB, BB._tempPickingRay, oB || null), BB._tempPickingRay)), YB, QB, !0);
-       return yB && (yB.ray = zB(BB, OB, GB, DB.d.Identity(), oB || null)), yB
-     }
- 
-     function UB(BB, OB, GB, YB, QB, oB, jB) {
-       const yB = VB(BB, ((YB, DB) => (BB._tempPickingRay || (BB._tempPickingRay = PB.Zero()), lB(BB, OB, GB, YB, BB._tempPickingRay, oB || null, !1, DB), BB._tempPickingRay)), YB, QB, !1, jB);
-       return yB && (yB.ray = zB(BB, OB, GB, DB.d.Identity(), oB || null)), yB
-     }
- 
-     function fB(BB, OB, GB, YB, QB) {
-       const oB = VB(BB, (GB => (BB._pickWithRayInverseMatrix || (BB._pickWithRayInverseMatrix = DB.d.Identity()), GB.invertToRef(BB._pickWithRayInverseMatrix), BB._cachedRayForTransform || (BB._cachedRayForTransform = PB.Zero()), PB.TransformToRef(OB, BB._pickWithRayInverseMatrix … [truncated]
- ... (9 more removed lines; see GitHub link above)
+       _checkSameRenderTarget(WW, iW) {
+         if (null === WW || null === iW) return WW === iW;
+         if (WW.length !== iW.length) return !1;
+         for (let OW = 0; OW < WW.length; OW++)
+           if (WW[OW] !== iW[OW]) return !1;
+         return !0
+       }
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L618-L3560` → after: `L661-L663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L661-L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L661-L663) · [Before (L618-L3560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L618-L3560)

```diff
- 
-     function KB(BB, OB) {
-       let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
-         YB = arguments.length > 3 ? arguments[3] : void 0,
-         QB = arguments.length > 4 ? arguments[4] : void 0;
-       YB || (YB = BB.getWorldMatrix()), OB.length = GB, QB ? OB.origin.IU(QB) : OB.origin.IU(BB.position);
-       const oB = DB.k.Xp[2];
-       oB.set(0, 0, BB._scene.useRightHandedSystem ? -1 : 1);
-       const jB = DB.k.Xp[3];
-       return DB.r.TransformNormalToRef(oB, YB, jB), DB.r.NormalizeToRef(jB, OB.direction), OB
-     }
- 
-     function uB(BB, OB) {
-       OB && (OB.prototype.getForwardRay = function() {
-         let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
-           OB = arguments.length > 1 ? arguments[1] : void 0,
- ... (2927 more removed lines; see GitHub link above)
+     class YW extends SW {
+       get alphaMode() {
+         return this.postProcess.alphaMode
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L3562-L3598` → after: `L665-L666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L665-L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L665-L666) · [Before (L3562-L3598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L3562-L3598)

```diff
-       _getWrapper(BB) {
-         var OB;
-         const GB = this._getCustomDrawWrapper(BB);
-         if (GB?.effect) return GB;
-         const YB = [];
-         this.fillDefines(YB, BB);
-         const QB = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
-           oB = mO.d._PrepareStringDefines(QB, YB),
-           jB = oB ? mO.d.GetConfiguration(QB) : void 0;
-         let yB = this._drawWrappers[QB];
-         yB || (yB = this._drawWrappers[QB] = [], 0 === QB || this._renderPassObserver || (this._renderPassObserver = ((OB = this._engine)._onReleaseRenderPassObservable ?? (OB._onReleaseRenderPassObservable = new DB.b)).add((BB => {
-           const OB = this._drawWrappers[BB];
-           if (OB) {
-             for (const BB of OB) BB?.dispose();
-             delete this._drawWrappers[BB]
-           }
- ... (21 more removed lines; see GitHub link above)
+       set alphaMode(WW) {
+         this.postProcess.alphaMode = WW
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L3600-L3610` → after: `L668-L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L668-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L668-L669) · [Before (L3600-L3610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L3600-L3610)

```diff
-       _bindGeometryRendering(BB) {
-         const OB = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
-           GB = mO.d.GetConfiguration(OB);
-         if (!GB?._defines) return;
-         BB.setFloat("objectId", 0), BB.setInt("meshBlendTag", 0);
-         const YB = this._scene?.activeCamera;
-         if (BB.setFloat2("cameraInfo", YB?.minZ ?? 0, YB?.maxZ ?? 1), this.isLocal && void 0 !== GB.defines.PREPASS_LOCAL_POSITION_INDEX) {
-           BB.setMatrix("inverseEmitterWM", this._emitterInverseWorldMatrix);
-           const OB = this.worldOffset.subtractToRef(this._scene?.floatingOriginOffset || QB.r.ZeroReadOnly, QB.k.Xp[0]);
-           BB.setVector3("geometryWorldOffset", OB)
-         }
+       get drawWrapper() {
+         return this._postProcessDrawWrapper
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L3612-L3639` → after: `L671-L672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L671-L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L671-L672) · [Before (L3612-L3639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L3612-L3639)

```diff
-       animate() {
-         let BB, OB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         if (this._started && !this.paused) {
-           if (!OB && this._scene) {
-             if (!this.isReady()) return;
-             if (this._currentRenderId === this._scene.getFrameId()) return;
-             this._currentRenderId = this._scene.getFrameId()
-           }
-           if (this._scaledUpdateSpeed = this.updateSpeed * (OB ? this.preWarmStepOffset : this._scene?.getAnimationRatio() || 1), this.manualEmitCount > -1) BB = this.manualEmitCount, this._newPartsExcess = 0, this.manualEmitCount = 0;
-           else {
-             const OB = this._calculateEmitRate();
-             BB = OB * this._scaledUpdateSpeed | 0, this._newPartsExcess += OB * this._scaledUpdateSpeed - BB
-           }
-           if (this._newPartsExcess > 1 && (BB += this._newPartsExcess | 0, this._newPartsExcess -= this._newPartsExcess | 0), this._alive = !1, this._stopped ? BB = 0 : (this._actualFrame += this._scaledUpdateSpeed, this.targetStopDuration && this._actualFrame >= this.targetStopD … [truncated]
-             let BB = 0;
-             for (let OB = 0; OB < this._particles.length; OB++) {
- ... (12 more removed lines; see GitHub link above)
+       constructor(WW, iW, OW) {
+         super(WW, iW), this.sourceSamplingMode = 2, this.depthReadOnly = !1, this.stencilReadOnly = !1, this.disableColorWrite = !1, this.drawBackFace = !1, this.depthTest = !0, this.postProcess = OW, this._postProcessDrawWrapper = this.postProcess.drawWrapper, this.outputTexture … [truncated]
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L3641-L3642` → after: `L674-L675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L674-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L674-L675) · [Before (L3641-L3642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L3641-L3642)

```diff
-       _initFixedCapacitySnapshotData() {
-         return !this._useFixedCapacityForSnapshot && (this._useFixedCapacityForSnapshot = !0, this._vertexData.fill(0), this._fixedCapacityHighWaterMark = 0, this._vertexBuffer?.updateDirectly(this._vertexData, 0, this._capacity), !0)
+       isReady() {
+         return this.postProcess.isReady()
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L3644-L3647` → after: `L677-L678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L677-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L677-L678) · [Before (L3644-L3647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L3644-L3647)

```diff
-       _clearFixedCapacitySnapshotData() {
-         if (!this._useFixedCapacityForSnapshot || !this._vertexBuffer || 0 === this._fixedCapacityHighWaterMark) return;
-         const BB = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
-         this._vertexData.fill(0, 0, this._fixedCapacityHighWaterMark * BB), this._fixedCapacityHighWaterMark = 0, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
+       getClassName() {
+         return "FrameGraphPostProcessTask"
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L3649-L3654` → after: `L680-L700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L680-L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L680-L700) · [Before (L3649-L3654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L3649-L3654)

```diff
-       _calculateEmitRate() {
-         let BB = this.emitRate;
-         if (this._emitRateGradients && this._emitRateGradients.length > 0 && this.targetStopDuration) {
-           const OB = this._actualFrame / this.targetStopDuration;
-           YB.h.GetCurrentGradient(OB, this._emitRateGradients, ((OB, GB, YB) => {
-             OB !== this._currentEmitRateGradient && (this._currentEmitRate1 = this._currentEmitRate2, this._currentEmitRate2 = GB.getFactor(), this._currentEmitRateGradient = OB), BB = (0, lB.Lerp)(this._currentEmitRate1, this._currentEmitRate2, YB)
+       record() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
+           iW = arguments.length > 1 ? arguments[1] : void 0,
+           OW = arguments.length > 2 ? arguments[2] : void 0;
+         if (void 0 === this.sourceTexture && void 0 === this.targetTexture) throw new Error(`FrameGraphPostProcessTask "${this.name}": sourceTexture or targetTexture is required`);
+         const mW = void 0 !== this.sourceTexture ? this._frameGraph.textureManager.getTextureCreationOptions(this.sourceTexture) : void 0;
+         if (mW && (mW.options.samples = 1), this._frameGraph.textureManager.resolveDanglingHandle(this.outputTexture, this.targetTexture, this.name, mW), void 0 !== this.depthAttachmentTexture && this._frameGraph.textureManager.resolveDanglingHandle(this.outputDepthAttachmentText … [truncated]
+           const WW = this._frameGraph.textureManager.getTextureAbsoluteDimensions(mW);
+           this._sourceWidth = WW.width, this._sourceHeight = WW.height
+         }
+         const EW = this._frameGraph.textureManager.getTextureDescription(this.outputTexture);
+         this._outputWidth = EW.size.width, this._outputHeight = EW.size.height;
+         const NW = this._frameGraph.addRenderPass(this.name);
+         if (NW.depthReadOnly = this.depthReadOnly, NW.stencilReadOnly = this.stencilReadOnly, NW.addDependencies(this.sourceTexture), NW.setRenderTarget(this.outputTexture), NW.setRenderTargetDepth(this.depthAttachmentTexture), NW.setExecuteFunc((WW => {
+             WW.pushDebugGroup(`Apply post-process (${this.name})`), void 0 !== this.sourceTexture && WW.setTextureSamplingMode(this.sourceTexture, this.sourceSamplingMode), iW?.(WW), this.viewport && WW.setViewport(this.viewport), WW.applyFullScreenEffect(this._postProcessDrawWra … [truncated]
+               void 0 !== this.sourceTexture && WW.bindTextureHandle(this._postProcessDrawWrapper.effect, "textureSampler", this.sourceTexture), OW?.(WW), this.postProcess.bind()
+ ... (5 more added lines; see GitHub link above)
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L3714-L3721` → after: `L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L706) · [Before (L3714-L3721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L3714-L3721)

```diff
-         let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
-           OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         if (this._engine._onReleaseRenderPassObservable?.remove(this._renderPassObserver), this._renderPassObserver = null, this.resetDrawCache(), this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), … [truncated]
-           const BB = this._scene.rW.indexOf(this);
-           BB > -1 && this._scene.rW.splice(BB, 1), this._scene._activeParticleSystems.dispose()
-         }
-         this.lF.notifyObservers(this), this.lF.clear(), this.onStoppedObservable.clear(), this.onStartedObservable.clear(), this.reset(), this._isDisposed = !0
+         this.postProcess.dispose(), super.dispose()
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L3724-L3753` → after: `L709-L711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L709-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L709-L711) · [Before (L3724-L3753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L3724-L3753)

```diff
-     IO.ForceGLSL = !1;
-     var FO, iO = GB(37823);
-     ! function(BB) {
-       BB[BB.ATTACHED = 0] = "ATTACHED", BB[BB.END = 1] = "END"
-     }(FO || (FO = {}));
-     class LO {
-       constructor(BB) {
-         if (this.particleSystem = BB, this.type = 1, this.inheritDirection = !1, this.inheritedVelocityAmount = 0, !BB.emitter || !BB.emitter.dispose) {
-           const OB = (0, iO.c)("BABYLON.AbstractMesh");
-           BB.emitter = new OB("SubemitterSystemEmitter", BB.JF()), BB._disposeEmitterOnDispose = !0
-         }
-       }
-       clone() {
-         let BB = this.particleSystem.emitter;
-         if (BB) {
-           if (BB instanceof QB.r) BB = BB.clone();
- ... (14 more removed lines; see GitHub link above)
+     class yW extends YW {
+       constructor(WW, iW, OW) {
+         super(WW, iW, OW || new tW(WW, iW.engine))
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L3755-L3758` → after: `L713-L714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L713-L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L713-L714) · [Before (L3755-L3758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L3755-L3758)

```diff
-       static Parse(BB, OB, GB) {
-         const YB = BB.particleSystem,
-           DB = new LO(LO._ParseParticleSystem(YB, OB, GB, !0));
-         return DB.type = BB.type, DB.inheritDirection = BB.inheritDirection, DB.inheritedVelocityAmount = BB.inheritedVelocityAmount, DB.particleSystem._isSubEmitter = !0, DB
+       getClassName() {
+         return "FrameGraphFXAATask"
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L3760-L3761` → after: `L716-L721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L716-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L716-L721) · [Before (L3760-L3761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L3760-L3761)

```diff
-       dispose() {
-         this.particleSystem.dispose()
+       record() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
+           iW = arguments.length > 1 ? arguments[1] : void 0,
+           OW = arguments.length > 2 ? arguments[2] : void 0;
+         const mW = super.record(WW, iW, OW);
+         return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, mW
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L3764-L3792` → after: `L724-L727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L724-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L724-L727) · [Before (L3764-L3792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L3764-L3792)

```diff
-     var gO = GB(40905),
-       rO = GB(41022);
-     const XO = () => {};
-     class wO {
-       constructor() {
-         this.particlePositionGenerator = XO, this.particleDestinationGenerator = XO, this.particleDirectionGenerator = XO
-       }
-       startDirectionFunction(BB, OB, GB, YB) {
-         const DB = QB.k.Xp[0];
-         if (this.particleDirectionGenerator && this.particleDirectionGenerator !== XO) this.particleDirectionGenerator(-1, GB, DB);
-         else if (this.particleDestinationGenerator && this.particleDestinationGenerator !== XO) {
-           this.particleDestinationGenerator(-1, GB, DB);
-           const BB = QB.k.Xp[1];
-           DB.subtractToRef(GB.position, BB), BB.scaleToRef(1 / GB.lifeTime, DB)
-         } else DB.set(0, 0, 0);
-         YB ? OB.IU(DB) : QB.r.TransformNormalToRef(DB, BB, OB)
- ... (13 more removed lines; see GitHub link above)
+     var TW = OW(54003);
+     class JW extends YW {
+       constructor(WW, iW, OW) {
+         super(WW, iW, OW || new TW.h(WW, iW.engine))
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L3795-L3802` → after: `L730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L730) · [Before (L3795-L3802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L3795-L3802)

```diff
-         return "CustomParticleEmitter"
-       }
-       serialize() {
-         const BB = {};
-         return BB.type = this.getClassName(), BB.particlePositionGenerator = this.particlePositionGenerator, BB.particleDestinationGenerator = this.particleDestinationGenerator, BB
-       }
-       parse(BB) {
-         BB.particlePositionGenerator && (this.particlePositionGenerator = BB.particlePositionGenerator), BB.particleDestinationGenerator && (this.particleDestinationGenerator = BB.particleDestinationGenerator)
+         return "FrameGraphPassTask"
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L3805-L3807` → after: `L733-L737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L733-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L733-L737) · [Before (L3805-L3807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L3805-L3807)

```diff
-     const EO = QB.r.Zero(),
-       cO = QB.r.Zero(),
-       hO = QB.r.Zero();
+     var hW = OW(41612),
+       HW = OW(41695),
+       nW = OW(41653),
+       uW = OW(41765),
+       oW = OW(38372);
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L3809-L3834` → after: `L739-L743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L739-L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L739-L743) · [Before (L3809-L3834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L3809-L3834)

```diff
-       constructor() {
-         this.strength = 0, this.position = QB.r.Zero()
-       }
-       _processParticle(BB, OB) {
-         this.position.subtractToRef(BB.position, EO);
-         const GB = EO.lengthSquared() + 1;
-         EO.normalize().scaleToRef(this.strength / GB, cO), cO.scaleToRef(OB._tempScaledUpdateSpeed, hO), BB.direction.addInPlace(hO)
-       }
-       serialize() {
-         return {
-           position: this.position.dDB(),
-           strength: this.strength
-         }
-       }
-     }
-     const eO = ["level", "hasAlpha", "getAlphaFromRGB", "gammaSpace", "coordinatesIndex", "coordinatesMode", "wrapU", "wrapV", "wrapR", "anisotropicFilteringLevel", "uOffset", "vOffset", "uScale", "vScale", "uAng", "vAng", "wAng", "uRotationCenter", "vRotationCenter", "wRotationC … [truncated]
- ... (10 more removed lines; see GitHub link above)
+       getRenderCamera(WW) {
+         if (this._renderCamera) return this._renderCamera;
+         {
+           let iW;
+           return iW = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, WW && iW && iW.isRigCamera ? iW.rigParent : iW
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L3837-L3838` → after: `L746-L747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L746-L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L746-L747) · [Before (L3837-L3838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L3837-L3838)

```diff
-       get source() {
-         return this._source
+       setRenderCamera(WW) {
+         this._renderCamera = WW
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L3840-L3841` → after: `L749-L750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L749-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L749-L750) · [Before (L3840-L3841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L3840-L3841)

```diff
-       get isNodeGenerated() {
-         return null !== this._source
+       _getSharedGizmoLight() {
+         return this._sharedGizmoLight || (this._sharedGizmoLight = new uW.c("shared gizmo light", new wW.q(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = oW.b.Gray()), this._sharedGizmoLight
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L3843-L3844` → after: `L752-L753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L752-L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L752-L753) · [Before (L3843-L3844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L3843-L3844)

```diff
-       get flowMap() {
-         return this._flowMap
+       static get DefaultUtilityLayer() {
+         return null == dW._DefaultUtilityLayer ? dW._CreateDefaultUtilityLayerFromScene(cW.d.LastCreatedScene) : dW._DefaultUtilityLayer
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L3846-L3880` → after: `L755-L758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L755-L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L755-L758) · [Before (L3846-L3880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L3846-L3880)

```diff
-       set flowMap(BB) {
-         this._flowMap !== BB && (this._flowMap = BB, this._flowMapUpdate && (uO(this._flowMapUpdate), this._flowMapUpdate = null), BB && (this._flowMapUpdate = {
-           process: BB => {
-             const OB = this.JF()?.getTransformMatrix();
-             this._flowMap._processParticle(BB, this.flowMapStrength * this._tempScaledUpdateSpeed, OB)
-           },
-           previousItem: null,
-           nextItem: null
-         }, KO(this._flowMapUpdate, this._directionProcessing)))
-       }
-       addAttractor(BB) {
-         super.addAttractor(BB), 1 === this._attractors.length && (this._attractorUpdate = {
-           process: BB => {
-             for (const OB of this._attractors) OB._processParticle(BB, this)
-           },
-           previousItem: null,
- ... (19 more removed lines; see GitHub link above)
+       static _CreateDefaultUtilityLayerFromScene(WW) {
+         return dW._DefaultUtilityLayer = new dW(WW), dW._DefaultUtilityLayer.originalScene.jD.addOnce((() => {
+           dW._DefaultUtilityLayer = null
+         })), dW._DefaultUtilityLayer
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L3882-L3884` → after: `L760-L761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L760-L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L760-L761) · [Before (L3882-L3884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L3882-L3884)

```diff
-       _removeFromRoot() {
-         if (!this._rootParticleSystem) return;
-         const BB = this._rootParticleSystem.activeSubSystems.indexOf(this); - 1 !== BB && this._rootParticleSystem.activeSubSystems.splice(BB, 1), this._rootParticleSystem = null
+       static get DefaultKeepDepthUtilityLayer() {
+         return null == dW._DefaultKeepDepthUtilityLayer ? dW._CreateDefaultKeepUtilityLayerFromScene(cW.d.LastCreatedScene) : dW._DefaultKeepDepthUtilityLayer
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L3886-L3887` → after: `L763-L766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L763-L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L763-L766) · [Before (L3886-L3887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L3886-L3887)

```diff
-       _preStart() {
-         this._prepareSubEmitterInternalArray(), this._subEmitters && 0 != this._subEmitters.length && (this.activeSubSystems = [])
+       static _CreateDefaultKeepUtilityLayerFromScene(WW) {
+         return dW._DefaultKeepDepthUtilityLayer = new dW(WW), dW._DefaultKeepDepthUtilityLayer.utilityLayerScene.autoClearDepthAndStencil = !1, dW._DefaultKeepDepthUtilityLayer.originalScene.jD.addOnce((() => {
+           dW._DefaultKeepDepthUtilityLayer = null
+         })), dW._DefaultKeepDepthUtilityLayer
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L3889-L3890` → after: `L768-L803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L768-L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L768-L803) · [Before (L3889-L3890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L3889-L3890)

```diff
-       _postStop(BB) {
-         BB && this._stopSubEmitters()
+       constructor(WW) {
+         let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
+           OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         this.originalScene = WW, this.handleEvents = iW, this._pointerCaptures = {}, this._lastPointerEvents = {}, this._sharedGizmoLight = null, this._renderCamera = null, this.pickUtilitySceneFirst = !0, this.shouldRender = !0, this.onlyCheckPointerDownEvents = !0, this.process … [truncated]
+           virtual: !0,
+           useFloatingOrigin: WW.floatingOriginMode
+         }), this.utilityLayerScene.useRightHandedSystem = WW.useRightHandedSystem, this.utilityLayerScene._allowPostProcessClearColor = !1, this.utilityLayerScene.postProcessesEnabled = !1, this.utilityLayerScene.detachControl(), iW && (this._originalPointerObserver = WW.onPrePoi … [truncated]
+           if (!this.utilityLayerScene.activeCamera) return;
+           if (!this.pickingEnabled) return;
+           if (!this.processAllEvents && iW.type !== HW.c.POINTERMOVE && iW.type !== HW.c.POINTERUP && iW.type !== HW.c.POINTERDOWN && iW.type !== HW.c.POINTERDOUBLETAP) return;
+           this.utilityLayerScene.pointerX = WW.pointerX, this.utilityLayerScene.pointerY = WW.pointerY;
+           const OW = iW.event;
+           if (WW.isPointerCaptured(OW.pointerId)) return void(this._pointerCaptures[OW.pointerId] = !1);
+           const mW = OW => {
+               let mW;
+               if (iW.nearInteractionPickingInfo) mW = iW.nearInteractionPickingInfo.pickedMesh.bD() == OW ? iW.nearInteractionPickingInfo : new nW.b;
+ ... (20 more added lines; see GitHub link above)
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L3892-L3901` → after: `L805-L806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L805-L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L805-L806) · [Before (L3892-L3901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L3892-L3901)

```diff
-       _prepareParticle(BB) {
-         if (this._subEmitters && this._subEmitters.length > 0) {
-           const OB = this._subEmitters[Math.floor(Math.random() * this._subEmitters.length)];
-           BB._properties.attachedSubEmitters = [];
-           for (const GB of OB)
-             if (0 === GB.type) {
-               const OB = GB.clone();
-               BB._properties.attachedSubEmitters.push(OB), OB.particleSystem.start()
-             }
-         }
+       _notifyObservers(WW, iW, OW) {
+         WW.skipOnPointerObservable || (this.utilityLayerScene.onPointerObservable.notifyObservers(new HW.f(WW.type, WW.event, iW), WW.type), this._lastPointerEvents[OW.pointerId] = !0)
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L3903-L3915` → after: `L808-L812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L808-L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L808-L812) · [Before (L3903-L3915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L3903-L3915)

```diff
-       _onDispose() {
-         let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
-           OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         if (this._removeFromRoot(), this.subEmitters && !this._subEmitters && this._prepareSubEmitterInternalArray(), BB && this.particles)
-           for (const GB of this.particles)
-             if (GB._properties.attachedSubEmitters)
-               for (let BB = GB._properties.attachedSubEmitters.length - 1; BB >= 0; BB -= 1) GB._properties.attachedSubEmitters[BB].dispose();
-         if (OB && this.activeSubSystems)
-           for (let GB = this.activeSubSystems.length - 1; GB >= 0; GB -= 1) this.activeSubSystems[GB].dispose();
-         if (this._subEmitters && this._subEmitters.length) {
-           for (let BB = 0; BB < this._subEmitters.length; BB++)
-             for (const OB of this._subEmitters[BB]) OB.dispose();
-           this._subEmitters = [], this.subEmitters = []
+       render() {
+         if (this._updateCamera(), this.utilityLayerScene.activeCamera) {
+           const WW = this.utilityLayerScene.activeCamera.bD(),
+             iW = this.utilityLayerScene.activeCamera;
+           iW._scene = this.utilityLayerScene, iW.leftCamera && (iW.leftCamera._scene = this.utilityLayerScene), iW.rightCamera && (iW.rightCamera._scene = this.utilityLayerScene), this.utilityLayerScene.render(!1), iW._scene = WW, iW.leftCamera && (iW.leftCamera._scene = WW), iW. … [truncated]
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L3919-L4011` → after: `L815-L816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L815-L816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L815-L816) · [Before (L3919-L4011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L3919-L4011)

```diff
-       static _Parse(BB, OB, GB, YB) {
-         let DB;
-         DB = GB instanceof gO.d ? null : GB;
-         const oB = (0, iO.c)("BABYLON.Texture");
-         if (oB && DB)
-           if (BB.texture) OB.particleTexture = oB.Parse(BB.texture, DB, YB);
-           else if (BB.textureName) {
-           const GB = BB.textureSettings;
-           if (OB.particleTexture = new oB(YB + BB.textureName, DB, !1, void 0 === BB.invertY || BB.invertY, GB ? GB.samplingMode : void 0), OB.particleTexture.name = BB.textureName, GB) {
-             const BB = OB.particleTexture;
-             for (const OB of eO) void 0 !== GB[OB] && (BB[OB] = GB[OB])
-           }
-         }
-         if (BB.emitterId || 0 === BB.emitterId || void 0 !== BB.emitter ? (BB.emitterId || 0 === BB.emitterId) && DB ? (OB.emitter = DB.getLastMeshById(BB.emitterId), OB.emitter || (OB.emitter = QB.r.Zero())) : OB.emitter = QB.r.FromArray(BB.emitter) : OB.emitter = QB.r.Zero(), O … [truncated]
-           for (let GB = 0; GB < BB.animations.length; GB++) {
-             const YB = BB.animations[GB],
- ... (77 more removed lines; see GitHub link above)
+       dispose() {
+         this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.jD.remove(this._sceneDisposeObserver), this._originalPointerObserver && t … [truncated]
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4013-L4038` → after: `L818-L819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L818-L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L818-L819) · [Before (L4013-L4038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L4013-L4038)

```diff
-       static Parse(BB, OB, GB) {
-         let YB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-           DB = arguments.length > 4 ? arguments[4] : void 0;
-         const oB = BB.name;
-         let jB, yB, JB = null,
-           PB = null;
-         if (OB instanceof gO.d ? jB = OB : (yB = OB, jB = yB.Lp()), BB.customShader && (0, gB.b)(jB.createEffectForParticles)) {
-           PB = BB.customShader;
-           const OB = PB.shaderOptions.defines.length > 0 ? PB.shaderOptions.defines.join("\n") : "";
-           JB = jB.createEffectForParticles(PB.shaderPath.fragmentElement, PB.shaderOptions.uniforms, PB.shaderOptions.samplers, OB)
-         }
-         const zB = new TO(oB, DB || BB.CP, OB, JB, BB.isAnimationSheetEnabled);
-         if (zB.customShader = PB, zB._rootUrl = GB, BB.id && (zB.id = BB.id), BB.subEmitters) {
-           zB.subEmitters = [];
-           for (const YB of BB.subEmitters) {
-             const BB = [];
- ... (10 more removed lines; see GitHub link above)
+       _updateCamera() {
+         this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4040-L4055` → after: `L821-L842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L821-L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L821-L842) · [Before (L4040-L4055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L4040-L4055)

```diff
-       serialize() {
-         let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         const OB = {};
-         if (TO._Serialize(OB, this, BB), OB.textureMask = this.textureMask.dDB(), OB.customShader = this.customShader, OB.preventAutoStart = this.preventAutoStart, OB.worldOffset = this.worldOffset.dDB(), this.metadata && (OB.metadata = this.metadata), this.subEmitters) {
-           OB.subEmitters = [], this._subEmitters || this._prepareSubEmitterInternalArray();
-           for (const GB of this._subEmitters) {
-             const YB = [];
-             for (const OB of GB) OB.particleSystem.doNotSerialize || YB.push(OB.serialize(BB));
-             OB.subEmitters.push(YB)
-           }
-         }
-         if (this._attractors && this._attractors.length) {
-           OB.attractors = [];
-           for (const BB of this._attractors) OB.attractors.push(BB.serialize())
-         }
-         return OB
+     }
+     dW._DefaultUtilityLayer = null, dW._DefaultKeepDepthUtilityLayer = null;
+     const eW = {
+       FindMainCamera: function(WW) {
+         return WW.findMainCamera()
+       },
+       FindMainObjectRenderer: function(WW) {
+         return WW.findMainObjectRenderer()
+       },
+       CreateUtilityLayerRenderer: function(WW) {
+         let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+         const OW = WW.rb,
+           mW = new dW(OW, iW, !0);
+         mW.utilityLayerScene.activeCamera = OW.activeCamera;
+         let EW = eW.FindMainCamera(OW.frameGraph);
+         !EW && OW.cameras.length > 0 && (EW = OW.cameras[0]), EW && (mW.setRenderCamera(EW), mW.utilityLayerScene.activeCamera = EW);
+ ... (6 more added lines; see GitHub link above)
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4057-L4196` → after: `L844-L864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L844-L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L844-L864) · [Before (L4057-L4196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L4057-L4196)

```diff
-       static _Serialize(BB, OB, GB) {
-         if (BB.name = OB.name, BB.id = OB.id, BB.CP = OB.getCapacity(), BB.disposeOnStop = OB.disposeOnStop, BB.manualEmitCount = OB.manualEmitCount, OB.emitter.position) {
-           const GB = OB.emitter;
-           BB.emitterId = GB.id
-         } else {
-           const GB = OB.emitter;
-           BB.emitter = GB.dDB()
-         }
-         if (OB.particleEmitterType && (BB.particleEmitterType = OB.particleEmitterType.serialize()), OB.particleTexture)
-           if (GB) BB.texture = OB.particleTexture.serialize();
-           else {
-             const GB = OB.particleTexture;
-             BB.textureName = OB.particleTexture.name, BB.invertY = !!GB._invertY;
-             const YB = {};
-             for (const BB of eO) YB[BB] = GB[BB];
-             YB.samplingMode = GB.samplingMode, BB.textureSettings = YB
- ... (124 more removed lines; see GitHub link above)
+     };
+     let vW = null;
+ 
+     function gW(WW, iW, OW, mW) {
+       let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
+         NW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         PW = arguments.length > 6 ? arguments[6] : void 0,
+         LW = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
+         cW = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
+       const {
+         height: wW,
+         width: tW
+       } = XW(WW, iW, OW);
+       if (!wW || !tW) return void xW.b.Error("Invalid 'size' parameter !");
+       const ZW = iW.bD();
+       let AW = ZW.activeCamera !== iW;
+ ... (5 more added lines; see GitHub link above)
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4198-L4213` → after: `L866-L977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L866-L977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L866-L977) · [Before (L4198-L4213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L4198-L4213)

```diff
-           BB.limitVelocityGradients = [];
-           for (const OB of pB) {
-             const GB = {
-               gradient: OB.gradient,
-               factor1: OB.factor1
-             };
-             void 0 !== OB.factor2 ? GB.factor2 = OB.factor2 : GB.factor2 = OB.factor1, BB.limitVelocityGradients.push(GB)
-           }
-           BB.limitVelocityDamping = OB.limitVelocityDamping
-         }
-         OB.noiseTexture && (BB.noiseTexture = OB.noiseTexture.serialize())
-       }
-       clone(BB, OB) {
-         let GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         const YB = {
-           ...this._customWrappers
+           const iW = new Blob([WW]);
+           lW.f.DownloadBlob(iW), mW && mW("")
+         } else mW && mW(WW)
+       }), EW, 1, WW.getCreationOptions().antialias, void 0, void 0, void 0, void 0, PW) : WW.onEndFrameObservable.addOnce((() => {
+         vW || (vW = document.createElement("canvas")), vW.width = tW, vW.height = wW;
+         const iW = vW.getContext("2d"),
+           OW = WW.getRenderingCanvas();
+         if (!iW || !OW) return void xW.b.Error("Failed to create screenshot. Rendering context or rendering canvas is not available.");
+         const AW = OW.width,
+           bW = OW.height,
+           jW = vW.width,
+           UW = vW.height,
+           kW = jW / AW,
+           sW = UW / bW,
+           MW = LW ? Math.max(kW, sW) : Math.min(kW, sW),
+           KW = AW * MW,
+ ... (96 more added lines; see GitHub link above)
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4215-L4228` → after: `L979-L1003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L979-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L979-L1003) · [Before (L4215-L4228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L4215-L4228)

```diff
-         let DB = null;
-         const QB = this._engine;
-         if ((0, gB.b)(QB.createEffectForParticles) && null != this.customShader) {
-           DB = this.customShader;
-           const BB = DB.shaderOptions.defines.length > 0 ? DB.shaderOptions.defines.join("\n") : "",
-             OB = QB.createEffectForParticles(DB.shaderPath.fragmentElement, DB.shaderOptions.uniforms, DB.shaderOptions.samplers, BB);
-           YB[0] ? YB[0].effect = OB : this.setCustomEffect(OB, 0)
-         }
-         const oB = this.serialize(GB),
-           jB = !1 === GB && this.particleTexture ? this.particleTexture.clone() : null;
-         jB && (oB.textureName = void 0);
-         const yB = TO.Parse(oB, this._scene || this._engine, this._rootUrl);
-         return yB.name = BB, yB.customShader = DB, yB._customWrappers = YB, jB && (yB.particleTexture = jB), void 0 === OB && (OB = this.emitter), this.noiseTexture && (yB.noiseTexture = this.noiseTexture.clone()), yB.emitter = OB, this.preventAutoStart || yB.start(), yB
-       }
+       if (wW) {
+         const WW = new ZW("antialiasing", 1, yW.activeCamera);
+         dW.addPostProcess(WW), WW.autoClear = !0, WW.onEffectCreatedObservable.addOnce((WW => {
+           WW.isReady() ? vW() : WW.onCompiled = () => {
+             vW()
+           }
+         }))
+       } else vW()
+     }
+     async function fW(WW, iW, OW) {
+       let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
+         EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
+         NW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         PW = arguments.length > 6 ? arguments[6] : void 0,
+         LW = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
+         cW = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
+ ... (9 more added lines; see GitHub link above)
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4230-L4255` → after: `L1005-L1077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R1005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L1005-L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/271.js#L1005-L1077) · [Before (L4230-L4255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/271.js#L4230-L4255)

```diff
-     TO.BILLBOARDMODE_Y = 2, TO.BILLBOARDMODE_ALL = 7, TO.BILLBOARDMODE_STRETCHED = 8, TO.BILLBOARDMODE_STRETCHED_LOCAL = 9;
-     let bO = !1;
-     bO || (bO = !0, LO._ParseParticleSystem = TO.Parse)
-   },
-   44769: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       SkyMaterial: () => WB,
-       _MaxColorValueForRenderTarget: () => RB
-     });
-     var YB = GB(40998),
-       DB = GB(41004),
-       QB = GB(41022),
-       oB = GB(37771),
-       jB = GB(41275),
-       yB = GB(41346),
-       JB = GB(44726),
- ... (10 more removed lines; see GitHub link above)
+     async function CW(WW, iW, OW) {
+       let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
+         EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
+         NW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         PW = arguments.length > 6 ? arguments[6] : void 0,
+         LW = arguments.length > 7 ? arguments[7] : void 0,
+         cW = arguments.length > 8 ? arguments[8] : void 0,
+         wW = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
+         tW = arguments.length > 10 ? arguments[10] : void 0;
+       const ZW = WW.engine,
+         xW = WW.textureManager,
+         {
+           height: lW,
+           width: bW,
+           finalWidth: jW,
+           finalHeight: kW
+ ... (57 more added lines; see GitHub link above)
```
