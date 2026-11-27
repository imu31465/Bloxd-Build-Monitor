# Changed — Bundle Modifications Report (Part 008 / 082)

- **Updated at**: `2026-11-28T02:07 JST`
- **Part**: `8 / 82` (**315** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 007](part-007.md) · [Part 009 →](part-009.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/122.js` (u88b9b.1969c480 → 1yqdn.8419f1e1 · continued)

- **File**: `bundles/bloxd.io/chunks/js/122.js` (20 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260)

#### 17. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L394` → after: `L812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/122.js#L812) · [Before (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/122.js#L394)

```diff
-   7206: (ee, ie, He) => {
+   5713: (WW, iW, OW) => {
```

#### 18. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L404` → after: `L815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/122.js#L815) · [Before (L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/122.js#L404)

```diff
-       h: () => pe,
+       e: () => xW,
```

#### 19. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L410-L454` → after: `L819-L873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L819-L873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/122.js#L819-L873) · [Before (L410-L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/122.js#L410-L454)

```diff
-       s: () => be,
-       t: () => ge,
-       w: () => Me,
-       y: () => Ue
-     });
-     const ye = ["forest", "desert", "water", "night", "cave"];
-     const be = {
-         full: {
-           width: 3840,
-           height: 2160
-         },
-         large: {
-           width: 1920,
-           height: 1080
-         },
-         thumb: {
- ... (29 more removed lines; see GitHub link above)
+       p: () => lW
+     });
+     var mW = OW(5721),
+       EW = OW(5725);
+     const NW = !1,
+       PW = mW.h.map((WW => {
+         const iW = [];
+         for (let NW = 1; NW <= WW.reach; NW++) iW.push(EW.j[(0, mW.d)(WW.source, NW)].id);
+         const OW = "water" === WW.family;
+         return Object.freeze({
+           name: WW.kind,
+           family: WW.family,
+           reach: WW.reach,
+           stepTicks: OW ? 5 : 10,
+           slopeDistance: OW ? 4 : 2,
+           sourceId: EW.j[WW.source].id,
+ ... (39 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L458-L470` → after: `L877-L892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L877-L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/122.js#L877-L892) · [Before (L458-L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/122.js#L458-L470)

```diff
-       return ee === Xe || null !== (ie = null === ee || void 0 === ee ? void 0 : ee.startsWith(ze)) && void 0 !== ie && ie
-     }
- 
-     function Ee(ee, ie) {
-       return `shaderPacks/${ee}/${ie}.json`
-     }
- 
-     function ge(ee, ie, He, ye) {
-       return null === ie.renderId ? Oe(ee, ie.baselineVersion, He, ye) : `${ee}/${function(ee,ie,He,ye){return`shaderPacks/${ee}/${ie}/${He}-${ye}.webp`}(ie.packId,ie.renderId,He,ye)}`
-     }
- 
-     function Oe(ee, ie, He, ye) {
-       return `${ee}/${function(ee,ie,He){return`shaderPacks/baseline/${ee}/${ie}-${He}.webp`}(ie,He,ye)}`
+       return null === WW ? null : null !== (iW = ZW.get(WW)) && void 0 !== iW ? iW : null
+     }
+     EW.j.Obsidian.id, EW.j["Messy Stone"].id;
+ 
+     function AW() {
+       let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {
+         let WW = 0;
+         for (const iW of PW) WW = Math.max(WW, iW.stillId, iW.sourceId, iW.fallingId, ...iW.flowingIds);
+         return WW
+       }() + 1;
+       const iW = new Uint8Array(WW);
+       for (const OW of PW) {
+         const mW = ("water" === OW.family ? 1 : 2) << 4;
+         for (const EW of [OW.stillId, OW.sourceId, OW.fallingId, ...OW.flowingIds]) EW < WW && (iW[EW] = mW)
+       }
+       return iW
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/123.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/123.js` (64 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496)

#### 1. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L2)

```diff
- export const ids = [123, 176];
+ export const ids = [123];
```

#### 2. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L4-L6` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L4-L7) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L4-L6)

```diff
-   9660: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       default: () => zi
+   40312: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => LW,
+       f: () => NW
```

#### 3. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L8-L45` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L9-L10) · [Before (L8-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L8-L45)

```diff
-     var ye = He(1515),
-       be = He(18),
-       Me = He(5064),
-       Ke = He(59),
-       Ue = He(1432);
-     var Fe = He(1983),
-       Je = He(1502),
-       oe = He(1340),
-       Re = He(1127),
-       ke = He(9663),
-       qe = He(9667),
-       fe = He(4974),
-       Te = He(153),
-       pe = He(1083),
-       Xe = He(27),
-       ze = He(1192),
- ... (22 more removed lines; see GitHub link above)
+     var mW = OW(2780);
+     let EW = null;
```

#### 4. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L48-L76` → after: `L13-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L13-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L13-L50) · [Before (L48-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L48-L76)

```diff
-       let {
-         onApply: ie,
-         onSkip: He
-       } = ee;
-       const {
-         t: ye
-       } = (0, Re.v)();
-       return (0, Ke.useEffect)((() => {
-         ue.h.skipPlayWait()
-       }), []), (0, me.jsx)(xe.k, {
-         icon: "download",
-         title: "customTexturePack:downloadTitle",
-         subtitle: (0, me.jsxs)("div", {
-           className: "CustomTexturePackDownloaderSubtitleText",
-           children: [ye("customTexturePack:downloadPrompt"), (0, me.jsx)("div", {
-             className: "CustomTexturePackDownloaderWarningText",
- ... (13 more removed lines; see GitHub link above)
+       return null !== EW && WW === EW
+     }
+ 
+     function PW() {
+       this.Qq = !1, this.stopPropagation = !1, this.xR = !1, this.disabled = !1
+     }
+     class LW {
+       constructor(WW, iW) {
+         this.version = "0.7.0";
+         var OW = Object.assign({}, new PW, iW || {});
+         this.element = WW || document, this.Qq = !!OW.Qq, this.stopPropagation = !!OW.stopPropagation, this.xR = !!OW.xR, this.disabled = !!OW.disabled, this.filterEvents = (WW, iW) => !0, this.ignoreEvent = WW => !1, this.down = new mW.EventEmitter, this.up = new mW.EventEmitter … [truncated]
+           dx: 0,
+           dy: 0,
+           diW: 0,
+           eiW: 0,
+           viW: 0
+ ... (22 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L78` → after: `L52-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L52-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L52-L64) · [Before (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L78)

```diff
-       })
+       }
+       getBindings() {
+         var WW = {};
+         for (var iW in this._keyBindmap) {
+           this._keyBindmap[iW].forEach((OW => {
+             WW[OW] = WW[OW] || [], WW[OW].push(iW)
+           }))
+         }
+         return WW
+       }
+       hZ() {
+         cW(this.bR), cW(this.pressCount), cW(this.releaseCount)
+       }
```

#### 6. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L100` → after: `L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L68) · [Before (L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L100)

```diff
-       ee.setGamePackConfirm(Se), je = ee
+       for (var iW in WW) WW[iW] = 0
```

#### 7. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L108-L195` → after: `L72-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L72-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L72-L82) · [Before (L108-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L108-L195)

```diff
-       let {
-         schematicId: ie,
-         texturePackKey: He,
-         onClose: ye
-       } = ee;
-       const [be, Me] = (0, Ke.useState)("prompt"), [Ue, Fe] = (0, Ke.useState)(null), Je = (0, Ie.c)();
- 
-       function oe() {
-         ye()
-       }
-       return "prompt" === be ? (0, me.jsx)(le, {
-         onApply: async function() {
-           Me("downloading");
-           try {
-             const ee = await async function(ee, ie) {
-               const He = await (0, Ce.e)(ie);
- ... (72 more removed lines; see GitHub link above)
+       window.addEventListener("keydown", jW.bind(null, WW, !0), !1), window.addEventListener("keyup", jW.bind(null, WW, !1), !1);
+       var iW = {
+         passive: !0
+       };
+       WW.element.addEventListener("touchstart", lW.bind(void 0, WW), {
+         passive: !1
+       }), WW.element.addEventListener("touchend", bW.bind(void 0, WW), iW), WW.element.addEventListener("mousedown", UW.bind(null, WW, !0), iW), window.document.addEventListener("mouseup", UW.bind(null, WW, !1), iW), WW.element.addEventListener("touchmove", kW.bind(null, WW), iW) … [truncated]
+     }
+     var tW = 0,
+       ZW = 0,
+       xW = null;
```

#### 8. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L197-L199` → after: `L84-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L84-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L84-L85) · [Before (L197-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L197-L199)

```diff
-     function ki() {
-       const ee = be.e.get("clientEscMenuOptions");
-       Fe.gameBridge.send("setLookSensitivity", be.e.get("isTouchScreen") ? (0, oi.u)(ee) : ee.mouseSensitivity)
+     function lW(WW, iW) {
+       iW.preventDefault(), AW(iW)
```

#### 9. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L204-L214` → after: `L89-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L89-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L89-L96) · [Before (L204-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L204-L214)

```diff
-       const ie = ee.asError();
-       if (ie.debugResult.Ce || (0, Fi.b)(ie.debugResult.error)) return;
-       console.log("Failed to join lobby:", ie.message);
-       const He = "timedOut" === ie.debugResult.gameServerUnreachable;
-       (0, Hi.reportClientError)("matchmake_failed", ie.message, He ? "CONNECT_TO_GAME_SERVER_TIMEOUT" : Te.k[ie.code]);
-       const {
-         error: ye
-       } = ie.debugResult;
-       if (ye instanceof Ze.k && "default" !== ye.packSource) {
-         const ee = (0, yi.g)("js", "game" === ye.packSource ? "game" : "page", (0, yi.h)(ye));
-         (0, Hi.reportClientError)("texture_pack", ye, ee)
+       let iW = !1;
+       for (let OW = 0; OW < WW.touches.length; ++OW)
+         if (WW.touches[OW].identifier === xW) {
+           iW = !0;
+           break
+         } if (!iW) {
+         const iW = WW.changedTouches[0];
+         tW = iW.clientX, ZW = iW.clientY, xW = iW.identifier
```

#### 10. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L218-L221` → after: `L100-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L100-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L100-L101) · [Before (L218-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L218-L221)

```diff
-     function Ti(ee) {
-       if (null === ee || void 0 === ee || !ee.isError()) return !1;
-       const ie = ee.asError();
-       return ie.code === Te.k.REQUEST_TO_MATCHMAKING && !(0, Fi.b)(ie.debugResult.error)
+     function bW(WW, iW) {
+       for (var OW = iW.changedTouches, mW = 0; mW < OW.length; ++mW) OW[mW].identifier === xW && (xW = null)
```

#### 11. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L223-L260` → after: `L103-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L103-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L103-L159) · [Before (L223-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L223-L260)

```diff
-     async function Xi(ee, ie, He) {
-       const ye = (0, Ki.I)(ie);
-       async function Ke(ee, ie, He, ye) {
-         var Ke;
-         if (ye.aborted) return null;
-         null === be.e.get("gameEntrySource") && (0, be.l)("directPlayUrl"), Ji.I && (0, ve.loadWasmPlay)().catch((() => {})), be.e.set({
-           gameState: "findingLobby"
-         }), Xe.h.yR("loadingScreenState", "loadingPage:findingLobby");
-         const Ue = await pe.userContextManager.getCurrentUserContext();
-         Fe.gameBridge.send("setRequestedGame", {
-           gameNameWithVariation: ie,
-           discordContext: ee instanceof Ae.f ? ee.getSerialisableParams() : null
-         }), (0, ii.g)(null !== (Ke = ue.h.playInputAt()) && void 0 !== Ke ? Ke : performance.now());
-         const Je = await async function(ee, ie, He, ye, be) {
-           try {
-             await (0, Ri.k)(Me.reqLibsLoadedPromise, qi, "Required libraries timed out")
- ... (22 more removed lines; see GitHub link above)
+ 
+     function jW(WW, iW, OW) {
+       if (!WW.ignoreEvent(OW)) try {
+         yW(WW, OW), iW && OW.isTrusted && !OW.repeat && WW._keyStates[OW.code] && TW(WW, OW.code)
+       } finally {
+         JW(OW.code, iW, WW, OW)
+       }
+     }
+ 
+     function UW(WW, iW, OW) {
+       if (!WW.ignoreEvent(OW)) try {
+         yW(WW, OW)
+       } finally {
+         ! function(WW, iW, OW) {
+           if ("pointerId" in OW)
+             if (iW) {
+ ... (41 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L262` → after: `L161-L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L161-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L161-L184) · [Before (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L262)

```diff
-       return ye && (0, be.l)("updateRejoin"), (0, bi.g)((async be => {
+       WW.bR.diW += (iW.deltaX || 0) * OW, WW.bR.eiW += (iW.deltaY || 0) * OW, WW.bR.viW += (iW.deltaZ || 0) * OW
+     }
+ 
+     function MW(WW, iW) {
+       if (!WW.xR) return iW.preventDefault(), !1
+     }
+     var KW = {
+       AltLeft: "altKey",
+       AltRight: "altKey",
+       ControlLeft: "ctrlKey",
+       ControlRight: "ctrlKey",
+       ShiftLeft: "shiftKey",
+       ShiftRight: "shiftKey",
+       MetaLeft: "metaKey",
+       MetaRight: "metaKey"
+     };
+ ... (8 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L264-L268` → after: `L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L186) · [Before (L264-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L264-L268)

```diff
-           var Me;
-           let Ue = ee,
-             Fe = await Ke(Ue, ie, He, be);
-           for (let ee = 0; ye && ee < Ki.i && (Ti(Fe) && await (0, Ki.J)((0, Ki.s)(ee), be)); ee++) Ue = (0, Ki.w)(Ue, ee + 1, "string" === typeof Ue && (0, Ve.K)(Ue)), Fe = await Ke(Ue, ie, He, be);
-           return null !== (Me = Fe) && void 0 !== Me && Me.isError() && fi(Fe), Fe
+           return window.self !== window.top
```

#### 14. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L270-L273` → after: `L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L188) · [Before (L270-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L270-L273)

```diff
-           if ((0, Hi.reportClientError)("matchmake_failed", Ue, "unexpected"), Fe.gameBridge.send("leaveGame", {
-               reloadPath: be.aborted ? null : "/"
-             }), be.aborted) return null;
-           throw Ue
+           return !0
```

#### 15. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L275-L284` → after: `L190-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L190-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L190-L193) · [Before (L275-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L275-L284)

```diff
-       }), (async ee => {
-         var He;
-         if (ye) return;
-         const be = (0, ge.G)();
-         null !== be && (await be, ee.aborted) || (null !== (He = Pe.e[ie]) && void 0 !== He && He.playAdBeforeMatchmaking ? (ue.h.skipPlayWait(), await new Promise((ee => {
-           (0, ge.db)((() => {
-             ee(!0)
-           }), "video_start")
-         }))) : (0, ge.db)((() => {}), "video_start"))
-       }))
+       }() && (clearTimeout(WW._blurRelease), WW._blurRelease = setTimeout((function() {
+         if (!document.hasFocus())
+           for (var iW in WW._modifiersHeldThroughBlur = {}, WW._keyStates) WW._keyStates[iW] && !/^Mouse\d/.test(iW) && TW(WW, iW)
+       }), 0))
```

#### 16. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L287-L574` → after: `L196-L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L196-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L196-L237) · [Before (L287-L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L287-L574)

```diff
-     function zi() {
-       const {
-         t: ee
-       } = (0, Re.v)(), ie = (0, Je.useNavigatePreserveSearch)(), He = (0, ye.u)(), Ae = (0, ye.B)(), ae = (0, Ke.useRef)({
-         t: ee,
-         navigate: ie
-       });
-       ae.current = {
-         t: ee,
-         navigate: ie
-       };
-       const xe = (0, Ke.useRef)("");
-       xe.current = He.pathname + He.search;
-       const {
-         gameState: Le,
-         clientEscMenuOptions: Ce
- ... (272 more removed lines; see GitHub link above)
+     function yW(WW, iW) {
+       var OW = WW._modifiersHeldThroughBlur;
+       if (OW && iW.isTrusted && document.hasFocus())
+         for (var mW in OW) delete OW[mW], WW._keyStates[mW] && mW !== iW.code && (SW(iW, mW) || TW(WW, mW))
+     }
+ 
+     function TW(WW, iW) {
+       const OW = {
+           code: iW,
+           preventDefault: () => {},
+           stopPropagation: () => {}
+         },
+         mW = EW;
+       EW = OW;
+       try {
+         JW(iW, !1, WW, OW)
+ ... (26 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L577` → after: `L240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L240) · [Before (L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L577)

```diff
-   5491: (ee, ie, He) => {
+   37904: (WW, iW, OW) => {
```

#### 18. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L579` → after: `L242-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L242-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L242-L243) · [Before (L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L579)

```diff
-       e: () => be
+       e: () => bW,
+       i: () => jW
```

#### 19. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L581-L585` → after: `L245-L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L245-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L245-L306) · [Before (L581-L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L581-L585)

```diff
-     var ye = He(1141);
-     async function be(ee) {
-       const ie = await fetch(`${ye.clientSideServerUrls.s3Url}/${ee}`, {
-         headers: {
-           Accept: "application/json"
+     var mW = OW(62),
+       EW = OW(1526),
+       NW = OW(2075),
+       PW = OW(37902),
+       LW = OW(643),
+       cW = OW(1089),
+       wW = OW.n(cW),
+       tW = OW(1283);
+     const ZW = [xW()];
+ 
+     function xW() {
+       return {
+         source: null,
+         direction: null,
+         WC: null,
+         timeout: void 0,
+ ... (46 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L587-L590` → after: `L308-L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L308-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L308-L327) · [Before (L587-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L587-L590)

```diff
-       });
-       if (404 === ie.status || 403 === ie.status) return null;
-       if (!ie.ok) throw new Error(`Failed to download the texture pack (${ie.status})`);
-       return await ie.json()
+       }), []), (0, tW.jsx)("div", {
+         className: "DirectionalDamage",
+         children: ZW.map(((WW, iW) => (0, tW.jsx)("div", {
+           ref: iW => {
+             WW.WC = iW
+           },
+           className: wW()("DamageIndicator", {
+             DamageIndicatorFullCircle: (0, LW.K)(WW.direction),
+             DamageIndicatorIdle: null === WW.source
+           })
+         }, iW)))
+       })
+     }));
+ 
+     function jW(WW) {
+       for (const iW of ZW) {
+ ... (4 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L593` → after: `L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L330) · [Before (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L593)

```diff
-   9667: (ee, ie, He) => {
+   37909: (WW, iW, OW) => {
```

#### 22. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L596` → after: `L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L333) · [Before (L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L596)

```diff
-       d: () => Xe
+       g: () => TW
```

#### 23. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L598-L610` → after: `L335-L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L335-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L335-L362) · [Before (L598-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L598-L610)

```diff
-     var ye = He(153),
-       be = He(186),
-       Me = He(1033),
-       Ke = He(1040),
-       Ue = He(1169),
-       Fe = He(1983),
-       Je = He(2418),
-       oe = He(1490),
-       Re = He(1340),
-       ke = He(1083),
-       qe = He(9669),
-       fe = He(1502),
-       Te = He(1536);
+     var mW = OW(62),
+       EW = OW(25),
+       NW = OW(37902),
+       PW = OW(37915),
+       LW = OW(37609),
+       cW = OW(37763),
+       wW = OW(2037),
+       tW = OW(2075),
+       ZW = OW(1283);
+     const xW = 20 * Math.PI / 180,
+       lW = new Map,
+       AW = 25 * Math.PI / 180,
+       bW = Array.from({
+         length: 6
+       }, (() => ({
+         kind: null,
+ ... (12 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L612-L640` → after: `L364-L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L364-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L364-L379) · [Before (L612-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L612-L640)

```diff
-     function pe(ee, ie) {
-       const He = !0 === ie.debugResult.gameRefused,
-         Me = He || ie.code === ye.k.REQUEST_TO_MATCHMAKING ? (0, qe.l)(ie.message) : null;
-       if (null !== Me) return ge(ee, ee((0, qe.o)(Me)), ee(qe.n[Me])), !0;
-       if (He) return async function(ee) {
-         const {
-           gameNameWithVariation: ie,
-           lobbyName: He,
-           shownLobbyName: ye
-         } = Fe.gameBridge.latest("connectedGame"), be = "classic" === ie && (0, Ue.I)(He) ? ye : await (0, Je.h)(ee, ie, He);
-         return "" !== be ? ee("general:cantJoinGame", {
-           game: be
-         }) : ee("general:cantJoinThisGame")
-       }(ee).then((He => {
-         ge(ee, He, ie.message)
-       })), !0;
- ... (13 more removed lines; see GitHub link above)
+     function MW(WW) {
+       const iW = "combat" === WW.kind || "explosion" === WW.kind,
+         OW = null !== UW && null !== WW.writtenAngle && function(WW, iW, OW, mW) {
+           const EW = iW.width / 3.8,
+             NW = (mW ? .7 : .35) * EW + 1,
+             PW = (mW ? .175 : .1) * EW + 1,
+             LW = iW.width / 2 - PW,
+             cW = Math.sin(WW),
+             wW = Math.cos(WW),
+             tW = iW.left + iW.width / 2 + cW * LW,
+             ZW = iW.top + iW.height / 2 - wW * LW,
+             xW = Math.abs(wW) * NW + Math.abs(cW) * PW,
+             lW = Math.abs(cW) * NW + Math.abs(wW) * PW;
+           return OW.some((WW => tW + xW > WW.left - sW && tW - xW < WW.right + sW && ZW + lW > WW.top - sW && ZW - lW < WW.bottom + sW))
+         }(WW.writtenAngle, UW, kW, iW);
+       OW !== WW.away && WW.WC && (WW.away = OW, WW.WC.classList.toggle("SoundCueAway", OW))
```

#### 25. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L643-L646` → after: `L383-L385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L383-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L383-L385) · [Before (L643-L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L643-L646)

```diff
-     function Xe(ee, ie) {
-       !0 !== (null === ie || void 0 === ie ? void 0 : ie.takenDown) ? ge(ee, ee("general:cantJoinThisGame"), be.c.customGameTakenDown.text) : Be(ee, "lock", ee("studio:gameTakenDownTitle", {
-         game: ie.name
-       }), ee("studio:viewInStudio"), ie.schematicId)
+     function SW(WW) {
+       var iW;
+       clearTimeout(WW.timeout), null === (iW = WW.fade) || void 0 === iW || iW.cancel(), WW.fade = null, WW.kind = null, WW.writtenAngle = null, WW.away = !1, WW.WC && (WW.WC.className = "SoundCue SoundCueIdle", WW.WC.style.rotate = "")
```

#### 26. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L649-L658` → after: `L388-L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L388-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L388-L411) · [Before (L649-L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L649-L658)

```diff
-     function ze() {
-       return (0, Me.r)(Fe.gameBridge.latest("connectedGame").gameNameWithVariation)
-     }
-     async function Be(ee, ie, He, ye, be) {
-       !0 === await Re.NotificationProvider.showPromptPopup({
-         icon: ie,
-         title: He,
-         confirmText: ye,
-         cancelText: ee("general:cancel")
-       }).getResult() && (0, fe.navigatePreserveSearch)((0, Te.s)((0, Ke.b)(be), "manage"))
+     function YW(WW, iW) {
+       var OW, mW, EW;
+       const NW = performance.now();
+       if (Math.abs((0, PW.y)(KW, iW)) < xW || NW - (null !== (OW = lW.get(WW)) && void 0 !== OW ? OW : -1 / 0) < 250) return;
+       lW.set(WW, NW), null === (mW = jW) || void 0 === mW || mW();
+       const LW = function(WW, iW) {
+           const OW = bW.find((OW => OW.kind === WW && Math.abs((0, PW.y)(OW.direction, iW)) < AW));
+           if (OW) return OW;
+           return bW.find((WW => null === WW.kind)) || bW.reduce(((WW, iW) => iW.shownAt < WW.shownAt ? iW : WW))
+         }(WW, iW),
+         cW = LW.WC;
+       cW && (clearTimeout(LW.timeout), null === (EW = LW.fade) || void 0 === EW || EW.cancel(), LW.kind = WW, LW.direction = iW, LW.shownAt = NW, cW.className = `SoundCue SoundCue-${WW}`, LW.away = !1, yW(LW, KW), MW(LW), LW.fade = cW.animate([{
+         opacity: 1
+       }, {
+         opacity: 1,
+         offset: .5
+ ... (8 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L660-L665` → after: `L413-L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L413-L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L413-L416) · [Before (L660-L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L660-L665)

```diff
-     async function Ee(ee) {
-       try {
-         return await oe.b.getGame(await ke.userContextManager.getCurrentUserContext(), ee, !0)
-       } catch (ie) {
-         return (0, oe.c)(ie) || console.error(`Failed to get game ${ee}`, ie), null
-       }
+ 
+     function yW(WW, iW) {
+       const OW = WW.direction - iW;
+       OW !== WW.writtenAngle && WW.WC && (WW.writtenAngle = OW, WW.WC.style.rotate = `${OW}rad`, MW(WW))
```

#### 28. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L668-L675` → after: `L419-L421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L419-L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L419-L421) · [Before (L668-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L668-L675)

```diff
-     function ge(ee, ie, He) {
-       Re.NotificationProvider.showPromptPopup({
-         icon: "lock",
-         title: ie,
-         subtitle: He,
-         confirmText: ee("general:ok"),
-         cancelText: ""
-       })
+     function TW(WW) {
+       KW = WW;
+       for (const iW of bW) null !== iW.kind && yW(iW, WW)
```

#### 29. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L678` → after: `L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L480) · [Before (L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L678)

```diff
-   9691: (ee, ie, He) => {
+   37763: (WW, iW, OW) => {
```

#### 30. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L680` → after: `L482-L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L482-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L482-L484) · [Before (L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L680)

```diff
-       d: () => Ke
+       b: () => cW,
+       c: () => LW,
+       f: () => wW
```

#### 31. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L682-L684` → after: `L486-L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L486-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L486-L492) · [Before (L682-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L682-L684)

```diff
-     var ye = He(1315),
-       be = He(1169),
-       Me = He(610);
+     var mW = OW(62);
+     const EW = new Set,
+       NW = new Set;
+ 
+     function PW() {
+       for (const WW of NW) WW()
+     }
```

#### 32. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L687-L698` → after: `L495-L502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L495-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L495-L502) · [Before (L687-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L687-L698)

```diff
-       return ee = function(ee, ie) {
-         var He;
-         const ye = new URLSearchParams(ie),
-           be = ye.get("lobby"),
-           Me = ye.get("vm"),
-           Ke = null !== (He = be) && void 0 !== He ? He : ee.lobbyName,
-           Ue = null !== Me && void 0 !== Me ? Me : ee.directJoinVmUrl;
-         if (Ke === ee.lobbyName && Ue === ee.directJoinVmUrl) return ee;
-         return {
-           ...ee,
-           lobbyName: Ke,
-           directJoinVmUrl: Ue
+       let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+         OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+       (0, mW.useEffect)((() => WW ? function() {
+         const WW = {
+           element: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
+         };
+         return EW.add(WW), PW(), () => {
+           EW.delete(WW) && PW()
```

#### 33. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L700-L708` → after: `L504-L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L504-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L504-L532) · [Before (L700-L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L700-L708)

```diff
-       }(ee, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), ee = function(ee) {
-         if ((0, Me.P)(ee.directJoinVmUrl)) return ee;
-         const ie = (0, be.$)(ee.directJoinVmUrl);
-         null === ie && (ee.directJoinVmUrl = void 0);
-         return ee
-       }(ee = function(ee) {
-         if ((0, Me.P)(ee.gameNameWithVariation)) return ee;
-         return ee.gameNameWithVariation = (0, ye.g)(ee.gameNameWithVariation), ee
-       }(ee))
+       }(iW) : void 0), [WW, iW]), (0, mW.useEffect)((() => {
+         WW && PW()
+       }), [WW, OW])
+     }
+ 
+     function cW() {
+       const WW = [];
+       for (const {
+           element: OW
+         }
+         of EW) {
+         var iW;
+         if (null === OW) return {
+           anywhere: !0,
+           boxes: []
+         };
+ ... (13 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L711` → after: `L535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L535) · [Before (L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L711)

```diff
-   9683: (ee, ie, He) => {
+   37735: (WW, iW, OW) => {
```

#### 35. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L713` → after: `L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L537) · [Before (L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L713)

```diff
-       d: () => Me,
+       e: () => EW,
```

#### 36. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L719` → after: `L543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L543) · [Before (L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L719)

```diff
-       ye = !0
+       return mW
```

#### 37. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L722-L723` → after: `L546-L547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L546-L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L546-L547) · [Before (L722-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L722-L723)

```diff
-     function Me() {
-       return ye
+     function NW(WW) {
+       return mW !== WW && (mW = WW, !0)
```

#### 38. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L726` → after: `L550-L726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L550-L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L550-L726) · [Before (L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L726)

```diff
-   9693: (ee, ie, He) => {
+   42192: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       startPadGameplay: () => KW
+     });
+     OW(42060);
+     var mW = OW(42067),
+       EW = OW(2478),
+       NW = OW(25),
+       PW = OW(40274),
+       LW = OW(2350),
+       cW = OW(40298),
+       wW = OW(27),
+       tW = OW(2365),
+       ZW = OW(39615),
+       xW = OW(10079),
+       lW = OW(42075);
+ ... (161 more added lines; see GitHub link above)
```

#### 39. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L728-L729` → after: `L728-L729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L728-L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L728-L729) · [Before (L728-L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L728-L729)

```diff
-       c: () => Ue,
-       e: () => be,
+       C: () => tW,
+       d: () => mW,
```

#### 40. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L731` → after: `L731-L737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L731-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L731-L737) · [Before (L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L731)

```diff
-       i: () => Ke
+       g: () => ZW,
+       k: () => PW,
+       m: () => AW,
+       q: () => cW,
+       t: () => bW,
+       w: () => wW,
+       y: () => LW
```

#### 41. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L733` → after: `L739-L745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L739-L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L739-L745) · [Before (L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L733)

```diff
-     let ye = null;
+     const mW = Math.PI / 2 - .001,
+       EW = 2 * Math.PI,
+       NW = 1e-9;
+ 
+     function PW(WW, iW) {
+       iW.heading = WW.heading, iW.pitch = WW.pitch
+     }
```

#### 42. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L736` → after: `L748-L753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L748-L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L748-L753) · [Before (L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L736)

```diff
-       return `${ie}\n${null!==ee&&void 0!==ee?ee:""}`
+       const OW = iW - WW;
+       return OW - EW * Math.floor((OW + Math.PI) / EW)
+     }
+ 
+     function cW(WW, iW, OW) {
+       return WW + LW(WW, iW) * OW
```

#### 43. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L740` → after: `L757-L763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L757-L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L757-L763) · [Before (L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L740)

```diff
-       ye = ee
+       if (!Number.isFinite(WW)) return WW;
+       const iW = WW - EW * Math.floor(WW / EW);
+       return iW < EW ? iW : 0
+     }
+ 
+     function tW(WW, iW) {
+       return WW + LW(WW, iW)
```

#### 44. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L744-L745` → after: `L767-L772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L767-L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L767-L772) · [Before (L744-L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L744-L745)

```diff
-       const ie = ye;
-       return ye = null, null !== ie && ie.key === ee ? ie.settled : null
+       return Math.max(-mW, Math.min(mW, WW))
+     }
+ 
+     function xW(WW, iW, OW) {
+       const mW = Math.cos(iW);
+       return OW[0] = mW * Math.sin(WW), OW[1] = -Math.sin(iW), OW[2] = mW * Math.cos(WW), OW
```

#### 45. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L749-L754` → after: `L776-L785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L776-L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L776-L785) · [Before (L749-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L749-L754)

```diff
-       let be = !1;
-       null !== ie && setTimeout((() => {
-         ye() && !be && ie()
-       }), 0), ee.then((ee => {
-         be = !0, He(ee)
-       }))
+       const EW = Math.sqrt(WW * WW + OW * OW);
+       return EW < NW && Math.abs(iW) < NW || (EW >= NW && (mW.heading = Math.atan2(WW, OW)), mW.pitch = ZW(Math.atan2(-iW, EW) + 0)), mW
+     }
+ 
+     function AW(WW, iW) {
+       return lW(WW[0], WW[1], WW[2], iW)
+     }
+ 
+     function bW(WW, iW, OW) {
+       return lW(iW[0] - WW[0], iW[1] - WW[1], iW[2] - WW[2], OW)
```

#### 46. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L757-L761` → after: `L788-L790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L788-L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L788-L790) · [Before (L757-L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L757-L761)

```diff
-   9674: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       loadWasmPlay: () => ke,
-       loadWasmPlayAhead: () => qe,
-       loadWasmPreviews: () => fe
+   37730: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => cW
```

#### 47. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L763-L769` → after: `L792-L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L792-L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L792-L796) · [Before (L763-L769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L763-L769)

```diff
-     var ye = He(3465),
-       be = He(2342),
-       Me = He(2170),
-       Ke = He(5046),
-       Ue = He(3892),
-       Fe = He(9683);
-     let Je = null;
+     var mW = OW(327),
+       EW = OW(25),
+       NW = OW(37735),
+       PW = OW(1729),
+       LW = OW(2085);
```

#### 48. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L771-L772` → after: `L798-L804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L798-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L798-L804) · [Before (L771-L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L771-L772)

```diff
-     function oe() {
-       return Promise.all([He.e(86), He.e(89), He.e(103), He.e(234), He.e(233), He.e(150), He.e(216), He.e(243), He.e(155), He.e(101), He.e(244), He.e(75)]).then((() => He(41771)))
+     function cW(WW, iW) {
+       var OW, cW, wW;
+       if (!EW.d.get("isKeydownEnabled") || WW.repeat) return;
+       const tW = WW.code;
+       "Escape" === WW.key ? (0, PW.h)(WW) : null !== (OW = LW.v.OpenSettings) && void 0 !== OW && OW.includes(tW) ? (0, PW.s)(WW, mW.m.SETTINGS) : null !== (cW = LW.v.OpenCharacterCustomization) && void 0 !== cW && cW.includes(tW) ? (0, NW.e)() || (0, PW.s)(WW, mW.m.CUSTOMISATION … [truncated]
+         showDebugOverlay: !EW.d.get("showDebugOverlay")
+       })
```

#### 49. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L776` → after: `L827-L828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L827-L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L827-L828) · [Before (L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L776)

```diff
-       Promise.all([He.e(84), He.e(87), He.e(85), He.e(86), He.e(103), He.e(100), He.e(300), He.e(207), He.e(250), He.e(274), He.e(244), He.e(54)]).then((() => He(42095))).catch((() => {}))
+       let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PW.j;
+       (0, NW.h)(WW, LW)
```

#### 50. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L780-L789` → after: `L832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L832) · [Before (L780-L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L780-L789)

```diff
-       return Ke.d.cancelDownloadForJoin(), (0, Ue.b)(), (0, be.g)(), (0, Fe.g)(), (0, Me.i)(), Re(), Promise.all([He.e(89), He.e(103), He.e(234), He.e(233), He.e(150), He.e(155), He.e(70)]).then((() => He(42125))).then((ee => {
-         let {
-           startJoinLoad: ie
-         } = ee;
-         ie()
-       }), (() => {})), Je ??= oe().then((ee => (ee.startWasmPlay(), ee.followPageUiPack((ee => {
-         ye.c.showGamePack(ee)
-       })), ee)), (ee => {
-         throw Je = null, ee
-       })), Je
+       (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PW.j).setItem(wW, !0)
```

#### 51. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L793` → after: `L836-L837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L836-L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L836-L837) · [Before (L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L793)

```diff
-       return Re(), He.e(124).then((() => He(42130))).catch((() => {})), oe().then((() => {}))
+       let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PW.j;
+       return (0, NW.b)(WW, LW)
```

#### 52. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L797-L799` → after: `L888-L937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L888-L937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L888-L937) · [Before (L797-L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L797-L799)

```diff
-       return oe().then((ee => {
-         ee.startWasmPreviews(), ee.prefetchWasmPreviews()
-       }))
+       var WW, iW;
+       return [...null !== (WW = navigator.languages) && void 0 !== WW ? WW : [null !== (iW = navigator.language) && void 0 !== iW ? iW : "none"], "EN-gb"]
+     }
+ 
+     function SW(WW, iW, OW, SW, YW) {
+       const yW = (0, mW.i)(iW) ? (0, mW.n)(iW) : null,
+         TW = WW.isLoggedIn() && void 0 !== (0, EW.c)(NW.k, lW.siteUsed) ? (0, sW.g)() : null,
+         JW = {
+           cookies: (0, AW.getAllCookiesForGameNameWithVariation)(iW),
+           isMobile: (0, xW.isMobile)(),
+           isUsingCustomGameTexturePack: null !== yW && YW(yW),
+           generalCookies: {
+             joinDiscord: !!UW.i.getItem("DiscordPressed"),
+             newGo: ZW.c,
+             ...WW.getMetricsCookies(),
+             trafficCode: SW,
+ ... (34 more added lines; see GitHub link above)
```

#### 53. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L802` → after: `L940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L940) · [Before (L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L802)

```diff
-   9669: (ee, ie, He) => {
+   5713: (WW, iW, OW) => {
```

#### 54. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L805-L808` → after: `L943-L947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L943-L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L943-L947) · [Before (L805-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L805-L808)

```diff
-       h: () => Ke,
-       l: () => Ue,
-       n: () => Je,
-       o: () => Fe
+       e: () => xW,
+       i: () => cW,
+       m: () => AW,
+       o: () => wW,
+       p: () => lW
```

#### 55. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L810-L811` → after: `L949-L984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L949-L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L949-L984) · [Before (L810-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L810-L811)

```diff
-     var ye = He(186),
-       be = He(5018);
+     var mW = OW(5721),
+       EW = OW(5725);
+     const NW = !1,
+       PW = mW.h.map((WW => {
+         const iW = [];
+         for (let NW = 1; NW <= WW.reach; NW++) iW.push(EW.j[(0, mW.d)(WW.source, NW)].id);
+         const OW = "water" === WW.family;
+         return Object.freeze({
+           name: WW.kind,
+           family: WW.family,
+           reach: WW.reach,
+           stepTicks: OW ? 5 : 10,
+           slopeDistance: OW ? 4 : 2,
+           sourceId: EW.j[WW.source].id,
+           fallingId: EW.j[(0, mW.b)(WW.source)].id,
+           flowingIds: Object.freeze(iW),
+ ... (20 more added lines; see GitHub link above)
```

#### 56. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L814` → after: `L987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L987) · [Before (L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L814)

```diff
-       return Ke(ee) === ye.c.gameOrPluginOnPlayerAuthRejected.code
+       return PW.find((iW => iW.name === WW))
```

#### 57. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L818` → after: `L991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L991) · [Before (L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L818)

```diff
-       return "object" === typeof ee && null !== ee ? ee.code : void 0
+       return null === WW ? void 0 : LW.get(WW)
```

#### 58. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L822-L823` → after: `L999-L1000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L999-L1000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L999-L1000) · [Before (L822-L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L822-L823)

```diff
-       var ie;
-       return null !== (ie = Object.keys(be.e).find((ie => be.e[ie] === ee))) && void 0 !== ie ? ie : null
+       var iW, OW;
+       return null !== (iW = null === (OW = wW(WW)) || void 0 === OW ? void 0 : OW.kind.family) && void 0 !== iW ? iW : lW(WW)
```

#### 59. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L827-L833` → after: `L1004-L1005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R1004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L1004-L1005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L1004-L1005) · [Before (L827-L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L827-L833)

```diff
-       return "notWhitelisted" === ee ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
-     }
-     const Je = {
-       private: "customLobby:cantJoinPrivate",
-       notWhitelisted: "customLobby:cantJoinNotWhitelisted",
-       banned: "customLobby:cantJoinBanned",
-       adminLocked: "customLobby:cantJoinAdminLocked"
+       var iW;
+       return null === WW ? null : null !== (iW = ZW.get(WW)) && void 0 !== iW ? iW : null
```

#### 60. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L835-L841` → after: `L1007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R1007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L1007) · [Before (L835-L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L835-L841)

```diff
-   },
-   9663: (ee, ie, He) => {
-     He.d(ie, {
-       b: () => Je,
-       c: () => Fe
-     });
-     var ye = He(347);
+     EW.j.Obsidian.id, EW.j["Messy Stone"].id;
```

#### 61. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L843-L848` → after: `L1009-L1012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R1009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L1009-L1012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L1009-L1012) · [Before (L843-L848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L843-L848)

```diff
-     function be(ee) {
-       if (!ee.startsWith("{")) return ee;
-       let ie;
-       try {
-         ie = JSON.parse(ee)
-       } catch {
+     function AW() {
+       let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {
+         let WW = 0;
+         for (const iW of PW) WW = Math.max(WW, iW.stillId, iW.sourceId, iW.fallingId, ...iW.flowingIds);
```

#### 62. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L851-L863` → after: `L1020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R1020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L1020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L1020) · [Before (L851-L863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L851-L863)

```diff
-       return function(ee) {
-         if (null === (0, ye.Be)(ee)) return !1;
-         const {
-           params: ie
-         } = ee;
-         return void 0 === ie || "object" === typeof ie && null !== ie && Object.values(ie).every((ee => "string" === typeof ee))
-       }(ie) ? ie : ee
-     }
-     var Me = He(1127),
-       Ke = He(1196);
- 
-     function Ue(ee) {
-       return (0, Me.s)(Ke.f.get().getCurrentLanguageCode(), ee.translationKey, ee.params)
+       return iW
```

#### 63. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L865-L868` → after: `L1022-L1030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R1022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L1022-L1030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L1022-L1030) · [Before (L865-L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L865-L868)

```diff
- 
-     function Fe(ee) {
-       const ie = be(ee);
-       return "string" === typeof ie ? ie : Ue(ie)
+   },
+   40189: (WW, iW, OW) => {
+     function mW(WW, iW, OW, mW, EW) {
+       var NW = {};
+       return Object.keys(mW).forEach((function(WW) {
+         NW[WW] = mW[WW]
+       })), NW.enumerable = !!NW.enumerable, NW.configurable = !!NW.configurable, ("value" in NW || NW.initializer) && (NW.writable = !0), NW = OW.slice().reverse().reduce((function(OW, mW) {
+         return mW(WW, iW, OW) || OW
+       }), NW), EW && void 0 !== NW.initializer && (NW.value = NW.initializer ? NW.initializer.call(EW) : void 0, NW.initializer = void 0), void 0 === NW.initializer && (Object.defineProperty(WW, iW, NW), NW = null), NW
```

#### 64. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L870-L877` → after: `L1032-L1042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R1032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L1032-L1042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/123.js#L1032-L1042) · [Before (L870-L877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/123.js#L870-L877)

```diff
- 
-     function Je(ee) {
-       const ie = be(ee);
-       return "string" === typeof ie ? ie : Ue({
-         translationKey: "moderation:kicked",
-         params: {
-           reason: Ue(ie)
-         }
+     OW.d(iW, {
+       c: () => mW
+     })
+   },
+   40181: (WW, iW, OW) => {
+     function mW(WW, iW, OW, mW) {
+       OW && Object.defineProperty(WW, iW, {
+         enumerable: OW.enumerable,
+         configurable: OW.configurable,
+         writable: OW.writable,
+         value: OW.initializer ? OW.initializer.call(mW) : void 0
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/124.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/124.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c)

#### 1. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/124.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/124.js#L4)

```diff
-   5491: (ee, ie, He) => {
+   5807: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/124.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/124.js#L6)

```diff
-       e: () => be
+       b: () => EW,
+       f: () => NW
```

#### 3. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L8-L32` → after: `L9-L1403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L9-L1403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/124.js#L9-L1403) · [Before (L8-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/124.js#L8-L32)

```diff
-     var ye = He(1141);
-     async function be(ee) {
-       const ie = await fetch(`${ye.clientSideServerUrls.s3Url}/${ee}`, {
-         headers: {
-           Accept: "application/json"
-         }
-       });
-       if (404 === ie.status || 403 === ie.status) return null;
-       if (!ie.ok) throw new Error(`Failed to download the texture pack (${ie.status})`);
-       return await ie.json()
-     }
-   },
-   42130: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       gamePackSource: () => Me
-     });
- ... (9 more removed lines; see GitHub link above)
+     var mW = OW(5766);
+     const EW = "Air",
+       NW = Object.freeze(new mW.h(EW, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
+   },
+   28184: WW => {
+     WW.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAD4klEQVR4nO3cP2vbQBjH8XtLImAInfJ69BYCnavhtu7JkrG0Htq0Y7cOHprF4GaonyaBppChUApdrsSxXdfoz8kn+bmzvsMPDInlR/d8bP07yWT20jTEJR7TQVwENfSSfay8dgBgAQAACwAAWAAAwAIAABYAALAAMAB4 … [truncated]
+   },
+   34226: WW => {
+     WW.exports = "data:model/gltf-binary;base64,Z2xURgIAAADsSwAAtDQAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImdsVEYtVHJhbnNmb3JtIHY0LjMuMCIsInZlcnNpb24iOiIyLjAifSwiYWNjZXNzb3JzIjpbeyJ0eXBlIjoiU0NBTEFSIiwiY29tcG9uZW50VHlwZSI6NTEyMywiY291bnQiOjM2fSx7InR5cGUiOiJWRUMzIiwiY29tcG9uZW50VHlw … [truncated]
+   },
+   34231: WW => {
+     WW.exports = "data:model/gltf-binary;base64,Z2xURgIAAABkWAAACBEAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImdsVEYtVHJhbnNmb3JtIHY0LjMuMCIsInZlcnNpb24iOiIyLjAifSwiZXh0cmFzIjp7ImJsb3hkQnVpbGRIYXNoIjoiZDk5YzM4OTQifSwiYWNjZXNzb3JzIjpbeyJ0eXBlIjoiU0NBTEFSIiwiY29tcG9uZW50VHlwZSI6NTEyNSwi … [truncated]
+   },
+   28186: WW => {
+     WW.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAD4klEQVR4nO3cP2vbQBjH8XtLImAInfJ69BYCnavhtu7JkrG0Htq0Y7cOHprF4GaonyaBppChUApdrsSxXdfoz8kn+bmzvsMPDInlR/d8bP07yWT20jTEJR7TQVwENfSSfay8dgBgAQAACwAAWAAAwAIAABYAALAAMAB4 … [truncated]
+   },
+ ... (1379 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/125.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/125.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203c)

#### 1. `bundles/bloxd.io/chunks/js/125.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203cR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203c) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/125.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/125.js#L2)

```diff
- export const ids = [124, 125];
+ export const ids = [125];
```

#### 2. `bundles/bloxd.io/chunks/js/125.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203c) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/125.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/125.js#L4-L6)

```diff
-   5491: (ee, ie, He) => {
-     He.d(ie, {
-       e: () => be
+   37474: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       CreateCustomLobby: () => nW
```

#### 3. `bundles/bloxd.io/chunks/js/125.js` (Changed code · before: `L8-L13` → after: `L8-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203cR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203c) · [After (L8-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/125.js#L8-L79) · [Before (L8-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/125.js#L8-L13)

```diff
-     var ye = He(1141);
-     async function be(ee) {
-       const ie = await fetch(`${ye.clientSideServerUrls.s3Url}/${ee}`, {
-         headers: {
-           Accept: "application/json"
-         }
+     OW(37480);
+     var mW = OW(5318),
+       EW = OW(62),
+       NW = OW(1782),
+       PW = OW(1089),
+       LW = OW.n(PW),
+       cW = OW(4292),
+       wW = OW(1111),
+       tW = OW(1185),
+       ZW = OW(5282),
+       xW = OW(1532),
+       lW = OW(37486),
+       AW = OW(1172),
+       bW = OW(1365),
+       jW = OW(1605),
+       UW = OW(25),
+ ... (56 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/125.js` (Changed code · before: `L15-L17` → after: `L81-L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203cR81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203c) · [After (L81-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/125.js#L81-L475) · [Before (L15-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/125.js#L15-L17)

```diff
-       if (404 === ie.status || 403 === ie.status) return null;
-       if (!ie.ok) throw new Error(`Failed to download the texture pack (${ie.status})`);
-       return await ie.json()
+       const [GW, IW] = (0, EW.useState)(RW), [aW, rW] = (0, EW.useState)(null);
+ 
+       function zW(WW, iW) {
+         IW({
+           ...GW,
+           baseOptions: {
+             ...GW.baseOptions,
+             [WW]: iW
+           }
+         })
+       }
+ 
+       function FW(WW, iW) {
+         IW({
+           ...GW,
+           listedOptions: {
+ ... (379 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/125.js` (Changed code · before: `L20-L22` → after: `L478-L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203cR478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203c) · [After (L478-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/125.js#L478-L480) · [Before (L20-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/125.js#L20-L22)

```diff
-   42130: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       gamePackSource: () => Me
+   37497: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => cW
```

#### 6. `bundles/bloxd.io/chunks/js/125.js` (Changed code · before: `L24-L25` → after: `L482-L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203cR482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203c) · [After (L482-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/125.js#L482-L486) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/125.js#L24-L25)

```diff
-     var ye = He(5491),
-       be = He(1490);
+     var mW = OW(1089),
+       EW = OW.n(mW),
+       NW = OW(62),
+       PW = OW(5277),
+       LW = OW(1283);
```

#### 7. `bundles/bloxd.io/chunks/js/125.js` (Changed code · before: `L28-L31` → after: `L489-L503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203cR489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203c) · [After (L489-L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/125.js#L489-L503) · [Before (L28-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/125.js#L28-L31)

```diff
-       return {
-         packKey: async ie => (await be.b.getGame(ee, ie, !0)).customTexturePackKey,
-         fetchPack: ye.e
-       }
+       let {
+         locked: iW,
+         children: OW
+       } = WW;
+       const mW = (0, NW.useRef)(null),
+         cW = (0, PW.d)(mW, "y");
+       return (0, LW.jsx)("div", {
+         ref: mW,
+         className: EW()("CreateCustomLobbyBody", {
+           CreateCustomLobbyBodyMoreAbove: cW.before,
+           CreateCustomLobbyBodyMoreBelow: cW.after
+         }),
+         "data-pad-ignore": iW || void 0,
+         children: OW
+       })
```

#### 8. `bundles/bloxd.io/chunks/js/125.js` (Changed code · before: `L34-L40` → after: `L506-L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203cR506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203c) · [After (L506-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/125.js#L506-L509) · [Before (L34-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/125.js#L34-L40)

```diff
-   54263: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       fetchGuestContext: () => ke,
-       guestJoinTarget: () => Be,
-       guestJoinWithPack: () => fe,
-       guestPackForGame: () => qe,
-       invalidateGuestTrafficCode: () => ze
+   37486: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => tW,
+       g: () => xW
```

#### 9. `bundles/bloxd.io/chunks/js/125.js` (Changed code · before: `L42-L52` → after: `L511-L553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203cR511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203c) · [After (L511-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/125.js#L511-L553) · [Before (L42-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/125.js#L42-L52)

```diff
-     var ye = He(1141),
-       be = He(1490),
-       Me = He(97),
-       Ke = He(37252),
-       Ue = He(1083),
-       Fe = He(41864),
-       Je = He(42130),
-       oe = He(41814);
- 
-     function Re() {
-       if (Me.featureFlags.useTurnstile) throw new Fe.TurnstilePageError
+     var mW = OW(62),
+       EW = OW(1422),
+       NW = OW(1172),
+       PW = OW(1383),
+       LW = OW(4718),
+       cW = OW(5686),
+       wW = OW(1283);
+ 
+     function tW(WW) {
+       let {
+         loading: iW,
+         schematics: OW,
+         onSchematicPicked: mW,
+         selectedSchematicIdList: EW = [],
+         disableAutoExport: cW
+       } = WW;
+ ... (27 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/125.js` (Changed code · before: `L55-L56` → after: `L556-L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203cR556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203c) · [After (L556-L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/125.js#L556-L595) · [Before (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/125.js#L55-L56)

```diff
-     function ke() {
-       return (0, Ue.fetchAnonymousUserContext)(!0).catch((ee => (console.warn("the guest context didn't load", ee), null)))
+     function ZW(WW) {
+       let {
+         ownedSchematics: iW,
+         currentWorldSchematicId: OW,
+         onClose: EW
+       } = WW;
+       const {
+         t: PW
+       } = (0, NW.B)(), [LW, ZW] = (0, mW.useState)(null);
+       return (0, wW.jsxs)("div", {
+         className: "SchematicListWindow",
+         children: [null === LW && (0, wW.jsxs)(wW.Fragment, {
+           children: [(0, wW.jsx)("h1", {
+             className: "SchematicPopupTitle",
+             children: PW("worldBuilder:schematicList")
+           }), (0, wW.jsx)("h2", {
+ ... (24 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/125.js` (Changed code · before: `L58-L65` → after: `L597-L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203cR597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203c) · [After (L597-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/125.js#L597-L613) · [Before (L58-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/125.js#L58-L65)

```diff
-     async function qe(ee, ie, He, ye) {
-       try {
-         const be = await He;
-         if (null === be) return void console.warn(`the texture pack step for ${ee} has no guest context: the pack in play stays`);
-         await ie.packForGame(ee, (0, Je.gamePackSource)(be), ye)
-       } catch (be) {
-         console.warn(`the texture pack step for ${ee} failed: the pack in play stays`, be)
-       }
+ 
+     function xW(WW) {
+       let {
+         ownedSchematics: iW,
+         currentWorldSchematicId: OW,
+         onClose: mW
+       } = WW;
+       EW.NotificationProvider.showCustomPopup({
+         body: WW => (0, wW.jsx)(ZW, {
+           ownedSchematics: iW,
+           currentWorldSchematicId: OW,
+           onClose: WW
+         }),
+         middleScreenPopupClassName: "SchematicPopup",
+         onClose: mW,
+         unlockPointerKey: "schematicListPopup"
+ ... (1 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/125.js` (Changed code · before: `L67-L70` → after: `L615-L663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203cR615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203c) · [After (L615-L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/125.js#L615-L663) · [Before (L67-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/125.js#L67-L70)

```diff
-     async function fe(ee, ie, He, ye) {
-       Re();
-       const be = ke();
-       return await He(((ie, He) => qe(ee, ie, be, He))), Be(ee, ie, ye(), await be)
+   },
+   37489: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => wW,
+       f: () => tW
+     });
+     OW(62);
+     var mW = OW(1089),
+       EW = OW.n(mW),
+       NW = OW(5318),
+       PW = OW(327),
+       LW = OW(1172),
+       cW = OW(1283);
+ 
+     function wW(WW) {
+       let {
+ ... (33 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/125.js` (Changed code · before: `L72-L80` → after: `L665-L702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203cR665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203c) · [After (L665-L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/125.js#L665-L702) · [Before (L72-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/125.js#L72-L80)

```diff
-     let Te = null,
-       pe = null;
-     async function Xe() {
-       if ((null === Te || Te.hasExpired()) && (pe ??= (0, Ue.fetchAnonymousUserContext)(!0).then((ee => {
-           Te = ee
-         })).finally((() => {
-           pe = null
-         })), await pe), null === Te) throw new Error("no guest context to post as");
-       return Te.getMetricsCookies()
+ 
+     function tW(WW) {
+       let {
+         mapTypes: iW,
+         value: OW,
+         onChange: mW,
+         showAll: wW,
+         disabled: tW = !1,
+         children: ZW
+       } = WW;
+       const {
+         t: xW
+       } = (0, LW.B)();
+       return (0, cW.jsxs)("div", {
+         className: EW()("BloxdForm MapTypeForm", {
+           BasicOptions: !wW
+ ... (22 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/125.js` (Changed code · before: `L82-L110` → after: `L704-L714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203cR704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203c) · [After (L704-L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/125.js#L704-L714) · [Before (L82-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/125.js#L82-L110)

```diff
-     async function ze() {
-       var ee;
-       await (null === (ee = Te) || void 0 === ee ? void 0 : ee.invalidateTrafficCode())
-     }
-     async function Be(ee, ie, He) {
-       let Me = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
-       Re();
-       const Fe = null !== Me && void 0 !== Me ? Me : await (0, Ue.fetchAnonymousUserContext)(!0);
-       if (Te = Fe, Fe.isLoggedIn()) throw new Error("the shell's page joins as a guest only");
-       const Je = await be.b.matchmakePlayer(Fe, ie, ee, (0, Ke.e)()),
-         ke = performance.now();
-       if (!("gameServerHost" in Je)) throw new Error(`matchmaking refused: ${Je.failReason}`);
-       const qe = ye.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(Je.gameServerHost);
-       if (qe.isError()) throw new Error(`no socket URL for ${Je.gameServerHost}: ${qe.asError().message}`);
-       const fe = {
-         endpoint: qe.getValue(),
- ... (13 more removed lines; see GitHub link above)
+   },
+   5807: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => EW,
+       f: () => NW
+     });
+     var mW = OW(5766);
+     const EW = "Air",
+       NW = Object.freeze(new mW.h(EW, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
+   },
+   37480: () => {}
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/126.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/126.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33b)

#### 1. `bundles/bloxd.io/chunks/js/126.js` (Changed code · before: `L4` → after: `L4-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33b) · [After (L4-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/126.js#L4-L13) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/126.js#L4)

```diff
-   5501: (ee, ie, He) => {
+   42015: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       FORMER_BLOCK_IMAGE_NAMES: () => mW.b,
+       textureAnimationData: () => EW.y,
+       textureNameToIndex: () => EW.z
+     });
+     var mW = OW(39955),
+       EW = OW(5725)
+   },
+   5807: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/126.js` (Changed code · before: `L6-L9` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33bR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33b) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/126.js#L15-L16) · [Before (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/126.js#L6-L9)

```diff
-       c: () => fe,
-       e: () => Ee,
-       f: () => Te,
-       j: () => Be
+       b: () => EW,
+       f: () => NW
```

#### 3. `bundles/bloxd.io/chunks/js/126.js` (Changed code · before: `L11-L135` → after: `L18-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33bR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33b) · [After (L18-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/126.js#L18-L27) · [Before (L11-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/126.js#L11-L135)

```diff
-     var ye = He(59),
-       be = He(5510),
-       Me = He(4729),
-       Ke = He(1351),
-       Ue = He(5537),
-       Fe = He(1053),
-       Je = He.n(Fe),
-       oe = He(1340),
-       Re = He(1768),
-       ke = He(5544),
-       qe = He(1228);
- 
-     function fe(ee) {
-       let {
-         label: ie,
-         onClick: He,
- ... (109 more removed lines; see GitHub link above)
+     var mW = OW(5766);
+     const EW = "Air",
+       NW = Object.freeze(new mW.h(EW, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
+   },
+   39955: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => mW,
+       f: () => EW
+     });
+     const mW = new Map(["graphite", "football", "torch", "torch_blue", "torch_cyan", "torch_green", "torch_orange", "torch_purple", "torch_red"].map((WW => [WW, `${WW}_block`])));
```

#### 4. `bundles/bloxd.io/chunks/js/126.js` (Changed code · before: `L139-L1091` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33bR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33b) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/126.js#L31) · [Before (L139-L1091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/126.js#L139-L1091)

```diff
-       return (null !== (ie = String(ee).split(".")[1]) && void 0 !== ie ? ie : "").length
-     }
- 
-     function ze(ee) {
-       let {
-         value: ie,
-         min: He,
-         max: Me,
-         step: Ke,
-         onChange: Ue,
-         orientation: Fe,
-         reverse: Je,
-         setIsChanging: oe,
-         tooltip: Re,
-         labels: fe,
-         handleLabel: Te,
- ... (937 more removed lines; see GitHub link above)
+       return null !== (iW = mW.get(WW)) && void 0 !== iW ? iW : WW
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/127.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/127.js` (38 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009)

#### 1. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/127.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/127.js#L4)

```diff
-   5578: (ee, ie, He) => {
+   42134: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L6-L7` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/127.js#L6-L8) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/127.js#L6-L7)

```diff
-       e: () => oe,
-       f: () => Je
+       d: () => cW,
+       g: () => LW,
+       j: () => PW
```

#### 3. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L9-L14` → after: `L10-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L10-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/127.js#L10-L12) · [Before (L9-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/127.js#L9-L14)

```diff
-     var ye = He(59),
-       be = He(1438),
-       Me = He(1127),
-       Ke = He(97),
-       Ue = He(3447),
-       Fe = He(1228);
+     var mW = OW(42137),
+       EW = OW(5546),
+       NW = OW(42146);
```

#### 4. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L16-L52` → after: `L14-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L14-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/127.js#L14-L23) · [Before (L16-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/127.js#L16-L52)

```diff
-     function Je() {
-       return !(0, Ke.isMobile)()
-     }
- 
-     function oe(ee) {
-       let {
-         disabled: ie,
-         openFolderPicker: He,
-         onFiles: Ke
-       } = ee;
-       const {
-         t: oe
-       } = (0, Me.v)(), Re = (0, ye.useRef)(null);
-       return (0, Fe.jsxs)("div", {
-         className: "PackPickButtons",
-         "data-pad-mouse-only": !0,
- ... (21 more removed lines; see GitHub link above)
+     function PW(WW) {
+       return WW.payloadKind === EW.hc.Msgpack ? (0, mW.d)(WW.payload) : void 0
+     }
+ 
+     function LW(WW, iW) {
+       if (iW.payloadKind === EW.hc.Bytes || iW.payloadKind === EW.hc.MsgpackBin) return (0, NW.c)(WW, iW.payload)
+     }
+ 
+     function cW(WW) {
+       return null !== WW && "object" === typeof WW
```

#### 5. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L55` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/127.js#L26) · [Before (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/127.js#L55)

```diff
-   5557: (ee, ie, He) => {
+   42149: (WW, iW, OW) => {
```

#### 6. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L57` → after: `L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/127.js#L28) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/127.js#L57)

```diff
-       d: () => Ue,
+       c: () => ZW,
```

#### 7. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L59` → after: `L30-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L30-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/127.js#L30-L32) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/127.js#L59)

```diff
-       i: () => Me
+       i: () => lW,
+       j: () => tW,
+       k: () => jW
```

#### 8. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L61-L62` → after: `L34-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L34-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/127.js#L34-L40) · [Before (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/127.js#L61-L62)

```diff
-     var ye = He(5563);
-     const be = [ee => ee.strict ? "strict" : "nonStrict", ee => ee.program];
+     var mW = OW(5546),
+       EW = OW(42158);
+     const NW = new Map,
+       PW = new Set,
+       LW = new Set;
+     let cW = 0,
+       wW = 0;
```

#### 9. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L65-L68` → after: `L43-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L43-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/127.js#L43-L46) · [Before (L65-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/127.js#L65-L68)

```diff
-       let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
-       const ye = {};
-       for (const be in He) ye[be] = `\0${be}\0`;
-       return ee(ie, ye).replace(/\0(\w+)\0/g, ((ee, ie) => He[ie]))
+       let OW = NW.get(WW);
+       return OW || (OW = new Set, NW.set(WW, OW)), OW.add(iW), () => {
+         OW.delete(iW)
+       }
```

#### 10. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L71-L72` → after: `L49-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L49-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/127.js#L49-L50) · [Before (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/127.js#L71-L72)

```diff
-     function Ke(ee) {
-       return null === ee.file ? null : ee.line > 0 ? `${ee.file}:${ee.line}` : ee.file
+     function ZW() {
+       return 0 !== cW
```

#### 11. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L76-L79` → after: `L54-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L54-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/127.js#L54-L56) · [Before (L76-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/127.js#L76-L79)

```diff
-       const ie = new Map(ee.map((ee => [Fe(ee).join("."), ee])));
-       if (0 === ie.size) return [];
-       const He = oe([...ie.values()]);
-       return 0 === He[0].length ? [] : He
+       return PW.add(WW), () => {
+         PW.delete(WW)
+       }
```

#### 12. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L83` → after: `L60-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L60-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/127.js#L60-L62) · [Before (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/127.js#L83)

```diff
-       return be.map((ie => ie(ee)))
+       return LW.add(WW), () => {
+         LW.delete(WW)
+       }
```

#### 13. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L85` → after: `L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/127.js#L64) · [Before (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/127.js#L85)

```diff
-     const Je = be.map((ee => new Set(ye.g.map(ee)).size));
+     const AW = "A raw message listener threw";
```

#### 14. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L88-L96` → after: `L67-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L67-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/127.js#L67-L71) · [Before (L88-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/127.js#L88-L96)

```diff
-       const ie = be.map((ie => new Set(ee.map(ie)))),
-         He = ie.reduce(((ee, ie) => ee * ie.size), 1),
-         ye = ie.every(((ee, ie) => 1 === ee.size || ee.size === Je[ie]));
-       if (He === ee.length && ye) return [be.filter(((ee, He) => 1 === ie[He].size)).map((ie => ie(ee[0])))];
-       let Me = null;
-       for (let Ke = 0; Ke < be.length; Ke++) {
-         if (1 === ie[Ke].size) continue;
-         const He = Re(ee, be[Ke]).flatMap(oe);
-         (null === Me || He.length < Me.length) && (Me = He)
+       let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : PW;
+       for (const mW of iW) try {
+         mW()
+       } catch (OW) {
+         WW ? (0, EW.n)(OW, AW) : console.error(AW, OW)
```

#### 15. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L102-L108` → after: `L106-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L106-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/127.js#L106-L126) · [Before (L102-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/127.js#L102-L108)

```diff
-       const He = new Map;
-       for (const be of ee) {
-         var ye;
-         const ee = ie(be);
-         He.set(ee, [...null !== (ye = He.get(ee)) && void 0 !== ye ? ye : [], be])
-       }
-       return [...He.values()]
+       const OW = WW.queries.entityName(iW);
+       if (OW === EW.Yc) return;
+       const PW = WW.memoryData(WW.scratch(), 4 + OW, 4, "entity_name's answer");
+       if (!PW) return;
+       const LW = PW.getUint32(0, !0),
+         cW = NW.decode(new Uint8Array(PW.buffer, PW.byteOffset + 4, OW));
+       return (0, mW.b)(cW, !1, LW === EW.be ? null : LW)
+     }
+ 
+     function cW(WW, iW, OW) {
+       const mW = PW.encode(OW);
+       if (mW.length > EW.Mb) return !1;
+       const NW = WW.memoryView(Uint8Array, WW.scratch(), mW.length, "has_effect's name");
+       return !!NW && (NW.set(mW), 1 === WW.queries.hasEffect(iW, mW.length))
+     }
+ 
+ ... (5 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L111-L113` → after: `L129-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L129-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/127.js#L129-L132) · [Before (L111-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/127.js#L111-L113)

```diff
-   7238: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       ShaderPackPublishForm: () => Be
+   42137: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => EW,
+       e: () => tW
```

#### 17. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L115-L163` → after: `L134-L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L134-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/127.js#L134-L217) · [Before (L115-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/127.js#L115-L163)

```diff
-     var ye = He(59),
-       be = He(7206),
-       Me = He(189),
-       Ke = He(5570),
-       Ue = He(1323),
-       Fe = He(1438),
-       Je = He(1674),
-       oe = He(1075),
-       Re = He(7242),
-       ke = He(7247),
-       qe = He(1490),
-       fe = He(1127),
-       Te = He(7249),
-       pe = He(7283),
-       Xe = He(7201),
-       ze = He(1228);
- ... (33 more removed lines; see GitHub link above)
+     const mW = new TextDecoder;
+ 
+     function EW(WW) {
+       const iW = new NW(WW),
+         OW = iW.value();
+       if (iW.at !== WW.length) throw new Error(`msgpack: ${WW.length-iW.at} bytes after the value`);
+       return OW
+     }
+     class NW {
+       constructor(WW) {
+         this.bytes = WW, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(WW.buffer, WW.byteOffset, WW.byteLength)
+       }
+       value() {
+         const WW = this.u8();
+         if (WW <= 127) return WW;
+         if (WW >= 224) return WW - 256;
+ ... (68 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L165-L180` → after: `L219-L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L219-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/127.js#L219-L246) · [Before (L165-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/127.js#L165-L180)

```diff
-       })), Ie = !te && !We.isLoggedIn() && !Me.e.offlineMode, he = Ae.trim(), Ne = he.length < be.A, Ge = null !== Ze && !1 !== (null === (Re = Ze.validation) || void 0 === Re ? void 0 : Re.ok) && !Se && !Ne && !Ie && !te;
-       return (0, ze.jsxs)("div", {
-         className: "ShaderPackPublishForm",
-         children: [(0, ze.jsx)("p", {
-           className: "ShaderPackPublishIntro",
-           children: Be ? de("shaderPackListing:uploadIntro", {
-             minutes: String(be.D / 6e4)
-           }) : de("shaderPackListing:publishIntro")
-         }), (0, ze.jsx)(Oe, {}), Ie && (0, ze.jsx)("div", {
-           className: "ShaderPackPublishNote Warning",
-           children: de("shaderPackListing:publishNeedsLogin")
-         }), (0, ze.jsx)(ke.b, {
-           busy: Se,
-           disabled: Se || me,
-           onFiles: ee => {
-             we(null), se(ee)
+       }
+       take(WW) {
+         const iW = this.at;
+         if (iW + WW > this.bytes.length) throw new Error(`msgpack: ${WW} bytes past the end at ${iW}`);
+         return this.at = iW + WW, iW
+       }
+       u8() {
+         return this.view.getUint8(this.take(1))
+       }
+       u16() {
+         return this.view.getUint16(this.take(2), !1)
+       }
+       u32() {
+         return this.view.getUint32(this.take(4), !1)
+       }
+       int64(WW) {
+ ... (12 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L182-L314` → after: `L248-L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L248-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/127.js#L248-L301) · [Before (L182-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/127.js#L182-L314)

```diff
-         }), Ze && (0, ze.jsxs)("div", {
-           className: "ShaderPackPublishSummary",
-           children: [(0, ze.jsx)("div", {
-             className: "ShaderPackPublishPackName",
-             children: Ze.pack.manifest.name
-           }), (0, ze.jsxs)("div", {
-             className: "ShaderPackPublishPackSize",
-             children: [de("shaderPackListing:sizeValue", {
-               kilobytes: String((0, Xe.T)(Ze.sourceBytes))
-             }), " \xb7", " ", de("shaderPackListing:filesValue", {
-               files: String(Ze.pack.files.length)
-             })]
-           }), (0, ze.jsx)(Ee, {
-             picked: Ze
-           })]
-         }), !Be && (0, ze.jsxs)(ze.Fragment, {
- ... (117 more removed lines; see GitHub link above)
+           return EW
+         }
+         return mW.decode(OW.subarray(iW, iW + WW))
+       }
+       bin(WW) {
+         const iW = this.take(WW);
+         return this.bytes.subarray(iW, iW + WW)
+       }
+       enter() {
+         if (++this.depth > 512) throw new Error("msgpack: nested too deep")
+       }
+       array(WW) {
+         this.enter();
+         const iW = [];
+         for (let OW = 0; OW < WW; OW++) iW.push(this.value());
+         return this.depth--, iW
+ ... (38 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L316-L331` → after: `L303-L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L303-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/127.js#L303-L377) · [Before (L316-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/127.js#L316-L331)

```diff
-     function Oe() {
-       const {
-         t: ee
-       } = (0, fe.v)(), [ie, He] = ee("shaderPackListing:bloxdhubHelp", {
-         site: ge
-       }).split(ge);
-       return (0, ze.jsxs)("p", {
-         className: "ShaderPackPublishIntro",
-         children: [ie, (0, ze.jsx)("a", {
-           className: "ShaderPackPublishLink",
-           href: be.i,
-           target: "_blank",
-           rel: "noopener noreferrer",
-           children: be.d
-         }), He]
-       })
+     function tW(WW) {
+       const iW = new ZW;
+       return iW.value(WW, 0), iW.bytes()
+     }
+     class ZW {
+       constructor() {
+         this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
+       }
+       bytes() {
+         return this.buf.subarray(0, this.at)
+       }
+       value(WW, iW) {
+         if (iW > 512) throw new Error("msgpack: nested too deep");
+         switch (typeof WW) {
+           case "undefined":
+             return this.u8(212), this.u8(0), void this.u8(0);
+ ... (59 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L334` → after: `L380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/127.js#L380) · [Before (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/127.js#L334)

```diff
-   5563: (ee, ie, He) => {
+   42146: (WW, iW, OW) => {
```

#### 22. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L336-L338` → after: `L382-L386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L382-L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/127.js#L382-L386) · [Before (L336-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/127.js#L336-L338)

```diff
-       c: () => ye.e,
-       g: () => be,
-       h: () => ye.m
+       c: () => PW
+     });
+     var mW = OW(42131);
+     const EW = new TextDecoder("utf-8", {
+       ignoreBOM: !0
```

#### 23. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L340-L344` → after: `L388-L490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L388-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/127.js#L388-L490) · [Before (L340-L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/127.js#L340-L344)

```diff
-     var ye = He(5570);
-     const be = [!1, !0].flatMap((ee => ["terrain", "liquid", "model"].map((ie => ({
-       strict: ee,
-       program: ie
-     })))))
+     class NW {
+       constructor(WW) {
+         this.buf = WW, this.at = 0, this.view = null
+       }
+       bool() {
+         return 0 !== this.u8()
+       }
+       long() {
+         let WW = this.u8(),
+           iW = 127 & WW,
+           OW = 128;
+         for (; 128 & WW;) {
+           if (OW > 2 ** 63) throw new RangeError("avro: varint too long");
+           WW = this.u8(), iW += (127 & WW) * OW, OW *= 128
+         }
+         return iW % 2 === 1 ? -(iW + 1) / 2 : iW / 2
+ ... (87 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L346` → after: `L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/127.js#L492) · [Before (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/127.js#L346)

```diff
-   5570: (ee, ie, He) => {
+   42131: (WW, iW, OW) => {
```

#### 25. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L350-L354` → after: `L506-L515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L506-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/127.js#L506-L515) · [Before (L350-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/127.js#L350-L354)

```diff
-       e: () => ye,
-       h: () => Te,
-       k: () => Re,
-       m: () => be,
-       q: () => Me,
+       db: () => JW,
+       f: () => UW,
+       g: () => kW,
+       hb: () => AW,
+       j: () => YW,
+       kb: () => sW,
+       mb: () => bW,
+       n: () => mW,
+       o: () => NW,
+       pb: () => cW,
```

#### 26. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L356-L357` → after: `L517-L519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L517-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/127.js#L517-L519) · [Before (L356-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/127.js#L356-L357)

```diff
-       s: () => oe,
-       t: () => ke
+       tb: () => HW,
+       v: () => xW,
+       z: () => wW
```

#### 27. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L359` → after: `L521-L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L521-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/127.js#L521-L723) · [Before (L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/127.js#L359)

```diff
-     const ye = 5;
+     const mW = 2,
+       EW = 12,
+       NW = 27,
+       PW = 40,
+       LW = 52,
+       cW = 59,
+       wW = 63,
+       tW = 83,
+       ZW = 84,
+       xW = 89,
+       lW = 91,
+       AW = 93,
+       bW = 94,
+       jW = 95,
+       UW = 97,
+       kW = 101,
+ ... (187 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L362` → after: `L726-L727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L726-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/127.js#L726-L727) · [Before (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/127.js#L362)

```diff
-       return ee === ye
+       const iW = WW.index(4);
+       return 0 === iW ? WW.str() : 1 === iW ? WW.long() : 2 === iW ? WW.bool() : nW(WW)
```

#### 29. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L366` → after: `L731-L733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L731-L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/127.js#L731-L733) · [Before (L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/127.js#L366)

```diff
-       return [...ee.features]
+       return 0 === WW.index(2) ? null : function(WW) {
+         return WW.map(uW)
+       }(WW)
```

#### 30. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L373-L380` → after: `L737-L739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L737-L739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/127.js#L737-L739) · [Before (L373-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/127.js#L373-L380)

```diff
-       if ("object" !== typeof ee || null === ee || Array.isArray(ee)) return "The pack has no files.";
-       const ie = [];
-       for (const [He, ye] of Object.entries(ee)) {
-         if ("string" !== typeof ye) return `${He} isn't text.`;
-         ie.push({
-           path: He,
-           source: ye
-         })
+       return {
+         translationKey: WW.str(),
+         params: oW(WW)
```

#### 31. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L401-L403` → after: `L744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/127.js#L744) · [Before (L401-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/127.js#L401-L403)

```diff
-       const ie = {};
-       for (const He of ee) ie[He.path] = He.source;
-       return ie
+       return 0 === WW.index(2) ? null : WW.str()
```

#### 32. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L406-L407` → after: `L747-L761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L747-L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/127.js#L747-L761) · [Before (L406-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/127.js#L406-L407)

```diff
-     function Re(ee, ie) {
-       return ee < ie ? -1 : ee > ie ? 1 : 0
+     function vW(WW) {
+       return 0 === WW.index(2) ? null : function(WW) {
+         return {
+           color: eW(WW),
+           colour: eW(WW),
+           fontSize: eW(WW)
+         }
+       }(WW)
+     }
+ 
+     function gW(WW) {
+       return {
+         icon: WW.str(),
+         style: vW(WW)
+       }
```

#### 33. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L411-L414` → after: `L765-L792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L765-L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/127.js#L765-L792) · [Before (L411-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/127.js#L411-L414)

```diff
-       const ie = new TextEncoder;
-       let He = 0;
-       for (const {
-           source: ye
+       const iW = WW.index(3);
+       return 0 === iW ? {
+         string: WW.str()
+       } : 1 === iW ? {
+         styledEntityName: nW(WW)
+       } : {
+         styledTranslatedText: dW(WW)
+       }
+     }
+ 
+     function VW(WW) {
+       const iW = WW.index(3);
+       return 0 === iW ? null : 1 === iW ? WW.str() : WW.long()
+     }
+ 
+     function pW(WW) {
+ ... (12 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L416-L417` → after: `L794-L802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L794-L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/127.js#L794-L802) · [Before (L416-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/127.js#L416-L417)

```diff
-         of ee) He += ie.encode(ye).byteLength;
-       return He
+       }(WW)
+     }
+ 
+     function CW(WW) {
+       return {
+         str: DW(WW),
+         style: fW(WW),
+         clickableUrl: eW(WW)
+       }
```

#### 35. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L421-L424` → after: `L806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/127.js#L806) · [Before (L421-L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/127.js#L421-L424)

```diff
-       if (!ee.toLowerCase().endsWith(".wgsl")) return `${ee} isn't a .wgsl file.`;
-       if (ee.length > Fe) return `A file path is over ${Fe} characters.`;
-       if (ee.includes("\\") || /[\u0000-\u001f]/.test(ee)) return `${ee} isn't a valid file path.`;
-       return ee.split("/").some((ee => "" === ee || "." === ee || ".." === ee)) ? `${ee} isn't a valid file path.` : null
+       return WW.str()
```

#### 36. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L428-L487` → after: `L809-L944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L809-L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/127.js#L809-L944) · [Before (L428-L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/127.js#L428-L487)

```diff
-     function Te(ee, ie) {
-       let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
-       const ye = new Map;
-       ie.forEach(((ee, ie) => {
-         let {
-           numAnimStates: He,
-           animStartIdx: be
-         } = ee;
-         for (let Me = 1; Me < He; Me++) ye.set(be + Me - 1, ie)
-       }));
-       const be = Object.entries(ee),
-         Me = new Map;
-       for (const [Te, pe] of be) {
-         const ee = fe.exec(Te);
-         "1" === ee?.[2] && Me.set(ee[1], pe + 1)
-       }
- ... (44 more removed lines; see GitHub link above)
+     function BW(WW) {
+       return WW.LZ(XW)
+     }
+ 
+     function qW(WW) {
+       return 0 === WW.index(2) ? null : BW(WW)
+     }
+ 
+     function RW(WW) {
+       return {
+         type: WW.str(),
+         progress: WW.float(),
+         width: eW(WW),
+         height: eW(WW),
+         colours: qW(WW),
+         backgroundColour: eW(WW)
+ ... (120 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L489-L510` → after: `L946-L956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L946-L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/127.js#L946-L956) · [Before (L489-L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/127.js#L489-L510)

```diff
-         const He = Je.get(Te),
-           be = ee?.root ?? fe;
-         if (He !== be && qe.set(be, {
-             name: be,
-             texture: He,
-             kind: "frame"
-           }), ee) {
-           const ie = Me.get(ee.root);
-           Re[Te] = {
-             id: ie,
-             rotation: ee.rotation
-           }, ke.set(He, ie), qe.set(fe, {
-             name: fe,
-             texture: He,
-             kind: "rotation"
-           })
- ... (6 more removed lines; see GitHub link above)
+       }(WW)
+     }
+ 
+     function Pi(WW) {
+       return {
+         type: zW(WW),
+         progressBar: QW(WW),
+         timedClick: ii(WW),
+         gravityBar: Oi(WW),
+         precisionBar: mi(WW),
+         rhythmClick: Ni(WW)
```

#### 38. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L513-L524` → after: `L1009-L1011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R1009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L1009-L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/127.js#L1009-L1011) · [Before (L513-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/127.js#L513-L524)

```diff
-         named: [...ke].sort(((ee, ie) => {
-           let [He] = ee, [ye] = ie;
-           return He < ye ? -1 : He > ye ? 1 : 0
-         })).map((ee => {
-           let [ie, He] = ee;
-           return {
-             name: ie,
-             id: He
-           }
-         })),
-         aliases: [...qe.values()],
-         layers: Re
+         EE: WW.str(),
+         NE: WW.str(),
+         PE: WW.str()
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/128.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/128.js` (44 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf)

#### 1. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/128.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/128.js#L2)

```diff
- export const ids = [128, 131, 152, 153];
+ export const ids = [128];
```

#### 2. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L4-L14` → after: `L4-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L4-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/128.js#L4-L17) · [Before (L4-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/128.js#L4-L14)

```diff
-   5563: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => ye.e,
-       g: () => be,
-       h: () => ye.m
-     });
-     var ye = He(5570);
-     const be = [!1, !0].flatMap((ee => ["terrain", "liquid", "model"].map((ie => ({
-       strict: ee,
-       program: ie
-     })))))
+   5890: (WW, iW) => {
+     iW.b = function(WW, iW) {
+       if (WW && iW) {
+         var OW = Array.isArray(iW) ? iW : iW.split(","),
+           mW = WW.name || "",
+           EW = (WW.type || "").toLowerCase(),
+           NW = EW.replace(/\/.*$/, "");
+         return OW.some((function(WW) {
+           var iW = WW.trim().toLowerCase();
+           return "." === iW.charAt(0) ? mW.toLowerCase().endsWith(iW) : iW.endsWith("/*") ? NW === iW.replace(/\/.*$/, "") : EW === iW
+         }))
+       }
+       return !0
+     }
```

#### 3. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L16` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/128.js#L19) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/128.js#L16)

```diff
-   41618: (ee, ie, He) => {
+   5864: (WW, iW, OW) => {
```

#### 4. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L18-L19` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/128.js#L21) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/128.js#L18-L19)

```diff
-       b: () => Re,
-       installListedShaderPack: () => oe
+       e: () => li
```

#### 5. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L21-L32` → after: `L23-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L23-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/128.js#L23-L63) · [Before (L21-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/128.js#L21-L32)

```diff
-     var ye = He(7206),
-       be = He(5570),
-       Me = He(1141),
-       Ke = He(7249),
-       Ue = He(5563),
-       Fe = He(7290),
-       Je = He(7283);
-     async function oe(ee) {
-       const ie = await (0, Ke.loadPageShaderPackCompiler)();
-       if (null === ie) return {
-         kind: "failed",
-         reason: "compiler"
+     var mW = OW(62),
+       EW = OW(5868),
+       NW = OW.n(EW);
+ 
+     function PW(WW, iW, OW, mW) {
+       return new(OW || (OW = Promise))((function(EW, NW) {
+         function PW(WW) {
+           try {
+             cW(mW.next(WW))
+           } catch (iW) {
+             NW(iW)
+           }
+         }
+ 
+         function LW(WW) {
+           try {
+ ... (25 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L34-L37` → after: `L65-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L65-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/128.js#L65-L127) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/128.js#L34-L37)

```diff
-       const He = await Re(ee, ie);
-       return "failed" === He.kind ? He : await (0, Fe.saveShaderPack)(He.stored, ie) ? ((0, Fe.markShaderPackChangePending)(), He) : {
-         kind: "failed",
-         reason: "save"
+       return NW = {
+         next: LW(0),
+         throw: LW(1),
+         return: LW(2)
+       }, "function" === typeof Symbol && (NW[Symbol.iterator] = function() {
+         return this
+       }), NW;
+ 
+       function LW(LW) {
+         return function(cW) {
+           return function(LW) {
+             if (OW) throw new TypeError("Generator is already executing.");
+             for (; NW && (NW = 0, LW[0] && (PW = 0)), PW;) try {
+               if (OW = 1, mW && (EW = 2 & LW[0] ? mW.return : LW[0] ? mW.throw || ((EW = mW.return) && EW.call(mW), 0) : mW.next) && !(EW = EW.call(mW, LW[1])).done) return EW;
+               switch (mW = 0, EW && (LW = [2 & LW[0], EW.value]), LW[0]) {
+                 case 0:
+ ... (47 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L40-L45` → after: `L130-L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L130-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/128.js#L130-L144) · [Before (L40-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/128.js#L40-L45)

```diff
-     async function Re(ee, ie) {
-       const He = await async function(ee) {
-         let {
-           packId: ie,
-           sourceHash: He
-         } = ee;
+     Object.create;
+ 
+     function cW(WW, iW) {
+       var OW = "function" === typeof Symbol && WW[Symbol.iterator];
+       if (!OW) return WW;
+       var mW, EW, NW = OW.call(WW),
+         PW = [];
+       try {
+         for (;
+           (void 0 === iW || iW-- > 0) && !(mW = NW.next()).done;) PW.push(mW.value)
+       } catch (LW) {
+         EW = {
+           error: LW
+         }
+       } finally {
```

#### 8. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L47-L56` → after: `L146-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L146-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/128.js#L146-L148) · [Before (L47-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/128.js#L47-L56)

```diff
-           const ee = await fetch(`${Me.clientSideServerUrls.s3Url}/${(0,ye.H)(ie,He)}`, {
-             headers: {
-               Accept: "application/json"
-             }
-           });
-           if (!ee.ok) return console.error(`Failed to download shader pack ${ie} (${ee.status})`), null;
-           const be = await ee.json();
-           return "object" !== typeof be || null === be ? (console.error(`Shader pack ${ie}'s source isn't an object`), null) : be
-         } catch (be) {
-           return console.error(`Failed to download shader pack ${ie}`, be), null
+           mW && !mW.done && (OW = NW.return) && OW.call(NW)
+         } finally {
+           if (EW) throw EW.error
```

#### 9. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L123-L128` → after: `L155-L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L155-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/128.js#L155-L255) · [Before (L123-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/128.js#L123-L128)

```diff
-       return {
-         manifest: ee.manifest,
-         files: (0, ye.s)(ee.files),
-         validation: ie,
-         ...He && {
-           listing: He
+       if (OW || 2 === arguments.length)
+         for (var mW, EW = 0, NW = iW.length; EW < NW; EW++) !mW && EW in iW || (mW || (mW = Array.prototype.slice.call(iW, 0, EW)), mW[EW] = iW[EW]);
+       return WW.concat(mW || Array.prototype.slice.call(iW))
+     }
+     Object.create;
+     "function" === typeof SuppressedError && SuppressedError;
+     var tW = new Map([
+       ["aac", "audio/aac"],
+       ["abw", "application/x-abiword"],
+       ["arc", "application/x-freearc"],
+       ["avif", "image/avif"],
+       ["avi", "video/x-msvideo"],
+       ["azw", "application/vnd.amazon.ebook"],
+       ["bin", "application/octet-stream"],
+       ["bmp", "image/bmp"],
+       ["bz", "application/x-bzip"],
+ ... (85 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L134-L137` → after: `L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/128.js#L273) · [Before (L134-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/128.js#L134-L137)

```diff
-       return Object.keys(ee.files).map((ie => ({
-         path: ie,
-         source: ee.files[ie]
-       })))
+       return "object" === typeof WW && null !== WW
```

#### 11. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L142-L147` → after: `L277-L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L277-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/128.js#L277-L279) · [Before (L142-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/128.js#L142-L147)

```diff
-       const ie = qe.then(ee);
-       return qe = ie.catch((() => {})), ie
-     }
- 
-     function Te(ee, ie) {
-       return fe((() => Xe(ee, ie)))
+       return kW(WW.target.files).map((function(WW) {
+         return ZW(WW)
+       }))
```

#### 12. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L150-L158` → after: `L282-L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L282-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/128.js#L282-L296) · [Before (L150-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/128.js#L150-L158)

```diff
-     function pe(ee, ie, He) {
-       return fe((async () => JSON.stringify(await (0, Ue.h)()) === JSON.stringify(ee) && (null === ie ? (await ze(), !0) : Xe(ie, He))))
-     }
-     async function Xe(ee, ie) {
-       const He = await Me.e.setItem(Ue.e, ee);
-       return He && Pe(ee, ie), He
-     }
-     async function ze() {
-       await Me.e.removeItem(Ue.e), Me.i.removeItem(Ke.b)
+     function bW(WW) {
+       return PW(this, void 0, void 0, (function() {
+         return LW(this, (function(iW) {
+           switch (iW.label) {
+             case 0:
+               return [4, Promise.all(WW.map((function(WW) {
+                 return WW.getFile()
+               })))];
+             case 1:
+               return [2, iW.sent().map((function(WW) {
+                 return ZW(WW)
+               }))]
+           }
+         }))
+       }))
```

#### 13. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L161-L162` → after: `L299-L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L299-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/128.js#L299-L316) · [Before (L161-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/128.js#L161-L162)

```diff
-     function Be() {
-       return fe(ze)
+     function jW(WW, iW) {
+       return PW(this, void 0, void 0, (function() {
+         var OW;
+         return LW(this, (function(mW) {
+           switch (mW.label) {
+             case 0:
+               return WW.items ? (OW = kW(WW.items).filter((function(WW) {
+                 return "file" === WW.kind
+               })), "drop" !== iW ? [2, OW] : [4, Promise.all(OW.map(sW))]) : [3, 2];
+             case 1:
+               return [2, UW(MW(mW.sent()))];
+             case 2:
+               return [2, UW(kW(WW.files).map((function(WW) {
+                 return ZW(WW)
+               })))]
+           }
+ ... (2 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L165-L166` → after: `L319-L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L319-L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/128.js#L319-L322) · [Before (L165-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/128.js#L165-L166)

```diff
-     function Ee(ee, ie) {
-       return "active" === ge(ee, ie).kind
+     function UW(WW) {
+       return WW.filter((function(WW) {
+         return -1 === xW.indexOf(WW.name)
+       }))
```

#### 15. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L169-L190` → after: `L325-L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L325-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/128.js#L325-L329) · [Before (L169-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/128.js#L169-L190)

```diff
-     function ge(ee, ie) {
-       var He;
-       return null === ee ? {
-         kind: "none",
-         reason: "nothingStored"
-       } : We(ee) ? {
-         kind: "none",
-         reason: "otherApiVersion"
-       } : !1 !== (null === (He = ee.validation) || void 0 === He ? void 0 : He.ok) || ee.validation.fromRecheck ? null === ie ? {
-         kind: "none",
-         reason: "noCompiler"
-       } : Ze(ee, ie) ? {
-         kind: "blocked",
-         messageKey: "shaderPack:failedUnchecked"
-       } : ee.validation.ok ? {
-         kind: "active"
- ... (6 more removed lines; see GitHub link above)
+     function kW(WW) {
+       if (null === WW) return [];
+       for (var iW = [], OW = 0; OW < WW.length; OW++) {
+         var mW = WW[OW];
+         iW.push(mW)
```

#### 16. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L194-L195` → after: `L334-L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L334-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/128.js#L334-L337) · [Before (L194-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/128.js#L194-L195)

```diff
-     function Oe() {
-       Me.m.setItem(Je, performance.timeOrigin)
+     function sW(WW) {
+       if ("function" !== typeof WW.webkitGetAsEntry) return KW(WW);
+       var iW = WW.webkitGetAsEntry();
+       return iW && iW.isDirectory ? YW(iW) : KW(WW)
```

#### 17. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L198-L199` → after: `L340-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L340-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/128.js#L340-L343) · [Before (L198-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/128.js#L198-L199)

```diff
-     function de() {
-       return Me.m.getItem(Je) === performance.timeOrigin
+     function MW(WW) {
+       return WW.reduce((function(WW, iW) {
+         return wW(wW([], cW(WW), !1), cW(Array.isArray(iW) ? MW(iW) : [iW]), !1)
+       }), [])
```

#### 18. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L203` → after: `L347-L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L347-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/128.js#L347-L350) · [Before (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/128.js#L203)

```diff
-       return !(0, be.h)(ee.manifest.apiVersion)
+       var iW = WW.getAsFile();
+       if (!iW) return Promise.reject("".concat(WW, " is not a File"));
+       var OW = ZW(iW);
+       return Promise.resolve(OW)
```

#### 19. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L207` → after: `L354-L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L354-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/128.js#L354-L358) · [Before (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/128.js#L207)

```diff
-       return oe ??= ee.cV((0, Fe.shaderPackTextures)()), oe
+       return PW(this, void 0, void 0, (function() {
+         return LW(this, (function(iW) {
+           return [2, WW.isDirectory ? YW(WW) : yW(WW)]
+         }))
+       }))
```

#### 20. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L210-L212` → after: `L361-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L361-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/128.js#L361-L394) · [Before (L210-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/128.js#L210-L212)

```diff
-     function Ze(ee, ie) {
-       var He;
-       return (null === (He = ee.validation) || void 0 === He ? void 0 : He.headerVersion) !== te(ie)
+     function YW(WW) {
+       var iW = WW.createReader();
+       return new Promise((function(WW, OW) {
+         var mW = [];
+         ! function EW() {
+           var NW = this;
+           iW.readEntries((function(iW) {
+             return PW(NW, void 0, void 0, (function() {
+               var NW, PW, cW;
+               return LW(this, (function(LW) {
+                 switch (LW.label) {
+                   case 0:
+                     if (iW.length) return [3, 5];
+                     LW.label = 1;
+                   case 1:
+                     return LW.trys.push([1, 3, , 4]), [4, Promise.all(mW)];
+ ... (18 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L216-L217` → after: `L398-L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L398-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/128.js#L398-L408) · [Before (L216-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/128.js#L216-L217)

```diff
-       return fe((async () => {
-         Pe(await (0, Ue.h)(!0), ee)
+       return PW(this, void 0, void 0, (function() {
+         return LW(this, (function(iW) {
+           return [2, new Promise((function(iW, OW) {
+             WW.file((function(OW) {
+               var mW = ZW(OW, WW.fullPath);
+               iW(mW)
+             }), (function(WW) {
+               OW(WW)
+             }))
+           }))]
+         }))
```

#### 22. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L221-L224` → after: `L413-L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L413-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/128.js#L413-L420) · [Before (L221-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/128.js#L221-L224)

```diff
-     function De() {
-       return fe((async () => {
-         Me.i.removeItem(Ke.b)
-       }))
+     function JW(WW) {
+       return function(WW) {
+         if (Array.isArray(WW)) return dW(WW)
+       }(WW) || function(WW) {
+         if ("undefined" !== typeof Symbol && null != WW[Symbol.iterator] || null != WW["@@iterator"]) return Array.from(WW)
+       }(WW) || oW(WW) || function() {
+         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
+       }()
```

#### 23. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L228` → after: `L424-L431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L424-L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/128.js#L424-L431) · [Before (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/128.js#L228)

```diff
-       Ee(ee, ie) ? Me.i.setItem(Ke.b, !0) : Me.i.removeItem(Ke.b)
+       var OW = Object.keys(WW);
+       if (Object.getOwnPropertySymbols) {
+         var mW = Object.getOwnPropertySymbols(WW);
+         iW && (mW = mW.filter((function(iW) {
+           return Object.getOwnPropertyDescriptor(WW, iW).enumerable
+         }))), OW.push.apply(OW, mW)
+       }
+       return OW
```

#### 24. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L240-L248` → after: `L434-L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L434-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/128.js#L434-L443) · [Before (L240-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/128.js#L240-L248)

```diff
-     function Ke() {
-       return Me ??= Promise.all([He.e(84), He.e(206)]).then((() => He(41616))).then((ee => {
-         let {
-           FORMER_BLOCK_IMAGE_NAMES: ie,
-           textureNameToIndex: He,
-           textureAnimationData: Me
-         } = ee;
-         return be ??= (0, ye.h)(He, Me, ie), be
-       })), Me
+     function HW(WW) {
+       for (var iW = 1; iW < arguments.length; iW++) {
+         var OW = null != arguments[iW] ? arguments[iW] : {};
+         iW % 2 ? hW(Object(OW), !0).forEach((function(iW) {
+           nW(WW, iW, OW[iW])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(OW)) : hW(Object(OW)).forEach((function(iW) {
+           Object.defineProperty(WW, iW, Object.getOwnPropertyDescriptor(OW, iW))
+         }))
+       }
+       return WW
```

#### 25. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L251-L253` → after: `L446-L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L446-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/128.js#L446-L452) · [Before (L251-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/128.js#L251-L253)

```diff
-     function Ue() {
-       if (null === be) throw new Error("Shader pack textures read before loadShaderPackTextures");
-       return be
+     function nW(WW, iW, OW) {
+       return iW in WW ? Object.defineProperty(WW, iW, {
+         value: OW,
+         enumerable: !0,
+         configurable: !0,
+         writable: !0
+       }) : WW[iW] = OW, WW
```

#### 26. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L255-L271` → after: `L454-L463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L454-L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/128.js#L454-L463) · [Before (L255-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/128.js#L255-L271)

```diff
-   },
-   7283: (ee, ie, He) => {
-     He.d(ie, {
-       e: () => Fe,
-       g: () => Ue
-     });
-     var ye = He(7290),
-       be = He(7262),
-       Me = He(115);
-     const Ke = 100;
-     async function Ue(ee, ie) {
-       var He;
-       let ye = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (He = navigator.gpu) && void 0 !== He ? He : null;
-       const Ke = ee.vie(ie, (0, be.shaderPackTextures)());
-       if (Ke.errors.length > 0) return Je(ee, Ke.errors, Ke.offInStrict);
-       const Ue = await async function(ee) {
- ... (1 more removed lines; see GitHub link above)
+ 
+     function uW(WW, iW) {
+       return function(WW) {
+         if (Array.isArray(WW)) return WW
+       }(WW) || function(WW, iW) {
+         var OW = null == WW ? null : "undefined" !== typeof Symbol && WW[Symbol.iterator] || WW["@@iterator"];
+         if (null == OW) return;
+         var mW, EW, NW = [],
+           PW = !0,
+           LW = !1;
```

#### 27. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L273-L274` → after: `L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/128.js#L465) · [Before (L273-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/128.js#L273-L274)

```diff
-           const ie = await (0, Me.v)(ee);
-           return ie ? await ie.requestDevice() : null
+           for (OW = OW.call(WW); !(PW = (mW = OW.next()).done) && (NW.push(mW.value), !iW || NW.length !== iW); PW = !0);
```

#### 28. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L276` → after: `L467-L473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L467-L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/128.js#L467-L473) · [Before (L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/128.js#L276)

```diff
-           return console.error("Couldn't get a WebGPU device to validate the shader pack.", ie), null
+           LW = !0, EW = cW
+         } finally {
+           try {
+             PW || null == OW.return || OW.return()
+           } finally {
+             if (LW) throw EW
+           }
```

#### 29. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L278-L308` → after: `L475-L485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L475-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/128.js#L475-L485) · [Before (L278-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/128.js#L278-L308)

```diff
-       }(ye);
-       if (!Ue) return null;
-       let Fe = !1;
-       Ue.lost.then((() => {
-         Fe = !0
-       }));
-       try {
-         const ie = await Promise.all(Ke.validationModules.map((ie => async function(ee, ie, He) {
-           ie.pushErrorScope("validation");
-           const ye = ie.createShaderModule({
-               code: He.code
-             }),
-             be = ie.popErrorScope(),
-             {
-               messages: Me
-             } = await ye.getCompilationInfo(),
- ... (15 more removed lines; see GitHub link above)
+         return NW
+       }(WW, iW) || oW(WW, iW) || function() {
+         throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
+       }()
+     }
+ 
+     function oW(WW, iW) {
+       if (WW) {
+         if ("string" === typeof WW) return dW(WW, iW);
+         var OW = Object.prototype.toString.call(WW).slice(8, -1);
+         return "Object" === OW && WW.constructor && (OW = WW.constructor.name), "Map" === OW || "Set" === OW ? Array.from(WW) : "Arguments" === OW || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(OW) ? dW(WW, iW) : void 0
```

#### 30. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L311-L324` → after: `L488-L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L488-L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/128.js#L488-L525) · [Before (L311-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/128.js#L311-L324)

```diff
-     async function Fe(ee, ie) {
-       var He;
-       if (!(0, ye.shaderPackNeedsCheck)(ee, ie) || (0, ye.isOtherApiVersion)(ee)) return ee;
-       const be = await Ue(ie, (0, ye.storedShaderPackFiles)(ee));
-       if (!be) return ee;
-       const Me = !1 === (null === (He = ee.validation) || void 0 === He ? void 0 : He.ok) && !ee.validation.fromRecheck,
-         Ke = {
-           ...ee,
-           validation: Me ? be : {
-             ...be,
-             fromRecheck: !0
-           }
-         };
-       return await (0, ye.replaceShaderPack)(ee, Ke, ie) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), Ke
+ 
+     function dW(WW, iW) {
+       (null == iW || iW > WW.length) && (iW = WW.length);
+       for (var OW = 0, mW = new Array(iW); OW < iW; OW++) mW[OW] = WW[OW];
+       return mW
+     }
+     var eW = "file-invalid-type",
+       vW = "file-too-large",
+       gW = "file-too-small",
+       DW = "too-many-files",
+       VW = function(WW) {
+         WW = Array.isArray(WW) && 1 === WW.length ? WW[0] : WW;
+         var iW = Array.isArray(WW) ? "one of ".concat(WW.join(", ")) : WW;
+         return {
+           code: eW,
+           message: "File type must be ".concat(iW)
+ ... (22 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L328-L334` → after: `L529-L536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L529-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/128.js#L529-L536) · [Before (L328-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/128.js#L328-L334)

```diff
-       return {
-         headerVersion: (0, ye.pageShaderPackValidationVersion)(ee),
-         ok: 0 === ie.length,
-         errors: ie.slice(0, Ke),
-         moreErrors: Math.max(0, ie.length - Ke),
-         offInStrict: He
-       }
+       if (qW(WW.size))
+         if (qW(iW) && qW(OW)) {
+           if (WW.size > OW) return [!1, pW(OW)];
+           if (WW.size < iW) return [!1, fW(iW)]
+         } else {
+           if (qW(iW) && WW.size < iW) return [!1, fW(iW)];
+           if (qW(OW) && WW.size > OW) return [!1, pW(OW)]
+         } return [!0, null]
```

#### 32. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L353` → after: `L540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/128.js#L540) · [Before (L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/128.js#L353)

```diff
-       return ee === ye
+       return void 0 !== WW && null !== WW
```

#### 33. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L357` → after: `L544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/128.js#L544) · [Before (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/128.js#L357)

```diff
-       return [...ee.features]
+       return "function" === typeof WW.isPropagationStopped ? WW.isPropagationStopped() : "undefined" !== typeof WW.cancelBubble && WW.cancelBubble
```

#### 34. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L364-L371` → after: `L548-L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L548-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/128.js#L548-L563) · [Before (L364-L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/128.js#L364-L371)

```diff
-       if ("object" !== typeof ee || null === ee || Array.isArray(ee)) return "The pack has no files.";
-       const ie = [];
-       for (const [He, ye] of Object.entries(ee)) {
-         if ("string" !== typeof ye) return `${He} isn't text.`;
-         ie.push({
-           path: He,
-           source: ye
-         })
+       return WW.dataTransfer ? Array.prototype.some.call(WW.dataTransfer.types, (function(WW) {
+         return "Files" === WW || "application/x-moz-file" === WW
+       })) : !!WW.target && !!WW.target.files
+     }
+ 
+     function IW(WW) {
+       WW.preventDefault()
+     }
+ 
+     function aW() {
+       for (var WW = arguments.length, iW = new Array(WW), OW = 0; OW < WW; OW++) iW[OW] = arguments[OW];
+       return function(WW) {
+         for (var OW = arguments.length, mW = new Array(OW > 1 ? OW - 1 : 0), EW = 1; EW < OW; EW++) mW[EW - 1] = arguments[EW];
+         return iW.some((function(iW) {
+           return !RW(WW) && iW && iW.apply(void 0, [WW].concat(mW)), RW(WW)
+         }))
```

#### 35. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L392-L394` → after: `L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/128.js#L568) · [Before (L392-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/128.js#L392-L394)

```diff
-       const ie = {};
-       for (const He of ee) ie[He.path] = He.source;
-       return ie
+       return "audio/*" === WW || "video/*" === WW || "image/*" === WW || "text/*" === WW || /\w+\/[-+.\w]+/g.test(WW)
```

#### 36. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L397-L398` → after: `L571-L572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L571-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/128.js#L571-L572) · [Before (L397-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/128.js#L397-L398)

```diff
-     function Re(ee, ie) {
-       return ee < ie ? -1 : ee > ie ? 1 : 0
+     function zW(WW) {
+       return /^.*\.[\w]+$/.test(WW)
```

#### 37. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L402-L405` → after: `L580-L607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L580-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/128.js#L580-L607) · [Before (L402-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/128.js#L402-L405)

```diff
-       const ie = new TextEncoder;
-       let He = 0;
-       for (const {
-           source: ye
+       return function(WW) {
+         if (Array.isArray(WW)) return Ni(WW)
+       }(WW) || function(WW) {
+         if ("undefined" !== typeof Symbol && null != WW[Symbol.iterator] || null != WW["@@iterator"]) return Array.from(WW)
+       }(WW) || Ei(WW) || function() {
+         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
+       }()
+     }
+ 
+     function mi(WW, iW) {
+       return function(WW) {
+         if (Array.isArray(WW)) return WW
+       }(WW) || function(WW, iW) {
+         var OW = null == WW ? null : "undefined" !== typeof Symbol && WW[Symbol.iterator] || WW["@@iterator"];
+         if (null == OW) return;
+         var mW, EW, NW = [],
+ ... (12 more added lines; see GitHub link above)
```

#### 38. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L407` → after: `L609-L636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L609-L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/128.js#L609-L636) · [Before (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/128.js#L407)

```diff
-         of ee) He += ie.encode(ye).byteLength;
+         return NW
+       }(WW, iW) || Ei(WW, iW) || function() {
+         throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
+       }()
+     }
+ 
+     function Ei(WW, iW) {
+       if (WW) {
+         if ("string" === typeof WW) return Ni(WW, iW);
+         var OW = Object.prototype.toString.call(WW).slice(8, -1);
+         return "Object" === OW && WW.constructor && (OW = WW.constructor.name), "Map" === OW || "Set" === OW ? Array.from(WW) : "Arguments" === OW || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(OW) ? Ni(WW, iW) : void 0
+       }
+     }
+ 
+     function Ni(WW, iW) {
+       (null == iW || iW > WW.length) && (iW = WW.length);
+ ... (12 more added lines; see GitHub link above)
```

#### 39. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L412-L415` → after: `L641-L658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L641-L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/128.js#L641-L658) · [Before (L412-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/128.js#L412-L415)

```diff
-       if (!ee.toLowerCase().endsWith(".wgsl")) return `${ee} isn't a .wgsl file.`;
-       if (ee.length > Fe) return `A file path is over ${Fe} characters.`;
-       if (ee.includes("\\") || /[\u0000-\u001f]/.test(ee)) return `${ee} isn't a valid file path.`;
-       return ee.split("/").some((ee => "" === ee || "." === ee || ".." === ee)) ? `${ee} isn't a valid file path.` : null
+       for (var iW = 1; iW < arguments.length; iW++) {
+         var OW = null != arguments[iW] ? arguments[iW] : {};
+         iW % 2 ? Pi(Object(OW), !0).forEach((function(iW) {
+           ci(WW, iW, OW[iW])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(OW)) : Pi(Object(OW)).forEach((function(iW) {
+           Object.defineProperty(WW, iW, Object.getOwnPropertyDescriptor(OW, iW))
+         }))
+       }
+       return WW
+     }
+ 
+     function ci(WW, iW, OW) {
+       return iW in WW ? Object.defineProperty(WW, iW, {
+         value: OW,
+         enumerable: !0,
+         configurable: !0,
+ ... (2 more added lines; see GitHub link above)
```

#### 40. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L420-L433` → after: `L662-L672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L662-L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/128.js#L662-L672) · [Before (L420-L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/128.js#L420-L433)

```diff
-       let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
-       const ye = new Map;
-       ie.forEach(((ee, ie) => {
-         let {
-           numAnimStates: He,
-           animStartIdx: be
-         } = ee;
-         for (let Me = 1; Me < He; Me++) ye.set(be + Me - 1, ie)
-       }));
-       const be = Object.entries(ee),
-         Me = new Map;
-       for (const [Te, pe] of be) {
-         const ee = fe.exec(Te);
-         "1" === ee?.[2] && Me.set(ee[1], pe + 1)
+       if (null == WW) return {};
+       var OW, mW, EW = function(WW, iW) {
+         if (null == WW) return {};
+         var OW, mW, EW = {},
+           NW = Object.keys(WW);
+         for (mW = 0; mW < NW.length; mW++) OW = NW[mW], iW.indexOf(OW) >= 0 || (EW[OW] = WW[OW]);
+         return EW
+       }(WW, iW);
+       if (Object.getOwnPropertySymbols) {
+         var NW = Object.getOwnPropertySymbols(WW);
+         for (mW = 0; mW < NW.length; mW++) OW = NW[mW], iW.indexOf(OW) >= 0 || Object.prototype.propertyIsEnumerable.call(WW, OW) && (EW[OW] = WW[OW])
```

#### 41. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L435-L478` → after: `L674-L683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L674-L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/128.js#L674-L683) · [Before (L435-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/128.js#L435-L478)

```diff
-       const Ke = ee => {
-           const ie = fe.exec(ee);
-           return ie && Me.has(ie[1]) ? {
-             root: ie[1],
-             rotation: Number(ie[2]) - 1
-           } : null
-         },
-         Ue = new Set(be.map((ee => {
-           let [ie] = ee;
-           return Ke(ie)?.root ?? ie
-         }))),
-         Fe = (ee, He) => {
-           const ye = ee.replace(/_?0$/, "");
-           return (ie[He]?.numAnimStates ?? 0) > 1 && !Ue.has(ye) ? ye : ee
-         },
-         Je = new Map;
- ... (28 more removed lines; see GitHub link above)
+       return EW
+     }
+     var ti = (0, mW.forwardRef)((function(WW, iW) {
+       var OW = WW.children,
+         EW = li(wi(WW, FW)),
+         NW = EW.open,
+         PW = wi(EW, QW);
+       return (0, mW.useImperativeHandle)(iW, (function() {
+         return {
+           open: NW
```

#### 42. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L480-L494` → after: `L685-L950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L685-L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/128.js#L685-L950) · [Before (L480-L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/128.js#L480-L494)

```diff
-         const He = Je.get(Te),
-           be = ee?.root ?? fe;
-         if (He !== be && qe.set(be, {
-             name: be,
-             texture: He,
-             kind: "frame"
-           }), ee) {
-           const ie = Me.get(ee.root);
-           Re[Te] = {
-             id: ie,
-             rotation: ee.rotation
-           }, ke.set(He, ie), qe.set(fe, {
-             name: fe,
-             texture: He,
-             kind: "rotation"
+       }), [NW]), mW.createElement(mW.Fragment, null, OW(Li(Li({}, PW), {}, {
+         open: NW
+       })))
+     }));
+     ti.displayName = "Dropzone";
+     var Zi = {
+       disabled: !1,
+       getFilesFromEvent: function(WW) {
+         return PW(this, void 0, void 0, (function() {
+           return LW(this, (function(iW) {
+             return lW(WW) && lW(WW.dataTransfer) ? [2, jW(WW.dataTransfer, WW.type)] : function(WW) {
+               return lW(WW) && lW(WW.target)
+             }(WW) ? [2, AW(WW)] : Array.isArray(WW) && WW.every((function(WW) {
+               return "getFile" in WW && "function" === typeof WW.getFile
+             })) ? [2, bW(WW)] : [2, []]
+           }))
+ ... (250 more added lines; see GitHub link above)
```

#### 43. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L496-L511` → after: `L952-L1042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L952-L1042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/128.js#L952-L1042) · [Before (L496-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/128.js#L496-L511)

```diff
-         } else ke.set(He, Te + 1)
-       }
-       for (const fe of ke.keys()) qe.delete(fe);
-       for (const [fe, Te] of He) {
-         const ee = ke.get(Te);
-         void 0 === ee || ke.has(fe) || (ke.set(fe, ee), qe.delete(fe))
-       }
-       return {
-         named: [...ke].sort(((ee, ie) => {
-           let [He] = ee, [ye] = ie;
-           return He < ye ? -1 : He > ye ? 1 : 0
-         })).map((ee => {
-           let [ie, He] = ee;
-           return {
-             name: ie,
-             id: He
+         }), [NW, si, li, yW]),
+         Ki = (0, mW.useCallback)((function() {
+           if (Ei.current) {
+             fW({
+               type: "openDialog"
+             }), eW();
+             var WW = {
+               multiple: cW,
+               types: dW
+             };
+             window.showOpenFilePicker(WW).then((function(WW) {
+               return NW(WW)
+             })).then((function(WW) {
+               si(WW, null), fW({
+                 type: "closeDialog"
+               })
+ ... (75 more added lines; see GitHub link above)
```

#### 44. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L513-L515` → after: `L1044-L1111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR1044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L1044-L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/128.js#L1044-L1111) · [Before (L513-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/128.js#L513-L515)

```diff
-         })),
-         aliases: [...qe.values()],
-         layers: Re
+         }), [gW, Si, Yi, yi, Ti, ji, Ui, ki, Mi, SW, YW, EW]),
+         di = (0, mW.useCallback)((function(WW) {
+           WW.stopPropagation()
+         }), []),
+         ei = (0, mW.useMemo)((function() {
+           return function() {
+             var WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
+               iW = WW.refKey,
+               OW = void 0 === iW ? "ref" : iW,
+               mW = WW.onChange,
+               EW = WW.onClick,
+               NW = wi(WW, ii);
+             return Li(Li({}, ci({
+               accept: oW,
+               multiple: cW,
+               type: "file",
+ ... (52 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/129.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/129.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15)

#### 1. `bundles/bloxd.io/chunks/js/129.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/129.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/129.js#L2)

```diff
- export const ids = [129, 131, 152, 153];
+ export const ids = [129];
```

#### 2. `bundles/bloxd.io/chunks/js/129.js` (Changed code · before: `L4-L8` → after: `L4-L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15) · [After (L4-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/129.js#L4-L446) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/129.js#L4-L8)

```diff
-   5563: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => ye.e,
-       g: () => be,
-       h: () => ye.m
+   5923: (WW, iW, OW) => {
+     function mW(WW) {
+       return mW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
+         return typeof WW
+       } : function(WW) {
+         return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
+       }, mW(WW)
+     }
+     Object.defineProperty(iW, "__esModule", {
+       value: !0
+     }), iW.default = void 0;
+     var EW = ZW(OW(1089)),
+       NW = function(WW, iW) {
+         if (!iW && WW && WW.__esModule) return WW;
+         if (null === WW || "object" !== mW(WW) && "function" !== typeof WW) return {
+           default: WW
+ ... (427 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/129.js` (Changed code · before: `L10-L14` → after: `L448-L449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15R448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15) · [After (L448-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/129.js#L448-L449) · [Before (L10-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/129.js#L10-L14)

```diff
-     var ye = He(5570);
-     const be = [!1, !0].flatMap((ee => ["terrain", "liquid", "model"].map((ie => ({
-       strict: ee,
-       program: ie
-     })))))
+     var SW = KW;
+     iW.default = SW
```

#### 4. `bundles/bloxd.io/chunks/js/129.js` (Changed code · before: `L16` → after: `L451-L518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15R451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15) · [After (L451-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/129.js#L451-L518) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/129.js#L16)

```diff
-   7290: (ee, ie, He) => {
+   5919: (WW, iW, OW) => {
+     var mW;
+     iW.c = void 0;
+     var EW = ((mW = OW(5923)) && mW.__esModule ? mW : {
+       default: mW
+     }).default;
+     iW.c = EW
+   },
+   5934: (WW, iW) => {
+     Object.defineProperty(iW, "__esModule", {
+       value: !0
+     }), iW.capitalize = function(WW) {
+       return WW.charAt(0).toUpperCase() + WW.substr(1)
+     }, iW.clamp = function(WW, iW, OW) {
+       return Math.min(Math.max(WW, iW), OW)
+     }
+ ... (52 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/129.js` (Changed code · before: `L18-L31` → after: `L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15R520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15) · [After (L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/129.js#L520) · [Before (L18-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/129.js#L18-L31)

```diff
-       forgetShaderPackActiveHint: () => De,
-       isOtherApiVersion: () => We,
-       isShaderPackActive: () => Ee,
-       isShaderPackChangePending: () => de,
-       markShaderPackChangePending: () => Oe,
-       pageShaderPackValidationVersion: () => te,
-       reconcileStoredShaderPackHint: () => we,
-       removeShaderPack: () => Be,
-       replaceShaderPack: () => pe,
-       saveShaderPack: () => Te,
-       shaderPackNeedsCheck: () => Ze,
-       storedPackOutcome: () => ge,
-       storedShaderPackFiles: () => ke,
-       toStoredShaderPack: () => Re
+       default: () => yW
```

#### 6. `bundles/bloxd.io/chunks/js/129.js` (Changed code · before: `L33-L42` → after: `L522-L701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15R522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15) · [After (L522-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/129.js#L522-L701) · [Before (L33-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/129.js#L33-L42)

```diff
-     var ye = He(5570),
-       be = He(5563),
-       Me = He(35),
-       Ke = He(3808),
-       Ue = He(7296),
-       Fe = He(7262);
-     const Je = "shaderPackChangePending";
-     let oe = null;
- 
-     function Re(ee, ie, He) {
+     var mW = function() {
+         if ("undefined" !== typeof Map) return Map;
+ 
+         function WW(WW, iW) {
+           var OW = -1;
+           return WW.some((function(WW, mW) {
+             return WW[0] === iW && (OW = mW, !0)
+           })), OW
+         }
+         return function() {
+           function iW() {
+             this.__entries__ = []
+           }
+           return Object.defineProperty(iW.prototype, "size", {
+             get: function() {
+               return this.__entries__.length
+ ... (164 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/129.js` (Changed code · before: `L44-L222` → after: `L703-L742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15R703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15) · [After (L703-L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/129.js#L703-L742) · [Before (L44-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/129.js#L44-L222)

```diff
-         manifest: ee.manifest,
-         files: (0, ye.s)(ee.files),
-         validation: ie,
-         ...He && {
-           listing: He
-         }
-       }
-     }
- 
-     function ke(ee) {
-       return Object.keys(ee.files).map((ie => ({
-         path: ie,
-         source: ee.files[ie]
-       })))
-     }
-     let qe = Promise.resolve();
- ... (163 more removed lines; see GitHub link above)
+         x: WW,
+         y: iW,
+         width: OW,
+         height: mW
+       }
+     }
+     var sW = function() {
+         function WW(WW) {
+           this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = kW(0, 0, 0, 0), this.target = WW
+         }
+         return WW.prototype.isActive = function() {
+           var WW = UW(this.target);
+           return this.contentRect_ = WW, WW.width !== this.broadcastWidth || WW.height !== this.broadcastHeight
+         }, WW.prototype.broadcastRect = function() {
+           var WW = this.contentRect_;
+           return this.broadcastWidth = WW.width, this.broadcastHeight = WW.height, WW
+ ... (24 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/129.js` (Changed code · before: `L224-L369` → after: `L744-L799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15R744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15) · [After (L744-L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/129.js#L744-L799) · [Before (L224-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/129.js#L224-L369)

```diff
-       }
-       return ie.sort(((ee, ie) => Re(ee.path, ie.path))),
-         function(ee) {
-           if (0 === ee.length) return "The pack has no .wgsl files.";
-           if (ee.length > Ue) return `The pack has more than ${Ue} .wgsl files.`;
-           const ie = new Set;
-           for (const {
-               path: He
-             }
-             of ee) {
-             const ee = qe(He);
-             if (null !== ee) return ee;
-             if (ie.has(He)) return `The pack has two files at ${He}.`;
-             ie.add(He)
-           }
-           return ke(ee) > Ke ? `The pack's .wgsl files are over ${Ke/1024} KB in total.` : null
- ... (130 more removed lines; see GitHub link above)
+       },
+       KW = function() {
+         function WW(WW, iW, OW) {
+           if (this.activeObservations_ = [], this.observations_ = new mW, "function" !== typeof WW) throw new TypeError("The callback provided as parameter 1 is not a function.");
+           this.callback_ = WW, this.controller_ = iW, this.callbackCtx_ = OW
+         }
+         return WW.prototype.observe = function(WW) {
+           if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
+           if ("undefined" !== typeof Element && Element instanceof Object) {
+             if (!(WW instanceof ZW(WW).Element)) throw new TypeError('parameter 1 is not of type "Element".');
+             var iW = this.observations_;
+             iW.has(WW) || (iW.set(WW, new sW(WW)), this.controller_.addObserver(this), this.controller_.refresh())
+           }
+         }, WW.prototype.unobserve = function(WW) {
+           if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
+           if ("undefined" !== typeof Element && Element instanceof Object) {
+ ... (40 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/130.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/130.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a)

#### 1. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/130.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/130.js#L2)

```diff
- export const ids = [130, 131, 152];
+ export const ids = [130, 715];
```

#### 2. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L4` → after: `L4-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L4-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/130.js#L4-L94) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/130.js#L4)

```diff
-   5563: (ee, ie, He) => {
+   5877: (WW, iW, OW) => {
+     var mW = OW(5886);
+ 
+     function EW() {}
+ 
+     function NW() {}
+     NW.resetWarningCache = EW, WW.exports = function() {
+       function WW(WW, iW, OW, EW, NW, PW) {
+         if (PW !== mW) {
+           var LW = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
+           throw LW.name = "Invariant Violation", LW
+         }
+       }
+ 
+       function iW() {
+         return WW
+ ... (75 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L6-L27` → after: `L96-L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L96-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/130.js#L96-L302) · [Before (L6-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/130.js#L6-L27)

```diff
-       c: () => ye.e,
-       g: () => be,
-       h: () => ye.m
-     });
-     var ye = He(5570);
-     const be = [!1, !0].flatMap((ee => ["terrain", "liquid", "model"].map((ie => ({
-       strict: ee,
-       program: ie
-     })))))
-   },
-   40056: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       ShaderPackPage: () => Fe,
-       harnessShaderPackMode: () => ke,
-       setHarnessUrlShaderPack: () => Re,
-       shaderPackPage: () => oe
- ... (6 more removed lines; see GitHub link above)
+       b: () => xW,
+       c: () => lW,
+       f: () => ZW,
+       j: () => AW
+     });
+     var mW = OW(62),
+       EW = OW(7570),
+       NW = OW(1584),
+       PW = OW(7567),
+       LW = OW(7583),
+       cW = OW(1107);
+     const wW = "shaderPackListingView",
+       tW = "shaderPackListingFilterOpen";
+ 
+     function ZW() {
+       var WW;
+ ... (191 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L29-L96` → after: `L304-L366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L304-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/130.js#L304-L366) · [Before (L29-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/130.js#L29-L96)

```diff
-       status: "none"
-     };
-     class Fe {
-       constructor() {
-         this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
-       }
-       preload() {
-         if (null === this.stored) {
-           if ((0, Me.j)(ye.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), Je().then((ee => {
-             ee && be.i.removeItem(Me.b)
-           })), this.stored;
-           this.prefetchHint() && this.compiler().catch((() => {})), this.stored = this.readStored()
-         }
-         return this.stored
-       }
-       prefetchHint() {
- ... (52 more removed lines; see GitHub link above)
+         popular: "shaderPackListing:sortPopular",
+         updated: "shaderPackListing:sortUpdated",
+         newest: "shaderPackListing:sortNewest"
+       },
+       vW = {
+         forest: "shaderPackListing:viewForest",
+         desert: "shaderPackListing:viewDesert",
+         water: "shaderPackListing:viewWater",
+         night: "shaderPackListing:viewNight",
+         cave: "shaderPackListing:viewCave"
+       };
+ 
+     function gW(WW) {
+       return Math.round(100 * Math.max(0, 1 - 1 / WW))
+     }
+ 
+ ... (47 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L98-L101` → after: `L368-L386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L368-L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/130.js#L368-L386) · [Before (L98-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/130.js#L98-L101)

```diff
-       e: () => be,
-       h: () => Me
-     });
-     var ye = He(35);
+       d: () => NW
+     });
+     var mW = OW(62),
+       EW = OW(39);
+ 
+     function NW(WW, iW) {
+       var OW;
+       const [NW, PW] = (0, mW.useState)(null !== (OW = EW.i.getItem(WW)) && void 0 !== OW ? OW : iW);
+       return [NW, iW => {
+         EW.i.setItem(WW, iW), PW(iW)
+       }]
+     }
+   },
+   7659: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => EW,
+ ... (3 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L106-L134` → after: `L391-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L391-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/130.js#L391-L394) · [Before (L106-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/130.js#L106-L134)

```diff
-       return null !== (ee = await ye.e.getItem(be, ie)) && void 0 !== ee ? ee : null
-     }
-   },
-   7262: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       loadShaderPackTextures: () => Ke,
-       shaderPackTextures: () => Ue
-     });
-     var ye = He(5570);
-     let be = null,
-       Me = null;
- 
-     function Ke() {
-       return Me ??= Promise.all([He.e(84), He.e(206)]).then((() => He(41616))).then((ee => {
-         let {
-           FORMER_BLOCK_IMAGE_NAMES: ie,
- ... (13 more removed lines; see GitHub link above)
+       return null !== (WW = await mW.f.getItem(EW, iW)) && void 0 !== WW ? WW : null
+     }
+   },
+   7570: (WW, iW, OW) => {
```

#### 7. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L136` → after: `L396-L403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L396-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/130.js#L396-L403) · [Before (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/130.js#L136)

```diff
-       b: () => Ue,
+       B: () => PW,
+       F: () => mW,
+       G: () => xW,
+       K: () => tW,
+       L: () => MW,
+       M: () => ZW,
+       N: () => wW,
+       c: () => AW,
```

#### 8. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L139-L141` → after: `L406-L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L406-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/130.js#L406-L410) · [Before (L139-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/130.js#L139-L141)

```diff
-       h: () => Te,
-       k: () => Re,
-       m: () => be,
+       f: () => lW,
+       g: () => sW,
+       i: () => SW,
+       j: () => cW,
+       n: () => EW,
```

#### 9. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L143-L202` → after: `L412-L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L412-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/130.js#L412-L427) · [Before (L143-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/130.js#L143-L202)

```diff
-       r: () => Je,
-       s: () => oe,
-       t: () => ke
-     });
-     const ye = 5;
- 
-     function be(ee) {
-       return ee === ye
-     }
- 
-     function Me(ee) {
-       return [...ee.features]
-     }
-     const Ke = 262144,
-       Ue = 256,
-       Fe = 256;
- ... (44 more removed lines; see GitHub link above)
+       u: () => NW,
+       x: () => LW
+     });
+     const mW = ["forest", "desert", "water", "night", "cave"];
+     const EW = {
+         full: {
+           width: 3840,
+           height: 2160
+         },
+         large: {
+           width: 1920,
+           height: 1080
+         },
+         thumb: {
+           width: 640,
+           height: 360
```

#### 10. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L204-L313` → after: `L429-L470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L429-L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/130.js#L429-L470) · [Before (L204-L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/130.js#L204-L313)

```diff
-         of ee) He += ie.encode(ye).byteLength;
-       return He
-     }
- 
-     function qe(ee) {
-       if (!ee.toLowerCase().endsWith(".wgsl")) return `${ee} isn't a .wgsl file.`;
-       if (ee.length > Fe) return `A file path is over ${Fe} characters.`;
-       if (ee.includes("\\") || /[\u0000-\u001f]/.test(ee)) return `${ee} isn't a valid file path.`;
-       return ee.split("/").some((ee => "" === ee || "." === ee || ".." === ee)) ? `${ee} isn't a valid file path.` : null
-     }
-     const fe = /^(.*)\[rot\[([1-4])$/;
- 
-     function Te(ee, ie) {
-       let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
-       const ye = new Map;
-       ie.forEach(((ee, ie) => {
- ... (94 more removed lines; see GitHub link above)
+       },
+       NW = ["popular", "updated", "newest"],
+       PW = 3,
+       LW = 32,
+       cW = 300;
+ 
+     function wW(WW, iW) {
+       return WW.slice(0, iW).replace(/[\uD800-\uDBFF]$/, "")
+     }
+     const tW = 64,
+       ZW = 512,
+       xW = 18e5;
+ 
+     function lW(WW) {
+       const iW = WW,
+         OW = null === iW || void 0 === iW ? void 0 : iW.files;
+ ... (26 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/131.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/131.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430)

#### 1. `bundles/bloxd.io/chunks/js/131.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/131.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/131.js#L2)

```diff
- export const ids = [131, 152];
+ export const ids = [131, 186];
```

#### 2. `bundles/bloxd.io/chunks/js/131.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/131.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/131.js#L4)

```diff
-   7262: (ee, ie, He) => {
+   10163: (WW, iW, OW) => {
```

#### 3. `bundles/bloxd.io/chunks/js/131.js` (Changed code · before: `L6-L11` → after: `L6-L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430) · [After (L6-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/131.js#L6-L198) · [Before (L6-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/131.js#L6-L11)

```diff
-       loadShaderPackTextures: () => Ke,
-       shaderPackTextures: () => Ue
-     });
-     var ye = He(5570);
-     let be = null,
-       Me = null;
+       default: () => Mi
+     });
+     var mW = OW(1616),
+       EW = OW(25),
+       NW = OW(5361),
+       PW = OW(62),
+       LW = OW(1526);
+     var cW = OW(2037),
+       wW = OW(1605),
+       tW = OW(1422),
+       ZW = OW(1172),
+       xW = OW(10167),
+       lW = OW(10176),
+       AW = OW(5282),
+       bW = OW(154),
+       jW = OW(1111),
+ ... (177 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/131.js` (Changed code · before: `L14-L21` → after: `L201-L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430) · [After (L201-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/131.js#L201-L285) · [Before (L14-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/131.js#L14-L21)

```diff
-       return Me ??= Promise.all([He.e(84), He.e(206)]).then((() => He(41616))).then((ee => {
-         let {
-           FORMER_BLOCK_IMAGE_NAMES: ie,
-           textureNameToIndex: He,
-           textureAnimationData: Me
-         } = ee;
-         return be ??= (0, ye.h)(He, Me, ie), be
-       })), Me
+       const WW = EW.d.get("clientEscMenuOptions");
+       cW.gameBridge.send("setLookSensitivity", EW.d.get("isTouchScreen") ? (0, li.s)(WW) : WW.mouseSensitivity)
+     }
+     const ji = 45e3;
+ 
+     function Ui(WW) {
+       if (null === WW || void 0 === WW || !WW.isError()) return !1;
+       const iW = WW.asError();
+       return iW.code === bW.k.REQUEST_TO_MATCHMAKING && !(0, ti.c)(iW.debugResult.error)
+     }
+ 
+     function ki(WW) {
+       return !0 === (null === WW || void 0 === WW ? void 0 : WW.isError()) && !0 === WW.asError().debugResult.serverWaitEnded
+     }
+     async function si(WW, iW, OW, mW) {
+       const PW = (0, Li.P)(iW);
+ ... (69 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/131.js` (Changed code · before: `L25-L26` → after: `L289-L588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430R289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430) · [After (L289-L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/131.js#L289-L588) · [Before (L25-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/131.js#L25-L26)

```diff
-       if (null === be) throw new Error("Shader pack textures read before loadShaderPackTextures");
-       return be
+       const {
+         t: WW
+       } = (0, ZW.B)(), iW = (0, wW.useNavigatePreserveSearch)(), OW = (0, mW.u)(), uW = (0, mW.z)(), eW = (0, PW.useRef)({
+         t: WW,
+         navigate: iW
+       });
+       eW.current = {
+         t: WW,
+         navigate: iW
+       };
+       const gW = (0, PW.useRef)("");
+       gW.current = OW.pathname + OW.search;
+       const {
+         gameState: DW,
+         clientEscMenuOptions: VW
+       } = (0, EW.p)(["gameState", "clientEscMenuOptions"]), fW = (0, PW.useRef)(null), XW = (0, PW.useRef)(!1), BW = (0, PW.useRef)(!1), [IW, rW] = (0, PW.useState)(0);
+ ... (284 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/131.js` (Changed code · before: `L29` → after: `L591-L607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430R591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430) · [After (L591-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/131.js#L591-L607) · [Before (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/131.js#L29)

```diff
-   5570: (ee, ie, He) => {
+   5897: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => EW
+     });
+     var mW = OW(1185);
+     async function EW(WW) {
+       const iW = await fetch(`${mW.clientSideServerUrls.s3Url}/${WW}`, {
+         headers: {
+           Accept: "application/json"
+         }
+       });
+       if (404 === iW.status || 403 === iW.status) return null;
+       if (!iW.ok) throw new Error(`Failed to download the texture pack (${iW.status})`);
+       return await iW.json()
+     }
+   },
+ ... (1 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/131.js` (Changed code · before: `L33` → after: `L858-L892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430R858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430) · [After (L858-L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/131.js#L858-L892) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/131.js#L33)

```diff
-       e: () => ye,
+       h: () => tW
+     });
+     var mW = OW(154),
+       EW = OW(1888),
+       NW = OW(4426),
+       PW = OW(4981),
+       LW = OW(1850);
+     const cW = new WeakSet;
+ 
+     function wW(WW) {
+       return !0 !== WW.uW && !(0, LW.c)(WW.error)
+     }
+ 
+     function tW(WW) {
+       const iW = WW.asError(),
+         {
+ ... (19 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/131.js` (Changed code · before: `L36-L77` → after: `L895-L1030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430R895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430) · [After (L895-L1030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/131.js#L895-L1030) · [Before (L36-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/131.js#L36-L77)

```diff
-       m: () => be,
-       q: () => Me,
-       r: () => Je,
-       s: () => oe,
-       t: () => ke
-     });
-     const ye = 5;
- 
-     function be(ee) {
-       return ee === ye
-     }
- 
-     function Me(ee) {
-       return [...ee.features]
-     }
-     const Ke = 262144,
- ... (26 more removed lines; see GitHub link above)
+       n: () => cW
+     });
+     var mW = OW(182),
+       EW = OW(5318);
+ 
+     function NW(WW) {
+       return PW(WW) === mW.e.gameOrPluginOnPlayerAuthRejected.code
+     }
+ 
+     function PW(WW) {
+       return "object" === typeof WW && null !== WW ? WW.code : void 0
+     }
+ 
+     function LW(WW) {
+       var iW;
+       return null !== (iW = Object.keys(EW.d).find((iW => EW.d[iW] === WW))) && void 0 !== iW ? iW : null
+ ... (120 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/131.js` (Changed code · before: `L79-L207` → after: `L1032-L1033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430R1032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430) · [After (L1032-L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/131.js#L1032-L1033) · [Before (L79-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/131.js#L79-L207)

```diff
-           return ke(ee) > Ke ? `The pack's .wgsl files are over ${Ke/1024} KB in total.` : null
-         }(ie) ?? ie
-     }
- 
-     function oe(ee) {
-       const ie = {};
-       for (const He of ee) ie[He.path] = He.source;
-       return ie
-     }
- 
-     function Re(ee, ie) {
-       return ee < ie ? -1 : ee > ie ? 1 : 0
-     }
- 
-     function ke(ee) {
-       const ie = new TextEncoder;
- ... (113 more removed lines; see GitHub link above)
+         }
+         EW = await iW()
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/132.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/132.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f)

#### 1. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L5-L19875` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/132.js#L4) · [Before (L5-L19875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/132.js#L5-L19875)

```diff
-   6816: function(ee, ie, He) {
-     var ye;
-     ! function() {
-       var be, Me = 1e9,
-         Ke = {
-           precision: 20,
-           rounding: 4,
-           toExpNeg: -7,
-           toExpPos: 21,
-           LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
-         },
-         Ue = !0,
-         Fe = "[DecimalError] ",
-         Je = Fe + "Invalid argument: ",
-         oe = Fe + "Exponent out of range: ",
-         Re = Math.floor,
- ... (19855 more removed lines; see GitHub link above)
+   5897: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L19879-L20189` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/132.js#L8-L12) · [Before (L19879-L20189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/132.js#L19879-L20189)

```diff
-     var ye = He(6589),
-       be = He.n(ye),
-       Me = He(5809),
-       Ke = He.n(Me);
- 
-     function Ue(ee, ie, He) {
-       return !0 === ie ? be()(ee, He) : Ke()(ie) ? be()(ee, ie) : ee
-     }
-   },
-   6018: (ee, ie, He) => {
-     He.d(ie, {
-       d: () => oe,
-       h: () => Je,
-       j: () => Ue,
-       n: () => Re,
-       r: () => ke
- ... (295 more removed lines; see GitHub link above)
+     var mW = OW(1185);
+     async function EW(WW) {
+       const iW = await fetch(`${mW.clientSideServerUrls.s3Url}/${WW}`, {
+         headers: {
+           Accept: "application/json"
```

#### 3. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L20191-L20221` → after: `L14-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L14-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/132.js#L14-L17) · [Before (L20191-L20221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/132.js#L20191-L20221)

```diff
-         return He[Me % He.length]
-       }
-       return Me.domain = function(He) {
-         if (!arguments.length) return ie.slice();
-         ie = [], ee = new ye;
-         for (const ye of He) ee.has(ye) || ee.set(ye, ie.push(ye) - 1);
-         return Me
-       }, Me.range = function(ee) {
-         return arguments.length ? (He = Array.from(ee), Me) : He.slice()
-       }, Me.unknown = function(ee) {
-         return arguments.length ? (be = ee, Me) : be
-       }, Me.copy = function() {
-         return oe(ie, He).unknown(be)
-       }, Fe.i.apply(Me, arguments), Me
-     }
-   },
- ... (15 more removed lines; see GitHub link above)
+       });
+       if (404 === iW.status || 403 === iW.status) return null;
+       if (!iW.ok) throw new Error(`Failed to download the texture pack (${iW.status})`);
+       return await iW.json()
```

#### 4. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L20227-L20229` → after: `L20-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L20-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/132.js#L20-L22) · [Before (L20227-L20229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/132.js#L20227-L20229)

```diff
-   6708: (ee, ie, He) => {
-     He.d(ie, {
-       b: () => Je
+   42537: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       gamePackSource: () => NW
```

#### 5. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L20231-L20309` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/132.js#L24-L25) · [Before (L20231-L20309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/132.js#L20231-L20309)

```diff
-     const ye = Math.PI,
-       be = 2 * ye,
-       Me = 1e-6,
-       Ke = be - Me;
- 
-     function Ue(ee) {
-       this._ += ee[0];
-       for (let ie = 1, He = ee.length; ie < He; ++ie) this._ += arguments[ie] + ee[ie]
-     }
-     class Fe {
-       constructor(ee) {
-         this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = null == ee ? Ue : function(ee) {
-           let ie = Math.floor(ee);
-           if (!(ie >= 0)) throw new Error(`invalid digits: ${ee}`);
-           if (ie > 15) return Ue;
-           const He = 10 ** ie;
- ... (63 more removed lines; see GitHub link above)
+     var mW = OW(5897),
+       EW = OW(1584);
```

#### 6. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L20312-L20338` → after: `L28-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L28-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/132.js#L28-L30) · [Before (L20312-L20338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/132.js#L20312-L20338)

```diff
-       let ie = 3;
-       return ee.digits = function(He) {
-         if (!arguments.length) return ie;
-         if (null == He) ie = null;
-         else {
-           const ee = Math.floor(He);
-           if (!(ee >= 0)) throw new RangeError(`invalid digits: ${He}`);
-           ie = ee
-         }
-         return ee
-       }, () => new Fe(ie)
-     }
-     Fe.prototype
-   },
-   6554: (ee, ie, He) => {
-     He.d(ie, {
- ... (11 more removed lines; see GitHub link above)
+       return {
+         packKey: async iW => (await EW.e.getGame(WW, iW, !0)).customTexturePackKey,
+         fetchPack: mW.b
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/133.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/133.js` (17 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934)

#### 1. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L3` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/133.js#L2) · [Before (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/133.js#L3)

```diff
- export const ids = [133];
+ export const ids = [132, 133];
```

#### 2. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L5-L316` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/133.js#L4-L6) · [Before (L5-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/133.js#L5-L316)

```diff
-   7036: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       Graph: () => ue,
-       debug: () => YH,
-       default: () => aH,
-       graphlib: () => Me,
-       layout: () => TH,
-       util: () => VH,
-       version: () => Mi
-     });
-     var ye = Object.defineProperty,
-       be = (ee, ie, He) => ((ee, ie, He) => ie in ee ? ye(ee, ie, {
-         enumerable: !0,
-         configurable: !0,
-         writable: !0,
-         value: He
- ... (296 more removed lines; see GitHub link above)
+   5897: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => EW
```

#### 3. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L318-L333` → after: `L8-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L8-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/133.js#L8-L22) · [Before (L318-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/133.js#L318-L333)

```diff
-     var Xe = {};
-     Ue(Xe, {
-       CycleException: () => Pe,
-       bellmanFord: () => Be,
-       components: () => Ee,
-       dijkstra: () => de,
-       dijkstraAll: () => We,
-       findCycles: () => Ze,
-       floydWarshall: () => De,
-       isAcyclic: () => Ye,
-       postorder: () => xe,
-       preorder: () => Le,
-       prim: () => Ce,
-       shortestPaths: () => ve,
-       tarjan: () => te,
-       topsort: () => Ae
+     var mW = OW(1185);
+     async function EW(WW) {
+       const iW = await fetch(`${mW.clientSideServerUrls.s3Url}/${WW}`, {
+         headers: {
+           Accept: "application/json"
+         }
+       });
+       if (404 === iW.status || 403 === iW.status) return null;
+       if (!iW.ok) throw new Error(`Failed to download the texture pack (${iW.status})`);
+       return await iW.json()
+     }
+   },
+   42537: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       gamePackSource: () => NW
```

#### 4. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L335-L498` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/133.js#L24-L25) · [Before (L335-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/133.js#L335-L498)

```diff
-     var ze = () => 1;
- 
-     function Be(ee, ie, He, ye) {
-       return function(ee, ie, He, ye) {
-         let be, Me = {},
-           Ke = 0,
-           Ue = ee.nodes(),
-           Fe = function(ee) {
-             let ie = Me[ee.v],
-               ye = Me[ee.w];
-             if (!ie || !ye) return;
-             let Ke = He(ee);
-             ie.distance + Ke < ye.distance && (Me[ee.w] = {
-               distance: ie.distance + Ke,
-               predecessor: ee.v
-             }, be = !0)
- ... (148 more removed lines; see GitHub link above)
+     var mW = OW(5897),
+       EW = OW(1584);
```

#### 5. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L501-L530` → after: `L28-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L28-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/133.js#L28-L30) · [Before (L501-L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/133.js#L501-L530)

```diff
-       let ie = 0,
-         He = [],
-         ye = {},
-         be = [];
- 
-       function Me(Ke) {
-         var Ue;
-         let Fe = ye[Ke] = {
-           onStack: !0,
-           lowlink: ie,
-           index: ie++
-         };
-         if (He.push(Ke), null == (Ue = ee.successors(Ke)) || Ue.forEach((function(ee) {
-             if (ee in ye) {
-               let ie = ye[ee];
-               null != ie && ie.onStack && (Fe.lowlink = Math.min(Fe.lowlink, ie.index))
- ... (14 more removed lines; see GitHub link above)
+       return {
+         packKey: async iW => (await EW.e.getGame(WW, iW, !0)).customTexturePackKey,
+         fetchPack: mW.b
```

#### 6. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L537-L586` → after: `L51-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/133.js#L51-L52) · [Before (L537-L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/133.js#L537-L586)

```diff
-     function Ze(ee) {
-       return te(ee).filter((function(ie) {
-         var He;
-         let ye = ie[0];
-         return !!ye && (ie.length > 1 || 1 === ie.length && (null != (He = ee.outEdges(ye, ye)) ? He : []).length > 0)
-       }))
-     }
-     var we = () => 1;
- 
-     function De(ee, ie, He) {
-       return function(ee, ie, He) {
-         let ye = {},
-           be = ee.nodes();
-         return be.forEach((function(ee) {
-           let Me = {};
-           ye[ee] = Me, Me[ee] = {
- ... (34 more removed lines; see GitHub link above)
+     function ZW() {
+       if (NW.featureFlags.useTurnstile) throw new cW.TurnstilePageError
```

#### 7. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L594-L603` → after: `L55-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/133.js#L55-L56) · [Before (L594-L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/133.js#L594-L603)

```diff
-     function Ae(ee) {
-       let ie = {},
-         He = {},
-         ye = [];
-       if (ee.sinks().forEach((function be(Me) {
-           var Ke;
-           if (Me in He) throw new Pe;
-           Me in ie || (He[Me] = !0, ie[Me] = !0, null == (Ke = ee.predecessors(Me)) || Ke.forEach(be), delete He[Me], ye.push(Me))
-         })), Object.keys(ie).length !== ee.nodeCount()) throw new Pe;
-       return ye
+     function xW() {
+       return (0, LW.fetchAnonymousUserContext)(!0).catch((WW => (console.warn("the guest context didn't load", WW), null)))
```

#### 8. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L605-L606` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/133.js#L58) · [Before (L605-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/133.js#L605-L606)

```diff
- 
-     function Ye(ee) {
+     async function lW(WW, iW, OW, mW) {
```

#### 9. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L608` → after: `L60-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L60-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/133.js#L60-L62) · [Before (L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/133.js#L608)

```diff
-         Ae(ee)
+         const EW = await OW;
+         if (null === EW) return void console.warn(`the texture pack step for ${WW} has no guest context: the pack in play stays`);
+         await iW.packForGame(WW, (0, wW.gamePackSource)(EW), mW)
```

#### 10. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L610-L611` → after: `L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/133.js#L64) · [Before (L610-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/133.js#L610-L611)

```diff
-         if (ie instanceof Pe) return !1;
-         throw ie
+         console.warn(`the texture pack step for ${WW} failed: the pack in play stays`, EW)
```

#### 11. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L634-L642` → after: `L67-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L67-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/133.js#L67-L70) · [Before (L634-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/133.js#L634-L642)

```diff
- 
-     function ce(ee, ie, He) {
-       return Ve(ee, ie, He, (function(ee, ie) {
-         return ee.push(ie), ee
-       }), [])
-     }
- 
-     function xe(ee, ie) {
-       return ce(ee, ie, "post")
+     async function AW(WW, iW, OW, mW) {
+       ZW();
+       const EW = xW();
+       return await OW(((iW, OW) => lW(WW, iW, EW, OW))), sW(WW, iW, mW(), await EW)
```

#### 12. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L644-L646` → after: `L72-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L72-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/133.js#L72-L80) · [Before (L644-L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/133.js#L644-L646)

```diff
- 
-     function Le(ee, ie) {
-       return ce(ee, ie, "pre")
+     let bW = null,
+       jW = null;
+     async function UW() {
+       if ((null === bW || bW.hasExpired()) && (jW ??= (0, LW.fetchAnonymousUserContext)(!0).then((WW => {
+           bW = WW
+         })).finally((() => {
+           jW = null
+         })), await jW), null === bW) throw new Error("no guest context to post as");
+       return bW.getMetricsCookies()
```

#### 13. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L648-L649` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/133.js#L82) · [Before (L648-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/133.js#L648-L649)

```diff
- 
-     function Ce(ee, ie) {
+     async function kW() {
```

#### 14. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L651-L929` → after: `L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/133.js#L84) · [Before (L651-L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/133.js#L651-L929)

```diff
-       let ye, be = new Fe,
-         Me = {},
-         Ke = new ge;
- 
-       function Ue(ee) {
-         let He = ee.v === ye ? ee.w : ee.v,
-           be = Ke.priority(He);
-         if (void 0 !== be) {
-           let Ue = ie(ee);
-           Ue < be && (Me[He] = ye, Ke.decrease(He, Ue))
-         }
-       }
-       if (0 === ee.nodeCount()) return be;
-       ee.nodes().forEach((function(ee) {
-         Ke.add(ee, Number.POSITIVE_INFINITY), be.setNode(ee)
-       }));
- ... (263 more removed lines; see GitHub link above)
+       await (null === (WW = bW) || void 0 === WW ? void 0 : WW.invalidateTrafficCode())
```

#### 15. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L931-L1507` → after: `L86-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L86-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/133.js#L86-L99) · [Before (L931-L1507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/133.js#L931-L1507)

```diff
- 
-     function Ri(ee, ie, He, ye, be) {
-       let Me = [],
-         Ke = be ? Me : void 0;
-       return (ee.inEdges(ye.v) || []).forEach((ye => {
-         let Ke = ee.edge(ye),
-           Ue = ee.node(ye.v);
-         be && Me.push({
-           v: ye.v,
-           w: ye.w
-         }), Ue.out -= Ke, ki(ie, He, Ue)
-       })), (ee.outEdges(ye.v) || []).forEach((ye => {
-         let be = ee.edge(ye),
-           Me = ye.w,
-           Ke = ee.node(Me);
-         Ke.in -= be, ki(ie, He, Ke)
- ... (561 more removed lines; see GitHub link above)
+     async function sW(WW, iW, OW) {
+       let NW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
+       ZW();
+       const cW = null !== NW && void 0 !== NW ? NW : await (0, LW.fetchAnonymousUserContext)(!0);
+       if (bW = cW, cW.isLoggedIn()) throw new Error("the shell's page joins as a guest only");
+       const wW = await EW.e.matchmakePlayer(cW, iW, WW, (0, PW.c)()),
+         xW = performance.now();
+       if (!("gameServerHost" in wW)) throw new Error(`matchmaking refused: ${wW.failReason}`);
+       const lW = mW.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(wW.gameServerHost);
+       if (lW.isError()) throw new Error(`no socket URL for ${wW.gameServerHost}: ${lW.asError().message}`);
+       const AW = {
+         endpoint: lW.getValue(),
+         gameNameWithVariation: wW.gameNameWithVariation,
+         lobbyName: wW.lobbyName
```

#### 16. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L1509-L2100` → after: `L101-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L101-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/133.js#L101-L104) · [Before (L1509-L2100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/133.js#L1509-L2100)

```diff
-       return fe && (pe.barycenter = qe / fe, pe.weight = fe), pe
-     }
- 
-     function iH(ee, ie, He) {
-       let ye;
-       for (; ie.length && (ye = ie[ie.length - 1]).i <= He;) ie.pop(), ee.push(ye.vs), He++;
-       return He
-     }
- 
-     function HH(ee, ie, He, ye, be) {
-       var Me, Ke, Ue, Fe, Je, oe, Re, ke, qe, fe, Te;
-       let pe = null,
-         Xe = be;
-       "boolean" == typeof ye ? (Xe = ye, pe = null) : void 0 !== ye && (pe = ye);
-       let ze = ee.children(ie),
-         Be = ee.node(ie),
- ... (576 more removed lines; see GitHub link above)
+       return {
+         target: {
+           ...await (0, tW.c)(cW, AW, OW, !1),
+           postCookies: UW
```

#### 17. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L2102-L2493` → after: `L106-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L106-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/133.js#L106-L107) · [Before (L2102-L2493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/133.js#L2102-L2493)

```diff
-         ke = [];
-       ee.edges().forEach((ie => {
-         (oe.has(ie.v) || oe.has(ie.w)) && ke.push({
-           edge: ie,
-           label: ee.edge(ie)
-         })
-       }));
-       let qe = new Map;
-       oe.forEach((ie => {
-         let He = ee.parent(ie);
-         qe.set(ie, "string" == typeof He ? He : void 0)
-       })), Je.forEach(((ie, He) => {
-         let ye = ee.node(He),
-           be = [];
-         ie.forEach((ie => {
-           let He = ee.node(ie);
- ... (376 more removed lines; see GitHub link above)
+         matchedAt: xW,
+         freshMs: tW.b
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/134.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/134.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789)

#### 1. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/134.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/134.js#L4)

```diff
-   7088: (ee, ie, He) => {
+   5910: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L6` → after: `L6-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/134.js#L6-L9) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/134.js#L6)

```diff
-       b: () => ye
+       e: () => AW,
+       h: () => MW,
+       k: () => bW,
+       n: () => sW
```

#### 3. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L9-L46` → after: `L693-L715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L693-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/134.js#L693-L715) · [Before (L9-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/134.js#L9-L46)

```diff
-       canChange: !0,
-       blockReach: 6,
-       ezBridging: !0,
-       ezBridgingGrowMs: null,
-       ezTowering: !0,
-       ezToweringGrowMs: null,
-       speedMultiplier: 1,
-       crouchingSpeed: 2,
-       walkingSpeed: 4,
-       runningSpeed: 7,
-       jumpAmount: 8,
-       airJumpCount: 0,
-       jumpHoldThrust: null,
-       bunnyhopMaxMultiplier: 1.3,
-       music: null,
-       musicVolumeLevel: .6,
- ... (22 more removed lines; see GitHub link above)
+       compiler: "shaderPack:compilerUnavailable",
+       download: "shaderPackListing:useDownloadFailed",
+       apiVersion: "shaderPackListing:useOtherApiVersion",
+       invalid: "shaderPackListing:useInvalid",
+       errors: "shaderPackListing:useFailsHere",
+       save: "shaderPack:saveFailed"
+     };
+ 
+     function aW(WW) {
+       const {
+         userContext: iW
+       } = (0, UW.e)(), [EW, NW] = (0, mW.useState)(null), [PW, LW] = (0, mW.useState)(!1), [cW, wW] = (0, mW.useState)(!1), [tW, ZW] = (0, mW.useState)(null), xW = null === WW || void 0 === WW ? void 0 : WW.packId, lW = null === WW || void 0 === WW ? void 0 : WW.sourceHash;
+       return (0, mW.useEffect)((() => {
+         if (LW(!1), ZW(null), void 0 === xW) return;
+         let WW = !1;
+         return Promise.all([(0, sW.hasUsableWebGpuAdapter)(), (0, GW.g)()]).then((iW => {
+ ... (7 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L49-L168` → after: `L1012-L1041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R1012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L1012-L1041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/134.js#L1012-L1041) · [Before (L49-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/134.js#L49-L168)

```diff
-       canCustomiseChar: !0,
-       defaultBlock: "Block of Gold",
-       cantChangeError: "You cannot modify this block",
-       cantBreakError: null,
-       cantBuildError: null,
-       touchscreenActionButton: null,
-       strictFluidBuckets: !0,
-       preserveProtectedFluidSources: !1,
-       fillBrokenBlocksWithWater: !1,
-       fluidFlow: !1,
-       canUseZoomKey: !0,
-       canAltAction: !0,
-       canSeeNametagsThroughWalls: !0,
-       showBasicMovementControls: !0,
-       middleTextTop: "",
-       middleTextUpper: "",
- ... (104 more removed lines; see GitHub link above)
+       PW = (WW, iW) => {
+         const OW = (0, mW.useRef)(iW);
+         OW.current = iW, (0, mW.useEffect)((() => {
+           if (WW.current) return ((WW, iW) => (EW.set(WW, iW), () => {
+             EW.get(WW) === iW && EW.delete(WW)
+           }))(WW.current, {
+             adjust: WW => {
+               OW.current.adjust(WW)
+             },
+             setFraction: WW => {
+               OW.current.setFraction(WW)
+             },
+             endDrag: () => {
+               OW.current.endDrag()
+             }
+           })
+ ... (14 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/135.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/135.js` (40 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13)

#### 1. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/135.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/135.js#L2)

```diff
- export const ids = [135, 705];
+ export const ids = [135];
```

#### 2. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L4-L6` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/135.js#L4-L7) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/135.js#L4-L6)

```diff
-   37121: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       default: () => Li
+   5978: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => tW,
+       e: () => wW
```

#### 3. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L8-L40` → after: `L9-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L9-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/135.js#L9-L14) · [Before (L8-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/135.js#L8-L40)

```diff
-     var ye = He(335),
-       be = He(3892),
-       Me = He(3937),
-       Ke = He(3929),
-       Ue = He(3927),
-       Fe = He(1127),
-       Je = He(35),
-       oe = He(1768),
-       Re = He(1351),
-       ke = He(1438),
-       qe = He(1053),
-       fe = He.n(qe),
-       Te = He(1674),
-       pe = He(59),
-       Xe = He(77),
-       ze = He(2418),
- ... (17 more removed lines; see GitHub link above)
+     var mW = OW(62),
+       EW = OW(1532),
+       NW = OW(1172),
+       PW = OW(100),
+       LW = OW(4304),
+       cW = OW(1283);
```

#### 4. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L42-L245` → after: `L16-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L16-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/135.js#L16-L17) · [Before (L42-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/135.js#L42-L245)

```diff
-     function Le(ee) {
-       var ie;
-       let {
-         eventName: He
-       } = ee;
-       const {
-         t: ye
-       } = (0, Fe.v)(), be = we.h[He], [Me, Ke] = (0, pe.useState)((() => Date.now() >= be.endsAt.getTime())), [Ue, Je] = (0, pe.useState)("overall"), oe = function(ee, ie) {
-         const {
-           userContext: He,
-           isUserContextUpdating: ye
-         } = (0, ge.b)(), be = `${ee}:${ie}`, [Me, Ke] = (0, pe.useState)({
-           requestKey: be,
-           leaderboard: {
-             status: "loading"
-           }
- ... (188 more removed lines; see GitHub link above)
+     function wW() {
+       return !(0, PW.isMobile)()
```

#### 5. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L250-L251` → after: `L22-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L22-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/135.js#L22-L24) · [Before (L250-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/135.js#L250-L251)

```diff
-         event: ie,
-         progress: He
+         disabled: iW,
+         openFolderPicker: OW,
+         onFiles: PW
```

#### 6. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L255` → after: `L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/135.js#L28) · [Before (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/135.js#L255)

```diff
-       } = (0, Fe.v)(), be = null !== He && ie.prizeGoals.some(((ee, ie) => He[ie] >= ee.target));
+       } = (0, NW.B)(), ZW = (0, mW.useRef)(null);
```

#### 7. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L257-L290` → after: `L30-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L30-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/135.js#L30-L50) · [Before (L257-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/135.js#L257-L290)

```diff
-         className: "GameEventPanelGoals",
-         children: [(0, ae.jsx)("div", {
-           className: "GameEventPanelGoalsHeading",
-           children: ye(be ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
-         }), (0, ae.jsx)("div", {
-           className: "GameEventPanelGoalRow",
-           children: ie.prizeGoals.map(((ee, ie) => {
-             const be = null === He ? null : Math.min(He[ie], ee.target);
-             return (0, ae.jsxs)(pe.Fragment, {
-               children: [ie > 0 && (0, ae.jsx)("div", {
-                 className: "GameEventPanelGoalsOr",
-                 children: ye("gameEvents:goalsOr")
-               }), (0, ae.jsxs)("div", {
-                 className: fe()("GameEventPanelGoal", {
-                   GameEventPanelGoalDone: be === ee.target
-                 }),
- ... (18 more removed lines; see GitHub link above)
+         className: "PackPickButtons",
+         "data-pad-mouse-only": !0,
+         children: [(0, cW.jsx)("input", {
+           ref: ZW,
+           type: "file",
+           accept: ".zip,application/zip",
+           hidden: !0,
+           onChange: function(WW) {
+             const iW = Array.from(WW.target.files);
+             WW.target.value = "", PW(iW)
+           }
+         }), wW() && (0, cW.jsx)(EW.f, {
+           disabled: iW,
+           onClick: OW,
+           children: tW("general:chooseFolder")
+         }), (0, cW.jsx)(EW.f, {
+ ... (5 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L294-L298` → after: `L54-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L54-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/135.js#L54-L69) · [Before (L294-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/135.js#L294-L298)

```diff
-     var ve = He(1538),
-       ue = He(1593),
-       me = He(1047),
-       le = He(739),
-       Se = He(3865);
+   },
+   5952: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => LW,
+       e: () => PW,
+       h: () => NW
+     });
+     var mW = OW(5961);
+     const EW = [WW => WW.strict ? "strict" : "nonStrict", WW => WW.program];
+ 
+     function NW(WW, iW) {
+       let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
+       const mW = {};
+       for (const EW in OW) mW[EW] = `\0${EW}\0`;
+       return WW(iW, mW).replace(/\0(\w+)\0/g, ((WW, iW) => OW[iW]))
+     }
```

#### 9. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L301-L394` → after: `L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/135.js#L72) · [Before (L301-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/135.js#L301-L394)

```diff
-       let {
-         gameNameWithVariation: ie
-       } = ee;
-       const He = (0, ve.D)(ie),
-         [ye, be] = (0, pe.useState)(null);
-       if ((0, pe.useEffect)((() => {
-           if (!He) return;
-           let ee = !0;
-           return (0, ue.h)(He).then((ie => {
-             ee && be(ie)
-           })).catch((ee => {
-             console.error(`Failed to load the page copy for ${He.name}`, ee)
-           })), () => {
-             ee = !1
-           }
-         }), [He]), !He || !ye || ye.name !== He.name) return null;
- ... (78 more removed lines; see GitHub link above)
+       return null === WW.file ? null : WW.line > 0 ? `${WW.file}:${WW.line}` : WW.file
```

#### 10. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L421-L442` → after: `L76-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L76-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/135.js#L76-L79) · [Before (L421-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/135.js#L421-L442)

```diff
-       let {
-         preview: ie,
-         isBroken: He
-       } = ee;
-       const ye = null === ie ? null : (0, Me.h)(ie, "small"),
-         Ke = (0, be.f)(null !== ye && void 0 !== ye ? ye : Me.o);
-       return null === ie ? (0, ae.jsx)("div", {
-         className: fe()("FeaturedGamesPopupSlotThumbnail FeaturedGamesPopupSlotThumbnailEmpty", {
-           FeaturedGamesPopupSlotThumbnailBroken: He
-         }),
-         children: (0, ae.jsx)(je.e, {
-           name: He ? "triangle-exclamation" : "star"
-         })
-       }) : (0, ae.jsx)("div", {
-         className: fe()("FeaturedGamesPopupSlotThumbnail", Ue.l),
-         style: (0, Ue.i)(Ke),
- ... (6 more removed lines; see GitHub link above)
+       const iW = new Map(WW.map((WW => [cW(WW).join("."), WW])));
+       if (0 === iW.size) return [];
+       const OW = tW([...iW.values()]);
+       return 0 === OW[0].length ? [] : OW
```

#### 11. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L446-L551` → after: `L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/135.js#L83) · [Before (L446-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/135.js#L446-L551)

```diff
-       let {
-         schematicId: ie,
-         gameName: He
-       } = ee;
-       const {
-         userContext: be
-       } = (0, ge.b)(), Me = (0, fi.c)(), [Ke, Ue] = (0, pe.useState)(null), [Fe, Je] = (0, pe.useState)(null), [oe, Re] = (0, pe.useState)(!1), qe = (0, pe.useCallback)((() => {
-         Je(null), De.b.getFeaturedGames(be).then((ee => {
-           Me.current && Ue(ee.slots)
-         })).catch((ee => {
-           console.error("Failed to get featured games", ee), Me.current && Je("Failed to load featured games")
-         }))
-       }), [be, Me]);
-       (0, pe.useEffect)((() => {
-         qe()
-       }), [qe]);
- ... (90 more removed lines; see GitHub link above)
+       return EW.map((iW => iW(WW)))
```

#### 12. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L553-L557` → after: `L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/135.js#L85) · [Before (L553-L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/135.js#L553-L557)

```diff
-     var zi = He(5126),
-       Bi = He(4981),
-       Ei = He(3791);
-     const gi = 8,
-       Oi = 12;
+     const wW = EW.map((WW => new Set(mW.c.map(WW)).size));
```

#### 13. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L560-L582` → after: `L88-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L88-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/135.js#L88-L98) · [Before (L560-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/135.js#L560-L582)

```diff
-       let {
-         customLobbies: ie,
-         favouriteLobbies: He,
-         toggleLikeLobby: ye,
-         showReport: be
-       } = ee;
-       const [Me, Ke] = (0, pe.useState)(gi);
-       return (0, pe.useEffect)((() => {
-         if (Me >= ie.length) return;
-         let ee = !0;
-         return (0, Ei.f)().then((() => {
-           ee && Ke(Me + Oi)
-         })), () => {
-           ee = !1
-         }
-       }), [Me, ie.length]), (0, ae.jsx)(ae.Fragment, {
- ... (7 more removed lines; see GitHub link above)
+       const iW = EW.map((iW => new Set(WW.map(iW)))),
+         OW = iW.reduce(((WW, iW) => WW * iW.size), 1),
+         mW = iW.every(((WW, iW) => 1 === WW.size || WW.size === wW[iW]));
+       if (OW === WW.length && mW) return [EW.filter(((WW, OW) => 1 === iW[OW].size)).map((iW => iW(WW[0])))];
+       let NW = null;
+       for (let PW = 0; PW < EW.length; PW++) {
+         if (1 === iW[PW].size) continue;
+         const OW = ZW(WW, EW[PW]).flatMap(tW);
+         (null === NW || OW.length < NW.length) && (NW = OW)
+       }
+       return NW
```

#### 14. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L614-L630` → after: `L102-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L102-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/135.js#L102-L106) · [Before (L614-L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/135.js#L614-L630)

```diff
-       const He = Ri.h[ee.schematicId];
-       return {
-         listedVariations: [],
-         backgroundImage: (0, Me.h)(ee, "large"),
-         badges: [],
-         category: ee.gameCategory,
-         title: void 0 !== (null === He || void 0 === He ? void 0 : He.title) ? ie(He.title) : ee.name,
-         variationTitle: null,
-         description: void 0 !== (null === He || void 0 === He ? void 0 : He.description) ? ie(He.description) : ee.description,
-         ownerSocialPreviewWithoutLocation: "owner" in ee ? ee.owner : null,
-         ccu: ee.ccu,
-         favourites: ee.favourites,
-         isFavourite: null,
-         useRejoinLastLobbyButton: "persistWorld" in ee ? ee.persistWorld : null,
-         showWorldsInsteadOfCustomLobbies: !1,
-         canCreateCustomLobbies: !0,
- ... (1 more removed lines; see GitHub link above)
+       const OW = new Map;
+       for (const EW of WW) {
+         var mW;
+         const WW = iW(EW);
+         OW.set(WW, [...null !== (mW = OW.get(WW)) && void 0 !== mW ? mW : [], EW])
```

#### 15. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L658` → after: `L135-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L135-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/135.js#L135-L136) · [Before (L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/135.js#L658)

```diff
-         urlId: ie
+         existing: sW,
+         onPublished: KW
```

#### 16. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L662` → after: `L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/135.js#L140) · [Before (L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/135.js#L662)

```diff
-       } = (0, Fe.v)(), {
+       } = (0, AW.B)(), {
```

#### 17. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L665-L686` → after: `L143-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L143-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/135.js#L143-L163) · [Before (L665-L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/135.js#L665-L686)

```diff
-       } = (0, ge.b)(), Me = (0, pe.useMemo)((() => (0, Ne.f)(ie)), [ie]);
-       (0, pe.useMemo)((() => {
-         if (null === Me) return;
-         const ee = Ie.userContextManager.peekCurrentUserContext();
-         (null !== ee ? De.b.getGame(ee, Me.schematicId) : Ie.userContextManager.getCurrentUserContext().then((ee => De.b.getGame(ee, Me.schematicId)))).catch((ee => {
-           null === (0, De.e)(ee) && console.error(`Failed to get the custom game ${Me.schematicId}`, ee), (0, Ne.d)(ie)
-         }))
-       }), [Me, ie]);
-       const [Ke, Ue] = (0, pe.useState)(null), Je = (0, he.e)();
-       (0, pe.useEffect)((() => {
-         if (null !== Me || be) return;
-         let ee = !0;
-         return De.b.getGameByUrlId(ye, ie).then((ye => {
-           ee && (ye.takenDown ? vi(He, ye) : Ue({
-             urlId: ie,
-             game: ye
- ... (6 more removed lines; see GitHub link above)
+       } = (0, tW.e)(), [JW, hW] = (0, mW.useState)(null), [HW, nW] = (0, mW.useState)(0), [uW, oW] = (0, mW.useState)(null !== (iW = null === sW || void 0 === sW ? void 0 : sW.name) && void 0 !== iW ? iW : ""), dW = (0, mW.useRef)(uW), eW = (0, mW.useRef)(""), vW = WW => {
+         dW.current = WW, oW(WW)
+       }, [gW, DW] = (0, mW.useState)(null !== (OW = null === sW || void 0 === sW ? void 0 : sW.description) && void 0 !== OW ? OW : ""), VW = (0, mW.useRef)(gW), pW = (0, mW.useRef)(""), fW = WW => {
+         VW.current = WW, DW(WW)
+       }, [CW, XW] = (0, mW.useState)(!1), {
+         loading: BW,
+         error: qW,
+         setError: RW,
+         onFiles: GW
+       } = (0, xW.d)((async WW => {
+         const iW = await (0, bW.loadPageShaderPackCompiler)();
+         if (!iW) return void RW(YW("shaderPack:compilerUnavailable"));
+         const OW = await (0, jW.g)(iW, WW.files);
+         if (hW({
+             pack: WW,
+             validation: OW,
+ ... (5 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L688-L907` → after: `L165-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L165-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/135.js#L165-L180) · [Before (L688-L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/135.js#L688-L907)

```diff
-       }), [ie, Me, be, ye, He]);
-       const oe = null !== Me && void 0 !== Me ? Me : (null === Ke || void 0 === Ke ? void 0 : Ke.urlId) === ie ? Ke.game : null;
-       return null === oe ? (0, ae.jsx)(Ae.b, {}) : Je ? (0, ae.jsx)(ui, {
-         gameNameWithVariation: (0, bi.v)(oe.schematicId),
-         knownCustomGame: oe
-       }, oe.schematicId) : null
-     }
- 
-     function vi(ee, ie) {
-       (0, re.navigateToHomePage)(), (0, Pi.d)(ee, ie)
-     }
- 
-     function ui(ee) {
-       var ie, He, Ke, qe, we, Pe, Ae, Ve;
-       let {
-         gameNameWithVariation: ce,
- ... (204 more removed lines; see GitHub link above)
+       })), IW = !TW && !yW.isLoggedIn() && !NW.b.offlineMode, aW = uW.trim(), rW = aW.length < EW.B, zW = null !== JW && !1 !== (null === (ZW = JW.validation) || void 0 === ZW ? void 0 : ZW.ok) && !BW && !rW && !IW && !TW;
+       return (0, kW.jsxs)("div", {
+         className: "ShaderPackPublishForm",
+         children: [(0, kW.jsx)("p", {
+           className: "ShaderPackPublishIntro",
+           children: sW ? YW("shaderPackListing:uploadIntro", {
+             minutes: String(EW.G / 6e4)
+           }) : YW("shaderPackListing:publishIntro")
+         }), (0, kW.jsx)(SW, {}), IW && (0, kW.jsx)("div", {
+           className: "ShaderPackPublishNote Warning",
+           children: YW("shaderPackListing:publishNeedsLogin")
+         }), (0, kW.jsx)(xW.c, {
+           busy: BW,
+           disabled: BW || CW,
+           onFiles: WW => {
+             hW(null), GW(WW)
```

#### 19. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L909-L927` → after: `L182-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L182-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/135.js#L182-L186) · [Before (L909-L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/135.js#L909-L927)

```diff
-         }), [me, eH]),
-         XH = (null === gi || void 0 === gi ? void 0 : gi.schematicId) === (0, bi.r)(ei.gameNameWithVariation) ? gi : null,
-         zH = XH && (0, ve.E)(ei.gameNameWithVariation, (ee => Ce(ee)), XH);
-       (0, Qe.g)(XH && (0, ve.w)(ei.gameNameWithVariation, XH));
-       const BH = se.featureFlags.canUseCustomLobbies && !0 === Si.canCreateCustomLobbies,
-         EH = (0, ae.jsx)("div", {
-           className: "GameInformationPageContentAnchor",
-           children: (0, ae.jsx)(ne, {
-             gameNameWithVariation: yi.gameNameWithVariation
-           })
-         });
-       return (0, ae.jsx)(ae.Fragment, {
-         children: (0, ae.jsxs)("article", {
-           className: fe()("GameInformation", {
-             GameInformationFadeIn: ni,
-             GameInformationReleaseCountdown: "releaseCountdown" === (null === (qe = Si.countdownInformation) || void 0 === qe ? void 0 : qe.type)
- ... (3 more removed lines; see GitHub link above)
+         }), JW && (0, kW.jsxs)("div", {
+           className: "ShaderPackPublishSummary",
+           children: [(0, kW.jsx)("div", {
+             className: "ShaderPackPublishPackName",
+             children: JW.pack.manifest.name
```

#### 20. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L929-L1279` → after: `L188-L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L188-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/135.js#L188-L210) · [Before (L929-L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/135.js#L929-L1279)

```diff
-             className: "GameInformationInner",
-             children: [(0, ae.jsxs)("div", {
-               className: "GameInformationTop",
-               children: [(0, ae.jsxs)("div", {
-                 className: "GameInformationTopBackgroundContainer",
-                 children: [(0, ae.jsx)("div", {
-                   className: "GameInformationTopBackgroundColor"
-                 }), (0, ae.jsx)("div", {
-                   className: fe()("GameInformationTopBackgroundImage", Ue.l),
-                   style: (0, Ue.i)(ji),
-                   children: (0, ae.jsx)(Ue.e, {
-                     image: ji
-                   })
-                 })]
-               }), (0, ae.jsxs)("div", {
-                 className: "GameInformationTopLeft",
- ... (335 more removed lines; see GitHub link above)
+             className: "ShaderPackPublishPackSize",
+             children: [YW("shaderPackListing:sizeValue", {
+               kilobytes: String((0, UW.Q)(JW.sourceBytes))
+             }), " \xb7", " ", YW("shaderPackListing:filesValue", {
+               files: String(JW.pack.files.length)
+             })]
+           }), (0, kW.jsx)(MW, {
+             picked: JW
+           })]
+         }), !sW && (0, kW.jsxs)(kW.Fragment, {
+           children: [(0, kW.jsxs)("label", {
+             className: "ShaderPackPublishField",
+             children: [(0, kW.jsx)("span", {
+               children: YW("general:name")
+             }), (0, kW.jsx)(wW.b, {
+               className: "ShaderPackPublishInput",
+ ... (7 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L1282-L1352` → after: `L213-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L213-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/135.js#L213-L223) · [Before (L1282-L1352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/135.js#L1282-L1352)

```diff
-           }), !BH && EH]
-         })
-       })
-     }
- 
-     function mi(ee) {
-       let {
-         variation: ie,
-         isSelected: He,
-         children: ye
-       } = ee;
-       const Fe = Ri.e[ie],
-         oe = (0, Me.m)(ie, (0, Me.n)(Fe)),
-         Re = (0, be.f)(oe),
-         ke = (0, Ke.f)([(0, Me.k)(ie, (0, Me.e)(Fe))]);
-       return (0, ae.jsxs)(re.LinkPreserveSearch, {
- ... (55 more removed lines; see GitHub link above)
+           }), (0, kW.jsxs)("label", {
+             className: "ShaderPackPublishField",
+             children: [(0, kW.jsx)("span", {
+               children: YW("general:description")
+             }), (0, kW.jsx)(wW.b, {
+               className: "ShaderPackPublishInput ShaderPackPublishDescription",
+               defaultValue: gW,
+               maxLength: EW.j,
+               onValueChange: fW,
+               useTextarea: !0
+             }, HW)]
```

#### 22. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L1354-L1376` → after: `L225-L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L225-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/135.js#L225-L267) · [Before (L1354-L1376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/135.js#L1354-L1376)

```diff
-         }), ie.rows.length > 0 && (0, fe.jsx)("div", {
-           className: "GameApprovalInfoRows",
-           children: ie.rows.map((ee => {
-             const {
-               label: ie,
-               value: He
-             } = be(ee);
-             return (0, fe.jsxs)("div", {
-               className: ke()("GameApprovalInfoRow", ee.passed ? "Passed" : "Failed"),
-               children: [(0, fe.jsx)(oe.e, {
-                 name: ee.passed ? "check" : "xmark"
-               }), (0, fe.jsxs)("div", {
-                 className: "GameApprovalInfoRowText",
-                 children: [(0, fe.jsx)("div", {
-                   className: "GameApprovalInfoRowLabel",
-                   children: ie
- ... (7 more removed lines; see GitHub link above)
+         }), qW && (0, kW.jsx)("div", {
+           className: "ShaderPackPublishNote Error",
+           children: qW
+         }), (0, kW.jsxs)(cW.n, {
+           className: "ShaderPackPublishButton",
+           disabled: !zW,
+           loading: CW,
+           onClick: () => {
+             !async function() {
+               var WW;
+               if (!JW) return;
+               const {
+                 name: iW,
+                 description: OW
+               } = null !== sW && void 0 !== sW ? sW : {
+                 name: aW,
+ ... (27 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L1396-L1398` → after: `L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/135.js#L274) · [Before (L1396-L1398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/135.js#L1396-L1398)

```diff
-         schematicId: ie,
-         canOverride: He,
-         onApprovalChanged: Re
+         picked: iW
```

#### 24. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L1402-L1481` → after: `L278-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L278-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/135.js#L278-L298) · [Before (L1402-L1481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/135.js#L1402-L1481)

```diff
-       } = (0, pe.v)(), {
-         userContext: qe
-       } = (0, Ue.b)(), Xe = (0, Ke.c)(), [ze, Be] = (0, ye.useState)(null), [Ee, ge] = (0, ye.useState)(null), [Oe, de] = (0, ye.useState)(!1), We = (0, ye.useCallback)((() => {
-         ge(null), Me.b.getGameApprovalInfo(qe, ie).then((ee => {
-           Xe.current && Be(ee)
-         })).catch((ee => {
-           console.error("Failed to get game approval info", ee), Xe.current && ge(ke("studio:approvalLoadFailed"))
-         }))
-       }), [qe, ie, Xe, ke]);
-       (0, ye.useEffect)((() => {
-         We()
-       }), [We]);
-       const te = ee => {
-         Oe || (de(!0), Me.b.setGameApproval(qe, ie, ee).then((() => {
-           null === Re || void 0 === Re || Re(), Xe.current && We()
-         })).catch((ee => {
- ... (64 more removed lines; see GitHub link above)
+       } = (0, AW.B)(), {
+         validation: mW
+       } = iW;
+       return null === mW ? (0, kW.jsx)("div", {
+         className: "ShaderPackPublishNote",
+         children: OW("shaderPackListing:publishUnchecked")
+       }) : mW.ok ? (0, kW.jsxs)(kW.Fragment, {
+         children: [(0, kW.jsxs)("div", {
+           className: "ShaderPackPublishNote Ready",
+           children: [(0, kW.jsx)(LW.c, {
+             name: "circle-check"
+           }), " ", OW("shaderPackListing:publishReady")]
+         }), mW.offInStrict.length > 0 && (0, kW.jsxs)(kW.Fragment, {
+           children: [(0, kW.jsxs)("div", {
+             className: "ShaderPackPublishNote Warning",
+             children: [(0, kW.jsx)(LW.c, {
+ ... (5 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L1486-L1501` → after: `L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/135.js#L314) · [Before (L1486-L1501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/135.js#L1486-L1501)

```diff
-   },
-   7112: (ee, ie, He) => {
-     He.d(ie, {
-       d: () => Ue,
-       h: () => Ke
-     });
-     var ye = He(347),
-       be = He(1127);
-     const Me = {
-       manuallyApproved: "studio:approvalStatusManuallyApproved",
-       manuallyAndAutoApproved: "studio:approvalStatusManuallyAndAutoApproved",
-       manuallyDenied: "studio:approvalStatusManuallyDenied",
-       autoApproved: "studio:approvalStatusAutoApproved",
-       notApproved: "studio:approvalStatusNotApproved",
-       notIndexed: "studio:approvalStatusNotIndexed"
-     };
+     const KW = "\0";
```

#### 26. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L1505-L1566` → after: `L318-L331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L318-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/135.js#L318-L331) · [Before (L1505-L1566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/135.js#L1505-L1566)

```diff
-         t: ee,
-         selectedLanguage: ie
-       } = (0, be.v)();
-       return {
-         statusText: ie => ee(Me[ie]),
-         rowText: He => {
-           const Me = (ee, He) => (0, ye.ib)((0, be.l)(ie.code, ee), 0, He),
-             Ke = (ie, He) => null === He ? ie : ee("studio:approvalWithMinDays", {
-               value: ie,
-               days: He
-             });
-           switch (He.kind) {
-             case "ownerAccountAge": {
-               const ie = He.ownerIsLoggedIn ? "studio:approvalAccountAgeLoggedIn" : "studio:approvalAccountAgeNotLoggedIn";
-               return {
-                 label: ee("studio:approvalAccountAgeLabel"),
- ... (46 more removed lines; see GitHub link above)
+         t: WW
+       } = (0, AW.B)(), [iW, OW] = WW("shaderPackListing:bloxdhubHelp", {
+         site: KW
+       }).split(KW);
+       return (0, kW.jsxs)("p", {
+         className: "ShaderPackPublishIntro",
+         children: [iW, (0, kW.jsx)("a", {
+           className: "ShaderPackPublishLink",
+           href: EW.e,
+           target: "_blank",
+           rel: "noopener noreferrer",
+           children: EW.c
+         }), OW]
+       })
```

#### 27. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L1569` → after: `L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/135.js#L334) · [Before (L1569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/135.js#L1569)

```diff
-   34936: (ee, ie, He) => {
+   5961: (WW, iW, OW) => {
```

#### 28. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L1571` → after: `L336-L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L336-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/135.js#L336-L338) · [Before (L1571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/135.js#L1571)

```diff
-       e: () => Me
+       b: () => mW.l,
+       c: () => EW,
+       g: () => mW.r
```

#### 29. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L1573-L1586` → after: `L340-L344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L340-L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/135.js#L340-L344) · [Before (L1573-L1586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/135.js#L1573-L1586)

```diff
-     var ye = He(59),
-       be = He(3791);
- 
-     function Me() {
-       const [ee, ie] = (0, ye.useState)(!1);
-       return (0, ye.useLayoutEffect)((() => {
-         let ee = !0;
-         return (0, be.f)().then((() => {
-           ee && ie(!0)
-         })), () => {
-           ee = !1
-         }
-       }), []), ee
-     }
+     var mW = OW(5970);
+     const EW = [!1, !0].flatMap((WW => ["terrain", "liquid", "model"].map((iW => ({
+       strict: WW,
+       program: iW
+     })))))
```

#### 30. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L1588` → after: `L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/135.js#L346) · [Before (L1588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/135.js#L1588)

```diff
-   9667: (ee, ie, He) => {
+   5970: (WW, iW, OW) => {
```

#### 31. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L1590-L1591` → after: `L348-L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L348-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/135.js#L348-L357) · [Before (L1590-L1591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/135.js#L1590-L1591)

```diff
-       c: () => pe,
-       d: () => Xe
+       A: () => tW,
+       D: () => xW,
+       e: () => LW,
+       i: () => PW,
+       l: () => mW,
+       o: () => bW,
+       p: () => ZW,
+       r: () => EW,
+       v: () => NW,
+       x: () => wW
```

#### 32. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L1593-L1605` → after: `L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/135.js#L359) · [Before (L1593-L1605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/135.js#L1593-L1605)

```diff
-     var ye = He(153),
-       be = He(186),
-       Me = He(1033),
-       Ke = He(1040),
-       Ue = He(1169),
-       Fe = He(1983),
-       Je = He(2418),
-       oe = He(1490),
-       Re = He(1340),
-       ke = He(1083),
-       qe = He(9669),
-       fe = He(1502),
-       Te = He(1536);
+     const mW = 5;
```

#### 33. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L1607-L1635` → after: `L361-L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L361-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/135.js#L361-L362) · [Before (L1607-L1635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/135.js#L1607-L1635)

```diff
-     function pe(ee, ie) {
-       const He = !0 === ie.debugResult.gameRefused,
-         Me = He || ie.code === ye.k.REQUEST_TO_MATCHMAKING ? (0, qe.l)(ie.message) : null;
-       if (null !== Me) return ge(ee, ee((0, qe.o)(Me)), ee(qe.n[Me])), !0;
-       if (He) return async function(ee) {
-         const {
-           gameNameWithVariation: ie,
-           lobbyName: He,
-           shownLobbyName: ye
-         } = Fe.gameBridge.latest("connectedGame"), be = "classic" === ie && (0, Ue.I)(He) ? ye : await (0, Je.h)(ee, ie, He);
-         return "" !== be ? ee("general:cantJoinGame", {
-           game: be
-         }) : ee("general:cantJoinThisGame")
-       }(ee).then((He => {
-         ge(ee, He, ie.message)
-       })), !0;
- ... (13 more removed lines; see GitHub link above)
+     function EW(WW) {
+       return WW === mW
```

#### 34. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L1638-L1641` → after: `L365-L366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L365-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/135.js#L365-L366) · [Before (L1638-L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/135.js#L1638-L1641)

```diff
-     function Xe(ee, ie) {
-       !0 !== (null === ie || void 0 === ie ? void 0 : ie.takenDown) ? ge(ee, ee("general:cantJoinThisGame"), be.c.customGameTakenDown.text) : Be(ee, "lock", ee("studio:gameTakenDownTitle", {
-         game: ie.name
-       }), ee("studio:viewInStudio"), ie.schematicId)
+     function NW(WW) {
+       return [...WW.features]
```

#### 35. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L1644-L1659` → after: `L372-L380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L372-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/135.js#L372-L380) · [Before (L1644-L1659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/135.js#L1644-L1659)

```diff
-     function ze() {
-       return (0, Me.r)(Fe.gameBridge.latest("connectedGame").gameNameWithVariation)
-     }
-     async function Be(ee, ie, He, ye, be) {
-       !0 === await Re.NotificationProvider.showPromptPopup({
-         icon: ie,
-         title: He,
-         confirmText: ye,
-         cancelText: ee("general:cancel")
-       }).getResult() && (0, fe.navigatePreserveSearch)((0, Te.s)((0, Ke.b)(be), "manage"))
-     }
-     async function Ee(ee) {
-       try {
-         return await oe.b.getGame(await ke.userContextManager.getCurrentUserContext(), ee, !0)
-       } catch (ie) {
-         return (0, oe.c)(ie) || console.error(`Failed to get game ${ee}`, ie), null
+     function wW(WW) {
+       if ("object" !== typeof WW || null === WW || Array.isArray(WW)) return "The pack has no files.";
+       const iW = [];
+       for (const [OW, mW] of Object.entries(WW)) {
+         if ("string" !== typeof mW) return `${OW} isn't text.`;
+         iW.push({
+           path: OW,
+           source: mW
+         })
```

#### 36. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L1682-L1717` → after: `L401-L402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L401-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/135.js#L401-L402) · [Before (L1682-L1717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/135.js#L1682-L1717)

```diff
-       return ee = function(ee, ie) {
-         var He;
-         const ye = new URLSearchParams(ie),
-           be = ye.get("lobby"),
-           Me = ye.get("vm"),
-           Ke = null !== (He = be) && void 0 !== He ? He : ee.lobbyName,
-           Ue = null !== Me && void 0 !== Me ? Me : ee.directJoinVmUrl;
-         if (Ke === ee.lobbyName && Ue === ee.directJoinVmUrl) return ee;
-         return {
-           ...ee,
-           lobbyName: Ke,
-           directJoinVmUrl: Ue
-         }
-       }(ee, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), ee = function(ee) {
-         if ((0, Me.P)(ee.directJoinVmUrl)) return ee;
-         const ie = (0, be.$)(ee.directJoinVmUrl);
- ... (20 more removed lines; see GitHub link above)
+       const iW = {};
+       for (const OW of WW) iW[OW.path] = OW.source;
```

#### 37. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L1732-L1733` → after: `L406-L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L406-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/135.js#L406-L407) · [Before (L1732-L1733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/135.js#L1732-L1733)

```diff
-     function Me(ee) {
-       return Ke(ee) === ye.c.gameOrPluginOnPlayerAuthRejected.code
+     function ZW(WW, iW) {
+       return WW < iW ? -1 : WW > iW ? 1 : 0
```

#### 38. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L1737` → after: `L411-L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L411-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/135.js#L411-L417) · [Before (L1737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/135.js#L1737)

```diff
-       return "object" === typeof ee && null !== ee ? ee.code : void 0
+       const iW = new TextEncoder;
+       let OW = 0;
+       for (const {
+           source: mW
+         }
+         of WW) OW += iW.encode(mW).byteLength;
+       return OW
```

#### 39. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L1741-L1742` → after: `L421-L424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L421-L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/135.js#L421-L424) · [Before (L1741-L1742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/135.js#L1741-L1742)

```diff
-       var ie;
-       return null !== (ie = Object.keys(be.e).find((ie => be.e[ie] === ee))) && void 0 !== ie ? ie : null
+       if (!WW.toLowerCase().endsWith(".wgsl")) return `${WW} isn't a .wgsl file.`;
+       if (WW.length > cW) return `A file path is over ${cW} characters.`;
+       if (WW.includes("\\") || /[\u0000-\u001f]/.test(WW)) return `${WW} isn't a valid file path.`;
+       return WW.split("/").some((WW => "" === WW || "." === WW || ".." === WW)) ? `${WW} isn't a valid file path.` : null
```

#### 40. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L1745-L1752` → after: `L428-L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L428-L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/135.js#L428-L525) · [Before (L1745-L1752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/135.js#L1745-L1752)

```diff
-     function Fe(ee) {
-       return "notWhitelisted" === ee ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
-     }
-     const Je = {
-       private: "customLobby:cantJoinPrivate",
-       notWhitelisted: "customLobby:cantJoinNotWhitelisted",
-       banned: "customLobby:cantJoinBanned",
-       adminLocked: "customLobby:cantJoinAdminLocked"
+     function bW(WW, iW) {
+       let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
+       const mW = new Map;
+       iW.forEach(((WW, iW) => {
+         let {
+           numAnimStates: OW,
+           animStartIdx: EW
+         } = WW;
+         for (let NW = 1; NW < OW; NW++) mW.set(EW + NW - 1, iW)
+       }));
+       const EW = Object.entries(WW),
+         NW = new Map;
+       for (const [bW, jW] of EW) {
+         const WW = AW.exec(bW);
+         "1" === WW?.[2] && NW.set(WW[1], jW + 1)
+       }
+ ... (82 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/136.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/136.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0cdf42286e51664aff28504e88873db6904cdbe4f45327213c1357f0fa053036)

#### 1. `bundles/bloxd.io/chunks/js/136.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0cdf42286e51664aff28504e88873db6904cdbe4f45327213c1357f0fa053036R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0cdf42286e51664aff28504e88873db6904cdbe4f45327213c1357f0fa053036) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/136.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/136.js#L2)

```diff
- export const ids = [136];
+ export const ids = [136, 139, 159, 160];
```

#### 2. `bundles/bloxd.io/chunks/js/136.js` (Changed code · before: `L4` → after: `L4-L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0cdf42286e51664aff28504e88873db6904cdbe4f45327213c1357f0fa053036R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0cdf42286e51664aff28504e88873db6904cdbe4f45327213c1357f0fa053036) · [After (L4-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/136.js#L4-L256) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/136.js#L4)

```diff
-   9476: (ee, ie, He) => {
+   5961: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => mW.l,
+       c: () => EW,
+       g: () => mW.r
+     });
+     var mW = OW(5970);
+     const EW = [!1, !0].flatMap((WW => ["terrain", "liquid", "model"].map((iW => ({
+       strict: WW,
+       program: iW
+     })))))
+   },
+   42022: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => ZW,
+       installListedShaderPack: () => tW
+ ... (237 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/136.js` (Changed code · before: `L9-L12` → after: `L261-L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0cdf42286e51664aff28504e88873db6904cdbe4f45327213c1357f0fa053036R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0cdf42286e51664aff28504e88873db6904cdbe4f45327213c1357f0fa053036) · [After (L261-L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/136.js#L261-L335) · [Before (L9-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/136.js#L9-L12)

```diff
-     var ye = He(2054);
-     const be = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
-       Me = ee => "string" === typeof ee.icon && "" !== ee.icon && "string" === typeof ee.keycode && be.test(ee.keycode),
-       Ke = ee => "Space" === ee ? "_" : ye.k[ee]
+     var mW = OW(7656),
+       EW = OW(7637),
+       NW = OW(119);
+     const PW = 100;
+     async function LW(WW, iW) {
+       var OW;
+       let mW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (OW = navigator.gpu) && void 0 !== OW ? OW : null;
+       const PW = WW.dWW(iW, (0, EW.shaderPackTextures)());
+       if (PW.errors.length > 0) return wW(WW, PW.errors, PW.offInStrict);
+       const LW = await async function(WW) {
+         if (!WW) return null;
+         try {
+           const iW = await (0, NW.r)(WW);
+           return iW ? await iW.requestDevice() : null
+         } catch (iW) {
+           return console.error("Couldn't get a WebGPU device to validate the shader pack.", iW), null
+ ... (59 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/136.js` (Changed code · before: `L14` → after: `L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0cdf42286e51664aff28504e88873db6904cdbe4f45327213c1357f0fa053036R337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0cdf42286e51664aff28504e88873db6904cdbe4f45327213c1357f0fa053036) · [After (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/136.js#L337) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/136.js#L14)

```diff
-   37301: (ee, ie, He) => {
+   5970: (WW, iW, OW) => {
```

#### 5. `bundles/bloxd.io/chunks/js/136.js` (Changed code · before: `L17` → after: `L342-L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0cdf42286e51664aff28504e88873db6904cdbe4f45327213c1357f0fa053036R342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0cdf42286e51664aff28504e88873db6904cdbe4f45327213c1357f0fa053036) · [After (L342-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/136.js#L342-L348) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/136.js#L17)

```diff
-       g: () => Me
+       i: () => PW,
+       l: () => mW,
+       o: () => bW,
+       p: () => ZW,
+       r: () => EW,
+       v: () => NW,
+       x: () => wW
```

#### 6. `bundles/bloxd.io/chunks/js/136.js` (Changed code · before: `L19-L21` → after: `L350-L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0cdf42286e51664aff28504e88873db6904cdbe4f45327213c1357f0fa053036R350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0cdf42286e51664aff28504e88873db6904cdbe4f45327213c1357f0fa053036) · [After (L350-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/136.js#L350-L393) · [Before (L19-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/136.js#L19-L21)

```diff
-     let ye = !1;
- 
-     function be() {
+     const mW = 5;
+ 
+     function EW(WW) {
+       return WW === mW
+     }
+ 
+     function NW(WW) {
+       return [...WW.features]
+     }
+     const PW = 262144,
+       LW = 256,
+       cW = 256;
+ 
+     function wW(WW) {
+       if ("object" !== typeof WW || null === WW || Array.isArray(WW)) return "The pack has no files.";
+       const iW = [];
+ ... (28 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/136.js` (Changed code · before: `L25-L70` → after: `L397-L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0cdf42286e51664aff28504e88873db6904cdbe4f45327213c1357f0fa053036R397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0cdf42286e51664aff28504e88873db6904cdbe4f45327213c1357f0fa053036) · [After (L397-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/136.js#L397-L405) · [Before (L25-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/136.js#L25-L70)

```diff
-     function Me(ee) {
-       return ye !== ee && (ye = ee, !0)
-     }
-   },
-   40638: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => ye
-     });
-     class ye {
-       constructor(ee) {
-         this.events = ee, this.recent = [], this.episode = null, this.sampleSum = 0, this.sampleCount = 0, this.minWindowAvg = null
-       }
-       addSample(ee, ie) {
-         if (null === ee) return this.recent.length = 0, void this.endEpisode(ie);
-         if (this.sampleSum += ee, this.sampleCount++, this.recent.push(ee), this.recent.length > 5 && this.recent.shift(), null !== this.episode && (this.episode.minFps = Math.min(this.episode.minFps, ee), this.episode.sum += ee, this.episode.count++), this.recent.length < 5) ret … [truncated]
-         const He = function(ee) {
- ... (30 more removed lines; see GitHub link above)
+     function ZW(WW, iW) {
+       return WW < iW ? -1 : WW > iW ? 1 : 0
+     }
+ 
+     function xW(WW) {
+       const iW = new TextEncoder;
+       let OW = 0;
+       for (const {
+           source: mW
```

#### 8. `bundles/bloxd.io/chunks/js/136.js` (Changed code · before: `L72-L93` → after: `L407-L425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0cdf42286e51664aff28504e88873db6904cdbe4f45327213c1357f0fa053036R407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0cdf42286e51664aff28504e88873db6904cdbe4f45327213c1357f0fa053036) · [After (L407-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/136.js#L407-L425) · [Before (L72-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/136.js#L72-L93)

```diff
-       }
-     }
- 
-     function be(ee) {
-       return ee < 15 ? "<15" : ee < 30 ? "15-30" : ee < 50 ? "30-50" : "50+"
-     }
- 
-     function Me(ee) {
-       return Math.round(10 * ee) / 10
-     }
-   },
-   40619: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => be
-     });
-     var ye = He(1272);
- ... (6 more removed lines; see GitHub link above)
+         of WW) OW += iW.encode(mW).byteLength;
+       return OW
+     }
+ 
+     function lW(WW) {
+       if (!WW.toLowerCase().endsWith(".wgsl")) return `${WW} isn't a .wgsl file.`;
+       if (WW.length > cW) return `A file path is over ${cW} characters.`;
+       if (WW.includes("\\") || /[\u0000-\u001f]/.test(WW)) return `${WW} isn't a valid file path.`;
+       return WW.split("/").some((WW => "" === WW || "." === WW || ".." === WW)) ? `${WW} isn't a valid file path.` : null
+     }
+     const AW = /^(.*)\[rot\[([1-4])$/;
+ 
+     function bW(WW, iW) {
+       let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
+       const mW = new Map;
+       iW.forEach(((WW, iW) => {
+ ... (3 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/136.js` (Changed code · before: `L95-L193` → after: `L427-L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0cdf42286e51664aff28504e88873db6904cdbe4f45327213c1357f0fa053036R427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0cdf42286e51664aff28504e88873db6904cdbe4f45327213c1357f0fa053036) · [After (L427-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/136.js#L427-L511) · [Before (L95-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/136.js#L95-L193)

```diff
-         return ie instanceof Error && (He.startsWith(window.location.origin) || He.startsWith("wasm://"))
-       }
-       const ie = ee.reason;
-       if (ie instanceof Error) {
-         var He;
-         const ee = `${ie.name}: ${ie.message}`;
-         return !(0, ye.j)(null !== (He = ie.stack) && void 0 !== He ? He : "") && !(0, ye.e)(ee) && !(0, ye.i)(ee)
-       }
-       return "string" === typeof ie && !(0, ye.e)(ie)
-     }
-   },
-   40627: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => Ze
-     });
-     var ye = He(18),
- ... (83 more removed lines; see GitHub link above)
+         for (let NW = 1; NW < OW; NW++) mW.set(EW + NW - 1, iW)
+       }));
+       const EW = Object.entries(WW),
+         NW = new Map;
+       for (const [bW, jW] of EW) {
+         const WW = AW.exec(bW);
+         "1" === WW?.[2] && NW.set(WW[1], jW + 1)
+       }
+       const PW = WW => {
+           const iW = AW.exec(WW);
+           return iW && NW.has(iW[1]) ? {
+             root: iW[1],
+             rotation: Number(iW[2]) - 1
+           } : null
+         },
+         LW = new Set(EW.map((WW => {
+ ... (69 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/136.js` (Changed code · before: `L195-L388` → after: `L513-L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0cdf42286e51664aff28504e88873db6904cdbe4f45327213c1357f0fa053036R513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0cdf42286e51664aff28504e88873db6904cdbe4f45327213c1357f0fa053036) · [After (L513-L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/136.js#L513-L516) · [Before (L195-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/136.js#L195-L388)

```diff
-         }))
-       }
-       keyDown(ee, ie) {
-         const He = (0, Te.e)(ee);
-         if (0 !== this.lJ[He]) return;
-         const ye = this.source.isInPlay(),
-           be = ye ? this.getKeyTable() : null,
-           Me = null === be || ie || 1 === be.bound[He],
-           Ke = null !== be && 0 !== be.actionBits[He];
-         this.lJ[He] = 1 + (Me ? 1 : 0) + (ye ? 2 : 0) + (Ke ? 4 : 0), this.heldCount++, this.emit(He, !0, Me, ye, Ke), Ke && this.updateActionBits()
-       }
-       keyUp(ee) {
-         this.release(ee) && this.updateActionBits()
-       }
-       setMouseButtons(ee, ie) {
-         const He = ee ^ this.mouseButtons;
- ... (178 more removed lines; see GitHub link above)
+         })),
+         aliases: [...lW.values()],
+         layers: ZW
+       }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/137.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/137.js` (23 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a)

#### 1. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/137.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/137.js#L2)

```diff
- export const ids = [137, 138];
+ export const ids = [137, 139, 159, 160];
```

#### 2. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/137.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/137.js#L4)

```diff
-   7169: (ee, ie, He) => {
+   5961: (WW, iW, OW) => {
```

#### 3. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L6` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/137.js#L6-L8) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/137.js#L6)

```diff
-       b: () => be
+       b: () => mW.l,
+       c: () => EW,
+       g: () => mW.r
```

#### 4. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L8` → after: `L10-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L10-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/137.js#L10-L51) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/137.js#L8)

```diff
-     var ye = He(1228);
+     var mW = OW(5970);
+     const EW = [!1, !0].flatMap((WW => ["terrain", "liquid", "model"].map((iW => ({
+       strict: WW,
+       program: iW
+     })))))
+   },
+   7656: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       forgetShaderPackActiveHint: () => HW,
+       isOtherApiVersion: () => yW,
+       isShaderPackActive: () => MW,
+       isShaderPackChangePending: () => YW,
+       markShaderPackChangePending: () => SW,
+       pageShaderPackValidationVersion: () => TW,
+       reconcileStoredShaderPackHint: () => hW,
+       removeShaderPack: () => sW,
+ ... (26 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L11-L24` → after: `L54-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L54-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/137.js#L54-L111) · [Before (L11-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/137.js#L11-L24)

```diff
-       let {
-         href: ie,
-         children: He
-       } = ee;
-       return (0, ye.jsxs)("a", {
-         className: "WorldCodeAiExternalLink",
-         href: ie,
-         target: "_blank",
-         rel: "noreferrer noopener",
-         children: [He, " ", (0, ye.jsx)("span", {
-           "aria-hidden": "true",
-           children: "\u2197"
-         })]
-       })
+       return Object.keys(WW.files).map((iW => ({
+         path: iW,
+         source: WW.files[iW]
+       })))
+     }
+     let lW = Promise.resolve();
+ 
+     function AW(WW) {
+       const iW = lW.then(WW);
+       return lW = iW.catch((() => {})), iW
+     }
+ 
+     function bW(WW, iW) {
+       return AW((() => UW(WW, iW)))
+     }
+ 
+ ... (42 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L43-L51` → after: `L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/137.js#L115) · [Before (L43-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/137.js#L43-L51)

```diff
-       const {
-         t: ee
-       } = (0, ye.v)();
-       return (0, Me.jsxs)(Me.Fragment, {
-         children: [ee("superBotXd:deepSeekNotice"), " ", (0, Me.jsx)(be.b, {
-           href: Ke,
-           children: ee("superBotXd:deepSeekPrivacyPolicy")
-         })]
-       })
+       NW.j.setItem(wW, performance.timeOrigin)
```

#### 7. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L55-L66` → after: `L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/137.js#L119) · [Before (L55-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/137.js#L55-L66)

```diff
-       const {
-         t: ee
-       } = (0, ye.v)();
-       return (0, Me.jsxs)(Me.Fragment, {
-         children: [ee("aiHelperChatGpt:notice"), " ", (0, Me.jsx)(be.b, {
-           href: Ue,
-           children: ee("aiHelperChatGpt:terms")
-         }), " ", (0, Me.jsx)(be.b, {
-           href: Fe,
-           children: ee("aiHelperChatGpt:privacyPolicy")
-         })]
-       })
+       return NW.j.getItem(wW) === performance.timeOrigin
```

#### 8. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L87-L202` → after: `L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/137.js#L123) · [Before (L87-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/137.js#L87-L202)

```diff
-       let {
-         allowsPersonalizedAds: ie
-       } = ee;
-       return (0, fe.jsxs)(fe.Fragment, {
-         children: [(0, fe.jsx)("h2", {
-           children: "4. Cookies and Tracking Technologies"
-         }), (0, fe.jsx)("h3", {
-           children: "4.1 What Are Cookies?"
-         }), (0, fe.jsx)("p", {
-           children: "Cookies are small data files stored on your device that help identify you when you visit a website. They allow the site to remember your preferences and provide a smoother experience."
-         }), (0, fe.jsx)("h3", {
-           children: "4.2 Types of Cookies We Use"
-         }), (0, fe.jsx)("p", {
-           children: "We use different types of cookies to enhance your experience and ensure that Bloxd.io\xa0functions properly. Here\u2019s what each type of cookie does:"
-         }), (0, fe.jsxs)("table", {
-           children: [(0, fe.jsxs)("tr", {
- ... (100 more removed lines; see GitHub link above)
+       return !(0, EW.g)(WW.manifest.apiVersion)
```

#### 9. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L206-L558` → after: `L127-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L127-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/137.js#L127-L132) · [Before (L206-L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/137.js#L206-L558)

```diff
-       let {
-         allowsPersonalizedAds: ie
-       } = ee;
-       return (0, fe.jsxs)(fe.Fragment, {
-         children: [(0, fe.jsx)("h2", {
-           children: "2. Information We Collect, Why We Collect It, and How It Is Used"
-         }), (0, fe.jsx)("h3", {
-           children: "2.1 Visitors"
-         }), (0, fe.jsx)("h4", {
-           children: "2.1.1 Data Collection and Usage"
-         }), (0, fe.jsxs)("p", {
-           children: ["When you interact with Bloxd.io, certain data is collected to ensure the website operates correctly and securely. By default, we apply the highest level of privacy protection for all visitors. This means that we collect only the minimal amount of information … [truncated]
-         }), (0, fe.jsxs)("table", {
-           children: [(0, fe.jsxs)("tr", {
-             children: [(0, fe.jsx)("td", {
-               children: (0, fe.jsx)("p", {
- ... (337 more removed lines; see GitHub link above)
+       return tW ??= WW.IH((0, cW.shaderPackTextures)()), tW
+     }
+ 
+     function JW(WW, iW) {
+       var OW;
+       return (null === (OW = WW.validation) || void 0 === OW ? void 0 : OW.headerVersion) !== TW(iW)
```

#### 10. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L562-L957` → after: `L136-L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L136-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/137.js#L136-L144) · [Before (L562-L957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/137.js#L562-L957)

```diff
-       let {
-         allowsPersonalizedAds: ie
-       } = ee;
-       return (0, fe.jsxs)(fe.Fragment, {
-         children: [(0, fe.jsx)("h3", {
-           children: "3.3 Service Providers"
-         }), (0, fe.jsx)("p", {
-           children: "We work with trusted third-party service providers to help operate the website and deliver services effectively. These providers only receive the data necessary to perform their functions and are required to maintain the confidentiality and security of your i … [truncated]
-         }), (0, fe.jsx)("h4", {
-           children: "Hosting and Data Storage"
-         }), (0, fe.jsxs)("table", {
-           children: [(0, fe.jsxs)("tr", {
-             children: [(0, fe.jsx)("td", {
-               children: (0, fe.jsx)("p", {
-                 children: "Service Provider"
-               })
- ... (380 more removed lines; see GitHub link above)
+       return AW((async () => {
+         nW(await (0, LW.g)(!0), WW)
+       }))
+     }
+ 
+     function HW() {
+       return AW((async () => {
+         NW.i.removeItem(PW.b)
+       }))
```

#### 11. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L1398` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/137.js#L148) · [Before (L1398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/137.js#L1398)

```diff
-       return ee.replace(/^the /, "").localeCompare(ie.replace(/^the /, ""))
+       MW(WW, iW) ? NW.i.setItem(PW.b, !0) : NW.i.removeItem(PW.b)
```

#### 12. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L1400-L1401` → after: `L150-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L150-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/137.js#L150-L154) · [Before (L1400-L1401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/137.js#L1400-L1401)

```diff
-     const ge = new Intl.ListFormat("en-GB", {
-       type: "conjunction"
+   },
+   7659: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => EW,
+       g: () => NW
```

#### 13. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L1405-L1432` → after: `L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/137.js#L174) · [Before (L1405-L1432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/137.js#L1405-L1432)

```diff
-       const {
-         countries: ee,
-         subdivisions: ie
-       } = function(ee) {
-         const ie = [],
-           He = [];
-         for (const [ye, be] of Object.entries(ze))
-           if ("bySubdivision" === be.status) {
-             const ie = Object.entries(Be).filter((ie => {
-               let [He, be] = ie;
-               return He.startsWith(`${ye}-`) && ee(be)
-             })).map((ee => {
-               let [, ie] = ee;
-               return ie.name
-             }));
-             ie.length > 0 && He.push({
- ... (12 more removed lines; see GitHub link above)
+       return NW ??= Promise.all([OW.e(85), OW.e(126)]).then((() => OW(42015))).then((WW => {
```

#### 14. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L1434` → after: `L176-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L176-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/137.js#L176-L178) · [Before (L1434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/137.js#L1434)

```diff
-           status: ie
+           FORMER_BLOCK_IMAGE_NAMES: iW,
+           textureNameToIndex: OW,
+           textureAnimationData: NW
```

#### 15. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L1436-L1450` → after: `L180-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L180-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/137.js#L180-L181) · [Before (L1436-L1450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/137.js#L1436-L1450)

```diff
-         return "off" === ie
-       }));
-       return (0, fe.jsxs)("ul", {
-         children: [(0, fe.jsxs)("li", {
-           children: ["Countries and territories: ", ge.format(ee), "."]
-         }), ie.map((ee => {
-           let {
-             country: ie,
-             names: He
-           } = ee;
-           return (0, fe.jsxs)("li", {
-             children: ["In ", ie, ": ", ge.format(He), "."]
-           }, ie)
-         }))]
-       })
+         return EW ??= (0, mW.o)(OW, NW, iW), EW
+       })), NW
```

#### 16. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L1454-L1483` → after: `L185-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L185-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/137.js#L185-L186) · [Before (L1454-L1483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/137.js#L1454-L1483)

```diff
-       return (0, fe.jsxs)(fe.Fragment, {
-         children: [(0, fe.jsx)("h3", {
-           id: "session-recordings",
-           children: "2.5 Session Recordings"
-         }), (0, fe.jsx)("p", {
-           children: "To fix problems in the game, we record some visits to Bloxd by players of any age, guests too, once you have agreed to Bloxd\u2019s privacy popup. We record on bloxd.io in a web browser and in our Android and iOS apps, never in our desktop apps or on other we … [truncated]
-         }), (0, fe.jsx)("p", {
-           children: "What we record: your screen in the game and on Bloxd\u2019s pages as you see them, including chat, usernames, other players\u2019 characters and builds; where you move, click, tap and scroll, and which keys and buttons you press; which pages, games and menus  … [truncated]
-         }), (0, fe.jsx)("p", {
-           children: "Each recording is linked to your player ID: your account\u2019s when you are logged in, else your guest ID. It also keeps a scrambled code made from your internet (IP) address, never the address itself, and whether your network looks shared by many people, su … [truncated]
-         }), (0, fe.jsx)("p", {
-           children: "Why: to fix problems in the game, which is in our legitimate interest. Only Bloxd staff can watch recordings, and we never use one to make decisions about anyone, such as bans. If a recording shows a bug, our staff may look at your other recordings, and may k … [truncated]
-         }), (0, fe.jsx)("p", {
-           children: "Where we never record: we only record when your IP address shows which country you\u2019re in and your device\u2019s time zone is in the same country, never when your IP address belongs to a VPN, proxy or hosting service, and never in these places:"
-         }), (0, fe.jsx)(Oe, {}), (0, fe.jsx)("p", {
-           children: "Where they\u2019re kept: recordings are stored with Amazon Web Services, and their events in our analytics database at DigitalOcean, both in the United States. Our staff tool at Hetzner in Finland processes them and lets staff watch them (section 2.6). Sectio … [truncated]
- ... (14 more removed lines; see GitHub link above)
+       if (null === EW) throw new Error("Shader pack textures read before loadShaderPackTextures");
+       return EW
```

#### 17. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L1486-L1495` → after: `L204-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L204-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/137.js#L204-L205) · [Before (L1486-L1495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/137.js#L1486-L1495)

```diff
-     function We() {
-       return (0, fe.jsxs)(fe.Fragment, {
-         children: [(0, fe.jsx)("h3", {
-           children: "2.6 Our Staff Analytics Tool"
-         }), (0, fe.jsx)("p", {
-           children: "Bloxd staff use a tool we run ourselves, PostHog, on servers at Hetzner in Finland, to watch session recordings (section 2.5), which Amazon Web Services stores in the United States, and to search our analytics data. Through it, staff can see how players use B … [truncated]
-         }), (0, fe.jsx)("p", {
-           children: "Only Bloxd staff can use it. We use each kind of data only for the reasons this policy gives for collecting it: for example, shared AI Helper conversations only to improve the AI Helper. Besides parts of session recordings, the tool keeps staff accounts, save … [truncated]
-         })]
-       })
+     function EW(WW) {
+       return WW === mW
```

#### 18. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L1498-L1578` → after: `L208-L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L208-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/137.js#L208-L209) · [Before (L1498-L1578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/137.js#L1498-L1578)

```diff
-     function te() {
-       return (0, fe.jsxs)(fe.Fragment, {
-         children: [(0, fe.jsx)("h2", {
-           children: "8. Your Rights"
-         }), (0, fe.jsx)("h3", {
-           children: "8.1 Your Choices and Control"
-         }), (0, fe.jsx)("p", {
-           children: "As a user of Bloxd.io, you have the right to:"
-         }), (0, fe.jsxs)("ul", {
-           children: [(0, fe.jsx)("li", {
-             children: "Access Your Data: Request a copy of the personal information we hold about you."
-           }), (0, fe.jsx)("li", {
-             children: "Correct Your Data: Ask us to correct any inaccurate or incomplete information."
-           }), (0, fe.jsx)("li", {
-             children: "Delete Your Data: Request the deletion of your personal information when it is no longer needed."
-           }), (0, fe.jsx)("li", {
- ... (65 more removed lines; see GitHub link above)
+     function NW(WW) {
+       return [...WW.features]
```

#### 19. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L1580` → after: `L211-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L211-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/137.js#L211-L213) · [Before (L1580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/137.js#L1580)

```diff
-     var Ze = He(7160);
+     const PW = 262144,
+       LW = 256,
+       cW = 256;
```

#### 20. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L1582-L1810` → after: `L215-L240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L215-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/137.js#L215-L240) · [Before (L1582-L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/137.js#L1582-L1810)

```diff
-     function we() {
-       const {
-         t: ee
-       } = (0, be.v)(), ie = !(0, Ke.shouldUseUkPrivacyPolicy)(), He = ke.b ? "2.7" : "2.5";
-       return (0, fe.jsxs)("div", {
-         className: "LegalText",
-         children: [(0, fe.jsx)("div", {
-           className: "BloxdInformationHeader FullyFancyText",
-           children: ee("homePage:privacyPolicy")
-         }), (0, fe.jsx)("p", {
-           children: (0, fe.jsxs)("em", {
-             children: ["Last updated: ", Re.g.toLocaleDateString()]
-           })
-         }), (0, fe.jsx)("p", {
-           children: "This Privacy Policy outlines how Bloxd LTD collects, uses, and protects your information when you visit and interact with Bloxd.io. This document is intended to provide clarity on our practices and your rights concerning your data."
-         }), (0, fe.jsx)("h2", {
- ... (213 more removed lines; see GitHub link above)
+     function wW(WW) {
+       if ("object" !== typeof WW || null === WW || Array.isArray(WW)) return "The pack has no files.";
+       const iW = [];
+       for (const [OW, mW] of Object.entries(WW)) {
+         if ("string" !== typeof mW) return `${OW} isn't text.`;
+         iW.push({
+           path: OW,
+           source: mW
+         })
+       }
+       return iW.sort(((WW, iW) => ZW(WW.path, iW.path))),
+         function(WW) {
+           if (0 === WW.length) return "The pack has no .wgsl files.";
+           if (WW.length > LW) return `The pack has more than ${LW} .wgsl files.`;
+           const iW = new Set;
+           for (const {
+ ... (10 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L1813-L1830` → after: `L243-L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L243-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/137.js#L243-L246) · [Before (L1813-L1830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/137.js#L1813-L1830)

```diff
-     function De() {
-       const {
-         adMobPrivacyOptionsRequired: ee
-       } = (0, Je.m)(["adMobPrivacyOptionsRequired"]);
-       if (!ee) return null;
-       return (0, fe.jsx)(Ue.c, {
-         className: "PrivacyChoicesButton",
-         onClick: () => {
-           (async () => {
-             try {
-               await oe.c.request("ads.showPrivacyOptions", {})
-             } catch (ee) {
-               console.error("Failed to open AdMob privacy options:", ee)
-             }
-           })()
-         },
- ... (2 more removed lines; see GitHub link above)
+     function tW(WW) {
+       const iW = {};
+       for (const OW of WW) iW[OW.path] = OW.source;
+       return iW
```

#### 22. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L1833-L1845` → after: `L249-L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L249-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/137.js#L249-L346) · [Before (L1833-L1845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/137.js#L1833-L1845)

```diff
-     function Pe() {
-       return (0, ye.useEffect)((() => {
-         const ee = window.location.hash.slice(1);
-         var ie;
-         "" !== ee && (null === (ie = document.getElementById(ee)) || void 0 === ie || ie.scrollIntoView())
-       }), []), (0, fe.jsxs)(fe.Fragment, {
-         children: [(0, Me.isDiscordClient)() && (0, fe.jsx)(fe.Fragment, {
-           children: (0, fe.jsx)(Ue.c, {
-             className: "PrivacyChoicesButton",
-             onClick: () => {
-               (0, Fe.t)()
-             },
-             children: "Adjust Discord Privacy Choices"
+     function ZW(WW, iW) {
+       return WW < iW ? -1 : WW > iW ? 1 : 0
+     }
+ 
+     function xW(WW) {
+       const iW = new TextEncoder;
+       let OW = 0;
+       for (const {
+           source: mW
+         }
+         of WW) OW += iW.encode(mW).byteLength;
+       return OW
+     }
+ 
+     function lW(WW) {
+       if (!WW.toLowerCase().endsWith(".wgsl")) return `${WW} isn't a .wgsl file.`;
+ ... (82 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L1847-L1850` → after: `L348-L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L348-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/137.js#L348-L368) · [Before (L1847-L1850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/137.js#L1847-L1850)

```diff
-         }), (0, fe.jsx)(De, {}), (0, fe.jsx)(qe.e, {
-           className: "PrivacyPolicyLinks"
-         }), (0, fe.jsx)(we, {})]
-       })
+         } else xW.set(OW, bW + 1)
+       }
+       for (const AW of xW.keys()) lW.delete(AW);
+       for (const [AW, bW] of OW) {
+         const WW = xW.get(bW);
+         void 0 === WW || xW.has(AW) || (xW.set(AW, WW), lW.delete(AW))
+       }
+       return {
+         named: [...xW].sort(((WW, iW) => {
+           let [OW] = WW, [mW] = iW;
+           return OW < mW ? -1 : OW > mW ? 1 : 0
+         })).map((WW => {
+           let [iW, OW] = WW;
+           return {
+             name: iW,
+             id: OW
+ ... (5 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/138.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/138.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8a5a9cae7ca8b1d6f113ef92e0ed2af1dcf6a16a1132b935cc22133e5b471aa4)

#### 1. `bundles/bloxd.io/chunks/js/138.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8a5a9cae7ca8b1d6f113ef92e0ed2af1dcf6a16a1132b935cc22133e5b471aa4R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8a5a9cae7ca8b1d6f113ef92e0ed2af1dcf6a16a1132b935cc22133e5b471aa4) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/138.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/138.js#L2)

```diff
- export const ids = [138];
+ export const ids = [138, 139, 159];
```

#### 2. `bundles/bloxd.io/chunks/js/138.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8a5a9cae7ca8b1d6f113ef92e0ed2af1dcf6a16a1132b935cc22133e5b471aa4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8a5a9cae7ca8b1d6f113ef92e0ed2af1dcf6a16a1132b935cc22133e5b471aa4) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/138.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/138.js#L4)

```diff
-   7160: (ee, ie, He) => {
+   5961: (WW, iW, OW) => {
```

#### 3. `bundles/bloxd.io/chunks/js/138.js` (Changed code · before: `L6-L17` → after: `L6-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8a5a9cae7ca8b1d6f113ef92e0ed2af1dcf6a16a1132b935cc22133e5b471aa4R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8a5a9cae7ca8b1d6f113ef92e0ed2af1dcf6a16a1132b935cc22133e5b471aa4) · [After (L6-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/138.js#L6-L90) · [Before (L6-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/138.js#L6-L17)

```diff
-       WorldCodeAiChatGptNotice: () => oe,
-       WorldCodeAiDeepSeekNotice: () => Je,
-       b: () => Ke,
-       f: () => Fe,
-       h: () => Ue
-     });
-     var ye = He(1127),
-       be = He(7169),
-       Me = He(1228);
-     const Ke = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html",
-       Ue = "https://openai.com/policies/terms-of-use/",
-       Fe = "https://openai.com/policies/privacy-policy/";
+       b: () => mW.l,
+       c: () => EW,
+       g: () => mW.r
+     });
+     var mW = OW(5970);
+     const EW = [!1, !0].flatMap((WW => ["terrain", "liquid", "model"].map((iW => ({
+       strict: WW,
+       program: iW
+     })))))
+   },
+   40448: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       ShaderPackPage: () => cW,
+       harnessShaderPackMode: () => xW,
+       setHarnessUrlShaderPack: () => ZW,
+       shaderPackPage: () => tW
+ ... (69 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/138.js` (Changed code · before: `L20-L29` → after: `L93-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8a5a9cae7ca8b1d6f113ef92e0ed2af1dcf6a16a1132b935cc22133e5b471aa4R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8a5a9cae7ca8b1d6f113ef92e0ed2af1dcf6a16a1132b935cc22133e5b471aa4) · [After (L93-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/138.js#L93-L116) · [Before (L20-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/138.js#L20-L29)

```diff
-       const {
-         t: ee
-       } = (0, ye.v)();
-       return (0, Me.jsxs)(Me.Fragment, {
-         children: [ee("superBotXd:deepSeekNotice"), " ", (0, Me.jsx)(be.b, {
-           href: Ke,
-           children: ee("superBotXd:deepSeekPrivacyPolicy")
-         })]
-       })
-     }
+       return null
+     }
+   },
+   7659: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => EW,
+       g: () => NW
+     });
+     var mW = OW(39);
+     const EW = "shaderPack";
+     async function NW() {
+       var WW;
+       let iW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+       return null !== (WW = await mW.f.getItem(EW, iW)) && void 0 !== WW ? WW : null
+     }
+   },
+ ... (8 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/138.js` (Changed code · before: `L32-L43` → after: `L119-L313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8a5a9cae7ca8b1d6f113ef92e0ed2af1dcf6a16a1132b935cc22133e5b471aa4R119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8a5a9cae7ca8b1d6f113ef92e0ed2af1dcf6a16a1132b935cc22133e5b471aa4) · [After (L119-L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/138.js#L119-L313) · [Before (L32-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/138.js#L32-L43)

```diff
-       const {
-         t: ee
-       } = (0, ye.v)();
-       return (0, Me.jsxs)(Me.Fragment, {
-         children: [ee("aiHelperChatGpt:notice"), " ", (0, Me.jsx)(be.b, {
-           href: Ue,
-           children: ee("aiHelperChatGpt:terms")
-         }), " ", (0, Me.jsx)(be.b, {
-           href: Fe,
-           children: ee("aiHelperChatGpt:privacyPolicy")
-         })]
-       })
+       return NW ??= Promise.all([OW.e(85), OW.e(126)]).then((() => OW(42015))).then((WW => {
+         let {
+           FORMER_BLOCK_IMAGE_NAMES: iW,
+           textureNameToIndex: OW,
+           textureAnimationData: NW
+         } = WW;
+         return EW ??= (0, mW.o)(OW, NW, iW), EW
+       })), NW
+     }
+ 
+     function LW() {
+       if (null === EW) throw new Error("Shader pack textures read before loadShaderPackTextures");
+       return EW
+     }
+   },
+   5970: (WW, iW, OW) => {
+ ... (179 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/139.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/139.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28)

#### 1. `bundles/bloxd.io/chunks/js/139.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/139.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/139.js#L2)

```diff
- export const ids = [139];
+ export const ids = [139, 159];
```

#### 2. `bundles/bloxd.io/chunks/js/139.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/139.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/139.js#L4)

```diff
-   7177: (ee, ie, He) => {
+   7637: (WW, iW, OW) => {
```

#### 3. `bundles/bloxd.io/chunks/js/139.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/139.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/139.js#L6)

```diff
-       default: () => Me
+       loadShaderPackTextures: () => PW,
+       shaderPackTextures: () => LW
```

#### 4. `bundles/bloxd.io/chunks/js/139.js` (Changed code · before: `L8-L9` → after: `L9-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28) · [After (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/139.js#L9-L11) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/139.js#L8-L9)

```diff
-     var ye = He(1127),
-       be = He(1228);
+     var mW = OW(5970);
+     let EW = null,
+       NW = null;
```

#### 5. `bundles/bloxd.io/chunks/js/139.js` (Changed code · before: `L12-L22` → after: `L14-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28) · [After (L14-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/139.js#L14-L186) · [Before (L12-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/139.js#L12-L22)

```diff
-       const {
-         t: ee
-       } = (0, ye.v)();
-       return (0, be.jsxs)("div", {
-         className: "LegalText",
-         children: [(0, be.jsx)("div", {
-           className: "BloxdInformationHeader FullyFancyText",
-           children: ee("homePage:termsOfService")
-         }), (0, be.jsx)("p", {
-           children: (0, be.jsx)("em", {
-             children: "Last updated: July 15, 2025"
+       return NW ??= Promise.all([OW.e(85), OW.e(126)]).then((() => OW(42015))).then((WW => {
+         let {
+           FORMER_BLOCK_IMAGE_NAMES: iW,
+           textureNameToIndex: OW,
+           textureAnimationData: NW
+         } = WW;
+         return EW ??= (0, mW.o)(OW, NW, iW), EW
+       })), NW
+     }
+ 
+     function LW() {
+       if (null === EW) throw new Error("Shader pack textures read before loadShaderPackTextures");
+       return EW
+     }
+   },
+   5970: (WW, iW, OW) => {
+ ... (157 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/139.js` (Changed code · before: `L24-L221` → after: `L188-L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28) · [After (L188-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/139.js#L188-L208) · [Before (L24-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/139.js#L24-L221)

```diff
-         }), (0, be.jsx)("p", {
-           children: 'These Terms of Service ("Terms") govern your access to and use of the Bloxd.io website and services (the "Services"). These Terms form a legally binding agreement between you and Bloxd LTD ("we," "us" or "our"). By using our Services, you agree to these Terms … [truncated]
-         }), (0, be.jsx)("h3", {
-           children: "1. General Information"
-         }), (0, be.jsx)("p", {
-           children: "We may update these Terms at any time. When we do, we\u2019ll post the revised version on our website with the new effective date. Your continued use of Bloxd.io after the changes take effect means you accept the updated Terms. If you do not agree to the chan … [truncated]
-         }), (0, be.jsx)("h3", {
-           children: "2. Definitions"
-         }), (0, be.jsx)("p", {
-           children: (0, be.jsxs)("ul", {
-             children: [(0, be.jsx)("li", {
-               children: '"Account" means the account you create to access the Services on Bloxd.io.'
-             }), (0, be.jsx)("li", {
-               children: '"Company" refers to Bloxd LTD and its affiliates, subsidiaries, and associated entities.'
-             }), (0, be.jsx)("li", {
-               children: '"Services" includes the Bloxd.io website, games, content, and related services provided by us.'
- ... (182 more removed lines; see GitHub link above)
+         } else xW.set(OW, bW + 1)
+       }
+       for (const AW of xW.keys()) lW.delete(AW);
+       for (const [AW, bW] of OW) {
+         const WW = xW.get(bW);
+         void 0 === WW || xW.has(AW) || (xW.set(AW, WW), lW.delete(AW))
+       }
+       return {
+         named: [...xW].sort(((WW, iW) => {
+           let [OW] = WW, [mW] = iW;
+           return OW < mW ? -1 : OW > mW ? 1 : 0
+         })).map((WW => {
+           let [iW, OW] = WW;
+           return {
+             name: iW,
+             id: OW
+ ... (5 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/140.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/140.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846)

#### 1. `bundles/bloxd.io/chunks/js/140.js` (Changed code · before: `L4` → after: `L5-L15828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846) · [After (L5-L15828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/140.js#L5-L15828) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/140.js#L4)

```diff
-   7184: (ee, ie, He) => {
+   7182: function(WW, iW, OW) {
+     var mW;
+     ! function() {
+       var EW, NW = 1e9,
+         PW = {
+           precision: 20,
+           rounding: 4,
+           toExpNeg: -7,
+           toExpPos: 21,
+           LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
+         },
+         LW = !0,
+         cW = "[DecimalError] ",
+         wW = cW + "Invalid argument: ",
+         tW = cW + "Exponent out of range: ",
+         ZW = Math.floor,
+ ... (15808 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/140.js` (Changed code · before: `L6` → after: `L15830-L18148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846R15830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846) · [After (L15830-L18148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/140.js#L15830-L18148) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/140.js#L6)

```diff
-       default: () => pe
+       scaleBand: () => EW.e,
+       scaleDiverging: () => ZN,
+       scaleDivergingLog: () => xN,
+       scaleDivergingPow: () => AN,
+       scaleDivergingSqrt: () => bN,
+       scaleDivergingSymlog: () => lN,
+       scaleIdentity: () => zi,
+       scaleImplicit: () => ZO.g,
+       scaleLinear: () => ri,
+       scaleLog: () => PO,
+       scaleOrdinal: () => ZO.d,
+       scalePoint: () => EW.g,
+       scalePow: () => jO,
+       scaleQuantile: () => HO,
+       scaleQuantize: () => nO,
+       scaleRadial: () => sO,
+ ... (2303 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/140.js` (Changed code · before: `L8-L17` → after: `L18150-L18160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846R18150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846) · [After (L18150-L18160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/140.js#L18150-L18160) · [Before (L8-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/140.js#L8-L17)

```diff
-     var ye = He(1515),
-       be = He(1553),
-       Me = He(3259),
-       Ke = He(2337),
-       Ue = He(1438),
-       Fe = He(1502),
-       Je = He(1075),
-       oe = He(59),
-       Re = He(1323),
-       ke = He(1228);
+     var UN = OW(7202),
+       kN = OW(7059);
+ 
+     function sN(WW) {
+       for (var iW = WW.length, OW = new Array(iW); --iW >= 0;) OW[iW] = iW;
+       return OW
+     }
+ 
+     function MN(WW, iW) {
+       return WW[iW]
+     }
```

#### 4. `bundles/bloxd.io/chunks/js/140.js` (Changed code · before: `L20-L35` → after: `L18163-L18224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846R18163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846) · [After (L18163-L18224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/140.js#L18163-L18224) · [Before (L20-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/140.js#L20-L35)

```diff
-       let {
-         iconName: ie,
-         iconCountPerGroup: He,
-         animation: ye,
-         midShowerStart: be = !1,
-         customClass: Me
-       } = ee;
-       const [Ke, Ue] = (0, oe.useState)({});
-       return (0, oe.useEffect)((() => {
-         const ee = {};
-         for (const ie of Array.from(Array(3).keys())) {
-           ee[ie] = [];
-           for (let ye = 0; ye < He; ye++) ee[ie].push({
-             left: 100 * Math.random() + "%",
-             animationDelay: 20 * Math.random() * (be ? -1 : 1) + "s"
-           })
+       const iW = [];
+       return iW.key = WW, iW
+     }
+     var SN = OW(7133),
+       YN = OW.n(SN),
+       yN = OW(7149),
+       TN = OW.n(yN),
+       JN = OW(6382),
+       hN = OW.n(JN),
+       HN = OW(6223),
+       nN = OW.n(HN),
+       uN = OW(6115),
+       oN = OW.n(uN),
+       dN = OW(6135),
+       eN = OW.n(dN),
+       vN = OW(7162),
+ ... (46 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/140.js` (Changed code · before: `L37-L50` → after: `L18226-L18308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846R18226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846) · [After (L18226-L18308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/140.js#L18226-L18308) · [Before (L37-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/140.js#L37-L50)

```diff
-         Ue(ee)
-       }), [He, be]), (0, ke.jsx)("div", {
-         className: `IconShower IconShowerAnimation${ye} ${null!==Me&&void 0!==Me?Me:""}`,
-         children: Object.keys(Ke).map((ee => Ke[ee].map((He => (0, ke.jsx)("div", {
-           className: `Icon IconGroup${ee}`,
-           style: {
-             left: He.left,
-             animationDelay: He.animationDelay
-           },
-           children: (0, ke.jsx)(Re.e, {
-             name: ie
-           })
-         }, He.left)))))
-       })
+       },
+       WP = function WW(iW, OW) {
+         return 1 === iW ? OW : QN((function() {
+           for (var mW = arguments.length, EW = new Array(mW), NW = 0; NW < mW; NW++) EW[NW] = arguments[NW];
+           var PW = EW.filter((function(WW) {
+             return WW !== zN
+           })).length;
+           return PW >= iW ? OW.apply(void 0, EW) : WW(iW - PW, QN((function() {
+             for (var WW = arguments.length, iW = new Array(WW), mW = 0; mW < WW; mW++) iW[mW] = arguments[mW];
+             var NW = EW.map((function(WW) {
+               return FN(WW) ? iW.shift() : WW
+             }));
+             return OW.apply(void 0, IN(NW).concat(iW))
+           })))
+         }))
+       },
+ ... (67 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/140.js` (Changed code · before: `L55-L63` → after: `L18311-L18337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846R18311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846) · [After (L18311-L18337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/140.js#L18311-L18337) · [Before (L55-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/140.js#L55-L63)

```diff
-     function pe() {
-       var ee;
-       const {
-         t: ie
-       } = (0, fe.v)(), {
-         pack: He
-       } = (0, ye.B)(), {
-         userContext: oe
-       } = (0, Je.b)();
+     function wP(WW, iW) {
+       return function(WW) {
+         if (Array.isArray(WW)) return WW
+       }(WW) || function(WW, iW) {
+         if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(WW))) return;
+         var OW = [],
+           mW = !0,
+           EW = !1,
+           NW = void 0;
+         try {
+           for (var PW, LW = WW[Symbol.iterator](); !(mW = (PW = LW.next()).done) && (OW.push(PW.value), !iW || OW.length !== iW); mW = !0);
+         } catch (cW) {
+           EW = !0, NW = cW
+         } finally {
+           try {
+             mW || null == LW.return || LW.return()
+ ... (11 more added lines; see GitHub link above)
```
