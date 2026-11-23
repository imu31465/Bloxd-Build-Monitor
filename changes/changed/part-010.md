# Changed — Bundle Modifications Report (Part 010 / 050)

- **Updated at**: `2026-11-24T00:42 JST`
- **Part**: `10 / 50` (**307** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 009](part-009.md) · [Part 011 →](part-011.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/229.js` (bbb6l5.0244a119 → w4ddu.56408518 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/229.js` (31 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e)

#### 22. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L242-L250` → after: `L546-L691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L546-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/229.js#L546-L691) · [Before (L242-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/229.js#L242-L250)

```diff
-       return lq(qq) ? `inverseSqrt(${Eq})` : `inversesqrt(${Eq})`
-     }
- 
-     function Lq(qq, Eq, gq, Yq) {
-       return lq(qq) ? `select(${Yq}, ${gq}, ${Eq})` : `((${Eq}) ? (${gq}) : (${Yq}))`
-     }
- 
-     function Jq(qq, Eq, gq) {
-       return lq(qq) ? `((${Eq}) - (${gq}) * floor((${Eq}) / (${gq})))` : `mod(${Eq}, ${gq})`
+       let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+       const bC = zC.points,
+         fC = zC.instance,
+         qC = zC.gapSize || 1,
+         WC = zC.dashSize || 3;
+       if (fC) {
+         const CC = CC => {
+           const zC = QC.r.Zero(),
+             ZC = CC.length / 6;
+           let wC, nC, oC, qC, FC = 0,
+             WC = 0;
+           for (oC = 0; oC < bC.length - 1; oC++) bC[oC + 1].subtractToRef(bC[oC], zC), FC += zC.length();
+           const NC = FC / ZC,
+             MC = fC._creationDataStorage.dashSize,
+             gC = MC * NC / (MC + fC._creationDataStorage.gapSize);
+           for (oC = 0; oC < bC.length - 1; oC++)
+ ... (130 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L252-L254` → after: `L693-L700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L693-L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/229.js#L693-L700) · [Before (L252-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/229.js#L252-L254)

```diff
- 
-     function kq(qq, Eq, gq) {
-       return lq(qq) ? `${Eq} = vec4f(${gq}, ${Eq}.a);` : `${Eq}.rgb = ${gq};`
+     NC.ForceGLSL = !1;
+     class MC extends oC.c {
+       constructor(CC, zC) {
+         super(CC, zC), this.intersectionThreshold = zC.intersectionThreshold
+       }
+       getClassName() {
+         return "InstancedLinesMesh"
+       }
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L257-L258` → after: `L704-L748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L704-L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/229.js#L704-L748) · [Before (L257-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/229.js#L257-L258)

```diff
-     function Rq(qq, Eq, gq) {
-       return lq(qq) ? `${Eq} = vec4f(${Eq}.rgb * (${gq}), ${Eq}.a);` : `${Eq}.rgb *= ${gq};`
+     function SC() {
+       gC || (gC = !0, fC.b._LinesMeshParser = (CC, zC) => NC.Parse(CC, zC))
+     }(QC = NC.prototype).enableEdgesRendering ?? (QC.enableEdgesRendering = (0, WC.f)("LinesMesh", "enableEdgesRendering")), (wC = MC.prototype).enableEdgesRendering ?? (wC.enableEdgesRendering = (0, WC.f)("InstancedLinesMesh", "enableEdgesRendering"))
+   },
+   38501: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => bC
+     });
+     var QC = ZC(38507);
+     const wC = (CC, zC, ZC) => CC ? CC.getClassName && "Mesh" === CC.getClassName() ? null : !CC.getClassName || "SubMesh" !== CC.getClassName() && "PhysicsBody" !== CC.getClassName() ? CC.clone ? CC.clone() : Array.isArray(CC) ? CC.slice() : ZC && "object" === typeof CC ? {
+       ...CC
+     } : null : CC.clone(zC) : null;
+     class bC {
+       static DeepCopy(CC, zC, ZC, bC) {
+         let nC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         const fC = function(CC) {
+ ... (29 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L260-L262` → after: `L750-L756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L750-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/229.js#L750-L756) · [Before (L260-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/229.js#L260-L262)

```diff
- 
-     function Uq(qq, Eq, gq) {
-       return lq(qq) ? `${Eq} = vec4f(${gq}, ${Eq}.w);` : `${Eq}.xyz = ${gq};`
+   },
+   37731: (CC, zC, ZC) => {
+     function QC() {
+       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (CC => {
+         const zC = 16 * Math.random() | 0;
+         return ("x" === CC ? zC : 3 & zC | 8).toString(16)
+       }))
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L265` → after: `L762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/229.js#L762) · [Before (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/229.js#L265)

```diff
-   39617: (qq, Eq, gq) => {
+   38507: (CC, zC, ZC) => {
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L267` → after: `L764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/229.js#L764) · [Before (L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/229.js#L267)

```diff
-       d: () => Yq
+       c: () => QC
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L270-L271` → after: `L767-L782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L767-L782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/229.js#L767-L782) · [Before (L270-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/229.js#L270-L271)

```diff
-       static GetShadersRepository() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Yq.ShadersRepository : Yq.ShadersRepositoryWGSL
+       static _CheckLimit(CC, zC) {
+         let ZC = QC._LogLimitOutputs[CC];
+         return ZC ? ZC.current++ : (ZC = {
+           limit: zC,
+           current: 1
+         }, QC._LogLimitOutputs[CC] = ZC), ZC.current <= ZC.limit
+       }
+       static _GenerateLimitMessage(CC) {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         const ZC = QC._LogLimitOutputs[CC];
+         if (!ZC || !QC.MessageLimitReached) return;
+         const wC = this._Levels[zC];
+         ZC.current === ZC.limit && QC[wC.name](QC.MessageLimitReached.replace(/%LIMIT%/g, "" + ZC.limit).replace(/%TYPE%/g, wC.name ?? ""))
+       }
+       static _AddLogEntry(CC) {
+         QC._LogCache = CC + QC._LogCache, QC.OnNewCacheEntry && QC.OnNewCacheEntry(CC)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L273-L274` → after: `L784-L787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L784-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/229.js#L784-L787) · [Before (L273-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/229.js#L273-L274)

```diff
-       static GetShadersStore() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Yq.ShadersStore : Yq.ShadersStoreWGSL
+       static _FormatMessage(CC) {
+         const zC = CC => CC < 10 ? "0" + CC : "" + CC,
+           ZC = new Date;
+         return "[" + zC(ZC.getHours()) + ":" + zC(ZC.getMinutes()) + ":" + zC(ZC.getSeconds()) + "]: " + CC
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L276-L277` → after: `L789-L816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L789-L816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/229.js#L789-L816) · [Before (L276-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/229.js#L276-L277)

```diff
-       static GetIncludesShadersStore() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Yq.IncludesShadersStore : Yq.IncludesShadersStoreWGSL
+       static _LogDisabled(CC, zC) {}
+       static _LogEnabled() {
+         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
+           zC = arguments.length > 1 ? arguments[1] : void 0,
+           ZC = arguments.length > 2 ? arguments[2] : void 0;
+         const wC = Array.isArray(zC) ? zC[0] : zC;
+         if (void 0 !== ZC && !QC._CheckLimit(wC, ZC)) return;
+         const bC = QC._FormatMessage(wC),
+           nC = this._Levels[CC],
+           fC = Array.isArray(zC) ? zC.slice(1) : [];
+         nC.logFunc && nC.logFunc("BJS - " + bC, ...fC);
+         const oC = `<div style='color:${nC.color}'>${bC}</div><br>`;
+         QC._AddLogEntry(oC), QC._GenerateLimitMessage(wC, CC)
+       }
+       static get LogCache() {
+         return QC._LogCache
+ ... (12 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L280` → after: `L819-L838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L819-L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/229.js#L819-L838) · [Before (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/229.js#L280)

```diff
-     Yq.ShadersRepository = "src/Shaders/", Yq.ShadersStore = {}, Yq.IncludesShadersStore = {}, Yq.ShadersRepositoryWGSL = "src/ShadersWGSL/", Yq.ShadersStoreWGSL = {}, Yq.IncludesShadersStoreWGSL = {}
+     QC.NoneLogLevel = 0, QC.MessageLogLevel = 1, QC.WarningLogLevel = 2, QC.ErrorLogLevel = 4, QC.AllLogLevel = 7, QC.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", QC._LogCache = "", QC._LogLimitOutputs = {}, QC._Levels =  … [truncated]
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
+     }], QC.errorsCount = 0, QC.Log = QC._LogEnabled.bind(QC, QC.MessageLogLevel), QC.Warn = QC._LogEnabled.bind(QC, QC.WarningLogLevel), QC.Error = QC._LogEnabled.bind(QC, QC.ErrorLogLevel)
+   },
+   39902: (CC, zC, ZC) => {
+     ZC.d(zC, {
+ ... (4 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/230.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/230.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341)

#### 1. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/230.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/230.js#L2)

```diff
- export const ids = [230];
+ export const ids = [230, 235];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/230.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/230.js#L4)

```diff
-   37286: (qq, Eq, gq) => {
+   41655: (CC, zC, ZC) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L6` → after: `L6-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L6-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/230.js#L6-L35) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/230.js#L6)

```diff
-       Color3: () => Yq.d,
+       e: () => nC
+     });
+     var QC = ZC(41590),
+       wC = ZC(39803);
+     let bC = !1;
+ 
+     function nC() {
+       bC || (bC = !0, wC.b.prototype._sphericalPolynomialTargetSize = 0, wC.b.prototype.forceSphericalPolynomialsRecompute = function() {
+         this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
+       }, Object.defineProperty(wC.b.prototype, "sphericalPolynomial", {
+         get: function() {
+           if (this._texture) {
+             if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
+             if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = QC.b.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialCo … [truncated]
+               this._texture._sphericalPolynomial = CC, this._texture._sphericalPolynomialComputed = !0
+             }))), null
+ ... (14 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L9-L10` → after: `L38-L16197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L38-L16197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/230.js#L38-L16197) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/230.js#L9-L10)

```diff
-     var Yq = gq(37289);
-     (0, Yq.h)()
+     var QC = ZC(37142);
+     (0, QC.i)()
+   },
+   37590: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => wC
+     });
+     var QC = ZC(37596);
+     class wC {
+       static GetPlanes(CC) {
+         const zC = [];
+         for (let ZC = 0; ZC < 6; ZC++) zC.push(new QC.d(0, 0, 0, 0));
+         return wC.GetPlanesToRef(CC, zC), zC
+       }
+       static GetNearPlaneToRef(CC, zC) {
+         const ZC = CC.m;
+ ... (16144 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/231.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/231.js` (23 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5)

#### 1. `bundles/preprod.bloxd.io/chunks/js/231.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/231.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/231.js#L4)

```diff
-   40806: (qq, Eq, gq) => {
+   36985: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/231.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/231.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/231.js#L6)

```diff
-       noaDevTools: () => Bq
+       c: () => wC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/231.js` (Changed code · before: `L8-L231` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/231.js#L8-L11) · [Before (L8-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/231.js#L8-L231)

```diff
-     var Yq = gq(37560),
-       lq = gq(37541),
-       Oq = gq(2668),
-       mq = gq(1710);
- 
-     function xq(qq) {
-       const {
-         Ma: Eq
-       } = qq, gq = Eq.engine, Yq = {
-         width: gq.getRenderWidth(),
-         height: gq.getRenderHeight()
-       };
-       return {
-         canvas: gq.getRenderingCanvas(),
-         maxTextureSize: gq.getCaps().maxTextureSize,
-         drawing: () => !qq.Av,
- ... (208 more removed lines; see GitHub link above)
+     var QC = ZC(36987);
+     class wC {
+       static get LastCreatedEngine() {
+         return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/231.js` (Changed code · before: `L233-L237` → after: `L13-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5) · [After (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/231.js#L13-L14) · [Before (L233-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/231.js#L233-L237)

```diff
-       async setAmbientLightIntensity(qq) {
-         const {
-           Color3: Eq
-         } = await Promise.all([gq.e(227), gq.e(230)]).then((() => gq(37286)));
-         (0, Oq.e)().Ma.ZJ().ambientColor = Eq.FromArray([qq, qq, qq])
+       static get LastCreatedScene() {
+         return this._LastCreatedScene
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/231.js` (Changed code · before: `L241` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/231.js#L19) · [Before (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/231.js#L241)

```diff
-   40778: (qq, Eq, gq) => {
+   36977: (CC, zC, ZC) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/231.js` (Changed code · before: `L243` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/231.js#L21) · [Before (L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/231.js#L243)

```diff
-       e: () => Aq
+       c: () => QC
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/231.js` (Changed code · before: `L245-L290` → after: `L23-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5) · [After (L23-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/231.js#L23-L30) · [Before (L245-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/231.js#L245-L290)

```diff
-     var Yq = gq(1725);
-     const lq = 33177600,
-       Oq = 3e4;
-     let mq = !1;
- 
-     function xq(qq, Eq, gq) {
-       if (!qq.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
-       if (mq) return Promise.reject(new Error("A screenshot is already being taken"));
-       mq = !0;
-       const Yq = function(qq, Eq, gq) {
-         const Yq = Math.max(1, qq),
-           Oq = Math.max(1, Eq),
-           mq = Math.min(1, gq / Math.max(Yq, Oq), Math.sqrt(lq / (Yq * Oq)));
-         return {
-           width: Math.max(1, Math.floor(Yq * mq)),
-           height: Math.max(1, Math.floor(Oq * mq))
- ... (30 more removed lines; see GitHub link above)
+     class QC {
+       static SetMatrixPrecision(CC) {
+         if (QC.MatrixTrackPrecisionChange = !1, CC && !QC.MatrixUse64Bits && QC.MatrixTrackedMatrices)
+           for (let zC = 0; zC < QC.MatrixTrackedMatrices.length; ++zC) {
+             const CC = QC.MatrixTrackedMatrices[zC],
+               ZC = CC._m;
+             CC._m = new Array(16);
+             for (let zC = 0; zC < 16; ++zC) CC._m[zC] = ZC[zC]
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/231.js` (Changed code · before: `L292-L300` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/231.js#L32) · [Before (L292-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/231.js#L292-L300)

```diff
-         }))
-       }))
-     }
-     async function Aq(qq, Eq, gq) {
-       try {
-         const lq = await xq(qq, Eq, gq);
-         (0, Yq.e)(lq.blob, `bloxd-screenshot-${lq.width}x${lq.height}-${Date.now()}.png`)
-       } catch (lq) {
-         console.error("Error taking screenshot:", lq)
+         QC.MatrixUse64Bits = CC, QC.MatrixCurrentType = QC.MatrixUse64Bits ? Array : Float32Array, QC.MatrixTrackedMatrices = null
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/231.js` (Changed code · before: `L304` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/231.js#L37) · [Before (L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/231.js#L304)

```diff
-   37560: (qq, Eq, gq) => {
+   36996: (CC, zC, ZC) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/231.js` (Changed code · before: `L307-L308` → after: `L40-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5) · [After (L40-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/231.js#L40-L44) · [Before (L307-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/231.js#L307-L308)

```diff
-       e: () => xq,
-       f: () => mq
+       h: () => qC,
+       l: () => oC,
+       m: () => QC,
+       o: () => bC,
+       q: () => nC
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/231.js` (Changed code · before: `L310-L312` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/231.js#L46) · [Before (L310-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/231.js#L310-L312)

```diff
-     var Yq = gq(37557),
-       lq = gq(37562);
-     let Oq = 0;
+     class QC {}
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/231.js` (Changed code · before: `L314-L318` → after: `L48-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5) · [After (L48-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/231.js#L48-L49) · [Before (L314-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/231.js#L314-L318)

```diff
-     function mq(qq, Eq) {
-       const gq = qq;
-       gq._noaFaceGroups = null !== Eq && void 0 !== Eq ? Eq : null, gq._noaFaceEpoch = -1, gq._noaFaceMask = -1, gq._noaFaceCount = -1, gq._noaFaceMaterial = null;
-       const Yq = qq.fn;
-       Yq && 1 === Yq.length && (Yq[0].indexStart = 0, Yq[0].indexCount = qq.getTotalIndices())
+     function wC(CC) {
+       CC.updateFlag = QC._UpdateFlagSeed++
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/231.js` (Changed code · before: `L321-L328` → after: `L52-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5) · [After (L52-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/231.js#L52-L88) · [Before (L321-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/231.js#L321-L328)

```diff
-     function xq(qq, Eq) {
-       if (Eq) {
-         Oq++;
-         for (const Eq of qq) {
-           const qq = Eq._noaFaceGroups;
-           qq && mq(Eq, qq)
-         }
-       } else Oq = Math.max(0, Oq - 1)
+     function bC(CC, zC, ZC) {
+       let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+       const wC = CC.VZC(),
+         bC = zC.VZC(),
+         nC = wC[0],
+         fC = wC[1],
+         oC = wC[2],
+         qC = wC[3],
+         FC = wC[4],
+         WC = wC[5],
+         NC = wC[6],
+         MC = wC[7],
+         gC = wC[8],
+         SC = wC[9],
+         pC = wC[10],
+         PC = wC[11],
+ ... (21 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/231.js` (Changed code · before: `L332-L388` → after: `L92-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5R92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5) · [After (L92-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/231.js#L92-L93) · [Before (L332-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/231.js#L332-L388)

```diff
-       let lq = -1,
-         Oq = 0;
-       for (let mq = 0; mq < Yq.e; mq++) {
-         const gq = qq[mq],
-           xq = qq[mq + 1];
-         xq > gq && Eq & 1 << Yq.b[mq] && (lq < 0 && (lq = gq), Oq = xq)
-       }
-       return lq < 0 ? (gq[0] = 0, gq[1] = 0, 0) : (gq[0] = lq, gq[1] = Oq - lq, Oq - lq)
-     }
-     class cq {
-       constructor(qq, Eq) {
-         this.Oa = qq, this.engine = Eq, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
-       }
-       apply(qq, Eq) {
-         if (!Eq) return;
-         const gq = Eq.getProjectionMatrix().m,
- ... (41 more removed lines; see GitHub link above)
+       let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+       bC(CC, zC, ZC.VZC(), QC), wC(ZC)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/231.js` (Changed code · before: `L401-L406` → after: `L97-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5) · [After (L97-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/231.js#L97-L99) · [Before (L401-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/231.js#L401-L406)

```diff
-       qq._data = Eq
-     }
- 
-     function xq(qq) {
-       var Eq, gq;
-       (null !== (Eq = null === (gq = qq.getBuffer()) || void 0 === gq ? void 0 : gq.WB) && void 0 !== Eq ? Eq : 0) > 0 && (Yq.add(qq), 0 === lq ? mq(qq, null) : Oq.add(qq))
+       let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+       const QC = CC.VZC();
+       zC[ZC] = QC[0], zC[ZC + 1] = QC[1], zC[ZC + 2] = QC[2], zC[ZC + 3] = QC[3], zC[ZC + 4] = QC[4], zC[ZC + 5] = QC[5], zC[ZC + 6] = QC[6], zC[ZC + 7] = QC[7], zC[ZC + 8] = QC[8], zC[ZC + 9] = QC[9], zC[ZC + 10] = QC[10], zC[ZC + 11] = QC[11], zC[ZC + 12] = QC[12], zC[ZC + 13]  … [truncated]
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/231.js` (Changed code · before: `L409-L429` → after: `L102-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5) · [After (L102-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/231.js#L102-L104) · [Before (L409-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/231.js#L409-L429)

```diff
-     function Aq(qq) {
-       lq++;
-       for (const gq of function(qq) {
-           const Eq = new Set;
-           for (const lq of qq) {
-             const qq = lq.geometry;
-             for (const lq of Object.values(null !== (gq = null === qq || void 0 === qq ? void 0 : qq.getVertexBuffers()) && void 0 !== gq ? gq : {})) {
-               var gq;
-               const qq = lq.getWrapperBuffer();
-               Yq.has(qq) && Eq.add(qq)
-             }
-           }
-           return Eq
-         }(qq)) gq.getData() || cq(gq), Oq.add(gq);
-       let Eq = !0;
-       return () => {
- ... (5 more removed lines; see GitHub link above)
+     function oC(CC, zC) {
+       const ZC = qC(CC, zC.VZC());
+       return ZC && wC(zC), ZC
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/231.js` (Changed code · before: `L432-L437` → after: `L107-L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5R107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5) · [After (L107-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/231.js#L107-L162) · [Before (L432-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/231.js#L432-L437)

```diff
-     function cq(qq) {
-       const Eq = qq.getBuffer();
-       if (!Eq || !(Eq.WB > 0)) return;
-       const gq = qq._engine,
-         Yq = new Uint8Array(Eq.WB);
-       gq.bindArrayBuffer(Eq), gq._gl.getBufferSubData(gq._gl.ARRAY_BUFFER, 0, Yq), gq._resetVertexBufferBinding(), mq(qq, Yq)
+     function qC(CC, zC) {
+       const ZC = CC.VZC(),
+         QC = ZC[0],
+         wC = ZC[1],
+         bC = ZC[2],
+         nC = ZC[3],
+         fC = ZC[4],
+         oC = ZC[5],
+         qC = ZC[6],
+         FC = ZC[7],
+         WC = ZC[8],
+         NC = ZC[9],
+         MC = ZC[10],
+         gC = ZC[11],
+         SC = ZC[12],
+         pC = ZC[13],
+ ... (40 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/231.js` (Changed code · before: `L440` → after: `L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5) · [After (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/231.js#L166) · [Before (L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/231.js#L440)

```diff
-   37557: (qq, Eq, gq) => {
+   36963: (CC, zC, ZC) => {
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/231.js` (Changed code · before: `L443-L470` → after: `L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5) · [After (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/231.js#L169) · [Before (L443-L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/231.js#L443-L470)

```diff
-       e: () => Oq,
-       i: () => Aq,
-       m: () => Yq,
-       p: () => xq,
-       s: () => lq,
-       v: () => cq
-     });
-     const Yq = 6,
-       lq = [0, 2, 4, 1, 3, 5, 0, 2],
-       Oq = 6,
-       mq = [1, 0, 3, 2, 5, 4];
-     for (let uq = Oq; uq < lq.length; uq++)
-       if (lq[uq] !== lq[uq - Oq]) throw new Error("FACE_LAYOUT must repeat a prefix of its base groups");
-     const xq = lq.length + 1,
-       Aq = (() => {
-         const qq = [];
- ... (12 more removed lines; see GitHub link above)
+       f: () => gC,
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/231.js` (Changed code · before: `L472-L473` → after: `L171-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5R171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5) · [After (L171-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/231.js#L171-L174) · [Before (L472-L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/231.js#L472-L473)

```diff
-       h: () => cq,
-       k: () => aq
+       j: () => PC,
+       n: () => WC,
+       r: () => NC,
+       u: () => MC
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/231.js` (Changed code · before: `L475-L495` → after: `L176-L487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5R176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5) · [After (L176-L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/231.js#L176-L487) · [Before (L475-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/231.js#L475-L495)

```diff
-     var Yq = gq(37557);
-     const lq = 1 / 16,
-       Oq = 1 / 64,
-       mq = 2048;
-     Yq.m;
- 
-     function xq(qq, Eq, gq) {
-       return Math.min(Math.abs(qq[0] * Eq), Math.abs(qq[5] * gq)) / 2
-     }
- 
-     function Aq(qq, Eq) {
-       return lq + Oq * qq * qq / Eq
-     }
- 
-     function cq(qq, Eq, gq, lq, Oq) {
-       const mq = Yq.p;
- ... (5 more removed lines; see GitHub link above)
+     var QC = ZC(36968),
+       wC = ZC(36971),
+       bC = ZC(36977),
+       nC = ZC(36985),
+       fC = ZC(36991),
+       oC = ZC(36996),
+       qC = ZC(37002);
+     const FC = CC => parseInt(CC.toString().replace(/\W/g, ""));
+     class WC {
+       constructor() {
+         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+           zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         this.x = CC, this.y = zC
+       }
+       toString() {
+         return `{X: ${this.x} Y: ${this.y}}`
+ ... (296 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/231.js` (Changed code · before: `L497-L509` → after: `L489-L629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5R489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5) · [After (L489-L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/231.js#L489-L629) · [Before (L497-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/231.js#L497-L509)

```diff
-     const Bq = (() => {
-         const qq = [];
-         for (let Eq = 0; Eq < Yq.s.length; Eq++) {
-           let gq = 0;
-           for (let lq = Eq + 1; lq <= Yq.s.length; lq++) {
-             const Oq = 1 << Yq.s[lq - 1];
-             if (gq & Oq) break;
-             gq |= Oq, qq.push({
-               start: Eq,
-               end: lq,
-               jE: gq
-             })
-           }
+     WC._V8PerformanceHack = new WC(.5, .5), WC._ZeroReadOnly = WC.Zero();
+     class NC {
+       get x() {
+         return this._x
+       }
+       set x(CC) {
+         this._x = CC, this._isDirty = !0
+       }
+       get y() {
+         return this._y
+       }
+       set y(CC) {
+         this._y = CC, this._isDirty = !0
+       }
+       get z() {
+         return this._z
+ ... (125 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/231.js` (Changed code · before: `L512-L554` → after: `L632-L2916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5R632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5) · [After (L632-L2916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/231.js#L632-L2916) · [Before (L512-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/231.js#L512-L554)

```diff
-       })(),
-       Wq = [];
- 
-     function Nq(qq, Eq) {
-       const gq = Yq.i[Eq];
-       return qq[gq + 1] - qq[gq]
-     }
- 
-     function aq(qq, Eq, gq) {
-       let lq = 0;
-       for (let mq = 0; mq < Yq.m; mq++) Nq(qq, mq) > 0 && (lq |= 1 << mq);
-       if (0 === (Eq &= lq)) return 0;
-       if (Eq === lq) return gq[0] = 0, gq[1] = qq[Yq.e], 1;
-       let Oq = null,
-         xq = 1 / 0;
-       for (const cq of function(qq) {
- ... (27 more removed lines; see GitHub link above)
+       }
+       equals(CC) {
+         return CC && this._x === CC._x && this._y === CC._y && this._z === CC._z
+       }
+       equalsWithEpsilon(CC) {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QC.e;
+         return CC && (0, fC.WithinEpsilon)(this._x, CC._x, zC) && (0, fC.WithinEpsilon)(this._y, CC._y, zC) && (0, fC.WithinEpsilon)(this._z, CC._z, zC)
+       }
+       dnC(CC, zC, ZC) {
+         return this._x === CC && this._y === zC && this._z === ZC
+       }
+       multiplyInPlace(CC) {
+         return this._x *= CC._x, this._y *= CC._y, this._z *= CC._z, this._isDirty = !0, this
+       }
+       multiply(CC) {
+         return this.multiplyByFloats(CC._x, CC._y, CC._z)
+ ... (2269 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/232.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/232.js` (99 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff)

#### 1. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L2)

```diff
- export const ids = [232, 233];
+ export const ids = [232];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L4)

```diff
-   39993: (qq, Eq, gq) => {
+   37142: (CC, zC, ZC) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L6-L7` → after: `L6-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L6-L9) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L6-L7)

```diff
-       d: () => uq,
-       e: () => Wq
+       e: () => WC,
+       g: () => NC,
+       i: () => SC,
+       j: () => MC
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L9-L92` → after: `L11-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L11-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L11-L14) · [Before (L9-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L9-L92)

```diff
-     var Yq = gq(39757),
-       lq = gq(39759),
-       Oq = gq(37139),
-       mq = gq(37289),
-       xq = gq(39995),
-       Aq = gq(39960),
-       cq = gq(37171);
-     let uq = (() => {
-         var qq;
-         let Eq, gq, Aq = xq.c,
-           cq = [],
-           uq = [],
-           Bq = [],
-           Wq = [];
-         return qq = class extends Aq {
-           constructor(qq, Eq, gq, lq) {
- ... (68 more removed lines; see GitHub link above)
+     var QC = ZC(36971),
+       wC = ZC(36968),
+       bC = ZC(36991),
+       nC = ZC(37002);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L94-L95` → after: `L16-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L16-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L16-L29) · [Before (L94-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L94-L95)

```diff
-     function Wq() {
-       Bq || (Bq = !0, Aq.c.AddNodeConstructor("Light_Type_3", ((qq, Eq) => () => new uq(qq, Oq.q.Zero(), Eq))), (0, cq.g)("BABYLON.HemisphericLight", uq))
+     function fC(CC) {
+       return Math.pow(CC, wC.i)
+     }
+ 
+     function oC(CC) {
+       return CC <= .04045 ? .0773993808 * CC : Math.pow(.947867299 * (CC + .055), 2.4)
+     }
+ 
+     function qC(CC) {
+       return Math.pow(CC, wC.g)
+     }
+ 
+     function FC(CC) {
+       return CC <= .0031308 ? 12.92 * CC : 1.055 * Math.pow(CC, .41666) - .055
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L104-L107` → after: `L32-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L32-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L32-L36) · [Before (L104-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L104-L107)

```diff
-       static GetPlanes(qq) {
-         const Eq = [];
-         for (let gq = 0; gq < 6; gq++) Eq.push(new Yq.d(0, 0, 0, 0));
-         return lq.GetPlanesToRef(qq, Eq), Eq
+       constructor() {
+         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+           zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+           ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         this.r = CC, this.g = zC, this.b = ZC
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L109-L111` → after: `L38-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L38-L39) · [Before (L109-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L109-L111)

```diff
-       static GetNearPlaneToRef(qq, Eq) {
-         const gq = qq.m;
-         Eq.normal.x = gq[3] + gq[2], Eq.normal.y = gq[7] + gq[6], Eq.normal.z = gq[11] + gq[10], Eq.d = gq[15] + gq[14], Eq.normalize()
+       toString() {
+         return "{R: " + this.r + " G:" + this.g + " B:" + this.b + "}"
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L113-L115` → after: `L41-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L41-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L41-L42) · [Before (L113-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L113-L115)

```diff
-       static GetFarPlaneToRef(qq, Eq) {
-         const gq = qq.m;
-         Eq.normal.x = gq[3] - gq[2], Eq.normal.y = gq[7] - gq[6], Eq.normal.z = gq[11] - gq[10], Eq.d = gq[15] - gq[14], Eq.normalize()
+       getClassName() {
+         return "Color3"
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L117-L119` → after: `L44-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L44-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L44-L46) · [Before (L117-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L117-L119)

```diff
-       static GetLeftPlaneToRef(qq, Eq) {
-         const gq = qq.m;
-         Eq.normal.x = gq[3] + gq[0], Eq.normal.y = gq[7] + gq[4], Eq.normal.z = gq[11] + gq[8], Eq.d = gq[15] + gq[12], Eq.normalize()
+       getHashCode() {
+         let CC = 255 * this.r | 0;
+         return CC = 397 * CC ^ 255 * this.g, CC = 397 * CC ^ 255 * this.b, CC
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L121-L123` → after: `L48-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L48-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L48-L50) · [Before (L121-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L121-L123)

```diff
-       static GetRightPlaneToRef(qq, Eq) {
-         const gq = qq.m;
-         Eq.normal.x = gq[3] - gq[0], Eq.normal.y = gq[7] - gq[4], Eq.normal.z = gq[11] - gq[8], Eq.d = gq[15] - gq[12], Eq.normalize()
+       toArray(CC) {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         return CC[zC] = this.r, CC[zC + 1] = this.g, CC[zC + 2] = this.b, this
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L125-L127` → after: `L52-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L52-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L52-L54) · [Before (L125-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L125-L127)

```diff
-       static GetTopPlaneToRef(qq, Eq) {
-         const gq = qq.m;
-         Eq.normal.x = gq[3] - gq[1], Eq.normal.y = gq[7] - gq[5], Eq.normal.z = gq[11] - gq[9], Eq.d = gq[15] - gq[13], Eq.normalize()
+       azC(CC) {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         return WC.FromArrayToRef(CC, zC, this), this
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L129-L131` → after: `L56-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L56-L58) · [Before (L129-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L129-L131)

```diff
-       static GetBottomPlaneToRef(qq, Eq) {
-         const gq = qq.m;
-         Eq.normal.x = gq[3] + gq[1], Eq.normal.y = gq[7] + gq[5], Eq.normal.z = gq[11] + gq[9], Eq.d = gq[15] + gq[13], Eq.normalize()
+       toColor4() {
+         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
+         return new NC(this.r, this.g, this.b, CC)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L133-L134` → after: `L60-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L60-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L60-L61) · [Before (L133-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L133-L134)

```diff
-       static GetPlanesToRef(qq, Eq) {
-         lq.GetNearPlaneToRef(qq, Eq[0]), lq.GetFarPlaneToRef(qq, Eq[1]), lq.GetLeftPlaneToRef(qq, Eq[2]), lq.GetRightPlaneToRef(qq, Eq[3]), lq.GetTopPlaneToRef(qq, Eq[4]), lq.GetBottomPlaneToRef(qq, Eq[5])
+       VZC() {
+         return [this.r, this.g, this.b]
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L136-L139` → after: `L63-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L63-L64) · [Before (L136-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L136-L139)

```diff
-       static IsPointInFrustum(qq, Eq) {
-         for (let gq = 0; gq < 6; gq++)
-           if (Eq[gq].dotCoordinate(qq) < 0) return !1;
-         return !0
+       toLuminance() {
+         return .3 * this.r + .59 * this.g + .11 * this.b
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L141-L150` → after: `L66-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L66-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L66-L67) · [Before (L141-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L141-L150)

```diff
-     }
-   },
-   37767: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       d: () => lq
-     });
-     var Yq = gq(37139);
-     class lq {
-       constructor(qq, Eq, gq, lq) {
-         this.normal = new Yq.q(qq, Eq, gq), this.d = lq
+       multiply(CC) {
+         return new WC(this.r * CC.r, this.g * CC.g, this.b * CC.b)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L152-L153` → after: `L69-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L69-L70) · [Before (L152-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L152-L153)

```diff
-       bYq() {
-         return [this.normal.x, this.normal.y, this.normal.z, this.d]
+       multiplyToRef(CC, zC) {
+         return zC.r = this.r * CC.r, zC.g = this.g * CC.g, zC.b = this.b * CC.b, zC
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L155-L156` → after: `L72-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L72-L73) · [Before (L155-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L155-L156)

```diff
-       clone() {
-         return new lq(this.normal.x, this.normal.y, this.normal.z, this.d)
+       multiplyInPlace(CC) {
+         return this.r *= CC.r, this.g *= CC.g, this.b *= CC.b, this
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L158-L159` → after: `L75-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L75-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L75-L76) · [Before (L158-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L158-L159)

```diff
-       getClassName() {
-         return "Plane"
+       multiplyByFloats(CC, zC, ZC) {
+         return new WC(this.r * CC, this.g * zC, this.b * ZC)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L161-L182` → after: `L78-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L78-L79) · [Before (L161-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L161-L182)

```diff
-       getHashCode() {
-         let qq = this.normal.getHashCode();
-         return qq = 397 * qq ^ this.d, qq
-       }
-       normalize() {
-         const qq = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
-         let Eq = 0;
-         return 0 !== qq && (Eq = 1 / qq), this.normal.x *= Eq, this.normal.y *= Eq, this.normal.z *= Eq, this.d *= Eq, this
-       }
-       transform(qq) {
-         const Eq = lq._TmpMatrix;
-         qq.invertToRef(Eq);
-         const gq = Eq.m,
-           Yq = this.normal.x,
-           Oq = this.normal.y,
-           mq = this.normal.z,
- ... (6 more removed lines; see GitHub link above)
+       divide(CC) {
+         throw new ReferenceError("Can not divide a color")
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L184-L205` → after: `L81-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L81-L82) · [Before (L184-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L184-L205)

```diff
-       dotCoordinate(qq) {
-         return this.normal.x * qq.x + this.normal.y * qq.y + this.normal.z * qq.z + this.d
-       }
-       copyFromPoints(qq, Eq, gq) {
-         const Yq = Eq.x - qq.x,
-           lq = Eq.y - qq.y,
-           Oq = Eq.z - qq.z,
-           mq = gq.x - qq.x,
-           xq = gq.y - qq.y,
-           Aq = gq.z - qq.z,
-           cq = lq * Aq - Oq * xq,
-           uq = Oq * mq - Yq * Aq,
-           Bq = Yq * xq - lq * mq,
-           Wq = Math.sqrt(cq * cq + uq * uq + Bq * Bq);
-         let Nq;
-         return Nq = 0 !== Wq ? 1 / Wq : 0, this.normal.x = cq * Nq, this.normal.y = uq * Nq, this.normal.z = Bq * Nq, this.d = -(this.normal.x * qq.x + this.normal.y * qq.y + this.normal.z * qq.z), this
- ... (6 more removed lines; see GitHub link above)
+       divideToRef(CC, zC) {
+         throw new ReferenceError("Can not divide a color")
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L207-L208` → after: `L84-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L84-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L84-L85) · [Before (L207-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L207-L208)

```diff
-       static FromArray(qq) {
-         return new lq(qq[0], qq[1], qq[2], qq[3])
+       divideInPlace(CC) {
+         throw new ReferenceError("Can not divide a color")
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L210-L212` → after: `L87-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L87-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L87-L88) · [Before (L210-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L210-L212)

```diff
-       static FromPoints(qq, Eq, gq) {
-         const Yq = new lq(0, 0, 0, 0);
-         return Yq.copyFromPoints(qq, Eq, gq), Yq
+       minimizeInPlace(CC) {
+         return this.minimizeInPlaceFromFloats(CC.r, CC.g, CC.b)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L214-L216` → after: `L90-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L90-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L90-L91) · [Before (L214-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L214-L216)

```diff
-       static FromPositionAndNormal(qq, Eq) {
-         const gq = new lq(0, 0, 0, 0);
-         return this.FromPositionAndNormalToRef(qq, Eq, gq)
+       maximizeInPlace(CC) {
+         return this.maximizeInPlaceFromFloats(CC.r, CC.g, CC.b)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L218-L219` → after: `L93-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L93-L94) · [Before (L218-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L218-L219)

```diff
-       static FromPositionAndNormalToRef(qq, Eq, gq) {
-         return gq.normal.WG(Eq), gq.normal.normalize(), gq.d = -qq.dot(gq.normal), gq
+       minimizeInPlaceFromFloats(CC, zC, ZC) {
+         return this.r = Math.min(CC, this.r), this.g = Math.min(zC, this.g), this.b = Math.min(ZC, this.b), this
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L221-L223` → after: `L96-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L96-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L96-L97) · [Before (L221-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L221-L223)

```diff
-       static SignedDistanceToPlaneFromPositionAndNormal(qq, Eq, gq) {
-         const lq = -(Eq.x * qq.x + Eq.y * qq.y + Eq.z * qq.z);
-         return Yq.q.Dot(gq, Eq) + lq
+       maximizeInPlaceFromFloats(CC, zC, ZC) {
+         return this.r = Math.max(CC, this.r), this.g = Math.max(zC, this.g), this.b = Math.max(ZC, this.b), this
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L225-L234` → after: `L99-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L99-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L99-L100) · [Before (L225-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L225-L234)

```diff
-     }
-     lq._TmpMatrix = Yq.e.Identity()
-   },
-   38065: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       c: () => Yq
-     });
-     class Yq {
-       constructor(qq, Eq, gq, Yq) {
-         this.x = qq, this.y = Eq, this.width = gq, this.height = Yq
+       floorToRef(CC) {
+         throw new ReferenceError("Can not floor a color")
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L236-L237` → after: `L102-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L102-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L102-L103) · [Before (L236-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L236-L237)

```diff
-       toGlobal(qq, Eq) {
-         return new Yq(this.x * qq, this.y * Eq, this.width * qq, this.height * Eq)
+       floor() {
+         throw new ReferenceError("Can not floor a color")
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L239-L240` → after: `L105-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L105-L106) · [Before (L239-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L239-L240)

```diff
-       toGlobalToRef(qq, Eq, gq) {
-         return gq.x = this.x * qq, gq.y = this.y * Eq, gq.width = this.width * qq, gq.height = this.height * Eq, this
+       fractToRef(CC) {
+         throw new ReferenceError("Can not fract a color")
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L242-L243` → after: `L108-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L108-L109) · [Before (L242-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L242-L243)

```diff
-       clone() {
-         return new Yq(this.x, this.y, this.width, this.height)
+       fract() {
+         throw new ReferenceError("Can not fract a color")
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L245-L286` → after: `L111-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L111-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L111-L112) · [Before (L245-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L245-L286)

```diff
-     }
-   },
-   38649: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => Oq
-     });
-     var Yq = gq(38653);
-     const lq = (qq, Eq, gq) => qq ? qq.getClassName && "Mesh" === qq.getClassName() ? null : !qq.getClassName || "SubMesh" !== qq.getClassName() && "PhysicsBody" !== qq.getClassName() ? qq.clone ? qq.clone() : Array.isArray(qq) ? qq.slice() : gq && "object" === typeof qq ? {
-       ...qq
-     } : null : qq.clone(Eq) : null;
-     class Oq {
-       static DeepCopy(qq, Eq, gq, Oq) {
-         let mq = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         const xq = function(qq) {
-           const Eq = [];
-           do {
- ... (26 more removed lines; see GitHub link above)
+       equals(CC) {
+         return CC && this.r === CC.r && this.g === CC.g && this.b === CC.b
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L288-L331` → after: `L114-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L114-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L114-L147) · [Before (L288-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L288-L331)

```diff
-     }
-   },
-   37872: (qq, Eq, gq) => {
-     function Yq() {
-       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (qq => {
-         const Eq = 16 * Math.random() | 0;
-         return ("x" === qq ? Eq : 3 & Eq | 8).toString(16)
-       }))
-     }
-     gq.d(Eq, {
-       d: () => Yq
-     })
-   },
-   38653: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => Yq
- ... (28 more removed lines; see GitHub link above)
+       equalsFloats(CC, zC, ZC) {
+         return this.dnC(CC, zC, ZC)
+       }
+       dnC(CC, zC, ZC) {
+         return this.r === CC && this.g === zC && this.b === ZC
+       }
+       equalsWithEpsilon(CC) {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wC.e;
+         return (0, bC.WithinEpsilon)(this.r, CC.r, zC) && (0, bC.WithinEpsilon)(this.g, CC.g, zC) && (0, bC.WithinEpsilon)(this.b, CC.b, zC)
+       }
+       Of() {
+         throw new ReferenceError("Can not negate a color")
+       }
+       negateInPlace() {
+         throw new ReferenceError("Can not negate a color")
+       }
+ ... (18 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L333-L355` → after: `L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L149) · [Before (L333-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L333-L355)

```diff
-         const lq = Array.isArray(Eq) ? Eq[0] : Eq;
-         if (void 0 !== gq && !Yq._CheckLimit(lq, gq)) return;
-         const Oq = Yq._FormatMessage(lq),
-           mq = this._Levels[qq],
-           xq = Array.isArray(Eq) ? Eq.slice(1) : [];
-         mq.logFunc && mq.logFunc("BJS - " + Oq, ...xq);
-         const Aq = `<div style='color:${mq.color}'>${Oq}</div><br>`;
-         Yq._AddLogEntry(Aq), Yq._GenerateLimitMessage(lq, qq)
-       }
-       static get LogCache() {
-         return Yq._LogCache
-       }
-       static ClearLogCache() {
-         Yq._LogCache = "", Yq._LogLimitOutputs = {}, Yq.errorsCount = 0
-       }
-       static set LogLevels(qq) {
- ... (7 more removed lines; see GitHub link above)
+         return ZC.r = (0, bC.Clamp)(this.r, CC, zC), ZC.g = (0, bC.Clamp)(this.g, CC, zC), ZC.b = (0, bC.Clamp)(this.b, CC, zC), ZC
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L357-L412` → after: `L151-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L151-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L151-L152) · [Before (L357-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L357-L412)

```diff
-     }
-     Yq.NoneLogLevel = 0, Yq.MessageLogLevel = 1, Yq.WarningLogLevel = 2, Yq.ErrorLogLevel = 4, Yq.AllLogLevel = 7, Yq.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Yq._LogCache = "", Yq._LogLimitOutputs = {}, Yq._Levels =  … [truncated]
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
-     }], Yq.errorsCount = 0, Yq.Log = Yq._LogEnabled.bind(Yq, Yq.MessageLogLevel), Yq.Warn = Yq._LogEnabled.bind(Yq, Yq.WarningLogLevel), Yq.Error = Yq._LogEnabled.bind(Yq, Yq.ErrorLogLevel)
-   },
-   61121: (qq, Eq, gq) => {
- ... (40 more removed lines; see GitHub link above)
+       add(CC) {
+         return new WC(this.r + CC.r, this.g + CC.g, this.b + CC.b)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L414-L416` → after: `L154-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L154-L155) · [Before (L414-L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L414-L416)

```diff
-       bind() {
-         let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         super.bind(qq), this._drawWrapper.effect.setFloat2("texelSize", this.texelSize.x, this.texelSize.y)
+       addInPlace(CC) {
+         return this.r += CC.r, this.g += CC.g, this.b += CC.b, this
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L418-L445` → after: `L157-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L157-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L157-L158) · [Before (L418-L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L418-L445)

```diff
-     }
-     uq.VertexUrl = "fxaa", uq.FragmentUrl = "fxaa", uq.Uniforms = ["texelSize"];
-     class Bq extends Oq.e {
-       getClassName() {
-         return "FxaaPostProcess"
-       }
-       constructor(qq, Eq) {
-         let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
-           lq = arguments.length > 3 ? arguments[3] : void 0,
-           Oq = arguments.length > 4 ? arguments[4] : void 0,
-           mq = arguments.length > 5 ? arguments[5] : void 0,
-           xq = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
-         const Aq = {
-           uniforms: uq.Uniforms,
-           size: "number" === typeof Eq ? Eq : void 0,
-           camera: gq,
- ... (12 more removed lines; see GitHub link above)
+       addInPlaceFromFloats(CC, zC, ZC) {
+         return this.r += CC, this.g += zC, this.b += ZC, this
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L447-L448` → after: `L160-L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L160-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L160-L161) · [Before (L447-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L447-L448)

```diff
-       static _Parse(qq, Eq, gq, Yq) {
-         return mq.d.Parse((() => new Bq(qq.name, qq.options, Eq, qq.renderTargetSamplingMode, gq.Ba(), qq.reusable)), qq, gq, Yq)
+       addToRef(CC, zC) {
+         return zC.r = this.r + CC.r, zC.g = this.g + CC.g, zC.b = this.b + CC.b, zC
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L450-L459` → after: `L163-L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L163-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L163-L164) · [Before (L450-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L450-L459)

```diff
-     }
-     var Wq = gq(38653),
-       Nq = gq(39845),
-       aq = gq(41581),
-       Vq = gq(41561),
-       dq = gq(39644);
-     const jq = 0;
-     class Hq {
-       constructor(qq, Eq, gq) {
-         this.name = qq, this._parentTask = Eq, this._context = gq, this.disabled = !1
+       subtract(CC) {
+         return new WC(this.r - CC.r, this.g - CC.g, this.b - CC.b)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L461-L462` → after: `L166-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L166-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L166-L167) · [Before (L461-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L461-L462)

```diff
-       setInitializeFunc(qq) {
-         this._initFunc = qq
+       subtractToRef(CC, zC) {
+         return zC.r = this.r - CC.r, zC.g = this.g - CC.g, zC.b = this.b - CC.b, zC
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L464-L465` → after: `L169-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L169-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L169-L170) · [Before (L464-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L464-L465)

```diff
-       setExecuteFunc(qq) {
-         this._executeFunc = qq
+       RQC(CC) {
+         return this.r -= CC.r, this.g -= CC.g, this.b -= CC.b, this
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L467-L468` → after: `L172-L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L172-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L172-L173) · [Before (L467-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L467-L468)

```diff
-       _execute() {
-         this.disabled || this._executeFunc(this._context)
+       subtractFromFloats(CC, zC, ZC) {
+         return new WC(this.r - CC, this.g - zC, this.b - ZC)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L470-L471` → after: `L175-L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L175-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L175-L176) · [Before (L470-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L470-L471)

```diff
-       _initialize() {
-         this._initFunc?.(this._context)
+       subtractFromFloatsToRef(CC, zC, ZC, QC) {
+         return QC.r = this.r - CC, QC.g = this.g - zC, QC.b = this.b - ZC, QC
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L473-L474` → after: `L178-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L178-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L178-L179) · [Before (L473-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L473-L474)

```diff
-       _isValid() {
-         return void 0 !== this._executeFunc ? null : "Execute function is not set (call setExecuteFunc to set it)"
+       clone() {
+         return new WC(this.r, this.g, this.b)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L476-L480` → after: `L181-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L181-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L181-L182) · [Before (L476-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L476-L480)

```diff
-       _dispose() {}
-     }
-     class oq extends Hq {
-       static IsObjectListPass(qq) {
-         return void 0 !== qq.setObjectList
+       Av(CC) {
+         return this.r = CC.r, this.g = CC.g, this.b = CC.b, this
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L482-L483` → after: `L184-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L184-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L184-L185) · [Before (L482-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L482-L483)

```diff
-       get objectList() {
-         return this._objectList
+       L_(CC, zC, ZC) {
+         return this.r = CC, this.g = zC, this.b = ZC, this
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L485-L486` → after: `L187-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L187-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L187-L188) · [Before (L485-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L485-L486)

```diff
-       setObjectList(qq) {
-         this._objectList = qq
+       set(CC, zC, ZC) {
+         return this.L_(CC, zC, ZC)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L488-L489` → after: `L190-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L190-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L190-L191) · [Before (L488-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L488-L489)

```diff
-       constructor(qq, Eq, gq, Yq) {
-         super(qq, Eq, gq), this._engine = Yq
+       Q_(CC) {
+         return this.r = this.g = this.b = CC, this
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L491-L493` → after: `L193-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L193-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L193-L197) · [Before (L491-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L491-L493)

```diff
-       _isValid() {
-         const qq = super._isValid();
-         return qq || (void 0 !== this._objectList ? null : "Object list is not set (call setObjectList to set it)")
+       toHexString() {
+         const CC = Math.round(255 * this.r),
+           zC = Math.round(255 * this.g),
+           ZC = Math.round(255 * this.b);
+         return "#" + (0, bC.ToHex)(CC) + (0, bC.ToHex)(zC) + (0, bC.ToHex)(ZC)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L495-L498` → after: `L199-L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L199-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L199-L265) · [Before (L495-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L495-L498)

```diff
-     }
-     class Pq extends Hq {
-       static IsRenderPass(qq) {
-         return void 0 !== qq.setRenderTarget
+       fromHexString(CC) {
+         return "#" !== CC.substring(0, 1) || 7 !== CC.length || (this.r = parseInt(CC.substring(1, 3), 16) / 255, this.g = parseInt(CC.substring(3, 5), 16) / 255, this.b = parseInt(CC.substring(5, 7), 16) / 255), this
+       }
+       toHSV() {
+         return this.toHSVToRef(new WC)
+       }
+       toHSVToRef(CC) {
+         const zC = this.r,
+           ZC = this.g,
+           QC = this.b,
+           wC = Math.max(zC, ZC, QC),
+           bC = Math.min(zC, ZC, QC);
+         let nC = 0,
+           fC = 0;
+         const oC = wC,
+           qC = wC - bC;
+ ... (51 more added lines; see GitHub link above)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L500-L501` → after: `L267-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L267-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L267-L268) · [Before (L500-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L500-L501)

```diff
-       get renderTarget() {
-         return this._renderTarget
+       static LerpToRef(CC, zC, ZC, QC) {
+         QC.r = CC.r + (zC.r - CC.r) * ZC, QC.g = CC.g + (zC.g - CC.g) * ZC, QC.b = CC.b + (zC.b - CC.b) * ZC
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L503-L504` → after: `L270-L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L270-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L270-L288) · [Before (L503-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L503-L504)

```diff
-       get renderTargetDepth() {
-         return this._renderTargetDepth
+       static Hermite(CC, zC, ZC, QC, wC) {
+         const bC = wC * wC,
+           nC = wC * bC,
+           fC = 2 * nC - 3 * bC + 1,
+           oC = -2 * nC + 3 * bC,
+           qC = nC - 2 * bC + wC,
+           FC = nC - bC,
+           NC = CC.r * fC + ZC.r * oC + zC.r * qC + QC.r * FC,
+           MC = CC.g * fC + ZC.g * oC + zC.g * qC + QC.g * FC,
+           gC = CC.b * fC + ZC.b * oC + zC.b * qC + QC.b * FC;
+         return new WC(NC, MC, gC)
+       }
+       static Hermite1stDerivative(CC, zC, ZC, QC, wC) {
+         const bC = WC.Black();
+         return this.Hermite1stDerivativeToRef(CC, zC, ZC, QC, wC, bC), bC
+       }
+ ... (3 more added lines; see GitHub link above)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L506-L507` → after: `L290-L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L290-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L290-L291) · [Before (L506-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L506-L507)

```diff
-       get frameGraphRenderTarget() {
-         return this._frameGraphRenderTarget
+       static Red() {
+         return new WC(1, 0, 0)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L509-L510` → after: `L293-L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L293-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L293-L294) · [Before (L509-L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L509-L510)

```diff
-       constructor(qq, Eq, gq, Yq) {
-         super(qq, Eq, gq), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = Yq
+       static Green() {
+         return new WC(0, 1, 0)
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L512-L513` → after: `L296-L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L296-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L296-L297) · [Before (L512-L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L512-L513)

```diff
-       setRenderTarget(qq) {
-         this._renderTarget = qq
+       static Blue() {
+         return new WC(0, 0, 1)
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L515-L516` → after: `L299-L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L299-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L299-L300) · [Before (L515-L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L515-L516)

```diff
-       setRenderTargetDepth(qq) {
-         this._renderTargetDepth = qq
+       static Black() {
+         return new WC(0, 0, 0)
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L518-L522` → after: `L302-L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L302-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L302-L303) · [Before (L518-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L518-L522)

```diff
-       addDependencies(qq) {
-         if (void 0 !== qq)
-           if (Array.isArray(qq))
-             for (const Eq of qq) this._dependencies.add(Eq);
-           else this._dependencies.add(qq)
+       static get BlackReadOnly() {
+         return WC._BlackReadOnly
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L524-L531` → after: `L305-L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L305-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L305-L306) · [Before (L524-L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L524-L531)

```diff
-       collectDependencies(qq) {
-         const Eq = this._dependencies.keys();
-         for (let gq = Eq.next(); !0 !== gq.done; gq = Eq.next()) qq.add(gq.value);
-         if (void 0 !== this._renderTarget)
-           if (Array.isArray(this._renderTarget))
-             for (const gq of this._renderTarget) void 0 !== gq && qq.add(gq);
-           else qq.add(this._renderTarget);
-         void 0 !== this._renderTargetDepth && qq.add(this._renderTargetDepth)
+       static White() {
+         return new WC(1, 1, 1)
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L533-L536` → after: `L308-L309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L308-L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L308-L309) · [Before (L533-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L533-L536)

```diff
-       setOutputLayerAndFaceIndices(qq) {
-         const Eq = this.frameGraphRenderTarget.renderTargetWrapper;
-         if (Eq)
-           for (const gq of qq) Eq.setLayerAndFaceIndex(gq.targetIndex, gq.layerIndex, gq.faceIndex)
+       static Purple() {
+         return new WC(.5, 0, .5)
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L538-L539` → after: `L311-L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L311-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L311-L312) · [Before (L538-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L538-L539)

```diff
-       _initialize() {
-         this._frameGraphRenderTarget = this._context.createRenderTarget(this.name, this._renderTarget, this._renderTargetDepth, this.depthReadOnly, this.stencilReadOnly), super._initialize()
+       static Magenta() {
+         return new WC(1, 0, 1)
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L541-L542` → after: `L314-L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L314-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L314-L315) · [Before (L541-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L541-L542)

```diff
-       _execute() {
-         this._context.bindRenderTarget(this._frameGraphRenderTarget), super._execute(), this._context.restoreDefaultFramebuffer()
+       static Yellow() {
+         return new WC(1, 1, 0)
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L544-L546` → after: `L317-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L317-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L317-L318) · [Before (L544-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L544-L546)

```diff
-       _isValid() {
-         const qq = super._isValid();
-         return qq || (void 0 !== this._renderTarget || void 0 !== this.renderTargetDepth ? null : "Render target and render target depth cannot both be undefined.")
+       static Gray() {
+         return new WC(.5, .5, .5)
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L548-L549` → after: `L320-L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L320-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L320-L324) · [Before (L548-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L548-L549)

```diff
-       _dispose() {
-         this._frameGraphRenderTarget?.dispose()
+       static Teal() {
+         return new WC(0, 1, 1)
+       }
+       static Random() {
+         return new WC(Math.random(), Math.random(), Math.random())
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L552` → after: `L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L327) · [Before (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L552)

```diff
-     var Qq = gq(37156);
+     WC._V8PerformanceHack = new WC(.5, .5, .5), WC._BlackReadOnly = WC.Black();
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L554-L555` → after: `L329-L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L329-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L329-L334) · [Before (L554-L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L554-L555)

```diff
-       get name() {
-         return this._name
+       constructor() {
+         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+           zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+           ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
+           QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
+         this.r = CC, this.g = zC, this.b = ZC, this.a = QC
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L557-L558` → after: `L336-L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L336-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L336-L337) · [Before (L557-L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L557-L558)

```diff
-       set name(qq) {
-         this._name = qq
+       VZC() {
+         return [this.r, this.g, this.b, this.a]
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L560-L561` → after: `L339-L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L339-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L339-L341) · [Before (L560-L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L560-L561)

```diff
-       get disabled() {
-         return this._disabled
+       toArray(CC) {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         return CC[zC] = this.r, CC[zC + 1] = this.g, CC[zC + 2] = this.b, CC[zC + 3] = this.a, this
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L563-L564` → after: `L343-L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L343-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L343-L345) · [Before (L563-L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L563-L564)

```diff
-       set disabled(qq) {
-         this._disabled = qq
+       azC(CC) {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         return this.r = CC[zC], this.g = CC[zC + 1], this.b = CC[zC + 2], this.a = CC[zC + 3], this
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L566-L567` → after: `L347-L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L347-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L347-L348) · [Before (L566-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L566-L567)

```diff
-       get passes() {
-         return this._passes
+       equals(CC) {
+         return CC && this.r === CC.r && this.g === CC.g && this.b === CC.b && this.a === CC.a
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L569-L570` → after: `L350-L351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L350-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L350-L351) · [Before (L569-L570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L569-L570)

```diff
-       get passesDisabled() {
-         return this._passesDisabled
+       add(CC) {
+         return new NC(this.r + CC.r, this.g + CC.g, this.b + CC.b, this.a + CC.a)
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L572-L632` → after: `L353-L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L353-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L353-L354) · [Before (L572-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L572-L632)

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
-       constructor(qq, Eq) {
-         this._passes = [], this._passesDisabled = [], this._disabled = !1, this.onTexturesAllocatedObservable = new Qq.d, this.onBeforeTaskExecute = new Qq.d, this.onAfterTaskExecute = new Qq.d, this.name = qq, this._frameGraph = Eq, this._reset()
-       }
-       _reset() {
- ... (45 more removed lines; see GitHub link above)
+       addToRef(CC, zC) {
+         return zC.r = this.r + CC.r, zC.g = this.g + CC.g, zC.b = this.b + CC.b, zC.a = this.a + CC.a, zC
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L634-L651` → after: `L356-L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L356-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L356-L357) · [Before (L634-L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L634-L651)

```diff
-       _execute() {
-         const qq = this._disabled && this._passesDisabled.length > 0 ? this._passesDisabled : this._passes;
-         this.onBeforeTaskExecute.notifyObservers(this), this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
-         try {
-           for (const Eq of qq) Eq._execute()
-         } finally {
-           this._frameGraph.engine._debugPopGroup?.()
-         }
-         this.onAfterTaskExecute.notifyObservers(this)
-       }
-       _initializePasses() {
-         this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
-         try {
-           for (const qq of this._passes) qq._initialize();
-           for (const qq of this._passesDisabled) qq._initialize()
-         } finally {
- ... (2 more removed lines; see GitHub link above)
+       addInPlace(CC) {
+         return this.r += CC.r, this.g += CC.g, this.b += CC.b, this.a += CC.a, this
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L653-L658` → after: `L359-L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L359-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L359-L360) · [Before (L653-L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L653-L658)

```diff
-       _checkSameRenderTarget(qq, Eq) {
-         if (null === qq || null === Eq) return qq === Eq;
-         if (qq.length !== Eq.length) return !1;
-         for (let gq = 0; gq < qq.length; gq++)
-           if (qq[gq] !== Eq[gq]) return !1;
-         return !0
+       addInPlaceFromFloats(CC, zC, ZC, QC) {
+         return this.r += CC, this.g += zC, this.b += ZC, this.a += QC, this
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L660-L663` → after: `L362-L363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L362-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L362-L363) · [Before (L660-L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L660-L663)

```diff
-     }
-     class tq extends yq {
-       get alphaMode() {
-         return this.postProcess.alphaMode
+       subtract(CC) {
+         return new NC(this.r - CC.r, this.g - CC.g, this.b - CC.b, this.a - CC.a)
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L665-L666` → after: `L365-L366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L365-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L365-L366) · [Before (L665-L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L665-L666)

```diff
-       set alphaMode(qq) {
-         this.postProcess.alphaMode = qq
+       subtractToRef(CC, zC) {
+         return zC.r = this.r - CC.r, zC.g = this.g - CC.g, zC.b = this.b - CC.b, zC.a = this.a - CC.a, zC
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L668-L669` → after: `L368-L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L368-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L368-L369) · [Before (L668-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L668-L669)

```diff
-       get drawWrapper() {
-         return this._postProcessDrawWrapper
+       RQC(CC) {
+         return this.r -= CC.r, this.g -= CC.g, this.b -= CC.b, this.a -= CC.a, this
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L671-L672` → after: `L371-L372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L371-L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L371-L372) · [Before (L671-L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L671-L672)

```diff
-       constructor(qq, Eq, gq) {
-         super(qq, Eq), this.sourceSamplingMode = 2, this.depthReadOnly = !1, this.stencilReadOnly = !1, this.disableColorWrite = !1, this.drawBackFace = !1, this.depthTest = !0, this.postProcess = gq, this._postProcessDrawWrapper = this.postProcess.drawWrapper, this.outputTexture … [truncated]
+       subtractFromFloats(CC, zC, ZC, QC) {
+         return new NC(this.r - CC, this.g - zC, this.b - ZC, this.a - QC)
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L674-L675` → after: `L374-L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L374-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L374-L375) · [Before (L674-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L674-L675)

```diff
-       isReady() {
-         return this.postProcess.isReady()
+       subtractFromFloatsToRef(CC, zC, ZC, QC, wC) {
+         return wC.r = this.r - CC, wC.g = this.g - zC, wC.b = this.b - ZC, wC.a = this.a - QC, wC
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L677-L678` → after: `L377-L378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L377-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L377-L378) · [Before (L677-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L677-L678)

```diff
-       getClassName() {
-         return "FrameGraphPostProcessTask"
+       scale(CC) {
+         return new NC(this.r * CC, this.g * CC, this.b * CC, this.a * CC)
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L680-L682` → after: `L380-L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L380-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L380-L391) · [Before (L680-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L680-L682)

```diff
-       record() {
-         let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
-           Eq = arguments.length > 1 ? arguments[1] : void 0,
+       scaleInPlace(CC) {
+         return this.r *= CC, this.g *= CC, this.b *= CC, this.a *= CC, this
+       }
+       scaleToRef(CC, zC) {
+         return zC.r = this.r * CC, zC.g = this.g * CC, zC.b = this.b * CC, zC.a = this.a * CC, zC
+       }
+       scaleAndAddToRef(CC, zC) {
+         return zC.r += this.r * CC, zC.g += this.g * CC, zC.b += this.b * CC, zC.a += this.a * CC, zC
+       }
+       clampToRef() {
+         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+           zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L684-L703` → after: `L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L393) · [Before (L684-L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L684-L703)

```diff
-         if (void 0 === this.sourceTexture && void 0 === this.targetTexture) throw new Error(`FrameGraphPostProcessTask "${this.name}": sourceTexture or targetTexture is required`);
-         const Yq = void 0 !== this.sourceTexture ? this._frameGraph.textureManager.getTextureCreationOptions(this.sourceTexture) : void 0;
-         if (Yq && (Yq.options.samples = 1), this._frameGraph.textureManager.resolveDanglingHandle(this.outputTexture, this.targetTexture, this.name, Yq), void 0 !== this.depthAttachmentTexture && this._frameGraph.textureManager.resolveDanglingHandle(this.outputDepthAttachmentText … [truncated]
-           const qq = this._frameGraph.textureManager.getTextureAbsoluteDimensions(Yq);
-           this._sourceWidth = qq.width, this._sourceHeight = qq.height
-         }
-         const lq = this._frameGraph.textureManager.getTextureDescription(this.outputTexture);
-         this._outputWidth = lq.size.width, this._outputHeight = lq.size.height;
-         const Oq = this._frameGraph.addRenderPass(this.name);
-         if (Oq.depthReadOnly = this.depthReadOnly, Oq.stencilReadOnly = this.stencilReadOnly, Oq.addDependencies(this.sourceTexture), Oq.setRenderTarget(this.outputTexture), Oq.setRenderTargetDepth(this.depthAttachmentTexture), Oq.setExecuteFunc((qq => {
-             qq.pushDebugGroup(`Apply post-process (${this.name})`), void 0 !== this.sourceTexture && qq.setTextureSamplingMode(this.sourceTexture, this.sourceSamplingMode), Eq?.(qq), this.viewport && qq.setViewport(this.viewport), qq.applyFullScreenEffect(this._postProcessDrawWra … [truncated]
-               void 0 !== this.sourceTexture && qq.bindTextureHandle(this._postProcessDrawWrapper.effect, "textureSampler", this.sourceTexture), gq?.(qq), this.postProcess.bind()
-             }), this.stencilState, this.disableColorWrite, this.drawBackFace, this.depthTest, void 0 !== this.viewport), qq.restoreDefaultFramebuffer(), qq.popDebugGroup()
-           })), !qq) {
-           const qq = this._frameGraph.addRenderPass(this.name + "_disabled", !0);
-           qq.depthReadOnly = this.depthReadOnly, qq.stencilReadOnly = this.stencilReadOnly, qq.addDependencies(this.sourceTexture), qq.setRenderTarget(this.outputTexture), qq.setRenderTargetDepth(this.depthAttachmentTexture), qq.setExecuteFunc((qq => {
- ... (4 more removed lines; see GitHub link above)
+         return ZC.r = (0, bC.Clamp)(this.r, CC, zC), ZC.g = (0, bC.Clamp)(this.g, CC, zC), ZC.b = (0, bC.Clamp)(this.b, CC, zC), ZC.a = (0, bC.Clamp)(this.a, CC, zC), ZC
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L705-L706` → after: `L395-L396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L395-L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L395-L396) · [Before (L705-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L705-L706)

```diff
-       dispose() {
-         this.postProcess.dispose(), super.dispose()
+       multiply(CC) {
+         return new NC(this.r * CC.r, this.g * CC.g, this.b * CC.b, this.a * CC.a)
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L708-L711` → after: `L398-L399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L398-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L398-L399) · [Before (L708-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L708-L711)

```diff
-     }
-     class rq extends tq {
-       constructor(qq, Eq, gq) {
-         super(qq, Eq, gq || new uq(qq, Eq.engine))
+       multiplyToRef(CC, zC) {
+         return zC.r = this.r * CC.r, zC.g = this.g * CC.g, zC.b = this.b * CC.b, zC.a = this.a * CC.a, zC
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L713-L714` → after: `L401-L402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L401-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L401-L402) · [Before (L713-L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L713-L714)

```diff
-       getClassName() {
-         return "FrameGraphFXAATask"
+       multiplyInPlace(CC) {
+         return this.r *= CC.r, this.g *= CC.g, this.b *= CC.b, this.a *= CC.a, this
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L716-L721` → after: `L404-L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L404-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L404-L405) · [Before (L716-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L716-L721)

```diff
-       record() {
-         let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
-           Eq = arguments.length > 1 ? arguments[1] : void 0,
-           gq = arguments.length > 2 ? arguments[2] : void 0;
-         const Yq = super.record(qq, Eq, gq);
-         return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, Yq
+       multiplyByFloats(CC, zC, ZC, QC) {
+         return new NC(this.r * CC, this.g * zC, this.b * ZC, this.a * QC)
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L723-L727` → after: `L407-L457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L407-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L407-L457) · [Before (L723-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L723-L727)

```diff
-     }
-     var vq = gq(41577);
-     class hq extends tq {
-       constructor(qq, Eq, gq) {
-         super(qq, Eq, gq || new vq.f(qq, Eq.engine))
+       divide(CC) {
+         throw new ReferenceError("Can not divide a color")
+       }
+       divideToRef(CC, zC) {
+         throw new ReferenceError("Can not divide a color")
+       }
+       divideInPlace(CC) {
+         throw new ReferenceError("Can not divide a color")
+       }
+       minimizeInPlace(CC) {
+         return this.r = Math.min(this.r, CC.r), this.g = Math.min(this.g, CC.g), this.b = Math.min(this.b, CC.b), this.a = Math.min(this.a, CC.a), this
+       }
+       maximizeInPlace(CC) {
+         return this.r = Math.max(this.r, CC.r), this.g = Math.max(this.g, CC.g), this.b = Math.max(this.b, CC.b), this.a = Math.max(this.a, CC.a), this
+       }
+       minimizeInPlaceFromFloats(CC, zC, ZC, QC) {
+ ... (35 more added lines; see GitHub link above)
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L730` → after: `L460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L460) · [Before (L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L730)

```diff
-         return "FrameGraphPassTask"
+         return "Color4"
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L732-L744` → after: `L462-L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L462-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L462-L464) · [Before (L732-L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L732-L744)

```diff
-     }
-     var nq = gq(39838),
-       bq = gq(39919),
-       iq = gq(39876),
-       Zq = gq(39993),
-       fq = gq(37289);
-     class Mq {
-       getRenderCamera(qq) {
-         if (this._renderCamera) return this._renderCamera;
-         {
-           let Eq;
-           return Eq = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, qq && Eq && Eq.isRigCamera ? Eq.rigParent : Eq
-         }
+       getHashCode() {
+         let CC = 255 * this.r | 0;
+         return CC = 397 * CC ^ 255 * this.g, CC = 397 * CC ^ 255 * this.b, CC = 397 * CC ^ 255 * this.a, CC
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L746-L813` → after: `L466-L533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L466-L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L466-L533) · [Before (L746-L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L746-L813)

```diff
-       setRenderCamera(qq) {
-         this._renderCamera = qq
-       }
-       _getSharedGizmoLight() {
-         return this._sharedGizmoLight || (this._sharedGizmoLight = new Zq.d("shared gizmo light", new cq.q(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = fq.d.Gray()), this._sharedGizmoLight
-       }
-       static get DefaultUtilityLayer() {
-         return null == Mq._DefaultUtilityLayer ? Mq._CreateDefaultUtilityLayerFromScene(Aq.b.LastCreatedScene) : Mq._DefaultUtilityLayer
-       }
-       static _CreateDefaultUtilityLayerFromScene(qq) {
-         return Mq._DefaultUtilityLayer = new Mq(qq), Mq._DefaultUtilityLayer.originalScene.MJ.addOnce((() => {
-           Mq._DefaultUtilityLayer = null
-         })), Mq._DefaultUtilityLayer
-       }
-       static get DefaultKeepDepthUtilityLayer() {
-         return null == Mq._DefaultKeepDepthUtilityLayer ? Mq._CreateDefaultKeepUtilityLayerFromScene(Aq.b.LastCreatedScene) : Mq._DefaultKeepDepthUtilityLayer
- ... (52 more removed lines; see GitHub link above)
+       clone() {
+         return (new NC).Av(this)
+       }
+       Av(CC) {
+         return this.r = CC.r, this.g = CC.g, this.b = CC.b, this.a = CC.a, this
+       }
+       L_(CC, zC, ZC, QC) {
+         return this.r = CC, this.g = zC, this.b = ZC, this.a = QC, this
+       }
+       set(CC, zC, ZC, QC) {
+         return this.L_(CC, zC, ZC, QC)
+       }
+       Q_(CC) {
+         return this.r = this.g = this.b = this.a = CC, this
+       }
+       toHexString() {
+ ... (52 more added lines; see GitHub link above)
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L815-L816` → after: `L535-L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L535-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L535-L537) · [Before (L815-L816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L815-L816)

```diff
-       dispose() {
-         this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.MJ.remove(this._sceneDisposeObserver), this._originalPointerObserver && t … [truncated]
+       static Hermite1stDerivativeToRef(CC, zC, ZC, QC, wC, bC) {
+         const nC = wC * wC;
+         bC.r = 6 * (nC - wC) * CC.r + (3 * nC - 4 * wC + 1) * zC.r + 6 * (-nC + wC) * ZC.r + (3 * nC - 2 * wC) * QC.r, bC.g = 6 * (nC - wC) * CC.g + (3 * nC - 4 * wC + 1) * zC.g + 6 * (-nC + wC) * ZC.g + (3 * nC - 2 * wC) * QC.g, bC.b = 6 * (nC - wC) * CC.b + (3 * nC - 4 * wC + 1 … [truncated]
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L818-L819` → after: `L539-L564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L539-L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L539-L564) · [Before (L818-L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L818-L819)

```diff
-       _updateCamera() {
-         this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
+       static FromColor3(CC) {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         return new NC(CC.r, CC.g, CC.b, zC)
+       }
+       static FromArray(CC) {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         return new NC(CC[zC], CC[zC + 1], CC[zC + 2], CC[zC + 3])
+       }
+       static FromArrayToRef(CC) {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+           ZC = arguments.length > 2 ? arguments[2] : void 0;
+         ZC.r = CC[zC], ZC.g = CC[zC + 1], ZC.b = CC[zC + 2], ZC.a = CC[zC + 3]
+       }
+       static FromInts(CC, zC, ZC, QC) {
+         return new NC(CC / 255, zC / 255, ZC / 255, QC / 255)
+       }
+ ... (10 more added lines; see GitHub link above)
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L822-L845` → after: `L567-L570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L567-L570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L567-L570) · [Before (L822-L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L822-L845)

```diff
-     Mq._DefaultUtilityLayer = null, Mq._DefaultKeepDepthUtilityLayer = null;
-     const Tq = {
-       FindMainCamera: function(qq) {
-         return qq.findMainCamera()
-       },
-       FindMainObjectRenderer: function(qq) {
-         return qq.findMainObjectRenderer()
-       },
-       CreateUtilityLayerRenderer: function(qq) {
-         let Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         const gq = qq.PV,
-           Yq = new Mq(gq, Eq, !0);
-         Yq.utilityLayerScene.activeCamera = gq.activeCamera;
-         let lq = Tq.FindMainCamera(gq.frameGraph);
-         !lq && gq.cameras.length > 0 && (lq = gq.cameras[0]), lq && (Yq.setRenderCamera(lq), Yq.utilityLayerScene.activeCamera = lq);
-         const Oq = gq.onAfterRenderObservable.add((() => {
- ... (8 more removed lines; see GitHub link above)
+     NC._V8PerformanceHack = new NC(.5, .5, .5, .5);
+     class MC {}
+     MC.Color3 = (0, QC.d)(3, WC.Black), MC.Color4 = (0, QC.d)(3, (() => new NC(0, 0, 0, 0)));
+     let gC = !1;
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L847-L886` → after: `L572-L587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L572-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L572-L587) · [Before (L847-L886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L847-L886)

```diff
-     function Sq(qq, Eq, gq, Yq) {
-       let lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
-         Oq = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         mq = arguments.length > 6 ? arguments[6] : void 0,
-         xq = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
-         Aq = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
-       const {
-         height: cq,
-         width: uq
-       } = Rq(qq, Eq, gq);
-       if (!cq || !uq) return void Wq.b.Error("Invalid 'size' parameter !");
-       const Bq = Eq.ZJ();
-       let aq = Bq.activeCamera !== Eq;
-       if (Bq.frameGraph) {
-         const qq = Tq.FindMainObjectRenderer(Bq.frameGraph);
-         qq && (aq = qq.camera !== Eq)
- ... (24 more removed lines; see GitHub link above)
+     function SC() {
+       gC || (gC = !0, Object.defineProperties(WC.prototype, {
+         dimension: {
+           value: [3]
+         },
+         rank: {
+           value: 1
+         }
+       }), Object.defineProperties(NC.prototype, {
+         dimension: {
+           value: [4]
+         },
+         rank: {
+           value: 1
+         }
+       }), (0, nC.d)("BABYLON.Color3", WC), (0, nC.d)("BABYLON.Color4", NC))
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L888-L898` → after: `L589-L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L589-L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L589-L603) · [Before (L888-L898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L888-L898)

```diff
-     async function pq(qq, Eq, gq) {
-       let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
-         lq = arguments.length > 4 ? arguments[4] : void 0,
-         Oq = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         mq = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-         xq = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
-       return await new Promise(((Aq, cq) => {
-         Sq(qq, Eq, gq, (qq => {
-           "undefined" !== typeof qq ? Aq(qq) : cq(new Error("Data is undefined"))
-         }), Yq, xq, lq, Oq, mq)
-       }))
+   },
+   36968: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => bC,
+       g: () => QC,
+       i: () => wC
+     });
+     const QC = 1 / 2.2,
+       wC = 2.2;
+     Math.sqrt(5);
+     let bC = .001
+   },
+   36991: (CC, zC, ZC) => {
+     function QC(CC) {
+       return parseInt(CC.toString().replace(/\W/g, ""))
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L900-L911` → after: `L605-L608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L605-L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L605-L608) · [Before (L900-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L900-L911)

```diff
-     async function Gq(qq, Eq, gq, Yq) {
-       let lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
-         Oq = arguments.length > 5 ? arguments[5] : void 0,
-         mq = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
-       return await new Promise((xq => {
-         Sq(qq, Eq, {
-           width: gq,
-           height: Yq
-         }, (() => {
-           xq()
-         }), lq, !0, Oq, mq)
-       }))
+ 
+     function wC(CC, zC) {
+       let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
+       return Math.abs(CC - zC) <= ZC
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L914-L986` → after: `L611-L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L611-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L611-L613) · [Before (L914-L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L914-L986)

```diff
-     function Lq(qq, Eq, Oq, mq) {
-       let xq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
-         Aq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
-         cq = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-         uq = arguments.length > 7 ? arguments[7] : void 0,
-         Nq = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
-         jq = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
-         Hq = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
-         oq = arguments.length > 11 ? arguments[11] : void 0,
-         Pq = arguments.length > 12 ? arguments[12] : void 0,
-         Qq = arguments.length > 13 ? arguments[13] : void 0,
-         yq = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
-         tq = arguments.length > 15 ? arguments[15] : void 0;
-       const rq = Eq.ZJ();
-       if (rq.frameGraph) return void kq(rq.frameGraph, Eq, Oq, xq, Aq, cq, uq, oq, Qq, !mq).then((qq => {
-         mq && mq(qq)
- ... (57 more removed lines; see GitHub link above)
+     function bC(CC, zC, ZC) {
+       let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
+       return CC < zC - QC || CC > ZC + QC
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L988-L1003` → after: `L615-L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L615-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L615-L617) · [Before (L988-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L988-L1003)

```diff
-     async function Jq(qq, Eq, gq) {
-       let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
-         lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
-         Oq = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         mq = arguments.length > 6 ? arguments[6] : void 0,
-         xq = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
-         Aq = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
-         cq = !(arguments.length > 9 && void 0 !== arguments[9]) || arguments[9],
-         uq = arguments.length > 10 ? arguments[10] : void 0,
-         Bq = arguments.length > 11 ? arguments[11] : void 0,
-         Wq = arguments.length > 12 ? arguments[12] : void 0;
-       return await new Promise(((Nq, aq) => {
-         Lq(qq, Eq, gq, (qq => {
-           "undefined" !== typeof qq ? Nq(qq) : aq(new Error("Data is undefined"))
-         }), Yq, lq, Oq, mq, xq, Aq, cq, uq, Bq, Wq)
-       }))
+ 
+     function nC(CC, zC) {
+       return CC === zC ? CC : Math.random() * (zC - CC) + CC
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L1005-L1092` → after: `L619-L697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L619-L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L619-L697) · [Before (L1005-L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L1005-L1092)

```diff
-     async function kq(qq, Eq, gq) {
-       let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
-         lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
-         Oq = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         mq = arguments.length > 6 ? arguments[6] : void 0,
-         xq = arguments.length > 7 ? arguments[7] : void 0,
-         Aq = arguments.length > 8 ? arguments[8] : void 0,
-         cq = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
-         uq = arguments.length > 10 ? arguments[10] : void 0;
-       const Bq = qq.engine,
-         Wq = qq.textureManager,
-         {
-           height: Nq,
-           width: Vq,
-           finalWidth: dq,
-           finalHeight: Hq
- ... (72 more removed lines; see GitHub link above)
+ 
+     function fC(CC, zC, ZC) {
+       return CC + (zC - CC) * ZC
+     }
+ 
+     function oC(CC, zC, ZC) {
+       let QC = pC(zC - CC, 360);
+       return QC > 180 && (QC -= 360), CC + QC * NC(ZC)
+     }
+ 
+     function qC(CC, zC, ZC) {
+       let QC;
+       return QC = CC != zC ? NC((ZC - CC) / (zC - CC)) : 0, QC
+     }
+ 
+     function FC(CC, zC, ZC, QC, wC) {
+ ... (63 more added lines; see GitHub link above)
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L1096-L1108` → after: `L701-L784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L701-L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L701-L784) · [Before (L1096-L1108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L1096-L1108)

```diff
-       let Yq = 0,
-         lq = 0,
-         Oq = 0,
-         mq = 0;
-       if ("object" === typeof gq) {
-         const xq = gq.precision ? Math.abs(gq.precision) : 1;
-         gq.width && gq.height ? (Yq = gq.height * xq, lq = gq.width * xq) : gq.width && !gq.height ? (lq = gq.width * xq, Yq = Math.round(lq / qq.getAspectRatio(Eq))) : gq.height && !gq.width ? (Yq = gq.height * xq, lq = Math.round(Yq * qq.getAspectRatio(Eq))) : (lq = Math.round( … [truncated]
-       } else isNaN(gq) || (Yq = gq, lq = gq, Oq = gq, mq = gq);
-       return lq && (lq = Math.floor(lq)), Yq && (Yq = Math.floor(Yq)), Oq && (Oq = Math.floor(Oq)), mq && (mq = Math.floor(mq)), {
-         height: 0 | Yq,
-         width: 0 | lq,
-         finalWidth: 0 | Oq,
-         finalHeight: 0 | mq
+       let QC;
+       return QC = Math.abs(zC - CC) <= ZC ? zC : CC + Math.sign(zC - CC) * ZC, QC
+     }
+ 
+     function IC(CC, zC, ZC) {
+       const QC = RC(CC, zC);
+       let wC;
+       return wC = -ZC < QC && QC < ZC ? zC : JC(CC, zC = CC + QC, ZC), wC
+     }
+ 
+     function iC(CC, zC, ZC) {
+       return (CC - zC) / (ZC - zC)
+     }
+ 
+     function vC(CC, zC, ZC) {
+       return (ZC - zC) * CC + zC
+ ... (68 more added lines; see GitHub link above)
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L1111-L1119` → after: `L787-L793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L787-L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L787-L793) · [Before (L1111-L1119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L1111-L1119)

```diff
-     const Uq = {
-       CreateScreenshot: Sq,
-       CreateScreenshotAsync: pq,
-       CreateScreenshotWithResizeAsync: Gq,
-       CreateScreenshotUsingRenderTarget: Lq,
-       CreateScreenshotUsingRenderTargetAsync: Jq,
-       CreateScreenshotForFrameGraphAsync: kq
-     };
-     let Fq = !1;
+   },
+   37002: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => bC,
+       d: () => wC
+     });
+     const QC = {};
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L1121-L1124` → after: `L795-L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L795-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/232.js#L795-L800) · [Before (L1121-L1124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/232.js#L1121-L1124)

```diff
-     function sq() {
-       if (Fq) return;
-       Fq = !0;
-       Nq.f.CreateScreenshot = Sq, Nq.f.CreateScreenshotAsync = pq, Nq.f.CreateScreenshotUsingRenderTarget = Lq, Nq.f.CreateScreenshotUsingRenderTargetAsync = Jq
+     function wC(CC, zC) {
+       QC[CC] = zC
+     }
+ 
+     function bC(CC) {
+       return QC[CC]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/233.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/233.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925)

#### 1. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/233.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/233.js#L4)

```diff
-   37758: (qq, Eq, gq) => {
+   36985: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L8-L138` → after: `L8-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L8-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/233.js#L8-L23) · [Before (L8-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/233.js#L8-L138)

```diff
-     var Yq = gq(37767);
-     class lq {
-       static GetPlanes(qq) {
-         const Eq = [];
-         for (let gq = 0; gq < 6; gq++) Eq.push(new Yq.d(0, 0, 0, 0));
-         return lq.GetPlanesToRef(qq, Eq), Eq
-       }
-       static GetNearPlaneToRef(qq, Eq) {
-         const gq = qq.m;
-         Eq.normal.x = gq[3] + gq[2], Eq.normal.y = gq[7] + gq[6], Eq.normal.z = gq[11] + gq[10], Eq.d = gq[15] + gq[14], Eq.normalize()
-       }
-       static GetFarPlaneToRef(qq, Eq) {
-         const gq = qq.m;
-         Eq.normal.x = gq[3] - gq[2], Eq.normal.y = gq[7] - gq[6], Eq.normal.z = gq[11] - gq[10], Eq.d = gq[15] - gq[14], Eq.normalize()
-       }
-       static GetLeftPlaneToRef(qq, Eq) {
- ... (115 more removed lines; see GitHub link above)
+     var QC = ZC(36987);
+     class wC {
+       static get LastCreatedEngine() {
+         return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
+       }
+       static get LastCreatedScene() {
+         return this._LastCreatedScene
+       }
+     }
+     wC.Instances = [], wC.OnEnginesDisposedObservable = new QC.d, wC._LastCreatedScene = null, wC.UseFallbackTexture = !0, wC.FallbackTexture = ""
+   },
+   38501: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => bC
+     });
+     var QC = ZC(38507);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L171` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/233.js#L56) · [Before (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/233.js#L171)

```diff
-             Yq.b.Warn(Aq.message)
+             QC.c.Warn(oC.message)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L177` → after: `L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/233.js#L62) · [Before (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/233.js#L177)

```diff
-   37872: (qq, Eq, gq) => {
+   37731: (CC, zC, ZC) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L181` → after: `L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/233.js#L66) · [Before (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/233.js#L181)

```diff
-         return ("x" === qq ? Eq : 3 & Eq | 8).toString(16)
+         return ("x" === CC ? zC : 3 & zC | 8).toString(16)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L185` → after: `L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/233.js#L70) · [Before (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/233.js#L185)

```diff
-       d: () => Yq
+       b: () => QC
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L188-L190` → after: `L73-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L73-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/233.js#L73-L75) · [Before (L188-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/233.js#L188-L190)

```diff
-   38653: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => Yq
+   38507: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => QC
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L211` → after: `L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/233.js#L96) · [Before (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/233.js#L211)

```diff
-         const Eq = qq => qq < 10 ? "0" + qq : "" + qq,
+         const zC = CC => CC < 10 ? "0" + CC : "" + CC,
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L226` → after: `L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/233.js#L111) · [Before (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/233.js#L226)

```diff
-         const Aq = `<div style='color:${mq.color}'>${Oq}</div><br>`;
+         const oC = `<div style='color:${nC.color}'>${bC}</div><br>`;
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/234.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/234.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89)

#### 1. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/234.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/234.js#L2)

```diff
- export const ids = [233, 234];
+ export const ids = [234];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/234.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/234.js#L4)

```diff
-   61127: (qq, Eq, gq) => {
+   60944: (CC, zC, ZC) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L6-L11` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/234.js#L6-L7) · [Before (L6-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/234.js#L6-L11)

```diff
-       RegisterShaderMaterial: () => Yq.e,
-       ShaderMaterial: () => Yq.s,
-       ShaderMaterialCreateFromSnippetAsync: () => Yq.i,
-       ShaderMaterialParse: () => Yq.p,
-       ShaderMaterialParseFromFileAsync: () => Yq.k,
-       ShaderMaterialParseFromSnippetAsync: () => Yq.m
+       DEVTOOLS_SHADERS: () => bC,
+       registerDevtoolsShader: () => nC
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L13-L14` → after: `L9-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L9-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/234.js#L9-L38) · [Before (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/234.js#L13-L14)

```diff
-     var Yq = gq(40225);
-     (0, Yq.e)()
+     var QC = ZC(39674),
+       wC = ZC(37050);
+     const bC = {
+       devtoolsNormal: function(CC) {
+         return {
+           vertex: `\n\t\t\t${(0,wC.f)(CC,"position","vec3")}\n\t\t\t${(0,wC.f)(CC,"normal","vec3")}\n\t\t\t${(0,wC.nb)(CC,"worldViewProjection","mat4")}\n\t\t\t${(0,wC.nb)(CC,"world","mat4")}\n\t\t\t${(0,wC.qb)(CC,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,wC.sb)(CC,`\n\t\t\t\t${ … [truncated]
+           fragment: `\n\t\t\t${(0,wC.qb)(CC,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,wC.F)(CC,`\n\t\t\t\t\n\t\t\t\t${(0,wC.w)(CC,"vec3","normalColor",`abs(${(0,wC.J)(CC,"vNormal")})`)}\n\t\t\t\t${(0,wC.C)(CC)} = ${(0,wC.l)(CC,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
+         }
+       },
+       devtoolsWhite: function(CC) {
+         return {
+           vertex: `\n\t\t\t${(0,wC.f)(CC,"position","vec3")}\n\t\t\t${(0,wC.nb)(CC,"worldViewProjection","mat4")}\n\n\t\t\t${(0,wC.sb)(CC,`\n\t\t\t\t${(0,wC.i)(CC)} = ${(0,wC.ob)(CC,"worldViewProjection")} * ${(0,wC.l)(CC,"vec4",(0,wC.wb)(CC,"position"),"1.0")};\n\t\t\t`)}\n\t\t` … [truncated]
+           fragment: `\n\t\t\t${(0,wC.F)(CC,`\n\t\t\t\t${(0,wC.C)(CC)} = ${(0,wC.l)(CC,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
+         }
+       },
+       devtoolsDepth: function(CC) {
+ ... (14 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L16` → after: `L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/234.js#L40) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/234.js#L16)

```diff
-   37758: (qq, Eq, gq) => {
+   37050: (CC, zC, ZC) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L18` → after: `L42-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L42-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/234.js#L42-L78) · [Before (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/234.js#L18)

```diff
-       c: () => lq
+       A: () => mC,
+       Ab: () => hC,
+       B: () => bC,
+       C: () => lC,
+       E: () => EC,
+       F: () => AC,
+       J: () => KC,
+       L: () => dC,
+       P: () => uC,
+       S: () => wC,
+       U: () => HC,
+       Y: () => sC,
+       Z: () => aC,
+       _: () => IC,
+       ab: () => JC,
+       bb: () => TC,
+ ... (21 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L20-L58` → after: `L80-L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L80-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/234.js#L80-L262) · [Before (L20-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/234.js#L20-L58)

```diff
-     var Yq = gq(37767);
-     class lq {
-       static GetPlanes(qq) {
-         const Eq = [];
-         for (let gq = 0; gq < 6; gq++) Eq.push(new Yq.d(0, 0, 0, 0));
-         return lq.GetPlanesToRef(qq, Eq), Eq
-       }
-       static GetNearPlaneToRef(qq, Eq) {
-         const gq = qq.m;
-         Eq.normal.x = gq[3] + gq[2], Eq.normal.y = gq[7] + gq[6], Eq.normal.z = gq[11] + gq[10], Eq.d = gq[15] + gq[14], Eq.normalize()
-       }
-       static GetFarPlaneToRef(qq, Eq) {
-         const gq = qq.m;
-         Eq.normal.x = gq[3] - gq[2], Eq.normal.y = gq[7] - gq[6], Eq.normal.z = gq[11] - gq[10], Eq.d = gq[15] - gq[14], Eq.normalize()
-       }
-       static GetLeftPlaneToRef(qq, Eq) {
- ... (23 more removed lines; see GitHub link above)
+     const QC = {
+       GLSL: 0,
+       WGSL: 1
+     };
+ 
+     function wC(CC) {
+       return CC === QC.WGSL
+     }
+ 
+     function bC(CC, zC, ZC) {
+       return wC(CC) ? ZC : zC
+     }
+     const nC = new Map([
+       ["int", "i32"],
+       ["float", "f32"],
+       ["vec2", "vec2f"],
+ ... (167 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L61-L200` → after: `L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/234.js#L265) · [Before (L61-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/234.js#L61-L200)

```diff
-   37767: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       d: () => lq
-     });
-     var Yq = gq(37139);
-     class lq {
-       constructor(qq, Eq, gq, lq) {
-         this.normal = new Yq.q(qq, Eq, gq), this.d = lq
-       }
-       bYq() {
-         return [this.normal.x, this.normal.y, this.normal.z, this.d]
-       }
-       clone() {
-         return new lq(this.normal.x, this.normal.y, this.normal.z, this.d)
-       }
-       getClassName() {
- ... (124 more removed lines; see GitHub link above)
+   39674: (CC, zC, ZC) => {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L205-L269` → after: `L270-L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L270-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/234.js#L270-L280) · [Before (L205-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/234.js#L205-L269)

```diff
-       static _CheckLimit(qq, Eq) {
-         let gq = Yq._LogLimitOutputs[qq];
-         return gq ? gq.current++ : (gq = {
-           limit: Eq,
-           current: 1
-         }, Yq._LogLimitOutputs[qq] = gq), gq.current <= gq.limit
-       }
-       static _GenerateLimitMessage(qq) {
-         let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-         const gq = Yq._LogLimitOutputs[qq];
-         if (!gq || !Yq.MessageLimitReached) return;
-         const lq = this._Levels[Eq];
-         gq.current === gq.limit && Yq[lq.name](Yq.MessageLimitReached.replace(/%LIMIT%/g, "" + gq.limit).replace(/%TYPE%/g, lq.name ?? ""))
-       }
-       static _AddLogEntry(qq) {
-         Yq._LogCache = qq + Yq._LogCache, Yq.OnNewCacheEntry && Yq.OnNewCacheEntry(qq)
- ... (49 more removed lines; see GitHub link above)
+       static GetShadersRepository() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? QC.ShadersRepository : QC.ShadersRepositoryWGSL
+       }
+       static GetShadersStore() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? QC.ShadersStore : QC.ShadersStoreWGSL
+       }
+       static GetIncludesShadersStore() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? QC.IncludesShadersStore : QC.IncludesShadersStoreWGSL
+       }
+     }
+     QC.ShadersRepository = "src/Shaders/", QC.ShadersStore = {}, QC.IncludesShadersStore = {}, QC.ShadersRepositoryWGSL = "src/ShadersWGSL/", QC.ShadersStoreWGSL = {}, QC.IncludesShadersStoreWGSL = {}
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/235.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/235.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248)

#### 1. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/235.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/235.js#L4)

```diff
-   37796: (qq, Eq, gq) => {
+   37138: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/235.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/235.js#L6-L7)

```diff
-       c: () => Bq,
-       f: () => mq
+       Color3: () => QC.e,
+       e: () => QC.g
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L9-L4041` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/235.js#L9-L10) · [Before (L9-L4041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/235.js#L9-L4041)

```diff
-     var Yq = gq(9406),
-       lq = gq(9379),
-       Oq = gq(307);
-     const mq = {
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
- ... (4017 more removed lines; see GitHub link above)
+     var QC = ZC(37142);
+     (0, QC.i)()
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/236.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/236.js` (36 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb)

#### 1. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/236.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/236.js#L4)

```diff
-   38040: (qq, Eq, gq) => {
+   40899: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L6-L11` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/236.js#L6) · [Before (L6-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/236.js#L6-L11)

```diff
-       e: () => cq,
-       g: () => Yq,
-       j: () => xq,
-       l: () => lq,
-       n: () => mq,
-       r: () => Oq
+       noaDevTools: () => WC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L13-L58` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/236.js#L8-L12) · [Before (L13-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/236.js#L13-L58)

```diff
-     const Yq = 1.001,
-       lq = .501,
-       Oq = .025,
-       mq = .75,
-       xq = .08,
-       Aq = 4;
- 
-     function cq() {
-       const qq = lq,
-         Eq = Oq,
-         gq = qq - Eq / 2,
-         Yq = (2 * qq - 2 * Eq) / (2 * Aq - 1),
-         mq = [];
-       for (const lq of [-gq, gq])
-         for (const Oq of [-gq, gq])
-           for (let gq = 0; gq < Aq; gq++) {
- ... (30 more removed lines; see GitHub link above)
+     var QC = ZC(37404),
+       wC = ZC(37394),
+       bC = ZC(2753),
+       nC = ZC(1645),
+       fC = ZC(40805);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L61` → after: `L15-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L15-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/236.js#L15-L34) · [Before (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/236.js#L61)

```diff
-       return Math.floor(qq).toLocaleString("en-US")
+       const {
+         Vg: zC
+       } = CC, ZC = zC.engine, QC = {
+         width: ZC.getRenderWidth(),
+         height: ZC.getRenderHeight()
+       };
+       return {
+         canvas: ZC.getRenderingCanvas(),
+         maxTextureSize: ZC.getCaps().maxTextureSize,
+         drawing: () => !CC.kR,
+         resize: (CC, zC) => {
+           ZC.setSize(CC, zC)
+         },
+         restoreSize: () => {
+           ZC.setSize(QC.width, QC.height), zC.resize()
+         },
+ ... (4 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L63-L69` → after: `L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/236.js#L36) · [Before (L63-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/236.js#L63-L69)

```diff
-     const Oq = 2e3,
-       mq = .005,
-       xq = .001,
-       Aq = 2,
-       cq = "Fluid Tank",
-       uq = "Coolant Mixer",
-       Bq = 144;
+     var qC = ZC(34040);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L71-L83` → after: `L38-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L38-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/236.js#L38-L67) · [Before (L71-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/236.js#L71-L83)

```diff
-     function Wq(qq) {
-       const Eq = qq.split("|")[0];
-       return (0, Yq.g)(Eq) ? Eq === Yq.b ? "cryo" : "water" : null
-     }
-     const Nq = [
-         [1, 0, 0],
-         [-1, 0, 0],
-         [0, 1, 0],
-         [0, -1, 0],
-         [0, 0, 1],
-         [0, 0, -1]
-       ],
-       aq = 63;
+     function FC(CC, zC) {
+       let {
+         width: qC,
+         height: FC,
+         colouring: WC
+       } = zC;
+       const NC = "normals" === WC,
+         MC = "depth" === WC;
+       return new Promise((zC => {
+         try {
+           const gC = (0, bC.e)();
+           if (gC.Vg.CS) return "screenshot" !== CC || null !== WC ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void zC()) : void(0, fC.e)(oC(gC), qC, FC).finally(zC);
+           const SC = gC.Vg.engine,
+             pC = gC.Vg.Km(),
+             PC = qC,
+             GC = FC;
+ ... (14 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L85-L103` → after: `L69-L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L69-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/236.js#L69-L224) · [Before (L85-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/236.js#L85-L103)

```diff
-     function Vq(qq) {
-       let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-       const gq = Eq ? function(qq, Eq, gq) {
-         const Yq = Nq.findIndex((Yq => {
-           let [lq, Oq, mq] = Yq;
-           return lq === qq && Oq === Eq && mq === gq
-         }));
-         return Yq < 0 ? 0 : 1 << Yq
-       }(Eq[0], Eq[1], Eq[2]) : 0;
-       return "maker" === qq ? {
-         kind: qq,
-         faces: gq
-       } : "user" === qq ? {
-         kind: qq,
-         faces: aq & ~gq
-       } : {
- ... (3 more removed lines; see GitHub link above)
+             function IC() {
+               var CC;
+               xC && (xC = !1, (0, QC.g)(pC.meshes, !1)), null === (CC = JC) || void 0 === CC || CC(), JC = null, AC.forEach((CC => {
+                 const zC = RC.get(CC);
+                 zC && (CC.material = zC)
+               }))
+             }
+             if (NC) {
+               const CC = [],
+                 zC = [];
+               AC.forEach((ZC => {
+                 const QC = ZC.name.toLowerCase(),
+                   wC = ZC.WE().boundingBox.center,
+                   bC = pC.activeCamera.position.subtract(wC).length();
+                 QC.includes("sky") || QC.includes("background") || QC.includes("environment") || bC > 1e3 ? zC.push(ZC) : CC.push(ZC)
+               })), WC("devtoolsNormal", gC);
+ ... (140 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L105-L107` → after: `L226-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L226-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/236.js#L226-L243) · [Before (L105-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/236.js#L105-L107)

```diff
- 
-     function dq(qq) {
-       return "pipe" === qq || "tank" === qq || "maker" === qq
+     const WC = new class {
+       constructor() {
+         this.tools = qC.ALL_DEV_TOOLS
+       }
+       downloadScene(CC, zC) {
+         return FC(CC, zC)
+       }
+       async setAmbientLightIntensity(CC) {
+         const {
+           Color3: zC
+         } = await Promise.all([ZC.e(232), ZC.e(235)]).then((() => ZC(37138)));
+         (0, bC.e)().Vg.Km().ambientColor = zC.FromArray([CC, CC, CC])
+       }
+       capturePhoto(CC, zC, ZC) {
+         return function(CC, zC, ZC, QC) {
+           return (0, fC.d)(oC(CC), zC, ZC, QC)
+ ... (2 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L111-L164` → after: `L257-L272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L257-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/236.js#L257-L272) · [Before (L111-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/236.js#L111-L164)

```diff
-       return 0 !== (qq.faces & 1 << gq) && 0 !== (Eq.faces & 1 << (1 ^ gq)) && (dq(qq.kind) || dq(Eq.kind))
-     }
-     const Hq = (qq, Eq, gq, Yq) => ({
-         input: qq,
-         inputAmount: Yq,
-         output: Eq,
-         outputAmount: gq
-       }),
-       oq = {
-         Condenser: {
-           kind: "Condenser",
-           opMs: 2e3,
-           inputSlot: null,
-           fuelSlot: null,
-           outputSlots: [],
-           recipes: [],
- ... (38 more removed lines; see GitHub link above)
+       let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
+       const {
+         scale: fC = 1,
+         type: oC = "image/png",
+         quality: qC
+       } = QC;
+       if (!CC.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
+       if (nC) return Promise.reject(new Error("A screenshot is already being taken"));
+       nC = !0;
+       const FC = function(CC, zC, ZC) {
+         const QC = Math.max(1, CC),
+           bC = Math.max(1, zC),
+           nC = Math.min(1, ZC / Math.max(QC, bC), Math.sqrt(wC / (QC * bC)));
+         return {
+           width: Math.max(1, Math.floor(QC * nC)),
+           height: Math.max(1, Math.floor(bC * nC))
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L166-L169` → after: `L274-L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L274-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/236.js#L274-L305) · [Before (L166-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/236.js#L166-L169)

```diff
-       };
- 
-     function Pq(qq, Eq) {
-       return 1e3 * (null !== Eq && void 0 !== Eq ? Eq : 0) / qq.opMs
+       }(zC, ZC, CC.maxTextureSize);
+       return CC.resize(FC.width, FC.height, fC * FC.width / Math.max(1, zC)), new Promise(((zC, ZC) => {
+         let QC, wC = 2,
+           fC = null;
+         const FC = () => {
+           var zC;
+           nC = !1, null === (zC = fC) || void 0 === zC || zC(), clearTimeout(QC), CC.restoreSize()
+         };
+         QC = setTimeout((() => {
+           FC(), ZC(new Error("No frame was drawn to capture"))
+         }), bC), fC = CC.onFrameDrawn((() => {
+           if (wC--, wC > 0) return;
+           const {
+             canvas: QC
+           } = CC, bC = {
+             width: QC.width,
+ ... (16 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L171-L175` → after: `L307-L313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L307-L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/236.js#L307-L313) · [Before (L171-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/236.js#L171-L175)

```diff
- 
-     function Qq(qq) {
-       let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-       const gq = Pq(oq["Coolant Mixer"], Bq) * Eq;
-       return qq <= 0 ? 0 : Math.ceil(qq / gq - 1e-9)
+     async function oC(CC, zC, ZC) {
+       try {
+         const wC = await fC(CC, zC, ZC);
+         (0, QC.e)(wC.blob, `bloxd-screenshot-${wC.width}x${wC.height}-${Date.now()}.png`)
+       } catch (wC) {
+         console.error("Error taking screenshot:", wC)
+       }
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L181` → after: `L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/236.js#L316) · [Before (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/236.js#L181)

```diff
-   38399: (qq, Eq, gq) => {
+   37404: (CC, zC, ZC) => {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L183-L184` → after: `L318-L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L318-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/236.js#L318-L320) · [Before (L183-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/236.js#L183-L184)

```diff
-       c: () => Mq,
-       f: () => Tq
+       d: () => qC,
+       g: () => fC,
+       i: () => nC
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L186-L209` → after: `L322-L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L322-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/236.js#L322-L324) · [Before (L186-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/236.js#L186-L209)

```diff
-     var Yq = gq(9379),
-       lq = gq(9419);
-     const Oq = [
-       [1, 0, 0],
-       [-1, 0, 0],
-       [0, 0, 1],
-       [0, 0, -1],
-       [0, 1, 0],
-       [0, -1, 0]
-     ];
-     var mq = gq(9438),
-       xq = gq(38207),
-       Aq = gq(9433);
-     const cq = {
-       1: [0, -1],
-       2: [-1, 0],
- ... (8 more removed lines; see GitHub link above)
+     var QC = ZC(37398),
+       wC = ZC(37408);
+     let bC = 0;
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L212` → after: `L327-L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L327-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/236.js#L327-L330) · [Before (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/236.js#L212)

```diff
-       return qq[0] === Eq[0] && qq[1] === Eq[1]
+       const ZC = CC;
+       ZC._noaFaceGroups = null !== zC && void 0 !== zC ? zC : null, ZC._noaFaceEpoch = -1, ZC._noaFaceMask = -1, ZC._noaFaceCount = -1, ZC._noaFaceMaterial = null;
+       const QC = CC.Zx;
+       QC && 1 === QC.length && (QC[0].indexStart = 0, QC[0].indexCount = CC.getTotalIndices())
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L216` → after: `L334-L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L334-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/236.js#L334-L340) · [Before (L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/236.js#L216)

```diff
-       return qq[0] * Eq[0] + qq[1] * Eq[1] === 0
+       if (zC) {
+         bC++;
+         for (const zC of CC) {
+           const CC = zC._noaFaceGroups;
+           CC && nC(zC, CC)
+         }
+       } else bC = Math.max(0, bC - 1)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L226-L227` → after: `L343-L351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L343-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/236.js#L343-L351) · [Before (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/236.js#L226-L227)

```diff
-     function Vq(qq, Eq, gq, Yq, lq) {
-       return Eq < aq.o || Eq >= aq.o + aq.p || Math.floor(qq / aq.t) === Math.floor(Yq / aq.t) && Math.floor(gq / aq.t) === Math.floor(lq / aq.t)
+     function oC(CC, zC, ZC) {
+       let wC = -1,
+         bC = 0;
+       for (let nC = 0; nC < QC.d; nC++) {
+         const ZC = CC[nC],
+           fC = CC[nC + 1];
+         fC > ZC && zC & 1 << QC.b[nC] && (wC < 0 && (wC = ZC), bC = fC)
+       }
+       return wC < 0 ? (ZC[0] = 0, ZC[1] = 0, 0) : (ZC[0] = wC, ZC[1] = bC - wC, bC - wC)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L229-L245` → after: `L353-L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L353-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/236.js#L353-L400) · [Before (L229-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/236.js#L229-L245)

```diff
-     const dq = "Splitter",
-       jq = "Sorting Gate",
-       Hq = new Set(aq.F),
-       oq = new Set([...aq.F, "Belt Loader", "Fast Loader", jq]),
-       Pq = new Set(aq.r),
-       Qq = [
-         [1, 0, 0],
-         [-1, 0, 0],
-         [0, 0, 1],
-         [0, 0, -1],
-         [0, 1, 0],
-         [0, -1, 0]
-       ];
- 
-     function yq(qq) {
-       var Eq, gq;
- ... (1 more removed lines; see GitHub link above)
+     class qC {
+       constructor(CC, zC) {
+         this.Ig = CC, this.engine = zC, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
+       }
+       apply(CC, zC) {
+         if (!zC) return;
+         const ZC = zC.getProjectionMatrix().m,
+           nC = 0 === bC && 0 === ZC[15],
+           fC = zC.globalPosition,
+           {
+             engine: qC
+           } = this,
+           FC = nC ? (0, wC.c)(ZC, qC.getRenderWidth(), qC.getRenderHeight()) : 0;
+         fC.x === this.eyeX && fC.y === this.eyeY && fC.z === this.eyeZ && FC === this.focalPx && nC === this.culling || (this.epoch++, this.eyeX = fC.x, this.eyeY = fC.y, this.eyeZ = fC.z, this.focalPx = FC, this.culling = nC);
+         const {
+           epoch: WC,
+ ... (32 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L248-L249` → after: `L412-L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L412-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/236.js#L412-L413) · [Before (L248-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/236.js#L248-L249)

```diff
-     function tq(qq) {
-       return yq(qq) === aq.g && (0, aq.Q)(Yq.i[qq].name)
+     function nC(CC, zC) {
+       CC._data = zC
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L262-L266` → after: `L418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/236.js#L418) · [Before (L262-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/236.js#L262-L266)

```diff
-       const lq = null === (Eq = Yq.i[qq]) || void 0 === Eq ? void 0 : Eq.meta;
-       return (null === lq || void 0 === lq ? void 0 : lq.rootName) !== vq.k ? null : {
-         rot: null !== (gq = lq.rot) && void 0 !== gq ? gq : 1,
-         half: (0, vq.e)(lq.rootName, lq.metaStr)
-       }
+       (null !== (zC = null === (ZC = CC.getBuffer()) || void 0 === ZC ? void 0 : ZC.HW) && void 0 !== zC ? zC : 0) > 0 && (QC.add(CC), 0 === wC ? nC(CC, null) : bC.add(CC))
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L269-L386` → after: `L421-L431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L421-L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/236.js#L421-L431) · [Before (L269-L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/236.js#L269-L386)

```diff
-     function bq(qq, Eq, gq, Yq) {
-       return nq(qq(Eq, gq, Yq))
-     }
- 
-     function iq(qq, Eq, gq, Yq, lq) {
-       let {
-         rot: Oq,
-         half: mq
-       } = lq;
-       const [xq, Aq] = (0, vq.j)(Oq, mq), cq = bq(qq, Eq + xq, gq, Yq + Aq);
-       return null !== cq && cq.rot === Oq && cq.half === vq.o[mq]
-     }
-     var Zq = gq(38408);
-     const fq = [new class {
-       constructor() {
-         this.reshapeOffsets = Nq
- ... (102 more removed lines; see GitHub link above)
+     function oC(CC) {
+       wC++;
+       for (const ZC of function(CC) {
+           const zC = new Set;
+           for (const wC of CC) {
+             const CC = wC.geometry;
+             for (const wC of Object.values(null !== (ZC = null === CC || void 0 === CC ? void 0 : CC.getVertexBuffers()) && void 0 !== ZC ? ZC : {})) {
+               var ZC;
+               const CC = wC.getWrapperBuffer();
+               QC.has(CC) && zC.add(CC)
+             }
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L388-L439` → after: `L433-L439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L433-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/236.js#L433-L439) · [Before (L388-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/236.js#L388-L439)

```diff
-           return (0, Yq.k)((0, aq.X)(Oq, !1))
-         }(qq, Eq, gq, lq, Aq) : (0, Yq.k)((0, aq.H)(xq, Aq, function(qq, Eq, gq, lq, Oq) {
-           const [mq, xq] = aq.f[Oq - 1], Aq = (Oq, Aq) => function(qq, Eq, gq, lq, Oq) {
-             var mq;
-             const xq = null === (mq = Yq.i[qq]) || void 0 === mq ? void 0 : mq.meta;
-             if (!xq) return !1;
-             const Aq = xq.rootName,
-               cq = oq.has(Aq) || tq(qq);
-             if (!cq && !Pq.has(Aq) && Aq !== dq) return !1;
-             const [uq, Bq] = aq.f[xq.rot - 1];
-             return cq ? uq === -Eq && Bq === -gq : Pq.has(Aq) ? uq === Eq && Bq === gq : (0, aq.W)(Yq.i[qq].name, uq, Bq).some((qq => {
-               let [Yq, lq] = qq;
-               return Yq === -Eq && lq === -gq
-             })) && !(lq === Eq && Oq === gq)
-           }(qq(Eq + Oq, gq, lq + Aq), Oq, Aq, mq, xq), cq = qq(Eq - mq, gq, lq - xq), uq = yq(cq) === dq && Yq.i[cq].meta.rot === Oq, Bq = 1 === aq.b[yq(qq(Eq, gq - 1, lq))] || -1 === aq.b[yq(qq(Eq, gq + 1, lq))];
-           if (Bq || uq || function(qq, Eq, gq) {
- ... (36 more removed lines; see GitHub link above)
+           return zC
+         }(CC)) ZC.getData() || qC(ZC), bC.add(ZC);
+       let zC = !0;
+       return () => {
+         if (zC && (zC = !1, wC--, 0 === wC)) {
+           for (const CC of bC) nC(CC, null);
+           bC.clear()
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L443-L451` → after: `L442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/236.js#L442) · [Before (L443-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/236.js#L443-L451)

```diff
-       reshapedHalf(qq, Eq, gq, Yq, lq) {
-         if (null !== lq.half && iq(qq, Eq, gq, Yq, lq)) return lq.half;
-         for (const Oq of ["right", "left"]) {
-           const [mq, xq] = (0, vq.j)(lq.rot, Oq), Aq = bq(qq, Eq + mq, gq, Yq + xq);
-           if (null !== Aq && Aq.rot === lq.rot && Aq.half === vq.o[Oq]) return Oq
-         }
-         return null
-       }
-     }, new Zq.c];
+     }
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L453-L457` → after: `L444-L449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L444-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/236.js#L444-L449) · [Before (L453-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/236.js#L453-L457)

```diff
-     function Mq(qq, Eq, gq, Yq, lq) {
-       let Oq = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
-       for (const mq of fq)
-         if (mq.handles(lq)) return mq.shape(qq, Eq, gq, Yq, lq, Oq);
-       return lq
+     function qC(CC) {
+       const zC = CC.getBuffer();
+       if (!zC || !(zC.HW > 0)) return;
+       const ZC = CC._engine,
+         QC = new Uint8Array(zC.HW);
+       ZC.bindArrayBuffer(zC), ZC._gl.getBufferSubData(ZC._gl.ARRAY_BUFFER, 0, QC), ZC._resetVertexBufferBinding(), nC(CC, QC)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L461-L465` → after: `L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/236.js#L476) · [Before (L461-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/236.js#L461-L465)

```diff
-       for (const Yq of fq) {
-         var Eq, gq;
-         if (Yq.handles(qq)) return null !== (Eq = null === (gq = Yq.placedBy) || void 0 === gq ? void 0 : gq.call(Yq, qq)) && void 0 !== Eq ? Eq : null
-       }
-       return null
+       return !!CC && CC.backFaceCulling && (0 === CC.transparencyMode || 1 === CC.transparencyMode)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L468` → after: `L479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/236.js#L479) · [Before (L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/236.js#L468)

```diff
-   38408: (qq, Eq, gq) => {
+   37408: (CC, zC, ZC) => {
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L471-L472` → after: `L482-L485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L482-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/236.js#L482-L485) · [Before (L471-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/236.js#L471-L472)

```diff
-       d: () => Pq,
-       e: () => oq
+       e: () => oC,
+       f: () => FC,
+       i: () => qC,
+       k: () => gC
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L474-L482` → after: `L487-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L487-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/236.js#L487-L491) · [Before (L474-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/236.js#L474-L482)

```diff
-     var Yq = gq(9379),
-       lq = gq(9406),
-       Oq = gq(9460),
-       mq = gq(38412),
-       xq = gq(9457);
-     const Aq = (0, mq.K)("pipe"),
-       cq = (0, mq.K)("tank"),
-       uq = (0, mq.K)("port"),
-       Bq = "Reactor Port";
+     var QC = ZC(37398);
+     const wC = 1 / 16,
+       bC = 1 / 64,
+       nC = 2048;
+     QC.j;
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L485-L489` → after: `L494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/236.js#L494) · [Before (L485-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/236.js#L485-L489)

```diff
-       const Yq = new Set([Oq.d, Oq.b, Bq, ...Eq, ...gq, ...qq ? [mq.m] : []]);
-       return {
-         makers: new Set(Eq),
-         roots: Yq
-       }
+       return Math.min(Math.abs(CC[0] * zC), Math.abs(CC[5] * ZC)) / 2
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L513-L523` → after: `L497-L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L497-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/236.js#L497-L498) · [Before (L513-L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/236.js#L513-L523)

```diff
-     function Hq(qq) {
-       let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
-       const gq = Yq.i[qq],
-         lq = null === gq || void 0 === gq ? void 0 : gq.meta.rootName,
-         Wq = Nq[Eq];
-       if (!lq || !Wq.roots.has(lq)) return null;
-       if ((0, Oq.g)(lq)) return (0, mq.I)(gq.name) === Eq ? Aq : null;
-       if (lq === mq.m) return cq;
-       if (lq === Bq) return gq.name.endsWith("|Water") ? uq : null;
-       const [aq, Vq] = xq.f[(gq.meta.rot || 1) - 1];
-       return (0, mq.K)(Wq.makers.has(lq) ? "maker" : "user", [-aq, 0, -Vq])
+     function oC(CC, zC) {
+       return wC + bC * CC * CC / zC
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L526-L537` → after: `L501-L503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L501-L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/236.js#L501-L503) · [Before (L526-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/236.js#L526-L537)

```diff
-     function oq(qq, Eq, gq, lq) {
-       let Oq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
-       const {
-         makers: xq
-       } = Nq[Oq];
-       return dq.some(((cq, uq) => {
-         var Bq, Wq;
-         let [Nq, aq, Vq] = cq;
-         const dq = qq(Eq + Nq, gq + aq, lq + Vq),
-           oq = Hq(dq, Oq);
-         return null !== oq && xq.has(null !== (Bq = null === (Wq = Yq.i[dq]) || void 0 === Wq ? void 0 : Wq.meta.rootName) && void 0 !== Bq ? Bq : "") && !(0, mq.M)(Aq, oq, jq[uq])
-       }))
+     function qC(CC, zC, ZC, wC, bC) {
+       const nC = QC.k;
+       return FC(CC[nC], CC[nC + 1], CC[nC + 2], CC[nC + 3], CC[nC + 4], CC[nC + 5], zC, ZC, wC, bC)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L540-L542` → after: `L506-L507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L506-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/236.js#L506-L507) · [Before (L540-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/236.js#L540-L542)

```diff
-     function Pq(qq) {
-       const Eq = Yq.i[qq];
-       return Eq ? (0, mq.I)(Eq.name) : null
+     function FC(CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC) {
+       return (nC <= CC - qC ? 0 : 1) | (nC >= zC + qC ? 0 : 2) | (fC <= ZC - qC ? 0 : 4) | (fC >= QC + qC ? 0 : 8) | (oC <= wC - qC ? 0 : 16) | (oC >= bC + qC ? 0 : 32)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L544-L554` → after: `L509-L519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L509-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/236.js#L509-L519) · [Before (L544-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/236.js#L544-L554)

```diff
-     let Qq = null;
- 
-     function yq(qq) {
-       if (!Qq) {
-         Qq = new Map;
-         for (const qq of ["water", "cryo"])
-           for (let Eq = 0; Eq < 64; Eq++)
-             for (const gq of [!1, !0]) Qq.set((0, Oq.h)(qq, Eq, gq), {
-               wW: qq,
-               mask: Eq,
-               full: gq
+     const WC = (() => {
+         const CC = [];
+         for (let zC = 0; zC < QC.n.length; zC++) {
+           let ZC = 0;
+           for (let wC = zC + 1; wC <= QC.n.length; wC++) {
+             const bC = 1 << QC.n[wC - 1];
+             if (ZC & bC) break;
+             ZC |= bC, CC.push({
+               start: zC,
+               end: wC,
+               tQ: ZC
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L556-L561` → after: `L521-L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L521-L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/236.js#L521-L525) · [Before (L556-L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/236.js#L556-L561)

```diff
-       }
-       return Qq.get(qq)
-     }
-     const tq = new Map(Array.from({
-       length: Oq.f + 1
-     }, ((qq, Eq) => [(0, Oq.j)(Eq), Eq])));
+           }
+         }
+         return CC
+       })(),
+       NC = [];
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L563-L615` → after: `L527-L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L527-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/236.js#L527-L529) · [Before (L563-L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/236.js#L563-L615)

```diff
-     function rq(qq, Eq, gq, lq, Oq, mq) {
-       return dq.some(((xq, Aq) => {
-         var cq, uq, Bq;
-         let [Wq, Nq, aq] = xq;
-         if (0 === (mq >> Aq & 1)) return !1;
-         const Vq = null !== (cq = null === (uq = Yq.i[qq(Eq + Wq, gq + Nq, lq + aq)]) || void 0 === uq ? void 0 : uq.name) && void 0 !== cq ? cq : "",
-           dq = yq(Vq);
-         return dq ? dq.wW === Oq && dq.full : (null !== (Bq = function(qq) {
-           var Eq;
-           return null !== (Eq = tq.get(qq)) && void 0 !== Eq ? Eq : null
-         }(Vq)) && void 0 !== Bq ? Bq : 0) > 0
-       }))
-     }
-     class vq {
-       constructor() {
-         this.reshapeOffsets = dq
- ... (37 more removed lines; see GitHub link above)
+     function MC(CC, zC) {
+       const ZC = QC.g[zC];
+       return CC[ZC + 1] - CC[ZC]
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L644-L645` → after: `L532-L566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L532-L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/236.js#L532-L566) · [Before (L644-L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/236.js#L644-L645)

```diff
-     function Oq(qq) {
-       return lq.find((Eq => Eq.exactMatch ? qq === Eq.name : qq.includes(Eq.name)))
+     function gC(CC, zC, ZC) {
+       let wC = 0;
+       for (let nC = 0; nC < QC.j; nC++) MC(CC, nC) > 0 && (wC |= 1 << nC);
+       if (0 === (zC &= wC)) return 0;
+       if (zC === wC) return ZC[0] = 0, ZC[1] = CC[QC.d], 1;
+       let bC = null,
+         fC = 1 / 0;
+       for (const qC of function(CC) {
+           let zC = NC[CC];
+           if (zC) return zC;
+           const ZC = new Map,
+             QC = (CC, zC) => {
+               const QC = 4 * CC + zC.length / 2;
+               ZC.has(QC) || ZC.set(QC, {
+                 tQ: CC,
+                 windows: zC
+ ... (19 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/237.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/237.js` (106 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab)

#### 1. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L2)

```diff
- export const ids = [237];
+ export const ids = [237, 238];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L4)

```diff
-   38473: (qq, Eq, gq) => {
+   40078: (CC, zC, ZC) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L6-L15591` → after: `L6-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L6-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L6-L21) · [Before (L6-L15591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L6-L15591)

```diff
-       b: () => mq
-     });
-     var Yq = gq(38477);
-     const lq = [0, 0, 0];
-     class Oq {
-       constructor(qq) {
-         let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : lq;
-         this.pool = qq, this.origin = Eq, this.count = 0, this.free = []
-       }
-       take() {
-         var qq;
-         const Eq = null !== (qq = this.free.pop()) && void 0 !== qq ? qq : this.count++;
-         return Eq >= this.pool.WB && this.pool.grow(Math.max(2 * this.pool.WB, Eq + 1)), this.hide(Eq), Eq
-       }
-       release(qq) {
-         this.hide(qq), this.free.push(qq)
- ... (15570 more removed lines; see GitHub link above)
+       b: () => FC,
+       e: () => NC
+     });
+     var QC = ZC(39811),
+       wC = ZC(39818),
+       bC = ZC(36963),
+       nC = ZC(37142),
+       fC = ZC(40084),
+       oC = ZC(40046),
+       qC = ZC(37002);
+     let FC = (() => {
+         var CC;
+         let zC, ZC, oC = fC.c,
+           qC = [],
+           FC = [],
+           WC = [],
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L15593-L15611` → after: `L23-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L23-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L23-L25) · [Before (L15593-L15611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L15593-L15611)

```diff
-         for (const Yq of qq) {
-           const [qq, lq, Oq] = Yq.focus;
-           Eq.push({
-             x: qq,
-             y: lq - 1,
-             z: Oq,
-             h: 2,
-             faces: zd
-           });
-           for (let Eq = 0; Eq < 4; Eq++) {
-             if (!Yq.live[Eq]) continue;
-             const [qq, lq, Oq] = dY(Yq.focus, Eq, mY.LASER_D), [mq, , xq] = VY[Eq], Aq = zd.filter((qq => qq[0] !== mq || qq[2] !== xq || 0 !== qq[1]));
-             gq.push({
-               x: qq,
-               y: lq,
-               z: Oq,
- ... (3 more removed lines; see GitHub link above)
+         return CC = class extends oC {
+           constructor(CC, zC, ZC, wC) {
+             super(CC, ZC, wC), this.groundColor = (0, QC.n)(this, qC, new nC.e(0, 0, 0)), this.direction = ((0, QC.n)(this, FC), (0, QC.n)(this, WC, void 0)), (0, QC.n)(this, NC), this.direction = zC || bC.r.Up()
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L15613-L15652` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L27-L28) · [Before (L15613-L15652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L15613-L15652)

```diff
-         }
-         this.green.setSources(Eq), this.pink.setSources(gq)
-       }
-       onAfterRender(qq) {
-         const Eq = performance.now(),
-           gq = 0 === this.lastMs ? 0 : Math.min(Eq - this.lastMs, 250) / 1e3;
-         if (this.lastMs = Eq, 0 === this.colliders.length || !qq.particlesEnabled()) return;
-         const Yq = qq.getCameraPosition();
-         this.green.SB(qq, gq, Yq), this.pink.SB(qq, gq, Yq)
-       }
-       dispose() {
-         this.green.dispose(), this.pink.dispose(), this.colliders = []
-       }
-     }
-     const pd = 1.04,
-       Gd = Md([1, 120 / 255, 220 / 255]),
- ... (24 more removed lines; see GitHub link above)
+           _buildUniformLayout() {
+             this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniform … [truncated]
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L15654-L15755` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L30-L31) · [Before (L15654-L15755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L15654-L15755)

```diff
-           of this.store.colliders()) gq.on && gq.live.some(Boolean) && (this.addBeams(qq, gq), Eq.push(gq)), gq.blockers.length > 0 && this.addMarkers(qq, gq);
-         this.glow.setSources(Eq)
-       }
-       addBeams(qq, Eq) {
-         const [gq, Yq, lq] = Eq.focus, Oq = IA - .25, mq = (.25 + IA) / 2;
-         for (let xq = 0; xq < 4; xq++) {
-           if (!Eq.live[xq]) continue;
-           const [Aq, , cq] = VY[xq], uq = 0 !== Aq, Bq = {
-             positions: [],
-             indices: []
-           };
-           fd(Bq, 0, 0, 0, uq ? Oq : .2, .2, uq ? .2 : Oq);
-           const Wq = [gq + .5 + Aq * mq, Yq + .5, lq + .5 + cq * mq],
-             Nq = qq.createGameMesh(Bq, Gd, Wq);
-           this.meshes.push(Nq), this.beams.push({
-             mesh: Nq,
- ... (86 more removed lines; see GitHub link above)
+           getClassName() {
+             return "HemisphericLight"
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L15757-L15799` → after: `L33-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L33-L34) · [Before (L15757-L15799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L15757-L15799)

```diff
-           of this.store.colliders()) {
-           Oq.focus.every(((qq, gq) => Math.abs(qq + .5 - Eq[gq]) <= mY.GHOST_REACH)) && Yq.push(CA(Oq, gq))
-         }
-         const lq = Kd(Yq);
-         lq !== this.shownKey && this.show(qq, lq, Yq)
-       }
-       preview(qq, Eq) {
-         const gq = qq.getTargetedBlock(),
-           Yq = gq ? [gq.MV[0], gq.MV[1], gq.MV[2]] : null,
-           lq = null !== Yq && Yq.every(((qq, gq) => Math.abs(qq + .5 - Eq[gq]) <= 8)),
-           Oq = this.store.site(),
-           mq = lq && Oq ? function(qq, Eq, gq) {
-             const Yq = aY(qq);
-             if (!Yq.every(Eq)) return null;
-             const lq = oY(qq, gq);
-             return {
- ... (27 more removed lines; see GitHub link above)
+           setDirectionToTarget(CC) {
+             return this.direction = bC.r.Normalize(CC.subtract(bC.r.Zero())), this.direction
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L15801-L15809` → after: `L36-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L36-L37) · [Before (L15801-L15809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L15801-L15809)

```diff
-           of gq) {
-           for (const [Eq, gq, Yq] of Oq) {
-             const lq = {
-               positions: [],
-               indices: []
-             };
-             Xd(lq, 0, 0, 0);
-             const Oq = qq.createGameMesh(lq, Md(kd), [Eq + .5, gq + .5, Yq + .5]);
-             this.meshes.push(Oq), this.pulses.push(Oq)
+           getShadowGenerator() {
+             return null
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L15811-L15817` → after: `L39-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L39-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L39-L95) · [Before (L15811-L15817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L15811-L15817)

```diff
-           mq.length > 0 && this.meshes.push(Cd(qq, mq, Md(Rd))), xq.length > 0 && this.meshes.push(Cd(qq, xq, Md(Ud), 1.06, .07)), Aq.length > 0 && this.meshes.push(Cd(qq, Aq, Md(sd)))
-         }
-       }
-       clear(qq) {
-         for (const Eq of this.meshes) qq.disposeGameMesh(Eq);
-         this.meshes = [], this.pulses = []
-       }
+           transferToEffect(CC, zC) {
+             const ZC = bC.r.Normalize(this.direction);
+             return this._uniformBuffer.updateFloat4("vLightData", ZC.x, ZC.y, ZC.z, 0, zC), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), zC), this
+           }
+           transferToNodeMaterialEffect(CC, zC) {
+             const ZC = bC.r.Normalize(this.direction);
+             return CC.setFloat3(zC, ZC.x, ZC.y, ZC.z), this
+           }
+           computeWorldMatrix() {
+             return this._worldMatrix || (this._worldMatrix = bC.b.Identity()), this._worldMatrix
+           }
+           getTypeID() {
+             return fC.c.LIGHTTYPEID_HEMISPHERICLIGHT
+           }
+           prepareLightSpecificDefines(CC, zC) {
+             CC["HEMILIGHT" + zC] = !0
+ ... (41 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L15820-L15878` → after: `L104-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L104-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L104-L107) · [Before (L15820-L15878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L15820-L15878)

```diff
-       constructor() {
-         this.stored = new Map, this.Fc = new Map, this.pending = [], this.order = [], this.recents = [], this.seq = 0, this.silos = 0, this.readOnly = !0, this.pocket = !1, this.listeners = new Set, this.version = 0
-       }
-       apply(qq) {
-         if (!qq.baf2TermOpen) return !1;
-         qq.baf2TermReset && (this.stored.clear(), this.pending = []);
-         for (const [Eq, gq] of qq.baf2TermItems) gq > 0 ? this.stored.set(Eq, gq) : this.stored.delete(Eq);
-         if (qq.baf2TermHeld && (this.Fc = new Map(qq.baf2TermHeld)), this.pending = this.pending.filter((Eq => Eq.seq > qq.baf2TermAcked)), this.silos = qq.baf2TermSilos, this.readOnly = qq.baf2TermReadOnly, this.pocket = !0 === qq.baf2TermPocket, qq.baf2TermReset) this.resort();
-         else {
-           const qq = new Set(this.order);
-           for (const Eq of this.stored.keys()) qq.has(Eq) || this.order.push(Eq)
-         }
-         return this.changed(), !0
-       }
-       resort() {
-         this.order = [...this.stored.keys()].sort(((qq, Eq) => this.amount(Eq) - this.amount(qq) || qq.localeCompare(Eq))), this.changed()
- ... (43 more removed lines; see GitHub link above)
+       static GetPlanes(CC) {
+         const zC = [];
+         for (let ZC = 0; ZC < 6; ZC++) zC.push(new QC.d(0, 0, 0, 0));
+         return wC.GetPlanesToRef(CC, zC), zC
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L15880-L15881` → after: `L109-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L109-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L109-L111) · [Before (L15880-L15881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L15880-L15881)

```diff
-       items() {
-         return this.order.filter((qq => this.amount(qq) > 0))
+       static GetNearPlaneToRef(CC, zC) {
+         const ZC = CC.m;
+         zC.normal.x = ZC[3] + ZC[2], zC.normal.y = ZC[7] + ZC[6], zC.normal.z = ZC[11] + ZC[10], zC.d = ZC[15] + ZC[14], zC.normalize()
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L15883-L15884` → after: `L113-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L113-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L113-L115) · [Before (L15883-L15884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L15883-L15884)

```diff
-       recent() {
-         return this.recents.filter((qq => this.amount(qq) > 0))
+       static GetFarPlaneToRef(CC, zC) {
+         const ZC = CC.m;
+         zC.normal.x = ZC[3] - ZC[2], zC.normal.y = ZC[7] - ZC[6], zC.normal.z = ZC[11] - ZC[10], zC.d = ZC[15] - ZC[14], zC.normalize()
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L15886-L15887` → after: `L117-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L117-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L117-L119) · [Before (L15886-L15887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L15886-L15887)

```diff
-       siloCount() {
-         return this.silos
+       static GetLeftPlaneToRef(CC, zC) {
+         const ZC = CC.m;
+         zC.normal.x = ZC[3] + ZC[0], zC.normal.y = ZC[7] + ZC[4], zC.normal.z = ZC[11] + ZC[8], zC.d = ZC[15] + ZC[12], zC.normalize()
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L15889-L15890` → after: `L121-L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L121-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L121-L123) · [Before (L15889-L15890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L15889-L15890)

```diff
-       isReadOnly() {
-         return this.readOnly
+       static GetRightPlaneToRef(CC, zC) {
+         const ZC = CC.m;
+         zC.normal.x = ZC[3] - ZC[0], zC.normal.y = ZC[7] - ZC[4], zC.normal.z = ZC[11] - ZC[8], zC.d = ZC[15] - ZC[12], zC.normalize()
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L15892-L15893` → after: `L125-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L125-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L125-L127) · [Before (L15892-L15893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L15892-L15893)

```diff
-       isPocket() {
-         return this.pocket
+       static GetTopPlaneToRef(CC, zC) {
+         const ZC = CC.m;
+         zC.normal.x = ZC[3] - ZC[1], zC.normal.y = ZC[7] - ZC[5], zC.normal.z = ZC[11] - ZC[9], zC.d = ZC[15] - ZC[13], zC.normalize()
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L15895-L15898` → after: `L129-L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L129-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L129-L131) · [Before (L15895-L15898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L15895-L15898)

```diff
-       subscribe(qq) {
-         return this.listeners.add(qq), () => {
-           this.listeners.delete(qq)
-         }
+       static GetBottomPlaneToRef(CC, zC) {
+         const ZC = CC.m;
+         zC.normal.x = ZC[3] + ZC[1], zC.normal.y = ZC[7] + ZC[5], zC.normal.z = ZC[11] + ZC[9], zC.d = ZC[15] + ZC[13], zC.normalize()
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L15900-L15902` → after: `L133-L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L133-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L133-L134) · [Before (L15900-L15902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L15900-L15902)

```diff
-       changed() {
-         this.version++;
-         for (const qq of this.listeners) qq()
+       static GetPlanesToRef(CC, zC) {
+         wC.GetNearPlaneToRef(CC, zC[0]), wC.GetFarPlaneToRef(CC, zC[1]), wC.GetLeftPlaneToRef(CC, zC[2]), wC.GetRightPlaneToRef(CC, zC[3]), wC.GetTopPlaneToRef(CC, zC[4]), wC.GetBottomPlaneToRef(CC, zC[5])
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L15904-L15934` → after: `L136-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L136-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L136-L139) · [Before (L15904-L15934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L15904-L15934)

```diff
-     }
-     var Dd = gq(38408);
-     const qj = {
-       isBlock: qq => void 0 !== Zq.i[qq],
-       harvestType: qq => {
-         var Eq;
-         return null === (Eq = Zq.i[qq]) || void 0 === Eq ? void 0 : Eq.harvestType
-       },
-       harvestLevel: qq => {
-         var Eq;
-         return null === (Eq = Zq.i[qq]) || void 0 === Eq ? void 0 : Eq.harvestLevel
-       },
-       dropsNothing: qq => {
-         var Eq;
-         return null === (null === (Eq = Zq.i[qq]) || void 0 === Eq ? void 0 : Eq.drops)
-       },
- ... (15 more removed lines; see GitHub link above)
+       static IsPointInFrustum(CC, zC) {
+         for (let ZC = 0; ZC < 6; ZC++)
+           if (zC[ZC].dotCoordinate(CC) < 0) return !1;
+         return !0
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L15949-L16004` → after: `L142-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L142-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L142-L147) · [Before (L15949-L16004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L15949-L16004)

```diff
- 
-     function gj(qq, Eq) {
-       return function(qq, Eq, gq) {
-         if (Eq === vY[0]) return [(0, Tq.Yd)({
-           translationKey: "buildAFactory2Game:toolNeededAny"
-         }, Tq.M.whiteUiText)];
-         const Yq = gq.split("|")[0],
-           lq = qq.isBlock(Yq) ? qq.displayName(Yq) : void 0,
-           Oq = "string" === typeof lq ? lq : lq && "translationKey" in lq ? `$t(${lq.translationKey})` : Yq;
-         return [(0, Tq.Yd)({
-           translationKey: "buildAFactory2Game:toolNeeded",
-           params: {
-             block: Oq
-           }
-         }, Tq.M.whiteUiText), (0, Tq.Yd)({
-           translationKey: `item:${(0,Tq.ue)(Eq)}`
- ... (40 more removed lines; see GitHub link above)
+   },
+   37596: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => wC
+     });
+     var QC = ZC(36963);
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16006-L16124` → after: `L149-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L149-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L149-L150) · [Before (L16006-L16124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16006-L16124)

```diff
-       constructor() {
-         let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
-           Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => null,
-           gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => null;
-         this.live = qq, this.planAt = Eq, this.tierOf = gq, this.lc = 0, this.missesMaker = !1, this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.afloatByRoot = new Map, this.besideMakerById = new Map, this.Fc = null, this.express = !1, this.crouching = !1, this … [truncated]
-       }
-       onAfterRender(qq, Eq, gq) {
-         var Yq, lq, Oq;
-         let mq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
-         const xq = null !== (Yq = null === (lq = qq.Ngq(Eq)) || void 0 === lq ? void 0 : lq.name) && void 0 !== Yq ? Yq : null,
-           Aq = qq.isPlayerCrouching(Eq),
-           cq = 0 === gq ? null : this.resolve(qq, gq),
-           uq = null !== cq && null !== mq && uj.has(cq.rootName) && function(qq, Eq) {
-             return Bj.some((gq => {
-               let [Yq, lq] = gq;
-               const Oq = qq.getBlockId(Eq[0] + Yq, Eq[1], Eq[2] + lq);
- ... (103 more removed lines; see GitHub link above)
+       constructor(CC, zC, ZC, wC) {
+         this.normal = new QC.r(CC, zC, ZC), this.d = wC
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16126-L16129` → after: `L152-L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L152-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L152-L153) · [Before (L16126-L16129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16126-L16129)

```diff
-       subscribe(qq) {
-         return this.listeners.add(qq), () => {
-           this.listeners.delete(qq)
-         }
+       VZC() {
+         return [this.normal.x, this.normal.y, this.normal.z, this.d]
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16131-L16132` → after: `L155-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L155-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L155-L156) · [Before (L16131-L16132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16131-L16132)

```diff
-       dispose() {
-         this.listeners.clear(), this.byRootId.clear(), this.besideMakerById.clear(), this.missesMaker = !1, this.afloatByRoot.clear(), this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.rowsByKey.clear(), this.snapshot = Aj, this.lc = 0, this.Fc = null, this.expr … [truncated]
+       clone() {
+         return new wC(this.normal.x, this.normal.y, this.normal.z, this.d)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16134-L16148` → after: `L158-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L158-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L158-L159) · [Before (L16134-L16148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16134-L16148)

```diff
-       readAfloat(qq, Eq, gq) {
-         if (null === gq || 0 === Eq || !xq() || !Oj(this.resolve(qq, Eq).rootName)) return !1;
-         const Yq = `${gq[0]},${gq[1]},${gq[2]},${Eq}`,
-           lq = performance.now();
-         return Yq === this.afloatKey && lq - this.afloatAt < Nj ? this.afloat : (this.afloatKey = Yq, this.afloatAt = lq, function(qq, Eq) {
-           for (const [gq, Yq, lq] of lj) {
-             const Oq = Eq(qq[0] + gq, qq[1] + Yq, qq[2] + lq);
-             if (void 0 === Oq || null !== Oq && !Oj(Oq)) return !1
-           }
-           return !0
-         }(gq, ((Eq, gq, Yq) => function(qq, Eq, gq, Yq) {
-           if (!qq.isBlockInLoadedChunk(Eq, gq, Yq)) return;
-           const lq = qq.getBlockId(Eq, gq, Yq);
-           return 0 === lq ? null : qq.getMetaInfo(lq).rootName
-         }(qq, Eq, gq, Yq))))
+       getClassName() {
+         return "Plane"
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16150-L16155` → after: `L161-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L161-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L161-L163) · [Before (L16150-L16155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16150-L16155)

```diff
-       liveMoved(qq) {
-         var Eq;
-         const {
-           livePos: gq
-         } = this;
-         return null === qq || qq[0] !== gq[0] || qq[1] !== gq[1] || qq[2] !== gq[2] || (null === (Eq = this.live) || void 0 === Eq ? void 0 : Eq.version()) !== this.liveVersion
+       getHashCode() {
+         let CC = this.normal.getHashCode();
+         return CC = 397 * CC ^ this.d, CC
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16157-L16164` → after: `L165-L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L165-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L165-L234) · [Before (L16157-L16164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16157-L16164)

```diff
-       updatePlan(qq) {
-         const Eq = null === qq ? "" : qq.join(","),
-           gq = performance.now();
-         if (Eq === this.planPos && gq - this.planMs < 250) return !1;
-         this.planPos = Eq, this.planMs = gq;
-         const Yq = null === qq ? null : this.planAt([qq[0], qq[1], qq[2]]),
-           lq = !Ra(Yq, this.plan);
-         return this.plan = Yq, lq
+       normalize() {
+         const CC = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
+         let zC = 0;
+         return 0 !== CC && (zC = 1 / CC), this.normal.x *= zC, this.normal.y *= zC, this.normal.z *= zC, this.d *= zC, this
+       }
+       transform(CC) {
+         const zC = wC._TmpMatrix;
+         CC.invertToRef(zC);
+         const ZC = zC.m,
+           QC = this.normal.x,
+           bC = this.normal.y,
+           nC = this.normal.z,
+           fC = this.d,
+           oC = QC * ZC[0] + bC * ZC[1] + nC * ZC[2] + fC * ZC[3],
+           qC = QC * ZC[4] + bC * ZC[5] + nC * ZC[6] + fC * ZC[7],
+           FC = QC * ZC[8] + bC * ZC[9] + nC * ZC[10] + fC * ZC[11],
+ ... (54 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16166-L16180` → after: `L236-L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L236-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L236-L237) · [Before (L16166-L16180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16166-L16180)

```diff
-       besideMaker(qq, Eq, gq) {
-         let {
-           info: Yq
-         } = qq;
-         if (null === Yq) return null;
-         let lq = this.besideMakerById.get(Eq);
-         if (void 0 === lq) {
-           const qq = "cryo" === gq ? "lookPipeMixerSide" : "lookPipeCondenserSide";
-           lq = {
-             ...Yq,
-             detail: `${cj}${qq}`,
-             detailItem: null
-           }, this.besideMakerById.set(Eq, lq)
-         }
-         return lq
+       toGlobal(CC, zC) {
+         return new QC(this.x * CC, this.y * zC, this.width * CC, this.height * zC)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16182-L16193` → after: `L239-L240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L239-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L239-L240) · [Before (L16182-L16193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16182-L16193)

```diff
-       hanging(qq) {
-         let {
-           info: Eq,
-           rootName: gq
-         } = qq;
-         if (null === Eq) return null;
-         let Yq = this.afloatByRoot.get(gq);
-         return void 0 === Yq && (Yq = {
-           ...Eq,
-           detail: `${cj}lookOreAfloat`,
-           detailItem: null
-         }, this.afloatByRoot.set(gq, Yq)), Yq
+       toGlobalToRef(CC, zC, ZC) {
+         return ZC.x = this.x * CC, ZC.y = this.y * zC, ZC.width = this.width * CC, ZC.height = this.height * zC, this
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16195-L16223` → after: `L242-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L242-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L242-L243) · [Before (L16195-L16223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16195-L16223)

```diff
-       rowsOf(qq, Eq) {
-         if (null === Eq) return xj;
-         const gq = `${qq}|${Eq}`;
-         let Yq = this.rowsByKey.get(gq);
-         if (void 0 === Yq) {
-           const lq = function(qq, Eq) {
-             var gq;
-             if (!(qq in TE)) return [];
-             const Yq = null !== (gq = zE[qq]) && void 0 !== gq ? gq : [],
-               lq = new Map;
-             for (const mq of kO(qq, Eq))
-               if ((Yq.includes(mq) || JO(mq.output) && GO(mq.output) > Cq(qq)) && GO(mq.output) <= Eq) {
-                 var Oq;
-                 const qq = null !== (Oq = lq.get(mq.output)) && void 0 !== Oq ? Oq : [];
-                 qq.push(mq.input), lq.set(mq.output, qq)
-               } return UO([...lq], (qq => {
- ... (13 more removed lines; see GitHub link above)
+       clone() {
+         return new QC(this.x, this.y, this.width, this.height)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16225-L16242` → after: `L245-L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L245-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L245-L285) · [Before (L16225-L16242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16225-L16242)

```diff
-       resolve(qq, Eq) {
-         const {
-           rootId: gq,
-           rootName: Yq
-         } = qq.getMetaInfo(Eq), lq = (0, ag.g)(Yq) ? Eq : gq;
-         let Oq = this.byRootId.get(lq);
-         const mq = xq();
-         if (void 0 === Oq || Oq.nuclear !== mq) {
-           var Aq;
-           const gq = function(qq) {
-             return SY(qj, qq, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qq)
-           }(Yq, qq.blockIdToBlockName(Eq));
-           Oq = {
-             info: gq,
-             rootName: Yq,
-             live: null !== gq && !0 === (null === (Aq = this.live) || void 0 === Aq ? void 0 : Aq.handles(Yq)),
- ... (2 more removed lines; see GitHub link above)
+     }
+   },
+   38501: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => bC
+     });
+     var QC = ZC(38507);
+     const wC = (CC, zC, ZC) => CC ? CC.getClassName && "Mesh" === CC.getClassName() ? null : !CC.getClassName || "SubMesh" !== CC.getClassName() && "PhysicsBody" !== CC.getClassName() ? CC.clone ? CC.clone() : Array.isArray(CC) ? CC.slice() : ZC && "object" === typeof CC ? {
+       ...CC
+     } : null : CC.clone(zC) : null;
+     class bC {
+       static DeepCopy(CC, zC, ZC, bC) {
+         let nC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         const fC = function(CC) {
+           const zC = [];
+           do {
+ ... (25 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16247-L16365` → after: `L289-L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L289-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L289-L295) · [Before (L16247-L16365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16247-L16365)

```diff
-     const Nj = 500;
-     const aj = (0, Yq.memo)((function(qq) {
-       var Eq, gq;
-       let {
-         store: lq
-       } = qq;
-       const {
-         t: Oq
-       } = (0, hl.v)(), [mq, xq] = (0, Yq.useState)((() => lq.get()));
-       (0, Yq.useEffect)((() => (xq(lq.get()), lq.subscribe((() => {
-         xq(lq.get())
-       })))), [lq]);
-       const {
-         openInGameMenuName: Aq,
-         openEverythingMenuName: cq,
-         isTouchScreen: uq
- ... (103 more removed lines; see GitHub link above)
+   },
+   37731: (CC, zC, ZC) => {
+     function QC() {
+       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (CC => {
+         const zC = 16 * Math.random() | 0;
+         return ("x" === CC ? zC : 3 & zC | 8).toString(16)
+       }))
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16367-L16369` → after: `L297-L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L297-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L297-L304) · [Before (L16367-L16369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16367-L16369)

```diff
-     const yj = [.5, .5, .5],
-       tj = [.2, .8, .3],
-       rj = [.45, 1, .5];
+     ZC.d(zC, {
+       b: () => QC
+     })
+   },
+   38507: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => QC
+     });
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16371-L16375` → after: `L306-L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L306-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L306-L350) · [Before (L16371-L16375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16371-L16375)

```diff
-       constructor() {
-         this.offsetsIndexById = new Uint8Array(65536), this.indexed = !1, this.offsetsList = [], this.hits = [], this.chunks = new Map, this.cellChunks = new Map, this.lastCheckMs = -1 / 0, this.checks = 0, this.scanFrom = 0, this.shownKey = "", this.meshes = []
-       }
-       index(qq) {
-         this.indexed = !0;
+       static _CheckLimit(CC, zC) {
+         let ZC = QC._LogLimitOutputs[CC];
+         return ZC ? ZC.current++ : (ZC = {
+           limit: zC,
+           current: 1
+         }, QC._LogLimitOutputs[CC] = ZC), ZC.current <= ZC.limit
+       }
+       static _GenerateLimitMessage(CC) {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         const ZC = QC._LogLimitOutputs[CC];
+         if (!ZC || !QC.MessageLimitReached) return;
+         const wC = this._Levels[zC];
+         ZC.current === ZC.limit && QC[wC.name](QC.MessageLimitReached.replace(/%LIMIT%/g, "" + ZC.limit).replace(/%TYPE%/g, wC.name ?? ""))
+       }
+       static _AddLogEntry(CC) {
+         QC._LogCache = CC + QC._LogCache, QC.OnNewCacheEntry && QC.OnNewCacheEntry(CC)
+ ... (29 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16377-L16380` → after: `L352-L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L352-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L352-L354) · [Before (L16377-L16380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16377-L16380)

```diff
-           for (const gq of Hj(Eq)) {
-             const Eq = qq.blockNameToBlockId(gq, !0),
-               Yq = Qj(gq);
-             null !== Eq && Yq.length > 0 && (this.offsetsList.push(Yq), this.offsetsIndexById[Eq] = this.offsetsList.length)
+           if ((CC & ZC) === ZC) {
+             const CC = this._Levels[ZC];
+             QC[CC.name] = QC._LogEnabled.bind(QC, ZC)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16383-L16421` → after: `L357-L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L357-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L357-L393) · [Before (L16383-L16421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16383-L16421)

```diff
-       onAfterRender(qq, Eq) {
-         this.indexed || this.index(qq);
-         const gq = performance.now();
-         if (gq - this.lastCheckMs < 100) return;
-         this.lastCheckMs = gq, this.checks++;
-         const Yq = ua.c.Oa,
-           [lq, Oq, mq] = oj(Eq, Yq);
-         let xq = !1;
-         const Aq = [];
-         let cq = 0;
-         for (let uq = lq - 2; uq <= lq + 2; uq++)
-           for (let Eq = Oq - 1; Eq <= Oq + 1; Eq++)
-             for (let lq = mq - 2; lq <= mq + 2; lq++) {
-               const Oq = cq++,
-                 mq = Pj(uq, Eq, lq),
-                 Bq = qq.getChunkVersion(uq, Eq, lq);
- ... (23 more removed lines; see GitHub link above)
+     }
+     QC.NoneLogLevel = 0, QC.MessageLogLevel = 1, QC.WarningLogLevel = 2, QC.ErrorLogLevel = 4, QC.AllLogLevel = 7, QC.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", QC._LogCache = "", QC._LogLimitOutputs = {}, QC._Levels =  … [truncated]
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
+     }], QC.errorsCount = 0, QC.Log = QC._LogEnabled.bind(QC, QC.MessageLogLevel), QC.Warn = QC._LogEnabled.bind(QC, QC.WarningLogLevel), QC.Error = QC._LogEnabled.bind(QC, QC.ErrorLogLevel)
+   },
+   60925: (CC, zC, ZC) => {
+ ... (21 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16423-L16442` → after: `L395-L396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L395-L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L395-L396) · [Before (L16423-L16442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16423-L16442)

```diff
-       scanDue(qq, Eq) {
-         const gq = Math.max(Eq.findIndex((qq => {
-           let {
-             slot: Eq
-           } = qq;
-           return Eq >= this.scanFrom
-         })), 0);
-         let Yq = 96;
-         for (let lq = 0; lq < Eq.length; lq++) {
-           const {
-             slot: Oq,
-             entry: mq,
-             origin: xq
-           } = Eq[(gq + lq) % Eq.length];
-           if (Yq -= this.scan(qq, mq, xq), Yq <= 0) {
-             this.scanFrom = Oq + 1;
- ... (4 more removed lines; see GitHub link above)
+       _gatherImports(CC, zC) {
+         CC ? (this._webGPUReady = !0, zC.push(Promise.all([ZC.e(375).then((() => ZC(61149))), ZC.e(376).then((() => ZC(61156)))]))) : zC.push(Promise.all([ZC.e(377).then((() => ZC(61164))), ZC.e(378).then((() => ZC(61171)))]))
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16444-L16469` → after: `L398-L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L398-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L398-L412) · [Before (L16444-L16469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16444-L16469)

```diff
-       scan(qq, Eq, gq) {
-         let [Yq, lq, Oq] = gq;
-         const mq = ua.c.Oa,
-           xq = this.hits;
-         xq.length = 0;
-         const Aq = qq.scanBlocks(Yq, lq, Oq, Yq + mq, lq + mq, Oq + mq, this.offsetsIndexById, xq),
-           cq = [];
-         for (let uq = 0; uq < xq.length; uq += 4) cq.push({
-           pos: [xq[uq], xq[uq + 1], xq[uq + 2]],
-           offsets: this.offsetsList[this.offsetsIndexById[xq[uq + 3]] - 1]
-         });
-         return Eq.machines = cq, Eq.cellChunks = function(qq, Eq) {
-           const gq = new Set,
-             Yq = [];
-           for (const {
-               pos: lq,
- ... (10 more removed lines; see GitHub link above)
+       constructor(CC) {
+         const zC = {
+           ...arguments.length > 2 ? arguments[2] : void 0,
+           name: CC,
+           engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || oC.c.LastCreatedEngine,
+           useShaderStore: !0,
+           useAsPostProcess: !0,
+           vertexShader: FC.VertexUrl,
+           fragmentShader: FC.FragmentUrl,
+           uniforms: FC.Uniforms
+         };
+         super({
+           ...zC,
+           defines: FC._GetDefines(zC.engine)
+         }), this.texelSize = new qC.n(0, 0)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16471-L16478` → after: `L414-L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L414-L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L414-L416) · [Before (L16471-L16478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16471-L16478)

```diff
-       watchCellChunk(qq, Eq, gq, Yq) {
-         const lq = Pj(Eq, gq, Yq),
-           Oq = qq.getChunkVersion(Eq, gq, Yq),
-           mq = this.cellChunks.get(lq);
-         return null === Oq ? this.cellChunks.delete(lq) : (null === mq || void 0 === mq ? void 0 : mq.version) === Oq ? (mq.seenAt = this.checks, !1) : (this.cellChunks.set(lq, {
-           version: Oq,
-           seenAt: this.checks
-         }), !0)
+       bind() {
+         let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         super.bind(CC), this._drawWrapper.effect.setFloat2("texelSize", this.texelSize.x, this.texelSize.y)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16480-L16499` → after: `L418-L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L418-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L418-L422) · [Before (L16480-L16499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16480-L16499)

```diff
-       refresh(qq) {
-         const Eq = function(qq, Eq) {
-             const gq = new Set,
-               Yq = [];
-             for (const {
-                 pos: lq,
-                 offsets: Oq
-               }
-               of qq)
-               for (const [qq, mq, xq] of Oq) {
-                 const Oq = lq[0] + qq,
-                   Aq = lq[1] + mq,
-                   cq = lq[2] + xq,
-                   uq = `${Oq},${Aq},${cq}`;
-                 gq.has(uq) || (gq.add(uq), Eq(Oq, Aq, cq) && Yq.push([Oq, Aq, cq]))
-               }
- ... (4 more removed lines; see GitHub link above)
+     }
+     FC.VertexUrl = "fxaa", FC.FragmentUrl = "fxaa", FC.Uniforms = ["texelSize"];
+     class WC extends bC.d {
+       getClassName() {
+         return "FxaaPostProcess"
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16501-L16512` → after: `L424-L445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L424-L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L424-L445) · [Before (L16501-L16512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16501-L16512)

```diff
-       build(qq, Eq, gq) {
-         const Yq = Eq[0],
-           lq = [],
-           Oq = [];
-         for (const [mq, xq, Aq] of Eq)(0, Vj.d)(lq, Oq, [mq - Yq[0] + .5, xq - Yq[1] + .5, Aq - Yq[2] + .5], yj, gq);
-         return qq.createGameMesh({
-           positions: lq,
-           indices: Oq
-         }, {
-           rgb: gq ? rj : tj,
-           alpha: .4
-         }, Yq)
+       constructor(CC, zC) {
+         let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
+           wC = arguments.length > 3 ? arguments[3] : void 0,
+           bC = arguments.length > 4 ? arguments[4] : void 0,
+           nC = arguments.length > 5 ? arguments[5] : void 0,
+           fC = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
+         const oC = {
+           uniforms: FC.Uniforms,
+           size: "number" === typeof zC ? zC : void 0,
+           camera: ZC,
+           samplingMode: wC || QC.h.BILINEAR_SAMPLINGMODE,
+           engine: bC,
+           reusable: nC,
+           textureType: fC,
+           ...zC
+         };
+ ... (6 more added lines; see GitHub link above)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16514-L16516` → after: `L447-L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L447-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L447-L448) · [Before (L16514-L16516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16514-L16516)

```diff
-       clearMeshes(qq) {
-         for (const Eq of this.meshes) qq.disposeGameMesh(Eq);
-         this.meshes = []
+       static _Parse(CC, zC, ZC, QC) {
+         return nC.d.Parse((() => new WC(CC.name, CC.options, zC, CC.renderTargetSamplingMode, ZC.mg(), CC.reusable)), CC, ZC, QC)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16519-L16539` → after: `L451-L456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L451-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L451-L456) · [Before (L16519-L16539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16519-L16539)

```diff
-     const hj = 1 / .6,
-       nj = 200,
-       bj = {
-         colours: [
-           [127, 233, 255],
-           [180, 140, 255]
-         ],
-         life: [.12, .22],
-         size: [.12, .2],
-         perBlock: 3
-       },
-       ij = {
-         colours: [
-           [120, 255, 150],
-           [200, 255, 120]
-         ],
- ... (5 more removed lines; see GitHub link above)
+     var NC = ZC(38507),
+       MC = ZC(39913),
+       gC = ZC(41648),
+       SC = ZC(41634),
+       pC = ZC(39712);
+     const PC = 0;
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16541-L16543` → after: `L458-L459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L458-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L458-L459) · [Before (L16541-L16543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16541-L16543)

```diff
-       constructor() {
-         let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bj;
-         this.style = qq, this.particles = null, this.points = new Float32Array(800), this.budget = nj, this.lastMs = 0
+       constructor(CC, zC, ZC) {
+         this.name = CC, this._parentTask = zC, this._context = ZC, this.disabled = !1
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16545-L16546` → after: `L461-L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L461-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L461-L462) · [Before (L16545-L16546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16545-L16546)

```diff
-       static blade() {
-         return new fj(ij)
+       setInitializeFunc(CC) {
+         this._initFunc = CC
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16548-L16550` → after: `L464-L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L464-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L464-L465) · [Before (L16548-L16550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16548-L16550)

```diff
-       vy(qq, Eq) {
-         const gq = Math.min(Eq.arcStruck, Eq.arcPoints.length);
-         this.draw(qq, [Eq.arcFrom, ...Eq.arcPoints], Eq.arcPoints.slice(0, gq))
+       setExecuteFunc(CC) {
+         this._executeFunc = CC
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16552-L16558` → after: `L467-L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L467-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L467-L468) · [Before (L16552-L16558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16552-L16558)

```diff
-       onBlade(qq, Eq) {
-         const [gq, Yq, lq] = Eq.bladeCentre, [Oq, mq] = Eq.bladeFacing, xq = gq - 1.5 * Oq, Aq = lq - 1.5 * mq, cq = Math.atan2(mq, Oq), uq = [];
-         for (let Bq = 0; Bq <= 8; Bq++) {
-           const qq = cq - Zj / 2 + Zj * Bq / 8;
-           uq.push([xq + 2.5 * Math.cos(qq), Yq, Aq + 2.5 * Math.sin(qq)])
-         }
-         this.draw(qq, uq, Eq.bladeStruck)
+       _execute() {
+         this.disabled || this._executeFunc(this._context)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16560-L16562` → after: `L470-L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L470-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L470-L471) · [Before (L16560-L16562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16560-L16562)

```diff
-       dispose() {
-         var qq;
-         null === (qq = this.particles) || void 0 === qq || qq.stop(), this.particles = null
+       _initialize() {
+         this._initFunc?.(this._context)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16564-L16627` → after: `L473-L474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L473-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L473-L474) · [Before (L16564-L16627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16564-L16627)

```diff
-       draw(qq, Eq, gq) {
-         if (!qq.particlesEnabled() || Eq.length < 2) return;
-         const Yq = performance.now();
-         this.budget = Math.min(nj, this.budget + (Yq - this.lastMs) / 1e3 * nj), this.lastMs = Yq;
-         const lq = [];
-         let Oq = 0,
-           mq = Eq[0];
-         for (const jq of Eq.slice(1)) {
-           const qq = Math.min(48, Math.round(Math.hypot(jq[0] - mq[0], jq[1] - mq[1], jq[2] - mq[2]) * this.style.perBlock));
-           lq.push([mq, jq, qq]), Oq += qq, mq = jq
-         }
-         const xq = gq.length;
-         Oq += 10 * xq;
-         const Aq = Oq > this.budget ? this.budget / Oq : 1;
-         if (0 === Oq || Aq * Oq < 1) return;
-         const cq = Eq[0],
- ... (48 more removed lines; see GitHub link above)
+       _isValid() {
+         return void 0 !== this._executeFunc ? null : "Execute function is not set (call setExecuteFunc to set it)"
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16630-L16641` → after: `L478-L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L478-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L478-L480) · [Before (L16630-L16641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16630-L16641)

```diff
-     const Mj = new Set(["Sky Spring"]);
- 
-     function Tj(qq, Eq, gq) {
-       const Yq = qq.split("|")[0];
-       return "Air" !== Eq || gq || ! function(qq) {
-         const Eq = qq.split("|")[0];
-         return void 0 !== mg[Eq] || Mj.has(Eq)
-       }(Yq) ? null : qq
-     }
-     class zj {
-       constructor() {
-         this.lastTapAt = -1 / 0
+     class RC extends GC {
+       static IsObjectListPass(CC) {
+         return void 0 !== CC.setObjectList
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16643-L16645` → after: `L482-L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L482-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L482-L483) · [Before (L16643-L16645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16643-L16645)

```diff
-       isNewPress(qq) {
-         const Eq = qq - this.lastTapAt >= 300;
-         return this.lastTapAt = qq, Eq
+       get objectList() {
+         return this._objectList
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16647-L16650` → after: `L485-L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L485-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L485-L486) · [Before (L16647-L16650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16647-L16650)

```diff
-     }
-     class Sj {
-       constructor() {
-         this.presses = new zj, this.predicted = null
+       setObjectList(CC) {
+         this._objectList = CC
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16652-L16657` → after: `L488-L489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L488-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L488-L489) · [Before (L16652-L16657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16652-L16657)

```diff
-       tap(qq, Eq) {
-         const gq = this.presses.isNewPress(Eq);
-         return gq && (this.predicted = {
-           station: qq,
-           at: Eq
-         }), gq
+       constructor(CC, zC, ZC, QC) {
+         super(CC, zC, ZC), this._engine = QC
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16659-L16661` → after: `L491-L493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L491-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L491-L493) · [Before (L16659-L16661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16659-L16661)

```diff
-       consumeServerOpen(qq, Eq) {
-         const gq = this.predicted;
-         return !(null === gq || gq.station !== qq || Eq - gq.at > 2e3) && (this.predicted = null, !0)
+       _isValid() {
+         const CC = super._isValid();
+         return CC || (void 0 !== this._objectList ? null : "Object list is not set (call setObjectList to set it)")
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16664-L16666` → after: `L496-L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L496-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L496-L498) · [Before (L16664-L16666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16664-L16666)

```diff
-     class pj {
-       constructor() {
-         this.thrustAt = -1 / 0
+     class AC extends GC {
+       static IsRenderPass(CC) {
+         return void 0 !== CC.setRenderTarget
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16668-L16669` → after: `L500-L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L500-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L500-L501) · [Before (L16668-L16669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16668-L16669)

```diff
-       lit(qq, Eq) {
-         return qq && (this.thrustAt = Eq), Eq - this.thrustAt < 200
+       get renderTarget() {
+         return this._renderTarget
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16671-L16699` → after: `L503-L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L503-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L503-L504) · [Before (L16671-L16699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16671-L16699)

```diff
-     }
-     const Gj = [.1, .05, .1],
-       Lj = {
-         texture: "effect_5",
-         WB: Math.ceil(48),
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

#### 56. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16701-L16702` → after: `L506-L507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L506-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L506-L507) · [Before (L16701-L16702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16701-L16702)

```diff
-       vy(qq, Eq) {
-         for (const [gq, Yq] of Eq.baf2JetFlames) qq.isLocalPlayer(gq) || (Yq ? this.lit.add(gq) : this.lit.delete(gq))
+       get frameGraphRenderTarget() {
+         return this._frameGraphRenderTarget
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16704-L16709` → after: `L509-L510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L509-L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L509-L510) · [Before (L16704-L16709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16704-L16709)

```diff
-       onAfterRender(qq, Eq) {
-         const gq = performance.now(),
-           Yq = this.hold.lit(this.selfThrusting(qq, Eq), gq);
-         for (const [lq, Oq] of this.flames)(lq === Eq ? Yq : this.lit.has(lq)) || this.setEmitting(Oq, !1), lq === Eq || qq.getPositionView(lq) ? !Oq.emitting && gq - Oq.offAt >= 1300 && (Oq.particles.stop(), this.flames.delete(lq)) : (Oq.particles.dispose(), this.flames.delete(l … [truncated]
-         Yq && this.draw(qq, Eq, Eq);
-         for (const lq of this.lit) this.draw(qq, Eq, lq)
+       constructor(CC, zC, ZC, QC) {
+         super(CC, zC, ZC), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = QC
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16711-L16713` → after: `L512-L513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L512-L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L512-L513) · [Before (L16711-L16713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16711-L16713)

```diff
-       dispose() {
-         for (const qq of this.flames.values()) qq.particles.dispose();
-         this.flames.clear(), this.lit.clear()
+       setRenderTarget(CC) {
+         this._renderTarget = CC
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16715-L16724` → after: `L515-L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L515-L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L515-L516) · [Before (L16715-L16724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16715-L16724)

```diff
-       selfThrusting(qq, Eq) {
-         var gq;
-         const Yq = qq.getLocalPlayerMovement();
-         return !!Yq && (null !== (lq = {
-           option: null !== (gq = qq.getClientOption(Eq, "jumpHoldThrust")) && void 0 !== gq ? gq : null,
-           jumping: Yq.jumpHeld,
-           onGround: Yq.onGround,
-           alive: qq.isAlive(Eq)
-         }).option && lq.option.maxUpSpeed >= 0 && lq.jumping && !lq.onGround && lq.alive);
-         var lq
+       setRenderTargetDepth(CC) {
+         this._renderTargetDepth = CC
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16726-L16738` → after: `L518-L522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L518-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L518-L522) · [Before (L16726-L16738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16726-L16738)

```diff
-       draw(qq, Eq, gq) {
-         var Yq, lq;
-         const Oq = this.pos;
-         if (!qq.readDrawnPosition(gq, Oq)) return;
-         const mq = qq.readDrawnPosition(Eq, this.camera) ? this.camera : Oq;
-         if (!((Oq[0] - mq[0]) ** 2 + (Oq[1] - mq[1]) ** 2 + (Oq[2] - mq[2]) ** 2 < 1600) || !qq.particlesEnabled()) {
-           const qq = this.flames.get(gq);
-           return void(qq && this.setEmitting(qq, !1))
-         }
-         const xq = null !== (Yq = this.flames.get(gq)) && void 0 !== Yq ? Yq : this.create(qq, gq, Oq),
-           Aq = null !== (lq = qq.getDrawnHeading(gq)) && void 0 !== lq ? lq : 0,
-           cq = this.at;
-         cq[0] = Oq[0] - .35 * Math.sin(Aq), cq[1] = Oq[1] + 1.05, cq[2] = Oq[2] - .35 * Math.cos(Aq), xq.particles.moveTo(cq), this.setEmitting(xq, !0)
+       addDependencies(CC) {
+         if (void 0 !== CC)
+           if (Array.isArray(CC))
+             for (const zC of CC) this._dependencies.add(zC);
+           else this._dependencies.add(CC)
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16740-L16741` → after: `L524-L531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L524-L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L524-L531) · [Before (L16740-L16741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16740-L16741)

```diff
-       setEmitting(qq, Eq) {
-         qq.emitting !== Eq && (qq.emitting = Eq, Eq || (qq.offAt = performance.now()), qq.particles.setEmitRate(Eq ? 60 : 0))
+       collectDependencies(CC) {
+         const zC = this._dependencies.keys();
+         for (let ZC = zC.next(); !0 !== ZC.done; ZC = zC.next()) CC.add(ZC.value);
+         if (void 0 !== this._renderTarget)
+           if (Array.isArray(this._renderTarget))
+             for (const ZC of this._renderTarget) void 0 !== ZC && CC.add(ZC);
+           else CC.add(this._renderTarget);
+         void 0 !== this._renderTargetDepth && CC.add(this._renderTargetDepth)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16743-L16752` → after: `L533-L536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L533-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L533-L536) · [Before (L16743-L16752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16743-L16752)

```diff
-       create(qq, Eq, gq) {
-         const Yq = {
-           particles: qq.createParticles(Lj, {
-             pos: gq,
-             half: Gj
-           }),
-           emitting: !1,
-           offAt: performance.now()
-         };
-         return this.flames.set(Eq, Yq), Yq
+       setOutputLayerAndFaceIndices(CC) {
+         const zC = this.frameGraphRenderTarget.renderTargetWrapper;
+         if (zC)
+           for (const ZC of CC) zC.setLayerAndFaceIndex(ZC.targetIndex, ZC.layerIndex, ZC.faceIndex)
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16754-L16777` → after: `L538-L539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L538-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L538-L539) · [Before (L16754-L16777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16754-L16777)

```diff
-     }
- 
-     function kj(qq) {
-       return "Reactor Frame" === YY("reactor", qq)
-     }
- 
-     function Rj(qq) {
-       return Gg("reactor", qq) && !kj(qq) && (qq.startsWith("Reactor Glass") || qq.startsWith("Reactor Port"))
-     }
-     const Uj = "baf2Goal";
-     class Fj {
-       constructor() {
-         this.goal = null, this.open = null, this.checkedAt = -1 / 0, this.subs = [Ml.i.subscribe("setDirectionArrow", (qq => {
-           let {
-             id: Eq,
-             position: gq
- ... (8 more removed lines; see GitHub link above)
+       _initialize() {
+         this._frameGraphRenderTarget = this._context.createRenderTarget(this.name, this._renderTarget, this._renderTargetDepth, this.depthReadOnly, this.stencilReadOnly), super._initialize()
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16779-L16780` → after: `L541-L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L541-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L541-L542) · [Before (L16779-L16780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16779-L16780)

```diff
-       dispose() {
-         for (const qq of this.subs) Ml.i.unsubscribe(qq)
+       _execute() {
+         this._context.bindRenderTarget(this._frameGraphRenderTarget), super._execute(), this._context.restoreDefaultFramebuffer()
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16782-L16804` → after: `L544-L549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L544-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L544-L549) · [Before (L16782-L16804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16782-L16804)

```diff
-       sideOf(qq, Eq, gq, Yq) {
-         const lq = this.goal;
-         if (!lq) return 0;
-         gq - this.checkedAt > 1e3 && (this.checkedAt = gq, this.open = function(qq, Eq) {
-           const [gq, Yq, lq] = qq.map(Math.floor);
-           if (!Rj(Eq(gq, Yq, lq))) return null;
-           for (const [Oq, mq] of [
-               [1, 0],
-               [0, 1]
-             ]) {
-             const qq = Eq(gq + Oq, Yq, lq + mq),
-               xq = Eq(gq - Oq, Yq, lq - mq);
-             if (kj(xq) && Rj(qq)) return [Oq, 0, mq];
-             if (kj(qq) && Rj(xq)) return [0 - Oq, 0, 0 - mq]
-           }
-           return null
- ... (7 more removed lines; see GitHub link above)
+       _isValid() {
+         const CC = super._isValid();
+         return CC || (void 0 !== this._renderTarget || void 0 !== this.renderTargetDepth ? null : "Render target and render target depth cannot both be undefined.")
+       }
+       _dispose() {
+         this._frameGraphRenderTarget?.dispose()
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16808-L16817` → after: `L554-L555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L554-L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L554-L555) · [Before (L16808-L16817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16808-L16817)

```diff
-       constructor() {
-         this.arrows = document.getElementsByClassName("DirectionArrow"), this.trackers = document.getElementsByClassName("Baf2QuestTracker"), this.statBars = document.getElementsByClassName("BottomScreenStatBarList"), this.toasts = document.getElementsByClassName("Baf2Toast"), th … [truncated]
-           this.boxStale = !0
-         }, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.EQ = () => {
-           this.boxStale = !0, this.barsStale = !0, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight
-         }, this.sizes = new ResizeObserver((qq => {
-           for (const Eq of qq) Eq.target === this.tracker ? this.boxStale = !0 : this.halfWidths.set(Eq.target, Eq.borderBoxSize[0].inlineSize / 2)
-         })), this.hudStyle = new MutationObserver(this.onChange), this.run = () => {
-           this.queued = !1, this.eN || this.clear()
-         }, window.addEventListener("resize", this.EQ)
+       get name() {
+         return this._name
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16819-L16821` → after: `L557-L558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L557-L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L557-L558) · [Before (L16819-L16821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16819-L16821)

```diff
-       onAfterRender(qq, Eq) {
-         var gq;
-         this.api = qq, this.project = null !== (gq = null === Eq || void 0 === Eq ? void 0 : Eq.projectWorldPosToScreenPos) && void 0 !== gq ? gq : null, this.queued || this.eN || (this.queued = !0, queueMicrotask(this.run))
+       set name(CC) {
+         this._name = CC
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16823-L16828` → after: `L560-L561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L560-L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L560-L561) · [Before (L16823-L16828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16823-L16828)

```diff
-       dispose() {
-         this.eN = !0;
-         for (const qq of this.moved.keys()) qq.style.transform = "";
-         this.moved.clear();
-         for (const qq of this.sideLabels.keys()) qq.style.transform = "";
-         this.sideLabels.clear(), this.side.dispose(), this.watch(null), this.sizes.disconnect(), window.removeEventListener("resize", this.EQ)
+       get disabled() {
+         return this._disabled
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16830-L16851` → after: `L563-L564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L563-L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L563-L564) · [Before (L16830-L16851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16830-L16851)

```diff
-       clear() {
-         for (const Oq of this.moved.keys()) Oq.isConnected || this.moved.delete(Oq);
-         for (const Oq of this.sideLabels.keys()) Oq.isConnected || this.sideLabels.delete(Oq);
-         if (0 === this.arrows.length) return;
-         const qq = performance.now(),
-           Eq = qq - this.refreshedAt > 1e3;
-         Eq && (this.refreshedAt = qq, this.boxStale = !0, this.barsStale = !0, this.forgetGoneLabels());
-         const gq = this.trackerBox(),
-           Yq = this.barsBox(),
-           lq = this.toastBox(Eq);
-         (gq || Yq || lq) && Eq && (this.em = parseFloat(getComputedStyle(this.arrows[0]).fontSize) || this.em);
-         for (let Oq = 0; Oq < this.arrows.length; Oq++) {
-           const Eq = this.arrows[Oq];
-           this.labelOffsets.set(Eq, this.runLabelAside(Eq, qq));
-           const mq = (gq ? this.shiftLeftOf(Eq, gq) : 0) || this.shiftOnScreen(Eq),
-             xq = Math.min(Yq ? this.liftAbove(Eq, Yq, mq) : 0, lq ? this.liftAbove(Eq, lq, mq) : 0),
- ... (6 more removed lines; see GitHub link above)
+       set disabled(CC) {
+         this._disabled = CC
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16853-L16870` → after: `L566-L567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L566-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L566-L567) · [Before (L16853-L16870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16853-L16870)

```diff
-       trackerBox() {
-         var qq, Eq;
-         const gq = null !== (qq = this.tracker) && void 0 !== qq && qq.isConnected ? this.tracker : null !== (Eq = this.trackers[0]) && void 0 !== Eq ? Eq : null;
-         if (gq !== this.tracker && this.watch(gq), this.boxStale && gq) {
-           var Yq, lq, Oq;
-           this.boxStale = !1;
-           const qq = gq.closest(".NoRoom") ? null : gq.getBoundingClientRect(),
-             Eq = qq && qq.width > 0 ? null === (Yq = this.hud) || void 0 === Yq ? void 0 : Yq.getBoundingClientRect() : void 0,
-             mq = qq && Eq ? Math.max(qq.top, Eq.top) : null !== (lq = null === qq || void 0 === qq ? void 0 : qq.top) && void 0 !== lq ? lq : 0,
-             xq = qq && Eq ? Math.min(qq.bottom, Eq.bottom) : null !== (Oq = null === qq || void 0 === qq ? void 0 : qq.bottom) && void 0 !== Oq ? Oq : 0;
-           this.box = qq && qq.width > 0 && xq > mq ? {
-             left: qq.left,
-             top: mq,
-             right: qq.right,
-             bottom: xq
-           } : null
- ... (2 more removed lines; see GitHub link above)
+       get passes() {
+         return this._passes
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16872-L16884` → after: `L569-L570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L569-L570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L569-L570) · [Before (L16872-L16884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16872-L16884)

```diff
-       barsBox() {
-         if (this.barsStale) {
-           var qq;
-           this.barsStale = !1;
-           const Eq = null === (qq = this.statBars[0]) || void 0 === qq ? void 0 : qq.getBoundingClientRect();
-           this.bars = Eq && Eq.width > 0 && Eq.height > 0 ? {
-             left: Eq.left,
-             top: Eq.top,
-             right: Eq.right,
-             bottom: Eq.bottom
-           } : null
-         }
-         return this.bars
+       get passesDisabled() {
+         return this._passesDisabled
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16886-L16899` → after: `L572-L573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L572-L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L572-L573) · [Before (L16886-L16899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16886-L16899)

```diff
-       toastBox(qq) {
-         var Eq;
-         const gq = null !== (Eq = this.toasts[0]) && void 0 !== Eq ? Eq : null;
-         if (gq !== this.toastEl || qq && gq) {
-           this.toastEl = gq;
-           const qq = null === gq || void 0 === gq ? void 0 : gq.getBoundingClientRect();
-           this.toast = qq && qq.width > 0 && qq.height > 0 ? {
-             left: qq.left,
-             top: qq.top,
-             right: qq.right,
-             bottom: qq.bottom
-           } : null
-         }
-         return this.toast
+       getClassName() {
+         return "FrameGraphTask"
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16901-L16911` → after: `L575-L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L575-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L575-L576) · [Before (L16901-L16911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16901-L16911)

```diff
-       liftAbove(qq, Eq, gq) {
-         var Yq;
-         const lq = this.anchorOf(qq);
-         if (!lq) return 0;
-         const Oq = lq.x + gq + (null !== (Yq = this.labelOffsets.get(qq)) && void 0 !== Yq ? Yq : 0),
-           {
-             halfWidth: mq,
-             labelled: xq
-           } = this.extentOf(qq),
-           Aq = lq.y + this.em * (xq ? 6.2 : 3);
-         return Aq < Eq.top - 6 || Oq + mq < Eq.left - 6 || Oq - mq > Eq.right + 6 ? 0 : Eq.top - 6 - Aq
+       initAsync() {
+         return Promise.resolve()
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16913-L16920` → after: `L578-L579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L578-L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L578-L579) · [Before (L16913-L16920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16913-L16920)

```diff
-       watch(qq) {
-         var Eq, gq;
-         this.tracker && this.sizes.unobserve(this.tracker), null === (Eq = this.hud) || void 0 === Eq || Eq.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.tracker = qq, this.hud = null !== (gq = null === qq || void 0 === qq ? void 0 : qq.closest(". … [truncated]
-           passive: !0
-         }), this.hudStyle.observe(this.hud, {
-           attributes: !0,
-           attributeFilter: ["style", "class"]
-         }))
+       isReady() {
+         return !0
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16922-L16932` → after: `L581-L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L581-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L581-L582) · [Before (L16922-L16932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16922-L16932)

```diff
-       shiftLeftOf(qq, Eq) {
-         var gq;
-         const Yq = this.anchorOf(qq);
-         if (!Yq) return 0;
-         const {
-           y: lq
-         } = Yq, Oq = Yq.x + (null !== (gq = this.labelOffsets.get(qq)) && void 0 !== gq ? gq : 0), mq = this.em, {
-           halfWidth: xq,
-           labelled: Aq
-         } = this.extentOf(qq), cq = lq - mq, uq = Oq + xq;
-         return lq + mq * (Aq ? 6.2 : 3) < Eq.top || cq > Eq.bottom || uq < Eq.left - 6 || Oq - xq > Eq.right ? 0 : Math.max(Eq.left - 6 - uq, 6 - (Oq - xq))
+       dispose() {
+         this._reset(), this.onTexturesAllocatedObservable.clear(), this.onBeforeTaskExecute.clear(), this.onAfterTaskExecute.clear()
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16934-L16941` → after: `L584-L585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L584-L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L584-L585) · [Before (L16934-L16941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16934-L16941)

```diff
-       shiftOnScreen(qq) {
-         var Eq;
-         const gq = this.anchorOf(qq);
-         if (!gq) return 0;
-         const {
-           halfWidth: Yq
-         } = this.extentOf(qq), lq = gq.x + (null !== (Eq = this.labelOffsets.get(qq)) && void 0 !== Eq ? Eq : 0), Oq = lq + Yq - (this.innerWidth - 6);
-         return Oq > 0 ? -Oq : Math.max(0, 6 - (lq - Yq))
+       constructor(CC, zC) {
+         this._passes = [], this._passesDisabled = [], this._disabled = !1, this.onTexturesAllocatedObservable = new xC.d, this.onBeforeTaskExecute = new xC.d, this.onAfterTaskExecute = new xC.d, this.name = CC, this._frameGraph = zC, this._reset()
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16943-L16953` → after: `L587-L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L587-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L587-L590) · [Before (L16943-L16953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16943-L16953)

```diff
-       runLabelAside(qq, Eq) {
-         var gq;
-         let Yq = null;
-         for (let mq = 0; mq < qq.children.length; mq++) qq.children[mq].classList.contains("DirectionArrowLabel") && (Yq = qq.children[mq]);
-         if (!Yq) return 0;
-         const lq = qq.classList.contains("DirectionArrowOnScreen") && this.project ? this.anchorOf(qq) : null,
-           Oq = (lq && this.api ? this.side.sideOf(this.api, {
-             x: lq.x / this.innerWidth * 100,
-             y: lq.y / this.innerHeight * 100
-           }, Eq, this.project) : 0) * this.halfWidthOf(Yq);
-         return Oq !== (null !== (gq = this.sideLabels.get(Yq)) && void 0 !== gq ? gq : 0) && (Yq.style.transform = 0 === Oq ? "" : `translateX(-50%) translateX(${Oq}px)`, 0 === Oq ? this.sideLabels.delete(Yq) : this.sideLabels.set(Yq, Oq)), Oq
+       _reset() {
+         for (const CC of this._passes) CC._dispose();
+         for (const CC of this._passesDisabled) CC._dispose();
+         this._passes.length = 0, this._passesDisabled.length = 0
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16955-L16961` → after: `L592-L606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L592-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L592-L606) · [Before (L16955-L16961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16955-L16961)

```diff
-       extentOf(qq) {
-         let Eq = this.em,
-           gq = !1;
-         for (let Yq = 0; Yq < qq.children.length; Yq++) {
-           const lq = qq.children[Yq],
-             Oq = lq.classList.contains("DirectionArrowLabel");
-           gq ||= Oq, (Oq || lq.classList.contains("DirectionArrowDistance")) && (Eq = Math.max(Eq, this.halfWidthOf(lq)))
+       _addPass(CC, zC) {
+         zC ? this._passesDisabled.push(CC) : this._passes.push(CC)
+       }
+       _checkTask() {
+         let CC, zC = null,
+           ZC = null;
+         for (const fC of this._passes) {
+           const QC = fC._isValid();
+           if (QC) throw new Error(`Pass "${fC.name}" is not valid. ${QC}`);
+           if (AC.IsRenderPass(fC)) {
+             const CC = Array.isArray(fC.renderTarget) ? fC.renderTarget : [fC.renderTarget];
+             zC = [];
+             for (const ZC of CC) void 0 !== ZC && zC.push(this._frameGraph.textureManager.getTextureFromHandle(ZC));
+             ZC = void 0 !== fC.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(fC.renderTargetDepth) : null
+           } else RC.IsObjectListPass(fC) && (CC = fC.objectList)
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16963-L16965` → after: `L608-L640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L608-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L608-L640) · [Before (L16963-L16965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16963-L16965)

```diff
-         return {
-           halfWidth: Eq,
-           labelled: gq
+         let QC, wC = null,
+           bC = [],
+           nC = null;
+         for (const fC of this._passesDisabled) {
+           const CC = fC._isValid();
+           if (CC) throw new Error(`Pass "${fC.name}" is not valid. ${CC}`);
+           if (AC.IsRenderPass(fC)) {
+             const CC = Array.isArray(fC.renderTarget) ? fC.renderTarget : [fC.renderTarget];
+             wC = [];
+             for (const zC of CC) void 0 !== zC && wC.push(this._frameGraph.textureManager.getTextureFromHandle(zC));
+             bC = CC, nC = void 0 !== fC.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(fC.renderTargetDepth) : null
+           } else RC.IsObjectListPass(fC) && (QC = fC.objectList)
+         }
+         if (this._passesDisabled.length > 0) {
+           if (!this._checkSameRenderTarget(zC, wC)) {
+             let CC = !0;
+ ... (17 more added lines; see GitHub link above)
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16968-L16973` → after: `L644-L651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L644-L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L644-L651) · [Before (L16968-L16973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16968-L16973)

```diff
-       halfWidthOf(qq) {
-         let Eq = this.halfWidths.get(qq);
-         return void 0 === Eq && (Eq = qq.offsetWidth / 2, this.halfWidths.set(qq, Eq), this.sizes.observe(qq), this.labels.add(qq)), Eq
-       }
-       forgetGoneLabels() {
-         for (const qq of this.labels) qq.isConnected || (this.sizes.unobserve(qq), this.halfWidths.delete(qq), this.labels.delete(qq))
+       _initializePasses() {
+         this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
+         try {
+           for (const CC of this._passes) CC._initialize();
+           for (const CC of this._passesDisabled) CC._initialize()
+         } finally {
+           this._frameGraph.engine._debugPopGroup?.()
+         }
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16975-L16988` → after: `L653-L658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L653-L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L653-L658) · [Before (L16975-L16988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16975-L16988)

```diff
-       anchorOf(qq) {
-         const Eq = qq.style.translate,
-           gq = this.anchors.get(qq);
-         if (gq && gq.translate === Eq && gq.innerWidth === this.innerWidth && gq.innerHeight === this.innerHeight) return gq;
-         const Yq = /^(-?[\d.]+)vw (-?[\d.]+)vh$/.exec(Eq);
-         if (!Yq) return null;
-         const lq = {
-           translate: Eq,
-           x: parseFloat(Yq[1]) / 100 * this.innerWidth,
-           y: parseFloat(Yq[2]) / 100 * this.innerHeight,
-           innerWidth: this.innerWidth,
-           innerHeight: this.innerHeight
-         };
-         return this.anchors.set(qq, lq), lq
+       _checkSameRenderTarget(CC, zC) {
+         if (null === CC || null === zC) return CC === zC;
+         if (CC.length !== zC.length) return !1;
+         for (let ZC = 0; ZC < CC.length; ZC++)
+           if (CC[ZC] !== zC[ZC]) return !1;
+         return !0
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L16991-L17016` → after: `L661-L663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L661-L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L661-L663) · [Before (L16991-L17016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L16991-L17016)

```diff
-     const Xj = "Baf2ArrowText";
- 
-     function wj(qq, Eq) {
-       const gq = qq.rows.find((qq => qq.current));
-       return Mq(qq.tutorial) && null !== gq && void 0 !== gq && gq.item && Ul(gq) && bq(gq.item).includes(Eq) ? gq.item : null
-     }
-     const Kj = new class {
-       constructor(qq) {
-         this.select = qq, this.picks = new Map
-       }
-       open(qq, Eq, gq) {
-         const Yq = wj(Eq, qq);
-         null !== Yq && this.zW(qq, Yq, gq)
-       }
-       follow(qq, Eq) {
-         if (xq())
- ... (10 more removed lines; see GitHub link above)
+     class IC extends JC {
+       get alphaMode() {
+         return this.postProcess.alphaMode
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L17018-L17022` → after: `L665-L666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L665-L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L665-L666) · [Before (L17018-L17022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L17018-L17022)

```diff
-       zW(qq, Eq, gq) {
-         this.picks.set(qq, {
-           item: Eq,
-           had: gq(Eq)
-         }), this.select(qq, Eq)
+       set alphaMode(CC) {
+         this.postProcess.alphaMode = CC
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L17024-L17030` → after: `L668-L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L668-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L668-L669) · [Before (L17024-L17030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L17024-L17030)

```diff
-     }(Tl.v);
- 
-     function Cj(qq) {
-       return Eq => {
-         let gq = 0;
-         for (const Yq of qq.getInventoryItems())(null === Yq || void 0 === Yq ? void 0 : Yq.name) === Eq && (gq += null === Yq.amount ? 1 : Math.max(Yq.amount, 0));
-         return gq
+       get drawWrapper() {
+         return this._postProcessDrawWrapper
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L17032-L17050` → after: `L671-L701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L671-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L671-L701) · [Before (L17032-L17050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L17032-L17050)

```diff
-     }
- 
-     function Ij(qq, Eq, gq, Yq) {
-       qq.getClientOption(Eq, "canCraft") && "inventory" !== ol.b.get("openInGameMenuName") && (Kj.open(gq, Yq.get(), Cj(qq)), Ml.i.TV("toggleMenu", `inventory|${gq}`))
-     }
-     let ej = null,
-       Dj = !1;
- 
-     function qH(qq) {
-       const Eq = yO();
-       qq === ej && Eq === Dj || (ej = qq, Dj = Eq, (0, Tl.z)(function(qq, Eq) {
-         const gq = new Map;
-         for (let Yq = qq + 1; Yq <= lq.length; Yq++) {
-           const lq = FO(Yq, qq, Eq);
-           if (lq)
-             for (const Eq of jq(Yq).unlocks) gq.set(Eq, {
- ... (3 more removed lines; see GitHub link above)
+       constructor(CC, zC, ZC) {
+         super(CC, zC), this.sourceSamplingMode = 2, this.depthReadOnly = !1, this.stencilReadOnly = !1, this.disableColorWrite = !1, this.drawBackFace = !1, this.depthTest = !0, this.postProcess = ZC, this._postProcessDrawWrapper = this.postProcess.drawWrapper, this.outputTexture … [truncated]
+       }
+       isReady() {
+         return this.postProcess.isReady()
+       }
+       getClassName() {
+         return "FrameGraphPostProcessTask"
+       }
+       record() {
+         let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
+           zC = arguments.length > 1 ? arguments[1] : void 0,
+           ZC = arguments.length > 2 ? arguments[2] : void 0;
+         if (void 0 === this.sourceTexture && void 0 === this.targetTexture) throw new Error(`FrameGraphPostProcessTask "${this.name}": sourceTexture or targetTexture is required`);
+         const QC = void 0 !== this.sourceTexture ? this._frameGraph.textureManager.getTextureCreationOptions(this.sourceTexture) : void 0;
+         if (QC && (QC.options.samples = 1), this._frameGraph.textureManager.resolveDanglingHandle(this.outputTexture, this.targetTexture, this.name, QC), void 0 !== this.depthAttachmentTexture && this._frameGraph.textureManager.resolveDanglingHandle(this.outputDepthAttachmentText … [truncated]
+ ... (15 more added lines; see GitHub link above)
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L17060-L17119` → after: `L705-L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L705-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L705-L706) · [Before (L17060-L17119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L17060-L17119)

```diff
-     }
-     const gH = "buildAFactory2Game:",
-       YH = {
-         on: "lightbulb",
-         hud: "list",
-         off: "eye-slash"
-       },
-       lH = {
-         on: `${gH}tutorialButtonOn`,
-         hud: `${gH}tutorialButtonHud`,
-         off: `${gH}tutorialButtonOff`
-       },
-       OH = {
-         on: `${gH}tutorialPickedOn`,
-         hud: `${gH}tutorialPickedHud`,
-         off: `${gH}tutorialPickedOff`
- ... (44 more removed lines; see GitHub link above)
+       dispose() {
+         this.postProcess.dispose(), super.dispose()
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L17122-L17140` → after: `L709-L711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L709-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L709-L711) · [Before (L17122-L17140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L17122-L17140)

```diff
- 
-     function xH(qq, Eq, gq) {
-       var Yq, lq;
-       const Oq = qq.getTargetedBlock();
-       if (!Oq || ! function(qq, Eq, gq) {
-           if ("Chest" !== Eq) return !1;
-           const Yq = qq.split("|")[0];
-           if (!cg(Yq) || 0 === TE[Yq].outputSlots.length) return !1;
-           const lq = Hd(qq);
-           return gq[0] === lq[0] && gq[1] === lq[1] && gq[2] === lq[2]
-         }(gq, null === (Yq = qq.Ngq(Eq)) || void 0 === Yq ? void 0 : Yq.name, Oq.normal)) return !1;
-       const [mq, xq, Aq] = Oq.MV, cq = qq.getBlockId(mq, xq, Aq);
-       return 0 === cq || !0 === (null === (lq = Zq.i[cq]) || void 0 === lq ? void 0 : lq.canBePlacedOver)
-     }
-     var AH = gq(36796);
-     const cH = new Set(Vg.b);
- ... (3 more removed lines; see GitHub link above)
+     class iC extends IC {
+       constructor(CC, zC, ZC) {
+         super(CC, zC, ZC || new FC(CC, zC.engine))
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L17142-L17160` → after: `L713-L721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L713-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L713-L721) · [Before (L17142-L17160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L17142-L17160)

```diff
-       onAltAction(qq, Eq, gq) {
-         const Yq = qq.getTargetedBlock();
-         if (!Yq || function(qq) {
-             const Eq = qq.split("|")[0];
-             return cg(Eq) || null !== tY(Eq) || vq(Eq) || Vg.b.includes(Eq)
-           }(gq) && !cH.has(gq.split("|")[0])) return;
-         const lq = qq.Ngq(Eq);
-         if (!lq || !cH.has(lq.name.split("|")[0]) || Date.now() - this.lastAt < 4e3) return;
-         const Oq = lq.typeObj.id,
-           [mq, xq, Aq] = Yq.MV,
-           cq = qq.getBlockId(mq, xq, Aq),
-           uq = Zq.i[cq];
-         (0 === cq || null !== uq && void 0 !== uq && uq.wW || null !== uq && void 0 !== uq && uq.canBePlacedOver) && qq.isSolidToPlayerBlockId(Oq) && qq.canModifyBlockAt(mq, xq, Aq) && qq.MEq(mq, xq, Aq, Oq) && !qq.MEq(mq, xq, Aq, Oq, Eq) && (this.lastAt = Date.now(), this.toasts … [truncated]
-           baf2ToastText: [(0, Tq.Yd)({
-             translationKey: "buildAFactory2Game:beltStepBack"
-           }, Tq.M.whiteUiText)],
- ... (3 more removed lines; see GitHub link above)
+       getClassName() {
+         return "FrameGraphFXAATask"
+       }
+       record() {
+         let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
+           zC = arguments.length > 1 ? arguments[1] : void 0,
+           ZC = arguments.length > 2 ? arguments[2] : void 0;
+         const QC = super.record(CC, zC, ZC);
+         return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, QC
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L17163-L17165` → after: `L724-L727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L724-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L724-L727) · [Before (L17163-L17165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L17163-L17165)

```diff
-     class BH {
-       constructor(qq) {
-         this.show = qq, this.started = null, this.gatedThisHold = new Set, this.hintedAt = new Map
+     var vC = ZC(41640);
+     class eC extends IC {
+       constructor(CC, zC, ZC) {
+         super(CC, zC, ZC || new vC.g(CC, zC.engine))
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L17167-L17182` → after: `L729-L730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L729-L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L729-L730) · [Before (L17167-L17182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L17167-L17182)

```diff
-       onMining(qq, Eq, gq) {
-         var Yq;
-         if (!Eq) return this.started = null, void this.gatedThisHold.clear();
-         if (!qq) return void(this.started = null);
-         const lq = `${qq.x},${qq.y},${qq.z},${qq.Fc}`;
-         if (lq === this.started) return;
-         this.started = lq;
-         const Oq = pY(qq.y) ? Ej(qq.block, qq.Fc, qq.level) : null;
-         if (null === Oq || this.gatedThisHold.has(lq)) return;
-         this.gatedThisHold.add(lq);
-         const mq = qq.block.split("|")[0];
-         gq - (null !== (Yq = this.hintedAt.get(mq)) && void 0 !== Yq ? Yq : -1 / 0) < 5e3 || (this.hintedAt.set(mq, gq), this.show({
-           baf2ToastText: gj(Oq, qq.block),
-           baf2ToastMs: 2500,
-           baf2ToastStyle: "baf2ToastWarn"
-         }))
+       getClassName() {
+         return "FrameGraphPassTask"
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L17185-L17203` → after: `L733-L743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L733-L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L733-L743) · [Before (L17185-L17203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L17185-L17203)

```diff
-     var WH = gq(38);
- 
-     function NH(qq, Eq) {
-       const gq = [...qq.baf2CoreBankPaused];
-       for (const [lq] of qq.baf2CoreBanked) gq.push(lq);
-       for (const mq of lq) {
-         for (const {
-             item: qq
-           }
-           of mq.cost) gq.push(qq);
-         for (const qq of mq.newDeposits) gq.push(qq.block);
-         for (const qq of mq.unlocks) gq.push(qq, iq(qq));
-         mq.reward && gq.push(mq.reward);
-         for (const {
-             item: qq
-           }
- ... (3 more removed lines; see GitHub link above)
+     var hC = ZC(39910),
+       KC = ZC(39993),
+       YC = ZC(39953),
+       dC = ZC(40078),
+       mC = ZC(37142);
+     class HC {
+       getRenderCamera(CC) {
+         if (this._renderCamera) return this._renderCamera;
+         {
+           let zC;
+           return zC = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, CC && zC && zC.isRigCamera ? zC.rigParent : zC
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L17206-L17208` → after: `L746-L747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L746-L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L746-L747) · [Before (L17206-L17208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L17206-L17208)

```diff
-       return {
-         message: qq,
-         itemNames: Eq([...new Set(gq)])
+       setRenderCamera(CC) {
+         this._renderCamera = CC
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L17210-L17344` → after: `L749-L750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L749-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L749-L750) · [Before (L17210-L17344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L17210-L17344)

```diff
-     }
-     const aH = "baf2MultiblockGuide";
-     const VH = new Map;
-     const dH = function(qq, Eq, gq, lq) {
-       let {
-         localPlayerId: Oq
-       } = lq;
-       const mq = new dx,
-         xq = new DW,
-         cq = new mN,
-         uq = new lN(cq),
-         Bq = (qq, Eq) => {
-           Eq ? uq.observe(qq) : uq.unobserve(qq)
-         },
-         Wq = new YN,
-         Nq = new uN(Bq),
- ... (119 more removed lines; see GitHub link above)
+       _getSharedGizmoLight() {
+         return this._sharedGizmoLight || (this._sharedGizmoLight = new dC.b("shared gizmo light", new qC.r(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = mC.e.Gray()), this._sharedGizmoLight
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L17346-L17348` → after: `L752-L753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L752-L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L752-L753) · [Before (L17346-L17348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L17346-L17348)

```diff
- 
-       function PE() {
-         (0, Hl.e)(), oE(null)
+       static get DefaultUtilityLayer() {
+         return null == HC._DefaultUtilityLayer ? HC._CreateDefaultUtilityLayerFromScene(oC.c.LastCreatedScene) : HC._DefaultUtilityLayer
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L17350-L17408` → after: `L755-L787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L755-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L755-L787) · [Before (L17350-L17408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L17350-L17408)

```diff
-       let QE = new Set,
-         yE = !1;
-       const tE = {
-         onCreate: qq => {
-           dq = qq, dq.setGroundArrowStyle({
-             width: .6,
-             alpha: .5,
-             endAtSolidFace: !0
-           });
-           for (const Eq of nE) {
-             const qq = TE[Eq].inputSlots ? fx(mq) : bx(Eq, mq, bq, jq);
-             HE.push((0, dl.h)(Eq, qq))
-           }
-           HE.push((0, Hl.r)((0, Yq.createElement)(Yq.Fragment, null, (0, Yq.createElement)(NN, {
-             controller: Nq
-           }), (0, Yq.createElement)(Oa, {
- ... (43 more removed lines; see GitHub link above)
+       static _CreateDefaultUtilityLayerFromScene(CC) {
+         return HC._DefaultUtilityLayer = new HC(CC), HC._DefaultUtilityLayer.originalScene.Tm.addOnce((() => {
+           HC._DefaultUtilityLayer = null
+         })), HC._DefaultUtilityLayer
+       }
+       static get DefaultKeepDepthUtilityLayer() {
+         return null == HC._DefaultKeepDepthUtilityLayer ? HC._CreateDefaultKeepUtilityLayerFromScene(oC.c.LastCreatedScene) : HC._DefaultKeepDepthUtilityLayer
+       }
+       static _CreateDefaultKeepUtilityLayerFromScene(CC) {
+         return HC._DefaultKeepDepthUtilityLayer = new HC(CC), HC._DefaultKeepDepthUtilityLayer.utilityLayerScene.autoClearDepthAndStencil = !1, HC._DefaultKeepDepthUtilityLayer.originalScene.Tm.addOnce((() => {
+           HC._DefaultKeepDepthUtilityLayer = null
+         })), HC._DefaultKeepDepthUtilityLayer
+       }
+       constructor(CC) {
+         let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
+           ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+ ... (17 more added lines; see GitHub link above)
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L17410-L17419` → after: `L789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L789) · [Before (L17410-L17419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L17410-L17419)

```diff
-             }),
-             onClose: () => {
-               oE(null)
-             }
-           })), HE.push((0, jl.p)({
-             id: "baf2Quests",
-             labelKey: "buildAFactory2Game:questBookTitle",
-             icon: {
-               kind: "item",
-               name: "Book"
+               return QC
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L17421-L17446` → after: `L791-L794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L791-L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L791-L794) · [Before (L17421-L17446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L17421-L17446)

```diff
-             className: "Baf2QuestsButton",
-             onClick: () => {
-               oE({
-                 kind: "quests"
-               }), (0, Hl.m)()
-             }
-           })), HE.push(mH(jq, Pq, Qq)), yE = !1, HE.push(tO((() => {
-             null !== ej && qH(ej)
-           }))), HE.push(EH()), HE.push(function() {
-             const qq = Ml.i.subscribe(zl, el),
-               Eq = () => {
-                 if (Il) {
-                   const qq = Il;
-                   Il = null, (0, Tl.A)(qq)
-                 }
-               },
- ... (10 more removed lines; see GitHub link above)
+             wC = QC(this.utilityLayerScene);
+           if (!zC.ray && wC && (zC.ray = wC.ray), zC.originalPickingInfo?.aimTransform && wC && (wC.aimTransform = zC.originalPickingInfo.aimTransform, wC.gripTransform = zC.originalPickingInfo.gripTransform), this.utilityLayerScene.onPrePointerObservable.notifyObservers(zC), thi … [truncated]
+           if (this.utilityLayerScene.autoClearDepthAndStencil || this.pickUtilitySceneFirst) wC && wC.hit && (zC.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new KC.h(zC.type, zC.event, wC), zC.type), zC.skipOnPointerObservable = !0);
+           else {
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L17448-L17489` → after: `L796-L797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L796-L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L796-L797) · [Before (L17448-L17489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L17448-L17489)

```diff
-               gq = Ml.i.subscribe(zl, (qq => {
-                 Kj.follow(qq, Eq)
-               }));
-             return () => {
-               Ml.i.unsubscribe(gq), Kj.clear()
-             }
-           }(dq)), HE.push(function() {
-             const qq = document.documentElement,
-               Eq = (0, fN.b)(".InvenBodyRight", [], (() => {
-                 const Eq = document.querySelector(".InvenBodyRight");
-                 Eq && qq.style.setProperty("--baf2-backpack-width", `${Eq.offsetWidth}px`)
-               }));
-             return () => {
-               Eq(), qq.style.removeProperty("--baf2-backpack-width")
-             }
-           }()), HE.push(function() {
- ... (26 more removed lines; see GitHub link above)
+               bC = zC.event;
+             ZC && wC && (0 === wC.distance && ZC.pickedMesh ? this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(ZC.pickedMesh) ? (this._notifyObservers(zC, ZC, bC), zC.skipOnPointerObservable = !0) : zC.type === KC.b.POINTERDOWN ? (this._pointerCaptures[bC.pointerI … [truncated]
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L17491-L17736` → after: `L799-L812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L799-L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L799-L812) · [Before (L17491-L17736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L17491-L17736)

```diff
-           yE || (yE = !0, jq.send("baf2clientready"));
-           const mq = dq.getPositionView(Oq);
-           Nq.onAfterRender(Eq, mq, Wq), hq.onAfterRender(Eq, mq, Wq, aq), uq.run(Wq), YE.onAfterRender(dq, mq), lE.onAfterRender(dq, mq), nq.onAfterRender(dq, mq), Sq.onAfterRender(dq, mq), pq.onAfterRender(dq, Oq, mq), sq.onAfterRender(dq, Oq, mq), Kq.onAfterRender(dq, Oq), Cq.o … [truncated]
-           const Aq = dq.getTargetedBlock();
-           gE.onAfterRender(dq, Oq, null !== (gq = null === Aq || void 0 === Aq ? void 0 : Aq.Y_) && void 0 !== gq ? gq : 0, null !== (Yq = null === Aq || void 0 === Aq ? void 0 : Aq.position) && void 0 !== Yq ? Yq : null), cE.onAfterRender(dq, Eq), rq.onMining(function(qq, Eq) {
-             var gq, Yq;
-             const lq = qq.getMiningBlock();
-             if (!lq) return null;
-             const Oq = (0, Zq.h)(qq.getBlockId(lq[0], lq[1], lq[2])),
-               mq = null !== (gq = null === (Yq = qq.Ngq(Eq)) || void 0 === Yq ? void 0 : Yq.name) && void 0 !== gq ? gq : null,
-               xq = qq.getItemStat(Eq, Oq.split("|")[0], "harvestLevel");
-             return {
-               block: Oq,
-               x: lq[0],
-               y: lq[1],
-               z: lq[2],
- ... (230 more removed lines; see GitHub link above)
+         })), this._originalPointerObserver && CC.onPrePointerObservable.makeObserverTopPriority(this._originalPointerObserver)), this.utilityLayerScene.autoClear = !1, ZC || (this._afterRenderObserver = this.originalScene.onAfterRenderCameraObservable.add((CC => {
+           this.shouldRender && CC == this.getRenderCamera() && this.render()
+         }))), this._sceneDisposeObserver = this.originalScene.Tm.add((() => {
+           this.dispose()
+         })), this._updateCamera()
+       }
+       _notifyObservers(CC, zC, ZC) {
+         CC.skipOnPointerObservable || (this.utilityLayerScene.onPointerObservable.notifyObservers(new KC.h(CC.type, CC.event, zC), CC.type), this._lastPointerEvents[ZC.pointerId] = !0)
+       }
+       render() {
+         if (this._updateCamera(), this.utilityLayerScene.activeCamera) {
+           const CC = this.utilityLayerScene.activeCamera.Km(),
+             zC = this.utilityLayerScene.activeCamera;
+           zC._scene = this.utilityLayerScene, zC.leftCamera && (zC.leftCamera._scene = this.utilityLayerScene), zC.rightCamera && (zC.rightCamera._scene = this.utilityLayerScene), this.utilityLayerScene.render(!1), zC._scene = CC, zC.leftCamera && (zC.leftCamera._scene = CC), zC. … [truncated]
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L17738-L17739` → after: `L814-L820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L814-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L814-L820) · [Before (L17738-L17739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L17738-L17739)

```diff
-       };
-       return tE
+       }
+       dispose() {
+         this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.Tm.remove(this._sceneDisposeObserver), this._originalPointerObserver && t … [truncated]
+       }
+       _updateCamera() {
+         this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
+       }
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L17741-L17766` → after: `L822-L838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L822-L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L822-L838) · [Before (L17741-L17766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L17741-L17766)

```diff
-   },
-   38479: (qq, Eq, gq) => {
-     function Yq(qq, Eq, gq) {
-       const Yq = new Set,
-         lq = new ResizeObserver(gq),
-         Oq = () => {
-           const Eq = new Set(document.querySelectorAll(qq));
-           let Oq = !1;
-           for (const qq of Yq) Eq.has(qq) || (lq.unobserve(qq), Yq.delete(qq), Oq = !0);
-           for (const qq of Eq) Yq.has(qq) || (lq.observe(qq), mq.observe(qq, {
-             attributes: !0,
-             attributeFilter: ["class", "style"]
-           }), Yq.add(qq));
-           Oq && gq()
-         },
-         mq = new MutationObserver((Eq => {
- ... (10 more removed lines; see GitHub link above)
+     HC._DefaultUtilityLayer = null, HC._DefaultKeepDepthUtilityLayer = null;
+     const EC = {
+       FindMainCamera: function(CC) {
+         return CC.findMainCamera()
+       },
+       FindMainObjectRenderer: function(CC) {
+         return CC.findMainObjectRenderer()
+       },
+       CreateUtilityLayerRenderer: function(CC) {
+         let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+         const ZC = CC.sS,
+           QC = new HC(ZC, zC, !0);
+         QC.utilityLayerScene.activeCamera = ZC.activeCamera;
+         let wC = EC.FindMainCamera(ZC.frameGraph);
+         !wC && ZC.cameras.length > 0 && (wC = ZC.cameras[0]), wC && (QC.setRenderCamera(wC), QC.utilityLayerScene.activeCamera = wC);
+         const bC = ZC.onAfterRenderObservable.add((() => {
+ ... (1 more added lines; see GitHub link above)
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L17768-L17774` → after: `L840-L842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L840-L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L840-L842) · [Before (L17768-L17774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L17768-L17774)

```diff
-       mq.observe(document.body, {
-         childList: !0,
-         subtree: !0
-       });
-       for (const xq of Eq) lq.observe(xq);
-       return window.addEventListener("resize", gq), Oq(), gq(), () => {
-         lq.disconnect(), mq.disconnect(), window.removeEventListener("resize", gq)
+         return QC.utilityLayerScene.Tm.addOnce((() => {
+           ZC.onAfterRenderObservable.remove(bC)
+         })), QC
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L17776-L17786` → after: `L844-L845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L844-L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L844-L845) · [Before (L17776-L17786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L17776-L17786)

```diff
-     }
-     gq.d(Eq, {
-       b: () => Yq
-     })
-   },
-   38471: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       d: () => mq,
-       e: () => Oq
-     });
-     const Yq = new WeakMap;
+     };
+     let lC = null;
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L17788-L17794` → after: `L847-L911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L847-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L847-L911) · [Before (L17788-L17794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L17788-L17794)

```diff
-     function lq(qq) {
-       let Eq = Yq.get(qq);
-       return Eq || (Eq = {
-         hidden: qq.hidden,
-         x: NaN,
-         y: NaN
-       }, Yq.set(qq, Eq)), Eq
+     function XC(CC, zC, ZC, QC) {
+       let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
+         bC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         nC = arguments.length > 6 ? arguments[6] : void 0,
+         fC = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
+         oC = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
+       const {
+         height: qC,
+         width: FC
+       } = aC(CC, zC, ZC);
+       if (!qC || !FC) return void NC.c.Error("Invalid 'size' parameter !");
+       const WC = zC.Km();
+       let gC = WC.activeCamera !== zC;
+       if (WC.frameGraph) {
+         const CC = EC.FindMainObjectRenderer(WC.frameGraph);
+         CC && (gC = CC.camera !== zC)
+ ... (49 more added lines; see GitHub link above)
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L17797-L17799` → after: `L914-L1092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L914-L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L914-L1092) · [Before (L17797-L17799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L17797-L17799)

```diff
-     function Oq(qq, Eq) {
-       const gq = lq(qq);
-       gq.hidden !== Eq && (gq.hidden = Eq, qq.hidden = Eq)
+     function rC(CC, zC, bC, nC) {
+       let fC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
+         oC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
+         qC = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+         FC = arguments.length > 7 ? arguments[7] : void 0,
+         MC = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
+         PC = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
+         GC = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
+         RC = arguments.length > 11 ? arguments[11] : void 0,
+         AC = arguments.length > 12 ? arguments[12] : void 0,
+         xC = arguments.length > 13 ? arguments[13] : void 0,
+         JC = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
+         IC = arguments.length > 15 ? arguments[15] : void 0;
+       const iC = zC.Km();
+       if (iC.frameGraph) return void TC(iC.frameGraph, zC, bC, fC, oC, qC, FC, RC, xC, !nC).then((CC => {
+         nC && nC(CC)
+ ... (163 more added lines; see GitHub link above)
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L17803-L17804` → after: `L1096-L1124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR1096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L1096-L1124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/237.js#L1096-L1124) · [Before (L17803-L17804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/237.js#L17803-L17804)

```diff
-       const Yq = lq(qq);
-       Yq.x === Eq && Yq.y === gq || (Yq.x = Eq, Yq.y = gq, qq.style.translate = `${Eq}vw ${gq}vh`)
+       let QC = 0,
+         wC = 0,
+         bC = 0,
+         nC = 0;
+       if ("object" === typeof ZC) {
+         const fC = ZC.precision ? Math.abs(ZC.precision) : 1;
+         ZC.width && ZC.height ? (QC = ZC.height * fC, wC = ZC.width * fC) : ZC.width && !ZC.height ? (wC = ZC.width * fC, QC = Math.round(wC / CC.getAspectRatio(zC))) : ZC.height && !ZC.width ? (QC = ZC.height * fC, wC = Math.round(QC * CC.getAspectRatio(zC))) : (wC = Math.round( … [truncated]
+       } else isNaN(ZC) || (QC = ZC, wC = ZC, bC = ZC, nC = ZC);
+       return wC && (wC = Math.floor(wC)), QC && (QC = Math.floor(QC)), bC && (bC = Math.floor(bC)), nC && (nC = Math.floor(nC)), {
+         height: 0 | QC,
+         width: 0 | wC,
+         finalWidth: 0 | bC,
+         finalHeight: 0 | nC
+       }
+     }
+     const tC = {
+ ... (13 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/238.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/238.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94)

#### 1. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L4-L163` → after: `L4-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L4-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/238.js#L4-L72) · [Before (L4-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/238.js#L4-L163)

```diff
-   40835: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       d: () => mq,
-       e: () => uq,
-       h: () => cq
-     });
-     var Yq, lq = gq(37158),
-       Oq = gq(37139);
-     ! function(qq) {
-       qq[qq.CW = 0] = "CW", qq[qq.CCW = 1] = "CCW"
-     }(Yq || (Yq = {}));
-     class mq {
-       static Interpolate(qq, Eq, gq, Yq, lq) {
-         if (0 === qq) return 0;
-         const Oq = 1 - 3 * Yq + 3 * Eq,
-           mq = 3 * Yq - 6 * Eq,
- ... (144 more removed lines; see GitHub link above)
+   37590: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => wC
+     });
+     var QC = ZC(37596);
+     class wC {
+       static GetPlanes(CC) {
+         const zC = [];
+         for (let ZC = 0; ZC < 6; ZC++) zC.push(new QC.d(0, 0, 0, 0));
+         return wC.GetPlanesToRef(CC, zC), zC
+       }
+       static GetNearPlaneToRef(CC, zC) {
+         const ZC = CC.m;
+         zC.normal.x = ZC[3] + ZC[2], zC.normal.y = ZC[7] + ZC[6], zC.normal.z = ZC[11] + ZC[10], zC.d = ZC[15] + ZC[14], zC.normalize()
+       }
+       static GetFarPlaneToRef(CC, zC) {
+ ... (53 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L165-L300` → after: `L74-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L74-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/238.js#L74-L138) · [Before (L165-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/238.js#L165-L300)

```diff
-         for (let gq = qq - 1, Yq = 0; Yq < qq; gq = Yq++) Eq += this._points[gq].x * this._points[Yq].y - this._points[Yq].x * this._points[gq].y;
-         return .5 * Eq
-       }
-       getPoints() {
-         return this._points
-       }
-       getPointAtLengthPosition(qq) {
-         if (qq < 0 || qq > 1) return Oq.p.Zero();
-         const Eq = qq * this.length();
-         let gq = 0;
-         for (let Yq = 0; Yq < this._points.length; Yq++) {
-           const qq = (Yq + 1) % this._points.length,
-             lq = this._points[Yq],
-             mq = this._points[qq].subtract(lq),
-             xq = mq.length() + gq;
-           if (Eq >= gq && Eq <= xq) {
- ... (120 more removed lines; see GitHub link above)
+         return 0 !== CC && (zC = 1 / CC), this.normal.x *= zC, this.normal.y *= zC, this.normal.z *= zC, this.d *= zC, this
+       }
+       transform(CC) {
+         const zC = wC._TmpMatrix;
+         CC.invertToRef(zC);
+         const ZC = zC.m,
+           QC = this.normal.x,
+           bC = this.normal.y,
+           nC = this.normal.z,
+           fC = this.d,
+           oC = QC * ZC[0] + bC * ZC[1] + nC * ZC[2] + fC * ZC[3],
+           qC = QC * ZC[4] + bC * ZC[5] + nC * ZC[6] + fC * ZC[7],
+           FC = QC * ZC[8] + bC * ZC[9] + nC * ZC[10] + fC * ZC[11],
+           WC = QC * ZC[12] + bC * ZC[13] + nC * ZC[14] + fC * ZC[15];
+         return new wC(oC, qC, FC, WC)
+       }
+ ... (49 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L333` → after: `L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/238.js#L171) · [Before (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/238.js#L333)

```diff
-             Yq.b.Warn(Aq.message)
+             QC.c.Warn(oC.message)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L339` → after: `L177-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L177-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/238.js#L177-L183) · [Before (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/238.js#L339)

```diff
-   38653: (qq, Eq, gq) => {
+   37731: (CC, zC, ZC) => {
+     function QC() {
+       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (CC => {
+         const zC = 16 * Math.random() | 0;
+         return ("x" === CC ? zC : 3 & zC | 8).toString(16)
+       }))
+     }
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L362` → after: `L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/238.js#L211) · [Before (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/238.js#L362)

```diff
-         const Eq = qq => qq < 10 ? "0" + qq : "" + qq,
+         const zC = CC => CC < 10 ? "0" + CC : "" + CC,
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L377` → after: `L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/238.js#L226) · [Before (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/238.js#L377)

```diff
-         const Aq = `<div style='color:${mq.color}'>${Oq}</div><br>`;
+         const oC = `<div style='color:${nC.color}'>${bC}</div><br>`;
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/239.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/239.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034)

#### 1. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/239.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/239.js#L2)

```diff
- export const ids = [239];
+ export const ids = [238, 239];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L4-L152` → after: `L4-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L4-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/239.js#L4-L61) · [Before (L4-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/239.js#L4-L152)

```diff
-   40466: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       d: () => Oq,
-       f: () => mq
-     });
-     var Yq = gq(1914);
-     let lq = !1;
- 
-     function Oq() {
-       lq = !0
-     }
- 
-     function mq() {
-       lq && (lq = !1, (0, Yq.d)())
-     }
-   },
- ... (133 more removed lines; see GitHub link above)
+   60929: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       RegisterShaderMaterial: () => QC.e,
+       ShaderMaterial: () => QC.r,
+       ShaderMaterialCreateFromSnippetAsync: () => QC.f,
+       ShaderMaterialParse: () => QC.o,
+       ShaderMaterialParseFromFileAsync: () => QC.i,
+       ShaderMaterialParseFromSnippetAsync: () => QC.k
+     });
+     var QC = ZC(40297);
+     (0, QC.e)()
+   },
+   37590: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => wC
+     });
+ ... (42 more added lines; see GitHub link above)
```
