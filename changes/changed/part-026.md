# Changed — Bundle Modifications Report (Part 026 / 116)

- **Updated at**: `2026-11-27T00:59 JST`
- **Part**: `26 / 116` (**298** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 025](part-025.md) · [Part 027 →](part-027.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/213.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2 · continued)

- **File**: `bundles/bloxd.io/chunks/js/213.js` (76 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723)

#### 73. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L851-L854` → after: `L1316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R1316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L1316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/213.js#L1316) · [Before (L851-L854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/213.js#L851-L854)

```diff
-       const {
-         max: xV
-       } = pV[VV].at(-1);
-       return eV <= xV
+       return "unreachable" === HH && BH > 0
```

#### 74. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L857-L877` → after: `L1319-L1329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R1319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L1319-L1329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/213.js#L1319-L1329) · [Before (L857-L877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/213.js#L857-L877)

```diff
-     function ZV(VV) {
-       const eV = Math.sin(VV / 80),
-         xV = VV => {
-           if (VV <= 0) return 0;
-           if (VV > 1) return 1;
-           let eV = 0;
-           const xV = [1, 7, 21, 35, 35, 21, 7, 1];
-           for (let JV = 0; JV < xV.length; JV++) {
-             eV += (JV % 2 === 0 ? 1 : -1) * xV[JV] * Math.pow(VV, 2 + JV) / (2 + JV)
-           }
-           return 72 * eV
-         },
-         JV = .3 - .78 * eV,
-         YV = .5 - .78 * eV,
-         UV = .6 - .7 * eV,
-         yV = .8 - .6 * eV;
- ... (5 more removed lines; see GitHub link above)
+     function hH(HH, BH, LH) {
+       const AH = function(HH) {
+         return HH instanceof WebAssembly.RuntimeError ? /unreachable/i.test(HH.message) ? "unreachable" : /out of bounds/i.test(HH.message) ? "out_of_bounds" : "runtime_error" : (HH instanceof RangeError || HH instanceof Error && "InternalError" === HH.name) && /call stack|recurs … [truncated]
+       }(HH);
+       if ("unreachable" !== AH) return {
+         kind: AH,
+         panic: null,
+         refusedBytes: 0
+       };
+       const rH = BH(),
+         SH = LH();
```

#### 75. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L879-L883` → after: `L1331-L1333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R1331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L1331-L1333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/213.js#L1331-L1333) · [Before (L879-L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/213.js#L879-L883)

```diff
-         commonProb: pV,
-         uncommonProb: QV,
-         rareProb: nV,
-         epicProb: wV,
-         legendaryProb: 1 - (wV + nV + QV + pV)
+         kind: AH,
+         panic: SH > 0 ? null : rH,
+         refusedBytes: SH
```

#### 76. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L887-L895` → after: `L1338-L1339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R1338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L1338-L1339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/213.js#L1338-L1339) · [Before (L887-L895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/213.js#L887-L895)

```diff
-     function vV(VV, eV) {
-       const {
-         min: xV,
-         max: YV
-       } = pV[VV][eV], UV = JV.b.sampleUniformIntDistribution(xV, YV, "includeMax");
-       return {
-         ...ZV(UV),
-         level: UV
-       }
+     function zH(HH) {
+       return HH.replace(/\s*\n\s*/g, " / ").slice(0, tH)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/214.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/214.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352)

#### 1. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L4-L7` → after: `L4-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/214.js#L4-L8) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/214.js#L4-L7)

```diff
-   40315: (VV, eV, xV) => {
-     xV.d(eV, {
-       e: () => pV,
-       g: () => UV
+   34856: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       ALL_DEV_TOOLS: () => hH,
+       coreDevTools: () => CH,
+       devTools: () => zH
```

#### 2. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L9-L337` → after: `L10-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L10-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/214.js#L10-L17) · [Before (L9-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/214.js#L9-L337)

```diff
-     var JV = xV(4512);
-     let YV = null;
- 
-     function UV(VV) {
-       return null !== YV && VV === YV
-     }
- 
-     function yV() {
-       this.U3 = !1, this.stopPropagation = !1, this.B3 = !1, this.disabled = !1
-     }
-     class pV {
-       constructor(VV, eV) {
-         this.version = "0.7.0";
-         var xV = Object.assign({}, new yV, eV || {});
-         this.element = VV || document, this.U3 = !!xV.U3, this.stopPropagation = !!xV.stopPropagation, this.B3 = !!xV.B3, this.disabled = !!xV.disabled, this.filterEvents = (VV, eV) => !0, this.ignoreEvent = VV => !1, this.down = new JV.EventEmitter, this.up = new JV.EventEmitter … [truncated]
-           dx: 0,
- ... (313 more removed lines; see GitHub link above)
+     var AH = LH(642),
+       rH = LH(1253),
+       SH = LH(34861);
+     const hH = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
+     async function tH() {
+       const {
+         noaDevTools: HH
+       } = await LH.e(264).then((() => LH(42369)));
```

#### 3. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L340-L423` → after: `L20-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L20-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/214.js#L20-L51) · [Before (L340-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/214.js#L340-L423)

```diff
- 
-     function UV(VV) {
-       return JV !== VV && (JV = VV, !0)
-     }
-   },
-   35268: (VV, eV, xV) => {
-     xV.d(eV, {
-       d: () => UV,
-       e: () => YV
-     });
-     var JV = xV(27);
- 
-     function YV(VV, eV) {
-       return VV && !eV
-     }
- 
- ... (68 more removed lines; see GitHub link above)
+     const zH = new class {
+         constructor() {
+           this.loadHost = tH, this.tools = hH
+         }
+         setHost(HH) {
+           this.tools = null === HH ? hH : HH.tools, this.loadHost = null === HH ? tH : async () => HH
+         }
+         supports(HH) {
+           return this.tools.has(HH)
+         }
+         async downloadScene(HH, BH) {
+           const LH = await this.loadHost();
+           await LH.downloadScene(HH, BH)
+         }
+         async setAmbientLightIntensity(HH) {
+           const BH = await this.loadHost();
+ ... (16 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L426-L727` → after: `L54-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L54-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/214.js#L54-L56) · [Before (L426-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/214.js#L426-L727)

```diff
-     var tV = xV(41841);
-     xV(38840), xV(9346);
-     xV(9372).d;
-     const FV = () => {
-       const VV = (0, tV.b)((() => {
-           const VV = {
-             x: 0,
-             y: 0,
-             magnitude: 0,
-             headingOffset: 0,
-             jumpHeld: !1,
-             jumpPressedSinceTick: !1,
-             crouchHeld: !1,
-             running: !1,
-             sprintHeld: !1
-           };
- ... (286 more removed lines; see GitHub link above)
+     AH.K && zH.setHost(CH), (0, rH.C)((() => {
+       zH.setHost(CH)
+     }))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/215.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/215.js` (32 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17)

#### 1. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L4-L7` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/215.js#L4-L7) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/215.js#L4-L7)

```diff
-   35129: (VV, eV, xV) => {
-     xV.d(eV, {
-       c: () => En,
-       g: () => Hr
+   37257: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       isMoreOptionsInFooter: () => RH,
+       showOnboardingPopup: () => jH
```

#### 2. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L9-L141` → after: `L9-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L9-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/215.js#L9-L28) · [Before (L9-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/215.js#L9-L141)

```diff
-     const JV = "0.9.4",
-       YV = {
-         DEBUG: !1,
-         LIB_VERSION: "1.438.7",
-         LIB_NAME: "web",
-         JS_SDK_VERSION: JV
-       };
-     var UV = YV;
-     const yV = "$early_access_features",
-       pV = "$active_feature_flags",
-       QV = "$feature_flag_details",
-       nV = "$feature_flag_errors",
-       wV = "$feature_flag_evaluated_at",
-       ZV = "$feature_flag_request_id",
-       vV = "$minimal_flag_called_events",
-       rV = "$enabled_feature_flags",
- ... (117 more removed lines; see GitHub link above)
+     var AH = LH(45),
+       rH = LH(1123),
+       SH = LH(1352),
+       hH = LH(1455),
+       tH = LH(1056),
+       zH = LH(4716),
+       CH = LH(1565),
+       EH = LH(317),
+       XH = LH(1556),
+       GH = LH(2339),
+       YH = LH(1038),
+       uH = LH.n(YH),
+       QH = LH(1070),
+       WH = LH(37264),
+       MH = LH(2530),
+       xH = LH(3879),
+ ... (4 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L144-L161` → after: `L31-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L31-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/215.js#L31-L49) · [Before (L144-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/215.js#L144-L161)

```diff
-       var eV;
-       const xV = [];
-       return null !== (eV = JSON.stringify(VV, (function(VV, eV) {
-         if ("bigint" == typeof eV) return eV.toString();
-         if ("function" != typeof eV && "symbol" != typeof eV) {
-           if (eV instanceof Error) return {
-             name: eV.name,
-             message: eV.message,
-             stack: eV.stack
-           };
-           if (eV && "object" == typeof eV) {
-             for (; xV.length > 0 && xV[xV.length - 1] !== this;) xV.pop();
-             if (xV.includes(eV)) return "[Circular]";
-             xV.push(eV)
-           }
-           return eV
- ... (2 more removed lines; see GitHub link above)
+       let {
+         open: BH,
+         onToggle: LH
+       } = HH;
+       const {
+         t: AH
+       } = (0, rH.B)();
+       return (0, TH.jsxs)("button", {
+         type: "button",
+         className: "OnboardingMoreOptions",
+         "aria-expanded": BH,
+         "aria-controls": BH ? UH : void 0,
+         onClick: () => {
+           BH || (0, zH.i)("more"), LH()
+         },
+         children: [AH("homePage:onboardingMoreOptions"), (0, TH.jsx)(PH.c, {
+ ... (3 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L163-L188` → after: `L51-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L51-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/215.js#L51-L54) · [Before (L163-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/215.js#L163-L188)

```diff
-     const Ex = Object.prototype,
-       Bx = Ex.hasOwnProperty,
-       jx = Ex.toString,
-       qx = Array.isArray || function(VV) {
-         return "[object Array]" === jx.call(VV)
-       },
-       tx = VV => "function" == typeof VV,
-       Fx = VV => VV === Object(VV) && !qx(VV),
-       Tx = VV => {
-         if (Fx(VV)) {
-           for (const eV in VV)
-             if (Bx.call(VV, eV)) return !1;
-           return !0
-         }
-         return !1
-       },
- ... (10 more removed lines; see GitHub link above)
+     const OH = Object.entries(CH.c).filter((HH => {
+       let [, BH] = HH;
+       return "default" === BH.cosmeticPack
+     }));
```

#### 5. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L191` → after: `L57-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L57-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/215.js#L57-L67) · [Before (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/215.js#L191)

```diff
-       return null === VV || "object" != typeof VV
+       return XH.b.default.colourGroups[HH].colours.map(((HH, BH) => {
+         let {
+           rbg: LH,
+           order: AH
+         } = HH;
+         return {
+           rbg: LH,
+           order: AH,
+           index: BH
+         }
+       })).sort(((HH, BH) => HH.order - BH.order))
```

#### 6. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L195` → after: `L73-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/215.js#L73-L76) · [Before (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/215.js#L195)

```diff
-       return {}.toString.call(VV) === `[object ${eV}]`
+       var LH;
+       if (void 0 === BH || "default" !== (null === (LH = (0, GH.h)(HH, BH)) || void 0 === LH ? void 0 : LH.cosmeticPack)) return null;
+       const AH = (0, GH.f)(BH);
+       return AH && [AH[0], Number(AH[1])]
```

#### 7. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L198-L208` → after: `L79-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/215.js#L79-L80) · [Before (L198-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/215.js#L198-L208)

```diff
-     function Cx(VV) {
-       switch ({}.toString.call(VV)) {
-         case "[object Error]":
-         case "[object Exception]":
-         case "[object DOMException]":
-         case "[object DOMError]":
-         case "[object WebAssembly.Exception]":
-           return !0;
-         default:
-           return ox(VV, Error)
-       }
+     function IH(HH, BH, LH) {
+       return `${HH}_${BH}_${LH}`
```

#### 8. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L212-L233` → after: `L84-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L84-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/215.js#L84-L126) · [Before (L212-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/215.js#L212-L233)

```diff
-       return "u" > typeof Event && ox(VV, Event)
-     }
- 
-     function ox(VV, eV) {
-       try {
-         return VV instanceof eV
-       } catch (VV) {
-         return !1
-       }
-     }
-     const cx = [!0, "true", 1, "1", "yes"],
-       hx = VV => vx(cx, VV),
-       lx = [!1, "false", 0, "0", "no"];
- 
-     function Lx(VV, eV, xV, JV, YV, UV, yV) {
-       try {
- ... (6 more removed lines; see GitHub link above)
+       let {
+         label: BH,
+         colours: LH,
+         picked: AH,
+         onPick: SH
+       } = HH;
+       const {
+         t: hH
+       } = (0, rH.B)();
+       return (0, TH.jsxs)("div", {
+         className: "OnboardingColours",
+         children: [(0, TH.jsx)("div", {
+           className: "OnboardingColoursLabel",
+           children: BH
+         }), (0, TH.jsx)("div", {
+           className: "OnboardingSwatches",
+ ... (27 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L237-L250` → after: `L130-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L130-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/215.js#L130-L147) · [Before (L237-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/215.js#L237-L250)

```diff
-       return function() {
-         var eV = this,
-           xV = arguments;
-         return new Promise((function(JV, YV) {
-           var UV = VV.apply(eV, xV);
- 
-           function yV(VV) {
-             Lx(UV, JV, YV, yV, pV, "next", VV)
-           }
- 
-           function pV(VV) {
-             Lx(UV, JV, YV, yV, pV, "throw", VV)
-           }
-           yV(void 0)
+       let {
+         moreOptions: BH,
+         onToggleMoreOptions: LH,
+         moreOptionsBelowPresets: SH
+       } = HH;
+       const {
+         t: hH
+       } = (0, rH.B)(), {
+         userContext: tH,
+         isUserContextUpdating: CH
+       } = (0, vH.e)(), [, XH] = (0, AH.useReducer)((HH => HH + 1), 0), GH = (0, AH.useRef)({}), YH = (0, AH.useRef)(null), PH = (0, AH.useRef)({}), bH = (0, xH.c)(), lH = {
+         ...tH.getPlayerCosmetics(),
+         ...YH.current
+       }, KH = (0, AH.useRef)(null);
+       (0, AH.useEffect)((() => {
+         var HH;
+ ... (2 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L252` → after: `L149-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L149-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/215.js#L149-L269) · [Before (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/215.js#L252)

```diff
-       }
+       }), [BH]);
+       const cH = (HH, BH) => {
+           (0, WH.d)(HH, Object.entries(BH)), bH.current ? XH() : HH.publishUpdateIfCurrent()
+         },
+         eH = function(HH) {
+           let {
+             isDefault: BH = !1
+           } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+           const LH = {
+             ...!CH && tH.isLoggedIn() ? PH.current : YH.current,
+             ...HH
+           };
+           if (!CH) return YH.current = null, PH.current = {}, void cH(tH, LH);
+           YH.current = LH, BH || (PH.current = {
+             ...PH.current,
+             ...HH
+ ... (105 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L254-L272` → after: `L271-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L271-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/215.js#L271-L275) · [Before (L254-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/215.js#L254-L272)

```diff
-     const mx = ["amazonbot", "amazonproductbot", "app.hypefactors.com", "applebot", "archive.org_bot", "awariobot", "backlinksextendedbot", "baiduspider", "bingbot", "bingpreview", "chrome-lighthouse", "dataforseobot", "deepscan", "duckduckbot", "facebookexternal", "facebookcatal … [truncated]
-       Kx = new Map,
-       Hx = function(VV) {
-         let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
-         if (!VV) return !1;
-         const xV = function(VV, eV) {
-             let xV = "";
-             for (let JV = 0; eV.length > JV; JV++) {
-               const VV = eV[JV];
-               xV += VV.length + ":" + VV
-             }
-             return VV.length + ":" + VV + "|" + eV.length + ":" + xV
-           }(VV, eV),
-           JV = Kx.get(xV);
-         if (void 0 !== JV) return JV;
-         const YV = VV.toLowerCase(),
- ... (3 more removed lines; see GitHub link above)
+     var KH = LH(1206),
+       cH = LH(15),
+       eH = LH(34867),
+       qH = LH(1313),
+       gH = LH(1706);
```

#### 12. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L274-L285` → after: `L277-L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L277-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/215.js#L277-L291) · [Before (L274-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/215.js#L274-L285)

```diff
-     function ux(VV, eV, xV, JV, YV) {
-       return eV > xV && (JV.warn("min cannot be greater than max."), eV = xV), zx(VV) ? VV > xV ? (JV.warn(" cannot be  greater than max: " + xV + ". Using max value instead."), xV) : eV > VV ? (JV.warn(" cannot be less than min: " + eV + ". Using min value instead."), eV) : VV : … [truncated]
-     }
-     var sx = class {
-       constructor(VV) {
-         this._buckets = {}, this._onBucketRateLimited = VV._onBucketRateLimited, this._bucketSize = ux(VV.bucketSize, 0, 100, VV._logger), this._refillRate = ux(VV.refillRate, 0, this._bucketSize, VV._logger), this._refillInterval = ux(VV.refillInterval, 0, 864e5, VV._logger)
-       }
-       _applyRefill(VV, eV) {
-         const xV = Math.floor((eV - VV.lastAccess) / this._refillInterval);
-         xV > 0 && (VV.tokens = Math.min(VV.tokens + xV * this._refillRate, this._bucketSize), VV.lastAccess = VV.lastAccess + xV * this._refillInterval)
-       }
-       consumeRateLimit(VV) {
+     function NH(HH) {
+       const {
+         t: BH
+       } = (0, rH.B)(), {
+         userContext: LH,
+         isUserContextUpdating: SH
+       } = (0, vH.e)(), tH = SH ? null : LH.getPlayerName(), CH = (0, AH.useRef)(null), [EH, XH] = (0, AH.useState)((() => null === tH ? (0, KH.c)() : null)), [GH, YH] = (0, AH.useState)(null), [uH, QH] = (0, AH.useState)(!1), WH = (0, AH.useRef)("hX"), MH = (0, xH.c)(), UH = (0,  … [truncated]
+         CH.current && (CH.current.value = HH), XH(HH)
+       }, oH = (0, AH.useRef)(!1);
+       (0, AH.useEffect)((() => {
+         var HH, BH;
+         !uH && oH.current && (oH.current = !1, null === (HH = CH.current) || void 0 === HH || HH.focus(), null === (BH = CH.current) || void 0 === BH || BH.select())
+       }), [uH]);
+       const IH = (0, AH.useRef)(null);
+       (0, AH.useEffect)((() => {
```

#### 13. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L287-L404` → after: `L293-L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L293-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/215.js#L293-L349) · [Before (L287-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/215.js#L287-L404)

```diff
-         const xV = Date.now(),
-           JV = String(VV);
-         let YV = this._buckets[JV];
-         return YV ? this._applyRefill(YV, xV) : (YV = {
-           tokens: this._bucketSize,
-           lastAccess: xV
-         }, this._buckets[JV] = YV), 0 === YV.tokens || (YV.tokens--, 0 === YV.tokens && (null === (eV = this._onBucketRateLimited) || void 0 === eV || eV.call(this, VV)), 0 === YV.tokens)
-       }
-       stop() {
-         this._buckets = {}
-       }
-     };
-     const Sx = "Mobile",
-       Ix = "Android",
-       dx = "Tablet",
-       Ox = "Android Tablet",
- ... (102 more removed lines; see GitHub link above)
+         null !== GH && (null === (HH = IH.current) || void 0 === HH || HH.scrollIntoView({
+           block: "nearest"
+         }))
+       }), [GH]);
+       const fH = (HH, BH) => {
+         const LH = document.activeElement === CH.current || oH.current;
+         QH(!0), YH(null), HH.then((HH => {
+           MH.current && (QH(!1), oH.current = LH, BH(HH))
+         }))
+       };
+       (0, AH.useEffect)((() => {
+         var HH, BH;
+         cH.c.get("isTouchScreen") || (null === (HH = CH.current) || void 0 === HH || HH.focus(), null === (BH = CH.current) || void 0 === BH || BH.select())
+       }), []);
+       const lH = () => {
+           (0, zH.m)(WH.current), HH()
+ ... (41 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L406-L419` → after: `L351-L425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L351-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/215.js#L351-L425) · [Before (L406-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/215.js#L406-L419)

```diff
-         return null
-       },
-       sJ = [
-         [new RegExp("Xbox; Xbox (.*?)[);]", "i"), VV => [bJ, VV && VV[1] || ""]],
-         [new RegExp(rJ, "i"), [rJ, ""]],
-         [new RegExp(kJ, "i"), [kJ, ""]],
-         [fJ, [JJ, ""]],
-         [new RegExp(jJ, "i"), (VV, eV) => {
-           if (/Phone/.test(eV) || /WPDesktop/.test(eV)) return [qJ, ""];
-           if (new RegExp(Sx).test(eV) && !/IEMobile\b/.test(eV)) return ["Windows Mobile", ""];
-           const xV = /Windows NT ([0-9.]+)/i.exec(eV);
-           if (xV && xV[1]) {
-             let VV = mJ[xV[1]] || "";
-             return /arm/i.test(eV) && (VV = "RT"), [jJ, VV]
+       }), [uH, tH]), (0, AH.useEffect)((() => {
+         if (null === tH) return;
+         const HH = UH.current && "hX" === WH.current && LH.isLoggedIn();
+         UH.current = !1, OH.current = null, "noAccount" === (null === GH || void 0 === GH ? void 0 : GH.kind) && YH(null), HH && mH(tH), VH.current && (VH.current = !1, QH(!1), nH(HH ? tH : bH))
+       }), [tH]);
+       const FH = "error" === (null === GH || void 0 === GH ? void 0 : GH.kind) ? GH.message : "noAccount" === (null === GH || void 0 === GH ? void 0 : GH.kind) ? BH("homePage:onboardingNameNoAccount") : null;
+       return {
+         field: (0, TH.jsxs)("div", {
+           className: "OnboardingNameField",
+           ref: IH,
+           children: [(0, TH.jsx)("div", {
+             className: "OnboardingSubtitle",
+             children: BH("general:name")
+           }), null === bH && (0, TH.jsx)(qH.d, {}), null !== bH && (0, TH.jsxs)("div", {
+             className: "OnboardingNameRow",
+             children: [(0, TH.jsx)(gH.e, {
+ ... (59 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L421-L539` → after: `L427-L429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L427-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/215.js#L427-L429) · [Before (L421-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/215.js#L421-L539)

```diff
-           return [jJ, ""]
-         }],
-         [/((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/, VV => VV && VV[3] ? ["iOS", [VV[3], VV[4], VV[5] || "0"].join(".")] : ["iOS", ""]],
-         [/(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i, VV => {
-           let eV = "";
-           return VV && VV.length >= 3 && (eV = Px(VV[2]) ? VV[3] : VV[2]), ["watchOS", eV]
-         }],
-         [new RegExp("(Android (\\d+)\\.(\\d+)\\.?(\\d+)?|Android)", "i"), VV => VV && VV[2] ? [Ix, [VV[2], VV[3], VV[4] || "0"].join(".")] : [Ix, ""]],
-         [/Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i, VV => {
-           const eV = ["Mac OS X", ""];
-           return VV && VV[1] && (eV[1] = [VV[1], VV[2], VV[3] || "0"].join(".")), eV
-         }],
-         [/Mac/i, ["Mac OS X", ""]],
-         [/CrOS/, ["Chrome OS", ""]],
-         [/Linux|debian/i, ["Linux", ""]]
-       ],
- ... (103 more removed lines; see GitHub link above)
+         },
+         busy: uH,
+         ready: null !== bH
```

#### 16. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L567-L580` → after: `L434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/215.js#L434) · [Before (L567-L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/215.js#L567-L580)

```diff
-       try {
-         return VV()
-       } catch (VV) {
-         return
-       }
-     }
- 
-     function vY(VV, eV) {
-       const xV = setTimeout(VV, eV);
-       return null != xV && xV.unref && (null == xV || xV.unref()), xV
-     }
- 
-     function rY(VV, eV, xV) {
-       return kY.apply(this, arguments)
+       return HH < 500
```

#### 17. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L584-L597` → after: `L438-L459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L438-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/215.js#L438-L459) · [Before (L584-L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/215.js#L584-L597)

```diff
-       return (kY = fx((function*(VV, eV, xV) {
-         let JV;
-         try {
-           return yield Promise.race([VV, new Promise(((VV, YV) => {
-             JV = vY((() => {
-               try {
-                 null == xV || xV(), VV()
-               } catch (VV) {
-                 YV(VV)
-               }
-             }), eV)
-           }))])
-         } finally {
-           clearTimeout(JV)
+       const HH = {
+           finished: !1
+         },
+         BH = {
+           press: null
+         };
+       return SH.NotificationProvider.showCustomPopup({
+         body: LH => (0, TH.jsx)(nH, {
+           onFinish: () => {
+             (0, zH.g)(), HH.finished = !0, LH()
+           },
+           doneRef: BH
+         }),
+         middleScreenPopupClassName: "OnboardingPopup",
+         disableExitButton: !0,
+         ignoreBackgroundPress: !0,
+ ... (6 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L599` → after: `L461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/215.js#L461) · [Before (L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/215.js#L599)

```diff
-       }))).apply(this, arguments)
+       })
```

#### 19. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L603-L607` → after: `L465-L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L465-L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/215.js#L465-L506) · [Before (L603-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/215.js#L603-L607)

```diff
-       return bY = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(VV) {
-         return typeof VV
-       } : function(VV) {
-         return VV && "function" == typeof Symbol && VV.constructor === Symbol && VV !== Symbol.prototype ? "symbol" : typeof VV
-       }, bY(VV)
+       let {
+         onFinish: BH,
+         doneRef: LH
+       } = HH;
+       const {
+         t: SH
+       } = (0, rH.B)(), CH = NH(BH), EH = CH.ready && !CH.busy ? CH.submit : null;
+       (0, AH.useEffect)((() => (LH.press = EH, () => {
+         LH.press = null
+       })));
+       const [XH, GH] = (0, AH.useState)(!1), YH = (0, tH.n)(((HH, BH) => RH(BH))), uH = () => {
+         GH(!XH)
+       };
+       return (0, AH.useEffect)((() => {
+         (0, zH.p)()
+       }), []), (0, TH.jsxs)("div", {
+ ... (26 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L609-L618` → after: `L508-L538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L508-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/215.js#L508-L538) · [Before (L609-L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/215.js#L609-L618)

```diff
- 
-     function EY(VV, eV, xV) {
-       return (eV = function(VV) {
-         var eV = function(VV) {
-           if ("object" != bY(VV) || !VV) return VV;
-           var eV = VV[Symbol.toPrimitive];
-           if (void 0 !== eV) {
-             var xV = eV.call(VV, "string");
-             if ("object" != bY(xV)) return xV;
-             throw new TypeError("@@toPrimitive must return a primitive value.")
+   },
+   37264: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => hH
+     });
+     var AH = LH(1998),
+       rH = LH(1502);
+     const SH = new class {
+       constructor() {
+         this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
+       }
+       save(HH, BH) {
+         HH !== this.userContext && this.sendHeld(), this.userContext = HH;
+         for (const [AH, rH] of BH) this.pending.set(AH, rH);
+         if (null !== this.timer) return;
+         const LH = this.lastSentAt + 1100 - Date.now();
+ ... (15 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L620-L629` → after: `L540-L545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L540-L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/215.js#L540-L545) · [Before (L620-L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/215.js#L620-L629)

```diff
-           return String(VV)
-         }(VV);
-         return "symbol" == bY(eV) ? eV : eV + ""
-       }(eV)) in VV ? Object.defineProperty(VV, eV, {
-         value: xV,
-         enumerable: !0,
-         configurable: !0,
-         writable: !0
-       }) : VV[eV] = xV, VV
-     }
+         }));
+         this.pending.clear(), this.lastSentAt = Date.now(), rH.d.updateCosmetics(HH, BH).catch((HH => {
+           console.error("Failed to update cosmetics", HH)
+         }))
+       }
+     };
```

#### 22. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L632-L639` → after: `L548-L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L548-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/215.js#L548-L554) · [Before (L632-L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/215.js#L632-L639)

```diff
-       var xV = Object.keys(VV);
-       if (Object.getOwnPropertySymbols) {
-         var JV = Object.getOwnPropertySymbols(VV);
-         eV && (JV = JV.filter((function(eV) {
-           return Object.getOwnPropertyDescriptor(VV, eV).enumerable
-         }))), xV.push.apply(xV, JV)
-       }
-       return xV
+       for (const [LH, AH] of BH) HH.setPlayerCosmetics(LH, AH);
+       if (null === AH.gameBridge.latest("connectedGame").websocketUrl) SH.save(HH, BH);
+       else
+         for (const [LH, rH] of BH) AH.gameBridge.send("updateMyCosmetic", {
+           rh: LH,
+           Sh: rH
+         })
```

#### 23. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L643-L651` → after: `L577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/215.js#L577) · [Before (L643-L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/215.js#L643-L651)

```diff
-       for (var eV = 1; arguments.length > eV; eV++) {
-         var xV = null != arguments[eV] ? arguments[eV] : {};
-         eV % 2 ? BY(Object(xV), !0).forEach((function(eV) {
-           EY(VV, eV, xV[eV])
-         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(VV, Object.getOwnPropertyDescriptors(xV)) : BY(Object(xV)).forEach((function(eV) {
-           Object.defineProperty(VV, eV, Object.getOwnPropertyDescriptor(xV, eV))
-         }))
-       }
-       return VV
+       return zH[HH]
```

#### 24. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L656-L684` → after: `L581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/215.js#L581) · [Before (L656-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/215.js#L656-L684)

```diff
-       var eV;
-       const xV = globalThis._posthogChunkIds,
-         JV = globalThis._debugIds;
-       if (!xV && !JV) return;
-       const YV = xV ? Object.keys(xV) : [],
-         UV = JV ? Object.keys(JV) : [];
-       if (TY && AY(xV, YV, tY) && AY(JV, UV, FY)) return TY;
-       tY = xV ? jY({}, xV) : void 0, FY = JV ? jY({}, JV) : void 0, TY = {}, null !== (eV = qY) && void 0 !== eV || (qY = {});
-       const yV = (eV, xV) => {
-         for (const YV of eV) {
-           const eV = xV[YV];
-           if (!eV) continue;
-           const UV = null == qY ? void 0 : qY[YV];
-           if (UV) {
-             TY[UV] = eV;
-             continue
- ... (13 more removed lines; see GitHub link above)
+       return (0, tH.e)(HH) ? "outdated" : HH instanceof AH.e ? 429 === HH.httpCode ? "busy" : "server" : "offline"
```

#### 25. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L688` → after: `L585-L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L585-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/215.js#L585-L590) · [Before (L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/215.js#L688)

```diff
-       return VV && xV ? eV.length === Object.keys(xV).length && eV.every((eV => VV[eV] === xV[eV])) : VV === xV
+       return (0, hH.postJsonWithMetricsCookiesAndJsonResponse)(`${SH.clientSideServerUrls.indexUrl}${BH}`, LH, {
+         retries: 3
+       }, HH.getMetricsCookies()).catch((HH => (console.error("Bad response from the server when trying to change name:", BH, HH), {
+         outcome: "failed",
+         failure: EH(HH)
+       })))
```

#### 26. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L892-L947` → after: `L594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/215.js#L594) · [Before (L892-L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/215.js#L892-L947)

```diff
-       if (!VV || "<anonymous>" === VV) return !1;
-       const eV = XY.exec(VV);
-       return !eV || MY.includes(eV[1].toLowerCase())
-     }
- 
-     function GY(VV, eV, xV, JV, YV) {
-       const UV = {
-         platform: VV,
-         filename: eV,
-         function: "<anonymous>" === xV ? "?" : xV,
-         in_app: zY(eV)
-       };
-       return Px(JV) || (UV.lineno = JV), Px(YV) || (UV.colno = YV), UV
-     }
-     const WY = (VV, eV) => {
-         const xV = -1 !== VV.indexOf("safari-extension"),
- ... (40 more removed lines; see GitHub link above)
+       return "outcome" in HH && "failed" === HH.outcome
```

#### 27. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L951-L965` → after: `L598-L600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L598-L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/215.js#L598-L600) · [Before (L951-L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/215.js#L951-L965)

```diff
-       for (let eV = 1; 10 >= eV; eV++) {
-         const xV = VV.length - 2 * eV;
-         if (0 > xV) break;
-         let JV = !0;
-         for (let YV = 0; eV > YV; YV++)
-           if (!hY(VV[xV + YV], VV[xV + eV + YV])) {
-             JV = !1;
-             break
-           } if (JV) {
-           for (let JV = 0; eV > JV; JV++) VV[xV + JV] = VV[xV + eV + JV];
-           return VV.length = xV + eV, {
-             start: xV,
-             length: eV
-           }
-         }
+       return console.error("Error when trying to get with new name from DB", HH), {
+         outcome: "refused",
+         message: HH
```

#### 28. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L968-L972` → after: `L603-L608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L603-L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/215.js#L603-L608) · [Before (L968-L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/215.js#L968-L972)

```diff
- 
-     function LY(VV, eV) {
-       const xV = eV.start + eV.length,
-         JV = mY(VV, eV);
-       JV && VV.splice(xV + JV === VV.length ? xV : eV.start, JV)
+     async function uH(HH) {
+       const BH = await XH(HH, "/index/name/random", {});
+       return GH(BH) ? BH : "err" in BH ? YH(BH.err) : (HH.setPlayerName(BH.name), {
+         outcome: "changed",
+         name: BH.name
+       })
```

#### 29. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L974-L978` → after: `L610-L619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L610-L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/215.js#L610-L619) · [Before (L974-L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/215.js#L974-L978)

```diff
- 
-     function fY(VV, eV) {
-       let xV = eV.start;
-       for (; xV > 0 && hY(VV[xV - 1], VV[xV - 1 + eV.length]);) xV--;
-       return eV.start - xV
+     async function QH(HH, BH) {
+       const LH = await XH(HH, "/index/name/update", {
+         name: BH
+       });
+       return GH(LH) ? LH : "err" in LH ? YH(LH.err) : LH.nameExists ? {
+         outcome: "taken"
+       } : (HH.setPlayerName(BH), {
+         outcome: "changed",
+         name: BH
+       })
```

#### 30. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L982-L985` → after: `L623-L626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L623-L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/215.js#L623-L626) · [Before (L982-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/215.js#L982-L985)

```diff
-       const xV = eV.start + eV.length;
-       let JV = xV;
-       for (; VV.length > JV && hY(VV[JV], VV[JV - eV.length]);) JV++;
-       return JV - xV
+       let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
+       const AH = 1 === BH ? 1 : 10 ** (BH - 1),
+         SH = String(AH + Math.floor(LH() * (10 ** BH - AH)));
+       return `${HH.slice(0,rH.e-BH)}${SH}`
```

#### 31. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L987-L1871` → after: `L628-L635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L628-L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/215.js#L628-L635) · [Before (L987-L1871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/215.js#L987-L1871)

```diff
- 
-     function KY(VV, eV) {
-       const xV = eV[0];
-       let JV = VV.length - (xV ? fY(VV, xV) : 0);
-       for (const YV of eV) JV -= mY(VV, YV);
-       return JV
-     }
- 
-     function HY(VV, eV, xV) {
-       for (let JV = 0; VV.length > JV; JV++) {
-         const YV = VV[(eV + JV) % VV.length],
-           UV = VV[(xV + JV) % VV.length];
-         if (YV !== UV) return UV > YV
-       }
-       return !1
-     }
- ... (869 more removed lines; see GitHub link above)
+     const MH = [1, 2, 3, 4];
+     async function xH(HH, BH) {
+       const LH = await QH(HH, BH);
+       if ("taken" !== LH.outcome) return LH;
+       for (const AH of MH) {
+         const LH = WH(BH, AH),
+           rH = await QH(HH, LH);
+         if ("taken" !== rH.outcome) return rH
```

#### 32. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L1892-L1916` → after: `L638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/215.js#L638) · [Before (L1892-L1916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/215.js#L1892-L1916)

```diff
-         resourceLogs: [{
-           resource: {
-             attributes: jy(eV)
-           },
-           scopeLogs: [{
-             scope: {
-               name: xV,
-               version: JV
-             },
-             logRecords: VV
-           }]
-         }]
-       }
-     }
-     var Xy = class {
-       constructor(VV) {
- ... (9 more removed lines; see GitHub link above)
+         outcome: "taken"
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/216.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/216.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc)

#### 1. `bundles/bloxd.io/chunks/js/216.js` (Changed code · before: `L4-L10189` → after: `L4-L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adcR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc) · [After (L4-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/216.js#L4-L208) · [Before (L4-L10189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/216.js#L4-L10189)

```diff
-   35131: function(module, __unused_webpack_exports, __webpack_require__) {
-     var n;
-     this || self, n = function() {
-       return function() {
-         var __webpack_modules__ = {
-             4264: function(VV, eV, xV) {
-               VV.exports = xV(7588)
-             },
-             5036: function(VV, eV, xV) {
-               xV(1719), xV(5677), xV(6394), xV(5334), xV(6969), xV(2021), xV(8328), xV(2129);
-               var JV = xV(1287);
-               VV.exports = JV.Promise
-             },
-             2582: function(VV, eV, xV) {
-               xV(1646), xV(6394), xV(2004), xV(462), xV(8407), xV(2429), xV(1172), xV(8288), xV(1274), xV(8201), xV(6626), xV(3211), xV(9952), xV(15), xV(9831), xV(7521), xV(2972), xV(6956), xV(5222), xV(2257);
-               var JV = xV(1287);
- ... (10170 more removed lines; see GitHub link above)
+   34915: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => iH,
+       i: () => IB,
+       k: () => oB,
+       m: () => lB,
+       n: () => uB,
+       q: () => WB,
+       s: () => MB,
+       v: () => vB,
+       x: () => fB,
+       z: () => xB
+     });
+     var AH = LH(241),
+       rH = LH(15),
+       SH = LH(81),
+ ... (189 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/216.js` (Changed code · before: `L10191-L10192` → after: `L210-L514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adcR210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc) · [After (L210-L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/216.js#L210-L514) · [Before (L10191-L10192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/216.js#L10191-L10192)

```diff
- 
-           function WY(VV, xV, JV) {
+         }
+       }
+       watch(HH, BH, LH, AH, rH, SH) {
+         const hH = this.climbed;
+         null !== hH && !AH && !rH && ++hH.heldWindows >= uH.heldWindows && (this.climbed = null, this.record(SH, HH, "LX"), this.hooks.LX(this.step)), AH ? (this.dropRun += BH, this.dropRunFpsSum += HH * BH, this.dropRunMasked ||= rH, rH || (this.dropRunClean += BH, this.dropRunC … [truncated]
+         const tH = null !== this.climbed ? uH : YH;
+         if (this.dropRun >= (this.dropRunMasked ? tH.maskedWindows : tH.dropWindows)) {
+           const BH = this.dropRunClean > 0 ? this.dropRunCleanFpsSum / this.dropRunClean : this.dropRunFpsSum / this.dropRun,
+             LH = this.dropRunClean >= YH.dropWindows && BH < this.noGainFps[this.step] * QH.heavierShare;
+           this.resetDropRun();
+           const AH = this.climbed;
+           return void(null !== AH ? (this.failUp(this.step, AH.from, HH, SH), this.climbed = AH.below) : this.step < this.lowest && (LH || this.waitOver(SH)) && (this.climbing = !1, this.phase = {
+             kind: "down",
+             from: this.step,
+             fromFps: BH,
+             early: !this.waitOver(SH),
+ ... (289 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/216.js` (Changed code · before: `L10194-L10205` → after: `L516-L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adcR516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc) · [After (L516-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/216.js#L516-L520) · [Before (L10194-L10205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/216.js#L10194-L10205)

```diff
-             (0, yV.FIv)(VV, xY, (function(VV) {
-               return JV(6, YV = VV)
-             }));
-             var UV = 0,
-               QV = function(VV) {
-                 JV(0, UV = Object.keys(VV).length)
-               },
-               nV = xY.subscribe(QV);
-             QV(YV);
-             var wV = [],
-               ZV = function(VV) {
-                 (0, yV.fxP)(xY, YV[VV].actived = !YV[VV].actived, YV)
+             const LH = FH()[HH],
+               AH = {
+                 heldN: LH,
+                 heldAt: Date.now(),
+                 heldTarget: nH()
```

#### 4. `bundles/bloxd.io/chunks/js/216.js` (Changed code · before: `L10207-L10975` → after: `L522-L549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adcR522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc) · [After (L522-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/216.js#L522-L549) · [Before (L10207-L10975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/216.js#L10207-L10975)

```diff
-             return (0, pV.H3)((function() {
-               nY.use()
-             })), (0, pV.ev)((function() {
-               nV(), nY.unuse()
-             })), VV.$$.update = function() {
-               64 & VV.$$.Jb && JV(1, wV = Object.values(YV))
-             }, [UV, wV, ZV, function(VV) {
-               var xV = "curl -X " + VV.method;
-               return "string" == typeof VV.postData ? xV += " -d '" + VV.postData + "'" : "object" == typeof VV.postData && null !== VV.postData && (xV += " -d '" + eV.hZ(VV.postData) + "'"), xV + " '" + VV.url + "'"
-             }, function(VV) {
-               return eV.Kn(VV) || eV.kJ(VV) ? eV.hZ(VV, {
-                 maxDepth: 10,
-                 keyMaxLen: 1e4,
-                 pretty: !0
-               }) : VV
-             }, {
- ... (753 more removed lines; see GitHub link above)
+             (null === (BH = dH()) || void 0 === BH ? void 0 : BH.failedUpN) === LH && (AH.failedUpN = void 0), VB(AH)
+           },
+           upFailed: HH => {
+             VB({
+               failedUpN: FH()[HH],
+               failedUpAt: Date.now()
+             })
+           },
+           noGain: HH => {
+             VB({
+               noGain: null === HH ? void 0 : aH(HH)
+             })
+           }
+         }, {
+           lowest: hB(LH, PB, AH),
+           startStep: AH,
+ ... (12 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/216.js` (Changed code · before: `L10977-L10988` → after: `L551-L553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adcR551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc) · [After (L551-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/216.js#L551-L553) · [Before (L10977-L10988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/216.js#L10977-L10988)

```diff
-             PU = function(VV, eV, xV) {
-               "undefined" != typeof document && void 0 !== document.cookie && (document.cookie = encodeURIComponent(VV) + "=" + encodeURIComponent(eV) + function(VV) {
-                 void 0 === VV && (VV = {});
-                 var eV = VV,
-                   xV = eV.path,
-                   JV = eV.domain,
-                   YV = eV.expires,
-                   UV = eV.secure,
-                   yV = eV.sameSite,
-                   pV = ["none", "lax", "strict"].indexOf((yV || "").toLowerCase()) > -1 ? yV : null;
-                 return [null == xV ? "" : ";path=" + xV, null == JV ? "" : ";domain=" + JV, null == YV ? "" : ";expires=" + YV.toUTCString(), void 0 === UV || !1 === UV ? "" : ";secure", null === pV ? "" : ";SameSite=" + pV].join("")
-               }(xV))
+             get scale() {
+               var HH;
+               return FH()[0] / (null !== (HH = uB()) && void 0 !== HH ? HH : QB())
```

#### 6. `bundles/bloxd.io/chunks/js/216.js` (Changed code · before: `L10990-L10991` → after: `L555-L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adcR555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc) · [After (L555-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/216.js#L555-L556) · [Before (L10990-L10991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/216.js#L10990-L10991)

```diff
-             AU = function() {
-               return "undefined" == typeof document || void 0 === document.cookie ? "" : document.cookie
+             get msaaOff() {
+               return iH()
```

#### 7. `bundles/bloxd.io/chunks/js/216.js` (Changed code · before: `L10993-L11124` → after: `L558-L559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adcR558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc) · [After (L558-L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/216.js#L558-L559) · [Before (L10993-L11124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/216.js#L10993-L11124)

```diff
-             NU = function() {
-               function eV() {}
-               var xV = eV.prototype;
-               return xV.key = function(VV) {
-                 return VV < this.keys.length ? this.keys[VV] : null
-               }, xV.setItem = function(VV, eV, xV) {
-                 PU(VV, eV, xV)
-               }, xV.getItem = function(VV) {
-                 var eV = TU(AU());
-                 return Object.prototype.hasOwnProperty.call(eV, VV) ? eV[VV] : null
-               }, xV.removeItem = function(VV, eV) {
-                 for (var xV, JV, YV = ["", "/"], UV = (null == (xV = location) || null == (JV = xV.hostname) ? void 0 : JV.split(".")) || []; UV.length > 1;) YV.push(UV.join(".")), UV.shift();
-                 for (var yV = 0; yV < YV.length; yV++)
-                   for (var pV, QV, nV = (null == (pV = location) || null == (QV = pV.pathname) ? void 0 : QV.split("/")) || [], wV = ""; nV.length > 0;) {
-                     wV += ("/" === wV ? "" : "/") + nV.shift();
-                     var ZV = FU(FU({}, eV), {}, {
- ... (116 more removed lines; see GitHub link above)
+             get probeShare() {
+               return wH()
```

#### 8. `bundles/bloxd.io/chunks/js/216.js` (Changed code · before: `L11126-L11625` → after: `L561-L635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adcR561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc) · [After (L561-L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/216.js#L561-L635) · [Before (L11126-L11625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/216.js#L11126-L11625)

```diff
-             zU = function(xV) {
-               function JV() {
-                 var VV;
-                 return (VV = xV.call(this) || this).storage = new Map, MU.activedName.subscribe((function(VV) {
-                   var eV = (0, DJ.U2)(MU.defaultStorages);
-                   eV.length > 0 && -1 === eV.indexOf(VV) && MU.activedName.set(eV[0])
-                 })), MU.defaultStorages.subscribe((function(eV) {
-                   -1 === eV.indexOf((0, DJ.U2)(MU.activedName)) && MU.activedName.set(eV[0]), VV.updateEnabledStorages()
-                 })), VV
-               }(0, UV.Z)(JV, xV);
-               var YV = JV.prototype;
-               return YV.getItem = function() {
-                 var VV = jU(Nx().mark((function VV(eV) {
-                   return Nx().wrap((function(VV) {
-                     for (;;) switch (VV.prev = VV.next) {
-                       case 0:
- ... (484 more removed lines; see GitHub link above)
+             log: HH.log,
+             windows: HH.windows
+           };
+           Object.defineProperty(window, "__qualitySteps", {
+             value: BH,
+             configurable: !0
+           })
+         }(zB), GB()
+     }
+ 
+     function UB() {
+       null !== zB && nH() !== PB && (LB = null, TB())
+     }
+ 
+     function VB(HH) {
+       EH.e.setItem(ZH(), {
+ ... (59 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/216.js` (Changed code · before: `L11627-L11892` → after: `L637-L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adcR637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc) · [After (L637-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/216.js#L637-L641) · [Before (L11627-L11892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/216.js#L11627-L11892)

```diff
-           var cU = function(VV) {
-               function eV(eV) {
-                 var xV;
-                 return xV = VV.call(this) || this, (0, yV.S1n)((0, YV.Z)(xV), eV, oU, aU, yV.N8, {}), xV
-               }
-               return (0, UV.Z)(eV, VV), eV
-             }(yV.f_C),
-             hU = cU,
-             lU = function(VV) {
-               function xV(eV, xV, JV) {
-                 var YV;
-                 return void 0 === JV && (JV = {}), (YV = VV.call(this, eV, xV, hU, JV) || this).model = zU.getSingleton(zU, "VConsoleStorageModel"), YV.onAddTopBarCallback = void 0, YV
-               }(0, UV.Z)(xV, VV);
-               var JV = xV.prototype;
-               return JV.onReady = function() {
-                 VV.prototype.onReady.call(this), this.onUpdateOption()
- ... (250 more removed lines; see GitHub link above)
+         }
+         LH && (0, rH.L)(String(LH.getParameter(LH.VENDOR)), String(LH.getParameter(LH.RENDERER)))
+       } catch {}
+       return null
+     }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/217.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/217.js` (18 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0)

#### 1. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/217.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/217.js#L2)

```diff
- export const ids = [217, 218];
+ export const ids = [217];
```

#### 2. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L4-L7` → after: `L4-L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L4-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/217.js#L4-L169) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/217.js#L4-L7)

```diff
-   35136: (VV, eV, xV) => {
-     xV.r(eV), xV.d(eV, {
-       reportJsMainStall: () => pV,
-       resetJsMainStallReport: () => QV
+   37821: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => rH,
+       i: () => SH,
+       k: () => tH,
+       o: () => hH
+     });
+     var AH = LH(1807);
+     const rH = ".bloxdreplay",
+       SH = "application/octet-stream";
+ 
+     function hH() {
+       return `game-recording-${(arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date).toISOString()}${rH}`
+     }
+ 
+     function tH(HH) {
+ ... (150 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L15` → after: `L246-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L246-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/217.js#L246-L284) · [Before (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/217.js#L15)

```diff
-       yV || (yV = !0, (0, YV.reportClientError)("wasm_load", (0, UV.d)(VV, eV, xV, pV, (0, UV.f)()), "JS-mainStall", !0, JV.CAPPED_COUNTS_VISIT_CAP))
+       if (! function(HH, BH, LH) {
+           return HH.size > 0 || BH.size > 0 || LH.size > 0
+         }(BH, LH, AH)) return HH;
+       const rH = HH => {
+         const AH = LH.get(HH.name);
+         var rH;
+         return AH ? null !== (rH = AH.stepsAway) && void 0 !== rH ? rH : 1 : BH.has(HH.name) ? -1 : 0
+       };
+       return [...HH].sort(((HH, BH) => rH(HH) - rH(BH) || ((HH, BH) => {
+         const LH = AH.get(HH.name),
+           rH = AH.get(BH.name);
+         return void 0 === LH || void 0 === rH ? (void 0 === LH ? 1 : 0) - (void 0 === rH ? 1 : 0) : Number(BH.haveIngredients) - Number(HH.haveIngredients) || LH - rH
+       })(HH, BH)))
+     }
+ 
+     function PH(HH, BH, LH) {
+ ... (23 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L19` → after: `L288-L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L288-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/217.js#L288-L292) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/217.js#L19)

```diff
-       yV = !1
+       return (0, AH.c)(tH, QH)
+     }
+ 
+     function bH() {
+       return (0, AH.c)(zH, MH)
```

#### 5. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L22` → after: `L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/217.js#L295) · [Before (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/217.js#L22)

```diff
-   35146: (VV, eV, xV) => {
+   37667: (HH, BH, LH) => {
```

#### 6. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L25` → after: `L298-L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L298-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/217.js#L298-L316) · [Before (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/217.js#L25)

```diff
-       f: () => yV
+       g: () => rH
+     });
+     let AH = () => null;
+ 
+     function rH(HH) {
+       AH = HH
+     }
+ 
+     function SH(HH, BH) {
+       return AH(HH, BH)
+     }
+   },
+   37442: (HH, BH, LH) => {
+     LH.d(BH, {
+       c: () => hH,
+       e: () => uH,
+ ... (3 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L27-L29` → after: `L318-L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L318-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/217.js#L318-L330) · [Before (L27-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/217.js#L27-L29)

```diff
-     var JV = xV(296),
-       YV = xV(134),
-       UV = xV(35148);
+     var AH = LH(37450);
+     const rH = "data-camera-fade",
+       SH = "data-letterbox-bar",
+       hH = "data-camera-fade-layer";
+ 
+     function tH(HH) {
+       return HH instanceof Element && HH.hasAttribute(SH)
+     }
+     let zH = null;
+ 
+     function CH(HH) {
+       zH = HH
+     }
```

#### 8. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L32-L33` → after: `L333-L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L333-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/217.js#L333-L337) · [Before (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/217.js#L32-L33)

```diff
-       var VV, eV, xV;
-       return null !== (VV = (0, JV.k)(null !== (eV = null === (xV = (0, YV.o)()) || void 0 === xV ? void 0 : xV.renderer) && void 0 !== eV ? eV : null, (0, YV.k)())) && void 0 !== VV ? VV : "unknown"
+       const HH = document.createElement("div"),
+         {
+           style: BH
+         } = HH;
+       return BH.position = "absolute", BH.left = "0", BH.right = "0", BH.pointerEvents = "none", HH
```

#### 9. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L36-L38` → after: `L340-L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L340-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/217.js#L340-L414) · [Before (L36-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/217.js#L36-L38)

```diff
-     function pV(VV, eV, xV, JV, YV) {
-       const yV = null === eV ? "untimed" : `${Math.round(eV)} ms`;
-       return `frames stalled, ${xV}, gpu ${(0,UV.b)(YV)}, blocking ${yV}, drawn ${Math.round(VV)} ms apart, timers ${JV.timers}, timer gap ${Math.round(JV.longestGapMs)} ms`
+     function XH(HH) {
+       const BH = EH();
+       BH.style[HH] = "0", BH.style.height = 100 * AH.e + "%", BH.style.background = "#000000", BH.style.pointerEvents = "auto", BH.setAttribute(SH, ""), BH.addEventListener("mousedown", YH), BH.addEventListener("contextmenu", GH);
+       for (const LH of ["touchstart", "touchmove", "touchend", "touchcancel"]) BH.addEventListener(LH, GH);
+       return BH
+     }
+ 
+     function GH(HH) {
+       HH.preventDefault(), HH.stopPropagation()
+     }
+ 
+     function YH(HH) {
+       GH(HH);
+       const BH = document.activeElement;
+       BH instanceof HTMLElement && BH !== document.body && BH.blur()
+     }
+ ... (59 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L41-L47` → after: `L417-L425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L417-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/217.js#L417-L425) · [Before (L41-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/217.js#L41-L47)

```diff
-   35139: (VV, eV, xV) => {
-     xV.r(eV), xV.d(eV, {
-       CAPPED_COUNTS_VISIT_CAP: () => UV,
-       reportCappedWasmFailure: () => QV,
-       reportUncappedWasmFailure: () => pV,
-       reportWasmCrash: () => YV,
-       reportWasmFailure: () => yV
+   37860: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => hH,
+       i: () => rH,
+       k: () => SH,
+       l: () => AH,
+       n: () => EH,
+       r: () => XH,
+       t: () => zH
```

#### 11. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L49` → after: `L427-L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L427-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/217.js#L427-L430) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/217.js#L49)

```diff
-     var JV = xV(3268);
+     const AH = [0, 0, 1, 1],
+       rH = [.42, 0, 1, 1],
+       SH = [0, 0, .58, 1],
+       hH = [.42, 0, .58, 1];
```

#### 12. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L52` → after: `L433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/217.js#L433) · [Before (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/217.js#L52)

```diff
-       (0, JV.reportClientError)("wasm_load", VV.message, VV.code)
+       return Math.min(1, Math.max(0, HH))
```

#### 13. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L56-L59` → after: `L436-L439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L436-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/217.js#L436-L439) · [Before (L56-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/217.js#L56-L59)

```diff
-     function yV(VV, eV, xV, YV) {
-       (0, JV.reportClientError)(VV, eV, xV, !1, JV.MAX_ERRORS_PER_VISIT, {
-         context: YV
-       })
+     function zH(HH, BH, LH) {
+       const AH = 1 - LH,
+         rH = LH * LH;
+       return 3 * (AH * AH) * LH * HH + 3 * AH * rH * BH + rH * LH
```

#### 14. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L62-L65` → after: `L442-L444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L442-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/217.js#L442-L444) · [Before (L62-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/217.js#L62-L65)

```diff
-     function pV(VV, eV, xV, YV) {
-       (0, JV.reportClientError)(VV, eV, xV, !1, 1 / 0, {
-         context: YV
-       })
+     function CH(HH, BH, LH) {
+       const AH = 1 - LH;
+       return 3 * (AH * AH) * HH + 6 * AH * LH * (BH - HH) + 3 * (LH * LH) * (1 - BH)
```

#### 15. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L68-L71` → after: `L447-L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L447-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/217.js#L447-L492) · [Before (L68-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/217.js#L68-L71)

```diff
-     function QV(VV, eV, xV, YV) {
-       (0, JV.reportClientError)(VV, eV, xV, !1, UV, {
-         context: YV
-       })
+     function EH(HH, BH) {
+       const LH = tH(HH);
+       if (0 === LH || 1 === LH) return LH;
+       const AH = tH(BH[0]),
+         rH = BH[1],
+         SH = tH(BH[2]),
+         hH = BH[3];
+       if (AH === rH && SH === hH) return LH;
+       let EH = LH,
+         XH = !1;
+       for (let GH = 0; GH < 8; GH++) {
+         const HH = zH(AH, SH, EH) - LH;
+         if (Math.abs(HH) < 1e-6) {
+           XH = !0;
+           break
+         }
+ ... (30 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L74` → after: `L495-L503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L495-L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/217.js#L495-L503) · [Before (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/217.js#L74)

```diff
-   35148: (VV, eV, xV) => {
+   37450: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => AH,
+       g: () => rH,
+       i: () => SH
+     });
+     const AH = .12,
+       rH = 1 - 2 * AH;
+ 
```

#### 17. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L76` → after: `L505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/217.js#L505) · [Before (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/217.js#L76)

```diff
-       return String(VV).replace(/\d/g, (VV => String.fromCharCode(97 + Number(VV))))
+       return Math.abs(HH) > rH
```

#### 18. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L79` → after: `L510-L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L510-L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/217.js#L510-L565) · [Before (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/217.js#L79)

```diff
-       b: () => JV
+       e: () => SH
+     });
+     var AH = LH(1260);
+ 
+     function rH() {
+       var HH, BH;
+       return null !== (HH = null === (BH = screen.orientation) || void 0 === BH ? void 0 : BH.type) && void 0 !== HH ? HH : innerWidth > innerHeight ? "landscape" : "portrait"
+     }
+     const SH = new class {
+       constructor() {
+         this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
+           document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
+         }
+       }
+       isHeld() {
+         return this.holding && rH() !== this.heldOrientation && (this.holding = !1), this.holding
+ ... (40 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/218.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/218.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b)

#### 1. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L4-L10` → after: `L4-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L4-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/218.js#L4-L71) · [Before (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/218.js#L4-L10)

```diff
-   35139: (VV, eV, xV) => {
-     xV.r(eV), xV.d(eV, {
-       CAPPED_COUNTS_VISIT_CAP: () => UV,
-       reportCappedWasmFailure: () => QV,
-       reportUncappedWasmFailure: () => pV,
-       reportWasmCrash: () => YV,
-       reportWasmFailure: () => yV
+   39735: (HH, BH, LH) => {
+     var AH = {
+       "./cape_cow_cream.png": 28495,
+       "./cape_cow_normal.png": 28500,
+       "./cape_creator_level1.png": 28507,
+       "./cape_creator_level2.png": 28514,
+       "./cape_creator_level3.png": 28521,
+       "./cape_none.png": 28530,
+       "./cape_pig.png": 28532,
+       "./cape_sheep.png": 28537,
+       "./cape_super.png": 28544,
+       "./cape_super_inverted.png": 28550,
+       "./cape_youtuber.png": 28552
+     };
+ 
+     function rH(HH) {
+ ... (52 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L12` → after: `L73-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L73-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/218.js#L73-L78) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/218.js#L12)

```diff
-     var JV = xV(3268);
+     var AH = LH(186);
+     const rH = JSON.parse('{"aura_snowfall":{"offset":[0,2.6,0],"ownInFirstPerson":true,"particles":{"blendMode":1,"capacity":64,"colorGradients":[{"minColor":[255,255,255,0.9],"timeFraction":0},{"minColor":[255,255,255,0],"timeFraction":1}],"depth":3,"dir1":[-0.2,-1,-0.2],"dir2" … [truncated]
+       SH = "PetRoot";
+     let hH = JSON.parse('{"pet_reindeer":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset … [truncated]
+       tH = rH;
+     new Map, new Map;
```

#### 3. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L15` → after: `L81-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/218.js#L81-L82) · [Before (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/218.js#L15)

```diff
-       (0, JV.reportClientError)("wasm_load", VV.message, VV.code)
+       var BH;
+       return null !== (BH = (0, AH.d)(hH, HH)) && void 0 !== BH ? BH : null
```

#### 4. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L19-L22` → after: `L85-L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L85-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/218.js#L85-L144) · [Before (L19-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/218.js#L19-L22)

```diff
-     function yV(VV, eV, xV, YV) {
-       (0, JV.reportClientError)(VV, eV, xV, !1, JV.MAX_ERRORS_PER_VISIT, {
-         context: YV
-       })
+     function CH(HH) {
+       var BH;
+       return null !== (BH = (0, AH.d)(tH, HH)) && void 0 !== BH ? BH : null
+     }
+   },
+   40117: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => AH,
+       c: () => rH,
+       g: () => SH
+     });
+     class AH {
+       constructor() {
+         this.pose = {
+           pos: [0, 0, 0],
+           yaw: 0,
+ ... (44 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L25-L28` → after: `L147-L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L147-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/218.js#L147-L358) · [Before (L25-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/218.js#L25-L28)

```diff
-     function pV(VV, eV, xV, YV) {
-       (0, JV.reportClientError)(VV, eV, xV, !1, 1 / 0, {
-         context: YV
-       })
+     function rH(HH, BH) {
+       return HH.bobAmplitude * Math.sin(2 * Math.PI * HH.bobHz * BH)
+     }
+ 
+     function SH(HH, BH, LH, AH, rH) {
+       const [SH, hH, tH] = LH;
+       HH[0] = BH[0] + SH * rH + tH * AH, HH[1] = BH[1] + hH, HH[2] = BH[2] - SH * AH + tH * rH
+     }
+   },
+   40075: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => SH
+     });
+     var AH = LH(37961),
+       rH = LH(38729);
+ 
+ ... (196 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L32-L33` → after: `L362-L1018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L362-L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/218.js#L362-L1018) · [Before (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/218.js#L32-L33)

```diff
-       (0, JV.reportClientError)(VV, eV, xV, !1, UV, {
-         context: YV
+       EH(HH, !0), (0, SH.o)(HH, BH.overlayColour), LH.attachTransformNode(HH, AH, LH.getNamedNode(AH, BH.destNode))
+     }
+     class YH {
+       constructor(HH, BH, LH) {
+         this.NQ = HH, this.thinInstMgr = BH, this.kR = LH, this.modelCache = {}, this.attachmentsByType = {}, this.shownBones = [], this.cosmeticNames = {}
+       }
+       loadModel(HH, BH, LH) {
+         const AH = (0, SH.g)(HH, BH);
+         return AH in this.modelCache || (this.modelCache[AH] = (async () => {
+           try {
+             const AH = XH(await CH(this.NQ, HH, BH, {
+                 keepTransforms: void 0 !== LH,
+                 backFaceCulling: !1
+               })),
+               rH = void 0 === LH ? null : (0, hH.j)(LH, (HH => {
+                 const BH = AH.get(HH);
+ ... (641 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/219.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/219.js` (61 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217)

#### 1. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/219.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/219.js#L2)

```diff
- export const ids = [218, 219];
+ export const ids = [219];
```

#### 2. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L4-L37` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/219.js#L4) · [Before (L4-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/219.js#L4-L37)

```diff
-   35139: (VV, eV, xV) => {
-     xV.r(eV), xV.d(eV, {
-       CAPPED_COUNTS_VISIT_CAP: () => UV,
-       reportCappedWasmFailure: () => QV,
-       reportUncappedWasmFailure: () => pV,
-       reportWasmCrash: () => YV,
-       reportWasmFailure: () => yV
-     });
-     var JV = xV(3268);
- 
-     function YV(VV) {
-       (0, JV.reportClientError)("wasm_load", VV.message, VV.code)
-     }
-     const UV = JV.MAX_ERRORS_PER_VISIT - 4;
- 
-     function yV(VV, eV, xV, YV) {
- ... (18 more removed lines; see GitHub link above)
+   37487: (HH, BH, LH) => {
```

#### 3. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L39-L42` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/219.js#L6-L7) · [Before (L39-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/219.js#L39-L42)

```diff
-       e: () => FV,
-       f: () => AV,
-       g: () => NV,
-       i: () => TV
+       c: () => QH,
+       d: () => UH
```

#### 4. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L44-L83` → after: `L9-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L9-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/219.js#L9-L58) · [Before (L44-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/219.js#L44-L83)

```diff
-     var JV = xV(37442),
-       YV = xV(3194),
-       UV = xV(37458),
-       yV = xV(3196),
-       pV = xV(35139),
-       QV = xV(3258),
-       nV = xV(3658),
-       wV = xV(3651),
-       ZV = xV(37422),
-       vV = xV(3268),
-       rV = xV(37429),
-       kV = xV(37437),
-       bV = xV(4122);
-     let EV = !1;
-     const BV = 40;
-     var jV = xV(2617);
- ... (24 more removed lines; see GitHub link above)
+     LH(34960);
+     var AH = LH(45),
+       rH = LH(1450),
+       SH = LH(1998),
+       hH = LH(2051),
+       tH = LH(15),
+       zH = LH(2628),
+       CH = LH(37496),
+       EH = LH(37504),
+       XH = LH(34942),
+       GH = LH(34951),
+       YH = LH(34969),
+       uH = LH(1225);
+     const QH = (0, AH.memo)((function() {
+       var HH;
+       const {
+ ... (34 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L86-L88` → after: `L61-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L61-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/219.js#L61-L76) · [Before (L86-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/219.js#L86-L88)

```diff
-       if (tV()) return async () => ((0, QV.k)("unsupported", 0), XV("unsupported", "This browser has no WebAssembly"), !1);
-       const VV = {
-         reloadFailedDownload: !0
+       return SH.gameBridge.lookup("cameraZoom", null)
+     }
+     const MH = [{
+         current: null
+       }, {
+         current: null
+       }, {
+         current: null
+       }, {
+         current: null
+       }],
+       xH = {
+         current: null
+       },
+       vH = {
+         current: null
```

#### 6. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L90-L131` → after: `L78-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/219.js#L78-L79) · [Before (L90-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/219.js#L90-L131)

```diff
-       return PV(VV), async () => {
-         var eV;
-         const xV = performance.now();
-         await PV(VV);
-         const JV = (performance.now() - xV) / 1e3;
-         if ((0, YV.R)()) return (0, QV.k)("ready", JV), EV || (EV = !0, (0, YV.W)((() => {
-           if ("call" !== (0, YV.r)()) return;
-           const VV = (0, YV.p)(),
-             eV = (0, ZV.j)(VV, YV.G, YV.ab),
-             xV = (0, YV.x)().buffer.byteLength,
-             JV = (0, ZV.e)(eV.kind, eV.refusedBytes),
-             UV = JV ? "alloc_failed" : eV.kind,
-             yV = (0, rV.i)(xV),
-             pV = JV ? `_r${Math.floor(Math.log2(eV.refusedBytes))}` : "",
-             QV = (0, bV.d)();
-           null === QV && console.warn("A JS client wasm call turned wasm off without naming its site: call markWasmFailedAt, not markBloxdWasmFailed");
- ... (26 more removed lines; see GitHub link above)
+     let PH = 0,
+       TH = 0;
```

#### 7. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L134-L136` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/219.js#L82) · [Before (L134-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/219.js#L134-L136)

```diff
-       if (VV instanceof WebAssembly.RuntimeError) return !0;
-       const eV = VV instanceof Error ? VV.stack : void 0;
-       return "string" === typeof eV && UV.test(eV)
+       TH = HH, MH[0].current || xH.current || vH.current ? OH(HH) : PH = HH
```

#### 8. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L139-L146` → after: `L85-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L85-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/219.js#L85-L86) · [Before (L139-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/219.js#L139-L146)

```diff
-     function pV(VV, eV, xV) {
-       var YV;
-       const yV = VV instanceof Error ? VV.name : "thrown",
-         pV = (VV instanceof Error && null !== (YV = VV.stack) && void 0 !== YV ? YV : "").split("\n").filter((VV => UV.test(VV))).slice(0, 8).map((VV => VV.trim())),
-         QV = null === eV ? "wasm memory unknown" : `wasm memory ${Math.round(eV/2**20)} MB`,
-         nV = null === xV.panic ? "" : `, panic: ${(0,JV.i)(xV.panic)}`,
-         wV = `${yV}: ${VV instanceof Error?VV.message:String(VV)}`;
-       return `${(0,JV.l)(xV.kind,xV.refusedBytes)} ${wV} (${QV})${nV}${pV.length>0?` | ${pV.join(" < ")}`:""}`
+     function VH(HH) {
+       return ((0, CH.d)(HH) - (0, CH.d)(0)) * window.innerHeight / 100
```

#### 9. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L152-L158` → after: `L91-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L91-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/219.js#L91-L93) · [Before (L152-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/219.js#L152-L158)

```diff
-       let xV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
-       if (!(VV instanceof Error) || !QV.test(VV.message)) return {};
-       if (!("detached" in xV)) return {
-         arrayBufferDetached: "absent"
-       };
-       return {
-         arrayBufferDetached: (0, YV.R)(null === (eV = (0, YV.L)(xV, "detached")) || void 0 === eV ? void 0 : eV.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
+       if (null === (BH = vH.current) || void 0 === BH || BH.call(vH, VH(HH)), MH[0].current) {
+         const BH = `${(0,CH.d)(HH)}vh`;
+         MH[0].current.style.transform = `translateX(calc(0px - ${BH}))`, MH[1].current.style.transform = `translateX(calc(0px + ${BH}))`, MH[2].current.style.transform = `translateY(calc(0px - ${BH}))`, MH[3].current.style.transform = `translateY(calc(0px + ${BH}))`
```

#### 10. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L164-L174` → after: `L99-L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L99-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/219.js#L99-L176) · [Before (L164-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/219.js#L164-L174)

```diff
-       let eV = "[object Object]";
-       try {
-         eV = String(VV)
-       } catch {}
-       if ("[object Object]" !== eV) return eV;
-       try {
-         var xV, JV;
-         return null !== (xV = null === (JV = JSON.stringify(VV)) || void 0 === JV ? void 0 : JV.slice(0, wV)) && void 0 !== xV ? xV : eV
-       } catch {
-         return eV
-       }
+       let {
+         custom: BH,
+         touch: LH
+       } = HH;
+       const SH = (0, rH.e)("aimingOverlay", "none"),
+         hH = "1.2vh",
+         tH = "0.3vh";
+       (0, AH.useEffect)((() => {
+         PH && OH(PH)
+       }), []);
+       const zH = (0, AH.useRef)(null !== BH);
+       return (0, AH.useLayoutEffect)((() => {
+         var HH;
+         BH ? null === (HH = vH.current) || void 0 === HH || HH.call(vH, VH(TH)) : zH.current && OH(TH);
+         zH.current = null !== BH
+       }), [BH]), (0, uH.jsxs)(uH.Fragment, {
+ ... (62 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L177-L273` → after: `L179-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L179-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/219.js#L179-L182) · [Before (L177-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/219.js#L177-L273)

```diff
-   37475: (VV, eV, xV) => {
-     VV.exports = xV.p + "static/media/bloxd_wasm_bg.de3bc866342b80b42882.wasm"
-   },
-   37450: (VV, eV, xV) => {
-     VV.exports = xV.p + "static/media/bloxd_wasm_textures_bg.494527582f8a00d14dd8.wasm"
-   },
-   37467: (VV, eV, xV) => {
-     xV.r(eV), xV.d(eV, {
-       UV: () => JV,
-       EnvelopeKind: () => YV,
-       ve: () => UV,
-       PhysicsEngine: () => yV,
-       le: () => pV,
-       tx: () => QV,
-       sx: () => nV,
-       sy: () => wV,
- ... (81 more removed lines; see GitHub link above)
+   34951: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => QH,
+       c: () => uH
```

#### 12. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L275-L891` → after: `L184-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L184-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/219.js#L184-L188) · [Before (L275-L891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/219.js#L275-L891)

```diff
-     class UV {
-       __destroy_into_raw() {
-         const VV = this.__wbg_ptr;
-         return this.__wbg_ptr = 0, iV.unregister(this), VV
-       }
-       free() {
-         const VV = this.__destroy_into_raw();
-         qe.hsUl(VV, 0)
-       }
-       nv(VV, eV) {
-         const xV = qe.h4zc(this.__wbg_ptr, VV, eV);
-         if (xV[2]) throw ve(xV[1]);
-         return xV[0] >>> 0
-       }
-       wv(VV) {
-         const eV = qe.oR3a(this.__wbg_ptr, VV);
- ... (601 more removed lines; see GitHub link above)
+     LH(34960);
+     var AH = LH(1038),
+       rH = LH.n(AH),
+       SH = LH(45),
+       hH = LH(34946);
```

#### 13. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L893-L896` → after: `L190-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L190-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/219.js#L190-L191) · [Before (L893-L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/219.js#L893-L896)

```diff
-     function vV() {
-       const VV = qe.w1cB();
-       var eV = KV(VV[0], VV[1]).slice();
-       return qe.lxMR(VV[0], 4 * VV[1], 4), eV
+     function tH(HH, BH) {
+       return Math.max(1, Math.round(HH * BH))
```

#### 14. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L900-L909` → after: `L195-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L195-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/219.js#L195-L268) · [Before (L900-L909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/219.js#L900-L909)

```diff
-       let xV, JV;
-       try {
-         const YV = pe(VV, qe.ENta),
-           UV = te,
-           yV = Ze(eV, qe.ENta, qe.ysPp),
-           pV = te,
-           QV = qe.Scao(YV, UV, yV, pV);
-         return xV = QV[0], JV = QV[1], IV(QV[0], QV[1])
-       } finally {
-         qe.lxMR(xV, JV, 1)
+       const LH = BH * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
+         AH = function(HH, BH) {
+           if (HH.lines) return tH(HH.lineThickness, BH) % 2;
+           if (HH.dot) return tH(HH.dotSize, BH) % 2;
+           return CH(HH, BH) % 2
+         }(HH, BH),
+         rH = EH(HH.lineThickness * LH, AH),
+         SH = tH(HH.lineLength, LH),
+         hH = Math.round(HH.gap * LH),
+         zH = HH.outline > 0 ? tH(HH.outline, LH) : 0,
+         GH = [];
+       if (HH.lines && (GH.push({
+           x: rH + hH,
+           y: 0,
+           w: SH,
+           h: rH,
+ ... (58 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L913-L920` → after: `L272-L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L272-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/219.js#L272-L273) · [Before (L913-L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/219.js#L913-L920)

```diff
-     function kV() {
-       const VV = qe.f4AX();
-       var eV = KV(VV[0], VV[1]).slice();
-       return qe.lxMR(VV[0], 4 * VV[1], 4), eV
-     }
- 
-     function bV(VV) {
-       return 0 !== qe.qT99(VV)
+     function CH(HH, BH) {
+       return Math.round(HH.circleRadius * BH * 2 + tH(HH.circleThickness, BH))
```

#### 16. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L924-L927` → after: `L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/219.js#L277) · [Before (L924-L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/219.js#L924-L927)

```diff
-       const xV = Ze(VV, qe.ENta, qe.ysPp),
-         JV = te,
-         YV = qe.gfKC(xV, JV, eV);
-       if (YV[1]) throw ve(YV[0])
+       return Math.max(2 - BH, 2 * Math.round((HH - BH) / 2) + BH)
```

#### 17. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L930-L931` → after: `L280-L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L280-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/219.js#L280-L288) · [Before (L930-L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/219.js#L930-L931)

```diff
-     function BV() {
-       qe.Yjra()
+     function XH(HH, BH, LH) {
+       const AH = 2 * LH >= BH - 1;
+       return {
+         x: HH,
+         y: HH,
+         size: BH,
+         border: Math.min(LH, Math.floor(BH / 2)),
+         filled: AH
+       }
```

#### 18. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L934-L935` → after: `L293-L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L293-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/219.js#L293-L294) · [Before (L934-L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/219.js#L934-L935)

```diff
-     function jV() {
-       return qe.lg17() >>> 0
+     function uH(HH, BH) {
+       return HH && BH ? `scale(${YH})` : "scale(1)"
```

#### 19. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L939` → after: `L298-L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L298-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/219.js#L298-L302) · [Before (L939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/219.js#L939)

```diff
-       return 0 !== qe.NUTp(VV)
+       return "classic" === HH.settings.style ? (0, GH.jsx)(xH, {
+         ...HH
+       }) : (0, GH.jsx)(bH, {
+         ...HH
+       })
```

#### 20. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L942-L943` → after: `L306-L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L306-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/219.js#L306-L317) · [Before (L942-L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/219.js#L942-L943)

```diff
-     function tV(VV) {
-       return 0 !== qe.BCFg(VV)
+     function MH(HH, BH) {
+       const LH = {};
+       if (HH.color !== hH.c.color && (LH.color = (0, hH.e)(HH.color)), HH.opacity !== hH.c.opacity && (LH.opacity = HH.opacity / 100), HH.outline !== hH.c.outline || HH.outlineColor !== hH.c.outlineColor) {
+         const BH = HH.outline,
+           AH = (0, hH.e)(HH.outlineColor);
+         LH.textShadow = BH > 0 ? `-${BH}px 0 ${AH}, 0 ${BH}px ${AH}, ${BH}px 0 ${AH}, 0 -${BH}px ${AH}` : "none"
+       }
+       if (HH.size !== hH.c.size) {
+         const AH = HH.size / 100;
+         LH.fontSize = BH ? `calc(max(1.3rem, 18px) * ${AH})` : `calc(1.3rem * ${AH})`, LH.marginTop = `-${WH}em`, LH.transformOrigin = `50% calc(50% + ${WH}em)`
+       }
+       return LH
```

#### 21. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L947-L971` → after: `L321-L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L321-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/219.js#L321-L341) · [Before (L947-L971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/219.js#L947-L971)

```diff
-       qe.btD5(VV)
-     }
- 
-     function TV() {
-       return qe.b0cD() >>> 0
-     }
- 
-     function PV() {
-       return qe.bdZZ() >>> 0
-     }
- 
-     function AV() {
-       return 0 !== qe.a1RV()
-     }
- 
-     function NV() {
- ... (9 more removed lines; see GitHub link above)
+       let {
+         settings: BH,
+         touch: LH,
+         inPreview: AH,
+         inEditor: SH,
+         pressed: hH = !1,
+         pressRef: tH
+       } = HH;
+       return (0, GH.jsx)("div", {
+         className: rH()("Crosshair", {
+           Touch: LH,
+           CrosshairInPreview: AH,
+           CrosshairInEditor: SH || AH
+         }),
+         ref: tH,
+         style: {
+ ... (5 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L974-L977` → after: `L344-L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L344-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/219.js#L344-L345) · [Before (L974-L977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/219.js#L974-L977)

```diff
-     function MV() {
-       const VV = qe.ssh2();
-       var eV = KV(VV[0], VV[1]).slice();
-       return qe.lxMR(VV[0], 4 * VV[1], 4), eV
+     function vH(HH, BH) {
+       return HH / BH + "px"
```

#### 23. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L980-L981` → after: `L348-L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L348-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/219.js#L348-L354) · [Before (L980-L981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/219.js#L980-L981)

```diff
-     function zV() {
-       return qe.tako() >>> 0
+     function PH(HH, BH, LH, AH) {
+       return {
+         ...VH(HH, BH, LH),
+         width: vH(HH.w, LH),
+         height: vH(HH.h, LH),
+         background: AH
+       }
```

#### 24. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L984-L985` → after: `L357-L366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L357-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/219.js#L357-L366) · [Before (L984-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/219.js#L984-L985)

```diff
-     function GV() {
-       qe.Y35V()
+     function TH(HH, BH, LH) {
+       return {
+         left: vH(HH.x, BH),
+         top: vH(HH.y, BH),
+         width: vH(HH.size, BH),
+         height: vH(HH.size, BH),
+         borderWidth: vH(HH.border, BH),
+         borderColor: LH,
+         background: HH.filled ? LH : void 0
+       }
```

#### 25. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L988-L994` → after: `L375-L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L375-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/219.js#L375-L379) · [Before (L988-L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/219.js#L988-L994)

```diff
-     function WV() {
-       let VV, eV;
-       try {
-         const xV = qe.UMtW();
-         return VV = xV[0], eV = xV[1], IV(xV[0], xV[1])
-       } finally {
-         qe.lxMR(VV, eV, 1)
+     function VH(HH, BH, LH) {
+       const [AH, rH] = HH.arm ? UH[HH.arm] : [0, 0], SH = Math.round(BH * LH);
+       return {
+         left: vH(HH.x + AH * SH, LH),
+         top: vH(HH.y + rH * SH, LH)
```

#### 26. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L999` → after: `L384-L388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L384-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/219.js#L384-L388) · [Before (L999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/219.js#L999)

```diff
-       qe.WHhU(LV(VV))
+       return HH.arm ? {
+         "data-arm": HH.arm,
+         "data-x": HH.x,
+         "data-y": HH.y
+       } : {}
```

#### 27. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1002-L1023` → after: `L391-L445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L391-L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/219.js#L391-L445) · [Before (L1002-L1023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/219.js#L1002-L1023)

```diff
-     function gV() {
-       return {
-         __proto__: null,
-         YE4x: {
-           __proto__: null,
-           mLQO: function(VV, eV) {
-             return LV(Error(IV(VV, eV)))
-           },
-           nuNj: function(VV, eV) {
-             throw new Error(IV(VV, eV))
-           },
-           tqsH: function(VV) {
-             Je(VV).call()
-           },
-           bJ0J: function(VV, eV) {
-             console.error(IV(VV, eV))
- ... (6 more removed lines; see GitHub link above)
+     function bH(HH) {
+       let {
+         settings: BH,
+         inPreview: LH,
+         inEditor: AH,
+         pressed: tH = !1,
+         spread: CH,
+         spreadRef: EH
+       } = HH;
+       const XH = (0, SH.useRef)(null),
+         {
+           box: uH,
+           dpr: QH
+         } = function(HH) {
+           const [BH, LH] = (0, SH.useState)({
+             box: {
+ ... (39 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1026` → after: `L466-L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L466-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/219.js#L466-L501) · [Before (L1026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/219.js#L1026)

```diff
-       }
+       }), [EH]);
+       const kH = null !== CH && void 0 !== CH ? CH : bH.current;
+       return (0, GH.jsx)("div", {
+         ref: XH,
+         className: rH()("CrosshairShapes", {
+           CrosshairInPreview: LH,
+           CrosshairInEditor: AH || LH,
+           CrosshairSpreads: void 0 !== EH
+         }),
+         children: (0, GH.jsx)("div", {
+           className: "CrosshairShapesOrigin",
+           style: {
+             left: xH.x,
+             top: xH.y,
+             opacity: BH.opacity / 100
+           },
+ ... (20 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1028-L1060` → after: `L503-L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L503-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/219.js#L503-L517) · [Before (L1028-L1060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/219.js#L1028-L1060)

```diff
-     Symbol.dispose && (ZV.prototype[Symbol.dispose] = ZV.prototype.free);
-     const DV = "undefined" === typeof FinalizationRegistry ? {
-         register: () => {},
-         unregister: () => {}
-       } : new FinalizationRegistry((VV => qe.zoRH(VV, 1))),
-       iV = "undefined" === typeof FinalizationRegistry ? {
-         register: () => {},
-         unregister: () => {}
-       } : new FinalizationRegistry((VV => qe.hsUl(VV, 1))),
-       CV = "undefined" === typeof FinalizationRegistry ? {
-         register: () => {},
-         unregister: () => {}
-       } : new FinalizationRegistry((VV => qe.mbL9(VV, 1))),
-       aV = "undefined" === typeof FinalizationRegistry ? {
-         register: () => {},
-         unregister: () => {}
- ... (17 more removed lines; see GitHub link above)
+   },
+   34962: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => EH,
+       f: () => WH,
+       g: () => QH
+     });
+     var AH = LH(34946);
+     const rH = "XH1-",
+       SH = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
+       hH = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
+       tH = ["color", "outlineColor"],
+       zH = 1 + 3 * tH.length + hH.length + 1,
+       CH = Math.ceil(8 * zH / Math.log2(62)),
+       EH = rH.length + CH;
```

#### 30. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1063-L1081` → after: `L520-L522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L520-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/219.js#L520-L522) · [Before (L1063-L1081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/219.js#L1063-L1081)

```diff
-       Ue === Ye.length && Ye.push(Ye.length + 1);
-       const eV = Ue;
-       return Ue = Ye[eV], Ye[eV] = VV, eV
-     }
- 
-     function fV(VV, eV) {
-       if (!(VV instanceof eV)) throw new Error(`expected instance of ${eV.name}`)
-     }
- 
-     function mV(VV, eV) {
-       return VV >>>= 0, sV().subarray(VV / 8, VV / 8 + eV)
-     }
- 
-     function KV(VV, eV) {
-       return VV >>>= 0, Ve().subarray(VV / 4, VV / 4 + eV)
-     }
- ... (3 more removed lines; see GitHub link above)
+       let BH = 90;
+       for (const LH of HH) BH = 31 * BH + LH & 255;
+       return BH
```

#### 31. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1083-L1088` → after: `L524-L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L524-L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/219.js#L524-L525) · [Before (L1083-L1088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/219.js#L1083-L1088)

```diff
-     let uV = null;
- 
-     function sV() {
-       return null !== uV && 0 !== uV.byteLength || (uV = new Float64Array(qe.memory.buffer)), uV
-     }
-     let SV = null;
+     const GH = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
+       YH = BigInt(GH.length);
```

#### 32. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1091-L1108` → after: `L528-L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L528-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/219.js#L528-L537) · [Before (L1091-L1108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/219.js#L1091-L1108)

```diff
-       return function(VV, eV) {
-         be += eV, be >= ke && (re = new TextDecoder("utf-8", {
-           ignoreBOM: !0,
-           fatal: !0
-         }), re.decode(), be = eV);
-         return re.decode(xe().subarray(VV, VV + eV))
-       }(VV >>> 0, eV)
-     }
-     let dV = null;
-     let OV = null;
- 
-     function Ve() {
-       return null !== OV && 0 !== OV.byteLength || (OV = new Uint32Array(qe.memory.buffer)), OV
-     }
-     let ee = null;
- 
- ... (2 more removed lines; see GitHub link above)
+       let LH = 0n;
+       for (const rH of HH) {
+         const HH = GH.indexOf(rH);
+         if (HH < 0) return null;
+         LH = LH * YH + BigInt(HH)
+       }
+       if (LH >> BigInt(8 * BH) !== 0n) return null;
+       const AH = [];
+       for (let rH = 0; rH < BH; rH++) AH.unshift(Number(0xffn & LH)), LH >>= 8n;
+       return AH
```

#### 33. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1112` → after: `L541-L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L541-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/219.js#L541-L563) · [Before (L1112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/219.js#L1112)

```diff
-       return Ye[VV]
+       let BH = "shapes" === HH.style ? 1 : 0;
+       SH.forEach(((LH, AH) => {
+         HH[LH] && (BH |= 1 << AH + 1)
+       }));
+       const LH = [BH];
+       for (const rH of tH) {
+         const BH = (0, AH.d)(rH, HH[rH]);
+         LH.push(BH >> 16 & 255, BH >> 8 & 255, 255 & BH)
+       }
+       for (const rH of hH) {
+         const {
+           min: BH,
+           step: SH
+         } = AH.b[rH];
+         LH.push(Math.round(((0, AH.d)(rH, HH[rH]) - BH) / SH))
+       }
+ ... (7 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1119` → after: `L567-L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L567-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/219.js#L567-L571) · [Before (L1119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/219.js#L1119)

```diff
-       return void 0 === VV || null === VV
+       for (const BH of HH.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${CH}})`, "gi"))) {
+         const HH = MH(uH(BH[1], zH));
+         if (HH) return HH
+       }
+       return null
```

#### 35. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1122-L1124` → after: `L574-L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L574-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/219.js#L574-L593) · [Before (L1122-L1124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/219.js#L1122-L1124)

```diff
-     function pe(VV, eV) {
-       const xV = eV(2 * VV.length, 2) >>> 0;
-       return (null !== dV && 0 !== dV.byteLength || (dV = new Uint16Array(qe.memory.buffer)), dV).set(VV, xV / 2), te = VV.length, xV
+     function MH(HH) {
+       if (!HH || HH.length !== zH || XH(HH.slice(0, -1)) !== HH[HH.length - 1]) return null;
+       const BH = HH[0],
+         LH = {
+           ...AH.c,
+           style: 1 & BH ? "shapes" : "classic"
+         };
+       SH.forEach(((HH, AH) => {
+         LH[HH] = 0 !== (BH & 1 << AH + 1)
+       }));
+       let rH = 1;
+       for (const AH of tH) LH[AH] = HH[rH] << 16 | HH[rH + 1] << 8 | HH[rH + 2], rH += 3;
+       for (const SH of hH) {
+         const {
+           min: BH,
+           step: hH
+ ... (4 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1128-L1129` → after: `L686-L695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L686-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/219.js#L686-L695) · [Before (L1128-L1129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/219.js#L1128-L1129)

```diff
-       const xV = eV(4 * VV.length, 4) >>> 0;
-       return Ve().set(VV, xV / 4), te = VV.length, xV
+       var LH;
+       const {
+         min: SH,
+         max: hH,
+         step: tH
+       } = AH[HH];
+       if (!Number.isFinite(BH)) return rH[HH];
+       const zH = (null !== (LH = String(tH).split(".")[1]) && void 0 !== LH ? LH : "").length,
+         CH = Number((Math.round(BH / tH) * tH).toFixed(zH));
+       return Math.min(hH, Math.max(SH, CH))
```

#### 37. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1132-L1134` → after: `L698-L703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L698-L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/219.js#L698-L703) · [Before (L1132-L1134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/219.js#L1132-L1134)

```diff
-     function ne(VV, eV) {
-       const xV = eV(1 * VV.length, 1) >>> 0;
-       return xe().set(VV, xV / 1), te = VV.length, xV
+     function hH(HH, BH, LH) {
+       const AH = "number" === typeof LH ? SH(BH, LH) : LH;
+       return {
+         ...HH,
+         [BH]: AH
+       }
```

#### 38. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1138-L1162` → after: `L707-L708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L707-L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/219.js#L707-L708) · [Before (L1138-L1162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/219.js#L1138-L1162)

```diff
-       const xV = eV(8 * VV.length, 8) >>> 0;
-       return sV().set(VV, xV / 8), te = VV.length, xV
-     }
- 
-     function Ze(VV, eV, xV) {
-       if (void 0 === xV) {
-         const xV = Ee.encode(VV),
-           JV = eV(xV.length, 1) >>> 0;
-         return xe().subarray(JV, JV + xV.length).set(xV), te = xV.length, JV
-       }
-       let JV = VV.length,
-         YV = eV(JV, 1) >>> 0;
-       const UV = xe();
-       let yV = 0;
-       for (; yV < JV; yV++) {
-         const eV = VV.charCodeAt(yV);
- ... (9 more removed lines; see GitHub link above)
+       let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
+       return Object.keys(rH).every((AH => LH.includes(AH) || HH[AH] === BH[AH]))
```

#### 39. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1166-L1169` → after: `L712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/219.js#L712) · [Before (L1166-L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/219.js#L1166-L1169)

```diff
-       const eV = Je(VV);
-       return function(VV) {
-         VV < 1028 || (Ye[VV] = Ue, Ue = VV)
-       }(VV), eV
+       return tH(HH, rH)
```

#### 40. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1188-L1189` → after: `L715-L716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L715-L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/219.js#L715-L716) · [Before (L1188-L1189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/219.js#L1188-L1189)

```diff
-     function Fe(VV, eV) {
-       return je = VV, qe = VV.exports, Be = eV, uV = null, SV = null, dV = null, OV = null, ee = null, qe.GgrN(), qe
+     function CH(HH) {
+       return `#${HH.toString(16).padStart(6,"0")}`
```

#### 41. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1193-L1238` → after: `L720-L721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L720-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/219.js#L720-L721) · [Before (L1193-L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/219.js#L1193-L1238)

```diff
-       if (void 0 !== qe) return qe;
-       void 0 !== VV && (Object.getPrototypeOf(VV) === Object.prototype ? ({
-         module: VV
-       } = VV) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
-       const eV = gV();
-       VV instanceof WebAssembly.Module || (VV = new WebAssembly.Module(VV));
-       return Fe(new WebAssembly.Instance(VV, eV), VV)
-     }
-     async function Pe(VV) {
-       if (void 0 !== qe) return qe;
-       void 0 !== VV && (Object.getPrototypeOf(VV) === Object.prototype ? ({
-         module_or_path: VV
-       } = VV) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
-       const eV = gV();
-       ("string" === typeof VV || "function" === typeof Request && VV instanceof Request || "function" === typeof URL && VV instanceof URL) && (VV = fetch(VV));
-       const {
- ... (30 more removed lines; see GitHub link above)
+       const BH = /^#?([0-9a-f]{6})$/i.exec(HH.trim());
+       return BH ? parseInt(BH[1], 16) : null
```

#### 42. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1241` → after: `L724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/219.js#L724) · [Before (L1241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/219.js#L1241)

```diff
-   37458: (VV, eV, xV) => {
+   34969: (HH, BH, LH) => {
```

#### 43. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1243-L1245` → after: `L726-L727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L726-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/219.js#L726-L727) · [Before (L1243-L1245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/219.js#L1243-L1245)

```diff
-       d: () => yV,
-       g: () => pV,
-       k: () => QV
+       c: () => XH,
+       g: () => GH
```

#### 44. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1247-L1255` → after: `L729-L735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L729-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/219.js#L729-L735) · [Before (L1247-L1255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/219.js#L1247-L1255)

```diff
-     var JV = xV(37467),
-       YV = xV(3194),
-       UV = xV(37469);
-     const yV = {
-       name: YV.e,
-       url: () => new xV.U(xV(37475)),
-       init: JV.default,
-       bindings: JV
-     };
+     var AH = LH(45),
+       rH = LH(30),
+       SH = LH(34962),
+       hH = LH(34946);
+     const tH = "crosshairCode";
+     let zH = null;
+     const CH = new Set;
```

#### 45. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1258-L1261` → after: `L738-L743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L738-L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/219.js#L738-L743) · [Before (L1258-L1261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/219.js#L1258-L1261)

```diff
-       let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yV,
-         eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yV,
-         xV = arguments.length > 2 ? arguments[2] : void 0;
-       return (0, UV.h)(VV, eV, xV)
+       if (null === zH) {
+         var HH;
+         const BH = rH.e.getItem(tH);
+         zH = null !== (HH = "string" === typeof BH ? (0, SH.f)(BH) : null) && void 0 !== HH ? HH : hH.c
+       }
+       return zH
```

#### 46. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1265` → after: `L747-L748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L747-L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/219.js#L747-L748) · [Before (L1265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/219.js#L1265)

```diff
-       return (0, YV.L)((() => VV), JV, yV)
+       zH = HH, (0, hH.f)(HH) ? rH.e.removeItem(tH) : rH.e.setItem(tH, (0, SH.g)(HH));
+       for (const BH of CH) BH()
```

#### 47. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1267-L1272` → after: `L750-L761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L750-L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/219.js#L750-L761) · [Before (L1267-L1272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/219.js#L1267-L1272)

```diff
-   },
-   37444: (VV, eV, xV) => {
-     function JV(VV, eV) {
-       return new Error(`${VV}: ${eV instanceof Error?`${eV.name}: ${eV.message}`:String(eV)}`, {
-         cause: eV
-       })
+ 
+     function GH() {
+       const [HH, BH] = (0, AH.useState)(EH);
+       return (0, AH.useEffect)((() => {
+         const HH = () => {
+           BH(EH())
+         };
+         return HH(), LH = HH, CH.add(LH), () => {
+           CH.delete(LH)
+         };
+         var LH
+       }), []), HH
```

#### 48. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1278` → after: `L764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/219.js#L764) · [Before (L1278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/219.js#L1278)

```diff
-   37442: (VV, eV, xV) => {
+   37633: (HH, BH, LH) => {
```

#### 49. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1280` → after: `L766-L767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L766-L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/219.js#L766-L767) · [Before (L1280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/219.js#L1280)

```diff
-       d: () => yV,
+       b: () => SH,
+       f: () => zH,
```

#### 50. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1283-L1285` → after: `L770-L771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L770-L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/219.js#L770-L771) · [Before (L1283-L1285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/219.js#L1283-L1285)

```diff
-     var JV = xV(3196),
-       YV = xV(7178),
-       UV = xV(37444);
+     var AH = LH(619),
+       rH = LH(3038);
```

#### 51. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1287-L1288` → after: `L773-L774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L773-L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/219.js#L773-L774) · [Before (L1287-L1288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/219.js#L1287-L1288)

```diff
-     function yV() {
-       return new URL(new xV.U(xV(37450)).href, globalThis.location?.href).href
+     function SH(HH) {
+       return HH === (0, rH.c)().JBH ? (0, rH.c)().lF : HH
```

#### 52. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1290` → after: `L776-L780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L776-L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/219.js#L776-L780) · [Before (L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/219.js#L1290)

```diff
-     let pV = null;
+ 
+     function hH(HH) {
+       return !(0, AH.M)(HH) && SH(HH) === (0, rH.c)().lF
+     }
+     const tH = "gravity";
```

#### 53. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1293-L1295` → after: `L783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/219.js#L783) · [Before (L1293-L1295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/219.js#L1293-L1295)

```diff
-       return pV ??= (async () => (0, JV.G)(new URL(yV()), (0, YV.e)("bloxd_wasm_textures")))().catch((VV => {
-         throw (0, UV.d)((0, JV.J)(VV), VV)
-       })), pV
+       return (0, rH.c)().physics[tH][1]
```

#### 54. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1298` → after: `L786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/219.js#L786) · [Before (L1298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/219.js#L1298)

```diff
-   37422: (VV, eV, xV) => {
+   37608: (HH, BH, LH) => {
```

#### 55. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1300-L1304` → after: `L788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/219.js#L788) · [Before (L1300-L1304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/219.js#L1300-L1304)

```diff
-       d: () => JV,
-       e: () => UV,
-       i: () => QV,
-       j: () => yV,
-       l: () => YV
+       c: () => VH
```

#### 56. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1306-L1307` → after: `L790-L1036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L790-L1036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/219.js#L790-L1036) · [Before (L1306-L1307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/219.js#L1306-L1307)

```diff
-     const JV = /^alloc_failed (\d+) bytes$/;
- 
+     var AH = LH(37617),
+       rH = LH(176),
+       SH = LH(5335),
+       hH = LH(37626),
+       tH = LH(37326),
+       zH = LH(37656),
+       CH = LH(37633),
+       EH = LH(330),
+       XH = LH.n(EH),
+       GH = LH(3038),
+       YH = LH(37654),
+       uH = LH(18),
+       QH = LH(15),
+       WH = LH(37640),
+       MH = LH(37642),
+       xH = LH(37648),
+ ... (231 more added lines; see GitHub link above)
```

#### 57. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1309` → after: `L1038-L1047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R1038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L1038-L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/219.js#L1038-L1047) · [Before (L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/219.js#L1309)

```diff
-       return UV(VV, eV) ? `trap=alloc_failed ${eV} bytes` : `trap=${VV}`
+       var LH, AH, rH, SH, hH, tH, zH, CH;
+       return HH.name === BH.name && ((null === (LH = HH.attributes) || void 0 === LH || null === (AH = LH.customAttributes) || void 0 === AH ? void 0 : AH.stackKey) === (null === (rH = BH.attributes) || void 0 === rH || null === (SH = rH.customAttributes) || void 0 === SH ? void  … [truncated]
+     }
+     LH.d(BH, {
+       d: () => AH
+     })
+   },
+   37798: (HH, BH, LH) => {
+     function AH(HH) {
+       return HH.includes("Leaf Bed")
```

#### 58. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1312-L1313` → after: `L1050-L1051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R1050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L1050-L1051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/219.js#L1050-L1051) · [Before (L1312-L1313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/219.js#L1312-L1313)

```diff
-     function UV(VV, eV) {
-       return "unreachable" === VV && eV > 0
+     function rH(HH) {
+       return / Bed(?: Head)?(?:\||$)/.test(HH) && !AH(HH)
```

#### 59. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1316-L1331` → after: `L1054-L1055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R1054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L1054-L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/219.js#L1054-L1055) · [Before (L1316-L1331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/219.js#L1316-L1331)

```diff
-     function yV(VV, eV, xV) {
-       const JV = function(VV) {
-         return VV instanceof WebAssembly.RuntimeError ? /unreachable/i.test(VV.message) ? "unreachable" : /out of bounds/i.test(VV.message) ? "out_of_bounds" : "runtime_error" : (VV instanceof RangeError || VV instanceof Error && "InternalError" === VV.name) && /call stack|recurs … [truncated]
-       }(VV);
-       if ("unreachable" !== JV) return {
-         kind: JV,
-         panic: null,
-         refusedBytes: 0
-       };
-       const YV = eV(),
-         UV = xV();
-       return {
-         kind: JV,
-         panic: UV > 0 ? null : YV,
-         refusedBytes: UV
-       }
+     function SH(HH) {
+       return HH.includes(" Strongbed")
```

#### 60. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1336` → after: `L1059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R1059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L1059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/219.js#L1059) · [Before (L1336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/219.js#L1336)

```diff
-       return VV.replace(/\s*\n\s*/g, " / ").slice(0, pV)
+       return AH(HH) || rH(HH) || SH(HH)
```

#### 61. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1338` → after: `L1061-L1088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R1061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L1061-L1088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/219.js#L1061-L1088) · [Before (L1338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/219.js#L1338)

```diff
-   }
+     LH.d(BH, {
+       d: () => hH,
+       h: () => AH,
+       l: () => SH,
+       m: () => rH
+     })
+   },
+   37793: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => CH
+     });
+     var AH = LH(37798),
+       rH = LH(9940);
+     const SH = [],
+       hH = [],
+       tH = [],
+ ... (12 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/220.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/220.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc)

#### 1. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/220.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/220.js#L4)

```diff
-   35189: (VV, eV, xV) => {
+   35006: (HH, BH, LH) => {
```

#### 2. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L6-L8` → after: `L6-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L6-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/220.js#L6-L29) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/220.js#L6-L8)

```diff
-       ALL_DEV_TOOLS: () => yV,
-       coreDevTools: () => nV,
-       devTools: () => QV
+       MAX_BLOCK_ID: () => AH,
+       armourReductionOf: () => nH,
+       clipSizeOf: () => jH,
+       creativeAltNames: () => hB,
+       creativeCategoryOf: () => pH,
+       creativeItemCategories: () => tH,
+       creativeItemCategoryIcons: () => zH,
+       creativeItemIds: () => iH,
+       descriptionOf: () => gH,
+       displayNameOf: () => qH,
+       dropsNothing: () => wH,
+       enchantmentPerksOf: () => sH,
+       gunTypeOf: () => DH,
+       harvestsNullLevelOf: () => ZH,
+       isDevOnlyItem: () => LB,
+       itemIsDisabled: () => rB,
+ ... (8 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L10-L17` → after: `L31-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L31-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/220.js#L31-L71) · [Before (L10-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/220.js#L10-L17)

```diff
-     var JV = xV(686),
-       YV = xV(1348),
-       UV = xV(35197);
-     const yV = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
-     async function pV() {
-       const {
-         noaDevTools: VV
-       } = await xV.e(260).then((() => xV(42389)));
+     const AH = 8574,
+       rH = "''WL&M3GT%cM)MK$YE1aM2'I+F+O_*c^*=%'%%%%%%%K>F>%%)K=H=%%[*W5_5['[R$ZW$S%[X&NH&L5C$W$5,KS&%]]&I%^Z&NM&b7TK$Y6G,Y>%M%M7P6$WD%Vc$LZ$OY$%+Q[&;S$/G$N&W%F$W%F$S$N&G'.F$c%`'1+%)41(1(+49$(2=b$/`N,RN,K/c_&Q0EC$O(''P`&O$%-%%^R2-*)&%;NV/ZT%IT%3XM$%%%%%_U$%b73.%%`-T-%%%%%%L9$M8X7 … [truncated]
+       SH = "S-$SW$$R&$SH2$)$'$)$4$)$X*$I6$-$%$%$cD1$WE1$%%%$]5$b7$RI4$%$%$%$%$%$%$%$%$%$)$N+$EG&$ZT%$IT%$3$XM$$%$%$%$%$%$Z1$Y[$$Oa0$'$'$'$-&+&%&)&4&1&(&1*(*+&4&9&$&(&2&=&E$&'&%&%&%&1%_%$TW3$%$D.$$$Uc&$S$$S$$S$$S$$S$$S$$S$&S$&S$$S$$S$$S$$S$$S$$S$$S$$^1$S$$]I($%$M/$+$N-$%$Z$$%$I6$3 … [truncated]
+       hH = "Crafting Table|Cauldron|Sign|Iron Nugget|Gold Nugget|Diamond Nugget|Moonstone Nugget|Iron Ingot|Gold Ingot|Draugr Knight Sword|Cooked Potato|Cooked Beef|Raw Lamb|Cooked Lamb|Gold Watermelon Stag Antlers|Bear Fur|Cave Golem Eye|Frost Golem Eye|Draugr Knight Heart|Fur B … [truncated]
+       tH = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"],
+       zH = {
+         building: "Stone Bricks",
+         colours: "Magenta Wool",
+         nature: "Grass Block",
+         decoration: "Lantern",
+         utility: "Workbench",
+         tools: "Iron Pickaxe",
+         combat: "Iron Sword",
+         food: "Apple",
+         mobs: "Pig Spawn Orb",
+         materials: "Iron Bar",
+ ... (25 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L20-L22` → after: `L74-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L74-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/220.js#L74-L221) · [Before (L20-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/220.js#L20-L22)

```diff
-     const QV = new class {
-         constructor() {
-           this.loadHost = pV, this.tools = yV
+ 
+     function QH(HH) {
+       return HH === EH.c ? null : (0, EH.y)(HH)
+     }
+     const WH = YH("T$$#&#$T'#$F$#$$%$B#$>#$##=$$1$.)$*#$(&$)#)$N$#$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$+##$&#$$%$*/$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$T$&$($$$*$(#$$1$$1$$1$$1$$1$$1$$)$$)$$)$$)$$)$*)$N2#$.($$1$$)$T$$$,#$4#$)##$V'#$)#[$$+#$#$($$'#%$&$$N)*$4#$ … [truncated]
+       MH = YH("$J$#$&$$F&$23$$J$$$A$$c$$,^'$&H2$$'$$'$$0$*9$$R$#49$$($$&$$%$$$#,C(##$$#$&U)#$#$$($B+#2R$$1#7$%#+$6#$$)$J$O$#*-$1#M1$$a$$&'#%$&)$$4$.&$(;$*%$$$$$#$$#$,Z/$$T&$&V$$$Z-$###$%/V$O$$&2$*5#X$#$V%.$&2$&#$*&$$5$$E$#c2R1$&$$cc$c]$$$R%$*G=$]/=$2:$J5-$b*#G$$,<#%$+##$#4+#+##$+ … [truncated]
+       xH = new Map,
+       vH = new Map;
+     let PH = -1;
+ 
+     function TH(HH, BH, LH) {
+       PH !== (0, CH.j)() && (PH = (0, CH.j)(), xH.clear(), vH.clear());
+       let AH = HH.get(BH);
+       return void 0 === AH && (AH = LH(), void 0 !== AH && HH.set(BH, AH)), AH
+     }
+     const UH = YH("_$bN+###Y$#b'#%$=%/#I'%##7%))+%[%(#%9##%)(#%9(#%?(I$%'('%%('%%('%%('%#(%%%('%%('%%('%#(%%%('%#('%%('%%('%%('%%('%#(%%#(%%#(%%%('%#(%%%(#%I%##%%)M&%A)A%A)b&%b&(Q.%)(#%)(W%%#(1%#(-%#(#%#(Q$%#(G(%/(#%1('%I%$O&%+$+&3(-$%%+$+&3(-$%%+$+&3(-$%%+$+&3(-$?&#%#$3(-$+&#%#$ … [truncated]
+ ... (132 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L24-L56` → after: `L223-L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L223-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/220.js#L223-L226) · [Before (L24-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/220.js#L24-L56)

```diff
-         setHost(VV) {
-           this.tools = null === VV ? yV : VV.tools, this.loadHost = null === VV ? pV : async () => VV
-         }
-         supports(VV) {
-           return this.tools.has(VV)
-         }
-         async downloadScene(VV, eV) {
-           const xV = await this.loadHost();
-           await xV.downloadScene(VV, eV)
-         }
-         async setAmbientLightIntensity(VV) {
-           const eV = await this.loadHost();
-           await eV.setAmbientLightIntensity(VV)
-         }
-         async capturePhoto(VV, eV, xV) {
-           return (await this.loadHost()).capturePhoto(VV, eV, xV)
- ... (17 more removed lines; see GitHub link above)
+         SB = BH
+       }
+       return SB
+     }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/221.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/221.js` (34 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928)

#### 1. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/221.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/221.js#L4)

```diff
-   37528: (VV, eV, xV) => {
+   37093: (HH, BH, LH) => {
```

#### 2. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L6-L7` → after: `L6-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/221.js#L6-L9) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/221.js#L6-L7)

```diff
-       isMoreOptionsInFooter: () => oV,
-       showOnboardingPopup: () => cV
+       capturePreviewPicture: () => MH,
+       holdPreviewsLow: () => hH.f,
+       openLiveFigure: () => WH,
+       rasterNametag: () => TH
```

#### 3. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L9-L27` → after: `L11-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L11-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/221.js#L11-L27) · [Before (L9-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/221.js#L9-L27)

```diff
-     var JV = xV(62),
-       YV = xV(1220),
-       UV = xV(1439),
-       yV = xV(1551),
-       pV = xV(1159),
-       QV = xV(4740),
-       nV = xV(1656),
-       wV = xV(1649),
-       ZV = xV(2385),
-       vV = xV(1146),
-       rV = xV.n(vV),
-       kV = xV(1173),
-       bV = xV(37533),
-       EV = xV(2524),
-       BV = xV(3931),
-       jV = xV(1168),
- ... (3 more removed lines; see GitHub link above)
+     var AH = LH(1182),
+       rH = LH(2760),
+       SH = LH(35016),
+       hH = LH(37100),
+       tH = LH(37105),
+       zH = LH(37110),
+       CH = LH(37157),
+       EH = LH(3840);
+     const XH = 480,
+       GH = 16,
+       YH = {
+         minGapMs: 250,
+         now: () => performance.now(),
+         skip: hH.p
+       },
+       uH = 30,
+ ... (1 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L29-L43` → after: `L29-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L29-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/221.js#L29-L94) · [Before (L29-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/221.js#L29-L43)

```diff
-     function TV(VV) {
-       let {
-         open: eV,
-         onToggle: xV
-       } = VV;
-       const {
-         t: JV
-       } = (0, YV.A)();
-       return (0, tV.jsxs)("button", {
-         type: "button",
-         className: "OnboardingMoreOptions",
-         "aria-expanded": eV,
-         "aria-controls": eV ? FV : void 0,
-         onClick: () => {
-           eV || (0, QV.j)("more"), xV()
+     function WH(HH, BH, LH, zH) {
+       const CH = SH.h.openCharacter(HH, "player");
+       let EH = !1,
+         XH = !1,
+         uH = null;
+       const WH = async () => {
+         const HH = CH.dev.canvas(),
+           BH = await (AH = () => HH.isConnected && function(HH) {
+             const {
+               x: BH,
+               width: LH
+             } = xH(HH);
+             if (0 === LH || 0 === HH.height) return !1;
+             if (vH ??= document.createElement("canvas").getContext("2d", {
+                 willReadFrequently: !0
+               }), null === vH) return !1;
+ ... (50 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L45-L64` → after: `L96-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L96-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/221.js#L96-L97) · [Before (L45-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/221.js#L45-L64)

```diff
-         children: [JV("homePage:onboardingMoreOptions"), (0, tV.jsx)(qV.b, {
-           name: eV ? "caret-up" : "caret-down"
-         })]
-       })
-     }
-     const PV = Object.entries(nV.c).filter((VV => {
-       let [, eV] = VV;
-       return "default" === eV.cosmeticPack
-     }));
- 
-     function AV(VV) {
-       return wV.d.default.colourGroups[VV].colours.map(((VV, eV) => {
-         let {
-           rbg: xV,
-           order: JV
-         } = VV;
- ... (4 more removed lines; see GitHub link above)
+         close: () => {
+           EH = !0, CH.close()
```

#### 6. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L66` → after: `L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/221.js#L99) · [Before (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/221.js#L66)

```diff
-       })).sort(((VV, eV) => VV.order - eV.order))
+       }
```

#### 7. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L72-L79` → after: `L103-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L103-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/221.js#L103-L128) · [Before (L72-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/221.js#L72-L79)

```diff
-       var xV;
-       if (void 0 === eV || "default" !== (null === (xV = (0, ZV.h)(VV, eV)) || void 0 === xV ? void 0 : xV.cosmeticPack)) return null;
-       const JV = (0, ZV.g)(eV);
-       return JV && [JV[0], Number(JV[1])]
-     }
- 
-     function zV(VV, eV, xV) {
-       return `${VV}_${eV}_${xV}`
+       return new Promise((LH => {
+         const AH = rH => {
+           (0, hH.d)((() => {
+             if (!BH()) return void LH(null);
+             const SH = HH.isConnected ? function(HH) {
+               let {
+                 canvas: BH,
+                 x: LH,
+                 width: AH
+               } = HH;
+               if (0 === AH || 0 === BH.height) return null;
+               const rH = Math.min(1, XH / BH.height),
+                 SH = document.createElement("canvas");
+               SH.width = Math.max(1, Math.round(AH * rH)), SH.height = Math.max(1, Math.round(BH.height * rH));
+               const hH = SH.getContext("2d", {
+                 willReadFrequently: !0
+ ... (10 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L83-L125` → after: `L132-L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L132-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/221.js#L132-L137) · [Before (L83-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/221.js#L83-L125)

```diff
-       let {
-         label: eV,
-         colours: xV,
-         picked: JV,
-         onPick: UV
-       } = VV;
-       const {
-         t: yV
-       } = (0, YV.A)();
-       return (0, tV.jsxs)("div", {
-         className: "OnboardingColours",
-         children: [(0, tV.jsx)("div", {
-           className: "OnboardingColoursLabel",
-           children: eV
-         }), (0, tV.jsx)("div", {
-           className: "OnboardingSwatches",
- ... (27 more removed lines; see GitHub link above)
+       const BH = Math.min(HH.width, Math.round(HH.height * EH.c));
+       return {
+         canvas: HH,
+         x: Math.round((HH.width - BH) / 2),
+         width: BH
+       }
```

#### 9. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L129-L150` → after: `L142-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L142-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/221.js#L142-L158) · [Before (L129-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/221.js#L129-L150)

```diff
-       let {
-         moreOptions: eV,
-         onToggleMoreOptions: xV,
-         moreOptionsBelowPresets: UV
-       } = VV;
-       const {
-         t: yV
-       } = (0, YV.A)(), {
-         userContext: pV,
-         isUserContextUpdating: nV
-       } = (0, jV.d)(), [, wV] = (0, JV.useReducer)((VV => VV + 1), 0), ZV = (0, JV.useRef)({}), vV = (0, JV.useRef)(null), qV = (0, BV.e)(), AV = {
-         ...pV.getPlayerCosmetics(),
-         ...vV.current
-       }, WV = (0, JV.useRef)(null);
-       (0, JV.useEffect)((() => {
-         var VV;
- ... (6 more removed lines; see GitHub link above)
+       for (let BH = 3; BH < HH.length; BH += 4)
+         if (0 !== HH[BH]) return !0;
+       return !1
+     }
+     async function TH(HH) {
+       var BH;
+       await CH.h.load();
+       const LH = {
+           name: HH.name,
+           info: null,
+           colour: null !== (BH = HH.nameColour) && void 0 !== BH ? BH : "default",
+           ranks: HH.ranks,
+           effects: [],
+           health: null,
+           Ot: null,
+           hideNameSeed: null,
+ ... (1 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L152-L258` → after: `L160-L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L160-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/221.js#L160-L175) · [Before (L152-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/221.js#L152-L258)

```diff
-         gV = VV => {
-           const eV = {
-             ...vV.current,
-             ...VV
-           };
-           if (!nV) return vV.current = null, void RV(pV, eV);
-           vV.current = eV, wV(), kV.userContextManager.getCurrentUserContext().then((VV => {
-             vV.current === eV && (vV.current = null, RV(VV, eV))
-           })).catch((VV => {
-             console.warn("Couldn't put on the onboarding look held for the account", VV), vV.current === eV && (vV.current = null, qV.current && wV())
-           }))
-         };
-       (0, JV.useEffect)((() => () => {
-         pV.publishUpdateIfCurrent()
-       }), [pV]);
-       const DV = MV("eyes", AV.eyes),
- ... (91 more removed lines; see GitHub link above)
+         AH = document.createElement("canvas"),
+         [rH, SH] = (0, zH.i)((0, zH.k)(zH.e.Nametag, LH), AH, !0);
+       return 0 === rH || 0 === SH ? null : {
+         src: AH.toDataURL("image/png"),
+         width: rH,
+         height: SH
+       }
+     }
+   },
+   35018: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => hH,
+       h: () => rH,
+       j: () => EH
+     });
+     var AH = LH(1565);
```

#### 11. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L261-L277` → after: `L178-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L178-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/221.js#L178-L207) · [Before (L261-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/221.js#L261-L277)

```diff
-       const {
-         t: eV
-       } = (0, YV.A)(), {
-         userContext: xV,
-         isUserContextUpdating: UV
-       } = (0, jV.d)(), pV = UV ? null : xV.getPlayerName(), nV = (0, JV.useRef)(null), [wV, ZV] = (0, JV.useState)((() => null === pV ? (0, RV.d)() : null)), [vV, rV] = (0, JV.useState)(null), [kV, bV] = (0, JV.useState)(!1), EV = (0, JV.useRef)("ZZ"), FV = (0, BV.e)(), TV = (0,  … [truncated]
-         nV.current && (nV.current.value = VV), ZV(VV)
-       }, MV = (0, JV.useRef)(!1);
-       (0, JV.useEffect)((() => {
-         var VV, eV;
-         !kV && MV.current && (MV.current = !1, null === (VV = nV.current) || void 0 === VV || VV.focus(), null === (eV = nV.current) || void 0 === eV || eV.select())
-       }), [kV]);
-       const zV = (0, JV.useRef)(null);
-       (0, JV.useEffect)((() => {
-         var VV;
-         null !== vV && (null === (VV = zV.current) || void 0 === VV || VV.scrollIntoView({
- ... (1 more removed lines; see GitHub link above)
+       var BH;
+       return {
+         ...hH.store,
+         yaw: hH.store.yaw + (null !== (BH = AH.c[HH].previewYaw) && void 0 !== BH ? BH : 0)
+       }
+     }
+     const SH = {
+         yaw: .61 * Math.PI,
+         pitch: Math.PI / 2.05,
+         radius: 30,
+         target: [0, 0, 0]
+       },
+       hH = {
+         player: SH,
+         store: {
+           ...SH,
+ ... (14 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L279-L283` → after: `L209-L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L209-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/221.js#L209-L229) · [Before (L279-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/221.js#L279-L283)

```diff
-       }), [vV]);
-       const GV = (VV, eV) => {
-         const xV = document.activeElement === nV.current || MV.current;
-         bV(!0), rV(null), VV.then((VV => {
-           FV.current && (bV(!1), MV.current = xV, eV(VV))
+       }
+       show(HH) {
+         var BH;
+         this.view = HH, null === (BH = this.opened) || void 0 === BH || BH.show(HH)
+       }
+       resize(HH, BH) {
+         var LH;
+         this.size = {
+           width: HH,
+           height: BH
+         }, null === (LH = this.opened) || void 0 === LH || LH.resize(HH, BH)
+       }
+       close() {
+         var HH;
+         this.closed = !0, null === (HH = this.opened) || void 0 === HH || HH.close(), this.opened = null
+       }
+ ... (5 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L285-L286` → after: `L231-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L231-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/221.js#L231-L235) · [Before (L285-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/221.js#L285-L286)

```diff
-       };
-       (0, JV.useEffect)((() => {
+       }
+       get dev() {
+         return this.opened.dev
+       }
+       isReady() {
```

#### 14. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L288-L327` → after: `L237-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L237-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/221.js#L237-L284) · [Before (L288-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/221.js#L288-L327)

```diff
-         gV.b.get("isTouchScreen") || (null === (VV = nV.current) || void 0 === VV || VV.focus(), null === (eV = nV.current) || void 0 === eV || eV.select())
-       }), []);
-       const WV = () => {
-           (0, QV.m)(EV.current), VV()
-         },
-         aV = VV => "refused" === VV.outcome ? VV.message : eV((0, DV.e)(VV.failure)),
-         oV = VV => !(VV.length >= RV.h) && (rV({
-           kind: "error",
-           message: eV("homePage:changeNameMinLengthError", {
-             length: RV.h
-           })
-         }), !0),
-         cV = VV => {
-           var JV, YV, UV;
-           VV.toLowerCase() !== (null === (JV = null !== (YV = null === (UV = NV.current) || void 0 === UV ? void 0 : UV.name) && void 0 !== YV ? YV : pV) || void 0 === JV ? void 0 : JV.toLowerCase()) ? oV(VV) || GV((0, DV.d)(xV, VV), (xV => {
-             "taken" !== xV.outcome ? "refused" !== xV.outcome && "failed" !== xV.outcome ? xV.name !== VV ? (EV.current = "suffixed", NV.current = {
- ... (24 more removed lines; see GitHub link above)
+         return null !== (HH = null === (BH = this.opened) || void 0 === BH ? void 0 : BH.isReady()) && void 0 !== HH && HH
+       }
+       setCosmetic(HH, BH) {
+         var LH;
+         null === (LH = this.opened) || void 0 === LH || LH.setCosmetic(HH, BH)
+       }
+       playEmote(HH) {
+         var BH;
+         null === (BH = this.opened) || void 0 === BH || BH.playEmote(HH)
+       }
+       setOrbit(HH) {
+         var BH;
+         null === (BH = this.opened) || void 0 === BH || BH.setOrbit(HH)
+       }
+       resetCamera() {
+         var HH;
+ ... (32 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L329-L407` → after: `L286-L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L286-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/221.js#L286-L333) · [Before (L329-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/221.js#L329-L407)

```diff
-       }), [kV, pV]), (0, JV.useEffect)((() => {
-         if (null === pV) return;
-         const VV = TV.current && "ZZ" === EV.current && xV.isLoggedIn();
-         TV.current = !1, "noAccount" === (null === vV || void 0 === vV ? void 0 : vV.kind) && rV(null), VV && XV(pV), PV.current && (PV.current = !1, bV(!1), cV(VV ? pV : AV))
-       }), [pV]);
-       const hV = "error" === (null === vV || void 0 === vV ? void 0 : vV.kind) ? vV.message : "noAccount" === (null === vV || void 0 === vV ? void 0 : vV.kind) ? eV("homePage:onboardingNameNoAccount") : null;
-       return {
-         field: (0, tV.jsxs)("div", {
-           className: "OnboardingNameField",
-           ref: zV,
-           children: [(0, tV.jsx)("div", {
-             className: "OnboardingSubtitle",
-             children: eV("general:name")
-           }), null === AV && (0, tV.jsx)(iV.d, {}), null !== AV && (0, tV.jsxs)("div", {
-             className: "OnboardingNameRow",
-             children: [(0, tV.jsx)(CV.d, {
- ... (63 more removed lines; see GitHub link above)
+         return this.host
+       }
+       openMob(HH) {
+         return new zH(this.current().openMob(HH))
+       }
+       openPet(HH) {
+         return new zH(this.current().openPet(HH))
+       }
+       openMobLineup(HH) {
+         return new zH(this.current().openMobLineup(HH))
+       }
+       openCharacter(HH, BH) {
+         return new CH(this.current().openCharacter(HH, BH))
+       }
+     }
+   },
+ ... (32 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L411-L412` → after: `L345-L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L345-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/221.js#L345-L346) · [Before (L411-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/221.js#L411-L412)

```diff
-     function oV(VV) {
-       return VV < 500
+     function rH(HH, BH) {
+       return HH.getContext("2d", BH)
```

#### 17. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L416-L430` → after: `L379-L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L379-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/221.js#L379-L383) · [Before (L416-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/221.js#L416-L430)

```diff
-       const VV = {
-         finished: !1
-       };
-       return UV.NotificationProvider.showCustomPopup({
-         body: eV => (0, tV.jsx)(hV, {
-           onFinish: () => {
-             (0, QV.f)(), VV.finished = !0, eV()
-           }
-         }),
-         middleScreenPopupClassName: "OnboardingPopup",
-         ignoreBackgroundPress: !0,
-         onClose: () => {
-           VV.finished || (0, QV.d)()
-         }
-       })
+       return rH
+     }
+ 
+     function zH() {
+       return SH
```

#### 18. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L434-L470` → after: `L387-L392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L387-L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/221.js#L387-L392) · [Before (L434-L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/221.js#L434-L470)

```diff
-       let {
-         onFinish: eV
-       } = VV;
-       const {
-         t: xV
-       } = (0, YV.A)(), UV = aV(eV), [nV, wV] = (0, JV.useState)(!1), ZV = (0, pV.n)(((VV, eV) => oV(eV))), vV = () => {
-         wV(!nV)
-       };
-       return (0, JV.useEffect)((() => {
-         (0, QV.o)()
-       }), []), (0, tV.jsxs)("div", {
-         className: "Onboarding",
-         children: [(0, tV.jsx)("div", {
-           className: "OnboardingTitle",
-           children: xV("homePage:onboardingTitle")
-         }), (0, tV.jsxs)("div", {
- ... (21 more removed lines; see GitHub link above)
+       rH = HH, SH++, (0, AH.e)();
+       for (const BH of hH) BH()
+     }
+ 
+     function EH(HH) {
+       hH.add(HH)
```

#### 19. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L473` → after: `L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/221.js#L395) · [Before (L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/221.js#L473)

```diff
-   37533: (VV, eV, xV) => {
+   37100: (HH, BH, LH) => {
```

#### 20. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L475` → after: `L397-L403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L397-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/221.js#L397-L403) · [Before (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/221.js#L475)

```diff
-       c: () => yV
+       d: () => QH,
+       f: () => EH,
+       i: () => YH,
+       j: () => XH,
+       k: () => WH,
+       l: () => uH,
+       p: () => GH
```

#### 21. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L477-L507` → after: `L405-L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L405-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/221.js#L405-L417) · [Before (L477-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/221.js#L477-L507)

```diff
-     var JV = xV(2051),
-       YV = xV(1603);
-     const UV = new class {
-       constructor() {
-         this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
-       }
-       save(VV, eV) {
-         VV !== this.userContext && this.sendHeld(), this.userContext = VV;
-         for (const [JV, YV] of eV) this.pending.set(JV, YV);
-         if (null !== this.timer) return;
-         const xV = this.lastSentAt + 1100 - Date.now();
-         xV <= 0 ? this.send(VV) : (this.timer = setTimeout((() => {
-           this.sendHeld()
-         }), xV), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
-           "hidden" === document.visibilityState && this.sendHeld()
-         }))))
- ... (15 more removed lines; see GitHub link above)
+     const AH = 30,
+       rH = 4;
+     let SH = 0,
+       hH = !1,
+       tH = !1,
+       zH = Number.NEGATIVE_INFINITY,
+       CH = [];
+ 
+     function EH() {
+       0 === SH && (hH = !1, tH = !1), SH++;
+       let HH = !1;
+       return () => {
+         HH || (HH = !0, SH--)
```

#### 22. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L509` → after: `L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/221.js#L419) · [Before (L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/221.js#L509)

```diff
-     };
+     }
```

#### 23. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L511-L518` → after: `L421-L449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L421-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/221.js#L421-L449) · [Before (L511-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/221.js#L511-L518)

```diff
-     function yV(VV, eV) {
-       for (const [xV, JV] of eV) VV.setPlayerCosmetics(xV, JV);
-       if (null === JV.gameBridge.latest("connectedGame").websocketUrl) UV.save(VV, eV);
-       else
-         for (const [xV, YV] of eV) JV.gameBridge.send("updateMyCosmetic", {
-           YJ: xV,
-           UJ: YV
-         })
+     function XH(HH) {
+       HH && (tH = !0)
+     }
+ 
+     function GH() {
+       return tH
+     }
+ 
+     function YH(HH) {
+       hH = HH
+     }
+ 
+     function uH(HH) {
+       return !(SH > 0 && (hH || HH - zH < 1e3 / AH - rH)) && (zH = HH, !0)
+     }
+ 
+ ... (13 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L521` → after: `L452-L463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L452-L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/221.js#L452-L463) · [Before (L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/221.js#L521)

```diff
-   35205: (VV, eV, xV) => {
+   37177: (HH, BH, LH) => {
+     function AH() {
+       return LH(37184)
+     }
+ 
+     function rH() {
+       return LH(37187)
+     }
+ 
+     function SH(HH) {
+       return ["pl", "ru", "tr", "uk", "vi"].includes(HH)
+     }
```

#### 25. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L525-L526` → after: `L466-L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L466-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/221.js#L466-L475) · [Before (L525-L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/221.js#L525-L526)

```diff
-       g: () => bV,
-       j: () => kV
+       h: () => AH,
+       k: () => rH
+     })
+   },
+   37110: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => WH,
+       i: () => jH,
+       k: () => IH,
+       o: () => KH
```

#### 26. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L528-L532` → after: `L477-L578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L477-L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/221.js#L477-L578) · [Before (L528-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/221.js#L528-L532)

```diff
-     var JV = xV(165),
-       YV = xV(1293),
-       UV = xV(1230),
-       yV = xV(1173),
-       pV = xV(1829);
+     var AH = LH(37146),
+       rH = LH(37112),
+       SH = LH(37120),
+       hH = LH(37127);
+ 
+     function tH(HH, BH, LH) {
+       const AH = "object" === typeof HH && null !== HH ? HH : {},
+         rH = function(HH, BH, LH) {
+           if (!Array.isArray(HH) || 0 === HH.length) return [];
+           const AH = [{
+             width: 0,
+             height: 0,
+             y: 0,
+             items: []
+           }];
+           for (const tH of (0, hH.i)(HH, hH.e.DEFAULT_FONT_SIZE, LH)) {
+ ... (86 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L534-L537` → after: `L580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/221.js#L580) · [Before (L534-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/221.js#L534-L537)

```diff
-       offline: "homePage:onboardingNameNoAccount",
-       outdated: "general:updatedReloading",
-       busy: "homePage:changeNameTooFast",
-       server: "homePage:changeNameFailed"
+       leaderboard: ""
```

#### 28. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L540-L541` → after: `L602-L605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L602-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/221.js#L602-L605) · [Before (L540-L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/221.js#L540-L541)

```diff
-     function nV(VV) {
-       return QV[VV]
+     function IH(HH, BH) {
+       const LH = oH.encode(JSON.stringify(BH)),
+         AH = new Uint8Array(LH.length + 1);
+       return AH[0] = HH, AH.set(LH, 1), AH
```

#### 29. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L545` → after: `L640-L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L640-L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/221.js#L640-L647) · [Before (L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/221.js#L545)

```diff
-       return (0, pV.c)(VV) ? "outdated" : VV instanceof JV.b ? 429 === VV.httpCode ? "busy" : "server" : "offline"
+       QH.h.load().then((() => {
+         if (HH()) return;
+         const BH = (0, rH.h)(1, 1, {
+           willReadFrequently: !0
+         });
+         var LH;
+         BH && (LH = BH.canvas, lH.map((HH => jH(HH, LH))))
+       }))
```

#### 30. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L548-L554` → after: `L651-L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L651-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/221.js#L651-L652) · [Before (L548-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/221.js#L548-L554)

```diff
-     function ZV(VV, eV, xV) {
-       return (0, yV.postJsonWithMetricsCookiesAndJsonResponse)(`${UV.clientSideServerUrls.indexUrl}${eV}`, xV, {
-         retries: 3
-       }, VV.getMetricsCookies()).catch((VV => (console.error("Bad response from the server when trying to change name:", eV, VV), {
-         outcome: "failed",
-         failure: wV(VV)
-       })))
+     function eH() {
+       bH.clear(), kH.clear()
```

#### 31. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L557-L558` → after: `L655-L657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L655-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/221.js#L655-L657) · [Before (L557-L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/221.js#L557-L558)

```diff
-     function vV(VV) {
-       return "outcome" in VV && "failed" === VV.outcome
+     function qH(HH, BH) {
+       const LH = HH.get(BH);
+       return void 0 !== LH && (HH.delete(BH), HH.set(BH, LH)), LH
```

#### 32. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L561-L565` → after: `L660-L661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L660-L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/221.js#L660-L661) · [Before (L561-L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/221.js#L561-L565)

```diff
-     function rV(VV) {
-       return console.error("Error when trying to get with new name from DB", VV), {
-         outcome: "refused",
-         message: VV
-       }
+     function gH(HH, BH, LH) {
+       HH.set(BH, LH), HH.size > xH && HH.delete(HH.keys().next().value)
```

#### 33. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L567-L583` → after: `L663-L741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L663-L741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/221.js#L663-L741) · [Before (L567-L583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/221.js#L567-L583)

```diff
-     async function kV(VV) {
-       const eV = await ZV(VV, "/index/name/random", {});
-       return vV(eV) ? eV : "err" in eV ? rV(eV.err) : (VV.setPlayerName(eV.name), {
-         outcome: "changed",
-         name: eV.name
-       })
-     }
-     async function bV(VV, eV) {
-       const xV = await ZV(VV, "/index/name/update", {
-         name: eV
-       });
-       return vV(xV) ? xV : "err" in xV ? rV(xV.err) : xV.nameExists ? {
-         outcome: "taken"
-       } : (VV.setPlayerName(eV), {
-         outcome: "changed",
-         name: eV
- ... (1 more removed lines; see GitHub link above)
+ 
+     function NH(HH, BH, LH) {
+       if (HH === WH.Nametag) {
+         let HH = qH(bH, BH);
+         return void 0 === HH && (HH = (0, zH.e)(JSON.parse(BH), LH, VH), gH(bH, BH, HH)), HH
+       }
+       if (HH === WH.MultilineText) {
+         var rH;
+         const HH = JSON.parse(BH),
+           AH = JSON.stringify(null !== (rH = HH.box) && void 0 !== rH ? rH : null),
+           SH = "number" === typeof HH.shown ? HH.shown : null;
+         let hH = qH(kH, AH);
+         void 0 === hH && (hH = tH(HH.box, LH, VH), gH(kH, AH, hH));
+         const zH = null === SH ? null : Math.min(Math.max(0, Math.floor(SH)), hH.chars),
+           CH = hH;
+         return {
+ ... (63 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L587-L602` → after: `L746-L790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L746-L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/221.js#L746-L790) · [Before (L587-L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/221.js#L587-L602)

```diff
-       let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
-       const JV = 1 === eV ? 1 : 10 ** (eV - 1),
-         UV = String(JV + Math.floor(xV() * (10 ** eV - JV)));
-       return `${VV.slice(0,YV.f-eV)}${UV}`
-     }
-     const BV = [1, 2, 3, 4];
-     async function jV(VV, eV) {
-       const xV = await bV(VV, eV);
-       if ("taken" !== xV.outcome) return xV;
-       for (const JV of BV) {
-         const xV = EV(eV, JV),
-           YV = await bV(VV, xV);
-         if ("taken" !== YV.outcome) return YV
-       }
-       return {
-         outcome: "taken"
+       let LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+         AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+       try {
+         if (HH.length < 2) return [0, 0];
+         const SH = (0, rH.d)(BH);
+         if (!SH) return [0, 0];
+         const hH = cH();
+         hH !== OH && (OH = hH, eH());
+         const [tH] = HH, zH = UH.decode(HH.subarray(1));
+         let CH;
+         tH !== WH.Board && tH !== WH.Leaderboard || !VH.canSeePlayerWrittenText || VH.glyphsShown(zH), SH.save();
+         try {
+           CH = NH(tH, zH, SH)
+         } finally {
+           SH.restore()
+         }
+ ... (29 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/222.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/222.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783)

#### 1. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L4-L6` → after: `L4-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L4-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/222.js#L4-L30) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/222.js#L4-L6)

```diff
-   35247: (VV, eV, xV) => {
-     xV.d(eV, {
-       b: () => KV,
+   45011: (HH, BH, LH) => {
+     LH.d(BH, {
+       c: () => SH
+     });
+     var AH = LH(45),
+       rH = LH(3018);
+ 
+     function SH(HH, BH, LH) {
+       const SH = (0, AH.useRef)(null),
+         {
+           width: hH,
+           height: tH
+         } = (0, rH.c)(HH);
+       (0, AH.useEffect)((() => {
+         const LH = BH(HH.current);
+         return SH.current = LH, () => {
+ ... (11 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L9-L30` → after: `L33-L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L33-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/222.js#L33-L253) · [Before (L9-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/222.js#L9-L30)

```diff
-       l: () => Ne,
-       m: () => ne,
-       n: () => Ze,
-       o: () => re,
-       s: () => Ae,
-       v: () => ve
-     });
-     var JV = xV(296),
-       YV = xV(27),
-       UV = xV(99),
-       yV = xV(1725),
-       pV = xV(4895),
-       QV = xV(3239),
-       nV = xV(3242),
-       wV = xV(40);
-     const {
- ... (6 more removed lines; see GitHub link above)
+       i: () => zH
+     });
+     var AH = LH(38029),
+       rH = LH(39550);
+ 
+     function SH(HH, BH) {
+       let [LH, AH, rH] = HH;
+       return [0, .5, 1].map((HH => ({
+         timeFraction: HH,
+         rotation: {
+           lB: "catmull-rom-spline",
+           point: [LH, AH, rH + (.5 === HH ? BH : 0)]
+         }
+       })))
+     }
+ 
+ ... (205 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L33-L56` → after: `L256-L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L256-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/222.js#L256-L291) · [Before (L33-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/222.js#L33-L56)

```diff
-         this.lastMs = -1, this.runBand = -1, this.runLength = 0, this.votes60 = 0, this.votesMid = 0, this.sumMidMs = 0, this.votes30 = 0, this.steadyVotes30 = 0, this.steadyFastAfter30 = 0, this.capRuledOut = !1
-       }
-       frame(VV, eV) {
-         const xV = VV - this.lastMs;
-         this.lastMs = VV;
-         const JV = function(VV) {
-           if (VV <= 0 || VV > 100) return -1;
-           if (VV <= EV) return 0;
-           if (VV >= BV && VV <= jV) return 1;
-           return VV >= qV && VV <= tV ? 2 : -1
-         }(xV);
-         0 === JV && 2 === this.runBand && eV && (this.steadyFastAfter30++, this.capRuledOut ||= this.steadyVotes30 >= 60 && this.steadyFastAfter30 >= .1 * this.steadyVotes30), JV !== this.runBand && (this.runBand = JV, this.runLength = 0), JV < 0 || ++this.runLength < 3 || (0 === … [truncated]
-       }
-       hz() {
-         return this.votes60 >= 60 ? 60 : this.votesMid >= 60 ? 1e3 * this.votesMid / this.sumMidMs : this.votes30 >= 60 && !this.capRuledOut ? 30 : 60
-       }
- ... (8 more removed lines; see GitHub link above)
+         this.mobScene = new rH((() => Promise.all([LH.e(84), LH.e(259), LH.e(258), LH.e(283), LH.e(111), LH.e(284), LH.e(87), LH.e(281), LH.e(85), LH.e(86), LH.e(291), LH.e(285), LH.e(290), LH.e(288), LH.e(280), LH.e(303), LH.e(255), LH.e(272), LH.e(286), LH.e(289), LH.e(89), LH. … [truncated]
+       }
+       openMob(HH) {
+         return this.mobScene.run((BH => BH.openMobPreview(HH)))
+       }
+       openPet(HH) {
+         return this.mobScene.run((BH => BH.openPetPreview(HH)))
+       }
+       openMobLineup(HH) {
+         return this.mobScene.run((BH => BH.openMobLineupPreview(HH)))
+       }
+       openCharacter(HH, BH) {
+         return this.characterScene.run((LH => LH.openCharacterPreview(HH, BH)))
+       }
+     }
+     AH.j.setDefaultHost((() => new SH))
+ ... (20 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L58-L178` → after: `L293-L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L293-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/222.js#L293-L304) · [Before (L58-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/222.js#L58-L178)

```diff
-       return !UV && (JV && !yV || eV) ? YV && !xV ? "hold" : "rise" : YV ? VV.dropping ? "break" : "hold" : (UV ? JV || eV : JV && !xV) ? "hold" : "break"
-     }
-     const PV = ZV.windowMs,
-       AV = ZV.settleMs,
-       NV = ZV.graceMs,
-       XV = ZV.minIntervals,
-       MV = 1e3 * XV / PV,
-       zV = Math.floor(1e4 / PV),
-       GV = bV.backoffMs,
-       WV = bV.maxMs;
-     class RV {
-       constructor(VV, eV) {
-         let {
-           lowest: xV,
-           startStep: JV = 0,
-           noGain: YV = null,
- ... (105 more removed lines; see GitHub link above)
+       const rH = (0, AH.useRef)(null),
+         hH = (0, AH.useMemo)((() => BH.map((HH => {
+           let {
+             cosmetics: BH,
+             size: LH,
+             heldGun: AH
+           } = HH;
+           return {
+             cosmetics: BH,
+             size: LH,
+             pU: AH.name,
+             animation: AH.aimed ? tH.d : tH.h
```

#### 5. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L180-L515` → after: `L306-L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L306-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/222.js#L306-L330) · [Before (L180-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/222.js#L180-L515)

```diff
-           case "down": {
-             if (yV.judged += eV, yV.fpsSum += VV * eV, yV.minFps = Math.min(yV.minFps, VV), UV || (yV.clean += eV, yV.cleanFpsSum += VV * eV, yV.cleanMinFps = Math.min(yV.cleanMinFps, VV)), yV.judged < rV.judgeWindows) return;
-             const xV = yV.clean > 0 ? yV.cleanFpsSum / yV.clean : yV.fpsSum / yV.judged;
-             if (xV >= yV.fromFps * rV.keepGain) {
-               const VV = yV.clean > 0 ? yV.cleanMinFps : yV.minFps;
-               this.keepDown(yV.from, yV.fromFps, xV, Math.min(VV, yV.fromFps * rV.keepGain), JV)
-             } else this.noGainFrom(yV, xV, JV);
-             return
-           }
-           case "up": {
-             const eV = this.keptAfterDip(yV.from),
-               pV = TV(xV, eV && !YV, !0);
-             if ("hold" === pV && (yV.maskedHolds += UV ? 1 : 0, ++yV.holds <= kV.trialHoldWindows)) return;
-             return "rise" !== pV ? (UV || "hold" === pV && yV.maskedHolds > 0 ? (this.watchAt(yV.from), this.setStep(yV.from, VV, JV, "spoiled")) : this.failUp(this.step, yV.from, VV, JV), void(this.climbed = yV.fromClimbed)) : (yV.fpsSum += VV, void(++yV.judged >= kV.trialWindow … [truncated]
-               from: yV.from,
-               heldWindows: 0,
- ... (320 more removed lines; see GitHub link above)
+         }))), [BH]),
+         XH = function(HH) {
+           const [BH, LH] = (0, AH.useState)([]);
+           return (0, AH.useEffect)((() => {
+             LH(HH.map((() => !1)));
+             const BH = HH.map(((HH, BH) => {
+               let {
+                 showAfterMs: AH
+               } = HH;
+               return window.setTimeout((() => {
+                 LH((HH => HH.map(((HH, LH) => HH || LH === BH))))
+               }), AH)
+             }));
+             return () => {
+               for (const HH of BH) window.clearTimeout(HH)
+             }
+ ... (9 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L517-L577` → after: `L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/222.js#L332) · [Before (L517-L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/222.js#L517-L577)

```diff
-     }
-     let je = 0,
-       qe = 0,
-       te = 0,
-       Fe = !1;
- 
-     function Te() {
-       je++
-     }
- 
-     function Pe(VV, eV, xV) {
-       let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-       Ee(), null !== Je && (VV - te >= 1e3 && (Fe = je - qe > nV.d.sceneChange.meshesPerSecond, qe = je, te = VV), iV.e.isHeld() ? Je.paused(VV) : Je.frame(VV, eV, xV && !document.hidden && sV(), Fe || JV > 0 || (0, yV.n)()))
-     }
- 
-     function Ae() {
- ... (45 more removed lines; see GitHub link above)
+     }))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/223.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/223.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e)

#### 1. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L4-L6` → after: `L4-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L4-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/223.js#L4-L66) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/223.js#L4-L6)

```diff
-   37777: (VV, eV, xV) => {
-     xV.d(eV, {
-       e: () => bV,
+   45006: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       MobPreview: () => XH
+     });
+     var AH = LH(45),
+       rH = LH(1038),
+       SH = LH.n(rH),
+       hH = LH(45011),
+       tH = LH(35016),
+       zH = LH(45013),
+       CH = LH(1225);
+ 
+     function EH(HH) {
+       return tH.h.openMob(HH)
+     }
+     const XH = (0, AH.memo)((function(HH) {
+ ... (47 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L9-L188` → after: `L69-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/223.js#L69-L70) · [Before (L9-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/223.js#L9-L188)

```diff
-     xV(35278);
-     var JV = xV(62),
-       YV = xV(1542),
-       UV = xV(2051),
-       yV = xV(2100),
-       pV = xV(27),
-       QV = xV(2693),
-       nV = xV(37786),
-       wV = xV(37790),
-       ZV = xV(35268),
-       vV = xV(35275),
-       rV = xV(35292),
-       kV = xV(1321);
-     const bV = (0, JV.memo)((function() {
-       var VV;
-       const {
- ... (164 more removed lines; see GitHub link above)
+     var AH = LH(38029),
+       rH = LH(39550);
```

#### 3. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L191-L354` → after: `L73-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L73-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/223.js#L73-L80) · [Before (L191-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/223.js#L191-L354)

```diff
-       return Math.max(1, Math.round(VV * eV))
-     }
- 
-     function QV(VV, eV) {
-       const xV = eV * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
-         JV = function(VV, eV) {
-           if (VV.lines) return pV(VV.lineThickness, eV) % 2;
-           if (VV.dot) return pV(VV.dotSize, eV) % 2;
-           return nV(VV, eV) % 2
-         }(VV, eV),
-         YV = wV(VV.lineThickness * xV, JV),
-         UV = pV(VV.lineLength, xV),
-         yV = Math.round(VV.gap * xV),
-         QV = VV.outline > 0 ? pV(VV.outline, xV) : 0,
-         vV = [];
-       if (VV.lines && (vV.push({
- ... (148 more removed lines; see GitHub link above)
+       let [LH, AH, rH] = HH;
+       return [0, .5, 1].map((HH => ({
+         timeFraction: HH,
+         rotation: {
+           lB: "catmull-rom-spline",
+           point: [LH, AH, rH + (.5 === HH ? BH : 0)]
+         }
+       })))
```

#### 4. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L359-L445` → after: `L85-L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L85-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/223.js#L85-L110) · [Before (L359-L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/223.js#L359-L445)

```diff
-         left: qV(VV.x, eV),
-         top: qV(VV.y, eV),
-         width: qV(VV.size, eV),
-         height: qV(VV.size, eV),
-         borderWidth: qV(VV.border, eV),
-         borderColor: xV,
-         background: VV.filled ? xV : void 0
-       }
-     }
-     const TV = {
-       left: [-1, 0],
-       right: [1, 0],
-       up: [0, -1],
-       down: [0, 1]
-     };
- 
- ... (71 more removed lines; see GitHub link above)
+         kB: 3200,
+         loop: !0,
+         oB: {
+           Root: {
+             timeline: [0, .5, 1].map((HH => ({
+               timeFraction: HH,
+               position: {
+                 lB: "catmull-rom-spline",
+                 point: [0, .5 === HH ? .18 : 0, 0]
+               }
+             })))
+           },
+           HeadMesh: {
+             timeline: [0, .25, .75, 1].map((HH => ({
+               timeFraction: HH,
+               rotation: {
+ ... (10 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L447-L504` → after: `L112-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L112-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/223.js#L112-L122) · [Before (L447-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/223.js#L447-L504)

```diff
-         }(kV, BV.cell, bV),
-         qV = (0, yV.l)(eV.color),
-         TV = (0, yV.l)(eV.outlineColor),
-         NV = (0, UV.useRef)(0);
-       (0, UV.useLayoutEffect)((() => {
-         if (wV) return wV.current = VV => {
-           var eV;
-           NV.current = VV, null === (eV = ZV.current) || void 0 === eV || eV.querySelectorAll("[data-arm]").forEach((eV => {
-             Object.assign(eV.style, PV(function(VV) {
-               return {
-                 x: Number(VV.dataset.x),
-                 y: Number(VV.dataset.y),
-                 arm: VV.dataset.arm
-               }
-             }(eV), VV, EV.current))
-           }))
- ... (42 more removed lines; see GitHub link above)
+         }
+       }
+     }
+     const tH = hH([0, 0, 0], [0, 0, 0], .07),
+       zH = (0, rH.d)((0, AH.h)(tH), "mobIdle"),
+       CH = hH([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
+       EH = hH([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
+       XH = (0, rH.d)((0, AH.h)(CH), "gunReady"),
+       GH = (0, rH.d)((0, AH.h)(EH), "gunAimed")
+   },
+   35018: (HH, BH, LH) => {
```

#### 6. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L510-L517` → after: `L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/223.js#L128) · [Before (L510-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/223.js#L510-L517)

```diff
-     var JV = xV(35272);
-     const YV = "XH1-",
-       UV = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
-       yV = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
-       pV = ["color", "outlineColor"],
-       QV = 1 + 3 * pV.length + yV.length + 1,
-       nV = Math.ceil(8 * QV / Math.log2(62)),
-       wV = YV.length + nV;
+     var AH = LH(1565);
```

#### 7. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L520-L525` → after: `L131-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L131-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/223.js#L131-L150) · [Before (L520-L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/223.js#L520-L525)

```diff
-       let eV = 90;
-       for (const xV of VV) eV = 31 * eV + xV & 255;
-       return eV
-     }
-     const vV = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
-       rV = BigInt(vV.length);
+       var BH;
+       return {
+         ...hH.store,
+         yaw: hH.store.yaw + (null !== (BH = AH.c[HH].previewYaw) && void 0 !== BH ? BH : 0)
+       }
+     }
+     const SH = {
+         yaw: .61 * Math.PI,
+         pitch: Math.PI / 2.05,
+         radius: 30,
+         target: [0, 0, 0]
+       },
+       hH = {
+         player: SH,
+         store: {
+           ...SH,
+ ... (4 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L528-L820` → after: `L153-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L153-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/223.js#L153-L156) · [Before (L528-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/223.js#L528-L820)

```diff
-       let xV = 0n;
-       for (const YV of VV) {
-         const VV = vV.indexOf(YV);
-         if (VV < 0) return null;
-         xV = xV * rV + BigInt(VV)
-       }
-       if (xV >> BigInt(8 * eV) !== 0n) return null;
-       const JV = [];
-       for (let YV = 0; YV < eV; YV++) JV.unshift(Number(0xffn & xV)), xV >>= 8n;
-       return JV
-     }
- 
-     function bV(VV) {
-       let eV = "shapes" === VV.style ? 1 : 0;
-       UV.forEach(((xV, JV) => {
-         VV[xV] && (eV |= 1 << JV + 1)
- ... (277 more removed lines; see GitHub link above)
+       HH instanceof Promise ? HH.then(BH).catch((HH => {
+         console.error("Couldn't open the preview", HH)
+       })) : BH(HH)
+     }
```

#### 9. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L823-L827` → after: `L159-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L159-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/223.js#L159-L160) · [Before (L823-L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/223.js#L823-L827)

```diff
-         this._howl = void 0, this._volumeMultiplier = void 0, this._loadFailed = !1, this._unloaded = !1, this._volumeMultiplier = new QV.i, this._howl = (0, pV.countDecodesAs)(new UV.Howl({
-           src: [...(0, JV.w)(VV).src],
-           pool: 15
-         }), "sound"), this._howl.once("loaderror", (() => {
-           this._loadFailed = !0
+         this.opened = null, this.view = null, this.size = null, this.closed = !1, tH(HH, (HH => {
+           this.closed ? HH.close() : (this.opened = HH, null !== this.size && HH.resize(this.size.width, this.size.height), null !== this.view && HH.show(this.view))
```

#### 10. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L830-L900` → after: `L163-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L163-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/223.js#L163-L182) · [Before (L830-L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/223.js#L830-L900)

```diff
-       play() {
-         let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         const eV = this._howl.play(yV.e);
-         VV && this._howl.loop(!0, eV);
-         let xV = 1;
-         this._howl.volume(this._volumeMultiplier.getTotalMultipliedVal(), eV);
-         const JV = {
-           stop: () => {
-             var VV;
-             return null === (VV = this.liveHowl()) || void 0 === VV || VV.stop(eV), JV
-           },
-           fade: (VV, xV, YV) => {
-             var UV;
-             return null === (UV = this.liveHowl()) || void 0 === UV || UV.fade(VV, xV, YV, eV), JV
-           },
-           rate: VV => {
- ... (55 more removed lines; see GitHub link above)
+       show(HH) {
+         var BH;
+         this.view = HH, null === (BH = this.opened) || void 0 === BH || BH.show(HH)
+       }
+       resize(HH, BH) {
+         var LH;
+         this.size = {
+           width: HH,
+           height: BH
+         }, null === (LH = this.opened) || void 0 === LH || LH.resize(HH, BH)
+       }
+       close() {
+         var HH;
+         this.closed = !0, null === (HH = this.opened) || void 0 === HH || HH.close(), this.opened = null
+       }
+     }
+ ... (4 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L903-L933` → after: `L185-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L185-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/223.js#L185-L221) · [Before (L903-L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/223.js#L903-L933)

```diff
-       setGlobalVolume(VV) {
-         this._volumeMultiplier.setMultiplierType("globalVolume", VV), this._howl.volume(VV)
-       }
-       _setPannerAttr(VV) {
-         let {
-           id: eV,
-           coneInnerAngle: xV = 360,
-           coneOuterAngle: JV = 360,
-           coneOuterGain: YV = 0,
-           distanceModel: UV = "inverse",
-           maxDistance: yV = 1e3,
-           panningModel: pV = "HRTF",
-           refDistance: QV = rV.h,
-           rolloffFactor: nV = 1
-         } = VV;
-         const wV = this.liveHowl();
- ... (15 more removed lines; see GitHub link above)
+       get dev() {
+         return this.opened.dev
+       }
+       isReady() {
+         var HH, BH;
+         return null !== (HH = null === (BH = this.opened) || void 0 === BH ? void 0 : BH.isReady()) && void 0 !== HH && HH
+       }
+       setCosmetic(HH, BH) {
+         var LH;
+         null === (LH = this.opened) || void 0 === LH || LH.setCosmetic(HH, BH)
+       }
+       playEmote(HH) {
+         var BH;
+         null === (BH = this.opened) || void 0 === BH || BH.playEmote(HH)
+       }
+       setOrbit(HH) {
+ ... (21 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L938-L1088` → after: `L226-L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L226-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/223.js#L226-L290) · [Before (L938-L1088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/223.js#L938-L1088)

```diff
-         this.stereoSounds = {}, this.spatialSounds = {}, this.spatialVoices = new EV.b, this.idlePreloads = new Set, this.idlePreloadGeneration = 0, kV.h.subscribe("appManagerUpdated|soundVolume", (VV => {
-           const eV = Object.values(this.stereoSounds).concat(Object.values(this.spatialSounds));
-           for (const xV of eV) xV.setGlobalVolume(VV)
-         }))
-       }
-       play(VV, eV) {
-         var xV;
-         let UV, yV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (xV = (0, vV.d)()) || void 0 === xV ? void 0 : xV.bD,
-           pV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : rV.f,
-           QV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : rV.h,
-           wV = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
-         var kV;
-         (0, vV.d)() ? UV = !!Array.isArray(yV) || (0, nV.c)(yV) !== (null === (kV = (0, vV.d)()) || void 0 === kV ? void 0 : kV.bD): UV = !1;
-         const bV = (0, JV.n)(VV),
-           BV = this.loadSound(UV ? this.spatialSounds : this.stereoSounds, VV);
-         if (!UV) {
- ... (135 more removed lines; see GitHub link above)
+         this.host = null, this.makeDefault = null
+       }
+       setHost(HH) {
+         this.host = HH
+       }
+       setDefaultHost(HH) {
+         this.makeDefault = HH
+       }
+       current() {
+         if (null === this.host) {
+           if (null === this.makeDefault) throw new Error("no preview host");
+           this.host = this.makeDefault()
+         }
+         return this.host
+       }
+       openMob(HH) {
+ ... (49 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/224.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/224.js` (24 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a)

#### 1. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/224.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/224.js#L4)

```diff
-   35319: (VV, eV, xV) => {
+   37270: (HH, BH, LH) => {
```

#### 2. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L6-L29` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/224.js#L6) · [Before (L6-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/224.js#L6-L29)

```diff
-       MAX_BLOCK_ID: () => JV,
-       armourReductionOf: () => lV,
-       clipSizeOf: () => hV,
-       creativeAltNames: () => ye,
-       creativeCategoryOf: () => dV,
-       creativeItemCategories: () => pV,
-       creativeItemCategoryIcons: () => QV,
-       creativeItemIds: () => IV,
-       descriptionOf: () => aV,
-       displayNameOf: () => CV,
-       dropsNothing: () => mV,
-       enchantmentPerksOf: () => sV,
-       gunTypeOf: () => fV,
-       harvestsNullLevelOf: () => KV,
-       isDevOnlyItem: () => xe,
-       itemIsDisabled: () => Ye,
- ... (8 more removed lines; see GitHub link above)
+       default: () => LB
```

#### 3. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L31-L51` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/224.js#L8-L12) · [Before (L31-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/224.js#L31-L51)

```diff
-     const JV = 8558,
-       YV = "''WL&M3GT%cM)MK$YE1aM2'I+F+O_*c^*=%'%%%%%%%K>F>%%)K=H=%%[*W5_5['[R$ZW$S%[X&NH&L5C$W$5,KS&%]]&I%^Z&NM&b7TK$Y6G,Y>%M%M7P6$WD%Vc$LZ$OY$%+Q[&;S$/G$N&W%F$W%F$S$N&G'.F$c%`'1+%)41(1(+49$(2=b$/`N,RN,K/c_&Q0EC$O(''P`&O$%-%%^R2-*)&%;NV/ZT%IT%3XM$%%%%%_U$%b73.%%`-T-%%%%%%L9$M8X7 … [truncated]
-       UV = "S-$SW$$R&$SG2$)$'$)$4$)$X*$I6$-$%$%$cC1$WD1$%%%$]5$b7$RH4$%$%$%$%$%$%$%$%$%$)$N+$EG&$ZT%$IT%$3$XM$$%$%$%$%$%$Z1$Y[$$O`0$'$'$'$-&+&%&)&4&1&(&1*(*+&4&9&$&(&2&=&E$&'&%&%&%&1%_%$TV3$%$D.$$$Uc&$S$$S$$S$$S$$S$$S$$S$&S$&S$$S$$S$$S$$S$$S$$S$$S$$^1$S$$]I($%$M/$+$N-$%$Z$$%$I6$3 … [truncated]
-       yV = "Crafting Table|Cauldron|Sign|Iron Nugget|Gold Nugget|Diamond Nugget|Moonstone Nugget|Iron Ingot|Gold Ingot|Draugr Knight Sword|Cooked Potato|Cooked Beef|Raw Lamb|Cooked Lamb|Gold Watermelon Stag Antlers|Bear Fur|Cave Golem Eye|Frost Golem Eye|Draugr Knight Heart|Fur B … [truncated]
-       pV = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"],
-       QV = {
-         building: "Stone Bricks",
-         colours: "Magenta Wool",
-         nature: "Grass Block",
-         decoration: "Lantern",
-         utility: "Workbench",
-         tools: "Iron Pickaxe",
-         combat: "Iron Sword",
-         food: "Apple",
-         mobs: "Pig Spawn Orb",
-         materials: "Iron Bar",
- ... (5 more removed lines; see GitHub link above)
+     var AH = LH(45);
+     const rH = "newPlayerDeal",
+       SH = 36e5,
+       hH = [4, 12, 20, 20, 30];
+     const tH = 12 * SH;
```

#### 4. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L54-L58` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/224.js#L15) · [Before (L54-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/224.js#L54-L58)

```diff
-       let eV = null;
-       return xV => {
-         var JV;
-         return eV ??= (0, wV.y)(VV, 10096), null !== (JV = eV[xV]) && void 0 !== JV ? JV : 0
-       }
+       return HH - tH
```

#### 5. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L63-L68` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/224.js#L20) · [Before (L63-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/224.js#L63-L68)

```diff
-       let YV = null,
-         UV = [];
-       return VV => {
-         const yV = JV(VV);
-         if (0 !== yV) return null === YV && (YV = eV.split(wV.p), UV = new Array(YV.length)), UV[yV - 1] ??= xV(YV[yV - 1])
-       }
+       return BH >= AH && BH < LH && (null === HH.lastShownAt || HH.lastShownAt < AH)
```

#### 6. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L71-L72` → after: `L23-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L23-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/224.js#L23-L31) · [Before (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/224.js#L71-L72)

```diff
-     function kV(VV) {
-       return VV
+     function EH(HH, BH) {
+       const {
+         arrival: LH,
+         now: AH,
+         endsAt: rH,
+         playedOnDevice: tH
+       } = BH;
+       return !(AH >= rH || !tH) && (!(!CH(HH, AH, rH) && 0 !== HH.shownCount && null !== HH.lastShownAt) || "open" === LH && AH - HH.lastShownAt >= (zH = HH.shownCount, hH[Math.min(Math.max(zH, 1), hH.length) - 1] * SH));
+       var zH
```

#### 7. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L76` → after: `L62-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L62-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/224.js#L62-L111) · [Before (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/224.js#L76)

```diff
-       return VV === wV.f ? null : (0, wV.B)(VV)
+       let {
+         shownView: BH,
+         close: LH
+       } = HH;
+       const {
+         t: rH
+       } = (0, lH.B)(), SH = (0, oH.S)(), {
+         purchaseUnderWay: hH,
+         notice: tH,
+         needsLogin: zH,
+         buyPack: CH
+       } = (0, gH.e)("popup", ((HH, BH) => {
+         LH(!1), (0, fH.d)(HH, BH)
+       })), EH = null === SH;
+       (0, AH.useEffect)((() => {
+         EH && LH(!1)
+ ... (34 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L104-L108` → after: `L115-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L115-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/224.js#L115-L121) · [Before (L104-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/224.js#L104-L108)

```diff
-       const eV = EV(VV);
-       return null !== eV ? eV : FV(jV, VV, (() => {
-         const eV = (0, nV.g)(VV);
-         return void 0 === eV ? void 0 : (0, wV.G)(eV)
-       }))
+       let {
+         arm: BH,
+         children: LH
+       } = HH;
+       return (0, AH.useEffect)((() => {
+         (0, oH.J)(!0)
+       }), []), (0, oH.V)(BH, "popup"), LH
```

#### 9. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L112-L115` → after: `L125-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L125-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/224.js#L125-L141) · [Before (L112-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/224.js#L112-L115)

```diff
-       const eV = BV(VV);
-       return null !== eV ? eV : FV(qV, VV, (() => {
-         var eV;
-         return null !== (eV = (0, wV.C)(CV(VV))) && void 0 !== eV ? eV : void 0
+       let BH = null;
+       PH.NotificationProvider.showCustomPopup({
+         body: LH => (0, NH.jsx)(jH, {
+           arm: HH.arm,
+           children: (0, NH.jsx)(RH, {
+             shownView: HH,
+             close: HH => {
+               BH ??= HH, LH()
+             }
+           })
+         }),
+         middleScreenPopupContainerClassName: "NewPlayerDealPopupContainer",
+         middleScreenPopupClassName: "NewPlayerDealPopupPanel",
+         disableExitButton: !0,
+         unlockPointerKey: "NewPlayerDealPopup"
+       }).getResult().then((LH => {
+ ... (1 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L120-L132` → after: `L150-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L150-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/224.js#L150-L156) · [Before (L120-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/224.js#L120-L132)

```diff
-       return TV(VV)
-     }
- 
-     function cV(VV) {
-       return PV(VV)
-     }
- 
-     function hV(VV) {
-       return AV(VV)
-     }
- 
-     function lV(VV) {
-       return NV(VV)
+       const BH = Date.now() + ZH;
+       return new Promise((LH => {
+         const AH = () => {
+           HH() ? (0, bH.e)() || PH.NotificationProvider.hasPopup() || (0, OH.n)() || (0, oH.t)() || null !== YH.c.get("openEverythingMenuName") ? Date.now() > BH ? LH(!1) : setTimeout(AH, wH) : LH(!0) : LH(!1)
+         };
+         AH()
+       }))
```

#### 11. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L135-L136` → after: `L162-L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L162-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/224.js#L162-L164) · [Before (L135-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/224.js#L135-L136)

```diff
-     function LV(VV) {
-       return XV(VV)
+     function iH(HH, BH) {
+       var LH;
+       return (null === (LH = JH) || void 0 === LH ? void 0 : LH.accountId) === BH && JH.shownCount === HH.shownCount
```

#### 12. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L139-L140` → after: `L167-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L167-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/224.js#L167-L168) · [Before (L139-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/224.js#L139-L140)

```diff
-     function fV(VV) {
-       return MV(VV)
+     function pH(HH, BH, LH) {
+       return !!iH(BH, LH) && (JH = null, (0, oH.z)(LH), nH(HH), !0)
```

#### 13. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L142-L144` → after: `L170-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L170-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/224.js#L170-L197) · [Before (L142-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/224.js#L142-L144)

```diff
- 
-     function mV(VV) {
-       return 0 !== GV(VV)
+     async function yH(HH, BH, LH, AH) {
+       if (sH) return !1;
+       let rH;
+       sH = !0;
+       try {
+         rH = await async function(HH) {
+           const {
+             newPlayerDeal: BH,
+             counted: LH
+           } = await (0, vH.postJsonWithMetricsCookiesAndJsonResponse)(`${xH.clientSideServerUrls.indexUrl}/index/new-player-deal/shown`, {
+             shownCount: HH
+           }, {
+             retries: 1
+           });
+           return {
+             newPlayerDeal: BH,
+ ... (12 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L147-L148` → after: `L201-L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L201-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/224.js#L201-L277) · [Before (L147-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/224.js#L147-L148)

```diff
-     function KV(VV) {
-       return WV(VV)
+     function BB(HH, BH, LH, rH, SH) {
+       var hH;
+       const {
+         gameState: tH
+       } = (0, YH.m)(["gameState"]), GH = "landingPage" === tH, {
+         pointing: uH
+       } = (0, VH.g)(), QH = (0, AH.useRef)(uH);
+       QH.current = uH;
+       const WH = (0, AH.useRef)(HH);
+       WH.current = HH;
+       const xH = (0, AH.useRef)(BH);
+       xH.current = BH;
+       const vH = (0, AH.useRef)(LH);
+       vH.current = LH;
+       const [PH, OH] = (0, AH.useState)(null), bH = (0, AH.useRef)(0), kH = (0, AH.useRef)(0), mH = (0, AH.useRef)(!1), oH = (0, AH.useCallback)((HH => {
+         "open" === function(HH) {
+ ... (61 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L151-L152` → after: `L280-L366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L280-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/224.js#L280-L366) · [Before (L151-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/224.js#L151-L152)

```diff
-     function HV(VV) {
-       return 0 !== zV(VV)
+     function LB() {
+       const {
+         userContext: HH
+       } = (0, mH.e)(), BH = (0, uH.usePurchasesAllowed)(), [LH, SH] = (0, AH.useState)(IH.k);
+       (0, AH.useEffect)((() => (SH((0, IH.k)()), (0, IH.n)(SH))), []);
+       const hH = (0, oH.e)(HH);
+       ! function(HH, BH, LH) {
+         const [SH, hH] = (0, AH.useState)(0);
+         (0, AH.useEffect)((() => {
+           if (!BH || null === HH) return;
+           if (null !== LH) return void(0, oH.I)(HH, (0, IH.h)());
+           if (null !== (0, oH.j)(HH)) return;
+           let AH, SH = !1;
+           return (0, WH.getBillingClient)().getOfferings(rH).then((BH => {
+             let {
+               offering: LH
+ ... (71 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L156-L159` → after: `L388-L399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L388-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/224.js#L388-L399) · [Before (L156-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/224.js#L156-L159)

```diff
-       const eV = RV(VV);
-       if (void 0 === eV || eV.startsWith(wV.n)) return null === eV || void 0 === eV ? void 0 : eV.slice(wV.n.length);
-       const xV = (0, nV.g)(VV);
-       return void 0 === xV ? void 0 : `${xV}${wV.p}${eV}`
+       let {
+         endsAt: BH,
+         className: LH
+       } = HH;
+       return (0, YH.jsxs)("span", {
+         className: SH()("NewPlayerDealClock", LH),
+         children: [(0, YH.jsx)(CH.c, {
+           name: "hourglass"
+         }), (0, YH.jsx)(zH.i, {
+           toTime: BH
+         })]
+       })
```

#### 17. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L163-L176` → after: `L403-L447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L403-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/224.js#L403-L447) · [Before (L163-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/224.js#L163-L176)

```diff
-       var eV;
-       return null !== (eV = gV(VV)) && void 0 !== eV ? eV : ZV
-     }
-     let SV = null;
- 
-     function IV() {
-       if (null === SV) {
-         const VV = [],
-           eV = new wV.q(YV);
-         let xV = 0;
-         for (; !eV.done;) xV += (0, wV.I)(eV.next()), VV.push(xV);
-         SV = Object.freeze(VV)
-       }
-       return SV
+       let {
+         offered: BH,
+         needsLogin: LH,
+         busy: AH,
+         highlight: rH,
+         onBuy: zH
+       } = HH;
+       const {
+         t: CH
+       } = (0, hH.B)(), {
+         pack: uH
+       } = BH, QH = (0, XH.f)(BH.package);
+       return (0, YH.jsxs)("div", {
+         className: SH()("NewPlayerDealPack", {
+           NewPlayerDealPackHighlight: rH
+         }),
+ ... (29 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L180` → after: `L451-L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L451-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/224.js#L451-L484) · [Before (L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/224.js#L180)

```diff
-       return DV(VV)
+       let {
+         view: BH,
+         needsLogin: LH,
+         busy: rH,
+         highlight: tH,
+         onBuy: zH
+       } = HH;
+       const {
+         t: CH
+       } = (0, hH.B)();
+       return (0, YH.jsxs)("div", {
+         className: SH()("NewPlayerDealPacks", BH.packs.length > 1 ? "NewPlayerDealPacksTwo" : "NewPlayerDealPacksOne"),
+         children: [BH.packs.map(((HH, BH) => (0, YH.jsxs)(AH.Fragment, {
+           children: [BH > 0 && (0, YH.jsx)("div", {
+             className: "NewPlayerDealDivider",
+             "aria-hidden": !0,
+ ... (18 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L184-L185` → after: `L515-L518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L515-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/224.js#L515-L518) · [Before (L184-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/224.js#L184-L185)

```diff
-       var xV;
-       return 0 !== ((null !== (xV = iV(VV)) && void 0 !== xV ? xV : 0) & eV)
+       null !== HH && (0, MH.q)(HH) || ((0, rH.reportAnalyticsClick)({
+         id: "store.purchase_done",
+         value: `self:${BH.pack.packageId}`
+       }), null !== HH && (0, MH.w)(HH), bH(BH.pack.gems))
```

#### 20. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L188-L189` → after: `L521-L538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L521-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/224.js#L521-L538) · [Before (L188-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/224.js#L188-L189)

```diff
-     function Ve(VV) {
-       return OV(VV, wV.e.OnlyInSearch)
+     function OH(HH, BH, LH) {
+       const rH = (0, MH.e)(BH);
+       switch (HH.kind) {
+         case "completed":
+           VH(rH, LH);
+           break;
+         case "pending":
+           SH = HH.intentId, hH = () => {
+             WH.h.refresh(), VH(rH, LH)
+           }, UH || (UH = !0, TH.listen()), TH.follow(SH, hH);
+           break;
+         case "unknownPackage":
+           (0, MH.N)(BH, null);
+           break;
+         case "failed":
+           HH.errorKey === AH.c.newPlayerDealUnavailable && (0, MH.N)(BH, null)
+ ... (2 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L193` → after: `L542-L549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L542-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/224.js#L542-L549) · [Before (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/224.js#L193)

```diff
-       return OV(VV, wV.e.OnlyInCategory)
+       XH.NotificationProvider.showCustomPopup({
+         body: BH => (0, PH.jsx)(kH, {
+           gems: HH,
+           close: BH
+         }),
+         middleScreenPopupClassName: "NewPlayerDealAddedPopup",
+         disableExitButton: !0
+       })
```

#### 22. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L197` → after: `L553-L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L553-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/224.js#L553-L576) · [Before (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/224.js#L197)

```diff
-       return OV(VV, wV.e.DevOnly)
+       let {
+         gems: BH,
+         close: LH
+       } = HH;
+       const {
+         t: AH
+       } = (0, EH.B)();
+       return (0, PH.jsxs)("div", {
+         className: "NewPlayerDealAdded",
+         children: [(0, PH.jsxs)("div", {
+           className: "NewPlayerDealAddedHead",
+           children: [(0, PH.jsx)(uH.c, {
+             name: "circle-check"
+           }), (0, PH.jsx)(QH.e, {
+             amount: BH
+           }), (0, PH.jsx)("span", {
+ ... (8 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L201-L221` → after: `L580-L605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L580-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/224.js#L580-L605) · [Before (L201-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/224.js#L201-L221)

```diff
-       return !OV(VV, wV.e.HiddenByDefault) && void 0
-     }
- 
-     function Ye(VV, eV, xV, JV) {
-       var YV;
-       const UV = null !== (YV = iV(VV)) && void 0 !== YV ? YV : 0;
-       return 0 !== (UV & wV.e.DisabledInPublicLobbies) && eV || 0 !== (UV & wV.e.DisabledInProduction) && !0 || !xV || !JV && 0 !== (UV & wV.e.DevOnly)
-     }
-     let Ue = null;
- 
-     function ye() {
-       if (null === Ue) {
-         const VV = yV.split(wV.p),
-           eV = new Map,
-           xV = new wV.q(UV);
-         let JV = 0,
- ... (5 more removed lines; see GitHub link above)
+       let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hH.d;
+       const {
+         userContext: LH
+       } = (0, GH.e)(), {
+         purchaseUnderWay: AH,
+         notice: rH,
+         buy: zH
+       } = (0, tH.c)(BH), CH = (0, xH.k)(), EH = LH.mayBuy() || (0, SH.guestsMayBuy)(), XH = null === CH ? !EH : CH.guest && !LH.isLoggedIn();
+       return {
+         purchaseUnderWay: AH,
+         notice: rH,
+         needsLogin: XH,
+         buyPack: function(AH, rH) {
+           (0, MH.F)("new_player_deal.buy", (0, vH.e)(AH.arm, HH, rH.pack.packageId)), null === CH ? zH(function(HH) {
+             return {
+               sku: HH.pack.packageId,
+ ... (10 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L227` → after: `L609-L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L609-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/224.js#L609-L610) · [Before (L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/224.js#L227)

```diff
-   }
+   },
+   35030: () => {}
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/225.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/225.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789)

#### 1. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/225.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/225.js#L4)

```diff
-   44429: (VV, eV, xV) => {
+   35054: (HH, BH, LH) => {
```

#### 2. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/225.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/225.js#L6)

```diff
-       c: () => UV
+       c: () => rH,
+       f: () => SH
```

#### 3. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8-L9` → after: `L9-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/225.js#L9-L142) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/225.js#L8-L9)

```diff
-     var JV = xV(62),
-       YV = xV(3080);
+     var AH = LH(3610);
+ 
+     function rH() {
+       if ("undefined" === typeof BroadcastChannel) return null;
+       const HH = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
+       try {
+         const BH = new BroadcastChannel(AH.f);
+         BH.postMessage({
+           stored: HH
+         }), BH.close()
+       } catch {
+         return null
+       }
+       return HH
+     }
+ 
+ ... (118 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12-L26` → after: `L145-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L145-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/225.js#L145-L160) · [Before (L12-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/225.js#L12-L26)

```diff
-       const UV = (0, JV.useRef)(null),
-         {
-           width: yV,
-           height: pV
-         } = (0, YV.d)(VV);
-       (0, JV.useEffect)((() => {
-         const xV = eV(VV.current);
-         return UV.current = xV, () => {
-           xV.close(), UV.current = null
-         }
-       }), [VV, eV]), (0, JV.useEffect)((() => {
-         yV <= 0 || pV <= 0 || UV.current.resize(yV, pV)
-       }), [yV, pV]), (0, JV.useEffect)((() => {
-         UV.current.show(xV)
-       }), [xV])
+       const AH = Object.entries(WH(HH) ? HH : {}),
+         rH = AH.filter((HH => {
+           let [, LH] = HH;
+           return !BH(LH)
+         }));
+       if (rH.length > 0) {
+         const HH = rH.map((HH => {
+           let [BH] = HH;
+           return BH
+         }));
+         console.warn(`Ignoring a custom game texture pack's ${LH} files that name another site: ${HH.join(", ")}`)
+       }
+       return Object.fromEntries(AH.filter((HH => {
+         let [, LH] = HH;
+         return BH(LH)
+       })))
```

#### 5. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L29` → after: `L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/225.js#L163) · [Before (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/225.js#L29)

```diff
-   44438: (VV, eV, xV) => {
+   54579: (HH, BH, LH) => {
```

#### 6. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L32-L33` → after: `L166-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L166-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/225.js#L166-L167) · [Before (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/225.js#L32-L33)

```diff
-       g: () => ZV,
-       h: () => QV
+       h: () => vH,
+       l: () => xH
```

#### 7. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L35-L118` → after: `L169-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L169-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/225.js#L169-L178) · [Before (L35-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/225.js#L35-L118)

```diff
-     var JV = xV(38340),
-       YV = xV(39828);
- 
-     function UV(VV, eV) {
-       let [xV, JV, YV] = VV;
-       return [0, .5, 1].map((VV => ({
-         timeFraction: VV,
-         rotation: {
-           zY: "catmull-rom-spline",
-           point: [xV, JV, YV + (.5 === VV ? eV : 0)]
-         }
-       })))
-     }
- 
-     function yV(VV, eV, xV) {
-       return {
- ... (68 more removed lines; see GitHub link above)
+     var AH = LH(1005),
+       rH = LH(2227),
+       SH = LH(3597),
+       hH = LH(3610),
+       tH = LH(35054),
+       zH = LH(35048),
+       CH = LH(54576),
+       EH = LH(42307),
+       XH = LH(42290),
+       GH = LH(5554);
```

#### 8. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L120-L138` → after: `L180-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L180-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/225.js#L180-L182) · [Before (L120-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/225.js#L120-L138)

```diff
-         yaw: .61 * Math.PI,
-         pitch: Math.PI / 2.05,
-         radius: 30,
-         target: [0, 0, 0]
-       },
-       yV = {
-         player: UV,
-         store: {
-           ...UV,
-           radius: 33,
-           target: [0, 3.9, 0]
-         }
-       };
- 
-     function pV(VV, eV) {
-       VV instanceof Promise ? VV.then(eV).catch((VV => {
- ... (3 more removed lines; see GitHub link above)
+       pack: null,
+       gameSource: null
+     };
```

#### 9. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L141-L142` → after: `L185-L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L185-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/225.js#L185-L327) · [Before (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/225.js#L141-L142)

```diff
-         this.opened = null, this.view = null, this.size = null, this.closed = !1, pV(VV, (VV => {
-           this.closed ? VV.close() : (this.opened = VV, null !== this.size && VV.resize(this.size.width, this.size.height), null !== this.view && VV.show(this.view))
+         this.host = HH, this.ready = void 0, this.state = YH, this.playerPack = null, this.onGamePack = !1, this.confirmGamePack = null, this.skippedKey = null, this.ownAnnouncements = new Set, this.listeners = new Map, this.ownListeners = new Set, this.changes = 0, this.picks =  … [truncated]
+       }
+       readyWithin(HH) {
+         return Promise.race([this.ready, new Promise((BH => {
+           setTimeout(BH, HH)
+         }))])
+       }
+       current() {
+         return this.state
+       }
+       playerState() {
+         return {
+           pack: this.playerPack,
+           gameSource: null
+         }
+       }
+ ... (127 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L145-L304` → after: `L330-L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L330-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/225.js#L330-L393) · [Before (L145-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/225.js#L145-L304)

```diff
-       show(VV) {
-         var eV;
-         this.view = VV, null === (eV = this.opened) || void 0 === eV || eV.show(VV)
-       }
-       resize(VV, eV) {
-         var xV;
-         this.size = {
-           width: VV,
-           height: eV
-         }, null === (xV = this.opened) || void 0 === xV || xV.resize(VV, eV)
-       }
-       close() {
-         var VV;
-         this.closed = !0, null === (VV = this.opened) || void 0 === VV || VV.close(), this.opened = null
-       }
-     }
- ... (144 more removed lines; see GitHub link above)
+       takeStoredOwn(HH) {
+         if (this.playerPicked || this.Mu) return;
+         if (this.ownChanges++, this.setOwn(MH(HH)), this.onGamePack) return;
+         const BH = {
+           pack: this.playerPack,
+           gameSource: null
+         };
+         0 === this.changes ? this.state = BH : this.change(BH, !1)
+       }
+       async update() {
+         const HH = this.playerPack,
+           BH = null === HH || void 0 === HH ? void 0 : HH.metaData.id;
+         if (!HH || !BH || !this.host.fetchLatest || BH === rH.e || BH === rH.l.CUSTOM) return;
+         const LH = rH.o[BH];
+         if (void 0 === LH || HH.metaData.version >= LH) return;
+         let AH;
+ ... (48 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L306-L330` → after: `L395-L436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L395-L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/225.js#L395-L436) · [Before (L306-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/225.js#L306-L330)

```diff
-         }))), [eV]),
-         ZV = function(VV) {
-           const [eV, xV] = (0, JV.useState)([]);
-           return (0, JV.useEffect)((() => {
-             xV(VV.map((() => !1)));
-             const eV = VV.map(((VV, eV) => {
-               let {
-                 showAfterMs: JV
-               } = VV;
-               return window.setTimeout((() => {
-                 xV((VV => VV.map(((VV, xV) => VV || xV === eV))))
-               }), JV)
-             }));
-             return () => {
-               for (const VV of eV) window.clearTimeout(VV)
-             }
- ... (9 more removed lines; see GitHub link above)
+         }
+       }
+     }
+     async function QH(HH, BH, LH) {
+       const AH = (0, zH.b)(await LH.fetchPack(BH));
+       if (null !== AH) return {
+         pack: AH,
+         key: BH
+       };
+       const rH = await LH.packKey(HH);
+       if (null === rH) return null;
+       const SH = (0, zH.b)(await LH.fetchPack(rH));
+       if (null === SH) throw new Error(`no texture pack at ${rH}`);
+       return {
+         pack: SH,
+         key: rH
+ ... (26 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L332` → after: `L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/225.js#L438) · [Before (L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/225.js#L332)

```diff
-     }))
+     }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/226.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/226.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65)

#### 1. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/226.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/226.js#L4)

```diff
-   44421: (VV, eV, xV) => {
+   35061: (HH, BH, LH) => {
```

#### 2. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L6` → after: `L6-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/226.js#L6-L9) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/226.js#L6)

```diff
-       MobPreview: () => ZV
+       packDisplayName: () => QH,
+       packModelMessage: () => WH,
+       packModelSummary: () => xH,
+       refusedPackModels: () => MH
```

#### 3. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L8-L14` → after: `L11-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L11-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/226.js#L11-L18) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/226.js#L8-L14)

```diff
-     var JV = xV(62),
-       YV = xV(1146),
-       UV = xV.n(YV),
-       yV = xV(44429),
-       pV = xV(35337),
-       QV = xV(44438),
-       nV = xV(1321);
+     var AH = LH(35067),
+       rH = LH(35071);
+     const SH = "DRACO",
+       hH = 0,
+       tH = 1,
+       zH = 0,
+       CH = 1,
+       EH = 32768;
```

#### 4. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L17-L54` → after: `L21-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L21-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/226.js#L21-L82) · [Before (L17-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/226.js#L17-L54)

```diff
-       return pV.h.openMob(VV)
-     }
-     const ZV = (0, JV.memo)((function(VV) {
-       let {
-         mobType: eV,
-         variation: xV = null,
-         animation: YV = QV.h,
-         className: pV
-       } = VV;
-       const ZV = (0, JV.useRef)(null),
-         vV = (0, JV.useMemo)((() => ({
-           mobType: eV,
-           variation: xV,
-           animation: YV
-         })), [eV, xV, YV]);
-       return (0, yV.c)(ZV, wV, vV), (0, nV.jsx)("div", {
- ... (22 more removed lines; see GitHub link above)
+       const BH = new DataView(HH.buffer, HH.byteOffset, HH.byteLength);
+       let LH = 0;
+       const AH = () => {
+           if (LH >= HH.byteLength) throw new RangeError("past the stream");
+           return HH[LH++]
+         },
+         rH = () => {
+           if (LH + 4 > HH.byteLength) throw new RangeError("past the stream");
+           const AH = BH.getUint32(LH, !0);
+           return LH += 4, AH
+         },
+         XH = () => {
+           let HH = 0;
+           for (let BH = 0; BH < 35; BH += 7) {
+             const LH = AH();
+             if (HH += (127 & LH) * 2 ** BH, 0 === (128 & LH)) return HH
+ ... (46 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L56-L78` → after: `L84-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L84-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/226.js#L84-L90) · [Before (L56-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/226.js#L56-L78)

```diff
-       }), [VV, eV]), (0, JV.useEffect)((() => {
-         yV <= 0 || pV <= 0 || UV.current.resize(yV, pV)
-       }), [yV, pV]), (0, JV.useEffect)((() => {
-         UV.current.show(xV)
-       }), [xV])
-     }
-   },
-   44438: (VV, eV, xV) => {
-     xV.d(eV, {
-       d: () => vV,
-       g: () => ZV,
-       h: () => QV
-     });
-     var JV = xV(38340),
-       YV = xV(39828);
- 
- ... (7 more removed lines; see GitHub link above)
+         if (uH !== CH) return null;
+         AH(), GH < 2 && XH();
+         const MH = XH();
+         return {
+           faces: XH(),
+           vertices: MH,
+           minor: GH
```

#### 6. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L80` → after: `L92-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L92-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/226.js#L92-L94) · [Before (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/226.js#L80)

```diff
-       })))
+       } catch {
+         return null
+       }
```

#### 7. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L84-L111` → after: `L98-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L98-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/226.js#L98-L115) · [Before (L84-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/226.js#L84-L111)

```diff
-       return {
-         PY: 3200,
-         loop: !0,
-         NY: {
-           Root: {
-             timeline: [0, .5, 1].map((VV => ({
-               timeFraction: VV,
-               position: {
-                 zY: "catmull-rom-spline",
-                 point: [0, .5 === VV ? .18 : 0, 0]
-               }
-             })))
-           },
-           HeadMesh: {
-             timeline: [0, .25, .75, 1].map((VV => ({
-               timeFraction: VV,
- ... (12 more removed lines; see GitHub link above)
+       var AH, rH;
+       if (null === (AH = null === (rH = HH.extensionsUsed) || void 0 === rH ? void 0 : rH.includes("KHR_draco_mesh_compression")) || void 0 === AH || !AH) return null;
+       for (const QH of null !== (SH = HH.meshes) && void 0 !== SH ? SH : []) {
+         var SH;
+         for (const AH of QH.primitives) {
+           var hH, tH, zH, CH, EH, GH;
+           const rH = null === (hH = AH.extensions) || void 0 === hH ? void 0 : hH.KHR_draco_mesh_compression;
+           if ("object" !== typeof rH || null === rH) continue;
+           const SH = null === (tH = HH.bufferViews) || void 0 === tH ? void 0 : tH[rH.bufferView];
+           if (null === BH || void 0 === SH) return YH;
+           const QH = null !== (zH = SH.byteOffset) && void 0 !== zH ? zH : 0,
+             WH = XH(BH.subarray(QH, QH + SH.byteLength));
+           if (null === WH && !LH) continue;
+           const MH = null !== (CH = HH.accessors) && void 0 !== CH ? CH : [],
+             xH = null === (EH = MH[AH.attributes.POSITION]) || void 0 === EH ? void 0 : EH.count,
+             vH = void 0 === AH.indices ? 0 : null === (GH = MH[AH.indices]) || void 0 === GH ? void 0 : GH.count;
+ ... (2 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L115-L128` → after: `L120-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L120-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/226.js#L120-L121) · [Before (L115-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/226.js#L115-L128)

```diff
-     const pV = yV([0, 0, 0], [0, 0, 0], .07),
-       QV = (0, YV.b)((0, JV.e)(pV), "mobIdle"),
-       nV = yV([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
-       wV = yV([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
-       ZV = (0, YV.b)((0, JV.e)(nV), "gunReady"),
-       vV = (0, YV.b)((0, JV.e)(wV), "gunAimed")
-   },
-   35343: (VV, eV, xV) => {
-     xV.d(eV, {
-       b: () => yV,
-       c: () => YV,
-       g: () => wV
-     });
-     var JV = xV(1656);
+     const YH = "has a Draco stream whose counts don't match its accessors",
+       uH = "has a Draco stream too old to decode: export it again";
```

#### 9. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L132-L134` → after: `L125-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L125-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/226.js#L125-L151) · [Before (L132-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/226.js#L132-L134)

```diff
-       return {
-         ...yV.store,
-         yaw: yV.store.yaw + (null !== (eV = JV.c[VV].previewYaw) && void 0 !== eV ? eV : 0)
+       return null !== (BH = HH.name) && void 0 !== BH ? BH : HH.fromFolderName || HH.id
+     }
+ 
+     function WH(HH, BH, LH) {
+       return `Texture pack "${HH}": model "${BH}" was not loaded because it ${LH}. The default model is used instead.`
+     }
+ 
+     function MH(HH, BH, LH) {
+       let {
+         strictDraco: SH = !1
+       } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
+       const hH = {};
+       for (const [tH, zH] of Object.entries(BH)) {
+         let BH;
+         if (zH.startsWith("data:")) try {
+           const HH = new Uint8Array((0, rH.q)(zH));
+ ... (11 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L153-L155` → after: `L157-L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L157-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/226.js#L157-L161) · [Before (L153-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/226.js#L153-L155)

```diff
-       VV instanceof Promise ? VV.then(eV).catch((VV => {
-         console.error("Couldn't open the preview", VV)
-       })) : eV(VV)
+       const LH = Object.keys(BH);
+       if (0 === LH.length) return null;
+       if (1 === LH.length) return WH(HH, LH[0], BH[LH[0]]);
+       const AH = LH.map((HH => `"${HH}" ${BH[HH]}`)).join("; ");
+       return `Texture pack "${HH}": ${LH.length} models were not loaded (${AH}). The default models are used instead.`
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/227.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/227.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c)

#### 1. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L4-L369` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/227.js#L4) · [Before (L4-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/227.js#L4-L369)

```diff
-   37536: (VV, eV, xV) => {
-     xV.r(eV), xV.d(eV, {
-       default: () => xe
-     });
-     var JV = xV(62);
-     const YV = "newPlayerDeal",
-       UV = 36e5,
-       yV = [4, 12, 20, 20, 30];
-     const pV = 12 * UV;
- 
-     function QV(VV) {
-       return VV - pV
-     }
- 
-     function nV(VV, eV, xV) {
-       const JV = QV(xV);
- ... (350 more removed lines; see GitHub link above)
+   35067: (HH, BH, LH) => {
```

#### 2. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L372` → after: `L7-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L7-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/227.js#L7-L8) · [Before (L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/227.js#L372)

```diff
-       c: () => EV
+       c: () => fH,
+       g: () => IH
```

#### 3. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L374-L474` → after: `L10-L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L10-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/227.js#L10-L248) · [Before (L374-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/227.js#L374-L474)

```diff
-     xV(35362);
-     var JV = xV(62),
-       YV = xV(1146),
-       UV = xV.n(YV),
-       yV = xV(1220),
-       pV = xV(1551),
-       QV = xV(2866),
-       nV = xV(1414),
-       wV = xV(2404),
-       ZV = xV(3454),
-       vV = xV(2437),
-       rV = xV(1321);
- 
-     function kV(VV) {
-       let {
-         endsAt: eV,
- ... (85 more removed lines; see GitHub link above)
+     var AH = LH(35071);
+     const rH = {
+         fileBytes: 4194304,
+         vertices: 65535,
+         indices: 196608,
+         accessorElements: 196608,
+         primitives: 64,
+         nodes: 128,
+         meshes: 64,
+         materials: 8,
+         images: 8,
+         imageSide: 1024
+       },
+       SH = {
+         items: 1024,
+         perFile: 1024,
+ ... (223 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L476-L484` → after: `L250-L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L250-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/227.js#L250-L395) · [Before (L476-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/227.js#L476-L484)

```diff
-           })]
-         }, VV.pack.packageId))), (0, rV.jsx)("div", {
-           className: "NewPlayerDealUnder",
-           children: (0, rV.jsx)("span", {
-             className: "NewPlayerDealLimit",
-             children: nV("newPlayerDeal:limit")
-           })
-         })]
-       })
+           const hB = new Set,
+             tB = HH => {
+               var BH;
+               return !hB.has(HH) && (hB.add(HH), (null !== (BH = pH[HH].children) && void 0 !== BH ? BH : []).every(tB))
+             };
+           for (const AH of null !== (zB = JH[0].nodes) && void 0 !== zB ? zB : []) {
+             var zB;
+             if (!xH(AH, pH.length) || rB.has(AH) || !tB(AH)) return tH
+           }
+           for (const AH of pH) {
+             if (void 0 !== AH.matrix) return "uses node matrices";
+             if (void 0 !== AH.skin) return "uses skins";
+             if (void 0 !== AH.weights) return "uses morph targets";
+             if (void 0 !== AH.mesh && !xH(AH.mesh, yH.length)) return tH;
+             const HH = [
+               [AH.translation, 3],
+ ... (130 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L487` → after: `L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/227.js#L398) · [Before (L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/227.js#L487)

```diff
-   35371: (VV, eV, xV) => {
+   35071: (HH, BH, LH) => {
```

#### 6. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L490` → after: `L401-L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L401-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/227.js#L401-L409) · [Before (L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/227.js#L490)

```diff
-       g: () => MV
+       e: () => YH,
+       g: () => WH,
+       k: () => hH,
+       n: () => SH,
+       p: () => QH,
+       q: () => XH,
+       t: () => GH,
+       v: () => tH,
+       z: () => EH
```

#### 7. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L492-L587` → after: `L411-L472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L411-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/227.js#L411-L472) · [Before (L492-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/227.js#L492-L587)

```diff
-     xV(35362);
-     var JV = xV(3450),
-       YV = xV(1586),
-       UV = xV(2430),
-       yV = xV(3437),
-       pV = xV(3412),
-       QV = xV(3446),
-       nV = xV(3398),
-       wV = xV(1220),
-       ZV = xV(1439),
-       vV = xV(1168),
-       rV = xV(1551),
-       kV = xV(1414),
-       bV = xV(2404),
-       EV = xV(2971),
-       BV = xV(2847),
- ... (80 more removed lines; see GitHub link above)
+     const AH = 1179937895,
+       rH = 1313821514;
+     class SH extends Error {
+       constructor(HH) {
+         super(`GLB refused: it ${HH}`), this.reason = HH, this.name = "GlbRefused"
+       }
+     }
+     class hH extends Error {
+       constructor(HH) {
+         super(HH), this.name = "GlbError"
+       }
+     }
+ 
+     function tH(HH) {
+       return Reflect.get(HH, "scene")
+     }
+ ... (46 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L589-L610` → after: `L474-L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L474-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/227.js#L474-L532) · [Before (L589-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/227.js#L589-L610)

```diff
-         purchaseUnderWay: JV,
-         notice: YV,
-         needsLogin: ZV,
-         buyPack: function(JV, YV) {
-           (0, BV.E)("new_player_deal.buy", (0, qV.c)(JV.arm, VV, YV.pack.packageId)), null === nV ? QV(function(VV) {
-             return {
-               sku: VV.pack.packageId,
-               tier: VV.tier,
-               amount: VV.pack.gems,
-               bonusPercent: 0,
-               package: VV.package
-             }
-           }(YV), null, {
-             followPending: !1
-           }).then((VV => {
-             AV(VV, xV, YV)
- ... (6 more removed lines; see GitHub link above)
+         json: tH,
+         bin: QH,
+         fileBytes: LH.byteLength
+       }
+     }
+ 
+     function XH(HH) {
+       const BH = HH.slice(HH.indexOf(",") + 1),
+         LH = Uint8Array.fromBase64;
+       if (LH) return LH(BH).buffer;
+       const AH = atob(BH),
+         rH = new Uint8Array(AH.length);
+       for (let SH = 0; SH < AH.length; SH++) rH[SH] = AH.charCodeAt(SH);
+       return rH.buffer
+     }
+     async function GH(HH) {
+ ... (43 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/228.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/228.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba)

#### 1. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L4-L7` → after: `L4-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/228.js#L4-L15) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/228.js#L4-L7)

```diff
-   35393: (VV, eV, xV) => {
-     xV.d(eV, {
-       d: () => YV,
-       h: () => UV
+   35079: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       animatedBlockTextures: () => zH,
+       armourAtlasUrl: () => hH,
+       averageColors: () => CH,
+       blockAtlasUrls: () => SH,
+       blockAtlasWidth: () => AH,
+       buildHash: () => XH,
+       builtTextureIndexFingerprint: () => EH,
+       imagesPerAtlas: () => rH,
+       outputHash: () => GH,
+       rotatedBlockTextures: () => tH
```

#### 2. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L9-L438` → after: `L17-L10909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L17-L10909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/228.js#L17-L10909) · [Before (L9-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/228.js#L9-L438)

```diff
-     var JV = xV(3681);
- 
-     function YV() {
-       if ("undefined" === typeof BroadcastChannel) return null;
-       const VV = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
-       try {
-         const eV = new BroadcastChannel(JV.h);
-         eV.postMessage({
-           stored: VV
-         }), eV.close()
-       } catch {
-         return null
-       }
-       return VV
-     }
- 
- ... (414 more removed lines; see GitHub link above)
+     const AH = 8,
+       rH = [256, 256, 256, 256, 256, 256, 114],
+       SH = [LH(35081), LH(35090), LH(35095), LH(35102), LH(35109), LH(35115), LH(35118)],
+       hH = LH(35125),
+       tH = {
+         "alloy_kiln_top[rot[1": LH(35127),
+         "alloy_kiln_top[rot[2": LH(35134),
+         "alloy_kiln_top[rot[3": LH(35138),
+         "alloy_kiln_top[rot[4": LH(35146),
+         "auto_bench_top[rot[1": LH(35155),
+         "auto_bench_top[rot[2": LH(35157),
+         "auto_bench_top[rot[3": LH(35165),
+         "auto_bench_top[rot[4": LH(35170),
+         "belt_tunnel_exit_top[rot[1": LH(35178),
+         "belt_tunnel_exit_top[rot[2": LH(35180),
+         "belt_tunnel_exit_top[rot[3": LH(35184),
+ ... (10877 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/229.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/229.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0)

#### 1. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4-L18` → after: `L5-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L5-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/229.js#L5-L8) · [Before (L4-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/229.js#L4-L18)

```diff
-   35402: (VV, eV, xV) => {
-     xV.r(eV), xV.d(eV, {
-       packDisplayName: () => kV,
-       packModelMessage: () => bV,
-       packModelSummary: () => BV,
-       refusedPackModels: () => EV
-     });
-     var JV = xV(35408),
-       YV = xV(35415);
-     const UV = "DRACO",
-       yV = 0,
-       pV = 1,
-       QV = 0,
-       nV = 1,
-       wV = 32768;
+   40708: (HH, BH, LH) => {
+     function AH() {
+       return "object" === typeof process && "object" === typeof process.versions && "undefined" !== typeof process.versions.node
+     }
```

#### 2. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L21-L90` → after: `L11-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L11-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/229.js#L11-L35) · [Before (L21-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/229.js#L21-L90)

```diff
-       const eV = new DataView(VV.buffer, VV.byteOffset, VV.byteLength);
-       let xV = 0;
-       const JV = () => {
-           if (xV >= VV.byteLength) throw new RangeError("past the stream");
-           return VV[xV++]
-         },
-         YV = () => {
-           if (xV + 4 > VV.byteLength) throw new RangeError("past the stream");
-           const JV = eV.getUint32(xV, !0);
-           return xV += 4, JV
-         },
-         ZV = () => {
-           let VV = 0;
-           for (let eV = 0; eV < 35; eV += 7) {
-             const xV = JV();
-             if (VV += (127 & xV) * 2 ** eV, 0 === (128 & xV)) return VV
- ... (54 more removed lines; see GitHub link above)
+       return HH instanceof Uint8Array && (!AH() || !Buffer.isBuffer(HH))
+     }
+ 
+     function SH(HH) {
+       return HH instanceof ArrayBuffer
+     }
+ 
+     function hH(HH) {
+       return !!AH() && Buffer.isBuffer(HH)
+     }
+     var tH = LH(40712).d,
+       zH = LH(40716).d,
+       CH = "Argument compressed must be type of ArrayBuffer, Buffer, or Uint8Array";
+     BH.c = function(HH) {
+       if (!rH(HH) && !SH(HH) && !hH(HH)) throw new TypeError(CH);
+       var BH = !1,
+ ... (9 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L95-L116` → after: `L52-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L52-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/229.js#L52-L106) · [Before (L95-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/229.js#L95-L116)

```diff
-       var JV, YV;
-       if (null === (JV = null === (YV = VV.extensionsUsed) || void 0 === YV ? void 0 : YV.includes("KHR_draco_mesh_compression")) || void 0 === JV || !JV) return null;
-       for (const kV of null !== (UV = VV.meshes) && void 0 !== UV ? UV : []) {
-         var UV;
-         for (const JV of kV.primitives) {
-           var yV, pV, QV, nV, wV, vV;
-           const YV = null === (yV = JV.extensions) || void 0 === yV ? void 0 : yV.KHR_draco_mesh_compression;
-           if ("object" !== typeof YV || null === YV) continue;
-           const UV = null === (pV = VV.bufferViews) || void 0 === pV ? void 0 : pV[YV.bufferView];
-           if (null === eV || void 0 === UV) return rV;
-           const kV = null !== (QV = UV.byteOffset) && void 0 !== QV ? QV : 0,
-             bV = ZV(eV.subarray(kV, kV + UV.byteLength));
-           if (null === bV && !xV) continue;
-           const EV = null !== (nV = VV.accessors) && void 0 !== nV ? nV : [],
-             BV = null === (wV = EV[JV.attributes.POSITION]) || void 0 === wV ? void 0 : wV.count,
-             jV = void 0 === JV.indices ? 0 : null === (vV = EV[JV.indices]) || void 0 === vV ? void 0 : vV.count;
- ... (6 more removed lines; see GitHub link above)
+       return HH[BH] === HH[LH] && HH[BH + 1] === HH[LH + 1] && HH[BH + 2] === HH[LH + 2] && HH[BH + 3] === HH[LH + 3]
+     }
+ 
+     function hH(HH, BH, LH, AH, rH) {
+       return LH <= 60 ? (AH[rH] = LH - 1 << 2, rH += 1) : LH < 256 ? (AH[rH] = 240, AH[rH + 1] = LH - 1, rH += 2) : (AH[rH] = 244, AH[rH + 1] = LH - 1 & 255, AH[rH + 2] = LH - 1 >>> 8, rH += 3),
+         function(HH, BH, LH, AH, rH) {
+           var SH;
+           for (SH = 0; SH < rH; SH++) LH[AH + SH] = HH[BH + SH]
+         }(HH, BH, AH, rH, LH), rH + LH
+     }
+ 
+     function tH(HH, BH, LH, AH) {
+       return AH < 12 && LH < 2048 ? (HH[BH] = 1 + (AH - 4 << 2) + (LH >>> 8 << 5), HH[BH + 1] = 255 & LH, BH + 2) : (HH[BH] = 2 + (AH - 1 << 2), HH[BH + 1] = 255 & LH, HH[BH + 2] = LH >>> 8, BH + 3)
+     }
+ 
+     function zH(HH, BH, LH, AH) {
+ ... (39 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L120` → after: `L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/229.js#L133) · [Before (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/229.js#L120)

```diff
-       return null !== (eV = VV.name) && void 0 !== eV ? eV : VV.fromFolderName || VV.id
+       for (SH = 0; SH < rH; SH++) LH[AH + SH] = HH[BH + SH]
```

#### 5. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L123-L124` → after: `L136-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L136-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/229.js#L136-L138) · [Before (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/229.js#L123-L124)

```diff
-     function bV(VV, eV, xV) {
-       return `Texture pack "${VV}": model "${eV}" was not loaded because it ${xV}. The default model is used instead.`
+     function rH(HH, BH, LH, AH) {
+       var rH;
+       for (rH = 0; rH < AH; rH++) HH[BH + rH] = HH[BH - LH + rH]
```

#### 6. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L127-L132` → after: `L141-L1356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L141-L1356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/229.js#L141-L1356) · [Before (L127-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/229.js#L127-L132)

```diff
-     function EV(VV, eV, xV) {
-       let {
-         strictDraco: UV = !1
-       } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
-       const yV = {};
-       for (const [pV, QV] of Object.entries(eV)) {
+     function SH(HH) {
+       this.array = HH, this.pos = 0
+     }
+     SH.prototype.readUncompressedLength = function() {
+       for (var HH, BH, LH = 0, AH = 0; AH < 32 && this.pos < this.array.length;) {
+         if (HH = this.array[this.pos], this.pos += 1, (BH = 127 & HH) << AH >>> AH !== BH) return -1;
+         if (LH |= BH << AH, HH < 128) return LH;
+         AH += 7
+       }
+       return -1
+     }, SH.prototype.uncompressToBuffer = function(HH) {
+       for (var BH, SH, hH, tH, zH = this.array, CH = zH.length, EH = this.pos, XH = 0; EH < zH.length;)
+         if (BH = zH[EH], EH += 1, 0 === (3 & BH)) {
+           if ((SH = 1 + (BH >>> 2)) > 60) {
+             if (EH + 3 >= CH) return !1;
+             hH = SH - 60, SH = 1 + ((SH = zH[EH] + (zH[EH + 1] << 8) + (zH[EH + 2] << 16) + (zH[EH + 3] << 24)) & LH[hH]), EH += hH
+ ... (1200 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L134-L141` → after: `L1358-L1386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R1358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L1358-L1386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/229.js#L1358-L1386) · [Before (L134-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/229.js#L134-L141)

```diff
-         if (QV.startsWith("data:")) try {
-           const VV = new Uint8Array((0, YV.o)(QV));
-           if (eV = (0, JV.d)(VV), null === eV) {
-             const {
-               json: xV,
-               bin: JV
-             } = (0, YV.v)(VV);
-             eV = vV(xV, JV, UV)
+         return AH = 0 === LH ? 1 : 1 === LH || 2 === LH ? 2 : 63 & HH[1], {
+           durationInSamples: ZH[BH] * AH
+         }
+       },
+       aH = HH => {
+         if (HH.length < 7) throw new Error("Setup header is too short.");
+         if (5 !== HH[0]) throw new Error("Wrong packet type in Setup header.");
+         if ("vorbis" !== String.fromCharCode(...HH.slice(1, 7))) throw new Error("Invalid packet signature in Setup header.");
+         const BH = HH.length,
+           LH = new Uint8Array(BH);
+         for (let EH = 0; EH < BH; EH++) LH[EH] = HH[BH - 1 - EH];
+         const AH = new EH.e(LH);
+         let rH = 0;
+         for (; AH.getBitsLeft() > 97;)
+           if (1 === AH.readBits(1)) {
+             rH = AH.pos;
+ ... (13 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L143-L146` → after: `L1388-L2681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R1388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L1388-L2681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/229.js#L1388-L2681) · [Before (L143-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/229.js#L143-L146)

```diff
-         } catch {
-           eV = "is not a binary glTF 2.0 file"
-         } else eV = "loads data from outside the file";
-         eV && (yV[pV] = eV, xV && console.warn(bV(VV, pV, eV)))
+           if (AH.skipBits(1), SH++, SH > 64) break;
+           AH.clone().readBits(6) + 1 === SH && (hH = !0, tH = SH)
+         }
+         if (!hH) throw new Error("Invalid Setup header: mode header not found.");
+         if (tH > 63) throw new Error(`Unsupported mode count: ${tH}.`);
+         const zH = tH;
+         AH.pos = 0, AH.skipBits(rH);
+         const CH = Array(zH).fill(0);
+         for (let EH = zH - 1; EH >= 0; EH--) AH.skipBits(40), CH[EH] = AH.readBits(1);
+         return {
+           modeBlockflags: CH
+         }
+       },
+       sH = (HH, BH, LH) => {
+         switch (HH) {
+           case "avc":
+ ... (1278 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L150-L156` → after: `L2684-L8303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R2684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L2684-L8303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/229.js#L2684-L8303) · [Before (L150-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/229.js#L150-L156)

```diff
- 
-     function BV(VV, eV) {
-       const xV = Object.keys(eV);
-       if (0 === xV.length) return null;
-       if (1 === xV.length) return bV(VV, xV[0], eV[xV[0]]);
-       const JV = xV.map((VV => `"${VV}" ${eV[VV]}`)).join("; ");
-       return `Texture pack "${VV}": ${xV.length} models were not loaded (${JV}). The default models are used instead.`
+     const YH = {
+         "very-low": 0,
+         low: .25,
+         medium: .5,
+         high: .75,
+         "very-high": 1
+       },
+       uH = {
+         avc: {
+           min: 0,
+           max: 51,
+           worst: 41,
+           best: 16
+         },
+         hevc: {
+           min: 0,
+ ... (5604 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/230.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/230.js` (36 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26)

#### 1. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L4-L8` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/230.js#L4-L7) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/230.js#L4-L8)

```diff
-   35408: (VV, eV, xV) => {
-     xV.d(eV, {
-       d: () => RV,
-       h: () => WV,
-       l: () => GV
+   44985: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       loadGlbAsset: () => bB,
+       loadGlbTree: () => OB
```

#### 2. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L10-L67` → after: `L9-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/230.js#L9-L11) · [Before (L10-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/230.js#L10-L67)

```diff
-     var JV = xV(35415);
-     const YV = {
-         fileBytes: 4194304,
-         vertices: 65535,
-         indices: 196608,
-         accessorElements: 196608,
-         primitives: 64,
-         nodes: 128,
-         meshes: 64,
-         materials: 8,
-         images: 8,
-         imageSide: 1024
-       },
-       UV = {
-         items: 1024,
-         perFile: 1024,
- ... (42 more removed lines; see GitHub link above)
+     var AH = LH(38790),
+       rH = LH(120),
+       SH = LH(1139);
```

#### 3. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L70` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/230.js#L14) · [Before (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/230.js#L70)

```diff
-       return VV.toLocaleString("en-US")
+       return (0, rH.isDiscordClient)() ? `https://${SH.e.discordDomain}/${HH.href}` : HH.href
```

#### 4. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L73-L74` → after: `L23-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/230.js#L23-L24) · [Before (L73-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/230.js#L73-L74)

```diff
-     function BV(VV, eV, xV) {
-       return VV > eV ? `has ${EV(VV)} ${xV} (the limit is ${EV(eV)})` : null
+     function EH() {
+       return CH()('(()=>{class HH extends Error{}function BH(BH,LH){const AH=BH._malloc(LH);if(0===AH)throw new HH(`Draco: the decoder\'s heap refused ${LH} bytes`);return AH}function LH(LH,AH,rH,SH){let hH=null,tH=null,zH=null;try{hH=new LH.Decoder,tH=new LH.DecoderBuffer,tH.Ini … [truncated]
```

#### 5. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L77-L78` → after: `L43-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L43-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/230.js#L43-L74) · [Before (L77-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/230.js#L77-L78)

```diff
-     function jV(VV, eV) {
-       return Number.isInteger(VV) && VV >= 0 && VV < (null !== eV && void 0 !== eV ? eV : 0)
+     function VH() {
+       if (!WH) return Promise.reject(new Error("Draco: configureDracoPool was not called"));
+       const {
+         scriptUrl: HH,
+         wasmBinaryUrl: BH
+       } = WH;
+       return MH ??= fetch(BH).then((HH => {
+         if (!HH.ok) throw new Error(`Draco: fetching ${BH} failed: ${HH.status}`);
+         return HH.arrayBuffer()
+       })), MH.catch((() => {
+         MH = null
+       })), TH.workersStarted++, Promise.all([MH, (0, YH.l)()]).then((BH => {
+         let [LH] = BH;
+         return new Promise(((BH, AH) => {
+           const rH = new EH;
+           rH.onerror = HH => {
+ ... (16 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L82` → after: `L78-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L78-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/230.js#L78-L80) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/230.js#L82)

```diff
-       return Number.isInteger(VV) && VV >= 0
+       const BH = xH.indexOf(HH); - 1 !== BH && xH.splice(BH, 1);
+       const LH = vH.shift();
+       LH && kH(LH)
```

#### 7. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L86-L111` → after: `L84-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L84-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/230.js#L84-L119) · [Before (L86-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/230.js#L86-L111)

```diff
-       return void 0 !== VV && (!Array.isArray(VV) || VV.length > eV)
-     }
- 
-     function FV(VV, eV) {
-       return "object" === typeof VV && null !== VV && Object.keys(VV).length > eV
-     }
- 
-     function TV(VV) {
-       var eV;
-       return `${VV.normalized?"normalized ":""}${null!==(eV=JV.d[VV.componentType])&&void 0!==eV?eV:VV.componentType} ${VV.type}`
-     }
- 
-     function PV(VV) {
-       const eV = eV => {
-         var xV;
-         return null !== (xV = VV[eV]) && void 0 !== xV ? xV : -1
- ... (10 more removed lines; see GitHub link above)
+       HH.busy = !0, HH.releaseTimer && (clearTimeout(HH.releaseTimer), HH.releaseTimer = null);
+       HH.worker.then((LH => {
+         const AH = PH++;
+         LH.onmessage = rH => {
+           let {
+             data: SH
+           } = rH;
+           if (("decoded" === SH.id || "decodeError" === SH.id) && SH.seq === AH) {
+             if (LH.onmessage = null, LH.onerror = null, "decoded" === SH.id) return TH.decodes++, BH.resolve({
+               indices: SH.indices,
+               attributes: SH.attributes,
+               totalVertices: SH.totalVertices
+             }), void(() => {
+               const BH = vH.shift();
+               BH ? bH(HH, BH) : (HH.busy = !1, HH.releaseTimer = setTimeout((() => {
+                 const BH = xH.indexOf(HH); - 1 !== BH && xH.splice(BH, 1), HH.worker.then((HH => {
+ ... (20 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L115-L116` → after: `L123-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L123-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/230.js#L123-L138) · [Before (L115-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/230.js#L115-L116)

```diff
-       const eV = VV.byteStride;
-       return void 0 === eV || Number.isInteger(eV) && eV >= 4 && eV <= 252 && eV % 4 === 0
+       const BH = xH.find((HH => !HH.busy));
+       if (BH) bH(BH, HH);
+       else {
+         if (UH ??= (0, GH.e)() ? 1 : function(HH, BH) {
+             const LH = HH ? Math.max(1, Math.min(Math.floor(.5 * HH), 4)) : 1;
+             return BH ? Math.min(LH, uH) : LH
+           }("object" === typeof navigator ? navigator.hardwareConcurrency : void 0, (0, XH.isMobile)()), xH.length < UH) {
+           const BH = {
+             worker: VH(),
+             busy: !0,
+             releaseTimer: null
+           };
+           return xH.push(BH), TH.mostWorkers = Math.max(TH.mostWorkers, xH.length), void bH(BH, HH)
+         }
+         vH.push(HH)
+       }
```

#### 9. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L120-L139` → after: `L142-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L142-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/230.js#L142-L150) · [Before (L120-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/230.js#L120-L139)

```diff
-       var JV, YV;
-       const UV = null === (JV = VV.bufferViews) || void 0 === JV ? void 0 : JV[xV];
-       if (!UV || !eV || 0 !== UV.buffer) return null;
-       const yV = null !== (YV = UV.byteOffset) && void 0 !== YV ? YV : 0;
-       return !qV(yV) || !qV(UV.byteLength) || yV + UV.byteLength > eV.byteLength ? null : eV.subarray(yV, yV + UV.byteLength)
-     }
- 
-     function zV(VV, eV) {
-       var xV, YV, UV;
-       const yV = JV.l[eV.type],
-         pV = JV.b[eV.componentType];
-       if (!yV || !pV || !Number.isInteger(eV.count) || eV.count < 0) return !1;
-       if (void 0 === eV.bufferView) return !0;
-       const QV = null === (xV = VV.bufferViews) || void 0 === xV ? void 0 : xV[eV.bufferView],
-         nV = null !== (YV = eV.byteOffset) && void 0 !== YV ? YV : 0;
-       if (!QV || !qV(nV) || nV % pV !== 0) return !1;
- ... (4 more removed lines; see GitHub link above)
+       return new Promise(((AH, rH) => {
+         kH({
+           data: new Int8Array(HH.buffer, HH.byteOffset, HH.byteLength).slice(),
+           attributeIds: BH,
+           expected: LH,
+           resolve: AH,
+           reject: rH
+         })
+       }))
```

#### 10. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L143-L146` → after: `L165-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L165-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/230.js#L165-L171) · [Before (L143-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/230.js#L143-L146)

```diff
-       return VV > YV.fileBytes ? `is ${(VV/yV).toFixed(1)} MiB (the limit is ${YV.fileBytes/yV} MiB)` : null
-     }
- 
-     function WV(VV, eV) {
+       const BH = (0, lH.g)(HH.byteLength);
+       if (BH) throw new fH.n(BH);
+       const {
+         json: LH,
+         bin: AH
+       } = (0, fH.z)(HH), rH = (0, lH.c)(LH, AH);
+       if (rH) throw new fH.n(rH);
```

#### 11. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L149-L180` → after: `L174-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L174-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/230.js#L174-L186) · [Before (L149-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/230.js#L149-L180)

```diff
-           var xV, yV, ZV, EV, qV, GV, WV, RV, gV, DV, iV, CV, aV, oV, cV, hV, lV;
-           const LV = Array.isArray(VV.extensionsUsed) && VV.extensionsUsed.includes("KHR_draco_mesh_compression");
-           if (function(VV, eV) {
-               var xV, JV;
-               const {
-                 items: YV,
-                 perFile: yV,
-                 surfaces: pV,
-                 few: QV,
-                 bounds: nV,
-                 attributeMembers: wV
-               } = UV;
-               if (tV(VV.extensionsRequired, QV) || tV(VV.animations, 1 / 0) || tV(VV.skins, 1 / 0)) return !0;
-               if (null !== (xV = VV.animations) && void 0 !== xV && xV.length || null !== (JV = VV.skins) && void 0 !== JV && JV.length) return !1;
-               if ([
-                   [VV.buffers, QV],
- ... (16 more removed lines; see GitHub link above)
+           var LH, AH, rH, SH, hH, tH, zH, CH, EH, XH, GH, YH, uH, QH, WH;
+           const MH = new Map,
+             xH = LH => {
+               let AH = MH.get(LH);
+               if (!AH) {
+                 var rH;
+                 const SH = HH.bufferViews[LH],
+                   hH = null !== (rH = SH.byteOffset) && void 0 !== rH ? rH : 0;
+                 AH = {
+                   index: LH,
+                   bytes: BH.subarray(hH, hH + SH.byteLength),
+                   byteStride: SH.byteStride
+                 }, MH.set(LH, AH)
```

#### 12. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L182` → after: `L188-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L188-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/230.js#L188-L193) · [Before (L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/230.js#L182)

```diff
-               for (const UV of null !== (kV = VV.scenes) && void 0 !== kV ? kV : []) {
+               return AH
+             },
+             vH = new Map,
+             PH = BH => {
+               let LH = vH.get(BH);
+               if (!LH) {
```

#### 13. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L184` → after: `L195-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L195-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/230.js#L195-L207) · [Before (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/230.js#L184)

```diff
-                 if (tV(UV.nodes, YV)) return !0
+                 const rH = HH.accessors[BH];
+                 LH = {
+                   index: BH,
+                   count: rH.count,
+                   type: rH.type,
+                   numComponents: fH.p[rH.type],
+                   componentType: rH.componentType,
+                   normalized: null !== (AH = rH.normalized) && void 0 !== AH && AH,
+                   byteOffset: rH.byteOffset,
+                   bufferView: void 0 === rH.bufferView ? null : xH(rH.bufferView),
+                   min: rH.min,
+                   max: rH.max
+                 }, vH.set(BH, LH)
```

#### 14. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L186-L187` → after: `L209-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L209-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/230.js#L209-L213) · [Before (L186-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/230.js#L186-L187)

```diff
-               let bV = 0;
-               for (const UV of null !== (EV = VV.nodes) && void 0 !== EV ? EV : []) {
+               return LH
+             },
+             TH = null !== (LH = null === (AH = HH.extensionsUsed) || void 0 === AH ? void 0 : AH.includes("KHR_draco_mesh_compression")) && void 0 !== LH && LH,
+             UH = (null !== (rH = HH.meshes) && void 0 !== rH ? rH : []).map(((BH, LH) => {
+               const AH = BH.primitives.map(((BH, LH) => {
```

#### 15. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L189-L201` → after: `L215-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L215-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/230.js#L215-L254) · [Before (L189-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/230.js#L189-L201)

```diff
-                 if (tV(UV.children, yV)) return !0;
-                 bV += null !== (BV = null === (jV = UV.children) || void 0 === jV ? void 0 : jV.length) && void 0 !== BV ? BV : 0
-               }
-               if (bV > yV) return !0;
-               let qV = 0;
-               for (const UV of null !== (TV = VV.meshes) && void 0 !== TV ? TV : []) {
-                 var TV;
-                 if (!Array.isArray(UV.primitives)) return !0;
-                 if (qV += UV.primitives.length, qV > yV) return !0;
-                 for (const VV of UV.primitives) {
-                   var PV;
-                   const xV = eV ? null === (PV = VV.extensions) || void 0 === PV ? void 0 : PV.KHR_draco_mesh_compression : void 0;
-                   if (FV(VV.attributes, wV) || FV(null === xV || void 0 === xV ? void 0 : xV.attributes, wV)) return !0
+                 const hH = TH ? null === (AH = BH.extensions) || void 0 === AH ? void 0 : AH.KHR_draco_mesh_compression : void 0;
+                 let tH = null;
+                 const zH = [];
+                 if (hH) {
+                   const LH = {
+                     vertices: HH.accessors[BH.attributes.POSITION].count,
+                     indices: void 0 === BH.indices ? 0 : HH.accessors[BH.indices].count,
+                     components: {}
+                   };
+                   tH = {
+                     bufferView: xH(hH.bufferView),
+                     attributeIds: {},
+                     normalized: {},
+                     expected: LH
+                   };
+                   for (const [AH, rH] of fH.g) {
+ ... (24 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L204-L279` → after: `L263-L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L263-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/230.js#L263-L264) · [Before (L204-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/230.js#L204-L279)

```diff
-               return !1
-             }(VV, LV)) return pV;
-           const fV = null === (xV = VV.asset) || void 0 === xV ? void 0 : xV.version;
-           if ("string" !== typeof fV || !/^2\.\d+/.test(fV)) return `uses glTF version ${null!==fV&&void 0!==fV?fV:"(none)"}`;
-           const mV = null === (yV = VV.asset) || void 0 === yV ? void 0 : yV.minVersion;
-           if (void 0 !== mV && "2.0" !== mV) return `uses glTF version ${mV}`;
-           for (const JV of null !== (KV = VV.extensionsRequired) && void 0 !== KV ? KV : []) {
-             var KV;
-             if (!nV.has(JV)) return `requires the glTF extension ${JV}`
-           }
-           if (null !== (ZV = VV.animations) && void 0 !== ZV && ZV.length) return "has animations";
-           if (null !== (EV = VV.skins) && void 0 !== EV && EV.length) return "uses skins";
-           const HV = null !== (qV = VV.buffers) && void 0 !== qV ? qV : [];
-           for (const [JV, YV] of HV.entries()) {
-             if (void 0 !== YV.uri) return QV;
-             if (JV > 0 || !eV) return pV
- ... (60 more removed lines; see GitHub link above)
+             })),
+             VH = (null !== (SH = HH.nodes) && void 0 !== SH ? SH : []).map(((HH, BH) => {
```

#### 17. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L281-L289` → after: `L266-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L266-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/230.js#L266-L275) · [Before (L281-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/230.js#L281-L289)

```diff
-               const YV = null !== (re = xV.mode) && void 0 !== re ? re : 4;
-               var be;
-               if (4 !== YV && 0 !== YV) return `uses ${null!==(be=kV[YV])&&void 0!==be?be:`mode ${YV}`} primitives`;
-               if (void 0 !== xV.targets) return "uses morph targets";
-               if (void 0 !== xV.material && !jV(xV.material, Ve.length)) return pV;
-               const UV = LV ? null === (ke = xV.extensions) || void 0 === ke ? void 0 : ke.KHR_draco_mesh_compression : void 0;
-               if (UV) {
-                 if (4 !== YV) return "uses Draco-compressed points";
-                 if (!MV(VV, eV, UV.bufferView) || "object" !== typeof UV.attributes) return pV
+               return {
+                 index: BH,
+                 name: HH.name,
+                 children: null !== (LH = HH.children) && void 0 !== LH ? LH : [],
+                 mesh: null !== (AH = HH.mesh) && void 0 !== AH ? AH : null,
+                 translation: HH.translation,
+                 rotation: HH.rotation,
+                 scale: HH.scale,
+                 hasCamera: void 0 !== HH.camera,
+                 extras: HH.extras
```

#### 18. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L291-L321` → after: `L277-L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L277-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/230.js#L277-L301) · [Before (L291-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/230.js#L291-L321)

```diff
-               const yV = xV.attributes;
-               if ("object" !== typeof yV || null === yV) return pV;
-               if (void 0 === yV.POSITION) return "has a primitive with no positions";
-               if (!jV(yV.POSITION, sV.length)) return pV;
-               const QV = sV[yV.POSITION].count;
-               for (const [VV, eV] of Object.entries(yV)) {
-                 if (!jV(eV, sV.length)) return pV;
-                 if (/^(JOINTS|WEIGHTS)_\d+$/.test(VV)) return "uses skins";
-                 const xV = sV[eV],
-                   JV = wV[VV];
-                 if (JV && (xV.componentType !== bV || xV.normalized || xV.type !== JV)) return `stores ${VV} as ${TV(xV)}`;
-                 const YV = vV[VV];
-                 if (YV && (xV.type !== YV.type || !YV.componentTypes.includes(xV.componentType) || xV.componentType === bV === !!xV.normalized)) return `stores ${VV} as ${TV(xV)}`;
-                 if (rV.has(VV) && xV.count !== QV) return "has vertex attributes of different lengths"
-               }
-               if (UV) {
- ... (15 more removed lines; see GitHub link above)
+             })),
+             OH = null !== (hH = null === (tH = HH.extensionsUsed) || void 0 === tH ? void 0 : tH.includes("KHR_materials_unlit")) && void 0 !== hH && hH,
+             bH = null !== (zH = null === (CH = HH.extensionsUsed) || void 0 === CH ? void 0 : CH.includes("KHR_texture_transform")) && void 0 !== zH && zH,
+             kH = (null !== (EH = HH.materials) && void 0 !== EH ? EH : []).map(((HH, BH) => {
+               var LH, AH, rH, SH;
+               const hH = HH.pbrMetallicRoughness,
+                 tH = null === hH || void 0 === hH ? void 0 : hH.baseColorTexture;
+               return {
+                 index: BH,
+                 name: HH.name,
+                 extras: HH.extras,
+                 unlit: OH && void 0 !== (null === (LH = HH.extensions) || void 0 === LH ? void 0 : LH.KHR_materials_unlit),
+                 pbr: hH ? {
+                   baseColorFactor: hH.baseColorFactor,
+                   metallicFactor: hH.metallicFactor,
+                   roughnessFactor: hH.roughnessFactor
+ ... (9 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L323-L332` → after: `L303-L319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L303-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/230.js#L303-L319) · [Before (L323-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/230.js#L323-L332)

```diff
-               let nV = QV;
-               if (void 0 !== xV.indices) {
-                 if (!jV(xV.indices, sV.length)) return pV;
-                 const VV = sV[xV.indices];
-                 if ("SCALAR" !== VV.type) return pV;
-                 if (5121 === VV.componentType) return "uses 8-bit indices";
-                 var Ee;
-                 if (5123 !== VV.componentType && 5125 !== VV.componentType) return `stores indices as ${null!==(Ee=JV.d[VV.componentType])&&void 0!==Ee?Ee:VV.componentType}`;
-                 if (!UV && void 0 === VV.bufferView) return pV;
-                 nV = VV.count
+             })),
+             mH = (null !== (XH = HH.textures) && void 0 !== XH ? XH : []).map(((BH, LH) => {
+               var AH, rH;
+               const SH = void 0 === BH.sampler ? KH : {
+                 index: BH.sampler,
+                 ...null === (AH = HH.samplers) || void 0 === AH ? void 0 : AH[BH.sampler]
+               };
+               return {
+                 index: LH,
+                 sampler: {
+                   index: SH.index,
+                   magFilter: SH.magFilter,
+                   minFilter: SH.minFilter,
+                   wrapS: SH.wrapS,
+                   wrapT: SH.wrapT
+                 },
+ ... (1 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L334-L335` → after: `L321-L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L321-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/230.js#L321-L336) · [Before (L334-L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/230.js#L334-L335)

```diff
-               if (4 === YV && nV % 3 !== 0) return pV
-             }
+             })),
+             oH = (null !== (GH = HH.images) && void 0 !== GH ? GH : []).map(((HH, BH) => ({
+               index: BH,
+               name: HH.name,
+               mimeType: HH.mimeType,
+               bufferView: xH(HH.bufferView)
+             }))),
+             IH = null !== (YH = (0, fH.v)(HH)) && void 0 !== YH ? YH : 0;
+           return {
+             json: HH,
+             rootNodes: null !== (uH = null === (QH = HH.scenes) || void 0 === QH || null === (WH = QH[IH]) || void 0 === WH ? void 0 : WH.nodes) && void 0 !== uH ? uH : [],
+             nodes: VH,
+             meshes: UH,
+             materials: kH,
+             textures: mH,
+             images: oH
```

#### 21. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L378-L379` → after: `L339-L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L339-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/230.js#L339-L340) · [Before (L378-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/230.js#L378-L379)

```diff
-       } catch {
-         return pV
+       } catch (SH) {
+         throw SH instanceof fH.k ? SH : new fH.k(`reading the GLB failed: ${SH instanceof Error?SH.message:String(SH)}`)
```

#### 22. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L382-L385` → after: `L343-L347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L343-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/230.js#L343-L347) · [Before (L382-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/230.js#L382-L385)

```diff
- 
-     function RV(VV) {
-       const eV = GV(VV.byteLength);
-       if (eV) return eV;
+     async function eH(HH, BH) {
+       var LH, AH;
+       const rH = HH.draco;
+       if (!rH) throw new fH.k("not a Draco primitive");
+       let SH;
```

#### 23. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L387-L391` → after: `L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/230.js#L349) · [Before (L387-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/230.js#L387-L391)

```diff
-         const {
-           json: eV,
-           bin: xV
-         } = (0, JV.v)(VV);
-         return WV(eV, xV)
+         SH = await BH(rH.bufferView.bytes, rH.attributeIds, rH.expected)
```

#### 24. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L393-L394` → after: `L351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/230.js#L351) · [Before (L393-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/230.js#L393-L394)

```diff
-         if (xV instanceof JV.h) return xV.reason;
-         throw xV
+         throw new fH.k(`Draco decoding failed: ${CH instanceof Error?CH.message:String(CH)}`)
```

#### 25. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L396-L414` → after: `L353-L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L353-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/230.js#L353-L361) · [Before (L396-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/230.js#L396-L414)

```diff
-     }
-   },
-   35415: (VV, eV, xV) => {
-     xV.d(eV, {
-       b: () => rV,
-       d: () => vV,
-       f: () => bV,
-       g: () => UV,
-       h: () => YV,
-       l: () => kV,
-       o: () => wV,
-       r: () => ZV,
-       u: () => yV,
-       v: () => nV
-     });
-     var JV = xV(35419);
- ... (3 more removed lines; see GitHub link above)
+       const {
+         vertices: hH,
+         indices: tH,
+         components: zH
+       } = rH.expected;
+       if (SH.totalVertices !== hH || (null !== (LH = null === (AH = SH.indices) || void 0 === AH ? void 0 : AH.length) && void 0 !== LH ? LH : 0) !== tH || SH.attributes.some((HH => HH.size !== zH[HH.kind] || HH.data.length !== hH * HH.size))) throw new fH.k("Draco decoding gave  … [truncated]
+       for (const EH of SH.attributes) {
+         const HH = rH.normalized[EH.kind];
+         void 0 !== HH && (EH.normalized = HH)
```

#### 26. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L417-L420` → after: `L365-L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L365-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/230.js#L365-L370) · [Before (L417-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/230.js#L417-L420)

```diff
-     class UV extends Error {
-       constructor(VV) {
-         super(VV), this.name = "GlbError"
-       }
+     const qH = new WeakMap;
+ 
+     function gH(HH, BH) {
+       var LH;
+       const AH = null !== (LH = qH.get(HH)) && void 0 !== LH ? LH : BH(HH);
+       return qH.set(HH, AH), AH
```

#### 27. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L424` → after: `L374-L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L374-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/230.js#L374-L390) · [Before (L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/230.js#L424)

```diff
-       return Reflect.get(VV, "scene")
+       const BH = HH.bufferView,
+         LH = 5125 === HH.componentType ? Uint32Array : Uint16Array,
+         AH = BH.bytes.buffer,
+         rH = BH.bytes.byteOffset + (HH.byteOffset || 0);
+       return rH % LH.BYTES_PER_ELEMENT !== 0 ? new LH(AH.slice(rH, rH + HH.count * LH.BYTES_PER_ELEMENT), 0) : new LH(AH, rH, HH.count)
+     }
+ 
+     function RH(HH, BH) {
+       if (HH.min && HH.max) return [new Float64Array(HH.min), new Float64Array(HH.max)];
+       const LH = BH.find((HH => {
+           let {
+             kind: BH
+           } = HH;
+           return "position" === BH
+         })),
+         AH = LH ? (0, IH.l)(LH, HH.count) : new Float32Array(0);
+ ... (1 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L430-L459` → after: `L394-L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L394-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/230.js#L394-L453) · [Before (L430-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/230.js#L430-L459)

```diff
-       var eV;
-       const xV = VV instanceof Uint8Array ? VV : new Uint8Array(VV),
-         UV = (0, JV.d)(xV);
-       if (null === UV) throw new YV(QV);
-       const yV = UV.json,
-         {
-           jsonEnd: nV,
-           length: wV
-         } = UV,
-         ZV = new DataView(xV.buffer, xV.byteOffset, xV.byteLength);
-       let vV = -1,
-         rV = 0;
-       for (let EV = nV; EV < wV;) {
-         if (EV + 8 > wV) throw new YV(QV);
-         const VV = ZV.getUint32(EV, !0),
-           eV = ZV.getUint32(EV + 4, !0);
- ... (14 more removed lines; see GitHub link above)
+       const BH = HH.attributes.map((HH => {
+           var BH, LH;
+           let {
+             kind: AH,
+             accessor: rH
+           } = HH;
+           const {
+             bufferView: SH,
+             numComponents: hH
+           } = rH;
+           if (!SH) {
+             return {
+               kind: AH,
+               data: gH(rH, (() => new Float32Array(hH * rH.count))),
+               offset: 0,
+               stride: 4 * hH,
+ ... (44 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L463-L475` → after: `L457-L467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L457-L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/230.js#L457-L467) · [Before (L463-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/230.js#L463-L475)

```diff
-       const eV = VV.slice(VV.indexOf(",") + 1),
-         xV = Uint8Array.fromBase64;
-       if (xV) return xV(eV).buffer;
-       const JV = atob(eV),
-         YV = new Uint8Array(JV.length);
-       for (let UV = 0; UV < JV.length; UV++) YV[UV] = JV.charCodeAt(UV);
-       return YV.buffer
-     }
-     async function ZV(VV) {
-       if (VV.startsWith("data:")) return wV(VV);
-       const eV = await fetch(VV);
-       if (!eV.ok) throw new UV(`fetching ${VV} failed: ${eV.status} ${eV.statusText}`);
-       return await eV.arrayBuffer()
+       const BH = HH.lastIndexOf("/");
+       return BH < 0 ? HH : HH.substring(BH + 1)
+     }
+ 
+     function wH(HH) {
+       const BH = HH.lastIndexOf("/");
+       return BH < 0 ? "" : HH.substring(0, BH + 1)
+     }
+ 
+     function ZH(HH) {
+       return HH.name || `node${HH.index}`
```

#### 30. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L478-L483` → after: `L470-L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L470-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/230.js#L470-L471) · [Before (L478-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/230.js#L478-L483)

```diff
-         5120: "i8",
-         5121: "u8",
-         5122: "i16",
-         5123: "u16",
-         5125: "u32",
-         5126: "f32"
+         rotation: [0, 1, 0, 0],
+         scale: [1, 1, -1]
```

#### 31. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L486-L491` → after: `L474-L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L474-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/230.js#L474-L478) · [Before (L486-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/230.js#L486-L491)

```diff
-         5120: 1,
-         5121: 1,
-         5122: 2,
-         5123: 2,
-         5125: 4,
-         5126: 4
+         9728: 12,
+         9729: 2,
+         9984: 9,
+         9985: 11,
+         9986: 10
```

#### 32. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L494-L522` → after: `L481-L487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L481-L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/230.js#L481-L487) · [Before (L494-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/230.js#L494-L522)

```diff
-         SCALAR: 1,
-         VEC2: 2,
-         VEC3: 3,
-         VEC4: 4,
-         MAT2: 4,
-         MAT3: 9,
-         MAT4: 16
-       },
-       bV = [
-         ["POSITION", "position"],
-         ["NORMAL", "normal"],
-         ["TANGENT", "tangent"],
-         ["TEXCOORD_0", "uv"],
-         ["TEXCOORD_1", "uv2"],
-         ["TEXCOORD_2", "uv3"],
-         ["TEXCOORD_3", "uv4"],
- ... (13 more removed lines; see GitHub link above)
+         9728: 1,
+         9729: 7,
+         9984: 4,
+         9985: 5,
+         9986: 8,
+         9987: 6
+       };
```

#### 33. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L525-L530` → after: `L490-L682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L490-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/230.js#L490-L682) · [Before (L525-L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/230.js#L525-L530)

```diff
-       const eV = new DataView(VV.buffer, VV.byteOffset, VV.byteLength);
-       if (VV.byteLength < 20 || eV.getUint32(0, !0) !== JV || 2 !== eV.getUint32(4, !0)) return null;
-       const xV = Math.min(eV.getUint32(8, !0), VV.byteLength),
-         UV = eV.getUint32(12, !0);
-       if (eV.getUint32(16, !0) !== YV || 20 + UV > xV) return null;
-       let yV;
+       var BH, LH, AH, rH;
+       const SH = null !== (BH = HH.minFilter) && void 0 !== BH ? BH : 9987;
+       return 9729 === (null !== (LH = HH.magFilter) && void 0 !== LH ? LH : 9729) ? null !== (AH = aH[SH]) && void 0 !== AH ? AH : 3 : null !== (rH = sH[SH]) && void 0 !== rH ? rH : 4
+     }
+     const iH = {
+       33071: 0,
+       33648: 2
+     };
+ 
+     function pH(HH) {
+       var BH;
+       return null !== (BH = iH[null !== HH && void 0 !== HH ? HH : 10497]) && void 0 !== BH ? BH : 1
+     }
+ 
+     function yH(HH) {
+       return 9728 === HH.minFilter || 9729 === HH.minFilter
+ ... (177 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L532-L534` → after: `L684-L696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L684-L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/230.js#L684-L696) · [Before (L532-L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/230.js#L532-L534)

```diff
-         yV = JSON.parse((new TextDecoder).decode(VV.subarray(20, 20 + UV)))
-       } catch {
-         return null
+         const LH = cH(await async function(HH, BH) {
+             return "string" !== typeof BH ? BH : HH.url.startsWith("data:") ? (0, fH.q)(HH.url) : await (0, fH.t)(HH.url)
+           }(tH, HH)),
+           zH = new LB(LH, AH, tH, function(HH, BH) {
+             let {
+               rootUrl: LH,
+               name: AH
+             } = HH;
+             return !LH.startsWith("file:") && AH ? LH : `${LH}${BH()}/`
+           }(tH, rH));
+         return await SH(zH), BH.importedMeshesFiles && (BH.loadingPluginName = "XN", hH && BH.importedMeshesFiles.push(tH.url)), zH
+       } finally {
+         BH.removePendingData(zH)
```

#### 35. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L544-L552` → after: `L704-L948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L704-L948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/230.js#L704-L948) · [Before (L544-L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/230.js#L544-L552)

```diff
-       var eV;
-       const xV = null === (eV = UV(VV)) || void 0 === eV ? void 0 : eV.json;
-       if (void 0 === xV || !Array.isArray(xV.extensionsUsed) || !xV.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
-       const JV = xV.meshes;
-       return Array.isArray(JV) && JV.some((VV => {
-         const eV = null === VV || void 0 === VV ? void 0 : VV.primitives;
-         return Array.isArray(eV) && eV.some((VV => {
-           const eV = null === VV || void 0 === VV ? void 0 : VV.extensions;
-           return null != (null === eV || void 0 === eV ? void 0 : eV.KHR_draco_mesh_compression)
+       if (null === HH || void 0 === HH || !HH.min || !HH.max) return null;
+       const [BH, LH, AH] = HH.min, [rH, SH, hH] = HH.max, {
+         BoundingInfo: tH,
+         lu: zH
+       } = (0, rB.c)();
+       return new tH(new zH(BH, LH, AH), new zH(rH, SH, hH))
+     }
+ 
+     function zB(HH) {
+       (0, SB.f)(HH) || (HH.geometry && HH.geometry.useBoundingInfoFromGeometry ? HH._updateBoundingInfo() : HH.refreshBoundingInfo(!0, !0))
+     }
+     class CB {
+       constructor(HH, BH) {
+         this.NQ = HH, this.decode = BH, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
+       }
+       viewBytes(HH) {
+ ... (229 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L554` → after: `L950-L1033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L950-L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/230.js#L950-L1033) · [Before (L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/230.js#L554)

```diff
-       }))
+       }
+       loadMesh(HH, BH, LH, AH) {
+         const rH = [],
+           SH = ZH(BH);
+         if (1 === LH.primitives.length) {
+           const AH = LH.primitives[0];
+           rH.push(this.loadPrimitive(`${HH}/primitives/${AH.index}`, SH, AH, (HH => {
+             this.nodeObjects.set(BH.index, HH), this.nodePrimitives.set(BH.index, [HH])
+           })))
+         } else {
+           const AH = this.node(SH, !1);
+           this.nodeObjects.set(BH.index, AH);
+           const hH = [];
+           this.nodePrimitives.set(BH.index, hH);
+           for (const BH of LH.primitives) rH.push(this.loadPrimitive(`${HH}/primitives/${BH.index}`, `${SH}_primitive${BH.index}`, BH, (HH => {
+             HH.parent = AH, hH.push(HH)
+ ... (68 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/231.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/231.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26)

#### 1. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/231.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/231.js#L4)

```diff
-   35423: (VV, eV, xV) => {
+   45003: (HH, BH, LH) => {
```

#### 2. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L6-L15` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/231.js#L6) · [Before (L6-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/231.js#L6-L15)

```diff
-       animatedBlockTextures: () => QV,
-       armourAtlasUrl: () => yV,
-       averageColors: () => nV,
-       blockAtlasUrls: () => UV,
-       blockAtlasWidth: () => JV,
-       buildHash: () => ZV,
-       builtTextureIndexFingerprint: () => wV,
-       imagesPerAtlas: () => YV,
-       outputHash: () => vV,
-       rotatedBlockTextures: () => pV
+       default: () => SH
```

#### 3. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L17-L9834` → after: `L8-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L8-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/231.js#L8-L13) · [Before (L17-L9834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/231.js#L17-L9834)

```diff
-     const JV = 8,
-       YV = [256, 256, 256, 256, 256, 256, 114],
-       UV = [xV(35432), xV(35437), xV(35441), xV(35445), xV(35449), xV(35451), xV(35453)],
-       yV = xV(35455),
-       pV = {
-         "alloy_kiln_top[rot[1": xV(35460),
-         "alloy_kiln_top[rot[2": xV(35462),
-         "alloy_kiln_top[rot[3": xV(35464),
-         "alloy_kiln_top[rot[4": xV(35473),
-         "auto_bench_top[rot[1": xV(35477),
-         "auto_bench_top[rot[2": xV(35479),
-         "auto_bench_top[rot[3": xV(35486),
-         "auto_bench_top[rot[4": xV(35493),
-         "belt_tunnel_exit_top[rot[1": xV(35497),
-         "belt_tunnel_exit_top[rot[2": xV(35505),
-         "belt_tunnel_exit_top[rot[3": xV(35507),
- ... (9802 more removed lines; see GitHub link above)
+     var AH = LH(37014),
+       rH = LH.n(AH);
+ 
+     function SH() {
+       return rH()('/*! For license information please see cwj32u.procGen.worker.b2aeb6a1.worker.js.LICENSE.txt */\n(()=>{var HH={59:HH=>{const BH="object"===typeof performance&&performance&&"function"===typeof performance.now?performance:Date,LH=()=>BH.now(),AH=HH=>HH===1/0||(HH= … [truncated]
+     }
```

#### 4. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L9837-L10902` → after: `L16-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L16-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/231.js#L16-L37) · [Before (L9837-L10902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/231.js#L9837-L10902)

```diff
-     VV.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAABACAYAAAAnBDaKAAAACXBIWXMAAAsTAAALEwEAmpwYAAABFElEQVR42tWVsQrCQAyG+ziCqBR9J8FNF0FxFJ0ddHEsjoKbm+DsO1W+QsIlUlu5Q3RISf/+10v+JHfZbLEuscl0aUzwjMfpMSo3l3453ncqwwerCLABVkXPGBjfKgKrPAEsEYFAwsDCgDWLxjQbCfxyXnRVB3ww1QHA … [truncated]
-   },
-   37018: VV => {
-     VV.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAABACAYAAAAnBDaKAAAACXBIWXMAAAsTAAALEwEAmpwYAAABDElEQVR42q1VvQrCMBDu4wiiUvSdBDddBMVRdHbQxbE4Cm5ugrPvFPkqF+7Say7EDNeQy0e/n6NptdrsHWqx3IqifoXH/DwQdXiM3e0z+wGARmPXjEShh7MWAHQIwJvSAVEKU2SSTROwbobta4mC9j4HNI73iTs9ay8S … [truncated]
-   },
-   37027: VV => {
-     VV.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAABACAYAAAAnBDaKAAAACXBIWXMAAAsTAAALEwEAmpwYAAABFElEQVR42tVVMQrCQBDMcwRRCfonwU4bQbEUrS20sQyWgp2dYO2fInMwy+4aL4YcosUcd5shmZ1MNtlssS6ByXRpwHqGZbzvlJtLvzw9RgHYoxYIYOOwKnoGqOFaIgKe6QmoBQKEaGFasHRR22YtYV50A3BrgGfxAcXt … [truncated]
-   },
-   37035: VV => {
-     VV.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAABACAYAAAAnBDaKAAAACXBIWXMAAAsTAAALEwEAmpwYAAABDUlEQVR42q1VuwrCQBDM5wiiEvSfBDttBMVStLbQxjJYCnZ2grX/dDIHc9x7w+WKTcjusDszS+6aze6oEKv13gnmGzwev4U6vaZqeR05oQFAo3joJk4gh5oGAO0D0LU/IDtCJNlLpghA+203Nq35bXzAB8ld3q06P2c6 … [truncated]
-   },
-   37037: VV => {
-     VV.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAABACAYAAAAnBDaKAAAACXBIWXMAAAsTAAALEwEAmpwYAAABC0lEQVR42mPQN7b6jw8zgIjFq7b8L65qRcEgMbiCsJi0/zJyKv+f5Nn/f9UNYbt4BqEqAEn+vzT3///PF//fDJbDVACT/P+g6///nemYCkD2gowGYRAbRQHIQSABZIziSILepE44NLgZ/f+0IO//1/1z/ldbKmL6Aqbg … [truncated]
-   },
-   37039: VV => {
-     VV.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAABACAYAAAAnBDaKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAyElEQVR42mPQN7b6jw8zgIjFq7b8d/EMguNr/2+DxeAKiqta/9uGJvw/cPg4mN5z+zFYIYoCkCQMgxRhVYBsCoaCfUtK/7ck2oLpjS1hqArQHQnCKI4k6E2Sw+HK/5v4w2HZ+Vu0CIeFzZFgvGNKGhgPdDhc+n8dfzj0 … [truncated]
- ... (1050 more removed lines; see GitHub link above)
+     HH.exports = function(HH, BH, LH, AH) {
+       var rH = self || window;
+       try {
+         try {
+           var SH;
+           try {
+             SH = new rH.Blob([HH])
+           } catch (CH) {
+             (SH = new(rH.BlobBuilder || rH.WebKitBlobBuilder || rH.MozBlobBuilder || rH.MSBlobBuilder)).append(HH), SH = SH.getBlob()
+           }
+           var hH = rH.URL || rH.webkitURL,
+             tH = hH.createObjectURL(SH),
+             zH = new rH[BH](tH, LH);
+           return hH.revokeObjectURL(tH), zH
+         } catch (CH) {
+           return new rH[BH]("data:application/javascript,".concat(encodeURIComponent(HH)), LH)
+ ... (6 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/232.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/232.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608)

#### 1. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L4-L21` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/232.js#L4-L6) · [Before (L4-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/232.js#L4-L21)

```diff
-   42117: (VV, eV, xV) => {
-     function JV(VV, eV, xV) {
-       if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(VV, eV).getContext("2d", xV);
-       const JV = document.createElement("canvas");
-       return JV.width = VV, JV.height = eV, JV.getContext("2d", xV)
-     }
- 
-     function YV(VV, eV) {
-       return VV.getContext("2d", eV)
-     }
-     xV.d(eV, {
-       b: () => YV,
-       c: () => JV
-     })
-   },
-   42070: (VV, eV, xV) => {
- ... (2 more removed lines; see GitHub link above)
+   45022: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       default: () => SH
```

#### 2. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L23-L26` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/232.js#L8-L9) · [Before (L23-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/232.js#L23-L26)

```diff
-     const JV = 1 << 20,
-       YV = 1 << 21,
-       UV = 1024,
-       yV = 2048;
+     var AH = LH(37014),
+       rH = LH.n(AH);
```
