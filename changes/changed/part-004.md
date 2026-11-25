# Changed — Bundle Modifications Report (Part 004 / 056)

- **Updated at**: `2026-11-26T01:33 JST`
- **Part**: `4 / 56` (**294** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 003](part-003.md) · [Part 005 →](part-005.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/107.js` (wp3j0a.a13381cf → fo1voe.f743fbcf · continued)

- **File**: `bundles/bloxd.io/chunks/js/107.js` (78 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa)

#### 20. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L268-L271` → after: `L519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/107.js#L519) · [Before (L268-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/107.js#L268-L271)

```diff
-           className: "ManageStackedFieldLabel",
-           children: bG
-         }), wG, ZG && (0, EG.jsx)("div", {
-           className: "ManageStackedFieldCaption",
+           className: "TutorialStepText",
```

#### 21. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L279-L282` → after: `L550-L551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L550-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/107.js#L550-L551) · [Before (L279-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/107.js#L279-L282)

```diff
-         label: bG,
-         caption: ZG,
-         disabled: wG,
-         children: SG
+         rect: rM,
+         margin: iM
```

#### 22. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L284-L296` → after: `L553-L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L553-L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/107.js#L553-L565) · [Before (L284-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/107.js#L284-L296)

```diff
-       return (0, EG.jsxs)("div", {
-         className: QG()("ManageField", {
-           ManageFieldDisabled: wG
-         }),
-         children: [(0, EG.jsxs)("div", {
-           className: "ManageFieldText",
-           children: [(0, EG.jsx)("div", {
-             className: "ManageFieldLabel",
-             children: bG
-           }), (0, EG.jsx)("div", {
-             className: "ManageFieldCaption",
-             children: ZG
-           })]
+       const OM = Math.max(0, rM.top - iM),
+         SM = rM.bottom + iM,
+         jM = Math.max(0, rM.left - iM),
+         aM = rM.right + iM;
+       return (0, HM.jsxs)(HM.Fragment, {
+         children: [(0, HM.jsx)("div", {
+           className: "TutorialSpotlightBackdrop",
+           style: {
+             top: 0,
+             left: 0,
+             right: 0,
+             height: OM
+           }
```

#### 23. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L298-L299` → after: `L567-L589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L567-L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/107.js#L567-L589) · [Before (L298-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/107.js#L298-L299)

```diff
-           className: "ManageFieldControl",
-           children: SG
+           className: "TutorialSpotlightBackdrop",
+           style: {
+             top: SM,
+             left: 0,
+             right: 0,
+             bottom: 0
+           }
+         }), (0, HM.jsx)("div", {
+           className: "TutorialSpotlightBackdrop",
+           style: {
+             top: OM,
+             left: 0,
+             width: jM,
+             height: SM - OM
+           }
+         }), (0, HM.jsx)("div", {
+ ... (7 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L307-L310` → after: `L596-L602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L596-L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/107.js#L596-L602) · [Before (L307-L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/107.js#L307-L310)

```diff
-         schematicData: wG,
-         updateSchematicData: SG,
-         publishFormEnabled: LG,
-         formEnabled: yG
+         target: rM,
+         placement: iM,
+         boxRef: OM,
+         className: nM,
+         spotlight: zM = !0,
+         spotlightMargin: LM = UM,
+         children: mM
```

#### 25. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L313-L341` → after: `L605-L644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L605-L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/107.js#L605-L644) · [Before (L313-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/107.js#L313-L341)

```diff
-         t: UG
-       } = (0, kG.w)(), YG = !LG, VG = {
-         tpRequests: {
-           isEnabled: () => !wG.disableTpRequests,
-           DW: GG => SG("disableTpRequests", !GG)
-         },
-         spawnProtection: {
-           isEnabled: () => !wG.disableSpawnProtection,
-           DW: GG => SG("disableSpawnProtection", !GG)
-         },
-         spawnReset: {
-           isEnabled: () => !!wG.enableSpawnReset,
-           DW: GG => SG("enableSpawnReset", GG)
-         },
-         smpMarketplace: {
-           isEnabled: () => !!wG.enableSmpMarketplace,
- ... (13 more removed lines; see GitHub link above)
+         getArrowProps: hM,
+         getTooltipProps: JM,
+         setTooltipRef: dM,
+         setTriggerRef: yM,
+         update: lM
+       } = (0, PM.d)({
+         placement: iM,
+         trigger: null,
+         visible: !0,
+         interactive: !0,
+         closeOnOutsideClick: !1,
+         offset: [0, LM]
+       });
+       (0, jM.useLayoutEffect)((() => {
+         yM(rM)
+       }), [rM, yM]);
+ ... (24 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L343-L347` → after: `L646-L658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L646-L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/107.js#L646-L658) · [Before (L343-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/107.js#L343-L347)

```diff
-       };
-       return (0, EG.jsxs)(EG.Fragment, {
-         children: [!1 === wG.schematicContainsSpawnBlock && (0, EG.jsx)("div", {
-           className: "ManageWarningBanner",
-           children: UG("worldBuilder:mustContainSpawnBlock")
+       }), [rM, zM, lM]), (0, jM.useEffect)((() => {
+         zM && (null === rM || void 0 === rM || rM.scrollIntoView({
+           block: "nearest",
+           inline: "nearest"
+         }))
+       }), [rM, zM]);
+       const CM = (0, jM.useCallback)((MM => {
+         dM(MM), OM && (OM.current = MM)
+       }), [dM, OM]);
+       return (0, aM.createPortal)((0, HM.jsxs)(HM.Fragment, {
+         children: [EM && (0, HM.jsx)(GM, {
+           rect: EM,
+           margin: LM
```

#### 27. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L349-L470` → after: `L660-L667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L660-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/107.js#L660-L667) · [Before (L349-L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/107.js#L349-L470)

```diff
-           className: "ManageSettingsGrid",
-           children: [(0, EG.jsxs)(oG, {
-             icon: "globe",
-             title: UG("worldBuilder:worldRulesSection"),
-             disabled: !yG,
-             children: [(0, EG.jsx)(uG, {
-               label: UG("classic:defaultGamemode"),
-               caption: UG("classic:defaultGamemodeDescription"),
-               disabled: YG,
-               children: (0, EG.jsx)(rG.b, {
-                 controlClassName: "ManageDropdown",
-                 options: hG.F.map((GG => ({
-                   value: GG,
-                   label: KG.y[GG]
-                 }))),
-                 value: wG.defaultGamemode,
- ... (106 more removed lines; see GitHub link above)
+           ref: CM,
+           ...JM({
+             className: SM()("tooltip-container SmallTextLight TutorialStep", nM)
+           }),
+           children: [mM, (0, HM.jsx)("div", {
+             ...hM({
+               className: "tooltip-arrow"
+             })
```

#### 28. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L472-L480` → after: `L669-L693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L669-L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/107.js#L669-L693) · [Before (L472-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/107.js#L472-L480)

```diff
-         }), (0, EG.jsx)(oG, {
-           icon: "layer-group",
-           title: UG("worldBuilder:pluginsSection"),
-           disabled: !yG,
-           children: (0, EG.jsx)(zG.d, {
-             callbacks: VG,
-             disabled: YG,
-             advancedMode: !0,
-             hideWrapper: !0
+         })]
+       }), (0, QM.m)())
+     }
+     const eM = (0, jM.forwardRef)((function(MM, rM) {
+       let {
+         placement: iM = "right",
+         children: OM,
+         ...SM
+       } = MM;
+       const aM = dM(SM),
+         PM = (0, jM.useRef)(null),
+         nM = (0, jM.useRef)(null);
+       lM(SM, aM, PM, nM);
+       const [QM, zM] = (0, jM.useState)(null), LM = OM.ref, mM = (0, jM.useCallback)((MM => {
+         nM.current = MM, zM(MM), JM(rM, MM), JM(LM, MM)
+       }), [rM, LM]);
+ ... (9 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L485-L525` → after: `L713-L720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L713-L720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/107.js#L713-L720) · [Before (L485-L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/107.js#L485-L525)

```diff
-     var CG = ZG(4975),
-       WG = ZG(4396),
-       mG = ZG(1431),
-       IG = ZG(3465),
-       FG = ZG(1092),
-       vG = ZG(4933),
-       aG = ZG(4977),
-       cG = ZG(1396);
-     const lG = 50,
-       jG = .3;
-     async function PG(GG) {
-       const bG = await
-       function(GG) {
-         return new Promise(((bG, ZG) => {
-           const wG = new FileReader;
-           wG.onload = () => bG(wG.result), wG.onerror = ZG, wG.readAsDataURL(GG)
- ... (25 more removed lines; see GitHub link above)
+   },
+   40219: (MM, rM, iM) => {
+     function OM(MM) {
+       return void 0 === MM ? void 0 : [MM[0], MM[1], MM[2]]
+     }
+ 
+     function SM(MM) {
+       const rM = MM.particles;
```

#### 30. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L527-L528` → after: `L722-L738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L722-L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/107.js#L722-L738) · [Before (L527-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/107.js#L527-L528)

```diff
-         base64Jpg: SG,
-         heavilyCompressed: LG < jG
+         opts: {
+           texture: rM.texture,
+           vL: rM.vL,
+           minLifeTime: rM.minLifeTime,
+           maxLifeTime: rM.maxLifeTime,
+           minSize: rM.minSize,
+           maxSize: rM.maxSize,
+           minEmitPower: rM.minEmitPower,
+           maxEmitPower: rM.maxEmitPower,
+           emitRate: rM.emitRate,
+           gravity: OM(rM.gravity),
+           dir1: OM(rM.dir1),
+           dir2: OM(rM.dir2),
+           colorGradients: rM.colorGradients,
+           blendMode: rM.blendMode
+         },
+ ... (1 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L531-L535` → after: `L741-L762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L741-L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/107.js#L741-L762) · [Before (L531-L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/107.js#L531-L535)

```diff
-     class MG extends Error {}
-     class AG extends Error {}
-     var sG = function(GG) {
-       return GG[GG.NOT_LOGGED_IN = 0] = "NOT_LOGGED_IN", GG[GG.THUMBNAIL_LIMIT_REACHED = 1] = "THUMBNAIL_LIMIT_REACHED", GG
-     }(sG || {});
+     iM.d(rM, {
+       b: () => SM
+     })
+   },
+   40186: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => jM,
+       h: () => QM,
+       k: () => nM,
+       m: () => aM
+     });
+     var OM = iM(187);
+     const SM = JSON.parse('{"aura_snowfall":{"offset":[0,2.6,0],"ownInFirstPerson":true,"particles":{"blendMode":1,"capacity":64,"colorGradients":[{"minColor":[255,255,255,0.9],"timeFraction":0},{"minColor":[255,255,255,0],"timeFraction":1}],"depth":3,"dir1":[-0.2,-1,-0.2],"dir2" … [truncated]
+       jM = "PetRoot";
+     let aM = JSON.parse('{"pet_reindeer":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset … [truncated]
+       PM = SM;
+ ... (6 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L540-L543` → after: `L879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/107.js#L879) · [Before (L540-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/107.js#L540-L543)

```diff
-         schematicId: ZG,
-         hasReadUploadPolicy: SG,
-         onPolicyValidationError: UG,
-         onThumbnailReady: YG
+         cards: rM
```

#### 33. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L545-L611` → after: `L881-L894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L881-L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/107.js#L881-L894) · [Before (L545-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/107.js#L545-L611)

```diff
-       const {
-         t: fG
-       } = (0, kG.w)(), [KG, hG] = (0, wG.useState)(null), [dG, JG] = (0, wG.useState)(""), [rG, zG] = (0, wG.useState)(""), [oG, XG] = (0, wG.useState)(!0), [uG, iG] = (0, wG.useState)(!1), CG = (0, wG.useRef)(!1), [WG, mG] = (0, wG.useState)(null), [IG, FG] = (0, wG.useState)(!1 … [truncated]
-         getRootProps: jG,
-         getInputProps: sG,
-         isDragActive: qG
-       } = (0, aG.c)({
-         accept: {
-           "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"]
-         },
-         multiple: !1,
-         onDrop: async GG => {
-           if (0 === GG.length) return;
-           const bG = GG[0],
-             ZG = ++lG.current;
-           mG(null), FG(!1), hG(null), JG(bG.name);
- ... (51 more removed lines; see GitHub link above)
+       return (0, JM.jsx)("div", {
+         className: "ReplayVideoExportOptionCards",
+         children: rM.map((MM => (0, JM.jsxs)("div", {
+           className: "ReplayVideoExportOptionColumn",
+           children: [(0, JM.jsx)("div", {
+             className: PM()("ReplayVideoExportOptionCard", {
+               Selected: MM.selected,
+               Disabled: MM.disabled
+             }),
+             onClick: () => {
+               MM.disabled || MM.onSelect()
+             },
+             children: (0, JM.jsxs)("div", {
+               className: "ReplayVideoExportOptionCardBody",
```

#### 34. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L613-L614` → after: `L896-L897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L896-L897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/107.js#L896-L897) · [Before (L613-L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/107.js#L613-L614)

```diff
-                 className: "ThumbnailUploadInstructions Active",
-                 children: nG
+                 className: "ReplayVideoExportOptionCardLabel",
+                 children: MM.label
```

#### 35. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L616-L617` → after: `L899-L900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L899-L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/107.js#L899-L900) · [Before (L616-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/107.js#L616-L617)

```diff
-                 className: "ThumbnailUploadInstructions Preview",
-                 children: fG("thumbnail:preview")
+                 className: "ReplayVideoExportOptionCardDescription",
+                 children: MM.description
```

#### 36. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L619-L629` → after: `L902-L905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L902-L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/107.js#L902-L905) · [Before (L619-L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/107.js#L619-L629)

```diff
-             })]
-           }) : (0, EG.jsxs)(EG.Fragment, {
-             children: [(0, EG.jsx)("div", {
-               className: "ThumbnailUploadIcon",
-               children: (0, EG.jsx)(VG.c, {
-                 name: "image"
-               })
-             }), (0, EG.jsx)("div", {
-               className: "ThumbnailUploadInstructions",
-               children: fG("thumbnail:dragImageHere")
-             })]
+             })
+           }), MM.disabled && MM.disabledReason && (0, JM.jsx)("div", {
+             className: "ReplayVideoExportOptionError SmallTextLight",
+             children: MM.disabledReason
```

#### 37. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L631-L681` → after: `L907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/107.js#L907) · [Before (L631-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/107.js#L631-L681)

```diff
-         }), TG && (0, EG.jsx)("div", {
-           className: "ThumbnailUploadError",
-           children: fG("thumbnail:imageRequired")
-         }), (0, EG.jsx)(yG.b, {
-           className: QG()("ThumbnailUploadNameInput", {
-             ValidationError: HG
-           }),
-           placeholderText: fG("thumbnail:thumbnailName"),
-           defaultValue: rG,
-           onValueChange: GG => {
-             zG(GG)
-           },
-           maxLength: pG.j
-         }), HG && (0, EG.jsx)("div", {
-           className: "ThumbnailUploadError",
-           children: fG("thumbnail:nameRequired", {
- ... (35 more removed lines; see GitHub link above)
+         }, MM.id)))
```

#### 38. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L684-L686` → after: `L910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/107.js#L910) · [Before (L684-L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/107.js#L684-L686)

```diff
-     const nG = 2e3;
- 
-     function gG(GG) {
+     const EM = (0, jM.memo)((function(MM) {
```

#### 39. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L688-L691` → after: `L912-L916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L912-L916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/107.js#L912-L916) · [Before (L688-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/107.js#L688-L691)

```diff
-         schematicId: bG,
-         ownedThumbnailCount: ZG,
-         onClose: SG,
-         onThumbnailReady: LG
+         hasPlaybackMark: rM,
+         canIncludeUi: iM,
+         includeUiDisabledReason: OM,
+         selectionRef: SM,
+         closePopup: aM
```

#### 40. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L693-L716` → after: `L918-L923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L918-L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/107.js#L918-L923) · [Before (L693-L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/107.js#L693-L716)

```diff
-       const {
-         t: yG
-       } = (0, kG.w)(), {
-         userContext: UG
-       } = (0, FG.e)(), [YG, fG] = (0, wG.useState)(!1), [KG, hG] = (0, wG.useState)(!1), [dG, JG] = (0, wG.useState)(!1), rG = (0, wG.useRef)();
-       (0, wG.useEffect)((() => () => {
-         clearTimeout(rG.current)
-       }), []);
-       const zG = function(GG, bG) {
-         const ZG = [];
-         return GG.isLoggedIn() || ZG.push(sG.NOT_LOGGED_IN), bG >= pG.S && ZG.push(sG.THUMBNAIL_LIMIT_REACHED), ZG
-       }(UG, ZG);
-       if (zG.length > 0) {
-         const GG = {
-           [sG.NOT_LOGGED_IN]: {
-             key: "thumbnail:mustBeLoggedInToUpload"
- ... (8 more removed lines; see GitHub link above)
+       const PM = hM("webm") || hM("mp4"),
+         [zM, LM] = (0, jM.useState)(yM),
+         [mM, HM] = (0, jM.useState)(iM),
+         EM = PM && hM(zM);
+       if (!PM) {
+         const MM = (0, QM.isMobile)() ? "screen recording" : "OBS";
```

#### 41. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L718-L732` → after: `L925-L941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L925-L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/107.js#L925-L941) · [Before (L718-L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/107.js#L718-L732)

```diff
-           className: "ThumbnailUploaderInner",
-           children: [(0, EG.jsx)("h1", {
-             className: "SchematicPopupTitle",
-             children: yG("thumbnail:cannotUploadThumbnail")
-           }), zG.map(((bG, ZG) => {
-             const wG = GG[bG];
-             return (0, EG.jsxs)("div", {
-               className: "CannotUploadThumbnailItem",
-               children: [(0, EG.jsx)(VG.c, {
-                 name: "triangle-exclamation"
-               }), (0, EG.jsx)("span", {
-                 children: yG(wG.key, wG.params)
-               })]
-             }, ZG)
-           }))]
+           className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
+           children: [(0, JM.jsx)("div", {
+             className: "PromptPopupNotificationTitle SmallTextBold",
+             children: "Can't export video"
+           }), (0, JM.jsx)("div", {
+             className: "PromptPopupNotificationSubtitle SmallTextLight",
+             children: `Your device does not support exporting. Try recording with an external software like ${MM}.`
+           }), (0, JM.jsx)("div", {
+             className: "PromptPopupNotificationBody",
+             children: (0, JM.jsx)(nM.J, {
+               className: "PromptPopupNotificationBodyButton",
+               onClick: () => {
+                 SM.options = null, aM()
+               },
+               children: "Close"
+             })
+ ... (1 more added lines; see GitHub link above)
```

#### 42. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L736-L748` → after: `L981-L994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L981-L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/107.js#L981-L994) · [Before (L736-L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/107.js#L736-L748)

```diff
-         className: QG()("ThumbnailUploaderInner", {
-           ThumbnailUploaderSuccess: YG
-         }),
-         children: [YG && (0, EG.jsxs)("div", {
-           className: "ThumbnailUploadSuccessOverlay",
-           children: [(0, EG.jsxs)("div", {
-             className: "ThumbnailUploadSuccessIcon FullyFancyText AnimFadeInScaleUp",
-             children: [(0, EG.jsx)(VG.c, {
-               name: "check"
-             }), (0, EG.jsx)(cG.d, {})]
-           }), (0, EG.jsx)("div", {
-             className: "ThumbnailUploadSuccessText AnimFadeInScaleUp",
-             children: yG("thumbnail:thumbnailUploaded")
+         className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
+         children: [(0, JM.jsx)("div", {
+           className: "PromptPopupNotificationTitle SmallTextBold",
+           children: "Export video?"
+         }), (0, JM.jsx)("div", {
+           className: "PromptPopupNotificationSubtitle SmallTextLight",
+           children: UM
+         }), (0, JM.jsxs)("div", {
+           className: "ReplayVideoExportOptionsSection",
+           children: [(0, JM.jsx)("div", {
+             className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
+             children: "UI"
+           }), (0, JM.jsx)(lM, {
+             cards: GM
```

#### 43. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L754-L843` → after: `L997-L1021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L997-L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/107.js#L997-L1021) · [Before (L754-L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/107.js#L754-L843)

```diff
-           className: "ThumbnailUploaderBody",
-           children: [(0, EG.jsxs)("div", {
-             className: "ThumbnailUploaderLeft",
-             children: [(0, EG.jsx)("h3", {
-               className: "SchematicPopupSubtitle",
-               children: yG("thumbnail:chooseImage", {
-                 maxSizeKb: lG
-               })
-             }), (0, EG.jsx)(qG, {
-               schematicId: bG,
-               hasReadUploadPolicy: KG,
-               onPolicyValidationError: () => {
-                 JG(!0)
-               },
-               onThumbnailReady: async (GG, bG, ZG) => {
-                 await LG(GG, bG, ZG), fG(!0), rG.current = setTimeout(SG, nG)
- ... (74 more removed lines; see GitHub link above)
+           className: "ReplayVideoExportOptionsSection",
+           children: [(0, JM.jsx)("div", {
+             className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
+             children: "Format"
+           }), (0, JM.jsx)(lM, {
+             cards: CM
+           })]
+         }), (0, JM.jsxs)("div", {
+           className: "PromptPopupNotificationBody",
+           children: [(0, JM.jsx)(nM.p, {
+             className: "PromptPopupNotificationBodyButton PromptPopupNotificationBodyPrimaryButton",
+             disabled: !EM,
+             onClick: () => {
+               SM.options = {
+                 format: zM,
+                 includeUi: iM && mM
+ ... (9 more added lines; see GitHub link above)
```

#### 44. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L847-L876` → after: `L1025-L1052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1025-L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/107.js#L1025-L1052) · [Before (L847-L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/107.js#L847-L876)

```diff
-     }
-     var eG = ZG(1163);
-     const RG = {
-       "custom-game-bad-thumbnail": {
-         reason: "thumbnail:rejectionInappropriate",
-         tips: ["thumbnail:rejectionInappropriateTip1", "thumbnail:rejectionInappropriateTip2", "thumbnail:rejectionInappropriateTip3"]
-       },
-       "thumbnail-copyright-content": {
-         reason: "thumbnail:rejectionCopyright",
-         tips: ["thumbnail:rejectionCopyrightTip1", "thumbnail:rejectionCopyrightTip2", "thumbnail:rejectionCopyrightTip3"]
-       },
-       "thumbnail-random-irrelevant-content": {
-         reason: "thumbnail:rejectionIrrelevant",
-         tips: ["thumbnail:rejectionIrrelevantTip1", "thumbnail:rejectionIrrelevantTip2", "thumbnail:rejectionIrrelevantTip3"]
-       },
-       "thumbnail-sexual-content": {
- ... (14 more removed lines; see GitHub link above)
+     }));
+     var UM = iM(5265),
+       GM = iM(37926),
+       CM = iM(37935);
+     let eM = null;
+ 
+     function bM() {
+       return function() {
+         const MM = (0, CM.c)();
+         for (const {
+             group: rM,
+             dataAttr: iM
+           }
+           of GM.c)
+           if (iM && MM[rM]) return !0;
+         return !1
+ ... (12 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L878` → after: `L1054-L1068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1054-L1068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/107.js#L1054-L1068) · [Before (L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/107.js#L878)

```diff
-     };
+     }
+     async function wM(MM, rM, iM) {
+       return MM ? async function() {
+         const MM = await navigator.mediaDevices.getDisplayMedia({
+           video: !0,
+           audio: !1,
+           preferCurrentTab: !0,
+           selfBrowserSurface: "include"
+         });
+         for (const rM of MM.getAudioTracks()) rM.stop(), MM.removeTrack(rM);
+         return MM
+       }(): rM().captureStream(Math.max(1, Math.round(iM)))
+     }
+     var tM = iM(40118);
+     let gM = !1;
```

#### 46. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L882-L893` → after: `L1075-L1254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1075-L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/107.js#L1075-L1254) · [Before (L882-L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/107.js#L882-L893)

```diff
-       let {
-         schematicData: yG,
-         updateSchematicData: YG,
-         publishFormEnabled: pG,
-         onClose: fG
-       } = GG;
-       const {
-         t: KG
-       } = (0, kG.w)(), {
-         userContext: hG,
-         isUserContextUpdating: dG
-       } = (0, FG.e)(), JG = (0, IG.c)(), [rG, zG] = (0, wG.useState)([]), [oG, XG] = (0, wG.useState)([]), [uG, iG] = (0, wG.useState)(!0), [CG, WG] = (0, wG.useState)(null !== (bG = yG.customThumbnailId) && void 0 !== bG ? bG : null), [aG, cG] = (0, wG.useState)(null), lG = (0,  … [truncated]
+       if ((0, tM.d)() || gM) return;
+       const jM = MM();
+       if (!jM) return;
+       gM = !0;
+       let aM = null;
+       const PM = jM.playbackMarkInTick,
+         {
+           canIncludeUi: nM,
+           includeUiDisabledReason: QM
+         } = bM();
+       try {
+         aM = await async function(MM) {
+           let {
+             hasPlaybackMark: rM,
+             canIncludeUi: iM,
+             includeUiDisabledReason: OM
+ ... (164 more added lines; see GitHub link above)
```

#### 47. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L895-L924` → after: `L1256-L1271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1256-L1271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/107.js#L1256-L1271) · [Before (L895-L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/107.js#L895-L924)

```diff
-       function qG(GG, bG) {
-         AG.current && (clearTimeout(AG.current), AG.current = null), cG(GG), null !== GG && bG && (AG.current = setTimeout((() => {
-           cG(null), AG.current = null
-         }), 5e3))
-       }(0, wG.useEffect)((() => () => {
-         clearTimeout(MG.current), clearTimeout(AG.current)
-       }), []);
-       const nG = (0, wG.useCallback)((() => {
-         iG(!0), mG.d.getOwnedThumbnails(hG).then((GG => {
-           const bG = [],
-             ZG = [];
-           for (const wG of GG.thumbnails) wG.rejectionPolicyId ? bG.push(wG) : ZG.push(wG);
-           bG.sort(((GG, bG) => GG.lastUpdatedAt - bG.lastUpdatedAt)), ZG.sort(((GG, bG) => {
-             const ZG = GG.approved ? 1 : 0,
-               wG = (bG.approved ? 1 : 0) - ZG;
-             return 0 !== wG ? wG : bG.lastUpdatedAt - GG.lastUpdatedAt
- ... (14 more removed lines; see GitHub link above)
+     function QM(MM, rM, iM, OM, SM, jM, PM) {
+       const {
+         waveform: nM,
+         pitchHz: QM,
+         attackMs: zM,
+         releaseMs: LM,
+         lowpassHz: mM
+       } = iM, HM = SM + OM.durationMs / 1e3, hM = QM * 2 ** (OM.semitones / 12), JM = MM.createOscillator();
+       JM.type = nM, JM.frequency.setValueAtTime(hM, SM), JM.frequency.exponentialRampToValueAtTime(hM * 2 ** (OM.glideSemitones / 12), HM);
+       const dM = SM + Math.min(zM, OM.durationMs) / 1e3,
+         yM = MM.createGain();
+       yM.gain.setValueAtTime(0, SM), yM.gain.linearRampToValueAtTime(jM, dM), yM.gain.linearRampToValueAtTime(jM * aM, Math.max(dM, HM - LM / 1e3)), yM.gain.linearRampToValueAtTime(0, HM);
+       const lM = [JM];
+       if (null !== mM) {
+         const rM = MM.createBiquadFilter();
+         rM.type = "lowpass", rM.frequency.value = mM, lM.push(rM)
```

#### 48. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L927-L942` → after: `L1281-L1373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1281-L1373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/107.js#L1281-L1373) · [Before (L927-L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/107.js#L927-L942)

```diff
-       function TG() {
-         jG.current = Date.now(), MG.current = null;
-         const GG = PG.current;
-         PG.current = null, qG({
-           text: KG("thumbnail:settingThumbnail"),
-           type: "info"
-         }, !1), mG.d.setSchematicThumbnail(hG, yG.schematicId, GG).then((() => {
-           JG.current && (qG({
-             text: KG("thumbnail:thumbnailUpdated"),
-             type: "success"
-           }, !0), lG.current = GG, YG("customThumbnailId", GG), YG("customThumbnailBlurhash", void 0), YG("customThumbnailVariants", void 0))
-         })).catch((GG => {
-           JG.current && (qG({
-             text: GG.errorMessageForUser ? KG(GG.errorMessageForUser, GG.errorMessageTranslationParams) : KG("thumbnail:failedToSetThumbnail"),
-             type: "error"
-           }, !0), WG(lG.current))
+     function zM(MM, rM, iM, OM, SM, aM) {
+       if (0 === OM.length) return aM(), () => {};
+       const zM = jM * iM.volume * SM,
+         LM = MM.createGain();
+       LM.connect(rM);
+       const mM = MM.currentTime + PM,
+         HM = new Set;
+       for (const jM of OM) {
+         const rM = QM(MM, LM, iM, jM, mM + jM.atMs / 1e3, zM * jM.level, (() => {
+           HM.delete(rM), 0 === HM.size && (LM.disconnect(), aM())
+         }));
+         HM.add(rM)
+       }
+       return () => {
+         const rM = MM.currentTime;
+         LM.gain.setTargetAtTime(0, rM, nM);
+ ... (77 more added lines; see GitHub link above)
```

#### 49. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L946-L954` → after: `L1378-L1399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1378-L1399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/107.js#L1378-L1399) · [Before (L946-L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/107.js#L946-L954)

```diff
-       function DG(GG) {
-         WG(GG), PG.current = GG;
-         const bG = Date.now() - jG.current;
-         bG >= 1e3 ? TG() : (qG({
-           text: KG("thumbnail:settingThumbnail"),
-           type: "info"
-         }, !1), MG.current || (MG.current = setTimeout((() => {
-           TG()
-         }), 1e3 - bG)))
+     function LM(MM) {
+       return (0, jM.d)("chat", (rM => {
+         let {
+           serverChatMsgId: iM,
+           worldCodeLineId: OM,
+           content: SM,
+           chatterEId: jM,
+           chatterObjectsToReplay: aM
+         } = rM;
+         const PM = jM ? MM(jM) : null;
+         return {
+           serverChatMsgId: null !== iM && void 0 !== iM ? iM : null,
+           worldCodeLineId: null !== OM && void 0 !== OM ? OM : null,
+           content: SM,
+           author: PM,
+           hiddenFromReplay: !0 === aM && !1 === (null === PM || void 0 === PM ? void 0 : PM.local)
+ ... (6 more added lines; see GitHub link above)
```

#### 50. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L956-L1073` → after: `L1401-L1567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1401-L1567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/107.js#L1401-L1567) · [Before (L956-L1073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/107.js#L956-L1073)

```diff
-       return (0, wG.useEffect)((() => {
-         !1 === dG && nG()
-       }), [dG, nG]), oG.length > 0 ? (0, EG.jsx)(HG, {
-         rejectedThumbnails: oG,
-         userContext: hG,
-         isMountedRef: JG,
-         onAcknowledged: nG
-       }) : (0, EG.jsxs)("div", {
-         className: "BloxdForm ThumbnailSection",
-         children: [(0, EG.jsxs)("div", {
-           className: "SectionTitle",
-           children: [KG("thumbnail:gameThumbnail"), aG && (0, EG.jsx)("span", {
-             className: QG()("ThumbnailActionMsg", `ThumbnailActionMsg--${aG.type}`),
-             children: aG.text
-           })]
-         }), (0, EG.jsx)("div", {
- ... (102 more removed lines; see GitHub link above)
+       update(MM) {
+         let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+         const iM = this.shown;
+         return MM !== this.needed && (this.needed = MM, this.neededSince = rM, null === MM && (this.shown = null)), this.shown !== this.needed && rM - this.neededSince > 200 && (this.shown = this.needed), this.shown !== iM
+       }
+     }
+ 
+     function HM(MM) {
+       return [{
+         translationKey: `touchKeys:${MM}`
+       }]
+     }
+     const hM = {
+       open: HM("open"),
+       close: HM("close"),
+       milk: HM("milk"),
+ ... (151 more added lines; see GitHub link above)
```

#### 51. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1075-L1085` → after: `L1569-L1600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1569-L1600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/107.js#L1569-L1600) · [Before (L1075-L1085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/107.js#L1075-L1085)

```diff
-               },
-               children: [(0, EG.jsx)(VG.c, {
-                 name: "plus"
-               }), (0, EG.jsx)("div", {
-                 className: "ThumbnailGridItemLabel",
-                 children: KG("thumbnail:uploadThumbnail")
-               })]
-             })]
-           })
-         })]
-       })
+               }
+             }
+           }
+           return OM
+         };
+       return iM(MM)
+     }
+ 
+     function ar(MM, rM) {
+       const iM = jr(MM),
+         OM = function(MM, rM) {
+           const iM = MM => MM.hasGeometry && 0 === MM.children.length,
+             OM = MM => MM.children.some((MM => iM(MM) ? !rM(MM.name) : !rM(MM.name) && OM(MM))),
+             SM = (MM, OM) => {
+               const aM = new Set;
+               return MM.flatMap((MM => iM(MM) ? !OM && !rM(MM.name) || aM.has(MM.name) ? [] : (aM.add(MM.name), [MM.name]) : rM(MM.name) || OM ? [jM(MM)] : SM(MM.children, !1)))
+ ... (16 more added lines; see GitHub link above)
```

#### 52. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1089-L1102` → after: `L1604-L1762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1604-L1762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/107.js#L1604-L1762) · [Before (L1089-L1102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/107.js#L1089-L1102)

```diff
-       let {
-         rejectedThumbnails: bG,
-         userContext: ZG,
-         isMountedRef: SG,
-         onAcknowledged: yG
-       } = GG;
-       const {
-         t: YG
-       } = (0, kG.w)(), [pG, fG] = (0, wG.useState)(!1), [QG, KG] = (0, wG.useState)(!1), hG = function(GG) {
-         const bG = new Map;
-         for (const ZG of GG) {
-           const GG = ZG.rejectionPolicyId,
-             wG = bG.get(GG);
-           wG ? wG.push(ZG) : bG.set(GG, [ZG])
+       return MM.reduce(((MM, rM) => {
+         var iM;
+         return MM + ("string" === typeof rM ? 1 : (void 0 === rM.collapsesTo ? 0 : 1) + Pr(null !== (iM = rM.children) && void 0 !== iM ? iM : []))
+       }), 0)
+     }
+ 
+     function nr(MM, rM) {
+       const iM = MM => MM.getChildren(),
+         OM = MM => {
+           if ("Wk" in MM && !0 === MM.Wk) throw new Error(`${MM.name} is drawn as an instance of another mesh`);
+           return "getTotalVertices" in MM && MM.getTotalVertices() > 0
+         },
+         SM = MM => {
+           var rM, SM;
+           return !OM(MM) || iM(MM).length > 0 ? null : `${null!==(rM=null===(SM=MM.material)||void 0===SM?void 0:SM.uniqueId)&&void 0!==rM?rM:"none"} ${MM.getVerticesDataKinds().sort().join(",")}`
+         };
+ ... (143 more added lines; see GitHub link above)
```

#### 53. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1104-L1174` → after: `L1764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/107.js#L1764) · [Before (L1104-L1174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/107.js#L1104-L1174)

```diff
-         return bG
-       }(bG);
-       return (0, EG.jsxs)("div", {
-         className: "ThumbnailRejectionNotice",
-         children: [(0, EG.jsxs)("div", {
-           className: "ThumbnailRejectionNoticeTitle",
-           children: [(0, EG.jsx)(VG.c, {
-             name: "triangle-exclamation"
-           }), " ", YG("thumbnail:thumbnailsRejected"), " ", (0, EG.jsx)(VG.c, {
-             name: "triangle-exclamation"
-           })]
-         }), (0, EG.jsx)("div", {
-           className: "ThumbnailRejectionNoticeSubtitle",
-           children: YG("thumbnail:thumbnailsRejectedDescription")
-         }), (0, EG.jsx)("div", {
-           className: "ThumbnailRejectionNoticeList",
- ... (55 more removed lines; see GitHub link above)
+       }
```

#### 54. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1178-L1218` → after: `L1768-L1771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1768-L1771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/107.js#L1768-L1771) · [Before (L1178-L1218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/107.js#L1178-L1218)

```diff
-       let {
-         thumbnailId: bG,
-         thumbnailName: ZG,
-         onClose: wG
-       } = GG;
-       const {
-         t: SG
-       } = (0, kG.w)();
-       return (0, EG.jsxs)("div", {
-         className: "ThumbnailDeleteConfirm",
-         children: [(0, EG.jsx)("div", {
-           className: "ThumbnailDeleteConfirmTitle",
-           children: SG("thumbnail:deleteThumbnail")
-         }), (0, EG.jsxs)("div", {
-           className: "ThumbnailDeleteConfirmImageContainer",
-           children: [(0, EG.jsx)("img", {
- ... (25 more removed lines; see GitHub link above)
+       return MM.flatMap((MM => {
+         var rM;
+         return "string" === typeof MM ? [MM] : [MM.nodeName, ...Lr(null !== (rM = MM.children) && void 0 !== rM ? rM : [])]
+       }))
```

#### 55. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1220-L1223` → after: `L1773-L40681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1773-L40681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/107.js#L1773-L40681) · [Before (L1220-L1223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/107.js#L1220-L1223)

```diff
-     var DG = ZG(2138),
-       NG = ZG(5008),
-       OG = ZG(5012),
-       xG = ZG(5044);
+ 
+     function mr(MM, rM, iM) {
+       rM.name = `${iM}SkeletalVehicleMat`;
+       const OM = (0, tM.Y)(rM);
+       (0, tM.H)(OM), (0, Sr.e)(rM, (() => {
+         (0, Or.b)(OM, MM), (0, vM.b)(OM, !0)
+       })), (0, Sr.f)(rM)
+     }
+     const Hr = {
+         width: !1,
+         height: !1,
+         depth: !1,
+         diffuseColor: !0,
+         emissiveColor: !0,
+         backFaceCulling: !0,
+         texture: !0,
+ ... (38893 more added lines; see GitHub link above)
```

#### 56. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1226-L1234` → after: `L40684-L40685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR40684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L40684-L40685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/107.js#L40684-L40685) · [Before (L1226-L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/107.js#L1226-L1234)

```diff
-       let {
-         schematicData: bG,
-         setTexturePack: ZG,
-         initializeTexturePack: SG,
-         publishFormEnabled: LG
-       } = GG;
-       const {
-         t: yG
-       } = (0, kG.w)(), [UG, YG] = (0, wG.useState)(null), [VG, pG] = (0, wG.useState)(null), [fG, KG] = (0, wG.useState)(!1), hG = (0, IG.c)(), dG = LG && !fG, JG = bG.customTexturePackKey;
+       return MM.pathname.slice(MM.pathname.lastIndexOf("/") + 1)
+     }
```

#### 57. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1236-L1238` → after: `L40687-L40693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR40687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L40687-L40693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/107.js#L40687-L40693) · [Before (L1236-L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/107.js#L1236-L1238)

```diff
-       function rG(GG) {
-         var bG;
-         YG(GG.metaData.id), pG(null !== (bG = GG.metaData.fromFolderName) && void 0 !== bG ? bG : null), (GG.metaData.id !== DG.q.CUSTOM || GG.metaData.fromFolderName) && ZG(GG)
+     function mM() {
+       try {
+         if ("undefined" === typeof localStorage) return null;
+         const MM = JSON.parse(localStorage.getItem(QM) ?? "[]");
+         return Array.isArray(MM) ? MM.filter((MM => "string" === typeof MM)) : []
+       } catch (MM) {
+         return console.warn("Bloxd wasm: the record of downloaded modules could not be read: asking the HTTP cache for none", MM), null
```

#### 58. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1283` → after: `L40696-L40710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR40696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L40696-L40710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/107.js#L40696-L40710) · [Before (L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/107.js#L1283)

```diff
-     var Gb = ZG(5080);
+     const HM = Reflect.apply,
+       hM = "undefined" === typeof Worker ? void 0 : Worker,
+       JM = hM?.prototype.postMessage,
+       dM = hM?.prototype.terminate,
+       yM = "undefined" === typeof EventTarget ? void 0 : EventTarget.prototype.addEventListener,
+       lM = "undefined" === typeof MessageEvent ? void 0 : Object.getOwnPropertyDescriptor(MessageEvent.prototype, "data")?.get,
+       EM = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array.prototype), "buffer").get,
+       UM = function() {
+         try {
+           return (0, aM.p)(hM, "Worker", !0) && (0, aM.p)(JM, "postMessage") && (0, aM.p)(dM, "terminate") && (0, aM.p)(EM, "buffer") && void 0 !== yM && void 0 !== lM
+         } catch {
+           return !1
+         }
+       }();
+     let GM = !1;
```

#### 59. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1285-L1306` → after: `L40712-L40763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR40712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L40712-L40763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/107.js#L40712-L40763) · [Before (L1285-L1306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/107.js#L1285-L1306)

```diff
-     function bb(GG) {
-       var bG;
-       let {
-         gameCategory: ZG,
-         setGameCategory: wG,
-         disabled: SG
-       } = GG;
-       const yG = null !== (bG = (0, KG.Bb)(ZG)) && void 0 !== bG ? bG : "other";
-       return (0, EG.jsxs)("div", {
-         className: "GameCategoryPicker",
-         children: [(0, EG.jsx)(JG.e, {
-           label: "worldBuilder:gameCategoryGroup",
-           className: "GameCategoryGroup",
-           disabled: SG,
-           children: (0, EG.jsx)(rG.b, {
-             options: KG.ob.map((GG => ({
- ... (6 more removed lines; see GitHub link above)
+     function CM() {
+       return UM && !GM
+     }
+     class eM {
+       worker = null;
+       failed = !1;
+       constructor() {
+         if (CM()) try {
+           this.worker = wM(), HM(yM, this.worker, ["error", () => {
+             this.failed = !0
+           }])
+         } catch {
+           this.stop()
+         }
+       }
+       take() {
+ ... (36 more added lines; see GitHub link above)
```

#### 60. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1308-L1324` → after: `L40765-L40788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR40765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L40765-L40788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/107.js#L40765-L40788) · [Before (L1308-L1324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/107.js#L1308-L1324)

```diff
-           })
-         }), (0, EG.jsx)(JG.e, {
-           label: "worldBuilder:gameCategory",
-           className: "GameCategory",
-           disabled: SG,
-           children: (0, EG.jsx)("div", {
-             className: "GameCategoryOptions",
-             children: KG.gb[yG].map((GG => (0, EG.jsx)(LG.K, {
-               active: GG === ZG,
-               onClick: () => {
-                 wG(GG)
-               },
-               children: (0, KG.yb)(GG)
-             }, GG)))
-           })
-         })]
- ... (1 more removed lines; see GitHub link above)
+           })), jM("error", (() => {
+             GM = !0, SM(new Error("The zstd decoder's worker did not run"))
+           })), jM("messageerror", (() => {
+             SM(new Error(`${MM}'s decoder sent a piece that could not be read`))
+           }))
+         })), (0, nM.V)(this.decoded), HM(JM, aM, [
+           [MM, rM]
+         ])
+       }
+       push(MM) {
+         HM(JM, this.worker, [MM, [HM(EM, MM, [])]])
+       }
+       end() {
+         HM(JM, this.worker, [null])
+       }
+       markWorkerFailed() {
+ ... (8 more added lines; see GitHub link above)
```

#### 61. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1327-L1374` → after: `L40791-L40815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR40791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L40791-L40815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/107.js#L40791-L40815) · [Before (L1327-L1374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/107.js#L1327-L1374)

```diff
-     function Zb(GG) {
-       let {
-         editor: bG,
-         onClose: ZG
-       } = GG;
-       const {
-         t: wG
-       } = (0, kG.w)(), {
-         schematicData: SG,
-         updateSchematicData: LG,
-         publishFormEnabled: UG,
-         formEnabled: YG
-       } = bG;
-       return (0, EG.jsxs)(EG.Fragment, {
-         children: [(0, EG.jsxs)(oG, {
-           icon: "pen-to-square",
- ... (32 more removed lines; see GitHub link above)
+     function wM() {
+       if (globalThis.Worker !== hM) throw new Error("Worker is not the one the page loaded with");
+       return new Worker(new URL(iM.p + iM.u(79), iM.b), {
+         name: "wasmZstdDecoder",
+         type: "module"
+       })
+     }
+     const tM = Reflect.apply,
+       gM = ArrayBuffer,
+       uM = "undefined" === typeof Response ? void 0 : Response,
+       RM = "undefined" === typeof ReadableStream ? void 0 : ReadableStream,
+       pM = function() {
+         let MM;
+         void 0 !== RM && new RM({
+           __proto__: null,
+           start(rM) {
+ ... (9 more added lines; see GitHub link above)
```

#### 62. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1376-L1390` → after: `L40817-L40899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR40817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L40817-L40899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/107.js#L40817-L40899) · [Before (L1376-L1390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/107.js#L1376-L1390)

```diff
-           })]
-         }), (0, EG.jsx)(iG, {
-           schematicData: SG,
-           updateSchematicData: LG,
-           publishFormEnabled: UG,
-           formEnabled: YG
-         }), !0 === SG.gamePublished && (0, EG.jsx)(oG, {
-           icon: "palette",
-           title: wG("worldBuilder:texturePackSection"),
-           disabled: !YG,
-           children: (0, EG.jsx)(BG, {
-             schematicData: SG,
-             setTexturePack: bG.setTexturePack,
-             initializeTexturePack: bG.initializeTexturePack,
-             publishFormEnabled: UG
+           }
+         }, {
+           __proto__: null
+         });
+         return MM
+       }(),
+       WM = function() {
+         try {
+           return "undefined" !== typeof WebAssembly && "function" === typeof WebAssembly.compileStreaming && void 0 !== pM && (0, aM.p)(uM, "Response", !0) && (0, aM.p)(RM, "ReadableStream", !0) && (0, aM.p)(pM.enqueue, "enqueue") && (0, aM.p)(pM.close, "close") && (0, aM.p)(pM.e … [truncated]
+         } catch {
+           return !1
+         }
+       }();
+     async function sM(MM, rM, iM, OM, jM, aM, QM) {
+       const zM = new gM(rM),
+         {
+ ... (67 more added lines; see GitHub link above)
```

#### 63. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1392-L1393` → after: `L40901-L40952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR40901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L40901-L40952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/107.js#L40901-L40952) · [Before (L1392-L1393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/107.js#L1392-L1393)

```diff
-         })]
-       })
+         } catch (wM) {
+           throw new Error(`Fetching ${MM} failed: ${(0,PM.g)(wM)}`)
+         }
+         const {
+           ok: QM,
+           status: zM,
+           body: LM
+         } = function(MM, rM) {
+           try {
+             const {
+               ok: MM,
+               status: iM
+             } = rM;
+             return {
+               ok: MM,
+               status: iM,
+ ... (36 more added lines; see GitHub link above)
```

#### 64. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1397-L1431` → after: `L40956-L40958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR40956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L40956-L40958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/107.js#L40956-L40958) · [Before (L1397-L1431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/107.js#L1397-L1431)

```diff
-       let {
-         editor: bG
-       } = GG;
-       const {
-         t: ZG
-       } = (0, kG.w)(), {
-         schematicData: wG,
-         formEnabled: SG,
-         hasUnsavedChanges: yG
-       } = bG, pG = SG && yG;
-       return (0, EG.jsxs)("footer", {
-         className: "SchematicPageFooter",
-         children: [SG && yG && (0, EG.jsxs)("div", {
-           className: "SchematicPageFooterStatus",
-           children: [(0, EG.jsx)("span", {
-             className: "SchematicPageFooterStatusDot"
- ... (19 more removed lines; see GitHub link above)
+       try {
+         (0, nM.V)(MM.cancel())
+       } catch {}
```

#### 65. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1435-L1443` → after: `L40965-L41025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR40965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L40965-L41025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/107.js#L40965-L41025) · [Before (L1435-L1443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/107.js#L1435-L1443)

```diff
-       let {
-         schematic: bG,
-         onSchematicUpdate: ZG,
-         onClose: SG,
-         inSourceWorld: yG
-       } = GG;
-       const {
-         t: UG
-       } = (0, kG.w)();
+       return oM ??= function() {
+         const MM = new Map,
+           rM = "bloxd_wasm_webgpu:5157353,bloxd_wasm_webgl:5537354,bloxd_wasm_webgl1:4870652,bloxd_wasm_workers:201241,bloxd_wasm_models:311549,bloxd_wasm_client:3726896";
+         for (const iM of rM?.split(",") ?? []) {
+           const [rM = "", OM] = iM.split(":"), SM = Number(OM);
+           Number.isInteger(SM) && SM > 0 && MM.set(rM, SM)
+         }
+         return MM
+       }(), oM.get(MM)
+     }
+     async function YM(MM, rM) {
+       let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
+       const OM = fM(MM.name);
+       if (void 0 === OM) return NM(await AM(MM, rM, iM), "cold-wasm");
+       const jM = WM ? new eM : null;
+       let aM;
+ ... (45 more added lines; see GitHub link above)
```

#### 66. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1445-L1446` → after: `L41027-L41031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR41027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L41027-L41031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/107.js#L41027-L41031) · [Before (L1445-L1446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/107.js#L1445-L1446)

```diff
-       function YG() {
-         null === SG || void 0 === SG || SG()
+     function NM(MM, rM) {
+       return {
+         __proto__: null,
+         module: MM,
+         path: rM
```

#### 67. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1448-L1474` → after: `L41033-L41052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR41033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L41033-L41052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/107.js#L41033-L41052) · [Before (L1448-L1474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/107.js#L1448-L1474)

```diff
-       const VG = (0, Gb.b)(bG, {
-         onNavigateAway: YG,
-         inSourceWorld: yG
-       });
-       return (0, wG.useEffect)((() => {
-         null === ZG || void 0 === ZG || ZG(VG.schematicData)
-       }), [VG.schematicData, ZG]), (0, EG.jsxs)("div", {
-         className: "SchematicPage SchematicPagePopupVariant",
-         children: [(0, EG.jsxs)("div", {
-           className: "SchematicPageBody",
-           children: [(0, EG.jsx)(LG.b, {
-             onClick: YG,
-             children: UG("worldBuilder:back")
-           }), (0, EG.jsx)(oG, {
-             icon: "rocket-launch",
-             title: UG("worldBuilder:actionsSection"),
- ... (11 more removed lines; see GitHub link above)
+     }
+ 
+     function AM(MM, rM, iM) {
+       return void 0 === fM(MM.name) ? (0, nM.E)(MM.url(), rM, iM) : (0, nM.E)(MM.url(), rM, {
+         ...iM,
+         hideThen: !0,
+         onDownloaded: () => {
+           ! function(MM) {
+             const rM = mM();
+             if (null === rM) return;
+             const iM = LM(MM),
+               OM = rM.filter((MM => MM !== iM));
+             OM.push(iM);
+             try {
+               localStorage.setItem(QM, JSON.stringify(OM.slice(-zM)))
+             } catch (SM) {
+ ... (4 more added lines; see GitHub link above)
```

#### 68. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1479-L1495` → after: `L41131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR41131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L41131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/107.js#L41131) · [Before (L1479-L1495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/107.js#L1479-L1495)

```diff
-       let {
-         schematic: bG,
-         onSchematicUpdate: ZG,
-         onClose: wG,
-         inSourceWorld: LG
-       } = GG;
-       SG.NotificationProvider.showCustomPopup({
-         body: GG => (0, EG.jsx)(Sb, {
-           schematic: bG,
-           onSchematicUpdate: ZG,
-           onClose: GG,
-           inSourceWorld: LG
-         }),
-         middleScreenPopupClassName: "SchematicPopup",
-         onClose: wG,
-         unlockPointerKey: "schematicPagePopup"
- ... (1 more removed lines; see GitHub link above)
+       return XM.get(MM)
```

#### 69. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1512-L1515` → after: `L41135-L41160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR41135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L41135-L41160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/107.js#L41135-L41160) · [Before (L1512-L1515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/107.js#L1512-L1515)

```diff
-       let {
-         editor: bG,
-         className: ZG
-       } = GG;
+       const rM = performance.now(),
+         iM = BM.get(MM.name);
+       BM.delete(MM.name);
+       const OM = !0 === iM?.downloaded ? iM : void 0;
+       return void 0 !== iM && void 0 === OM && iM.cancel.abort(), (0, SM.i)(((iM, jM) => {
+         const aM = (OM, SM) => {
+             XM.set(MM.name, {
+               path: SM,
+               ms: performance.now() - rM
+             }), iM(OM)
+           },
+           PM = () => {
+             (0, SM.p)(Mr(MM), (MM => {
+               let {
+                 module: rM,
+                 path: iM
+ ... (10 more added lines; see GitHub link above)
```

#### 70. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1517-L1570` → after: `L41162-L41170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR41162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L41162-L41170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/107.js#L41162-L41170) · [Before (L1517-L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/107.js#L1517-L1570)

```diff
-         t: wG
-       } = (0, LG.w)(), {
-         schematicData: pG,
-         formEnabled: fG,
-         publishFormEnabled: QG
-       } = bG, KG = !fG || !QG;
-       return (0, VG.jsxs)("div", {
-         className: SG()("PublishButtonContainer", ZG),
-         children: [bG.canEditSourceWorld && (0, VG.jsxs)(kG.d, {
-           onClick: bG.editSourceWorld,
-           disabled: KG,
-           children: [(0, VG.jsx)(yG.c, {
-             name: "edit"
-           }), " ", wG("worldBuilder:editSourceWorld")]
-         }), !pG.gamePublished && (0, VG.jsx)(UG.h, {
-           tooltipInner: (0, VG.jsx)("div", {
- ... (38 more removed lines; see GitHub link above)
+         module: iM
+       } = await Mr(MM, {
+         retries: rM
+       });
+       return iM
+     }
+     async function Mr(MM) {
+       let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+       return await YM(MM, (0, jM.b)(MM.name), rM)
```

#### 71. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1573` → after: `L41173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR41173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L41173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/107.js#L41173) · [Before (L1573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/107.js#L1573)

```diff
-   5008: (GG, bG, ZG) => {
+   39771: (MM, rM, iM) => {
```

#### 72. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1577-L1586` → after: `L41177-L41215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR41177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L41177-L41215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/107.js#L41177-L41215) · [Before (L1577-L1586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/107.js#L1577-L1586)

```diff
-     var wG = ZG(1163);
-     async function SG(GG) {
-       const bG = await fetch(`${wG.clientSideServerUrls.s3Url}/${GG}`, {
-         headers: {
-           Accept: "application/json"
-         }
-       });
-       if (404 === bG.status || 403 === bG.status) return null;
-       if (!bG.ok) throw new Error(`Failed to download the texture pack (${bG.status})`);
-       return await bG.json()
+     var OM = iM(3185);
+     const SM = ["none", "idle", "now"];
+ 
+     function jM() {
+       const MM = () => (0, OM.E)();
+       return {
+         memoryBytes: () => (0, OM.y)().buffer.byteLength,
+         reserveUpFront: rM => MM().RL(rM),
+         reserveAhead: rM => MM().SL(rM),
+         setCeiling: rM => {
+           MM().pL(rM)
+         },
+         lowWater: () => SM[MM().XQ()] ?? "none",
+         stats: () => function(MM) {
+           const rM = new Uint32Array((0, OM.y)().buffer, MM, 17),
+             iM = MM => rM[MM] ?? 0,
+ ... (23 more added lines; see GitHub link above)
```

#### 73. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1589` → after: `L41218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR41218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L41218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/107.js#L41218) · [Before (L1589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/107.js#L1589)

```diff
-   5080: (GG, bG, ZG) => {
+   7116: (MM, rM, iM) => {
```

#### 74. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1593-L1604` → after: `L41222-L41237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR41222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L41222-L41237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/107.js#L41222-L41237) · [Before (L1593-L1604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/107.js#L1593-L1604)

```diff
-     var wG = ZG(51),
-       SG = ZG(1290),
-       LG = ZG(982),
-       yG = ZG(140),
-       kG = ZG(1490),
-       UG = ZG(17),
-       YG = ZG(1895),
-       VG = ZG(1431),
-       pG = ZG(4611),
-       fG = ZG(1311),
-       QG = ZG(1092),
-       KG = ZG(1444);
+     var OM = iM(3188);
+     const SM = {
+       bloxd_wasm: () => "9c356b3ab0e1dec8279681c51821e86b0c769cac263f9e0f7f99f79b8758e8b4",
+       bloxd_wasm_client: () => "80b728e2e1c07ea01ac0480b86847c41501509afdc4dddbfb5c028d2bf09dee0",
+       bloxd_wasm_workers: () => "d70704eca78df456ad3913c0adf79f8b52dba4340cd12a1b6bf933cca972741b",
+       bloxd_wasm_models: () => "3ad7e1eadb9490d2eafb88cd8a1e2fa3b217bc686d0f647a926d3b3e45f346b2",
+       bloxd_wasm_webgpu: () => "b23ee9a016abf7c07a51e4dd79c87b95e00f54293086e61b89ff00c5c3054e76",
+       bloxd_wasm_webgl: () => "c7e113e0705d9817aa1ea95296a04ca341e8508395d22c3a7f94a5cdffba84cd",
+       bloxd_wasm_webgl1: () => "153c631ef0614b6599a45ffada7f02f5904513286e82e789064544612e2e6f87",
+       bloxd_wasm_replay: () => "05e5306bf37c51cb76f69bd76cd489a1e480f7bb5d6f9b73f5c592d1fcaea336",
+       bloxd_wasm_recorder: () => "ef71649d3e6f52a30e3021925f1ba0c1225f7afb503bf09554b23ac481798d94",
+       bloxd_wasm_anim: () => "9b12a80af4e0001e472a77f851e64ef000ea347ea6f87cc37b924c310c6e0847",
+       bloxd_wasm_textures: () => "6d67beffabd1d2d1a22a74a0da90a6f5a26efadd82c32dec4de58168d5b38069",
+       bloxd_wasm_shader_pack: () => "48a1189cb064654273445fd97d029cf7474ee7e14007e5ca8ff8bb20718ac5cb"
+     };
+     var jM = iM(5069);
```

#### 75. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1606-L1641` → after: `L41239-L41256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR41239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L41239-L41256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/107.js#L41239-L41256) · [Before (L1606-L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/107.js#L1606-L1641)

```diff
-     function hG(GG, bG) {
-       return {
-         schematicId: GG.schematicId,
-         name: GG.name,
-         description: GG.description,
-         gamePublished: bG,
-         gameCategory: GG.gameCategory,
-         defaultGamemode: GG.defaultGamemode,
-         voidDeathHeight: GG.voidDeathHeight,
-         disableKeepInventory: GG.disableKeepInventory,
-         disableTpRequests: GG.disableTpRequests,
-         disableLobbySpawn: GG.disableLobbySpawn,
-         disableMobs: GG.disableMobs,
-         disableSpawnProtection: GG.disableSpawnProtection,
-         disableFallDamage: GG.disableFallDamage,
-         worldBorder: GG.worldBorder,
- ... (20 more removed lines; see GitHub link above)
+     function aM(MM) {
+       const rM = Object.prototype.hasOwnProperty.call(SM, MM) ? SM[MM]() : void 0;
+       if (void 0 !== rM) return {
+         sha256: rM,
+         onMismatch: jM.B
+       };
+       throw new OM.f(`${MM} has no release digest, so this build refuses it`)
+     }
+   },
+   7131: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => OM,
+       h: () => aM,
+       l: () => PM,
+       m: () => SM,
+       o: () => jM
+ ... (2 more added lines; see GitHub link above)
```

#### 76. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1643-L1651` → after: `L41258-L41266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR41258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L41258-L41266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/107.js#L41258-L41266) · [Before (L1643-L1651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/107.js#L1643-L1651)

```diff
-       function FG(GG, bG) {
-         zG((ZG => ({
-           ...ZG,
-           [GG]: bG
-         })))
-       }
-       const vG = (0, wG.useCallback)((GG => {
-         CG.current = GG, uG(GG)
-       }), []);
+     function SM() {
+       const MM = [];
+       for (const rM of [!1, !0])
+         for (const iM of OM) MM.push({
+           strict: rM,
+           program: iM
+         });
+       return MM
+     }
```

#### 77. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1653-L1718` → after: `L41268-L41269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR41268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L41268-L41269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/107.js#L41268-L41269) · [Before (L1653-L1718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/107.js#L1653-L1718)

```diff
-       function aG(GG) {
-         oG("Loading");
-         const bG = hG(rG, GG),
-           ZG = XG !== CG.current ? XG : void 0;
-         VG.d.updateSchematic(dG, bG, ZG).then((ZG => {
-           let {
-             customTexturePackKey: wG
-           } = ZG;
-           oG("Success"), FG("customTexturePackKey", wG), iG.current = bG, CG.current = void 0, uG(void 0), setTimeout((() => {
-             FG("gamePublished", GG), oG("Enter")
-           }), 1e3)
-         })).catch((GG => {
-           var bG;
-           (console.error("Failed to save schematic:", GG), oG("Error"), GG instanceof yG.b && GG.errorMessageForUser) && fG.NotificationProvider.showAlertPopup({
-             title: "worldBuilder:changesNotSaved",
-             subtitle: GG.errorMessageForUser,
- ... (50 more removed lines; see GitHub link above)
+     function jM(MM) {
+       return `${MM.strict?"strict":"allow"}.${MM.program}`
```

#### 78. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1720-L1721` → after: `L41271-L41279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR41271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L41271-L41279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/107.js#L41271-L41279) · [Before (L1720-L1721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/107.js#L1720-L1721)

```diff
-   },
-   4967: () => {}
+ 
+     function aM(MM) {
+       return !MM.hooks.vertex && !MM.hooks.surface && !MM.hooks.light
+     }
+ 
+     function PM(MM, rM) {
+       return "off" !== rM && (null === MM || MM.some((MM => MM.key.strict === ("strict" === rM) && !aM(MM))))
+     }
+   }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/108.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/108.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141)

#### 1. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L4-L6` → after: `L4-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/108.js#L4-L9) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/108.js#L4-L6)

```diff
-   36686: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       d: () => UG
+   5265: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       Howl: () => SM.Howl,
+       Howler: () => SM.Howler,
+       musicOutput: () => dM,
+       readyAudioContext: () => yM
```

#### 2. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L8-L12` → after: `L11-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L11-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/108.js#L11-L14) · [Before (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/108.js#L8-L12)

```diff
-     var wG = ZG(1006),
-       SG = ZG.n(wG),
-       LG = ZG(51),
-       yG = ZG(4596),
-       kG = ZG(1067);
+     var OM, SM = iM(5269),
+       jM = iM(3839),
+       aM = iM(5026);
+     const PM = SM.Howler;
```

#### 3. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L14-L17` → after: `L16-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L16-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/108.js#L16-L102) · [Before (L14-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/108.js#L14-L17)

```diff
-     function UG(GG) {
-       let {
-         locked: bG,
-         children: ZG
+     function nM() {
+       var MM, rM;
+       if (PM.ctx || !PM.usingWebAudio || "undefined" === typeof AudioContext || !(0, aM.k)()) return;
+       const iM = navigator.audioSession;
+       let OM;
+       "auto" === (null === iM || void 0 === iM ? void 0 : iM.type) && (iM.type = "ambient");
+       try {
+         OM = new AudioContext({
+           sampleRate: 44100
+         })
+       } catch {
+         return
+       }
+       const SM = OM.createGain();
+       SM.gain.setValueAtTime(PM._muted ? 0 : null !== (MM = PM._volume) && void 0 !== MM ? MM : 1, OM.currentTime), SM.connect(OM.destination), PM.ctx = OM, PM.masterGain = SM, null === (rM = PM._setup) || void 0 === rM || rM.call(PM)
+     }
+ ... (71 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L19-L63` → after: `L104-L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L104-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/108.js#L104-L113) · [Before (L19-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/108.js#L19-L63)

```diff
-       const wG = (0, LG.useRef)(null),
-         UG = (0, yG.e)(wG, "y");
-       return (0, kG.jsx)("div", {
-         ref: wG,
-         className: SG()("CreateCustomLobbyBody", {
-           CreateCustomLobbyBodyMoreAbove: UG.before,
-           CreateCustomLobbyBodyMoreBelow: UG.after
-         }),
-         "data-pad-ignore": bG || void 0,
-         children: ZG
-       })
-     }
-   },
-   36769: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       showFirstWorldSetupPopup: () => hG
- ... (29 more removed lines; see GitHub link above)
+       return MM && rM ? {
+         ctx: MM,
+         destination: rM,
+         holdAwake: MM => {
+           var rM, iM;
+           (hM += MM ? 1 : -1, MM) ? null === (rM = PM._autoResume) || void 0 === rM || rM.call(PM): null === (iM = PM._autoSuspend) || void 0 === iM || iM.call(PM)
+         },
+         wake: () => {
+           var rM;
+           "running" !== MM.state && (null === (rM = PM._autoResume) || void 0 === rM || rM.call(PM), MM.resume().catch((() => {})))
```

#### 5. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L65` → after: `L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/108.js#L115) · [Before (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/108.js#L65)

```diff
-       })
+       } : null
```

#### 6. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L68-L167` → after: `L118-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L118-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/108.js#L118-L120) · [Before (L68-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/108.js#L68-L167)

```diff
-     function dG(GG) {
-       let {
-         flow: bG,
-         close: ZG,
-         onCreating: kG,
-         onCreated: hG,
-         onFailedClosed: dG,
-         join: JG
-       } = GG;
-       const {
-         t: rG
-       } = (0, yG.w)(), [zG, EG] = (0, SG.useState)(wG.t), [oG, XG] = (0, SG.useState)(!1), [uG, iG] = (0, SG.useState)(""), CG = (0, pG.c)();
-       (0, SG.useEffect)((() => {
-         (0, QG.o)()
-       }), []);
-       const WG = GG => ({
- ... (84 more removed lines; see GitHub link above)
+     function yM() {
+       var MM;
+       (PM.volume(), PM.ctx && PM.autoUnlock) && (null === (MM = PM._unlockAudio) || void 0 === MM || MM.call(PM))
```

#### 7. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L169-L361` → after: `L122-L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L122-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/108.js#L122-L123) · [Before (L169-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/108.js#L169-L361)

```diff
-   },
-   4973: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       d: () => YG
-     });
-     var wG = ZG(1006),
-       SG = ZG.n(wG),
-       LG = ZG(4655),
-       yG = ZG(1151),
-       kG = ZG(1067);
-     const UG = [...LG.i, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];
- 
-     function YG(GG) {
-       const {
-         disabled: bG,
-         hideWrapper: ZG
- ... (177 more removed lines; see GitHub link above)
+     JM && (PM._autoSuspend = () => hM > 0 ? SM.Howler : JM())
+   }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/109.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/109.js` (40 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df)

#### 1. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/109.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/109.js#L2)

```diff
- export const ids = [109];
+ export const ids = [108, 109, 110];
```

#### 2. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4-L16` → after: `L4-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/109.js#L4-L14) · [Before (L4-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/109.js#L4-L16)

```diff
-   5002: (GG, bG) => {
-     bG.d = function(GG, bG) {
-       if (GG && bG) {
-         var ZG = Array.isArray(bG) ? bG : bG.split(","),
-           wG = GG.name || "",
-           SG = (GG.type || "").toLowerCase(),
-           LG = SG.replace(/\/.*$/, "");
-         return ZG.some((function(GG) {
-           var bG = GG.trim().toLowerCase();
-           return "." === bG.charAt(0) ? wG.toLowerCase().endsWith(bG) : bG.endsWith("/*") ? LG === bG.replace(/\/.*$/, "") : SG === bG
-         }))
-       }
-       return !0
+   37554: (MM, rM, iM) => {
+     function OM(MM, rM, iM, OM) {
+       return !(iM && !MM.aimable) && (!rM || MM.gun && "head" !== OM)
+     }
+ 
+     function SM(MM) {
+       return Math.max(.1 * MM, 1)
+     }
+ 
+     function jM(MM, rM) {
+       return !MM && rM
```

#### 3. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L19` → after: `L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/109.js#L22) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/109.js#L19)

```diff
-   4977: (GG, bG, ZG) => {
+   37559: (MM, rM, iM) => {
```

#### 4. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L21` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/109.js#L24-L25) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/109.js#L21)

```diff
-       c: () => Qb
+       e: () => PM,
+       h: () => aM
```

#### 5. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L23-L45` → after: `L27-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/109.js#L27-L37) · [Before (L23-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/109.js#L23-L45)

```diff
-     var wG = ZG(51),
-       SG = ZG(4985),
-       LG = ZG.n(SG);
- 
-     function yG(GG, bG, ZG, wG) {
-       return new(ZG || (ZG = Promise))((function(SG, LG) {
-         function yG(GG) {
-           try {
-             UG(wG.next(GG))
-           } catch (bG) {
-             LG(bG)
-           }
-         }
- 
-         function kG(GG) {
-           try {
- ... (7 more removed lines; see GitHub link above)
+     let OM = null;
+     const SM = {
+         crosshairAccuracy: [],
+         turnDamageIndicators: []
+       },
+       jM = {
+         crosshairAccuracy: MM => {
+           const rM = SM.crosshairAccuracy.at(-1);
+           rM ? rM.hook(MM) : OM = MM
+         },
+         turnDamageIndicators: MM => {
```

#### 6. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L47-L49` → after: `L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/109.js#L39) · [Before (L47-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/109.js#L47-L49)

```diff
-           GG.done ? SG(GG.value) : (bG = GG.value, bG instanceof ZG ? bG : new ZG((function(GG) {
-             GG(bG)
-           }))).then(yG, kG)
+           null === (rM = SM.turnDamageIndicators.at(-1)) || void 0 === rM || rM.hook(MM)
```

#### 7. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L51-L53` → after: `L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/109.js#L41) · [Before (L51-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/109.js#L51-L53)

```diff
-         UG((wG = wG.apply(GG, bG || [])).next())
-       }))
-     }
+       };
```

#### 8. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L56-L60` → after: `L44-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L44-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/109.js#L44-L45) · [Before (L56-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/109.js#L56-L60)

```diff
-       var ZG, wG, SG, LG, yG = {
-         label: 0,
-         sent: function() {
-           if (1 & SG[0]) throw SG[1];
-           return SG[1]
+       const iM = {
+           hook: rM
```

#### 9. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L62-L127` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/109.js#L47-L50) · [Before (L62-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/109.js#L62-L127)

```diff
-         trys: [],
-         ops: []
-       };
-       return LG = {
-         next: kG(0),
-         throw: kG(1),
-         return: kG(2)
-       }, "function" === typeof Symbol && (LG[Symbol.iterator] = function() {
-         return this
-       }), LG;
- 
-       function kG(kG) {
-         return function(UG) {
-           return function(kG) {
-             if (ZG) throw new TypeError("Generator is already executing.");
-             for (; LG && (LG = 0, kG[0] && (yG = 0)), yG;) try {
- ... (50 more removed lines; see GitHub link above)
+         aM = SM[MM];
+       if (aM.push(iM), "crosshairAccuracy" === MM && null !== OM) {
+         const MM = OM;
+         OM = null, jM.crosshairAccuracy(MM)
```

#### 10. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L129-L149` → after: `L52-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L52-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/109.js#L52-L53) · [Before (L129-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/109.js#L129-L149)

```diff
-     }
-     Object.create;
- 
-     function UG(GG, bG) {
-       var ZG = "function" === typeof Symbol && GG[Symbol.iterator];
-       if (!ZG) return GG;
-       var wG, SG, LG = ZG.call(GG),
-         yG = [];
-       try {
-         for (;
-           (void 0 === bG || bG-- > 0) && !(wG = LG.next()).done;) yG.push(wG.value)
-       } catch (kG) {
-         SG = {
-           error: kG
-         }
-       } finally {
- ... (5 more removed lines; see GitHub link above)
+       return () => {
+         const MM = aM.indexOf(iM); - 1 !== MM && aM.splice(MM, 1)
```

#### 11. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L154-L267` → after: `L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/109.js#L57) · [Before (L154-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/109.js#L154-L267)

```diff
-     function YG(GG, bG, ZG) {
-       if (ZG || 2 === arguments.length)
-         for (var wG, SG = 0, LG = bG.length; SG < LG; SG++) !wG && SG in bG || (wG || (wG = Array.prototype.slice.call(bG, 0, SG)), wG[SG] = bG[SG]);
-       return GG.concat(wG || Array.prototype.slice.call(bG))
-     }
-     Object.create;
-     "function" === typeof SuppressedError && SuppressedError;
-     var VG = new Map([
-       ["aac", "audio/aac"],
-       ["abw", "application/x-abiword"],
-       ["arc", "application/x-freearc"],
-       ["avif", "image/avif"],
-       ["avi", "video/x-msvideo"],
-       ["azw", "application/vnd.amazon.ebook"],
-       ["bin", "application/octet-stream"],
-       ["bmp", "image/bmp"],
- ... (98 more removed lines; see GitHub link above)
+     function PM() {
```

#### 12. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L270-L297` → after: `L60-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L60-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/109.js#L60-L76) · [Before (L270-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/109.js#L270-L297)

```diff
-     var fG = [".DS_Store", "Thumbs.db"];
- 
-     function QG(GG) {
-       return "object" === typeof GG && null !== GG
-     }
- 
-     function KG(GG) {
-       return rG(GG.target.files).map((function(GG) {
-         return pG(GG)
-       }))
-     }
- 
-     function hG(GG) {
-       return yG(this, void 0, void 0, (function() {
-         return kG(this, (function(bG) {
-           switch (bG.label) {
- ... (12 more removed lines; see GitHub link above)
+   },
+   37390: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       countDecodesAs: () => LM,
+       decodedAudio: () => mM
+     });
+     var OM = iM(3291),
+       SM = iM(5265);
+     const jM = SM.Howler,
+       aM = new Map;
+     let PM = 0;
+     const nM = {
+         song: 0,
+         sound: 0
+       },
+       QM = new WeakMap,
+ ... (1 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L300-L316` → after: `L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/109.js#L79) · [Before (L300-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/109.js#L300-L316)

```diff
-       return yG(this, void 0, void 0, (function() {
-         var ZG;
-         return kG(this, (function(wG) {
-           switch (wG.label) {
-             case 0:
-               return GG.items ? (ZG = rG(GG.items).filter((function(GG) {
-                 return "file" === GG.kind
-               })), "drop" !== bG ? [2, ZG] : [4, Promise.all(ZG.map(zG))]) : [3, 2];
-             case 1:
-               return [2, JG(EG(wG.sent()))];
-             case 2:
-               return [2, JG(rG(GG.files).map((function(GG) {
-                 return pG(GG)
-               })))]
-           }
-         }))
- ... (1 more removed lines; see GitHub link above)
+       return QM.set(MM, rM), MM
```

#### 14. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L319-L329` → after: `L82-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L82-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/109.js#L82-L86) · [Before (L319-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/109.js#L319-L329)

```diff
-     function JG(GG) {
-       return GG.filter((function(GG) {
-         return -1 === fG.indexOf(GG.name)
-       }))
-     }
- 
-     function rG(GG) {
-       if (null === GG) return [];
-       for (var bG = [], ZG = 0; ZG < GG.length; ZG++) {
-         var wG = GG[ZG];
-         bG.push(wG)
+     function mM() {
+       return {
+         bytes: PM,
+         songsDecoded: nM.song,
+         soundsDecoded: nM.sound
```

#### 15. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L341-L409` → after: `L91-L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L91-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/109.js#L91-L131) · [Before (L341-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/109.js#L341-L409)

```diff
-       return GG.reduce((function(GG, bG) {
-         return YG(YG([], UG(GG), !1), UG(Array.isArray(bG) ? EG(bG) : [bG]), !1)
-       }), [])
-     }
- 
-     function oG(GG) {
-       var bG = GG.getAsFile();
-       if (!bG) return Promise.reject("".concat(GG, " is not a File"));
-       var ZG = pG(bG);
-       return Promise.resolve(ZG)
-     }
- 
-     function XG(GG) {
-       return yG(this, void 0, void 0, (function() {
-         return kG(this, (function(bG) {
-           return [2, GG.isDirectory ? uG(GG) : iG(GG)]
- ... (53 more removed lines; see GitHub link above)
+       if (zM.has(MM)) return;
+       zM.add(MM);
+       const rM = 1 === MM.decodeAudioData.length,
+         iM = MM.decodeAudioData.bind(MM);
+       MM.decodeAudioData = (MM, OM, SM) => {
+         const zM = MM => {
+           const rM = jM._howls.filter((MM => "loaded" !== MM._state));
+           try {
+             null === OM || void 0 === OM || OM(MM)
+           } finally {
+             const iM = rM.find((MM => "loaded" === MM._state));
+             void 0 !== iM && "string" === typeof iM._src && function(MM, rM, iM) {
+               var OM;
+               PM += iM - (null !== (OM = aM.get(rM)) && void 0 !== OM ? OM : 0), aM.set(rM, iM);
+               const SM = QM.get(MM);
+               void 0 !== SM && nM[SM]++
+ ... (25 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L411-L420` → after: `L133-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L133-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/109.js#L133-L141) · [Before (L411-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/109.js#L411-L420)

```diff
-     var CG = ZG(5002);
- 
-     function WG(GG) {
-       return function(GG) {
-         if (Array.isArray(GG)) return cG(GG)
-       }(GG) || function(GG) {
-         if ("undefined" !== typeof Symbol && null != GG[Symbol.iterator] || null != GG["@@iterator"]) return Array.from(GG)
-       }(GG) || aG(GG) || function() {
-         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
-       }()
+   },
+   37750: (MM, rM, iM) => {
+     async function OM(MM) {
+       const rM = await fetch(MM, {
+         priority: "low"
+       });
+       if (!rM.ok) throw new Error(`Fetching ${MM} failed: HTTP ${rM.status}`);
+       const iM = rM.body.getReader();
+       for (; !(await iM.read()).done;);
```

#### 17. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L423-L429` → after: `L159-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L159-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/109.js#L159-L170) · [Before (L423-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/109.js#L423-L429)

```diff
-     function mG(GG, bG) {
-       var ZG = Object.keys(GG);
-       if (Object.getOwnPropertySymbols) {
-         var wG = Object.getOwnPropertySymbols(GG);
-         bG && (wG = wG.filter((function(bG) {
-           return Object.getOwnPropertyDescriptor(GG, bG).enumerable
-         }))), ZG.push.apply(ZG, wG)
+     function nM() {
+       var MM, rM;
+       if (PM.ctx || !PM.usingWebAudio || "undefined" === typeof AudioContext || !(0, aM.k)()) return;
+       const iM = navigator.audioSession;
+       let OM;
+       "auto" === (null === iM || void 0 === iM ? void 0 : iM.type) && (iM.type = "ambient");
+       try {
+         OM = new AudioContext({
+           sampleRate: 44100
+         })
+       } catch {
+         return
```

#### 18. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L431` → after: `L172-L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L172-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/109.js#L172-L173) · [Before (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/109.js#L431)

```diff
-       return ZG
+       const SM = OM.createGain();
+       SM.gain.setValueAtTime(PM._muted ? 0 : null !== (MM = PM._volume) && void 0 !== MM ? MM : 1, OM.currentTime), SM.connect(OM.destination), PM.ctx = OM, PM.masterGain = SM, null === (rM = PM._setup) || void 0 === rM || rM.call(PM)
```

#### 19. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L434-L441` → after: `L185-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L185-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/109.js#L185-L188) · [Before (L434-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/109.js#L434-L441)

```diff
-     function IG(GG) {
-       for (var bG = 1; bG < arguments.length; bG++) {
-         var ZG = null != arguments[bG] ? arguments[bG] : {};
-         bG % 2 ? mG(Object(ZG), !0).forEach((function(bG) {
-           FG(GG, bG, ZG[bG])
-         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(GG, Object.getOwnPropertyDescriptors(ZG)) : mG(Object(ZG)).forEach((function(bG) {
-           Object.defineProperty(GG, bG, Object.getOwnPropertyDescriptor(ZG, bG))
-         }))
+     function HM() {
+       for (; PM._html5AudioPool.length < PM.html5PoolSize;) {
+         const MM = new Audio;
+         MM._unlocked = !0, PM._releaseHtml5Audio(MM)
```

#### 20. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L443-L452` → after: `L190-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L190-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/109.js#L190-L196) · [Before (L443-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/109.js#L443-L452)

```diff
-       return GG
-     }
- 
-     function FG(GG, bG, ZG) {
-       return bG in GG ? Object.defineProperty(GG, bG, {
-         value: ZG,
-         enumerable: !0,
-         configurable: !0,
-         writable: !0
-       }) : GG[bG] = ZG, GG
+       for (const rM of PM._howls)
+         if (!rM._webAudio)
+           for (const iM of rM._getSoundIds()) {
+             var MM;
+             const OM = null === (MM = rM._soundById(iM)) || void 0 === MM ? void 0 : MM._node;
+             OM && !OM._unlocked && (OM._unlocked = !0, OM.load())
+           }
```

#### 21. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L454-L472` → after: `L198-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L198-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/109.js#L198-L215) · [Before (L454-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/109.js#L454-L472)

```diff
- 
-     function vG(GG, bG) {
-       return function(GG) {
-         if (Array.isArray(GG)) return GG
-       }(GG) || function(GG, bG) {
-         var ZG = null == GG ? null : "undefined" !== typeof Symbol && GG[Symbol.iterator] || GG["@@iterator"];
-         if (null == ZG) return;
-         var wG, SG, LG = [],
-           yG = !0,
-           kG = !1;
-         try {
-           for (ZG = ZG.call(GG); !(yG = (wG = ZG.next()).done) && (LG.push(wG.value), !bG || LG.length !== bG); yG = !0);
-         } catch (UG) {
-           kG = !0, SG = UG
-         } finally {
-           try {
- ... (3 more removed lines; see GitHub link above)
+     LM.init = function(MM) {
+       return nM(), mM.call(this, MM)
+     }, (0, aM.k)() && (PM._unlockAudio = () => {
+       const MM = PM.ctx;
+       if (PM._audioUnlocked || !MM) return;
+       PM.autoUnlock = !1;
+       const rM = MM.createBuffer(1, 1, 22050);
+       PM._scratchBuffer = rM;
+       const iM = new AbortController;
+       let OM = "afterPaint";
+       const SM = () => {
+           var OM;
+           if (PM._audioUnlocked) return;
+           null === (OM = PM._autoResume) || void 0 === OM || OM.call(PM);
+           const SM = MM.createBufferSource();
+           SM.buffer = rM, SM.connect(MM.destination), SM.start(0), MM.resume().catch((() => {})), SM.onended = () => {
+ ... (2 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L475-L478` → after: `L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/109.js#L258) · [Before (L475-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/109.js#L475-L478)

```diff
-         return LG
-       }(GG, bG) || aG(GG, bG) || function() {
-         throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
-       }()
+       } : null
```

#### 23. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L481-L486` → after: `L261-L263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L261-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/109.js#L261-L263) · [Before (L481-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/109.js#L481-L486)

```diff
-     function aG(GG, bG) {
-       if (GG) {
-         if ("string" === typeof GG) return cG(GG, bG);
-         var ZG = Object.prototype.toString.call(GG).slice(8, -1);
-         return "Object" === ZG && GG.constructor && (ZG = GG.constructor.name), "Map" === ZG || "Set" === ZG ? Array.from(GG) : "Arguments" === ZG || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZG) ? cG(GG, bG) : void 0
-       }
+     function yM() {
+       var MM;
+       (PM.volume(), PM.ctx && PM.autoUnlock) && (null === (MM = PM._unlockAudio) || void 0 === MM || MM.call(PM))
```

#### 24. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L488` → after: `L265-L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L265-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/109.js#L265-L267) · [Before (L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/109.js#L488)

```diff
- 
+     JM && (PM._autoSuspend = () => hM > 0 ? SM.Howler : JM())
+   },
+   37741: (MM, rM, iM) => {
```

#### 25. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L490-L492` → after: `L269-L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L269-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/109.js#L269-L285) · [Before (L490-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/109.js#L490-L492)

```diff
-       (null == bG || bG > GG.length) && (bG = GG.length);
-       for (var ZG = 0, wG = new Array(bG); ZG < bG; ZG++) wG[ZG] = GG[ZG];
-       return wG
+       let {
+         afterJoin: iM,
+         joining: OM,
+         idle: SM,
+         fetchFile: jM,
+         Ti: aM = () => !1
+       } = rM;
+       const PM = rM => {
+         rM >= MM.length || aM() || iM((() => {
+           SM((() => {
+             aM() || (OM() ? PM(rM) : jM(MM[rM]).catch((() => {})).finally((() => {
+               PM(rM + 1)
+             })))
+           }))
+         }))
+       };
+ ... (1 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L494-L510` → after: `L287-L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L287-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/109.js#L287-L314) · [Before (L494-L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/109.js#L494-L510)

```diff
-     var lG = "file-invalid-type",
-       jG = "file-too-large",
-       PG = "file-too-small",
-       MG = "too-many-files",
-       AG = function(GG) {
-         GG = Array.isArray(GG) && 1 === GG.length ? GG[0] : GG;
-         var bG = Array.isArray(GG) ? "one of ".concat(GG.join(", ")) : GG;
-         return {
-           code: lG,
-           message: "File type must be ".concat(bG)
-         }
-       },
-       sG = function(GG) {
-         return {
-           code: jG,
-           message: "File is larger than ".concat(GG, " ").concat(1 === GG ? "byte" : "bytes")
- ... (1 more removed lines; see GitHub link above)
+     iM.d(rM, {
+       c: () => OM
+     })
+   },
+   37737: (MM, rM, iM) => {
+     iM.d(rM, {
+       b: () => OM
+     });
+     const OM = new Set(["gunSemiAutomatic", "gunSubmachineGun", "gunShotgun", "gunRifle", "gunPistol", "gunMisc", "step", "dig", "randomItems", "randomExp", "randomCash", "randomFallsmall", "note", "rpg", "phoneAndMoney"])
+   },
+   37744: (MM, rM, iM) => {
+     iM.d(rM, {
+       b: () => zM,
+       c: () => LM
+     });
+     var OM = iM(19),
+ ... (12 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L513-L515` → after: `L317-L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L317-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/109.js#L317-L341) · [Before (L513-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/109.js#L513-L515)

```diff
-         return {
-           code: PG,
-           message: "File is smaller than ".concat(GG, " ").concat(1 === GG ? "byte" : "bytes")
+         const rM = new Set,
+           iM = new Set,
+           OM = rM => rM.flatMap((rM => {
+             const iM = (OM = (0, SM.r)(rM).src, jM = MM.canPlay, OM.find((MM => {
+               var rM;
+               const iM = null === (rM = /\.([^.]+)$/.exec(MM.split("?", 1)[0])) || void 0 === rM ? void 0 : rM[1];
+               return void 0 !== iM && jM(iM.toLowerCase())
+             })));
+             var OM, jM;
+             return void 0 === iM ? [] : [iM]
+           }));
+         return jM => {
+           var aM;
+           const PM = (0, SM.j)(jM),
+             nM = [];
+           rM.has(PM) || (rM.add(PM), nM.push(...OM((0, SM.m)(PM).filter((MM => MM !== jM)))));
+ ... (9 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L517-L545` → after: `L343-L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L343-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/109.js#L343-L354) · [Before (L517-L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/109.js#L517-L545)

```diff
-       },
-       nG = {
-         code: MG,
-         message: "Too many files"
-       };
- 
-     function gG(GG, bG) {
-       var ZG = "application/x-moz-file" === GG.type || (0, CG.d)(GG, bG);
-       return [ZG, ZG ? null : AG(bG)]
-     }
- 
-     function eG(GG, bG, ZG) {
-       if (RG(GG.size))
-         if (RG(bG) && RG(ZG)) {
-           if (GG.size > ZG) return [!1, sG(ZG)];
-           if (GG.size < bG) return [!1, qG(bG)]
- ... (13 more removed lines; see GitHub link above)
+       }({
+         ...zM,
+         fetchFile: aM.b,
+         canPlay: MM => !!PM.Howler.codecs(MM)
+       })
+   },
+   37730: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => aM,
+       f: () => SM,
+       i: () => OM
+     });
```

#### 29. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L548-L550` → after: `L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/109.js#L357) · [Before (L548-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/109.js#L548-L550)

```diff
-       return GG.dataTransfer ? Array.prototype.some.call(GG.dataTransfer.types, (function(GG) {
-         return "Files" === GG || "application/x-moz-file" === GG
-       })) : !!GG.target && !!GG.target.files
+       return MM.replace(/[_\-\s]*\d+$/, "") || MM
```

#### 30. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L553-L554` → after: `L360-L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L360-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/109.js#L360-L361) · [Before (L553-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/109.js#L553-L554)

```diff
-     function tG(GG) {
-       GG.preventDefault()
+     function SM(MM, rM, iM) {
+       return iM <= 0 ? 0 : MM * iM / Math.max(rM, iM)
```

#### 31. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L557-L563` → after: `L364-L389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L364-L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/109.js#L364-L389) · [Before (L557-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/109.js#L557-L563)

```diff
-     function DG() {
-       for (var GG = arguments.length, bG = new Array(GG), ZG = 0; ZG < GG; ZG++) bG[ZG] = arguments[ZG];
-       return function(GG) {
-         for (var ZG = arguments.length, wG = new Array(ZG > 1 ? ZG - 1 : 0), SG = 1; SG < ZG; SG++) wG[SG - 1] = arguments[SG];
-         return bG.some((function(bG) {
-           return !TG(GG) && bG && bG.apply(void 0, [GG].concat(wG)), TG(GG)
-         }))
+     function jM(MM, rM) {
+       const iM = MM.getDurationMs();
+       return iM > 0 ? MM.loudness * Math.max(0, 1 - (rM - MM.startMs) / iM) : 0
+     }
+     class aM {
+       constructor() {
+         let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24,
+           rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
+         this.maxVoices = MM, this.maxPerGroup = rM, this.voices = []
+       }
+       admit(MM) {
+         if (this.voices = this.voices.filter((MM => MM.isAlive())), null !== MM.group) {
+           const rM = this.voices.filter((rM => rM.group === MM.group));
+           if (rM.length >= this.maxPerGroup && !this.dropLeastWorth(rM, MM)) return !1
+         }
+         return !(this.voices.length >= this.maxVoices && !this.dropLeastWorth(this.voices, MM)) && (this.voices.push(MM), !0)
+ ... (10 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L567-L572` → after: `L403-L404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L403-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/109.js#L403-L404) · [Before (L567-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/109.js#L567-L572)

```diff
-     function NG(GG) {
-       return "audio/*" === GG || "video/*" === GG || "image/*" === GG || "text/*" === GG || /\w+\/[-+.\w]+/g.test(GG)
-     }
- 
-     function OG(GG) {
-       return /^.*\.[\w]+$/.test(GG)
+     function aM() {
+       return jM
```

#### 33. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L580-L586` → after: `L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/109.js#L408) · [Before (L580-L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/109.js#L580-L586)

```diff
-       return function(GG) {
-         if (Array.isArray(GG)) return Lb(GG)
-       }(GG) || function(GG) {
-         if ("undefined" !== typeof Symbol && null != GG[Symbol.iterator] || null != GG["@@iterator"]) return Array.from(GG)
-       }(GG) || Sb(GG) || function() {
-         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
-       }()
+       MM !== jM && (jM = MM, OM.i.Tz(SM, MM))
```

#### 34. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L588-L608` → after: `L410-L434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L410-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/109.js#L410-L434) · [Before (L588-L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/109.js#L588-L608)

```diff
- 
-     function wb(GG, bG) {
-       return function(GG) {
-         if (Array.isArray(GG)) return GG
-       }(GG) || function(GG, bG) {
-         var ZG = null == GG ? null : "undefined" !== typeof Symbol && GG[Symbol.iterator] || GG["@@iterator"];
-         if (null == ZG) return;
-         var wG, SG, LG = [],
-           yG = !0,
-           kG = !1;
-         try {
-           for (ZG = ZG.call(GG); !(yG = (wG = ZG.next()).done) && (LG.push(wG.value), !bG || LG.length !== bG); yG = !0);
-         } catch (UG) {
-           kG = !0, SG = UG
-         } finally {
-           try {
- ... (5 more removed lines; see GitHub link above)
+   },
+   37761: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => jM,
+       g: () => aM,
+       h: () => OM
+     });
+     class OM {
+       constructor(MM) {
+         this.multipliers = {}, this._onUpdate = void 0, this._onUpdate = MM
+       }
+       setMultiplierType(MM, rM) {
+         var iM;
+         this.multipliers[MM] = rM, null === (iM = this._onUpdate) || void 0 === iM || iM.call(this)
+       }
+       removeMultiplier(MM) {
+ ... (9 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L622-L635` → after: `L438-L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L438-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/109.js#L438-L441) · [Before (L622-L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/109.js#L622-L635)

```diff
- 
-     function Lb(GG, bG) {
-       (null == bG || bG > GG.length) && (bG = GG.length);
-       for (var ZG = 0, wG = new Array(bG); ZG < bG; ZG++) wG[ZG] = GG[ZG];
-       return wG
-     }
- 
-     function yb(GG, bG) {
-       var ZG = Object.keys(GG);
-       if (Object.getOwnPropertySymbols) {
-         var wG = Object.getOwnPropertySymbols(GG);
-         bG && (wG = wG.filter((function(bG) {
-           return Object.getOwnPropertyDescriptor(GG, bG).enumerable
-         }))), ZG.push.apply(ZG, wG)
+     class SM {
+       constructor() {
+         let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
+         this.booleans = {}, this._onUpdate = void 0, this._onUpdate = MM
```

#### 36. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L637-L647` → after: `L443-L470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L443-L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/109.js#L443-L470) · [Before (L637-L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/109.js#L637-L647)

```diff
-       return ZG
-     }
- 
-     function kb(GG) {
-       for (var bG = 1; bG < arguments.length; bG++) {
-         var ZG = null != arguments[bG] ? arguments[bG] : {};
-         bG % 2 ? yb(Object(ZG), !0).forEach((function(bG) {
-           Ub(GG, bG, ZG[bG])
-         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(GG, Object.getOwnPropertyDescriptors(ZG)) : yb(Object(ZG)).forEach((function(bG) {
-           Object.defineProperty(GG, bG, Object.getOwnPropertyDescriptor(ZG, bG))
-         }))
+       setBooleanType(MM, rM) {
+         const iM = this._getTotalBooleanVal();
+         this.booleans[MM] = !!rM;
+         const OM = this.getTotalBooleanVal();
+         var SM;
+         OM !== iM && (null === (SM = this._onUpdate) || void 0 === SM || SM.call(this, OM, this.booleans));
+         return OM
+       }
+       removeBoolean(MM) {
+         const rM = this._getTotalBooleanVal();
+         delete this.booleans[MM];
+         const iM = this._getTotalBooleanVal();
+         var OM;
+         null !== iM && iM !== rM && (null === (OM = this._onUpdate) || void 0 === OM || OM.call(this, iM, this.booleans));
+         return null !== iM && void 0 !== iM && iM
+       }
+ ... (12 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L660-L667` → after: `L473-L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L473-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/109.js#L473-L476) · [Before (L660-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/109.js#L660-L667)

```diff
- 
-     function Yb(GG, bG) {
-       if (null == GG) return {};
-       var ZG, wG, SG = function(GG, bG) {
-         if (null == GG) return {};
-         var ZG, wG, SG = {},
-           LG = Object.keys(GG);
-         for (wG = 0; wG < LG.length; wG++) ZG = LG[wG], bG.indexOf(ZG) >= 0 || (SG[ZG] = GG[ZG]);
+     class jM extends SM {
+       getTotalBooleanVal() {
+         const MM = this._getTotalBooleanVal();
+         if (null === MM) throw new Error("Should not be gotten before at least 1 type has been initialised");
```

#### 38. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L674-L1076` → after: `L479-L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L479-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/109.js#L479-L484) · [Before (L674-L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/109.js#L674-L1076)

```diff
-       return SG
-     }
-     var Vb = (0, wG.forwardRef)((function(GG, bG) {
-       var ZG = GG.children,
-         SG = Qb(Yb(GG, xG)),
-         LG = SG.open,
-         yG = Yb(SG, BG);
-       return (0, wG.useImperativeHandle)(bG, (function() {
-         return {
-           open: LG
-         }
-       }), [LG]), wG.createElement(wG.Fragment, null, ZG(kb(kb({}, yG), {}, {
-         open: LG
-       })))
-     }));
-     Vb.displayName = "Dropzone";
- ... (387 more removed lines; see GitHub link above)
+       _getTotalBooleanVal() {
+         let MM = !1,
+           rM = !0;
+         for (const iM in this.booleans) MM = !0, rM &&= this.booleans[iM];
+         return MM ? rM : null
+       }
```

#### 39. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1078-L1111` → after: `L486-L496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L486-L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/109.js#L486-L496) · [Before (L1078-L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/109.js#L1078-L1111)

```diff
- 
-     function Kb(GG, bG) {
-       switch (bG.type) {
-         case "focus":
-           return kb(kb({}, GG), {}, {
-             ZF: !0
-           });
-         case "blur":
-           return kb(kb({}, GG), {}, {
-             ZF: !1
-           });
-         case "openDialog":
-           return kb(kb({}, fb), {}, {
-             isFileDialogActive: !0
-           });
-         case "closeDialog":
- ... (18 more removed lines; see GitHub link above)
+     class aM extends SM {
+       getTotalBooleanVal() {
+         const MM = this._getTotalBooleanVal();
+         if (null === MM) throw new Error("Should not be gotten before at least 1 type has been initialised");
+         return MM
+       }
+       _getTotalBooleanVal() {
+         let MM = !1,
+           rM = !1;
+         for (const iM in this.booleans) MM = !0, rM ||= this.booleans[iM];
+         return MM ? rM : null
```

#### 40. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1114-L1115` → after: `L499-L541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L499-L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/109.js#L499-L541) · [Before (L1114-L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/109.js#L1114-L1115)

```diff
- 
-     function hb() {}
+   },
+   37758: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => jM,
+       i: () => OM,
+       l: () => SM
+     });
+     const OM = 15,
+       SM = 3,
+       jM = 30
+   },
+   6944: (MM, rM, iM) => {
+     iM.d(rM, {
+       b: () => aM,
+       d: () => SM,
+       e: () => nM,
+ ... (27 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/110.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/110.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a)

#### 1. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/110.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/110.js#L2)

```diff
- export const ids = [110];
+ export const ids = [108, 110];
```

#### 2. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L4-L35` → after: `L4-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L4-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/110.js#L4-L19) · [Before (L4-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/110.js#L4-L35)

```diff
-   5024: (GG, bG, ZG) => {
-     function wG(GG) {
-       return wG = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(GG) {
-         return typeof GG
-       } : function(GG) {
-         return GG && "function" == typeof Symbol && GG.constructor === Symbol && GG !== Symbol.prototype ? "symbol" : typeof GG
-       }, wG(GG)
-     }
-     Object.defineProperty(bG, "__esModule", {
-       value: !0
-     }), bG.default = void 0;
-     var SG = pG(ZG(1006)),
-       LG = function(GG, bG) {
-         if (!bG && GG && GG.__esModule) return GG;
-         if (null === GG || "object" !== wG(GG) && "function" !== typeof GG) return {
-           default: GG
- ... (16 more removed lines; see GitHub link above)
+   37390: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       countDecodesAs: () => LM,
+       decodedAudio: () => mM
+     });
+     var OM = iM(3291),
+       SM = iM(5265);
+     const jM = SM.Howler,
+       aM = new Map;
+     let PM = 0;
+     const nM = {
+         song: 0,
+         sound: 0
+       },
+       QM = new WeakMap,
+       zM = new WeakSet;
```

#### 3. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L37-L43` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/110.js#L21-L22) · [Before (L37-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/110.js#L37-L43)

```diff
-     function VG(GG) {
-       if ("function" !== typeof WeakMap) return null;
-       var bG = new WeakMap,
-         ZG = new WeakMap;
-       return (VG = function(GG) {
-         return GG ? ZG : bG
-       })(GG)
+     function LM(MM, rM) {
+       return QM.set(MM, rM), MM
```

#### 4. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L46-L85` → after: `L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/110.js#L25) · [Before (L46-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/110.js#L46-L85)

```diff
-     function pG(GG) {
-       return GG && GG.__esModule ? GG : {
-         default: GG
-       }
-     }
- 
-     function fG(GG, bG) {
-       var ZG = "undefined" !== typeof Symbol && GG[Symbol.iterator] || GG["@@iterator"];
-       if (!ZG) {
-         if (Array.isArray(GG) || (ZG = function(GG, bG) {
-             if (!GG) return;
-             if ("string" === typeof GG) return QG(GG, bG);
-             var ZG = Object.prototype.toString.call(GG).slice(8, -1);
-             "Object" === ZG && GG.constructor && (ZG = GG.constructor.name);
-             if ("Map" === ZG || "Set" === ZG) return Array.from(GG);
-             if ("Arguments" === ZG || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZG)) return QG(GG, bG)
- ... (24 more removed lines; see GitHub link above)
+     function mM() {
```

#### 5. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L87-L147` → after: `L27-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L27-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/110.js#L27-L29) · [Before (L87-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/110.js#L87-L147)

```diff
-         s: function() {
-           ZG = ZG.call(GG)
-         },
-         n: function() {
-           var GG = ZG.next();
-           return yG = GG.done, GG
-         },
-         e: function(GG) {
-           kG = !0, LG = GG
-         },
-         f: function() {
-           try {
-             yG || null == ZG.return || ZG.return()
-           } finally {
-             if (kG) throw LG
-           }
- ... (45 more removed lines; see GitHub link above)
+         bytes: PM,
+         songsDecoded: nM.song,
+         soundsDecoded: nM.sound
```

#### 6. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L152-L153` → after: `L34-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L34-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/110.js#L34-L188) · [Before (L152-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/110.js#L152-L153)

```diff
-       if (void 0 === GG) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
-       return GG
+       if (zM.has(MM)) return;
+       zM.add(MM);
+       const rM = 1 === MM.decodeAudioData.length,
+         iM = MM.decodeAudioData.bind(MM);
+       MM.decodeAudioData = (MM, OM, SM) => {
+         const zM = MM => {
+           const rM = jM._howls.filter((MM => "loaded" !== MM._state));
+           try {
+             null === OM || void 0 === OM || OM(MM)
+           } finally {
+             const iM = rM.find((MM => "loaded" === MM._state));
+             void 0 !== iM && "string" === typeof iM._src && function(MM, rM, iM) {
+               var OM;
+               PM += iM - (null !== (OM = aM.get(rM)) && void 0 !== OM ? OM : 0), aM.set(rM, iM);
+               const SM = QM.get(MM);
+               void 0 !== SM && nM[SM]++
+ ... (139 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L156-L159` → after: `L191-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L191-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/110.js#L191-L193) · [Before (L156-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/110.js#L156-L159)

```diff
-     function rG(GG) {
-       return rG = Object.setPrototypeOf ? Object.getPrototypeOf : function(GG) {
-         return GG.__proto__ || Object.getPrototypeOf(GG)
-       }, rG(GG)
+     function yM() {
+       var MM;
+       (PM.volume(), PM.ctx && PM.autoUnlock) && (null === (MM = PM._unlockAudio) || void 0 === MM || MM.call(PM))
```

#### 8. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L161-L799` → after: `L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/110.js#L195) · [Before (L161-L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/110.js#L161-L799)

```diff
- 
-     function zG(GG, bG, ZG) {
-       return bG in GG ? Object.defineProperty(GG, bG, {
-         value: ZG,
-         enumerable: !0,
-         configurable: !0,
-         writable: !0
-       }) : GG[bG] = ZG, GG
-     }
-     var EG = {
-         orientation: {
-           horizontal: {
-             dimension: "width",
-             direction: "left",
-             reverseDirection: "right",
-             coordinate: "x"
- ... (623 more removed lines; see GitHub link above)
+     JM && (PM._autoSuspend = () => hM > 0 ? SM.Howler : JM())
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/111.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/111.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4)

#### 1. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L2` → after: `L3`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R3) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/111.js#L3) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/111.js#L2)

```diff
- export const ids = [111, 402];
+ export const ids = [111];
```

#### 2. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L4-L43` → after: `L5-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L5-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/111.js#L5-L9) · [Before (L4-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/111.js#L4-L43)

```diff
-   4993: (GG, bG, ZG) => {
-     var wG = ZG(4997);
- 
-     function SG() {}
- 
-     function LG() {}
-     LG.resetWarningCache = SG, GG.exports = function() {
-       function GG(GG, bG, ZG, SG, LG, yG) {
-         if (yG !== wG) {
-           var kG = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
-           throw kG.name = "Invariant Violation", kG
-         }
-       }
- 
-       function bG() {
-         return GG
- ... (24 more removed lines; see GitHub link above)
+   5269: (MM, rM, iM) => {
+     var OM;
+     ! function() {
+       var SM = function() {
+         this.init()
```

#### 3. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L45-L88` → after: `L11-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L11-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/111.js#L11-L27) · [Before (L45-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/111.js#L45-L88)

```diff
-       return ZG.PropTypes = ZG, ZG
-     }
-   },
-   4985: (GG, bG, ZG) => {
-     GG.exports = ZG(4993)()
-   },
-   4997: GG => {
-     GG.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
-   },
-   6588: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       default: () => VG
-     });
-     var wG = ZG(1444),
-       SG = ZG(1393),
-       LG = ZG(1151),
- ... (28 more removed lines; see GitHub link above)
+       SM.prototype = {
+         init: function() {
+           var MM = this || jM;
+           return MM._counter = 1e3, MM._html5AudioPool = [], MM.html5PoolSize = 10, MM._codecs = {}, MM._howls = [], MM._muted = !1, MM._volume = 1, MM._canPlayEvent = "canplaythrough", MM._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, M … [truncated]
+         },
+         volume: function(MM) {
+           var rM = this || jM;
+           if (MM = parseFloat(MM), rM.ctx || HM(), "undefined" !== typeof MM && MM >= 0 && MM <= 1) {
+             if (rM._volume = MM, rM._muted) return rM;
+             rM.usingWebAudio && rM.masterGain.gain.setValueAtTime(MM, jM.ctx.currentTime);
+             for (var iM = 0; iM < rM._howls.length; iM++)
+               if (!rM._howls[iM]._webAudio)
+                 for (var OM = rM._howls[iM]._getSoundIds(), SM = 0; SM < OM.length; SM++) {
+                   var aM = rM._howls[iM]._soundById(OM[SM]);
+                   aM && aM._node && (aM._node.volume = aM._volume * MM)
+                 }
+ ... (1 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L90-L146` → after: `L29-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L29-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/111.js#L29-L163) · [Before (L90-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/111.js#L90-L146)

```diff
-         })]
-       })
-     }
-   },
-   6576: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       d: () => fG,
-       e: () => QG,
-       i: () => pG,
-       k: () => KG
-     });
-     var wG = ZG(51),
-       SG = ZG(6561),
-       LG = ZG(1431),
-       yG = ZG(6559),
-       kG = ZG(6580),
- ... (41 more removed lines; see GitHub link above)
+           return rM._volume
+         },
+         mute: function(MM) {
+           var rM = this || jM;
+           rM.ctx || HM(), rM._muted = MM, rM.usingWebAudio && rM.masterGain.gain.setValueAtTime(MM ? 0 : rM._volume, jM.ctx.currentTime);
+           for (var iM = 0; iM < rM._howls.length; iM++)
+             if (!rM._howls[iM]._webAudio)
+               for (var OM = rM._howls[iM]._getSoundIds(), SM = 0; SM < OM.length; SM++) {
+                 var aM = rM._howls[iM]._soundById(OM[SM]);
+                 aM && aM._node && (aM._node.muted = !!MM || aM._muted)
+               }
+           return rM
+         },
+         stop: function() {
+           for (var MM = this || jM, rM = 0; rM < MM._howls.length; rM++) MM._howls[rM].stop();
+           return MM
+ ... (119 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L148-L158` → after: `L165-L632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L165-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/111.js#L165-L632) · [Before (L148-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/111.js#L148-L158)

```diff
-       }), [GG, bG]), {
-         isFavourite: GG => null === ZG ? null : ZG.has(GG),
-         toggle: function(bG) {
-           if (null === ZG || yG.current.has(bG)) return;
-           yG.current.add(bG);
-           const wG = !ZG.has(bG);
-           kG(bG, wG), (wG ? LG.d.favouriteShaderPack(GG, bG) : LG.d.unfavouriteShaderPack(GG, bG)).catch((GG => {
-             console.error("Failed to change a favourite shader pack", GG), kG(bG, !wG)
-           })).finally((() => {
-             yG.current.delete(bG)
-           }))
+       };
+       var jM = new SM,
+         aM = function(MM) {
+           MM.src && 0 !== MM.src.length ? this.init(MM) : console.error("An array of source files must be passed with any new Howl.")
+         };
+       aM.prototype = {
+         init: function(MM) {
+           var rM = this;
+           return jM.ctx || HM(), rM._autoplay = MM.autoplay || !1, rM._format = "string" !== typeof MM.format ? MM.format : [MM.format], rM._html5 = MM.html5 || !1, rM._muted = MM.mute || !1, rM._loop = MM.loop || !1, rM._pool = MM.pool || 5, rM._preload = "boolean" !== typeof MM … [truncated]
+             method: MM.xhr && MM.xhr.method ? MM.xhr.method : "GET",
+             headers: MM.xhr && MM.xhr.headers ? MM.xhr.headers : null,
+             withCredentials: !(!MM.xhr || !MM.xhr.withCredentials) && MM.xhr.withCredentials
+           }, rM._duration = 0, rM._state = "unloaded", rM._sounds = [], rM._endTimers = {}, rM._queue = [], rM._playLock = !1, rM._onend = MM.onend ? [{
+             jL: MM.onend
+           }] : [], rM._onfade = MM.onfade ? [{
+             jL: MM.onfade
+ ... (452 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L225-L313` → after: `L635-L636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L635-L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/111.js#L635-L636) · [Before (L225-L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/111.js#L225-L313)

```diff
- 
-     function dG(GG, bG) {
-       return GG.withFeatures.includes(bG) ? "with" : GG.withoutFeatures.includes(bG) ? "without" : null
-     }
- 
-     function JG(GG) {
-       return null === GG ? "with" : "with" === GG ? "without" : null
-     }
- 
-     function rG(GG) {
-       return "with" === GG ? "only" : null === GG ? "include" : void 0
-     }
- 
-     function zG(GG, bG) {
-       const ZG = dG(GG, bG),
-         wG = GG => GG.filter((GG => GG !== bG));
- ... (73 more removed lines; see GitHub link above)
+       var PM = function(MM) {
+         this._parent = MM, this.init()
```

#### 7. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L315-L427` → after: `L638-L733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L638-L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/111.js#L638-L733) · [Before (L315-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/111.js#L315-L427)

```diff
- 
-     function PG(GG) {
-       return Math.round(100 * Math.max(0, 1 - 1 / GG))
-     }
- 
-     function MG(GG, bG, ZG, SG) {
-       const LG = [];
-       GG.isBanned && LG.push({
-         tone: "warning",
-         text: SG("shaderPackListing:ownerBanned"),
-         detail: null
-       });
-       const {
-         pending: yG
-       } = GG;
-       if (null === GG.brokenError || yG && !yG.error || LG.push({
- ... (97 more removed lines; see GitHub link above)
+       PM.prototype = {
+         init: function() {
+           var MM = this,
+             rM = MM._parent;
+           return MM._muted = rM._muted, MM._loop = rM._loop, MM._volume = rM._volume, MM._rate = rM._rate, MM._seek = 0, MM.eL = !0, MM._ended = !0, MM._sprite = "__default", MM._id = ++jM._counter, rM._sounds.push(MM), MM.create(), MM
+         },
+         create: function() {
+           var MM = this,
+             rM = MM._parent,
+             iM = jM._muted || MM._muted || MM._parent._muted ? 0 : MM._volume;
+           return rM._webAudio ? (MM._node = "undefined" === typeof jM.ctx.createGain ? jM.ctx.createGainNode() : jM.ctx.createGain(), MM._node.gain.setValueAtTime(iM, jM.ctx.currentTime), MM._node.paused = !0, MM._node.connect(jM.masterGain)) : jM.noAudio || (MM._node = jM._obtai … [truncated]
+         },
+         reset: function() {
+           var MM = this,
+             rM = MM._parent;
+           return MM._muted = rM._muted, MM._loop = rM._loop, MM._volume = rM._volume, MM._rate = rM._rate, MM._seek = 0, MM._rateSeek = 0, MM.eL = !0, MM._ended = !0, MM._sprite = "__default", MM._id = ++jM._counter, MM
+ ... (80 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L429-L456` → after: `L735-L737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L735-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/111.js#L735-L737) · [Before (L429-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/111.js#L429-L456)

```diff
-       },
-       LG = ["popular", "updated", "newest"],
-       yG = 3,
-       kG = 32,
-       UG = 300;
- 
-     function YG(GG, bG) {
-       return GG.slice(0, bG).replace(/[\uD800-\uDBFF]$/, "")
-     }
-     const VG = 64,
-       pG = 512,
-       fG = 18e5;
- 
-     function QG(GG) {
-       const bG = GG,
-         ZG = null === bG || void 0 === bG ? void 0 : bG.files;
- ... (12 more removed lines; see GitHub link above)
+       }.apply(rM, [])) || (MM.exports = OM), rM.Howler = jM, rM.Howl = aM, "undefined" !== typeof iM.g ? (iM.g.HowlerGlobal = SM, iM.g.Howler = jM, iM.g.Howl = aM, iM.g.Sound = PM) : "undefined" !== typeof window && (window.HowlerGlobal = SM, window.Howler = jM, window.Howl = aM, … [truncated]
+     }(),
+     function() {
```

#### 9. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L458-L471` → after: `L739-L893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L739-L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/111.js#L739-L893) · [Before (L458-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/111.js#L458-L471)

```diff
-       return GG === JG || null !== (bG = null === GG || void 0 === GG ? void 0 : GG.startsWith(rG)) && void 0 !== bG && bG
-     }
- 
-     function EG(GG, bG) {
-       return `shaderPacks/${GG}/${bG}.json`
-     }
- 
-     function oG(GG, bG, ZG, wG) {
-       return null === bG.renderId ? XG(GG, bG.baselineVersion, ZG, wG) : `${GG}/${function(GG,bG,ZG,wG){return`shaderPacks/${GG}/${bG}/${ZG}-${wG}.webp`}(bG.packId,bG.renderId,ZG,wG)}`
-     }
- 
-     function XG(GG, bG, ZG, wG) {
-       return `${GG}/${function(GG,bG,ZG){return`shaderPacks/baseline/${GG}/${bG}-${ZG}.webp`}(bG,ZG,wG)}`
-     }
+       HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(MM) {
+         var rM = this;
+         if (!rM.ctx || !rM.ctx.listener) return rM;
+         for (var iM = rM._howls.length - 1; iM >= 0; iM--) rM._howls[iM].stereo(MM);
+         return rM
+       }, HowlerGlobal.prototype.pos = function(MM, rM, iM) {
+         var OM = this;
+         return OM.ctx && OM.ctx.listener ? (rM = "number" !== typeof rM ? OM._pos[1] : rM, iM = "number" !== typeof iM ? OM._pos[2] : iM, "number" !== typeof MM ? OM._pos : (OM._pos = [MM, rM, iM], "undefined" !== typeof OM.ctx.listener.positionX ? (OM.ctx.listener.positionX.setT … [truncated]
+       }, HowlerGlobal.prototype.orientation = function(MM, rM, iM, OM, SM, jM) {
+         var aM = this;
+         if (!aM.ctx || !aM.ctx.listener) return aM;
+         var PM = aM._orientation;
+         return rM = "number" !== typeof rM ? PM[1] : rM, iM = "number" !== typeof iM ? PM[2] : iM, OM = "number" !== typeof OM ? PM[3] : OM, SM = "number" !== typeof SM ? PM[4] : SM, jM = "number" !== typeof jM ? PM[5] : jM, "number" !== typeof MM ? PM : (aM._orientation = [MM, r … [truncated]
+       }, Howl.prototype.init = (MM = Howl.prototype.init, function(rM) {
+         var iM = this;
+         return iM._orientation = rM.orientation || [1, 0, 0], iM._stereo = rM.stereo || null, iM._pos = rM.pos || null, iM._pannerAttr = {
+ ... (139 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/112.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/112.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e)

#### 1. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/112.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/112.js#L4)

```diff
-   8955: (GG, bG, ZG) => {
+   5278: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L8-L76` → after: `L8-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L8-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/112.js#L8-L69) · [Before (L8-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/112.js#L8-L76)

```diff
-     var wG = ZG(1457),
-       SG = ZG(17),
-       LG = ZG(4678),
-       yG = ZG(51),
-       kG = ZG(1389);
-     var UG = ZG(1895),
-       YG = ZG(1444),
-       VG = ZG(1311),
-       pG = ZG(1151),
-       fG = ZG(140),
-       QG = ZG(188),
-       KG = ZG(982),
-       hG = ZG(988),
-       dG = ZG(1177),
-       JG = ZG(2351),
-       rG = ZG(1431),
- ... (53 more removed lines; see GitHub link above)
+     var OM = iM(44),
+       SM = iM(1608),
+       jM = iM(332),
+       aM = iM(1240),
+       PM = iM(1694),
+       nM = iM(1279),
+       QM = iM(1630),
+       zM = iM(1573),
+       LM = iM(2896);
+     const mM = {
+       retries: 2,
+       minTimeout: 2e3
+     };
+     var HM = iM(1130),
+       hM = iM(1685),
+       JM = iM(1142),
+ ... (46 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L104-L105` → after: `L75-L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L75-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/112.js#L75-L412) · [Before (L104-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/112.js#L104-L105)

```diff
-         onApply: bG,
-         onSkip: ZG
+         profile: rM
+       } = MM;
+       const {
+         t: iM,
+         selectedLanguage: OM
+       } = (0, yM.A)();
+       let SM = iM("homePage:profileUnknown");
+       if (rM.lastOnline) {
+         const MM = (0, yM.n)(OM.code, "homePage:profileTimeAgo");
+         SM = iM("homePage:profileTimeAgo", {
+           time: (0, jM.db)(MM, rM.lastOnline, Date.now())
+         })
+       }
+       let aM = iM("homePage:profileUnknown");
+       return rM.accountCreatedAt && (aM = new Date(rM.accountCreatedAt).toLocaleDateString(void 0, {
+         year: "numeric",
+ ... (322 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L109-L127` → after: `L416-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L416-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/112.js#L416-L491) · [Before (L109-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/112.js#L109-L127)

```diff
-       } = (0, pG.w)();
-       return (0, yG.useEffect)((() => {
-         TG.f.skipPlayWait()
-       }), []), (0, HG.jsx)(nG.j, {
-         icon: "download",
-         title: "customTexturePack:downloadTitle",
-         subtitle: (0, HG.jsxs)("div", {
-           className: "CustomTexturePackDownloaderSubtitleText",
-           children: [wG("customTexturePack:downloadPrompt"), (0, HG.jsx)("div", {
-             className: "CustomTexturePackDownloaderWarningText",
-             children: wG("customTexturePack:authorWarning")
-           }), (0, HG.jsx)("div", {
-             className: "CustomTexturePackDownloaderSecondaryText",
-             children: wG("customTexturePack:existingPackSaved")
-           })]
-         }),
- ... (3 more removed lines; see GitHub link above)
+       } = (0, aM.A)(), dM = HM[rM];
+       if (!iM && !OM) return null;
+ 
+       function yM() {
+         var MM;
+         if (!SM || !LM) return;
+         zM.NotificationProvider.showInputPopup({
+           title: "homePage:profileSocialLinkEditTitle",
+           textOpts: {
+             title: {
+               platform: dM.name
+             }
+           },
+           prefixText: jM.t[rM],
+           placeholderText: "playBloxd",
+           initialValue: null !== (MM = null === iM || void 0 === iM ? void 0 : iM.handle) && void 0 !== MM ? MM : "",
+ ... (60 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L129-L132` → after: `L493-L513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L493-L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/112.js#L493-L513) · [Before (L129-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/112.js#L129-L132)

```diff
-         cancel: {
-           text: "customTexturePack:skip",
-           onClick: ZG
-         }
+         ...(0, nM.fb)(),
+         onClick: () => {
+           yM()
+         },
+         children: [(0, mM.jsx)(hM, {
+           platform: rM
+         }), (0, mM.jsxs)("span", {
+           className: "PlayerProfileSocialLinkText",
+           children: [(0, mM.jsx)("span", {
+             className: "PlayerProfileSocialLinkName SmallTextBold",
+             children: dM.name
+           }), (0, mM.jsx)("span", {
+             className: "PlayerProfileSocialLinkCount SmallTextLight",
+             children: JM("homePage:profileSocialLinkAdd")
+           })]
+         }), (0, mM.jsx)("span", {
+ ... (5 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L161-L163` → after: `L519-L522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L519-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/112.js#L519-L522) · [Before (L161-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/112.js#L161-L163)

```diff
-         schematicId: bG,
-         texturePackKey: ZG,
-         onClose: wG
+         socialLinks: rM,
+         editable: iM = !1,
+         userContext: OM,
+         onLinksUpdated: SM
```

#### 7. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L165-L206` → after: `L524-L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L524-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/112.js#L524-L537) · [Before (L165-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/112.js#L165-L206)

```diff
-       const [SG, LG] = (0, yG.useState)("prompt"), [kG, UG] = (0, yG.useState)(null), YG = (0, BG.c)();
- 
-       function VG() {
-         wG()
-       }
-       return "prompt" === SG ? (0, HG.jsx)(tG, {
-         onApply: async function() {
-           LG("downloading");
-           try {
-             const GG = await async function(GG, bG) {
-               const ZG = await (0, eG.e)(bG);
-               if (ZG) return {
-                 pack: ZG,
-                 key: bG
-               };
-               const wG = await zG.userContextManager.getCurrentUserContext(),
- ... (26 more removed lines; see GitHub link above)
+       if (!iM && 0 === rM.length) return null;
+       const aM = new Map(rM.map((MM => [MM.platform, MM]))),
+         PM = iM ? jM.s : rM.map((MM => MM.platform));
+       return (0, mM.jsx)("div", {
+         className: "PlayerProfileSocialLinks",
+         children: (0, mM.jsx)("div", {
+           className: "PlayerProfileSocialLinksList",
+           children: PM.map((MM => (0, mM.jsx)(JM, {
+             platform: MM,
+             link: aM.get(MM),
+             editable: iM,
+             userContext: OM,
+             onLinksUpdated: SM
+           }, MM)))
```

#### 8. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L610-L782` → after: `L542-L543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L542-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/112.js#L542-L543) · [Before (L610-L782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/112.js#L610-L782)

```diff
-   5008: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       e: () => SG
-     });
-     var wG = ZG(1163);
-     async function SG(GG) {
-       const bG = await fetch(`${wG.clientSideServerUrls.s3Url}/${GG}`, {
-         headers: {
-           Accept: "application/json"
-         }
-       });
-       if (404 === bG.status || 403 === bG.status) return null;
-       if (!bG.ok) throw new Error(`Failed to download the texture pack (${bG.status})`);
-       return await bG.json()
-     }
-   },
- ... (157 more removed lines; see GitHub link above)
+   5280: MM => {
+     MM.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGOws7P7D8Kmpqb/NTU1wTQymwGbAhANwwzIOmAYxQRkCXNzczBGtgrFBGQFKFZgsxtuAi67YY5HMQGbAgCIxWSBYHJzHAAAAABJRU5ErkJggg=="
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/113.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/113.js` (27 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787)

#### 1. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4-L21` → after: `L4-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/113.js#L4-L116) · [Before (L4-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/113.js#L4-L21)

```diff
-   5019: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       c: () => KG,
-       e: () => zG,
-       f: () => hG,
-       g: () => rG
-     });
-     var wG = ZG(51),
-       SG = ZG(5021),
-       LG = ZG(4396),
-       yG = ZG(1320),
-       kG = ZG(5039),
-       UG = ZG(1006),
-       YG = ZG.n(UG),
-       VG = ZG(1311),
-       pG = ZG(1702),
- ... (2 more removed lines; see GitHub link above)
+   29407: (MM, rM, iM) => {
+     var OM = {
+       "./Player_Atlas.png": 28425,
+       "./astro_set_1_attachable.png": 28429,
+       "./astro_set_2_attachable.png": 28433,
+       "./astro_set_3_attachable.png": 28435,
+       "./astro_set_4_attachable.png": 28438,
+       "./beaver_lumberjack.png": 28447,
+       "./bee_set_1_attachable.png": 28449,
+       "./bee_set_2_attachable.png": 28457,
+       "./bee_set_3_attachable_blue.png": 28463,
+       "./bee_set_3_attachable_green.png": 28470,
+       "./bee_set_3_attachable_red.png": 28478,
+       "./bee_set_4_attachable.png": 28487,
+       "./capeTextures/cape_cow_cream.png": 28492,
+       "./capeTextures/cape_cow_normal.png": 28499,
+ ... (97 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L24-L67` → after: `L119-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L119-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/113.js#L119-L120) · [Before (L24-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/113.js#L24-L67)

```diff
-       let {
-         label: bG,
-         onClick: ZG,
-         checked: wG,
-         circleInfoText: SG,
-         className: kG,
-         disabled: UG,
-         note: VG
-       } = GG;
-       return (0, QG.jsxs)("div", {
-         "aria-disabled": UG || void 0,
-         "data-pad-focusable": !0,
-         className: YG()("SettingBox CheckboxContainer", {
-           [kG]: kG,
-           SettingBoxDisabled: UG
-         }),
- ... (28 more removed lines; see GitHub link above)
+       var rM = jM(MM);
+       return iM(rM)
```

#### 3. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L71-L131` → after: `L124-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L124-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/113.js#L124-L128) · [Before (L71-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/113.js#L71-L131)

```diff
-       let {
-         name: bG,
-         onChange: ZG,
-         min: SG,
-         max: LG,
-         step: kG,
-         initValue: UG,
-         circleInfoText: VG,
-         format: pG,
-         className: fG,
-         padStep: KG,
-         disabled: hG = !1,
-         selectableMax: dG,
-         cappedNote: rG,
-         onChangeComplete: zG
-       } = GG;
- ... (45 more removed lines; see GitHub link above)
+       if (!iM.o(OM, MM)) {
+         var rM = new Error("Cannot find module '" + MM + "'");
+         throw rM.code = "MODULE_NOT_FOUND", rM
+       }
+       return OM[MM]
```

#### 4. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L133` → after: `L130-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L130-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/113.js#L130-L283) · [Before (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/113.js#L133)

```diff
-     const dG = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);
+     SM.keys = function() {
+       return Object.keys(OM)
+     }, SM.resolve = jM, MM.exports = SM, SM.id = 29407
+   },
+   33831: (MM, rM, iM) => {
+     var OM = {
+       "./67/67_Model.glb": 33840,
+       "./67/67_Reconstructed.glb": 33842,
+       "./Armour Collector/Armour Collector_Model.glb": 33844,
+       "./Armour Collector/Armour Collector_Reconstructed.glb": 33853,
+       "./Bear/Bear_Model.glb": 33860,
+       "./Bobino Musculino/Bobino Musculino_Model.glb": 33865,
+       "./Bobino Musculino/Bobino Musculino_Reconstructed.glb": 33871,
+       "./Camel/Camel_Model.glb": 33877,
+       "./Capitano Explovissimo/Capitano Explovissimo_Model.glb": 33885,
+       "./Capitano Explovissimo/Capitano Explovissimo_Reconstructed.glb": 33890,
+ ... (138 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L136-L233` → after: `L286-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L286-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/113.js#L286-L287) · [Before (L136-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/113.js#L136-L233)

```diff
-       var bG;
-       let {
-         value: ZG,
-         min: LG,
-         max: yG,
-         step: kG,
-         onChange: UG,
-         orientation: YG,
-         reverse: VG,
-         setIsChanging: pG,
-         tooltip: KG,
-         labels: hG,
-         handleLabel: JG,
-         format: rG,
-         onChangeStart: zG,
-         onChangeComplete: EG,
- ... (82 more removed lines; see GitHub link above)
+       var rM = jM(MM);
+       return iM(rM)
```

#### 6. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L237-L258` → after: `L291-L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L291-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/113.js#L291-L295) · [Before (L237-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/113.js#L237-L258)

```diff
-       let {
-         label: bG,
-         options: ZG,
-         value: wG,
-         onChange: SG,
-         circleInfoText: LG
-       } = GG;
-       return (0, QG.jsxs)("div", {
-         className: "SettingBox SegmentedSettingRow",
-         children: [(0, QG.jsxs)("div", {
-           className: "SliderText",
-           children: [bG, LG && (0, QG.jsx)(yG.d, {
-             className: "SettingsTextInputCircleInfo",
-             hoverInfo: LG
-           })]
-         }), (0, QG.jsx)(kG.c, {
- ... (6 more removed lines; see GitHub link above)
+       if (!iM.o(OM, MM)) {
+         var rM = new Error("Cannot find module '" + MM + "'");
+         throw rM.code = "MODULE_NOT_FOUND", rM
+       }
+       return OM[MM]
```

#### 7. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L261-L292` → after: `L301-L620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L301-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/113.js#L301-L620) · [Before (L261-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/113.js#L261-L292)

```diff
-   6668: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       default: () => OG
-     });
-     var wG = ZG(51),
-       SG = ZG(1457),
-       LG = ZG(6561),
-       yG = ZG(1177),
-       kG = ZG(352),
-       UG = ZG(1490),
-       YG = ZG(1302),
-       VG = ZG(1444),
-       pG = ZG(1393),
-       fG = ZG(1320),
-       QG = ZG(1557),
-       KG = ZG(2575),
- ... (16 more removed lines; see GitHub link above)
+   27685: (MM, rM, iM) => {
+     var OM = {
+       "./67/67_Atlas.png": 27689,
+       "./67/variations/0_67_default.png": 27694,
+       "./Armour Collector/Armour Collector_Atlas.png": 27701,
+       "./Armour Collector/variations/0_armour collector_default.png": 27708,
+       "./Bear/BearSaddle_Atlas.png": 27710,
+       "./Bear/Bear_Atlas.png": 27712,
+       "./Bear/variations/0_bear_default.png": 27720,
+       "./Bobino Musculino/Bobino Musculino_Atlas.png": 27723,
+       "./Bobino Musculino/variations/0_bobino musculino_default.png": 27726,
+       "./Camel/CamelSaddle_Atlas.png": 27735,
+       "./Camel/Camel_Armour.png": 27740,
+       "./Camel/Camel_Atlas.png": 27748,
+       "./Camel/variations/0_camel_default.png": 27755,
+       "./Camel/variations/1_camel_brown.png": 27760,
+ ... (304 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L295-L455` → after: `L623-L624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L623-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/113.js#L623-L624) · [Before (L295-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/113.js#L295-L455)

```diff
-       let {
-         details: bG,
-         owner: ZG,
-         onChanged: SG
-       } = GG;
-       const {
-         t: yG
-       } = (0, EG.w)(), kG = (0, VG.useNavigatePreserveSearch)(), {
-         userContext: UG
-       } = (0, JG.e)(), [fG, QG] = (0, wG.useState)(!1), [KG, hG] = (0, wG.useState)(null), [dG, zG] = (0, wG.useState)(!1), {
-         packId: oG,
-         name: XG,
-         description: FG,
-         live: vG
-       } = bG;
-       async function aG(GG) {
- ... (145 more removed lines; see GitHub link above)
+       var rM = jM(MM);
+       return iM(rM)
```

#### 9. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L467-L540` → after: `L628-L632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L628-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/113.js#L628-L632) · [Before (L467-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/113.js#L467-L540)

```diff
-       let {
-         item: bG
-       } = GG;
-       const {
-         t: ZG
-       } = (0, EG.w)(), [SG] = (0, PG.i)(), [yG, kG] = (0, wG.useState)(SG), [UG, YG] = (0, wG.useState)(!1), [VG, pG] = (0, wG.useState)(!1), {
-         s3Url: fG
-       } = jG.clientSideServerUrls, {
-         width: QG,
-         height: KG
-       } = LG.u.large, hG = (0, LG.v)(fG, bG, yG, "large"), {
-         renderVersion: dG
-       } = bG;
-       return (0, mG.jsxs)("div", {
-         className: "ShaderPackPreviews",
-         children: [(0, mG.jsx)(AG.b, {
- ... (58 more removed lines; see GitHub link above)
+       if (!iM.o(OM, MM)) {
+         var rM = new Error("Cannot find module '" + MM + "'");
+         throw rM.code = "MODULE_NOT_FOUND", rM
+       }
+       return OM[MM]
```

#### 10. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L544-L574` → after: `L1447-L1448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R1447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L1447-L1448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/113.js#L1447-L1448) · [Before (L544-L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/113.js#L544-L574)

```diff
-       let {
-         fullUrl: bG,
-         largeUrl: ZG,
-         alt: SG,
-         onClose: LG
-       } = GG;
-       const yG = (0, wG.useRef)(null);
-       return (0, cG.w)("popup", yG, LG), (0, wG.useEffect)((() => {
-         function GG(GG) {
-           "Escape" === GG.key && (GG.stopPropagation(), LG())
-         }
-         return window.addEventListener("keydown", GG, !0), () => {
-           window.removeEventListener("keydown", GG, !0)
-         }
-       }), [LG]), (0, vG.createPortal)((0, mG.jsxs)("div", {
-         ref: yG,
- ... (15 more removed lines; see GitHub link above)
+       var rM = jM(MM);
+       return iM(rM)
```

#### 11. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L579-L592` → after: `L1452-L1454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R1452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L1452-L1454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/113.js#L1452-L1454) · [Before (L579-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/113.js#L579-L592)

```diff
-       let {
-         item: bG,
-         packUrl: ZG,
-         baselineUrl: SG
-       } = GG;
-       const {
-         t: yG
-       } = (0, EG.w)(), [kG, UG] = (0, wG.useState)(50), YG = (0, wG.useRef)(!1), VG = (0, wG.useRef)(null), {
-         width: pG,
-         height: fG
-       } = LG.u.large;
- 
-       function QG(GG) {
-         UG((bG => (0, aG.d)(bG + GG, 0, 100)))
+       if (!iM.o(OM, MM)) {
+         var rM = new Error("Cannot find module '" + MM + "'");
+         throw rM.code = "MODULE_NOT_FOUND", rM
```

#### 12. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L594-L660` → after: `L1456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R1456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L1456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/113.js#L1456) · [Before (L594-L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/113.js#L594-L660)

```diff
- 
-       function KG(GG) {
-         const bG = GG.currentTarget.getBoundingClientRect();
-         UG((0, aG.d)((GG.clientX - bG.left) / bG.width * 100, 0, 100))
-       }
-       return (0, lG.f)(VG, {
-         adjust: GG => {
-           QG(GG * nG)
-         },
-         setFraction: GG => {
-           UG(100 * GG)
-         },
-         endDrag: () => {}
-       }), (0, mG.jsxs)("div", {
-         ref: VG,
-         className: "ShaderPackCompare",
- ... (51 more removed lines; see GitHub link above)
+       return OM[MM]
```

#### 13. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L664-L677` → after: `L2881-L2882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R2881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L2881-L2882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/113.js#L2881-L2882) · [Before (L664-L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/113.js#L664-L677)

```diff
-       let {
-         side: bG,
-         onClick: ZG,
-         children: wG
-       } = GG;
-       return (0, mG.jsx)("button", {
-         type: "button",
-         className: `ShaderPackStageButton ${bG}`,
-         onClick: ZG,
-         children: (0, mG.jsx)("span", {
-           className: "ShaderPackStageButtonFace SmallTextBold",
-           children: wG
-         })
-       })
+       var rM = jM(MM);
+       return iM(rM)
```

#### 14. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L692-L735` → after: `L2886-L2888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R2886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L2886-L2888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/113.js#L2886-L2888) · [Before (L692-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/113.js#L692-L735)

```diff
-       const {
-         userContext: bG
-       } = (0, JG.e)(), [SG, LG] = (0, wG.useState)(null), [yG, kG] = (0, wG.useState)(!1), [UG, YG] = (0, wG.useState)(!1), [VG, pG] = (0, wG.useState)(null), fG = null === GG || void 0 === GG ? void 0 : GG.packId, QG = null === GG || void 0 === GG ? void 0 : GG.sourceHash;
-       return (0, wG.useEffect)((() => {
-         if (kG(!1), pG(null), void 0 === fG) return;
-         let GG = !1;
-         return Promise.all([(0, zG.hasUsableWebGpuAdapter)(), (0, HG.e)()]).then((bG => {
-           let [ZG, wG] = bG;
-           var SG;
-           GG || (LG(ZG), kG((null === wG || void 0 === wG || null === (SG = wG.listing) || void 0 === SG ? void 0 : SG.packId) === fG && wG.listing.sourceHash === QG))
-         })).catch((bG => {
-           console.error("Failed to check whether this shader pack can be used", bG), GG || LG(!1)
-         })), () => {
-           GG = !0
-         }
-       }), [fG, QG]), {
- ... (28 more removed lines; see GitHub link above)
+       if (!iM.o(OM, MM)) {
+         var rM = new Error("Cannot find module '" + MM + "'");
+         throw rM.code = "MODULE_NOT_FOUND", rM
```

#### 15. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L740-L844` → after: `L2997-L2998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R2997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L2997-L2998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/113.js#L2997-L2998) · [Before (L740-L844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/113.js#L740-L844)

```diff
-       let {
-         packUse: bG
-       } = GG;
-       const {
-         t: ZG
-       } = (0, EG.w)(), {
-         webGpuUsable: wG,
-         inUse: SG,
-         busy: LG,
-         errorKey: yG,
-         use: kG
-       } = bG;
-       return (0, mG.jsxs)("div", {
-         className: "ShaderPackUse",
-         children: [(0, mG.jsxs)(pG.k, {
-           disabled: !0 !== wG || SG,
- ... (89 more removed lines; see GitHub link above)
+       var rM = jM(MM);
+       return iM(rM)
```

#### 16. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L848-L866` → after: `L3002-L3006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R3002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L3002-L3006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/113.js#L3002-L3006) · [Before (L848-L866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/113.js#L848-L866)

```diff
-       let {
-         item: bG,
-         favourites: ZG,
-         packUse: wG
-       } = GG;
-       const SG = ZG.isFavourite(bG.packId);
-       return (0, mG.jsxs)("div", {
-         className: "ShaderPackInformationActions",
-         children: [zG.featureFlags.settings.canUseShaderPacks && (0, mG.jsx)(NG, {
-           packUse: wG
-         }), (0, mG.jsx)(pG.o, {
-           className: "ShaderPackInformationLike",
-           onClick: () => {
-             ZG.toggle(bG.packId)
-           },
-           isLiked: !0 === SG,
- ... (3 more removed lines; see GitHub link above)
+       if (!iM.o(OM, MM)) {
+         var rM = new Error("Cannot find module '" + MM + "'");
+         throw rM.code = "MODULE_NOT_FOUND", rM
+       }
+       return OM[MM]
```

#### 17. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L870-L958` → after: `L4742-L4743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4742-L4743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/113.js#L4742-L4743) · [Before (L870-L958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/113.js#L870-L958)

```diff
-       let {
-         item: bG,
-         ownerPreview: ZG,
-         bloxdhubSlug: wG,
-         actions: SG
-       } = GG;
-       const {
-         t: kG
-       } = (0, EG.w)(), UG = (0, hG.r)(), YG = null === wG ? null : (0, LG.c)(wG);
-       return (0, mG.jsxs)("div", {
-         className: "ShaderPackFacts",
-         children: [bG.description && (0, mG.jsx)("p", {
-           className: "ShaderPackDescription",
-           children: bG.description
-         }), (0, mG.jsxs)("div", {
-           className: "ShaderPackFeatureList",
- ... (73 more removed lines; see GitHub link above)
+       var rM = jM(MM);
+       return iM(rM)
```

#### 18. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L962-L976` → after: `L4747-L4749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4747-L4749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/113.js#L4747-L4749) · [Before (L962-L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/113.js#L962-L976)

```diff
-       let {
-         label: bG,
-         time: ZG,
-         now: wG
-       } = GG;
-       const {
-         t: SG,
-         selectedLanguage: LG
-       } = (0, EG.w)(), yG = new Date(ZG);
-       let UG = yG.toLocaleDateString();
-       if (wG - ZG <= 30 * kG.j) {
-         const GG = (0, EG.j)(LG.code, "shaderPackListing:timeAgo");
-         UG = SG("shaderPackListing:timeAgo", {
-           time: (0, kG.lb)(GG, ZG, wG)
-         })
+       if (!iM.o(OM, MM)) {
+         var rM = new Error("Cannot find module '" + MM + "'");
+         throw rM.code = "MODULE_NOT_FOUND", rM
```

#### 19. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L978-L987` → after: `L4751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/113.js#L4751) · [Before (L978-L987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/113.js#L978-L987)

```diff
-       return (0, mG.jsx)(fG.h, {
-         tooltipInner: yG.toLocaleString(),
-         children: (0, mG.jsxs)("div", {
-           children: [(0, mG.jsx)("dt", {
-             children: bG
-           }), (0, mG.jsx)("dd", {
-             children: UG
-           })]
-         })
-       })
+       return OM[MM]
```

#### 20. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L990-L992` → after: `L4757-L4763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4757-L4763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/113.js#L4757-L4763) · [Before (L990-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/113.js#L990-L992)

```diff
-   5039: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       c: () => yG
+   9810: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       blockMetadata: () => aM.k,
+       getDefaultModel: () => zM,
+       getDefaultSkyBox: () => LM,
+       getDefaultTexture: () => QM,
+       textureNameToIndex: () => aM.D
```

#### 21. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L994-L996` → after: `L4765-L4834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4765-L4834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/113.js#L4765-L4834) · [Before (L994-L996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/113.js#L994-L996)

```diff
-     var wG = ZG(1006),
-       SG = ZG.n(wG),
-       LG = ZG(1067);
+     var OM = iM(3580),
+       SM = iM(34611),
+       jM = iM(1202),
+       aM = iM(9816),
+       PM = iM(620);
+     const nM = {
+       block: MM => iM(9938)(`./${MM}.png`),
+       item: MM => iM(17605)(`./${MM}.png`)
+     };
+ 
+     function QM(MM, rM) {
+       let SM;
+       try {
+         if (rM === OM.f.BLOCK) SM = {
+           type: OM.i.BASE64,
+           url: nM.block(MM)
+ ... (54 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L999-L1037` → after: `L4837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/113.js#L4837) · [Before (L999-L1037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/113.js#L999-L1037)

```diff
-       let {
-         options: bG,
-         value: ZG,
-         onChange: wG,
-         ariaLabel: yG,
-         className: kG,
-         reselectable: UG = !1,
-         keepsFocus: YG = !1,
-         padTabs: VG
-       } = GG;
-       const pG = void 0 !== VG;
-       return (0, LG.jsx)("div", {
-         className: SG()("SegmentedToggle", kG),
-         role: "group",
-         "aria-label": yG,
-         "data-pad-tabs": VG,
- ... (23 more removed lines; see GitHub link above)
+       return SM.j[MM]
```

#### 23. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L1040` → after: `L4840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/113.js#L4840) · [Before (L1040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/113.js#L1040)

```diff
-   5042: (GG, bG, ZG) => {
+   34611: (MM, rM, iM) => {
```

#### 24. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L1043` → after: `L4844-L4846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4844-L4846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/113.js#L4844-L4846) · [Before (L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/113.js#L1043)

```diff
-       f: () => yG
+       g: () => aM,
+       h: () => SM,
+       j: () => OM
```

#### 25. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L1045-L1050` → after: `L4848-L4933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4848-L4933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/113.js#L4848-L4933) · [Before (L1045-L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/113.js#L1045-L1050)

```diff
-     var wG = ZG(51);
-     const SG = new WeakMap,
-       LG = GG => {
-         var bG;
-         const ZG = GG.closest("[data-pad-slider]");
-         return ZG && null !== (bG = SG.get(ZG)) && void 0 !== bG ? bG : null
+     const OM = {
+         default: {
+           type: "earth",
+           vertexTint: [137, 207, 240]
+         },
+         gloomy: {
+           type: "custom",
+           nx: "/textures/skyBoxes/gloomy/_nx.jpg",
+           ny: "/textures/skyBoxes/gloomy/_ny.jpg",
+           nz: "/textures/skyBoxes/gloomy/_nz.jpg",
+           px: "/textures/skyBoxes/gloomy/_px.jpg",
+           py: "/textures/skyBoxes/gloomy/_py.jpg",
+           pz: "/textures/skyBoxes/gloomy/_pz.jpg"
+         },
+         interstellar: {
+           type: "custom",
+ ... (70 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L1052-L1069` → after: `L4935-L4938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4935-L4938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/113.js#L4935-L4938) · [Before (L1052-L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/113.js#L1052-L1069)

```diff
-       yG = (GG, bG) => {
-         const ZG = (0, wG.useRef)(bG);
-         ZG.current = bG, (0, wG.useEffect)((() => {
-           if (GG.current) return ((GG, bG) => (SG.set(GG, bG), () => {
-             SG.get(GG) === bG && SG.delete(GG)
-           }))(GG.current, {
-             adjust: GG => {
-               ZG.current.adjust(GG)
-             },
-             setFraction: GG => {
-               ZG.current.setFraction(GG)
-             },
-             endDrag: () => {
-               ZG.current.endDrag()
-             }
-           })
- ... (2 more removed lines; see GitHub link above)
+       SM = "/textures/dayNight/sun.png",
+       jM = "/textures/dayNight/moon.png",
+       aM = "/textures/dayNight/stars",
+       PM = ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"]
```

#### 27. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L1071-L1082` → after: `L4940-L17043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4940-L17043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/113.js#L4940-L17043) · [Before (L1071-L1082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/113.js#L1071-L1082)

```diff
-   6661: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       b: () => SG,
-       e: () => LG
-     });
-     var wG = ZG(29);
-     const SG = "shaderPack";
-     async function LG() {
-       var GG;
-       let bG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-       return null !== (GG = await wG.e.getItem(SG, bG)) && void 0 !== GG ? GG : null
-     }
+   29422: MM => {
+     MM.exports = "data:model/gltf-binary;base64,Z2xURgIAAADIDgAA3AQAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImJsb3hkLWJ1aWxkbWVzaGVzIiwidmVyc2lvbiI6IjIuMCJ9LCJhY2Nlc3NvcnMiOlt7InR5cGUiOiJTQ0FMQVIiLCJjb21wb25lbnRUeXBlIjo1MTIzLCJjb3VudCI6Mjg4fSx7InR5cGUiOiJWRUMzIiwiY29tcG9uZW50VHlwZSI6 … [truncated]
+   },
+   29425: MM => {
+     MM.exports = "data:model/gltf-binary;base64,Z2xURgIAAAA0FAAA+AQAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImJsb3hkLWJ1aWxkbWVzaGVzIiwidmVyc2lvbiI6IjIuMCJ9LCJhY2Nlc3NvcnMiOlt7InR5cGUiOiJTQ0FMQVIiLCJjb21wb25lbnRUeXBlIjo1MTIzLCJjb3VudCI6Njg0fSx7InR5cGUiOiJWRUMzIiwiY29tcG9uZW50VHlwZSI6 … [truncated]
+   },
+   29432: MM => {
+     MM.exports = "data:model/gltf-binary;base64,Z2xURgIAAABMCwAApAQAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImJsb3hkLWJ1aWxkbWVzaGVzIiwidmVyc2lvbiI6IjIuMCJ9LCJhY2Nlc3NvcnMiOlt7InR5cGUiOiJTQ0FMQVIiLCJjb21wb25lbnRUeXBlIjo1MTIzLCJjb3VudCI6MjUyfSx7InR5cGUiOiJWRUMzIiwiY29tcG9uZW50VHlwZSI6 … [truncated]
+   },
+   29435: MM => {
+     MM.exports = "data:model/gltf-binary;base64,Z2xURgIAAABsBwAA8AQAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImJsb3hkLWJ1aWxkbWVzaGVzIiwidmVyc2lvbiI6IjIuMCJ9LCJhY2Nlc3NvcnMiOlt7InR5cGUiOiJTQ0FMQVIiLCJjb21wb25lbnRUeXBlIjo1MTIzLCJjb3VudCI6MjUyfSx7InR5cGUiOiJWRUMzIiwiY29tcG9uZW50VHlwZSI6 … [truncated]
+   },
+   29438: MM => {
+     MM.exports = "data:model/gltf-binary;base64,Z2xURgIAAAAoCAAApAQAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImJsb3hkLWJ1aWxkbWVzaGVzIiwidmVyc2lvbiI6IjIuMCJ9LCJhY2Nlc3NvcnMiOlt7InR5cGUiOiJTQ0FMQVIiLCJjb21wb25lbnRUeXBlIjo1MTIzLCJjb3VudCI6MTA4fSx7InR5cGUiOiJWRUMzIiwiY29tcG9uZW50VHlwZSI6 … [truncated]
+   },
+   29445: MM => {
+ ... (12088 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/114.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/114.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731)

#### 1. `bundles/bloxd.io/chunks/js/114.js` (Changed code · before: `L4-L7` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/114.js#L4-L6) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/114.js#L4-L7)

```diff
-   5064: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       d: () => VG,
-       e: () => YG
+   5286: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       default: () => UM
```

#### 2. `bundles/bloxd.io/chunks/js/114.js` (Changed code · before: `L9-L314` → after: `L8-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731) · [After (L8-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/114.js#L8-L40) · [Before (L9-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/114.js#L9-L314)

```diff
-     var wG = ZG(51),
-       SG = ZG(1393),
-       LG = ZG(1151),
-       yG = ZG(80),
-       kG = ZG(3122),
-       UG = ZG(1067);
- 
-     function YG() {
-       return !(0, yG.isMobile)()
-     }
- 
-     function VG(GG) {
-       let {
-         disabled: bG,
-         openFolderPicker: ZG,
-         onFiles: yG
- ... (290 more removed lines; see GitHub link above)
+     var OM = iM(1608),
+       SM = iM(44),
+       jM = iM(1188),
+       aM = iM(1142),
+       PM = iM(1130),
+       nM = iM(2201),
+       QM = iM(1591),
+       zM = iM(1396),
+       LM = iM(1123),
+       mM = iM(19),
+       HM = iM(1520),
+       hM = iM(1398),
+       JM = iM(2805),
+       dM = iM(1627),
+       yM = iM(1303);
+     const lM = [{
+ ... (17 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/114.js` (Changed code · before: `L319-L330` → after: `L45-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731) · [After (L45-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/114.js#L45-L111) · [Before (L319-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/114.js#L319-L330)

```diff
-       } = (0, KG.w)(), [bG, ZG] = GG("shaderPackListing:bloxdhubHelp", {
-         site: oG
-       }).split(oG);
-       return (0, rG.jsxs)("p", {
-         className: "ShaderPackPublishIntro",
-         children: [bG, (0, rG.jsx)("a", {
-           className: "ShaderPackPublishLink",
-           href: SG.e,
-           target: "_blank",
-           rel: "noopener noreferrer",
-           children: SG.b
-         }), ZG]
+       } = (0, jM.A)(), rM = (0, QM.useNavigatePreserveSearch)(), iM = (0, OM.u)(), {
+         isUserContextUpdating: UM
+       } = (0, aM.b)(), GM = (0, nM.e)(), CM = (0, PM.i)(), eM = (bM = iM.pathname).startsWith(dM.q) ? null : bM.startsWith(EM.docs) ? "docs" : bM.startsWith(EM.leaderboard) ? "leaderboard" : "myGames";
+       var bM;
+       const wM = function(MM) {
+         if (!MM.startsWith(dM.q)) return {
+           title: "studio:leaveStudio",
+           icon: "left-from-bracket",
+           to: "/"
+         };
+         const rM = (0, QM.getPreviousLocation)();
+         return {
+           title: "general:back",
+           icon: "arrow-left",
+           to: null !== rM && rM.startsWith(EM.myGames) ? -1 : EM.myGames
+         }
+ ... (51 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/115.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/115.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387)

#### 1. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/115.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/115.js#L2)

```diff
- export const ids = [115, 118, 138, 139];
+ export const ids = [115];
```

#### 2. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/115.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/115.js#L4)

```diff
-   5055: (GG, bG, ZG) => {
+   5306: (MM, rM, iM) => {
```

#### 3. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L6-L8` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/115.js#L6) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/115.js#L6-L8)

```diff
-       e: () => wG.i,
-       f: () => SG,
-       g: () => wG.o
+       b: () => mM
```

#### 4. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L10-L14` → after: `L8-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L8-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/115.js#L8-L45) · [Before (L10-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/115.js#L10-L14)

```diff
-     var wG = ZG(5062);
-     const SG = [!1, !0].flatMap((GG => ["terrain", "liquid", "model"].map((bG => ({
-       strict: GG,
-       program: bG
-     })))))
+     var OM = iM(1116),
+       SM = iM.n(OM),
+       jM = iM(1398),
+       aM = iM(1396),
+       PM = iM(3902),
+       nM = iM(119),
+       QM = iM(3945),
+       zM = iM(3934),
+       LM = iM(1303);
+ 
+     function mM(MM) {
+       let {
+         game: rM
+       } = MM;
+       const iM = (0, nM.is99NightsCrazyGamesBundle)() ? "large" : "small",
+         OM = (0, QM.g)(rM, iM),
+ ... (22 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L16` → after: `L47-L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L47-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/115.js#L47-L229) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/115.js#L16)

```diff
-   40874: (GG, bG, ZG) => {
+   5295: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       default: () => wM
+     });
+     iM(5299);
+     var OM = iM(44),
+       SM = iM(1116),
+       jM = iM.n(SM),
+       aM = iM(313),
+       PM = iM(1088),
+       nM = iM(1229),
+       QM = iM(1188),
+       zM = iM(1142),
+       LM = iM(1573),
+       mM = iM(5306),
+       HM = iM(1520),
+ ... (167 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L18-L19` → after: `L231-L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L231-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/115.js#L231-L232) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/115.js#L18-L19)

```diff
-       c: () => pG,
-       installListedShaderPack: () => VG
+       d: () => aM,
+       f: () => jM
```

#### 7. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L21-L93` → after: `L234-L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L234-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/115.js#L234-L262) · [Before (L21-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/115.js#L21-L93)

```diff
-     var wG = ZG(6561),
-       SG = ZG(5062),
-       LG = ZG(1163),
-       yG = ZG(6608),
-       kG = ZG(5055),
-       UG = ZG(6653),
-       YG = ZG(6645);
-     async function VG(GG) {
-       const bG = await (0, yG.loadPageShaderPackCompiler)();
-       if (null === bG) return {
-         kind: "failed",
-         reason: "compiler"
-       };
-       const ZG = await pG(GG, bG);
-       return "failed" === ZG.kind ? ZG : await (0, UG.saveShaderPack)(ZG.stored, bG) ? ((0, UG.markShaderPackChangePending)(), ZG) : {
-         kind: "failed",
- ... (57 more removed lines; see GitHub link above)
+     var OM = iM(1627),
+       SM = iM(1303);
+ 
+     function jM(MM) {
+       let {
+         thumbnail: rM,
+         name: iM
+       } = MM;
+       return (0, SM.jsxs)("div", {
+         className: "StudioTableGameCell",
+         children: [(0, SM.jsx)("div", {
+           className: "StudioTableThumbnail",
+           children: rM
+         }), (0, SM.jsx)("span", {
+           className: "StudioTableGameName",
+           children: iM
+ ... (13 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L96-L111` → after: `L265-L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L265-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/115.js#L265-L267) · [Before (L96-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/115.js#L96-L111)

```diff
-   6653: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       forgetShaderPackActiveHint: () => IG,
-       isOtherApiVersion: () => iG,
-       isShaderPackActive: () => EG,
-       isShaderPackChangePending: () => uG,
-       markShaderPackChangePending: () => XG,
-       pageShaderPackValidationVersion: () => CG,
-       reconcileStoredShaderPackHint: () => mG,
-       removeShaderPack: () => zG,
-       replaceShaderPack: () => dG,
-       saveShaderPack: () => hG,
-       shaderPackNeedsCheck: () => WG,
-       storedPackOutcome: () => oG,
-       storedShaderPackFiles: () => fG,
-       toStoredShaderPack: () => pG
+   5309: (MM, rM, iM) => {
+     iM.d(rM, {
+       c: () => PM
```

#### 9. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L113-L131` → after: `L269-L272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L269-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/115.js#L269-L272) · [Before (L113-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/115.js#L113-L131)

```diff
-     var wG = ZG(5062),
-       SG = ZG(5055),
-       LG = ZG(29),
-       yG = ZG(3441),
-       kG = ZG(6661),
-       UG = ZG(6627);
-     const YG = "shaderPackChangePending";
-     let VG = null;
- 
-     function pG(GG, bG, ZG) {
-       return {
-         manifest: GG.manifest,
-         files: (0, wG.y)(GG.files),
-         validation: bG,
-         ...ZG && {
-           listing: ZG
- ... (3 more removed lines; see GitHub link above)
+     var OM = iM(44),
+       SM = iM(1116),
+       jM = iM.n(SM),
+       aM = iM(1303);
```

#### 10. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L134-L228` → after: `L275-L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L275-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/115.js#L275-L295) · [Before (L134-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/115.js#L134-L228)

```diff
-       return Object.keys(GG.files).map((bG => ({
-         path: bG,
-         source: GG.files[bG]
-       })))
-     }
-     let QG = Promise.resolve();
- 
-     function KG(GG) {
-       const bG = QG.then(GG);
-       return QG = bG.catch((() => {})), bG
-     }
- 
-     function hG(GG, bG) {
-       return KG((() => JG(GG, bG)))
-     }
- 
- ... (79 more removed lines; see GitHub link above)
+       let {
+         columns: rM,
+         rows: iM,
+         getRowKey: SM,
+         renderRow: PM,
+         className: nM
+       } = MM;
+       return (0, aM.jsxs)("table", {
+         className: jM()("Table", nM),
+         children: [(0, aM.jsx)("thead", {
+           children: (0, aM.jsx)("tr", {
+             children: rM.map((MM => (0, aM.jsx)("th", {
+               children: MM.header
+             }, MM.key)))
+           })
+         }), (0, aM.jsx)("tbody", {
+ ... (5 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L231-L518` → after: `L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/115.js#L298) · [Before (L231-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/115.js#L231-L518)

```diff
-   6627: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       loadShaderPackTextures: () => yG,
-       shaderPackTextures: () => kG
-     });
-     var wG = ZG(5062);
-     let SG = null,
-       LG = null;
- 
-     function yG() {
-       return LG ??= Promise.all([ZG.e(73), ZG.e(190)]).then((() => ZG(40868))).then((GG => {
-         let {
-           FORMER_BLOCK_IMAGE_NAMES: bG,
-           textureNameToIndex: ZG,
-           textureAnimationData: LG
-         } = GG;
- ... (272 more removed lines; see GitHub link above)
+   5299: () => {}
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/116.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/116.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6)

#### 1. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/116.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/116.js#L2)

```diff
- export const ids = [116, 118, 138, 139];
+ export const ids = [116];
```

#### 2. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/116.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/116.js#L4)

```diff
-   5055: (GG, bG, ZG) => {
+   5306: (MM, rM, iM) => {
```

#### 3. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L6-L8` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/116.js#L6) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/116.js#L6-L8)

```diff
-       e: () => wG.i,
-       f: () => SG,
-       g: () => wG.o
+       b: () => mM
```

#### 4. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L10-L16` → after: `L8-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L8-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/116.js#L8-L47) · [Before (L10-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/116.js#L10-L16)

```diff
-     var wG = ZG(5062);
-     const SG = [!1, !0].flatMap((GG => ["terrain", "liquid", "model"].map((bG => ({
-       strict: GG,
-       program: bG
-     })))))
-   },
-   6653: (GG, bG, ZG) => {
+     var OM = iM(1116),
+       SM = iM.n(OM),
+       jM = iM(1398),
+       aM = iM(1396),
+       PM = iM(3902),
+       nM = iM(119),
+       QM = iM(3945),
+       zM = iM(3934),
+       LM = iM(1303);
+ 
+     function mM(MM) {
+       let {
+         game: rM
+       } = MM;
+       const iM = (0, nM.is99NightsCrazyGamesBundle)() ? "large" : "small",
+         OM = (0, QM.g)(rM, iM),
+ ... (24 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L18-L31` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/116.js#L49) · [Before (L18-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/116.js#L18-L31)

```diff
-       forgetShaderPackActiveHint: () => IG,
-       isOtherApiVersion: () => iG,
-       isShaderPackActive: () => EG,
-       isShaderPackChangePending: () => uG,
-       markShaderPackChangePending: () => XG,
-       pageShaderPackValidationVersion: () => CG,
-       reconcileStoredShaderPackHint: () => mG,
-       removeShaderPack: () => zG,
-       replaceShaderPack: () => dG,
-       saveShaderPack: () => hG,
-       shaderPackNeedsCheck: () => WG,
-       storedPackOutcome: () => oG,
-       storedShaderPackFiles: () => fG,
-       toStoredShaderPack: () => pG
+       default: () => fM
```

#### 6. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L33-L48` → after: `L51-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L51-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/116.js#L51-L191) · [Before (L33-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/116.js#L33-L48)

```diff
-     var wG = ZG(5062),
-       SG = ZG(5055),
-       LG = ZG(29),
-       yG = ZG(3441),
-       kG = ZG(6661),
-       UG = ZG(6627);
-     const YG = "shaderPackChangePending";
-     let VG = null;
- 
-     function pG(GG, bG, ZG) {
-       return {
-         manifest: GG.manifest,
-         files: (0, wG.y)(GG.files),
-         validation: bG,
-         ...ZG && {
-           listing: ZG
+     iM(5299);
+     var OM = iM(44),
+       SM = iM(1116),
+       jM = iM.n(SM),
+       aM = iM(313),
+       PM = iM(1088),
+       nM = iM(1229),
+       QM = iM(1067),
+       zM = iM(1188),
+       LM = iM(1573),
+       mM = iM(3955),
+       HM = iM(1142),
+       hM = iM(5306),
+       JM = iM(2818),
+       dM = iM(1520),
+       yM = iM(4945),
+ ... (125 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L50-L151` → after: `L193-L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L193-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/116.js#L193-L398) · [Before (L50-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/116.js#L50-L151)

```diff
-       }
-     }
- 
-     function fG(GG) {
-       return Object.keys(GG.files).map((bG => ({
-         path: bG,
-         source: GG.files[bG]
-       })))
-     }
-     let QG = Promise.resolve();
- 
-     function KG(GG) {
-       const bG = QG.then(GG);
-       return QG = bG.catch((() => {})), bG
-     }
- 
- ... (86 more removed lines; see GitHub link above)
+       }), [bM, TM, VM, xM, vM, jM]);
+       const cM = null !== (MM = null === FM || void 0 === FM ? void 0 : FM.results) && void 0 !== MM ? MM : null,
+         Mr = function(MM, rM, iM) {
+           const [SM, jM] = (0, OM.useState)({}), aM = iM ? (null !== MM && void 0 !== MM ? MM : []).flatMap((MM => "firstPartyGame" === MM.type ? [(0, PM.e)(MM.gameNameWithVariation, !0)] : [])).join(",") : "", nM = (0, OM.useMemo)((() => "" === aM ? [] : aM.split(",")), [aM]);
+           return (0, OM.useEffect)((() => {
+             if (0 === nM.length) return void jM({});
+             let MM = !1;
+             return LM.c.getGamesByAnalyticsIds(rM, nM).then((rM => {
+               MM || jM(rM)
+             })).catch((MM => {
+               console.error("Failed to load first party discoverability for the studio leaderboard", MM)
+             })), () => {
+               MM = !0
+             }
+           }), [nM, rM]), SM
+         }(cM, jM, qM),
+ ... (190 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L153` → after: `L400-L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L400-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/116.js#L400-L435) · [Before (L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/116.js#L153)

```diff
-       b: () => SG,
+       d: () => aM,
+       f: () => jM
+     });
+     var OM = iM(1627),
+       SM = iM(1303);
+ 
+     function jM(MM) {
+       let {
+         thumbnail: rM,
+         name: iM
+       } = MM;
+       return (0, SM.jsxs)("div", {
+         className: "StudioTableGameCell",
+         children: [(0, SM.jsx)("div", {
+           className: "StudioTableThumbnail",
+           children: rM
+ ... (20 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L156-L167` → after: `L438-L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L438-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/116.js#L438-L446) · [Before (L156-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/116.js#L156-L167)

```diff
-     var wG = ZG(29);
-     const SG = "shaderPack";
-     async function LG() {
-       var GG;
-       let bG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-       return null !== (GG = await wG.e.getItem(SG, bG)) && void 0 !== GG ? GG : null
-     }
-   },
-   6627: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       loadShaderPackTextures: () => yG,
-       shaderPackTextures: () => kG
+     const OM = {
+       1: iM(6874),
+       2: iM(6877),
+       3: iM(6883)
+     }
+   },
+   5309: (MM, rM, iM) => {
+     iM.d(rM, {
+       c: () => PM
```

#### 10. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L169-L346` → after: `L448-L467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L448-L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/116.js#L448-L467) · [Before (L169-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/116.js#L169-L346)

```diff
-     var wG = ZG(5062);
-     let SG = null,
-       LG = null;
- 
-     function yG() {
-       return LG ??= Promise.all([ZG.e(73), ZG.e(190)]).then((() => ZG(40868))).then((GG => {
-         let {
-           FORMER_BLOCK_IMAGE_NAMES: bG,
-           textureNameToIndex: ZG,
-           textureAnimationData: LG
-         } = GG;
-         return SG ??= (0, wG.j)(ZG, LG, bG), SG
-       })), LG
-     }
- 
-     function kG() {
- ... (162 more removed lines; see GitHub link above)
+     var OM = iM(44),
+       SM = iM(1116),
+       jM = iM.n(SM),
+       aM = iM(1303);
+ 
+     function PM(MM) {
+       let {
+         columns: rM,
+         rows: iM,
+         getRowKey: SM,
+         renderRow: PM,
+         className: nM
+       } = MM;
+       return (0, aM.jsxs)("table", {
+         className: jM()("Table", nM),
+         children: [(0, aM.jsx)("thead", {
+ ... (4 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L348-L369` → after: `L469-L485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L469-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/116.js#L469-L485) · [Before (L348-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/116.js#L348-L369)

```diff
-         } else fG.set(ZG, hG + 1)
-       }
-       for (const KG of fG.keys()) QG.delete(KG);
-       for (const [KG, hG] of ZG) {
-         const GG = fG.get(hG);
-         void 0 === GG || fG.has(KG) || (fG.set(KG, GG), QG.delete(KG))
-       }
-       return {
-         named: [...fG].sort(((GG, bG) => {
-           let [ZG] = GG, [wG] = bG;
-           return ZG < wG ? -1 : ZG > wG ? 1 : 0
-         })).map((GG => {
-           let [bG, ZG] = GG;
-           return {
-             name: bG,
-             id: ZG
- ... (6 more removed lines; see GitHub link above)
+         }), (0, aM.jsx)("tbody", {
+           children: iM.map((MM => (0, aM.jsx)(OM.Fragment, {
+             children: PM(MM)
+           }, SM(MM))))
+         })]
+       })
+     }
+   },
+   5299: () => {},
+   6874: MM => {
+     MM.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGVJREFUGJVjYKAZ4LF0YGBgYPiPhrErsn9/8v/Tv5//P/37+b/9+5NYFaMowqaYCaby2Z4fDAwMDAwO684xOKw7hyLGwMDAwIhmKlxSyoWD4aCgOVwNskK4YgYGBhRFuAB2HxMLAPX+QYFf3uJZAAAAAElFTkSuQmCC"
+   },
+   6877: MM => {
+     MM.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAKhJREFUOI1jYBhxgJGQAntrHgYGBgaGg0e//EcWDw0NZWRgYGBYvXo1inom6rkNAjBciMtFv18bQhhCEBexMqtgdSlNXYjXRbgAzKUws6juQhZ0AUIu+7HWA6+BtA9DuAthLtr/GatG3rA7WM2iXRiG+AkwMjAwMLCKnsfqUnQX2Whx … [truncated]
+   },
+   6883: MM => {
+ ... (1 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/117.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/117.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41)

#### 1. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/117.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/117.js#L2)

```diff
- export const ids = [117, 118, 138];
+ export const ids = [117];
```

#### 2. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L4-L6` → after: `L4-L240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L4-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/117.js#L4-L240) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/117.js#L4-L6)

```diff
-   5055: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       e: () => wG.i,
+   5306: (MM, rM, iM) => {
+     iM.d(rM, {
+       b: () => mM
+     });
+     var OM = iM(1116),
+       SM = iM.n(OM),
+       jM = iM(1398),
+       aM = iM(1396),
+       PM = iM(3902),
+       nM = iM(119),
+       QM = iM(3945),
+       zM = iM(3934),
+       LM = iM(1303);
+ 
+     function mM(MM) {
+       let {
+ ... (221 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L8-L10` → after: `L242-L769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L242-L769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/117.js#L242-L769) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/117.js#L8-L10)

```diff
-       g: () => wG.o
-     });
-     var wG = ZG(5062);
+       h: () => JM,
+       j: () => EM
+     });
+     var OM = iM(44),
+       SM = iM(5403),
+       jM = iM(4720),
+       aM = iM(1440),
+       PM = iM(5417),
+       nM = iM(1116),
+       QM = iM.n(nM),
+       zM = iM(1429),
+       LM = iM(1830),
+       mM = iM(5419),
+       HM = iM(1303);
+ 
+     function hM(MM) {
+ ... (512 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L16-L136` → after: `L775-L812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L775-L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/117.js#L775-L812) · [Before (L16-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/117.js#L16-L136)

```diff
-   39633: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       ShaderPackPage: () => UG,
-       harnessShaderPackMode: () => fG,
-       setHarnessUrlShaderPack: () => pG,
-       shaderPackPage: () => VG
-     });
-     var wG = ZG(80),
-       SG = ZG(29),
-       LG = (ZG(3444), ZG(5055), ZG(3441)),
-       yG = ZG(6661);
-     ZG(6627);
-     const kG = {
-       status: "none"
-     };
-     class UG {
- ... (105 more removed lines; see GitHub link above)
+   5463: (MM, rM, iM) => {
+     function OM(MM, rM) {
+       return SM(MM, rM)
+     }
+ 
+     function SM(MM, rM) {
+       if (MM === rM) return !0;
+       if ("object" !== typeof MM || "object" !== typeof rM || null === MM || null === rM || Array.isArray(MM) !== Array.isArray(rM)) return !1;
+       const iM = MM,
+         OM = rM,
+         jM = Object.keys(iM);
+       return jM.length === Object.keys(OM).length && jM.every((MM => Object.prototype.hasOwnProperty.call(OM, MM) && SM(iM[MM], OM[MM])))
+     }
+     iM.d(rM, {
+       d: () => OM
+     })
+ ... (22 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L138-L139` → after: `L814-L815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L814-L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/117.js#L814-L815) · [Before (L138-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/117.js#L138-L139)

```diff
-       h: () => yG,
-       i: () => wG,
+       f: () => aM,
+       g: () => OM,
```

#### 6. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L143-L145` → after: `L819-L822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L819-L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/117.js#L819-L822) · [Before (L143-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/117.js#L143-L145)

```diff
-       s: () => LG,
-       u: () => YG,
-       y: () => VG
+       q: () => jM,
+       t: () => QM,
+       w: () => zM,
+       z: () => mM
```

#### 7. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L164` → after: `L841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/117.js#L841) · [Before (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/117.js#L164)

```diff
-         if ("string" !== typeof wG) return `${ZG} isn't text.`;
+         if ("string" !== typeof OM) return `${iM} isn't text.`;
```

#### 8. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L173` → after: `L850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/117.js#L850) · [Before (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/117.js#L173)

```diff
-           if (GG.length > kG) return `The pack has more than ${kG} .wgsl files.`;
+           if (MM.length > PM) return `The pack has more than ${PM} .wgsl files.`;
```

#### 9. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L181` → after: `L858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/117.js#L858) · [Before (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/117.js#L181)

```diff
-             if (bG.has(ZG)) return `The pack has two files at ${ZG}.`;
+             if (rM.has(iM)) return `The pack has two files at ${iM}.`;
```

#### 10. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L184` → after: `L861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/117.js#L861) · [Before (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/117.js#L184)

```diff
-           return fG(GG) > yG ? `The pack's .wgsl files are over ${yG/1024} KB in total.` : null
+           return mM(MM) > aM ? `The pack's .wgsl files are over ${aM/1024} KB in total.` : null
```

#### 11. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L209-L212` → after: `L886-L889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L886-L889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/117.js#L886-L889) · [Before (L209-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/117.js#L209-L212)

```diff
-       if (!GG.toLowerCase().endsWith(".wgsl")) return `${GG} isn't a .wgsl file.`;
-       if (GG.length > UG) return `A file path is over ${UG} characters.`;
-       if (GG.includes("\\") || /[\u0000-\u001f]/.test(GG)) return `${GG} isn't a valid file path.`;
-       return GG.split("/").some((GG => "" === GG || "." === GG || ".." === GG)) ? `${GG} isn't a valid file path.` : null
+       if (!MM.toLowerCase().endsWith(".wgsl")) return `${MM} isn't a .wgsl file.`;
+       if (MM.length > nM) return `A file path is over ${nM} characters.`;
+       if (MM.includes("\\") || /[\u0000-\u001f]/.test(MM)) return `${MM} isn't a valid file path.`;
+       return MM.split("/").some((MM => "" === MM || "." === MM || ".." === MM)) ? `${MM} isn't a valid file path.` : null
```

#### 12. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L245` → after: `L922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/117.js#L922) · [Before (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/117.js#L245)

```diff
-           return (bG[ZG]?.numAnimStates ?? 0) > 1 && !kG.has(wG) ? wG : GG
+           return (rM[iM]?.numAnimStates ?? 0) > 1 && !PM.has(OM) ? OM : MM
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/118.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/118.js` (28 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29)

#### 1. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/118.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/118.js#L2)

```diff
- export const ids = [118, 138];
+ export const ids = [118];
```

#### 2. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L4-L7` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/118.js#L4-L6) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/118.js#L4-L7)

```diff
-   6627: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       loadShaderPackTextures: () => yG,
-       shaderPackTextures: () => kG
+   6982: (MM, rM, iM) => {
+     iM.d(rM, {
+       b: () => lM
```

#### 3. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L9-L11` → after: `L8-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L8-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/118.js#L8-L19) · [Before (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/118.js#L9-L11)

```diff
-     var wG = ZG(5062);
-     let SG = null,
-       LG = null;
+     var OM = iM(44),
+       SM = iM(1520),
+       jM = iM(1573),
+       aM = iM(3881),
+       PM = iM(1142),
+       nM = iM(1396),
+       QM = iM(1440),
+       zM = iM(1398),
+       LM = iM(1116),
+       mM = iM.n(LM),
+       HM = iM(6975),
+       hM = iM(1303);
```

#### 4. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L13-L21` → after: `L21-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L21-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/118.js#L21-L63) · [Before (L13-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/118.js#L13-L21)

```diff
-     function yG() {
-       return LG ??= Promise.all([ZG.e(73), ZG.e(190)]).then((() => ZG(40868))).then((GG => {
-         let {
-           FORMER_BLOCK_IMAGE_NAMES: bG,
-           textureNameToIndex: ZG,
-           textureAnimationData: LG
-         } = GG;
-         return SG ??= (0, wG.j)(ZG, LG, bG), SG
-       })), LG
+     function JM(MM) {
+       let {
+         info: rM,
+         className: iM
+       } = MM;
+       const {
+         statusText: OM,
+         rowText: SM
+       } = (0, HM.f)();
+       return (0, hM.jsxs)("div", {
+         className: mM()("GameApprovalInfoDetails", iM),
+         children: [(0, hM.jsxs)("div", {
+           className: mM()("GameApprovalInfoSummary", rM.overallPassed ? "Passed" : "Failed"),
+           children: [(0, hM.jsx)(zM.b, {
+             name: rM.overallPassed ? "circle-check" : "circle-xmark"
+           }), (0, hM.jsx)("span", {
+ ... (27 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L24-L26` → after: `L68-L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L68-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/118.js#L68-L169) · [Before (L24-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/118.js#L24-L26)

```diff
-     function kG() {
-       if (null === SG) throw new Error("Shader pack textures read before loadShaderPackTextures");
-       return SG
+     function lM(MM) {
+       yM.NotificationProvider.showCustomPopup({
+         body: () => (0, hM.jsx)(EM, {
+           ...MM
+         }),
+         middleScreenPopupClassName: "ApprovalInfoPopup",
+         onClose: () => {},
+         unlockPointerKey: "approvalInfoPopup"
+       })
+     }
+ 
+     function EM(MM) {
+       let {
+         schematicId: rM,
+         canOverride: iM,
+         onApprovalChanged: LM
+ ... (86 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L29` → after: `L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/118.js#L172) · [Before (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/118.js#L29)

```diff
-   5062: (GG, bG, ZG) => {
+   6975: (MM, rM, iM) => {
```

#### 7. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L31-L40` → after: `L174-L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L174-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/118.js#L174-L175) · [Before (L31-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/118.js#L31-L40)

```diff
-       A: () => fG,
-       d: () => kG,
-       h: () => yG,
-       i: () => wG,
-       j: () => hG,
-       k: () => pG,
-       o: () => SG,
-       s: () => LG,
-       u: () => YG,
-       y: () => VG
+       e: () => PM,
+       f: () => aM
```

#### 8. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L42` → after: `L177-L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L177-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/118.js#L177-L248) · [Before (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/118.js#L42)

```diff
-     const wG = 5;
+     var OM = iM(332),
+       SM = iM(1188);
+     const jM = {
+       manuallyApproved: "studio:approvalStatusManuallyApproved",
+       manuallyAndAutoApproved: "studio:approvalStatusManuallyAndAutoApproved",
+       manuallyDenied: "studio:approvalStatusManuallyDenied",
+       autoApproved: "studio:approvalStatusAutoApproved",
+       notApproved: "studio:approvalStatusNotApproved",
+       notIndexed: "studio:approvalStatusNotIndexed"
+     };
+ 
+     function aM() {
+       const {
+         t: MM,
+         selectedLanguage: rM
+       } = (0, SM.A)();
+ ... (56 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L45` → after: `L251-L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L251-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/118.js#L251-L314) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/118.js#L45)

```diff
-       return GG === wG
+       return null === MM.manualOverride && MM.rows.some((MM => "reportHold" === MM.kind && !MM.passed))
+     }
+   },
+   5326: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       default: () => CX
+     });
+     var OM = iM(44),
+       SM = iM(1608),
+       jM = iM(1116),
+       aM = iM.n(jM),
+       PM = iM(1088),
+       nM = iM(1229),
+       QM = iM(1073),
+       zM = iM(332),
+       LM = iM(1630),
+ ... (48 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L49` → after: `L349-L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L349-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/118.js#L349-L357) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/118.js#L49)

```diff
-       return [...GG.features]
+       if (null === MM) return "";
+       if ("number" === typeof MM) return Number.isFinite(MM) ? String(MM) : "";
+       const rM = Mr.test(MM) ? `'${MM}` : MM;
+       return /[",\r\n]/.test(rM) ? `"${rM.replace(/"/g,'""')}"` : rM
+     }
+ 
+     function ir(MM, rM) {
+       const iM = new Date(MM).toISOString();
+       return "1d" === rM ? iM.slice(0, 10) : iM.replace(/\.\d{3}Z$/, "Z")
```

#### 11. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L51-L53` → after: `L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/118.js#L359) · [Before (L51-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/118.js#L51-L53)

```diff
-     const yG = 262144,
-       kG = 256,
-       UG = 256;
+     const Or = /[\\/:*?"<>|\u0000-\u001f]/g;
```

#### 12. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L56-L62` → after: `L362-L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L362-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/118.js#L362-L390) · [Before (L56-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/118.js#L56-L62)

```diff
-       if ("object" !== typeof GG || null === GG || Array.isArray(GG)) return "The pack has no files.";
-       const bG = [];
-       for (const [ZG, wG] of Object.entries(GG)) {
-         if ("string" !== typeof wG) return `${ZG} isn't text.`;
-         bG.push({
-           path: ZG,
-           source: wG
+       return MM.replace(Or, "").replace(/ {2,}/g, " ").trim()
+     }
+     var jr = iM(1830),
+       ar = iM(1303);
+ 
+     function Pr(MM) {
+       let {
+         icon: rM,
+         label: iM,
+         onClick: OM,
+         disabled: SM = !1,
+         active: jM = !1,
+         small: aM = !1
+       } = MM;
+       return (0, ar.jsx)(ZM.i, {
+         tooltipInner: iM,
+ ... (13 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L65-L77` → after: `L541-L584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L541-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/118.js#L541-L584) · [Before (L65-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/118.js#L65-L77)

```diff
-       return bG.sort(((GG, bG) => pG(GG.path, bG.path))),
-         function(GG) {
-           if (0 === GG.length) return "The pack has no .wgsl files.";
-           if (GG.length > kG) return `The pack has more than ${kG} .wgsl files.`;
-           const bG = new Set;
-           for (const {
-               path: ZG
-             }
-             of GG) {
-             const GG = QG(ZG);
-             if (null !== GG) return GG;
-             if (bG.has(ZG)) return `The pack has two files at ${ZG}.`;
-             bG.add(ZG)
+     }
+ 
+     function Cr(MM) {
+       let {
+         viewBox: rM,
+         text: iM,
+         alignLeft: OM
+       } = MM;
+       return void 0 === (null === rM || void 0 === rM ? void 0 : rM.x) || void 0 === rM.y ? null : (0, ar.jsx)("text", {
+         className: "StudioStatsChartMarkerLabel",
+         x: rM.x + (OM ? -5 : 5),
+         y: rM.y + 10,
+         textAnchor: OM ? "end" : "start",
+         children: iM
+       })
+     }
+ ... (28 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L79-L80` → after: `L586-L596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L586-L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/118.js#L586-L596) · [Before (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/118.js#L79-L80)

```diff
-           return fG(GG) > yG ? `The pack's .wgsl files are over ${yG/1024} KB in total.` : null
-         }(bG) ?? bG
+         }), SM, void 0 !== jM && (0, ar.jsx)("span", {
+           ...(0, EM.fb)(),
+           className: "StudioStatsChartLegendRemove",
+           title: PM("general:remove"),
+           "aria-label": PM("general:remove"),
+           onClick: jM,
+           children: (0, ar.jsx)(UM.b, {
+             name: "x"
+           })
+         })]
+       })
```

#### 15. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L84-L86` → after: `L600-L926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L600-L926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/118.js#L600-L926) · [Before (L84-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/118.js#L84-L86)

```diff
-       const bG = {};
-       for (const ZG of GG) bG[ZG.path] = ZG.source;
-       return bG
+       let {
+         seriesLabel: rM,
+         seriesColour: iM,
+         comparisonLabel: OM,
+         comparisonIsBand: SM,
+         lines: jM
+       } = MM;
+       const {
+         t: aM
+       } = (0, HM.A)();
+       return (0, ar.jsxs)("div", {
+         className: "StudioStatsChartLegend SmallTextLight",
+         children: [void 0 !== rM && void 0 !== iM && (0, ar.jsx)(br, {
+           colour: iM,
+           isFill: !0,
+           label: rM
+ ... (311 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L90` → after: `L949-L978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L949-L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/118.js#L949-L978) · [Before (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/118.js#L90)

```diff
-       return GG < bG ? -1 : GG > bG ? 1 : 0
+       void 0 === Yr && (Yr = document.createElement("canvas").getContext("2d"));
+       const iM = getComputedStyle(rM),
+         OM = parseFloat(iM.letterSpacing) || 0,
+         SM = Yr;
+       return MM.map((MM => null === SM ? MM.length * Rr * .65 : (SM.font = `${iM.fontStyle} ${iM.fontWeight} ${Rr}px ${iM.fontFamily}`, SM.measureText(MM).width + OM * MM.length)))
+     }
+ 
+     function Ar(MM, rM, iM) {
+       const OM = rM / MM.length;
+       if (Math.max(0, ...Nr(MM, iM)) + Dr <= OM) return {
+         rotated: !1,
+         texts: MM,
+         xAxisHeight: sr
+       };
+       const SM = MM.map((MM => function(MM, rM, iM) {
+           if (Nr([MM], iM)[0] <= rM) return MM;
+ ... (14 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L94-L97` → after: `L982-L1047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L982-L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/118.js#L982-L1047) · [Before (L94-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/118.js#L94-L97)

```diff
-       const bG = new TextEncoder;
-       let ZG = 0;
-       for (const {
-           source: wG
+       var rM, iM;
+       let {
+         x: OM = 0,
+         y: SM = 0,
+         index: jM = 0,
+         fill: aM,
+         layout: PM,
+         labels: nM,
+         openedIndex: QM
+       } = MM;
+       const zM = null !== (rM = PM.texts[jM]) && void 0 !== rM ? rM : "",
+         LM = null !== (iM = nM[jM]) && void 0 !== iM ? iM : "",
+         mM = jM === QM ? "bold" : void 0,
+         HM = zM !== LM ? (0, ar.jsx)("title", {
+           children: LM
+         }) : null;
+ ... (50 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L99-L100` → after: `L1049-L1141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R1049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L1049-L1141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/118.js#L1049-L1141) · [Before (L99-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/118.js#L99-L100)

```diff
-         of GG) ZG += bG.encode(wG).byteLength;
-       return ZG
+       }), [JM]);
+       const dM = nM + fr.left + fr.right,
+         yM = dM + SM.length * kr,
+         lM = Math.max(null !== (rM = null === HM || void 0 === HM ? void 0 : HM.width) && void 0 !== rM ? rM : 0, yM),
+         EM = (0, OM.useMemo)((() => SM.map((MM => MM.label))), [SM]),
+         UM = (0, OM.useMemo)((() => null === HM || null === mM.current ? null : Ar(EM, lM - dM, mM.current)), [EM, HM, lM, dM]),
+         GM = (null !== (iM = null === UM || void 0 === UM ? void 0 : UM.xAxisHeight) && void 0 !== iM ? iM : sr) - sr,
+         CM = null !== HM && yM > HM.width,
+         eM = null === zM ? -1 : SM.findIndex((MM => MM.raw === zM)),
+         bM = (0, OM.useRef)(null);
+       return (0, OM.useLayoutEffect)((() => {
+         const MM = mM.current;
+         if (null === MM || !CM || -1 === eM || bM.current === LM) return;
+         bM.current = LM;
+         const rM = (lM - dM) / EM.length;
+         MM.scrollLeft = nM + fr.left + (eM + .5) * rM - MM.clientWidth / 2
+ ... (77 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L104-L107` → after: `L1145-L1335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R1145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L1145-L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/118.js#L1145-L1335) · [Before (L104-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/118.js#L104-L107)

```diff
-       if (!GG.toLowerCase().endsWith(".wgsl")) return `${GG} isn't a .wgsl file.`;
-       if (GG.length > UG) return `A file path is over ${UG} characters.`;
-       if (GG.includes("\\") || /[\u0000-\u001f]/.test(GG)) return `${GG} isn't a valid file path.`;
-       return GG.split("/").some((GG => "" === GG || "." === GG || ".." === GG)) ? `${GG} isn't a valid file path.` : null
+       if (!(MM.target instanceof Element)) return;
+       const rM = MM.target.closest(".Dropdown-root");
+       if (!(rM instanceof HTMLElement)) return;
+       let iM = 0;
+       const OM = rM.closest(".StudioStatsChart");
+       null !== OM && (iM = OM.getBoundingClientRect().left + parseFloat(getComputedStyle(OM).paddingLeft)), rM.style.setProperty("--studio-filter-menu-max-width", rM.getBoundingClientRect().right - iM + "px")
+     }
+ 
+     function Xr(MM) {
+       let {
+         children: rM
+       } = MM;
+       return (0, ar.jsx)("div", {
+         className: "StudioStatsBarChartFilters",
+         onMouseDownCapture: Br,
+         onTouchEndCapture: Br,
+ ... (175 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L109` → after: `L1337-L1339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R1337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L1337-L1339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/118.js#L1337-L1339) · [Before (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/118.js#L109)

```diff
-     const KG = /^(.*)\[rot\[([1-4])$/;
+     const Kr = 48,
+       qr = 22,
+       Tr = 14;
```

#### 21. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L112` → after: `L1342-L1346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R1342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L1342-L1346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/118.js#L1342-L1346) · [Before (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/118.js#L112)

```diff
-       let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
+       const iM = MM.filter((MM => Math.round(MM.position) === rM)).map((MM => Number.isInteger(MM.position) ? MM.key : `${MM.key} (${MM.position})`));
+       return iM.length > 0 ? iM.join("; ") : null
+     }
+ 
+     function cr(MM) {
```

#### 22. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L114-L119` → after: `L1348-L1461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R1348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L1348-L1461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/118.js#L1348-L1461) · [Before (L114-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/118.js#L114-L119)

```diff
-       bG.forEach(((GG, bG) => {
-         let {
-           numAnimStates: ZG,
-           animStartIdx: SG
-         } = GG;
-         for (let LG = 1; LG < ZG; LG++) wG.set(SG + LG - 1, bG)
+       return null === MM || void 0 === MM || MM.points.forEach((MM => {
+         rM.set(MM.minute, MM)
+       })), rM
+     }
+ 
+     function Mi(MM) {
+       let {
+         active: rM,
+         payload: iM,
+         maxBucketMinute: OM,
+         totalSessions: SM,
+         comparisonLabel: jM,
+         clickable: aM,
+         lines: PM
+       } = MM;
+       const {
+ ... (98 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L121-L125` → after: `L1463-L1673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R1463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L1463-L1673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/118.js#L1463-L1673) · [Before (L121-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/118.js#L121-L125)

```diff
-       const SG = Object.entries(GG),
-         LG = new Map;
-       for (const [hG, dG] of SG) {
-         const GG = KG.exec(hG);
-         "1" === GG?.[2] && LG.set(GG[1], dG + 1)
+       let uM = null !== QM && void 0 !== QM ? QM : gM;
+       void 0 !== QM && void 0 !== gM && (uM = (0, ar.jsxs)(ar.Fragment, {
+         children: [QM, gM]
+       }));
+       const RM = VM.dropoff,
+         pM = yM.reduce(((MM, rM) => {
+           var iM, OM;
+           return Math.max(MM, null !== (iM = null === (OM = rM.curve) || void 0 === OM ? void 0 : OM.maxBucketMinute) && void 0 !== iM ? iM : 0)
+         }), null !== (rM = null === nM || void 0 === nM ? void 0 : nM.maxBucketMinute) && void 0 !== rM ? rM : 0),
+         WM = function(MM, rM, iM, OM) {
+           if ([MM, ...iM.map((MM => MM.curve))].every((MM => null === MM))) return [];
+           const SM = new Map;
+           null === rM || void 0 === rM || rM.survivalPercents.forEach(((MM, rM) => {
+             SM.set(rM, MM)
+           }));
+           const jM = cr(MM),
+ ... (195 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L127-L132` → after: `L1675-L1693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R1675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L1675-L1693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/118.js#L1675-L1693) · [Before (L127-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/118.js#L127-L132)

```diff
-       const yG = GG => {
-           const bG = KG.exec(GG);
-           return bG && LG.has(bG[1]) ? {
-             root: bG[1],
-             rotation: Number(bG[2]) - 1
-           } : null
+     }
+     const Si = {
+         p20: null,
+         p50: null,
+         p80: null
+       },
+       ji = 864e5;
+ 
+     function ai(MM) {
+       const rM = (0, Hr.G)(MM.rankingWindow),
+         iM = MM.sessionDurationHistogram ? (0, Hr.O)(MM.sessionDurationHistogram.sessionCounts, MM.sessionDurationHistogram.maxBucketMinute) : null;
+       return {
+         endDay: MM.endDay,
+         kind: "game",
+         points: (0, Hr.P)(MM).map(Pi),
+         ranking: {
+ ... (3 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L134-L140` → after: `L1695-L1697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R1695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L1695-L1697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/118.js#L1695-L1697) · [Before (L134-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/118.js#L134-L140)

```diff
-         kG = new Set(SG.map((GG => {
-           let [bG] = GG;
-           return yG(bG)?.root ?? bG
-         }))),
-         UG = (GG, ZG) => {
-           const wG = GG.replace(/_?0$/, "");
-           return (bG[ZG]?.numAnimStates ?? 0) > 1 && !kG.has(wG) ? wG : GG
+         dropoffCurve: null === iM ? null : {
+           maxBucketMinute: iM.maxBucketMinute,
+           survivalPercents: iM.points.map((MM => Oi(MM.percent)))
```

#### 26. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L142-L188` → after: `L1699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R1699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L1699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/118.js#L1699) · [Before (L142-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/118.js#L142-L188)

```diff
-         YG = new Map;
-       for (const [KG, hG] of SG) YG.set(hG, UG(yG(KG)?.root ?? KG, hG));
-       const VG = SG.reduce(((GG, bG) => {
-           let [, ZG] = bG;
-           return Math.max(GG, ZG + 1)
-         }), 0),
-         pG = Array.from({
-           length: VG
-         }, ((GG, bG) => ({
-           id: bG + 1,
-           rotation: 0
-         }))),
-         fG = new Map,
-         QG = new Map;
-       for (const [KG, hG] of SG) {
-         const GG = yG(KG),
- ... (31 more removed lines; see GitHub link above)
+         scope: null
```

#### 27. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L190-L193` → after: `L1701-L1709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R1701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L1701-L1709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/118.js#L1701-L1709) · [Before (L190-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/118.js#L190-L193)

```diff
-       for (const KG of fG.keys()) QG.delete(KG);
-       for (const [KG, hG] of ZG) {
-         const GG = fG.get(hG);
-         void 0 === GG || fG.has(KG) || (fG.set(KG, GG), QG.delete(KG))
+     }
+ 
+     function Pi(MM) {
+       return {
+         dateMs: MM.dateMs,
+         plays: Oi(MM.plays),
+         uniquePlayers: Oi(MM.uniquePlayers),
+         avgSessionMs: Oi(MM.avgSessionMs),
+         sessionsPerPlayer: Oi(MM.sessionsPerPlayer)
```

#### 28. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L196-L207` → after: `L1725-L32200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R1725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L1725-L32200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/118.js#L1725-L32200) · [Before (L196-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/118.js#L196-L207)

```diff
-         named: [...fG].sort(((GG, bG) => {
-           let [ZG] = GG, [wG] = bG;
-           return ZG < wG ? -1 : ZG > wG ? 1 : 0
-         })).map((GG => {
-           let [bG, ZG] = GG;
-           return {
-             name: bG,
-             id: ZG
-           }
-         })),
-         aliases: [...QG.values()],
-         layers: pG
+         endDay: MM.endDay,
+         kind: "percentiles",
+         points: OM,
+         ranking: {
+           avgDailyPlays: MM.rankingWindow.dailyPlays,
+           avgSessionMs: MM.rankingWindow.sessionMs,
+           sessionsPerPlayer: MM.rankingWindow.sessionsPerPlayer
+         },
+         dropoffCurve: null === SM ? null : {
+           maxBucketMinute: SM.maxBucketMinute,
+           survivalPercents: SM.survivalPercents
+         },
+         scope: MM.scope
+       }
+     }
+ 
+ ... (30460 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/119.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/119.js` (66 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050)

#### 1. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5-L19187` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L4) · [Before (L5-L19187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L5-L19187)

```diff
-   6224: function(GG, bG, ZG) {
-     var wG;
-     ! function() {
-       var SG, LG = 1e9,
-         yG = {
-           precision: 20,
-           rounding: 4,
-           toExpNeg: -7,
-           toExpPos: 21,
-           LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
-         },
-         kG = !0,
-         UG = "[DecimalError] ",
-         YG = UG + "Invalid argument: ",
-         VG = UG + "Exponent out of range: ",
-         pG = Math.floor,
- ... (19167 more removed lines; see GitHub link above)
+   5343: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19192` → after: `L10-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L10-L17) · [Before (L19192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L19192)

```diff
-     var wG = ZG(5983);
+     iM(5348);
+     var OM = iM(1188),
+       SM = iM(1116),
+       jM = iM.n(SM),
+       aM = iM(1440),
+       PM = (iM(44), iM(4720)),
+       nM = iM(1398),
+       QM = iM(1303);
```

#### 3. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19195-L19210` → after: `L20-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L20-L51) · [Before (L19195-L19210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L19195-L19210)

```diff
-       return SG = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(GG) {
-         return typeof GG
-       } : function(GG) {
-         return GG && "function" == typeof Symbol && GG.constructor === Symbol && GG !== Symbol.prototype ? "symbol" : typeof GG
-       }, SG(GG)
-     }
- 
-     function LG(GG, bG) {
-       var ZG = Object.keys(GG);
-       if (Object.getOwnPropertySymbols) {
-         var wG = Object.getOwnPropertySymbols(GG);
-         bG && (wG = wG.filter((function(bG) {
-           return Object.getOwnPropertyDescriptor(GG, bG).enumerable
-         }))), ZG.push.apply(ZG, wG)
-       }
-       return ZG
+       let {
+         children: rM,
+         label: iM,
+         className: SM,
+         circleInfoText: PM,
+         disabled: zM,
+         onLabelClick: LM
+       } = MM;
+       const {
+         t: mM
+       } = (0, OM.A)(), HM = (0, QM.jsxs)("div", {
+         className: jM()("Label", {
+           ClickableLabel: void 0 !== LM
+         }),
+         onClick: LM,
+         children: [mM(iM), PM && (0, QM.jsx)(nM.b, {
+ ... (16 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19214-L19222` → after: `L55-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L55-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L55-L72) · [Before (L19214-L19222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L19214-L19222)

```diff
-       for (var bG = 1; bG < arguments.length; bG++) {
-         var ZG = null != arguments[bG] ? arguments[bG] : {};
-         bG % 2 ? LG(Object(ZG), !0).forEach((function(bG) {
-           kG(GG, bG, ZG[bG])
-         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(GG, Object.getOwnPropertyDescriptors(ZG)) : LG(Object(ZG)).forEach((function(bG) {
-           Object.defineProperty(GG, bG, Object.getOwnPropertyDescriptor(ZG, bG))
-         }))
-       }
-       return GG
+       let {
+         checked: rM,
+         setChecked: iM
+       } = MM;
+       return (0, QM.jsx)("div", {
+         className: "OtherInput ClickableOtherInput",
+         "data-pad-focusable": !0,
+         onClick: MM => {
+           iM(!rM)
+         },
+         children: (0, QM.jsx)(PM.c, {
+           checked: rM,
+           onChange: MM => {
+             iM(MM.target.checked)
+           },
+           disabled: !1
+ ... (2 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19225-L19243` → after: `L75-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L75-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L75-L96) · [Before (L19225-L19243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L19225-L19243)

```diff
-     function kG(GG, bG, ZG) {
-       return (bG = function(GG) {
-         var bG = function(GG, bG) {
-           if ("object" != SG(GG) || !GG) return GG;
-           var ZG = GG[Symbol.toPrimitive];
-           if (void 0 !== ZG) {
-             var wG = ZG.call(GG, bG || "default");
-             if ("object" != SG(wG)) return wG;
-             throw new TypeError("@@toPrimitive must return a primitive value.")
-           }
-           return ("string" === bG ? String : Number)(GG)
-         }(GG, "string");
-         return "symbol" == SG(bG) ? bG : bG + ""
-       }(bG)) in GG ? Object.defineProperty(GG, bG, {
-         value: ZG,
-         enumerable: !0,
- ... (3 more removed lines; see GitHub link above)
+     function mM(MM) {
+       let {
+         checked: rM,
+         setChecked: iM,
+         disabled: OM
+       } = MM;
+       return (0, QM.jsx)("div", {
+         className: jM()("SwitchContainer", {
+           SwitchContainerDisabled: OM
+         }),
+         onClick: () => {
+           OM || iM(!rM)
+         },
+         children: (0, QM.jsx)(PM.c, {
+           className: "SwitchCheckbox",
+           checked: rM,
+ ... (6 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19301` → after: `L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L99) · [Before (L19301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L19301)

```diff
-   5176: (GG, bG, ZG) => {
+   5356: (MM, rM, iM) => {
```

#### 7. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19303-L19315` → after: `L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L101) · [Before (L19303-L19315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L19303-L19315)

```diff
-       B: () => QG,
-       F: () => zG,
-       c: () => WG,
-       d: () => iG,
-       g: () => oG,
-       k: () => CG,
-       l: () => EG,
-       o: () => XG,
-       q: () => uG,
-       s: () => dG,
-       t: () => JG,
-       x: () => hG,
-       y: () => KG
+       b: () => QM
```

#### 8. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19317-L19319` → after: `L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L103) · [Before (L19317-L19319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L19317-L19319)

```diff
-     var wG = ZG(5179),
-       SG = ZG.n(wG),
-       LG = ZG(5196),
+     var OM = iM(1116),
```

#### 9. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19321-L19376` → after: `L105-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L105-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L105-L108) · [Before (L19321-L19376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L19321-L19376)

```diff
-       kG = ZG(5203),
-       UG = ZG.n(kG),
-       YG = ZG(5200),
-       VG = ZG.n(YG),
-       pG = ZG(5441),
-       fG = ZG.n(pG),
-       QG = function(GG) {
-         return 0 === GG ? 0 : GG > 0 ? 1 : -1
-       },
-       KG = function(GG) {
-         return SG()(GG) && GG.indexOf("%") === GG.length - 1
-       },
-       hG = function(GG) {
-         return VG()(GG) && !yG()(GG)
-       },
-       dG = function(GG) {
- ... (40 more removed lines; see GitHub link above)
+       jM = iM(5003),
+       aM = iM(1188),
+       PM = iM(1303);
+     const nM = [...jM.m, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];
```

#### 10. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19378-L19381` → after: `L110-L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L110-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L110-L135) · [Before (L19378-L19381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L19378-L19381)

```diff
-     function iG(GG, bG, ZG) {
-       return GG && GG.length ? GG.find((function(GG) {
-         return GG && ("function" === typeof bG ? bG(GG) : UG()(GG, bG)) === ZG
-       })) : null
+     function QM(MM) {
+       const {
+         disabled: rM,
+         hideWrapper: iM
+       } = MM, {
+         t: OM
+       } = (0, aM.A)(), QM = MM.advancedMode ? nM.map((rM => [rM, MM.callbacks[rM]])) : jM.m.map((rM => [rM, MM.callbacks[rM]])), LM = (0, PM.jsx)("div", {
+         className: SM()("PluginsGrid", {
+           SectionBody: !iM
+         }),
+         children: QM.map((MM => {
+           let [iM, OM] = MM;
+           return (0, PM.jsx)(zM, {
+             plugin: iM,
+             callbacks: OM,
+             disabled: rM
+ ... (10 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19383-L19405` → after: `L137-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L137-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L137-L188) · [Before (L19383-L19405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L19383-L19405)

```diff
-     var CG = function(GG) {
-         if (!GG || !GG.length) return null;
-         for (var bG = GG.length, ZG = 0, wG = 0, SG = 0, LG = 0, yG = 1 / 0, kG = -1 / 0, UG = 0, YG = 0, VG = 0; VG < bG; VG++) ZG += UG = GG[VG].cx || 0, wG += YG = GG[VG].cy || 0, SG += UG * YG, LG += UG * UG, yG = Math.min(yG, UG), kG = Math.max(kG, UG);
-         var pG = bG * LG !== ZG * ZG ? (bG * SG - ZG * wG) / (bG * LG - ZG * ZG) : 0;
-         return {
-           xmin: yG,
-           xmax: kG,
-           a: pG,
-           b: (wG - pG * ZG) / bG
-         }
-       },
-       WG = function(GG, bG) {
-         return hG(GG) && hG(bG) ? GG - bG : SG()(GG) && SG()(bG) ? GG.localeCompare(bG) : GG instanceof Date && bG instanceof Date ? GG.getTime() - bG.getTime() : String(GG).localeCompare(String(bG))
-       }
-   },
-   5983: (GG, bG, ZG) => {
- ... (7 more removed lines; see GitHub link above)
+ 
+     function zM(MM) {
+       let {
+         plugin: rM,
+         callbacks: {
+           isEnabled: iM,
+           kR: OM
+         },
+         disabled: jM
+       } = MM;
+       const {
+         t: nM
+       } = (0, aM.A)(), QM = iM();
+       return (0, PM.jsxs)("div", {
+         className: SM()("PluginCard", {
+           PluginCardEnabled: QM,
+ ... (36 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19407-L19414` → after: `L190-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L190-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L190-L197) · [Before (L19407-L19414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L19407-L19414)

```diff
-       set: function(GG, bG) {
-         if ("string" === typeof GG) wG[GG] = bG;
-         else {
-           var ZG = Object.keys(GG);
-           ZG && ZG.length && ZG.forEach((function(bG) {
-             wG[bG] = GG[bG]
-           }))
-         }
+       mM = {
+         fallDamage: "classic:enableFallDamageDescription",
+         tpRequests: "classic:enableTpRequestsDescription",
+         spawnProtection: "classic:enableSpawnProtectionDescription",
+         spawnReset: "classic:enableSpawnResetDescription",
+         smpMarketplace: "classic:enableSmpMarketplaceDescription",
+         survivalGuns: "classic:enableSurvivalGunsDescription",
+         dayNight: "classic:enableDayNightDescription"
```

#### 13. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19436` → after: `L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L200) · [Before (L19436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L19436)

```diff
-   6246: (GG, bG, ZG) => {
+   5335: (MM, rM, iM) => {
```

#### 14. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19438-L19439` → after: `L202-L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L202-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L202-L204) · [Before (L19438-L19439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L19438-L19439)

```diff
-       e: () => kG,
-       i: () => fG,
+       g: () => Sr,
+       d: () => Or,
+       f: () => ir,
```

#### 15. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19442` → after: `L207-L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L207-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L207-L224) · [Before (L19442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L19442)

```diff
-     ZG(5441), ZG(51), ZG(5279);
+     var OM = iM(44),
+       SM = iM(1429),
+       jM = iM(1520),
+       aM = iM(1763),
+       PM = iM(1188),
+       nM = iM(1396),
+       QM = iM(1440),
+       zM = iM(1398),
+       LM = iM(1229),
+       mM = iM(1116),
+       HM = iM.n(mM),
+       hM = iM(313),
+       JM = iM(5003),
+       dM = iM(1242),
+       yM = iM(5343),
+       lM = iM(3530),
+ ... (2 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19445-L19449` → after: `L227-L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L227-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L227-L256) · [Before (L19445-L19449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L19445-L19449)

```diff
-       return wG = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(GG) {
-         return typeof GG
-       } : function(GG) {
-         return GG && "function" == typeof Symbol && GG.constructor === Symbol && GG !== Symbol.prototype ? "symbol" : typeof GG
-       }, wG(GG)
+       let {
+         icon: rM,
+         title: iM,
+         disabled: OM,
+         children: SM
+       } = MM;
+       return (0, UM.jsxs)("div", {
+         className: HM()("ManageCard", {
+           ManageCardDisabled: OM
+         }),
+         children: [(0, UM.jsxs)("div", {
+           className: "ManageCardHead",
+           children: [(0, UM.jsx)("div", {
+             className: "ManageCardIcon",
+             children: (0, UM.jsx)(zM.b, {
+               name: rM
+ ... (14 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19452-L19460` → after: `L259-L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L259-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L259-L274) · [Before (L19452-L19460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L19452-L19460)

```diff
-     function SG(GG, bG) {
-       var ZG = Object.keys(GG);
-       if (Object.getOwnPropertySymbols) {
-         var wG = Object.getOwnPropertySymbols(GG);
-         bG && (wG = wG.filter((function(bG) {
-           return Object.getOwnPropertyDescriptor(GG, bG).enumerable
-         }))), ZG.push.apply(ZG, wG)
-       }
-       return ZG
+     function CM(MM) {
+       let {
+         label: rM,
+         caption: iM,
+         children: OM
+       } = MM;
+       return (0, UM.jsxs)("div", {
+         className: "ManageStackedField",
+         children: [(0, UM.jsx)("div", {
+           className: "ManageStackedFieldLabel",
+           children: rM
+         }), OM, iM && (0, UM.jsx)("div", {
+           className: "ManageStackedFieldCaption",
+           children: iM
+         })]
+       })
```

#### 18. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19464-L19472` → after: `L278-L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L278-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L278-L301) · [Before (L19464-L19472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L19464-L19472)

```diff
-       for (var bG = 1; bG < arguments.length; bG++) {
-         var ZG = null != arguments[bG] ? arguments[bG] : {};
-         bG % 2 ? SG(Object(ZG), !0).forEach((function(bG) {
-           yG(GG, bG, ZG[bG])
-         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(GG, Object.getOwnPropertyDescriptors(ZG)) : SG(Object(ZG)).forEach((function(bG) {
-           Object.defineProperty(GG, bG, Object.getOwnPropertyDescriptor(ZG, bG))
-         }))
-       }
-       return GG
+       let {
+         label: rM,
+         caption: iM,
+         disabled: OM,
+         children: SM
+       } = MM;
+       return (0, UM.jsxs)("div", {
+         className: HM()("ManageField", {
+           ManageFieldDisabled: OM
+         }),
+         children: [(0, UM.jsxs)("div", {
+           className: "ManageFieldText",
+           children: [(0, UM.jsx)("div", {
+             className: "ManageFieldLabel",
+             children: rM
+           }), (0, UM.jsx)("div", {
+ ... (8 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19475-L19575` → after: `L304-L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L304-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L304-L341) · [Before (L19475-L19575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L19475-L19575)

```diff
-     function yG(GG, bG, ZG) {
-       return (bG = function(GG) {
-         var bG = function(GG, bG) {
-           if ("object" != wG(GG) || !GG) return GG;
-           var ZG = GG[Symbol.toPrimitive];
-           if (void 0 !== ZG) {
-             var SG = ZG.call(GG, bG || "default");
-             if ("object" != wG(SG)) return SG;
-             throw new TypeError("@@toPrimitive must return a primitive value.")
-           }
-           return ("string" === bG ? String : Number)(GG)
-         }(GG, "string");
-         return "symbol" == wG(bG) ? bG : bG + ""
-       }(bG)) in GG ? Object.defineProperty(GG, bG, {
-         value: ZG,
-         enumerable: !0,
- ... (85 more removed lines; see GitHub link above)
+     function bM(MM) {
+       var rM, iM;
+       let {
+         schematicData: OM,
+         updateSchematicData: SM,
+         publishFormEnabled: jM,
+         formEnabled: aM
+       } = MM;
+       const {
+         t: nM
+       } = (0, PM.A)(), QM = !jM, zM = {
+         tpRequests: {
+           isEnabled: () => !OM.disableTpRequests,
+           kR: MM => SM("disableTpRequests", !MM)
+         },
+         spawnProtection: {
+ ... (22 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19577-L19627` → after: `L343-L528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L343-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L343-L528) · [Before (L19577-L19627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L19577-L19627)

```diff
-         return fG ? LG(LG({}, bG), {}, {
-           radius: yG,
-           angle: pG(dG, bG)
-         }) : null
-       }
-   },
-   5452: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       b: () => lG,
-       d: () => mG,
-       g: () => IG,
-       j: () => uG,
-       l: () => AG,
-       m: () => cG,
-       n: () => jG,
-       o: () => sG,
- ... (35 more removed lines; see GitHub link above)
+       };
+       return (0, UM.jsxs)(UM.Fragment, {
+         children: [!1 === OM.schematicContainsSpawnBlock && (0, UM.jsx)("div", {
+           className: "ManageWarningBanner",
+           children: nM("worldBuilder:mustContainSpawnBlock")
+         }), (0, UM.jsxs)("div", {
+           className: "ManageSettingsGrid",
+           children: [(0, UM.jsxs)(GM, {
+             icon: "globe",
+             title: nM("worldBuilder:worldRulesSection"),
+             disabled: !aM,
+             children: [(0, UM.jsx)(eM, {
+               label: nM("classic:defaultGamemode"),
+               caption: nM("classic:defaultGamemodeDescription"),
+               disabled: QM,
+               children: (0, UM.jsx)(lM.e, {
+ ... (170 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19633-L19675` → after: `L538-L682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L538-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L538-L682) · [Before (L19633-L19675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L19633-L19675)

```diff
-       return oG = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(GG) {
-         return typeof GG
-       } : function(GG) {
-         return GG && "function" == typeof Symbol && GG.constructor === Symbol && GG !== Symbol.prototype ? "symbol" : typeof GG
-       }, oG(GG)
-     }
-     var XG = {
-         click: "onClick",
-         mousedown: "onMouseDown",
-         mouseup: "onMouseUp",
-         mouseover: "onMouseOver",
-         mousemove: "onMouseMove",
-         mouseout: "onMouseOut",
-         mouseenter: "onMouseEnter",
-         mouseleave: "onMouseLeave",
-         touchcancel: "onTouchCancel",
- ... (27 more removed lines; see GitHub link above)
+       var rM;
+       let {
+         schematicId: iM,
+         hasReadUploadPolicy: SM,
+         onPolicyValidationError: nM,
+         onThumbnailReady: QM
+       } = MM;
+       const {
+         t: mM
+       } = (0, PM.A)(), [hM, JM] = (0, OM.useState)(null), [dM, yM] = (0, OM.useState)(""), [lM, EM] = (0, OM.useState)(""), [GM, CM] = (0, OM.useState)(!0), [eM, bM] = (0, OM.useState)(!1), wM = (0, OM.useRef)(!1), [tM, gM] = (0, OM.useState)(null), [uM, RM] = (0, OM.useState)(!1 … [truncated]
+         getRootProps: kM,
+         getInputProps: YM,
+         isDragActive: NM
+       } = (0, WM.e)({
+         accept: {
+           "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"]
+ ... (129 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19678-L19680` → after: `L686-L846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L686-L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L686-L846) · [Before (L19678-L19680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L19678-L19680)

```diff
-     function IG(GG, bG) {
-       var ZG = mG(GG, bG);
-       return ZG && ZG[0]
+     function xM(MM) {
+       let {
+         schematicId: rM,
+         ownedThumbnailCount: iM,
+         onClose: SM,
+         onThumbnailReady: jM
+       } = MM;
+       const {
+         t: aM
+       } = (0, PM.A)(), {
+         userContext: nM
+       } = (0, RM.b)(), [QM, mM] = (0, OM.useState)(!1), [hM, JM] = (0, OM.useState)(!1), [dM, yM] = (0, OM.useState)(!1), lM = (0, OM.useRef)();
+       (0, OM.useEffect)((() => () => {
+         clearTimeout(lM.current)
+       }), []);
+       const EM = function(MM, rM) {
+ ... (145 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19682-L19694` → after: `L848-L852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L848-L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L848-L852) · [Before (L19682-L19694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L19682-L19694)

```diff
-     var FG = function(GG) {
-         if (!GG || !GG.props) return !1;
-         var bG = GG.props,
-           ZG = bG.width,
-           wG = bG.height;
-         return !(!(0, hG.x)(ZG) || ZG <= 0 || !(0, hG.x)(wG) || wG <= 0)
-       },
-       vG = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMat … [truncated]
-       aG = function(GG) {
-         return GG && GG.type && UG()(GG.type) && vG.indexOf(GG.type) >= 0
-       },
-       cG = function(GG) {
-         return GG && "object" === oG(GG) && "clipDot" in GG
+     var vM = iM(1202);
+     const FM = {
+       "custom-game-bad-thumbnail": {
+         reason: "thumbnail:rejectionInappropriate",
+         tips: ["thumbnail:rejectionInappropriateTip1", "thumbnail:rejectionInappropriateTip2", "thumbnail:rejectionInappropriateTip3"]
```

#### 24. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19696-L19707` → after: `L854-L856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L854-L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L854-L856) · [Before (L19696-L19707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L19696-L19707)

```diff
-       lG = function(GG, bG, ZG) {
-         if (!GG || "function" === typeof GG || "boolean" === typeof GG) return null;
-         var wG = GG;
-         if ((0, QG.isValidElement)(GG) && (wG = GG.props), !fG()(wG)) return null;
-         var SG = {};
-         return Object.keys(wG).forEach((function(GG) {
-           var LG;
-           (function(GG, bG, ZG, wG) {
-             var SG, LG = null !== (SG = null === JG.d || void 0 === JG.d ? void 0 : JG.d[wG]) && void 0 !== SG ? SG : [];
-             return bG.startsWith("data-") || !VG()(GG) && (wG && LG.includes(bG) || JG.e.includes(bG)) || ZG && JG.b.includes(bG)
-           })(null === (LG = wG) || void 0 === LG ? void 0 : LG[GG], GG, bG, ZG) && (SG[GG] = wG[GG])
-         })), SG
+       "thumbnail-copyright-content": {
+         reason: "thumbnail:rejectionCopyright",
+         tips: ["thumbnail:rejectionCopyrightTip1", "thumbnail:rejectionCopyrightTip2", "thumbnail:rejectionCopyrightTip3"]
```

#### 25. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19709-L19722` → after: `L858-L860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L858-L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L858-L860) · [Before (L19709-L19722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L19709-L19722)

```diff
-       jG = function GG(bG, ZG) {
-         if (bG === ZG) return !0;
-         var wG = QG.Children.count(bG);
-         if (wG !== QG.Children.count(ZG)) return !1;
-         if (0 === wG) return !0;
-         if (1 === wG) return PG(Array.isArray(bG) ? bG[0] : bG, Array.isArray(ZG) ? ZG[0] : ZG);
-         for (var SG = 0; SG < wG; SG++) {
-           var LG = bG[SG],
-             yG = ZG[SG];
-           if (Array.isArray(LG) || Array.isArray(yG)) {
-             if (!GG(LG, yG)) return !1
-           } else if (!PG(LG, yG)) return !1
-         }
-         return !0
+       "thumbnail-random-irrelevant-content": {
+         reason: "thumbnail:rejectionIrrelevant",
+         tips: ["thumbnail:rejectionIrrelevantTip1", "thumbnail:rejectionIrrelevantTip2", "thumbnail:rejectionIrrelevantTip3"]
```

#### 26. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19724-L19735` → after: `L862-L864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L862-L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L862-L864) · [Before (L19724-L19735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L19724-L19735)

```diff
-       PG = function(GG, bG) {
-         if (yG()(GG) && yG()(bG)) return !0;
-         if (!yG()(GG) && !yG()(bG)) {
-           var ZG = GG.props || {},
-             wG = ZG.children,
-             SG = EG(ZG, rG),
-             LG = bG.props || {},
-             kG = LG.children,
-             UG = EG(LG, zG);
-           return wG && kG ? (0, dG.c)(SG, UG) && jG(wG, kG) : !wG && !kG && (0, dG.c)(SG, UG)
-         }
-         return !1
+       "thumbnail-sexual-content": {
+         reason: "thumbnail:rejectionSexual",
+         tips: ["thumbnail:rejectionSexualTip1", "thumbnail:rejectionSexualTip2", "thumbnail:rejectionSexualTip3"]
```

#### 27. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19737-L19752` → after: `L866-L868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L866-L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L866-L868) · [Before (L19737-L19752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L19737-L19752)

```diff
-       MG = function(GG, bG) {
-         var ZG = [],
-           wG = {};
-         return WG(GG).forEach((function(GG, SG) {
-           if (aG(GG)) ZG.push(GG);
-           else if (GG) {
-             var LG = uG(GG.type),
-               yG = bG[LG] || {},
-               kG = yG.handler,
-               UG = yG.once;
-             if (kG && (!UG || !wG[LG])) {
-               var YG = kG(GG, LG, SG);
-               ZG.push(YG), wG[LG] = !0
-             }
-           }
-         })), ZG
+       "thumbnail-substances-content": {
+         reason: "thumbnail:rejectionSubstances",
+         tips: ["thumbnail:rejectionSubstancesTip1", "thumbnail:rejectionSubstancesTip2"]
```

#### 28. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19754-L19756` → after: `L870-L872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L870-L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L870-L872) · [Before (L19754-L19756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L19754-L19756)

```diff
-       AG = function(GG) {
-         var bG = GG && GG.type;
-         return bG && XG[bG] ? XG[bG] : null
+       "thumbnail-unauthorized-bloxd-branding": {
+         reason: "thumbnail:rejectionUnauthorisedBranding",
+         tips: ["thumbnail:rejectionUnauthorisedBrandingTip1", "thumbnail:rejectionUnauthorisedBrandingTip2", "thumbnail:rejectionUnauthorisedBrandingTip3", "thumbnail:rejectionUnauthorisedBrandingTip4"]
```

#### 29. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19758-L19759` → after: `L874-L876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L874-L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L874-L876) · [Before (L19758-L19759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L19758-L19759)

```diff
-       sG = function(GG, bG) {
-         return WG(bG).indexOf(GG)
+       "thumbnail-violent-gore-content": {
+         reason: "thumbnail:rejectionViolence",
+         tips: ["thumbnail:rejectionViolenceTip1", "thumbnail:rejectionViolenceTip2", "thumbnail:rejectionViolenceTip3", "thumbnail:rejectionViolenceTip4"]
```

#### 30. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19761-L19780` → after: `L878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L878) · [Before (L19761-L19780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L19761-L19780)

```diff
-   },
-   5465: (GG, bG, ZG) => {
-     function wG(GG, bG) {
-       for (var ZG in GG)
-         if ({}.hasOwnProperty.call(GG, ZG) && (!{}.hasOwnProperty.call(bG, ZG) || GG[ZG] !== bG[ZG])) return !1;
-       for (var wG in bG)
-         if ({}.hasOwnProperty.call(bG, wG) && !{}.hasOwnProperty.call(GG, wG)) return !1;
-       return !0
-     }
-     ZG.d(bG, {
-       c: () => wG
-     })
-   },
-   6234: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       d: () => VG
- ... (4 more removed lines; see GitHub link above)
+     };
```

#### 31. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19783-L19788` → after: `L881-L893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L881-L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L881-L893) · [Before (L19783-L19788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L19783-L19788)

```diff
-       return yG = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(GG) {
-         return typeof GG
-       } : function(GG) {
-         return GG && "function" == typeof Symbol && GG.constructor === Symbol && GG !== Symbol.prototype ? "symbol" : typeof GG
-       }, yG(GG)
-     }
+       var rM, iM;
+       let {
+         schematicData: aM,
+         updateSchematicData: QM,
+         publishFormEnabled: LM,
+         onClose: mM
+       } = MM;
+       const {
+         t: hM
+       } = (0, PM.A)(), {
+         userContext: JM,
+         isUserContextUpdating: dM
+       } = (0, RM.b)(), yM = (0, uM.b)(), [lM, EM] = (0, OM.useState)([]), [GM, CM] = (0, OM.useState)([]), [eM, bM] = (0, OM.useState)(!0), [wM, tM] = (0, OM.useState)(null !== (rM = aM.customThumbnailId) && void 0 !== rM ? rM : null), [WM, sM] = (0, OM.useState)(null), DM = (0,  … [truncated]
```

#### 32. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19790-L19796` → after: `L895-L924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L895-L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L895-L924) · [Before (L19790-L19796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L19790-L19796)

```diff
-     function kG(GG, bG) {
-       var ZG = Object.keys(GG);
-       if (Object.getOwnPropertySymbols) {
-         var wG = Object.getOwnPropertySymbols(GG);
-         bG && (wG = wG.filter((function(bG) {
-           return Object.getOwnPropertyDescriptor(GG, bG).enumerable
-         }))), ZG.push.apply(ZG, wG)
+       function NM(MM, rM) {
+         fM.current && (clearTimeout(fM.current), fM.current = null), sM(MM), null !== MM && rM && (fM.current = setTimeout((() => {
+           sM(null), fM.current = null
+         }), 5e3))
+       }(0, OM.useEffect)((() => () => {
+         clearTimeout(oM.current), clearTimeout(fM.current)
+       }), []);
+       const AM = (0, OM.useCallback)((() => {
+         bM(!0), gM.c.getOwnedThumbnails(JM).then((MM => {
+           const rM = [],
+             iM = [];
+           for (const OM of MM.thumbnails) OM.rejectionPolicyId ? rM.push(OM) : iM.push(OM);
+           rM.sort(((MM, rM) => MM.lastUpdatedAt - rM.lastUpdatedAt)), iM.sort(((MM, rM) => {
+             const iM = MM.approved ? 1 : 0,
+               OM = (rM.approved ? 1 : 0) - iM;
+             return 0 !== OM ? OM : rM.lastUpdatedAt - MM.lastUpdatedAt
+ ... (14 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19801-L19807` → after: `L927-L942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L927-L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L927-L942) · [Before (L19801-L19807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L19801-L19807)

```diff
-     function UG(GG) {
-       for (var bG = 1; bG < arguments.length; bG++) {
-         var ZG = null != arguments[bG] ? arguments[bG] : {};
-         bG % 2 ? kG(Object(ZG), !0).forEach((function(bG) {
-           YG(GG, bG, ZG[bG])
-         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(GG, Object.getOwnPropertyDescriptors(ZG)) : kG(Object(ZG)).forEach((function(bG) {
-           Object.defineProperty(GG, bG, Object.getOwnPropertyDescriptor(ZG, bG))
+       function BM() {
+         kM.current = Date.now(), oM.current = null;
+         const MM = ZM.current;
+         ZM.current = null, NM({
+           text: hM("thumbnail:settingThumbnail"),
+           type: "info"
+         }, !1), gM.c.setSchematicThumbnail(JM, aM.schematicId, MM).then((() => {
+           yM.current && (NM({
+             text: hM("thumbnail:thumbnailUpdated"),
+             type: "success"
+           }, !0), DM.current = MM, QM("customThumbnailId", MM), QM("customThumbnailBlurhash", void 0), QM("customThumbnailVariants", void 0))
+         })).catch((MM => {
+           yM.current && (NM({
+             text: MM.errorMessageForUser ? hM(MM.errorMessageForUser, MM.errorMessageTranslationParams) : hM("thumbnail:failedToSetThumbnail"),
+             type: "error"
+           }, !0), tM(DM.current))
```

#### 34. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19813-L19871` → after: `L946-L1084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L946-L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L946-L1084) · [Before (L19813-L19871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L19813-L19871)

```diff
-     function YG(GG, bG, ZG) {
-       return (bG = function(GG) {
-         var bG = function(GG, bG) {
-           if ("object" != yG(GG) || !GG) return GG;
-           var ZG = GG[Symbol.toPrimitive];
-           if (void 0 !== ZG) {
-             var wG = ZG.call(GG, bG || "default");
-             if ("object" != yG(wG)) return wG;
-             throw new TypeError("@@toPrimitive must return a primitive value.")
-           }
-           return ("string" === bG ? String : Number)(GG)
-         }(GG, "string");
-         return "symbol" == yG(bG) ? bG : bG + ""
-       }(bG)) in GG ? Object.defineProperty(GG, bG, {
-         value: ZG,
-         enumerable: !0,
- ... (43 more removed lines; see GitHub link above)
+       function KM(MM) {
+         tM(MM), ZM.current = MM;
+         const rM = Date.now() - kM.current;
+         rM >= 1e3 ? BM() : (NM({
+           text: hM("thumbnail:settingThumbnail"),
+           type: "info"
+         }, !1), oM.current || (oM.current = setTimeout((() => {
+           BM()
+         }), 1e3 - rM)))
+       }
+       return (0, OM.useEffect)((() => {
+         !1 === dM && AM()
+       }), [dM, AM]), GM.length > 0 ? (0, UM.jsx)(XM, {
+         rejectedThumbnails: GM,
+         userContext: JM,
+         isMountedRef: yM,
+ ... (123 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19901-L19905` → after: `L1089-L1174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1089-L1174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L1089-L1174) · [Before (L19901-L19905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L19901-L19905)

```diff
-       return yG = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(GG) {
-         return typeof GG
-       } : function(GG) {
-         return GG && "function" == typeof Symbol && GG.constructor === Symbol && GG !== Symbol.prototype ? "symbol" : typeof GG
-       }, yG(GG)
+       let {
+         rejectedThumbnails: rM,
+         userContext: iM,
+         isMountedRef: SM,
+         onAcknowledged: aM
+       } = MM;
+       const {
+         t: QM
+       } = (0, PM.A)(), [LM, mM] = (0, OM.useState)(!1), [HM, hM] = (0, OM.useState)(!1), JM = function(MM) {
+         const rM = new Map;
+         for (const iM of MM) {
+           const MM = iM.rejectionPolicyId,
+             OM = rM.get(MM);
+           OM ? OM.push(iM) : rM.set(MM, [iM])
+         }
+         return rM
+ ... (70 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19956-L20068` → after: `L1178-L1218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1178-L1218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L1178-L1218) · [Before (L19956-L20068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L19956-L20068)

```diff
-       if ("object" === typeof GG && null !== GG) {
-         var bG = GG.$$typeof;
-         switch (bG) {
-           case wG:
-             switch (GG = GG.type) {
-               case LG:
-               case kG:
-               case yG:
-               case fG:
-               case QG:
-                 return GG;
-               default:
-                 switch (GG = GG && GG.$$typeof) {
-                   case VG:
-                   case YG:
-                   case pG:
- ... (97 more removed lines; see GitHub link above)
+       let {
+         thumbnailId: rM,
+         thumbnailName: iM,
+         onClose: OM
+       } = MM;
+       const {
+         t: SM
+       } = (0, PM.A)();
+       return (0, UM.jsxs)("div", {
+         className: "ThumbnailDeleteConfirm",
+         children: [(0, UM.jsx)("div", {
+           className: "ThumbnailDeleteConfirmTitle",
+           children: SM("thumbnail:deleteThumbnail")
+         }), (0, UM.jsxs)("div", {
+           className: "ThumbnailDeleteConfirmImageContainer",
+           children: [(0, UM.jsx)("img", {
+ ... (25 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20072-L20094` → after: `L1226-L1234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1226-L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L1226-L1234) · [Before (L20072-L20094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L20072-L20094)

```diff
-       var bG = GG.copy;
-       return GG.padding = GG.paddingOuter, delete GG.paddingInner, delete GG.paddingOuter, GG.copy = function() {
-         return yG(bG())
-       }, GG
-     }
- 
-     function kG() {
-       return yG(LG.apply(null, arguments).paddingInner(1))
-     }
-   },
-   6170: (GG, bG, ZG) => {
-     function wG(GG, bG) {
-       switch (arguments.length) {
-         case 0:
-           break;
-         case 1:
- ... (7 more removed lines; see GitHub link above)
+       let {
+         schematicData: rM,
+         setTexturePack: iM,
+         initializeTexturePack: SM,
+         publishFormEnabled: jM
+       } = MM;
+       const {
+         t: aM
+       } = (0, PM.A)(), [nM, QM] = (0, OM.useState)(null), [zM, LM] = (0, OM.useState)(null), [mM, hM] = (0, OM.useState)(!1), JM = (0, uM.b)(), dM = jM && !mM, yM = rM.customTexturePackKey;
```

#### 38. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20096-L20104` → after: `L1236-L1238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1236-L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L1236-L1238) · [Before (L20096-L20104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L20096-L20104)

```diff
-     function SG(GG, bG) {
-       switch (arguments.length) {
-         case 0:
-           break;
-         case 1:
-           "function" === typeof GG ? this.interpolator(GG) : this.range(GG);
-           break;
-         default:
-           this.domain(GG), "function" === typeof bG ? this.interpolator(bG) : this.range(bG)
+       function lM(MM) {
+         var rM;
+         QM(MM.metaData.id), LM(null !== (rM = MM.metaData.fromFolderName) && void 0 !== rM ? rM : null), (MM.metaData.id !== KM.o.CUSTOM || MM.metaData.fromFolderName) && iM(MM)
```

#### 39. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20106-L20123` → after: `L1240-L1262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1240-L1262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L1240-L1262) · [Before (L20106-L20123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L20106-L20123)

```diff
-       return this
-     }
-     ZG.d(bG, {
-       b: () => SG,
-       e: () => wG
-     })
-   },
-   6174: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       b: () => VG,
-       d: () => YG
-     });
-     class wG extends Map {
-       constructor(GG) {
-         let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kG;
-         if (super(), Object.defineProperties(this, {
- ... (2 more removed lines; see GitHub link above)
+       return (0, OM.useEffect)((() => {
+         yM && (hM(!0), (0, qM.d)(yM).then((MM => {
+           var rM;
+           JM.current && (MM ? (QM(MM.metaData.id), LM(null !== (rM = MM.metaData.fromFolderName) && void 0 !== rM ? rM : null), SM(MM)) : console.error(`No texture pack at ${yM}`))
+         })).catch((MM => {
+           console.error("Error fetching texture pack: ", MM)
+         })).finally((() => {
+           hM(!1)
+         })))
+       }), [yM, SM, JM]), (0, UM.jsxs)("div", {
+         className: "BloxdForm TexturePackSection",
+         children: [(0, UM.jsx)("div", {
+           className: "SectionTitle",
+           children: aM("customTexturePack:customTexturePack")
+         }), (0, UM.jsxs)("div", {
+           className: "TexturePackList",
+ ... (7 more added lines; see GitHub link above)
```

#### 40. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20125-L20142` → after: `L1264-L1281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1264-L1281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L1264-L1281) · [Before (L20125-L20142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L20125-L20142)

```diff
-             _key: {
-               value: bG
-             }
-           }), null != GG)
-           for (const [ZG, wG] of GG) this.set(ZG, wG)
-       }
-       get(GG) {
-         return super.get(SG(this, GG))
-       }
-       has(GG) {
-         return super.has(SG(this, GG))
-       }
-       set(GG, bG) {
-         return super.set(LG(this, GG), bG)
-       }
-       delete(GG) {
- ... (2 more removed lines; see GitHub link above)
+             children: (0, UM.jsx)("div", {
+               className: "TexturePackName",
+               children: "No Override"
+             })
+           }), Object.values(KM.o).map((MM => (0, UM.jsx)(TM.e, {
+             id: MM,
+             isSelected: MM === nM,
+             setSelected: lM,
+             disabled: !dM
+           }, MM)))]
+         }), nM === KM.o.CUSTOM && (0, UM.jsx)(VM.e, {
+           folderName: zM,
+           onTexturePackUpdated: lM,
+           disabled: !dM,
+           maxFileSizeMb: 25,
+           packOwner: "customGame"
+ ... (2 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20144` → after: `L1283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L1283) · [Before (L20144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L20144)

```diff
-     Set;
+     var Mr = iM(5468);
```

#### 42. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20146` → after: `L1285-L1286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1285-L1286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L1285-L1286) · [Before (L20146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L20146)

```diff
-     function SG(GG, bG) {
+     function rr(MM) {
+       var rM;
```

#### 43. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20148-L20149` → after: `L1288-L1290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1288-L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L1288-L1290) · [Before (L20148-L20149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L20148-L20149)

```diff
-         _intern: ZG,
-         _key: wG
+         gameCategory: iM,
+         setGameCategory: OM,
+         disabled: SM
```

#### 44. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20151-L20152` → after: `L1292-L1324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1292-L1324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L1292-L1324) · [Before (L20151-L20152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L20151-L20152)

```diff
-       const SG = wG(bG);
-       return ZG.has(SG) ? ZG.get(SG) : bG
+       const aM = null !== (rM = (0, hM._)(iM)) && void 0 !== rM ? rM : "other";
+       return (0, UM.jsxs)("div", {
+         className: "GameCategoryPicker",
+         children: [(0, UM.jsx)(yM.d, {
+           label: "worldBuilder:gameCategoryGroup",
+           className: "GameCategoryGroup",
+           disabled: SM,
+           children: (0, UM.jsx)(lM.e, {
+             options: hM.P.map((MM => ({
+               value: MM,
+               label: hM.O[MM]
+             }))),
+             value: aM,
+             onChange: MM => {
+               MM.value !== aM && OM(hM.M[MM.value][0])
+             }
+ ... (17 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20155` → after: `L1327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L1327) · [Before (L20155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L20155)

```diff
-     function LG(GG, bG) {
+     function ir(MM) {
```

#### 46. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20157-L20158` → after: `L1329-L1338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1329-L1338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L1329-L1338) · [Before (L20157-L20158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L20157-L20158)

```diff
-         _intern: ZG,
-         _key: wG
+         editor: rM,
+         onClose: iM
+       } = MM;
+       const {
+         t: OM
+       } = (0, PM.A)(), {
+         schematicData: SM,
+         updateSchematicData: jM,
+         publishFormEnabled: nM,
+         formEnabled: QM
```

#### 47. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20160-L20161` → after: `L1340-L1393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1340-L1393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L1340-L1393) · [Before (L20160-L20161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L20160-L20161)

```diff
-       const SG = wG(bG);
-       return ZG.has(SG) ? ZG.get(SG) : (ZG.set(SG, bG), bG)
+       return (0, UM.jsxs)(UM.Fragment, {
+         children: [(0, UM.jsxs)(GM, {
+           icon: "pen-to-square",
+           title: OM("worldBuilder:basicsSection"),
+           disabled: !QM,
+           children: [(0, UM.jsx)(CM, {
+             label: OM("general:name"),
+             caption: OM("worldBuilder:schematicNameTagsHint"),
+             children: (0, UM.jsx)(aM.b, {
+               className: "SchematicPageName",
+               defaultValue: SM.name,
+               onValueChange: MM => jM("name", MM),
+               placeholderText: OM("worldBuilder:schematicNamePlaceholder"),
+               maxLength: LM.sb
+             })
+           }), (0, UM.jsx)(CM, {
+ ... (38 more added lines; see GitHub link above)
```

#### 48. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20164` → after: `L1396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L1396) · [Before (L20164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L20164)

```diff
-     function yG(GG, bG) {
+     function Or(MM) {
```

#### 49. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20166-L20167` → after: `L1398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L1398) · [Before (L20166-L20167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L20166-L20167)

```diff
-         _intern: ZG,
-         _key: wG
+         editor: rM
```

#### 50. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20169-L20170` → after: `L1400-L1431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1400-L1431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L1400-L1431) · [Before (L20169-L20170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L20169-L20170)

```diff
-       const SG = wG(bG);
-       return ZG.has(SG) && (bG = ZG.get(SG), ZG.delete(SG)), bG
+       const {
+         t: iM
+       } = (0, PM.A)(), {
+         schematicData: OM,
+         formEnabled: SM,
+         hasUnsavedChanges: aM
+       } = rM, LM = SM && aM;
+       return (0, UM.jsxs)("footer", {
+         className: "SchematicPageFooter",
+         children: [SM && aM && (0, UM.jsxs)("div", {
+           className: "SchematicPageFooterStatus",
+           children: [(0, UM.jsx)("span", {
+             className: "SchematicPageFooterStatusDot"
+           }), iM("worldBuilder:unsavedChanges")]
+         }), (0, UM.jsx)(QM.i, {
+           tooltipInner: (0, UM.jsx)("div", {
+ ... (16 more added lines; see GitHub link above)
```

#### 51. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20174-L20183` → after: `L1435-L1443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1435-L1443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L1435-L1443) · [Before (L20174-L20183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L20174-L20183)

```diff
-       return null !== GG && "object" === typeof GG ? GG.valueOf() : GG
-     }
-     var UG = ZG(6170);
-     const YG = Symbol("implicit");
- 
-     function VG() {
-       var GG = new wG,
-         bG = [],
-         ZG = [],
-         SG = YG;
+       let {
+         schematic: rM,
+         onSchematicUpdate: iM,
+         onClose: SM,
+         inSourceWorld: aM
+       } = MM;
+       const {
+         t: nM
+       } = (0, PM.A)();
```

#### 52. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20185-L20191` → after: `L1445-L1446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1445-L1446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L1445-L1446) · [Before (L20185-L20191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L20185-L20191)

```diff
-       function LG(wG) {
-         let LG = GG.get(wG);
-         if (void 0 === LG) {
-           if (SG !== YG) return SG;
-           GG.set(wG, LG = bG.push(wG) - 1)
-         }
-         return ZG[LG % ZG.length]
+       function QM() {
+         null === SM || void 0 === SM || SM()
```

#### 53. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20193-L20204` → after: `L1448-L1495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1448-L1495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L1448-L1495) · [Before (L20193-L20204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L20193-L20204)

```diff
-       return LG.domain = function(ZG) {
-         if (!arguments.length) return bG.slice();
-         bG = [], GG = new wG;
-         for (const wG of ZG) GG.has(wG) || GG.set(wG, bG.push(wG) - 1);
-         return LG
-       }, LG.range = function(GG) {
-         return arguments.length ? (ZG = Array.from(GG), LG) : ZG.slice()
-       }, LG.unknown = function(GG) {
-         return arguments.length ? (SG = GG, LG) : SG
-       }, LG.copy = function() {
-         return VG(bG, ZG).unknown(SG)
-       }, UG.e.apply(LG, arguments), LG
+       const zM = (0, Mr.d)(rM, {
+         onNavigateAway: QM,
+         inSourceWorld: aM
+       });
+       return (0, OM.useEffect)((() => {
+         null === iM || void 0 === iM || iM(zM.schematicData)
+       }), [zM.schematicData, iM]), (0, UM.jsxs)("div", {
+         className: "SchematicPage SchematicPagePopupVariant",
+         children: [(0, UM.jsxs)("div", {
+           className: "SchematicPageBody",
+           children: [(0, UM.jsx)(jM.c, {
+             onClick: QM,
+             children: nM("worldBuilder:back")
+           }), (0, UM.jsx)(GM, {
+             icon: "rocket-launch",
+             title: nM("worldBuilder:actionsSection"),
+ ... (32 more added lines; see GitHub link above)
```

#### 54. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20207` → after: `L1498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L1498) · [Before (L20207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L20207)

```diff
-   6239: (GG, bG, ZG) => {
+   5362: (MM, rM, iM) => {
```

#### 55. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20209` → after: `L1500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L1500) · [Before (L20209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L20209)

```diff
-       c: () => wG
+       b: () => LM
```

#### 56. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20211` → after: `L1502-L1509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1502-L1509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L1502-L1509) · [Before (L20211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L20211)

```diff
-     Array.prototype.slice;
+     var OM = iM(1116),
+       SM = iM.n(OM),
+       jM = iM(1188),
+       aM = iM(1398),
+       PM = iM(1520),
+       nM = iM(1440),
+       QM = iM(1396),
+       zM = iM(1303);
```

#### 57. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20214` → after: `L1512-L1570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1512-L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L1512-L1570) · [Before (L20214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L20214)

```diff
-       return "object" === typeof GG && "length" in GG ? GG : Array.from(GG)
+       let {
+         editor: rM,
+         className: iM
+       } = MM;
+       const {
+         t: OM
+       } = (0, jM.A)(), {
+         schematicData: LM,
+         formEnabled: mM,
+         publishFormEnabled: HM
+       } = rM, hM = !mM || !HM;
+       return (0, zM.jsxs)("div", {
+         className: SM()("PublishButtonContainer", iM),
+         children: [rM.canEditSourceWorld && (0, zM.jsxs)(PM.e, {
+           onClick: rM.editSourceWorld,
+           disabled: hM,
+ ... (43 more added lines; see GitHub link above)
```

#### 58. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20217-L20222` → after: `L1573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L1573) · [Before (L20217-L20222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L20217-L20222)

```diff
-   6126: (GG, bG, ZG) => {
-     function wG(GG) {
-       return function() {
-         return GG
-       }
-     }
+   5388: (MM, rM, iM) => {
```

#### 59. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20225` → after: `L1576-L1587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1576-L1587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L1576-L1587) · [Before (L20225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L20225)

```diff
-     })
+     });
+     var OM = iM(1202);
+     async function SM(MM) {
+       const rM = await fetch(`${OM.clientSideServerUrls.s3Url}/${MM}`, {
+         headers: {
+           Accept: "application/json"
+         }
+       });
+       if (404 === rM.status || 403 === rM.status) return null;
+       if (!rM.ok) throw new Error(`Failed to download the texture pack (${rM.status})`);
+       return await rM.json()
+     }
```

#### 60. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20227` → after: `L1589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L1589) · [Before (L20227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L20227)

```diff
-   6132: (GG, bG, ZG) => {
+   5468: (MM, rM, iM) => {
```

#### 61. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20229` → after: `L1591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L1591) · [Before (L20229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L20229)

```diff
-       e: () => YG
+       d: () => dM
```

#### 62. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20231-L20234` → after: `L1593-L1604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1593-L1604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L1593-L1604) · [Before (L20231-L20234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L20231-L20234)

```diff
-     const wG = Math.PI,
-       SG = 2 * wG,
-       LG = 1e-6,
-       yG = SG - LG;
+     var OM = iM(44),
+       SM = iM(1382),
+       jM = iM(1073),
+       aM = iM(143),
+       PM = iM(1630),
+       nM = iM(19),
+       QM = iM(2039),
+       zM = iM(1573),
+       LM = iM(4961),
+       mM = iM(1429),
+       HM = iM(1142),
+       hM = iM(1591);
```

#### 63. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20236-L20307` → after: `L1606-L1628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1606-L1628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L1606-L1628) · [Before (L20236-L20307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L20236-L20307)

```diff
-     function kG(GG) {
-       this._ += GG[0];
-       for (let bG = 1, ZG = GG.length; bG < ZG; ++bG) this._ += arguments[bG] + GG[bG]
-     }
-     class UG {
-       constructor(GG) {
-         this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = null == GG ? kG : function(GG) {
-           let bG = Math.floor(GG);
-           if (!(bG >= 0)) throw new Error(`invalid digits: ${GG}`);
-           if (bG > 15) return kG;
-           const ZG = 10 ** bG;
-           return function(GG) {
-             this._ += GG[0];
-             for (let bG = 1, wG = GG.length; bG < wG; ++bG) this._ += Math.round(arguments[bG] * ZG) / ZG + GG[bG]
-           }
-         }(GG)
- ... (56 more removed lines; see GitHub link above)
+     function JM(MM, rM) {
+       return {
+         schematicId: MM.schematicId,
+         name: MM.name,
+         description: MM.description,
+         gamePublished: rM,
+         gameCategory: MM.gameCategory,
+         defaultGamemode: MM.defaultGamemode,
+         voidDeathHeight: MM.voidDeathHeight,
+         disableKeepInventory: MM.disableKeepInventory,
+         disableTpRequests: MM.disableTpRequests,
+         disableLobbySpawn: MM.disableLobbySpawn,
+         disableMobs: MM.disableMobs,
+         disableSpawnProtection: MM.disableSpawnProtection,
+         disableFallDamage: MM.disableFallDamage,
+         worldBorder: MM.worldBorder,
+ ... (7 more added lines; see GitHub link above)
```

#### 64. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20312-L20331` → after: `L1633-L1641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1633-L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L1633-L1641) · [Before (L20312-L20331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L20312-L20331)

```diff
-       let bG = 3;
-       return GG.digits = function(ZG) {
-         if (!arguments.length) return bG;
-         if (null == ZG) bG = null;
-         else {
-           const GG = Math.floor(ZG);
-           if (!(GG >= 0)) throw new RangeError(`invalid digits: ${ZG}`);
-           bG = GG
-         }
-         return GG
-       }, () => new UG(bG)
-     }
-     UG.prototype
-   },
-   5957: (GG, bG, ZG) => {
-     ZG.d(bG, {
- ... (4 more removed lines; see GitHub link above)
+       let {
+         onNavigateAway: rM,
+         inSourceWorld: iM = !1
+       } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+       const {
+         userContext: dM
+       } = (0, HM.b)(), yM = (0, hM.useNavigatePreserveSearch)(), [lM, EM] = (0, OM.useState)({
+         ...MM
+       }), [UM, GM] = (0, OM.useState)("Enter"), [CM, eM] = (0, OM.useState)(void 0), bM = (0, OM.useRef)(JM(MM, MM.gamePublished)), wM = (0, OM.useRef)(void 0), tM = "Enter" === UM, gM = dM.playerHasRank("developer") || dM.playerHasRank("admin") || "Enter" === UM && !1 !== lM.sch … [truncated]
```

#### 65. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20333-L20338` → after: `L1643-L1717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1643-L1717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L1643-L1717) · [Before (L20333-L20338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L20333-L20338)

```diff
-     function LG(GG, bG) {
-       if (!GG) {
-         if (wG) throw new Error(SG);
-         var ZG = "function" === typeof bG ? bG() : bG,
-           LG = ZG ? "".concat(SG, ": ").concat(ZG) : SG;
-         throw new Error(LG)
+       function RM(MM, rM) {
+         EM((iM => ({
+           ...iM,
+           [MM]: rM
+         })))
+       }
+       const pM = (0, OM.useCallback)((MM => {
+         wM.current = MM, eM(MM)
+       }), []);
+ 
+       function WM(MM) {
+         GM("Loading");
+         const rM = JM(lM, MM),
+           iM = CM !== wM.current ? CM : void 0;
+         zM.c.updateSchematic(dM, rM, iM).then((iM => {
+           let {
+ ... (59 more added lines; see GitHub link above)
```

#### 66. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20341` → after: `L1720-L1721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1720-L1721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/119.js#L1720-L1721) · [Before (L20341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/119.js#L20341)

```diff
-   }
+   },
+   5348: () => {}
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/120.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/120.js` (21 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72)

#### 1. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L5-L30` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/120.js#L4-L6) · [Before (L5-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/120.js#L5-L30)

```diff
-   6445: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       Graph: () => qG,
-       debug: () => FZ,
-       default: () => aZ,
-       graphlib: () => LG,
-       layout: () => QZ,
-       util: () => vZ,
-       version: () => Lb
-     });
-     var wG = Object.defineProperty,
-       SG = (GG, bG, ZG) => ((GG, bG, ZG) => bG in GG ? wG(GG, bG, {
-         enumerable: !0,
-         configurable: !0,
-         writable: !0,
-         value: ZG
- ... (10 more removed lines; see GitHub link above)
+   37303: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => nM
```

#### 2. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L32-L498` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/120.js#L8-L12) · [Before (L32-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/120.js#L32-L498)

```diff
-     var yG = Object.defineProperty,
-       kG = (GG, bG) => {
-         for (var ZG in bG) yG(GG, ZG, {
-           get: bG[ZG],
-           enumerable: !0
-         })
-       },
-       UG = class {
-         constructor(GG) {
-           this._isDirected = !0, this._isMultigraph = !1, this._isCompound = !1, this._nodes = {}, this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {}, this._nodeCount = 0, this._edgeCount = 0, this._defaultNodeLabelFn = () … [truncated]
-         }
-         isDirected() {
-           return this._isDirected
-         }
-         isMultigraph() {
-           return this._isMultigraph
- ... (451 more removed lines; see GitHub link above)
+     var OM = iM(1116),
+       SM = iM.n(OM),
+       jM = iM(44),
+       aM = iM(4950),
+       PM = iM(1303);
```

#### 3. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L501-L704` → after: `L15-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L15-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/120.js#L15-L28) · [Before (L501-L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/120.js#L501-L704)

```diff
-       let bG = 0,
-         ZG = [],
-         wG = {},
-         SG = [];
- 
-       function LG(yG) {
-         var kG;
-         let UG = wG[yG] = {
-           onStack: !0,
-           lowlink: bG,
-           index: bG++
-         };
-         if (ZG.push(yG), null == (kG = GG.successors(yG)) || kG.forEach((function(GG) {
-             if (GG in wG) {
-               let bG = wG[GG];
-               null != bG && bG.onStack && (UG.lowlink = Math.min(UG.lowlink, bG.index))
- ... (188 more removed lines; see GitHub link above)
+       let {
+         locked: rM,
+         children: iM
+       } = MM;
+       const OM = (0, jM.useRef)(null),
+         nM = (0, aM.e)(OM, "y");
+       return (0, PM.jsx)("div", {
+         ref: OM,
+         className: SM()("CreateCustomLobbyBody", {
+           CreateCustomLobbyBodyMoreAbove: nM.before,
+           CreateCustomLobbyBodyMoreBelow: nM.after
+         }),
+         "data-pad-ignore": rM || void 0,
+         children: iM
```

#### 4. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L707-L738` → after: `L31-L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L31-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/120.js#L31-L48) · [Before (L707-L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/120.js#L707-L738)

```diff
-     var qG = UG;
- 
-     function nG(GG, bG, ZG, wG) {
-       let SG = wG;
-       for (; GG.hasNode(SG);) SG = BG(wG);
-       return ZG.dummy = bG, GG.setNode(SG, ZG), SG
-     }
- 
-     function gG(GG) {
-       let bG = new qG({
-         multigraph: GG.isMultigraph()
-       }).setGraph(GG.graph());
-       return GG.nodes().forEach((ZG => {
-         GG.children(ZG).length || bG.setNode(ZG, GG.node(ZG))
-       })), GG.edges().forEach((ZG => {
-         bG.setEdge(ZG, GG.edge(ZG))
- ... (16 more removed lines; see GitHub link above)
+   },
+   37384: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       showFirstWorldSetupPopup: () => JM
+     });
+     iM(5348), iM(37287);
+     var OM = iM(5003),
+       SM = iM(44),
+       jM = iM(4961),
+       aM = iM(1188),
+       PM = iM(1429),
+       nM = iM(37303),
+       QM = iM(5356),
+       zM = iM(1520),
+       LM = iM(3881),
+       mM = iM(37298),
+ ... (2 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L741-L752` → after: `L51-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L51-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/120.js#L51-L53) · [Before (L741-L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/120.js#L741-L752)

```diff
-       let bG = Gb(DG(GG) + 1).map((() => []));
-       return GG.nodes().forEach((ZG => {
-         let wG = GG.node(ZG),
-           SG = wG.rank;
-         void 0 !== SG && (bG[SG] || (bG[SG] = []), bG[SG][wG.order] = ZG)
-       })), bG
-     }
- 
-     function TG(GG, bG, ZG, wG) {
-       let SG = {
-         width: 0,
-         height: 0
+       const rM = {
+         requested: !1,
+         closed: !1
```
